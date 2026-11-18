'use client';
import {useState} from 'react';
type Q={id:string;prompt:string;answer:number;unit:string;solution:string;pi?:boolean};
export const cylinderQuestions:Q[]=[
  {
    "id": "q1",
    "prompt": "Volume Quick Quiz (a): An oblique cylinder has base radius 5 m and perpendicular height 8 m. Find its volume in terms of π.",
    "answer": 200,
    "unit": "m³",
    "solution": "V = π × 5² × 8 = 200π m³.",
    "pi": true
  },
  {
    "id": "q2",
    "prompt": "Volume Quick Quiz (b): A horizontal cylinder has base diameter 12 cm and length 12 cm. Find its volume in terms of π.",
    "answer": 432,
    "unit": "cm³",
    "solution": "r = 6 cm. V = π × 6² × 12 = 432π cm³.",
    "pi": true
  },
  {
    "id": "d11",
    "prompt": "Instant Drill 11: Volume 240 cm³, height 8 cm. Find the base diameter to 2 significant figures.",
    "answer": 6.2,
    "unit": "cm",
    "solution": "d = 2√(240/(8π)) ≈ 6.2 cm.",
    "pi": false
  },
  {
    "id": "d12",
    "prompt": "Instant Drill 12(a): An 8 cm × 8 cm × 12 cm block has a cylindrical hole of radius 2 cm through its full height. Find the remaining volume to 3 significant figures.",
    "answer": 617,
    "unit": "cm³",
    "solution": "V = 8 × 8 × 12 − π × 2² × 12 = 768 − 48π ≈ 617 cm³.",
    "pi": false
  },
  {
    "id": "d13",
    "prompt": "Instant Drill 13: Six fully submerged metal balls each have volume 110 cm³. A cylindrical container has radius 5 cm. Find the water-level rise to 3 significant figures. No water overflows.",
    "answer": 8.4,
    "unit": "cm",
    "solution": "π × 5² × Δh = 6 × 110; Δh ≈ 8.40 cm.",
    "pi": false
  },
  {
    "id": "sac",
    "prompt": "Surface Quick Quiz (a): A closed right cylinder has radius 5 cm and height 6 cm. Find its curved surface area in terms of π.",
    "answer": 60,
    "unit": "cm²",
    "solution": "2π × 5 × 6 = 60π cm².",
    "pi": true
  },
  {
    "id": "sat",
    "prompt": "Surface Quick Quiz (a): A closed right cylinder has radius 5 cm and height 6 cm. Find its total surface area in terms of π.",
    "answer": 110,
    "unit": "cm²",
    "solution": "2π × 5 × 6 + 2π × 5² = 110π cm².",
    "pi": true
  },
  {
    "id": "sbc",
    "prompt": "Surface Quick Quiz (b): A closed right cylinder has diameter 14 m and height 9 m. Find its curved surface area in terms of π.",
    "answer": 126,
    "unit": "m²",
    "solution": "2π × 7 × 9 = 126π m².",
    "pi": true
  },
  {
    "id": "sbt",
    "prompt": "Surface Quick Quiz (b): A closed right cylinder has diameter 14 m and height 9 m. Find its total surface area in terms of π.",
    "answer": 224,
    "unit": "m²",
    "solution": "2π × 7 × 9 + 2π × 7² = 224π m².",
    "pi": true
  },
  {
    "id": "d14",
    "prompt": "Instant Drill 14: Height 18 cm, curved surface area 144π cm². Find the base radius.",
    "answer": 4,
    "unit": "cm",
    "solution": "2πr × 18 = 144π, so r = 4 cm.",
    "pi": false
  },
  {
    "id": "d15",
    "prompt": "Instant Drill 15: A cylindrical vessel has radius 4 cm and wet surface area 24π cm². Find the water depth.",
    "answer": 1,
    "unit": "cm",
    "solution": "8πh + 16π = 24π. h = 1 cm. Include one base only.",
    "pi": false
  },
  {
    "id": "d16v",
    "prompt": "Instant Drill 16(a): A small right cylinder (radius 3 cm, height 6 cm) sits on a larger one (diameter 8 cm, height 20 cm). Find total volume in terms of π.",
    "answer": 374,
    "unit": "cm³",
    "solution": "V = π × 3² × 6 + π × 4² × 20 = 374π cm³.",
    "pi": true
  },
  {
    "id": "d16a",
    "prompt": "Instant Drill 16(b): Find the exposed total surface area of that solid in terms of π.",
    "answer": 228,
    "unit": "cm²",
    "solution": "Curved areas = 36π + 160π. Exposed flat areas = 9π + (16π − 9π) + 16π = 32π. Total = 228π cm².",
    "pi": true
  },
  {
    "id": "cp1a",
    "prompt": "Class Practice 1a: r = 3 cm, h = 2 cm. Find volume.",
    "answer": 18,
    "unit": "cm³",
    "solution": "V = π × 3² × 2 = 18π cm³.",
    "pi": true
  },
  {
    "id": "cp1b",
    "prompt": "Class Practice 1b: h = 9 m, V = 144π m³. Find radius.",
    "answer": 4,
    "unit": "m",
    "solution": "r² = 144/9 = 16; r = 4 m.",
    "pi": false
  },
  {
    "id": "cp1c",
    "prompt": "Class Practice 1c: r = 7 mm, V = 245π mm³. Find perpendicular height.",
    "answer": 5,
    "unit": "mm",
    "solution": "h = 245/49 = 5 mm.",
    "pi": false
  },
  {
    "id": "cp2ac",
    "prompt": "Class Practice 2ac: r = 2 cm, h = 4 cm. Find curved surface area.",
    "answer": 16,
    "unit": "cm²",
    "solution": "C = 2π × 2 × 4 = 16π cm².",
    "pi": true
  },
  {
    "id": "cp2at",
    "prompt": "Class Practice 2at: r = 2 cm, h = 4 cm. Find total surface area.",
    "answer": 24,
    "unit": "cm²",
    "solution": "T = 16π + 2π × 2² = 24π cm².",
    "pi": true
  },
  {
    "id": "cp2bh",
    "prompt": "Class Practice 2bh: r = 6 mm, curved surface area 60π mm². Find height.",
    "answer": 5,
    "unit": "mm",
    "solution": "h = 60/(2 × 6) = 5 mm.",
    "pi": false
  },
  {
    "id": "cp2bt",
    "prompt": "Class Practice 2bt: r = 6 mm, curved surface area 60π mm². Find total surface area.",
    "answer": 132,
    "unit": "mm²",
    "solution": "T = 60π + 72π = 132π mm².",
    "pi": true
  },
  {
    "id": "cp2cr",
    "prompt": "Class Practice 2cr: h = 10 m, curved surface area 100π m². Find radius.",
    "answer": 5,
    "unit": "m",
    "solution": "r = 100/(2 × 10) = 5 m.",
    "pi": false
  },
  {
    "id": "cp2ct",
    "prompt": "Class Practice 2ct: h = 10 m, curved surface area 100π m². Find total surface area.",
    "answer": 150,
    "unit": "m²",
    "solution": "T = 100π + 2π × 5² = 150π m².",
    "pi": true
  },
  {
    "id": "cp2dh",
    "prompt": "Class Practice 2dh: r = 4 cm, total surface area 112π cm². Find height.",
    "answer": 10,
    "unit": "cm",
    "solution": "8πh + 32π = 112π; h = 10 cm.",
    "pi": false
  },
  {
    "id": "cp2dc",
    "prompt": "Class Practice 2dc: r = 4 cm, total surface area 112π cm². Find curved surface area.",
    "answer": 80,
    "unit": "cm²",
    "solution": "C = 112π − 32π = 80π cm².",
    "pi": true
  },
  {
    "id": "cp3",
    "prompt": "Class Practice 3: A hollow ring has outer diameter 8 mm, inner diameter 6 mm and height 7 mm. Find its volume to 3 significant figures.",
    "answer": 154,
    "unit": "mm³",
    "solution": "V = π(4² − 3²) × 7 = 49π ≈ 154 mm³.",
    "pi": false
  },
  {
    "id": "cp4",
    "prompt": "Class Practice 4: A fully submerged stone raises water by 2.6 cm in a cylinder of radius 5 cm, with no overflow. Find the stone volume to 3 significant figures.",
    "answer": 204,
    "unit": "cm³",
    "solution": "V = π × 5² × 2.6 = 65π ≈ 204 cm³.",
    "pi": false
  },
  {
    "id": "cp5a",
    "prompt": "Class Practice 5a: 1800 cm³ of water is poured into a cylinder of base diameter 20 cm. Find the depth to 3 significant figures.",
    "answer": 5.73,
    "unit": "cm",
    "solution": "h = 1800/(100π) = 18/π ≈ 5.73 cm.",
    "pi": false
  },
  {
    "id": "cp5b",
    "prompt": "Class Practice 5b: Find the wet surface area of the vessel in 5(a), to 3 significant figures.",
    "answer": 674,
    "unit": "cm²",
    "solution": "Use unrounded h = 18/π. A = 2π × 10 × (18/π) + 100π = 360 + 100π ≈ 674 cm².",
    "pi": false
  }
];
export function cylinderAnswerCorrect(raw:string,answer:number){const s=raw.trim();if(!/^\+?(?:\d+(?:\.\d*)?|\.\d+)(?:\/(?:\d+(?:\.\d*)?|\.\d+))?$/.test(s))return false;const [a,b]=s.split('/').map(Number);const n=b===undefined?a:a/b;return Number.isFinite(n)&&Math.abs(n-answer)<1e-8;}
export function S2Chapter13CylinderPractice(){const [answers,setAnswers]=useState<Record<string,string>>({});const [checked,setChecked]=useState(false);return <div><p>Enter numbers without units. For π answers, enter only the coefficient; fractions such as 11/4 are accepted. Round decimal answers as requested. Answers remain while switching lesson tabs, but are cleared on reload.</p><div className="actions"><button onClick={()=>setChecked(true)}>Check answers</button><button onClick={()=>{setAnswers({});setChecked(false)}}>Reset practice</button></div>{checked&&<p role="status">{cylinderQuestions.filter(q=>cylinderAnswerCorrect(answers[q.id]??'',q.answer)).length} / {cylinderQuestions.length} correct.</p>}<div className="questions">{cylinderQuestions.map((q,i)=><article key={q.id}><label htmlFor={'cylinder-'+q.id}><strong>{i+1}. </strong>{q.prompt}</label><div className="answer"><input id={'cylinder-'+q.id} type="text" autoComplete="off" value={answers[q.id]??''} onChange={e=>{setAnswers({...answers,[q.id]:e.target.value});setChecked(false)}}/><span>{q.pi?'π ':''}{q.unit}</span></div>{checked&&<div className="feedback"><strong>{!answers[q.id]?.trim()?'Not answered.':cylinderAnswerCorrect(answers[q.id],q.answer)?'Correct.':'Check your answer.'}</strong><p>{q.solution}</p></div>}</article>)}</div><button onClick={()=>setChecked(true)}>Check answers</button><style jsx>{`.questions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}article{min-width:0;padding:18px;border:1px solid #dce5ee;border-radius:14px;background:#f8fafc}label{display:block}.answer,.actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:16px 0}input{font:inherit;width:130px;max-width:100%;padding:10px;border:1px solid #64748b;border-radius:8px}button{font:inherit;padding:12px 16px;background:#0f766e;color:white;border:0;border-radius:10px;cursor:pointer}.feedback{background:#ecfeff;padding:12px;border-radius:10px}button:focus-visible,input:focus-visible{outline:3px solid #d97706;outline-offset:3px}@media(max-width:720px){.questions{grid-template-columns:1fr}}`}</style></div>}
