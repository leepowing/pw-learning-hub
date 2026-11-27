"use client";
export default function PolynomialDiagram({kind}:{kind:string}) {
 const labels = kind === "division" ? ["Dividend P(x)","÷ Divisor D(x)","Quotient Q(x)","Remainder R(x)"] : kind === "remainder" ? ["P(x)","x − h","Evaluate P(h)","Remainder R"] : kind === "factors" ? ["P(h) = 0","x − h","Factor Q(x)","P(x) = (x−h)Q(x)"] : kind === "synthetic" ? ["Coefficients","Bring down","Multiply by h","Add → Remainder"] : ["a³ ± b³","Cube terms","Linear factor","Quadratic factor"];
 return <svg viewBox="0 0 720 126" role="img" aria-label={`${kind} step diagram`} style={{width:"100%",height:"auto",maxWidth:720}}>
  {labels.map((label,i)=><g key={i}><rect x={10+i*180} y="21" width="161" height="72" rx="12" fill={i===3?"#d1fae5":"#eff6ff"} stroke="#93c5fd"/><text x={90+i*180} y="59" fill="#164e63" fontSize={i===3?14:15} textAnchor="middle" fontWeight="700">{label}</text>{i<3&&<path d={`M ${173+i*180} 57 h 14 l -6 -6 m 6 6 l -6 6`} stroke="#059669" strokeWidth="2" fill="none"/>}</g>)}
 </svg>
}
