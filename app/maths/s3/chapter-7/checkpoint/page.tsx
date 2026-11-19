"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../more-proofs/lesson.module.css";

const home = "/maths/s3/chapter-7";
type Item = { prompt: string; answer: string; why: string; hk: string; topic: string; options?: string[]; image?: string; alt?: string };
const lines = ["Median", "Angle bisector", "Altitude", "Perpendicular bisector"];
const centres = ["Centroid", "Incentre", "Orthocentre", "Circumcentre"];
const judgements = ["Correct", "Wrong"];
const groups: { title: string; lead?: string; items: Item[] }[] = [
  {title:"Part A · Correct or wrong?",items:[
    {prompt:"Two triangles with three matching angles must be congruent.",answer:"Wrong",hk:"equiangular △s similar",why:"Their shapes match, but their side lengths can differ by a scale factor.",topic:"7.1 · Similarity",options:judgements},
    {prompt:"RHS needs equal hypotenuses and a second pair of equal corresponding sides in two right triangles.",answer:"Correct",hk:"RHS",why:"The right angle, hypotenuse and one other side fix the triangle.",topic:"7.1 · Congruence",options:judgements},
    {prompt:"Every median is perpendicular to the opposite side.",answer:"Wrong",hk:"def. of median",why:"A median reaches a midpoint. In a scalene triangle it can meet the side obliquely.",topic:"7.2 · Special lines",options:judgements},
    {prompt:"A point on the internal angle bisector is equally far from the two sides.",answer:"Correct",hk:"property of ∠ bisector",why:"The distances are measured perpendicular to the sides.",topic:"7.2 · Bisectors",options:judgements},
    {prompt:"The orthocentre of a right triangle is the midpoint of its hypotenuse.",answer:"Wrong",hk:"altitudes of right △",why:"That midpoint is the circumcentre. The two perpendicular legs meet at the orthocentre.",topic:"7.3 · Locations",options:judgements}
  ]},
  {title:"Part B · Complete the proof",lead:"D lies between A and B. CD is perpendicular to AB. Angle ABC is 68° and angle DCA is 46°. Show that AB = AC.",items:[
    {prompt:"Find angle BCD in degrees.",answer:"22",hk:"acute ∠s of right △",why:"The acute angles of right triangle BCD sum to 90°, giving 90° − 68° = 22°.",topic:"7.1 · Angle proof"},
    {prompt:"Find the whole angle BCA in degrees.",answer:"68",hk:"sum of adjacent ∠s",why:"Angle BCA = 22° + 46° = 68°, so it equals angle ABC.",topic:"7.1 · Angle proof"},
    {prompt:"Which reason completes the proof that AB = AC?",answer:"Sides opposite equal angles are equal.",hk:"sides opp. eq. ∠s",why:"Sides opposite equal angles in a triangle are equal. AB is opposite angle C and AC is opposite angle B.",topic:"7.1 · Isosceles triangles",options:["Corresponding sides of similar triangles are equal.","Sides opposite equal angles are equal.","Angles on a straight line sum to 180°."]}
  ]},
  {title:"Identify the marked line",items:[
    ["altitude","Altitude","AD meets BC at a right angle from vertex A.","altitude"],
    ["median","Median","D is the midpoint of BC and A is the opposite vertex.","median"],
    ["angle","Angle bisector","The matching arcs at A show that AD divides the angle equally.","∠ bisector"],
    ["perpendicular","Perpendicular bisector","The line crosses the segment at its midpoint at a right angle.","⊥ bisector"]
  ].map(([file,answer,why,hk])=>({prompt:"Name the dashed line.",answer,why,hk,options:lines,topic:"7.2 · Special lines",image:"lines/proof-"+file,alt:why}))},
  {title:"Identify the centre",items:[
    ["H","Orthocentre","The lines through the vertices meet the opposite sides at right angles.","altitudes"],
    ["O","Circumcentre","The circle passes through the vertices, so its radii reach all three.","equal radii"],
    ["G","Centroid","The three segments run from vertices to the midpoints of opposite sides.","medians"],
    ["I","Incentre","The circle touches each of the three sides.","∠ bisectors"]
  ].map(([file,answer,why,hk])=>({prompt:"Name the marked intersection.",answer,why,hk,options:centres,topic:"7.3 · Identifying centres",image:"centres/"+file,alt:why}))},
  {title:"Apply a centre property",items:[
    {prompt:"The incentre is I. If angle A = 76°, find angle BIC in degrees.",answer:"128",hk:"∠ bisectors; ∠ sum of △",why:"The other vertex angles sum to 104°. Their halves sum to 52°, leaving 128° at I.",topic:"7.3 · Incentre angles"},
    {prompt:"An obtuse triangle needs a circle through all three vertices. Where is its centre?",answer:"Outside the triangle",hk:"perp. bisectors, obtuse △",why:"The circumcentre of an obtuse triangle lies outside it.",topic:"7.3 · Locations",options:["Inside the triangle","At the obtuse vertex","Outside the triangle"]}
  ]}
];
function matches(item: Item, raw: string) {
  if (item.options) return item.answer === raw;
  const value = raw.trim().replace(/°$/, "").trim();
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
  return <main className={styles.lesson}><Link href={home}>← Back to Chapter 7</Link>
    <header><strong>CHAPTER 7</strong><h1>Checkpoint Activity</h1><p>Use the markings in each diagram and give angles in degrees.</p></header>
    {groups.map(group => <section key={group.title}><h2>{group.title}</h2>{group.lead && <p>{group.lead}</p>}{group.items.map(item=>{
      const i=offset++, id="answer-"+i;
      return <div key={id} style={{padding:"16px 0",borderBottom:"1px solid #dde5eb"}}>
        <label htmlFor={id}><b>{i+1}. {item.prompt}</b></label>
        {item.image && <img className={styles.figure} src={home+"/"+item.image+".svg"} alt={item.alt}/>}
        <div style={{marginTop:8}}>{item.options ? <select id={id} style={{maxWidth:"100%"}} disabled={marked} value={answers[i]??""} onChange={e=>setAnswers({...answers,[i]:e.target.value})}><option value="">Choose an answer</option>{item.options.map(option=><option key={option}>{option}</option>)}</select> :
        <input id={id} disabled={marked} value={answers[i]??""} onChange={e=>setAnswers({...answers,[i]:e.target.value})}/>}</div>
        {marked && <p><b>{matches(item,answers[i])?"Correct":"Review"} · {item.answer}</b><br/>GCSE: {item.why}<small>HKDSE: {item.hk}</small></p>}
      </div>;
    })}</section>)}
    <section className={styles.learning}><p aria-live="polite">Answered {attempted} of {items.length}</p>
    {marked ? <><h2>Score {items.length-incorrect.length} / {items.length}</h2>{topics.length>0 && <><h3>Topics to review</h3><ul>{topics.map(topic=><li key={topic}>{topic}</li>)}</ul></>}
    <button onClick={()=>{setAnswers({});setMarked(false);window.scrollTo(0,0)}}>Try again</button></> :
    <button disabled={attempted!==items.length} onClick={()=>setMarked(true)}>Check answers</button>}</section><Link href={home}>← Back to Chapter 7</Link></main>;
}
