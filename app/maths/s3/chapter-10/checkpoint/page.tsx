"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../../chapter-8/chapter.module.css";

const home = "/maths/s3/chapter-10";
type Item = { prompt: string; answer: string; why: string; topic: string; options?: string[]; image?: string; alt?: string };
const groups: { title: string; lead?: string; items: Item[] }[] = [
  {
    "title": "Part A · Correct or wrong?",
    "items": [
      {
        "prompt": "If AB is perpendicular to a plane at B, then B is the projection of A onto that plane.",
        "answer": "Correct",
        "why": "The projection is the foot of the perpendicular.",
        "topic": "10.1 · Heights of Solids",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "Any edge from the apex can serve as the height for the chosen base.",
        "answer": "Wrong",
        "why": "Only a perpendicular distance to the base plane gives the height.",
        "topic": "10.1 · Heights of Solids",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "Every regular square pyramid has equilateral lateral faces.",
        "answer": "Wrong",
        "why": "Its lateral faces are congruent isosceles triangles. The sloping edges can differ from the base edges.",
        "topic": "10.2 · Pyramids",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "A pyramid with base area 36 cm² and perpendicular height 4 cm has volume 48 cm³.",
        "answer": "Correct",
        "why": "36 × 4 ÷ 3 = 48.",
        "topic": "10.2 · Pyramids",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "A solid right cone of radius 9 cm and slant height 15 cm has total surface area 135π cm².",
        "answer": "Wrong",
        "why": "135π counts the curved side. The base adds 81π.",
        "topic": "10.3 · Circular Cones",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "A hemisphere of radius 6 cm has volume 144π cm³.",
        "answer": "Correct",
        "why": "Half of 4π × 6³/3 is 144π.",
        "topic": "10.4 · Spheres",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "A sphere with diameter d has surface area πd².",
        "answer": "Correct",
        "why": "Substitute r = d/2 into 4πr².",
        "topic": "10.4 · Spheres",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "Two trapeziums with top edges in ratio 2 to 3 must have areas in ratio 4 to 9.",
        "answer": "Wrong",
        "why": "One pair of lengths does not establish similarity.",
        "topic": "10.5 · Similar Figures",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "Removing a cone tip one third of the whole height leaves 26 times the tip’s volume.",
        "answer": "Correct",
        "why": "The whole contains 27 tip volumes, leaving 26.",
        "topic": "10.6 · Frustums",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "If a cone tip is half the whole height, its curved area is half the original curved area.",
        "answer": "Wrong",
        "why": "Areas scale by the square of the length ratio, giving one quarter.",
        "topic": "10.6 · Frustums",
        "options": [
          "Correct",
          "Wrong"
        ]
      }
    ]
  },
  {
    "title": "Part B · Calculate",
    "items": [
      {
        "prompt": "A right cone has slant height 13 cm and radius 5 cm. Find its perpendicular height in cm.",
        "answer": "12",
        "why": "√(13² − 5²) = 12.",
        "topic": "10.3 · Circular Cones"
      },
      {
        "prompt": "Similar solids have heights in ratio 2 to 3. The smaller volume is 24 cm³. Find the larger volume in cm³.",
        "answer": "81",
        "why": "24 × (3/2)³ = 81.",
        "topic": "10.5 · Similar Figures"
      },
      {
        "prompt": "A square pyramid has base side 12 m and height 9 m. A parallel cut removes a tip of side 4 m and height 3 m. Find the remaining volume in m³.",
        "answer": "416",
        "why": "(12² × 9 − 4² × 3)/3 = 416.",
        "topic": "10.6 · Frustums"
      },
      {
        "prompt": "A closed right conical frustum has radii 2 and 5 cm and slant height 5 cm. Its total area is kπ cm². Find k.",
        "answer": "64",
        "why": "Curved area = (2 + 5) × 5π. Both bases add (4 + 25)π.",
        "topic": "10.6 · Frustums"
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
  return <main className={styles.lesson}><Link href={home}>← Back to Chapter 10</Link>
    <header><strong>CHAPTER 10</strong><h1>Checkpoint Activity</h1><p>Choose a judgement or enter a number in the unit requested.</p></header>
    {groups.map(group => <section key={group.title}><h2>{group.title}</h2>{group.lead && <p>{group.lead}</p>}{group.items.map(item=>{
      const i=offset++, id="answer-"+i;
      return <div key={id} style={{padding:"16px 0",borderBottom:"1px solid #dde5eb"}}>
        <label htmlFor={id}><b>{i+1}. {item.prompt}</b></label>
        {item.image && <img style={{display:"block", width:"min(100%,240px)"}} src={"/maths/s3/ch10/frustums/"+item.image+".svg"} alt={item.alt}/>}
        <div style={{marginTop:8}}>{item.options ? <select id={id} style={{maxWidth:"100%"}} disabled={marked} value={answers[i]??""} onChange={e=>setAnswers({...answers,[i]:e.target.value})}><option value="">Choose an answer</option>{item.options.map(option=><option key={option}>{option}</option>)}</select> :
        <input id={id} disabled={marked} value={answers[i]??""} onChange={e=>setAnswers({...answers,[i]:e.target.value})}/>}</div>
        {marked && <p><b>{matches(item,answers[i])?"Correct":"Review"} · {item.answer}</b><br/>{item.why}</p>}
      </div>;
    })}</section>)}
    <section data-kind="summary"><p aria-live="polite">Answered {attempted} of {items.length}</p>
    {marked ? <><h2>Score {items.length-incorrect.length} / {items.length}</h2>{topics.length>0 && <><h3>Topics to review</h3><ul>{topics.map(topic=><li key={topic}>{topic}</li>)}</ul></>}
    <button onClick={()=>{setAnswers({});setMarked(false);window.scrollTo(0,0)}}>Try again</button></> :
    <button disabled={attempted!==items.length} onClick={()=>setMarked(true)}>Check answers</button>}</section><Link href={home}>← Back to Chapter 10</Link></main>;
}
