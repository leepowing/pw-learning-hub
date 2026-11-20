"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../../chapter-8/chapter.module.css";

const home = "/maths/s3/chapter-12";
type Item = { prompt: string; answer: string; why: string; topic: string; options?: string[]; image?: string; alt?: string };
const groups: { title: string; lead?: string; items: Item[] }[] = [
  {
    "title": "Figure A · Two slopes",
    "lead": "A, D and C lie on level ground in that order. B is 3 m directly above D. DC is 6 m and angle BAD is 40°.",
    "items": [
      {
        "prompt": "The gradient of AB equals tan 40°.",
        "answer": "Correct",
        "why": "The vertical rise and horizontal run are opposite and adjacent to the inclination.",
        "topic": "12.1 · Gradients",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "BC has a gradient of 2.",
        "answer": "Wrong",
        "why": "The gradient is 3/6 = 0.5.",
        "topic": "12.1 · Gradients",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "AB is steeper than BC.",
        "answer": "Correct",
        "why": "tan 40° ≈ 0.839, greater than 0.5.",
        "topic": "12.1 · Gradients",
        "options": [
          "Correct",
          "Wrong"
        ]
      }
    ]
  },
  {
    "title": "Figure B · Contour map",
    "lead": "P and Q lie on contours 100 m and 200 m above sea level. The straight road between them measures 1.2 cm on a map of scale 1 to 20,000.",
    "items": [
      {
        "prompt": "The road itself is 240 m long.",
        "answer": "Wrong",
        "why": "The horizontal run is 240 m. The sloping road measures √(240² + 100²) = 260 m.",
        "topic": "12.1 · Contour maps",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "The inclination rounds to 23°.",
        "answer": "Correct",
        "why": "tan⁻¹(100/240) ≈ 22.62°, which rounds to 23°. ",
        "topic": "12.1 · Contour maps",
        "options": [
          "Correct",
          "Wrong"
        ]
      }
    ]
  },
  {
    "title": "Figure C · Line of sight",
    "lead": "D is above and to the right of B. At B the angle between the leftward horizontal ray and BD is 110°.",
    "items": [
      {
        "prompt": "D is seen from B at an elevation of 110°.",
        "answer": "Wrong",
        "why": "Use the rightward horizontal. The elevation is 180° − 110° = 70°.",
        "topic": "12.2 · Elevation and depression",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "From D, the angle of depression to B is 70°.",
        "answer": "Correct",
        "why": "The horizontal lines are parallel, so the depression equals the elevation.",
        "topic": "12.2 · Elevation and depression",
        "options": [
          "Correct",
          "Wrong"
        ]
      }
    ]
  },
  {
    "title": "Figure D · Return bearing",
    "lead": "From A, the direction to B is 40° clockwise from north.",
    "items": [
      {
        "prompt": "The compass bearing of B from A is N40°E.",
        "answer": "Correct",
        "why": "Turn east from north by 40°.",
        "topic": "12.3 · Bearings",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "W50°S is the standard compass bearing of A from B.",
        "answer": "Wrong",
        "why": "Compass bearings start at north or south. The return direction is S40°W.",
        "topic": "12.3 · Bearings",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "From B the true bearing of A is 220°.",
        "answer": "Correct",
        "why": "040° + 180° = 220°. ",
        "topic": "12.3 · Bearings",
        "options": [
          "Correct",
          "Wrong"
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
  return <main className={styles.lesson}><Link href={home}>← Back to Chapter 12</Link>
    <header><strong>CHAPTER 12</strong><h1>Checkpoint Activity</h1><p>Decide whether each statement is correct or wrong.</p></header>
    {groups.map(group => <section key={group.title}><h2>{group.title}</h2><img width={300} style={{maxWidth:"100%"}} src={`/maths/ch12-review/${group.title.charAt(7)}.svg`} alt="" />{group.lead && <p>{group.lead}</p>}{group.items.map(item=>{
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
    <button disabled={attempted!==items.length} onClick={()=>setMarked(true)}>Check answers</button>}</section><Link href={home}>← Back to Chapter 12</Link></main>;
}