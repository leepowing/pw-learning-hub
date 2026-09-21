import {AngleArc,Segment} from './S2Chapter11Geometry';
export {SineDiagram as TangentTriangle} from './S2Chapter12SineDiagram';
export function TangentExplorer({angle}:{angle:number}){
 const r=angle*Math.PI/180,O={x:55,y:280},A={x:155,y:280},B={x:155,y:280-100*Math.tan(r)};
 return <svg viewBox="0 0 390 345" role="img" aria-label={`Fixed adjacent side OA equals 1. Angle AOB is ${angle} degrees. Opposite side AB equals tan theta.`} style={{width:'100%',maxWidth:470,display:'block',margin:'auto'}}>
 <Segment a={O} b={A}/><Segment a={O} b={B}/><line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#0f766e" strokeWidth={4}/>
 <path d="M 143 280 V 268 H 155" fill="none" stroke="#0f766e"/><AngleArc centre={O} start={0} end={angle} radius={30}/>
 <g fontSize={20} fill="#172d50"><text x={34} y={301}>O</text><text x={156} y={301}>A</text><text x={164} y={B.y-6}>B</text><text x={100} y={308}>1</text><text x={55+52*Math.cos(r/2)} y={285-52*Math.sin(r/2)}>θ</text></g>
 <text x={175} y={(A.y+B.y)/2} fontSize={18} fill="#0f766e">AB ≈ {Math.tan(r).toFixed(3)}</text><text x={40} y={335} fontSize={18} fill="#0f766e">tan {angle}° = AB / 1 = AB</text>
 </svg>;
}
