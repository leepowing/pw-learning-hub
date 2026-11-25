"use client";
import {useState} from "react";
import Link from "next/link";
import katex from "katex";
import type {Lesson} from "./lessonData";
import QuadraticGraph from "./QuadraticGraph";
const render=(s:string)=>({__html:katex.renderToString(s,{displayMode:true,throwOnError:false,strict:"ignore"})});
export default function S4QuadraticLesson({lesson}:{lesson:Lesson}){
 const [visible,setVisible]=useState<number[]>([]);
 return <main className="lesson"><Link href="/maths/s4/chapter-4" className="back">&larr; Back to Chapter 4</Link><p className="tag">S4 MATHEMATICS · SECTION {lesson.number}</p><h1>{lesson.title}</h1><p className="intro">{lesson.description}</p>
 {lesson.topics.map((topic,i)=><section className="tile" key={topic.name}>
 <div className="heading"><span className="num">{i+1}</span><div><p className="tag">LEARNING CARD</p><h2>{topic.name}</h2></div></div>
 <p>{topic.info}</p><div className="formula" dangerouslySetInnerHTML={render(topic.formula)}/>
 <div className="graph"><QuadraticGraph mode={topic.graph}/></div>
 <div className="worked"><p className="tag">WORKED EXAMPLE</p><h3>{topic.q}</h3><div className="steps">{topic.steps.map((step,j)=><div key={j} className="step"><b>Step {j+1}</b><div className="formula" dangerouslySetInnerHTML={render(step)}/></div>)}</div><p><strong>Reason:</strong> {topic.reason}</p></div>
 </section>)}
 <section className="tile warning"><p className="tag">COMMON MISTAKES</p><p>{lesson.mistake}</p><p><strong>Correction:</strong> {lesson.correction}</p></section>
 <section className="tile"><h2>Short practice</h2>{lesson.practice.map((p,i)=><div className="practice" key={i}><p>{i+1}. {p.q}</p><button type="button" onClick={()=>setVisible(x=>x.includes(i)?x.filter(v=>v!==i):[...x,i])}>{visible.includes(i)?"Hide answer":"Check answer"}</button>{visible.includes(i)&&<p className="answer">Answer: {p.a}</p>}</div>)}</section>
 <section className="tile"><h2>Section Summary</h2><ul>{lesson.summary.map(s=><li key={s}>{s}</li>)}</ul></section><Link className="back" href="/maths/s4/chapter-4">&larr; Back to Chapter 4</Link>
 <style jsx>{`.lesson{max-width:1100px;width:calc(100% - 40px);margin:42px auto 75px;color:#172338;font-size:19px;line-height:1.65}.back{color:#047857;font-weight:800;text-decoration:none}.tag{color:#047857;font-size:14px;font-weight:900;letter-spacing:.08em;margin:0 0 6px}h1{font-size:clamp(32px,5vw,44px);line-height:1.18;margin:18px 0}.intro{font-size:20px;color:#64748b}.tile{background:white;border:1px solid #e2e8f0;border-radius:22px;padding:30px;margin:25px 0;min-width:0}.heading{display:flex;align-items:center;gap:17px}.num{display:grid;place-items:center;background:#ecfdf5;border-radius:13px;color:#047857;width:57px;height:57px;font-weight:900;font-size:24px;flex-shrink:0}h2{font-size:27px;margin:0 0 14px}h3{font-size:22px}.heading h2{margin:0}.formula{overflow-x:auto;max-width:100%;padding:13px 0;font-size:1.05rem}.graph{max-width:760px;margin:10px auto;overflow:hidden}.worked{background:#eff6ff;border-left:5px solid #3b82f6;border-radius:10px;padding:24px;margin:24px 0 0}.worked .tag{color:#047857}.steps{display:grid;gap:5px}.step{padding:7px 0;border-bottom:1px solid #dbeafe;min-width:0}.step b{font-size:13px;color:#475569}.step .formula{text-align:left}.warning{background:#fffbeb;border-color:#fde68a}.practice{border-top:1px solid #e2e8f0;padding:14px 0}.practice button{padding:10px 15px;border:1px solid #059669;background:white;color:#047857;font-weight:800;border-radius:10px;cursor:pointer}.answer{background:#ecfdf5;padding:10px 14px;border-radius:8px}.tile li{margin:8px 0}@media(max-width:760px){.lesson{width:calc(100% - 24px);font-size:17px}.tile{padding:20px}.worked{padding:16px}.heading{align-items:flex-start}h2{font-size:24px}}`}</style></main>
}
