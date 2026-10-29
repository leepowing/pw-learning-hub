"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import {
  emptyProgress, listeningClips, listeningQuestions, readingQuestions, readingText,
  SECTIONS, speakingPrompts, translationTasks, vocabulary, writingTask,
  type ProgressState, correctness
} from "@/data/chineseGcse/week1";
import "./week1.css";

const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const db=supabaseUrl&&supabaseKey?createClient(supabaseUrl,supabaseKey):null;
type Upload={id:string;user_id:string;object_path:string;file_name:string;created_at:string};
type Feedback={transcription:string;uncertain:string[];strengths:string[];improvements:string[];provisional_score:number;score_reason:string};
type ParentReview={upload_id:string;corrected_transcription:string;final_score:number;reviewed_at:string};
type SkillFeedback={transcription:string;provisional_score:number;strengths:string[];improvements:string[];score_reason:string;breakdown?:{content:number;language:number;clarity:number};pronunciation_reference?:{accuracy:number|null;fluency:number|null;note:string}};
type SkillReview={id:string;skill:"speaking"|"translation";task_id:string;input_kind:string;input_text:string;object_path:string|null;feedback:SkillFeedback;final_score:number|null;corrected_text:string|null;reviewed_at:string|null};
const skillKey=(skill:string,id:string)=>`${skill}:${id}`;
// Browser MediaRecorder records compressed audio; Azure short-audio REST needs 16k mono PCM WAV.
async function toAzureWav(recorded:Blob):Promise<Blob>{
  const Context=window.AudioContext;
  if(!Context)throw new Error("此瀏覽器不支援轉換錄音，請使用最新版 Safari 或 Chrome");
  const ctx=new Context();
  try{
    const decoded=await ctx.decodeAudioData(await recorded.arrayBuffer());
    if(decoded.duration>30.3)throw new Error("每次口說最長 30 秒，請重新錄製");
    const samples=Math.round(decoded.duration*16000),mixed=new Float32Array(samples);
    for(let i=0;i<samples;i++){
      const source=i*decoded.sampleRate/16000,lower=Math.floor(source),upper=Math.min(decoded.length-1,lower+1),fraction=source-lower;
      let v=0;
      for(let c=0;c<decoded.numberOfChannels;c++){const channel=decoded.getChannelData(c);v+=((channel[lower]??0)*(1-fraction)+(channel[upper]??0)*fraction)/decoded.numberOfChannels;}
      mixed[i]=Math.max(-1,Math.min(1,v));
    }
    const out=new ArrayBuffer(44+samples*2),view=new DataView(out);
    const tag=(offset:number,text:string)=>{for(let i=0;i<text.length;i++)view.setUint8(offset+i,text.charCodeAt(i))};
    tag(0,"RIFF");view.setUint32(4,36+samples*2,true);tag(8,"WAVE");tag(12,"fmt ");view.setUint32(16,16,true);
    view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,16000,true);view.setUint32(28,32000,true);
    view.setUint16(32,2,true);view.setUint16(34,16,true);tag(36,"data");view.setUint32(40,samples*2,true);
    mixed.forEach((v,i)=>view.setInt16(44+i*2,Math.round(v<0?v*32768:v*32767),true));
    return new Blob([out],{type:"audio/wav"});
  }finally{await ctx.close()}
}
const has=(id:string,list:readonly string[])=>list.includes(id);

export default function ChineseStage3Week1(){
  const [session,setSession]=useState(0);
  const [userId,setUserId]=useState("");
  const [role,setRole]=useState("student");
  const [ready,setReady]=useState(false);
  const [status,setStatus]=useState("正在讀取登入及學習進度…");
  const [progress,setProgress]=useState<ProgressState>(emptyProgress);
  const [revision,setRevision]=useState(0);
  const [flashIndex,setFlashIndex]=useState(0);
  const [flipped,setFlipped]=useState(false);
  const [checkedAnswers,setCheckedAnswers]=useState<string[]>([]);
  const [shownTranslation,setShownTranslation]=useState<string[]>([]);
  const [shownDictation,setShownDictation]=useState<string[]>([]);
  const [shownSpeaking,setShownSpeaking]=useState<string[]>([]);
  const [uploads,setUploads]=useState<Upload[]>([]);
  const [feedbacks,setFeedbacks]=useState<Record<string,Feedback>>({});
  const [parentReviews,setParentReviews]=useState<Record<string,ParentReview>>({});
  const [busy,setBusy]=useState(false);
  const [audioBusy,setAudioBusy]=useState("");
  const [micBusy,setMicBusy]=useState(false);
  const [recordUrl,setRecordUrl]=useState("");
  const [micError,setMicError]=useState("");
  const [recordingTask,setRecordingTask]=useState("");
  const [recordedTask,setRecordedTask]=useState("");
  const [recordBlob,setRecordBlob]=useState<Blob|null>(null);
  const recordingTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const [skillReviews,setSkillReviews]=useState<Record<string,SkillReview>>({});
  const [skillBusy,setSkillBusy]=useState("");
  const [translationInputs,setTranslationInputs]=useState<Record<string,string>>({});
  const [skillError,setSkillError]=useState("");
  const recorder=useRef<MediaRecorder|null>(null);
  const streamRef=useRef<MediaStream|null>(null);
  const recordUrlRef=useRef("");
  const audioCache=useRef<Record<string,string>>({});
  const latestAudio=useRef<HTMLAudioElement|null>(null);

  useEffect(()=>{
    let active=true;
    const start=async()=>{
      try{
        if(!db)throw new Error("Supabase 環境變數未設定");
        const {data:{user},error:userError}=await db.auth.getUser();
        if(userError||!user)throw new Error("請先登入 Greta 或 Mathis 帳戶");
        const [saved,profile,files]=await Promise.all([
          db.from("chinese_stage3_progress").select("answers").eq("user_id",user.id).eq("week",1).maybeSingle(),
          db.from("profiles").select("role").eq("id",user.id).maybeSingle(),
          db.from("chinese_stage3_uploads").select("id,user_id,object_path,file_name,created_at").eq("user_id",user.id).eq("week",1).order("created_at",{ascending:false}),
        ]);
        if(saved.error)throw new Error("請先執行 Stage 3 Week 1 的 Supabase SQL："+saved.error.message);
        if(files.error)throw new Error("無法讀取上傳紀錄："+files.error.message);
        if(!active)return;
        const incoming=saved.data?.answers as Partial<ProgressState>|undefined;
        setProgress({...emptyProgress(),...incoming});
        setUserId(user.id);setRole(profile.data?.role??"student");setUploads((files.data??[]) as Upload[]);
        setReady(true);setStatus("已載入個人進度 · 答案會自動儲存到 Supabase");
      }catch(e){if(active)setStatus(e instanceof Error?e.message:"載入失敗");}
    };
    void start();
    return()=>{active=false};
  },[]);

  useEffect(()=>{
    if(!ready||!userId||revision===0||!db)return;
    setStatus("正在儲存…");
    const t=setTimeout(async()=>{
      const {error}=await db.from("chinese_stage3_progress").upsert({user_id:userId,week:1,answers:progress,updated_at:new Date().toISOString()},{onConflict:"user_id,week"});
      setStatus(error?"儲存失敗："+error.message:"已儲存至 Supabase");
    },650);
    return()=>clearTimeout(t);
  },[progress,revision,ready,userId]);

  useEffect(()=>{
    return()=>{
      latestAudio.current?.pause();
      Object.values(audioCache.current).forEach(url=>URL.revokeObjectURL(url));
      if(recordUrlRef.current)URL.revokeObjectURL(recordUrlRef.current);
      if(recordingTimer.current)clearTimeout(recordingTimer.current);
      streamRef.current?.getTracks().forEach(t=>t.stop());
    };
  },[]);

  function update(fn:(old:ProgressState)=>ProgressState){setProgress(old=>fn(old));setRevision(x=>x+1);}
  function toggleKey<K extends "vocabSeen"|"translationChecked"|"speakingPractised">(key:K,id:string){
    update(old=>({...old,[key]:has(id,old[key])?old[key].filter(x=>x!==id):[...old[key],id]}));
  }
  function selectAnswer(type:"reading"|"listening",id:string,choice:number){
    update(old=>({...old,[type]:{...old[type],[id]:choice}}));
  }
  function setDictation(id:string,result:"correct"|"review"){
    update(old=>({...old,dictation:{...old.dictation,[id]:result}}));
  }
  const s1QuestionsDone=readingQuestions.every(q=>Object.prototype.hasOwnProperty.call(progress.reading,q.id));
  const s2QuestionsDone=listeningQuestions.every(q=>Object.prototype.hasOwnProperty.call(progress.listening,q.id));
  const speakingGraded=speakingPrompts.filter(t=>!!skillReviews[skillKey("speaking",t.id)]).length;
  const translationGraded=translationTasks.filter(t=>!!skillReviews[skillKey("translation",t.id)]).length;
  const canComplete=[
    progress.vocabSeen.length===8&&s1QuestionsDone,
    s2QuestionsDone&&speakingGraded===3,
    Object.keys(progress.dictation).length===8&&translationGraded===2,
    uploads.length>0,
  ];
  function markSession(){
    if(!canComplete[session]){setStatus("請先完成此 Session 的所有必要活動");return;}
    update(old=>({...old,sessionsCompleted:has(String(session),old.sessionsCompleted.map(String))?old.sessionsCompleted:[...old.sessionsCompleted,session]}));
    setStatus("本節已標記完成，進度正在儲存");
  }

  async function playClip(id:string){
    if(!db)return;
    setAudioBusy(id);setStatus("正在準備廣東話錄音…");
    try{
      let src=audioCache.current[id];
      if(!src){
        const {data:{session}}=await db.auth.getSession();
        if(!session)throw new Error("請重新登入");
        const response=await fetch("/api/chinese-gcse/learning/listening",{method:"POST",headers:{Authorization:`Bearer ${session.access_token}`,"Content-Type":"application/json"},body:JSON.stringify({clipId:id})});
        if(!response.ok){const e=await response.json().catch(()=>({}));throw new Error(e.error??"播放失敗");}
        src=URL.createObjectURL(await response.blob());audioCache.current[id]=src;
      }
      latestAudio.current?.pause();const audio=new Audio(src);latestAudio.current=audio;await audio.play();
      setStatus("正在播放廣東話錄音 · 重播同一段會使用已載入音檔");
    }catch(e){setStatus(e instanceof Error?e.message:"錄音失敗");}finally{setAudioBusy("");}
  }

  async function loadSkills(user:string){
    if(!db)return;
    const {data,error}=await db.from("chinese_stage3_skill_reviews").select("*").eq("user_id",user).eq("week",1);
    if(error){setSkillError("無法載入 Speaking / Translation 評語，請先執行 AI Grading v2 SQL："+error.message);return;}
    setSkillReviews(Object.fromEntries(((data??[]) as SkillReview[]).map(r=>[skillKey(r.skill,r.task_id),r])));
    setSkillError("");
  }
  useEffect(()=>{if(ready&&userId)void loadSkills(userId)},[ready,userId]);
  useEffect(()=>{const onFocus=()=>{if(ready&&userId)void loadSkills(userId)};window.addEventListener("focus",onFocus);return()=>window.removeEventListener("focus",onFocus)},[ready,userId]);
  async function submitSkill(skill:"speaking"|"translation",id:string,objectPath?:string){
    if(!db||!userId||skillBusy)return;
    setSkillBusy(skillKey(skill,id));setSkillError("");setStatus("AI 正在批改，請稍候…");
    try{
      const {data:{session}}=await db.auth.getSession();if(!session)throw new Error("登入已失效，請重新登入");
      let res:Response;
      if(skill==="speaking"){
        if(!recordBlob||recordedTask!==id)throw new Error("請先錄製此題的廣東話答案");
        const audio=await toAzureWav(recordBlob);
        const form=new FormData();form.append("taskId",id);form.append("audio",audio,"response.wav");
        res=await fetch("/api/chinese-gcse/learning/speaking",{method:"POST",headers:{Authorization:`Bearer ${session.access_token}`},body:form});
      }else{
        const answer=(translationInputs[id]??"").trim();
        if(!objectPath&&!answer)throw new Error("請先輸入翻譯或上傳手寫圖片");
        res=await fetch("/api/chinese-gcse/learning/translation",{method:"POST",headers:{Authorization:`Bearer ${session.access_token}`,"Content-Type":"application/json"},body:JSON.stringify({taskId:id,...(objectPath?{objectPath}:{answerText:answer})})});
      }
      const result=await res.json().catch(()=>({}));if(!res.ok)throw new Error(result.error??"AI 批改失敗");
      await loadSkills(userId);setStatus(result.cached?"已讀取之前儲存的 AI 評語":"AI 初步評語已儲存 · 等待家長覆核");
    }catch(e){const msg=e instanceof Error?e.message:"未知錯誤";setSkillError(msg);setStatus("批改失敗："+msg)}finally{setSkillBusy("");}
  }
  async function submitTranslationPhoto(taskId:string,file:File){
    if(!db||!userId||skillBusy)return;
    if(!["image/jpeg","image/png","image/webp"].includes(file.type)||file.size>4*1024*1024){setSkillError("只支援 JPG / PNG / WebP，最大 4MB");return;}
    setSkillBusy("upload:"+taskId);setSkillError("");
    const ext=file.type==="image/png"?"png":file.type==="image/webp"?"webp":"jpg";
    const path=`${userId}/stage3/week-01/translation/${taskId}/${crypto.randomUUID()}.${ext}`;
    try{
      const r=await db.storage.from("chinese-handwriting").upload(path,file,{contentType:file.type,upsert:false});
      if(r.error)throw new Error(r.error.message);
    }catch(e){setSkillError("手寫圖片上傳失敗："+(e instanceof Error?e.message:"未知錯誤"));setSkillBusy("");return;}
    setSkillBusy("");await submitSkill("translation",taskId,path);
  }
  function renderSkillFeedback(skill:"speaking"|"translation",taskId:string){
    const review=skillReviews[skillKey(skill,taskId)];if(!review)return null;
    const f=review.feedback;
    return <div className="ch3-review" role="status">
      <strong>{review.reviewed_at?"✓ 家長已確認":"AI 初步評語 · 待家長確認"}</strong>
      <p><strong>{skill==="speaking"?"粵語辨識文字":"學生作答原文"}：</strong>{f.transcription||review.input_text||"（沒有文字）"}</p>
      <p>AI 初步分數：<strong>{f.provisional_score}/10</strong> · 內容 {f.breakdown?.content??"—"}/4 · 語言 {f.breakdown?.language??"—"}/4 · 清晰度 {f.breakdown?.clarity??"—"}/2</p>
      {f.pronunciation_reference&&<p className="ch3-muted">Azure 發音參考：準確度 {f.pronunciation_reference.accuracy??"—"}/100、流暢度 {f.pronunciation_reference.fluency??"—"}/100。{f.pronunciation_reference.note}</p>}
      {review.reviewed_at&&<p><strong>家長確認：{review.final_score}/10</strong> · {review.corrected_text}</p>}
      {!!f.strengths?.length&&<><strong>優點</strong><ul>{f.strengths.map((v,i)=><li key={i}>{v}</li>)}</ul></>}
      {!!f.improvements?.length&&<><strong>改善建議</strong><ul>{f.improvements.map((v,i)=><li key={i}>{v}</li>)}</ul></>}
      <p className="ch3-muted">{f.score_reason}</p>
    </div>;
  }
  async function startRecording(taskId:string){
    if(micBusy)return;
    setMicError("");
    try{
      if(typeof MediaRecorder==="undefined"||!navigator.mediaDevices?.getUserMedia)throw new Error("此瀏覽器暫時不支援錄音，請用 HTTPS 網站或 Safari/Chrome");
      const stream=await navigator.mediaDevices.getUserMedia({audio:true});streamRef.current=stream;
      const chunks:BlobPart[]=[];
      const r=new MediaRecorder(stream);recorder.current=r;
      r.ondataavailable=e=>{if(e.data.size>0)chunks.push(e.data)};
      r.onstop=()=>{
        if(recordingTimer.current){clearTimeout(recordingTimer.current);recordingTimer.current=null;}
        const audioBlob=new Blob(chunks,{type:r.mimeType||"audio/webm"});
        const url=URL.createObjectURL(audioBlob);
        setRecordBlob(audioBlob);setRecordedTask(taskId);setRecordingTask("");
        if(recordUrlRef.current)URL.revokeObjectURL(recordUrlRef.current);
        recordUrlRef.current=url;setRecordUrl(url);setMicBusy(false);
        stream.getTracks().forEach(t=>t.stop());streamRef.current=null;
      };
      r.start();setMicBusy(true);setRecordingTask(taskId);setRecordBlob(null);setRecordedTask("");
      recordingTimer.current=setTimeout(()=>{if(r.state==="recording")r.stop()},28000);
    }catch(e){setMicError(e instanceof Error?e.message:"錄音失敗");setMicBusy(false);}
  }
  function stopRecording(){if(recorder.current?.state==="recording")recorder.current.stop();}
  async function reloadWriting(){
    if(!db||!userId)return;
    const [f,r,p]=await Promise.all([
      db.from("chinese_stage3_uploads").select("id,user_id,object_path,file_name,created_at").eq("user_id",userId).eq("week",1).order("created_at",{ascending:false}),
      db.from("chinese_stage3_ai_reviews").select("upload_id,feedback").eq("user_id",userId),
      db.from("chinese_stage3_parent_reviews").select("upload_id,corrected_transcription,final_score,reviewed_at").eq("student_id",userId),
    ]);
    if(f.error||r.error||p.error){setStatus(f.error?.message??r.error?.message??p.error?.message??"讀取失敗");return;}
    setUploads((f.data??[]) as Upload[]);
    setFeedbacks(Object.fromEntries((r.data??[]).map(x=>[x.upload_id,x.feedback])));
    setParentReviews(Object.fromEntries((p.data??[]).map(x=>[x.upload_id,x])));
  }
  useEffect(()=>{if(ready&&userId)void reloadWriting();},[ready,userId]);
  useEffect(()=>{const fn=()=>{if(ready&&userId)void reloadWriting()};window.addEventListener("focus",fn);return()=>window.removeEventListener("focus",fn)},[ready,userId]);

  async function uploadFile(file:File){
    if(!db||!userId)return;
    setBusy(true);setStatus("正在上傳手寫原稿…");
    try{
      if(!["image/jpeg","image/png","image/webp"].includes(file.type))throw new Error("請先轉換成 JPG、PNG 或 WebP；HEIC / PDF 暫不支援 AI 辨識");
      if(file.size>5*1024*1024)throw new Error("圖片大小不可超過 5 MB");
      const ext=file.type==="image/png"?"png":file.type==="image/webp"?"webp":"jpg";
      const path=`${userId}/stage3/week-01/school-message/${crypto.randomUUID()}.${ext}`;
      const result=await db.storage.from("chinese-handwriting").upload(path,file,{contentType:file.type,upsert:false});
      if(result.error)throw new Error(result.error.message);
      const inserted=await db.from("chinese_stage3_uploads").insert({user_id:userId,week:1,task_id:"school-message",object_path:path,file_name:file.name,content_type:file.type});
      if(inserted.error){await db.storage.from("chinese-handwriting").remove([path]);throw new Error(inserted.error.message);}
      await reloadWriting();setStatus("已儲存手寫原稿 · 可按 AI 初步批改");
    }catch(e){setStatus("上傳失敗："+(e instanceof Error?e.message:"未知錯誤"));}finally{setBusy(false);}
  }
  async function viewUpload(path:string){
    if(!db)return;
    const {data,error}=await db.storage.from("chinese-handwriting").createSignedUrl(path,90);
    if(error||!data){setStatus("圖片無法開啟："+(error?.message??"未知錯誤"));return;}
    window.open(data.signedUrl,"_blank","noopener,noreferrer");
  }
  async function markUpload(id:string){
    if(!db)return;
    setBusy(true);setStatus("AI 正在辨識及批改手寫原稿…");
    try{
      const {data:{session}}=await db.auth.getSession();
      if(!session)throw new Error("請重新登入");
      const result=await fetch("/api/chinese-gcse/learning/mark",{method:"POST",headers:{Authorization:`Bearer ${session.access_token}`,"Content-Type":"application/json"},body:JSON.stringify({uploadId:id})});
      const json=await result.json();if(!result.ok)throw new Error(json.error??"批改失敗");
      await reloadWriting();setStatus(json.cached?"已載入之前儲存的 AI 評語":"AI 初步評語已儲存；請家長核對原稿");
    }catch(e){setStatus(e instanceof Error?e.message:"批改失敗");}finally{setBusy(false);}
  }

  const currentWord=vocabulary[flashIndex];
  return <main className="ch3-wrap">
    <header className="ch3-header">
      <Link href="/chinese-gcse" className="ch3-back">← 返回 GCSE Chinese</Link>
      <div className="ch3-eyebrow">PW LEARNING HUB · STAGE 3 · WEEK 1</div>
      <h1>School Life <span>學校生活</span></h1>
      <p>Traditional Chinese · Hong Kong Cantonese · Edexcel GCSE preparation · 同一課程，各自儲存進度</p>
      {role==="parent"&&<Link className="ch3-parent-link" href="/chinese-gcse/learning/parent">查看 Stage 3 家長進度 →</Link>}
    </header>
    <section className="ch3-overview">
      <div className="ch3-between"><strong>Week 1 學習進度</strong><span>{progress.sessionsCompleted.length}/4 Sessions</span></div>
      <div className="ch3-track"><div style={{width:`${progress.sessionsCompleted.length/4*100}%`}}/></div>
      <p role="status" className="ch3-status">{status}</p>
    </section>
    <nav className="ch3-tabs" aria-label="Week 1 session navigation">
      {SECTIONS.map((name,i)=><button key={name} className={session===i?"active":""} onClick={()=>setSession(i)} type="button">
        <span className="ch3-tabnum">{progress.sessionsCompleted.includes(i)?"✓":i+1}</span>
        <span><strong>Session {i+1}</strong><small>{name}</small></span>
      </button>)}
    </nav>
    {!ready?<section className="ch3-card"><p>{status}</p><Link href="/login">登入</Link></section>:<>
      {session===0&&<section className="ch3-card">
        <div className="ch3-section-label">PAPER 3 · READING + WEEKLY VOCABULARY</div>
        <h2>Session 1 — 認識 8 個 GCSE 常用詞語</h2>
        <p className="ch3-muted">先看繁體中文，試說出英文意思；翻卡後閱讀例句。每個詞都要明白才勾選「已學習」。</p>
        <div className="ch3-flash" onClick={()=>setFlipped(x=>!x)} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setFlipped(x=>!x)}}}>
          <small>{flashIndex+1} / 8 · 點擊翻卡</small>
          <strong>{flipped?currentWord.english:currentWord.traditional}</strong>
          <span>{flipped?<>{currentWord.jyutping}<br/>{currentWord.sentence}<br/><i>{currentWord.translation}</i></>:"先想英文意思，再查看答案"}</span>
        </div>
        <div className="ch3-between ch3-actions">
          <button className="ch3-button" disabled={flashIndex===0} onClick={()=>{setFlashIndex(x=>x-1);setFlipped(false)}}>← 上一詞</button>
          <label><input type="checkbox" checked={has(currentWord.id,progress.vocabSeen)} onChange={()=>toggleKey("vocabSeen",currentWord.id)}/> 已學習</label>
          <button className="ch3-button ch3-primary" disabled={flashIndex===vocabulary.length-1} onClick={()=>{setFlashIndex(x=>x+1);setFlipped(false)}}>下一詞 →</button>
        </div>
        <div className="ch3-vocab-pills">{vocabulary.map((v,i)=><button key={v.id} className={flashIndex===i?"active":""} onClick={()=>{setFlashIndex(i);setFlipped(false)}}>{i+1}{has(v.id,progress.vocabSeen)?" ✓":""}</button>)}</div>
        <div className="ch3-divider"/>
        <h3>Original GCSE-style Reading</h3>
        <p className="ch3-muted">閱讀繁體中文文章，然後用英文理解題目。</p>
        <div className="ch3-passage" lang="zh-Hant">{readingText}</div>
        {readingQuestions.map((q,i)=><div key={q.id} className="ch3-question">
          <strong>{i+1}. {q.question}</strong>
          {q.choices.map((a,j)=><label key={a} className="ch3-choice"><input type="radio" name={q.id} checked={progress.reading[q.id]===j} onChange={()=>selectAnswer("reading",q.id,j)}/>{a}</label>)}
          {Object.prototype.hasOwnProperty.call(progress.reading,q.id)&&<button className="ch3-linkbutton" onClick={()=>setCheckedAnswers(p=>has(q.id,p)?p.filter(x=>x!==q.id):[...p,q.id])}>{has(q.id,checkedAnswers)?"收起解析":"檢查答案與解釋"}</button>}
          {has(q.id,checkedAnswers)&&<p className="ch3-feedback"><strong>{progress.reading[q.id]===q.correct?"✓ Correct":"需要重溫"}</strong> · {q.explanation}</p>}
        </div>)}
        <p className="ch3-muted">Reading 練習：{Object.keys(progress.reading).length}/4 題已答 · 正確 {correctness(progress.reading,readingQuestions)}/4</p>
      </section>}
      {session===1&&<section className="ch3-card">
        <div className="ch3-section-label">PAPER 1 · LISTENING / PAPER 2 · SPEAKING</div>
        <h2>Session 2 — 廣東話聆聽及口試</h2>
        <p className="ch3-muted">先聽完整段錄音，再用英文回答。音檔由現有 Azure F0 產生，重播已載入音檔毋須重新合成。</p>
        {listeningClips.map(clip=><div key={clip.id} className="ch3-clip">
          <div className="ch3-between"><strong>{clip.title}</strong><button className="ch3-button" disabled={!!audioBusy} onClick={()=>void playClip(clip.id)}>{audioBusy===clip.id?"正在載入…":"▶ 廣東話播放 / 重播"}</button></div>
          {listeningQuestions.filter(q=>q.clipId===clip.id).map(q=><div className="ch3-question" key={q.id}>
            <strong>{q.question}</strong>{q.choices.map((c,i)=><label className="ch3-choice" key={c}><input type="radio" name={q.id} checked={progress.listening[q.id]===i} onChange={()=>selectAnswer("listening",q.id,i)}/>{c}</label>)}
            {Object.prototype.hasOwnProperty.call(progress.listening,q.id)&&<button className="ch3-linkbutton" onClick={()=>setCheckedAnswers(p=>has(q.id,p)?p.filter(x=>x!==q.id):[...p,q.id])}>{has(q.id,checkedAnswers)?"收起解析":"檢查答案與解釋"}</button>}
            {has(q.id,checkedAnswers)&&<p className="ch3-feedback">{progress.listening[q.id]===q.correct?"✓ Correct":"需要重溫"} · {q.explanation}</p>}
          </div>)}
        </div>)}
        <h3>Speaking · Role play / Picture practice / Conversation</h3>
        <p className="ch3-muted">先用廣東話口頭回答，再錄下來聽一次。錄音只在目前裝置播放，不會上傳或由 AI 自動評分。</p>
        <div className="ch3-picture" aria-label="原創教室示意圖：窗戶、書架、兩名學生及時鐘">
          <svg viewBox="0 0 480 160" role="img" aria-label="Classroom illustration with books and two pupils">
            <rect width="480" height="160" rx="14" fill="#eaf4f5"/>
            <rect x="20" y="20" width="90" height="85" fill="#bfdfed" stroke="#6797a0" strokeWidth="3"/>
            <path d="M65 20v85M20 62h90" stroke="#6797a0" strokeWidth="3"/>
            <rect x="345" y="33" width="106" height="95" rx="4" fill="#bdb3a7"/><rect x="353" y="44" width="87" height="10" fill="#fff"/>
            {[0,1,2,3].map(i=><rect key={i} x={357+i*20} y="60" width="15" height="40" fill={["#f0b76d","#5da59a","#9a85be","#d77e85"][i]}/>)}
            <circle cx="255" cy="35" r="23" fill="#fff" stroke="#698996" strokeWidth="3"/><path d="M255 35v-12M255 35l13 6" stroke="#698996" strokeWidth="3"/>
            <rect x="155" y="106" width="150" height="14" rx="4" fill="#b77f60"/>
            {[183,274].map((x,i)=><g key={x}><circle cx={x} cy="80" r="16" fill={i?"#e1b18c":"#d49b74"}/><path d={`M${x-24} 116v-18q24-18 48 0v18`} fill={i?"#556cba":"#398a85"}/></g>)}
          </svg>
        </div>
        <p className="ch3-muted">每題先錄製最多 28 秒粵語答案，再主動按 AI 評估。錄音在頁面內播放；只傳送至 Azure 作即時辨識，不會長期儲存音檔。AI 評分屬教學參考。</p>
        {speakingPrompts.map((s,i)=><div className="ch3-question" key={s.id}>
          <strong>{i+1}. {s.label}</strong><p>{s.english}</p>
          <button className="ch3-linkbutton" onClick={()=>setShownSpeaking(p=>has(s.id,p)?p.filter(x=>x!==s.id):[...p,s.id])}>{has(s.id,shownSpeaking)?"收起參考句":"查看廣東話參考句（建議先回答）"}</button>
          {has(s.id,shownSpeaking)&&<p className="ch3-feedback">{s.sample}</p>}
          {!skillReviews[skillKey("speaking",s.id)]&&<div className="ch3-record">
            <div className="ch3-actions">
              <button type="button" className="ch3-button" disabled={micBusy||!!skillBusy} onClick={()=>void startRecording(s.id)}>● 錄製本題</button>
              <button type="button" className="ch3-button" disabled={!micBusy||recordingTask!==s.id} onClick={stopRecording}>■ 停止</button>
              <button type="button" className="ch3-button ch3-primary" disabled={!recordBlob||recordedTask!==s.id||!!skillBusy||micBusy} onClick={()=>void submitSkill("speaking",s.id)}>{skillBusy===skillKey("speaking",s.id)?"AI 評估中…":"AI 評估這段廣東話"}</button>
            </div>
            {recordUrl&&recordedTask===s.id&&<audio controls src={recordUrl} preload="none"/>}
            {micBusy&&recordingTask===s.id&&<p>正在錄音（最多約 28 秒）…</p>}
            {micError&&<p className="ch3-error">{micError}</p>}
          </div>}
          {renderSkillFeedback("speaking",s.id)}
          <label className="ch3-inline"><input type="checkbox" checked={has(s.id,progress.speakingPractised)} onChange={()=>toggleKey("speakingPractised",s.id)}/> 已練習本題（自評紀錄）</label>
        </div>)}
        <p className="ch3-muted">Speaking AI 完成：{speakingGraded}/3 · 正式口試的發音與互動能力仍需真人評估。</p>
        {skillError&&<p role="alert" className="ch3-error">{skillError}</p>}
      </section>}
      {session===2&&<section className="ch3-card">
        <div className="ch3-section-label">VOCABULARY MASTERY · PAPER 3 + PAPER 4 TRANSLATION</div>
        <h2>Session 3 — 從英文回憶並手寫繁體字</h2>
        <p className="ch3-muted">請看英文提示，在紙上獨立默寫。寫完才顯示中文答案，然後如實標記正確或需要重溫。</p>
        <div className="ch3-dictation">
          {vocabulary.map((v,i)=><div className="ch3-dictation-row" key={v.id}>
            <div><small>{i+1}/8 · English clue</small><strong>{v.english}</strong></div>
            <div>
              <button className="ch3-button" onClick={()=>setShownDictation(p=>has(v.id,p)?p.filter(x=>x!==v.id):[...p,v.id])}>{has(v.id,shownDictation)?"隱藏答案":"寫完後顯示"}</button>
              {has(v.id,shownDictation)&&<><p className="ch3-answer">{v.traditional} <small>{v.jyutping}</small></p><div className="ch3-actions"><button className="ch3-button" onClick={()=>setDictation(v.id,"correct")}>✓ 正確</button><button className="ch3-button" onClick={()=>setDictation(v.id,"review")}>需重溫</button></div></>}
              {progress.dictation[v.id]&&<small className="ch3-muted">已記錄：{progress.dictation[v.id]==="correct"?"寫得正確":"需要重溫"}</small>}
            </div>
          </div>)}
        </div>
        <h3>GCSE-style Translation（原創練習）</h3>
        {translationTasks.map((t,i)=><div key={t.id} className="ch3-question">
          <small>{i+1}. {t.direction}</small><p><strong>{t.prompt}</strong></p>
          {!skillReviews[skillKey("translation",t.id)]&&<>
            <label className="ch3-muted" htmlFor={`ch3-${t.id}`}>選擇以下其中一種方法交卷：</label>
            <textarea id={`ch3-${t.id}`} rows={3} className="ch3-input" value={translationInputs[t.id]??""}
              onChange={e=>setTranslationInputs(old=>({...old,[t.id]:e.target.value}))} placeholder="在此輸入翻譯答案（不支援自動翻譯）"/>
            <div className="ch3-actions" style={{marginTop:10}}>
              <button type="button" className="ch3-button ch3-primary" disabled={!translationInputs[t.id]?.trim()||!!skillBusy} onClick={()=>void submitSkill("translation",t.id)}>
                {skillBusy===skillKey("translation",t.id)?"批改中…":"提交文字給 AI 批改"}
              </button>
              <label className="ch3-button">或者拍照上傳手寫答案 <input type="file" accept="image/jpeg,image/png,image/webp" style={{display:"block",maxWidth:240}} disabled={!!skillBusy} onChange={e=>{const file=e.target.files?.[0];e.target.value="";if(file)void submitTranslationPhoto(t.id,file)}}/></label>
            </div>
          </>}
          {renderSkillFeedback("translation",t.id)}
          {skillReviews[skillKey("translation",t.id)]&&<button className="ch3-linkbutton" onClick={()=>setShownTranslation(p=>has(t.id,p)?p.filter(x=>x!==t.id):[...p,t.id])}>{has(t.id,shownTranslation)?"隱藏參考譯法":"比較參考譯法"}</button>}
          {has(t.id,shownTranslation)&&skillReviews[skillKey("translation",t.id)]&&<div className="ch3-feedback"><strong>{t.sample}</strong><p>{t.note}</p></div>}
        </div>)}
        <p className="ch3-muted">Translation AI 完成：{translationGraded}/2 · 翻譯允許不同但意思正確的表達。</p>
        {skillError&&<p role="alert" className="ch3-error">{skillError}</p>}
        <div className="ch3-note">個人錯詞數量：{Object.values(progress.dictation).filter(x=>x==="review").length}。下一星期會繼續重溫，兩人的課程週次保持一致。</div>
      </section>}
      {session===3&&<section className="ch3-card">
        <div className="ch3-section-label">PAPER 4 · WRITING / PARENT REVIEW</div>
        <h2>Session 4 — 手寫短文及 AI 初步批改</h2>
        <div className="ch3-writing-task"><strong>{writingTask.title}</strong><p>{writingTask.instruction}</p><ol>{writingTask.requirements.map(s=><li key={s}>{s}</li>)}</ol><p className="ch3-muted">{writingTask.guidance}</p></div>
        <button className="ch3-button" type="button" onClick={()=>window.print()}>列印 A4 答題紙 / Save as PDF</button>
        <label className="ch3-upload"><strong>📷 拍照上傳繁體中文手寫答案</strong><span>JPG、PNG、WebP · 每張最多 5 MB</span><input type="file" accept="image/jpeg,image/png,image/webp" disabled={busy} onChange={e=>{const file=e.target.files?.[0];e.target.value="";if(file)void uploadFile(file)}}/></label>
        {uploads.length===0?<p className="ch3-muted">尚未上傳答案。正式筆跡必須保留原稿，切勿只打字。</p>:<div className="ch3-upload-list">
          {uploads.map(u=><div key={u.id} className="ch3-upload-item">
            <div className="ch3-between"><strong>{u.file_name}</strong><button className="ch3-linkbutton" onClick={()=>void viewUpload(u.object_path)}>查看原稿</button></div>
            <small>{new Date(u.created_at).toLocaleString("en-GB")}</small>
            {!feedbacks[u.id]?<button disabled={busy} className="ch3-button ch3-primary" onClick={()=>void markUpload(u.id)}>{busy?"處理中…":"AI 辨識及初步批改"}</button>:<div className="ch3-review">
              <strong>{parentReviews[u.id]?"家長已確認":"AI 初步評語 · 等待家長覆核"}</strong>
              <p>AI 辨識原文：{feedbacks[u.id].transcription}</p>
              <p>AI 初步分數：{feedbacks[u.id].provisional_score}/10</p>
              {parentReviews[u.id]&&<><p><strong>家長最終分數：{parentReviews[u.id].final_score}/10</strong></p><p>家長核對後原文：{parentReviews[u.id].corrected_transcription}</p></>}
              {feedbacks[u.id].uncertain?.length>0&&<p>不確定字詞：{feedbacks[u.id].uncertain.join("、")}</p>}
              <strong>優點</strong><ul>{feedbacks[u.id].strengths?.map((s,i)=><li key={i}>{s}</li>)}</ul>
              <strong>改善建議</strong><ul>{feedbacks[u.id].improvements?.map((s,i)=><li key={i}>{s}</li>)}</ul>
              <p>{feedbacks[u.id].score_reason}</p><small>AI 評分只是教學參考；家長需核對手寫原稿。每份已批改原稿再次查看不會重複呼叫 AI。</small>
            </div>}
          </div>)}
        </div>}
      </section>}
      <footer className="ch3-bottom">
        <button className="ch3-button" disabled={session===0} onClick={()=>setSession(x=>x-1)}>← 上一節</button>
        <button className="ch3-button ch3-primary" disabled={!canComplete[session]} onClick={markSession}>{progress.sessionsCompleted.includes(session)?"✓ 此節已完成":"標記本節完成"}</button>
        <button className="ch3-button" disabled={session===3} onClick={()=>setSession(x=>x+1)}>下一節 →</button>
      </footer>
      <p className="ch3-muted ch3-caveat">本週所有文章、錄音稿及題目均為原創 GCSE-style 練習，非 Pearson 官方試題或正式 GCSE 評分。</p>
    </>}
    <div className="ch3-print-only">
      <h2>PW Learning Hub · GCSE Chinese · Stage 3 · Week 1</h2><p>姓名：________________ 日期：________________</p>
      <h3>{writingTask.title}</h3><p>{writingTask.instruction}</p>
      <ol>{writingTask.requirements.map(x=><li key={x}>{x}</li>)}</ol>
      <div className="ch3-print-lines">{Array.from({length:12},(_,i)=><div key={i}/>)}</div>
    </div>
  </main>;
}
