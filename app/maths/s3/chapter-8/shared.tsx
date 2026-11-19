import Link from "next/link";
import katex from "katex";
import type { ReactNode } from "react";
import styles from "./chapter.module.css";

export function Back() { return <Link href="/maths/s3/chapter-8">← Back to Chapter 8</Link>; }

export function Lesson({number,title,goal,children}:{number:string;title:string;goal:string;children:ReactNode}) {
  return <main className={styles.lesson}><Back/><header><strong>SECTION {number}</strong><h1>{title}</h1><p>{goal}</p></header>{children}<footer><Back/></footer></main>;
}

export function Working({children}:{children:ReactNode}) {
  return <table><thead><tr><th>Working</th><th>Reason</th></tr></thead><tbody>{children}</tbody></table>;
}

export function Step({reason,hk,result}:{reason:string;hk:string;result:string}) {
  return <tr><td>{result}</td><td>GCSE: {reason}<small>HKDSE: {hk}</small></td></tr>;
}

export function Answer({formula}:{formula:string}) {
  return <p className={styles.answer}><b>Answer </b><span dangerouslySetInnerHTML={{__html:katex.renderToString(formula)}}/></p>;
}

export function Diagram({both=false}:{both?:boolean}) {
  return <svg viewBox="0 0 240 140" role="img" aria-label={both ? "Parallelogram ABCD. Diagonals AC and BD intersect at E." : "Quadrilateral ABCD in boundary order, with diagonal AC."}>
    <polygon points={both ? "20,110 155,110 210,25 75,25" : "20,110 155,110 210,25 90,40"} fill="#e4f5ef" stroke="#176653" strokeWidth="2"/>
    <path d="M20 110L210 25" stroke="#28659c" strokeDasharray="5 3"/>
    {both && <><path d="M155 110L75 25" stroke="#28659c"/><text x="115" y="86">E</text></>}
    <text x="5" y="125">A</text><text x="155" y="127">B</text><text x="213" y="26">C</text><text x={both?65:80} y={both?19:34}>D</text>
  </svg>;
}
