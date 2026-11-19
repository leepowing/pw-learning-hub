export default function Ray({value,right,closed}:{value:number;right:boolean;closed:boolean}) {
  const end = right ? 156 : 24;
  return <svg viewBox="0 0 180 62" role="img" aria-label={(closed?"Filled":"Open")+" circle at "+value+" pointing "+(right?"right":"left")}>
    <path d="M8 34 H172" stroke="#64748b"/><path d="M90 30 V39" stroke="#334155"/>
    <path d={`M90 22 H${end} m${right?-6:6} -4 L${end} 22 l${right?-6:6} 4`} fill="none" stroke="#0f766e" strokeWidth="2"/>
    <circle cx="90" cy="22" r="4" stroke="#0f766e" strokeWidth="2" fill={closed?"#0f766e":"white"}/><text x="90" y="55" textAnchor="middle">{value}</text>
  </svg>;
}
