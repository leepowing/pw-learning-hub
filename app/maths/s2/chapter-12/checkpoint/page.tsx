"use client";

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { Diagram, Segment, AngleArc } from '@/components/maths/S2Chapter11Geometry';
import { DualReason } from '@/components/maths/DualReason';

type Field = { id: string; label: string; answer: number | string; display: string; choices?: string[]; unit?: string };
type Question = { title: string; topic: string; route: string; prompt: string; fields: Field[]; diagram?: ReactNode; steps: ReactNode[]; pythagoras?: boolean };
const base = '/maths/s2/chapter-12/';
const sides = 'concepts-of-trigonometric-ratios', sine = 'the-sine-ratio', cosine = 'the-cosine-ratio', tangent = 'the-tangent-ratio', applications = 'applications-of-trigonometric-ratios';
const tf = ['True', 'False'];
const text = { fill: '#172d50', fontFamily: 'Georgia, serif', fontSize: 24 };

function Triangle({ hidden = false }: { hidden?: boolean }) {
  const A = { x: 100, y: 285 }, B = { x: 412, y: 155 }, C = { x: 412, y: 285 };
  return <Diagram label={`Triangle ABC, right-angled at C. AC = 12, AB = 13${hidden ? ', BC is unknown' : ', BC = 5'}. Theta is at A.`}>
    <Segment a={A} b={B}/><Segment a={B} b={C}/><Segment a={C} b={A}/>
    <path d="M 392 285 V 265 H 412" fill="none" stroke="#0f766e" strokeWidth={2}/>
    <AngleArc centre={A} start={0} end={Math.atan2(5,12)*180/Math.PI} radius={55}/>
    <text {...text} x={175} y={273}>θ</text><text {...text} x={77} y={305}>A</text><text {...text} x={423} y={150}>B</text><text {...text} x={426} y={305}>C</text>
    <text {...text} x={245} y={320}>12</text><text {...text} x={230} y={203}>13</text><text {...text} x={437} y={229}>{hidden ? '?' : '5'}</text>
  </Diagram>;
}
function JoinedTriangles() {
  const A={x:65,y:290},B={x:220,y:290},P={x:220,y:135},C={x:220+Math.sqrt(75)*31,y:290};
  return <Diagram label="A, B and C are collinear. PB is perpendicular to AC. AB = 5 cm, PC = 10 cm, angle PAB = 45 degrees. PB = h and angle PCB = theta.">
    <Segment a={A} b={C}/><Segment a={A} b={P}/><Segment a={P} b={C}/><Segment a={P} b={B}/>
    <path d="M 220 272 H 238 V 290" fill="none" stroke="#0f766e" strokeWidth={2}/>
    <AngleArc centre={A} start={0} end={45} radius={36}/><AngleArc centre={C} start={150} end={180} radius={42}/>
    <text {...text} x={116} y={272}>45°</text><text {...text} x={418} y={276}>θ</text>
    <text {...text} x={48} y={313}>A</text><text {...text} x={214} y={322}>B</text><text {...text} x={488} y={317}>C</text><text {...text} x={216} y={119}>P</text>
    <text {...text} x={120} y={323}>5 cm</text><text {...text} x={236} y={225}>h</text><text {...text} x={348} y={190}>10 cm</text>
  </Diagram>;
}
const questions: Question[] = [
  {title:'Choose the ratios',topic:'12.1–12.4',route:sides,prompt:'Use triangle ABC to select each ratio relative to θ.',diagram:<Triangle/>,fields:[
    {id:'q1-sin',label:'sin θ',answer:'5/13',display:'5/13',choices:['5/13','12/13','5/12']},
    {id:'q1-cos',label:'cos θ',answer:'12/13',display:'12/13',choices:['5/13','12/13','5/12']},
    {id:'q1-tan',label:'tan θ',answer:'5/12',display:'5/12',choices:['5/13','12/13','5/12']}],steps:['Relative to θ, the opposite side is BC = 5, the adjacent side is AC = 12 and the hypotenuse is AB = 13.','sin θ = BC/AB = 5/13; cos θ = AC/AB = 12/13; tan θ = BC/AC = 5/12.']},
  {title:'Change the reference angle',topic:'12.1',route:sides,prompt:'In triangle ABC above, which side is opposite ∠ABC?',fields:[{id:'q2',label:'Opposite side',answer:'AC',display:'AC',choices:['AB','BC','AC']}],steps:['The side that does not meet vertex B is AC. The hypotenuse stays AB when the reference angle changes.']},
  {title:'Spot an incorrect equation',topic:'12.4',route:tangent,prompt:'For an acute angle α, the opposite side is 7 cm and the adjacent side is 9 cm. A student writes tan α = 9/7. Is this correct?',fields:[{id:'q3',label:'Statement',answer:'False',display:'False',choices:tf}],steps:['tan α = opposite / adjacent = 7/9. The student has reversed the ratio.']},
  {title:'Find a missing side first',topic:'12.3',route:cosine,prompt:'In a right-angled triangle, the hypotenuse is 17 cm and the side opposite β is 8 cm. Find the length of the side adjacent to β.',fields:[{id:'q4',label:'Adjacent side',answer:15,display:'15',unit:'cm'}],pythagoras:true,steps:['Let the adjacent side length be a cm. a² + 8² = 17².','a = √(17² − 8²) = √225 = 15 cm.']},
  {title:'Cosine and increasing angles',topic:'12.3',route:cosine,prompt:'If 0° < α < β < 90°, then cos α > cos β. Is this statement true?',fields:[{id:'q5',label:'Statement',answer:'True',display:'True',choices:tf}],steps:['For acute angles, cosine decreases as the angle increases. Therefore cos α > cos β.']},
  {title:'Can tangent exceed one?',topic:'12.4',route:tangent,prompt:'A right-angled triangle has opposite side 9 cm and adjacent side 4 cm relative to γ. The value of tan γ is greater than 1. Is this true?',fields:[{id:'q6',label:'Statement',answer:'True',display:'True',choices:tf}],steps:['tan γ = 9/4 = 2.25, which is greater than 1.']},
  {title:'Check a tempting shortcut',topic:'12.2',route:sine,prompt:'A student claims sin 25° + sin 35° = sin 60°. Use a calculator to decide whether the claim is true.',fields:[{id:'q7',label:'Statement',answer:'False',display:'False',choices:tf}],steps:['sin 25° + sin 35° ≈ 0.996195, whereas sin 60° ≈ 0.866025.','The two values are different. Sine does not distribute over addition of angles.']},
  {title:'Recover an acute angle',topic:'12.3',route:cosine,prompt:'cos θ = 0.6, where θ is acute. Find θ to the nearest degree.',fields:[{id:'q8',label:'θ',answer:53,display:'53',unit:'°'}],steps:['Use degree mode: θ = cos⁻¹(0.6) ≈ 53.1301°.','θ ≈ 53° to the nearest degree.']},
  {title:'Calculate before rounding',topic:'12.2',route:sine,prompt:'sin φ = 0.4 × tan 50°, where φ is acute. Find φ to 1 decimal place.',fields:[{id:'q9',label:'φ',answer:28.5,display:'28.5',unit:'°'}],steps:['0.4 × tan 50° ≈ 0.4767014.','φ = sin⁻¹(0.4 × tan 50°) ≈ 28.4702°, so φ ≈ 28.5°.']},
  {title:'Find an opposite side',topic:'12.2',route:sine,prompt:'The hypotenuse of a right-angled triangle is 18 cm. Find the side opposite its 32° angle, correct to 3 significant figures.',fields:[{id:'q10',label:'Opposite side',answer:9.54,display:'9.54',unit:'cm'}],steps:['sin 32° = opposite / 18.','Opposite side = 18 sin 32° ≈ 9.53855 cm ≈ 9.54 cm.']},
  {title:'Find a hypotenuse',topic:'12.3',route:cosine,prompt:'The side adjacent to a 41° angle is 7 cm in a right-angled triangle. Find its hypotenuse to 3 significant figures.',fields:[{id:'q11',label:'Hypotenuse',answer:9.28,display:'9.28',unit:'cm'}],steps:['Let the hypotenuse be c cm. cos 41° = 7/c.','c = 7/cos 41° ≈ 9.27509 cm ≈ 9.28 cm.']},
  {title:'Connect two triangles',topic:'12.5',route:applications,prompt:'A, B and C lie on a straight line, and PB is perpendicular to AC. Find h and θ. Give exact answers.',diagram:<JoinedTriangles/>,fields:[{id:'q12-h',label:'h',answer:5,display:'5',unit:'cm'},{id:'q12-angle',label:'θ',answer:30,display:'30',unit:'°'}],steps:['In △ABP: tan 45° = h/5, so h = 5 tan 45° = 5 cm.','In △PBC: sin θ = PB/PC = 5/10 = 1/2.','Since θ is acute, θ = sin⁻¹(1/2) = 30°.']}
];
const fields = questions.flatMap(q => q.fields);
function isCorrect(field: Field, value = '') {
  const s = value.trim();
  if (!s) return false;
  if (typeof field.answer === 'string') return s === field.answer;
  // Decimal input only: reject hexadecimal, Infinity and accidental text.
  return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s) && Math.abs(Number(s) - field.answer) < 1e-8;
}
export default function Checkpoint() {
  const [answers,setAnswers]=useState<Record<string,string>>({});
  const [checked,setChecked]=useState(false);
  const attempted=fields.filter(f=>(answers[f.id]||'').trim()).length;
  const score=fields.filter(f=>isCorrect(f,answers[f.id])).length;
  function update(id:string,value:string){setAnswers(a=>({...a,[id]:value}));setChecked(false);}
  return <main className="trig-checkpoint"><Link href={base}>← Chapter 12 overview</Link>
    <header><p className="eyebrow">S2 · CHAPTER 12</p><h1>Chapter Checkpoint</h1><p>Introduction to Trigonometry</p><p>12 original questions · 15 marks · Sections 12.1–12.5</p><p>Use degree mode. Enter numbers only in numerical fields; units are shown alongside. Round only your final answers as requested.</p><p>Answers stay on this page only and are cleared when you reload.</p></header>
    <p className="progress" aria-live="polite">{attempted} / {fields.length} answers entered</p>
    {questions.map((q,i)=><section key={q.title} id={'question-'+(i+1)} aria-labelledby={'title-'+i}>
      <p className="eyebrow">SECTION {q.topic}</p><h2 id={'title-'+i}>{i+1}. {q.title}</h2><p>{q.prompt}</p>{q.diagram}
      <div className="fields">{q.fields.map(f=><div className="field" key={f.id}><label htmlFor={f.id}>{f.label}</label>
        {f.choices?<select id={f.id} value={answers[f.id]||''} onChange={e=>update(f.id,e.target.value)}><option value="">Choose an answer</option>{f.choices.map(c=><option key={c}>{c}</option>)}</select>:<div><input id={f.id} inputMode="decimal" type="text" value={answers[f.id]||''} onChange={e=>update(f.id,e.target.value)}/><span className="unit">{f.unit}</span></div>}
        {checked&&<p className="feedback">{isCorrect(f,answers[f.id])?'Correct.':!(answers[f.id]||'').trim()?'Not answered.':'Incorrect.'} Answer: {f.display}{f.unit?' '+f.unit:''}</p>}
      </div>)}</div>
      {checked&&<div className="solution"><h3>Worked solution</h3><table><thead><tr><th>Working</th><th>Reason</th></tr></thead><tbody>{q.steps.map((step,j)=><tr key={j}><td>{step}</td><td>{q.pythagoras&&j===0?<DualReason reasonId="pythagoras.theorem"/>:null}</td></tr>)}</tbody></table><Link href={base+q.route}>Review Section {q.topic} →</Link></div>}
    </section>)}
    <div className="actions"><button type="button" onClick={()=>setChecked(true)}>Check answers</button><button type="button" className="secondary" onClick={()=>{setAnswers({});setChecked(false);}}>Reset checkpoint</button></div>
    {checked&&<section role="status"><h2>{score} / {fields.length} correct</h2><p>{fields.length-attempted} unanswered. Each answer is worth one mark.</p><p>{score===fields.length?'All correct. You have completed this checkpoint.':'Read the worked solutions, revisit any relevant lessons, then try again.'}</p></section>}
    <footer><Link href={base+applications}>← Section 12.5</Link><Link href={base}>Chapter overview →</Link><Link href="/maths/s2/chapter-12/flashcards">Chapter Flashcards</Link></footer>
    <style jsx global>{`
      .trig-checkpoint{max-width:980px;width:calc(100% - 32px);margin:32px auto 72px;color:#24364b;font-family:Arial,sans-serif;line-height:1.65;overflow-wrap:anywhere}.trig-checkpoint *{box-sizing:border-box}.trig-checkpoint a{color:#0f766e;font-weight:700}.trig-checkpoint header,.trig-checkpoint section{padding:28px;border:1px solid #dce5ee;border-radius:20px;margin:24px 0;background:white}.trig-checkpoint header{background:#ecfeff}.trig-checkpoint h1{font-size:clamp(30px,5vw,48px);line-height:1.2}.trig-checkpoint h2{font-size:25px;line-height:1.3}.trig-checkpoint .eyebrow{color:#0e7490;font-size:13px;font-weight:700;letter-spacing:.08em}.trig-checkpoint .fields{display:flex;gap:20px;flex-wrap:wrap}.trig-checkpoint .field{min-width:0;max-width:100%;flex:1 1 220px}.trig-checkpoint label{display:block;font-weight:700;margin-bottom:6px}.trig-checkpoint input,.trig-checkpoint select{font:inherit;padding:11px;border:1px solid #64748b;border-radius:8px;max-width:100%;background:white;color:#24364b}.trig-checkpoint input{width:150px}.trig-checkpoint .unit{margin-left:10px}.trig-checkpoint .feedback{font-weight:700}.trig-checkpoint table{border-collapse:collapse;width:100%;table-layout:fixed;margin-bottom:18px}.trig-checkpoint th,.trig-checkpoint td{text-align:left;vertical-align:top;border:1px solid #cbd5e1;padding:12px}.trig-checkpoint th{background:#ecfeff}.trig-checkpoint th:first-child{width:60%}.trig-checkpoint .solution{margin-top:25px}.trig-checkpoint button{font:inherit;padding:12px 18px;border:1px solid #0f766e;background:#0f766e;color:white;border-radius:9px;cursor:pointer}.trig-checkpoint .secondary{color:#0f766e;background:white}.trig-checkpoint .actions{display:flex;gap:12px;flex-wrap:wrap}.trig-checkpoint :is(button,input,select,a):focus-visible{outline:3px solid #b45309;outline-offset:3px}.trig-checkpoint footer{margin-top:30px;display:flex;gap:20px;flex-wrap:wrap}.trig-checkpoint footer p{width:100%}@media(max-width:600px){.trig-checkpoint header,.trig-checkpoint section{padding:16px}.trig-checkpoint th,.trig-checkpoint td{padding:8px;font-size:15px}.trig-checkpoint th:first-child{width:50%}}
    `}</style>
  </main>;
}
