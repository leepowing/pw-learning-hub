"use client";
import Link from "next/link";
import { useState } from "react";

const signs = ["<", "≤", ">", "≥"] as const;
type Sign = typeof signs[number];

function NumberLine() {
  const [sign, setSign] = useState<Sign>(">");
  const [boundary, setBoundary] = useState(2);
  const pos = (n: number) => 230 + 40 * n;
  const right = sign === ">" || sign === "≥";
  const closed = sign === "≤" || sign === "≥";
  const end = right ? 445 : 15;
  return <article>
    <label>Relation <select value={sign} onChange={e => setSign(e.target.value as Sign)}>{signs.map(s => <option key={s}>{s}</option>)}</select></label>
    <label>Boundary: {boundary}<input type="range" min="-4" max="4" value={boundary} onChange={e => setBoundary(Number(e.target.value))}/></label>
    <svg viewBox="0 0 460 95" width="100%" role="img" aria-label={`x ${sign} ${boundary}: ${closed ? "closed" : "open"} endpoint, arrow to the ${right ? "right" : "left"}`}>
      <path d="M10 56H450" stroke="#475569"/>
      {Array.from({length:11}, (_,i) => i-5).map(n => <g key={n}><path d={`M${pos(n)} 51v10`} stroke="#475569"/><text x={pos(n)} y="82" textAnchor="middle">{n}</text></g>)}
      <path d={`M${pos(boundary)} 30V51`} stroke="#94a3b8"/>
      <path d={`M${pos(boundary)} 30H${end}`} stroke="#0f766e" strokeWidth="4"/>
      <path d={`M${end} 30l${right?-10:10} -6v12Z`} fill="#0f766e"/>
      <circle cx={pos(boundary)} cy="30" r="6" stroke="#0f766e" strokeWidth="3" fill={closed?"#0f766e":"white"}/>
    </svg>
    <p aria-live="polite">x {sign} {boundary}. The arrow points {right?"right":"left"}. The endpoint is {closed?"included":"excluded"}.</p>
  </article>;
}

const practice = [
  ["Compare −3.2 with −3.8.", ">", "−3.2 lies farther right."],
  ["A box holds at most 18 books. Compare the book count with 18.", "≤", "Exactly 18 books will fit."],
  ["You have $75 and spend p dollars. At least $12 remains. Compare 75 − p with 12.", "≥", "At least includes $12."],
  ["A ray points left from an open circle at −1. Compare x with −1.", "<", "Left means smaller. The open endpoint excludes −1."],
  ["If p ≤ q and q ≤ 7, which relation between p and 7 is guaranteed?", "≤", "Chain the two comparisons. Equality is possible."],
  ["If a > b, compare a − 6 with b − 6.", ">", "Both numbers move six units left."],
  ["If u < v, compare u/4 with v/4.", "<", "Dividing by positive 4 preserves order."],
  ["If h < 0, compare 5h with 8h.", ">", "Multiplying 5 < 8 by negative h reverses the sign."]
];

export default function BasicKnowledge() {
  const [answers,setAnswers] = useState<Record<number,string>>({});
  const [marked,setMarked] = useState(false);
  return <main className="inequalities">
    <Link href="/maths/s3/chapter-4">← Back to Chapter 4</Link>
    <header><p className="eyebrow">S3 · SECTION 4.1</p><h1>Basic Knowledge of Inequalities</h1><p>Use words, symbols and number lines to describe a whole set of possible values.</p></header>
    <section id="warmup"><h2>4.0 Pre-Learning</h2><p>Numbers increase from left to right. Starting at −4 and moving two units right takes you to −2, so −4 &lt; −2.</p><details><summary>Put 0, −½, −3 and 2 in ascending order.</summary><p>−3 &lt; −½ &lt; 0 &lt; 2. The negative number closest to zero is the larger negative number.</p></details></section>
    <section><h2>1. Translate words into inequalities</h2><table><thead><tr><th>Condition</th><th>In symbols</th></tr></thead><tbody>
      {[["Fewer than 12 seats","s < 12"],["Exceeds 30 degrees","t > 30"],["At least 8 points","p ≥ 8"],["No more than 6 tickets","n ≤ 6"],["Any value except zero","x ≠ 0"]].map(([words,symbols])=><tr key={words}><td>{words}</td><td>{symbols}</td></tr>)}
    </tbody></table><h3>Worked example</h3><p>A club charges $4 per visit. A student has a budget of $22. For n visits the cost is 4n dollars, so 4n ≤ 22. Five visits cost $20 and fit the budget. Six cost $24 and exceed it.</p></section>
    <section><h2>2. Show the solutions on a number line</h2><p>A solution makes the comparison true when substituted. For x &gt; 2, both 2.1 and 8 work, while 2 does not. The ray shows every real solution, including the values between ticks.</p><p>Switch from &gt; to ≥ below. Watch the endpoint as the arrow keeps its direction. Then try a negative boundary and a left-pointing ray.</p><NumberLine/></section>
    <section><h2>3. Use the properties of inequalities</h2>
    <table><thead><tr><th>Working</th><th>Reason</th></tr></thead><tbody>
    <tr><td>a &gt; b and b &gt; c imply a &gt; c.</td><td>Chain comparisons in the same direction.</td></tr>
    <tr><td>x + 4 ≤ 9 gives x ≤ 5.</td><td>Subtract 4 from both sides. Adding or subtracting the same number preserves order.</td></tr>
    <tr><td>x &gt; 3 gives 5x &gt; 15.</td><td>Multiplying or dividing by a positive number preserves order.</td></tr>
    <tr><td>−4y ≤ 8 gives y ≥ −2.</td><td>Divide both sides by −4. Multiplying or dividing by a negative number reverses order.</td></tr>
    </tbody></table><details><summary>Why does a negative multiplier reverse the sign?</summary><p>Start with 2 &lt; 5. Multiplying by −1 reflects both points across zero. Now −2 lies to the right of −5, so −2 &gt; −5.</p></details></section>
    <section><h2>Check your understanding</h2><form onSubmit={e=>{e.preventDefault();setMarked(true);}}>
    {practice.map(([question,correct,why],i)=><div className="question" key={question}><label>{i+1}. {question} <select required disabled={marked} value={answers[i]??""} onChange={e=>setAnswers({...answers,[i]:e.target.value})}><option value="">Choose a sign</option>{signs.map(s=><option key={s}>{s}</option>)}</select></label>{marked&&<p>{answers[i]===correct?"Correct.":"Answer: "+correct+"."} {why}</p>}</div>)}
    {marked?<><p role="status">Score: {practice.filter((q,i)=>q[1]===answers[i]).length} / {practice.length}</p><button type="button" onClick={()=>{setMarked(false);setAnswers({});}}>Try again</button></>:<button>Check answers</button>}</form></section>
    <Link href="/maths/s3/chapter-4">← Back to Chapter 4</Link>
<style jsx global>{`
.inequalities{max-width:1050px;width:calc(100% - 32px);margin:32px auto 70px;color:#24364b;font-family:Arial,sans-serif;line-height:1.7}.inequalities *{box-sizing:border-box}.inequalities a{color:#0f766e;font-weight:700}.inequalities header{background:#ecfeff;border:1px solid #a5f3fc;padding:32px;border-radius:24px;margin-top:24px}.inequalities h1{font-size:clamp(32px,5vw,48px);line-height:1.2}.inequalities h2{font-size:27px;line-height:1.35}.inequalities section{padding:28px;border:1px solid #dce5ee;border-radius:20px;background:#fff;margin:24px 0}.inequalities .eyebrow{color:#0e7490;font-weight:700;font-size:13px;letter-spacing:.08em}.inequalities svg{max-width:580px;margin:20px auto}.inequalities .formula{background:#f5f3ff;color:#5b21b6;padding:16px;border-radius:12px;font-weight:700}.inequalities .reference{font-family:Georgia,serif;font-style:italic}.inequalities table{border-collapse:collapse;width:100%;table-layout:fixed}.inequalities td,.inequalities th{border:1px solid #dce5ee;padding:12px;text-align:left;overflow-wrap:anywhere}.inequalities th{background:#f0fdfa}.inequalities td:first-child,.inequalities th:first-child{width:65%}.inequalities label{display:block;font-weight:700}.inequalities input[type=range]{width:100%;min-height:40px;accent-color:#0f766e}.inequalities .question{padding:20px 0;border-bottom:1px solid #e2e8f0}.inequalities input[type=text]{width:140px;padding:10px;font:inherit;border:1px solid #64748b;border-radius:8px;margin:10px 0}.inequalities button{padding:12px 20px;border:1px solid #0f766e;background:#0f766e;color:white;font:inherit;border-radius:10px;margin-top:18px;cursor:pointer}.inequalities button:focus-visible,.inequalities input:focus-visible{outline:3px solid #d97706;outline-offset:3px}@media(max-width:600px){.inequalities section,.inequalities header{padding:18px}.inequalities td,.inequalities th{padding:8px;font-size:14px}}
`}</style></main>}
