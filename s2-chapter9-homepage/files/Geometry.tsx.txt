import type { ReactNode } from "react";
export type Point = { x: number; y: number };
const ink="#24364b", teal="#0f766e", purple="#6d28d9";
export function Segment({a,b,dashed=false}:{a:Point;b:Point;dashed?:boolean}) {return <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={ink} strokeWidth={2.5} strokeDasharray={dashed?'6 5':undefined}/>;}
export function Vertex({p,label,dx=0,dy=0}:{p:Point;label:string;dx?:number;dy?:number}) {return <text x={p.x+dx} y={p.y+dy} textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize={21} fill={ink}>{label}</text>;}
export function Angle({v,a,b,r=25,label,labelR=48}:{v:Point;a:Point;b:Point;r?:number;label?:string;labelR?:number}) {
 const start=Math.atan2(a.y-v.y,a.x-v.x),end=Math.atan2(b.y-v.y,b.x-v.x);
 let delta=(end-start+Math.PI*3)%(Math.PI*2)-Math.PI;
 const at=(t:number,d:number)=>({x:v.x+d*Math.cos(t),y:v.y+d*Math.sin(t)});
 const s=at(start,r),e=at(start+delta,r),t=at(start+delta/2,labelR);
 return <g><path data-angle-arc="" d={`M${s.x} ${s.y} A${r} ${r} 0 0 ${delta>=0?1:0} ${e.x} ${e.y}`} fill="none" stroke={purple} strokeWidth={2}/>{label&&<text x={t.x} y={t.y+5} textAnchor="middle" fontFamily="Arial" fontSize={17} fill={purple}>{label}</text>}</g>;
}
export function Tick({a,b,count=1}:{a:Point;b:Point;count?:number}) {
 const length=Math.hypot(b.x-a.x,b.y-a.y),ux=(b.x-a.x)/length,uy=(b.y-a.y)/length;
 return <g stroke={teal} strokeWidth={2.5}>{Array.from({length:count},(_,i)=>{const shift=(i-(count-1)/2)*7,x=(a.x+b.x)/2+ux*shift,y=(a.y+b.y)/2+uy*shift;return <line key={i} x1={x-uy*7} y1={y+ux*7} x2={x+uy*7} y2={y-ux*7}/>;})}</g>;
}
export function ParallelMark({a,b}:{a:Point;b:Point}) {const t=Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI;return <path transform={`translate(${(a.x+b.x)/2} ${(a.y+b.y)/2}) rotate(${t})`} d="M-6 -6 L3 0 L-6 6" fill="none" stroke={teal} strokeWidth={2.5}/>;}
export function Diagram({label,children,height=300}:{label:string;children:ReactNode;height?:number}) {return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 520 ${height}`} role="img" aria-label={label} style={{display:'block',width:'100%',height:'auto'}}>{children}</svg>;}
export function IsoscelesDiagram({apex=60}:{apex?:number}) {
 const half=apex*Math.PI/360,side=200,A={x:260,y:42},B={x:260-side*Math.sin(half),y:42+side*Math.cos(half)},C={x:260+side*Math.sin(half),y:B.y};
 return <Diagram label={`Isosceles triangle ABC: AB equals AC, apex angle ${apex} degrees, equal base angles ${(180-apex)/2} degrees.`}><path d={`M${A.x} ${A.y} L${B.x} ${B.y} L${C.x} ${C.y} Z`} fill="#f0fdfa"/><Segment a={A} b={B}/><Segment a={A} b={C}/><Segment a={B} b={C}/><Tick a={A} b={B}/><Tick a={A} b={C}/><Angle v={A} a={B} b={C} label={`${apex}°`} labelR={58}/><Angle v={B} a={A} b={C} label={`${(180-apex)/2}°`} labelR={55}/><Angle v={C} a={B} b={A} label={`${(180-apex)/2}°`} labelR={55}/><Vertex p={A} label="A" dy={-16}/><Vertex p={B} label="B" dx={-17} dy={24}/><Vertex p={C} label="C" dx={17} dy={24}/></Diagram>;
}
export function ProofDiagram() {
 const A={x:160,y:65},B={x:80,y:230},C={x:340,y:230},D={x:420,y:65};
 return <Diagram label="Quadrilateral ABCD with diagonal AC. AD // BC. Angles ABC and CDA are given equal. Only the given parallel pair has arrows."><path d="M160 65 L80 230 L340 230 L420 65 Z" fill="#f8fafc"/>{[[A,B],[B,C],[C,D],[D,A],[A,C]].map(([a,b],i)=><Segment key={i} a={a} b={b}/>)}<ParallelMark a={A} b={D}/><ParallelMark a={B} b={C}/><Angle v={B} a={A} b={C}/><Angle v={D} a={C} b={A}/><Vertex p={A} label="A" dy={-14}/><Vertex p={B} label="B" dx={-17} dy={18}/><Vertex p={C} label="C" dy={26}/><Vertex p={D} label="D" dx={15} dy={-10}/></Diagram>;
}
export function FiguresDiagram({scale=1}:{scale?:number}) {
 const local=[{x:0,y:0},{x:0,y:100},{x:115,y:100},{x:85,y:0}];
 const first=local.map(p=>({x:60+p.x,y:100+p.y}));const second=local.map(p=>({x:290+p.x*scale,y:200-(100-p.y)*scale}));
 return <Diagram label={`Quadrilaterals ABCD and EFGH have corresponding lengths in the ratio 1 to ${scale}.`} height={290}>{[first,second].map((points,j)=><g key={j}><polygon points={points.map(p=>`${p.x},${p.y}`).join(' ')} fill={j?'#f5f3ff':'#f0fdfa'} stroke={ink} strokeWidth={2.5}/>{points.map((p,i)=><Vertex key={i} p={p} label={['ABCD','EFGH'][j][i]} dx={i<2?-14:14} dy={i===0||i===3?-12:23}/>)}<Angle v={points[3]} a={points[0]} b={points[2]} r={19}/></g>)}<text x="118" y="264" textAnchor="middle" fill={ink} fontFamily="Arial" fontSize={17}>Original</text><text x="365" y="264" textAnchor="middle" fill={purple} fontFamily="Arial" fontSize={17}>Scale factor {scale}</text></Diagram>;
}
