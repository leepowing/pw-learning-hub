"use client";
import {useId} from "react";
type Curve={a:number;b:number;c:number;line?:number;name:string;xMin:number;xMax:number;yMin:number;yMax:number;markers?:{x:number;y:number;label:string}[];};
const graphs:Record<string,Curve>={
 down:{a:-1,b:4,c:5,name:"y=−x²+4x+5",xMin:-2,xMax:6,yMin:-7,yMax:11,markers:[{x:0,y:5,label:"(0,5)"},{x:2,y:9,label:"(2,9)"}]},
 roots:{a:1,b:-2,c:-3,name:"y=x²−2x−3",xMin:-3,xMax:5,yMin:-6,yMax:10,markers:[{x:-1,y:0,label:"(−1,0)"},{x:3,y:0,label:"(3,0)"},{x:1,y:-4,label:"(1,−4)"}]},
 noroots:{a:1,b:2,c:5,name:"y=x²+2x+5",xMin:-5,xMax:3,yMin:-2,yMax:12,markers:[{x:-1,y:4,label:"(−1,4)"}]},
 vertexdown:{a:-2,b:12,c:-13,name:"y=−2(x−3)²+5",xMin:0,xMax:6,yMin:-12,yMax:8,markers:[{x:3,y:5,label:"(3,5)"}]},
 vertexup:{a:2,b:-8,c:3,name:"y=2(x−2)²−5",xMin:-1,xMax:5,yMin:-8,yMax:11,markers:[{x:2,y:-5,label:"(2,−5)"}]},
 vertexup2:{a:1,b:2,c:-3,name:"y=(x+1)²−4",xMin:-5,xMax:3,yMin:-7,yMax:11,markers:[{x:-1,y:-4,label:"(−1,−4)"}]},
 horizontal:{a:1,b:-2,c:-3,line:1,name:"y=x²−2x−3 and y=1",xMin:-3,xMax:5,yMin:-6,yMax:10,markers:[{x:1-Math.sqrt(5),y:1,label:"P"},{x:1+Math.sqrt(5),y:1,label:"Q"}]},
 touch:{a:1,b:-2,c:1,name:"y=(x−1)²",xMin:-3,xMax:5,yMin:-3,yMax:11,markers:[{x:1,y:0,label:"(1,0)"}]}
};
export default function QuadraticGraph({mode}:{mode:string}){
 const g=graphs[mode]||graphs.roots;const uid=useId().replace(/:/g,"");const left=58,top=22,w=570,h=290;
 const X=(x:number)=>left+(x-g.xMin)/(g.xMax-g.xMin)*w;
 const Y=(y:number)=>top+(g.yMax-y)/(g.yMax-g.yMin)*h;
 const graphPoints=Array.from({length:301},(_,i)=>{const x=g.xMin+(g.xMax-g.xMin)*i/300;return `${X(x).toFixed(2)},${Y(g.a*x*x+g.b*x+g.c).toFixed(2)}`}).join(" ");
 const xTicks=Array.from({length:Math.floor(g.xMax)-Math.ceil(g.xMin)+1},(_,i)=>Math.ceil(g.xMin)+i);
 const yStep=(g.yMax-g.yMin)>17?4:2;
 const yTicks=Array.from({length:Math.floor((g.yMax-g.yMin)/yStep)+1},(_,i)=>Math.ceil(g.yMin/yStep)*yStep+i*yStep).filter(v=>v<=g.yMax);
 return <svg viewBox="0 0 700 352" role="img" aria-label={`Accurately plotted coordinate graph of ${g.name}`} style={{width:"100%",maxWidth:700,height:"auto"}}>
 <defs><clipPath id={`plot-${uid}`}><rect x={left} y={top} width={w} height={h}/></clipPath></defs>
 <rect x={left} y={top} width={w} height={h} fill="#fff" stroke="#cbd5e1"/>
 {xTicks.map(t=><g key={`x${t}`}><line x1={X(t)} x2={X(t)} y1={top} y2={top+h} stroke="#e2e8f0"/><text x={X(t)} y={Math.min(top+h+17,Math.max(top+14,Y(0)+15))} textAnchor="middle" fontSize="11" fill="#64748b">{t}</text></g>)}
 {yTicks.map(t=><g key={`y${t}`}><line x1={left} x2={left+w} y1={Y(t)} y2={Y(t)} stroke="#e2e8f0"/><text x={Math.max(left-18,Math.min(left+w-18,X(0)-12))} y={Y(t)+4} textAnchor="end" fontSize="11" fill="#64748b">{t}</text></g>)}
 {g.xMin<=0&&g.xMax>=0&&<line x1={X(0)} x2={X(0)} y1={top} y2={top+h} stroke="#334155" strokeWidth="2"/>}
 {g.yMin<=0&&g.yMax>=0&&<line x1={left} x2={left+w} y1={Y(0)} y2={Y(0)} stroke="#334155" strokeWidth="2"/>}
 <g clipPath={`url(#plot-${uid})`}><polyline points={graphPoints} stroke="#047857" strokeWidth="3.5" strokeLinejoin="round" fill="none"/>{g.line!==undefined&&<line x1={left} x2={left+w} y1={Y(g.line)} y2={Y(g.line)} stroke="#ea580c" strokeDasharray="8 5" strokeWidth="2.5"/>}</g>
 {g.markers?.filter(p=>p.y>=g.yMin&&p.y<=g.yMax).map((p,i)=><g key={i}><circle cx={X(p.x)} cy={Y(p.y)} r="4.5" fill="#1d4ed8" stroke="white" strokeWidth="1.5"/><text x={Math.max(65,Math.min(630,X(p.x)+9))} y={Math.max(18,Y(p.y)-10)} fontSize="14" fill="#1e293b">{p.label}</text></g>)}
 <text x="637" y={Math.max(18,Math.min(319,Y(0)-8))} fill="#0f172a">x</text><text x={Math.max(65,Math.min(631,X(0)+9))} y="18" fill="#0f172a">y</text>
 <text x="350" y="343" textAnchor="middle" fill="#047857" fontSize="14" fontWeight="bold">{g.name}</text>
 </svg>;
}
