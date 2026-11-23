"use client";

import Link from "next/link";
import { sections as lessonSections } from "./sectionData";

export default function S4ChapterOnePage() {
  return (
    <main className="page">
      <Link className="back" href="/maths/s4">← Back to S4 Mathematics</Link>
      <p className="eyebrow">S4 MATHEMATICS · MATHS BEYOND 4A</p>
      <h1>Chapter 1 · Quadratic Equations and Number Systems</h1>
      <p className="intro">Explore number systems, methods for solving quadratic equations, the nature of their roots and applications. All eight sections are available, with Section 1.8 marked as optional enrichment.</p>
      <section className="grid" aria-label="Chapter 1 sections">
        {lessonSections.map((section) => (
          <article className="card" key={section.number}>
            <div className="top"><span className="number">{section.number}</span><span className="status">Available</span></div>
            {section.enrichment && <p className="enrichment">OPTIONAL ENRICHMENT</p>}
            <h2>{section.title}</h2>
            <p className="description">{section.description}</p>
            <Link className="start" href={`/maths/s4/chapter-1/${section.slug}`}>Start →</Link>
          </article>
        ))}
      </section>
      <section className="feature flashcards" aria-label="Chapter 1 flashcards">
        <div><p className="featureLabel purple">FORMULA PRACTICE</p><h2>Chapter 1 Flashcards</h2><p>9 approved formula cards from this chapter, including optional enrichment.</p></div>
        <Link className="featureStart purpleStart" href="/maths/s4/chapter-1/flashcards">Start Flashcards →</Link>
      </section>
      <section className="feature checkpoint" aria-label="Chapter 1 checkpoint">
        <div><p className="featureLabel amber">FINAL ACTIVITY</p><h2>Checkpoint Activity</h2><p>Check your understanding across Sections 1.1–1.7, with optional enrichment.</p></div>
        <Link className="featureStart checkpointStart" href="/maths/s4/chapter-1/checkpoint">Start →</Link>
      </section>
      <style jsx>{`
        .page { max-width:1100px; width:calc(100% - 40px); margin:42px auto 70px; box-sizing:border-box; }
        :global(.back) { display:inline-block; margin-bottom:26px; color:#047857; font-size:17px; font-weight:700; text-decoration:none; }
        .eyebrow { margin:0 0 6px; color:#059669; font-size:16px; letter-spacing:.08em; font-weight:900; }
        h1 { margin:0 0 10px; font-size:clamp(32px,4.5vw,42px); line-height:1.18; overflow-wrap:anywhere; }
        .intro { margin:0 0 34px; color:#64748b; font-size:20px; line-height:1.6; }
        .grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; }
        .card { min-height:230px; padding:28px; border-radius:22px; border:1px solid #e2e8f0; background:white; box-shadow:0 6px 18px rgba(0,0,0,.04); box-sizing:border-box; min-width:0; }
        .top { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; }
        .number { min-width:60px; height:54px; padding:0 7px; box-sizing:border-box; display:flex; align-items:center; justify-content:center; border-radius:16px; background:#ecfdf5; color:#047857; font-size:23px; font-weight:900; }
        .status { color:#64748b; font-size:16px; font-weight:800; text-align:right; }
        .enrichment { color:#b45309; margin:14px 0 -8px; font-size:12px; font-weight:900; letter-spacing:.07em; }
        .card h2 { margin:22px 0 8px; font-size:clamp(22px,3vw,27px); line-height:1.28; overflow-wrap:anywhere; }
        .description { margin:0; color:#64748b; font-size:17px; line-height:1.6; }
        .start { display:block; margin-top:20px; background:#059669; color:white; border-radius:12px; text-align:center; padding:14px; text-decoration:none; font-size:17px; font-weight:800; }
        .start:hover { background:#047857; }
        .start:focus-visible { outline:3px solid #60a5fa; outline-offset:3px; }
        .feature { display:flex; align-items:center; justify-content:space-between; gap:22px; padding:28px; margin-top:25px; border-radius:24px; flex-wrap:wrap; }
        .feature h2 { font-size:29px; margin:0 0 7px; }
        .feature p:last-child { color:#64748b; font-size:17px; line-height:1.5; margin:0; }
        .featureLabel { margin:0 0 6px; font-size:14px; font-weight:900; letter-spacing:.08em; }
        .purple { color:#4f46e5; }
        .amber { color:#b45309; }
        .flashcards { background:linear-gradient(135deg,#eef2ff,#f5f3ff); border:1px solid #c7d2fe; }
        .checkpoint { background:#fffbeb; border:1px solid #fde68a; }
        .featureStart { padding:14px 22px; color:white; border-radius:14px; font-size:17px; font-weight:800; text-decoration:none; white-space:nowrap; text-align:center; }
        .purpleStart { background:#4f46e5; }
        .checkpointStart { background:#7c3aed; }
        .featureStart:focus-visible { outline:3px solid #2563eb; outline-offset:3px; }
        .unavailable { padding:14px 20px; color:#64748b; background:#e2e8f0; border-radius:14px; font-size:16px; font-weight:800; white-space:nowrap; }
        @media(max-width:760px) { .grid{grid-template-columns:1fr} .page{width:calc(100% - 24px);margin-top:28px} .card{padding:22px;min-height:0} .feature{padding:22px;align-items:flex-start;flex-direction:column} .unavailable{width:100%;box-sizing:border-box;text-align:center} }
      `}</style>
    </main>
  );
}
