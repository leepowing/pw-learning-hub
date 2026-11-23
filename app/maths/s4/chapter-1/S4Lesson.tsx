"use client";

import Link from "next/link";
import katex from "katex";
import { useState } from "react";
import type { SectionData } from "./sectionData";

function Formula({ expression }: {expression:string}) {
  return <div className="formula" role="img" aria-label={expression} dangerouslySetInnerHTML={{__html:katex.renderToString(expression,{throwOnError:false,displayMode:true,strict:"ignore"})}} />;
}

export default function S4Lesson({ lesson }: { lesson: SectionData }) {
  const [answersShown,setAnswersShown] = useState<boolean[]>([]);
  return <main className="lessonPage">
    <Link className="backLink" href="/maths/s4/chapter-1">← Back to Chapter 1</Link>
    <header className="hero"><p className="eyebrow">S4 MATHEMATICS · SECTION {lesson.number}{lesson.enrichment ? " · OPTIONAL ENRICHMENT" : ""}</p>
    <h1>{lesson.title}</h1><p className="intro">{lesson.description}</p></header>
    {lesson.topics.map((topic,i)=><section key={i} className="learnCard">
      <div className="topicHeader"><span className="number">{i+1}</span><div><p className="label">LEARNING CARD</p><h2>{topic.title}</h2></div></div>
      <p>{topic.explanation}</p><Formula expression={topic.formula}/>
      <article className="worked"><p className="label">WORKED EXAMPLE {lesson.number}.{i+1}</p>
        <h3>{topic.example.question}</h3><p className="solution">{topic.example.solution}</p>
        <div className="reason"><strong>WHY THIS STEP?</strong><p>{topic.example.reason}</p></div>
      </article>
    </section>)}
    <section className="mistakes"><p className="label">COMMON MISTAKE</p><h2>Spot the error</h2>
      <p><strong>Incorrect:</strong> {lesson.mistake}</p><p><strong>Correction:</strong> {lesson.correction}</p></section>
    <section className="practice"><p className="label">SHORT PRACTICE</p><h2>Check your understanding</h2>
      {lesson.practice.map((item,i)=><article className="question" key={i}><p><strong>{i+1}.</strong> {item.question}</p>
        <button type="button" onClick={()=>setAnswersShown(previous=>{const next=[...previous];next[i]=!next[i];return next;})} aria-expanded={!!answersShown[i]}>{answersShown[i]?"Hide answer":"Check answer"}</button>
        {answersShown[i]&&<p className="feedback"><strong>Answer:</strong> {item.answer}</p>}
      </article>)}
    </section>
    <section className="summary"><p className="label">SECTION SUMMARY</p><h2>What to remember</h2>
      <ul>{lesson.topics.map((topic,i)=><li key={i}>{topic.title}: {topic.example.reason}</li>)}</ul></section>
    <Link className="bottom" href="/maths/s4/chapter-1">← Back to Chapter 1</Link>
    <style jsx>{`
      .lessonPage{max-width:1050px;width:calc(100% - 36px);margin:42px auto 72px;min-width:0}
      .hero{margin:23px 0 30px}.eyebrow,.label{font-weight:900;font-size:14px;letter-spacing:.08em;color:#059669}
      h1{font-size:clamp(32px,4.5vw,44px);line-height:1.18;margin:7px 0 12px;overflow-wrap:anywhere}
      h2{font-size:clamp(23px,3vw,27px);margin:4px 0 10px;line-height:1.3}h3{font-size:20px;line-height:1.45;margin:4px 0 10px}
      p,li{font-size:18px;line-height:1.7;color:#334155}.intro{font-size:20px;color:#64748b}
      .learnCard,.mistakes,.practice,.summary{border:1px solid #e2e8f0;background:white;border-radius:22px;padding:28px;margin:20px 0;box-shadow:0 4px 18px #0f172a08}
      .topicHeader{display:flex;gap:14px;align-items:center}.number{flex:none;display:grid;place-items:center;background:#ecfdf5;color:#047857;border-radius:14px;font-weight:900;font-size:23px;width:52px;height:52px}
      .label{margin:0}.formula{max-width:100%;overflow-x:auto;padding:14px 5px;margin:12px 0;border:1px solid #c7d2fe;background:#eef2ff;border-radius:14px;text-align:center;color:#1e293b}
      .worked{background:#f8fafc;border:1px solid #cbd5e1;padding:22px;border-radius:16px;margin-top:20px}.worked .label{color:#4f46e5}
      .solution{white-space:pre-line;font-weight:500;color:#0f172a}.reason{padding:12px 15px;background:#eff6ff;border-radius:12px}.reason strong{font-size:13px;letter-spacing:.05em;color:#1d4ed8}.reason p{margin:5px 0;font-size:16px}
      .mistakes{background:#fff7ed;border-color:#fed7aa}.mistakes .label{color:#c2410c}.practice{background:#f8fafc}.question{padding:15px 0;border-top:1px solid #cbd5e1}
      .question button{background:#047857;color:#fff;border:0;border-radius:10px;font-size:16px;font-weight:750;padding:11px 16px;cursor:pointer}
      .question button:focus-visible{outline:3px solid #60a5fa;outline-offset:3px}.feedback{background:#ecfdf5;border-radius:9px;padding:12px 14px}
      .summary{background:#eff6ff;border-color:#bfdbfe}.summary .label{color:#1d4ed8}.bottom{display:inline-block;background:#047857;color:white;border-radius:12px;padding:12px 18px;margin-top:10px;text-decoration:none;font-weight:800}
      @media(max-width:760px){.lessonPage{width:calc(100% - 24px);margin-top:25px}.learnCard,.mistakes,.practice,.summary{padding:22px}.worked{padding:16px}p,li{font-size:16px}.intro{font-size:18px}}
    `}</style>
    <style jsx global>{`.lessonPage .backLink{font-size:17px;font-weight:700;color:#047857;text-decoration:none}.lessonPage .katex-display{margin:0}.lessonPage .katex{font-size:1.1em}`}</style>
  </main>;
}
