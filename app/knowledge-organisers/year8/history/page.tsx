"use client";

import { useRouter } from "next/navigation";

export default function YearEightHistoryPage() {
  const router = useRouter();
  return <main className="page">
    <button className="back" onClick={() => router.push("/knowledge-organisers/year8")}>← Back to Year 8 subjects</button>
    <p className="eyebrow">YEAR 8 · HISTORY</p><h1>History Knowledge Organisers</h1>
    <section className="revision"><span>EXAM REVISION</span><h2>Cross-Chapter Quiz</h2><p>Build one quiz from every section already marked as taught. Choose multiple choice, short questions, long questions or a mixture, then choose how many questions to answer.</p><button onClick={() => router.push("/knowledge-organisers/year8/history/revision-quiz")}>Create revision quiz →</button></section>
    <div className="terms"><section><span>Autumn Term</span><h2>Migration and Britain</h2><p>Explore migration to Britain from early settlers to the Windrush generation.</p><button onClick={() => router.push("/knowledge-organisers/year8/history/autumn/migration-and-britain")}>Open Chapter 1 →</button></section>
      <section><span>Autumn Term</span><h2>The Industrial Revolution</h2><p>Explore how industrialisation transformed Britain&apos;s population, factories, production and transport.</p><button onClick={() => router.push("/knowledge-organisers/year8/history/autumn/industrial-revolution")}>Open Chapter 2 →</button></section>
      <section><span>Autumn Term</span><h2>Jack the Ripper</h2><p>Explore Whitechapel in 1888, the five victims, the police investigation and the suspects linked to the Ripper murders.</p><button onClick={() => router.push("/knowledge-organisers/year8/history/autumn/jack-the-ripper")}>Open Chapter 3 →</button></section>
      <section><span>Autumn Term</span><h2>Enslavement</h2><p>Explore the triangular trade, the Middle Passage, plantation labour, resistance and the abolition of slavery.</p><button onClick={() => router.push("/knowledge-organisers/year8/history/autumn/enslavement")}>Open Chapter 4 →</button></section>
      <section className="soon"><span>Spring Term</span><h2>Coming soon</h2><p>The chapter will be added when the organiser is available.</p></section>
      <section className="soon"><span>Summer Term</span><h2>Coming soon</h2><p>The chapter will be added when the organiser is available.</p></section></div>
    <style jsx>{`
      .page{max-width:1050px;width:calc(100% - 40px);margin:48px auto 80px;color:#253047;font-family:Arial,sans-serif}.back{border:0;background:transparent;color:#9a3412;font-size:17px;font-weight:800;padding:0;cursor:pointer}.eyebrow{margin:32px 0 8px;color:#9a3412;font-size:13px;font-weight:900;letter-spacing:.14em}h1{font-size:clamp(34px,5vw,48px);margin:0 0 30px}.terms{display:grid;gap:18px}.revision{margin-bottom:24px;border-color:#f97316;background:linear-gradient(135deg,#7c2d12,#c2410c);color:white;box-shadow:0 14px 32px rgba(124,45,18,.18)}.revision span,.revision p{color:#ffedd5}.revision button{background:white;color:#9a3412}section{padding:28px;border:1px solid #fdba74;border-radius:22px;background:#fff7ed}section span{color:#c2410c;font-weight:900;font-size:13px;letter-spacing:.1em}h2{font-size:28px;margin:9px 0}p{color:#596579;font-size:17px;line-height:1.6}button{border:0;border-radius:12px;padding:13px 18px;background:#c2410c;color:white;font-size:16px;font-weight:800;cursor:pointer}.soon{border-color:#e5e7eb;background:#f8fafc}.soon span,.soon h2{color:#94a3b8}
    `}</style>
  </main>;
}
