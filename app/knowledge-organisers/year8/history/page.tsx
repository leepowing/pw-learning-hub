"use client";

import { useRouter } from "next/navigation";

export default function YearEightHistoryPage() {
  const router = useRouter();
  return <main className="page">
    <button className="back" onClick={() => router.push("/knowledge-organisers/year8")}>← Back to Year 8 subjects</button>
    <p className="eyebrow">YEAR 8 · HISTORY</p><h1>History Knowledge Organisers</h1>
    <div className="terms"><section><span>Autumn Term</span><h2>Migration and Britain</h2><p>Explore migration to Britain from early settlers to the Windrush generation.</p><button onClick={() => router.push("/knowledge-organisers/year8/history/autumn/migration-and-britain")}>Open Chapter 1 →</button></section>
      <section className="soon"><span>Spring Term</span><h2>Coming soon</h2><p>The chapter will be added when the organiser is available.</p></section>
      <section className="soon"><span>Summer Term</span><h2>Coming soon</h2><p>The chapter will be added when the organiser is available.</p></section></div>
    <style jsx>{`
      .page{max-width:1050px;width:calc(100% - 40px);margin:48px auto 80px;color:#253047;font-family:Arial,sans-serif}.back{border:0;background:transparent;color:#9a3412;font-size:17px;font-weight:800;padding:0;cursor:pointer}.eyebrow{margin:32px 0 8px;color:#9a3412;font-size:13px;font-weight:900;letter-spacing:.14em}h1{font-size:clamp(34px,5vw,48px);margin:0 0 30px}.terms{display:grid;gap:18px}section{padding:28px;border:1px solid #fdba74;border-radius:22px;background:#fff7ed}section span{color:#c2410c;font-weight:900;font-size:13px;letter-spacing:.1em}h2{font-size:28px;margin:9px 0}p{color:#596579;font-size:17px;line-height:1.6}button{border:0;border-radius:12px;padding:13px 18px;background:#c2410c;color:white;font-size:16px;font-weight:800;cursor:pointer}.soon{border-color:#e5e7eb;background:#f8fafc}.soon span,.soon h2{color:#94a3b8}
    `}</style>
  </main>;
}
