"use client";

import type { ReactNode } from "react";

// Chapter 7 flashcard diagrams: shared lesson coordinates and original data.
// Original teaching examples. Numerical x-axes begin at zero.
// Deliberately misleading examples are explicitly labelled and paired with corrections.
type Purpose = "categories" | "time" | "whole" | "grouped" | "cumulative";
const purposes: { id: Purpose; label: string; name: string; reason: string; data: string }[] = [
  { id: "categories", label: "Compare categories", name: "Bar chart", reason: "Use separate, equal-width bars to compare counts in distinct categories. Read their heights on a common scale.", data: "Books borrowed by three clubs: Art 12, Drama 18, Music 9." },
  { id: "time", label: "Follow change over time", name: "Broken line graph", reason: "Plot time in order and join neighbouring observations. Equal time intervals need equal horizontal distances. The segments show the overall changes between observations.", data: "Library visits at weeks 0, 1, 2, 3 and 4: 10, 15, 12, 20 and 18." },
  { id: "whole", label: "Show parts of a whole", name: "Pie chart", reason: "Use sectors to show proportions of one complete total. The categories must be non-overlapping and together account for the whole. Sector angle = frequency ÷ total × 360°.", data: "One favourite activity per student, 40 students in total: Sport 20, Music 12, Art 8." },
  { id: "grouped", label: "Show a grouped distribution", name: "Histogram", reason: "Use adjacent bars for grouped continuous data. Here all class widths are equal, so bar height gives frequency. Frequency polygons or curves can also show the distribution's shape.", data: "Journey times recorded to the nearest minute: 10–19: 4; 20–29: 9; 30–39: 12; 40–49: 5." },
  { id: "cumulative", label: "Count below a boundary", name: "Cumulative frequency polygon or curve", reason: "Plot cumulative totals against upper class boundaries. Read how many observations are below a value; readings between table points are estimates. This preview uses straight segments.", data: "For the same 30 journeys, cumulative totals at 9.5, 19.5, 29.5, 39.5 and 49.5 minutes are 0, 4, 13, 25 and 30." },
];
const colors = ["#0f766e", "#7c3aed", "#c2410c"];
const font = { fontFamily: "Arial, sans-serif", fontSize: 15 };
const box = { left: 88, right: 648, top: 57, bottom: 307 };
const xPosition = (value: number, maximum: number) => box.left + value / maximum * (box.right - box.left);
const yPosition = (value: number, maximum: number, minimum = 0) => box.bottom - (value - minimum) / (maximum - minimum) * (box.bottom - box.top);

function SvgFrame({ title, description, children, kind }: { title: string; description: string; children: ReactNode; kind: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 395" role="img" aria-label={`${title}. ${description}`} data-diagram={kind} style={{ display: "block", width: "100%", minWidth: 520, height: "auto" }}>
    <text x="365" y="25" textAnchor="middle" fill="#172d50" style={{ ...font, fontSize: 19, fontWeight: 700 }}>{title}</text>
    {children}
  </svg>;
}
function Axes({ maximum, minimum = 0, divisions = 6, xTicks, xLabel, yLabel, categories }: { maximum: number; minimum?: number; divisions?: number; xTicks?: { value: number; position: number }[]; xLabel: string; yLabel: string; categories?: { label: string; position: number }[] }) {
  const ticks = Array.from({ length: divisions + 1 }, (_, i) => minimum + i * (maximum - minimum) / divisions);
  return <g data-y-min={minimum}>
    {ticks.map((value, i) => <g key={i}><line x1={box.left} y1={yPosition(value, maximum, minimum)} x2={box.right} y2={yPosition(value, maximum, minimum)} stroke="#dce5f1" /><text x={box.left - 13} y={yPosition(value, maximum, minimum) + 5} textAnchor="end" fill="#52657e" style={font}>{Number(value.toFixed(1))}</text></g>)}
    {xTicks?.map(tick => <g key={tick.value} data-x-value={tick.value}><line x1={tick.position} y1={box.top} x2={tick.position} y2={box.bottom + 6} stroke="#e2e8f0" /><text x={tick.position} y={box.bottom + 26} textAnchor="middle" fill="#172d50" style={{ ...font, fontWeight: tick.value === 0 ? 800 : 400 }}>{tick.value}</text></g>)}
    {categories?.map(category => <text key={category.label} x={category.position} y={box.bottom + 27} textAnchor="middle" fill="#172d50" style={font}>{category.label}</text>)}
    <path d={`M ${box.left} ${box.top - 4} V ${box.bottom} H ${box.right + 8}`} fill="none" stroke="#172d50" strokeWidth="2" />
    {minimum > 0 && <path d={`M ${box.left - 6} ${box.bottom - 9} l 12 -7 m -12 -1 l 12 -7`} fill="none" stroke="#c2410c" strokeWidth="2.5" />}
    <text x="369" y="377" textAnchor="middle" fill="#172d50" style={{ ...font, fontSize: 16 }}>{xLabel}</text>
    <text transform="translate(24 186) rotate(-90)" textAnchor="middle" fill="#172d50" style={{ ...font, fontSize: 16 }}>{yLabel}</text>
  </g>;
}
function ExampleChart({ purpose }: { purpose: Purpose }) {
  if (purpose === "whole") {
    const values = [20, 12, 8], labels = ["Sport", "Music", "Art"];
    let angle = -Math.PI / 2;
    return <SvgFrame title="Favourite activities of 40 students" description="Sport 50%, Music 30%, Art 20%. Each student chooses exactly one activity." kind="example-whole">
      {values.map((value, index) => {
        const next = angle + value / 40 * 2 * Math.PI;
        const start = [230 + 120 * Math.cos(angle), 203 + 120 * Math.sin(angle)];
        const end = [230 + 120 * Math.cos(next), 203 + 120 * Math.sin(next)];
        const d = `M 230 203 L ${start[0]} ${start[1]} A 120 120 0 ${value > 20 ? 1 : 0} 1 ${end[0]} ${end[1]} Z`;
        angle = next;
        return <g key={value} data-sector-count={value} data-sector-angle={value / 40 * 360}><path d={d} fill={colors[index]} stroke="white" strokeWidth="3" /><rect x="395" y={118 + index * 72} width="18" height="18" rx="3" fill={colors[index]} /><text x="428" y={133 + index * 72} fill="#172d50" style={{ ...font, fontSize: 19, fontWeight: 700 }}>{labels[index]}: {value / 40 * 100}%</text><text x="428" y={159 + index * 72} fill="#52657e" style={font}>{value} students · {value / 40 * 360}°</text></g>;
      })}
      <text x="360" y="371" textAnchor="middle" fill="#52657e" style={font}>20 + 12 + 8 = 40 students · 180° + 108° + 72° = 360°</text>
    </SvgFrame>;
  }
  const grouped = purpose === "grouped", cumulative = purpose === "cumulative", line = purpose === "time";
  const maximum = cumulative ? 30 : grouped ? 12 : 24;
  const xMaximum = line ? 4 : 60;
  const boundaries = [9.5, 19.5, 29.5, 39.5, 49.5];
  const xTicks = purpose === "categories" ? undefined : (line ? [0, 1, 2, 3, 4] : [0, ...boundaries, 60]).map(value => ({ value, position: xPosition(value, xMaximum) }));
  const categories = purpose === "categories" ? ["Art", "Drama", "Music"].map((label, i) => ({ label, position: 205 + i * 165 })) : undefined;
  const points = line ? [10, 15, 12, 20, 18].map((y, x) => ({ x, y })) : boundaries.map((x, i) => ({ x, y: [0, 4, 13, 25, 30][i] }));
  const title = purpose === "categories" ? "Books borrowed by three clubs" : line ? "Library visits over four weeks" : "Journey times of 30 students";
  return <SvgFrame title={title} description={purposes.find(item => item.id === purpose)!.data} kind={`example-${purpose}`}>
    <Axes maximum={maximum} xTicks={xTicks} categories={categories} xLabel={purpose === "categories" ? "Club" : line ? "Week" : "Journey time (min)"} yLabel={cumulative ? "Cumulative frequency" : line ? "Number of visits" : grouped ? "Frequency" : "Number of books"} />
    {purpose === "categories" && [12, 18, 9].map((value, i) => <g key={i}><rect x={205 + i * 165 - 42} y={yPosition(value, maximum)} width="84" height={box.bottom - yPosition(value, maximum)} fill={colors[i]} /><text x={205 + i * 165} y={yPosition(value, maximum) - 10} textAnchor="middle" fill={colors[i]} style={{ ...font, fontWeight: 700 }}>{value}</text></g>)}
    {grouped && [4, 9, 12, 5].map((value, i) => <g key={i}><rect x={xPosition(boundaries[i], 60)} y={yPosition(value, maximum)} width={xPosition(boundaries[i + 1], 60) - xPosition(boundaries[i], 60)} height={box.bottom - yPosition(value, maximum)} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" /><text x={xPosition(boundaries[i] + 5, 60)} y={yPosition(value, maximum) - 10} textAnchor="middle" fill="#0f766e" style={{ ...font, fontWeight: 700 }}>{value}</text></g>)}
    {(line || cumulative) && <><polyline points={points.map(p => `${xPosition(p.x, xMaximum)},${yPosition(p.y, maximum)}`).join(" ")} fill="none" stroke="#7c3aed" strokeWidth="3" />{points.map(p => <g key={p.x}><circle cx={xPosition(p.x, xMaximum)} cy={yPosition(p.y, maximum)} r="4.5" fill="#7c3aed" /><text x={xPosition(p.x, xMaximum) + (p.x === 0 ? 12 : 0)} y={yPosition(p.y, maximum) - 12} textAnchor={p.x === 0 ? "start" : "middle"} fill="#5b21b6" style={{ ...font, fontWeight: 700 }}>{p.y}</text></g>)}</>}
  </SvgFrame>;
}
function BaselineChart({ baseline }: { baseline: number }) {
  return <SvgFrame title={baseline === 0 ? "Full scale: vertical axis starts at 0" : `Caution: vertical axis starts at ${baseline}`} description="Club A borrowed 100 books; Club B borrowed 110. Bar heights can exaggerate their ratio when the vertical axis is truncated." kind={`baseline-${baseline}`}>
    <Axes minimum={baseline} maximum={120} divisions={baseline === 80 ? 4 : 6} categories={[{ label: "Club A", position: 248 }, { label: "Club B", position: 490 }]} xLabel="Club" yLabel="Number of books" />
    {[100, 110].map((value, i) => <g key={value}><rect data-bar-value={value} x={198 + i * 242} y={yPosition(value, 120, baseline)} width="100" height={box.bottom - yPosition(value, 120, baseline)} fill={baseline === 0 ? colors[i] : "#d97706"} fillOpacity="0.8" /><text x={248 + i * 242} y={yPosition(value, 120, baseline) - 13} textAnchor="middle" fill="#172d50" style={{ ...font, fontSize: 22, fontWeight: 700 }}>{value}</text></g>)}
  </SvgFrame>;
}
function SpacingChart({ corrected }: { corrected: boolean }) {
  const weeks = [0, 1, 2, 6], counts = [10, 12, 14, 22];
  const positions = weeks.map((week, i) => corrected ? xPosition(week, 6) : box.left + i / 3 * (box.right - box.left));
  return <SvgFrame title={corrected ? "Corrected: distance represents elapsed time" : "Misleading: unequal intervals, equal gaps"} description="Observations at weeks 0, 1, 2 and 6 have values 10, 12, 14 and 22. The final time interval is four weeks." kind={corrected ? "spacing-corrected" : "spacing-misleading"}>
    <Axes maximum={24} xTicks={weeks.map((value, i) => ({ value, position: positions[i] }))} xLabel="Week" yLabel="Number of visits" />
    <polyline points={positions.map((x, i) => `${x},${yPosition(counts[i], 24)}`).join(" ")} fill="none" stroke={corrected ? "#0f766e" : "#c2410c"} strokeWidth="3" />
    {positions.map((x, i) => <g key={i}><circle cx={x} cy={yPosition(counts[i], 24)} r="5" fill={corrected ? "#0f766e" : "#c2410c"} /><text x={x + (i === 0 ? 12 : 0)} y={yPosition(counts[i], 24) - 13} textAnchor={i === 0 ? "start" : "middle"} fill="#172d50" style={{ ...font, fontWeight: 700 }}>{counts[i]}</text></g>)}
  </SvgFrame>;
}
function BookSymbol({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
  return <g transform={`translate(${x} ${y}) scale(${size / 60})`}><rect x="0" y="0" width="60" height="60" rx="5" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2" /><path d="M 11 0 V 60 M 22 16 H 48 M 22 28 H 48" fill="none" stroke={color} strokeWidth="2" /></g>;
}
function PictureChart({ multiplier, corrected }: { multiplier: number; corrected: boolean }) {
  return <SvgFrame title={corrected ? "Corrected: equal-size symbols and a key" : "Misleading: scaling both width and height"} description={`A has 12 books and B has ${12 * multiplier}. ${corrected ? "Each equal-size symbol represents 6 books." : `The B symbol is ${multiplier} times as wide and tall, so its area is ${multiplier * multiplier} times as large.`}`} kind={corrected ? "picture-corrected" : "picture-misleading"}>
    {corrected ? <>
      {[2, 2 * multiplier].map((count, group) => <g key={group} data-symbol-count={count}>{Array.from({ length: count }, (_, i) => <BookSymbol key={i} x={105 + group * 340 + (i % 3) * 61} y={125 + Math.floor(i / 3) * 67} size={44} color={colors[group]} />)}</g>)}
      <text x="360" y="342" textAnchor="middle" fill="#0f766e" style={{ ...font, fontSize: 18, fontWeight: 700 }}>Key: one equal-size book symbol = 6 books</text>
    </> : <>
      <BookSymbol x={177} y={280 - 60} size={60} color={colors[0]} />
      <BookSymbol x={520 - 30 * multiplier} y={280 - 60 * multiplier} size={60 * multiplier} color={colors[1]} />
      <text x="360" y="346" textAnchor="middle" fill="#9a3412" style={{ ...font, fontSize: 18, fontWeight: 700 }}>Width × {multiplier} and height × {multiplier} ⇒ area × {multiplier * multiplier}</text>
    </>}
    <text x="206" y="307" textAnchor="middle" fill="#172d50" style={{ ...font, fontSize: 20, fontWeight: 700 }}>A: 12 books</text>
    <text x="520" y="307" textAnchor="middle" fill="#172d50" style={{ ...font, fontSize: 20, fontWeight: 700 }}>B: {12 * multiplier} books</text>
  </SvgFrame>;
}
function SurveyChart() {
  return <SvgFrame title="Percentage choosing the reading club" description="Survey A: 60%; Survey B: 75%. Percentages alone do not give the numbers choosing the club." kind="survey">
    <Axes maximum={100} divisions={5} categories={[{ label: "Survey A", position: 248 }, { label: "Survey B", position: 490 }]} xLabel="Survey" yLabel="Percentage (%)" />
    {[60, 75].map((value, i) => <g key={value}><rect x={198 + i * 242} y={yPosition(value, 100)} width="100" height={box.bottom - yPosition(value, 100)} fill={colors[i]} /><text x={248 + i * 242} y={yPosition(value, 100) - 13} textAnchor="middle" fill="#172d50" style={{ ...font, fontSize: 22, fontWeight: 700 }}>{value}%</text></g>)}
  </SvgFrame>;
}

export type S2Chapter7DiagramKind = "frequency-table" | "class-interval" | "histogram" | "categories" | "frequency-polygon" | "frequency-curve" | "time" | "pie" | "cumulative" | "baseline" | "spacing" | "picture" | "pictogram" | "survey";
function FrequencyTable() {
  return <SvgFrame title="Journey times of 30 students" description="Recorded to the nearest minute. Classes 10–19, 20–29, 30–39 and 40–49 minutes have frequencies 4, 9, 12 and 5." kind="frequency-table">
    <rect x="145" y="62" width="430" height="260" rx="10" fill="#f0fdfa" stroke="#99d7ce" />
    <path d="M 360 62 V 322 M 145 114 H 575 M 145 166 H 575 M 145 218 H 575 M 145 270 H 575" stroke="#99d7ce" fill="none" />
    <text x="252" y="95" textAnchor="middle" fill="#0f766e" style={{ ...font, fontSize: 20, fontWeight: 700 }}>Time (min)</text><text x="467" y="95" textAnchor="middle" fill="#0f766e" style={{ ...font, fontSize: 20, fontWeight: 700 }}>Frequency</text>
    {[4,9,12,5].map((frequency,i)=><g key={i} data-frequency={frequency}><text x="252" y={147+i*52} textAnchor="middle" fill="#172d50" style={{...font,fontSize:21}}>{10+i*10}–{19+i*10}</text><text x="467" y={147+i*52} textAnchor="middle" fill="#172d50" style={{...font,fontSize:21,fontWeight:700}}>{frequency}</text></g>)}
    <text x="360" y="365" textAnchor="middle" fill="#52657e" style={font}>Times are recorded to the nearest minute.</text>
  </SvgFrame>;
}
function ClassInterval() {
  const x = (value:number)=>88+value/40*560;
  return <SvgFrame title="Recorded class: 20–29 minutes" description="A numerical axis starts at zero. The recorded class limits 20 and 29 are highlighted." kind="class-interval">
    <rect x={x(20)} y="167" width={x(29)-x(20)} height="66" fill="#ede9fe" />
    <path d="M 88 233 H 658" stroke="#172d50" strokeWidth="2" />
    {[0,10,20,29,40].map(value=><g key={value} data-x-value={value}><line x1={x(value)} y1="224" x2={x(value)} y2="242" stroke="#172d50" strokeWidth="2" /><text x={x(value)} y="272" textAnchor="middle" fill="#172d50" style={{...font,fontSize:20,fontWeight:value===0?800:400}}>{value}</text></g>)}
    <text x="430" y="146" textAnchor="middle" fill="#6d28d9" style={{...font,fontSize:21,fontWeight:700}}>20–29</text><text x="360" y="336" textAnchor="middle" fill="#52657e" style={font}>Recorded time (min) · nearest minute</text>
  </SvgFrame>;
}
function FrequencyLine({smooth=false}:{smooth?:boolean}) {
  const points = [{x:4.5,y:0},{x:14.5,y:4},{x:24.5,y:9},{x:34.5,y:12},{x:44.5,y:5},{x:54.5,y:0}];
  const slopes=points.map((_,i)=>{if(i===0||i===points.length-1)return 0;const a=(points[i].y-points[i-1].y)/10,b=(points[i+1].y-points[i].y)/10;return a*b<=0?0:2*a*b/(a+b)});
  const curve=`M ${xPosition(points[0].x,60)} ${yPosition(0,12)} `+points.slice(0,-1).map((p,i)=>{const q=points[i+1],dx=10/3;return `C ${xPosition(p.x+dx,60)} ${yPosition(p.y+slopes[i]*dx,12)} ${xPosition(q.x-dx,60)} ${yPosition(q.y-slopes[i+1]*dx,12)} ${xPosition(q.x,60)} ${yPosition(q.y,12)}`}).join(' ');
  return <SvgFrame title={smooth?"Frequency curve":"Frequency polygon"} description="Journey times: frequencies 4, 9, 12 and 5 at class marks 14.5, 24.5, 34.5 and 44.5. Extra zero-frequency points at 4.5 and 54.5. Horizontal axis begins at 0." kind={smooth?"frequency-curve":"frequency-polygon"}>
    <Axes maximum={12} xTicks={[0,...points.map(p=>p.x),60].map(value=>({value,position:xPosition(value,60)}))} xLabel="Journey time (min)" yLabel="Frequency" />
    {smooth?<path data-frequency-curve="true" d={curve} fill="none" stroke="#0f766e" strokeWidth="3" />:<polyline points={points.map(p=>`${xPosition(p.x,60)},${yPosition(p.y,12)}`).join(' ')} fill="none" stroke="#7c3aed" strokeWidth="3" />}
    {points.map(p=><g key={p.x} data-point-x={p.x} data-point-y={p.y}><circle cx={xPosition(p.x,60)} cy={yPosition(p.y,12)} r="4" fill={smooth?"#0f766e":"#7c3aed"} />{!smooth&&<text x={xPosition(p.x,60)} y={yPosition(p.y,12)-11} textAnchor="middle" fill="#5b21b6" style={{...font,fontWeight:700}}>{p.y}</text>}</g>)}
  </SvgFrame>;
}
export default function S2Chapter7FlashcardDiagram({kind}:{kind:S2Chapter7DiagramKind}) {
  let diagram:ReactNode;
  switch(kind){
    case "frequency-table": diagram=<FrequencyTable/>;break;
    case "class-interval": diagram=<ClassInterval/>;break;
    case "frequency-polygon": diagram=<FrequencyLine/>;break;
    case "frequency-curve": diagram=<FrequencyLine smooth/>;break;
    case "histogram": diagram=<ExampleChart purpose="grouped"/>;break;
    case "categories": diagram=<ExampleChart purpose="categories"/>;break;
    case "time": diagram=<ExampleChart purpose="time"/>;break;
    case "pie": diagram=<ExampleChart purpose="whole"/>;break;
    case "cumulative": diagram=<ExampleChart purpose="cumulative"/>;break;
    case "baseline": diagram=<BaselineChart baseline={90}/>;break;
    case "spacing": diagram=<SpacingChart corrected={false}/>;break;
    case "picture": diagram=<PictureChart multiplier={2} corrected={false}/>;break;
    case "pictogram": diagram=<PictureChart multiplier={2} corrected/>;break;
    case "survey": diagram=<SurveyChart/>;break;
  }
  return <figure data-s2-c7-diagram={kind} style={{margin:"8px 0 16px",width:"100%",minWidth:0}}>
    <div onPointerDown={event=>event.stopPropagation()} onPointerMove={event=>event.stopPropagation()} onPointerUp={event=>event.stopPropagation()} onClick={event=>event.stopPropagation()} tabIndex={0} role="region" aria-label="Flashcard diagram; scroll horizontally if needed" style={{overflowX:"auto",borderRadius:14,background:"white",border:"1px solid #d8e1ee",padding:"8px 0"}}>{diagram}</div>
    <figcaption style={{fontSize:13,lineHeight:1.5,color:"#64748b",marginTop:7}}>Scroll the diagram if needed. Tap the question text to flip the card.</figcaption>
  </figure>;
}
