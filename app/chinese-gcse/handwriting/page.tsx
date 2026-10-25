"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const tasks = [
  {id:"w1",title:"造句 1",prompt:"請用「雖然……但是……」寫一個完整句子。",lines:3},
  {id:"w2",title:"造句 2",prompt:"請用「如果……就……」寫一個完整句子。",lines:3},
  {id:"w3",title:"造句 3",prompt:"請用「不但……而且……」寫一個完整句子。",lines:3},
  {id:"w4",title:"句子改寫",prompt:"把「我昨天去圖書館。我借了兩本書。」合併成一句通順的句子。",lines:3},
  {id:"w5",title:"造句 5",prompt:"請用「持之以恆」造一個句子。",lines:3},
  {id:"w6",title:"短文寫作（一）",prompt:"請用繁體中文寫約 100 字，介紹你的學校、喜歡的科目，以及你希望改善的一件事。",lines:12},
  {id:"w7",title:"短文寫作（二）",prompt:"請用繁體中文寫約 120 字，描述一次你克服困難的經歷，以及你學到甚麼。",lines:14},
];
type Upload = {id:string;task_id:string;object_path:string;file_name:string;created_at:string};
type Review = {transcription?:string;uncertain?:string[];feedback?:string[];strengths?:string[];provisional_score?:number;score_reason?:string};
type ReviewRecord = {id:string;task_id:string;status:string;feedback:Review;corrected_transcription:string|null;final_score:number|null;reviewed_at:string|null;created_at:string};
const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const db=supabaseUrl&&supabaseKey?createClient(supabaseUrl,supabaseKey):null;
export default function ChineseHandwriting(){
 const [userId,setUserId]=useState("");
 const [uploads,setUploads]=useState<Upload[]>([]);
 const [status,setStatus]=useState("正在確認登入…");
 const [busy,setBusy]=useState("");
 const [reviews,setReviews]=useState<Record<string, ReviewRecord>>({});
 const [selected,setSelected]=useState("w1");
 const [reviewDates,setReviewDates]=useState<Record<string,string>>({});
 const [mode,setMode]=useState<"grid"|"lined">("grid");
 async function loadReviews(user:string){
  if(!db)return;
  const {data,error}=await db.from("chinese_handwriting_reviews")
   .select("id,task_id,status,feedback,corrected_transcription,final_score,reviewed_at,created_at")
   .eq("user_id",user).eq("assessment_version","v3")
   .order("created_at",{ascending:false});
  if(error)throw Error("無法載入 AI 評語："+error.message);
  const next:Record<string,ReviewRecord>={};
  const dates:Record<string,string>={};
  for(const row of data??[]){
   if(!next[row.task_id] && row.feedback){next[row.task_id]=row as ReviewRecord;dates[row.task_id]=row.created_at;}
  }
  setReviews(next);setReviewDates(dates);
 }
 async function reload(user:string){
  if(!db)return;
  const {data,error}=await db.from("chinese_handwriting_submissions").select("id,task_id,object_path,file_name,created_at").eq("user_id",user).eq("assessment_version","v3").order("created_at",{ascending:true});
  if(error)throw Error(error.message);setUploads((data??[]) as Upload[]);
 }
 useEffect(()=>{let active=true;(async()=>{try{
  if(!db)throw Error("Supabase 環境變數未設定");
  const {data:{user},error}=await db.auth.getUser();if(error||!user)throw Error("請先登入學生帳戶");
  if(!active)return;setUserId(user.id);await reload(user.id);await loadReviews(user.id);if(active)setStatus("已載入手寫答案及 AI 評語（私人儲存）");
 }catch(e){if(active)setStatus(e instanceof Error?e.message:"載入失敗");}})();return()=>{active=false};},[]);
 async function upload(taskId:string,file:File){
  if(!db||!userId)return;setBusy(taskId);setStatus("正在上傳…");
  let path="";
  try{
   const allowed=["image/jpeg","image/png","image/webp","application/pdf"];
   if(!allowed.includes(file.type))throw Error("請上傳 JPG、PNG、WebP 或 PDF；HEIC 請先轉換成 JPG");
   if(file.size>10*1024*1024)throw Error("每個檔案不可超過 10MB");
   const ext=({"image/jpeg":"jpg","image/png":"png","image/webp":"webp","application/pdf":"pdf"} as Record<string,string>)[file.type];
   path=`${userId}/v3/${taskId}/${crypto.randomUUID()}.${ext}`;
   const {error:storageError}=await db.storage.from("chinese-handwriting").upload(path,file,{contentType:file.type,upsert:false});
   if(storageError)throw Error(storageError.message);
   const {error:rowError}=await db.from("chinese_handwriting_submissions").insert({user_id:userId,assessment_version:"v3",task_id:taskId,object_path:path,file_name:file.name,content_type:file.type});
   if(rowError){await db.storage.from("chinese-handwriting").remove([path]);throw Error(rowError.message);}
   await reload(userId);setStatus("已上傳並儲存至 Supabase；如已批改，請留意舊評語未包含新上傳圖片");
  }catch(e){setStatus("上傳失敗："+(e instanceof Error?e.message:"未知錯誤"));}finally{setBusy("");}
 }
 async function review(taskId:string){
  if(!db||!userId)return;
  setBusy(taskId);setStatus("AI 正在辨識手寫答案，請稍候…");
  try{
   const session=await db.auth.getSession();const token=session.data.session?.access_token;
   if(!token)throw Error("請重新登入");
   const res=await fetch("/api/chinese-gcse/handwriting/review",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${token}`},body:JSON.stringify({taskId})});
   const data=await res.json();if(!res.ok)throw Error(data.error||"辨識失敗");
   await loadReviews(userId);setStatus("AI 初步評語已儲存，請家長核對原稿");
  }catch(e){setStatus(e instanceof Error?e.message:"辨識失敗");}finally{setBusy("");}
 }
 async function preview(path:string){if(!db)return;const {data,error}=await db.storage.from("chinese-handwriting").createSignedUrl(path,60);if(error||!data){setStatus("無法開啟："+(error?.message??"未知錯誤"));return;}window.open(data.signedUrl,"_blank","noopener,noreferrer");}
 function printSheet(){window.print();}
 return <main style={{maxWidth:920,margin:"30px auto",padding:"0 18px 60px",lineHeight:1.7}}>
 <style>{`@media print{body{background:white!important;color:black!important}.hide-print{display:none!important}.sheet{display:block!important;break-after:page}.sheet:last-child{break-after:auto}.writing-line{height:30px;border-bottom:1px solid #bbb}.grid-area{background-size:30px 30px;background-image:linear-gradient(to right,#ddd 1px,transparent 1px),linear-gradient(to bottom,#ddd 1px,transparent 1px);height:360px}}@media screen{.sheet{display:none}}`}</style>
 <div className="hide-print">
 <Link href="/chinese-gcse">← 返回中文能力評估</Link>
 <h1 style={{fontSize:"clamp(26px,5vw,36px)",marginBottom:8}}>中文手寫能力評估</h1>
 <p style={{color:"#526173"}}>每次完成一題 · 紙筆作答 · 拍照上傳 · AI 初步評語及家長確認結果</p>
 <p role="status" style={{padding:"10px 14px",borderRadius:10,background:"#edf4fa"}}>{status}</p>
 <div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"18px 0"}}>
 {tasks.map((t,i)=><button type="button" key={t.id} onClick={()=>setSelected(t.id)} aria-current={selected===t.id?"step":undefined} style={{padding:"8px 12px",borderRadius:10,border:"1px solid #d1d5db",background:selected===t.id?"#145c52":"white",color:selected===t.id?"white":"#243044",cursor:"pointer"}}>{i+1}{reviews[t.id]?.status==="confirmed"?" ✓":reviews[t.id]?" ◌":uploads.some(u=>u.task_id===t.id)?" •":""}</button>)}
 </div>
 <p style={{fontSize:13,color:"#536273"}}>已上傳 {tasks.filter(t=>uploads.some(u=>u.task_id===t.id)).length}/7 題 · 已有 AI 評語 {tasks.filter(t=>!!reviews[t.id]).length}/7 題</p>
 {tasks.filter(t=>t.id===selected).map((t)=>{
  const index=tasks.findIndex(x=>x.id===t.id);
  const taskUploads=uploads.filter(u=>u.task_id===t.id);
  const reviewRecord=reviews[t.id];
   const oldReview=reviewRecord?.feedback;
   const isConfirmed=reviewRecord?.status==="confirmed";
  const hasNewUpload=!!oldReview&&!!reviewDates[t.id]&&taskUploads.some(u=>new Date(u.created_at)>new Date(reviewDates[t.id]));
  return <section key={t.id} style={{padding:"20px",margin:"18px 0",border:"1px solid #d5dce5",borderRadius:16,background:"#fff",boxShadow:"0 3px 14px rgba(0,0,0,.04)"}}>
   <div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center"}}><h2 style={{fontSize:23,margin:0}}>{t.title}</h2><small>題目 {index+1} / {tasks.length}</small></div>
   <p style={{fontSize:18,fontWeight:600,margin:"18px 0"}}>{t.prompt}</p>
   <div style={{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center",marginBottom:16}}>
    <label>答題紙： <select value={mode} onChange={e=>setMode(e.target.value as "grid"|"lined")}><option value="grid">方格紙</option><option value="lined">橫線紙</option></select></label>
    <button type="button" onClick={printSheet} style={{padding:"9px 13px",border:"1px solid #b5c1d0",borderRadius:8}}>列印／另存 PDF</button>
   </div>
   <label style={{display:"block",padding:14,border:"1px dashed #91a1b4",borderRadius:10,background:"#f8fafc"}}><strong>📷 拍照／選擇手寫答案</strong><input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" multiple disabled={!userId||!!busy} style={{display:"block",maxWidth:"100%",marginTop:8}} onChange={async e=>{const files=Array.from(e.target.files??[]);e.target.value="";for(const file of files)await upload(t.id,file);}}/></label>
   {taskUploads.length>0&&<div style={{marginTop:14}}><strong>已上傳原稿（{taskUploads.length}）</strong><ul>{taskUploads.map(u=><li key={u.id}><button type="button" onClick={()=>preview(u.object_path)} style={{textDecoration:"underline",color:"#145c8a"}}>{u.file_name}</button> <small>（{new Date(u.created_at).toLocaleString("en-GB")}）</small></li>)}</ul></div>}
   {hasNewUpload&&<p style={{color:"#92400e",background:"#fff7ed",padding:10,borderRadius:8}}>注意：已有新上傳原稿，下方是較早的 AI 評語，尚未包含新圖片。</p>}
   {taskUploads.length>0&&!oldReview&&<button type="button" disabled={!!busy} onClick={()=>review(t.id)} style={{padding:"10px 16px",marginTop:10,background:"#145c52",color:"white",border:0,borderRadius:9}}>{busy===t.id?"AI 正在辨識…":"AI 辨識及初步批改"}</button>}
    {oldReview&&<div style={{background:isConfirmed?"#effaf4":"#f1f6fc",padding:16,marginTop:18,borderRadius:12,border:`1px solid ${isConfirmed?"#a7dfbd":"#d7e5f5"}`}}>
      <h3 style={{fontSize:20,marginTop:0}}>{isConfirmed?"家長已確認評語":"AI 初步評語（等待家長覆核）"}</h3>
      <p style={{fontSize:13}}>已從 Supabase 載入 · 不需要再次呼叫 AI</p>
      {isConfirmed&&<div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:10,marginBottom:18}}>
       <div style={{padding:12,background:"white",borderRadius:10}}><small>AI 初步分數</small><div style={{fontSize:24,fontWeight:800}}>{oldReview.provisional_score??"—"}/10</div></div>
       <div style={{padding:12,background:"white",borderRadius:10}}><small>家長最終分數</small><div style={{fontSize:24,fontWeight:800,color:"#166534"}}>{reviewRecord.final_score??"—"}/10</div></div>
      </div>}
      {isConfirmed&&<><strong>家長核對後的原文</strong><p style={{whiteSpace:"pre-wrap",background:"white",padding:12,borderRadius:8}}>{reviewRecord.corrected_transcription||"尚未提供"}</p>{reviewRecord.reviewed_at&&<p style={{fontSize:12,color:"#526173"}}>確認時間：{new Date(reviewRecord.reviewed_at).toLocaleString("en-GB")}</p>}</>}
      <strong>AI 原始辨識</strong><p style={{whiteSpace:"pre-wrap"}}>{oldReview.transcription}</p>
      {!!oldReview.uncertain?.length&&<><strong>不確定字詞</strong><ul>{oldReview.uncertain.map((x,i)=><li key={i}>{x}</li>)}</ul></>}
      {!!oldReview.strengths?.length&&<><strong>優點</strong><ul>{oldReview.strengths.map((x,i)=><li key={i}>{x}</li>)}</ul></>}
      {!!oldReview.feedback?.length&&<><strong>改善建議</strong><ul>{oldReview.feedback.map((x,i)=><li key={i}>{x}</li>)}</ul></>}
      {!isConfirmed&&<p><strong>AI 初步分數：</strong>{oldReview.provisional_score??"—"}/10（非 GCSE 成績）</p>}
      {oldReview.score_reason&&<p>{oldReview.score_reason}</p>}
      <small>{isConfirmed?"以上為家長已確認的診斷評估結果，並非正式 GCSE 成績。":"請對照原稿核實；家長會在家長管理中心確認最終原文及分數。"}</small>
     </div>}
   <div style={{display:"flex",justifyContent:"space-between",gap:12,marginTop:24}}>
    <button type="button" disabled={index===0} onClick={()=>setSelected(tasks[index-1].id)} style={{padding:"10px 15px",border:"1px solid #cbd5e1",borderRadius:9,opacity:index===0?0.4:1}}>← 上一題</button>
    <button type="button" disabled={index===tasks.length-1} onClick={()=>setSelected(tasks[index+1].id)} style={{padding:"10px 15px",border:"1px solid #cbd5e1",borderRadius:9,opacity:index===tasks.length-1?0.4:1}}>下一題 →</button>
   </div>
  </section>;
 })}
 <p style={{fontSize:13,color:"#64748b"}}>AI 初步評語不代表正式 GCSE 成績；已確認的家長評分會另外標示。請保留原稿。</p>
 </div>
 {tasks.filter(t=>t.id===selected).map(t=><article className="sheet" key={t.id} style={{fontFamily:"serif",color:"black"}}><h2>PW Learning Hub · GCSE Chinese</h2><p>姓名：________________　日期：________________　題號：{t.id}</p><h3>{t.title}</h3><p>{t.prompt}</p>{mode==="grid"?<div className="grid-area"/>:<div>{Array.from({length:t.lines},(_,i)=><div className="writing-line" key={i}/>)}</div>}</article>)}
 </main>;
}
