'use client';
import {useState} from 'react';
import {S2Chapter13SectorDiagram as Diagram} from './S2Chapter13SectorDiagram';
type Q={id:string;prompt:string;answer:number;unit:string;solution:string;pi?:boolean;angle?:number;radius?:string;inner?:boolean};
export const sectorQuestions:Q[]=[
{id:'aq1',prompt:'Quick Quiz: Find the minor arc length for r = 4 cm, θ = 50°. Give 1 decimal place.',answer:3.5,unit:'cm',solution:'l = (50/360) × 8π ≈ 3.5 cm.',angle:50,radius:'4 cm'},
{id:'aq2',prompt:'Quick Quiz: The smaller angle is 120° and r = 5 m. Find the major arc length to 1 decimal place.',answer:20.9,unit:'m',solution:'Major angle = 360° − 120° = 240°. l = (240/360) × 10π ≈ 20.9 m.',angle:240,radius:'5 m'},
{id:'d6',prompt:'Instant Drill 6: Arc length 19 cm, radius 12 cm. Find the central angle to 3 significant figures.',answer:90.7,unit:'°',solution:'θ = 19 × 360/(2π × 12) ≈ 90.7°.'},
{id:'d7',prompt:'Instant Drill 7: A sector-shaped shot-put field has angle 80° and perimeter 34 m. Find its radius to 2 significant figures.',answer:10,unit:'m',solution:'34 = 2r + (80/360) × 2πr. r = 34/(2 + 4π/9) ≈ 10 m (2 s.f.).'},
{id:'sq1',prompt:'Quick Quiz: Sector radius 5 cm, angle 110°. Find its area to 1 decimal place.',answer:24,unit:'cm²',solution:'A = (110/360) × π × 5² ≈ 24.0 cm².',angle:110,radius:'5 cm'},
{id:'sq2',prompt:'Quick Quiz: Sector radius 8 mm, angle 225°. Find its area to 1 decimal place.',answer:125.7,unit:'mm²',solution:'A = (225/360) × π × 8² = 40π ≈ 125.7 mm².',angle:225,radius:'8 mm'},
{id:'d8',prompt:'Instant Drill 8: Sector area 27π cm², angle 30°. Find its radius.',answer:18,unit:'cm',solution:'(30/360)πr² = 27π, so r² = 324 and r = 18 cm.'},
{id:'d9',prompt:'Instant Drill 9: Sector radius 10 mm and area 20π mm². Find its arc length to the nearest 0.1 mm.',answer:12.6,unit:'mm',solution:'θ = 20π × 360/(100π) = 72°. l = (72/360) × 20π = 4π ≈ 12.6 mm.'},
{id:'d10a',prompt:'Instant Drill 10(a): Concentric sectors have angle 72°, inner radius 20 cm and outer arc length 12π cm. Find the radial width AC.',answer:10,unit:'cm',solution:'(72/360) × 2πR = 12π, so R = 30 cm. AC = 30 − 20 = 10 cm.',angle:72,radius:'inner 20 cm',inner:true},
{id:'d10b',prompt:'Instant Drill 10(b): Find the shaded area in terms of π.',answer:100,pi:true,unit:'cm²',solution:'A = (72/360)π(30² − 20²) = 100π cm².'},
...([
['1(a)','18 cm',100,18,10,90,'cm'],['1(b)','6 m',210,6,7,21,'m'],['1(c)','11 mm',45,11,2.75,15.125,'mm']
] as const).flatMap(([name,label,angle,r,l,a,u])=>[
{id:`cp${name}l`,prompt:`Class Practice ${name}: r = ${label}, θ = ${angle}°. Find the arc length in terms of π.`,answer:l,pi:true,unit:u,solution:`l = (${angle}/360) × 2π × ${r} = ${l}π ${u}.`,angle,radius:label},
{id:`cp${name}a`,prompt:`Class Practice ${name}: Find the area of the same sector in terms of π.`,answer:a,pi:true,unit:u+'²',solution:`A = (${angle}/360) × π × ${r}² = ${a}π ${u}².`}]),
{id:'cp2a',prompt:'Class Practice 2(a): Arc length 4π cm, radius 9 cm. Find θ.',answer:80,unit:'°',solution:'θ = 4π × 360/(18π) = 80°.'},
{id:'cp2b',prompt:'Class Practice 2(b): Sector area 16π cm², radius 8 cm. Find θ.',answer:90,unit:'°',solution:'θ = 16π × 360/(64π) = 90°.'},
{id:'cp2c',prompt:'Class Practice 2(c): A major sector has area 8.25π mm² and radius 3 mm. Find the angle θ of the missing minor sector.',answer:30,unit:'°',solution:'Major angle = 8.25π × 360/(9π) = 330°. Missing θ = 360° − 330° = 30°.'},
{id:'cp3a',prompt:'Class Practice 3(a): Arc length 8π cm and angle 120°. Find the radius.',answer:12,unit:'cm',solution:'r = 8π × 360/(120 × 2π) = 12 cm.'},
{id:'cp3b',prompt:'Class Practice 3(b): Find the area of that sector to 3 significant figures.',answer:151,unit:'cm²',solution:'A = (120/360)π × 12² = 48π ≈ 151 cm².'},
{id:'cp4a',prompt:'Class Practice 4(a): Sector area 7π cm² and angle 70°. Find the radius.',answer:6,unit:'cm',solution:'r² = 7π × 360/(70π) = 36. r = 6 cm.'},
{id:'cp4b',prompt:'Class Practice 4(b): Find its perimeter to 2 significant figures.',answer:19,unit:'cm',solution:'P = 12 + (70/360) × 12π ≈ 19 cm (2 s.f.).'},
...([
['a','r = 6 cm; l = 10π cm','angle',300,'°',false,'θ = 10π × 360/(12π) = 300°.'],
['a','r = 6 cm; l = 10π cm','area',30,'cm²',true,'A = (300/360)π × 36 = 30π cm².'],
['b','θ = 210°; l = 14π m','radius',12,'m',false,'r = 14π × 360/(210 × 2π) = 12 m.'],
['b','θ = 210°; l = 14π m','area',84,'m²',true,'A = (210/360)π × 144 = 84π m².'],
['c','r = 21 mm; A = 147π mm²','angle',120,'°',false,'θ = 147π × 360/(441π) = 120°.'],
['c','r = 21 mm; A = 147π mm²','arc length',14,'mm',true,'l = (120/360) × 42π = 14π mm.'],
['d','θ = 45°; A = 8π cm²','radius',8,'cm',false,'r² = 8π × 360/(45π) = 64. r = 8 cm.'],
['d','θ = 45°; A = 8π cm²','arc length',2,'cm',true,'l = (45/360) × 16π = 2π cm.']
] as const).map(([row,given,find,answer,unit,pi,solution],i)=>({id:`t${i}`,prompt:`Class Practice 5(${row}): ${given}. Find the ${find}.`,answer,unit,pi,solution}))
];
export function sectorAnswerCorrect(raw:string,answer:number){const s=raw.trim();if(!/^\+?(?:\d+(?:\.\d*)?|\.\d+)(?:\/(?:\d+(?:\.\d*)?|\.\d+))?$/.test(s))return false;const [a,b]=s.split('/').map(Number);const n=b===undefined?a:a/b;return Number.isFinite(n)&&Math.abs(n-answer)<1e-8;}
export function S2Chapter13SectorPractice(){const [answers,setAnswers]=useState<Record<string,string>>({});const [checked,setChecked]=useState(false);return <div><p>Enter numbers without units. For π answers, enter only the coefficient; fractions such as 11/4 are accepted. Round decimal answers as requested. Answers remain while switching lesson tabs, but are cleared on reload.</p><div className="actions"><button onClick={()=>setChecked(true)}>Check answers</button><button onClick={()=>{setAnswers({});setChecked(false)}}>Reset practice</button></div>{checked&&<p role="status">{sectorQuestions.filter(q=>sectorAnswerCorrect(answers[q.id]??'',q.answer)).length} / {sectorQuestions.length} correct.</p>}<div className="questions">{sectorQuestions.map((q,i)=><article key={q.id}><label htmlFor={'sector-'+q.id}><strong>{i+1}. </strong>{q.prompt}</label>{q.angle&&<Diagram angle={q.angle} radius={q.radius} inner={q.inner}/>}<div className="answer"><input id={'sector-'+q.id} type="text" autoComplete="off" value={answers[q.id]??''} onChange={e=>{setAnswers({...answers,[q.id]:e.target.value});setChecked(false)}}/><span>{q.pi?'π ':''}{q.unit}</span></div>{checked&&<div className="feedback"><strong>{!answers[q.id]?.trim()?'Not answered.':sectorAnswerCorrect(answers[q.id],q.answer)?'Correct.':'Check your answer.'}</strong><p>{q.solution}</p></div>}</article>)}</div><button onClick={()=>setChecked(true)}>Check answers</button><style jsx>{`.questions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}article{min-width:0;padding:18px;border:1px solid #dce5ee;border-radius:14px;background:#f8fafc}label{display:block}.answer,.actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:16px 0}input{font:inherit;width:130px;max-width:100%;padding:10px;border:1px solid #64748b;border-radius:8px}button{font:inherit;padding:12px 16px;background:#0f766e;color:white;border:0;border-radius:10px;cursor:pointer}.feedback{background:#ecfeff;padding:12px;border-radius:10px}button:focus-visible,input:focus-visible{outline:3px solid #d97706;outline-offset:3px}@media(max-width:720px){.questions{grid-template-columns:1fr}}`}</style></div>}
