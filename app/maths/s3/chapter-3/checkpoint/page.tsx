"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../section.module.css";

const questions = [
  { text: "800 falls by 15%, then rises by 15%. Find the final value.", labels: ["Final value"], answers: ["782"], why: "800 × 0.85 × 1.15 = 782." },
  { text: "600 grows by 40% each week. Find its value after three weeks.", labels: ["Final value"], answers: ["1646.4"], why: "600 × 1.4³ = 1,646.4." },
  { text: "Find the simple interest on $3,000 at 2% p.a. for eight months.", labels: ["Interest ($)"], answers: ["40"], why: "3,000 × 0.02 × 8/12 = $40." },
  { text: "A loan at 6% p.a. is compounded half-yearly for five years. Complete A = P(1 + i)ⁿ.", labels: ["i (decimal)", "n (periods)"], answers: ["0.03","10"], why: "Each half-year earns 6% ÷ 2 = 3%. Five years contain ten periods." },
  { text: "Andy and Bonnie each deposit $8,000 for one year at 2.5% p.a. Andy earns monthly compound interest and Bonnie earns quarterly compound interest. Who earns less?", labels: ["Name"], answers: ["Bonnie"], why: "Monthly compounding adds interest to the balance sooner. Bonnie earns less." },
  { text: "Split $112,000 of chargeable income across these bands: first $50,000, next $50,000, then the remainder.", labels: ["First band ($)", "Second band ($)", "Remainder ($)"], answers: ["50000","50000","12000"], why: "$50,000 + $50,000 + $12,000 = $112,000." },
  { text: "If two positive parts of a total increase by 10% and 20%, the total increases by 30%.", answers: ["False"], why: "For equal parts of $100, the new total is $230. That is a 15% increase." },
  { text: "A growth rate of 30% per period gives a growth factor of 1.3.", answers: ["True"], why: "100% + 30% = 130% = 1.3." },
  { text: "A bag loses 4% each year. If it is now worth x dollars, seven years ago it was worth x × 1.04⁷ dollars.", answers: ["False"], why: "Reverse seven reductions by dividing the current value by 0.96⁷." },
  { text: "Use this practice tax schedule: first $50,000 at 2%, next $50,000 at 6%. Tax on chargeable income of $76,000 is $2,560.", answers: ["True"], why: "$50,000 × 2% + $26,000 × 6% = $1,000 + $1,560." }
];

function matches(value: string, answer: string) {
  if (Number.isNaN(Number(answer))) return value.trim().toLowerCase() === answer.toLowerCase();
  const input = value.trim();
  return /^(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(input) && input !== "" && Number(input.replaceAll(",", "")) === Number(answer);
}

export default function Checkpoint() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [marked, setMarked] = useState(false);
  const correct = questions.map((q, i) => q.answers.every((a, j) => matches(values[i + "-" + j] ?? "", a)));
  function update(key: string, value: string) {
    setValues(previous => ({...previous, [key]: value}));
  }
  return <main className={styles.lesson}><Link href="/maths/s3/chapter-3">← Chapter 3</Link>
    <h1>Chapter 3 Checkpoint</h1><p>Complete questions 1–6, then choose true or false for questions 7–10. Each question earns one mark.</p>
    <form onSubmit={event => {event.preventDefault(); setMarked(true);}}>
      {questions.map((q, i) => <fieldset key={i} disabled={marked}><legend>{i + 1}. {q.text}</legend>
        {q.labels ? q.labels.map((label, j) => <p key={label}><label>{label} <input required value={values[i + "-" + j] ?? ""} onChange={e => update(i + "-" + j, e.target.value)}/></label></p>) :
          ["True","False"].map(choice => <label key={choice}><input required type="radio" name={"q" + i} checked={values[i + "-0"] === choice} onChange={() => update(i + "-0", choice)}/>{choice} </label>)}
        {marked && <p><strong>{correct[i] ? "Correct." : "Incorrect."}</strong> {q.why}</p>}</fieldset>)}
      {marked ? <><p role="status">Score: {correct.filter(Boolean).length} / 10</p><button type="button" onClick={() => {setMarked(false); setValues({});}}>Try again</button></> : <button type="submit">Check answers</button>}
    </form></main>;
}
