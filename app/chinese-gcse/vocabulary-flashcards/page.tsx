"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  EDEXCEL_VOCABULARY_CARDS,
  EDEXCEL_VOCABULARY_CATEGORIES,
  type EdexcelVocabularyCard,
  type VocabularySection,
} from "@/data/chineseGcse/edexcelVocabulary";

type Direction = "english-first" | "chinese-first";
type TierFilter = "all" | "core-foundation" | "higher";
type ReviewMode = "all" | "wrong";
type SessionSize = "10" | "20" | "all";

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
  const [reviewMode, setReviewMode] = useState<ReviewMode>("all");
  const [sessionSize, setSessionSize] = useState<SessionSize>("10");
  const [sessionCards, setSessionCards] = useState<EdexcelVocabularyCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionIncorrect, setSessionIncorrect] = useState(0);

  const db = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    return url && key ? createClient(url, key) : null;
  }, []);

  const categories = useMemo(
    () => EDEXCEL_VOCABULARY_CATEGORIES.filter(item => item.section === section),
    [section]
  );

  useEffect(() => {
    if (!categories.some(item => item.id === category)) {
      setCategory(categories[0]?.id ?? "");
    }
  }, [categories, category]);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!db) {
        setMessage("Supabase 環境變數未設定");
        setLoading(false);
        return;
      }
      const { data: { user }, error: authError } = await db.auth.getUser();
      if (!active) return;
      if (authError || !user) {
        setMessage("請先登入 PW Learning Hub，才可儲存溫習紀錄。");
        setLoading(false);
        return;
      }
      setUserId(user.id);
      const { data, error } = await db
        .from("chinese_gcse_vocabulary_progress")
        .select("card_id,correct_count,incorrect_count,last_result")
        .eq("user_id", user.id);
      if (!active) return;
      if (error) {
        setMessage("暫時未能讀取詞彙紀錄，請確認已執行安裝 SQL。");
      } else {
        const next: ProgressMap = {};
        for (const row of (data ?? []) as ProgressRow[]) next[row.card_id] = row;
        setProgress(next);
      }
      setLoading(false);
    })();
    return () => { active = false; };
  }, [db]);

  const availableCards = useMemo(() => {
    return EDEXCEL_VOCABULARY_CARDS.filter(card => {
      if (card.section !== section || card.category !== category) return false;
      if (tierFilter === "core-foundation" && card.tier === "higher") return false;
      if (tierFilter === "higher" && card.tier !== "higher") return false;
      if (reviewMode === "wrong" && progress[card.id]?.last_result !== false) return false;
      return true;
    });
  }, [section, category, tierFilter, reviewMode, progress]);

  const categoryCards = useMemo(
    () => EDEXCEL_VOCABULARY_CARDS.filter(card => card.category === category),
    [category]
  );
  const answeredInCategory = categoryCards.filter(card => progress[card.id]).length;
  const lastCorrectInCategory = categoryCards.filter(card => progress[card.id]?.last_result === true).length;
  const wrongToReviewInCategory = categoryCards.filter(card => progress[card.id]?.last_result === false).length;

  const startSession = useCallback(() => {
    const randomized = shuffled(availableCards);
    const count = sessionSize === "all" ? randomized.length : Number(sessionSize);
    setSessionCards(randomized.slice(0, count));
    setCurrentIndex(0);
    setFlipped(false);
    setSessionCorrect(0);
    setSessionIncorrect(0);
    setMessage(randomized.length ? "新一輪 Flashcards 已開始。" : "這個篩選暫時沒有可溫習的詞語。");
  }, [availableCards, sessionSize]);

  useEffect(() => {
    setSessionCards([]);
    setCurrentIndex(0);
    setFlipped(false);
  }, [section, category, tierFilter, reviewMode]);

  const current = sessionCards[currentIndex];
  const completed = sessionCards.length > 0 && currentIndex >= sessionCards.length;

  const recordResult = async (correct: boolean) => {
    if (!current || saving) return;
    if (!db || !userId) {
      setMessage("請先登入，才可記錄答對或答錯。");
      return;
    }
    const previous = progress[current.id];
    const nextRow: ProgressRow = {
      card_id: current.id,
      correct_count: (previous?.correct_count ?? 0) + (correct ? 1 : 0),
      incorrect_count: (previous?.incorrect_count ?? 0) + (correct ? 0 : 1),
      last_result: correct,
    };
    setSaving(true);
    const { error } = await db.from("chinese_gcse_vocabulary_progress").upsert({
      user_id: userId,
      ...nextRow,
      last_seen_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id,card_id" });
    setSaving(false);
    if (error) {
      setMessage(`未能儲存：${error.message}`);
      return;
    }
    setProgress(previousProgress => ({ ...previousProgress, [current.id]: nextRow }));
    if (correct) setSessionCorrect(value => value + 1);
    else setSessionIncorrect(value => value + 1);
    setFlipped(false);
    window.setTimeout(() => setCurrentIndex(value => value + 1), 180);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!current || completed) return;
      if (event.code === "Space") {
        event.preventDefault();
        setFlipped(value => !value);
      }
      if (flipped && event.key === "1") void recordResult(false);
      if (flipped && event.key === "2") void recordResult(true);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const activeCategory = EDEXCEL_VOCABULARY_CATEGORIES.find(item => item.id === category);
  const front = current ? (direction === "english-first" ? current.english : current.traditional) : "";
  const back = current ? (direction === "english-first" ? current.traditional : current.english) : "";

  return (
    <main className="vf-page">
      <style>{`
        .vf-page{min-height:100vh;background:#f2f6fb;color:#122a44;padding:28px 18px 90px;line-height:1.55}
        .vf-page *{box-sizing:border-box}.vf-wrap{max-width:1080px;margin:0 auto}
        .vf-back{display:inline-flex;color:#126b5c;text-decoration:none;font-weight:750;margin-bottom:18px}
        .vf-eyebrow{font-size:12px;letter-spacing:.17em;color:#126b5c;font-weight:850;text-transform:uppercase}
        .vf-title{font-size:clamp(31px,5vw,50px);line-height:1.12;margin:9px 0 12px;letter-spacing:-.025em}
        .vf-intro{max-width:790px;color:#51677d;margin:0 0 22px}
        .vf-panel{background:#fff;border:1px solid #d9e4eb;border-radius:20px;padding:22px;box-shadow:0 8px 28px rgba(22,48,74,.055);margin-top:16px}
        .vf-panel h2{margin:0 0 14px;font-size:21px}.vf-section-tabs,.vf-options,.vf-kpis,.vf-actions{display:flex;gap:10px;flex-wrap:wrap}
        .vf-tab,.vf-button,.vf-select{border:1px solid #a8c9c1;background:#eff8f5;color:#155f52;border-radius:11px;padding:11px 14px;font:inherit;font-weight:750;cursor:pointer}
        .vf-tab.active,.vf-button.primary{background:#14715f;color:#fff;border-color:#14715f}.vf-button:disabled{opacity:.52;cursor:not-allowed}
        .vf-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:15px}
        .vf-field{display:flex;flex-direction:column;gap:6px;color:#53687b;font-size:13px;font-weight:750}.vf-select{width:100%;background:#fff;color:#17334f;font-weight:650}
        .vf-kpi{flex:1 1 150px;background:#f5f8fb;border:1px solid #e0e8ef;border-radius:13px;padding:13px 15px}.vf-kpi strong{display:block;font-size:22px;color:#15324e}.vf-kpi span{font-size:13px;color:#607387}
        .vf-note{border-radius:12px;background:#eaf6f2;color:#1d5d51;padding:12px 15px;margin-top:14px}.vf-note.error{background:#fff1ef;color:#9a3128}
        .vf-study{margin-top:18px}.vf-study-head{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-bottom:12px;color:#597084}
        .vf-card-shell{perspective:1300px;max-width:720px;height:380px;margin:0 auto;cursor:pointer}.vf-card{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .58s cubic-bezier(.2,.72,.2,1)}.vf-card.flipped{transform:rotateY(180deg)}
        .vf-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border:1px solid #bad7d0;border-radius:26px;background:linear-gradient(145deg,#fff,#edf8f5);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:38px;text-align:center;box-shadow:0 18px 45px rgba(20,68,76,.11)}
        .vf-face.back{transform:rotateY(180deg);background:linear-gradient(145deg,#e7f7f1,#fff)}.vf-word{font-size:clamp(31px,6vw,58px);font-weight:850;line-height:1.25;overflow-wrap:anywhere}.vf-hint{position:absolute;bottom:21px;color:#638178;font-size:13px}.vf-badge{position:absolute;top:20px;left:20px;border-radius:999px;background:#d9eee7;color:#155f52;padding:6px 10px;font-size:12px;font-weight:800}.vf-source{position:absolute;right:20px;top:20px;color:#768a9a;font-size:12px}
        .vf-marking{justify-content:center;margin-top:16px}.vf-button.wrong{background:#fff2f0;color:#a1302a;border-color:#e7b2ad}.vf-button.correct{background:#e8f7ef;color:#176943;border-color:#a8d8be}.vf-button.large{min-width:170px;padding:14px 20px;font-size:17px}
        .vf-empty{text-align:center;padding:45px 15px}.vf-empty h2{font-size:27px;margin:0 0 8px}.vf-muted{color:#62768a}.vf-progress{height:8px;border-radius:999px;background:#e4ebf0;overflow:hidden;margin-top:8px}.vf-progress>span{display:block;height:100%;background:#16806b;transition:width .25s}
        @media(max-width:760px){.vf-grid{grid-template-columns:1fr 1fr}.vf-card-shell{height:340px}.vf-face{padding:28px 20px}.vf-panel{padding:17px}}
        @media(max-width:470px){.vf-page{padding:20px 12px 70px}.vf-grid{grid-template-columns:1fr}.vf-card-shell{height:320px}.vf-actions .vf-button{flex:1}.vf-source{display:none}}
        @media(prefers-reduced-motion:reduce){.vf-card{transition:none}}
      `}</style>
      <div className="vf-wrap">
        <Link className="vf-back" href="/chinese-gcse">← 返回 GCSE Chinese 學習中心</Link>
        <div className="vf-eyebrow">Pearson Edexcel 1CN0 · Official Vocabulary</div>
        <h1 className="vf-title">GCSE 官方詞彙 Flashcards</h1>
        <p className="vf-intro">PDF第 88–111 頁繁體中文詞彙。可選英→中或中→英，翻卡後自行標記答對／答錯；每名學生的紀錄分開儲存。</p>

        <section className="vf-panel" aria-labelledby="choose-title">
          <h2 id="choose-title">1. 選擇溫習內容</h2>
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
            <label className="vf-field">每輪張數
              <select className="vf-select" value={sessionSize} onChange={event => setSessionSize(event.target.value as SessionSize)}>
                <option value="10">10 張</option><option value="20">20 張</option><option value="all">全部</option>
              </select>
            </label>
          </div>
          <div className="vf-options" style={{marginTop:14}}>
            <button className={`vf-tab ${reviewMode === "all" ? "active" : ""}`} onClick={() => setReviewMode("all")}>全部卡片</button>
            <button className={`vf-tab ${reviewMode === "wrong" ? "active" : ""}`} onClick={() => setReviewMode("wrong")}>只重溫上次答錯（{wrongToReviewInCategory}）</button>
            <button className="vf-button primary" onClick={startSession} disabled={loading || !availableCards.length}>隨機開始</button>
          </div>
          <p className="vf-muted" style={{marginBottom:0}}>{activeCategory?.labelZh}：目前篩選共有 {availableCards.length} 張卡。</p>
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
          {!sessionCards.length && <div className="vf-empty"><h2>準備開始</h2><p className="vf-muted">選好分類和方向後，按「隨機開始」。</p></div>}
          {completed && <div className="vf-empty"><h2>本輪完成</h2><p>答對 {sessionCorrect} 張 · 答錯 {sessionIncorrect} 張</p><div className="vf-actions" style={{justifyContent:"center"}}><button className="vf-button primary" onClick={startSession}>再來一輪</button>{sessionIncorrect > 0 && <button className="vf-button" onClick={() => {setReviewMode("wrong");setSessionCards([]);}}>重溫錯卡</button>}</div></div>}
          {current && !completed && <>
            <div className="vf-study-head"><span>{activeCategory?.labelZh}</span><strong>{currentIndex + 1} / {sessionCards.length}</strong></div>
            <div className="vf-card-shell" role="button" tabIndex={0} aria-label="按一下翻轉卡片" onClick={() => setFlipped(value => !value)} onKeyDown={event => {if(event.key === "Enter"){event.preventDefault();setFlipped(value => !value);}}}>
              <div className={`vf-card ${flipped ? "flipped" : ""}`}>
                <div className="vf-face front"><span className="vf-badge">{tierLabel(current.tier)}</span><span className="vf-source">PDF p.{current.sourcePage}</span><div className="vf-word">{front}</div><span className="vf-hint">按卡片翻轉 · Space</span></div>
                <div className="vf-face back"><span className="vf-badge">答案</span><span className="vf-source">PDF p.{current.sourcePage}</span><div className="vf-word">{back}</div><span className="vf-hint">看完答案後標記結果</span></div>
              </div>
            </div>
            <div className="vf-actions vf-marking">
              <button className="vf-button wrong large" disabled={!flipped || saving} onClick={() => void recordResult(false)}>✕ 答錯 <small>（1）</small></button>
              <button className="vf-button correct large" disabled={!flipped || saving} onClick={() => void recordResult(true)}>✓ 答對 <small>（2）</small></button>
            </div>
            <p className="vf-muted" style={{textAlign:"center",marginBottom:0}}>本輪：答對 {sessionCorrect} · 答錯 {sessionIncorrect}</p>
          </>}
        </section>
      </div>
    </main>
  );
}
