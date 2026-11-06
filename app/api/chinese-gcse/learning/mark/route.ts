import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { writingTask } from "@/data/chineseGcse/week1";
export const runtime="nodejs";
export const maxDuration=60;
type Feedback={transcription:string;uncertain:string[];strengths:string[];improvements:string[];provisional_score:number;score_reason:string};
// Structured Outputs: require all fields. Empty arrays are legitimate when there is no evidence.
const feedbackSchema={
  type:"object",additionalProperties:false,
  properties:{
    transcription:{type:"string"},
    uncertain:{type:"array",items:{type:"string"}},
    strengths:{type:"array",items:{type:"string"}},
    improvements:{type:"array",items:{type:"string"}},
    provisional_score:{type:"number"},
    score_reason:{type:"string"}
  },
  required:["transcription","uncertain","strengths","improvements","provisional_score","score_reason"]
};
function isFeedback(value:any):value is Feedback {
  return !!value && typeof value==="object" &&
    typeof value.transcription==="string" &&
    Array.isArray(value.uncertain) && value.uncertain.every((x:unknown)=>typeof x==="string") &&
    Array.isArray(value.strengths) && value.strengths.every((x:unknown)=>typeof x==="string") &&
    Array.isArray(value.improvements) && value.improvements.every((x:unknown)=>typeof x==="string") &&
    typeof value.provisional_score==="number" && Number.isFinite(value.provisional_score) &&
    typeof value.score_reason==="string";
}
function textOut(raw:any):string {return (raw.output??[]).flatMap((o:any)=>o.content??[]).filter((c:any)=>c.type==="output_text").map((c:any)=>c.text).join("");}
export async function POST(request:Request){
  try{
    const token=request.headers.get("authorization")?.match(/^Bearer (.+)$/)?.[1];
    const url=process.env.NEXT_PUBLIC_SUPABASE_URL,pub=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,key=process.env.OPENAI_API_KEY;
    if(!token||!url||!pub) return NextResponse.json({error:"請先登入"},{status:401});
    if(!key) return NextResponse.json({error:"尚未設定 OpenAI API Key"},{status:503});
    const db=createClient(url,pub,{global:{headers:{Authorization:`Bearer ${token}`}},auth:{persistSession:false,autoRefreshToken:false}});
    const {data:{user},error:authError}=await db.auth.getUser(token);
    if(authError||!user) return NextResponse.json({error:"登入已失效"},{status:401});
    const body=await request.json().catch(()=>null);
    const uploadId=typeof body?.uploadId==="string"?body.uploadId:"";
    if(!/^[0-9a-f-]{36}$/i.test(uploadId)) return NextResponse.json({error:"無效檔案編號"},{status:400});
    const {data:upload,error:uploadError}=await db.from("chinese_stage3_uploads")
      .select("id,user_id,week,task_id,object_path,content_type").eq("id",uploadId).eq("user_id",user.id).eq("week",1).maybeSingle();
    if(uploadError||!upload||upload.task_id!=="school-message") return NextResponse.json({error:"沒有找到你的手寫答案"},{status:404});
    const old=await db.from("chinese_stage3_ai_reviews").select("feedback").eq("upload_id",uploadId).maybeSingle();
    if(old.data?.feedback) return NextResponse.json({ok:true,feedback:old.data.feedback,cached:true});
    // Simple daily soft quota for newly graded uploads (in addition to UI duplicate prevention).
    const since=new Date(Date.now()-24*60*60*1000).toISOString();
    const quota=await db.from("chinese_stage3_ai_reviews").select("upload_id",{count:"exact",head:true})
      .eq("user_id",user.id).gte("created_at",since);
    if(quota.error) return NextResponse.json({error:"暫時無法核對 AI 使用限額，請稍後再試"},{status:503});
    if((quota.count??0)>=3) return NextResponse.json({error:"今日已有三份 AI 初步批改，請明天再提交新原稿"},{status:429});
    if(!["image/jpeg","image/png","image/webp"].includes(upload.content_type)) return NextResponse.json({error:"只支援 JPG、PNG 或 WebP"},{status:400});
    const original=await db.storage.from("chinese-handwriting").download(upload.object_path);
    if(original.error||!original.data) return NextResponse.json({error:"原稿無法讀取"},{status:404});
    if(original.data.size > 5*1024*1024) return NextResponse.json({error:"每張圖片最多 5 MB"},{status:400});
    const image=Buffer.from(await original.data.arrayBuffer()).toString("base64");
    const response=await fetch("https://api.openai.com/v1/responses",{
      method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},
      body:JSON.stringify({
        model:process.env.OPENAI_CHINESE_MODEL||"gpt-4.1-mini",store:false,max_output_tokens:2400,
        instructions:"你是繁體中文初級寫作診斷老師。逐字轉錄圖片中的學生真正手寫內容，不要自動補字或糾錯；看不清的字用□並列在uncertain。評估應按三個英文要求是否回答、詞彙用法、完整句子及書寫準確性。評分0至10只是教學用暫定分數，不是GCSE官方分數。不要猜測筆畫是否正確。請嚴格只輸出 JSON object，key為transcription, uncertain, strengths, improvements, provisional_score, score_reason；所有說明用繁體中文。",
        input:[{role:"user",content:[{type:"input_text",text:`Please return valid JSON only. Original writing task: ${writingTask.instruction} Requirements: ${writingTask.requirements.join(" / ")}. Recognise the actual handwritten answer and assess it without supplying missing content.`},{type:"input_image",image_url:`data:${upload.content_type};base64,${image}`}]}],
        text:{format:{type:"json_schema",name:"handwriting_feedback",strict:true,schema:feedbackSchema}},
      }),signal:AbortSignal.timeout(45000)
    });
    if(!response.ok){
      const data=await response.json().catch(()=>null);
      console.error("[stage3-chinese-ai] OpenAI rejected",{status:response.status,code:data?.error?.code??"unknown",type:data?.error?.type??"unknown"});
      return NextResponse.json({error:"AI 暫時未能批改，請稍後再試"},{status:502});
    }
    const raw=await response.json();
    // Do not store partial output or invent marks when the model output is incomplete.
    if(raw.status!=="completed") {
      console.error("[stage3-chinese-ai] Incomplete OpenAI response",{
        status:raw.status??"missing",reason:raw.incomplete_details?.reason??"unknown"
      });
      return NextResponse.json({error:"AI 批改未完成，請稍後重試；原稿已保留"},{status:502});
    }
    const output=textOut(raw);
    let parsed:unknown;
    try{parsed=JSON.parse(output);}catch{
      console.error("[stage3-chinese-ai] Invalid JSON",{outputLength:output.length});
      return NextResponse.json({error:"AI 回傳格式不完整，請稍後再試"},{status:502});
    }
    if(!isFeedback(parsed)) {
      console.error("[stage3-chinese-ai] Invalid feedback shape",{
        keys:parsed&&typeof parsed==="object"?Object.keys(parsed):[],
        missingOrInvalid:parsed&&typeof parsed==="object"?[
          ...["transcription","uncertain","strengths","improvements","provisional_score","score_reason"]
            .filter(k=>!(k in parsed))
        ]:["not_object"]
      });
      return NextResponse.json({error:"AI 批改資料不完整，請稍後重試；原稿已保留"},{status:502});
    }
    const feedback:Feedback={
      transcription:parsed.transcription.slice(0,6000),
      uncertain:parsed.uncertain.slice(0,12),
      strengths:parsed.strengths.slice(0,8),
      improvements:parsed.improvements.slice(0,10),
      provisional_score:Math.min(10,Math.max(0,Math.round(parsed.provisional_score))),
      score_reason:parsed.score_reason.slice(0,1200)
    };
    const saved=await db.from("chinese_stage3_ai_reviews").insert({upload_id:uploadId,user_id:user.id,feedback});
    if(saved.error){
      // Unique constraint may be hit if the same upload was marked by a concurrent request.
      const cached=await db.from("chinese_stage3_ai_reviews").select("feedback").eq("upload_id",uploadId).maybeSingle();
      if(cached.data?.feedback) return NextResponse.json({ok:true,feedback:cached.data.feedback,cached:true});
      console.error("[stage3-chinese-ai] Save rejected",{code:saved.error.code});
      return NextResponse.json({error:"批改已完成但儲存失敗，請勿連續重試"},{status:500});
    }
    return NextResponse.json({ok:true,feedback,cached:false});
  }catch(e){
    console.error("[stage3-chinese-ai] Error",e instanceof Error?e.name:"unknown");
    return NextResponse.json({error:"批改暫時失敗，原稿仍已儲存"},{status:500});
  }
}
