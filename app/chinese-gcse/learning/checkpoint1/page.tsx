"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {createClient} from "@supabase/supabase-js";
import {targetWords,readingText,reading,listeningScripts,speaking,translations,writing} from "@/data/chineseGcse/checkpoint1";
const url=process.env.NEXT_PUBLIC_SUPABASE_URL, key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const db=url&&key?createClient(url,key):null;
type Answers={reading:Record<string,number>;listening:Record<string,number>;dictation:Record<string,"correct"|"review">;translation:Record<string,string>;speaking:Record<string,string>;writingAcknowledged:boolean};
const empty=():Answers=>({reading:{},listening:{},dictation:{},translation:{},speaking:{},writingAcknowledged:false});
const card:React.CSSProperties={background:"#fff",border:"1px solid #dae6e7",borderRadius:16,padding:20,marginBottom:17};
const action:React.CSSProperties={padding:"10px 15px",border:"1px solid #aac3c0",borderRadius:9,background:"#ecf8f3",cursor:"pointer",color:"#154f45"};
export default function Checkpoint1(){
 const [user,setUser]=useState("");const [answers,setAnswers]=useState<Answers>(empty());
 const [submitted,setSubmitted]=useState(false);const [reviewed,setReviewed]=useState<number|null>(null);const [objectiveResult,setObjectiveResult]=useState<{objectiveCorrect:number;objectiveTotal:number}|null>(null);
 const [message,setMessage]=useState("正在確認帳戶…");const [busy,setBusy]=useState(false);
 const [showHelp,setShowHelp]=useState(false);const [section,setSection]=useState(0);
 const [unlocked,setUnlocked]=useState(false);const [media,setMedia]=useState<Record<string,{id:string;kind:string;object_path:string;task_id:string}>>({});
 const [mediaBusy,setMediaBusy]=useState("");const [aiBusy,setAiBusy]=useState("");const [aiFeedback,setAiFeedback]=useState<Record<string,{transcription:string;provisional_score:number;strengths:string[];improvements:string[];score_reason:string}>>({});const [mediaError,setMediaError]=useState("");
 const [listeningBusy,setListeningBusy]=useState("");
 const [audioRecorder,setAudioRecorder]=useState<MediaRecorder|null>(null);
 const recorderChunks=useRef<BlobPart[]>([]);
 const activeStream=useRef<MediaStream|null>(null);
 const [recordingTask,setRecordingTask]=useState("");
 useEffect(()=>{let mounted=true;(async()=>{try{
  if(!db)throw Error("缺少 Supabase 環境設定");
  const {data:{user:u},error:auth}=await db.auth.getUser();if(auth||!u)throw Error("請先登入學生帳戶");
  const {data:profile}=await db.from('profiles').select('role').eq('id',u.id).maybeSingle();
  if(profile?.role==='parent')throw Error("請用學生帳戶作答；Daddy 請進入家長檢視頁");
  const {data:gate,error:gateError}=await db.rpc('ch3_cp1_eligible',{p_uid:u.id});
  if(gateError)throw Error('Checkpoint 尚未啟用，請家長核實 SQL 設定：'+gateError.message);
  if(!gate)throw Error('尚未解鎖：請先完成 Week 1、2、3、4 的所有 Sessions。');
  const {data:mediaRows,error:mediaReadError}=await db.from('chinese_stage3_checkpoint_media').select('id,kind,object_path,task_id,ai_feedback').eq('user_id',u.id).eq('checkpoint_id','weeks1-4');
  if(mediaReadError)throw Error('未能載入原稿及錄音：'+mediaReadError.message);
  const {data, error}=await db.from('chinese_stage3_checkpoints').select('answers,submitted_at,parent_score,submitted_result').eq('user_id',u.id).eq('checkpoint_id','weeks1-4').maybeSingle();
  if(error)throw Error('請先執行 Checkpoint SQL：'+error.message);
  if(mounted){setUnlocked(true);setMedia(Object.fromEntries((mediaRows??[]).map(r=>[r.kind+':'+r.task_id,r])));setAiFeedback(Object.fromEntries((mediaRows??[]).filter(r=>r.ai_feedback).map(r=>[r.kind+':'+r.task_id,r.ai_feedback])));setUser(u.id);if(data?.answers)setAnswers({...empty(),...data.answers} as Answers);setSubmitted(Boolean(data?.submitted_at));setReviewed(data?.parent_score??null);setObjectiveResult(data?.submitted_result??null);setMessage(data?.submitted_at?'已提交並鎖定；不能再修改':'未提交，可儲存草稿');}
 }catch(e){if(mounted)setMessage(e instanceof Error?e.message:'載入失敗');}})();return()=>{mounted=false};},[]);
 const update=(next:Answers)=>{if(!submitted)setAnswers(next)};
 async function save(final:boolean){if(!db||!user||busy||submitted||!unlocked)return;
  if(final&&!window.confirm('正式提交後所有答案將鎖定，不能更改。確認提交？'))return;
  setBusy(true);setMessage('正在儲存…');
  try{
   if(final){
    if(reading.some(q=>!Object.prototype.hasOwnProperty.call(answers.reading,q.id))||listeningScripts.some(c=>c.questions.some(q=>!Object.prototype.hasOwnProperty.call(answers.listening,q.id))))throw Error('請完成全部 Reading / Listening 題目');
    if(Object.keys(answers.dictation).length!==32)throw Error('請記錄全部 32 個詞彙默寫結果');
    if(!media['speaking:role']||!media['speaking:conversation']||!media['writing:essay']||!media['dictation:words']||!media['translation:translations'])throw Error('請上載兩段口說錄音及三份手寫原稿（默寫、翻譯、作文）');
    if(!answers.translation.t1?.trim()||!answers.translation.t2?.trim()||!answers.writingAcknowledged)throw Error('請完成兩道翻譯並確認作文');
   }
   const payload={user_id:user,checkpoint_id:'weeks1-4',answers,submitted_at:final?new Date().toISOString():null,submitted_result:null,updated_at:new Date().toISOString()};
   const {data:existing,error:readError}=await db.from('chinese_stage3_checkpoints').select('user_id').eq('user_id',user).eq('checkpoint_id','weeks1-4').maybeSingle();
   if(readError)throw Error(readError.message);
   if(!existing&&final){const seeded=await db.from('chinese_stage3_checkpoints').insert({...payload,submitted_at:null});if(seeded.error)throw Error(seeded.error.message);}
   const result=existing||final?await db.from('chinese_stage3_checkpoints').update(payload).eq('user_id',user).eq('checkpoint_id','weeks1-4'):await db.from('chinese_stage3_checkpoints').insert(payload);
   if(result.error)throw Error(result.error.message);
   if(final){setSubmitted(true);const {data:graded}=await db.from('chinese_stage3_checkpoints').select('submitted_result').eq('user_id',user).eq('checkpoint_id','weeks1-4').maybeSingle();setObjectiveResult(graded?.submitted_result??null);}setMessage(final?'提交成功，已鎖定，客觀分數由資料庫計算':'草稿已儲存至 Supabase');
  }catch(e){setMessage('儲存失敗：'+(e instanceof Error?e.message:'未知錯誤'));}finally{setBusy(false)}
 }
 async function playClip(id:string){
  if(!db||!user||listeningBusy)return;
  setListeningBusy(id);
  try{const {data:{session}}=await db.auth.getSession();if(!session)throw Error('請重新登入');
   const res=await fetch('/api/chinese-gcse/learning/checkpoint1/listening',{method:'POST',headers:{Authorization:`Bearer ${session.access_token}`,'Content-Type':'application/json'},body:JSON.stringify({clipId:id})});
   if(!res.ok){const j=await res.json().catch(()=>({}));throw Error(j.error??'廣東話音檔讀取失敗');}
   const source=URL.createObjectURL(await res.blob());const audio=new Audio(source);audio.onended=()=>URL.revokeObjectURL(source);
   await audio.play();
  }catch(e){setMessage(e instanceof Error?e.message:'無法播放');}finally{setListeningBusy('');}
 }

async function uploadEvidence(
  kind: 'writing' | 'speaking' | 'dictation' | 'translation',
  taskId: string,
  blob: Blob
) {
  if (!db || !user || submitted || mediaBusy) return;

  const k = kind + ':' + taskId;

  if (media[k]) {
    setMediaError('已有此題原稿，不能重複上載');
    return;
  }

  const allowed =
    kind !== 'speaking'
      ? ['image/jpeg', 'image/png', 'image/webp']
      : ['audio/webm', 'audio/mp4', 'audio/wav'];

  if (
    !allowed.includes(blob.type) ||
    blob.size > 8 * 1024 * 1024 ||
    blob.size === 0
  ) {
    setMediaError('檔案格式或大小不符合要求（最大 8MB）');
    return;
  }

  setMediaBusy(k);
  setMediaError('');

  const ext =
    blob.type === 'image/jpeg'
      ? 'jpg'
      : blob.type === 'image/png'
        ? 'png'
        : blob.type === 'image/webp'
          ? 'webp'
          : blob.type === 'audio/mp4'
            ? 'mp4'
            : blob.type === 'audio/wav'
              ? 'wav'
              : 'webm';

  const uploadId =
    globalThis.crypto?.randomUUID?.() ??
    `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const path = `${user}/checkpoint1/${kind}/${taskId}/${uploadId}.${ext}`;

  try {
    const up = await db.storage
      .from('chinese-checkpoint-private')
      .upload(path, blob, {
        contentType: blob.type,
        upsert: false,
      });

    if (up.error) {
      throw Error('STORAGE: ' + up.error.message);
    }

    const row = await db
      .from('chinese_stage3_checkpoint_media')
      .insert({
        user_id: user,
        checkpoint_id: 'weeks1-4',
        kind,
        task_id: taskId,
        object_path: path,
        mime_type: blob.type,
      })
      .select('id,kind,object_path,task_id,ai_feedback')
      .single();

    if (row.error) {
      await db.storage
        .from('chinese-checkpoint-private')
        .remove([path]);

      throw Error('MEDIA: ' + row.error.message);
    }

    setMedia((prev) => ({
      ...prev,
      [k]: row.data,
    }));

    setMessage(
      '已安全保存 ' + (kind === 'speaking' ? '廣東話錄音' : '手寫原稿')
    );
  } catch (e) {
    setMediaError(e instanceof Error ? e.message : '上載失敗');
  } finally {
    setMediaBusy('');
  }
}

 async function assessEvidence(k:string){
   if(!db||!media[k]||aiBusy)return;setAiBusy(k);setMediaError('');
   try{const {data:{session}}=await db.auth.getSession();if(!session)throw Error('請重新登入');
    const res=await fetch('/api/chinese-gcse/learning/checkpoint1/assess',{method:'POST',headers:{Authorization:`Bearer ${session.access_token}`,'Content-Type':'application/json'},body:JSON.stringify({mediaId:media[k].id}),signal:AbortSignal.timeout(57000)});
    const result=await res.json().catch(()=>({}));if(!res.ok)throw Error(result.error??`AI 評估失敗（${res.status}）`);
    setAiFeedback(old=>({...old,[k]:result.feedback}));setMessage('AI 暫定評語已儲存 · 家長須覆核');
   }catch(e){setMediaError(e instanceof Error?e.message:'評估失敗');}finally{setAiBusy('');}
 }
 function showFeedback(k:string){const f=aiFeedback[k];if(!f)return null;return <div style={{background:'#edf8f4',padding:12,borderRadius:8,marginTop:8}}><strong>AI 初步評分 {f.provisional_score}/10（須家長覆核）</strong><p>辨識文字：{f.transcription}</p><p>優點：{f.strengths.join('；')}</p><p>建議：{f.improvements.join('；')}</p><p>{f.score_reason}</p></div>}
 async function viewEvidence(k:string){const m=media[k];if(!m||!db)return;const {data,error}=await db.storage.from('chinese-checkpoint-private').createSignedUrl(m.object_path,90);
  if(error||!data){setMediaError('原稿讀取失敗');return;}window.open(data.signedUrl,'_blank','noopener,noreferrer');}
 async function startRecording(id:string){if(audioRecorder||submitted)return;
  try{if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==='undefined')throw Error('此瀏覽器不支援錄音');
   const stream=await navigator.mediaDevices.getUserMedia({audio:true});activeStream.current=stream;recorderChunks.current=[];
   const r=new MediaRecorder(stream);r.ondataavailable=e=>{if(e.data.size)recorderChunks.current.push(e.data)};
   r.onstop=()=>{const blob=new Blob(recorderChunks.current,{type:(r.mimeType||'audio/webm').split(';')[0]});stream.getTracks().forEach(t=>t.stop());activeStream.current=null;setAudioRecorder(null);setRecordingTask('');void uploadEvidence('speaking',id,blob)};
   r.start();setAudioRecorder(r);setRecordingTask(id);
   window.setTimeout(()=>{if(r.state==='recording')r.stop()},28000);
  }catch(e){setMediaError(e instanceof Error?e.message:'無法錄音');}
 }
 function stopRecording(){if(audioRecorder?.state==='recording')audioRecorder.stop();}
 useEffect(()=>()=>{if(audioRecorder?.state==='recording')audioRecorder.stop();activeStream.current?.getTracks().forEach(t=>t.stop());},[audioRecorder]);

 return <main style={{maxWidth:980,margin:'30px auto',padding:'0 16px 80px',color:'#173047',lineHeight:1.7}}>
  <Link href="/chinese-gcse">← 返回 GCSE Chinese Learning Hub</Link>
  <p style={{fontSize:12,color:'#176b5c',fontWeight:700,letterSpacing:2}}>STAGE 3 · WEEKS 1–4 · BASELINE CHECKPOINT</p>
  <h1 style={{fontSize:'clamp(26px,5vw,38px)',fontWeight:800}}>Weeks 1–4 綜合評估</h1>
  <p>Greta 和 Mathis 使用相同題目，獨立儲存成績。完成 Week 1–4 後才能解鎖；這是原創練習，不是 Edexcel 官方試卷或 GCSE Grade。</p>
  <div role="status" style={{...card,background:'#eef6f5'}}>{message}{submitted&&<strong> · 已鎖定</strong>}{reviewed!==null&&<p>家長確認綜合分數：{reviewed}/100</p>}</div>
  {unlocked&&<><div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:20}}>{['詞彙默寫','Paper 3 Reading','Paper 1 Listening','Paper 2 Speaking','翻譯／Paper 4 Writing'].map((x,i)=><button key={i} onClick={()=>setSection(i)} style={{...action,background:section===i?'#166b5c':'#ecf8f3',color:section===i?'#fff':'#154f45'}}>{i+1}. {x}</button>)}</div>
  {section===0&&<section style={card}><h2>32 個詞彙回憶與紙筆默寫</h2><p>請先遮住中文，根據英文意思在紙上寫繁體字；每個詞語核對後記錄正確或需要重溫。不要先看答案。</p>
   <p>請將 32 個默寫答案寫在紙上，完成後拍照上載，供 Daddy 核對。上載後才可正式交卷。</p>
   {media['dictation:words']?<button style={action} onClick={()=>void viewEvidence('dictation:words')}>查看已儲存默寫原稿</button>:<input type="file" accept="image/jpeg,image/png,image/webp" disabled={submitted||!!mediaBusy} onChange={e=>{const f=e.target.files?.[0];e.target.value='';if(f)void uploadEvidence('dictation','words',f)}}/>}
   <button style={action} onClick={()=>setShowHelp(!showHelp)}>{showHelp?'隱藏中文參考':'顯示中文參考（完成默寫後）'}</button>
   <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(205px,1fr))',gap:10,marginTop:14}}>{targetWords.map((w,i)=><div key={w.id+i} style={{border:'1px solid #dbe6e8',borderRadius:9,padding:10}}><small>{i+1}. {w.english}</small><p style={{fontSize:20,fontWeight:700,margin:'5px 0'}}>{showHelp?w.traditional:'＿＿＿＿'}</p><div style={{display:'flex',gap:6}}>{(['correct','review'] as const).map(v=><button key={v} disabled={submitted} style={{...action,fontSize:11,background:answers.dictation[`${i}`]===v?(v==='correct'?'#c9efdf':'#f6d2d0'):'#fff'}} onClick={()=>update({...answers,dictation:{...answers.dictation,[i]:v}})}>{v==='correct'?'寫對':'需重溫'}</button>)}</div></div>)}</div>
  </section>}
  {section===1&&<section style={card}><h2>Paper 3 — Reading</h2><blockquote style={{background:'#f1f6f7',padding:16,whiteSpace:'pre-wrap'}}>{readingText}</blockquote>{reading.map((q,i)=><div key={q.id} style={{borderBottom:'1px solid #ddd',padding:'14px 0'}}><strong>{i+1}. {q.q}</strong>{q.options.map((o,j)=><label key={j} style={{display:'block',padding:7}}><input type="radio" name={q.id} disabled={submitted} checked={answers.reading[q.id]===j} onChange={()=>update({...answers,reading:{...answers.reading,[q.id]:j}})}/> {o}</label>)}{submitted&&<p>答案已鎖定；客觀分數由伺服器計算。</p>}</div>)}</section>}
  {section===2&&<section style={card}><h2>Paper 1 — Cantonese Listening</h2><p>以 Azure zh-HK 粵語音檔作答；請勿觀看逐字稿。音檔可重播。</p>{listeningScripts.map((c,i)=><div key={c.id} style={{margin:'20px 0',borderBottom:'1px solid #ddd'}}><h3>Clip {i+1}</h3><button style={action} disabled={!!listeningBusy} onClick={()=>void playClip(c.id)}>{listeningBusy===c.id?'載入中…':'▶ 播放廣東話'}</button>{c.questions.map(q=><div key={q.id} style={{padding:'12px 0'}}><strong>{q.q}</strong>{q.options.map((o,j)=><label key={j} style={{display:'block'}}><input type="radio" disabled={submitted} checked={answers.listening[q.id]===j} onChange={()=>update({...answers,listening:{...answers.listening,[q.id]:j}})}/> {o}</label>)}{submitted&&<p>已交卷，答案不能修改。</p>}</div>)}</div>)}</section>}
  {section===3&&<section style={card}><h2>Paper 2 — Cantonese Speaking</h2><p>以廣東話回答，每題錄音最長 28 秒，原音儲存於私人空間，Daddy 可以重播並覆核。暫不將語音自動評分視為 GCSE 官方分數。</p>{speaking.map(t=><div key={t.id} style={{marginBottom:24}}><h3>{t.title}</h3><strong>{t.q}</strong><p>評分要點：{t.points.join(' · ')}</p>
   {media['speaking:'+t.id]?<><button style={action} onClick={()=>void viewEvidence('speaking:'+t.id)}>▶ 查看已儲存口說錄音</button>{!submitted&&!aiFeedback['speaking:'+t.id]&&<button style={action} disabled={!!aiBusy} onClick={()=>void assessEvidence('speaking:'+t.id)}>{aiBusy==='speaking:'+t.id?'AI 評估中…':'AI 初步口說評估'}</button>}{showFeedback('speaking:'+t.id)}</>:<button style={action} disabled={submitted||!!mediaBusy||!!audioRecorder} onClick={()=>void startRecording(t.id)}>● 錄製此題（最長 28 秒）</button>}
   {recordingTask===t.id&&<button style={action} onClick={stopRecording}>■ 停止並上載</button>}
   <textarea rows={3} disabled={submitted} placeholder="可選：練習後記錄重點（不要輸入秘密資料）" value={answers.speaking[t.id]??''} onChange={e=>update({...answers,speaking:{...answers.speaking,[t.id]:e.target.value}})} style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #bbb'}}/></div>)}</section>}
  {section===4&&<section style={card}><h2>Translation + Paper 4 Writing</h2><p>請另外拍攝兩道翻譯的紙筆答案（可同一張照片），供家長核對繁體字及英文翻譯。</p>{media['translation:translations']?<button style={action} onClick={()=>void viewEvidence('translation:translations')}>查看翻譯原稿</button>:<input type="file" accept="image/jpeg,image/png,image/webp" disabled={submitted||!!mediaBusy} onChange={e=>{const f=e.target.files?.[0];e.target.value='';if(f)void uploadEvidence('translation','translations',f)}}/>}{translations.map(t=><div key={t.id}><h3>{t.direction}</h3><p>{t.q}</p><textarea rows={3} disabled={submitted} value={answers.translation[t.id]??''} onChange={e=>update({...answers,translation:{...answers.translation,[t.id]:e.target.value}})} style={{width:'100%',padding:12,border:'1px solid #bbb',borderRadius:8}} placeholder="寫出你的翻譯；允許合理等義答案"/>{submitted&&<p>參考譯文：{t.example}</p>}</div>)}<h3>Writing — 手寫作文</h3><p>{writing.q}</p><p>包括：{writing.points.join(' · ')}</p><p>必須紙筆書寫繁體字，再拍照上傳原稿。原稿存於私人空間，供 Daddy 覆核；上載並不代表已由 AI 批改。</p>
  {media['writing:essay']?<><button style={action} onClick={()=>void viewEvidence('writing:essay')}>查看已儲存手寫原稿</button>{!submitted&&!aiFeedback['writing:essay']&&<button style={action} disabled={!!aiBusy} onClick={()=>void assessEvidence('writing:essay')}>{aiBusy==='writing:essay'?'AI 辨識中…':'AI 辨識及初步批改'}</button>}{showFeedback('writing:essay')}</>:<input type="file" accept="image/jpeg,image/png,image/webp" disabled={submitted||!!mediaBusy} onChange={e=>{const f=e.target.files?.[0];e.target.value='';if(f)void uploadEvidence('writing','essay',f)}}/>}<label><input type="checkbox" checked={answers.writingAcknowledged} disabled={submitted} onChange={e=>update({...answers,writingAcknowledged:e.target.checked})}/> 我已完成紙筆作文並妥善保留原稿</label></section>}
  {mediaError&&<p role="alert" style={{color:'#9e1d1d'}}>{mediaError}</p>}
  <section style={card}><strong>目前選擇題成績：{submitted&&objectiveResult?`${objectiveResult.objectiveCorrect}/${objectiveResult.objectiveTotal}`:'提交後顯示'}</strong><p>先完成所有部分及上載原稿，然後正式提交。客觀分數由 Supabase 計算；家長需檢查所有手寫及口說答案。</p>{!submitted&&user&&<div style={{display:'flex',gap:10,flexWrap:'wrap'}}><button disabled={busy} style={action} onClick={()=>void save(false)}>儲存草稿</button><button disabled={busy} style={{...action,background:'#166b5c',color:'#fff'}} onClick={()=>void save(true)}>正式提交並鎖定</button></div>}</section>
  </>}
  <Link href="/chinese-gcse/learning/checkpoint1/parent">家長檢視入口 →</Link>
 </main>
}
