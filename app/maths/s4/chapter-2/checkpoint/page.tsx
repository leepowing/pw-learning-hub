"use client";
import Link from "next/link";
import {useState} from "react";

type Judgement={topic:string;statement:string;correct:boolean;explanation:string};
const judgements:Judgement[]=[
 {topic:"2.1 Slope",statement:"A vertical straight line has a slope of zero.",correct:false,explanation:"A vertical line's slope is undefined; a horizontal line's slope is zero."},
 {topic:"2.1 Two-point form",statement:"The slope through (1,2) and (3,6) is 2.",correct:true,explanation:"(6−2)/(3−1)=4/2=2."},
 {topic:"2.2 Intercepts",statement:"The x-intercept is found by setting x=0.",correct:false,explanation:"Set y=0 for the x-intercept."},
 {topic:"2.2 Slope-intercept form",statement:"For y=−3x+5, the y-intercept is 5.",correct:true,explanation:"In y=mx+c, c is the y-intercept."},
 {topic:"2.3 Inclination",statement:"A straight line with a negative slope has an obtuse angle of inclination.",correct:true,explanation:"For negative finite slope, 90°<θ<180°."},
 {topic:"2.3 Inclination",statement:"A vertical line has angle of inclination 0°.",correct:false,explanation:"A vertical line has inclination 90°."},
 {topic:"2.4 Parallel lines",statement:"Two distinct nonvertical lines with equal slopes are parallel.",correct:true,explanation:"Equal slopes give parallel lines if they are distinct."},
 {topic:"2.4 Perpendicular lines",statement:"Two lines with slopes 2 and 1/2 are perpendicular.",correct:false,explanation:"Their product is +1, not −1."},
 {topic:"2.5 Intersection",statement:"The point where two lines cross must satisfy both equations.",correct:true,explanation:"An intersection is a common solution."},
 {topic:"2.5 Line classification",statement:"If the determinant of two line equations is zero, they must intersect nowhere.",correct:false,explanation:"The lines can be distinct parallel lines OR coincident."},
];
type Entry={topic:string;question:string;accepted:string[];explanation:string};
const exercises:Entry[]=[
 {topic:"2.1 Slope",question:"Find the slope of the line through (−1,2) and (3,8).",accepted:["3/2","1.5"],explanation:"m=(8−2)/(3−(−1))=6/4=3/2."},
 {topic:"2.1 Point-slope",question:"For the line with slope 2 passing through (3,7), find its y-intercept.",accepted:["1"],explanation:"7=2(3)+c, so c=1."},
 {topic:"2.2 x-intercept",question:"Find the x-intercept of 2x+3y−12=0 (enter the number).",accepted:["6"],explanation:"Set y=0: 2x=12, hence x=6."},
 {topic:"2.2 y-intercept",question:"Find the y-intercept of 4x−2y+10=0 (enter the number).",accepted:["5"],explanation:"Set x=0: −2y=−10, hence y=5."},
 {topic:"2.3 Inclination",question:"What is the angle of inclination, in degrees, for slope 1?",accepted:["45","45°"],explanation:"tan θ=1 and 0°≤θ<180°, so θ=45°."},
 {topic:"2.3 Inclination",question:"What is the angle of inclination, in degrees, for slope −1?",accepted:["135","135°"],explanation:"The obtuse inclination is 135°."},
 {topic:"2.4 Perpendicular slope",question:"A line has slope −2/3. Enter the slope of a perpendicular nonvertical line.",accepted:["3/2","1.5"],explanation:"The negative reciprocal of −2/3 is 3/2."},
 {topic:"2.4 Midpoint",question:"Find the x-coordinate of the midpoint between (−2,4) and (8,0).",accepted:["3"],explanation:"x=(−2+8)/2=3."},
 {topic:"2.5 Intersection",question:"For y=x+2 and y=−x+6, enter the x-coordinate of their intersection.",accepted:["2"],explanation:"x+2=−x+6 implies 2x=4, x=2."},
 {topic:"2.5 Coincident lines",question:"How many intersections have y=2x−1 and 2y=4x−2? Enter 'infinitely many'.",accepted:["infinitelymany","infinite","infinity","∞"],explanation:"The equations describe exactly the same line."},
];
function normal(s:string){return s.toLowerCase().replace(/[\s,]/g,"").replace(/[−–—]/g,"-").replace(/degrees?/g,"°").replace(/^\+/,"").trim()}
function equivalent(actual:string,expected:string[]){
 const a=normal(actual);if(expected.some(v=>normal(v)===a))return true;
 // Accept equivalent rational / decimal forms without arbitrary code evaluation.
 const rational=(s:string):number|null=>{const t=s.replace(/°$/,'');if(!/^-?\d+(?:\.\d+)?(?:\/-?\d+(?:\.\d+)?)?$/.test(t))return null;const parts=t.split('/').map(Number);return(parts.length===2&&parts[1]===0)?null:(parts.length===2?parts[0]/parts[1]:parts[0]);};
 const value=rational(a);return value!==null&&expected.some(v=>{const e=rational(normal(v));return e!==null&&Math.abs(e-value)<1e-8;});
}
export default function Checkpoint(){
 const [j,setJ]=useState<Record<number,boolean>>({});const [a,setA]=useState<Record<number,string>>({});const [submitted,setSubmitted]=useState(false);
 const total=judgements.length+exercises.length;const answered=Object.keys(j).length+exercises.filter((_,i)=>(a[i]||"").trim()!=="").length;
 const marksJ=judgements.map((q,i)=>j[i]===q.correct);const marksA=exercises.map((q,i)=>equivalent(a[i]||"",q.accepted));
 const score=[...marksJ,...marksA].filter(Boolean).length;
 const review=[...new Set([...judgements.filter((_,i)=>!marksJ[i]).map(q=>q.topic),...exercises.filter((_,i)=>!marksA[i]).map(q=>q.topic)])];
 return <main className="page"><Link className="back" href="/maths/s4/chapter-2">← Back to Chapter 2</Link><p className="eyebrow">S4 MATHEMATICS · CHAPTER 2</p><h1>Checkpoint Activity</h1>
 <p className="intro">Equations of Straight Lines · Answered {answered} of {total}</p>
 <p className="notice">Part B uses answer-only automatic marking. It does not assess full written working or award HKDSE method marks.</p>
 <section className="card"><h2>Part A · Correct or Wrong</h2>{judgements.map((q,i)=><article className="item" key={i}>
   <p><strong>{i+1}.</strong> {q.statement}</p><div className="options">{[true,false].map(v=><label key={String(v)}><input type="radio" name={`judgement-${i}`} checked={j[i]===v} disabled={submitted} onChange={()=>setJ(prev=>({...prev,[i]:v}))}/>{v?"Correct":"Wrong"}</label>)}</div>
   {submitted&&<p className={marksJ[i]?"correct":"incorrect"}>{marksJ[i]?"Correct":"Incorrect"} — {q.explanation}</p>}
 </article>)}</section>
 <section className="card"><h2>Part B · Complete the calculations</h2>{exercises.map((q,i)=><article className="item" key={i}>
   <label htmlFor={`answer-${i}`}><strong>{i+1}.</strong> {q.question}</label>
   <input id={`answer-${i}`} type="text" autoComplete="off" value={a[i]||""} disabled={submitted} onChange={e=>setA(prev=>({...prev,[i]:e.target.value}))} placeholder="Enter your answer"/>
   {submitted&&<p className={marksA[i]?"correct":"incorrect"}>{marksA[i]?"Correct":"Incorrect"} — {q.explanation} {!marksA[i]&&`Accepted answer: ${q.accepted[0]}`}</p>}
 </article>)}</section>
 {!submitted?<button type="button" disabled={answered!==total} onClick={()=>setSubmitted(true)}>Check Answers ({answered}/{total})</button>:<section className="card result" aria-live="polite"><h2>Your score: {score} / {total}</h2><h3>Topics to review</h3>{review.length?<ul>{review.map(t=><li key={t}>{t}</li>)}</ul>:<p>Excellent work — no incorrect answers.</p>}<button type="button" onClick={()=>{setJ({});setA({});setSubmitted(false)}}>Try again</button></section>}
 <Link className="bottom" href="/maths/s4/chapter-2">← Back to Chapter 2</Link>
 <style jsx>{`
 .page{max-width:1030px;width:calc(100% - 36px);margin:40px auto 70px}.back{color:#047857;text-decoration:none;font-weight:800;font-size:17px}
 h1{font-size:clamp(32px,4.5vw,44px);margin:9px 0}h2{font-size:28px}h3{font-size:20px}.eyebrow{color:#059669;letter-spacing:.08em;font-weight:900;font-size:14px;margin:25px 0 0}
 .intro{font-size:20px;color:#64748b}.notice{background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:14px;color:#7c2d12}
 .card{background:white;border:1px solid #e2e8f0;border-radius:21px;margin:22px 0;padding:28px}.item{border-top:1px solid #e2e8f0;padding:16px 0}.item p,.item label{font-size:18px;line-height:1.65}
 .options{display:flex;gap:15px;flex-wrap:wrap}.options label{display:flex;align-items:center;gap:7px;cursor:pointer}
 input[type=text]{display:block;width:100%;max-width:520px;border:1px solid #94a3b8;border-radius:10px;padding:13px;margin-top:9px;font-size:18px;box-sizing:border-box}input[type=radio]{width:19px;height:19px}
 .correct,.incorrect{padding:12px;border-radius:9px;font-size:16px!important}.correct{background:#ecfdf5;color:#065f46}.incorrect{background:#fff7ed;color:#9a3412}
 button{background:#047857;color:#fff;padding:14px 20px;border:0;border-radius:12px;font-size:17px;font-weight:800;cursor:pointer}button:disabled{background:#cbd5e1;cursor:not-allowed}.result{background:#eff6ff}.bottom{display:inline-block;margin:20px 0;color:#047857;font-weight:800;text-decoration:none}
 @media(max-width:760px){.page{width:calc(100% - 24px)}.card{padding:18px}}
 `}</style></main>;
}
