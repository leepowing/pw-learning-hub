"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../zero-and-negative-indices/lesson.module.css";

const items: [string, boolean, string][] = [
  ["a⁻⁴ = 1/a⁴ for a ≠ 0.", true, "A negative index gives the reciprocal."],
  ["1/m⁰ = −1 for m ≠ 0.", false, "The denominator is 1, so the quotient is 1."],
  ["(2/s)⁻¹ = s/2 for s ≠ 0.", true, "Taking the reciprocal swaps numerator and denominator."],
  ["(t⁻²)⁶ = −t¹² for t ≠ 0.", false, "Multiply the indices to get t⁻¹² = 1/t¹²."],
  ["n³ × n⁻¹ ÷ n⁻⁵ = n⁷ for n ≠ 0.", true, "3 + (−1) − (−5) = 7."],
  ["12 × 10⁵ is in scientific notation.", false, "Write it as 1.2 × 10⁶."],
  ["0.99 × 10⁻⁴ is in scientific notation.", false, "Write it as 9.9 × 10⁻⁵."],
  ["1 × 10⁵ exceeds 2 × 10⁴.", true, "100,000 exceeds 20,000."],
  ["6.40 × 10⁷ has three significant figures.", true, "The final zero in 6.40 counts."],
  ["5.23 × 10⁻⁵ equals 0.000523.", false, "Moving five places left gives 0.0000523."],
  ["In 401₁₀, the place value of the digit 0 is 0.", false, "Its place value is 10. Its contribution is 0 × 10."],
  ["The largest place value in 10111₂ is 2⁴.", true, "The five positions run from 2⁴ to 2⁰."],
  ["123₁₀ = 1 × 10³ + 2 × 10² + 3 × 10¹.", false, "123 uses 10², 10¹ and 10⁰."],
  ["100010001₂ = 2⁸ + 2⁴ + 1.", true, "The ones occupy positions 8, 4 and 0 counting from the right, starting at zero."],
  ["25₁₀ and 11001₂ have equal values.", true, "16 + 8 + 1 = 25."]
];
export default function Checkpoint() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [marked, setMarked] = useState(false);
  const score = items.filter(([, correct], i) => answers[i] === correct).length;
  return <main className={styles.lesson}><Link href="/maths/s3/chapter-2">← Chapter 2</Link>
    <h1>Chapter 2 Checkpoint</h1><p>Choose true or false for each statement. Each correct answer earns one mark.</p>
    <form onSubmit={event => { event.preventDefault(); setMarked(true); }}>
    {items.map(([question, correct, explanation], i) => <fieldset key={question} disabled={marked}>
      <legend>{i + 1}. {question}</legend>{[true, false].map(value => <label key={String(value)}>
      <input type="radio" required name={'q' + i} checked={answers[i] === value} onChange={() => setAnswers({...answers, [i]: value})}/>{value ? "True " : "False "}</label>)}
      {marked && <p><strong>{answers[i] === correct ? "Correct." : "Incorrect."}</strong> {explanation}</p>}
    </fieldset>)}
    {marked ? <><p role="status">Score: {score} / {items.length}</p><button type="button" onClick={() => {setMarked(false); setAnswers({});}}>Try again</button></> : <button type="submit">Check answers</button>}</form></main>;
}
