"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ConceptTriangle, SightLineDiagram, conceptTriangles, type TriangleSpec } from '@/components/maths/S2Chapter12ConceptDiagrams';
const roles=['Hypotenuse','Adjacent side of θ','Opposite side of θ'] as const;
const solutions=[['AB','AC','BC'],['ML','LN','MN'],['YZ','XY','XZ'],['RS','ST','RT']];
const normal=(s:string)=>s.trim().toUpperCase().replace(/\s+/g,'');
const matches=(value:string,expected:string)=>normal(value)===expected||normal(value)===expected.split('').reverse().join('');
const demo:TriangleSpec={r:{x:280,y:235},u:{x:80,y:235},v:{x:280,y:75},names:['B','A','C'],theta:'u'};
export default function TrigonometricConcepts(){
 const [degrees,setDegrees]=useState<25|40>(25),[theta,setTheta]=useState<'u'|'v'>('u'),[highlight,setHighlight]=useState<'hypotenuse'|'adjacent'|'opposite'>('hypotenuse');
 const [answers,setAnswers]=useState<string[][]>([['AB','',''],['','LN',''],['','',''],['','','']]);
 const [checked,setChecked]=useState(false),[show,setShow]=useState(false);
 const correct=answers.flatMap((row,i)=>row.map((a,j)=>matches(a,solutions[i][j]))).filter(Boolean).length;
 function change(i:number,j:number,value:string){setAnswers(old=>old.map((row,k)=>k===i?row.map((a,l)=>l===j?value:a):row));setChecked(false);}
 return <main className="lesson"><Link href="/maths/s2/chapter-12">← Chapter 12 overview</Link>
 <header><p className="eyebrow">S2 · CHAPTER 12 · SECTION 12.1</p><h1>Concepts of Trigonometric Ratios</h1><p>Choose an acute angle, name the three sides, and connect an angle with a ratio of lengths.</p></header>
 <section><h2>1. Looking higher from the same position</h2><p>Imagine looking at a point on a vertical building. Keep your viewing position and the horizontal distance OA fixed. Move the point B upwards.</p>
 <div className="choices" role="group" aria-label="Choose the viewing angle">{([25,40] as const).map(a=><button key={a} type="button" aria-pressed={degrees===a} onClick={()=>setDegrees(a)}>{a}°</button>)}</div>
 <SightLineDiagram degrees={degrees}/><p aria-live="polite">The angle at O is {degrees}°. {degrees===40?'B is higher than in the 25° view.':'Choose 40° to see a higher point.'}</p>
 <p className="note">With OA fixed, a greater height AB gives a larger acute angle at O. It is the ratio AB / OA, rather than the height alone, that determines this angle.</p>
 <p>Trigonometry connects angles with ratios of side lengths. A trigonometric ratio compares two side lengths of a right-angled triangle.</p></section>
 <section><h2>2. Name the sides relative to θ</h2><p>First locate the right angle, then choose the acute angle θ. In this triangle, the right angle is at B.</p>
 <div className="choices" role="group" aria-label="Choose theta"><button type="button" aria-pressed={theta==='u'} onClick={()=>setTheta('u')}>θ at A</button><button type="button" aria-pressed={theta==='v'} onClick={()=>setTheta('v')}>θ at C</button></div>
 <div className="grid"><ConceptTriangle spec={{...demo,theta}} highlight={highlight}/><div><h3>Highlight a side</h3><div className="stack">{(['hypotenuse','adjacent','opposite'] as const).map((r,i)=><button type="button" key={r} aria-pressed={highlight===r} onClick={()=>setHighlight(r)}>{roles[i]}</button>)}</div><p>The selected side is orange.</p></div></div>
 <div className="tableWrap"><table><caption>Side names for the selected angle</caption><thead><tr><th>Side</th><th>Name</th><th>How to identify it</th></tr></thead><tbody>
 <tr><td>AC</td><td>Hypotenuse</td><td>Across from the right angle; the longest side.</td></tr>
 <tr><td>{theta==='u'?'AB':'BC'}</td><td>Adjacent side of θ</td><td>Meets θ and the right angle.</td></tr>
 <tr><td>{theta==='u'?'BC':'AB'}</td><td>Opposite side of θ</td><td>Across from θ; does not meet its vertex.</td></tr>
 </tbody></table></div><p className="note">Changing θ exchanges the opposite and adjacent sides. The hypotenuse stays AC.</p></section>
 <section><p className="eyebrow">WORKED EXAMPLE</p><h2>3. Use the angle marks, not the orientation</h2>
 <div className="grid"><ConceptTriangle spec={conceptTriangles[2]}/><div><p>The square mark is at X and θ is at Y.</p><ol><li>The side across from X is YZ: the hypotenuse.</li><li>Of the two sides meeting Y, YZ is the hypotenuse, so XY is the adjacent side.</li><li>The remaining side XZ is opposite θ.</li></ol><p>Turning a diagram does not change these relationships.</p></div></div>
 <h3>Common mistakes</h3><ul><li>Do not choose the bottom side automatically as the adjacent side.</li><li>Do not call the hypotenuse the adjacent side just because it meets θ.</li><li>Always check which acute angle is labelled θ.</li></ul></section>
 <section><h2>4. Quick practice</h2><p>Name the three sides in each diagram. Two entries are already supplied. Either direction is accepted: AB and BA name the same side.</p>
 <div className="grid">{conceptTriangles.map((spec,i)=><article key={i}><h3>Triangle {i+1}</h3><ConceptTriangle spec={spec}/>{roles.map((role,j)=>{
 const fixed=(i===0&&j===0)||(i===1&&j===1);return <div className="field" key={role}><label htmlFor={`side-${i}-${j}`}>{role}</label><input id={`side-${i}-${j}`} value={answers[i][j]} readOnly={fixed} maxLength={8} autoComplete="off" spellCheck={false} onChange={e=>change(i,j,e.target.value)} aria-describedby={checked?`feedback-${i}-${j}`:undefined}/>{fixed&&<small>Given</small>}{checked&&<p id={`feedback-${i}-${j}`} className="feedback">{matches(answers[i][j],solutions[i][j])?'Correct.':`Check the angle marks. Answer: ${solutions[i][j]}.`}</p>}</div>;
 })}</article>)}</div>
 <div className="choices actions"><button type="button" onClick={()=>setChecked(true)}>Check answers</button><button type="button" aria-expanded={show} onClick={()=>setShow(!show)}>{show?'Hide':'Show'} worked solutions</button><button type="button" onClick={()=>{setAnswers([['AB','',''],['','LN',''],['','',''],['','','']]);setChecked(false);setShow(false);}}>Reset practice</button></div>
 {checked&&<p role="status">{correct-2} of 10 entries correct (excluding the two given entries).</p>}
 {show&&<div className="solutions"><h3>Worked solutions</h3>{conceptTriangles.map((spec,i)=><article key={i}><h4>Triangle {i+1}</h4><p>The right angle is at {spec.names[0]}, so the hypotenuse is {solutions[i][0]}. The marked angle θ is at {spec.names[spec.theta==='u'?1:2]}.</p><p>The side joining θ to the right angle is {solutions[i][1]} (adjacent). The side across from θ is {solutions[i][2]} (opposite).</p></article>)}</div>}
 </section>
 <section><h2>Ready for the sine ratio</h2><p>You can now identify the sides used in a trigonometric ratio. Section 12.2 will compare the opposite side with the hypotenuse.</p><Link href="/maths/s2/chapter-12/the-sine-ratio">Continue to Section 12.2 →</Link></section>
 <Link href="/maths/s2/chapter-12">← Back to Chapter 12</Link>
 <style jsx>{`
 .lesson{max-width:1080px;width:calc(100% - 32px);margin:36px auto 70px;color:#24364b;font-family:Arial,sans-serif;line-height:1.65;overflow-wrap:break-word}.lesson *{box-sizing:border-box}.lesson :global(a){color:#0f766e;font-weight:700}header{padding:32px;background:#ecfeff;border:1px solid #a5f3fc;border-radius:24px;margin-top:22px}h1{font-size:clamp(30px,5vw,46px);line-height:1.2}h2{font-size:27px;line-height:1.3}h3{font-size:21px}.eyebrow{font-size:13px;letter-spacing:.08em;font-weight:800;color:#0e7490}section{padding:28px;margin:24px 0;border:1px solid #dce5ee;border-radius:22px;background:white}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;align-items:start}.grid>*{min-width:0}article{padding:18px;border-radius:14px;background:#f8fafc}.choices{display:flex;gap:12px;flex-wrap:wrap}.stack{display:grid;gap:10px}button{padding:11px 16px;font:inherit;background:white;color:#0f766e;border:1px solid #0f766e;border-radius:10px;cursor:pointer;text-align:left}button[aria-pressed=true]{background:#0f766e;color:white}button:focus-visible,input:focus-visible,.lesson :global(a:focus-visible){outline:3px solid #d97706;outline-offset:3px}.note{padding:16px;background:#ecfeff;border-left:4px solid #0891b2;border-radius:8px}.tableWrap{max-width:100%}table{width:100%;border-collapse:collapse;table-layout:fixed;font-size:16px}caption{text-align:left;font-weight:700;margin:12px 0}td,th{text-align:left;vertical-align:top;border:1px solid #cbd5e1;padding:12px;overflow-wrap:anywhere}th{background:#ecfeff}th:first-child{width:16%}th:nth-child(2){width:30%}.field{margin:14px 0}label{display:block;font-weight:700}input{width:100%;padding:10px;font:inherit;border:1px solid #94a3b8;border-radius:8px}input[readonly]{background:#e2e8f0}small{color:#52647a}.feedback{margin:4px 0;color:#334155}.actions{margin-top:22px}.solutions article{margin-top:12px}.status{display:inline-block;padding:7px 12px;background:#f1f5f9;border-radius:8px;color:#52647a}li{margin:8px 0}@media(max-width:700px){.grid{grid-template-columns:1fr}header,section{padding:18px}h2{font-size:24px}td,th{padding:7px;font-size:14px}th:nth-child(2){width:40%}}
 `}</style></main>;
}
