"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const db = url && key ? createClient(url, key) : null;

const writingTasks: Record<string, string> = {
  w1: "造句 1", w2: "造句 2", w3: "造句 3", w4: "句子改寫",
  w5: "造句 5", w6: "短文（一）", w7: "短文（二）",
};

type Area = "詞彙" | "閱讀" | "廣東話聆聽";
type Section = "overview" | Area | "writing";
type Question = {
  id: string;
  area: Area;
  question: string;
  choices: string[];
  correct: number;
  passage?: string;
  audio?: string;
};

// This is a copy of the 49 questions and answer keys in app/chinese-gcse/page.tsx.
// When changing the student assessment questions, update this list as well.
// Do not show answer keys or detailed marking to parents until all 49 items are submitted.
const questions: Question[] = [
  {id: "v1", area: "詞彙", question: "「持之以恆」的意思是甚麼？", choices: ["長期堅持做一件事", "只做一次", "隨時放棄"], correct: 0},
  {id: "v2", area: "詞彙", question: "「改善」的意思是甚麼？", choices: ["停止活動", "改變地方", "使事情變得更好"], correct: 2},
  {id: "v3", area: "詞彙", question: "「鼓勵」的意思是甚麼？", choices: ["忽略別人", "給予支持和信心", "嚴厲責罵"], correct: 1},
  {id: "v4", area: "詞彙", question: "「珍惜」的意思是甚麼？", choices: ["重視並好好愛護", "隨意丟棄", "完全忘記"], correct: 0},
  {id: "v5", area: "詞彙", question: "「適應」的意思是甚麼？", choices: ["立刻離開", "拒絕改變", "逐漸習慣新環境"], correct: 2},
  {id: "v6", area: "詞彙", question: "「觀察」的意思是甚麼？", choices: ["閉上眼睛", "仔細留意事物", "胡亂猜測"], correct: 1},
  {id: "v7", area: "詞彙", question: "「責任」的意思是甚麼？", choices: ["應當承擔的工作", "個人愛好", "偶然發生的事"], correct: 0},
  {id: "v8", area: "詞彙", question: "「積極」的意思是甚麼？", choices: ["完全被動", "毫不關心", "主動而有熱誠"], correct: 2},
  {id: "v9", area: "詞彙", question: "「猶豫」的意思是甚麼？", choices: ["非常滿意", "拿不定主意", "立即決定"], correct: 1},
  {id: "v10", area: "詞彙", question: "「環境」的意思是甚麼？", choices: ["周圍的情況和條件", "只指天氣", "某種食物"], correct: 0},
  {id: "v11", area: "詞彙", question: "「尊重」的意思是甚麼？", choices: ["嘲笑別人", "強迫服從", "以禮貌和重視對待"], correct: 2},
  {id: "v12", area: "詞彙", question: "「堅持」的意思是甚麼？", choices: ["不斷轉換", "遇到困難仍繼續", "很快放棄"], correct: 1},
  {id: "v13", area: "詞彙", question: "「安排」的意思是甚麼？", choices: ["有計劃地處理", "完全不理會", "突然取消"], correct: 0},
  {id: "v14", area: "詞彙", question: "「影響」的意思是甚麼？", choices: ["永遠不變", "只是模仿", "對人或事產生作用"], correct: 2},
  {id: "v15", area: "詞彙", question: "「效率」的意思是甚麼？", choices: ["休息的次數", "完成事情的速度和成效", "工作時間越長越好"], correct: 1},
  {id: "v16", area: "詞彙", question: "「豐富」的意思是甚麼？", choices: ["種類或內容很多", "完全空白", "數量很少"], correct: 0},
  {id: "v17", area: "詞彙", question: "「獨立」的意思是甚麼？", choices: ["事事依賴別人", "與人爭吵", "能自己處理事情"], correct: 2},
  {id: "v18", area: "詞彙", question: "「探索」的意思是甚麼？", choices: ["重複答案", "嘗試尋找和了解", "拒絕學習"], correct: 1},
  {id: "v19", area: "詞彙", question: "「誠實」的意思是甚麼？", choices: ["說真話、不欺騙", "隱瞞錯誤", "隨便承諾"], correct: 0},
  {id: "v20", area: "詞彙", question: "「挑戰」的意思是甚麼？", choices: ["簡單的休息", "沒有目標", "需要努力克服的困難"], correct: 2},
  {id: "v21", area: "詞彙", question: "「資源」的意思是甚麼？", choices: ["一種情緒", "可供利用的物資或條件", "沒有用途的東西"], correct: 1},
  {id: "v22", area: "詞彙", question: "「比較」的意思是甚麼？", choices: ["找出異同", "只看一件事", "完全不分析"], correct: 0},
  {id: "v23", area: "詞彙", question: "「結論」的意思是甚麼？", choices: ["文章的第一句", "沒有根據的猜想", "根據資料得出的判斷"], correct: 2},
  {id: "v24", area: "詞彙", question: "「證據」的意思是甚麼？", choices: ["未經證實的傳聞", "支持說法的事實資料", "個人的喜好"], correct: 1},
  {id: "v25", area: "詞彙", question: "「公平」的意思是甚麼？", choices: ["以合理一致的標準對待", "只幫助朋友", "隨意更改規則"], correct: 0},
  {id: "v26", area: "詞彙", question: "「合作」的意思是甚麼？", choices: ["各自阻礙對方", "完全不溝通", "一起努力完成事情"], correct: 2},
  {id: "v27", area: "詞彙", question: "「反思」的意思是甚麼？", choices: ["不接受意見", "回顧並檢討自己的做法", "只責怪別人"], correct: 1},
  {id: "v28", area: "詞彙", question: "「傳統」的意思是甚麼？", choices: ["長期流傳的習俗或做法", "剛發明的工具", "一種交通方式"], correct: 0},
  {id: "v29", area: "詞彙", question: "「目標」的意思是甚麼？", choices: ["已經忘記的事", "沒有方向的行動", "希望達成的事情"], correct: 2},
  {id: "v30", area: "詞彙", question: "「自律」的意思是甚麼？", choices: ["隨意拖延", "自覺控制自己的行為", "只聽別人命令"], correct: 1},
  {id: "r1_1", area: "閱讀", question: "小欣如何適應新學校？", choices: ["只在家裏學習", "閱讀故事並與同學交流", "轉到另一間學校"], correct: 1, passage: "小欣剛搬到英國時，不太習慣新的學校。她每天花半小時閱讀英文故事，也會主動跟同學聊天。半年後，她交到了新朋友，對上學也更有信心。"},
  {id: "r1_2", area: "閱讀", question: "半年後小欣有甚麼改變？", choices: ["更有信心", "停止閱讀", "決定回香港"], correct: 0},
  {id: "r1_3", area: "閱讀", question: "這篇文章主要說明甚麼？", choices: ["適應新環境需要努力", "閱讀沒有用處", "交朋友很容易"], correct: 0},
  {id: "r2_1", area: "閱讀", question: "學校計劃在甚麼時間開放圖書館？", choices: ["上課前", "午膳時間", "放學後"], correct: 1, passage: "學校計劃在午膳時間開放圖書館，讓學生可以安靜閱讀或做功課。有些同學擔心午膳時間太短，不能充分休息。學生會建議先試行一個月，再收集意見決定是否繼續。"},
  {id: "r2_2", area: "閱讀", question: "部分同學擔心甚麼？", choices: ["休息時間不足", "書本太多", "沒有老師"], correct: 0},
  {id: "r2_3", area: "閱讀", question: "學生會提出甚麼建議？", choices: ["立即取消", "試行一個月再收集意見", "只讓高年級參加"], correct: 1},
  {id: "r3_1", area: "閱讀", question: "嘉敏的義工工作是甚麼？", choices: ["教長者用智能電話", "清潔公園", "照顧動物"], correct: 0, passage: "去年暑假，嘉敏參加了社區義工活動，協助長者學習使用智能電話。起初她以為教學十分簡單，後來發現每個人的學習速度不同，因此改用圖片和逐步示範。活動結束後，她明白耐心與溝通同樣重要。"},
  {id: "r3_2", area: "閱讀", question: "她為甚麼改變教學方法？", choices: ["學習速度不同", "手機全部壞了", "時間太長"], correct: 0},
  {id: "r3_3", area: "閱讀", question: "她從活動中學到甚麼？", choices: ["耐心和溝通很重要", "只要速度快就好", "不應幫助別人"], correct: 0},
  {id: "l1", area: "廣東話聆聽", question: "小明最喜歡甚麼科目？", choices: ["數學", "中文", "科學"], correct: 2, audio: "school"},
  {id: "l2", area: "廣東話聆聽", question: "上星期六他借了多少本書？", choices: ["一本", "兩本", "三本"], correct: 1, audio: "weekend"},
  {id: "l3", area: "廣東話聆聽", question: "說話者現在每天做甚麼運動？", choices: ["跑步一小時", "行路半個鐘", "游泳"], correct: 1, audio: "healthy"},
  {id: "l4", area: "廣東話聆聽", question: "阿欣平日如何返學？", choices: ["搭巴士", "行路", "踩單車"], correct: 0, audio: "transport"},
  {id: "l5", area: "廣東話聆聽", question: "巴士遲到時她會怎樣做？", choices: ["等下一班", "打電話給學校", "回家"], correct: 1, audio: "transport"},
  {id: "l6", area: "廣東話聆聽", question: "志明星期日會去哪裏？", choices: ["圖書館", "社區中心", "運動場"], correct: 1, audio: "volunteer"},
  {id: "l7", area: "廣東話聆聽", question: "他為甚麼參加活動？", choices: ["想幫助別人", "想買新電話", "想早點回家"], correct: 0, audio: "volunteer"},
  {id: "l8", area: "廣東話聆聽", question: "星期六預計天氣如何？", choices: ["晴朗", "有大雨", "下雪"], correct: 1, audio: "weather"},
  {id: "l9", area: "廣東話聆聽", question: "他們決定改去哪裏？", choices: ["室內博物館", "沙灘", "山頂"], correct: 0, audio: "weather"},
  {id: "l10", area: "廣東話聆聽", question: "說話者將來希望做甚麼？", choices: ["醫生", "工程師", "廚師"], correct: 1, audio: "future"},
];

const sections: { id: Area; label: string; english: string; total: number; icon: string }[] = [
  { id: "詞彙", label: "詞彙", english: "Vocabulary", total: 30, icon: "字" },
  { id: "閱讀", label: "閱讀", english: "Reading", total: 9, icon: "閱" },
  { id: "廣東話聆聽", label: "聆聽", english: "Listening", total: 10, icon: "聽" },
];

type Student = { id: string; student: string };
type Upload = { id: string; task_id: string; file_name: string; object_path: string };
type Feedback = {
  transcription?: string;
  provisional_score?: number;
  score_reason?: string;
  uncertain?: string[];
  strengths?: string[];
  feedback?: string[];
};
type Review = {
  id: string; task_id: string; status: string; feedback: Feedback;
  corrected_transcription: string | null; final_score: number | null;
};
type Progress = { answers: Record<string, string>; completed_at: string | null; updated_at: string | null };

const panel: CSSProperties = { padding: 20, border: "1px solid #dfe6ee", borderRadius: 18, background: "white" };
const btn: CSSProperties = { padding: "10px 14px", borderRadius: 10, border: "1px solid #cbd5e1", cursor: "pointer", background: "white", color: "#17243a" };

function statsFor(area: Area, answers: Record<string, string>) {
  const items = questions.filter(q => q.area === area);
  const answered = items.filter(q => Object.prototype.hasOwnProperty.call(answers, q.id));
  const correct = answered.filter(q => answers[q.id] === String(q.correct));
  return { total: items.length, answered: answered.length, correct: correct.length, wrong: answered.length - correct.length };
}

export default function ChineseParent() {
  const [students, setStudents] = useState<Student[]>([]);
  const [student, setStudent] = useState("");
  const [section, setSection] = useState<Section>("overview");
  const [task, setTask] = useState("w1");
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [progress, setProgress] = useState<Progress | null>(null);
  const [loadingStudent, setLoadingStudent] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [message, setMessage] = useState("正在驗證家長身份…");
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState("");
  const [score, setScore] = useState(0);
  const [preview, setPreview] = useState("");
  const [showAll, setShowAll] = useState(false);
  const requestId = useRef(0);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        if (!db) throw Error("Supabase 尚未設定");
        const { data: { user }, error: authError } = await db.auth.getUser();
        if (authError || !user) throw Error("請先登入家長帳戶");
        const { data: profile, error: profileError } = await db.from("profiles").select("role").eq("id", user.id).single();
        if (profileError || profile?.role !== "parent") throw Error("此頁面只供已授權家長使用");
        const { data: links, error: linkError } = await db.from("parent_student_links").select("student_id").eq("parent_id", user.id);
        if (linkError) throw Error(linkError.message);
        const ids = (links ?? []).map(x => x.student_id as string);
        if (!ids.length) throw Error("尚未連結學生帳戶");
        const { data: children, error: childrenError } = await db.from("profiles").select("id,student").in("id", ids);
        if (childrenError) throw Error(childrenError.message);
        if (!active) return;
        const sorted = ((children ?? []) as Student[]).sort((a, b) => a.student.localeCompare(b.student));
        setStudents(sorted);
        setStudent(sorted[0]?.id ?? "");
        setAuthorized(true);
        setMessage("家長身份已驗證");
      } catch (e) {
        if (active) setMessage(e instanceof Error ? e.message : "載入失敗");
      }
    })();
    return () => { active = false; };
  }, []);

  const load = useCallback(async (studentId: string) => {
    if (!db || !studentId) return;
    const myRequest = ++requestId.current;
    setLoadingStudent(true);
    setUploads([]);
    setReviews([]);
    setProgress(null);
    setPreview("");
    setMessage("正在載入學生資料…");
    try {
      const [a, b, c] = await Promise.all([
        db.from("chinese_handwriting_submissions").select("id,task_id,file_name,object_path")
          .eq("user_id", studentId).eq("assessment_version", "v3"),
        db.from("chinese_handwriting_reviews").select("id,task_id,status,feedback,corrected_transcription,final_score")
          .eq("user_id", studentId).eq("assessment_version", "v3").order("created_at", { ascending: false }),
        db.from("chinese_diagnostic_progress").select("answers,completed_at,updated_at")
          .eq("user_id", studentId).maybeSingle(),
      ]);
      if (myRequest !== requestId.current) return;
      if (a.error || b.error || c.error) throw Error(a.error?.message ?? b.error?.message ?? c.error?.message ?? "讀取失敗");
      setUploads((a.data ?? []) as Upload[]);
      setReviews((b.data ?? []) as Review[]);
      setProgress(c.data ? {
        answers: (c.data.answers ?? {}) as Record<string, string>,
        completed_at: c.data.completed_at,
        updated_at: c.data.updated_at,
      } : null);
      setMessage("資料已載入");
    } catch (e) {
      if (myRequest === requestId.current) setMessage("資料載入失敗：" + (e instanceof Error ? e.message : "未知錯誤"));
    } finally {
      if (myRequest === requestId.current) setLoadingStudent(false);
    }
  }, []);

  useEffect(() => { if (student) void load(student); }, [student, load]);

  const latest: Record<string, Review> = {};
  for (const r of reviews) if (!latest[r.task_id]) latest[r.task_id] = r;
  const current = latest[task];

  useEffect(() => {
    setDraft(current?.corrected_transcription ?? current?.feedback?.transcription ?? "");
    setScore(current?.final_score ?? current?.feedback?.provisional_score ?? 0);
    setPreview("");
  }, [student, task, current?.id, current?.status]);

  const answers = progress?.answers ?? {};
  const answeredTotal = questions.filter(q => Object.prototype.hasOwnProperty.call(answers, q.id)).length;
  const submitted = !!progress?.completed_at && answeredTotal === questions.length;
  const uploaded = new Set(uploads.map(x => x.task_id)).size;
  const pending = Object.values(latest).filter(x => x.status === "pending_review").length;
  const confirmed = Object.values(latest).filter(x => x.status === "confirmed").length;
  const percent = (n: number, total: number) => total ? Math.round(n / total * 100) : 0;

  async function openOriginal(path: string) {
    if (!db) return;
    const { data, error } = await db.storage.from("chinese-handwriting").createSignedUrl(path, 120);
    if (error || !data) { setMessage(error?.message ?? "無法開啟原稿"); return; }
    setPreview(data.signedUrl);
  }

  async function confirmReview() {
    if (!db || !current || busy || current.status === "confirmed") return;
    if (!draft.trim() || !Number.isInteger(score) || score < 0 || score > 10) {
      setMessage("請填寫文字及 0–10 的整數分數"); return;
    }
    setBusy(true);
    try {
      const { data: { user }, error: authError } = await db.auth.getUser();
      if (authError || !user) throw Error("登入已失效，請重新登入家長帳戶");
      const { data: profile, error: profileError } = await db.from("profiles").select("role").eq("id", user.id).single();
      if (profileError || profile?.role !== "parent") throw Error("目前登入帳戶不是家長帳戶");
      const { data: review, error: reviewError } = await db.from("chinese_handwriting_reviews")
        .select("id,user_id,task_id,status").eq("id", current.id).single();
      if (reviewError || !review) throw Error("無法找到指定的 AI 評語：" + (reviewError?.message ?? "查無資料"));
      if (review.user_id !== student || review.task_id !== task) throw Error("評語所屬學生或題目不一致");
      if (review.status !== "pending_review") throw Error("這份評語已確認或不在待覆核狀態");
      const { data: link, error: linkError } = await db.from("parent_student_links").select("student_id")
        .eq("parent_id", user.id).eq("student_id", review.user_id).maybeSingle();
      if (linkError || !link) throw Error("目前家長帳戶沒有這名學生的覆核權限");
      const { error } = await db.rpc("confirm_chinese_handwriting_review", {
        p_review_id: review.id, p_corrected_transcription: draft, p_final_score: score,
      });
      if (error) throw Error(`RPC ${error.code ?? ""}: ${error.message}`);
      await load(student);
      setMessage("家長覆核已成功儲存");
    } catch (e) {
      setMessage("覆核失敗：" + (e instanceof Error ? e.message : "未知錯誤"));
    } finally {
      setBusy(false);
    }
  }

  function chooseSection(id: Section) { setSection(id); setShowAll(false); }

  return (
    <main className="cg-parent">
      <style>{`
        .cg-parent{max-width:1100px;margin:35px auto;padding:0 20px 80px;line-height:1.65;color:#17243a}
        .cg-parent *{box-sizing:border-box}
        .cg-parent a{color:#176759}
        .cg-parent .cg-header-links{display:flex;gap:18px;flex-wrap:wrap}
        .cg-parent .cg-title{font-size:clamp(28px,4.5vw,38px);font-weight:800;line-height:1.3;margin:12px 0}
        .cg-parent .cg-muted{color:#64748b;font-size:13px}
        .cg-parent .cg-mini{color:#526275;font-size:12px}
        .cg-parent .cg-tabs{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin:18px 0 24px}
        .cg-parent .cg-tab{border:1px solid #dbe4ed;background:white;border-radius:13px;padding:13px 8px;cursor:pointer;text-align:center;font-weight:750;color:#1d3046}
        .cg-parent .cg-tab[aria-selected=true]{border-color:#187967;background:#eef8f4;color:#116555}
        .cg-parent .cg-tab small{display:block;color:#66788b;font-size:11px;font-weight:500}
        .cg-parent .cg-kpi-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
        .cg-parent .cg-kpi{background:#fff;border:1px solid #e1e7ee;border-radius:16px;padding:18px;min-width:0}
        .cg-parent .cg-kpi strong{display:block;font-size:26px;margin-top:4px}
        .cg-parent .cg-track{height:8px;background:#e6ecf1;border-radius:99px;overflow:hidden;margin-top:12px}
        .cg-parent .cg-fill{height:100%;background:#267f6e;border-radius:99px}
        .cg-parent .cg-wrong{border:1px solid #f2d3cd;background:#fffbf9;padding:14px 16px;border-radius:12px;margin:10px 0}
        .cg-parent .cg-correct{color:#176b53;font-weight:700}
        .cg-parent .cg-entry{border-bottom:1px solid #e2e8f0;padding:12px 0}
        .cg-parent .cg-answer{background:#f1f5f9;padding:12px;border-radius:10px;white-space:pre-wrap}
        .cg-parent .cg-writing-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
        .cg-parent .cg-submitted{color:#166534;font-weight:700}
        @media(max-width:720px){.cg-parent{padding:0 14px 65px}.cg-parent .cg-tabs{gap:5px}.cg-parent .cg-tab{font-size:12px;padding:10px 3px}.cg-parent .cg-tab small{font-size:10px}.cg-parent .cg-writing-grid{grid-template-columns:1fr}}
      `}</style>

      <nav className="cg-header-links" aria-label="返回頁面">
        <Link href="/family">← Family Dashboard</Link>
        <Link href="/chinese-gcse">GCSE Chinese 主頁</Link>
      </nav>
      <p className="cg-mini" style={{letterSpacing:2,marginTop:24}}>PW LEARNING HUB · PARENT</p>
      <h1 className="cg-title">GCSE Chinese 家長管理中心</h1>
      <p>詞彙、閱讀、聆聽成績分析及手寫家長覆核</p>
      <p role="status" style={{background:"#f1f5f9",padding:12,borderRadius:10}}>{message}</p>

      {authorized && <>
        <div style={{display:"flex",gap:10,margin:"18px 0",flexWrap:"wrap"}}>
          {students.map(s => <button type="button" key={s.id} onClick={() => {setStudent(s.id);setTask("w1");setShowAll(false);}} style={{...btn,background:student===s.id?"#1e3a8a":"white",color:student===s.id?"white":"#17243a",fontWeight:750}}>{s.student}</button>)}
        </div>

        <div className="cg-tabs" role="tablist" aria-label="家長成績分析分頁">
          {([{id:"overview",label:"總覽",en:"Overview"},{id:"詞彙",label:"詞彙",en:"Vocabulary"},{id:"閱讀",label:"閱讀",en:"Reading"},{id:"廣東話聆聽",label:"聆聽",en:"Listening"},{id:"writing",label:"寫作",en:"Writing"}] as {id:Section;label:string;en:string}[]).map(t =>
            <button key={t.id} type="button" className="cg-tab" role="tab" aria-selected={section===t.id} onClick={()=>chooseSection(t.id)}>{t.label}<small>{t.en}</small></button>
          )}
        </div>

        {loadingStudent ? <section style={panel}>正在讀取學生資料…</section> : <>
          {section==="overview" && <section role="tabpanel" style={panel}>
            <h2 style={{fontSize:22,marginTop:0}}>評估總覽</h2>
            <p className="cg-muted">選擇題共 49 題，全部完成及正式提交後才會顯示分數與錯題，避免測驗期間透露答案。</p>
            <div className="cg-kpi-grid">
              {sections.map(s => {
                const st = statsFor(s.id, answers);
                return <button type="button" className="cg-kpi" key={s.id} style={{textAlign:"left",cursor:"pointer",color:"inherit"}} onClick={()=>chooseSection(s.id)}>
                  <div className="cg-muted">{s.icon} {s.label} · {s.english}</div>
                  <strong>{submitted ? `${st.correct}/${st.total}` : `${st.answered}/${st.total}`}</strong>
                  <span className="cg-mini">{submitted?`答對率 ${percent(st.correct,st.total)}%`:`已回答 ${st.answered} 題（未提交）`}</span>
                  <div className="cg-track"><div className="cg-fill" style={{width:`${percent(submitted?st.correct:st.answered,st.total)}%`}}/></div>
                </button>;
              })}
              <button type="button" className="cg-kpi" style={{textAlign:"left",cursor:"pointer",color:"inherit"}} onClick={()=>chooseSection("writing")}>
                <div className="cg-muted">寫 · Writing</div>
                <strong>{uploaded}/7</strong>
                <span className="cg-mini">待覆核 {pending} · 已確認 {confirmed}</span>
                <div className="cg-track"><div className="cg-fill" style={{width:`${percent(uploaded,7)}%`}}/></div>
              </button>
            </div>
            <p className="cg-mini" style={{marginTop:18}}>{submitted?`選擇題提交時間：${new Date(progress!.completed_at!).toLocaleString("en-GB")}`:`選擇題已回答 ${answeredTotal}/49；尚未完成正式提交。`}</p>
            {!submitted && <p className="cg-mini">未提交期間不計算正確率。已存的部分答案只作進度統計。</p>}
            {submitted && <p><strong>選擇題總成績：</strong>{sections.reduce((sum,s)=>sum+statsFor(s.id,answers).correct,0)}/49（診斷評估，非正式 GCSE Grade）</p>}
          </section>}

          {sections.map(s => section === s.id && (() => {
            const st = statsFor(s.id, answers);
            const items = questions.filter(q=>q.area===s.id);
            const wrong = items.filter(q=>answers[q.id] !== String(q.correct));
            const shown = showAll ? items : wrong;
            return <section role="tabpanel" key={s.id} style={panel}>
              <h2 style={{fontSize:22,marginTop:0}}>{s.label} {s.english}</h2>
              <p className="cg-muted">已回答 {st.answered}/{st.total} 題</p>
              <div className="cg-track"><div className="cg-fill" style={{width:`${percent(st.answered,st.total)}%`}}/></div>
              {!submitted ? <div style={{marginTop:20,padding:16,borderRadius:12,background:"#f7f9fc"}}>
                <strong>尚未提交完整選擇題</strong>
                <p className="cg-muted">完成全部 49 題並按「提交選擇題」後，這裡才會顯示答對數量、答對率與錯題詳細內容。</p>
              </div> : <>
                <div style={{display:"flex",gap:18,flexWrap:"wrap",margin:"18px 0"}}>
                  <div><span className="cg-muted">正確題數</span><div style={{fontSize:25,fontWeight:800}}>{st.correct}/{st.total}</div></div>
                  <div><span className="cg-muted">答對率</span><div style={{fontSize:25,fontWeight:800}}>{percent(st.correct,st.total)}%</div></div>
                  <div><span className="cg-muted">錯題</span><div style={{fontSize:25,fontWeight:800}}>{st.wrong}</div></div>
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,flexWrap:"wrap"}}>
                  <h3 style={{margin:"8px 0"}}>{showAll?"全部題目及答案":"需要溫習的錯題"}</h3>
                  <button type="button" style={btn} onClick={()=>setShowAll(v=>!v)}>{showAll?"只顯示錯題":"查看全部題目"}</button>
                </div>
                {!shown.length && <p className="cg-correct">這部分全部答對，沒有錯題。</p>}
                {shown.map(q=>{
                  const answerIndex = Number(answers[q.id]);
                  const validAnswer = Object.prototype.hasOwnProperty.call(answers,q.id) && Number.isInteger(answerIndex) && answerIndex>=0 && answerIndex<q.choices.length;
                  const correct = answers[q.id]===String(q.correct);
                  const leadPassage = q.area==="閱讀" ? questions.find(p=>p.id===`${q.id.split("_")[0]}_1`)?.passage : undefined;
                  return <article key={q.id} className={correct?"cg-entry":"cg-wrong"}>
                    <strong>{q.id} · {q.question}</strong>
                    {leadPassage && <details style={{marginTop:5}}><summary className="cg-mini">查看閱讀文章</summary><p className="cg-muted" style={{whiteSpace:"pre-wrap"}}>{leadPassage}</p></details>}
                    <p style={{margin:"8px 0 2px"}}>學生答案：<span style={{color:correct?"#166534":"#a13d31",fontWeight:650}}>{validAnswer?q.choices[answerIndex]:"未作答／答案無效"}</span></p>
                    <p style={{margin:"2px 0"}}>正確答案：<span className="cg-correct">{q.choices[q.correct]}</span></p>
                  </article>;
                })}
              </>}
            </section>;
          })())}

          {section==="writing" && <section role="tabpanel">
            <div className="cg-kpi-grid" style={{gridTemplateColumns:"repeat(3,minmax(0,1fr))",marginBottom:18}}>
              {[["已上傳",`${uploaded}/7`],["待覆核",pending],["已確認",confirmed]].map(([label,value]) =>
                <div key={String(label)} style={{...panel,padding:16}}><small>{label}</small><div style={{fontSize:26,fontWeight:800}}>{value}</div></div>
              )}
            </div>
            <div className="cg-writing-grid">
              <section style={panel}>
                <h2 style={{fontSize:19,fontWeight:750,marginTop:0}}>選擇手寫題目</h2>
                {Object.entries(writingTasks).map(([id,title]) => <button type="button" key={id} onClick={()=>setTask(id)} style={{...btn,width:"100%",textAlign:"left",display:"block",marginBottom:8,background:task===id?"#eaf1ff":"white"}}>
                  <strong>{title}</strong><br/><small>{uploads.some(x=>x.task_id===id)?"已上傳":"未上傳"} · {latest[id]?(latest[id].status==="confirmed"?"已覆核":"待覆核"):"未批改"}</small>
                </button>)}
              </section>
              <section style={panel}>
                <h2 style={{fontSize:19,fontWeight:750,marginTop:0}}>{writingTasks[task]}</h2>
                <strong>學生手寫原稿</strong>
                <div style={{margin:"10px 0"}}>
                  {uploads.filter(x=>x.task_id===task).map(x=><button type="button" key={x.id} style={{...btn,marginRight:6,marginBottom:6}} onClick={()=>void openOriginal(x.object_path)}>{x.file_name}</button>)}
                  {!uploads.some(x=>x.task_id===task) && <p>未上傳</p>}
                </div>
                {preview && <p><a href={preview} target="_blank" rel="noopener noreferrer">查看私人原稿（連結有效約 2 分鐘）</a></p>}
                {current ? <>
                  <h3 style={{fontWeight:750,marginTop:20}}>AI 原始辨識</h3>
                  <p className="cg-answer">{current.feedback?.transcription}</p>
                  <p>AI 初步分數：{current.feedback?.provisional_score??"—"}/10</p>
                  <p>{current.feedback?.score_reason}</p>
                  {!!current.feedback?.uncertain?.length && <p>不確定字詞：{current.feedback.uncertain.join("、")}</p>}
                  {!!current.feedback?.strengths?.length && <><strong>優點</strong><ul>{current.feedback.strengths.map((x,i)=><li key={i}>{x}</li>)}</ul></>}
                  {!!current.feedback?.feedback?.length && <><strong>改善建議</strong><ul>{current.feedback.feedback.map((x,i)=><li key={i}>{x}</li>)}</ul></>}
                  <label style={{display:"block",fontWeight:750}} htmlFor="cg-corrected">家長核對後的原文</label>
                  <textarea id="cg-corrected" rows={5} value={draft} disabled={current.status==="confirmed"||busy} onChange={e=>setDraft(e.target.value)} style={{width:"100%",border:"1px solid #94a3b8",borderRadius:8,padding:10}}/>
                  <label style={{display:"block",fontWeight:750,marginTop:10}} htmlFor="cg-final-score">最終分數（0–10）</label>
                  <input id="cg-final-score" type="number" min={0} max={10} step={1} value={score} disabled={current.status==="confirmed"||busy} onChange={e=>setScore(Number(e.target.value))} style={{...btn,width:90,display:"block",marginBottom:12}}/>
                  <p className="cg-mini">原始 AI 評語及原稿不會被覆蓋；確認會記錄家長及時間。</p>
                  {current.status==="confirmed"?<p className="cg-submitted">已確認覆核</p>:<button type="button" disabled={busy} onClick={()=>void confirmReview()} style={{...btn,background:"#166534",color:"white"}}>{busy?"正在儲存…":"確認家長覆核"}</button>}
                </> : <p>尚未有 AI 評語。請先由學生在手寫頁面完成批改。</p>}
              </section>
            </div>
          </section>}
        </>}
      </>}
    </main>
  );
}
