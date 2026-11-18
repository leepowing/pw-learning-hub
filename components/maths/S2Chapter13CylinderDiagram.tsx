type Props={kind?:'right'|'oblique'|'hollow'|'water'|'composite'|'net';radius?:string;height?:string;inner?:string;upperRadius?:string;upperHeight?:string;rise?:boolean};
export function S2Chapter13CylinderDiagram({kind='right',radius='r',height='h',inner='inner r',upperRadius='r',upperHeight='h₁',rise=false}:Props){
 const s=kind==='oblique'?35:0;
 return <svg viewBox="0 0 400 330" role="img" aria-label={`${kind} cylinder diagram: radius ${radius}, height ${height}`} style={{width:'100%',maxWidth:430,display:'block',margin:'auto'}}><g stroke="#0e7490" strokeWidth="2" fill="#cffafe">
 {kind==='net'?<><rect x="70" y="105" width="245" height="120" fill="#ccfbf1"/><circle cx="125" cy="65" r="40" fill="#fef3c7"/><circle cx="255" cy="265" r="40" fill="#fef3c7"/><path d="M125 65h40 M255 265h40" stroke="#be123c"/><g fill="#24364b" stroke="none" fontSize="16"><text x="190" y="130" textAnchor="middle">2πr</text><text x="330" y="170">h</text><text x="140" y="58">r</text><text x="270" y="258">r</text><text x="190" y="175" textAnchor="middle">Curved surface = 2πrh</text></g></>:<>
 <path d={`M ${95+s} 85 L 95 250 A 75 23 0 0 0 245 250 L ${245+s} 85`} />
 <path d="M95 250 A75 23 0 0 1 245 250" fill="none" strokeDasharray="5 4"/>
 <ellipse cx={170+s} cy="85" rx="75" ry="23" fill={kind==='water'?'white':'#fef3c7'}/>
 {kind==='hollow'&&<><ellipse cx="170" cy="85" rx="34" ry="11" fill="white"/><path d="M136 85V250 M204 85V250" strokeDasharray="5 4"/><ellipse cx="170" cy="250" rx="34" ry="11" fill="none" strokeDasharray="5 4"/></>}
 {kind==='water'&&<><path d="M96 150V250A74 23 0 0 0 244 250V150" fill="#7dd3fc" fillOpacity=".65"/><ellipse cx="170" cy="150" rx="74" ry="23" fill="#bae6fd"/>{rise&&<path d="M95 190 A75 23 0 0 0 245 190" fill="none" strokeDasharray="5 4"/>}</>}
 {kind==='composite'&&<><path d="M132 30V85A38 12 0 0 0 208 85V30" fill="#ccfbf1"/><ellipse cx="170" cy="30" rx="38" ry="12" fill="#fef3c7"/><path d="M170 30h38" stroke="#be123c"/><g fill="#24364b" stroke="none" fontSize="15"><text x="217" y="34">{upperRadius}</text><text x="217" y="61">{upperHeight}</text></g></>}
 {kind!=='composite'&&<path d={`M ${170+s} 85 H ${245+s}`} stroke="#be123c"/>}
 <path d={`M310 ${kind==='water'?150:85}h12 M316 ${kind==='water'?150:85}V${rise?190:250} M310 ${rise?190:250}h12`} fill="none"/>
 <g fill="#24364b" stroke="none" fontFamily="Arial,sans-serif" fontSize="15"><text x={170+s} y={kind==='composite'?285:54} textAnchor="middle">{radius}</text><text x="328" y="181">{height}</text>{kind==='hollow'&&<text x="170" y="120" textAnchor="middle">{inner}</text>}<text x="200" y="315" textAnchor="middle">{kind==='oblique'?'h is perpendicular to the bases':kind==='water'?(rise?'Dashed curve: earlier water level':'Wet surface: wall below water + base'):kind==='composite'?'Joined faces are internal':kind==='hollow'?'Volume: outer cylinder − inner space':'Circular bases and curved surface'}</text></g>
 </>}
 </g></svg>
}
