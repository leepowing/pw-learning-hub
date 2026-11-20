import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../chapter-11/lesson.module.css";

const back = <Link href="/maths/s3/chapter-13">← Back to Chapter 13</Link>;

export function Lesson({number,title,goal,children}:{number:string,title:string,goal:string,children:ReactNode}) {
  return <main className={styles.lesson}>{back}<header><small>SECTION {number}</small><h1>{title}</h1><p>{goal}</p></header>{children}{back}</main>;
}

type Point = [name:string, x:number, y:number];
export function Grid({points, outline=false, guide=false, description}:{points:Point[],outline?:boolean,guide?:boolean,description:string}) {
  const xs = [0,...points.map(p=>p[1])], ys = [0,...points.map(p=>p[2])];
  const left=Math.min(...xs)-1, right=Math.max(...xs)+1, bottom=Math.min(...ys)-1, top=Math.max(...ys)+1;
  const unit=26, x=(v:number)=>34+(v-left)*unit, y=(v:number)=>24+(top-v)*unit;
  const ticks=(a:number,b:number)=>Array.from({length:b-a+1},(_,i)=>a+i);
  return <svg role="img" aria-label={description} viewBox={`0 0 ${x(right)+28} ${y(bottom)+24}`}>
    {ticks(left,right).map(n=><g key={n}><line x1={x(n)} x2={x(n)} y1={y(bottom)} y2={y(top)} stroke={n===0?"#385568":"#d6e4e7"}/>{n!==0 && <text x={x(n)} y={y(bottom)+14} textAnchor="middle" fontSize="12">{n}</text>}</g>)}
    {ticks(bottom,top).map(n=><g key={n}><line x1={x(left)} x2={x(right)} y1={y(n)} y2={y(n)} stroke={n===0?"#385568":"#d6e4e7"}/><text x={x(left)-8} y={y(n)+4} textAnchor="end" fontSize="12">{n}</text></g>)}
    <text x={x(right)+8} y={y(0)+4}>x</text><text x={x(0)-4} y={y(top)-6}>y</text>
    {guide && <path d={`M${x(points[0][1])} ${y(points[0][2])} H${x(points[1][1])} V${y(points[1][2])}`} stroke="#567888" strokeDasharray="4 3" fill="none"/>}
    {outline && <polygon points={points.map(([,a,b])=>[x(a),y(b)].join(",")).join(" ")} stroke="#067658" strokeWidth="2" fill="#05966918"/>}
    {points.map(([name,a,b])=><g key={name}><circle cx={x(a)} cy={y(b)} r="3.5" fill="#086549"/><text x={x(a)+5} y={y(b)-6} fontWeight="bold">{name}</text></g>)}
  </svg>;
}
