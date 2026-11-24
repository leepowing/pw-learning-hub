"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCurrentStudent } from "@/lib/studentStorage";

export default function S4MathematicsPage() {
  const router = useRouter();
  useEffect(() => {
    if (getCurrentStudent() === "guest") router.replace("/login");
  }, [router]);

  return (
    <main className="page">
      <Link className="back" href="/subjects/mathematics">← Back to mathematics courses</Link>
      <h1>S4 Mathematics</h1>
      <p className="subtitle">Hong Kong Secondary 4 Mathematics · Compulsory Part</p>
      <section className="flashcardsHold" aria-label="S4 Formula Flashcards">
        <div className="holdIcon" aria-hidden="true">▣</div>
        <div className="holdCopy">
          <p className="holdEyebrow">FORMULA PRACTICE</p>
          <h2>S4 Formula Flashcards</h2>
          <p>Choose Chapter 1 to practise 9 approved formula cards, including optional enrichment.</p>
        </div>
        <Link className="holdStatus" href="/maths/s4/flashcards">Choose chapters →</Link>
      </section>
      <h2>Maths beyond 4A</h2>
      <div className="chapters">
        <Link className="chapter" href="/maths/s4/chapter-1">
          <span className="number">1</span>
          <span className="details"><span className="label">CHAPTER 1</span><strong>Quadratic Equations and Number Systems</strong></span>
          <span className="start">Start →</span>
        </Link>
      </div>
      <p className="note">Additional chapters will be added as their lessons are developed.</p>
      <style jsx>{`
        .page { max-width:1100px; width:calc(100% - 40px); margin:42px auto 70px; }
        :global(.back) { display:inline-block; color:#047857; font-size:17px; font-weight:700; margin-bottom:25px; text-decoration:none; }
        h1 { margin:0 0 8px; font-size:clamp(34px,5vw,42px); line-height:1.15; }
        .subtitle { color:#64748b; font-size:20px; line-height:1.5; margin:0 0 36px; }
        h2 { font-size:27px; margin:0 0 18px; }
        .chapters { display:grid; gap:16px; }
        :global(.chapter) { display:flex; align-items:center; gap:22px; padding:24px 28px; border:1px solid #e2e8f0; border-radius:22px; background:white; box-shadow:0 6px 18px rgba(0,0,0,.04); color:inherit; text-decoration:none; min-width:0; }
        :global(.chapter:hover), :global(.chapter:focus-visible) { border-color:#6ee7b7; outline-offset:3px; }
        .number { width:76px; height:76px; border-radius:22px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:#ecfdf5; color:#047857; font-size:34px; font-weight:800; }
        .details { display:grid; gap:5px; flex:1; min-width:0; }
        .label { color:#64748b; font-size:14px; font-weight:800; letter-spacing:.08em; }
        strong { font-size:clamp(21px,3vw,27px); line-height:1.3; overflow-wrap:anywhere; }
        .start { flex-shrink:0; color:#047857; font-size:18px; font-weight:800; white-space:nowrap; }
        .flashcardsHold { display:flex; gap:22px; align-items:center; padding:28px; border:2px solid #c7d2fe; background:linear-gradient(135deg,#eef2ff,#f5f3ff); border-radius:23px; margin:0 0 34px; }
        .holdIcon { display:flex; align-items:center; justify-content:center; width:80px; height:80px; border-radius:23px; background:#e0e7ff; color:#4f46e5; font-size:39px; font-weight:900; flex-shrink:0; }
        .holdCopy { flex:1; min-width:0; }
        .holdEyebrow { margin:0 0 4px; color:#4f46e5; font-weight:900; font-size:15px; letter-spacing:.08em; }
        .holdCopy h2 { margin:0 0 6px; font-size:28px; }
        .holdCopy p:last-child { margin:0; color:#64748b; font-size:17px; line-height:1.5; }
        :global(.holdStatus) { text-decoration:none; border-radius:13px; padding:13px 18px; background:#4f46e5; color:white; font-size:16px; font-weight:800; white-space:nowrap; }
        .note { color:#64748b; font-size:16px; line-height:1.6; margin-top:24px; }
        @media(max-width:620px) { .flashcardsHold { padding:19px; flex-wrap:wrap; gap:13px; } .holdIcon { width:56px;height:56px;font-size:27px; } .holdCopy { flex-basis:calc(100% - 75px); } .holdCopy h2 {font-size:23px;} .holdStatus {width:100%;text-align:center;}
 .page{width:calc(100% - 24px);margin-top:28px} :global(.chapter){padding:18px;gap:14px;flex-wrap:wrap} .number{width:54px;height:54px;font-size:25px;border-radius:16px} .start{margin-left:auto} }
      `}</style>
    </main>
  );
}
