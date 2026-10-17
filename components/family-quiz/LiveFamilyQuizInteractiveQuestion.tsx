"use client";

import type { FamilyQuizDiagramKind, FamilyQuizPublicInteraction } from "@/lib/familyQuiz";

type Props = { interaction: FamilyQuizPublicInteraction; values: string[]; onChange: (values: string[]) => void };
type DiagramTarget = { number: number; marker: [number, number]; target: [number, number]; path: string };

export function getInteractionAnswerCount(interaction: FamilyQuizPublicInteraction) {
  if (interaction.kind === "fill-blanks") return interaction.sentences.length;
  if (interaction.kind === "diagram-labels") return interaction.labels.length;
  if (interaction.kind === "matching") return interaction.left.length;
  if (interaction.kind === "ordering") return interaction.count;
  return interaction.rows.length;
}

function NumberMarker({ number, x, y }: { number: number; x: number; y: number }) {
  return <g><circle cx={x} cy={y} r="25" fill="#fff" stroke="#15803d" strokeWidth="4"/><text x={x} y={y + 9} fill="#050505" fontSize="26" fontWeight="800" textAnchor="middle">{number}</text></g>;
}

function ImageBackedDiagram({ src, width, height, ariaLabel, description, targets }: { src: string; width: number; height: number; ariaLabel: string; description: string; targets: DiagramTarget[] }) {
  return <svg className="scienceDiagram" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={ariaLabel}>
    <title>{ariaLabel}</title><desc>{description}</desc><rect width={width} height={height} fill="#fff"/><image href={src} width={width} height={height} preserveAspectRatio="xMidYMid meet"/>
    <g stroke="#15803d" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">{targets.map(target => <path key={`line-${target.number}`} d={target.path}/>)}</g>
    <g>{targets.map(target => <circle key={`target-${target.number}`} cx={target.target[0]} cy={target.target[1]} r="6" fill="#15803d" stroke="#fff" strokeWidth="2"/>)}</g>
    {targets.map(target => <NumberMarker key={target.number} number={target.number} x={target.marker[0]} y={target.marker[1]}/>)}
  </svg>;
}

function Diagram({ kind }: { kind: FamilyQuizDiagramKind }) {
  if (kind === "photosynthesis") return <svg className="scienceDiagram" viewBox="0 0 736 736" role="img" aria-label="Photosynthesis diagram with positions 1 to 5">
    <image href="/knowledge-organisers/science/photosynthesis-label-diagram.png" width="736" height="736"/>
    <rect x="18" y="320" width="200" height="120" rx="6" fill="#eff8fc"/><rect x="38" y="610" width="170" height="92" rx="6" fill="#75452c"/><rect x="102" y="430" width="330" height="78" rx="6" fill="#eff8fc"/><rect x="552" y="255" width="184" height="72" rx="6" fill="#eff8fc"/><rect x="220" y="66" width="132" height="70" rx="6" fill="#eff8fc"/>
    {[[1,155,365],[2,142,655],[3,355,472],[4,648,296],[5,292,101]].map(([number,x,y]) => <g key={number}><circle cx={x} cy={y} r="42" fill="#fff" stroke="#94a3b8" strokeWidth="2"/><text x={x} y={y + 15} fill="#050505" fontSize="44" fontWeight="800" textAnchor="middle">{number}</text></g>)}
  </svg>;
  if (kind === "leaf") return <svg className="scienceDiagram" viewBox="0 0 1020 717" role="img" aria-label="Leaf cross-section diagram with positions 1 to 4">
    <image href="/knowledge-organisers/science/leaf-cross-section-diagram.png" x="178" width="841" height="717"/><g stroke="#0f172a" strokeWidth="4" fill="none"><path d="M150 90 H340"/><path d="M150 245 H350"/><path d="M150 435 H360"/><path d="M150 650 H355"/></g>
    {[[1,88],[2,243],[3,433],[4,648]].map(([number,y]) => <g key={number}><circle cx="92" cy={y} r="42" fill="#fff" stroke="#64748b" strokeWidth="3"/><text x="92" y={y + 15} fill="#050505" fontSize="44" fontWeight="800" textAnchor="middle">{number}</text></g>)}
  </svg>;
  if (kind === "separation-filtration") return <ImageBackedDiagram src="/knowledge-organisers/science/separation-filtration-diagram.png" width={750} height={680} ariaLabel="Filtration apparatus with six numbered leader lines" description="Positions identify the mixture, filter paper, residue, filter funnel, conical flask and filtrate." targets={[
    {number:1,marker:[72,118],target:[402,150],path:"M 97 118 H 250 L 402 150"},{number:2,marker:[678,270],target:[410,282],path:"M 653 270 H 560 L 410 282"},{number:3,marker:[72,350],target:[325,350],path:"M 97 350 H 230 L 325 350"},{number:4,marker:[678,410],target:[365,410],path:"M 653 410 H 560 L 365 410"},{number:5,marker:[678,540],target:[450,530],path:"M 653 540 H 590 L 450 530"},{number:6,marker:[72,635],target:[270,645],path:"M 97 635 H 195 L 270 645"},
  ]}/>;
  if (kind === "separation-distillation") return <ImageBackedDiagram src="/knowledge-organisers/science/separation-distillation-diagram.png" width={600} height={627} ariaLabel="Simple distillation apparatus with eight numbered leader lines" description="Positions identify the thermometer, solution, Bunsen burner, condenser, cooling-water outlet, receiving flask, distillate and cooling-water inlet." targets={[
    {number:1,marker:[55,147],target:[185,147],path:"M 80 147 H 125 L 185 147"},{number:2,marker:[55,375],target:[190,375],path:"M 80 375 H 125 L 190 375"},{number:3,marker:[55,555],target:[195,555],path:"M 80 555 H 130 L 195 555"},{number:4,marker:[545,340],target:[405,340],path:"M 520 340 H 480 L 405 340"},{number:5,marker:[545,255],target:[340,270],path:"M 520 255 H 460 L 340 270"},{number:6,marker:[545,495],target:[490,490],path:"M 520 495 L 490 490"},{number:7,marker:[545,570],target:[475,550],path:"M 520 570 L 475 550"},{number:8,marker:[545,425],target:[365,445],path:"M 520 425 H 475 L 365 445"},
  ]}/>;
  if (kind === "separation-chromatography") return <ImageBackedDiagram src="/knowledge-organisers/science/separation-chromatography-diagram.png" width={600} height={627} ariaLabel="Paper chromatography apparatus with five numbered leader lines" description="Positions identify the pencil, chromatography paper, ink spot, beaker and solvent." targets={[
    {number:1,marker:[55,205],target:[175,210],path:"M 80 205 H 125 L 175 210"},{number:2,marker:[545,280],target:[213,275],path:"M 520 280 H 410 L 213 275"},{number:3,marker:[545,440],target:[210,478],path:"M 520 440 H 390 L 210 478"},{number:4,marker:[55,350],target:[117,350],path:"M 80 350 H 117"},{number:5,marker:[55,520],target:[250,515],path:"M 80 520 H 160 L 250 515"},
  ]}/>;
  if (kind === "separation-evaporation") return <ImageBackedDiagram src="/knowledge-organisers/science/separation-evaporation-diagram.png" width={603} height={403} ariaLabel="Evaporation apparatus with three numbered leader lines" description="Positions identify the evaporating basin, solution and Bunsen burner." targets={[
    {number:1,marker:[545,65],target:[365,72],path:"M 520 65 H 430 L 365 72"},{number:2,marker:[55,88],target:[223,88],path:"M 80 88 H 150 L 223 88"},{number:3,marker:[545,300],target:[291,300],path:"M 520 300 H 430 L 291 300"},
  ]}/>;
  const labels: Array<[number,number,number,number,number,number]> = [[1,72,145,354,158,215],[2,72,265,421,281,225],[3,72,365,412,408,215],[4,72,445,412,456,230],[5,72,535,350,524,225],[6,828,365,516,434,680],[7,828,445,450,464,670],[8,828,535,450,550,675],[9,828,610,452,627,665],[10,828,680,452,665,660]];
  return <svg className="scienceDiagram" viewBox="0 0 900 720" role="img" aria-label="Digestive system diagram with positions 1 to 10"><rect width="900" height="720" fill="#fff"/><image href="/knowledge-organisers/science/digestive-system-label-diagram.jpg" x="250" y="15" width="400" height="665" preserveAspectRatio="xMidYMid meet"/><g stroke="#166534" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">{labels.map(([number,x,y,targetX,targetY,bendX]) => <path key={`line-${number}`} d={`M ${x < 450 ? x + 34 : x - 34} ${y} H ${bendX} L ${targetX} ${targetY}`}/>)}</g><g>{labels.map(([number,,,targetX,targetY]) => <circle key={`target-${number}`} cx={targetX} cy={targetY} r="6" fill="#15803d" stroke="#fff" strokeWidth="2"/>)}</g>{labels.map(([number,x,y]) => <g key={number}><circle cx={x} cy={y} r="31" fill="#fff" stroke="#15803d" strokeWidth="4"/><text x={x} y={y + 11} fill="#050505" fontSize="31" fontWeight="800" textAnchor="middle">{number}</text></g>)}</svg>;
}

export default function LiveFamilyQuizInteractiveQuestion({ interaction, values, onChange }: Props) {
  const set = (index: number, value: string) => { const next = Array.from({ length: getInteractionAnswerCount(interaction) }, (_, itemIndex) => values[itemIndex] ?? ""); next[index] = value; onChange(next); };
  return <div className="interactive">
    {interaction.kind === "diagram-labels" && <Diagram kind={interaction.diagram}/>} 
    {interaction.kind === "fill-blanks" && interaction.wordBank && <p className="bank"><b>Word bank:</b> {interaction.wordBank.join(" · ")}</p>}
    {interaction.kind === "fill-blanks" && interaction.sentences.map((label,index) => <label key={`${label}-${index}`}><b>{label}</b><input value={values[index] ?? ""} onChange={event => set(index,event.target.value)}/></label>)}
    {interaction.kind === "diagram-labels" && interaction.labels.map((label,index) => <label key={label}><b>{label}</b><input value={values[index] ?? ""} onChange={event => set(index,event.target.value)}/></label>)}
    {interaction.kind === "matching" && interaction.left.map((left,index) => <label key={left}><b>{left}</b><select value={values[index] ?? ""} onChange={event => set(index,event.target.value)}><option value="">Choose…</option>{interaction.right.map((right,rightIndex) => <option key={right} value={rightIndex}>{rightIndex + 1}. {right}</option>)}</select></label>)}
    {interaction.kind === "ordering" && Array.from({length:interaction.count},(_,index) => <label key={index}><b>Stage {index + 1}</b><select value={values[index] ?? ""} onChange={event => set(index,event.target.value)}><option value="">Choose…</option>{interaction.items.map(item => <option key={item}>{item}</option>)}</select></label>)}
    {interaction.kind === "classification" && interaction.rows.map((row,index) => <label key={row}><b>{row}</b><select value={values[index] ?? ""} onChange={event => set(index,event.target.value)}><option value="">Choose…</option>{interaction.categories.map(category => <option key={category}>{category}</option>)}</select></label>)}
    <style jsx>{`.interactive{display:grid;gap:12px;margin:20px 0}.interactive label{display:grid;grid-template-columns:minmax(170px,1fr) minmax(180px,1fr);gap:12px;align-items:center;padding:12px;border-radius:11px;background:#f8fafc}.interactive input,.interactive select{width:100%;box-sizing:border-box;padding:12px;border:1px solid #94a3b8;border-radius:9px;background:white;font:inherit}.bank{padding:13px;border-radius:11px;background:#fffbeb}.scienceDiagram{width:min(640px,100%);height:auto;margin:auto;border:1px solid #cbd5e1;border-radius:12px;background:white}@media(max-width:650px){.interactive label{grid-template-columns:1fr}}`}</style>
  </div>;
}
