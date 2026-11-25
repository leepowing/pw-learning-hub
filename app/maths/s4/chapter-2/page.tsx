"use client";
import Link from "next/link";
import { sections } from "./sectionData";

export default function S4ChapterTwoPage(){
 return <main className="page">
  <Link className="back" href="/maths/s4">← Back to S4 Mathematics</Link>
  <p className="eyebrow">S4 MATHEMATICS · MATHS BEYOND 4A</p>
  <h1>Chapter 2 · Equations of Straight Lines</h1>
  <p className="intro">Learn equations of straight lines, intercepts, inclination, parallel and perpendicular slopes, and intersections of lines.</p>
  <section className="grid" aria-label="Chapter 2 lessons">{sections.map(s=><article className="card" key={s.number}>
    <div className="top"><span className="number">{s.number}</span><span className="status">Available</span></div>
    <h2>{s.title}</h2><p className="description">{s.description}</p>
    <Link className="start" href={`/maths/s4/chapter-2/${s.slug}`}>Start →</Link>
  </article>)}</section>
  <section className="feature checkpoint"><div><p className="featureLabel amber">FINAL ACTIVITY</p><h2>Checkpoint Activity</h2><p>Check concepts and calculate answers for all five sections.</p></div><Link className="cta" href="/maths/s4/chapter-2/checkpoint">Start →</Link></section>
  <section className="feature flashcards"><div><p className="featureLabel purple">LESSON PRACTICE</p><h2>Chapter 2 Flashcards</h2><p>30 lesson cards across Sections 2.1–2.5, including worked examples, practice and common mistakes. Separate from Formula Flashcards.</p></div><Link className="cta" href="/maths/s4/chapter-2/flashcards">Start Flashcards →</Link></section>
  <style jsx>{`
   .page{max-width:1100px;width:calc(100% - 40px);margin:42px auto 70px;box-sizing:border-box}
   .back{display:inline-block;margin-bottom:26px;color:#047857;text-decoration:none;font-size:17px;font-weight:700}
   .eyebrow{margin:0 0 6px;color:#059669;font-size:16px;letter-spacing:.08em;font-weight:900}
   h1{font-size:clamp(32px,4.5vw,42px);line-height:1.18;margin:0 0 10px;overflow-wrap:anywhere}.intro{margin:0 0 34px;color:#64748b;font-size:20px;line-height:1.6}
   .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.card{min-height:240px;padding:28px;border:1px solid #e2e8f0;border-radius:22px;background:white;box-shadow:0 6px 18px #0f172a08;min-width:0}
   .top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}.number{min-width:60px;height:54px;padding:0 8px;box-sizing:border-box;display:grid;place-items:center;background:#ecfdf5;color:#047857;border-radius:16px;font-size:23px;font-weight:900}
   .status{font-size:16px;font-weight:800;color:#047857}.card h2{font-size:clamp(22px,3vw,27px);margin:22px 0 8px;overflow-wrap:anywhere}.description{color:#64748b;font-size:17px;line-height:1.6}
   .start{display:block;background:#059669;color:white;font-size:17px;font-weight:800;border-radius:12px;text-align:center;padding:14px;margin-top:20px;text-decoration:none}
   .feature{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:22px;padding:28px;margin-top:25px;border-radius:24px}.feature h2{font-size:29px;margin:0 0 7px}.feature p:last-child{margin:0;color:#64748b;font-size:17px;line-height:1.5}
   .featureLabel{font-size:14px;font-weight:900;letter-spacing:.08em;margin:0 0 6px}.amber{color:#b45309}.purple{color:#4f46e5}.checkpoint{background:#fffbeb;border:1px solid #fde68a}.flashcards{background:linear-gradient(135deg,#eef2ff,#f5f3ff);border:1px solid #c7d2fe}
   .cta{background:#7c3aed;color:white;border-radius:13px;padding:14px 20px;font-weight:800;text-decoration:none;white-space:nowrap}.unavailable{background:#e2e8f0;color:#64748b;border-radius:13px;padding:14px 20px;font-weight:800}
   @media(max-width:760px){.grid{grid-template-columns:1fr}.page{width:calc(100% - 24px);margin-top:28px}.card,.feature{padding:22px}.card{min-height:0}.feature{align-items:flex-start;flex-direction:column}.cta,.unavailable{width:100%;text-align:center;box-sizing:border-box}}
  `}</style>
 </main>;
}
