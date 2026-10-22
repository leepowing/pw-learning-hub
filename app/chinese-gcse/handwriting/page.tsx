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
const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const db=supabaseUrl&&supabaseKey?createClient(supabaseUrl,supabaseKey):null;
export default function ChineseHandwriting(){
 const [userId,setUserId]=useState("");
 const [uploads,setUploads]=useState<Upload[]>([]);
 const [status,setStatus]=useState("正在確認登入…");
 const [busy,setBusy]=useState("");
 const [selected,setSelected]=useState("w1");
 const [mode,setMode]=useState<"grid"|"lined">("grid");
 async function reload(user:string){
  if(!db)return;
  const {data,error}=await db.from("chinese_handwriting_submissions").select("id,task_id,object_path,file_name,created_at").eq("user_id",user).eq("assessment_version","v3").order("created_at",{ascending:true});
  if(error)throw Error(error.message);setUploads((data??[]) as Upload[]);
 }
 useEffect(()=>{let active=true;(async()=>{try{
  if(!db)throw Error("Supabase 環境變數未設定");
  const {data:{user},error}=await db.auth.getUser();if(error||!user)throw Error("請先登入學生帳戶");
  if(!active)return;setUserId(user.id);await reload(user.id);if(active)setStatus("已載入手寫答案（私人儲存）");
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
   await reload(userId);setStatus("已上傳並儲存至 Supabase");
  }catch(e){setStatus("上傳失敗："+(e instanceof Error?e.message:"未知錯誤"));}finally{setBusy("");}
 }
 async function preview(path:string){if(!db)return;const {data,error}=await db.storage.from("chinese-handwriting").createSignedUrl(path,60);if(error||!data){setStatus("無法開啟："+(error?.message??"未知錯誤"));return;}window.open(data.signedUrl,"_blank","noopener,noreferrer");}
 function printSheet(){window.print();}
 return <main style={{maxWidth:920,margin:"30px auto",padding:"0 18px 60px",lineHeight:1.7}}>
 <style>{`@media print{body{background:white!important;color:black!important}.hide-print{display:none!important}.sheet{display:block!important;break-after:page}.sheet:last-child{break-after:auto}.writing-line{height:30px;border-bottom:1px solid #bbb}.grid-area{background-size:30px 30px;background-image:linear-gradient(to right,#ddd 1px,transparent 1px),linear-gradient(to bottom,#ddd 1px,transparent 1px);height:360px}}@media screen{.sheet{display:none}}`}</style>
 <div className="hide-print"><Link href="/chinese-gcse">← 返回中文能力評估</Link><h1>中文手寫能力評估 · v3</h1>
 <p>可以列印答題紙，或使用普通紙張手寫後拍照。請勿使用中文輸入法或查字工具。每題可上傳多張照片。</p>
 <p role="status">{status}</p>
 <label>選擇題目： <select value={selected} onChange={e=>setSelected(e.target.value)}>{tasks.map(t=><option key={t.id} value={t.id}>{t.title}</option>)}</select></label>{"　"}
 <label>答題紙： <select value={mode} onChange={e=>setMode(e.target.value as "grid"|"lined")}><option value="grid">方格紙</option><option value="lined">橫線紙</option></select></label>{"　"}
 <button type="button" onClick={printSheet} style={{padding:10,border:"1px solid",borderRadius:7}}>列印／另存 PDF</button>
 <p style={{fontSize:13}}>如使用 Chrome，可在列印視窗選擇「Save as PDF」。</p>
 {tasks.map(t=><section key={t.id} style={{padding:16,margin:"18px 0",border:"1px solid #ccc",borderRadius:12}}><h2 style={{fontSize:19}}>{t.title}</h2><p>{t.prompt}</p>
 <label style={{display:"inline-block",padding:10,border:"1px solid #aaa",borderRadius:8,cursor:"pointer"}}>{busy===t.id?"正在上傳…":"📷 拍照／選擇檔案"}<input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" multiple disabled={!userId||!!busy} style={{display:"block",maxWidth:300}} onChange={async e=>{const files=Array.from(e.target.files??[]);e.target.value="";for(const file of files)await upload(t.id,file);}}/></label>
 <ul>{uploads.filter(u=>u.task_id===t.id).map(u=><li key={u.id}><button type="button" onClick={()=>preview(u.object_path)} style={{textDecoration:"underline"}}>{u.file_name}</button> <small>（{new Date(u.created_at).toLocaleString("en-GB")}）</small></li>)}</ul>
 </section>)}<p>Stage 2A 只儲存原稿，不會自動提交評分。請保留原始紙張；AI 辨識及家長覆核將於下一階段加入。</p></div>
 {tasks.filter(t=>t.id===selected).map(t=><article className="sheet" key={t.id} style={{fontFamily:"serif",color:"black"}}><h2>PW Learning Hub · GCSE Chinese</h2><p>姓名：________________　日期：________________　題號：{t.id}</p><h3>{t.title}</h3><p>{t.prompt}</p>{mode==="grid"?<div className="grid-area"/>:<div>{Array.from({length:t.lines},(_,i)=><div className="writing-line" key={i}/>)}</div>}</article>)}
 </main>;
}
