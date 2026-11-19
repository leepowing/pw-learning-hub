"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../chapter.module.css";

const questions = [
  ["x² − 16y² equals (x − 4y)².", ["True", "False"], 1, "The square has a middle term −8xy. Use (x + 4y)(x − 4y)."],
  ["x² − 14x + 49 is a perfect square.", ["True", "False"], 0, "It equals (x − 7)²."],
  ["x + 3 is a factor of x² + 7x + 12.", ["True", "False"], 0, "The other factor is x + 4."],
  ["x − 2 is a factor of 3x² − 4x − 3.", ["True", "False"], 1, "Substituting 2 gives 1. A factor x − 2 would give zero."],
  ["Factorize 64 − t².", ["(8 − t)²", "(8 − t)(8 + t)", "(t − 8)(t + 8)"], 1, "64 and t² are squares separated by subtraction."],
  ["Factorize u² − 18u + 81.", ["(u − 9)²", "(u + 9)²", "(u − 9)(u + 9)"], 0, "−2 × u × 9 gives −18u."],
  ["Factorize 16x² + 40x + 25.", ["(4x − 5)²", "(8x + 5)²", "(4x + 5)²"], 2, "Twice 4x times 5 is 40x."],
  ["Factorize x² + 11x + 28.", ["(x + 2)(x + 14)", "(x + 4)(x + 7)", "(x − 4)(x − 7)"], 1, "4 and 7 multiply to 28 and add to 11."],
  ["Factorize x² − 8x + 15.", ["(x − 3)(x − 5)", "(x + 3)(x + 5)", "(x − 1)(x − 15)"], 0, "−3 and −5 have sum −8."],
  ["Factorize x² + 2xy − 24y².", ["(x − 6y)(x + 4y)", "(x + 8y)(x − 3y)", "(x + 6y)(x − 4y)"], 2, "The cross-products give 6xy − 4xy."],
  ["Factorize 2x² + x − 6.", ["(2x − 3)(x + 2)", "(2x + 3)(x − 2)", "(2x − 1)(x + 6)"], 0, "4x − 3x gives x."],
  ["Factorize 6x² + 17x + 5.", ["(6x + 1)(x + 5)", "(3x + 1)(2x + 5)", "(3x + 5)(2x + 1)"], 1, "15x + 2x gives 17x."],
  ["Factorize 6x² − xy − 2y².", ["(3x − y)(2x + 2y)", "(3x + 2y)(2x − y)", "(3x − 2y)(2x + y)"], 2, "3xy − 4xy gives −xy."]
] as const;

export default function Checkpoint() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const count = Object.keys(answers).length;
  return <main className={styles.chapter}>
    <Link href="/maths/s3/chapter-1">← Chapter 1 overview</Link>
    <header><p>S3 · Chapter 1</p><h1>Chapter Checkpoint</h1><p>More about Factorization · 13 questions · 13 marks</p></header>
    {questions.map(([prompt, options, correct, reason], i) => <section key={prompt}>
      <fieldset><legend>{i + 1}. {prompt}</legend>{options.map((option, j) =>
        <label key={option} style={{display:"block", padding:"4px"}}><input type="radio" name={'question-' + i} checked={answers[i] === j}
          onChange={() => { setAnswers({...answers, [i]: j}); setChecked(false); }} /> {option}</label>)}</fieldset>
      {checked && <p>{answers[i] === correct ? "Correct." : "Answer: " + options[correct] + "."} {reason}</p>}
    </section>)}
    <section><p aria-live="polite">{checked ? "Score: " + questions.filter((q,i) => answers[i] === q[2]).length + " / 13" : count + " / 13 answered"}</p>
      <button disabled={count !== questions.length} onClick={() => setChecked(true)}>Check answers</button>{" "}
      <button onClick={() => { setAnswers({}); setChecked(false); }}>Reset</button></section>
  </main>;
}
