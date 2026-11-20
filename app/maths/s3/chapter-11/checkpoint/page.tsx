"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../../chapter-8/chapter.module.css";

const home = "/maths/s3/chapter-11";
type Item = { prompt: string; answer: string; why: string; topic: string; options?: string[]; image?: string; alt?: string };
const groups: { title: string; lead?: string; items: Item[] }[] = [
  {
    "title": "Part A · Correct or wrong?",
    "items": [
      {
        "prompt": "sin 45° and cos 45° are equal.",
        "answer": "Correct",
        "why": "The two legs in a 45° right triangle are equal.",
        "topic": "11.1 · Special angles",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "sin 60° + cos 30° equals 1.",
        "answer": "Wrong",
        "why": "Both terms equal √3/2, giving √3.",
        "topic": "11.1 · Special angles",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "tan 60° is three times tan 30°.",
        "answer": "Correct",
        "why": "3 × √3/3 = √3.",
        "topic": "11.1 · Special angles",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "For acute θ, sin θ = 8/17 implies tan θ = 15/8.",
        "answer": "Wrong",
        "why": "The opposite leg is 8 and the adjacent leg is 15. Divide 8 by 15.",
        "topic": "11.2 · Finding ratios",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "(sin 35° + cos 35°)² equals 1.",
        "answer": "Wrong",
        "why": "Expanding gives 1 + 2 sin 35° cos 35°, which exceeds 1.",
        "topic": "11.3 · Trigonometric relations",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "cos 67° / cos 23° equals tan 23°.",
        "answer": "Correct",
        "why": "cos 67° = sin 23°.",
        "topic": "11.3 · Trigonometric relations",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "tan 19° + tan 71° equals 1.",
        "answer": "Wrong",
        "why": "Their product equals 1. Their sum exceeds 1 because tan 71° exceeds 1.",
        "topic": "11.3 · Trigonometric relations",
        "options": [
          "Correct",
          "Wrong"
        ]
      }
    ]
  },
  {
    "title": "Part B · Complete the calculations",
    "lead": "All angles are acute. Match each expression, then enter the missing angles in degrees.",
    "items": [
      {
        "prompt": "Match 1 − sin²θ to its equivalent.",
        "answer": "cos²θ",
        "why": "Subtract sin²θ from both sides of the sum-of-squares identity.",
        "topic": "11.3 · Trigonometric relations",
        "options": [
          "sin²θ",
          "cos²θ",
          "tan θ"
        ]
      },
      {
        "prompt": "Match cos²(90° − θ) to its equivalent.",
        "answer": "sin²θ",
        "why": "Replace the cosine of the complement with sine.",
        "topic": "11.3 · Trigonometric relations",
        "options": [
          "sin²θ",
          "cos²θ",
          "tan θ"
        ]
      },
      {
        "prompt": "Match sin θ / cos θ to its equivalent.",
        "answer": "tan θ",
        "why": "Apply the quotient identity.",
        "topic": "11.3 · Trigonometric relations",
        "options": [
          "sin²θ",
          "cos²θ",
          "tan θ"
        ]
      },
      {
        "prompt": "Match 1 − sin²(90° − θ) to its equivalent.",
        "answer": "sin²θ",
        "why": "Substitute cos²θ for the squared sine, then use the sum of squares.",
        "topic": "11.3 · Trigonometric relations",
        "options": [
          "sin²θ",
          "cos²θ",
          "tan θ"
        ]
      },
      {
        "prompt": "Match 1 / tan(90° − θ) to its equivalent.",
        "answer": "tan θ",
        "why": "Complementary tangents are reciprocals.",
        "topic": "11.3 · Trigonometric relations",
        "options": [
          "sin²θ",
          "cos²θ",
          "tan θ"
        ]
      },
      {
        "prompt": "Find acute x in degrees if sin²58° + sin²x = 1.",
        "answer": "32",
        "why": "sin x = cos 58° because x is acute.",
        "topic": "11.3 · Trigonometric relations"
      },
      {
        "prompt": "Find acute x in degrees if tan 30° tan 27° tan 60° = 1 / tan x.",
        "answer": "63",
        "why": "The first and last factors multiply to 1. The complement of 27° is 63°.",
        "topic": "11.3 · Trigonometric relations"
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
  return <main className={styles.lesson}><Link href={home}>← Back to Chapter 11</Link>
    <header><strong>CHAPTER 11</strong><h1>Checkpoint Activity</h1><p>Choose a judgement or enter a number in the unit requested.</p></header>
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
    <button disabled={attempted!==items.length} onClick={()=>setMarked(true)}>Check answers</button>}</section><Link href={home}>← Back to Chapter 11</Link></main>;
}