"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {createClient} from "@supabase/supabase-js";

type Answer = Record<string,string>;
const questions = [{"id":"v1","area":"詞彙","question":"「持之以恆」的意思是甚麼？","choices":["長期堅持做一件事","只做一次","隨時放棄"],"correct":0},{"id":"v2","area":"詞彙","question":"「改善」的意思是甚麼？","choices":["停止活動","改變地方","使事情變得更好"],"correct":2},{"id":"v3","area":"詞彙","question":"「鼓勵」的意思是甚麼？","choices":["忽略別人","給予支持和信心","嚴厲責罵"],"correct":1},{"id":"v4","area":"詞彙","question":"「珍惜」的意思是甚麼？","choices":["重視並好好愛護","隨意丟棄","完全忘記"],"correct":0},{"id":"v5","area":"詞彙","question":"「適應」的意思是甚麼？","choices":["立刻離開","拒絕改變","逐漸習慣新環境"],"correct":2},{"id":"v6","area":"詞彙","question":"「觀察」的意思是甚麼？","choices":["閉上眼睛","仔細留意事物","胡亂猜測"],"correct":1},{"id":"v7","area":"詞彙","question":"「責任」的意思是甚麼？","choices":["應當承擔的工作","個人愛好","偶然發生的事"],"correct":0},{"id":"v8","area":"詞彙","question":"「積極」的意思是甚麼？","choices":["完全被動","毫不關心","主動而有熱誠"],"correct":2},{"id":"v9","area":"詞彙","question":"「猶豫」的意思是甚麼？","choices":["非常滿意","拿不定主意","立即決定"],"correct":1},{"id":"v10","area":"詞彙","question":"「環境」的意思是甚麼？","choices":["周圍的情況和條件","只指天氣","某種食物"],"correct":0},{"id":"v11","area":"詞彙","question":"「尊重」的意思是甚麼？","choices":["嘲笑別人","強迫服從","以禮貌和重視對待"],"correct":2},{"id":"v12","area":"詞彙","question":"「堅持」的意思是甚麼？","choices":["不斷轉換","遇到困難仍繼續","很快放棄"],"correct":1},{"id":"v13","area":"詞彙","question":"「安排」的意思是甚麼？","choices":["有計劃地處理","完全不理會","突然取消"],"correct":0},{"id":"v14","area":"詞彙","question":"「影響」的意思是甚麼？","choices":["永遠不變","只是模仿","對人或事產生作用"],"correct":2},{"id":"v15","area":"詞彙","question":"「效率」的意思是甚麼？","choices":["休息的次數","完成事情的速度和成效","工作時間越長越好"],"correct":1},{"id":"v16","area":"詞彙","question":"「豐富」的意思是甚麼？","choices":["種類或內容很多","完全空白","數量很少"],"correct":0},{"id":"v17","area":"詞彙","question":"「獨立」的意思是甚麼？","choices":["事事依賴別人","與人爭吵","能自己處理事情"],"correct":2},{"id":"v18","area":"詞彙","question":"「探索」的意思是甚麼？","choices":["重複答案","嘗試尋找和了解","拒絕學習"],"correct":1},{"id":"v19","area":"詞彙","question":"「誠實」的意思是甚麼？","choices":["說真話、不欺騙","隱瞞錯誤","隨便承諾"],"correct":0},{"id":"v20","area":"詞彙","question":"「挑戰」的意思是甚麼？","choices":["簡單的休息","沒有目標","需要努力克服的困難"],"correct":2},{"id":"v21","area":"詞彙","question":"「資源」的意思是甚麼？","choices":["一種情緒","可供利用的物資或條件","沒有用途的東西"],"correct":1},{"id":"v22","area":"詞彙","question":"「比較」的意思是甚麼？","choices":["找出異同","只看一件事","完全不分析"],"correct":0},{"id":"v23","area":"詞彙","question":"「結論」的意思是甚麼？","choices":["文章的第一句","沒有根據的猜想","根據資料得出的判斷"],"correct":2},{"id":"v24","area":"詞彙","question":"「證據」的意思是甚麼？","choices":["未經證實的傳聞","支持說法的事實資料","個人的喜好"],"correct":1},{"id":"v25","area":"詞彙","question":"「公平」的意思是甚麼？","choices":["以合理一致的標準對待","只幫助朋友","隨意更改規則"],"correct":0},{"id":"v26","area":"詞彙","question":"「合作」的意思是甚麼？","choices":["各自阻礙對方","完全不溝通","一起努力完成事情"],"correct":2},{"id":"v27","area":"詞彙","question":"「反思」的意思是甚麼？","choices":["不接受意見","回顧並檢討自己的做法","只責怪別人"],"correct":1},{"id":"v28","area":"詞彙","question":"「傳統」的意思是甚麼？","choices":["長期流傳的習俗或做法","剛發明的工具","一種交通方式"],"correct":0},{"id":"v29","area":"詞彙","question":"「目標」的意思是甚麼？","choices":["已經忘記的事","沒有方向的行動","希望達成的事情"],"correct":2},{"id":"v30","area":"詞彙","question":"「自律」的意思是甚麼？","choices":["隨意拖延","自覺控制自己的行為","只聽別人命令"],"correct":1},{"id":"r1_1","area":"閱讀","passage":"小欣剛搬到英國時，不太習慣新的學校。她每天花半小時閱讀英文故事，也會主動跟同學聊天。半年後，她交到了新朋友，對上學也更有信心。","question":"小欣如何適應新學校？","choices":["只在家裏學習","閱讀故事並與同學交流","轉到另一間學校"],"correct":1},{"id":"r1_2","area":"閱讀","passage":null,"question":"半年後小欣有甚麼改變？","choices":["更有信心","停止閱讀","決定回香港"],"correct":0},{"id":"r1_3","area":"閱讀","passage":null,"question":"這篇文章主要說明甚麼？","choices":["適應新環境需要努力","閱讀沒有用處","交朋友很容易"],"correct":0},{"id":"r2_1","area":"閱讀","passage":"學校計劃在午膳時間開放圖書館，讓學生可以安靜閱讀或做功課。有些同學擔心午膳時間太短，不能充分休息。學生會建議先試行一個月，再收集意見決定是否繼續。","question":"學校計劃在甚麼時間開放圖書館？","choices":["上課前","午膳時間","放學後"],"correct":1},{"id":"r2_2","area":"閱讀","passage":null,"question":"部分同學擔心甚麼？","choices":["休息時間不足","書本太多","沒有老師"],"correct":0},{"id":"r2_3","area":"閱讀","passage":null,"question":"學生會提出甚麼建議？","choices":["立即取消","試行一個月再收集意見","只讓高年級參加"],"correct":1},{"id":"r3_1","area":"閱讀","passage":"去年暑假，嘉敏參加了社區義工活動，協助長者學習使用智能電話。起初她以為教學十分簡單，後來發現每個人的學習速度不同，因此改用圖片和逐步示範。活動結束後，她明白耐心與溝通同樣重要。","question":"嘉敏的義工工作是甚麼？","choices":["教長者用智能電話","清潔公園","照顧動物"],"correct":0},{"id":"r3_2","area":"閱讀","passage":null,"question":"她為甚麼改變教學方法？","choices":["學習速度不同","手機全部壞了","時間太長"],"correct":0},{"id":"r3_3","area":"閱讀","passage":null,"question":"她從活動中學到甚麼？","choices":["耐心和溝通很重要","只要速度快就好","不應幫助別人"],"correct":0},{"id":"l1","area":"廣東話聆聽","audio":"school","question":"小明最喜歡甚麼科目？","choices":["數學","中文","科學"],"correct":2},{"id":"l2","area":"廣東話聆聽","audio":"weekend","question":"上星期六他借了多少本書？","choices":["一本","兩本","三本"],"correct":1},{"id":"l3","area":"廣東話聆聽","audio":"healthy","question":"說話者現在每天做甚麼運動？","choices":["跑步一小時","行路半個鐘","游泳"],"correct":1},{"id":"l4","area":"廣東話聆聽","audio":"transport","question":"阿欣平日如何返學？","choices":["搭巴士","行路","踩單車"],"correct":0},{"id":"l5","area":"廣東話聆聽","audio":"transport","question":"巴士遲到時她會怎樣做？","choices":["等下一班","打電話給學校","回家"],"correct":1},{"id":"l6","area":"廣東話聆聽","audio":"volunteer","question":"志明星期日會去哪裏？","choices":["圖書館","社區中心","運動場"],"correct":1},{"id":"l7","area":"廣東話聆聽","audio":"volunteer","question":"他為甚麼參加活動？","choices":["想幫助別人","想買新電話","想早點回家"],"correct":0},{"id":"l8","area":"廣東話聆聽","audio":"weather","question":"星期六預計天氣如何？","choices":["晴朗","有大雨","下雪"],"correct":1},{"id":"l9","area":"廣東話聆聽","audio":"weather","question":"他們決定改去哪裏？","choices":["室內博物館","沙灘","山頂"],"correct":0},{"id":"l10","area":"廣東話聆聽","audio":"future","question":"說話者將來希望做甚麼？","choices":["醫生","工程師","廚師"],"correct":1}];
const writing = [{"id":"w1","title":"造句與改寫","prompt":"請用「雖然……但是……」寫一個完整句子。"},{"id":"w2","title":"造句與改寫","prompt":"請用「如果……就……」寫一個完整句子。"},{"id":"w3","title":"造句與改寫","prompt":"請用「不但……而且……」寫一個完整句子。"},{"id":"w4","title":"造句與改寫","prompt":"把「我昨天去圖書館。我借了兩本書。」合併成一句通順的句子。"},{"id":"w5","title":"造句與改寫","prompt":"請用「持之以恆」造一個句子。"},{"id":"w6","title":"短文寫作（一）","prompt":"請用繁體中文寫約 100 字，介紹你的學校、喜歡的科目，以及你希望改善的一件事。請盡量不用查字工具。"},{"id":"w7","title":"短文寫作（二）","prompt":"請用繁體中文寫約 120 字，描述一次你克服困難的經歷，以及你學到甚麼。"}];
export default function ChineseDiagnostic(){
 const [activeTab,setActiveTab]=useState<"詞彙"|"閱讀"|"廣東話聆聽"|"寫作">("詞彙");
 const [questionIndex,setQuestionIndex]=useState<Record<string,number>>({});
 const [answers,setAnswers]=useState<Answer>({}); const [saved,setSaved]=useState(false);
 const [userId,setUserId]=useState<string|null>(null);
 const [isParent,setIsParent]=useState(false);
 const [loadState,setLoadState]=useState<"loading"|"ready"|"error">("loading");
 const [syncState,setSyncState]=useState("正在確認登入…");
 const [finishedAt,setFinishedAt]=useState<string|null>(null);
 const [revision,setRevision]=useState(0);
 const isLoaded=useRef(false);
const clientRef = useRef<ReturnType<typeof createClient<any>> | null>(null);
 const [handwritingUploads,setHandwritingUploads]=useState<string[]>([]);
 const [handwritingReviews,setHandwritingReviews]=useState<string[]>([]);
 const [handwritingError,setHandwritingError]=useState("");
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
       const {data:profile,error:profileError}=await db.from("profiles").select("role").eq("id",user.id).maybeSingle();
       if(active)setIsParent(!profileError&&profile?.role==="parent");
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
  useEffect(()=>{
    if(loadState!=="ready"||!userId||!clientRef.current)return;
    let active=true;
    const db=clientRef.current;
    async function loadHandwriting(){
      const [uploaded,reviewed]=await Promise.all([
        db!.from("chinese_handwriting_submissions").select("task_id").eq("user_id",userId).eq("assessment_version","v3"),
        db!.from("chinese_handwriting_reviews").select("task_id").eq("user_id",userId).eq("assessment_version","v3")
      ]);
      if(!active)return;
      if(uploaded.error||reviewed.error){setHandwritingError("手寫狀態暫時無法載入，請到手寫評估頁查看。");return;}
      setHandwritingError("");
      setHandwritingUploads([...new Set((uploaded.data??[]).map(r=>r.task_id))]);
      setHandwritingReviews([...new Set((reviewed.data??[]).map(r=>r.task_id))]);
    }
    void loadHandwriting();
    const onFocus=()=>{void loadHandwriting()};
    window.addEventListener("focus",onFocus);
    return()=>{active=false;window.removeEventListener("focus",onFocus)};
  },[loadState,userId]);
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
   const missing=questions.map(q=>q.id).filter(id=>answers[id]===undefined);
   if(missing.length){setSyncState(`仍有 ${missing.length} 道選擇題未完成，請完成後再提交。`);return;}
   if(!userId||!clientRef.current)return;
   setSyncState("正在提交…");
   const now=new Date().toISOString();
   const {error}=await clientRef.current.from("chinese_diagnostic_progress").upsert({user_id:userId,answers,updated_at:now,completed_at:now},{onConflict:"user_id"});
   if(error){setSyncState("提交失敗："+error.message);return;}
   setFinishedAt(now);setSyncState("選擇題已提交並儲存至 Supabase；手寫評估獨立完成。");setSaved(true);
 }
 const completed=questions.filter(q=>answers[q.id]!==undefined).length;
 const score=questions.filter(q=>answers[q.id]===String(q.correct)).length;
 const sections = [
   {id:"詞彙" as const,label:"詞彙",english:"Vocabulary",symbol:"字",total:30},
   {id:"閱讀" as const,label:"閱讀",english:"Reading",symbol:"閱",total:9},
   {id:"廣東話聆聽" as const,label:"聆聽",english:"Listening",symbol:"聽",total:10},
   {id:"寫作" as const,label:"寫作",english:"Handwriting",symbol:"寫",total:7},
 ];
 const selectedQuestions = questions.filter(q=>q.area===activeTab);
 const currentIndex=Math.min(questionIndex[activeTab]??0,Math.max(0,selectedQuestions.length-1));
 const currentQuestion=selectedQuestions[currentIndex];
 const answeredInSection=selectedQuestions.filter(q=>answers[q.id]!==undefined).length;
 const countFor=(area:string)=>questions.filter(q=>q.area===area&&answers[q.id]!==undefined).length;
 const changeTab=(tab:typeof activeTab)=>{setActiveTab(tab);setSaved(false);};
 return <main className="chinese-page">
 <style>{`
 .chinese-page{max-width:1040px;margin:0 auto;padding:34px 20px 90px;color:#18263b;line-height:1.65}
 .chinese-page *{box-sizing:border-box}
 .chinese-back{display:inline-flex;color:#256b61;font-size:14px;font-weight:650;text-decoration:none;margin-bottom:28px}
 .chinese-heading{font-size:clamp(30px,4vw,43px);line-height:1.2;font-weight:800;letter-spacing:-.03em;margin:8px 0 12px}
 .chinese-muted{color:#64748b;font-size:14px}
 .chinese-eyebrow{font-size:11px;letter-spacing:.16em;color:#256b61;font-weight:800}
 .chinese-overview{background:#fff;border:1px solid #e0e7ed;border-radius:20px;padding:20px 24px;margin:26px 0;box-shadow:0 4px 16px rgba(26,44,65,.035)}
 .chinese-overview-head{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap}
 .chinese-progress{height:8px;background:#e7edf1;border-radius:99px;overflow:hidden;margin:14px 0 8px}
 .chinese-progress>div{height:100%;background:#27826f;border-radius:99px;transition:width .2s}
 .chinese-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:24px 0}
 .chinese-tab{appearance:none;text-align:left;background:#fff;border:1px solid #e1e7ed;border-radius:17px;padding:16px;cursor:pointer;color:#25344a;min-width:0;transition:background .15s,border-color .15s}
 .chinese-tab[aria-selected=true]{border:2px solid #237a6a;background:#edf8f5;padding:15px}
 .chinese-tab-symbol{display:inline-flex;width:38px;height:38px;align-items:center;justify-content:center;border-radius:11px;background:#edf1f7;color:#35627a;font-size:18px;font-weight:800;margin-bottom:10px}
 .chinese-tab[aria-selected=true] .chinese-tab-symbol{background:#d2ece3;color:#176858}
 .chinese-tab-label{display:block;font-weight:800;font-size:17px}
 .chinese-tab-small{display:block;color:#68788c;font-size:12px;margin-top:2px}
 .chinese-card{background:#fff;border:1px solid #e0e7ed;border-radius:20px;padding:clamp(18px,3vw,32px);box-shadow:0 4px 16px rgba(26,44,65,.035)}
 .chinese-section-top{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
 .chinese-section-title{font-size:24px;font-weight:800;margin:0}
 .chinese-question{font-size:20px;font-weight:750;margin:24px 0 18px}
 .chinese-choice{display:flex;align-items:center;gap:12px;padding:15px;border:1px solid #e1e7ed;border-radius:12px;margin:9px 0;cursor:pointer;background:#fff;min-height:55px}
 .chinese-choice:has(input:checked){border-color:#27826f;background:#edf8f5}
 .chinese-choice input{accent-color:#237a6a;width:18px;height:18px;flex-shrink:0}
 .chinese-controls{display:flex;justify-content:space-between;gap:12px;margin-top:26px}
 .chinese-btn{border-radius:11px;padding:11px 19px;border:1px solid #cbd5df;background:#fff;color:#24364a;font-weight:700;cursor:pointer}
 .chinese-btn:disabled{opacity:.4;cursor:not-allowed}
 .chinese-btn-primary{background:#176b5c;color:#fff;border-color:#176b5c}
 .chinese-status{font-size:13px;color:#566b7c;margin-top:12px}
 .chinese-writing-row{display:flex;justify-content:space-between;gap:12px;align-items:center;border-bottom:1px solid #e7edf1;padding:12px 0;font-size:14px}
 @media(max-width:650px){.chinese-page{padding:22px 14px 70px}.chinese-tabs{gap:7px}.chinese-tab{padding:10px 7px;border-radius:12px;text-align:center}.chinese-tab[aria-selected=true]{padding:9px 6px}.chinese-tab-symbol{margin:0 auto 5px;width:30px;height:30px;font-size:15px}.chinese-tab-label{font-size:14px}.chinese-tab-small{font-size:10px}.chinese-card{padding:18px}.chinese-question{font-size:18px}}
 `}</style>
 <Link href="/subjects" className="chinese-back">← 返回科目選單</Link>
 <div className="chinese-eyebrow">PW LEARNING HUB · GCSE CHINESE</div>
 <h1 className="chinese-heading">繁體中文能力評估</h1>
 <p className="chinese-muted">Traditional Chinese & Cantonese · Diagnostic Assessment v3</p>
 <section className="chinese-overview">
  <div className="chinese-overview-head"><strong>整體評估進度</strong><span className="chinese-muted">選擇題 {completed}/{questions.length} · 手寫已上傳 {handwritingUploads.length}/7</span></div>
  <div className="chinese-progress"><div style={{width:`${completed/questions.length*100}%`}}/></div>
  <div className="chinese-status" role="status">{syncState}{finishedAt?` · 選擇題上次提交：${new Date(finishedAt).toLocaleString("en-GB")}`:""}</div>
  <p className="chinese-muted" style={{marginBottom:0}}>可分日完成，選擇題答案自動儲存至 Supabase。寫作請使用紙筆作答。本測試並非正式 GCSE 模擬試卷。</p>
 </section>
 {loadState==="ready"&&isParent&&<section className="chinese-parent-entry" aria-label="家長管理中心">
  <div><div className="chinese-eyebrow">PARENT ACCESS</div><h2 className="chinese-parent-title">家長管理中心</h2><p className="chinese-muted" style={{margin:0}}>查看 Greta 和 Mathis 的手寫原稿、AI 評語及確認評分。</p></div>
  <Link href="/chinese-gcse/parent" className="chinese-parent-link">進入家長管理中心 →</Link>
 </section>}
 <div className="chinese-tabs" role="tablist" aria-label="中文評估項目">
 {sections.map(s=><button type="button" role="tab" key={s.id} aria-selected={activeTab===s.id} className="chinese-tab" onClick={()=>changeTab(s.id)}>
  <span className="chinese-tab-symbol">{s.symbol}</span><span className="chinese-tab-label">{s.label}</span><span className="chinese-tab-small">{s.id==="寫作"?`${handwritingUploads.length}/7 已上傳`:`${countFor(s.id)}/${s.total} 已回答`}</span>
 </button>)}
 </div>
 {loadState!=="ready"?<section className="chinese-card" role="alert">{loadState==="loading"?"正在載入學生進度…":syncState} <Link href="/login">登入</Link></section>:<>
 {activeTab!=="寫作"&&currentQuestion&&<section className="chinese-card" role="tabpanel">
  <div className="chinese-section-top"><h2 className="chinese-section-title">{sections.find(s=>s.id===activeTab)?.label} <span className="chinese-muted">{sections.find(s=>s.id===activeTab)?.english}</span></h2><span className="chinese-muted">第 {currentIndex+1} / {selectedQuestions.length} 題</span></div>
  <div className="chinese-progress"><div style={{width:`${answeredInSection/selectedQuestions.length*100}%`}}/></div>
  <p className="chinese-muted">本部分已回答 {answeredInSection}/{selectedQuestions.length} 題</p>
  {currentQuestion.passage&&<div style={{background:"#f3f6f8",padding:20,borderRadius:12,whiteSpace:"pre-wrap",marginTop:22}}>{currentQuestion.passage}</div>}
  {activeTab==="閱讀"&&!currentQuestion.passage&&(()=>{const prefix=currentQuestion.id.split("_")[0];const passage=questions.find(q=>q.id===`${prefix}_1`)?.passage;return passage?<div style={{background:"#f3f6f8",padding:20,borderRadius:12,whiteSpace:"pre-wrap",marginTop:22}}>{passage}</div>:null})()}
  {currentQuestion.audio&&<div style={{marginTop:22}}><button type="button" className="chinese-btn" disabled={audioId!==null} onClick={()=>void play(currentQuestion.audio!)}>{audioId===currentQuestion.audio?"正在載入錄音…":"▶ 播放廣東話錄音"}</button><p className="chinese-muted">可以重播，測試時不會顯示錄音稿。</p></div>}
  <h3 className="chinese-question">{currentQuestion.question}</h3>
  {currentQuestion.choices.map((choice,j)=><label key={j} className="chinese-choice"><input type="radio" name={currentQuestion.id} checked={answers[currentQuestion.id]===String(j)} onChange={()=>change(currentQuestion.id,String(j))}/><span>{choice}</span></label>)}
  {audioError&&<p role="alert" style={{color:"#b91c1c"}}>錄音錯誤：{audioError}</p>}
  <div className="chinese-controls"><button type="button" className="chinese-btn" disabled={currentIndex===0} onClick={()=>setQuestionIndex(old=>({...old,[activeTab]:currentIndex-1}))}>← 上一題</button><button type="button" className="chinese-btn chinese-btn-primary" onClick={()=>{if(currentIndex<selectedQuestions.length-1){setQuestionIndex(old=>({...old,[activeTab]:currentIndex+1}));}else{const next=sections.findIndex(s=>s.id===activeTab)+1;if(next<sections.length)changeTab(sections[next].id);}}}>{currentIndex===selectedQuestions.length-1?"下一部分 →":"下一題 →"}</button></div>
  <p className="chinese-status">{syncState}</p>
 </section>}
 {activeTab==="寫作"&&<section className="chinese-card" role="tabpanel">
  <div className="chinese-section-top"><h2 className="chinese-section-title">中文手寫能力評估</h2><span className="chinese-muted">{handwritingUploads.length}/7 題已上傳</span></div>
  <p className="chinese-muted">5 題造句與改寫、2 題短文寫作。請使用紙筆完成後拍照上傳，AI 評語仍需家長覆核。</p>
  <Link href="/chinese-gcse/handwriting" className="chinese-btn chinese-btn-primary" style={{display:"inline-block",textDecoration:"none",margin:"12px 0 18px"}}>前往手寫評估 →</Link>
  {handwritingError&&<p role="alert" style={{color:"#b91c1c"}}>{handwritingError}</p>}
  <div style={{background:"#f4f7f8",borderRadius:12,padding:"8px 18px"}}>{writing.map(w=><div className="chinese-writing-row" key={w.id}><span><strong>{w.id.toUpperCase()}</strong> · {w.title}</span><span style={{color:handwritingReviews.includes(w.id)?"#176b5c":"#64748b",textAlign:"right"}}>{handwritingReviews.includes(w.id)?"已有 AI 評語 · 待覆核":handwritingUploads.includes(w.id)?"已上傳":"尚未上傳"}</span></div>)}</div>
  <p className="chinese-muted">已獲 AI 初步評語：{handwritingReviews.length}/7 題。重新進入本頁可更新狀態。</p>
 </section>}
 <section className="chinese-overview" style={{marginTop:20}}><div className="chinese-overview-head"><div><strong>選擇題提交</strong><p className="chinese-muted" style={{margin:"4px 0 0"}}>49 題完成後可提交；手寫評估獨立儲存。</p></div><button type="button" className="chinese-btn chinese-btn-primary" onClick={()=>void finish()}>提交選擇題</button></div>
 {saved&&<div style={{marginTop:16,borderTop:"1px solid #e1e7ed",paddingTop:12}}><strong>初步結果：{score}/{questions.length}</strong><p className="chinese-muted">這只計算選擇題，不代表 GCSE 成績。</p><button type="button" className="chinese-btn" onClick={()=>void navigator.clipboard.writeText(JSON.stringify({answers,score,total:questions.length},null,2))}>複製評估結果（JSON）</button></div>}
 </section>
 </>}
 </main>;
}
