"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../../chapter-8/chapter.module.css";

const home = "/maths/s3/chapter-13";
type Item = { prompt: string; answer: string; why: string; topic: string; options?: string[]; image?: string; alt?: string };
const groups: { title: string; lead?: string; items: Item[] }[] = [
  {
    "title": "13.1 · Distance",
    "items": [
      {
        "prompt": "Find the distance from (−4, 1) to (4, 7).",
        "answer": "10",
        "why": "The changes are 8 and 6, so the length is √100.",
        "topic": "13.1 · Distance",
        "options": [
          "14",
          "10",
          "100",
          "2"
        ]
      }
    ]
  },
  {
    "title": "13.2 · Slope and intercepts",
    "items": [
      {
        "prompt": "Order the slopes of AB, BC, CD and DA from smallest to largest for A(−3, 0), B(0, 3), C(3, 3), D(6, −1).",
        "answer": "CD, DA, BC, AB",
        "why": "The slopes in that order are −4/3, −1/9, 0 and 1.",
        "topic": "13.2 · Slope and intercepts",
        "options": [
          "DA, CD, BC, AB",
          "AB, BC, DA, CD",
          "CD, DA, BC, AB"
        ]
      },
      {
        "prompt": "A line through (0, 3) and (−5, 0) has x-intercept 3.",
        "answer": "Wrong",
        "why": "It crosses the x-axis at (−5, 0), giving x-intercept −5.",
        "topic": "13.2 · Slope and intercepts",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "The slope of that line is 3/5.",
        "answer": "Correct",
        "why": "Rise 3 and run 5 from (−5, 0) to (0, 3).",
        "topic": "13.2 · Slope and intercepts",
        "options": [
          "Correct",
          "Wrong"
        ]
      }
    ]
  },
  {
    "title": "13.3 · Direction",
    "items": [
      {
        "prompt": "A parallel to a line of slope 3/5 also has slope 3/5.",
        "answer": "Correct",
        "why": "Distinct parallel lines with defined slopes have equal slopes.",
        "topic": "13.3 · Direction",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "A perpendicular to a line of slope 3/5 has slope −3/5.",
        "answer": "Wrong",
        "why": "The negative reciprocal is −5/3.",
        "topic": "13.3 · Direction",
        "options": [
          "Correct",
          "Wrong"
        ]
      }
    ]
  },
  {
    "title": "13.4 · Division",
    "items": [
      {
        "prompt": "Find the midpoint of (−1, 4) and (7, −8).",
        "answer": "(3, −2)",
        "why": "Average each coordinate separately.",
        "topic": "13.4 · Division",
        "options": [
          "(4, −6)",
          "(3, −2)",
          "(6, −4)"
        ]
      },
      {
        "prompt": "From A(−4, 4) to B(8, −2), find P if AP : PB = 1 : 2.",
        "answer": "(0, 2)",
        "why": "One third of (12, −6) is (4, −2). Add this to A.",
        "topic": "13.4 · Division",
        "options": [
          "(4, 0)",
          "(2, 1)",
          "(0, 2)"
        ]
      }
    ]
  },
  {
    "title": "13.5 · Coordinate proof",
    "items": [
      {
        "prompt": "In square O(0, 0), A(a, 0), B(a, a), C(0, a), P and Q bisect OA and AB. Work out a proof that PQ ⟂ AC. Which calculation completes it?",
        "answer": "m(PQ) × m(AC) = 1 × (−1)",
        "why": "P(a/2, 0) and Q(a, a/2) give m(PQ) = 1. From A to C the rise is a and run is −a, so m(AC) = −1. Their product proves perpendicularity.",
        "topic": "13.5 · Coordinate proof",
        "options": [
          "PQ and AC have equal lengths",
          "m(PQ) × m(AC) = 1 × (−1)",
          "PQ and AC have the same midpoint"
        ]
      }
    ]
  }
];
function matches(item: Item, raw: string) { return item.answer === raw; }
export default function Checkpoint() {
  const [answers,setAnswers] = useState<Record<string,string>>({});
  const [marked,setMarked] = useState(false);
  const items = groups.flatMap(group => group.items);
  const attempted = Object.values(answers).filter(value => value.trim()).length;
  const incorrect = items.filter((item,i) => !matches(item, answers[i] ?? ""));
  const topics = [...new Set(incorrect.map(item=>item.topic))];
  let offset = 0;
  return <main className={styles.lesson}><Link href={home}>← Back to Chapter 13</Link>
    <header><strong>CHAPTER 13</strong><h1>Checkpoint Activity</h1><p>Work each problem on paper, then select your answer. Check your score and explanations at the end.</p></header>
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
    <button disabled={attempted!==items.length} onClick={()=>setMarked(true)}>Check answers</button>}</section><Link href={home}>← Back to Chapter 13</Link></main>;
}