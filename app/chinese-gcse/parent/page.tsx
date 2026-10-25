"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const db = url && key ? createClient(url, key) : null;
const tasks: Record<string,string> = {w1:"造句 1",w2:"造句 2",w3:"造句 3",w4:"句子改寫",w5:"造句 5",w6:"短文（一）",w7:"短文（二）"};
type Student = {id:string;student:string};
type Upload = {id:string;task_id:string;file_name:string;object_path:string};
type Feedback = {transcription?:string;provisional_score?:number;score_reason?:string;uncertain?:string[];strengths?:string[];feedback?:string[]};
type Review = {id:string;task_id:string;status:string;feedback:Feedback;corrected_transcription:string|null;final_score:number|null};
const panel: React.CSSProperties = {padding:20,border:"1px solid #e2e8f0",borderRadius:18,background:"white"};
const btn: React.CSSProperties = {padding:"10px 14px",borderRadius:10,border:"1px solid #cbd5e1",cursor:"pointer"};
export default function ChineseParent(){
 const [students,setStudents]=useState<Student[]>([]),[student,setStudent]=useState(""),[task,setTask]=useState("w1");
 const [uploads,setUploads]=useState<Upload[]>([]),[reviews,setReviews]=useState<Review[]>([]);
 const [message,setMessage]=useState("正在驗證家長身份…"),[authorized,setAuthorized]=useState(false),[busy,setBusy]=useState(false);
 const [draft,setDraft]=useState(""),[score,setScore]=useState(0),[preview,setPreview]=useState("");
 useEffect(()=>{let active=true;(async()=>{try{
  if(!db)throw Error("Supabase 尚未設定");
  const {data:{user}}=await db.auth.getUser();if(!user)throw Error("請先登入家長帳戶");
  const {data:p,error:e}=await db.from("profiles").select("role").eq("id",user.id).single();
  if(e||p?.role!=="parent")throw Error("此頁面只供已授權家長使用");
  const {data:links,error:l}=await db.from("parent_student_links").select("student_id").eq("parent_id",user.id);
  if(l)throw Error(l.message);
  const ids=(links??[]).map(x=>x.student_id as string);if(!ids.length)throw Error("尚未連結學生帳戶");
  const {data:children,error:c}=await db.from("profiles").select("id,student").in("id",ids);
  if(c)throw Error(c.message);
  if(active){setStudents(children as Student[]);setStudent(children?.[0]?.id??"");setAuthorized(true);setMessage("家長身份已驗證");}
 }catch(e){if(active)setMessage(e instanceof Error?e.message:"載入失敗");}})();return()=>{active=false};},[]);
 async function load(id:string){if(!db||!id)return;setMessage("正在載入資料…");
  const [a,b]=await Promise.all([
   db.from("chinese_handwriting_submissions").select("id,task_id,file_name,object_path").eq("user_id",id).eq("assessment_version","v3"),
   db.from("chinese_handwriting_reviews").select("id,task_id,status,feedback,corrected_transcription,final_score").eq("user_id",id).eq("assessment_version","v3").order("created_at",{ascending:false})
  ]);
  if(a.error||b.error){setMessage(a.error?.message??b.error?.message??"讀取失敗");return;}
  setUploads((a.data??[]) as Upload[]);setReviews((b.data??[]) as Review[]);setMessage("資料已載入");
 }
 useEffect(()=>{if(student)void load(student);},[student]);
 const latest:Record<string,Review>={};for(const r of reviews)if(!latest[r.task_id])latest[r.task_id]=r;
 const current=latest[task];
 useEffect(()=>{setDraft(current?.corrected_transcription??current?.feedback?.transcription??"");setScore(current?.final_score??current?.feedback?.provisional_score??0);setPreview("");},[student,task,current?.id,current?.status]);
 async function openOriginal(path:string){if(!db)return;const {data,error}=await db.storage.from("chinese-handwriting").createSignedUrl(path,120);if(error||!data){setMessage(error?.message??"無法開啟原稿");return;}setPreview(data.signedUrl);}
 async function confirm(){if(!db||!current||busy)return;if(!draft.trim()||!Number.isInteger(score)||score<0||score>10){setMessage("請填寫文字及 0–10 的整數分數");return;}
  setBusy(true);const {error}=await db.rpc("confirm_chinese_handwriting_review",{p_review_id:current.id,p_corrected_transcription:draft,p_final_score:score});
  if(error)setMessage("覆核失敗："+error.message);else{await load(student);setMessage("家長覆核已儲存");}setBusy(false);
 }
 const uploaded=new Set(uploads.map(x=>x.task_id)).size;
 const pending=Object.values(latest).filter(x=>x.status!=="reviewed").length;
 const approved=Object.values(latest).filter(x=>x.status==="reviewed").length;
 return <main style={{maxWidth:1050,margin:"35px auto",padding:"0 18px 70px",lineHeight:1.65,color:"#17243a"}}>
  <Link href="/family">← 返回 Family Dashboard</Link><p style={{fontSize:12,letterSpacing:2,color:"#64748b",marginTop:25}}>PW LEARNING HUB · PARENT</p>
  <h1 style={{fontSize:"clamp(26px,5vw,38px)",fontWeight:800}}>GCSE Chinese 家長管理中心</h1><p>查看手寫原稿、AI 評語及確認評分</p>
  <p role="status" style={{background:"#f1f5f9",padding:12,borderRadius:10}}>{message}</p>
  {authorized&&<>
   <div style={{display:"flex",gap:10,margin:"18px 0"}}>{students.map(s=><button key={s.id} onClick={()=>setStudent(s.id)} style={{...btn,background:student===s.id?"#1e3a8a":"white",color:student===s.id?"white":"#17243a"}}>{s.student}</button>)}</div>
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:10,marginBottom:20}}>{[["已上傳",`${uploaded}/7`],["待覆核",pending],["已確認",approved]].map(([label,value])=><div key={label} style={panel}><small>{label}</small><div style={{fontSize:26,fontWeight:800}}>{value}</div></div>)}</div>
   <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:16}}>
    <section style={panel}><h2 style={{fontSize:19,fontWeight:700}}>選擇手寫題目</h2>{Object.entries(tasks).map(([id,title])=><button key={id} onClick={()=>setTask(id)} style={{...btn,width:"100%",textAlign:"left",display:"block",marginBottom:8,background:task===id?"#eaf1ff":"white"}}><strong>{title}</strong><br/><small>{uploads.some(x=>x.task_id===id)?"已上傳":"未上傳"} · {latest[id]?(latest[id].status==="reviewed"?"已覆核":"待覆核"):"未批改"}</small></button>)}</section>
    <section style={panel}><h2 style={{fontSize:19,fontWeight:700}}>{tasks[task]}</h2><strong>學生手寫原稿</strong><div style={{margin:"10px 0"}}>{uploads.filter(x=>x.task_id===task).map(x=><button key={x.id} style={{...btn,marginRight:6,marginBottom:6}} onClick={()=>void openOriginal(x.object_path)}>{x.file_name}</button>)}{!uploads.some(x=>x.task_id===task)&&<p>未上傳</p>}</div>
     {preview&&<p><a href={preview} target="_blank" rel="noopener noreferrer">查看私人原稿（連結有效約 2 分鐘）</a></p>}
     {current?<><h3 style={{fontWeight:700,marginTop:20}}>AI 原始辨識</h3><p style={{background:"#f1f5f9",padding:12,borderRadius:10,whiteSpace:"pre-wrap"}}>{current.feedback?.transcription}</p><p>AI 初步分數：{current.feedback?.provisional_score??"—"}/10</p><p>{current.feedback?.score_reason}</p>
      {!!current.feedback?.uncertain?.length&&<p>不確定字詞：{current.feedback.uncertain.join("、")}</p>}
      {!!current.feedback?.strengths?.length&&<><strong>優點</strong><ul>{current.feedback.strengths.map((x,i)=><li key={i}>{x}</li>)}</ul></>}
      {!!current.feedback?.feedback?.length&&<><strong>改善建議</strong><ul>{current.feedback.feedback.map((x,i)=><li key={i}>{x}</li>)}</ul></>}
      <label style={{display:"block",fontWeight:700}}>家長核對後的原文</label><textarea rows={5} value={draft} onChange={e=>setDraft(e.target.value)} style={{width:"100%",boxSizing:"border-box",border:"1px solid #94a3b8",borderRadius:8,padding:10}}/>
      <label style={{display:"block",fontWeight:700,marginTop:10}}>最終分數（0–10）</label><input type="number" min={0} max={10} step={1} value={score} onChange={e=>setScore(Number(e.target.value))} style={{...btn,width:90,display:"block",marginBottom:12}}/>
      <p style={{fontSize:12,color:"#64748b"}}>原始 AI 評語及原稿不會被覆蓋；確認會記錄家長及時間。</p>
      <button disabled={busy} onClick={()=>void confirm()} style={{...btn,background:"#166534",color:"white"}}>{busy?"正在儲存…":"確認家長覆核"}</button>
     </>:<p>尚未有 AI 評語。請先由學生在手寫頁面完成批改。</p>}
    </section>
   </div>
  </>}
 </main>;
}
