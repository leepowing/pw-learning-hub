import { NextResponse } from "next/server";
import { authenticate,askOpenAI,existingReview,errorResponse,safeFeedback,type SkillFeedback } from "../skills/common";
import { translationTasks } from "@/data/chineseGcse/week1";
export const runtime="nodejs";
export const maxDuration=60;
const limit=4*1024*1024;
const prefix=(uid:string,id:string)=>`${uid}/stage3/week-01/translation/${id}/`;
async function gradeImage(image:Buffer,contentType:string,task:typeof translationTasks[number]):Promise<SkillFeedback>{
  const key=process.env.OPENAI_API_KEY;
  if(!key)throw new Error("OPENAI_NOT_CONFIGURED");
  const response=await fetch("https://api.openai.com/v1/responses",{
    method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},
    body:JSON.stringify({model:process.env.OPENAI_CHINESE_MODEL||"gpt-4.1-mini",store:false,max_output_tokens:1250,
      instructions:"你是 GCSE Chinese 翻譯練習老師。仔細辨識圖片中的真正手寫答案；不清楚處用□，不可以自動補字。按內容完整度0-4、語言準確度0-4、文字清晰度0-2給予教學分數。接受不同但準確的翻譯，不能只以參考譯法為唯一答案。只輸出繁體中文 JSON object: transcription,breakdown:{content,language,clarity},strengths:string[],improvements:string[],score_reason:string。非官方 GCSE 評分。",
      input:[{role:"user",content:[{type:"input_text",text:`Translation task: ${task.direction}; original: ${task.prompt}; reference: ${task.sample}. Transcribe the actual handwriting and assess its meaning. Return JSON only.`},{type:"input_image",image_url:`data:${contentType};base64,${image.toString("base64")}`}]}],
      text:{format:{type:"json_object"}}}),signal:AbortSignal.timeout(42000)});
  if(!response.ok){const err=await response.json().catch(()=>null);console.error("[stage3-trans] OpenAI failed",{status:response.status,code:err?.error?.code??"unknown"});throw new Error("AI_UPSTREAM_FAILED");}
  const raw=await response.json();
  const text=(raw.output??[]).flatMap((o:any)=>o.content??[]).filter((c:any)=>c.type==="output_text").map((c:any)=>c.text).join("");
  let parsed:any;try{parsed=JSON.parse(text)}catch{throw new Error("AI_INVALID_FORMAT")}
  if(!parsed?.breakdown||!Array.isArray(parsed?.improvements))throw new Error("AI_INVALID_FORMAT");
  return safeFeedback(parsed);
}
export async function POST(request:Request){
  try{
    const {db,user}=await authenticate(request);
    const body=await request.json().catch(()=>null);
    const taskId=typeof body?.taskId==="string"?body.taskId:"";
    const task=translationTasks.find(x=>x.id===taskId);
    if(!task)return NextResponse.json({error:"題目無效"},{status:400});
    const existing=await existingReview(db,user.id,"translation",taskId);
    if(existing)return NextResponse.json({ok:true,review:existing,cached:true});
    const text=typeof body?.answerText==="string"?body.answerText.trim():"";
    const objectPath=typeof body?.objectPath==="string"?body.objectPath:"";
    if((!!text)===(!!objectPath))return NextResponse.json({error:"請選擇文字或手寫圖片其中一種作答方式"},{status:400});
    if(text.length>1200 || (text&&text.length<2))return NextResponse.json({error:"答案需為 2–1200 字"},{status:400});
    let feedback:SkillFeedback,input_kind:"text"|"image"="text";
    if(objectPath){
      const valid=objectPath.startsWith(prefix(user.id,taskId))&&/\.(jpg|jpeg|png|webp)$/i.test(objectPath)&&objectPath.length<300;
      if(!valid)return NextResponse.json({error:"圖片路徑不正確"},{status:400});
      const file=await db.storage.from("chinese-handwriting").download(objectPath);
      if(file.error||!file.data)return NextResponse.json({error:"無法讀取已上傳手寫圖片"},{status:404});
      const mime=file.data.type;
      if(!["image/jpeg","image/png","image/webp"].includes(mime)||file.data.size>limit)return NextResponse.json({error:"只支援 4MB 以下 JPG、PNG、WebP"},{status:400});
      feedback=await gradeImage(Buffer.from(await file.data.arrayBuffer()),mime,task);
      input_kind="image";
    }else{
      feedback=await askOpenAI(`Translation direction: ${task.direction}; source: ${task.prompt}; reference: ${task.sample}. STUDENT ANSWER (verbatim, do not auto-correct): ${text}. Explain missing or mistranslated meaning; allow valid alternative phrasings; include the student answer in transcription.`);
      feedback.transcription=text;
    }
    const inserted=await db.from("chinese_stage3_skill_reviews").insert({user_id:user.id,week:1,skill:"translation",task_id:taskId,input_kind,input_text:text,object_path:objectPath||null,feedback}).select("*").single();
    if(inserted.error){
      const fallback=await existingReview(db,user.id,"translation",taskId);
      if(fallback)return NextResponse.json({ok:true,cached:true,review:fallback});
      console.error("[stage3-trans] save failed",inserted.error.code);
      return NextResponse.json({error:"AI 批改完成但未能儲存；請不要重複提交，檢查資料庫 SQL"},{status:500});
    }
    return NextResponse.json({ok:true,cached:false,review:inserted.data});
  }catch(e){const x=errorResponse(e);return NextResponse.json({error:x.error},{status:x.status});}
}
