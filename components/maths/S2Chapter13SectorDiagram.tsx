type Props={angle?:number;radius?:string;inner?:boolean;arcOnly?:boolean;highlight?:boolean};
export function S2Chapter13SectorDiagram({angle=120,radius='r',inner=false,arcOnly=false,highlight=false}:Props){
 const point=(r:number,a:number)=>`${160+r*Math.cos(a*Math.PI/180)} ${155-r*Math.sin(a*Math.PI/180)}`;
 const arc=(r:number)=>`M ${point(r,0)} A ${r} ${r} 0 ${angle>180?1:0} 0 ${point(r,angle)}`;
 const shape=inner?`${arc(105)} L ${point(65,angle)} A 65 65 0 ${angle>180?1:0} 1 ${point(65,0)} Z`:`M 160 155 L ${point(105,0)} A 105 105 0 ${angle>180?1:0} 0 ${point(105,angle)} Z`;
 return <svg viewBox="0 0 340 310" role="img" aria-label={`${inner?'Annular sector':arcOnly?'Arc':'Sector'}, central angle ${angle} degrees, radius ${radius}`} style={{width:'100%',maxWidth:360,display:'block',margin:'auto'}}>
 <circle cx="160" cy="155" r="105" fill="none" stroke="#94a3b8" strokeDasharray="5 5"/>
 <path d={shape} fill={arcOnly?'none':'#cffafe'} stroke="#0e7490" strokeWidth="2"/>
 <path d={arc(105)} fill="none" stroke="#d97706" strokeWidth="4"/>
 {highlight&&!inner&&<path d={`M ${point(105,angle)} L 160 155 L ${point(105,0)}`} fill="none" stroke="#be123c" strokeWidth="4"/>}
 {inner&&<path d={`M 160 155 L ${point(105,angle)} M 160 155 L ${point(105,0)}`} stroke="#64748b" strokeDasharray="4 4"/>}
 <path d={arc(26)} fill="none" stroke="#0e7490"/>
 <g fontFamily="Arial,sans-serif" fontSize="15" fill="#24364b" paintOrder="stroke" stroke="white" strokeWidth="3" strokeLinejoin="round">
 <text x="145" y="175">O</text><text x="274" y="160">B</text><text x={160+119*Math.cos(angle*Math.PI/180)} y={160-119*Math.sin(angle*Math.PI/180)} textAnchor="middle">A</text>
 <text x={160+48*Math.cos(angle*Math.PI/360)} y={160-48*Math.sin(angle*Math.PI/360)} textAnchor="middle">{angle}°</text>
 <text x="213" y="181" textAnchor="middle">{radius}</text><text x="170" y="292" textAnchor="middle">{inner?'Shaded area = outer sector − inner sector':highlight?'Perimeter = arc + two radii':'Orange curve: arc AB'}</text></g></svg>;
}
