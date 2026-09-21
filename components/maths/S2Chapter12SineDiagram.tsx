import { AngleArc, Segment } from './S2Chapter11Geometry';

type Point = { x: number; y: number };
export type SineDiagramProps = {
  opposite?: number; hypotenuse?: number;
  names?: [string, string, string]; // right-angle vertex, theta vertex, other vertex
  oppositeLabel?: string; adjacentLabel?: string; hypotenuseLabel?: string;
  angleLabel?: string; otherAngleLabel?: string; rotation?: number;
};
const unit = (a: Point, b: Point): Point => { const d = Math.hypot(b.x-a.x,b.y-a.y); return {x:(b.x-a.x)/d,y:(b.y-a.y)/d}; };
const round = (x: number) => Math.round(x*10000)/10000;
function Mark({p,a,b,label}:{p:Point;a:Point;b:Point;label:string}) {
  const bearing=(q:Point)=>(Math.atan2(p.y-q.y,q.x-p.x)*180/Math.PI+360)%360;
  let start=bearing(a),end=bearing(b);
  if((end-start+360)%360>180)[start,end]=[end,start];
  if(end<start)end+=360;
  const u=unit(p,a),v=unit(p,b),len=Math.hypot(u.x+v.x,u.y+v.y);
  return <><AngleArc centre={p} start={start} end={end} radius={28}/><text x={round(p.x+(u.x+v.x)/len*55)} y={round(p.y+(u.y+v.y)/len*55+5)} textAnchor="middle" fontSize={19} fill="#6d28d9">{label}</text></>;
}
/** Exact perpendicular legs; all rotations preserve the supplied side ratios. */
export function SineDiagram({opposite=3,hypotenuse=5,names=['B','C','A'],oppositeLabel,adjacentLabel,hypotenuseLabel,angleLabel='θ',otherAngleLabel,rotation=0}:SineDiagramProps) {
  const adjacent=Math.sqrt(hypotenuse*hypotenuse-opposite*opposite),rad=rotation*Math.PI/180;
  const raw=[{x:0,y:0},{x:-adjacent,y:0},{x:0,y:-opposite}].map(p=>({x:p.x*Math.cos(rad)-p.y*Math.sin(rad),y:p.x*Math.sin(rad)+p.y*Math.cos(rad)}));
  const xs=raw.map(p=>p.x),ys=raw.map(p=>p.y),minX=Math.min(...xs),minY=Math.min(...ys),w=Math.max(...xs)-minX,h=Math.max(...ys)-minY,scale=Math.min(250/w,175/h);
  const [r,t,u]=raw.map(p=>({x:round(210+(p.x-minX-w/2)*scale),y:round(150+(p.y-minY-h/2)*scale)}));
  const centre={x:(r.x+t.x+u.x)/3,y:(r.y+t.y+u.y)/3},rt=unit(r,t),ru=unit(r,u);
  const edgeLabel=(a:Point,b:Point,label:string|undefined)=>{if(!label)return null;const mid={x:(a.x+b.x)/2,y:(a.y+b.y)/2};let n={x:b.y-a.y,y:a.x-b.x};const d=Math.hypot(n.x,n.y);n={x:n.x/d,y:n.y/d};if((mid.x-centre.x)*n.x+(mid.y-centre.y)*n.y<0)n={x:-n.x,y:-n.y};return <text x={round(mid.x+24*n.x)} y={round(mid.y+24*n.y+6)} textAnchor="middle" fontSize={20} fill="#172d50">{label}</text>;};
  return <svg viewBox="0 0 420 310" role="img" aria-label={`Right-angled triangle ${names.join('')}, right angle at ${names[0]}, ${angleLabel} at ${names[1]}. ${oppositeLabel?`Opposite side ${oppositeLabel}.`:''} ${hypotenuseLabel?`Hypotenuse ${hypotenuseLabel}.`:''}`} style={{width:'100%',height:'auto',display:'block',maxWidth:550,margin:'12px auto'}}>
    <Segment a={r} b={t}/><Segment a={t} b={u}/><Segment a={u} b={r}/>
    <polyline points={[{x:r.x+rt.x*14,y:r.y+rt.y*14},{x:r.x+(rt.x+ru.x)*14,y:r.y+(rt.y+ru.y)*14},{x:r.x+ru.x*14,y:r.y+ru.y*14}].map(p=>`${round(p.x)},${round(p.y)}`).join(' ')} fill="none" stroke="#0f766e" strokeWidth={2}/>
    <Mark p={t} a={r} b={u} label={angleLabel}/>{otherAngleLabel&&<Mark p={u} a={r} b={t} label={otherAngleLabel}/>}
    {[r,t,u].map((p,i)=>{const v=unit(centre,p);return <text key={i} x={round(p.x+v.x*21)} y={round(p.y+v.y*21+5)} textAnchor="middle" fontSize={21} fontFamily="Georgia,serif" fill="#172d50">{names[i]}</text>;})}
    {edgeLabel(r,u,oppositeLabel)}{edgeLabel(r,t,adjacentLabel)}{edgeLabel(t,u,hypotenuseLabel)}
  </svg>;
}

export function SineQuarterCircle({angle}:{angle:number}) {
 const theta=angle*Math.PI/180,O={x:70,y:270},A={x:round(70+200*Math.cos(theta)),y:round(270-200*Math.sin(theta))},B={x:A.x,y:270};
 return <svg viewBox="0 0 390 335" role="img" aria-label={`Unit-radius quarter circle. Theta is ${angle} degrees; vertical height AB equals sin theta.`} style={{width:'100%',height:'auto',display:'block',maxWidth:450,margin:'auto'}}>
 <path d="M 70 70 A 200 200 0 0 1 270 270" stroke="#94a3b8" strokeDasharray="5 5" fill="none"/>
 <path d="M 70 70 V 270 H 270" stroke="#94a3b8" fill="none"/>
 <Segment a={O} b={A}/><line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#0f766e" strokeWidth={4}/>
 <path d={`M ${B.x-12} 270 V 258 H ${B.x}`} stroke="#0f766e" fill="none"/>
 <AngleArc centre={O} start={0} end={angle} radius={38}/>
 <g fill="#172d50" fontSize={20}><text x={48} y={292}>O</text><text x={A.x+8} y={A.y-10}>A</text><text x={B.x+5} y={292}>B</text><text x={(O.x+A.x)/2-12} y={(O.y+A.y)/2-12}>1</text><text x={119} y={257}>θ</text></g>
 <text x={70} y={325} fill="#0f766e" fontSize={18}>AB = sin {angle}° ≈ {Math.sin(theta).toFixed(3)}</text>
 </svg>;
}
