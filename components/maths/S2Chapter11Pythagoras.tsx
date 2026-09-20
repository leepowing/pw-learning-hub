import type { ReactNode } from 'react';

export type Point = { x: number; y: number };
const add=(a:Point,b:Point):Point=>({x:a.x+b.x,y:a.y+b.y});
const sub=(a:Point,b:Point):Point=>({x:a.x-b.x,y:a.y-b.y});
const mul=(a:Point,s:number):Point=>({x:a.x*s,y:a.y*s});
const unit=(a:Point):Point=>mul(a,1/Math.hypot(a.x,a.y));
const points=(vertices:Point[])=>vertices.map(p=>`${p.x},${p.y}`).join(' ');
const mean=(vertices:Point[])=>mul(vertices.reduce(add,{x:0,y:0}),1/vertices.length);

function Diagram({label,children,height=340}:{label:string;children:ReactNode;height?:number}) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 520 ${height}`} role="img" aria-label={label} style={{display:'block',width:'100%',height:'auto',maxWidth:580,margin:'20px auto'}}>{children}</svg>;
}
function Segment({a,b,color='#172d50',dashed=false}:{a:Point;b:Point;color?:string;dashed?:boolean}) {
  return <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={color} strokeWidth={3} strokeDasharray={dashed?'7 5':undefined} strokeLinecap="round"/>;
}
function Label({p,children,color='#172d50',size=21}:{p:Point;children:ReactNode;color?:string;size?:number}) {
  return <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill={color} fontFamily="Arial, sans-serif" fontSize={size}>{children}</text>;
}
function RightAngle({vertex,p,q,size=17}:{vertex:Point;p:Point;q:Point;size?:number}) {
  const u=mul(unit(sub(p,vertex)),size),v=mul(unit(sub(q,vertex)),size);
  return <polyline points={points([add(vertex,u),add(add(vertex,u),v),add(vertex,v)])} fill="none" stroke="#0f766e" strokeWidth={2}/>;
}
function sideLabel(p:Point,q:Point,inside:Point,distance=36):Point {
  const midpoint=mul(add(p,q),.5),delta=sub(q,p);
  let normal=unit({x:-delta.y,y:delta.x});
  if(normal.x*(inside.x-midpoint.x)+normal.y*(inside.y-midpoint.y)>0)normal=mul(normal,-1);
  return add(midpoint,mul(normal,distance));
}

export function TriangleDiagram({a=3,b=4,labels=['a','b','c'],rotation=0}:{a?:number;b?:number;labels?:readonly [string,string,string];rotation?:number}) {
  const angle=rotation*Math.PI/180;
  const raw=[{x:0,y:-a},{x:b,y:0},{x:0,y:0}].map(p=>({x:p.x*Math.cos(angle)-p.y*Math.sin(angle),y:p.x*Math.sin(angle)+p.y*Math.cos(angle)}));
  const minX=Math.min(...raw.map(p=>p.x)),maxX=Math.max(...raw.map(p=>p.x)),minY=Math.min(...raw.map(p=>p.y)),maxY=Math.max(...raw.map(p=>p.y));
  const scale=Math.min(300/(maxX-minX),200/(maxY-minY));
  const [A,B,C]=raw.map(p=>({x:260+(p.x-(minX+maxX)/2)*scale,y:165+(p.y-(minY+maxY)/2)*scale}));
  const centre=mean([A,B,C]);
  return <Diagram label={`Triangle ABC, right-angled at C. AC is ${labels[0]}, BC is ${labels[1]}, and hypotenuse AB is ${labels[2]}.`}>
    <Segment a={A} b={C}/><Segment a={C} b={B}/><Segment a={A} b={B} color="#6d28d9"/><RightAngle vertex={C} p={A} q={B}/>
    {[A,B,C].map((p,i)=><Label key={i} p={add(p,mul(unit(sub(p,centre)),30))}>{['A','B','C'][i]}</Label>)}
    <Label p={sideLabel(A,C,centre)}>{labels[0]}</Label><Label p={sideLabel(C,B,centre)}>{labels[1]}</Label><Label p={sideLabel(A,B,centre)} color="#6d28d9">{labels[2]}</Label>
  </Diagram>;
}

export function SquaresDiagram({a,b}:{a:number;b:number}) {
  // A-C-B is counter-clockwise in SVG coordinates. Extend each square outward.
  const A={x:0,y:-a},C={x:0,y:0},B={x:b,y:0};
  function outwardSquare(p:Point,q:Point){const d=sub(q,p),n={x:-d.y,y:d.x};return [p,q,add(q,n),add(p,n)];}
  const polygons=[outwardSquare(A,C),outwardSquare(C,B),outwardSquare(B,A)];
  const all=polygons.flat(),minX=Math.min(...all.map(p=>p.x)),maxX=Math.max(...all.map(p=>p.x)),minY=Math.min(...all.map(p=>p.y)),maxY=Math.max(...all.map(p=>p.y));
  const scale=Math.min(430/(maxX-minX),390/(maxY-minY));
  const project=(p:Point):Point=>({x:260+(p.x-(minX+maxX)/2)*scale,y:230+(p.y-(minY+maxY)/2)*scale});
  return <Diagram height={460} label={`Squares built on a right triangle with legs ${a} and ${b}. Their areas are ${a*a}, ${b*b} and ${a*a+b*b} square units.`}>
    {polygons.map((vertices,i)=><g key={i}><polygon points={points(vertices.map(project))} fill={['#ccfbf1','#dbeafe','#ede9fe'][i]} stroke="#172d50" strokeWidth={2}/><Label p={project(mean(vertices))} size={23}>{[a*a,b*b,a*a+b*b][i]}</Label></g>)}
    <RightAngle vertex={project(C)} p={project(A)} q={project(B)} size={12}/>
  </Diagram>;
}

export function RectangleDiagram(){
  const A={x:100,y:70},B={x:420,y:70},C={x:420,y:250},D={x:100,y:250};
  return <Diagram label="Rectangle ABCD, AB = 16 cm, BC = 9 cm. Diagonal AC is labelled d.">
    {[[A,B],[B,C],[C,D],[D,A]].map(([p,q],i)=><Segment key={i} a={p} b={q}/>)}<Segment a={A} b={C} color="#6d28d9"/>
    <RightAngle vertex={B} p={A} q={C}/><Label p={{x:85,y:50}}>A</Label><Label p={{x:435,y:50}}>B</Label><Label p={{x:435,y:273}}>C</Label><Label p={{x:85,y:273}}>D</Label>
    <Label p={{x:260,y:40}}>16 cm</Label><Label p={{x:467,y:160}}>9 cm</Label><Label p={{x:242,y:187}} color="#6d28d9">d</Label>
  </Diagram>;
}

export function IsoscelesDiagram(){
  const A={x:260,y:55},B={x:125,y:235},C={x:395,y:235},D={x:260,y:235};
  const middle=mean([A,B,C]);
  return <Diagram label="Isosceles triangle ABC with AB = AC = 10 cm and BC = 12 cm. AD is perpendicular to BC, and D is the midpoint of BC. AD is labelled h.">
    <Segment a={A} b={B}/><Segment a={A} b={C}/><Segment a={B} b={C}/><Segment a={A} b={D} color="#0f766e" dashed/><RightAngle vertex={D} p={A} q={C}/>
    <Label p={{x:260,y:29}}>A</Label><Label p={{x:103,y:248}}>B</Label><Label p={{x:417,y:248}}>C</Label><Label p={{x:260,y:262}}>D</Label>
    <Label p={sideLabel(A,B,middle,32)}>10 cm</Label><Label p={sideLabel(A,C,middle,32)}>10 cm</Label><Label p={{x:284,y:144}} color="#0f766e">h</Label>
    <Label p={{x:192,y:269}}>6 cm</Label><Label p={{x:328,y:269}}>6 cm</Label><Label p={{x:260,y:310}}>BC = 12 cm</Label>
  </Diagram>;
}
