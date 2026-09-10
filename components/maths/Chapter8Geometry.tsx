import type { ReactNode } from "react";
export type Point = readonly [number, number];
const ink="#24364b",purple="#713dcc",teal="#167c78",orange="#ae570c";
export const project=([x,y]:Point):Point=>[300+28*x,270-28*y];
function Text({p,children,color=ink,anchor="middle",size=17}:{p:Point;children:ReactNode;color?:string;anchor?:"start"|"middle"|"end";size?:number}){return <text x={p[0]} y={p[1]} textAnchor={anchor} dominantBaseline="middle" style={{fontFamily:"Georgia, serif",fontSize:size,fill:color,stroke:"white",strokeWidth:4,paintOrder:"stroke",strokeLinejoin:"round"}}>{children}</text>}
export function Segment({a,b,color=ink,dashed=false}:{a:Point;b:Point;color?:string;dashed?:boolean}){const A=project(a),B=project(b);return <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} style={{stroke:color,strokeWidth:2.4,strokeDasharray:dashed?"6 5":undefined}}/>}
function Dot({p,label,offset=[0,-20],color=purple}:{p:Point;label:string;offset?:Point;color?:string}){const q=project(p);return <g data-point={JSON.stringify(p)}><circle cx={q[0]} cy={q[1]} r={4.5} fill={color}/><Text p={[q[0]+offset[0],q[1]+offset[1]]} color={color}>{label}</Text></g>}
function Note({p,text,offset=[0,0]}:{p:Point;text:string;offset?:Point}){const q=project(p);return <Text p={[q[0]+offset[0],q[1]+offset[1]]} color={teal}>{text}</Text>}
function Polygon({points,color=teal}:{points:Point[];color?:string}){return <polygon data-polygon={JSON.stringify(points)} points={points.map(p=>project(p).join(",")).join(" ")} style={{fill:color,fillOpacity:.09,stroke:color,strokeWidth:2.5}}/>}
export function Plane({children,title,quadrants=false}:{children?:ReactNode;title:string;quadrants?:boolean}){const ticks=Array.from({length:15},(_,i)=>i-7);return <div style={{width:"100%",minWidth:0,overflowX:"auto"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 540" role="img" aria-label={title} style={{display:"block",width:"100%",minWidth:360,height:"auto",background:"white"}}><title>{title}</title>
{ticks.map(n=><g key={n}><line x1={project([n,0])[0]} y1={74} x2={project([n,0])[0]} y2={466} stroke="#e4eaf0"/><line x1={104} y1={project([0,n])[1]} x2={496} y2={project([0,n])[1]} stroke="#e4eaf0"/></g>)}
<Segment a={[-7.4,0]} b={[7.5,0]}/><Segment a={[0,-7.4]} b={[0,7.5]}/><path d="M504 265 L510 270 L504 275 M295 66 L300 60 L305 66" fill="none" stroke={ink} strokeWidth={2}/>
{ticks.filter(n=>n!==0).map(n=><g key={n}><line x1={300+28*n} y1={266} x2={300+28*n} y2={274} stroke={ink}/><line x1={296} y1={270-28*n} x2={304} y2={270-28*n} stroke={ink}/><Text p={[300+28*n,286]} size={12}>{n}</Text><Text p={[288,270-28*n]} size={12} anchor="end">{n}</Text></g>)}
<Text p={[525,270]}>x</Text><Text p={[300,45]}>y</Text><Text p={[313,255]} size={14}>O</Text>
{quadrants&&[[4,5,"Quadrant I"],[-4,5,"Quadrant II"],[-4,-5,"Quadrant III"],[4,-5,"Quadrant IV"]].map(([x,y,t])=><Note key={t} p={[Number(x),Number(y)]} text={String(t)}/>)}{children}</svg></div>}
export const kinds=["plane","plot","read","horizontal","vertical","horizontal-example","vertical-example","axis-distance","distance-rectangle","area-rectangle","area-triangle","split","fill","translation","reflection","rotation","home"] as const;
export type Chapter8DiagramKind=typeof kinds[number];
export default function Chapter8Diagram({kind}:{kind:Chapter8DiagramKind}){
let body:ReactNode=null;
if(kind==="plane")return <Plane title="Coordinate axes with equal units and four quadrants" quadrants/>;
if(kind==="plot"||kind==="home")body=<><Segment a={[0,0]} b={[-3,0]} color={purple} dashed/><Segment a={[-3,0]} b={[-3,4]} color={purple} dashed/><Dot p={[-3,4]} label={`${kind==="home"?"P":"A"}(−3, 4)`}/><Note p={[-1.5,0]} text="3 left" offset={[0,45]}/><Note p={[-3,2]} text="4 up" offset={[-35,0]}/></>;
if(kind==="read")body=<><Segment a={[4,0]} b={[4,-2]} dashed/><Segment a={[0,-2]} b={[4,-2]} dashed/><Dot p={[4,-2]} label="B(4, −2)" offset={[0,24]}/></>;
if(kind==="horizontal")body=<><Segment a={[-4,3]} b={[5,3]} color={purple}/><Dot p={[-4,3]} label="P"/><Dot p={[5,3]} label="Q"/><Note p={[0,-8.5]} text="Same y-coordinate"/></>;
if(kind==="vertical")body=<><Segment a={[2,-4]} b={[2,4]} color={purple}/><Dot p={[2,4]} label="R"/><Dot p={[2,-4]} label="S" offset={[0,24]}/><Note p={[0,-8.5]} text="Same x-coordinate"/></>;
if(kind==="horizontal-example")body=<><Segment a={[-4,3]} b={[5,3]} color={purple}/><Dot p={[-4,3]} label="P(−4, 3)"/><Dot p={[5,3]} label="Q(5, 3)"/><Note p={[2,3]} text="9 units" offset={[0,-48]}/></>;
if(kind==="vertical-example")body=<><Segment a={[2,-5]} b={[2,4]} color={purple}/><Dot p={[2,-5]} label="R(2, −5)" offset={[0,24]}/><Dot p={[2,4]} label="S(2, 4)"/><Note p={[2,-1.5]} text="9 units" offset={[60,0]}/></>;
if(kind==="axis-distance")body=<><Segment a={[-6,2]} b={[0,2]} dashed color={purple}/><Segment a={[-6,2]} b={[-6,0]} dashed color={teal}/><Dot p={[-6,2]} label="T(−6, 2)" offset={[0,-45]}/><Note p={[-3,2]} text="6 units" offset={[0,-20]}/><Note p={[-6,1]} text="2 units" offset={[-50,0]}/></>;
if(kind==="distance-rectangle"||kind==="area-rectangle"){
const distance=kind==="distance-rectangle",l=distance?-3:-4,r=distance?5:3,t=distance?4:3,b=-2,pts:Point[]=[[l,t],[r,t],[r,b],[l,b]];
body=<><Polygon points={pts}/>{pts.map((p,i)=><Dot key={i} p={p} label={`${"ABCD"[i]}(${p[0]}, ${p[1]})`} offset={[0,i<2?-24:26]}/>)}<Note p={[(l+r)/2+2,t]} text={`${r-l} units`} offset={[0,-52]}/><Note p={[r,(t+b)/2]} text={`${t-b} units`} offset={[56,0]}/></>;
}
if(kind==="area-triangle")body=<><Polygon points={[[-3,-2],[5,-2],[1,4]]} color={purple}/><Segment a={[1,4]} b={[1,-2]} dashed color={teal}/><Segment a={[1,-1.6]} b={[1.4,-1.6]} color={teal}/><Segment a={[1.4,-1.6]} b={[1.4,-2]} color={teal}/><Dot p={[-3,-2]} label="P(−3, −2)" offset={[0,26]}/><Dot p={[5,-2]} label="Q(5, −2)" offset={[0,26]}/><Dot p={[1,4]} label="R(1, 4)"/><Note p={[1,-2]} text="8 units" offset={[0,52]}/><Note p={[1,1]} text="6 units" offset={[50,0]}/></>;
if(kind==="split"||kind==="fill"){
const split=kind==="split",pts:Point[]=split?[[-4,4],[2,4],[2,1],[5,1],[5,-3],[-4,-3]]:[[-4,-2],[4,-2],[4,1],[1,4],[-4,4]];
body=<>{!split&&<Polygon points={[[1,4],[4,4],[4,1]]} color={orange}/>}<Polygon points={pts}/>{split&&<Segment a={[2,1]} b={[2,-3]} dashed color={purple}/>}{pts.map((p,i)=><Dot key={i} p={p} label={`(${p[0]}, ${p[1]})`} offset={split?([[0,-24],[0,-24],[0,-23],[24,-22],[0,24],[0,24]] as Point[])[i]:([[0,24],[0,24],[44,-15],[0,-24],[0,-24]] as Point[])[i]}/>)}{split?<><Note p={[-1,3]} text="Rectangle 1"/><Note p={[3.5,-1.2]} text="Rectangle 2"/></>:<Note p={[3,3.7]} text="extra" offset={[15,-23]}/>}</>;
}
if(kind==="translation")body=<><Segment a={[2,3]} b={[6,3]} dashed color={purple}/><Segment a={[6,3]} b={[6,-2]} dashed color={teal}/><Dot p={[2,3]} label="P(2, 3)" offset={[-25,-22]}/><Dot p={[6,-2]} label="P′(6, −2)" offset={[-5,25]} color={teal}/><Note p={[4,3]} text="4 right" offset={[0,-49]}/><Note p={[6,.5]} text="5 down" offset={[56,-4]}/></>;
if(kind==="reflection")body=<><Segment a={[-7,1]} b={[7,1]} dashed color={teal}/><Segment a={[3,5]} b={[3,-3]} dashed color={purple}/><Dot p={[3,5]} label="R(3, 5)"/><Dot p={[3,-3]} label="R′(3, −3)" offset={[0,26]} color={teal}/><Note p={[-4,1]} text="y = 1" offset={[0,-23]}/><Note p={[3,3]} text="4 units" offset={[53,0]}/><Note p={[3,-1]} text="4 units" offset={[53,0]}/></>;
if(kind==="rotation"){
const a=Math.atan2(1,3),r=Math.sqrt(10)*28,at=(theta:number):Point=>[300+r*Math.cos(theta),270-r*Math.sin(theta)];
const arc=(turn:number,color:string)=>{const A=at(a),B=at(a+turn),t=a+turn,s=Math.sign(turn),v:Point=[-Math.sin(t)*s,-Math.cos(t)*s],back:Point=[B[0]-v[0]*9,B[1]-v[1]*9];return <g data-rotation={turn*180/Math.PI}><path d={`M${A.join(",")} A${r},${r} 0 ${Math.abs(turn)>Math.PI?1:0} ${turn>0?0:1} ${B.join(",")}`} fill="none" stroke={color} strokeWidth={2}/><path d={`M${back[0]-v[1]*4},${back[1]+v[0]*4} L${B.join(",")} L${back[0]+v[1]*4},${back[1]-v[0]*4}`} fill="none" stroke={color} strokeWidth={2}/></g>};
body=<>{arc(Math.PI,teal)}{arc(Math.PI/2,purple)}{arc(-Math.PI/2,orange)}{([[3,1],[-1,3],[-3,-1],[1,-3]] as Point[]).map((p,i)=><Segment key={i} a={[0,0]} b={p} dashed color={[ink,purple,teal,orange][i]}/>)}<Dot p={[3,1]} label="T(3, 1)" offset={[60,-10]}/><Dot p={[-1,3]} label="90° ACW: (−1, 3)" offset={[-65,-46]}/><Dot p={[-3,-1]} label="180°: (−3, −1)" offset={[-36,36]} color={teal}/><Dot p={[1,-3]} label="90° CW: (1, −3)" offset={[35,34]} color={orange}/></>;
}
return <Plane title={`Chapter 8: ${kind.replace(/-/g," ")}`}>{body}</Plane>;
}
