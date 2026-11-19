import Link from "next/link";

export function Back() { return <Link href="/maths/s3/chapter-8">← Chapter 8 · Quadrilaterals</Link>; }

export function Step({reason,hk,result}:{reason:string;hk:string;result:string}) {
  return <li><strong>{reason}</strong><small>HKDSE · {hk}</small>{result}</li>;
}

export function Diagram({both=false}:{both?:boolean}) {
  return <svg viewBox="0 0 240 140" role="img" aria-label={both ? "Parallelogram ABCD. Diagonals AC and BD intersect at E." : "Quadrilateral ABCD in boundary order, with diagonal AC."}>
    <polygon points={both ? "20,110 155,110 210,25 75,25" : "20,110 155,110 210,25 90,40"} fill="#e4f5ef" stroke="#176653" strokeWidth="2"/>
    <path d="M20 110L210 25" stroke="#28659c" strokeDasharray="5 3"/>
    {both && <><path d="M155 110L75 25" stroke="#28659c"/><text x="115" y="86">E</text></>}
    <text x="5" y="125">A</text><text x="155" y="127">B</text><text x="213" y="26">C</text><text x={both?65:80} y={both?19:34}>D</text>
  </svg>;
}
