"use client";
import type { ReactNode } from "react";
export type Point = readonly [number, number];
type Tri = readonly [Point, Point, Point];
const ink="#172d50", accent="#6d28d9", teal="#0f766e";
const add=(a:Point,b:Point):Point=>[a[0]+b[0],a[1]+b[1]];
const sub=(a:Point,b:Point):Point=>[a[0]-b[0],a[1]-b[1]];
const mul=(a:Point,k:number):Point=>[a[0]*k,a[1]*k];
const unit=(a:Point):Point=>mul(a,1/Math.hypot(...a));
export function interpolate(a:Point,b:Point,t:number):Point{return add(a,mul(sub(b,a),t))}
export function arcGeometry(v:Point,a:Point,b:Point,r:number){
 const u=unit(sub(a,v)),w=unit(sub(b,v)),s=add(v,mul(u,r)),e=add(v,mul(w,r));
 const cross=u[0]*w[1]-u[1]*w[0];
 return {d:`M ${s[0]} ${s[1]} A ${r} ${r} 0 0 ${cross>=0?1:0} ${e[0]} ${e[1]}`,bisector:unit(add(u,w)),degrees:Math.acos(Math.max(-1,Math.min(1,u[0]*w[0]+u[1]*w[1])))*180/Math.PI};
}
function Label({p,children,vertex=false}:{p:Point;children:ReactNode;vertex?:boolean}){
 return <text x={p[0]} y={p[1]} textAnchor="middle" dominantBaseline="central" style={{fill:vertex?ink:accent,fontFamily:vertex?"Georgia, serif":"Arial, sans-serif",fontStyle:vertex?"italic":"normal",fontSize:vertex?22:19,fontWeight:vertex?400:700,stroke:"white",strokeWidth:4,paintOrder:"stroke",strokeLinejoin:"round"}}>{children}</text>
}
export function Segment({a,b,color=ink}:{a:Point;b:Point;color?:string}){return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} style={{stroke:color,strokeWidth:2.8,strokeLinecap:"round"}}/>}
export function Angle({v,a,b,count=1,label}:{v:Point;a:Point;b:Point;count?:number;label?:string}){
 const r=20,geo=arcGeometry(v,a,b,r);
 return <g data-angle-degrees={geo.degrees}>{Array.from({length:count},(_,i)=><path key={i} d={arcGeometry(v,a,b,r+i*6).d} style={{fill:"none",stroke:accent,strokeWidth:2}}/>)}{label&&<Label p={add(v,mul(geo.bisector,48))}>{label}</Label>}</g>
}
export function SideTicks({a,b,count=1}:{a:Point;b:Point;count?:number}){
 const u=unit(sub(b,a)),n:Point=[-u[1],u[0]],m=interpolate(a,b,.5);
 return <g data-side-ticks={count}>{Array.from({length:count},(_,i)=>{const c=add(m,mul(u,(i-(count-1)/2)*7));return <Segment key={i} a={add(c,mul(n,-7))} b={add(c,mul(n,7))} color={teal}/>})}</g>
}
function RightAngle({v,a,b}:{v:Point;a:Point;b:Point}){
 const u=mul(unit(sub(a,v)),16),w=mul(unit(sub(b,v)),16),p=add(v,u),q=add(p,w),r=add(v,w);
 return <path data-right-angle="" d={`M ${p} L ${q} L ${r}`} style={{fill:"none",stroke:accent,strokeWidth:2}}/>
}
function SideLabel({a,b,opposite,label}:{a:Point;b:Point;opposite:Point;label:string}){
 const mid=interpolate(a,b,.5),u=unit(sub(b,a));let n:Point=[-u[1],u[0]];
 if(sub(opposite,mid)[0]*n[0]+sub(opposite,mid)[1]*n[1]>0)n=mul(n,-1);
 return <Label p={add(mid,mul(n,23))}>{label}</Label>
}
function Triangle({p,names,angles=[],ticks=[],sides=[],right,angleLabels={}}:{p:Tri;names:string[];angles?:number[];ticks?:number[];sides?:string[];right?:number;angleLabels?:Record<number,string>}){
 const center=mul(add(add(p[0],p[1]),p[2]),1/3);
 return <g data-triangle={JSON.stringify(p)}><polygon points={p.map(v=>v.join(",")).join(" ")} style={{fill:"#f8fafc",stroke:ink,strokeWidth:2.8,strokeLinejoin:"round"}}/>
 {p.map((v,i)=><Label key={i} p={add(v,mul(unit(sub(v,center)),27))} vertex>{names[i]}</Label>)}
 {p.map((v,i)=><g key={i}>{angles[i]>0&&<Angle v={v} a={p[(i+1)%3]} b={p[(i+2)%3]} count={angles[i]} label={angleLabels[i]}/>}
 {right===i&&<RightAngle v={v} a={p[(i+1)%3]} b={p[(i+2)%3]}/>}
 {ticks[i]>0&&<SideTicks a={v} b={p[(i+1)%3]} count={ticks[i]}/>}
 {sides[i]&&<SideLabel a={v} b={p[(i+1)%3]} opposite={p[(i+2)%3]} label={sides[i]}/>}</g>)}</g>
}
function Frame({children,label}:{children:ReactNode;label:string}){
 return <div style={{width:"100%",overflowX:"auto"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 340" role="img" aria-label={label} style={{display:"block",width:"100%",minWidth:520,height:"auto",maxHeight:"none"}}>{children}</svg></div>
}
export type PairMode="plain"|"all"|"angles"|"sides"|"sss"|"sas"|"asa"|"aas"|"rhs"|"similar"|"aaa"|"scale2"|"scale3"|"proportional"|"sas-proportional"|"worked-sas"|"worked-congruent"|"worked-similar"|"missing";
export function Pair({mode="plain",names=["A","B","C","X","Y","Z"],topFirst=false}:{mode?:PairMode;names?:string[];topFirst?:boolean}){
 let base:Tri=[[0,0],[100,-170],[230,0]],scale=1,leftScale=1;
 let angles:number[]=[],ticks:number[]=[],sides1:string[]=[],sides2:string[]=[],right:number|undefined;
 let labels1:Record<number,string>={},labels2:Record<number,string>={};
 if(["similar","aaa"].includes(mode)){leftScale=.68;scale=1.4;}
 if(["all","angles","aaa"].includes(mode))angles=[1,2,3];
 if(["all","sides","sss"].includes(mode))ticks=[1,2,3];
 if(mode==="sas"){ticks=[1,2,0];angles=[0,1,0]}
 if(mode==="asa"){ticks=[1,0,0];angles=[1,2,0]}
 if(mode==="aas"){ticks=[0,1,0];angles=[1,0,2]}
 if(mode==="rhs"){base=[[0,0],[0,-160],[210,0]];right=0;ticks=[1,2,0]}
 if(["scale2","scale3","proportional"].includes(mode)){
  const k=mode==="scale3"?3:2;scale=k;base=[[0,0],[0,-3],[4,0]];leftScale=mode==="scale3"?19:27;right=0;
  sides1=mode==="scale3"?["3","","4"]:["3","5","4"];sides2=mode==="scale3"?["9","","12"]:["6","10","8"];
 }
 if(["sas-proportional","worked-sas"].includes(mode)){
  const ab=mode==="worked-sas"?5:3,ac=4;const angle=Math.PI/3;
  base=[[0,0],[ab*Math.cos(angle),-ab*Math.sin(angle)],[ac,0]];
  leftScale=21;scale=2;angles=[1,0,0];sides1=[String(ab),"","4"];sides2=[String(2*ab),"","8"];
 }
 if(mode==="worked-congruent"){base=[[0,0],[0,-160],[210,0]];right=0;sides1=["4"];sides2=["q"];labels2={0:"p°"};}
 if(mode==="worked-similar"){
  base=[[0,0],[3*Math.cos(40*Math.PI/180),-3*Math.sin(40*Math.PI/180)],[6,0]];
  leftScale=38;scale=2/3;angles=[1,0,0];sides1=["3","","6"];sides2=["n","","4"];labels1={0:"40°"};labels2={0:"m°"};
 }
 if(mode==="missing"){base=[[0,0],[0,-6],[4,0]];leftScale=23;scale=1.5;right=0;sides1=["x","","4"];sides2=["9","","6"];}
 let l=base.map(p=>add(mul(p,leftScale),[85,260])) as unknown as Tri;
 let r=base.map(p=>add(mul(p,leftScale*scale),[425,260])) as unknown as Tri;
 // The name order is supplied independently of geometry, preserving each lesson's correspondence.
 let nameL=names.slice(0,3),nameR=names.slice(3,6);
 if(topFirst){nameL=[names[1],names[0],names[2]];nameR=[names[4],names[3],names[5]];}
 return <Frame label="Triangles with corresponding vertices, sides and angle marks"><Triangle p={l} names={nameL} angles={angles} ticks={ticks} sides={sides1} right={right} angleLabels={labels1}/><Triangle p={r} names={nameR} angles={angles} ticks={ticks} sides={sides2} right={mode==="worked-congruent"?undefined:right} angleLabels={labels2}/>{mode==="worked-congruent"&&<Angle v={r[0]} a={r[1]} b={r[2]} label="p°"/>}</Frame>
}
export function Nested(){
 const a:Point=[350,60],b:Point=[120,265],c:Point=[620,265],d=interpolate(a,b,.52),e=interpolate(a,c,.52);
 const parallel=(p:Point,q:Point)=>{const m=interpolate(p,q,.5);return <path data-parallel-mark="" d={`M ${m[0]-7} ${m[1]-6} l 9 6 -9 6`} style={{fill:"none",stroke:teal,strokeWidth:2.5}}/>};
 return <Frame label="D lies on AB and E lies on AC. DE // BC."><Segment a={a} b={b}/><Segment a={a} b={c}/><Segment a={b} b={c}/><Segment a={d} b={e}/>{parallel(d,e)}{parallel(b,c)}
 <Angle v={b} a={a} b={c}/><Angle v={d} a={a} b={e}/><Angle v={c} a={b} b={a} count={2}/><Angle v={e} a={d} b={a} count={2}/>
 {[[a,"A",0,-26],[b,"B",-23,17],[c,"C",23,17],[d,"D",-28,0],[e,"E",28,0]].map(([p,n,x,y])=><Label key={String(n)} p={add(p as Point,[x as number,y as number])} vertex>{String(n)}</Label>)}
 <Label p={[520,315]}>DE // BC</Label></Frame>
}
