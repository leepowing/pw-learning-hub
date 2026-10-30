"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

type UserView = {
  role: "parent" | "student";
  answered: number;
  handwritten: number;
  submittedAt: string | null;
};

type PageState =
  | { kind: "loading" }
  | { kind: "ready"; data: UserView; warning?: string }
  | { kind: "error"; message: string };

export default function ChineseLearningHome() {
  const [page, setPage] = useState<PageState>({ kind: "loading" });

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
        if (!url || !key) throw new Error("Supabase 環境變數未設定");
        const db = createClient(url, key);
        const { data: { user }, error: authError } = await db.auth.getUser();
        if (authError || !user) throw new Error("請先登入 PW Learning Hub 帳戶");

        const { data: profile, error: roleError } = await db
          .from("profiles").select("role").eq("id", user.id).maybeSingle();
        if (roleError || !profile || (profile.role !== "parent" && profile.role !== "student")) {
          throw new Error("無法驗證帳戶角色，請重新登入");
        }
        if (profile.role === "parent") {
          if (active) setPage({
            kind: "ready",
            data: { role: "parent", answered: 0, handwritten: 0, submittedAt: null }
          });
          return;
        }

        // These are read-only queries of the logged-in student's own v3 work.
        const [progress, uploads] = await Promise.all([
          db.from("chinese_diagnostic_progress")
            .select("answers,completed_at").eq("user_id", user.id).maybeSingle(),
          db.from("chinese_handwriting_submissions")
            .select("task_id").eq("user_id", user.id).eq("assessment_version", "v3")
        ]);
        const warning = progress.error || uploads.error
          ? "診斷進度暫時未能讀取，但可透過歷史評估入口查看。"
          : undefined;
        const answers = (progress.data?.answers ?? {}) as Record<string, string>;
        const answered = Object.keys(answers).filter(id => /^(v(?:[1-9]|[12][0-9]|30)|r[1-3]_[1-3]|l(?:10|[1-9]))$/.test(id)).length;
        const handwritten = new Set((uploads.data ?? []).map(x => x.task_id)).size;
        if (active) setPage({
          kind: "ready", warning,
          data: {
            role: "student",
            answered: Math.min(answered, 49),
            handwritten: Math.min(handwritten, 7),
            submittedAt: progress.data?.completed_at ?? null
          }
        });
      } catch (error) {
        if (active) setPage({ kind: "error", message: error instanceof Error ? error.message : "載入失敗" });
      }
    })();
    return () => { active = false; };
  }, []);

  return (
    <main className="gcse-hub">
      <style>{`
        .gcse-hub{max-width:1050px;margin:0 auto;padding:34px 20px 100px;color:#17283f;line-height:1.65}
        .gcse-hub *{box-sizing:border-box}
        .gcse-hub a{text-decoration:none}
        .hub-back{display:inline-flex;color:#176b5c;font-size:14px;font-weight:700;margin-bottom:27px}
        .hub-eyebrow{font-size:11px;letter-spacing:.16em;font-weight:800;color:#176b5c}
        .hub-title{font-size:clamp(29px,5vw,43px);line-height:1.2;letter-spacing:-.02em;margin:10px 0 10px;font-weight:850}
        .hub-muted{color:#62748a;font-size:14px}
        .hub-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;margin-top:23px}
        .hub-card{background:#fff;border:1px solid #dfe7ee;border-radius:19px;padding:24px;box-shadow:0 3px 15px rgba(26,44,65,.035);min-width:0}
        .hub-card--active{background:#ecf8f3;border-color:#b5decc}
        .hub-section{margin-top:24px}
        .hub-icon{display:grid;place-items:center;width:49px;height:49px;border-radius:14px;background:#d4ece2;color:#155f4f;font-size:22px;font-weight:850}
        .hub-card h2{font-size:23px;margin:15px 0 7px;font-weight:800}
        .hub-card p{color:#526679;font-size:14px;margin:0 0 16px}
        .hub-meta{font-size:13px;color:#51677a;margin:12px 0 20px}
        .hub-action{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 16px;background:#166c5c;color:white;border:1px solid #166c5c;border-radius:11px;font-size:14px;font-weight:800}
        .hub-action--soft{background:#f8fafc;color:#244e70;border-color:#cbd8e5}
        .hub-action:hover{filter:brightness(.96)}
        .hub-action:focus-visible,.hub-back:focus-visible{outline:3px solid #2563eb;outline-offset:3px}
        .hub-status{background:#f1f6fa;padding:13px 16px;border-radius:12px;color:#40546a;margin:25px 0}
        .hub-kpi{display:flex;gap:8px;flex-wrap:wrap;font-size:13px;color:#53677a}
        .hub-pill{background:#f3f6fa;border:1px solid #dfe7ee;border-radius:999px;padding:6px 11px}
        @media(max-width:650px){.gcse-hub{padding:22px 14px 70px}.hub-grid{grid-template-columns:1fr}.hub-card{padding:19px}}
      `}</style>
      <Link href="/subjects" className="hub-back">← 返回科目選單</Link>
      <div className="hub-eyebrow">PW LEARNING HUB · GCSE CHINESE</div>
      <h1 className="hub-title">GCSE Chinese 學習中心</h1>
      <p className="hub-muted">Traditional Chinese · Cantonese · Higher Tier Preparation</p>

      {page.kind === "loading" && <p className="hub-status" role="status">正在確認登入及學習資料…</p>}
      {page.kind === "error" && <div className="hub-status" role="alert">{page.message}　<Link href="/login">前往登入 →</Link></div>}
      {page.kind === "ready" && <>
        {page.warning && <p className="hub-status" role="status">{page.warning}</p>}
        <section className="hub-section" aria-label="現時 GCSE 課程">
          <div className="hub-eyebrow">CURRENT COURSE · STAGE 3</div>
          <article className="hub-card hub-card--active" style={{marginTop:12}}>
            <div className="hub-icon" aria-hidden="true">1</div>
            <h2>{"Week 1 — School Life（學校生活）"}</h2>
            <p>{page.data.role === "parent"
              ? "查看 Greta 和 Mathis 的 Week 1 共同課程、四份 GCSE Papers 練習及個別成績。"
              : "學校生活 · 8 個核心詞語 · 4 個 Sessions。包括廣東話聆聽與口說、繁體中文閱讀、手寫及中英翻譯。"}</p>
            <div className="hub-meta">12 星期 GCSE 準備課程 · 繁體中文及廣東話</div>
            <Link className="hub-action" href={page.data.role === "parent" ? "/chinese-gcse/learning/parent" : "/chinese-gcse/learning"}>
              <span>{page.data.role === "parent" ? "查看 Week 1 家長進度" : "繼續 Week 1 學習"}</span><span aria-hidden="true">→</span>
            </Link>
          </article>
          <article className="hub-card" style={{marginTop:14}}>
            <div className="hub-icon" aria-hidden="true">2</div>
            <h2>Week 2 — Daily Life（日常生活）</h2>
            <p>8 個新詞語 · Reading、廣東話 Listening / Speaking、默寫、中英翻譯及手寫短文。</p>
            <Link className="hub-action" href={page.data.role === "parent" ? "/chinese-gcse/learning/week2/parent" : "/chinese-gcse/learning/week2"}>
              <span>{page.data.role === "parent" ? "查看 Week 2 家長進度" : "進入 Week 2 課程"}</span><span aria-hidden="true">→</span>
            </Link>
          </article>
        </section>

        <section className="hub-section" aria-label="歷史診斷評估">
          <div className="hub-eyebrow">BASELINE · DIAGNOSTIC V3</div>
          <article className="hub-card" style={{marginTop:12}}>
            <div className="hub-icon" style={{background:"#e9eff8",color:"#365978"}} aria-hidden="true">診</div>
            <h2>{page.data.role === "parent" ? "歷史診斷評估管理" : "Diagnostic v3 — 歷史評估"}</h2>
            <p>{page.data.role === "parent"
              ? "查看 Greta 和 Mathis 的入學診斷成績、七道手寫原稿及家長確認評語。"
              : "之前完成的詞彙、閱讀、聆聽及寫作評估已歸檔；不會在學習中心直接顯示舊題目。"}</p>
            {page.data.role === "student" && <div className="hub-kpi" style={{marginBottom:18}}>
              <span className="hub-pill">選擇題 {page.data.answered}/49</span>
              <span className="hub-pill">手寫已上傳 {page.data.handwritten}/7</span>
              <span className="hub-pill">{page.data.submittedAt ? "已正式提交" : "未正式提交"}</span>
            </div>}
            <Link className="hub-action hub-action--soft" href={page.data.role === "parent" ? "/chinese-gcse/parent" : "/chinese-gcse/diagnostic"}>
              <span>{page.data.role === "parent" ? "查看診斷成績與家長評語" : "查看歷史評估及答案檢討"}</span><span aria-hidden="true">→</span>
            </Link>
          </article>
        </section>
      </>}
    </main>
  );
}
