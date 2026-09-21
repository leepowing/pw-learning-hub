import { AngleArc, Segment } from './S2Chapter11Geometry';
export { SineDiagram as CosineTriangle } from './S2Chapter12SineDiagram';

/** Radius one: the horizontal projection, not the vertical height, is cosine. */
export function CosineQuarterCircle({angle}:{angle:number}) {
 const t=angle*Math.PI/180,round=(n:number)=>Math.round(n*10000)/10000;
 const O={x:65,y:270},A={x:round(65+220*Math.cos(t)),y:round(270-220*Math.sin(t))},B={x:A.x,y:270};
 return <svg viewBox="0 0 390 335" role="img" aria-label={`Quarter circle of radius 1. Angle AOB is ${angle} degrees. Horizontal length OB equals cosine of the angle.`} style={{display:'block',width:'100%',maxWidth:460,margin:'auto'}}>
  <path d="M 65 50 A 220 220 0 0 1 285 270 M 65 50 V 270 H 285" fill="none" stroke="#94a3b8" strokeDasharray="5 5"/>
  <Segment a={O} b={A}/><line x1={O.x} y1={O.y} x2={B.x} y2={B.y} stroke="#0f766e" strokeWidth={5}/>
  <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#64748b" strokeDasharray="5 4"/>
  <path d={`M ${B.x-12} 270 V 258 H ${B.x}`} stroke="#0f766e" fill="none"/>
  <AngleArc centre={O} start={0} end={angle} radius={32}/>
  <g fontSize={20} fill="#172d50"><text x={44} y={292}>O</text><text x={A.x+8} y={A.y-10}>A</text><text x={B.x+4} y={292}>B</text><text x={(O.x+A.x)/2-15} y={(O.y+A.y)/2-12}>1</text><text x={65+52*Math.cos(t/2)} y={275-52*Math.sin(t/2)}>θ</text></g>
  <text x={65} y={325} fontSize={18} fill="#0f766e">OB = cos {angle}° ≈ {Math.cos(t).toFixed(3)}</text>
 </svg>;
}
