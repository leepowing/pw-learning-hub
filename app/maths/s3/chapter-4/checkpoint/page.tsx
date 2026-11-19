"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../section.module.css";

import Ray from "../Ray";
const questions = [
  {
    "text": "Alex is aged x years and is under 13.",
    "options": [
      "x < 13",
      "x ≤ 13",
      "x > 13"
    ],
    "answer": "x < 13",
    "why": "The age 13 is excluded."
  },
  {
    "text": "A cat weighs x kg and exceeds 2 kg.",
    "options": [
      "x ≥ 2",
      "x < 2",
      "x > 2"
    ],
    "answer": "x > 2",
    "why": "Exceeds is a strict lower bound."
  },
  {
    "text": "A jar holds x litres, at most 4 litres.",
    "options": [
      "x ≥ 4",
      "x ≤ 4",
      "x < 4"
    ],
    "answer": "x ≤ 4",
    "why": "Exactly 4 litres is allowed."
  },
  {
    "text": "Read the number line.",
    "options": [
      "y < -2",
      "y > -2",
      "y ≤ -2"
    ],
    "answer": "y < -2",
    "why": "Open endpoint, ray to the left."
  },
  {
    "text": "Read the number line.",
    "options": [
      "y < -3",
      "y > -3",
      "y ≥ -3"
    ],
    "answer": "y ≥ -3",
    "why": "Filled endpoint, ray to the right."
  },
  {
    "text": "Read the number line.",
    "options": [
      "y > 4",
      "y ≤ 4",
      "y < 4"
    ],
    "answer": "y ≤ 4",
    "why": "Filled endpoint, ray to the left."
  },
  {
    "text": "Read the number line.",
    "options": [
      "y > 1",
      "y < 1",
      "y ≤ 1"
    ],
    "answer": "y > 1",
    "why": "Open endpoint, ray to the right."
  },
  {
    "text": "If y > 4, then y > 3.",
    "options": [
      "False",
      "True"
    ],
    "answer": "True",
    "why": "Every number above 4 also exceeds 3."
  },
  {
    "text": "If a ≤ 5, then a + 1 ≤ 6.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True",
    "why": "Add 1 to both sides."
  },
  {
    "text": "If x ≥ −2, then 2x ≤ −4.",
    "options": [
      "True",
      "False"
    ],
    "answer": "False",
    "why": "Doubling gives 2x ≥ −4. For example, x = 0 disproves the claim."
  },
  {
    "text": "If x < y, then −x/3 > −y/3.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True",
    "why": "Multiplication by −1/3 reverses the sign."
  },
  {
    "text": "Solve 2 − x ≤ 4.",
    "options": [
      "x ≥ 2",
      "x ≥ −2",
      "x ≤ −2"
    ],
    "answer": "x ≥ −2",
    "why": "Subtract 2 and divide by −1."
  },
  {
    "text": "Which graph represents the solution of 2 − x ≤ 4?",
    "options": [
      "Filled at −2, right",
      "Open at −2, right",
      "Filled at −2, left"
    ],
    "answer": "Filled at −2, right",
    "why": "−2 satisfies equality and all larger values work."
  },
  {
    "text": "A parallelogram has height 5 cm and area at least 60 cm². Find the least base length.",
    "options": [
      "12 cm²",
      "More than 12 cm",
      "12 cm"
    ],
    "answer": "12 cm",
    "why": "Area = base × height, so 5x ≥ 60 and x ≥ 12."
  },
  {
    "text": "Solve (x + 2)/(−3) > 2.",
    "options": [
      "x < 4",
      "x < −8",
      "x > −8"
    ],
    "answer": "x < −8",
    "why": "Multiply by −3 to get x + 2 < −6."
  },
  {
    "text": "Find the smallest integer n such that 3n > 19.",
    "options": [
      "7",
      "6",
      "8"
    ],
    "answer": "7",
    "why": "The first integer above 19/3 is 7."
  }
];

export default function Checkpoint() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [marked, setMarked] = useState(false);
  const correct = questions.map((q, i) => values[i] === q.answer);
  function update(key: string, value: string) {
    setValues(previous => ({...previous, [key]: value}));
  }
  return <main className={styles.lesson}><Link href="/maths/s3/chapter-4">← Chapter 4</Link>
    <h1>Chapter 4 Checkpoint</h1><p>Choose one answer per question. Each correct answer earns one mark.</p>
    <form onSubmit={event => {event.preventDefault(); setMarked(true);}}>
      {questions.map((q, i) => <fieldset key={i} disabled={marked}><legend>{i + 1}. {q.text}</legend>
        {i >= 3 && i <= 6 && <Ray value={[-2,-3,4,1][i-3]} right={i===4 || i===6} closed={i===4 || i===5}/>}
        <select required aria-label={"Answer to question "+(i+1)} value={values[i] ?? ""} onChange={e=>update(String(i),e.target.value)}><option value="">Choose an answer</option>{q.options.map(option=><option key={option}>{option}</option>)}</select>
        {marked && <p><strong>{correct[i] ? "Correct." : "Incorrect."}</strong> {q.why}</p>}</fieldset>)}
      {marked ? <><p role="status">Score: {correct.filter(Boolean).length} / {questions.length}</p><button type="button" onClick={() => {setMarked(false); setValues({});}}>Try again</button></> : <button type="submit">Check answers</button>}
    </form></main>;
}
