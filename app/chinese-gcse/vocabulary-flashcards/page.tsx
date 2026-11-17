"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  EDEXCEL_VOCABULARY_CARDS,
  EDEXCEL_VOCABULARY_CATEGORIES,
  type EdexcelVocabularyCard,
  type VocabularySection,
} from "@/data/chineseGcse/edexcelVocabulary";
import {
  daily10SessionView, isNewLondonDay, type Daily10State,
} from "@/data/chineseGcse/vocabularyDaily10";

type Direction = "english-first" | "chinese-first";
type TierFilter = "all" | "core-foundation" | "higher";
type ReviewMode = "all" | "wrong";
type SessionSize = "10" | "20" | "all";
type StudyMode = "daily" | "free";
type ProgressRow = {
  card_id: string;
  correct_count: number;
  incorrect_count: number;
  last_result: boolean | null;
};
type ProgressMap = Record<string, ProgressRow>;

function shuffled<T>(values: T[]) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function tierLabel(tier: EdexcelVocabularyCard["tier"]) {
  if (tier === "higher") return "Higher";
  if (tier === "foundation") return "Foundation";
  return "Core";
}

export default function OfficialVocabularyFlashcardsPage() {
  const [section, setSection] = useState<VocabularySection>("high-frequency");
  const [category, setCategory] = useState("common-verbs");
  const [direction, setDirection] = useState<Direction>("english-first");
  const [tierFilter, setTierFilter] = useState<TierFilter>("all");
  const [studyMode, setStudyMode] = useState<StudyMode>("daily");
  const [reviewMode, setReviewMode] = useState<ReviewMode>("all");
  const [sessionSize, setSessionSize] = useState<SessionSize>("10");
  const [sessionCards, setSessionCards] = useState<EdexcelVocabularyCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [swiping, setSwiping] = useState(false);
  const [message, setMessage] = useState("");
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionIncorrect, setSessionIncorrect] = useState(0);
  const [daily, setDaily] = useState<Daily10State | null>(null);
  const [dailyLoading, setDailyLoading] = useState(false);
  const [dailyError, setDailyError] = useState("");
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const didDrag = useRef(false);
  const swipeLocked = useRef(false);
  const answerLocked = useRef(false);
  const requestVersion = useRef(0);
  const swipeTimer = useRef<number | null>(null);
  const busy = loading || saving || swiping || dailyLoading;

  const db = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    return url && key ? createClient(url, key) : null;
  }, []);

  const categories = useMemo(
    () => EDEXCEL_VOCABULARY_CATEGORIES.filter(item => item.section === section), [section]
  );
  useEffect(() => {
    if (!categories.some(item => item.id === category)) setCategory(categories[0]?.id ?? "");
  }, [categories, category]);

  useEffect(() => {
    let active = true;
    let authVersion = 0;
    let knownUserId: string | null | undefined;
    async function loadUser() {
      const version = ++authVersion;
      setLoading(true);
      setUserId(null);
      setProgress({});
      setMessage("");
      if (!db) {
        setMessage("Supabase 環境變數未設定");
        setLoading(false);
        return;
      }
      try {
        const { data: { user }, error: authError } = await db.auth.getUser();
        if (!active || version !== authVersion) return;
        knownUserId = user?.id ?? null;
        if (authError || !user) throw new Error("請先登入 PW Learning Hub，才可儲存溫習紀錄。");
        setUserId(user.id);
        const { data, error } = await db.from("chinese_gcse_vocabulary_progress")
          .select("card_id,correct_count,incorrect_count,last_result").eq("user_id", user.id);
        if (!active || version !== authVersion) return;
        if (error) throw new Error("暫時未能讀取詞彙紀錄，請確認已執行安裝 SQL。");
        const next: ProgressMap = {};
        for (const row of (data ?? []) as ProgressRow[]) next[row.card_id] = row;
        setProgress(next);
      } catch (error) {
        if (active && version === authVersion) setMessage(error instanceof Error ? error.message : "暫時未能連線，請重新整理。");
      } finally {
        if (active && version === authVersion) setLoading(false);
      }
    }
    void loadUser();
    const subscription = db?.auth.onAuthStateChange((_event, session) => {
      const nextUserId = session?.user.id ?? null;
      if (knownUserId !== undefined && knownUserId !== nextUserId) {
        knownUserId = nextUserId;
        authVersion += 1;
        requestVersion.current += 1;
        setLoading(true);
        setUserId(null);
        setProgress({});
        // Defer database calls until the auth callback has released its lock.
        window.setTimeout(() => { if (active) void loadUser(); }, 0);
      }
    });
    return () => { active = false; subscription?.data.subscription.unsubscribe(); };
  }, [db]);

  const filteredCards = useMemo(() => EDEXCEL_VOCABULARY_CARDS.filter(card => {
    if (card.section !== section || card.category !== category) return false;
    if (tierFilter === "core-foundation" && card.tier === "higher") return false;
    if (tierFilter === "higher" && card.tier !== "higher") return false;
    return true;
  }), [section, category, tierFilter]);
  const availableCards = useMemo(() => filteredCards.filter(card =>
    studyMode === "daily" || reviewMode === "all" || progress[card.id]?.last_result === false
  ), [filteredCards, studyMode, reviewMode, progress]);
  const categoryCards = useMemo(
    () => EDEXCEL_VOCABULARY_CARDS.filter(card => card.category === category), [category]
  );
  const answeredInCategory = categoryCards.filter(card => progress[card.id]).length;
  const lastCorrectInCategory = categoryCards.filter(card => progress[card.id]?.last_result === true).length;
  const wrongToReviewInCategory = categoryCards.filter(card => progress[card.id]?.last_result === false).length;

  const resetMotion = useCallback(() => {
    setFlipped(false);
    setDragX(0);
    setDragging(false);
    didDrag.current = false;
    swipeLocked.current = false;
  }, []);

  const applyDaily = useCallback((state: Daily10State) => {
    const view = daily10SessionView(state);
    setDaily(state);
    setSessionCards(view.cards);
    setCurrentIndex(view.answered);
    setSessionCorrect(view.correct);
    setSessionIncorrect(view.incorrect);
    resetMotion();
  }, [resetMotion]);

  const loadDaily = useCallback(async (start = false) => {
    if (!db || !userId || !filteredCards.length) return;
    const version = ++requestVersion.current;
    setDailyLoading(true);
    setDailyError("");
    try {
      const { data, error } = await db.rpc("get_chinese_vocabulary_daily10", {
        p_section: section, p_category: category, p_tier_filter: tierFilter, p_start: start,
      });
      if (version !== requestVersion.current) return;
      if (error) throw new Error(error.message);
      const state = data as Daily10State;
      if (!state || state.total_count !== filteredCards.length) {
        throw new Error("詞彙資料版本不一致，請執行這次更新的 SQL。");
      }
      applyDaily(state);
      setMessage("");
    } catch (error) {
      if (version === requestVersion.current) {
        setDailyError(`暫時未能讀取每日10張。請確認已執行 chinese_gcse_vocabulary_daily10.sql，再按「重新連線」。${error instanceof Error ? `（${error.message}）` : ""}`);
      }
    } finally {
      if (version === requestVersion.current) setDailyLoading(false);
    }
  }, [db, userId, filteredCards, section, category, tierFilter, applyDaily]);

  useEffect(() => {
    requestVersion.current += 1;
    setSessionCards([]);
    setCurrentIndex(0);
    setSessionCorrect(0);
    setSessionIncorrect(0);
    setDaily(null);
    setDailyError("");
    setDailyLoading(false);
    resetMotion();
    if (studyMode === "daily" && !loading) void loadDaily();
    return () => { requestVersion.current += 1; };
  }, [studyMode, reviewMode, loading, loadDaily, resetMotion]);

  useEffect(() => {
    if (studyMode !== "daily" || loading || !userId) return;
    const refresh = () => {
      if (!answerLocked.current && !swipeLocked.current && !document.hidden) void loadDaily();
    };
    const timer = window.setInterval(() => {
      if (daily && isNewLondonDay(daily.server_date)) refresh();
    }, 60000);
    window.addEventListener("focus", refresh);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", refresh); };
  }, [studyMode, loading, userId, daily, loadDaily]);

  useEffect(() => () => {
    if (swipeTimer.current) window.clearTimeout(swipeTimer.current);
  }, []);

  const startSession = () => {
    if (busy || !userId) return;
    if (studyMode === "daily") { void loadDaily(true); return; }
    const randomized = shuffled(availableCards);
    const count = sessionSize === "all" ? randomized.length : Number(sessionSize);
    setSessionCards(randomized.slice(0, count));
    setCurrentIndex(0);
    setSessionCorrect(0);
    setSessionIncorrect(0);
    resetMotion();
    setMessage(randomized.length ? "自由溫習已開始。" : "這個篩選暫時沒有可溫習的詞語。");
  };

  const current = sessionCards[currentIndex];
  const completed = sessionCards.length > 0 && currentIndex >= sessionCards.length;

  const recordResult = useCallback(async (correct: boolean) => {
    if (!current || answerLocked.current) return;
    if (!db || !userId) {
      setMessage("請先登入，才可記錄答對或答錯。");
      resetMotion();
      setSwiping(false);
      return;
    }
    answerLocked.current = true;
    const version = requestVersion.current;
    setSaving(true);
    try {
      if (studyMode === "daily") {
        if (!daily?.session_id) throw new Error("請重新連線，載入每日卡片。");
        const { data, error } = await db.rpc("answer_chinese_vocabulary_daily10", {
          p_session_id: daily.session_id, p_card_id: current.id, p_correct: correct,
        });
        if (version !== requestVersion.current) return;
        if (error) throw new Error(error.message);
        const result = data as Daily10State & { progress: ProgressRow };
        applyDaily(result);
        if (result.progress) setProgress(previous => ({ ...previous, [result.progress.card_id]: result.progress }));
      } else {
        const previous = progress[current.id];
        const nextRow: ProgressRow = {
          card_id: current.id,
          correct_count: (previous?.correct_count ?? 0) + (correct ? 1 : 0),
          incorrect_count: (previous?.incorrect_count ?? 0) + (correct ? 0 : 1),
          last_result: correct,
        };
        const { error } = await db.from("chinese_gcse_vocabulary_progress").upsert({
          user_id: userId, ...nextRow,
          last_seen_at: new Date().toISOString(), updated_at: new Date().toISOString(),
        }, { onConflict: "user_id,card_id" });
        if (version !== requestVersion.current) return;
        if (error) throw new Error(error.message);
        setProgress(previousProgress => ({ ...previousProgress, [current.id]: nextRow }));
        if (correct) setSessionCorrect(value => value + 1);
        else setSessionIncorrect(value => value + 1);
        setCurrentIndex(value => value + 1);
        resetMotion();
      }
      setMessage("");
    } catch (error) {
      if (version !== requestVersion.current) return;
      setMessage(`未能儲存：${error instanceof Error ? error.message : "連線中斷，請重試。"}`);
      setDragX(0);
      setDragging(false);
      swipeLocked.current = false;
    } finally {
      answerLocked.current = false;
      setSaving(false);
      setSwiping(false);
    }
  }, [current, db, userId, studyMode, daily, applyDaily, progress, resetMotion]);

  const finishSwipe = (correct: boolean) => {
    if (!flipped || busy || swipeLocked.current) return;
    swipeLocked.current = true;
    setSwiping(true);
    setDragging(false);
    setDragX(correct ? Math.max(window.innerWidth, 760) : -Math.max(window.innerWidth, 760));
    swipeTimer.current = window.setTimeout(() => void recordResult(correct), 220);
  };
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!flipped || busy || swipeLocked.current) return;
    dragStartX.current = event.clientX;
    didDrag.current = false;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !flipped || swipeLocked.current) return;
    const nextDragX = Math.max(-190, Math.min(190, event.clientX - dragStartX.current));
    if (Math.abs(nextDragX) > 5) didDrag.current = true;
    setDragX(nextDragX);
  };
  const handlePointerEnd = () => {
    if (!dragging || swipeLocked.current) return;
    setDragging(false);
    if (dragX <= -85) finishSwipe(false);
    else if (dragX >= 85) finishSwipe(true);
    else setDragX(0);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (event.repeat || busy || !current || completed || target?.closest("select,input,textarea,button,a")) return;
      if (event.code === "Space") { event.preventDefault(); setFlipped(value => !value); }
      if (flipped && event.key === "1" && !swipeLocked.current) void recordResult(false);
      if (flipped && event.key === "2" && !swipeLocked.current) void recordResult(true);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [busy, current, completed, flipped, recordResult]);

  const activeCategory = EDEXCEL_VOCABULARY_CATEGORIES.find(item => item.id === category);
  const front = current ? (direction === "english-first" ? current.english : current.traditional) : "";
  const back = current ? (direction === "english-first" ? current.traditional : current.english) : "";
  const startLabel = studyMode === "free" ? "隨機開始" : daily?.completed ? "今日已完成" : daily?.session_id ? "繼續今日卡片" : "開始今日10張";

  return (
    <main className="vf-page">
      <style>{`
        .vf-page{min-height:100vh;background:#f2f6fb;color:#122a44;padding:28px 18px 90px;line-height:1.55;overflow-x:hidden}
        .vf-page *{box-sizing:border-box}.vf-wrap{max-width:1080px;margin:0 auto}
        .vf-back{display:inline-flex;color:#126b5c;text-decoration:none;font-weight:750;margin-bottom:18px}
        .vf-eyebrow{font-size:12px;letter-spacing:.17em;color:#126b5c;font-weight:850;text-transform:uppercase}
        .vf-title{font-size:clamp(31px,5vw,50px);line-height:1.12;margin:9px 0 12px;letter-spacing:-.025em}
        .vf-intro{max-width:790px;color:#51677d;margin:0 0 22px}
        .vf-panel{background:#fff;border:1px solid #d9e4eb;border-radius:20px;padding:22px;box-shadow:0 8px 28px rgba(22,48,74,.055);margin-top:16px}
        .vf-panel h2{margin:0 0 14px;font-size:21px}.vf-section-tabs,.vf-options,.vf-kpis,.vf-actions{display:flex;gap:10px;flex-wrap:wrap}
        .vf-tab,.vf-button,.vf-select{border:1px solid #a8c9c1;background:#eff8f5;color:#155f52;border-radius:11px;padding:11px 14px;font:inherit;font-weight:750;cursor:pointer}
        .vf-tab.active,.vf-button.primary{background:#14715f;color:#fff;border-color:#14715f}.vf-button:disabled,.vf-controls:disabled .vf-tab{opacity:.52;cursor:not-allowed}
        .vf-controls{border:0;padding:0;margin:0;min-width:0}.vf-daily{background:#eaf6f2;border:1px solid #bcded3;border-radius:14px;padding:16px;margin-top:16px}.vf-daily h3{margin:0 0 6px}.vf-daily p{margin:6px 0}.vf-daily strong{color:#155f52}
        .vf-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:15px}
        .vf-field{display:flex;flex-direction:column;gap:6px;color:#53687b;font-size:13px;font-weight:750}.vf-select{width:100%;background:#fff;color:#17334f;font-weight:650}
        .vf-kpi{flex:1 1 150px;background:#f5f8fb;border:1px solid #e0e8ef;border-radius:13px;padding:13px 15px}.vf-kpi strong{display:block;font-size:22px;color:#15324e}.vf-kpi span{font-size:13px;color:#607387}
        .vf-note{border-radius:12px;background:#eaf6f2;color:#1d5d51;padding:12px 15px;margin-top:14px}.vf-note.error{background:#fff1ef;color:#9a3128}
        .vf-study{margin-top:18px}.vf-study-head{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-bottom:12px;color:#597084}
        .vf-swipe-stage{position:relative;max-width:720px;height:380px;margin:0 auto;transition:transform .26s ease,opacity .26s ease;touch-action:pan-y;user-select:none;-webkit-user-select:none}.vf-swipe-stage.dragging{transition:none}.vf-card-shell{perspective:1300px;width:100%;height:100%;cursor:pointer}.vf-card{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .58s cubic-bezier(.2,.72,.2,1)}.vf-card.flipped{transform:rotateY(180deg)}
        .vf-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border:1px solid #bad7d0;border-radius:26px;background:linear-gradient(145deg,#fff,#edf8f5);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:38px;text-align:center;box-shadow:0 18px 45px rgba(20,68,76,.11)}
        .vf-face.back{transform:rotateY(180deg);background:linear-gradient(145deg,#e7f7f1,#fff)}.vf-word{font-size:clamp(31px,6vw,58px);font-weight:850;line-height:1.25;overflow-wrap:anywhere}.vf-hint{position:absolute;bottom:21px;color:#638178;font-size:13px}.vf-badge{position:absolute;top:20px;left:20px;border-radius:999px;background:#d9eee7;color:#155f52;padding:6px 10px;font-size:12px;font-weight:800}.vf-source{position:absolute;right:20px;top:20px;color:#768a9a;font-size:12px}
        .vf-swipe-label{position:absolute;z-index:5;top:24px;border:3px solid;border-radius:12px;padding:7px 12px;font-size:22px;font-weight:900;letter-spacing:.08em;pointer-events:none}.vf-swipe-label.wrong{right:24px;color:#ad3029;border-color:#ad3029;transform:rotate(8deg)}.vf-swipe-label.correct{left:24px;color:#17704a;border-color:#17704a;transform:rotate(-8deg)}
        .vf-swipe-help{display:flex;justify-content:center;gap:22px;align-items:center;margin-top:16px;color:#5d7285;font-weight:750}.vf-swipe-help .wrong{color:#a1302a}.vf-swipe-help .correct{color:#176943}
        .vf-empty{text-align:center;padding:45px 15px}.vf-empty h2{font-size:27px;margin:0 0 8px}.vf-muted{color:#62768a}.vf-progress{height:8px;border-radius:999px;background:#e4ebf0;overflow:hidden;margin-top:8px}.vf-progress>span{display:block;height:100%;background:#16806b;transition:width .25s}
        @media(max-width:760px){.vf-grid{grid-template-columns:1fr 1fr}.vf-swipe-stage{height:340px}.vf-face{padding:28px 20px}.vf-panel{padding:17px}}
        @media(max-width:470px){.vf-page{padding:20px 12px 70px}.vf-grid{grid-template-columns:1fr}.vf-swipe-stage{height:320px}.vf-actions .vf-button{flex:1}.vf-source{display:none}.vf-swipe-help{gap:12px;font-size:13px}}
        @media(prefers-reduced-motion:reduce){.vf-card{transition:none}}
      `}</style>
      <div className="vf-wrap">
        <Link className="vf-back" href="/chinese-gcse">← 返回 GCSE Chinese 學習中心</Link>
        <div className="vf-eyebrow">Pearson Edexcel 1CN0 · Official Vocabulary</div>
        <h1 className="vf-title">GCSE 官方詞彙 Flashcards</h1>
        <p className="vf-intro">每日隨機10張，同一輪內不重複。可選英→中或中→英，翻卡後向左滑答錯、向右滑答對；每名學生的紀錄分開儲存。</p>

        <section className="vf-panel" aria-labelledby="choose-title">
          <h2 id="choose-title">1. 選擇溫習內容</h2>
          <fieldset className="vf-controls" disabled={busy}>
          <legend className="vf-muted">溫習模式</legend>
          <div className="vf-options" style={{marginBottom:16}}>
            <button type="button" className={`vf-tab ${studyMode === "daily" ? "active" : ""}`} aria-pressed={studyMode === "daily"} onClick={() => setStudyMode("daily")}>每日10張 · 同輪不重複</button>
            <button type="button" className={`vf-tab ${studyMode === "free" ? "active" : ""}`} aria-pressed={studyMode === "free"} onClick={() => setStudyMode("free")}>自由溫習 / 錯卡重溫</button>
          </div>
          <div className="vf-section-tabs">
            <button className={`vf-tab ${section === "high-frequency" ? "active" : ""}`} onClick={() => setSection("high-frequency")}>Section 1 · High-frequency language</button>
            <button className={`vf-tab ${section === "topic-specific" ? "active" : ""}`} onClick={() => setSection("topic-specific")}>Section 2 · Topic-specific vocabulary</button>
          </div>
          <div className="vf-grid">
            <label className="vf-field">官方分類
              <select className="vf-select" value={category} onChange={event => setCategory(event.target.value)}>
                {categories.map(item => <option key={item.id} value={item.id}>{item.labelZh} · {item.label}</option>)}
              </select>
            </label>
            <label className="vf-field">程度
              <select className="vf-select" value={tierFilter} onChange={event => setTierFilter(event.target.value as TierFilter)}>
                <option value="all">全部詞語</option>
                <option value="core-foundation">Core + Foundation</option>
                <option value="higher">Higher Tier only</option>
              </select>
            </label>
            <label className="vf-field">卡片方向
              <select className="vf-select" value={direction} onChange={event => setDirection(event.target.value as Direction)}>
                <option value="english-first">正面英文 → 背面中文</option>
                <option value="chinese-first">正面中文 → 背面英文</option>
              </select>
            </label>
            {studyMode === "free" ? <label className="vf-field">每次張數
              <select className="vf-select" value={sessionSize} onChange={event => setSessionSize(event.target.value as SessionSize)}>
                <option value="10">10 張</option><option value="20">20 張</option><option value="all">全部</option>
              </select>
            </label> : <div className="vf-field">每日張數<strong style={{padding:"11px 0"}}>10 張（餘下不足10張時全部顯示）</strong></div>}
          </div>
          <div className="vf-options" style={{marginTop:14}}>
            {studyMode === "free" && <>
              <button className={`vf-tab ${reviewMode === "all" ? "active" : ""}`} onClick={() => setReviewMode("all")}>全部卡片</button>
              <button className={`vf-tab ${reviewMode === "wrong" ? "active" : ""}`} onClick={() => setReviewMode("wrong")}>只重溫上次答錯（{wrongToReviewInCategory}）</button>
            </>}
            <button className="vf-button primary" onClick={startSession} disabled={busy || !userId || !availableCards.length || (studyMode === "daily" && !!daily?.completed)}>{dailyLoading ? "讀取中…" : startLabel}</button>
          </div>
          <p className="vf-muted" style={{marginBottom:0}}>{activeCategory?.labelZh}：目前篩選共有 {availableCards.length} 張卡。</p>
          </fieldset>
          {studyMode === "daily" && <div className="vf-daily" aria-live="polite">
            <h3>{daily ? `第 ${daily.round_number} 輪 · 每日10張` : "每日10張 · 跨日接續"}</h3>
            {daily && <>
              <p><strong>本輪已溫習 {daily.reviewed_count} / {daily.total_count} 張</strong> · 尚餘 {daily.total_count - daily.reviewed_count} 張</p>
              <div className="vf-progress" aria-label={`本輪已溫習 ${daily.reviewed_count} / ${daily.total_count}`}><span style={{width:`${daily.total_count ? daily.reviewed_count / daily.total_count * 100 : 0}%`}} /></div>
              {daily.session_id && <p>今日這批：已作答 {Object.keys(daily.answers).length} / {daily.card_ids.length} 張{daily.carry_over ? "（接續之前未完成的卡片）" : ""}</p>}
              {daily.completed && <p>{daily.reviewed_count === daily.total_count ? "整輪完成！明日開始新一輪。" : "今日已完成，明日再抽餘下未溫習的卡。"}</p>}
              {!daily.session_id && daily.reviewed_count === daily.total_count && <p>上一輪已完成，按「開始今日10張」開啟新一輪。</p>}
            </>}
            <p className="vf-muted">每個分類及程度各自計算。同日保留同一批；答對或答錯都計作已溫習。全部溫習過後才開始新一輪，英國時間午夜換日。</p>
          </div>}
          {studyMode === "free" && <p className="vf-muted">自由溫習會記錄答對／答錯；可隨時重溫，並可能抽到已見過的卡。每日10張的整輪進度另行保留。</p>}
          {dailyError && studyMode === "daily" && <div className="vf-note error" role="alert">{dailyError}<div style={{marginTop:10}}><button className="vf-button" disabled={busy} onClick={() => void loadDaily()}>重新連線</button></div></div>}
        </section>

        <section className="vf-panel" aria-label="分類進度">
          <div className="vf-kpis">
            <div className="vf-kpi"><strong>{categoryCards.length}</strong><span>此分類總詞數</span></div>
            <div className="vf-kpi"><strong>{answeredInCategory}</strong><span>已作答過</span></div>
            <div className="vf-kpi"><strong>{lastCorrectInCategory}</strong><span>上次答對</span></div>
            <div className="vf-kpi"><strong>{wrongToReviewInCategory}</strong><span>待重溫錯卡</span></div>
          </div>
          <div className="vf-progress" aria-label={`完成 ${answeredInCategory} / ${categoryCards.length}`}><span style={{width:`${categoryCards.length ? answeredInCategory / categoryCards.length * 100 : 0}%`}} /></div>
          {message && <p className={`vf-note ${message.startsWith("未能") || message.startsWith("暫時") ? "error" : ""}`} role="status">{message}</p>}
        </section>

        <section className="vf-panel vf-study" aria-live="polite">
          {!sessionCards.length && <div className="vf-empty"><h2>{dailyLoading ? "正在讀取進度…" : "準備開始"}</h2><p className="vf-muted">{studyMode === "daily" ? "選好分類和方向後，按「開始今日10張」。" : "選好分類和方向後，按「隨機開始」。"}</p></div>}
          {completed && <div className="vf-empty"><h2>{studyMode === "daily" ? "今日這批完成！" : "本次溫習完成"}</h2><p>答對 {sessionCorrect} 張 · 答錯 {sessionIncorrect} 張</p>{studyMode === "daily" && <p className="vf-muted">{daily?.reviewed_count === daily?.total_count ? "已溫完本輪所有卡片，明日開始新一輪。" : "進度已儲存，明日繼續餘下未溫習的卡片。"}</p>}<div className="vf-actions" style={{justifyContent:"center"}}>{studyMode === "free" && <button className="vf-button primary" disabled={busy || !availableCards.length} onClick={startSession}>再來一次</button>}{sessionIncorrect > 0 && <button className="vf-button" disabled={busy} onClick={() => {setStudyMode("free");setReviewMode("wrong");}}>重溫錯卡</button>}{studyMode === "daily" && <button className="vf-button" disabled={busy} onClick={() => setStudyMode("free")}>繼續自由溫習</button>}</div></div>}
          {current && !completed && <>
            <div className="vf-study-head"><span>{activeCategory?.labelZh}</span><strong>{currentIndex + 1} / {sessionCards.length}</strong></div>
            <div
              className={`vf-swipe-stage ${dragging ? "dragging" : ""}`}
              style={{transform:`translateX(${dragX}px) rotate(${dragX / 28}deg)`,opacity:Math.max(.58,1-Math.abs(dragX)/520)}}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerEnd}
              onPointerCancel={() => {setDragging(false);setDragX(0);}}
            >
              {flipped && dragX < 0 && <span className="vf-swipe-label wrong" style={{opacity:Math.min(1,Math.abs(dragX)/85)}}>答錯</span>}
              {flipped && dragX > 0 && <span className="vf-swipe-label correct" style={{opacity:Math.min(1,dragX/85)}}>答對</span>}
              <div className="vf-card-shell" role="button" tabIndex={0} aria-disabled={busy} aria-label={flipped ? "向左拖動答錯，向右拖動答對" : "按一下翻轉卡片"} onClick={() => {if(didDrag.current){didDrag.current=false;return;}if(!busy && !swipeLocked.current)setFlipped(value => !value);}} onKeyDown={event => {if(event.key === "Enter" && !busy){event.preventDefault();setFlipped(value => !value);}}}>
                <div className={`vf-card ${flipped ? "flipped" : ""}`}>
                  <div className="vf-face front"><span className="vf-badge">{tierLabel(current.tier)}</span><span className="vf-source">PDF p.{current.sourcePage}</span><div className="vf-word">{front}</div><span className="vf-hint">按卡片翻轉 · Space</span></div>
                  <div className="vf-face back"><span className="vf-badge">答案</span><span className="vf-source">PDF p.{current.sourcePage}</span><div className="vf-word">{back}</div><span className="vf-hint">向左答錯 · 向右答對</span></div>
                </div>
              </div>
            </div>
            <div className="vf-swipe-help"><span className="wrong">← 答錯</span><span>{flipped ? "拖動卡片" : "先按卡片查看答案"}</span><span className="correct">答對 →</span></div>
            <div className="vf-actions" style={{justifyContent:"center",marginTop:14}}><button className="vf-button" disabled={!flipped || busy} onClick={() => void recordResult(false)}>答錯 · 1</button><button className="vf-button primary" disabled={!flipped || busy} onClick={() => void recordResult(true)}>答對 · 2</button></div>
            <p className="vf-muted" style={{textAlign:"center",marginBottom:0}}>{saving ? "正在儲存…" : `本次：答對 ${sessionCorrect} · 答錯 ${sessionIncorrect}`}</p>
          </>}
        </section>
      </div>
    </main>
  );
}
