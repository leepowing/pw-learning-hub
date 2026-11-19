"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../../chapter-8/chapter.module.css";

const home = "/maths/s3/chapter-9";
type Item = { prompt: string; answer: string; why: string; topic: string; options?: string[]; image?: string; alt?: string };
const groups: { title: string; lead?: string; items: Item[] }[] = [
  {
    "title": "Part A · Correct or wrong?",
    "items": [
      {
        "prompt": "An interior cut perpendicular to the base of a right triangular prism gives a rectangle.",
        "answer": "Correct",
        "why": "A segment across the base extends through the full prism length at right angles.",
        "topic": "9.1 · Cross Sections of Solids",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "Every inclined section of a cuboid must be a triangle.",
        "answer": "Wrong",
        "why": "A plane can meet four faces and produce a trapezium.",
        "topic": "9.1 · Cross Sections of Solids",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "The three marked segments enclose a plane section of the cube.",
        "answer": "Correct",
        "why": "AB, BC and CA lie on the top, right and front faces. The plane through A, B and C meets the cube along this closed boundary.",
        "topic": "9.1 · Cross Sections of Solids",
        "options": [
          "Correct",
          "Wrong"
        ],
        "image": "cube-question",
        "alt": "A and C are opposite corners of the front face. B is the upper back right corner. Segments AB, BC and CA are marked."
      },
      {
        "prompt": "Every vertical cut across a square pyramid gives a triangle.",
        "answer": "Wrong",
        "why": "A vertical plane offset from the apex can give a trapezium.",
        "topic": "9.1 · Cross Sections of Solids",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "An interior slice parallel to a square pyramid’s base is square.",
        "answer": "Correct",
        "why": "Scaling from the apex gives a smaller square.",
        "topic": "9.1 · Cross Sections of Solids",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "A plane passing through the interior of a sphere always gives a circle.",
        "answer": "Correct",
        "why": "Its radius varies with the distance of the plane from the centre.",
        "topic": "9.1 · Cross Sections of Solids",
        "options": [
          "Correct",
          "Wrong"
        ]
      },
      {
        "prompt": "This sketch shows a pyramid with a four-sided base.",
        "answer": "Correct",
        "why": "Trace ABCD around the base. Each of its four corners connects to V.",
        "topic": "9.2 · 2-D Representations of Pyramids and Circular Cones",
        "options": [
          "Correct",
          "Wrong"
        ],
        "image": "rect-3",
        "alt": "Base points A, B, C and D are joined to V. Some segments are dashed."
      },
      {
        "prompt": "The dotted segment VO in this sketch is a sloping edge.",
        "answer": "Wrong",
        "why": "VO ends at the centre of the base and runs inside the solid.",
        "topic": "9.2 · 2-D Representations of Pyramids and Circular Cones",
        "options": [
          "Correct",
          "Wrong"
        ],
        "image": "cone-3",
        "alt": "V is the apex and O marks the centre of the base. A dotted segment joins them."
      }
    ]
  },
  {
    "title": "Part B · Complete the calculations and sketches",
    "items": [
      {
        "prompt": "A central section of a sphere has diameter 22 cm. Find its radius in cm.",
        "answer": "11",
        "why": "The radius is half the diameter.",
        "topic": "9.1 · Cross Sections of Solids"
      },
      {
        "prompt": "A right cylinder is 12 cm long with radius 3 cm. Find its axial section area in square centimetres.",
        "answer": "72",
        "why": "The rectangle measures 12 cm by 6 cm.",
        "topic": "9.1 · Cross Sections of Solids"
      },
      {
        "prompt": "A plane parallel to a pyramid’s square base cuts halfway from apex to base. The base side is 18 cm. Find the section side in cm.",
        "answer": "9",
        "why": "Each corresponding length is halved.",
        "topic": "9.1 · Cross Sections of Solids"
      },
      {
        "prompt": "The base ABCD and apex V are marked. How many sloping edges must you add?",
        "answer": "4",
        "why": "Join V to each of the four base vertices.",
        "topic": "9.2 · 2-D Representations of Pyramids and Circular Cones",
        "image": "rect-2",
        "alt": "The base is ABCD. The apex V lies above centre O."
      },
      {
        "prompt": "Which line style completes the hidden back arc of this cone?",
        "answer": "Dashed",
        "why": "The back of the rim is occluded by the curved surface.",
        "topic": "9.2 · 2-D Representations of Pyramids and Circular Cones",
        "options": [
          "Solid",
          "Dashed"
        ],
        "image": "cone-2",
        "alt": "An ellipse is drawn below V. Choose the line style for its rear arc in the finished sketch."
      },
      {
        "prompt": "On this oblique grid, which pair of base edges represents depth?",
        "answer": "AD and BC",
        "why": "These opposite edges follow the receding diagonal grid direction.",
        "topic": "9.2 · 2-D Representations of Pyramids and Circular Cones",
        "options": [
          "AB and DC",
          "AD and BC"
        ],
        "image": "oblique-1",
        "alt": "AB is the lower horizontal edge. AD and BC recede along grid diagonals."
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
  return <main className={styles.lesson}><Link href={home}>← Back to Chapter 9</Link>
    <header><strong>CHAPTER 9</strong><h1>Checkpoint Activity</h1><p>Choose a judgement or enter a number in the unit requested.</p></header>
    {groups.map(group => <section key={group.title}><h2>{group.title}</h2>{group.lead && <p>{group.lead}</p>}{group.items.map(item=>{
      const i=offset++, id="answer-"+i;
      return <div key={id} style={{padding:"16px 0",borderBottom:"1px solid #dde5eb"}}>
        <label htmlFor={id}><b>{i+1}. {item.prompt}</b></label>
        {item.image && <img style={{display:"block", width:"min(100%,240px)"}} src={"/maths/s3/ch9/sketches/"+item.image+".svg"} alt={item.alt}/>}
        <div style={{marginTop:8}}>{item.options ? <select id={id} style={{maxWidth:"100%"}} disabled={marked} value={answers[i]??""} onChange={e=>setAnswers({...answers,[i]:e.target.value})}><option value="">Choose an answer</option>{item.options.map(option=><option key={option}>{option}</option>)}</select> :
        <input id={id} disabled={marked} value={answers[i]??""} onChange={e=>setAnswers({...answers,[i]:e.target.value})}/>}</div>
        {marked && <p><b>{matches(item,answers[i])?"Correct":"Review"} · {item.answer}</b><br/>{item.why}</p>}
      </div>;
    })}</section>)}
    <section data-kind="summary"><p aria-live="polite">Answered {attempted} of {items.length}</p>
    {marked ? <><h2>Score {items.length-incorrect.length} / {items.length}</h2>{topics.length>0 && <><h3>Topics to review</h3><ul>{topics.map(topic=><li key={topic}>{topic}</li>)}</ul></>}
    <button onClick={()=>{setAnswers({});setMarked(false);window.scrollTo(0,0)}}>Try again</button></> :
    <button disabled={attempted!==items.length} onClick={()=>setMarked(true)}>Check answers</button>}</section><Link href={home}>← Back to Chapter 9</Link></main>;
}
