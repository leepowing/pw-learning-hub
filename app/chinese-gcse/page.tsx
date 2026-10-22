"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {createClient} from "@supabase/supabase-js";

type Answer = Record<string,string>;
const questions = [{"id":"v1","area":"詞彙","question":"「持之以恆」的意思是甚麼？","choices":["長期堅持做一件事","只做一次","隨時放棄"],"correct":0},{"id":"v2","area":"詞彙","question":"「改善」的意思是甚麼？","choices":["停止活動","改變地方","使事情變得更好"],"correct":2},{"id":"v3","area":"詞彙","question":"「鼓勵」的意思是甚麼？","choices":["忽略別人","給予支持和信心","嚴厲責罵"],"correct":1},{"id":"v4","area":"詞彙","question":"「珍惜」的意思是甚麼？","choices":["重視並好好愛護","隨意丟棄","完全忘記"],"correct":0},{"id":"v5","area":"詞彙","question":"「適應」的意思是甚麼？","choices":["立刻離開","拒絕改變","逐漸習慣新環境"],"correct":2},{"id":"v6","area":"詞彙","question":"「觀察」的意思是甚麼？","choices":["閉上眼睛","仔細留意事物","胡亂猜測"],"correct":1},{"id":"v7","area":"詞彙","question":"「責任」的意思是甚麼？","choices":["應當承擔的工作","個人愛好","偶然發生的事"],"correct":0},{"id":"v8","area":"詞彙","question":"「積極」的意思是甚麼？","choices":["完全被動","毫不關心","主動而有熱誠"],"correct":2},{"id":"v9","area":"詞彙","question":"「猶豫」的意思是甚麼？","choices":["非常滿意","拿不定主意","立即決定"],"correct":1},{"id":"v10","area":"詞彙","question":"「環境」的意思是甚麼？","choices":["周圍的情況和條件","只指天氣","某種食物"],"correct":0},{"id":"v11","area":"詞彙","question":"「尊重」的意思是甚麼？","choices":["嘲笑別人","強迫服從","以禮貌和重視對待"],"correct":2},{"id":"v12","area":"詞彙","question":"「堅持」的意思是甚麼？","choices":["不斷轉換","遇到困難仍繼續","很快放棄"],"correct":1},{"id":"v13","area":"詞彙","question":"「安排」的意思是甚麼？","choices":["有計劃地處理","完全不理會","突然取消"],"correct":0},{"id":"v14","area":"詞彙","question":"「影響」的意思是甚麼？","choices":["永遠不變","只是模仿","對人或事產生作用"],"correct":2},{"id":"v15","area":"詞彙","question":"「效率」的意思是甚麼？","choices":["休息的次數","完成事情的速度和成效","工作時間越長越好"],"correct":1},{"id":"v16","area":"詞彙","question":"「豐富」的意思是甚麼？","choices":["種類或內容很多","完全空白","數量很少"],"correct":0},{"id":"v17","area":"詞彙","question":"「獨立」的意思是甚麼？","choices":["事事依賴別人","與人爭吵","能自己處理事情"],"correct":2},{"id":"v18","area":"詞彙","question":"「探索」的意思是甚麼？","choices":["重複答案","嘗試尋找和了解","拒絕學習"],"correct":1},{"id":"v19","area":"詞彙","question":"「誠實」的意思是甚麼？","choices":["說真話、不欺騙","隱瞞錯誤","隨便承諾"],"correct":0},{"id":"v20","area":"詞彙","question":"「挑戰」的意思是甚麼？","choices":["簡單的休息","沒有目標","需要努力克服的困難"],"correct":2},{"id":"v21","area":"詞彙","question":"「資源」的意思是甚麼？","choices":["一種情緒","可供利用的物資或條件","沒有用途的東西"],"correct":1},{"id":"v22","area":"詞彙","question":"「比較」的意思是甚麼？","choices":["找出異同","只看一件事","完全不分析"],"correct":0},{"id":"v23","area":"詞彙","question":"「結論」的意思是甚麼？","choices":["文章的第一句","沒有根據的猜想","根據資料得出的判斷"],"correct":2},{"id":"v24","area":"詞彙","question":"「證據」的意思是甚麼？","choices":["未經證實的傳聞","支持說法的事實資料","個人的喜好"],"correct":1},{"id":"v25","area":"詞彙","question":"「公平」的意思是甚麼？","choices":["以合理一致的標準對待","只幫助朋友","隨意更改規則"],"correct":0},{"id":"v26","area":"詞彙","question":"「合作」的意思是甚麼？","choices":["各自阻礙對方","完全不溝通","一起努力完成事情"],"correct":2},{"id":"v27","area":"詞彙","question":"「反思」的意思是甚麼？","choices":["不接受意見","回顧並檢討自己的做法","只責怪別人"],"correct":1},{"id":"v28","area":"詞彙","question":"「傳統」的意思是甚麼？","choices":["長期流傳的習俗或做法","剛發明的工具","一種交通方式"],"correct":0},{"id":"v29","area":"詞彙","question":"「目標」的意思是甚麼？","choices":["已經忘記的事","沒有方向的行動","希望達成的事情"],"correct":2},{"id":"v30","area":"詞彙","question":"「自律」的意思是甚麼？","choices":["隨意拖延","自覺控制自己的行為","只聽別人命令"],"correct":1},{"id":"r1_1","area":"閱讀","passage":"小欣剛搬到英國時，不太習慣新的學校。她每天花半小時閱讀英文故事，也會主動跟同學聊天。半年後，她交到了新朋友，對上學也更有信心。","question":"小欣如何適應新學校？","choices":["只在家裏學習","閱讀故事並與同學交流","轉到另一間學校"],"correct":1},{"id":"r1_2","area":"閱讀","passage":null,"question":"半年後小欣有甚麼改變？","choices":["更有信心","停止閱讀","決定回香港"],"correct":0},{"id":"r1_3","area":"閱讀","passage":null,"question":"這篇文章主要說明甚麼？","choices":["適應新環境需要努力","閱讀沒有用處","交朋友很容易"],"correct":0},{"id":"r2_1","area":"閱讀","passage":"學校計劃在午膳時間開放圖書館，讓學生可以安靜閱讀或做功課。有些同學擔心午膳時間太短，不能充分休息。學生會建議先試行一個月，再收集意見決定是否繼續。","question":"學校計劃在甚麼時間開放圖書館？","choices":["上課前","午膳時間","放學後"],"correct":1},{"id":"r2_2","area":"閱讀","passage":null,"question":"部分同學擔心甚麼？","choices":["休息時間不足","書本太多","沒有老師"],"correct":0},{"id":"r2_3","area":"閱讀","passage":null,"question":"學生會提出甚麼建議？","choices":["立即取消","試行一個月再收集意見","只讓高年級參加"],"correct":1},{"id":"r3_1","area":"閱讀","passage":"去年暑假，嘉敏參加了社區義工活動，協助長者學習使用智能電話。起初她以為教學十分簡單，後來發現每個人的學習速度不同，因此改用圖片和逐步示範。活動結束後，她明白耐心與溝通同樣重要。","question":"嘉敏的義工工作是甚麼？","choices":["教長者用智能電話","清潔公園","照顧動物"],"correct":0},{"id":"r3_2","area":"閱讀","passage":null,"question":"她為甚麼改變教學方法？","choices":["學習速度不同","手機全部壞了","時間太長"],"correct":0},{"id":"r3_3","area":"閱讀","passage":null,"question":"她從活動中學到甚麼？","choices":["耐心和溝通很重要","只要速度快就好","不應幫助別人"],"correct":0},{"id":"l1","area":"廣東話聆聽","audio":"school","question":"小明最喜歡甚麼科目？","choices":["數學","中文","科學"],"correct":2},{"id":"l2","area":"廣東話聆聽","audio":"weekend","question":"上星期六他借了多少本書？","choices":["一本","兩本","三本"],"correct":1},{"id":"l3","area":"廣東話聆聽","audio":"healthy","question":"說話者現在每天做甚麼運動？","choices":["跑步一小時","行路半個鐘","游泳"],"correct":1},{"id":"l4","area":"廣東話聆聽","audio":"transport","question":"阿欣平日如何返學？","choices":["搭巴士","行路","踩單車"],"correct":0},{"id":"l5","area":"廣東話聆聽","audio":"transport","question":"巴士遲到時她會怎樣做？","choices":["等下一班","打電話給學校","回家"],"correct":1},{"id":"l6","area":"廣東話聆聽","audio":"volunteer","question":"志明星期日會去哪裏？","choices":["圖書館","社區中心","運動場"],"correct":1},{"id":"l7","area":"廣東話聆聽","audio":"volunteer","question":"他為甚麼參加活動？","choices":["想幫助別人","想買新電話","想早點回家"],"correct":0},{"id":"l8","area":"廣東話聆聽","audio":"weather","question":"星期六預計天氣如何？","choices":["晴朗","有大雨","下雪"],"correct":1},{"id":"l9","area":"廣東話聆聽","audio":"weather","question":"他們決定改去哪裏？","choices":["室內博物館","沙灘","山頂"],"correct":0},{"id":"l10","area":"廣東話聆聽","audio":"future","question":"說話者將來希望做甚麼？","choices":["醫生","工程師","廚師"],"correct":1}];
const writing = [{"id":"w1","title":"造句與改寫","prompt":"請用「雖然……但是……」寫一個完整句子。"},{"id":"w2","title":"造句與改寫","prompt":"請用「如果……就……」寫一個完整句子。"},{"id":"w3","title":"造句與改寫","prompt":"請用「不但……而且……」寫一個完整句子。"},{"id":"w4","title":"造句與改寫","prompt":"把「我昨天去圖書館。我借了兩本書。」合併成一句通順的句子。"},{"id":"w5","title":"造句與改寫","prompt":"請用「持之以恆」造一個句子。"},{"id":"w6","title":"短文寫作（一）","prompt":"請用繁體中文寫約 100 字，介紹你的學校、喜歡的科目，以及你希望改善的一件事。請盡量不用查字工具。"},{"id":"w7","title":"短文寫作（二）","prompt":"請用繁體中文寫約 120 字，描述一次你克服困難的經歷，以及你學到甚麼。"}];
export default function ChineseDiagnostic(){
 const [answers,setAnswers]=useState<Answer>({}); const [saved,setSaved]=useState(false);
 const [userId,setUserId]=useState<string|null>(null);
 const [loadState,setLoadState]=useState<"loading"|"ready"|"error">("loading");
 const [syncState,setSyncState]=useState("正在確認登入…");
 const [finishedAt,setFinishedAt]=useState<string|null>(null);
 const [revision,setRevision]=useState(0);
 const isLoaded=useRef(false);
const clientRef = useRef<ReturnType<typeof createClient<any>> | null>(null);
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
   const missing=[...questions.map(q=>q.id),...writing.map(w=>w.id)].filter(id=>!(answers[id]??" ").trim());
   if(missing.length){setSyncState(`仍有 ${missing.length} 題未完成，請完成後再提交。`);return;}
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
 <h1 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:750}}>繁體中文能力評估</h1><p>Traditional Chinese & Cantonese · Diagnostic Assessment v3 · Stage 1</p>
 <div style={{padding:18,border:"1px solid #aaa",borderRadius:12,margin:"20px 0"}}><strong>評估說明</strong><p>適合初步了解認字、閱讀、廣東話聆聽及寫作能力。建議獨立完成，盡量不查字。評估共分為詞彙、閱讀、廣東話聆聽及寫作；可分次完成。這不是正式 GCSE 模擬試卷。</p><p>已回答選擇題：{completed}/{questions.length}</p><p style={{fontSize:13}}>每位學生須以自己的帳戶登入；答案會自動同步至 Supabase。請勿在同一登入帳戶下交替答題。</p><p role="status" style={{fontSize:13}}>同步狀態：{syncState}</p>{finishedAt&&<p style={{fontSize:13}}>上次提交：{new Date(finishedAt).toLocaleString("en-GB")}</p>}</div>
 {loadState!=="ready"?<p role="alert">{loadState==="loading"?"正在載入學生進度…":syncState} <Link href="/login">登入</Link></p>:<>
 {questions.map((q,i)=><section key={q.id} style={{padding:"20px 0",borderBottom:"1px solid #aaa"}}><small>{q.area} · {i+1}/{questions.length}</small>{q.passage&&<p style={{padding:15,background:"#eeeeee",color:"#222",borderRadius:8}}>{q.passage}</p>}
 {q.audio&&<div style={{margin:"12px 0"}}><button type="button" onClick={()=>play(q.audio!)} disabled={audioId!==null} style={{padding:"9px 16px",border:"1px solid",borderRadius:8,cursor:"pointer"}}>{audioId===q.audio?"正在載入…":"▶ 播放廣東話錄音"}</button><p style={{fontSize:12}}>可以重播；測試時不會顯示錄音稿。</p></div>}
 <h2 style={{fontSize:18,fontWeight:650}}>{q.question}</h2>{q.choices.map((choice,j)=><label key={j} style={{display:"block",padding:"7px 0"}}><input type="radio" name={q.id} checked={answers[q.id]===String(j)} onChange={()=>change(q.id,String(j))}/> {choice}</label>)}</section>)}
 {audioError&&<p role="alert" style={{color:"#b91c1c"}}>錄音錯誤：{audioError}</p>}
 <h2 style={{fontSize:24,fontWeight:700,marginTop:30}}>中文寫作</h2>{writing.map(w=><section key={w.id} style={{margin:"22px 0"}}><h3 style={{fontWeight:650}}>{w.title}</h3><p>{w.prompt}</p><textarea value={answers[w.id]??""} onChange={e=>change(w.id,e.target.value)} rows={w.id==="w6"||w.id==="w7"?7:3} style={{width:"100%",border:"1px solid #888",borderRadius:8,padding:12,color:"#222",background:"#fff"}} placeholder="在這裏輸入繁體中文…"/><small>已輸入 {(answers[w.id]??"").length} 字元</small></section>)}
 <button type="button" onClick={()=>void finish()} style={{padding:"12px 20px",borderRadius:9,background:"#14532d",color:"white",cursor:"pointer"}}>完成並查看初步結果</button>
 {saved&&<div style={{padding:18,marginTop:18,border:"1px solid #888",borderRadius:12}}><h2 style={{fontWeight:700}}>初步結果</h2><p>選擇題：{score}/{questions.length}（{completed} 題已回答）</p><p>寫作暫未由 AI 評分；請家長先檢視。下一階段將加入 AI 批改及個別學習計劃。</p><button type="button" onClick={()=>{const text=JSON.stringify({answers,score,total:questions.length},null,2);navigator.clipboard.writeText(text)}} style={{textDecoration:"underline",cursor:"pointer"}}>複製評估結果（JSON）</button></div>}
 </>}
 </main>
}
