import Link from "next/link";
import katex from "katex";
import type { ReactNode } from "react";
import styles from "./lesson.module.css";

export function Formula({tex}:{tex:string}) {
  return <span dangerouslySetInnerHTML={{__html:katex.renderToString(tex)}}/>;
}
export function Lesson({number,title,goal,children}:{number:string,title:string,goal:string,children:ReactNode}) {
  const back = <Link href="/maths/s3/chapter-11">← Back to Chapter 11</Link>;
  return <main className={styles.lesson}>{back}<header><small>SECTION {number}</small><h1>{title}</h1><p>{goal}</p></header>{children}{back}</main>;
}
export function Card({label,title,children}:{label:string,title:string,children:ReactNode}) {
  return <section><small>{label}</small><h2>{title}</h2>{children}</section>;
}
export function Triangle({adj,opp,labels,angle="θ"}:{adj:number,opp:number,labels:[string,string,string],angle?:string}) {
  const scale=Math.min(160/adj,135/opp);
  const width=adj*scale, height=opp*scale;
  const left=38, base=165, right=left+width, top=base-height;
  const a=Math.atan2(opp,adj), radius=22;
  return <svg viewBox="0 0 265 200" role="img" aria-label={`Right triangle, angle ${angle}, adjacent side ${labels[0]}, opposite side ${labels[1]}, hypotenuse ${labels[2]}.`}>
    <path d={`M${left} ${base} H${right} V${top} Z`} fill="#e2f6f1" stroke="#204d55" strokeWidth="2"/>
    <path d={`M${right-9} ${base} v-9 h9 M${left+radius} ${base} A22 22 0 0 0 ${left+radius*Math.cos(a)} ${base-radius*Math.sin(a)}`} fill="none" stroke="#06765e"/>
    <text x={left+width/2} y={base+20}>{labels[0]}</text><text x={right+8} y={base-height/2}>{labels[1]}</text>
    <text x={left+width/2-12} y={base-height/2-9}>{labels[2]}</text>
    <text x={left+30} y={base-4} fontSize="13">{angle}</text></svg>;
}
