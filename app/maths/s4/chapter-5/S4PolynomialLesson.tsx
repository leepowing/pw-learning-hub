"use client";
import {useState} from "react";
import Link from "next/link";
import katex from "katex";
import type {Lesson} from "./lessonData";
import PolynomialDiagram from "./PolynomialDiagram";
const math=(s:string)=>({__html:katex.renderToString(s,{throwOnError:false,displayMode:true,strict:"ignore"})});
type DivisionLayout = {divisor:string;dividend:string;quotient:string;working:string;remainder:string};
const divisionLayouts:DivisionLayout[] = [
 {divisor:String.raw`x+2`, dividend:String.raw`2x^3+3x^2-5x+6`,quotient:String.raw`2x^2-x-3`,
  working:String.raw`\begin{array}{rrrr}2x^3 & +3x^2 & -5x & +6\\ \underline{-2x^3} & \underline{-4x^2} & & \\ & -x^2 & -5x & +6\\ & \underline{+x^2} & \underline{+2x} & \\ & & -3x & +6\\ & & \underline{+3x} & \underline{+6}\\ & & & 12\end{array}`, remainder:String.raw`12`},
 {divisor:String.raw`x-2`, dividend:String.raw`x^3+0x^2-4x+7`,quotient:String.raw`x^2+2x`,
  working:String.raw`\begin{array}{rrrr}x^3 & +0x^2 & -4x & +7\\ \underline{-x^3} & \underline{+2x^2} & & \\ & 2x^2 & -4x & +7\\ & \underline{-2x^2} & \underline{+4x} & \\ & & & 7\end{array}`, remainder:String.raw`7`}
];
function VerticalLongDivision({index}:{index:number}) {
 const d=divisionLayouts[index];
 return <div className="division-scroll"><div className="division-block">
  <p className="division-caption">Polynomial long division</p>
  <div className="division-quotient" dangerouslySetInnerHTML={math(d.quotient)}/>
  <div className="division-layout">
   <div className="division-divisor" dangerouslySetInnerHTML={math(d.divisor)}/>
   <div className="division-working" dangerouslySetInnerHTML={math(d.working)}/>
  </div>
  <div className="division-result">Quotient: <span dangerouslySetInnerHTML={math(d.quotient)}/> &nbsp; Remainder: <span dangerouslySetInnerHTML={math(d.remainder)}/></div>
 </div></div>;
}

export default function S4PolynomialLesson({lesson}:{lesson:Lesson}) {
 const [answers,setAnswers]=useState<number[]>([]);
 return <main className="lesson"><Link className="back" href="/maths/s4/chapter-5">&larr; Back to Chapter 5</Link><p className="tag">S4 MATHEMATICS · SECTION {lesson.number}{lesson.number==="5.5"?" · ENRICHMENT":""}</p><h1>{lesson.title}</h1><p className="intro">{lesson.description}</p>
 {lesson.topics.map((t,i)=><section className="tile" key={t.name}><div className="heading"><span className="number">{i+1}</span><div><p className="tag">LEARNING CARD</p><h2>{t.name}</h2></div></div><p>{t.info}</p><div className="math" dangerouslySetInnerHTML={math(t.formula)}/><PolynomialDiagram kind={t.diagram}/><div className="worked"><p className="tag">WORKED EXAMPLE</p><h3>{t.q}</h3>{lesson.number==="5.1" ? <VerticalLongDivision index={i}/> : t.steps.map((step,j)=><div className="step" key={j}><b>Step {j+1}</b><div className="math" dangerouslySetInnerHTML={math(step)}/></div>)}<p><b>Reason:</b> {t.reason}</p></div></section>)}
 <section className="tile warning"><h2>Common mistakes</h2><p>{lesson.mistake}</p><p><b>Correction:</b> {lesson.correction}</p></section>
 <section className="tile"><h2>Short practice</h2>{lesson.practice.map((p,i)=><div className="practice" key={i}><p>{i+1}. {p.q}</p><button type="button" onClick={()=>setAnswers(old=>old.includes(i)?old.filter(x=>x!==i):[...old,i])}>{answers.includes(i)?"Hide answer":"Check answer"}</button>{answers.includes(i)&&<p className="solution">{p.a}</p>}</div>)}</section>
 <section className="tile"><h2>Section Summary</h2><ul>{lesson.summary.map(x=><li key={x}>{x}</li>)}</ul></section><Link className="back" href="/maths/s4/chapter-5">&larr; Back to Chapter 5</Link>
 <style jsx>{`.lesson{max-width:1100px;width:calc(100% - 40px);margin:42px auto 75px;color:#172338;font-size:19px;line-height:1.65}.back{color:#047857;font-weight:800;text-decoration:none}.tag{color:#047857;font-size:14px;font-weight:900;letter-spacing:.08em;margin:0 0 6px}h1{font-size:clamp(32px,5vw,44px);line-height:1.18;margin:18px 0}.intro{font-size:20px;color:#64748b}.tile{background:white;border:1px solid #e2e8f0;border-radius:22px;padding:30px;margin:25px 0;min-width:0}.heading{display:flex;align-items:center;gap:17px}.number{display:grid;place-items:center;background:#ecfdf5;border-radius:13px;color:#047857;width:57px;height:57px;font-weight:900;font-size:24px;flex-shrink:0}h2{font-size:27px;margin:0 0 14px}h3{font-size:22px}.heading h2{margin:0}.math{overflow-x:auto;max-width:100%;padding:12px 0;font-size:1.05rem}.worked{background:#eff6ff;border-left:5px solid #3b82f6;border-radius:10px;padding:24px;margin:24px 0 0}.step{padding:8px 0;border-bottom:1px solid #dbeafe}.step b{font-size:13px;color:#475569}.division-scroll{max-width:100%;overflow-x:auto;margin:15px 0;padding-bottom:6px}.division-block{width:max-content;min-width:460px;max-width:none;margin:0 auto;color:#172338}.division-caption{font-size:14px;font-weight:700;color:#475569;text-align:center}.division-quotient{margin-left:105px;text-align:center;border-bottom:2px solid #334155;padding:0 18px 4px}.division-layout{display:flex;align-items:flex-start;gap:0}.division-divisor{min-width:105px;padding:8px 12px 0 0;text-align:right}.division-working{border-left:2px solid #334155;padding:5px 14px 10px 18px}.division-quotient .katex-display,.division-divisor .katex-display,.division-working .katex-display{margin:0}.division-working .katex{font-size:1.25em}.division-result{margin-top:20px;border-top:1px solid #bfdbfe;padding:13px 0;font-size:16px;font-weight:700;display:flex;align-items:center;gap:8px}.division-result .katex-display{display:inline-block;margin:0}.division-result .katex{font-size:1.05em}.warning{background:#fffbeb;border-color:#fde68a}.practice{border-top:1px solid #e2e8f0;padding:14px 0}.practice button{padding:10px 15px;border:1px solid #059669;background:white;color:#047857;font-weight:800;border-radius:10px;cursor:pointer}.solution{background:#ecfdf5;padding:10px 14px;border-radius:8px}.tile li{margin:8px 0}@media(max-width:760px){.lesson{width:calc(100% - 24px);font-size:17px}.tile{padding:20px}.worked{padding:16px}h2{font-size:24px}}`}</style></main>
}
