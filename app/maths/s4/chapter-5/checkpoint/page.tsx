"use client";
import Link from "next/link";
import {useState} from "react";
const statements = [
  {
    "topic": "5.1",
    "statement": "The remainder may have the same degree as a nonzero divisor.",
    "correct": false,
    "explanation": "The remainder must have strictly smaller degree."
  },
  {
    "topic": "5.1",
    "statement": "A missing x² term in a cubic dividend can be written as 0x².",
    "correct": true,
    "explanation": "This keeps the long-division columns aligned."
  },
  {
    "topic": "5.1",
    "statement": "Polynomial long division uses repeated leading-term division and subtraction.",
    "correct": true,
    "explanation": "Repeat until the remainder degree is sufficiently small."
  },
  {
    "topic": "5.2",
    "statement": "For P=DQ+R, the remainder is subtracted when reconstructing P.",
    "correct": false,
    "explanation": "The division identity adds the remainder."
  },
  {
    "topic": "5.2",
    "statement": "When dividing by a quadratic, the remainder can be linear.",
    "correct": true,
    "explanation": "The remainder degree must be less than 2."
  },
  {
    "topic": "5.3",
    "statement": "When P(x) is divided by x−4, its remainder is P(−4).",
    "correct": false,
    "explanation": "Use P(4), the value that makes x−4 zero."
  },
  {
    "topic": "5.3",
    "statement": "The remainder on division by 3x−2 is P(2/3).",
    "correct": true,
    "explanation": "Solve 3x−2=0 first."
  },
  {
    "topic": "5.4",
    "statement": "If P(5)=0, then x−5 is a factor of P(x).",
    "correct": true,
    "explanation": "This is the factor theorem."
  },
  {
    "topic": "5.4",
    "statement": "If x+3 is a factor of P(x), then P(3)=0.",
    "correct": false,
    "explanation": "x+3=0 at x=−3, so P(−3)=0."
  },
  {
    "topic": "5.4",
    "statement": "A zero remainder means the divisor is an exact factor.",
    "correct": true,
    "explanation": "Exact divisibility is equivalent to remainder zero."
  }
];
const exercises = [
  {
    "topic": "5.1",
    "question": "Find the remainder when x²+5x+6 is divided by x+2.",
    "accepted": [
      "0"
    ],
    "explanation": "(x+2)(x+3) gives remainder 0."
  },
  {
    "topic": "5.1",
    "question": "Find the quotient of x²+5x+6 on division by x+2.",
    "accepted": [
      "x+3",
      "x + 3"
    ],
    "explanation": "The quotient is x+3."
  },
  {
    "topic": "5.1",
    "question": "Find the remainder when x²+1 is divided by x+1.",
    "accepted": [
      "2"
    ],
    "explanation": "At x=−1 the dividend equals 2."
  },
  {
    "topic": "5.2",
    "question": "P(x)=(x−2)(x+3)+7. Find the remainder on division by x−2.",
    "accepted": [
      "7"
    ],
    "explanation": "Compare with P=DQ+R."
  },
  {
    "topic": "5.2",
    "question": "Find P(0) for P(x)=(x−1)(2x²+3x+4)+5.",
    "accepted": [
      "1"
    ],
    "explanation": "P(0)=−4+5=1."
  },
  {
    "topic": "5.3",
    "question": "Find the remainder of x³+2x+1 divided by x−1.",
    "accepted": [
      "4"
    ],
    "explanation": "P(1)=1+2+1=4."
  },
  {
    "topic": "5.3",
    "question": "Find the remainder of x²+1 divided by x+2.",
    "accepted": [
      "5"
    ],
    "explanation": "P(−2)=4+1=5."
  },
  {
    "topic": "5.3",
    "question": "Find the remainder of 9x²−1 divided by 3x−1.",
    "accepted": [
      "0"
    ],
    "explanation": "P(1/3)=1−1=0."
  },
  {
    "topic": "5.4",
    "question": "For P(x)=x³−6x²+11x−6, find P(1).",
    "accepted": [
      "0"
    ],
    "explanation": "1−6+11−6=0; x−1 is a factor."
  },
  {
    "topic": "5.4",
    "question": "Find the remainder of x²−2x+3 divided by x−2.",
    "accepted": [
      "3"
    ],
    "explanation": "P(2)=4−4+3=3."
  },
  {
    "topic": "5.5",
    "question": "Optional enrichment: find the value of x³−8 at x=2.",
    "accepted": [
      "0"
    ],
    "explanation": "2³−8=0; x−2 divides x³−8."
  },
  {
    "topic": "5.5",
    "question": "Optional enrichment: synthetic divide x²+3x+2 by x+1. Find the remainder.",
    "accepted": [
      "0"
    ],
    "explanation": "Using h=−1 yields remainder 0."
  }
];
export default function Chapter5Checkpoint(){
 const [choices,setChoices]=useState<Record<number,string>>({});
 const [values,setValues]=useState<Record<number,string>>({});
 const [submitted,setSubmitted]=useState(false);
 const [includeEnrichment,setIncludeEnrichment]=useState(false);
 const active=includeEnrichment?exercises:exercises.filter(q=>q.topic!=="5.5");
 const count=statements.length+active.length;
 const answered=statements.filter((_,i)=>choices[i]!==undefined).length+active.filter((_,i)=>(values[i]||"").trim().length>0).length;
 const norm=(s:string)=>s.toLowerCase().trim().replaceAll("−","-").replace(/\s+/g,"");
 const verdicts=[...statements.map((q,i)=>choices[i]===String(q.correct)),...active.map((q,i)=>q.accepted.some(a=>norm(a)===norm(values[i]||"")))];
 const score=verdicts.filter(Boolean).length;
 const missed=[...new Set([...statements,...active].filter((_,i)=>!verdicts[i]).map(q=>q.topic))];
 return <main className="check"><Link href="/maths/s4/chapter-5">&larr; Back to Chapter 5</Link><h1>Chapter 5 Checkpoint</h1><p>More about Polynomials · Answered {answered} of {count}</p><label className="toggle"><input type="checkbox" checked={includeEnrichment} disabled={submitted} onChange={e=>{setIncludeEnrichment(e.target.checked);setValues({});}}/> Include Section 5.5 optional enrichment (2 questions)</label><h2>Part A · Correct or Wrong</h2>
 {statements.map((q,i)=><article className="item" key={i}><p>{i+1}. {q.statement}</p><label><input type="radio" name={`a${i}`} checked={choices[i]==="true"} disabled={submitted} onChange={()=>setChoices(v=>({...v,[i]:"true"}))}/> Correct</label><label><input type="radio" name={`a${i}`} checked={choices[i]==="false"} disabled={submitted} onChange={()=>setChoices(v=>({...v,[i]:"false"}))}/> Wrong</label>{submitted&&<p className={verdicts[i]?"right":"wrong"}>{verdicts[i]?"Correct":"Incorrect"} · {q.explanation}</p>}</article>)}
 <h2>Part B · Complete the calculations</h2>{active.map((q,i)=><article className="item" key={i}><p>{i+1}. {q.question}</p><input type="text" aria-label={`Calculation answer ${i+1}`} value={values[i]||""} disabled={submitted} onChange={e=>setValues(v=>({...v,[i]:e.target.value}))}/>{submitted&&<p className={verdicts[statements.length+i]?"right":"wrong"}>{verdicts[statements.length+i]?"Correct":"Incorrect"} · {q.explanation}</p>}</article>)}
 {!submitted?<button disabled={answered!==count} onClick={()=>setSubmitted(true)}>Check answers</button>:<section className="results"><h2>Your score: {score} / {count}</h2><p>Automatic marking checks final answers only, not HKDSE method marks. Equivalent algebraic expressions beyond the listed formats may need manual review.</p><h3>Topics to review</h3><p>{missed.length?missed.join(" · "):"All items correct."}</p><button onClick={()=>{setChoices({});setValues({});setSubmitted(false)}}>Try again</button></section>}
 <style jsx>{`.check{max-width:950px;width:calc(100% - 32px);margin:40px auto 65px;color:#172338;font-size:18px}.check a{color:#047857;font-weight:800}h1{font-size:clamp(32px,5vw,44px)}h2{font-size:28px;margin-top:30px}.item{background:white;padding:22px;margin:13px 0;border:1px solid #e2e8f0;border-radius:14px;line-height:1.7}.item label{display:inline-flex;align-items:center;gap:6px;margin:0 24px 0 0}.item input[type=text]{padding:10px;font-size:18px;border:1px solid #94a3b8;border-radius:8px;max-width:100%}.toggle{display:flex;align-items:center;gap:9px;background:#eff6ff;padding:15px;border-radius:12px}button{background:#7c3aed;color:white;border:0;border-radius:10px;padding:13px 22px;font-weight:800;cursor:pointer;font-size:17px}button:disabled{opacity:.4;cursor:not-allowed}.right{color:#047857}.wrong{color:#b91c1c}.results{background:#eff6ff;padding:25px;border-radius:14px;margin:25px 0}`}</style></main>
}
