import { createClient } from "@supabase/supabase-js";
import { translationTasks, speakingPrompts } from "@/data/chineseGcse/week1";

export type Skill = "speaking" | "translation";
export type SkillFeedback={
  transcription:string;
  provisional_score:number;
  strengths:string[];
  improvements:string[];
  score_reason:string;
  breakdown:{content:number;language:number;clarity:number};
  pronunciation_reference?:{accuracy:number|null;fluency:number|null;note:string};
};
export function skillTask(skill:Skill,id:string){
  return skill==="speaking"? speakingPrompts.find(x=>x.id===id):translationTasks.find(x=>x.id===id);
}
export async function authenticate(request:Request){
  const token=request.headers.get("authorization")?.match(/^Bearer (.+)$/)?.[1];
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL,pub=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if(!token||!url||!pub)throw new Error("AUTH_REQUIRED");
  const db=createClient(url,pub,{global:{headers:{Authorization:`Bearer ${token}`}},auth:{persistSession:false,autoRefreshToken:false}});
  const {data:{user},error}=await db.auth.getUser(token);
  if(error||!user)throw new Error("AUTH_REQUIRED");
  const {data:profile,error:profileError}=await db.from("profiles").select("role").eq("id",user.id).maybeSingle();
  if(profileError||profile?.role!=="student")throw new Error("STUDENT_ONLY");
  return {db,user};
}
export async function existingReview(db:any,userId:string,skill:Skill,taskId:string){
  const {data,error}=await db.from("chinese_stage3_skill_reviews").select("*")
    .eq("user_id",userId).eq("week",1).eq("skill",skill).eq("task_id",taskId).maybeSingle();
  if(error)throw new Error("REVIEW_READ_FAILED");
  return data;
}
export function safeFeedback(value:any):SkillFeedback{
  const arr=(v:unknown,n:number)=>Array.isArray(v)?v.filter(x=>typeof x==="string").slice(0,n).map(x=>x.slice(0,360)):[];
  const number=(v:unknown,max:number)=>Math.max(0,Math.min(max,Math.round(Number(v)||0)));
  const b=value?.breakdown??{};
  const content=number(b.content,4),language=number(b.language,4),clarity=number(b.clarity,2);
  return {
    transcription:String(value?.transcription??"").slice(0,5000),
    provisional_score:content+language+clarity,
    breakdown:{content,language,clarity},
    strengths:arr(value?.strengths,5),improvements:arr(value?.improvements,6),
    score_reason:String(value?.score_reason??"").slice(0,1000),
  };
}
export async function askOpenAI(prompt:string):Promise<SkillFeedback>{
  const key=process.env.OPENAI_API_KEY;
  if(!key)throw new Error("OPENAI_NOT_CONFIGURED");
  const response=await fetch("https://api.openai.com/v1/responses",{
    method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},
    body:JSON.stringify({model:process.env.OPENAI_CHINESE_MODEL||"gpt-4.1-mini",store:false,max_output_tokens:1200,
      instructions:"你是 GCSE Chinese (Traditional Chinese/Cantonese) 練習老師。只根據提供的學生實際文字評估，不可編造未寫/未說的內容。分項內容content 0-4、語言language 0-4、清晰度clarity 0-2；滿分10，作為教學參考，並非 Pearson 官方評級。對不同但準確的翻譯應給分。所有回饋用繁體中文。請輸出 JSON object: transcription,breakdown:{content,language,clarity},strengths:string[],improvements:string[],score_reason:string。",
      input:[{role:"user",content:[{type:"input_text",text:prompt+"\nReturn valid JSON only."}]}],
      text:{format:{type:"json_object"}}}),signal:AbortSignal.timeout(40000)
  });
  if(!response.ok){const error=await response.json().catch(()=>null);console.error("[stage3-skills] OpenAI rejected",{status:response.status,code:error?.error?.code??"unknown"});throw new Error("AI_UPSTREAM_FAILED");}
  const raw=await response.json();
  const output=(raw.output??[]).flatMap((o:any)=>o.content??[]).filter((c:any)=>c.type==="output_text").map((c:any)=>c.text).join("");
  if(!output)throw new Error("AI_EMPTY_OUTPUT");
  let parsed:any;try{parsed=JSON.parse(output)}catch{throw new Error("AI_INVALID_FORMAT")}
  if(!parsed?.breakdown || !Array.isArray(parsed?.improvements))throw new Error("AI_INVALID_FORMAT");
  return safeFeedback(parsed);
}
export function errorResponse(error:unknown){
  const message=error instanceof Error?error.message:"UNKNOWN";
  if(message==="AUTH_REQUIRED")return {status:401,error:"請重新登入學生帳戶"};
  if(message==="STUDENT_ONLY")return {status:403,error:"只供學生帳戶使用"};
  if(message==="OPENAI_NOT_CONFIGURED")return {status:503,error:"OpenAI API 尚未設定"};
  if(message==="REVIEW_READ_FAILED")return {status:500,error:"無法讀取已批改紀錄，請檢查 Stage 3 v2 SQL"};
  if(message.startsWith("AI_"))return {status:502,error:"AI 批改暫時未能完成；請稍後再試"};
  console.error("[stage3-skills] Error",message.slice(0,120));
  return {status:500,error:"服務暫時無法處理，請稍後再試"};
}
