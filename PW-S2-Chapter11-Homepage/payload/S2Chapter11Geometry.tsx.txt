import type { ReactNode } from 'react';
type Point = { x: number; y: number };
const navy = '#172d50';
export function polar(cx: number, cy: number, radius: number, angle: number): Point {
  const radians = angle * Math.PI / 180;
  return { x: cx + radius * Math.cos(radians), y: cy - radius * Math.sin(radians) };
}
export function Segment({ a, b }: { a: Point; b: Point }) {
  return <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={navy} strokeWidth={3} strokeLinecap="round" />;
}
export function AngleArc({ centre, start, end, radius = 30 }: { centre: Point; start: number; end: number; radius?: number }) {
  const a = polar(centre.x, centre.y, radius, start), b = polar(centre.x, centre.y, radius, end);
  return <path d={`M ${a.x} ${a.y} A ${radius} ${radius} 0 ${end-start>180?1:0} 0 ${b.x} ${b.y}`} fill="none" stroke="#6d28d9" strokeWidth={2} />;
}
export function Diagram({ label, children }: { label: string; children: ReactNode }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 350" role="img" aria-label={label} style={{display:'block',width:'100%',height:'auto',maxWidth:560,margin:'20px auto'}}>{children}</svg>;
}
export function RightTriangleDiagram({ a = 3, b = 4 }: { a?: number; b?: number }) {
  const scale = Math.min(270 / b, 210 / a), A = {x:110,y:280-a*scale}, B = {x:110+b*scale,y:280}, C = {x:110,y:280};
  const c = Math.hypot(a,b), theta = Math.atan2(a,b)*180/Math.PI;
  const text = {fill:navy,fontFamily:'Georgia, serif',fontSize:22};
  return <Diagram label={`Right-angled triangle ABC. AC = ${a}, BC = ${b}, AB = ${Number(c.toFixed(3))}. The right angle is at C.`}>
    <Segment a={A} b={B}/><Segment a={B} b={C}/><Segment a={C} b={A}/>
    <path d={`M ${C.x} ${C.y-17} h 17 v 17`} fill="none" stroke="#0f766e" strokeWidth={2}/>
    <AngleArc centre={B} start={180-theta} end={180}/>
    <text {...text} x={A.x-8} y={A.y-18}>A</text><text {...text} x={B.x+17} y={B.y+7}>B</text><text {...text} x={C.x-25} y={C.y+27}>C</text>
    <text {...text} x={C.x-40} y={(A.y+C.y)/2+7} textAnchor="middle">{a}</text>
    <text {...text} x={(C.x+B.x)/2} y={C.y+34} textAnchor="middle">{b}</text>
    <text {...text} x={(A.x+B.x)/2+18} y={(A.y+B.y)/2-18} textAnchor="middle">c</text>
  </Diagram>;
}
