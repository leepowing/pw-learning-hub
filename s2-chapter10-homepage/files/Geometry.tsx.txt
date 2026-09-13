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
export function PolygonDiagram({n=5}:{n?:number}) {
 const points=Array.from({length:n},(_,i)=>({x:260+115*Math.cos(-Math.PI/2+i*2*Math.PI/n),y:150+115*Math.sin(-Math.PI/2+i*2*Math.PI/n)}));
 return <Diagram label={`A convex ${n}-sided polygon divided into ${n-2} triangles from one vertex.`} height={320}><polygon points={points.map(p=>`${p.x},${p.y}`).join(' ')} fill="#f0fdfa" stroke={ink} strokeWidth={2.5}/>{points.slice(2,-1).map((p,i)=><Segment key={i} a={points[0]} b={p} dashed/>)}{points.map((p,i)=><Vertex key={i} p={p} label={String.fromCharCode(65+i)} dx={(p.x-260)/115*22} dy={(p.y-150)/115*22+5}/>)}<Angle v={points[1]} a={points[0]} b={points[2]} r={20}/></Diagram>;
}
export function TessellationDiagram(){return <Diagram label="Four squares meet at a point. Their four 90-degree angles fill 360 degrees." height={270}>{[0,1].flatMap(r=>[0,1].map(c=><rect key={`${r}-${c}`} x={170+c*90} y={35+r*90} width={90} height={90} fill={['#ccfbf1','#ede9fe','#fef3c7','#dbeafe'][r*2+c]} stroke={ink} strokeWidth={2}/>))}<circle cx="260" cy="125" r="3" fill={ink}/><text x="260" y="250" textAnchor="middle" fontFamily="Arial" fill={ink} fontSize={19}>4 × 90° = 360°</text></Diagram>;}
export function ConstructionDiagram(){const A={x:160,y:145},B={x:360,y:145},h=Math.sqrt(130*130-100*100),P={x:260,y:145-h},Q={x:260,y:145+h};return <Diagram label="Equal-radius compass arcs centred at A and B meet at P and Q. PQ is the perpendicular bisector of AB." height={300}><Segment a={A} b={B}/><path d={`M225 ${145-Math.sqrt(130*130-65*65)} A130 130 0 0 1 225 ${145+Math.sqrt(130*130-65*65)}`} stroke={teal} strokeWidth={2} fill="none"/><path d={`M295 ${145-Math.sqrt(130*130-65*65)} A130 130 0 0 0 295 ${145+Math.sqrt(130*130-65*65)}`} stroke={purple} strokeWidth={2} fill="none"/><Segment a={{x:260,y:25}} b={{x:260,y:265}}/><path d="M260 132 H273 V145" fill="none" stroke={ink} strokeWidth={1.5}/><Vertex p={A} label="A" dx={-18} dy={8}/><Vertex p={B} label="B" dx={18} dy={8}/><Vertex p={P} label="P" dx={-42} dy={-15}/><Vertex p={Q} label="Q" dx={-42} dy={25}/></Diagram>;}
