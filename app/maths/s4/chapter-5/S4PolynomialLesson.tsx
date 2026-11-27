"use client";
import {useState} from "react";
import Link from "next/link";
import katex from "katex";
import type {Lesson} from "./lessonData";
import PolynomialDiagram from "./PolynomialDiagram";
const math=(s:string)=>({__html:katex.renderToString(s,{throwOnError:false,displayMode:true,strict:"ignore"})});
type LongDivisionRow = {
  kind: "dividend" | "subtract" | "difference" | "remainder";
  terms: [string, string, string, string];
  underline?: boolean;
};
type DivisionLayout = {
  divisor: string;
  quotient: string;
  remainder: string;
  rows: LongDivisionRow[];
};
// Four fixed columns represent x^3, x^2, x and the constant term.
// Subtract rows show signed TERMS TO ADD, avoiding ambiguous minus signs.
const divisionLayouts: DivisionLayout[] = [
  {
    divisor: String.raw`x+2`, quotient: String.raw`2x^2-x-3`, remainder: String.raw`12`,
    rows: [
      {kind:"dividend", terms:[String.raw`2x^3`,String.raw`+3x^2`,String.raw`-5x`,String.raw`+6`]},
      {kind:"subtract", terms:[String.raw`-2x^3`,String.raw`-4x^2`,"",""] ,underline:true},
      {kind:"difference", terms:["",String.raw`-x^2`,String.raw`-5x`,String.raw`+6`]},
      {kind:"subtract",terms:["",String.raw`+x^2`,String.raw`+2x`,""],underline:true},
      {kind:"difference",terms:["","",String.raw`-3x`,String.raw`+6`]},
      {kind:"subtract",terms:["","",String.raw`+3x`,String.raw`+6`],underline:true},
      {kind:"remainder",terms:["","","",String.raw`12`]},
    ],
  },
  {
    divisor:String.raw`x-2`,quotient:String.raw`x^2+2x`,remainder:String.raw`7`,
    rows:[
      {kind:"dividend",terms:[String.raw`x^3`,String.raw`+0x^2`,String.raw`-4x`,String.raw`+7`]},
      {kind:"subtract",terms:[String.raw`-x^3`,String.raw`+2x^2`,"",""],underline:true},
      {kind:"difference",terms:["",String.raw`2x^2`,String.raw`-4x`,String.raw`+7`]},
      {kind:"subtract",terms:["",String.raw`-2x^2`,String.raw`+4x`,""],underline:true},
      {kind:"remainder",terms:["","","",String.raw`7`]},
    ],
  }
];
const inlineMath = (formula:string) => ({
  __html:katex.renderToString(formula,{throwOnError:false,displayMode:false,strict:"ignore"})
});
function VerticalLongDivision({index}:{index:number}) {
  const d=divisionLayouts[index];
  if(!d) return null;
  return <div className="division-scroll" role="region" aria-label="Polynomial long division" tabIndex={0}>
    <div className="division-block">
      <p className="division-caption">Polynomial long division</p>
      <div className="division-frame">
        <div className="division-divisor" dangerouslySetInnerHTML={inlineMath(d.divisor)}/>
        <div className="division-main">
          <div className="division-quotient" dangerouslySetInnerHTML={inlineMath(d.quotient)}/>
          <div className="division-grid">
            {d.rows.map((row,i)=><div className={`division-grid-row ${row.kind}${row.underline?" underlined":""}`} key={i}>
              {row.terms.map((term,j)=><span className="division-cell" key={j}>
                {term && <span dangerouslySetInnerHTML={inlineMath(term)}/>}
              </span>)}
            </div>)}
          </div>
        </div>
      </div>
      <div className="division-result">
        <span>Quotient:</span><span dangerouslySetInnerHTML={inlineMath(d.quotient)}/>
        <span>Remainder:</span><span dangerouslySetInnerHTML={inlineMath(d.remainder)}/>
      </div>
    </div>
  </div>;
}

export default function S4PolynomialLesson({lesson}:{lesson:Lesson}) {
 const [answers,setAnswers]=useState<number[]>([]);
 return <main className="lesson"><Link className="back" href="/maths/s4/chapter-5">&larr; Back to Chapter 5</Link><p className="tag">S4 MATHEMATICS · SECTION {lesson.number}{lesson.number==="5.5"?" · ENRICHMENT":""}</p><h1>{lesson.title}</h1><p className="intro">{lesson.description}</p>
 {lesson.topics.map((t,i)=><section className="tile" key={t.name}><div className="heading"><span className="number">{i+1}</span><div><p className="tag">LEARNING CARD</p><h2>{t.name}</h2></div></div><p>{t.info}</p><div className="math" dangerouslySetInnerHTML={math(t.formula)}/><PolynomialDiagram kind={t.diagram}/><div className="worked"><p className="tag">WORKED EXAMPLE</p><h3>{t.q}</h3>{lesson.number==="5.1" ? <VerticalLongDivision index={i}/> : t.steps.map((step,j)=><div className="step" key={j}><b>Step {j+1}</b><div className="math" dangerouslySetInnerHTML={math(step)}/></div>)}<p><b>Reason:</b> {t.reason}</p></div></section>)}
 <section className="tile warning"><h2>Common mistakes</h2><p>{lesson.mistake}</p><p><b>Correction:</b> {lesson.correction}</p></section>
 <section className="tile"><h2>Short practice</h2>{lesson.practice.map((p,i)=><div className="practice" key={i}><p>{i+1}. {p.q}</p><button type="button" onClick={()=>setAnswers(old=>old.includes(i)?old.filter(x=>x!==i):[...old,i])}>{answers.includes(i)?"Hide answer":"Check answer"}</button>{answers.includes(i)&&<p className="solution">{p.a}</p>}</div>)}</section>
 <section className="tile"><h2>Section Summary</h2><ul>{lesson.summary.map(x=><li key={x}>{x}</li>)}</ul></section><Link className="back" href="/maths/s4/chapter-5">&larr; Back to Chapter 5</Link>
 <style jsx>{`.lesson{max-width:1100px;width:calc(100% - 40px);margin:42px auto 75px;color:#172338;font-size:19px;line-height:1.65}.back{color:#047857;font-weight:800;text-decoration:none}.tag{color:#047857;font-size:14px;font-weight:900;letter-spacing:.08em;margin:0 0 6px}h1{font-size:clamp(32px,5vw,44px);line-height:1.18;margin:18px 0}.intro{font-size:20px;color:#64748b}.tile{background:white;border:1px solid #e2e8f0;border-radius:22px;padding:30px;margin:25px 0;min-width:0}.heading{display:flex;align-items:center;gap:17px}.number{display:grid;place-items:center;background:#ecfdf5;border-radius:13px;color:#047857;width:57px;height:57px;font-weight:900;font-size:24px;flex-shrink:0}h2{font-size:27px;margin:0 0 14px}h3{font-size:22px}.heading h2{margin:0}.math{overflow-x:auto;max-width:100%;padding:12px 0;font-size:1.05rem}.worked{background:#eff6ff;border-left:5px solid #3b82f6;border-radius:10px;padding:24px;margin:24px 0 0}.step{padding:8px 0;border-bottom:1px solid #dbeafe}.step b{font-size:13px;color:#475569}.division-scroll{max-width:100%;overflow-x:auto;margin:16px 0;padding:8px 0 14px;overscroll-behavior-x:contain}.division-block{width:max-content;min-width:590px;margin:0 auto;color:#172338}.division-caption{font-size:14px;font-weight:700;color:#475569;text-align:center}.division-frame{display:flex;align-items:flex-start;gap:12px}.division-divisor{width:90px;flex:none;text-align:right;padding-top:69px;font-size:20px}.division-main{width:max-content;flex:none}.division-quotient{text-align:center;font-size:23px;min-height:45px;display:flex;justify-content:center;align-items:center}.division-grid{border-top:2px solid #334155;border-left:2px solid #334155;border-top-left-radius:10px;padding:8px 0 0 9px}.division-grid-row{display:grid;grid-template-columns:repeat(4,105px);min-height:45px;align-items:center}.division-cell{height:100%;display:flex;align-items:center;justify-content:flex-end;padding:2px 8px 2px 4px;white-space:nowrap;font-size:18px}.division-grid-row.underlined .division-cell:not(:empty){border-bottom:1.5px solid #334155}.division-grid-row.remainder .division-cell{font-weight:bold;color:#047857}.division-result{margin-top:17px;border-top:1px solid #bfdbfe;padding:12px 2px;font-size:15px;font-weight:700;display:flex;align-items:center;gap:10px;flex-wrap:wrap}.division-result>span:nth-child(3){margin-left:12px}.warning{background:#fffbeb;border-color:#fde68a}.practice{border-top:1px solid #e2e8f0;padding:14px 0}.practice button{padding:10px 15px;border:1px solid #059669;background:white;color:#047857;font-weight:800;border-radius:10px;cursor:pointer}.solution{background:#ecfdf5;padding:10px 14px;border-radius:8px}.tile li{margin:8px 0}@media(max-width:760px){.lesson{width:calc(100% - 24px);font-size:17px}.tile{padding:20px}.worked{padding:16px}h2{font-size:24px}}`}</style></main>
}
