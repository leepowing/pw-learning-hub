"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {createClient, type SupabaseClient} from "@supabase/supabase-js";

type Answer = Record<string,string>;
const questions = [
  {id:"v1",area:"詞彙",question:"「持之以恆」的意思是甚麼？",choices:["經常改變主意","長期堅持做一件事","很快完成工作"],correct:1},
  {id:"v2",area:"詞彙",question:"哪一個詞語最適合填空？「他每天努力練習，成績終於有所＿＿。」",choices:["進步","進入","進口"],correct:0},
  {id:"r1",area:"閱讀",passage:"小欣剛搬到英國時，不太習慣新的學校。她每天花半小時閱讀英文故事，也會主動跟同學聊天。半年後，她交到了新朋友，對上學也更有信心。",question:"小欣怎樣適應新學校？",choices:["只在家裏學習","閱讀英文故事並與同學交流","轉到另一間學校"],correct:1},
  {id:"r2",area:"閱讀",question:"根據文章，小欣半年後有甚麼改變？",choices:["對上學更有信心","不再閱讀故事","決定回香港"],correct:0},
  {id:"l1",area:"廣東話聆聽",audio:"school",question:"小明最喜歡甚麼科目？",choices:["數學","中文","科學"],correct:2},
  {id:"l2",area:"廣東話聆聽",audio:"weekend",question:"上星期六他借了多少本書？",choices:["一本","兩本","三本"],correct:1},
  {id:"l3",area:"廣東話聆聽",audio:"healthy",question:"說話者現在每天做甚麼運動？",choices:["跑步一小時","行路半個鐘","游泳"],correct:1},
];
const writing = [
  {id:"w1",title:"造句",prompt:"請用「雖然……但是……」寫一個完整句子。"},
  {id:"w2",title:"短文寫作",prompt:"請用繁體中文寫約 100 字，介紹你的學校、喜歡的科目，以及你希望改善的一件事。請盡量不用查字工具。"},
];
export default function ChineseDiagnostic(){
 const [answers,setAnswers]=useState<Answer>({}); const [saved,setSaved]=useState(false);
 const [userId,setUserId]=useState<string|null>(null);
 const [loadState,setLoadState]=useState<"loading"|"ready"|"error">("loading");
 const [syncState,setSyncState]=useState("正在確認登入…");
 const [finishedAt,setFinishedAt]=useState<string|null>(null);
 const [revision,setRevision]=useState(0);
 const isLoaded=useRef(false);
const clientRef = useRef<SupabaseClient<any, "public", "public", any, any> | null>(null);
 const [audioId,setAudioId]=useState<string|null>(null);const [audioError,setAudioError]=useState("");const [audioUrl,setAudioUrl]=useState<string|null>(null);
 useEffect(()=>{
   let active=true;
   async function load(){
     try {
       const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
       if(!url||!key)throw Error("Supabase 尚未設定");
       const db=createClient(url,key);clientRef.current=db;
       const {data:{user},error:userError}=await db.auth.getUser();
       if(userError||!user)throw Error("請先登入學生帳戶，再開始評估");
       const {data,error}=await db.from("chinese_diagnostic_progress").select("answers,completed_at").eq("user_id",user.id).maybeSingle();
       if(error)throw Error("無法讀取進度，請先在 Supabase 執行 v2 SQL："+error.message);
       if(!active)return;
       const remote=(data?.answers??{}) as Answer;
       setAnswers(remote);setFinishedAt(data?.completed_at??null);setUserId(user.id);
       isLoaded.current=true;setLoadState("ready");setSyncState("已載入個人進度");
     }catch(e){if(active){setLoadState("error");setSyncState(e instanceof Error?e.message:"讀取失敗");}}
   }
   void load();return()=>{active=false;isLoaded.current=false};
 },[]);
 useEffect(()=>{
   if(!isLoaded.current||!userId||!clientRef.current||revision===0)return;
   setSyncState("正在儲存…");
   const timer=setTimeout(async()=>{
     const db=clientRef.current;
     if(!db)return;
     const {error}=await db.from("chinese_diagnostic_progress").upsert({user_id:userId,answers,updated_at:new Date().toISOString(),completed_at:null},{onConflict:"user_id"});
     setSyncState(error?"儲存失敗，請檢查網絡或重新登入":"已儲存至 Supabase");
   },800);
   return()=>clearTimeout(timer);
 },[answers,userId,revision]);
 useEffect(()=>()=>{if(audioUrl)URL.revokeObjectURL(audioUrl)},[audioUrl]);
 function change(id:string,value:string){if(loadState!=="ready")return;setAnswers(prev=>({...prev,[id]:value}));setRevision(n=>n+1);setSaved(false);setFinishedAt(null)}
 async function play(id:string){setAudioError("");setAudioId(id);try{
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if(!url||!key)throw Error("Supabase is not configured");
  const client=createClient(url,key);const {data:{session}}=await client.auth.getSession();if(!session)throw Error("Please sign in again");
  const res=await fetch("/api/chinese-gcse/listening",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${session.access_token}`},body:JSON.stringify({id})});
  if(!res.ok){const e=await res.json();throw Error(e.error??"Unable to play audio")}
  const objectUrl=URL.createObjectURL(await res.blob());setAudioUrl(objectUrl);const audio=new Audio(objectUrl);await audio.play();
 }catch(e){setAudioError(e instanceof Error?e.message:"Audio failed")}finally{setAudioId(null)}}
 async function finish(){
   if(!userId||!clientRef.current)return;
   setSyncState("正在提交…");
   const now=new Date().toISOString();
   const {error}=await clientRef.current.from("chinese_diagnostic_progress").upsert({user_id:userId,answers,updated_at:now,completed_at:now},{onConflict:"user_id"});
   if(error){setSyncState("提交失敗："+error.message);return;}
   setFinishedAt(now);setSyncState("已提交並儲存至 Supabase");setSaved(true);
 }
 const completed=questions.filter(q=>answers[q.id]!==undefined).length;
 const score=questions.filter(q=>answers[q.id]===String(q.correct)).length;
 return <main style={{maxWidth:850,margin:"30px auto",padding:"0 20px 70px",lineHeight:1.75}}>
 <Link href="/family">← Family</Link><p style={{fontSize:12,letterSpacing:2,marginTop:30}}>PW LEARNING HUB · GCSE CHINESE</p>
 <h1 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:750}}>繁體中文能力評估</h1><p>Traditional Chinese & Cantonese · Diagnostic Assessment v2</p>
 <div style={{padding:18,border:"1px solid #aaa",borderRadius:12,margin:"20px 0"}}><strong>評估說明</strong><p>適合初步了解認字、閱讀、廣東話聆聽及寫作能力。建議獨立完成，盡量不查字。這是短版試行評估，不是正式 GCSE 模擬試卷。</p><p>已回答選擇題：{completed}/{questions.length}</p><p style={{fontSize:13}}>每位學生須以自己的帳戶登入；答案會自動同步至 Supabase。請勿在同一登入帳戶下交替答題。</p><p role="status" style={{fontSize:13}}>同步狀態：{syncState}</p>{finishedAt&&<p style={{fontSize:13}}>上次提交：{new Date(finishedAt).toLocaleString("en-GB")}</p>}</div>
 {loadState!=="ready"?<p role="alert">{loadState==="loading"?"正在載入學生進度…":syncState} <Link href="/login">登入</Link></p>:<>
 {questions.map((q,i)=><section key={q.id} style={{padding:"20px 0",borderBottom:"1px solid #aaa"}}><small>{q.area} · {i+1}/{questions.length}</small>{q.passage&&<p style={{padding:15,background:"#eeeeee",color:"#222",borderRadius:8}}>{q.passage}</p>}
 {q.audio&&<div style={{margin:"12px 0"}}><button type="button" onClick={()=>play(q.audio!)} disabled={audioId!==null} style={{padding:"9px 16px",border:"1px solid",borderRadius:8,cursor:"pointer"}}>{audioId===q.audio?"正在載入…":"▶ 播放廣東話錄音"}</button><p style={{fontSize:12}}>可以重播；測試時不會顯示錄音稿。</p></div>}
 <h2 style={{fontSize:18,fontWeight:650}}>{q.question}</h2>{q.choices.map((choice,j)=><label key={j} style={{display:"block",padding:"7px 0"}}><input type="radio" name={q.id} checked={answers[q.id]===String(j)} onChange={()=>change(q.id,String(j))}/> {choice}</label>)}</section>)}
 {audioError&&<p role="alert" style={{color:"#b91c1c"}}>錄音錯誤：{audioError}</p>}
 <h2 style={{fontSize:24,fontWeight:700,marginTop:30}}>中文寫作</h2>{writing.map(w=><section key={w.id} style={{margin:"22px 0"}}><h3 style={{fontWeight:650}}>{w.title}</h3><p>{w.prompt}</p><textarea value={answers[w.id]??""} onChange={e=>change(w.id,e.target.value)} rows={w.id==="w2"?7:3} style={{width:"100%",border:"1px solid #888",borderRadius:8,padding:12,color:"#222",background:"#fff"}} placeholder="在這裏輸入繁體中文…"/><small>已輸入 {(answers[w.id]??"").length} 字元</small></section>)}
 <button type="button" onClick={()=>void finish()} style={{padding:"12px 20px",borderRadius:9,background:"#14532d",color:"white",cursor:"pointer"}}>完成並查看初步結果</button>
 {saved&&<div style={{padding:18,marginTop:18,border:"1px solid #888",borderRadius:12}}><h2 style={{fontWeight:700}}>初步結果</h2><p>選擇題：{score}/{questions.length}（{completed} 題已回答）</p><p>寫作尚未由 AI 評分。請家長先檢視是否能獨立寫句子及短文；正式版將加入 Supabase 儲存、AI 批改及個別學習計劃。</p><button type="button" onClick={()=>{const text=JSON.stringify({answers,score,total:questions.length},null,2);navigator.clipboard.writeText(text)}} style={{textDecoration:"underline",cursor:"pointer"}}>複製評估結果（JSON）</button></div>}
 </>}
 </main>
}
