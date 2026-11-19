"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../chapter.module.css";

const home = "/maths/s3/chapter-8";
type Item = { prompt: string; answer: string; why: string; topic: string; options?: string[]; image?: string; alt?: string };
const groups: { title: string; lead?: string; items: Item[] }[] = [
  {
    "title": "Part A · Correct or wrong?",
    "items": [
      {
        "prompt": "In parallelogram ABCD, AD = BC.",
        "answer": "Correct",
        "why": "Opposite sides are equal.",
        "topic": "8.2 · Parallelograms",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "In every rhombus ABCD with diagonals meeting at O, angles OAD and ODA are equal.",
        "answer": "Wrong",
        "why": "A rhombus with angles 60° and 120° has adjacent half-angles of 30° and 60°.",
        "topic": "8.3 · Properties of Rhombuses, Rectangles, Squares and Trapeziums",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "The diagonals of a rectangle have equal lengths.",
        "answer": "Correct",
        "why": "Both are hypotenuses of right triangles with matching leg lengths.",
        "topic": "8.3 · Properties of Rhombuses, Rectangles, Squares and Trapeziums",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "The four half-diagonals of a square have equal lengths.",
        "answer": "Correct",
        "why": "Its diagonals are equal and bisect each other.",
        "topic": "8.3 · Properties of Rhombuses, Rectangles, Squares and Trapeziums",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "If just one diagonal bisects the other, the quadrilateral must be a parallelogram.",
        "answer": "Wrong",
        "why": "A non-rhombus kite can have just one diagonal bisecting the other.",
        "topic": "8.2 · Parallelograms",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "One pair of opposite sides both equal and parallel proves a parallelogram.",
        "answer": "Correct",
        "why": "Joining their endpoints by a diagonal gives congruent triangles by SAS.",
        "topic": "8.4 · Proofs Related to Parallelograms",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "A quadrilateral with both pairs of opposite sides equal must be a parallelogram.",
        "answer": "Correct",
        "why": "Both pairs of equal opposite sides form a sufficient condition.",
        "topic": "8.2 · Parallelograms",
        "options": [
          "Correct",
          "Wrong"
        ]
      }
    ]
  },
  {
    "title": "Part B · Complete the calculations and proof",
    "items": [
      {
        "prompt": "Three angles of a quadrilateral are 90°, 104° and 78°. Find the fourth in degrees.",
        "answer": "88",
        "why": "Subtract 272° from 360°.",
        "topic": "8.1 · Basic Knowledge of Quadrilaterals"
      },
      {
        "prompt": "Rhombus ABCD has side CD = 9 cm. Find AB in cm.",
        "answer": "9",
        "why": "All four sides are equal.",
        "topic": "8.3 · Properties of Rhombuses, Rectangles, Squares and Trapeziums"
      },
      {
        "prompt": "Its diagonals meet at O and DO = 4 cm. Find OB in cm.",
        "answer": "4",
        "why": "The diagonals bisect each other.",
        "topic": "8.3 · Properties of Rhombuses, Rectangles, Squares and Trapeziums"
      },
      {
        "prompt": "In rectangle ABCD the diagonals meet at O and ∠AOB = 110°. Find ∠OAB in degrees.",
        "answer": "35",
        "why": "OA = OB. Each base angle is (180° − 110°) ÷ 2.",
        "topic": "8.3 · Properties of Rhombuses, Rectangles, Squares and Trapeziums"
      },
      {
        "prompt": "In square ABCD, E lies on AC beyond C. Which property proves EB = ED?",
        "answer": "AC is the perpendicular bisector of BD.",
        "why": "Every point on the perpendicular bisector is equally distant from B and D.",
        "topic": "8.4 · Proofs Related to Parallelograms",
        "options": [
          "AC is parallel to BD.",
          "AC is the perpendicular bisector of BD.",
          "AC and BD have equal lengths."
        ]
      },
      {
        "prompt": "M and N bisect AB and AC in triangle ABC. If ∠B = 58° and ∠A = 42°, find ∠ANM in degrees.",
        "answer": "80",
        "why": "MN ∥ BC. The angle at C is 180° − 58° − 42°.",
        "topic": "8.5 · Mid-point Theorem and Intercept Theorem"
      },
      {
        "prompt": "Three parallel lines cut equal adjacent intercepts on one transversal. On another, the outer crossings are 22 cm apart. Find one intercept in cm.",
        "answer": "11",
        "why": "The two intercepts are equal and sum to 22 cm.",
        "topic": "8.5 · Mid-point Theorem and Intercept Theorem"
      },
      {
        "prompt": "In triangle ABC, M bisects AB and MN ∥ BC with N on AC. If NC = 6 cm, find AC in cm.",
        "answer": "12",
        "why": "The intercept theorem gives AN = NC.",
        "topic": "8.5 · Mid-point Theorem and Intercept Theorem"
      },
      {
        "prompt": "In the same triangle, MN = 7 cm. Find BC in cm.",
        "answer": "14",
        "why": "Now both midpoints are established, so BC = 2MN.",
        "topic": "8.5 · Mid-point Theorem and Intercept Theorem"
      }
    ]
  }
];
function matches(item: Item, raw: string) {
  if (item.options) return item.answer === raw;
  const value = (item.prompt.includes("degrees") ? raw.trim().replace(/°$/, "") : raw).trim();
  const parts = value.split("/").map(v => v.trim());
  if (parts.length > 2 || parts.some(v => !/^\d+(?:\.\d*)?$/.test(v))) return false;
  return Number(parts[0]) / Number(parts[1] ?? 1) === Number(item.answer);
}
export default function Checkpoint() {
  const [answers,setAnswers] = useState<Record<string,string>>({});
  const [marked,setMarked] = useState(false);
  const items = groups.flatMap(group => group.items);
  const attempted = Object.values(answers).filter(value => value.trim()).length;
  const incorrect = items.filter((item,i) => !matches(item, answers[i] ?? ""));
  const topics = [...new Set(incorrect.map(item=>item.topic))];
  let offset = 0;
  return <main className={styles.lesson}><Link href={home}>← Back to Chapter 8</Link>
    <header><strong>CHAPTER 8</strong><h1>Checkpoint Activity</h1><p>Choose a judgement or enter a number in the unit requested.</p></header>
    {groups.map(group => <section key={group.title}><h2>{group.title}</h2>{group.lead && <p>{group.lead}</p>}{group.items.map(item=>{
      const i=offset++, id="answer-"+i;
      return <div key={id} style={{padding:"16px 0",borderBottom:"1px solid #dde5eb"}}>
        <label htmlFor={id}><b>{i+1}. {item.prompt}</b></label>
        <div style={{marginTop:8}}>{item.options ? <select id={id} style={{maxWidth:"100%"}} disabled={marked} value={answers[i]??""} onChange={e=>setAnswers({...answers,[i]:e.target.value})}><option value="">Choose an answer</option>{item.options.map(option=><option key={option}>{option}</option>)}</select> :
        <input id={id} disabled={marked} value={answers[i]??""} onChange={e=>setAnswers({...answers,[i]:e.target.value})}/>}</div>
        {marked && <p><b>{matches(item,answers[i])?"Correct":"Review"} · {item.answer}</b><br/>{item.why}</p>}
      </div>;
    })}</section>)}
    <section data-kind="summary"><p aria-live="polite">Answered {attempted} of {items.length}</p>
    {marked ? <><h2>Score {items.length-incorrect.length} / {items.length}</h2>{topics.length>0 && <><h3>Topics to review</h3><ul>{topics.map(topic=><li key={topic}>{topic}</li>)}</ul></>}
    <button onClick={()=>{setAnswers({});setMarked(false);window.scrollTo(0,0)}}>Try again</button></> :
    <button disabled={attempted!==items.length} onClick={()=>setMarked(true)}>Check answers</button>}</section><Link href={home}>← Back to Chapter 8</Link></main>;
}
