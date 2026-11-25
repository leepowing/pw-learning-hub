"use client";
import Link from "next/link";
import {useState} from "react";
import katex from "katex";
import type {Lesson} from "./lessonData";
const tex=(s:string)=>({__html:katex.renderToString(s,{displayMode:true,throwOnError:false,strict:"ignore"})});
function Graph({mode}:{mode:string}){
 const W=520,H=295,s=30,px=(x:number)=>260+x*s,py=(y:number)=>160-y*s;
 const f=(x:number)=>mode==="quadratic"?x*x-2*x-3:mode==="linear"?2*x-1:x*x;
 if(mode==="mapping")return <svg viewBox="0 0 520 295" role="img" aria-label="Mapping diagram: each input has one output" style={{width:"100%",maxWidth:560}}><ellipse cx="125" cy="142" rx="68" ry="118" fill="#eff6ff" stroke="#64748b"/><ellipse cx="395" cy="142" rx="68" ry="118" fill="#ecfdf5" stroke="#64748b"/><text x="100" y="24">Domain</text><text x="365" y="24">Codomain</text>{[-1,0,2].map((a,i)=><g key={i}><text x="118" y={95+i*52}>{a}</text><text x="390" y={95+i*52}>{[1,0,4][i]}</text><line x1="140" y1={90+i*52} x2="379" y2={90+i*52} stroke="#047857" strokeWidth="2"/><path d={`M379 ${90+i*52} l-9 -4 v8 Z`} fill="#047857"/></g>)}</svg>;
 const points=Array.from({length:101},(_,i)=>-3+i*.06).map(x=>`${px(x)},${py(f(x))}`).join(" ");
 return <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={mode==="quadratic"?"Coordinate graph of a quadratic curve":"Coordinate graph of a linear function"} style={{width:"100%",maxWidth:560}}><defs><clipPath id="function-plot-clip"><rect x="25" y="18" width="470" height="255"/></clipPath></defs>{Array.from({length:15},(_,i)=>i-7).map(i=><g key={i} stroke="#e2e8f0"><line x1={px(i)} y1="18" x2={px(i)} y2="273"/><line x1="25" y1={py(i)} x2="495" y2={py(i)}/></g>)}<path d={`M25 ${py(0)} H495 M${px(0)} 18 V273`} fill="none" stroke="#334155" strokeWidth="2"/><text x="485" y={py(0)-8}>x</text><text x={px(0)+9} y="28">y</text><g clipPath="url(#function-plot-clip)"><polyline points={points} fill="none" stroke="#047857" strokeWidth="3"/></g></svg>;
}

// Section 3.3 uses one coordinate scale for every original, mathematically plotted graph.
type SpecialPlotKind="constant"|"linear"|"quadratic"|"cubic";
const specialGraphs:{kind:SpecialPlotKind;name:string;formula:string}[]=[
 {kind:"constant",name:"Constant function",formula:"y=3"},
 {kind:"linear",name:"Linear function",formula:"y=2x-1"},
 {kind:"quadratic",name:"Quadratic function",formula:"y=x^2-2x-3"},
 {kind:"cubic",name:"Cubic function",formula:"y=x^3-x"},
];
function SpecialGraph({kind,compact=false}:{kind:SpecialPlotKind;compact?:boolean}){
 const W=480,H=380,unit=26,cx=240,cy=188;
 const sx=(x:number)=>cx+x*unit,sy=(y:number)=>cy-y*unit;
 const f=(x:number)=>kind==="constant"?3:kind==="linear"?2*x-1:kind==="quadratic"?x*x-2*x-3:x*x*x-x;
 const domain:[number,number]=kind==="constant"?[-6,6]:kind==="linear"?[-3,3.5]:kind==="quadratic"?[-2,4]:[-2.08,2.08];
 const path=Array.from({length:241},(_,i)=>{
   const x=domain[0]+(domain[1]-domain[0])*i/240;
   return `${i===0?'M':'L'} ${sx(x).toFixed(2)} ${sy(f(x)).toFixed(2)}`;
 }).join(' ');
 const marks:Record<SpecialPlotKind,[number,number,string][]>={
  constant:[[0,3,"(0, 3)"],[2,3,"(2, 3)"]],
  linear:[[0,-1,"(0, -1)"],[1,1,"(1, 1)"]],
  quadratic:[[-1,0,"(-1, 0)"],[1,-4,"(1, -4)"],[3,0,"(3, 0)"]],
  cubic:[[-2,-6,"(-2, -6)"],[0,0,"(0, 0)"],[2,6,"(2, 6)"]],
 };
 return <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${kind} function plotted using equal x and y units, with plotted coordinates`} style={{width:"100%",maxWidth:compact?490:680,height:"auto",display:"block",margin:"0 auto"}}>
   <rect x="1" y="1" width="478" height="378" fill="#fff" rx="12"/>
   {Array.from({length:17},(_,i)=>i-8).map(v=><g key={`x${v}`}><line x1={sx(v)} x2={sx(v)} y1="14" y2="366" stroke="#e2e8f0"/></g>)}
   {Array.from({length:15},(_,i)=>i-7).map(v=><line key={`y${v}`} x1="14" x2="466" y1={sy(v)} y2={sy(v)} stroke="#e2e8f0"/>)}
   <line x1="14" x2="466" y1={cy} y2={cy} stroke="#334155" strokeWidth="2"/><line x1={cx} x2={cx} y1="14" y2="366" stroke="#334155" strokeWidth="2"/>
   <text x="452" y={cy-9} fontSize="16" fill="#334155">x</text><text x={cx+10} y="27" fontSize="16" fill="#334155">y</text>
   {[-4,-2,2,4].map(v=><g key={`tick${v}`}><text x={sx(v)-7} y={cy+17} fontSize="11" fill="#475569">{v}</text><text x={cx+7} y={sy(v)-4} fontSize="11" fill="#475569">{v}</text></g>)}
   <text x={cx+7} y={cy+17} fontSize="11" fill="#475569">O</text>
   <path d={path} fill="none" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
   {marks[kind].map(([x,y,label],i)=><g key={i}><circle cx={sx(x)} cy={sy(y)} r="4.5" fill="#2563eb" stroke="white" strokeWidth="1.5"/><text x={sx(x)+(kind==="quadratic"&&x===1?10:8)} y={sy(y)+(kind==="quadratic"&&x===1?18:-8)} fontSize="11" fill="#1e3a8a">{label}</text></g>)}
 </svg>;
}
const ch3Tables:Record<number,{xs:string[];ys:string[];substitutions:string[];formula:string;kind:SpecialPlotKind}>={
 0:{xs:["−1","0","1"],ys:["−3","−1","1"],substitutions:["x=-1: \\;y=2(-1)-1=-3","x=0: \\;y=2(0)-1=-1","x=1: \\;y=2(1)-1=1"],formula:"y=2x-1",kind:"linear"},
 1:{xs:["−1","0","1","2","3"],ys:["0","−3","−4","−3","0"],substitutions:["x=-1: \\;y=(-1)^2-2(-1)-3=0","x=0: \\;y=0^2-2(0)-3=-3","x=1: \\;y=1^2-2(1)-3=-4","x=2: \\;y=2^2-2(2)-3=-3","x=3: \\;y=3^2-2(3)-3=0"],formula:"y=x^2-2x-3",kind:"quadratic"},
 2:{xs:["−2","−1","0","1","2"],ys:["−6","0","0","0","6"],substitutions:["x=-2: \\;y=(-2)^3-(-2)=-6","x=-1: \\;y=(-1)^3-(-1)=0","x=0: \\;y=0^3-0=0","x=1: \\;y=1^3-1=0","x=2: \\;y=2^3-2=6"],formula:"y=x^3-x",kind:"cubic"},
};
function Chapter3Visual(){return <section className="tile"><p className="tag">VISUAL EXPLANATION</p><p>Compare four types of functions. Every graph uses equal units on the axes and shows the full curve through the marked points.</p><div className="special-grid">{specialGraphs.map(g=><div className="special-chart" key={g.kind}><h3>{g.name}</h3><div className="formula" dangerouslySetInnerHTML={tex(g.formula)}/><SpecialGraph kind={g.kind} compact/></div>)}</div><style jsx>{`.special-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.special-chart{border:1px solid #e2e8f0;border-radius:14px;padding:12px;min-width:0}.special-chart h3{font-size:18px;margin:0 0 4px}@media(max-width:760px){.special-grid{grid-template-columns:1fr}}`}</style></section>}
function Chapter3Worked({topicIndex}:{topicIndex:number}){
 const data=ch3Tables[topicIndex];
 if(!data)return null;
 return <><p>Substitute each x-value into the function rule. Keep the signs and brackets in each calculation.</p><div className="ch3-steps">{data.substitutions.map((step,i)=><div key={i} className="formula" dangerouslySetInnerHTML={tex(step)}/>)}</div><div style={{overflowX:"auto"}}><table className="ch3-table"><caption>Table of values for {data.formula}</caption><tbody><tr><th scope="row">x</th>{data.xs.map((x,i)=><td key={i}>{x}</td>)}</tr><tr><th scope="row">y</th>{data.ys.map((y,i)=><td key={i}>{y}</td>)}</tr></tbody></table></div><SpecialGraph kind={data.kind}/>{topicIndex===1&&<p><strong>Key points:</strong> Vertex (1, −4); x-intercepts (−1, 0) and (3, 0). The curve is smooth, not a set of straight segments.</p>}{topicIndex===2&&<p><strong>Graph check:</strong> The curve crosses the x-axis at −1, 0 and 1, and has both a local maximum and a local minimum.</p>}<style jsx>{`.ch3-table{border-collapse:collapse;margin:14px auto 20px;min-width:290px;text-align:center}.ch3-table caption{caption-side:top;color:#475569;font-size:15px;margin-bottom:6px}.ch3-table th,.ch3-table td{border:1px solid #94a3b8;padding:7px 14px}.ch3-table th{background:#dbeafe}.ch3-steps .formula{margin:2px 0;padding:0}.ch3-steps :global(.katex-display){margin:.45em 0}`}</style></>;
}

export default function S4FunctionLesson({lesson}:{lesson:Lesson}){
 const [open,setOpen]=useState<number[]>([]);
 return <main className="page"><Link href="/maths/s4/chapter-3" className="back">← Back to Chapter 3</Link><p className="tag">S4 MATHEMATICS · SECTION {lesson.number}{lesson.number==="3.4"?" · ENRICHMENT":""}</p><h1>{lesson.title}</h1><p className="intro">{lesson.description}</p>{lesson.number==="3.3"?<Chapter3Visual/>:<section className="tile"><p className="tag">VISUAL EXPLANATION</p><Graph mode={lesson.plot}/></section>}{lesson.topics.map((t,i)=><section className="tile" key={t.name}><div className="heading"><span className="num">{i+1}</span><div><p className="tag">LEARNING CARD</p><h2>{t.name}</h2></div></div><p>{t.info}</p><div className="formula" dangerouslySetInnerHTML={tex(t.formula)}/><div className="worked"><p className="tag">WORKED EXAMPLE</p><h3>{t.q}</h3>{lesson.number==="3.3"&&i<3?<Chapter3Worked topicIndex={i}/>:t.steps.map((st,j)=><div key={j} className="formula" dangerouslySetInnerHTML={tex(st)}/>)}<p><strong>Reason:</strong> {t.reason}</p></div></section>)}<section className="tile warning"><p className="tag">COMMON MISTAKES</p><p>{lesson.mistake}</p><p><strong>Correction:</strong> {lesson.correction}</p></section><section className="tile"><h2>Short practice</h2>{lesson.practice.map((p,i)=><div className="pr" key={i}><p>{i+1}. {p.q}</p><button type="button" onClick={()=>setOpen(a=>a.includes(i)?a.filter(x=>x!==i):[...a,i])}>{open.includes(i)?"Hide answer":"Check answer"}</button>{open.includes(i)&&<p className="answer">Answer: {p.a}</p>}</div>)}</section><section className="tile"><p className="tag">SECTION SUMMARY</p><p>{lesson.topics.map(t=>t.name).join(" · ")}</p></section><Link href="/maths/s4/chapter-3" className="back">← Back to Chapter 3</Link><style jsx>{`.page{max-width:1040px;margin:42px auto 70px;width:calc(100% - 40px);color:#172338;font-size:18px;line-height:1.65}.back{color:#047857;font-size:17px;font-weight:800;text-decoration:none}.tag{color:#047857;font-size:14px;font-weight:900;letter-spacing:.08em;margin:0 0 8px}h1{font-size:clamp(34px,5vw,44px);line-height:1.15;margin:24px 0 8px}.intro{font-size:20px;color:#64748b}.tile{background:white;border:1px solid #e2e8f0;padding:28px;margin:24px 0;border-radius:20px}.heading{display:flex;gap:16px;align-items:center}h2{font-size:27px;margin:0}.num{display:grid;place-items:center;min-width:52px;height:52px;background:#ecfdf5;border-radius:14px;color:#047857;font-size:24px;font-weight:900}.worked{background:#eff6ff;border-left:4px solid #3b82f6;padding:20px;margin-top:20px;border-radius:8px}.worked h3{font-size:20px}.formula{overflow-x:auto;padding:4px 0}.warning{background:#fffbeb;border-color:#fde68a}.pr{border-top:1px solid #e2e8f0;padding:12px 0}.pr button{background:#4f46e5;color:white;padding:9px 14px;border:0;border-radius:8px;cursor:pointer}.answer{color:#047857;font-weight:700}@media(max-width:760px){.page{width:calc(100% - 24px)}.tile{padding:20px}}`}</style></main>;
}