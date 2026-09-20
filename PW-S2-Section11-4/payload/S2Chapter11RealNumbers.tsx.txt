import type { ReactNode } from 'react';
function Diagram({label,children,height=330}:{label:string;children:ReactNode;height?:number}){return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 560 ${height}`} role="img" aria-label={label} style={{display:'block',width:'100%',height:'auto',maxWidth:680,margin:'20px auto'}}>{children}</svg>;}
function Label({x,y,children,size=19,color='#172d50'}:{x:number;y:number;children:ReactNode;size?:number;color?:string}){return <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill={color} fontSize={size} fontFamily="Arial, sans-serif">{children}</text>;}
function Segment({x1,y1,x2,y2,color='#172d50',dashed=false}:{x1:number;y1:number;x2:number;y2:number;color?:string;dashed?:boolean}){return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={2.5} strokeDasharray={dashed?'7 5':undefined}/>;}
export function NumberFamilies(){return <Diagram label="Real numbers split into rational and irrational numbers. Integers are a subset of rational numbers. The boxes are not drawn to represent quantities." height={350}>
 <rect x={15} y={15} width={530} height={315} rx={16} fill="#f8fafc" stroke="#172d50" strokeWidth={2}/><Label x={280} y={43} size={24}>Real numbers</Label>
 <rect x={35} y={76} width={282} height={232} rx={12} fill="#ecfeff" stroke="#0f766e" strokeWidth={2}/><Label x={176} y={104} size={22}>Rational numbers</Label><Label x={176} y={139}>1/2, −3/4, 0.25, 0.333…</Label>
 <rect x={58} y={168} width={236} height={118} rx={10} fill="#ccfbf1" stroke="#0f766e" strokeWidth={2}/><Label x={176} y={199} size={22}>Integers</Label><Label x={176} y={244}>…, −2, −1, 0, 1, 2, …</Label>
 <rect x={335} y={76} width={190} height={232} rx={12} fill="#f5f3ff" stroke="#6d28d9" strokeWidth={2}/><Label x={430} y={104} size={22}>Irrational</Label><Label x={430} y={132} size={22}>numbers</Label><Label x={430} y={194}>√2, √3, π</Label><Label x={430} y={246} size={16}>Not fractions of</Label><Label x={430} y={269} size={16}>two integers</Label>
 </Diagram>;}
export function RootTwoConstruction(){
 const origin={x:80,y:230},step=160,radius=Math.sqrt(2)*step,diagonalEnd={x:origin.x+step,y:origin.y-step},rootX=origin.x+radius;
 return <Diagram label="A right triangle has legs 1 and 1, giving diagonal length square root of 2. A circular arc centred at zero transfers that length to the number line at square root of 2, between 1 and 2.">
 <Segment x1={45} y1={230} x2={470} y2={230}/><Segment x1={origin.x} y1={origin.y} x2={diagonalEnd.x} y2={diagonalEnd.y} color="#6d28d9"/><Segment x1={240} y1={230} x2={240} y2={70}/>
 <path d="M 222 230 L 222 212 L 240 212" fill="none" stroke="#0f766e" strokeWidth={2}/>
 <path d={`M ${diagonalEnd.x} ${diagonalEnd.y} A ${radius} ${radius} 0 0 1 ${rootX} ${origin.y}`} fill="none" stroke="#6d28d9" strokeWidth={2} strokeDasharray="6 4"/>
 {[0,1,2].map(v=><g key={v}><Segment x1={origin.x+v*step} y1={224} x2={origin.x+v*step} y2={236}/><Label x={origin.x+v*step} y={259}>{v}</Label></g>)}
 <circle cx={rootX} cy={230} r={5} fill="#6d28d9"/><Label x={rootX} y={259} color="#6d28d9">√2</Label><Label x={268} y={150}>1</Label><Label x={160} y={208}>1</Label><Label x={137} y={135} color="#6d28d9">√2</Label><Label x={280} y={307} size={17}>√2 ≈ 1.414, but √2 is the exact value.</Label>
 </Diagram>;
}
