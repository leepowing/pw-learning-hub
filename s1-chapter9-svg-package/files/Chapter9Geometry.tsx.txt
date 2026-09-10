"use client";
import type { ReactNode } from "react";
type P=readonly[number,number];
const ink="#172d50",purple="#6d28d9",teal="#0f766e",orange="#b45309";
export function polar(v:P,r:number,d:number):P{return [v[0]+r*Math.cos(d*Math.PI/180),v[1]-r*Math.sin(d*Math.PI/180)]}
function Segment({a,b,color=ink}:{a:P;b:P;color?:string}){return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} style={{stroke:color,strokeWidth:2.8,strokeLinecap:"round"}}/>}
function Label({p,text,color=ink,vertex=false}:{p:P;text:string;color?:string;vertex?:boolean}){return <text x={p[0]} y={p[1]} textAnchor="middle" dominantBaseline="central" style={{fill:color,fontFamily:vertex?"Georgia, serif":"Arial, sans-serif",fontSize:vertex?21:20,fontStyle:vertex?"italic":"normal",fontWeight:vertex?400:700,stroke:"white",strokeWidth:4,paintOrder:"stroke",strokeLinejoin:"round"}}>{text}</text>}
export function Angle({v,start,end,label,r=32,lr=58,color=purple}:{v:P;start:number;end:number;label:string;r?:number;lr?:number;color?:string}){
 const a=polar(v,r,start),b=polar(v,r,end);
 return <g data-angle={label} data-degrees={end-start} data-vertex={JSON.stringify(v)}><path d={`M ${a[0]} ${a[1]} A ${r} ${r} 0 ${end-start>180?1:0} 0 ${b[0]} ${b[1]}`} style={{fill:"none",stroke:color,strokeWidth:2.2}}/><Label p={polar(v,lr,(start+end)/2)} text={label} color={color}/></g>
}
function Frame({children,title}:{children:ReactNode;title:string}){return <div style={{width:"100%",overflowX:"auto"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" role="img" aria-label={title} style={{display:"block",width:"100%",minWidth:360,height:"auto",maxHeight:"none"}}>{children}</svg></div>}
export function Straight({numeric=false}:{numeric?:boolean}){
 const v:P=[300,260],theta=numeric?43:60;
 return <Frame title="Adjacent angles on a straight line"><Segment a={[70,260]} b={[530,260]}/><Segment a={v} b={polar(v,195,theta)}/><Angle v={v} start={theta} end={180} label={numeric?"137°":"a"} r={46} lr={78}/><Angle v={v} start={0} end={theta} label={numeric?"x":"b"} r={46} lr={80} color={teal}/><Label p={[300,288]} text="O" vertex/></Frame>
}
export function Crossing({numeric=false,second="c"}:{numeric?:boolean;second?:string}){
 const v:P=[300,185],theta=numeric?27:32;
 return <Frame title="Two straight lines intersect; marked angles are vertically opposite"><Segment a={polar(v,225,theta)} b={polar(v,225,180+theta)}/><Segment a={polar(v,225,180-theta)} b={polar(v,225,360-theta)}/><Angle v={v} start={theta} end={180-theta} label={numeric?"126°":"a"} r={43} lr={78}/><Angle v={v} start={180+theta} end={360-theta} label={numeric?"x":second} r={43} lr={78} color={teal}/><Label p={[320,185]} text="O" vertex/></Frame>
}
export function Around({mode="letters"}:{mode?:"letters"|"three"|"four"}){
 const sizes=mode==="three"?[115,75,170]:mode==="four"?[72,89,104,95]:[75,95,100,90],labels=mode==="three"?["115°","75°","x"]:mode==="four"?["72°","89°","104°","x"]:["a","b","c","d"],v:P=[300,190];
 let angle=0;return <Frame title="Non-overlapping angles make one complete turn">{sizes.map((size,i)=>{const start=angle;angle+=size;return <g key={i}><Segment a={v} b={polar(v,153,start)}/><Angle v={v} start={start} end={angle} label={labels[i]} r={38} lr={78} color={[purple,teal,orange,purple][i]}/></g>})}<circle cx={300} cy={190} r={3} fill={ink}/></Frame>
}
export type Relation="corresponding"|"alternate"|"interior";
export function Parallel({kind="corresponding",converse=false,numeric=false,plain=false,names=false}:{kind?:Relation;converse?:boolean;numeric?:boolean;plain?:boolean;names?:boolean}){
 const theta=numeric?(converse?85:kind==="alternate"?63:68):60;
 const y1=110,y2=260,x1=350,x2=x1-(y2-y1)/Math.tan(theta*Math.PI/180),u:P=[x1,y1],v:P=[x2,y2];
 const top=converse&&numeric?[theta,180]:kind==="corresponding"?[0,theta]:kind==="alternate"?[180+theta,360]:[180,180+theta];
 const bottom=converse&&numeric?[theta,180]:kind==="corresponding"?[0,theta]:[theta,180];
 const labels=numeric?(converse?["95°","95°"]:kind==="alternate"?["117°","x"]:["68°","x"]):["a","b"];
 const mark=(y:number)=><path data-parallel-mark="" d={`M 100 ${y-7} l 10 7 -10 7`} style={{fill:"none",stroke:teal,strokeWidth:2.5}}/>;
 return <Frame title={converse?"Angle conditions used to prove parallel lines":"Parallel lines crossed by a transversal"}>
 <Segment a={[65,y1]} b={[535,y1]}/><Segment a={[65,y2]} b={[535,y2]}/><Segment a={polar(v,75,theta+180)} b={polar(u,78,theta)}/>
 {!converse&&<>{mark(y1)}{mark(y2)}</>}
 {names?<><Label p={[45,y1]} text="A" vertex/><Label p={[555,y1]} text="B" vertex/><Label p={[45,y2]} text="C" vertex/><Label p={[555,y2]} text="D" vertex/></>:<><Label p={[553,y1]} text="p" vertex/><Label p={[553,y2]} text="q" vertex/></>}
 <Label p={polar(u,98,theta)} text="t" vertex/>
 {!plain&&<><Angle v={u} start={top[0]} end={top[1]} label={labels[0]} lr={62}/><Angle v={v} start={bottom[0]} end={bottom[1]} label={labels[1]} lr={62} color={teal}/></>}
 {!converse&&<Label p={[480,345]} text="p // q" color={teal}/>}
 </Frame>
}
export function Triangle({kind="sum"}:{kind?:string}){
 // Data order: left base, apex, right base. Coordinates satisfy all angle values.
 let left=50,top=70,right=60,labels=["b","a","c"],ext="",vertices=true,mirror=false;
 if(kind==="interior-example"){left=50;top=75;right=55;labels=["50°","x","55°"];vertices=false}
 if(kind==="exterior"){labels=["b","a",""];ext="c₁"}
 if(kind==="exterior-example"){left=28;top=44;right=108;labels=["28°","44°",""];ext="x";mirror=true}
 if(kind==="flash-sum")labels=["a","b","c"];
 if(kind==="flash-exterior"){labels=["a","b",""];ext="c"}
 if(kind==="flash-example"){left=48;top=67;right=65;labels=["48°","67°",""];ext="x";vertices=false}
 if(kind==="checkpoint-triangle"){left=48;top=65;right=67;labels=["48°","x","67°"];vertices=false}
 if(kind==="checkpoint-exterior"){left=46;top=31;right=103;labels=["46°","31°",""];ext="x";vertices=false}
 if(kind==="checkpoint-adjacent"){left=60;top=64;right=56;labels=["","","x"];ext="124°";vertices=false}
 if(kind==="checkpoint-algebra"){left=60;top=30;right=90;labels=["2x","x","3x"];vertices=false}
 const rad=(d:number)=>d*Math.PI/180,L=290,h=L/(1/Math.tan(rad(left))+1/Math.tan(rad(right))),tx=h/Math.tan(rad(left));
 const raw:P[]=[[0,0],[tx,-h],[L,0]];
 const maxX=Math.max(L,tx),minX=Math.min(0,tx),scale=Math.min(1,205/h,365/(maxX-minX));
 let points=raw.map(p=>[95+(p[0]-minX)*scale,280+p[1]*scale] as P);
 if(mirror)points=points.map(p=>[600-p[0],p[1]] as P);
 const [b,a,c]=points;
 function interior(i:number,label:string){if(!label)return null;const v=points[i],others=points.filter((_,j)=>j!==i);let s=Math.atan2(v[1]-others[0][1],others[0][0]-v[0])*180/Math.PI,e=Math.atan2(v[1]-others[1][1],others[1][0]-v[0])*180/Math.PI;if(e<s)[s,e]=[e,s];if(e-s>180){const old=s;s=e;e=old+360}return <Angle key={i} v={v} start={s} end={e} label={label} r={kind==="checkpoint-algebra"?24:32} lr={i===1?(e-s<40?76:62):(kind==="checkpoint-algebra"?46:60)} color={[teal,purple,orange][i]}/>}
 return <Frame title="Triangle angle relationships"><g data-triangle={JSON.stringify(points)}><Segment a={b} b={a}/><Segment a={a} b={c}/><Segment a={c} b={b}/></g>
 {labels.map((label,i)=>interior(i,label))}
 {ext&&<><Segment a={c} b={[c[0]+(mirror?-110:110),c[1]]}/><Angle v={c} start={mirror?right:0} end={mirror?180:180-right} label={ext} r={38} lr={70} color={orange}/></>}
 {vertices&&<><Label p={[a[0],a[1]-26]} text="A" vertex/><Label p={[b[0]+(mirror?20:-20),b[1]+22]} text="B" vertex/><Label p={[c[0],c[1]+28]} text="C" vertex/>{mirror&&<Label p={[c[0]-110,c[1]+26]} text="D" vertex/>}</>}
 </Frame>
}
export function CheckpointDiagram({kind}:{kind:string}){
 if(kind==="straight-line")return <Straight numeric/>;
 if(kind==="vertically-opposite")return <Crossing numeric/>;
 if(kind==="angles-at-point"||kind==="four-at-point")return <Around mode={kind==="angles-at-point"?"three":"four"}/>;
 if(["corresponding","alternate","same-side","converse"].includes(kind))return <Parallel kind={kind==="same-side"?"interior":kind==="alternate"?"alternate":"corresponding"} numeric converse={kind==="converse"}/>;
 return <Triangle kind={kind==="triangle"?"checkpoint-triangle":kind==="exterior"?"checkpoint-exterior":kind==="exterior-adjacent"?"checkpoint-adjacent":"checkpoint-algebra"}/>;
}
