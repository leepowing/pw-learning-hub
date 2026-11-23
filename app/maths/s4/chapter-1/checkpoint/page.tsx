"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

type TF = { id:string; section:string; prompt:string; correct:boolean; explanation:string };
type Calculation = { id:string; section:string; prompt:string; answers:string[]; display:string; explanation:string; hint?:string };
const partA: TF[] = [
 {id:"a1",section:"1.1",prompt:"Every terminating decimal is rational.",correct:true,explanation:"A terminating decimal can be written as an integer over a power of ten."},
 {id:"a2",section:"1.1",prompt:"Every real number can be written as p/q where p and q are integers and q ≠ 0.",correct:false,explanation:"Irrational real numbers, such as √2, cannot be expressed as such a fraction."},
 {id:"a3",section:"1.2",prompt:"2x + 3 = 0 is a quadratic equation.",correct:false,explanation:"Its highest power of x is one, so this is linear."},
 {id:"a4",section:"1.3",prompt:"(x − 5)(x + 2) = 0 has roots 5 and −2.",correct:true,explanation:"The zero-product property gives x − 5 = 0 or x + 2 = 0."},
 {id:"a5",section:"1.4",prompt:"The quadratic formula requires a ≠ 0 in ax² + bx + c = 0.",correct:true,explanation:"The denominator is 2a, and a zero coefficient would make the equation non-quadratic."},
 {id:"a6",section:"1.4",prompt:"x² + 4 = 0 has two distinct real roots.",correct:false,explanation:"Its solutions ±2i are not real."},
 {id:"a7",section:"1.5",prompt:"A discriminant of zero means that the quadratic has a repeated real root.",correct:true,explanation:"The ± square-root term becomes zero."},
 {id:"a8",section:"1.6",prompt:"A monic quadratic with roots 2 and −3 is x² + x − 6 = 0.",correct:true,explanation:"(x − 2)(x + 3) = x² + x − 6."},
 {id:"a9",section:"1.7",prompt:"A negative value for the width of a rectangle is an acceptable solution to a word problem.",correct:false,explanation:"A physical width must be positive; reject an invalid mathematical root."},
 {id:"a10",section:"1.8 Enrichment",prompt:"The imaginary unit satisfies i² = −1.",correct:true,explanation:"This is the defining property of the imaginary unit."},
];
const partB: Calculation[] = [
 {id:"b1",section:"1.1",prompt:"Write 0.125 as a fraction in simplest form.",answers:["1/8","0.125"],display:"1/8",explanation:"0.125 = 125/1000 = 1/8."},
 {id:"b2",section:"1.1",prompt:"Write 0.333… as a fraction in simplest form.",answers:["1/3"],display:"1/3",explanation:"Let x = 0.333…; then 10x − x = 3, so x = 1/3."},
 {id:"b3",section:"1.2",prompt:"Identify a in 5x² − 4x + 1 = 0.",answers:["5"],display:"5",explanation:"Compare with ax² + bx + c = 0."},
 {id:"b4",section:"1.3",prompt:"Solve x² − 7x + 12 = 0. Enter the smaller root.",answers:["3"],display:"3",explanation:"(x − 3)(x − 4) = 0; roots are 3 and 4."},
 {id:"b5",section:"1.3",prompt:"Solve x² − 7x + 12 = 0. Enter the larger root.",answers:["4"],display:"4",explanation:"(x − 3)(x − 4) = 0; roots are 3 and 4."},
 {id:"b6",section:"1.4",prompt:"Solve 2x² − 8x = 0. Enter the non-zero root.",answers:["4"],display:"4",explanation:"2x(x − 4) = 0. The other root is 0."},
 {id:"b7",section:"1.4",prompt:"For x² − 2x − 1 = 0, enter the positive root in exact form.",answers:["1+sqrt(2)","1+√2"],display:"1 + √2",explanation:"Using the quadratic formula, x = 1 ± √2."},
 {id:"b8",section:"1.5",prompt:"Find Δ for 2x² + 3x − 2 = 0.",answers:["25"],display:"25",explanation:"Δ = 3² − 4(2)(−2) = 25 > 0."},
 {id:"b9",section:"1.5",prompt:"For x² + 6x + 9 = 0, how many distinct real roots are there?",answers:["1"],display:"1",explanation:"Δ = 0; the root −3 is repeated."},
 {id:"b10",section:"1.6",prompt:"The roots of a monic quadratic are 3 and −2. Enter the coefficient of x.",answers:["-1"],display:"−1",explanation:"(x − 3)(x + 2) = x² − x − 6."},
 {id:"b11",section:"1.6",prompt:"The roots of a monic quadratic are 3 and −2. Enter the constant term.",answers:["-6"],display:"−6",explanation:"The product of the roots is 3 × (−2) = −6."},
 {id:"b12",section:"1.7",prompt:"A rectangle has width x cm, length (x + 2) cm and area 48 cm². Find its positive width in cm.",answers:["6"],display:"6 cm",explanation:"x(x + 2) = 48 gives (x + 8)(x − 6) = 0. Reject x = −8 cm."},
 {id:"b13",section:"1.7",prompt:"The product of two consecutive positive integers is 72. Find the smaller integer.",answers:["8"],display:"8",explanation:"n(n + 1) = 72; (n + 9)(n − 8) = 0. Reject −9."},
 {id:"b14",section:"1.8 Enrichment",prompt:"For z = 5 − 3i, enter its imaginary part (the real-number coefficient of i).",answers:["-3"],display:"−3",explanation:"The coefficient multiplying i is −3."},
];
function normalise(value:string){return value.trim().toLowerCase().replace(/[\s−–]/g,(m)=>m==="−"||m==="–"?"-":"").replace(/[（）]/g,(m)=>m==="（"?"(":")").replace(/\u221a/g,"sqrt").replace(/√\s*(\d+)/g,"sqrt($1)").replace(/^\+/,"");}
function sameAnswer(input:string, accepted:string[]){const value=normalise(input);return accepted.some(a=>{const canonical=normalise(a);if(value===canonical)return true;const simple=/^[+-]?(?:\d+(?:\.\d+)?|\d+\/\d+)$/;if(simple.test(value)&&simple.test(canonical)){const read=(s:string)=>s.includes("/")?Number(s.split("/")[0])/Number(s.split("/")[1]):Number(s);return Math.abs(read(value)-read(canonical))<1e-10;}return false;});}
export default function S4Chapter1Checkpoint(){
 const [truth,setTruth]=useState<Record<string,boolean>>({});const [calculations,setCalculations]=useState<Record<string,string>>({});const [marked,setMarked]=useState(false);
 const total=partA.length+partB.length;
 const answered=partA.filter(q=>truth[q.id]!==undefined).length+partB.filter(q=>calculations[q.id]?.trim()).length;
 const scored=useMemo(()=>[...partA.filter(q=>truth[q.id]===q.correct).map(q=>q.id),...partB.filter(q=>sameAnswer(calculations[q.id]||"",q.answers)).map(q=>q.id)], [truth,calculations]);
 const review=Array.from(new Set([...partA.filter(q=>!scored.includes(q.id)).map(q=>q.section),...partB.filter(q=>!scored.includes(q.id)).map(q=>q.section)]));
 const reset=()=>{setTruth({});setCalculations({});setMarked(false);};
 return <main className="cp"><Link href="/maths/s4/chapter-1" className="back">← Back to Chapter 1</Link><p className="eyebrow">S4 · CHAPTER 1</p><h1>Chapter Checkpoint</h1><p className="intro">Quadratic Equations and Number Systems · {total} marks. Part A checks understanding; Part B checks calculation answers. Section 1.8 is optional enrichment.</p>
 <section className="group"><h2>Part A · Correct or Wrong</h2>{partA.map((q,i)=><div className="question" key={q.id}><p><strong>{i+1}. {q.prompt}</strong> <small>Section {q.section}</small></p><div className="choices">{[true,false].map(v=><label key={String(v)}><input type="radio" name={q.id} checked={truth[q.id]===v} disabled={marked} onChange={()=>setTruth(x=>({...x,[q.id]:v}))}/>{v?"Correct":"Wrong"}</label>)}</div>{marked&&<p className={scored.includes(q.id)?"ok":"error"}>{scored.includes(q.id)?"✓ Correct":"✗ Incorrect"} · Answer: {q.correct?"Correct":"Wrong"}. {q.explanation}</p>}</div>)}</section>
 <section className="group"><h2>Part B · Complete the calculations</h2><p>Work on paper first, then enter the requested result. Use fractions (e.g. 1/3) and exact radicals (e.g. 1+sqrt(2)).</p>{partB.map((q,i)=><div className="question" key={q.id}><label className="problem" htmlFor={q.id}><strong>{i+1}. {q.prompt}</strong><small>Section {q.section}</small></label><input id={q.id} className="answer" type="text" autoComplete="off" value={calculations[q.id]||""} disabled={marked} onChange={e=>setCalculations(x=>({...x,[q.id]:e.target.value}))} aria-label={`Answer to calculation ${i+1}`}/>{marked&&<p className={scored.includes(q.id)?"ok":"error"}>{scored.includes(q.id)?"✓ Correct":"✗ Incorrect"} · Answer: {q.display}. {q.explanation}</p>}</div>)}</section>
 <section className="group" aria-live="polite"><h2>{marked?`Score: ${scored.length} / ${total}`:`Answered ${answered} of ${total}`}</h2>{marked?<><p><strong>Topics to review:</strong> {review.length?review.map(x=>`Section ${x}`).join(", "):"Excellent — all topics correct!"}</p><p className="notice">Automatic marking checks final answers only, not complete HKDSE working or method marks.</p><button onClick={reset}>Try again</button></>:<button disabled={answered!==total} onClick={()=>setMarked(true)}>Check answers</button>} <Link href="/maths/s4/chapter-1" className="return">Back to Chapter 1 →</Link></section>
 <style jsx>{` .cp{max-width:1080px;width:calc(100% - 32px);margin:40px auto 70px;color:#17233b;line-height:1.6;font-size:18px}.back{color:#047857;font-weight:800}.eyebrow{color:#047857;font-weight:900;letter-spacing:.08em;margin-top:28px}h1{font-size:clamp(32px,5vw,44px);margin:4px 0}h2{font-size:clamp(24px,3.5vw,30px)}.intro{color:#64748b}.group{border:1px solid #e2e8f0;border-radius:20px;background:white;padding:26px;margin-top:22px}.question{padding:19px 0;border-top:1px solid #e2e8f0}.question p{margin:8px 0}small{display:block;color:#64748b;font-size:14px}.choices{display:flex;gap:25px;flex-wrap:wrap}.choices label{display:flex;gap:8px;align-items:center;cursor:pointer}.choices input{width:20px;height:20px;accent-color:#047857}.answer{width:min(100%,440px);padding:12px;border:1px solid #94a3b8;border-radius:9px;font:inherit;margin-top:12px}.ok{color:#166534;background:#f0fdf4;padding:10px;border-radius:8px}.error{color:#991b1b;background:#fef2f2;padding:10px;border-radius:8px}.notice{font-size:15px;color:#475569}button{border:0;border-radius:12px;background:#7c3aed;color:white;padding:14px 20px;font-size:17px;font-weight:800;cursor:pointer}button:disabled{background:#94a3b8;cursor:not-allowed}.return{margin-left:15px;color:#047857;font-weight:800}input:focus-visible,button:focus-visible{outline:3px solid #2563eb;outline-offset:2px}@media(max-width:600px){.group{padding:16px}.return{display:block;margin:18px 0 0}}`}</style>
 </main>;
}
