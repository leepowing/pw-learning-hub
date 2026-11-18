'use client';
import { useState } from 'react';
import { S2Chapter13CircleDiagram as Diagram, type CircleDiagramKind } from './S2Chapter13CircleDiagram';
import { DualReason } from './DualReason';
type Question={id:string;prompt:string;answer:number;pi?:boolean;unit:string;solution:string;kind?:CircleDiagramKind;label?:string;diameter?:boolean;reason?:boolean;practice?:boolean};
export const circleQuestions:Question[]=[
{id:'cq1',prompt:'Circumference: diameter 12 m. Give your answer in terms of π.',answer:12,pi:true,unit:'m',solution:'C = πd = 12π m.',label:'d = 12 m',diameter:true},
{id:'cq2',prompt:'Circumference: radius 9 cm. Give your answer to 1 decimal place.',answer:56.5,unit:'cm',solution:'C = 2π × 9 = 18π ≈ 56.5 cm.',label:'r = 9 cm'},
{id:'d1',prompt:'Instant Drill 1: A wire of length 16 cm is bent into a circle. Find its diameter to 3 significant figures.',answer:5.09,unit:'cm',solution:'C = πd, so d = 16/π ≈ 5.09 cm.'},
{id:'d2',prompt:'Instant Drill 2: The large semicircle has radius 7 m. The smaller semicircle has diameter OQ = 7 m. Find the remaining perimeter to 3 significant figures.',answer:40,unit:'m',solution:'P = 7π + 3.5π + 7 = 10.5π + 7 ≈ 40.0 m. OQ is not part of the remaining boundary.',kind:'offset'},
{id:'aq1',prompt:'Area: radius 4 m. Give your answer in terms of π.',answer:16,pi:true,unit:'m²',solution:'A = π × 4² = 16π m².',label:'r = 4 m'},
{id:'aq2',prompt:'Area: diameter 10 m. Give your answer to the nearest m².',answer:79,unit:'m²',solution:'r = 5 m. A = 25π ≈ 79 m².',label:'d = 10 m',diameter:true},
{id:'d3',prompt:'Instant Drill 3: A circular beach raft has area 9π m². Find its diameter.',answer:6,unit:'m',solution:'πr² = 9π, so r = 3 m and d = 6 m.'},
{id:'d4',prompt:'Instant Drill 4: A circular flower bed has diameter 24 m. A path of width 2 m surrounds it. Find the area of the path in terms of π.',answer:52,pi:true,unit:'m²',solution:'Inner radius = 12 m; outer radius = 14 m. Path area = π(14² − 12²) = 52π m².'},
{id:'d5p',prompt:'Instant Drill 5(a): Remove the right-angled triangle from the semicircle. Find the perimeter of the shaded region to 3 significant figures.',answer:86.6,unit:'m',solution:'BC = √(21² + 20²) = 29 m. P = 21 + 20 + π × 14.5 ≈ 86.6 m. Do not include the dashed diameter.',kind:'triangleCut',reason:true},
{id:'d5a',prompt:'Instant Drill 5(b): Find the shaded area in the preceding diagram to 3 significant figures.',answer:120,unit:'m²',solution:'A = ½π × 14.5² − ½ × 21 × 20 ≈ 120 m² (3 s.f.).'},
{id:'cp1ap',prompt:'Class Practice 1(a): Circle diameter 15 cm. Find its perimeter to 3 significant figures.',answer:47.1,unit:'cm',solution:'P = 15π ≈ 47.1 cm.',label:'d = 15 cm',diameter:true},
{id:'cp1aa',prompt:'Class Practice 1(a): Find the area of that circle to 3 significant figures.',answer:177,unit:'cm²',solution:'A = π × 7.5² ≈ 177 cm².'},
{id:'cp1bp',prompt:'Class Practice 1(b): Two semicircles of radius 8 cm form this shape. Find its perimeter to 3 significant figures.',answer:66.3,unit:'cm',solution:'P = 8π + 8π + 8 + 8 = 16π + 16 ≈ 66.3 cm. The shared internal segment is not on the perimeter.',kind:'double'},
{id:'cp1ba',prompt:'Class Practice 1(b): Find the area of that shape to 3 significant figures.',answer:201,unit:'cm²',solution:'A = 2 × ½π × 8² = 64π ≈ 201 cm².'},
{id:'cp1cp',prompt:'Class Practice 1(c): A 10 cm by 8 cm rectangle has a semicircle at each short end. Find its perimeter to 3 significant figures.',answer:45.1,unit:'cm',solution:'P = 2 × 10 + π × 8 ≈ 45.1 cm.',kind:'stadium',practice:true},
{id:'cp1ca',prompt:'Class Practice 1(c): Find the area of that shape to 3 significant figures.',answer:130,unit:'cm²',solution:'A = 10 × 8 + π × 4² ≈ 130 cm² (3 s.f.).'},
...[
['a','radius 3 m','diameter',6,false,'m','d = 2 × 3 = 6 m.'],['a','radius 3 m','circumference',6,true,'m','C = 2π × 3 = 6π m.'],['a','radius 3 m','area',9,true,'m²','A = π × 3² = 9π m².'],
['b','diameter 5 mm','radius',2.5,false,'mm','r = 5 ÷ 2 = 2.5 mm.'],['b','diameter 5 mm','circumference',5,true,'mm','C = π × 5 = 5π mm.'],['b','diameter 5 mm','area',6.25,true,'mm²','A = π × 2.5² = 6.25π mm².'],
['c','circumference 15π cm','radius',7.5,false,'cm','2πr = 15π, so r = 7.5 cm.'],['c','circumference 15π cm','diameter',15,false,'cm','πd = 15π, so d = 15 cm.'],['c','circumference 15π cm','area',56.25,true,'cm²','A = π × 7.5² = 56.25π cm².'],
['d','area 144π cm²','radius',12,false,'cm','r² = 144, so r = 12 cm.'],['d','area 144π cm²','diameter',24,false,'cm','d = 2 × 12 = 24 cm.'],['d','area 144π cm²','circumference',24,true,'cm','C = 2π × 12 = 24π cm.'],
].map((q,i)=>({id:`table${i}`,prompt:`Class Practice 2(${q[0]}): Given ${q[1]}, find the ${q[2]}.`,answer:q[3] as number,pi:q[4] as boolean,unit:q[5] as string,solution:q[6] as string}))
];
export function circleAnswerCorrect(raw:string,expected:number):boolean {
 const value=raw.trim();if(!/^[+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value))return false;
 return Math.abs(Number(value)-expected)<1e-8;
}
export function S2Chapter13CirclePractice(){
 const [answers,setAnswers]=useState<Record<string,string>>({});const [checked,setChecked]=useState(false);
 const score=circleQuestions.filter(q=>circleAnswerCorrect(answers[q.id]??'',q.answer)).length;
 return <div><p>For answers in terms of π, enter only the coefficient in the box before π. Enter numbers without units; units are supplied. Give decimal answers at the requested accuracy. Trailing zeros such as 40.0 are accepted.</p>
 <div className="actions"><button type="button" onClick={()=>setChecked(true)}>Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false)}}>Reset practice</button></div>
 {checked&&<p role="status">{score} / {circleQuestions.length} correct. Blank answers are not counted as correct.</p>}
 <div className="questions">{circleQuestions.map((q,index)=><article key={q.id}>
 <label htmlFor={q.id}><strong>{index+1}. </strong>{q.prompt}</label>
 {(q.kind||q.label)&&<Diagram kind={q.kind} label={q.label??''} diameter={q.diameter} practice={q.practice}/>}
 <div className="answer"><input id={q.id} type="text" inputMode="decimal" autoComplete="off" value={answers[q.id]??''} onChange={e=>{setAnswers({...answers,[q.id]:e.target.value});setChecked(false)}}/><span>{q.pi?'π ':''}{q.unit}</span></div>
 {checked&&<div className="feedback"><strong>{!(answers[q.id]??'').trim()?'Not answered.':circleAnswerCorrect(answers[q.id],q.answer)?'Correct.':'Check your answer.'}</strong><p>{q.solution}</p>{q.reason&&<DualReason reasonId="pythagoras.theorem"/>}</div>}
 </article>)}</div><div className="actions"><button type="button" onClick={()=>setChecked(true)}>Check answers</button></div>
 <style jsx>{`.questions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}article{min-width:0;padding:18px;border:1px solid #dce5ee;border-radius:14px;background:#f8fafc}label{display:block;line-height:1.6}.answer,.actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:16px 0}input{font:inherit;border:1px solid #64748b;border-radius:8px;padding:10px;width:140px;max-width:100%;box-sizing:border-box}button{font:inherit;background:#0f766e;color:white;border:0;border-radius:10px;padding:12px 16px;cursor:pointer}.feedback{background:#ecfeff;padding:12px;border-radius:10px;overflow-wrap:anywhere}button:focus-visible,input:focus-visible{outline:3px solid #d97706;outline-offset:3px}@media(max-width:720px){.questions{grid-template-columns:1fr}}`}</style></div>;
}
