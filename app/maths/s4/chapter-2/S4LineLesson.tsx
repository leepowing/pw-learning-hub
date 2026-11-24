"use client";

import Link from "next/link";
import katex from "katex";
import { useState } from "react";
import type { LessonData } from "./sectionData";

function Formula({ tex }: { tex: string }) {
  return <div className="formula" role="img" aria-label={tex} dangerouslySetInnerHTML={{__html:katex.renderToString(tex,{displayMode:true,throwOnError:false,strict:"ignore"})}} />;
}

function CoordinateDiagram({ lesson }: { lesson: LessonData }) {
  const {m,c,points,label}=lesson.diagram;
  const w=540,h=325,originX=270,originY=165,scale=27;
  const px=(x:number)=>originX+x*scale;
  const py=(y:number)=>originY-y*scale;
  const lineX1=-10,lineX2=10;
  const yy1=m*lineX1+c, yy2=m*lineX2+c;
  return <figure className="diagram">
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={`Coordinate plane showing ${label}`} style={{width:"100%",height:"auto"}}>
      <defs><clipPath id={`plot-${lesson.number.replace('.','-')}`}><rect x="25" y="14" width="490" height="294"/></clipPath></defs>
      {Array.from({length:19},(_,i)=>i-9).map(i=><g key={i} stroke="#e2e8f0" strokeWidth="1"><line x1={px(i)} x2={px(i)} y1="15" y2="308"/><line x1="25" x2="515" y1={py(i)} y2={py(i)}/></g>)}
      <line x1="25" y1={originY} x2="515" y2={originY} stroke="#334155" strokeWidth="2"/>
      <line x1={originX} y1="308" x2={originX} y2="15" stroke="#334155" strokeWidth="2"/>
      <text x="515" y={originY-8} fontSize="13" fill="#334155">x</text>
      <text x={originX+9} y="22" fontSize="13" fill="#334155">y</text>
      <text x={originX+5} y={originY+16} fontSize="12">O</text>
      {[-6,-4,-2,2,4,6].map(n=><g key={n} fill="#64748b" fontSize="11"><text x={px(n)-7} y={originY+16}>{n}</text><text x={originX+5} y={py(n)+4}>{n}</text></g>)}
      <g clipPath={`url(#plot-${lesson.number.replace('.','-')})`}>
        <line x1={px(lineX1)} y1={py(yy1)} x2={px(lineX2)} y2={py(yy2)} stroke="#047857" strokeWidth="3"/>
        {lesson.number==="2.4" && <line x1={px(lineX1)} y1={py(yy1+2)} x2={px(lineX2)} y2={py(yy2+2)} stroke="#e87c24" strokeWidth="2.5"/>}
        {lesson.number==="2.5" && <line x1={px(-9)} y1={py(-(-9)+5)} x2={px(9)} y2={py(-9+5)} stroke="#d97706" strokeWidth="3"/>}
      </g>
      {points.map(([x,y],i)=><g key={i}><circle cx={px(x)} cy={py(y)} r="5" fill="#1d4ed8" stroke="white" strokeWidth="2"/><text x={px(x)+8} y={py(y)-9} fontSize="13" fill="#0f172a">({x},{y})</text></g>)}
    </svg>
    <figcaption>{label}. Diagram is calculated from the coordinates shown, with equally spaced axis units.</figcaption>
  </figure>;
}

export default function S4LineLesson({lesson}:{lesson:LessonData}) {
 const [revealed,setRevealed]=useState<number[]>([]);
 return <main className="page">
  <Link className="back" href="/maths/s4/chapter-2">← Back to Chapter 2</Link>
  <header><p className="eyebrow">S4 MATHEMATICS · SECTION {lesson.number}</p><h1>{lesson.title}</h1><p className="intro">{lesson.description}</p></header>
  <section className="lessonCard"><p className="eyebrow">COORDINATE DIAGRAM</p><CoordinateDiagram lesson={lesson}/></section>
  {lesson.topics.map((topic,i)=><section key={topic.title} className="lessonCard">
    <div className="topicHead"><span className="number">{i+1}</span><div><p className="eyebrow">LEARNING CARD</p><h2>{topic.title}</h2></div></div>
    <p>{topic.explanation}</p><Formula tex={topic.formula}/>
    <div className="worked"><p className="eyebrow">WORKED EXAMPLE {lesson.number}.{i+1}</p><h3>{topic.question}</h3>
    <div className="working">{topic.steps.map((step,j)=><div className="step" key={j}><span className="stepLabel">Step {j+1}</span><Formula tex={step}/></div>)}</div>
    <p className="reason"><strong>Reason:</strong> {topic.reason}</p></div>
  </section>)}
  <section className="lessonCard mistake"><p className="eyebrow">COMMON MISTAKE</p><h2>Spot the error</h2><p><strong>Incorrect:</strong> {lesson.mistake}</p><p><strong>Correction:</strong> {lesson.correction}</p></section>
  <section className="lessonCard"><p className="eyebrow">SHORT PRACTICE</p><h2>Check your understanding</h2>{lesson.practice.map((p,i)=><div className="practice" key={i}>
   <p><strong>{i+1}.</strong> {p.q}</p><button type="button" onClick={()=>setRevealed(old=>old.includes(i)?old.filter(x=>x!==i):[...old,i])}>{revealed.includes(i)?"Hide answer":"Check answer"}</button>
   {revealed.includes(i)&&<p className="answer"><strong>Answer:</strong> {p.a}</p>}</div>)}</section>
  <section className="lessonCard summary"><p className="eyebrow">SECTION SUMMARY</p><h2>Key formulas and methods</h2>{lesson.topics.map(t=><div key={t.title}><h3>{t.title}</h3><Formula tex={t.formula}/></div>)}</section>
  <Link className="bottom" href="/maths/s4/chapter-2">← Back to Chapter 2</Link>
  <style jsx>{`
   .page{max-width:1050px;width:calc(100% - 36px);margin:42px auto 70px;min-width:0}
   .back{color:#047857;font-size:17px;font-weight:750;text-decoration:none}
   header{margin:28px 0}.eyebrow{font-weight:900;color:#059669;font-size:14px;letter-spacing:.08em;margin:0 0 6px}
   h1{font-size:clamp(32px,4.5vw,44px);line-height:1.15;margin:8px 0;overflow-wrap:anywhere}
   h2{font-size:clamp(23px,3vw,27px);margin:3px 0 10px}h3{font-size:19px;margin:9px 0}
   p{font-size:18px;line-height:1.65;color:#334155}.intro{font-size:20px;color:#64748b}
   .lessonCard{margin:18px 0;padding:28px;border:1px solid #e2e8f0;border-radius:22px;background:white;box-shadow:0 5px 17px #0f172a08;min-width:0}
   .topicHead{display:flex;gap:14px;align-items:center}.number{width:54px;height:54px;flex:none;display:grid;place-items:center;border-radius:15px;background:#ecfdf5;color:#047857;font-size:23px;font-weight:900}
   .formula{max-width:100%;overflow-x:auto;background:#eef2ff;border-radius:12px;padding:12px 4px;margin:14px 0}
   .worked{background:#f8fafc;border:1px solid #cbd5e1;border-radius:15px;padding:20px;margin-top:20px}.worked .eyebrow{color:#4f46e5}
   .working{display:grid;gap:7px}.step{display:flex;align-items:center;gap:14px;min-width:0}.stepLabel{font-size:13px;color:#64748b;flex:none;font-weight:800}
   .step .formula{margin:2px 0;flex:1;min-width:0}.reason{background:#eff6ff;padding:12px;border-radius:10px;font-size:16px}
   .mistake{background:#fff7ed;border-color:#fed7aa}.mistake .eyebrow{color:#c2410c}.practice{padding:12px 0;border-top:1px solid #e2e8f0}
   button{border:0;background:#047857;color:white;border-radius:10px;padding:12px 17px;font-size:16px;font-weight:750;cursor:pointer}
   button:focus-visible{outline:3px solid #60a5fa;outline-offset:3px}.answer{background:#ecfdf5;padding:12px;border-radius:10px}
   .summary{background:#eff6ff}.summary .eyebrow{color:#1d4ed8}
   .diagram{max-width:650px;margin:10px auto}.diagram figcaption{font-size:14px;color:#64748b;text-align:center;line-height:1.5}
   .bottom{display:inline-block;background:#047857;color:white;text-decoration:none;font-weight:800;padding:13px 18px;border-radius:12px;margin-top:12px}
   @media(max-width:760px){.page{width:calc(100% - 24px);margin-top:26px}.lessonCard{padding:18px}.worked{padding:15px}.step{display:block}.stepLabel{display:block}p{font-size:17px}}
  `}</style>
 </main>;
}
