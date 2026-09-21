import { AngleArc, Segment } from '@/components/maths/S2Chapter11Geometry';
type P = { x: number; y: number };
export type TriangleSpec = { r: P; u: P; v: P; names: [string, string, string]; theta: 'u' | 'v' };
const vector = (a: P, b: P) => { const d = Math.hypot(b.x-a.x,b.y-a.y); return {x:(b.x-a.x)/d,y:(b.y-a.y)/d}; };
const bearing = (a: P, b: P) => (Math.atan2(a.y-b.y,b.x-a.x)*180/Math.PI+360)%360;
export const conceptTriangles: TriangleSpec[] = [
 {r:{x:85,y:230},u:{x:85,y:65},v:{x:280,y:230},names:['C','B','A'],theta:'v'},
 {r:{x:280,y:235},u:{x:280,y:65},v:{x:75,y:235},names:['N','L','M'],theta:'u'},
 {r:{x:255,y:150},u:{x:135,y:60},v:{x:165,y:270},names:['X','Z','Y'],theta:'v'},
 {r:{x:135,y:85},u:{x:255,y:55},v:{x:180,y:265},names:['T','R','S'],theta:'v'},
];
export function ConceptTriangle({spec,highlight}:{spec:TriangleSpec;highlight?:'hypotenuse'|'adjacent'|'opposite'}) {
 const {r,u,v,names,theta}=spec, t=theta==='u'?u:v, other=theta==='u'?v:u;
 const ru=vector(r,u),rv=vector(r,v),tr=vector(t,r),to=vector(t,other);
 const corner=[{x:r.x+ru.x*17,y:r.y+ru.y*17},{x:r.x+(ru.x+rv.x)*17,y:r.y+(ru.y+rv.y)*17},{x:r.x+rv.x*17,y:r.y+rv.y*17}];
 let start=bearing(t,r),end=bearing(t,other);if((end-start+360)%360>180)[start,end]=[end,start];if(end<start)end+=360;
 const center={x:(r.x+u.x+v.x)/3,y:(r.y+u.y+v.y)/3};
 const selected=highlight==='hypotenuse'?[u,v]:highlight==='adjacent'?[r,t]:highlight==='opposite'?[r,other]:null;
 return <svg viewBox="0 0 360 310" role="img" aria-label={`Triangle ${names.join('')}. Right angle at ${names[0]}; theta at ${names[theta==='u'?1:2]}.`} style={{width:'100%',height:'auto',display:'block',maxWidth:460,margin:'12px auto'}}>
  <Segment a={r} b={u}/><Segment a={u} b={v}/><Segment a={v} b={r}/>
  {selected&&<line x1={selected[0].x} y1={selected[0].y} x2={selected[1].x} y2={selected[1].y} stroke="#b45309" strokeWidth={5}/>}
  <polyline points={corner.map(p=>`${p.x},${p.y}`).join(' ')} fill="none" stroke="#0f766e" strokeWidth={2}/>
  <AngleArc centre={t} start={start} end={end} radius={32}/>
  <text x={t.x+(tr.x+to.x)*34} y={t.y+(tr.y+to.y)*34+5} textAnchor="middle" fill="#6d28d9" fontSize={21}>θ</text>
  {[r,u,v].map((p,i)=>{const d=vector(center,p);return <text key={names[i]} x={p.x+d.x*20} y={p.y+d.y*20+6} textAnchor="middle" fill="#172d50" fontSize={22} fontFamily="Georgia,serif">{names[i]}</text>;})}
 </svg>;
}
export function SightLineDiagram({degrees}:{degrees:25|40}){
 const O={x:60,y:245},A={x:300,y:245},B={x:300,y:245-240*Math.tan(degrees*Math.PI/180)};
 return <svg viewBox="0 0 420 310" role="img" aria-label={`A fixed horizontal distance OA. The line of sight OB makes an angle of ${degrees} degrees with OA. AB is vertical.`} style={{width:'100%',height:'auto',display:'block',maxWidth:560,margin:'12px auto'}}>
 <rect x={300} y={25} width={72} height={253} fill="#fef3c7" stroke="#b45309" strokeWidth={2}/>
 {[45,85,125,165,205].map(y=><g key={y}><rect x={312} y={y} width={16} height={22} fill="#dbeafe" stroke="#52647a"/><rect x={344} y={y} width={16} height={22} fill="#dbeafe" stroke="#52647a"/></g>)}
 <Segment a={O} b={A}/><Segment a={O} b={B}/><line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#b45309" strokeWidth={5}/>
 <path d="M 285 245 V 230 H 300" fill="none" stroke="#0f766e" strokeWidth={2}/>
 <AngleArc centre={O} start={0} end={degrees} radius={48}/>
 <text x={120} y={235} fontSize={20} fill="#6d28d9">{degrees}°</text>
 <g fontSize={21} fill="#172d50" fontFamily="Georgia,serif"><text x={38} y={265}>O</text><text x={289} y={269}>A</text><text x={277} y={B.y-10}>B</text></g>
 <text x={132} y={286} fontSize={17} fill="#52647a">Fixed horizontal distance</text>
 </svg>;
}
