import type { ReactNode } from "react";

// Self-contained shared diagrams: existing Chapter 11 geometry is not overwritten.
function Diagram({label,children}:{label:string;children:ReactNode}) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 300" role="img" aria-label={label} style={{display:'block',width:'100%',height:'auto',maxWidth:520,margin:'16px auto'}}>{children}</svg>;
}
function Segment({x1,y1,x2,y2,dashed=false}:{x1:number;y1:number;x2:number;y2:number;dashed?:boolean}) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#172d50" strokeWidth={2} strokeDasharray={dashed?'5 5':undefined}/>;
}
function Label({x,y,children}:{x:number;y:number;children:ReactNode}) {
  return <text x={x} y={y} textAnchor="middle" fill="#172d50" fontSize={20} fontFamily="Arial, sans-serif">{children}</text>;
}
export function SquareModel({side}:{side:number}) {
  const edge=168,left=136,top=42;
  return <Diagram label={`A square with side ${side} units and area ${side*side} square units.`}>
    <rect x={left} y={top} width={edge} height={edge} fill="#ecfeff" stroke="#172d50" strokeWidth={3}/>
    {Array.from({length:side-1},(_,i)=>{const offset=edge*(i+1)/side;return <g key={i}><Segment x1={left+offset} y1={top} x2={left+offset} y2={top+edge}/><Segment x1={left} y1={top+offset} x2={left+edge} y2={top+offset}/></g>;})}
    <Label x={220} y={240}>{side} {side===1?'unit':'units'}</Label><Label x={220} y={275}>Area = {side*side} square {side===1?'unit':'units'}</Label>
  </Diagram>;
}
export function CubeModel({side}:{side:number}) {
  // Oblique projection: P(x,y,z) = (116 + 132x + 66z, 222 - 132y - 54z).
  const p=(x:number,y:number,z:number)=>({x:116+132*x+66*z,y:222-132*y-54*z});
  const A=p(0,0,0),B=p(1,0,0),C=p(1,1,0),D=p(0,1,0),E=p(0,0,1),F=p(1,0,1),G=p(1,1,1),H=p(0,1,1);
  const points=(list:{x:number;y:number}[])=>list.map(v=>`${v.x},${v.y}`).join(' ');
  return <Diagram label={`A cube with edge ${side} units and volume ${side**3} cubic units. Dashed edges are hidden.`}>
    <polygon points={points([A,B,C,D])} fill="#ecfeff"/><polygon points={points([D,C,G,H])} fill="#ede9fe"/><polygon points={points([B,F,G,C])} fill="#ccfbf1"/>
    {[[A,B],[B,C],[C,D],[D,A],[D,H],[H,G],[G,C],[B,F],[F,G]].map(([u,v],i)=><Segment key={i} x1={u.x} y1={u.y} x2={v.x} y2={v.y}/>)}
    {[[A,E],[E,F],[E,H]].map(([u,v],i)=><Segment key={i} x1={u.x} y1={u.y} x2={v.x} y2={v.y} dashed/>)}
    <Label x={182} y={251}>{side} {side===1?'unit':'units'}</Label><Label x={220} y={284}>Volume = {side**3} cubic {side===1?'unit':'units'}</Label>
  </Diagram>;
}
export function RootNumberLine() {
  const x=(value:number)=>220+value*26;
  return <Diagram label="On a number line, negative 6 and positive 6 are equally far from zero. Both have square 36.">
    <Label x={220} y={65}>Two square roots of 36</Label><Segment x1={28} y1={150} x2={412} y2={150}/>
    {[-6,-3,0,3,6].map(value=><g key={value}><Segment x1={x(value)} y1={143} x2={x(value)} y2={157}/><Label x={x(value)} y={185}>{value}</Label></g>)}
    <circle cx={x(-6)} cy={150} r={6} fill="#6d28d9"/><circle cx={x(6)} cy={150} r={6} fill="#0f766e"/>
    <Label x={110} y={240}>(−6)² = 36</Label><Label x={330} y={240}>6² = 36</Label>
  </Diagram>;
}
