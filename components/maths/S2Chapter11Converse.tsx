import type { ReactNode } from 'react';
type Point={x:number;y:number};
const add=(p:Point,q:Point):Point=>({x:p.x+q.x,y:p.y+q.y});
const sub=(p:Point,q:Point):Point=>({x:p.x-q.x,y:p.y-q.y});
const scale=(p:Point,k:number):Point=>({x:p.x*k,y:p.y*k});
const unit=(p:Point):Point=>scale(p,1/Math.hypot(p.x,p.y));
const pointString=(points:Point[])=>points.map(p=>`${p.x},${p.y}`).join(' ');
function Label({p,children,color='#172d50'}:{p:Point;children:ReactNode;color?:string}){return <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize={21} fontFamily="Arial, sans-serif" fill={color}>{children}</text>;}
function Segment({p,q}:{p:Point;q:Point}){return <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#172d50" strokeWidth={3} strokeLinecap="round"/>;}
function outside(p:Point,q:Point,centre:Point,distance=36){const mid=scale(add(p,q),.5),d=sub(q,p);let n=unit({x:-d.y,y:d.x});if(n.x*(centre.x-mid.x)+n.y*(centre.y-mid.y)>0)n=scale(n,-1);return add(mid,scale(n,distance));}

export function ConverseTriangle({a,b,c,labels,proved=false}:{a:number;b:number;c:number;labels?:readonly [string,string,string];proved?:boolean}){
 if(a<=0||b<=0||c<=0||a+b<=c||a+c<=b||b+c<=a)return <p>These lengths do not form a triangle.</p>;
 // SSS positioning; no right angle is assumed when locating C.
 const x=(b*b+c*c-a*a)/(2*c),height=Math.sqrt(Math.max(0,b*b-x*x));
 const factor=Math.min(320/c,180/height),A={x:260-c*factor/2,y:265},B={x:260+c*factor/2,y:265},C={x:A.x+x*factor,y:265-height*factor};
 const centre=scale(add(add(A,B),C),1/3),u=unit(sub(A,C)),v=unit(sub(B,C));
 const right=Math.abs(a*a+b*b-c*c)<1e-9;
 const start=add(C,scale(u,27)),end=add(C,scale(v,27)),bisector=unit(add(u,v));
 const values=labels??[String(a),String(b),String(c)];
 return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 345" role="img" aria-label={`Triangle ABC. BC = ${values[0]}, CA = ${values[1]}, AB = ${values[2]}.${proved&&right?' Angle ACB is proved to be 90 degrees.':' The angle at C is to be checked.'}`} style={{display:'block',width:'100%',height:'auto',maxWidth:580,margin:'20px auto'}}>
  <Segment p={A} q={B}/><Segment p={B} q={C}/><Segment p={C} q={A}/>
  {[A,B,C].map((p,i)=><Label key={i} p={add(p,scale(unit(sub(p,centre)),29))}>{['A','B','C'][i]}</Label>)}
  <Label p={outside(B,C,centre)}>{values[0]}</Label><Label p={outside(C,A,centre)}>{values[1]}</Label><Label p={outside(A,B,centre)}>{values[2]}</Label>
  {proved&&right?<polyline points={pointString([add(C,scale(u,17)),add(add(C,scale(u,17)),scale(v,17)),add(C,scale(v,17))])} stroke="#0f766e" strokeWidth={2} fill="none"/>:<g><path d={`M ${start.x} ${start.y} A 27 27 0 0 0 ${end.x} ${end.y}`} stroke="#6d28d9" strokeWidth={2} fill="none"/><Label p={add(C,scale(bisector,51))} color="#6d28d9">?</Label></g>}
 </svg>;
}
