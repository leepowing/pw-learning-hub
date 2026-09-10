"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-7/uses-and-misuses-of-statistical-diagrams/page.tsx
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

type Question = { id: string; label: string; hint: string; working: string } & ({ kind: "number"; answer: number } | { kind: "choice"; answer: string; options: { value: string; label: string }[] });
const diagramOptions = [
  { value: "bar", label: "Bar chart" }, { value: "line", label: "Broken line graph" }, { value: "pie", label: "Pie chart" }, { value: "histogram", label: "Histogram" }, { value: "cumulative", label: "Cumulative frequency polygon or curve" },
];
const questions: Question[] = [
  { id: "choose-time", kind: "choice", label: "1. Which diagram would you choose to show how library visits change over six consecutive weeks?", answer: "line", options: diagramOptions, hint: "Choose the diagram designed to show change over time.", working: "A broken line graph joins observations in time order." },
  { id: "choose-whole", kind: "choice", label: "2. Each student chooses exactly one favourite activity. Which diagram best shows each activity's share of the whole group?", answer: "pie", options: diagramOptions, hint: "Think about dividing one complete total into sectors.", working: "A pie chart displays parts of one whole; all sectors add to 360°." },
  { id: "choose-distribution", kind: "choice", label: "3. Which listed diagram best shows the frequency distribution of continuous journey times grouped into equal-width classes?", answer: "histogram", options: diagramOptions, hint: "Neighbouring continuous classes are drawn with adjacent bars.", working: "A histogram shows a grouped distribution. For these equal-width classes, height represents frequency." },
  { id: "choose-cumulative", kind: "choice", label: "4. Which diagram helps estimate how many journeys are shorter than a chosen time?", answer: "cumulative", options: diagramOptions, hint: "You need a running total below a value.", working: "Read the cumulative frequency polygon or curve at the chosen time." },
  { id: "real-ratio", kind: "number", label: "5. Clubs A and B borrow 100 and 110 books. Express B's count as a multiple of A's count. Give a decimal.", answer: 1.1, hint: "Divide B's actual count by A's actual count.", working: "110 ÷ 100 = 1.1 times, regardless of the displayed baseline." },
  { id: "increase", kind: "number", label: "6. What is the percentage increase from 100 to 110 books? Enter the number before %.", answer: 10, hint: "Use (new − original) ÷ original × 100.", working: "(110 − 100) ÷ 100 × 100% = 10%." },
  { id: "area", kind: "number", label: "7. A picture is twice as wide and twice as tall as another. How many times as large is its area?", answer: 4, hint: "Area changes by the width factor multiplied by the height factor.", working: "2 × 2 = 4 times. This would exaggerate a count that only doubled." },
  { id: "time-gap", kind: "number", label: "8. On a proportional week axis, the gap from week 2 to week 6 should be how many times the gap from week 0 to week 1?", answer: 4, hint: "Compare the lengths of the two time intervals.", working: "(6 − 2) ÷ (1 − 0) = 4. Both diagrams must still place week 0 at the origin." },
  { id: "survey-count", kind: "number", label: "9. In a survey of 50 students, 60% choose the reading club. How many students choose it?", answer: 30, hint: "Multiply the total by 60 ÷ 100.", working: "50 × 60 ÷ 100 = 30 students." },
  { id: "conclusion", kind: "choice", label: "10. Another graph gives 60% for A and 75% for B, but neither survey total is supplied. Which statement is justified?", answer: "rate", options: [{ value: "count", label: "B definitely has more students choosing the club." }, { value: "rate", label: "B has a higher percentage; the counts cannot yet be compared." }, { value: "everyone", label: "Most students in every school prefer the reading club." }], hint: "Separate a percentage from a count, and a sample from a wider population.", working: "75% is greater than 60%, but each count also depends on its survey total. The sample does not automatically represent every school." },
];
function isCorrect(question: Question, raw: string): boolean {
  const value = raw.trim();
  if (question.kind === "choice") return value === question.answer;
  return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value) && Number.isFinite(Number(value)) && Math.abs(Number(value) - question.answer) < 1e-9;
}
function Diagram({ children }: { children: ReactNode }) {
  return <div className="diagramScroll" tabIndex={0} role="region" aria-label="Statistical diagram; scroll horizontally on small screens" style={{ overflowX: "auto", maxWidth: "100%", border: "1px solid #d8e1ee", borderRadius: 17, background: "white", padding: "15px 0 5px", margin: "20px 0" }}>{children}</div>;
}

export default function UsesAndMisusesPage() {
  const [purpose, setPurpose] = useState<Purpose>("categories");
  const [baseline, setBaseline] = useState(90);
  const [spacingCorrected, setSpacingCorrected] = useState(false);
  const [multiplier, setMultiplier] = useState(2);
  const [pictureCorrected, setPictureCorrected] = useState(false);
  const [surveyRevealed, setSurveyRevealed] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showSolutions, setShowSolutions] = useState(false);
  const selected = purposes.find(item => item.id === purpose)!;
  const apparentRatio = (110 - baseline) / (100 - baseline);
  const correctCount = questions.filter(q => checked[q.id] && isCorrect(q, answers[q.id] ?? "")).length;
  const checkedCount = questions.filter(q => checked[q.id]).length;
  function setAnswer(id: string, value: string) { setAnswers(old => ({ ...old, [id]: value })); setChecked(old => ({ ...old, [id]: false })); }
  function resetPractice() { setAnswers({}); setChecked({}); setShowSolutions(false); }

  return <main className="misusesPage">
    <Link className="backLink" href="/maths/s2/chapter-7">← Back to Chapter 7</Link>
    <header><p className="eyebrow">S2 MATHEMATICS · CHAPTER 7 · SECTION 7.4</p><h1>Uses and Misuses of Statistical Diagrams</h1><p className="introduction">Choose a useful diagram, inspect its scales and decide what its evidence really supports.</p><div className="objectives"><span>Choose a diagram</span><span>Check scales and symbols</span><span>Evaluate a claim</span></div><nav className="jumpLinks" aria-label="Lesson sections"><a href="#choose">Choose</a><a href="#axes">Axes</a><a href="#pictures">Pictures</a><a href="#evidence">Evidence</a><a href="#practice">Practise</a></nav><p className="supportText">All data in this lesson are invented teaching examples.</p></header>

    <section className="lessonCard" id="choose" aria-labelledby="choose-title"><div className="lessonHeading"><span className="lessonNumber">1</span><div><p className="lessonLabel">MATCH THE DIAGRAM TO THE QUESTION</p><h2 id="choose-title">What do you want the reader to find out?</h2></div></div>
      <p>Start with the purpose and the kind of data. More than one diagram can be useful, but each makes some features easier to see.</p>
      <div className="choiceButtons purposeButtons" role="group" aria-label="Choose a purpose">{purposes.map(item => <button key={item.id} type="button" aria-pressed={purpose === item.id} aria-controls="purpose-display" onClick={() => setPurpose(item.id)}>{item.label}</button>)}</div>
      <div id="purpose-display"><div className="softPanel" aria-live="polite"><h3>{selected.name}</h3><p>{selected.reason}</p><p className="dataLine"><strong>Data:</strong> {selected.data}</p></div><Diagram><ExampleChart purpose={purpose} /></Diagram></div>
      <div className="tableWrap" tabIndex={0} role="region" aria-label="Other useful diagram choices"><table className="comparisonTable"><caption>Other useful choices and checks</caption><thead><tr><th scope="col">Diagram</th><th scope="col">Useful for</th><th scope="col">Remember</th></tr></thead><tbody><tr><th scope="row">Pictogram</th><td>A simple comparison of category counts.</td><td>Use equal-size symbols and a clear key.</td></tr><tr><th scope="row">Frequency polygon or curve</th><td>Showing a distribution's shape or comparing distributions.</td><td>Use compatible classes and a common scale for a fair comparison.</td></tr><tr><th scope="row">Histogram</th><td>Grouped continuous data.</td><td>With unequal class widths, area must represent frequency; use frequency density, not raw frequency as height.</td></tr></tbody></table></div>
      <p className="note">Every numerical X axis in this lesson begins at <strong>0</strong>. A category axis uses names such as Art, Drama and Music. A pie chart has no axes.</p>
    </section>

    <section className="lessonCard" id="axes" aria-labelledby="axes-title"><div className="lessonHeading"><span className="lessonNumber">2</span><div><p className="lessonLabel">CHECK THE AXES</p><h2 id="axes-title">The same numbers can look very different</h2></div></div>
      <h3>A · A truncated vertical axis</h3><p>Club A borrowed <strong>100</strong> books and Club B borrowed <strong>110</strong> in the same month. Compare the full-scale chart with the truncated version.</p>
      <div className="twoColumns"><div><span className="badge fair">FULL SCALE</span><Diagram><BaselineChart baseline={0} /></Diagram></div><div><span className="badge caution">TRUNCATED SCALE · COMPARE CAREFULLY</span><Diagram><BaselineChart baseline={baseline} /></Diagram></div></div>
      <div className="choiceButtons baselineButtons" role="group" aria-label="Choose the truncated vertical baseline">{[80, 90].map(value => <button type="button" key={value} aria-pressed={baseline === value} onClick={() => setBaseline(value)}>Right chart: start at {value}</button>)}</div>
      <div className="twoColumns"><div className="softPanel green"><h3>Actual counts</h3><p className="formula">110 ÷ 100 = 1.1</p><p>B borrowed <strong>10% more</strong> books: (110 − 100) ÷ 100 × 100%.</p></div><div className="softPanel orange" aria-live="polite"><h3>Visible bar-height ratio</h3><p className="formula">({110} − {baseline}) ÷ ({100} − {baseline}) = {Number(apparentRatio.toFixed(2))}</p><p>The right-hand bars look <strong>{Number(apparentRatio.toFixed(2))} times</strong> as tall, even though the actual count is only 1.1 times as large.</p></div></div>
      <p className="warning"><strong>Misleading claim:</strong> “The second bar is twice as tall, so B borrowed twice as many books.” At a baseline of 90, the visible heights represent 10 and 20 above the baseline. They do not represent the full counts of 100 and 110.</p>
      <p className="note">For bars used to compare amounts by length, use a zero baseline. A clearly labelled zoomed vertical scale can be useful on a line graph when studying small changes, but its visual slopes or heights must not be treated as ratios of the original values.</p>
      <h3 className="subheading">B · Unequal time intervals need unequal distances</h3><p>At weeks <strong>0, 1, 2 and 6</strong>, the recorded numbers of visits are <strong>10, 12, 14 and 22</strong>. The last gap covers four weeks.</p>
      <div className="choiceButtons spacingButtons" role="group" aria-label="Choose the time-axis example"><button type="button" aria-pressed={!spacingCorrected} onClick={() => setSpacingCorrected(false)}>Inspect the misleading spacing</button><button type="button" aria-pressed={spacingCorrected} onClick={() => setSpacingCorrected(true)}>Show the corrected spacing</button></div>
      <Diagram><SpacingChart corrected={spacingCorrected} /></Diagram>
      <div className={spacingCorrected ? "note" : "warning"} aria-live="polite">{spacingCorrected ? "The interval from week 2 to week 6 is four times as wide as the interval from week 0 to week 1. The average increase is 2 visits per week over each recorded interval." : "The last four-week interval has been squeezed into the same width as a one-week interval. This makes the final increase appear much steeper. Read the numbers under the axis before judging the rate of change."}</div>
    </section>

    <section className="lessonCard" id="pictures" aria-labelledby="pictures-title"><div className="lessonHeading"><span className="lessonNumber">3</span><div><p className="lessonLabel">CHECK HOW SIZE REPRESENTS VALUE</p><h2 id="pictures-title">Twice the height and width means four times the area</h2></div></div>
      <p>A has 12 books. Change B's count, then compare the enlarged picture with an equal-size-symbol pictogram.</p>
      <div className="choiceButtons multiplierButtons" role="group" aria-label="Choose the actual count ratio">{[2, 3].map(value => <button type="button" key={value} aria-pressed={multiplier === value} onClick={() => setMultiplier(value)}>B has {value} × A's books</button>)}</div>
      <div className="choiceButtons pictureButtons" role="group" aria-label="Choose how pictures represent the counts"><button type="button" aria-pressed={!pictureCorrected} onClick={() => setPictureCorrected(false)}>Inspect enlarged pictures</button><button type="button" aria-pressed={pictureCorrected} onClick={() => setPictureCorrected(true)}>Use equal-size symbols</button></div>
      <Diagram><PictureChart multiplier={multiplier} corrected={pictureCorrected} /></Diagram>
      <div className="softPanel" aria-live="polite"><h3>Count ratio: {multiplier} · Enlarged-picture area ratio: {multiplier * multiplier}</h3><p>{pictureCorrected ? `Each symbol represents 6 books. A needs 2 symbols; B needs ${2 * multiplier}. The symbol-count ratio now matches the actual book-count ratio.` : `Scaling both dimensions by ${multiplier} multiplies the area by ${multiplier} × ${multiplier} = ${multiplier * multiplier}. The visual area exaggerates an actual count ratio of ${multiplier}.`}</p></div>
      <p className="note">Keep symbol sizes equal and vary their number, with a clear key. If area is deliberately used to represent a value, the area ratio must match the data ratio. Avoid decorative 3D effects that make sizes hard to compare.</p>
    </section>

    <section className="lessonCard" id="evidence" aria-labelledby="evidence-title"><div className="lessonHeading"><span className="lessonNumber">4</span><div><p className="lessonLabel">CHECK WHAT INFORMATION IS MISSING</p><h2 id="evidence-title">A higher percentage need not mean a larger count</h2></div></div>
      <p>Two surveys ask students to choose a club. <strong>60%</strong> in Survey A and <strong>75%</strong> in Survey B choose the reading club.</p><Diagram><SurveyChart /></Diagram>
      <div className="twoColumns"><div className="softPanel green"><h3>Supported by the graph</h3><p>Survey B has the higher percentage choosing the reading club. The difference is <strong>15 percentage points</strong>.</p></div><div className="softPanel orange"><h3>Not yet supported</h3><p>“More students choose the reading club in B.” We need both survey totals before comparing the counts.</p></div></div>
      <button className="secondaryButton revealSurvey" type="button" aria-expanded={surveyRevealed} aria-controls="survey-totals" onClick={() => setSurveyRevealed(value => !value)}>{surveyRevealed ? "Hide the survey totals" : "Reveal the survey totals"}</button>
      <div id="survey-totals" hidden={!surveyRevealed}><div className="tableWrap"><table><caption>Survey totals reveal a different comparison of counts</caption><thead><tr><th scope="col">Survey</th><th scope="col">Total students</th><th scope="col">Choose reading</th><th scope="col">Count</th></tr></thead><tbody><tr><th scope="row">A</th><td>50</td><td>60%</td><td>50 × 0.60 = <strong>30</strong></td></tr><tr><th scope="row">B</th><td>20</td><td>75%</td><td>20 × 0.75 = <strong>15</strong></td></tr></tbody></table></div><p className="note">A has the larger count (30 compared with 15), while B has the higher percentage. Both statements can be true.</p></div>
      <div className="tableWrap" tabIndex={0} role="region" aria-label="Questions to ask before accepting a statistical claim"><table className="comparisonTable"><caption>Before accepting a claim, ask for the context</caption><thead><tr><th scope="col">Check</th><th scope="col">Question to ask</th></tr></thead><tbody><tr><th scope="row">Labels and units</th><td>What quantity is measured? Are these counts, percentages, minutes or another unit?</td></tr><tr><th scope="row">Totals and key</th><td>What is the sample size or denominator? What does one symbol stand for?</td></tr><tr><th scope="row">Source and sample</th><td>Who collected the data, and who was included? Volunteers from one club may not represent the whole school.</td></tr><tr><th scope="row">Time and completeness</th><td>Do the groups cover comparable periods? Would omitted dates or categories change the picture?</td></tr></tbody></table></div>
      <details className="solution"><summary>Why are 15 percentage points different from a 15% relative increase?</summary><div><p>75% − 60% = <strong>15 percentage points</strong>. The relative increase in the rate is (75 − 60) ÷ 60 × 100% = <strong>25%</strong>. Neither calculation tells us the counts without the survey totals.</p></div></details>
    </section>

    <section className="lessonCard practiceCard" id="practice" aria-labelledby="practice-title"><div className="lessonHeading"><span className="lessonNumber">5</span><div><p className="lessonLabel">CHECK YOUR UNDERSTANDING</p><h2 id="practice-title">Ten questions: choose, calculate and justify</h2></div></div>
      <p>Answer each question using its stated data. You can open a hint, check your answers and correct them. Enter numerical answers without units.</p>
      <div className="questionGrid">{questions.map(question => {
        const value = answers[question.id] ?? "", marked = checked[question.id] === true, correct = marked && isCorrect(question, value);
        const inputId = `answer-${question.id}`, feedbackId = `feedback-${question.id}`, hintId = `hint-${question.id}`;
        return <div className="questionCard" key={question.id}><label htmlFor={inputId}>{question.label}</label>{question.kind === "choice" ? <select id={inputId} value={value} aria-invalid={marked && !correct} aria-describedby={`${hintId}${marked ? ` ${feedbackId}` : ""}`} onChange={event => setAnswer(question.id, event.target.value)}><option value="">Choose an answer…</option>{question.options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select> : <input id={inputId} type="text" inputMode="decimal" autoComplete="off" value={value} aria-invalid={marked && !correct} aria-describedby={`${hintId}${marked ? ` ${feedbackId}` : ""}`} onChange={event => setAnswer(question.id, event.target.value)} />}
          <details id={hintId} className="hint"><summary>Show a hint</summary><p>{question.hint}</p></details>{marked && <p id={feedbackId} className={`feedback ${correct ? "correct" : "retry"}`} role="status">{correct ? "Correct." : value.trim() === "" ? "Please enter or choose an answer." : "Try again. Read the data and use the hint."}</p>}</div>;
      })}</div>
      <div className="practiceActions"><button className="primaryButton" type="button" onClick={() => setChecked(Object.fromEntries(questions.map(q => [q.id, true])))}>Check answers</button><button className="secondaryButton" type="button" aria-expanded={showSolutions} aria-controls="worked-answers" onClick={() => setShowSolutions(value => !value)}>{showSolutions ? "Hide worked answers" : "Show worked answers"}</button><button className="secondaryButton" type="button" onClick={resetPractice}>Reset practice</button></div>
      <p className="score" role="status">{checkedCount === 0 ? "Your answers have not been checked yet." : `${correctCount} / ${questions.length} correct · ${checkedCount} answers checked. You can edit and check again.`}</p>
      <div className="workedAnswers" id="worked-answers" hidden={!showSolutions}><h3>Answers and reasons</h3><ol>{questions.map(question => <li key={question.id}>{question.working}</li>)}</ol></div>
    </section>
    <section className="summaryCard" aria-labelledby="summary-title"><p className="lessonLabel">SECTION 7.4 SUMMARY</p><h2 id="summary-title">Purpose → axes → symbols → evidence</h2><ul><li>Choose a diagram that suits the data and the question.</li><li>Read the origin, intervals, units and labels before comparing shapes.</li><li>Check that bar lengths, areas or symbol counts represent values fairly.</li><li>Separate percentages from counts; ask for totals and a clear key.</li><li>Limit conclusions to what the source, sample and time period support.</li></ul></section>
    <footer className="lessonFooter"><Link className="previousLink" href="/maths/s2/chapter-7/cumulative-frequency">← Section 3: Cumulative Frequency</Link><Link className="primaryLink" href="/maths/s2/chapter-7">Back to Chapter 7 →</Link></footer>
    <style jsx>{`
      .misusesPage { max-width: 1180px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.65; }
      .misusesPage :global(*) { box-sizing: border-box; }
      .misusesPage :global(.backLink) { display: inline-block; color: #047857; font-size: 17px; font-weight: 800; margin-bottom: 26px; text-decoration: none; }
      header { margin-bottom: 31px; }
      .eyebrow, .lessonLabel { color: #6d28d9; font-size: 13px; letter-spacing: .085em; font-weight: 900; line-height: 1.5; margin: 0 0 8px; }
      h1 { font-size: clamp(34px, 5vw, 51px); line-height: 1.18; letter-spacing: -.025em; margin: 0 0 18px; }
      h2 { font-size: clamp(25px, 3vw, 32px); line-height: 1.3; margin: 0; }
      h3 { font-size: 21px; line-height: 1.4; margin: 0 0 11px; }
      p { margin: 13px 0; }
      .introduction { font-size: 21px; color: #52657e; max-width: 930px; }
      .objectives, .jumpLinks { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 21px; }
      .objectives span { background: #ede9fe; color: #5b21b6; border-radius: 999px; padding: 7px 13px; font-weight: 750; font-size: 14px; }
      .jumpLinks { gap: 10px 22px; }
      .jumpLinks a, .misusesPage :global(.previousLink) { color: #047857; font-size: 16px; font-weight: 800; text-underline-offset: 4px; }
      .supportText { color: #64748b; font-size: 14px; }
      section[id] { scroll-margin-top: 24px; }
      .lessonCard { padding: 32px; border: 1px solid #d8e1ee; border-radius: 25px; background: white; margin-bottom: 28px; }
      .lessonHeading { display: flex; align-items: flex-start; gap: 18px; margin-bottom: 22px; }
      .lessonNumber { display: grid; place-items: center; width: 54px; height: 54px; flex: 0 0 54px; border-radius: 17px; background: #ede9fe; color: #6d28d9; font-size: 27px; font-weight: 900; }
      .choiceButtons { display: flex; flex-wrap: wrap; gap: 10px; margin: 23px 0 18px; }
      .choiceButtons button { border: 1px solid #c4b5fd; border-radius: 12px; background: white; color: #5b21b6; padding: 12px 17px; font: inherit; font-size: 15px; font-weight: 800; cursor: pointer; min-height: 46px; }
      .choiceButtons button[aria-pressed="true"] { color: white; background: #6d28d9; border-color: #6d28d9; }
      .softPanel { padding: 23px; border-radius: 18px; background: #f5f3ff; border: 1px solid #e4dcfb; }
      .softPanel.green { background: #f0fdfa; border-color: #b6e8df; }
      .softPanel.orange { background: #fff7ed; border-color: #fed7aa; }
      .softPanel p { color: #435a72; font-size: 17px; }
      .softPanel p:last-child { margin-bottom: 0; }
      .dataLine { padding-top: 13px; border-top: 1px solid #ddd6fe; }
      .twoColumns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 22px; }
      .twoColumns > div { min-width: 0; }
      .tableWrap { max-width: 100%; overflow-x: auto; border-radius: 16px; border: 1px solid #cbd5e1; margin: 22px 0; }
      table { width: 100%; min-width: 550px; border-collapse: collapse; font-size: 16px; line-height: 1.6; }
      caption { text-align: left; padding: 14px 18px; font-weight: 800; background: #f8fafc; color: #172d50; }
      th, td { padding: 14px 16px; border-top: 1px solid #d8e1ee; text-align: center; vertical-align: middle; }
      thead th { background: #0f766e; color: white; font-weight: 800; }
      tbody th { font-weight: 800; color: #172d50; }
      tbody tr:nth-child(even) { background: #f8fafc; }
      .comparisonTable th, .comparisonTable td { text-align: left; }
      .note { background: #f0fdfa; color: #225a56; border-left: 4px solid #0f766e; padding: 17px 20px; border-radius: 12px; margin-top: 22px; }
      .warning { background: #fffbeb; border: 1px solid #fde68a; color: #854d0e; border-radius: 14px; padding: 18px 20px; margin: 23px 0 0; font-size: 17px; }
      .formula { color: #5b21b6; font-size: 22px; font-weight: 850; }
      .softPanel .formula { font-size: 22px; }
      .badge { display: inline-block; font-size: 12px; font-weight: 850; border-radius: 9px; padding: 6px 10px; }
      .badge.fair { background: #dcfce7; color: #166534; }
      .badge.caution { background: #fef3c7; color: #92400e; }
      .subheading { margin-top: 36px; }
      .revealSurvey { margin-top: 24px; }
      .solution { border: 1px solid #c4b5fd; border-radius: 15px; background: #faf8ff; margin: 17px 0; }
      .solution summary { padding: 17px 21px; color: #5b21b6; font-weight: 800; cursor: pointer; }
      .solution > div { padding: 0 21px 15px; }
      .practiceCard { background: #faf8ff; border-color: #c4b5fd; }
      .questionGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin: 24px 0; }
      .questionCard { padding: 21px; background: white; border: 1px solid #d8e1ee; border-radius: 17px; min-width: 0; }
      .questionCard label { display: block; font-size: 16px; font-weight: 750; margin-bottom: 14px; }
      .questionCard input, .questionCard select { width: 100%; min-width: 0; min-height: 48px; padding: 10px 12px; border: 1px solid #94a3b8; border-radius: 10px; color: #172d50; background: white; font: inherit; font-size: 16px; }
      .questionCard [aria-invalid="true"] { border: 2px solid #b45309; }
      .hint { margin-top: 13px; font-size: 15px; }
      .hint summary { cursor: pointer; font-weight: 750; color: #5b21b6; }
      .hint p { color: #52657e; margin-bottom: 0; }
      .feedback { padding: 9px 12px; font-size: 15px; border-radius: 9px; line-height: 1.5; margin: 9px 0 0; }
      .feedback.correct { color: #166534; background: #dcfce7; }
      .feedback.retry { color: #92400e; background: #fef3c7; }
      .practiceActions { display: flex; flex-wrap: wrap; gap: 12px; }
      .primaryButton, .secondaryButton { border: 1px solid #6d28d9; border-radius: 12px; padding: 13px 19px; font: inherit; font-size: 16px; font-weight: 800; cursor: pointer; min-height: 47px; }
      .primaryButton { background: #6d28d9; color: white; }
      .secondaryButton { background: white; color: #5b21b6; }
      .score { padding: 14px 18px; background: #ede9fe; border-radius: 12px; color: #5b21b6; font-size: 16px; }
      .workedAnswers { padding: 23px; border: 1px solid #86efac; border-radius: 17px; background: #f0fdf4; margin-top: 20px; }
      .workedAnswers ol { padding-left: 24px; }
      .workedAnswers li { margin: 10px 0; font-size: 16px; }
      .summaryCard { padding: 30px; background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 23px; }
      .summaryCard .lessonLabel { color: #0f766e; }
      .summaryCard ul { padding-left: 23px; margin-bottom: 0; }
      .summaryCard li { margin: 9px 0; }
      .lessonFooter { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; margin-top: 28px; }
      .misusesPage :global(.primaryLink) { display: inline-block; padding: 14px 20px; color: white; background: #0f766e; border-radius: 13px; font-size: 16px; font-weight: 800; text-decoration: none; }
      .misusesPage :global(a:focus-visible), button:focus-visible, input:focus-visible, select:focus-visible, summary:focus-visible, .tableWrap:focus-visible, .misusesPage :global(.diagramScroll:focus-visible) { outline: 3px solid #2563eb; outline-offset: 4px; }
      @media (max-width: 850px) { .twoColumns { grid-template-columns: 1fr; } .lessonCard { padding: 26px; } }
      @media (max-width: 600px) { .misusesPage { width: calc(100% - 28px); margin-top: 27px; font-size: 17px; } .introduction { font-size: 19px; } .lessonCard { padding: 21px 17px; } .lessonHeading { gap: 12px; } .lessonNumber { flex-basis: 42px; width: 42px; height: 42px; font-size: 23px; border-radius: 13px; } .lessonLabel { font-size: 11px; } .questionGrid { grid-template-columns: 1fr; } .choiceButtons button { flex: 1 1 170px; } .questionCard { padding: 17px; } .practiceActions button { width: 100%; } .summaryCard { padding: 24px; } }
    `}</style>
  </main>;
}
