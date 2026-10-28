"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {createClient} from "@supabase/supabase-js";
import {readingQuestions,listeningQuestions,vocabulary,correctness,type ProgressState,emptyProgress} from "@/data/chineseGcse/week1";
import "../week1.css";

const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const db=url&&key?createClient(url,key):null;
type Student={id:string;student:string};
type Upload={id:string;user_id:string;object_path:string;file_name:string;created_at:string};
type Feedback={transcription:string;uncertain:string[];strengths:string[];improvements:string[];provisional_score:number;score_reason:string};
type AIReview={upload_id:string;feedback:Feedback};
type Confirmed={upload_id:string;corrected_transcription:string;final_score:number;reviewed_at:string};

export default function Week1Parent(){
 const [students,setStudents]=useState<Student[]>([]);
 const [studentId,setStudentId]=useState("");
 const [authorised,setAuthorised]=useState(false);
 const [status,setStatus]=useState("正在確認家長身份…");
 const [progress,setProgress]=useState<ProgressState>(emptyProgress);
 const [uploads,setUploads]=useState<Upload[]>([]);
 const [feedbacks,setFeedbacks]=useState<Record<string,Feedback>>({});
 const [confirmed,setConfirmed]=useState<Record<string,Confirmed>>({});
 const [draft,setDraft]=useState<Record<string,string>>({});
 const [scores,setScores]=useState<Record<string,number>>({});
 const [busy,setBusy]=useState(false);
 useEffect(()=>{let active=true;void (async()=>{
   try{
     if(!db)throw Error("Supabase 尚未設定");
     const {data:{user},error}=await db.auth.getUser();if(error||!user)throw Error("請先登入家長帳戶");
     const role=await db.from("profiles").select("role").eq("id",user.id).single();
     if(role.error||role.data?.role!=="parent")throw Error("此頁面只供已授權家長使用");
     const links=await db.from("parent_student_links").select("student_id").eq("parent_id",user.id);
     if(links.error)throw Error(links.error.message);
     const ids=(links.data??[]).map(r=>r.student_id as string);
     if(ids.length===0)throw Error("尚未連結學生帳戶");
     const profiles=await db.from("profiles").select("id,student").in("id",ids);
     if(profiles.error)throw Error(profiles.error.message);
     if(active){setStudents((profiles.data??[]) as Student[]);setStudentId(profiles.data?.[0]?.id??"");setAuthorised(true);setStatus("已驗證 Daddy 家長身份");}
   }catch(e){if(active)setStatus(e instanceof Error?e.message:"載入失敗");}
 })();return()=>{active=false}},[]);
 async function load(student:string){
   if(!db||!student)return;
   setStatus("正在載入學生 Week 1 進度…");
   const [p,u,r,c]=await Promise.all([
     db.from("chinese_stage3_progress").select("answers").eq("user_id",student).eq("week",1).maybeSingle(),
     db.from("chinese_stage3_uploads").select("id,user_id,object_path,file_name,created_at").eq("user_id",student).eq("week",1).order("created_at",{ascending:false}),
     db.from("chinese_stage3_ai_reviews").select("upload_id,feedback").eq("user_id",student),
     db.from("chinese_stage3_parent_reviews").select("upload_id,corrected_transcription,final_score,reviewed_at").eq("student_id",student),
   ]);
   if(p.error||u.error||r.error||c.error){setStatus(p.error?.message??u.error?.message??r.error?.message??c.error?.message??"載入失敗");return;}
   const state={...emptyProgress(),...(p.data?.answers??{})} as ProgressState;
   const rs=Object.fromEntries((r.data??[]).map(x=>[x.upload_id,x.feedback as Feedback]));
   setProgress(state);setUploads((u.data??[]) as Upload[]);setFeedbacks(rs);
   setConfirmed(Object.fromEntries((c.data??[]).map(x=>[x.upload_id,x as Confirmed])));
   setDraft(Object.fromEntries((r.data??[]).map(x=>[x.upload_id,c.data?.find(z=>z.upload_id===x.upload_id)?.corrected_transcription??(x.feedback as Feedback).transcription??""])));
   setScores(Object.fromEntries((r.data??[]).map(x=>[x.upload_id,c.data?.find(z=>z.upload_id===x.upload_id)?.final_score??(x.feedback as Feedback).provisional_score??0])));
   setStatus("已載入學生資料");
 }
 useEffect(()=>{if(studentId)void load(studentId)},[studentId]);
 async function viewImage(path:string){if(!db)return;const {data,error}=await db.storage.from("chinese-handwriting").createSignedUrl(path,90);if(error||!data){setStatus(error?.message??"無法開啟圖片");return;}window.open(data.signedUrl,"_blank","noopener,noreferrer");}
 async function confirm(uploadId:string){
   if(!db||busy||confirmed[uploadId])return;
   const value=draft[uploadId]?.trim()??"",score=scores[uploadId];
   if(!value||value.length>6000||!Number.isInteger(score)||score<0||score>10){setStatus("請輸入 1–6000 字的核對原文及 0–10 整數分數");return;}
   setBusy(true);try{
     const {data:{user}}=await db.auth.getUser();if(!user)throw Error("登入已失效");
     const {error}=await db.rpc("confirm_chinese_stage3_review",{p_upload_id:uploadId,p_corrected_transcription:value,p_final_score:score});
     if(error)throw Error(error.message);
     await load(studentId);setStatus("家長已確認最終分數，結果已儲存");
   }catch(e){setStatus("確認失敗："+(e instanceof Error?e.message:"未知錯誤"));}finally{setBusy(false)}
 }
 const readDone=Object.keys(progress.reading??{}).length;
 const listenDone=Object.keys(progress.listening??{}).length;
 const writingDone=uploads.length>0;
 return <main className="ch3-wrap">
  <header className="ch3-header"><Link className="ch3-back" href="/chinese-gcse/learning">← 返回 Week 1 學習</Link><div className="ch3-eyebrow">PW LEARNING HUB · PARENT</div><h1>Stage 3 家長管理</h1><p>Week 1 · Greta / Mathis 統一課程，各自儲存成績</p></header>
  <section className="ch3-overview"><p role="status">{status}</p></section>
  {authorised&&<>
    <div className="ch3-tabs" style={{gridTemplateColumns:"repeat(2,minmax(0,1fr))"}}>{students.map(s=><button key={s.id} onClick={()=>setStudentId(s.id)} className={studentId===s.id?"active":""}><strong>{s.student}</strong></button>)}</div>
    <section className="ch3-card">
      <h2>Week 1 — Progress overview</h2>
      <div className="ch3-dictation">
        <div className="ch3-note"><strong>Reading</strong><p>{readDone}/4 answered · {correctness(progress.reading??{},readingQuestions)}/4 correct</p></div>
        <div className="ch3-note"><strong>Listening</strong><p>{listenDone}/6 answered · {correctness(progress.listening??{},listeningQuestions)}/6 correct</p></div>
        <div className="ch3-note"><strong>Vocabulary</strong><p>{progress.vocabSeen?.length??0}/8 learned</p></div>
        <div className="ch3-note"><strong>Dictation</strong><p>{Object.keys(progress.dictation??{}).length}/8 attempted · {Object.values(progress.dictation??{}).filter(x=>x==="review").length} need review</p></div>
        <div className="ch3-note"><strong>Speaking</strong><p>{progress.speakingPractised?.length??0}/3 activities completed</p></div>
        <div className="ch3-note"><strong>Handwriting</strong><p>{writingDone?"Uploaded":"Not yet submitted"} · {uploads.length} attempts</p></div>
      </div>
      <h3>Words needing handwritten revision</h3>
      <p>{vocabulary.filter(v=>progress.dictation?.[v.id]==="review").map(v=>v.traditional+" ("+v.english+")").join("、") || "暫無錯詞紀錄"}</p>
    </section>
    <section className="ch3-card" style={{marginTop:18}}><h2>手寫原稿、AI 評語及家長覆核</h2>
      {uploads.length===0?<p>尚未有 Week 1 手寫答案。</p>:uploads.map(u=><div className="ch3-question" key={u.id}>
        <div className="ch3-between"><strong>{u.file_name}</strong><button className="ch3-linkbutton" onClick={()=>void viewImage(u.object_path)}>查看私人原稿</button></div>
        <p className="ch3-muted">{new Date(u.created_at).toLocaleString("en-GB")}</p>
        {feedbacks[u.id]?<>
          <p><strong>AI 原文：</strong>{feedbacks[u.id].transcription}</p>
          <p><strong>AI 初步分數：</strong>{feedbacks[u.id].provisional_score}/10</p>
          {feedbacks[u.id].improvements?.length>0&&<ul>{feedbacks[u.id].improvements.map((s,i)=><li key={i}>{s}</li>)}</ul>}
          {confirmed[u.id]?<div className="ch3-feedback"><strong>家長已確認：{confirmed[u.id].final_score}/10</strong><p>{confirmed[u.id].corrected_transcription}</p></div>:<div className="ch3-review">
            <label>家長核對原文<textarea rows={4} style={{width:"100%",padding:10,borderRadius:8,border:"1px solid #bfd0d5"}} value={draft[u.id]??""} onChange={e=>setDraft(x=>({...x,[u.id]:e.target.value}))}/></label>
            <label>最終分數（0–10）<input type="number" min={0} max={10} step={1} value={scores[u.id]??0} onChange={e=>setScores(x=>({...x,[u.id]:Number(e.target.value)}))} style={{display:"block",width:95,padding:8,margin:"7px 0 15px"}}/></label>
            <button className="ch3-button ch3-primary" disabled={busy} onClick={()=>void confirm(u.id)}>確認家長覆核（確認後鎖定）</button>
          </div>}
        </>:<p className="ch3-muted">此原稿尚未取得 AI 初步評語。</p>}
      </div>)}
    </section>
  </>}
 </main>;
}
