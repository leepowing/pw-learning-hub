"use client";
import Link from "next/link";
import {useState} from "react";
const statements = [
  {
    "topic": "4.1",
    "statement": "The graph of y=2x²−3 opens upwards.",
    "correct": true,
    "explanation": "The coefficient of x² is positive."
  },
  {
    "topic": "4.1",
    "statement": "The y-intercept of y=x²−3x+7 is (7,0).",
    "correct": false,
    "explanation": "Set x=0: the y-intercept is (0,7)."
  },
  {
    "topic": "4.1",
    "statement": "For y=x²−4x+3, the axis of symmetry is x=2.",
    "correct": true,
    "explanation": "x=−b/(2a)=4/2=2."
  },
  {
    "topic": "4.1",
    "statement": "When Δ<0 a real quadratic graph cannot be drawn.",
    "correct": false,
    "explanation": "It can be drawn but has no x-axis intersections."
  },
  {
    "topic": "4.2",
    "statement": "The vertex of y=(x−4)²+2 is (4,2).",
    "correct": true,
    "explanation": "Vertex form gives (h,k)=(4,2)."
  },
  {
    "topic": "4.2",
    "statement": "y=−(x+3)²+5 has a minimum value of 5.",
    "correct": false,
    "explanation": "It opens downwards, so 5 is its maximum."
  },
  {
    "topic": "4.2",
    "statement": "The axis of symmetry of y=3(x+2)²−1 is x=−2.",
    "correct": true,
    "explanation": "The squared term vanishes at x=−2."
  },
  {
    "topic": "4.3",
    "statement": "A root of f(x)=0 is the y-coordinate where the graph crosses the x-axis.",
    "correct": false,
    "explanation": "It is the x-coordinate."
  },
  {
    "topic": "4.3",
    "statement": "The equation f(x)=3 can be solved from intersections of y=f(x) and y=3.",
    "correct": true,
    "explanation": "Both functions have the same y-value at an intersection."
  },
  {
    "topic": "4.3",
    "statement": "A parabola touching the x-axis at one point has two distinct real roots.",
    "correct": false,
    "explanation": "It has one repeated real root."
  }
];
const exercises = [
  {
    "topic": "4.1",
    "question": "For y=−2x²+3x+4, give the y-intercept as a number.",
    "accepted": [
      "4"
    ],
    "explanation": "At x=0, y=4."
  },
  {
    "topic": "4.1",
    "question": "Find the axis x-value for y=x²−6x+2.",
    "accepted": [
      "3"
    ],
    "explanation": "x=−(−6)/(2×1)=3."
  },
  {
    "topic": "4.1",
    "question": "Find the discriminant of x²−4x+3=0.",
    "accepted": [
      "4"
    ],
    "explanation": "Δ=16−12=4."
  },
  {
    "topic": "4.1",
    "question": "How many x-axis intersections has y=x²+2x+5?",
    "accepted": [
      "0"
    ],
    "explanation": "Δ=4−20=−16."
  },
  {
    "topic": "4.2",
    "question": "For y=(x−3)²−7, give the x-coordinate of the vertex.",
    "accepted": [
      "3"
    ],
    "explanation": "The vertex is (3,−7)."
  },
  {
    "topic": "4.2",
    "question": "For y=−2(x+1)²+6, find the maximum value.",
    "accepted": [
      "6"
    ],
    "explanation": "The graph opens downwards and its vertex y-value is 6."
  },
  {
    "topic": "4.2",
    "question": "Rewrite y=x²−4x+1 as y=(x−2)²+k. Find k.",
    "accepted": [
      "-3",
      "−3"
    ],
    "explanation": "x²−4x+1=(x−2)²−3."
  },
  {
    "topic": "4.2",
    "question": "For y=3(x+2)²−1, give the vertex x-coordinate.",
    "accepted": [
      "-2",
      "−2"
    ],
    "explanation": "Vertex is (−2,−1)."
  },
  {
    "topic": "4.3",
    "question": "For y=x²−5x+6, find the smaller x-intercept.",
    "accepted": [
      "2"
    ],
    "explanation": "(x−2)(x−3)=0."
  },
  {
    "topic": "4.3",
    "question": "For y=x²−5x+6, find the larger x-intercept.",
    "accepted": [
      "3"
    ],
    "explanation": "(x−2)(x−3)=0."
  },
  {
    "topic": "4.3",
    "question": "How many distinct real roots does (x−1)²=0 have?",
    "accepted": [
      "1"
    ],
    "explanation": "The curve touches the x-axis at x=1."
  },
  {
    "topic": "4.3",
    "question": "Find the positive solution of x²−4=0.",
    "accepted": [
      "2"
    ],
    "explanation": "x=±2; positive root is 2."
  }
];
export default function Chapter4Checkpoint(){
 const [choices,setChoices]=useState<Record<number,string>>({});
 const [values,setValues]=useState<Record<number,string>>({});
 const [submitted,setSubmitted]=useState(false);
 const count=statements.length+exercises.length;
 const answered=statements.filter((_,i)=>choices[i]!==undefined).length+exercises.filter((_,i)=>(values[i]||"").trim().length>0).length;
 const normalize=(s:string)=>s.toLowerCase().trim().replaceAll("−","-").replace(/\s/g,"");
 const verdicts=[...statements.map((q,i)=>choices[i]===String(q.correct)),...exercises.map((q,i)=>q.accepted.some(a=>normalize(a)===normalize(values[i]||"")))];
 const score=verdicts.filter(Boolean).length;
 const missed=[...new Set([...statements,...exercises].filter((_,i)=>!verdicts[i]).map(q=>q.topic))];
 return <main className="check"><Link href="/maths/s4/chapter-4">&larr; Back to Chapter 4</Link><h1>Chapter 4 Checkpoint</h1><p>Quadratic Functions and their Graphs · Answered {answered} of {count}</p><h2>Part A · Correct or Wrong</h2>
 {statements.map((q,i)=><article className="item" key={i}><p>{i+1}. {q.statement}</p><label><input type="radio" name={`a${i}`} checked={choices[i]==="true"} disabled={submitted} onChange={()=>setChoices(v=>({...v,[i]:"true"}))}/> Correct</label><label><input type="radio" name={`a${i}`} checked={choices[i]==="false"} disabled={submitted} onChange={()=>setChoices(v=>({...v,[i]:"false"}))}/> Wrong</label>{submitted&&<p className={verdicts[i]?"right":"wrong"}>{verdicts[i]?"Correct":"Incorrect"} · {q.explanation}</p>}</article>)}
 <h2>Part B · Complete the calculations</h2>{exercises.map((q,i)=><article className="item" key={i}><p>{i+1}. {q.question}</p><input type="text" aria-label={`Answer to calculation ${i+1}`} value={values[i]||""} disabled={submitted} onChange={e=>setValues(v=>({...v,[i]:e.target.value}))}/>{submitted&&<p className={verdicts[statements.length+i]?"right":"wrong"}>{verdicts[statements.length+i]?"Correct":"Incorrect"} · {q.explanation}</p>}</article>)}
 {!submitted?<button disabled={answered!==count} onClick={()=>setSubmitted(true)}>Check answers</button>:<section className="results"><h2>Your score: {score} / {count}</h2><p>Automatic marking checks final answers only; it does not award HKDSE working or method marks.</p><h3>Topics to review</h3><p>{missed.length?missed.join(" · "):"All items correct."}</p><button onClick={()=>{setChoices({});setValues({});setSubmitted(false)}}>Try again</button></section>}
 <style jsx>{`.check{max-width:950px;width:calc(100% - 32px);margin:40px auto 65px;color:#172338;font-size:18px}.check a{color:#047857;font-weight:800}h1{font-size:clamp(32px,5vw,44px)}h2{font-size:28px;margin-top:30px}.item{background:white;padding:22px;margin:13px 0;border:1px solid #e2e8f0;border-radius:14px;line-height:1.7}.item label{display:inline-flex;align-items:center;gap:6px;margin:0 24px 0 0}.item input[type=text]{padding:10px;font-size:18px;border:1px solid #94a3b8;border-radius:8px;max-width:100%}button{background:#7c3aed;color:white;border:0;border-radius:10px;padding:13px 22px;font-weight:800;cursor:pointer;font-size:17px}button:disabled{opacity:.4;cursor:not-allowed}.right{color:#047857}.wrong{color:#b91c1c}.results{background:#eff6ff;padding:25px;border-radius:14px;margin:25px 0}`}</style></main>
}
