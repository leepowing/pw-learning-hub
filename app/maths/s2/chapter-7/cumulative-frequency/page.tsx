"use client";

import { useState } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-7/cumulative-frequency/page.tsx
// Standalone lesson. All graph axes begin at zero.
type Point = { x: number; y: number };
type GraphMode = "polygon" | "curve";
const frequencies = [4, 9, 12, 5];
const rows = frequencies.map((frequency, index) => ({
  lower: 10 + index * 10,
  upper: 19 + index * 10,
  lowerBoundary: 9.5 + index * 10,
  upperBoundary: 19.5 + index * 10,
  frequency,
  cumulative: frequencies.slice(0, index + 1).reduce((sum, value) => sum + value, 0),
}));
const total = frequencies.reduce((sum, value) => sum + value, 0);
const points: Point[] = [{ x: rows[0].lowerBoundary, y: 0 }, ...rows.map(row => ({ x: row.upperBoundary, y: row.cumulative }))];

// Monotone cubic segments for equal-spaced class boundaries. Flat endpoint
// tangents and harmonic interior slopes keep this illustration within 0..N.
const secants = points.slice(1).map((point, index) => (point.y - points[index].y) / (point.x - points[index].x));
const slopes = points.map((_, index) => {
  if (index === 0 || index === points.length - 1) return 0;
  const a = secants[index - 1], b = secants[index];
  return a * b <= 0 ? 0 : 2 * a * b / (a + b);
});
const segments = points.slice(0, -1).map((start, index) => {
  const end = points[index + 1], third = (end.x - start.x) / 3;
  return { start, c1: { x: start.x + third, y: start.y + slopes[index] * third }, c2: { x: end.x - third, y: end.y - slopes[index + 1] * third }, end };
});

function cumulativeAt(x: number, mode: GraphMode): number {
  if (x <= points[0].x) return 0;
  if (x >= points[points.length - 1].x) return total;
  const segment = segments.find(item => x <= item.end.x)!;
  const t = (x - segment.start.x) / (segment.end.x - segment.start.x);
  if (mode === "polygon") return segment.start.y + t * (segment.end.y - segment.start.y);
  const u = 1 - t;
  return u * u * u * segment.start.y + 3 * u * u * t * segment.c1.y + 3 * u * t * t * segment.c2.y + t * t * t * segment.end.y;
}

function timeAt(cumulative: number, mode: GraphMode): number {
  const known = points.find(point => point.y === cumulative);
  if (known) return known.x;
  let low = points[0].x, high = points[points.length - 1].x;
  for (let i = 0; i < 50; i++) {
    const middle = (low + high) / 2;
    if (cumulativeAt(middle, mode) < cumulative) low = middle;
    else high = middle;
  }
  return (low + high) / 2;
}
function displayNumber(value: number) { return String(Number(value.toFixed(1))); }

function CumulativeChart({ mode = "polygon", stage = 2, showGuide = false, reading }: { mode?: GraphMode; stage?: number; showGuide?: boolean; reading?: Point }) {
  const left = 86, right = 646, top = 57, bottom = 317;
  const px = (value: number) => left + value / 60 * (right - left);
  const py = (value: number) => bottom - value / 35 * (bottom - top);
  const visiblePoints = stage === 0 ? points.slice(0, 1) : points;
  const curvePath = `M ${px(points[0].x)} ${py(0)} ` + segments.map(segment => `C ${px(segment.c1.x)} ${py(segment.c1.y)} ${px(segment.c2.x)} ${py(segment.c2.y)} ${px(segment.end.x)} ${py(segment.end.y)}`).join(" ");
  const name = mode === "curve" ? "Cumulative frequency curve" : "Cumulative frequency polygon";
  const guidePath = reading ? `M ${px(reading.x)} ${bottom} V ${py(reading.y)} H ${left}` : "";
  const textStyle = { fontFamily: "Arial, sans-serif", fontSize: 14 };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 397" role="img" aria-label={`${name} of 30 journey times. X-axis 0 to 60 minutes; Y-axis 0 to 35. Table points: (9.5, 0), (19.5, 4), (29.5, 13), (39.5, 25), (49.5, 30).${stage === 0 ? " Only the initial zero point is shown at this step." : ""}${reading ? ` Reading guides meet at (${displayNumber(reading.x)}, ${displayNumber(reading.y)}).` : ""}`} data-cumulative-mode={mode} data-stage={stage} style={{ display: "block", width: "100%", minWidth: 580, height: "auto" }}>
    <text x="366" y="24" textAnchor="middle" fill="#172d50" style={{ ...textStyle, fontSize: 19, fontWeight: 700 }}>Journey times of 30 students</text>
    {[0, 5, 10, 15, 20, 25, 30, 35].map(value => <g key={value}><line x1={left} y1={py(value)} x2={right} y2={py(value)} stroke="#d8e1ee" /><text x={left - 13} y={py(value) + 5} textAnchor="end" fill="#52657e" style={textStyle}>{value}</text></g>)}
    {[0, ...points.map(point => point.x), 60].map(value => <g key={value} data-x-tick={value}><line x1={px(value)} y1={top} x2={px(value)} y2={bottom} stroke="#edf1f7" /><line x1={px(value)} y1={bottom} x2={px(value)} y2={bottom + 6} stroke="#172d50" /><text x={px(value)} y={bottom + 25} textAnchor="middle" fill="#52657e" style={textStyle}>{value}</text></g>)}
    <path d={`M ${left} ${top - 5} V ${bottom} H ${right + 9}`} fill="none" stroke="#172d50" strokeWidth="2" />
    {stage === 2 && (mode === "polygon" || showGuide) && <polyline data-cumulative-polygon="true" points={points.map(point => `${px(point.x)},${py(point.y)}`).join(" ")} fill="none" stroke={mode === "curve" ? "#64748b" : "#7c3aed"} strokeWidth={mode === "curve" ? 2 : 3} strokeDasharray={mode === "curve" ? "7 5" : undefined} strokeLinejoin="round" />}
    {stage === 2 && mode === "curve" && <path data-cumulative-curve="true" d={curvePath} fill="none" stroke="#0f766e" strokeWidth="3.5" strokeLinecap="round" />}
    {visiblePoints.map(point => <g key={point.x} data-point-x={point.x} data-point-y={point.y}><circle cx={px(point.x)} cy={py(point.y)} r="4.5" fill={mode === "curve" ? "#0f766e" : "#7c3aed"} />{!reading && <text x={px(point.x)} y={py(point.y) - 12} textAnchor="middle" fill={mode === "curve" ? "#0f766e" : "#7c3aed"} style={{ ...textStyle, fontSize: 17, fontWeight: 700 }}>{point.y}</text>}</g>)}
    {reading && <g data-reading-x={reading.x} data-reading-y={reading.y}><path d={guidePath} fill="none" stroke="#c2410c" strokeWidth="2" strokeDasharray="6 5" /><circle cx={px(reading.x)} cy={py(reading.y)} r="6" fill="white" stroke="#c2410c" strokeWidth="3" /></g>}
    <text x="366" y="381" textAnchor="middle" fill="#172d50" style={{ ...textStyle, fontSize: 16 }}>Journey time (min)</text>
    <text transform="translate(23 187) rotate(-90)" textAnchor="middle" fill="#172d50" style={{ ...textStyle, fontSize: 16 }}>Cumulative frequency</text>
  </svg>;
}

const constructionSteps = [
  { label: "1 · Axes and first point", title: "Start both axes at zero", text: "Label the vertical axis Cumulative frequency. The horizontal axis begins at 0, but the first table point is (9.5, 0): no journey belongs below the first lower class boundary." },
  { label: "2 · Plot the totals", title: "Use upper boundaries for the remaining points", text: "Plot (19.5, 4), (29.5, 13), (39.5, 25) and (49.5, 30). Each height counts that class and all previous classes." },
  { label: "3 · Join the points", title: "Draw the cumulative frequency polygon", text: "Join neighbouring points in order with straight segments. The polygon never falls. It finishes at the total of 30, without returning to the horizontal axis." },
];

type PracticeField = { id: string; label: string; answer: number; hint: string; working: string };
const practiceGroups: { title: string; context: string; fields: PracticeField[] }[] = [
  { title: "A · Complete the running totals", context: "Use the four class frequencies 6, 10, 8 and 6 in the reading-session table.", fields: [
    { id: "cf-first", label: "Cumulative frequency below 29.5 min", answer: 6, hint: "Only the first class is below this boundary.", working: "6" },
    { id: "cf-second", label: "Cumulative frequency below 39.5 min", answer: 16, hint: "Add the first two class frequencies.", working: "6 + 10 = 16" },
    { id: "cf-third", label: "Cumulative frequency below 49.5 min", answer: 24, hint: "Add the first three class frequencies.", working: "6 + 10 + 8 = 24" },
    { id: "cf-final", label: "Final cumulative frequency", answer: 30, hint: "Add all four class frequencies.", working: "6 + 10 + 8 + 6 = 30" },
  ] },
  { title: "B · Use and interpret the totals", context: "Remember: subtract neighbouring cumulative totals to recover one class frequency.", fields: [
    { id: "start-x", label: "x-coordinate of the initial zero point (min)", answer: 19.5, hint: "The first recorded class is 20–29. Use its lower boundary.", working: "20 − 0.5 = 19.5; the starting point is (19.5, 0)." },
    { id: "class-count", label: "Frequency of the recorded class 40–49", answer: 8, hint: "Subtract the cumulative total at 39.5 from the total at 49.5.", working: "24 − 16 = 8" },
    { id: "at-least", label: "Number of durations at least 39.5 min", answer: 14, hint: "Subtract the count below 39.5 from the total 30.", working: "30 − 16 = 14" },
    { id: "percent", label: "Percentage below 49.5 min (%)", answer: 80, hint: "Divide 24 by 30, then multiply by 100.", working: "24 ÷ 30 × 100% = 80%" },
  ] },
  { title: "C · Estimate using straight segments", context: "Use the cumulative frequency polygon for these two estimates, joining its table points with straight segments.", fields: [
    { id: "estimate-count", label: "Estimated cumulative frequency at 34.5 min", answer: 11, hint: "34.5 is halfway from 29.5 to 39.5. Find the halfway value between 6 and 16.", working: "6 + ½ × (16 − 6) = 11" },
    { id: "estimate-time", label: "Estimated time at cumulative frequency 20 (min)", answer: 44.5, hint: "20 is halfway between 16 and 24. Find the midpoint of 39.5 and 49.5.", working: "39.5 + ½ × (49.5 − 39.5) = 44.5 min" },
  ] },
];
const practiceFields = practiceGroups.flatMap(group => group.fields);
function matchesAnswer(raw: string, expected: number) {
  const value = raw.trim();
  return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value) && Number.isFinite(Number(value)) && Math.abs(Number(value) - expected) < 1e-9;
}

export default function CumulativeFrequencyPage() {
  const [selectedBoundary, setSelectedBoundary] = useState(2);
  const [constructionStep, setConstructionStep] = useState(0);
  const [showCurveGuide, setShowCurveGuide] = useState(true);
  const [readerMode, setReaderMode] = useState<GraphMode>("polygon");
  const [direction, setDirection] = useState<"time" | "count">("time");
  const [time, setTime] = useState(29.5);
  const [count, setCount] = useState(15);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showSolutions, setShowSolutions] = useState(false);
  const selected = points[selectedBoundary];
  const reading = direction === "time" ? { x: time, y: cumulativeAt(time, readerMode) } : { x: timeAt(count, readerMode), y: count };
  const tablePoint = points.find(point => Math.abs(point.x - reading.x) < 1e-8 && Math.abs(point.y - reading.y) < 1e-8);
  const correctCount = practiceFields.filter(field => checked[field.id] && matchesAnswer(answers[field.id] ?? "", field.answer)).length;
  const checkedCount = practiceFields.filter(field => checked[field.id]).length;
  function resetPractice() { setAnswers({}); setChecked({}); setShowSolutions(false); }

  return <main className="cumulativePage">
    <Link className="backLink" href="/maths/s2/chapter-7">← Back to Chapter 7</Link>
    <header><p className="eyebrow">S2 · CHAPTER 7 · SECTION 3</p><h1>Cumulative Frequency</h1><p className="introduction">Keep a running total, plot it at the class boundaries and use the graph to answer “how many?” and “below what value?”</p><div className="objectives" aria-label="Learning objectives"><span>Build running totals</span><span>Plot upper boundaries</span><span>Read counts and cut-offs</span></div><nav className="jumpLinks" aria-label="On this page"><a href="#running-totals">Build the table</a><a href="#polygon">Draw the polygon</a><a href="#curve">Smooth the curve</a><a href="#read-graph">Read the graph</a><a href="#practice">Try it yourself</a></nav></header>

    <section className="lessonCard" id="running-totals" aria-labelledby="totalsTitle"><div className="lessonHeading"><span className="lessonNumber">1</span><div><p className="lessonLabel">FROM ONE CLASS TO ALL EARLIER CLASSES</p><h2 id="totalsTitle">Cumulative means “adding up as you go”</h2></div></div><p>A <strong>frequency</strong> counts one class. A <strong>cumulative frequency</strong> adds that class frequency to all the frequencies before it.</p><p>Use the same 30 journey times from Sections 1 and 2, recorded to the nearest minute. The class frequencies are <strong>4, 9, 12 and 5</strong>.</p>
      <div className="twoColumns"><article className="softPanel"><h3>Frequency of 20–29 minutes</h3><p><strong>9 students</strong> belong to that recorded class.</p></article><article className="softPanel green"><h3>Cumulative frequency below 29.5</h3><p><strong>4 + 9 = 13 students</strong> belong to the first two classes together.</p></article></div>
      <div className="boundaryButtons" role="group" aria-label="Choose an upper limit for the running total">{points.map((point, index) => <button type="button" key={point.x} aria-pressed={selectedBoundary === index} aria-controls="running-table" onClick={() => setSelectedBoundary(index)}>Below {point.x} min</button>)}</div>
      <div className="tableWrap" id="running-table" tabIndex={0} role="region" aria-label="Running totals for journey times"><table className="runningTable"><caption>Journey times: build the total one class at a time</caption><thead><tr><th scope="col">Recorded time (min)</th><th scope="col">Frequency</th><th scope="col">Running calculation</th><th scope="col">Cumulative frequency</th></tr></thead><tbody>{rows.map((row, index) => <tr key={row.lower} data-included={index < selectedBoundary} className={index < selectedBoundary ? "includedRow" : ""}><th scope="row">{row.lower}–{row.upper}</th><td>{row.frequency}</td><td>{frequencies.slice(0, index + 1).join(" + ")}</td><td>{row.cumulative}</td></tr>)}</tbody></table></div>
      <div className="countStrip" aria-live="polite"><strong>Below {selected.x} minutes: {selected.y} students.</strong><p>{selectedBoundary === 0 ? "No class lies below the first lower boundary, so the initial cumulative frequency is 0." : `Add the highlighted class frequencies: ${frequencies.slice(0, selectedBoundary).join(" + ")} = ${selected.y}.`}</p></div>
      <div className="tableWrap" tabIndex={0} role="region" aria-label="Less-than cumulative frequency table"><table className="cumulativeTable"><caption>The same information as a less-than table</caption><thead><tr><th scope="col">Journey time less than (min)</th>{points.map(point => <th scope="col" key={point.x}>{point.x}</th>)}</tr></thead><tbody><tr><th scope="row">Cumulative frequency</th>{points.map(point => <td key={point.x}>{point.y}</td>)}</tr></tbody></table></div>
      <p className="note"><strong>The final cumulative frequency is the total, 30.</strong> Do not add 4 + 13 + 25 + 30: the running totals include many of the same observations repeatedly.</p><p className="supportText">For this lesson, use lower boundary ≤ time &lt; upper boundary. “Below 29.5” therefore covers the recorded classes 10–19 and 20–29.</p>
    </section>

    <section className="lessonCard explorerCard" id="polygon" aria-labelledby="polygonTitle"><div className="lessonHeading"><span className="lessonNumber">2</span><div><p className="lessonLabel">WORKED EXAMPLE · BUILD THE GRAPH</p><h2 id="polygonTitle">A cumulative frequency polygon</h2></div></div><div className="ruleBox"><p className="smallLabel">THE COORDINATE RULE</p><p className="formula">(upper class boundary, cumulative frequency)</p><p>Also include the initial point <strong>(first lower boundary, 0)</strong>. Here it is <strong>(9.5, 0)</strong>, to the right of the origin.</p></div>
      <div className="stepButtons" role="group" aria-label="Cumulative polygon construction steps">{constructionSteps.map((step, index) => <button type="button" key={step.label} aria-pressed={constructionStep === index} aria-controls="construction-display" onClick={() => setConstructionStep(index)}>{step.label}</button>)}</div>
      <div id="construction-display"><div className="diagramScroll" tabIndex={0} role="region" aria-label="Cumulative polygon construction; scroll horizontally on small screens"><CumulativeChart stage={constructionStep} /></div><div className="stepExplanation" aria-live="polite"><h3>{constructionSteps[constructionStep].title}</h3><p>{constructionSteps[constructionStep].text}</p></div></div>
      <div className="twoColumns"><article className="softPanel"><h3>Why use 29.5?</h3><p>The cumulative count of 13 applies to everything below the <strong>upper boundary 29.5</strong>. Plot (29.5, 13), rather than using the class mark 24.5.</p></article><article className="softPanel green"><h3>Why does it never fall?</h3><p>Adding another class cannot remove observations already counted. An empty class adds 0, so its segment is horizontal.</p></article></div><p className="warning"><strong>Do not close this graph back down to zero.</strong> A cumulative polygon ends at the total number of observations. The zero-frequency closing points used for an ordinary frequency polygon do not apply here.</p>
    </section>

    <section className="lessonCard explorerCard" id="curve" aria-labelledby="curveTitle"><div className="lessonHeading"><span className="lessonNumber">3</span><div><p className="lessonLabel">A SMOOTH VIEW OF THE RUNNING TOTALS</p><h2 id="curveTitle">A cumulative frequency curve</h2></div></div><p>A cumulative frequency curve smooths the polygon to show the overall pattern. It must remain <strong>non-decreasing</strong> and finish at the total of <strong>30</strong>.</p><label className="guideToggle"><input type="checkbox" checked={showCurveGuide} onChange={event => setShowCurveGuide(event.target.checked)} aria-controls="curve-display" /><span>Show the straight polygon as a guide</span></label><div id="curve-display" className="diagramScroll" tabIndex={0} role="region" aria-label="Cumulative curve; scroll horizontally on small screens"><CumulativeChart mode="curve" showGuide={showCurveGuide} /></div><div className="legend"><span><i className="curveSwatch" aria-hidden="true" />Solid teal: cumulative curve</span>{showCurveGuide && <span><i className="polygonSwatch" aria-hidden="true" />Dashed grey: cumulative polygon</span>}</div><p className="note"><strong>Same table points, different lines between them.</strong> This illustrated curve passes through the known cumulative totals. Values read inside a class are estimates, and a smooth curve can give a slightly different estimate from a straight polygon.</p>
    </section>

    <section className="lessonCard explorerCard" id="read-graph" aria-labelledby="readerTitle"><div className="lessonHeading"><span className="lessonNumber">4</span><div><p className="lessonLabel">INTERACTIVE GRAPH READER</p><h2 id="readerTitle">Read in either direction</h2></div></div><p>The orange guides meet on the selected graph. Use the slider to move the reading point. Both axes begin at 0; the slider explores the interval covered by the data table.</p>
      <div className="readerModes" role="group" aria-label="Choose the graph used for reading">{(["polygon", "curve"] as const).map(mode => <button type="button" key={mode} aria-pressed={readerMode === mode} aria-controls="reader-display" onClick={() => setReaderMode(mode)}>{mode === "polygon" ? "Straight polygon" : "Smooth curve"}</button>)}</div>
      <div className="directionButtons" role="group" aria-label="Choose a reading direction"><button type="button" aria-pressed={direction === "time"} aria-controls="reader-controls" onClick={() => setDirection("time")}>Time → cumulative frequency</button><button type="button" aria-pressed={direction === "count"} aria-controls="reader-controls" onClick={() => setDirection("count")}>Cumulative frequency → time</button></div>
      <div className="readerControls" id="reader-controls">{direction === "time" ? <><label htmlFor="time-slider">Choose a time: <strong>{displayNumber(time)} minutes</strong></label><input id="time-slider" type="range" min="9.5" max="49.5" step="0.5" value={time} onChange={event => setTime(Number(event.target.value))} /><p><strong>Read up</strong> from the time to the graph, then <strong>across</strong> to the cumulative frequency axis.</p></> : <><label htmlFor="count-slider">Choose a cumulative frequency: <strong>{count}</strong></label><input id="count-slider" type="range" min="0" max={total} step="1" value={count} onChange={event => setCount(Number(event.target.value))} /><p><strong>Read across</strong> from the cumulative frequency to the graph, then <strong>down</strong> to the time axis.</p></>}</div>
      <div id="reader-display" className="diagramScroll" tabIndex={0} role="region" aria-label="Interactive cumulative graph with reading guides"><CumulativeChart mode={readerMode} reading={reading} /></div>
      <div className="readingResult" aria-live="polite"><p className="smallLabel">{tablePoint ? "KNOWN TABLE POINT" : "ESTIMATE BETWEEN TABLE POINTS"}</p><div className="resultGrid"><div><span>Journey time</span><strong>{!tablePoint && direction === "count" ? "≈ " : ""}{displayNumber(reading.x)} min</strong></div><div><span>Cumulative frequency</span><strong>{!tablePoint && direction === "time" ? "≈ " : ""}{displayNumber(reading.y)}</strong></div></div><p>{tablePoint ? `The table gives exactly ${tablePoint.y} observations below the boundary ${tablePoint.x} minutes.` : direction === "time" ? `The graph reading is about ${displayNumber(reading.y)}, or about ${Math.round(reading.y)} students when expressed as a whole-number count. The exact count at this time is not known from the grouped table.` : `On this graph, cumulative frequency ${count} is reached at about ${displayNumber(reading.x)} minutes. The grouped data do not give an exact individual journey time here.`}</p></div>
      <details className="solution"><summary>Worked estimate: use the polygon at 34.5 minutes</summary><div><p>The time 34.5 is halfway between boundaries 29.5 and 39.5. Their cumulative frequencies are 13 and 25.</p><p><strong>13 + ½ × (25 − 13) = 19.</strong> The straight polygon therefore estimates 19 journeys below 34.5 minutes.</p><p>This assumes that the count increases evenly across that class. The exact number at an interior time is not supplied by the table.</p></div></details>
      <details className="solution"><summary>Worked reverse reading: cumulative frequency 15</summary><div><p>On the polygon, 15 lies between 13 at 29.5 minutes and 25 at 39.5 minutes.</p><p><strong>29.5 + (15 − 13) ÷ (25 − 13) × 10 ≈ 31.2 minutes.</strong></p><p>The graph estimates that about 15 journeys are below this time. A smooth curve can give a slightly different estimate.</p></div></details>
    </section>

    <section className="lessonCard" aria-labelledby="useTitle"><div className="lessonHeading"><span className="lessonNumber">5</span><div><p className="lessonLabel">USE THE TOTALS TO ANSWER QUESTIONS</p><h2 id="useTitle">Subtract, complement or convert to a percentage</h2></div></div><div className="twoColumns"><article className="softPanel"><h3>Between two boundaries</h3><p>For <strong>19.5 ≤ time &lt; 39.5</strong>, subtract the count below 19.5 from the count below 39.5:</p><p className="formula">25 − 4 = 21 students</p><p>This covers the recorded classes 20–29 and 30–39.</p></article><article className="softPanel green"><h3>At least a boundary value</h3><p>For <strong>time ≥ 29.5</strong>, subtract the count below 29.5 from the total:</p><p className="formula">30 − 13 = 17 students</p><p>“At least” includes the stated boundary.</p></article></div><div className="twoColumns"><article className="softPanel"><h3>Recover one class frequency</h3><p>For the class 30–39, subtract neighbouring cumulative frequencies:</p><p className="formula">25 − 13 = 12</p><p>The cumulative height is 25; the class frequency is 12.</p></article><article className="softPanel green"><h3>Find a percentage</h3><p>The 21 students with recorded times from 20 to 39 minutes form:</p><p className="formula">21 ÷ 30 × 100% = 70%</p><p>Divide by the total number of observations.</p></article></div>
      <div className="tableWrap" tabIndex={0} role="region" aria-label="Ordinary and cumulative frequency polygon comparison"><table className="comparisonTable"><caption>Two polygons with different meanings</caption><thead><tr><th scope="col">Feature</th><th scope="col">Frequency polygon</th><th scope="col">Cumulative frequency polygon</th></tr></thead><tbody><tr><th scope="row">Horizontal coordinates</th><td>Class marks</td><td>Class boundaries</td></tr><tr><th scope="row">Vertical coordinates</th><td>Individual class frequencies</td><td>Running totals</td></tr><tr><th scope="row">Can it fall?</th><td>Yes</td><td>No; it may stay flat</td></tr><tr><th scope="row">End of the graph</th><td>Extra zero-frequency closing point</td><td>Total number of observations</td></tr></tbody></table></div>
      <p className="warning"><strong>Read the inequality carefully.</strong> “Below b” means time &lt; b. Its complement is time ≥ b. The count in a ≤ time &lt; b is the cumulative count below b minus the cumulative count below a.</p>
    </section>

    <section className="lessonCard practiceCard" id="practice" aria-labelledby="practiceTitle"><div className="lessonHeading"><span className="lessonNumber">6</span><div><p className="lessonLabel">TRY IT YOURSELF · READING SESSIONS</p><h2 id="practiceTitle">Build and use your own cumulative totals</h2></div></div><p>These 30 reading-session durations are recorded to the nearest minute. Use this table for all ten questions. Enter numbers only; units are supplied in the labels.</p><div className="tableWrap" tabIndex={0} role="region" aria-label="Practice table of reading-session durations"><table className="practiceTable"><caption>Durations of 30 reading sessions</caption><thead><tr><th scope="col">Recorded duration (min)</th><th scope="col">Frequency</th></tr></thead><tbody>{[6, 10, 8, 6].map((frequency, index) => <tr key={index}><th scope="row">{20 + index * 10}–{29 + index * 10}</th><td>{frequency}</td></tr>)}</tbody><tfoot><tr><th scope="row">Total</th><td>30</td></tr></tfoot></table></div>
      <form noValidate onSubmit={event => { event.preventDefault(); setChecked(Object.fromEntries(practiceFields.map(field => [field.id, true]))); }}>{practiceGroups.map(group => <fieldset key={group.title} className="practiceGroup"><legend>{group.title}</legend><p>{group.context}</p><div className="answerGrid">{group.fields.map(field => {
        const value = answers[field.id] ?? "", isChecked = checked[field.id] === true;
        const isCorrect = isChecked && matchesAnswer(value, field.answer);
        return <div className="answerField" key={field.id}><label htmlFor={field.id}>{field.label}</label><input id={field.id} type="text" inputMode="decimal" autoComplete="off" value={value} aria-invalid={isChecked && !isCorrect ? true : undefined} aria-describedby={isChecked ? `${field.id}-feedback` : undefined} onChange={event => { setAnswers(previous => ({ ...previous, [field.id]: event.target.value })); setChecked(previous => ({ ...previous, [field.id]: false })); }} />{isChecked && <p id={`${field.id}-feedback`} className={`feedback ${isCorrect ? "correct" : "retry"}`}>{isCorrect ? "Correct." : value.trim() === "" ? "Enter an answer, then check again." : `Try again. ${field.hint}`}</p>}</div>;
      })}</div></fieldset>)}<div className="practiceActions"><button type="submit" className="primaryButton">Check answers</button><button type="button" className="secondaryButton" onClick={resetPractice}>Reset practice</button><button type="button" className="secondaryButton" aria-expanded={showSolutions} aria-controls="practice-solutions" onClick={() => setShowSolutions(previous => !previous)}>{showSolutions ? "Hide worked answers" : "Show worked answers"}</button></div><p className="score" role="status" aria-live="polite">{checkedCount === 0 ? "No answers checked yet." : `${correctCount} of ${practiceFields.length} correct · ${checkedCount} answers checked. You can edit an answer and check again.`}</p></form>
      <div id="practice-solutions" hidden={!showSolutions} className="workedAnswers"><h3>Worked answers</h3><ol>{practiceFields.map(field => <li key={field.id}><strong>{field.label}:</strong> {field.working}</li>)}</ol><p>The two estimates in Part C use straight polygon segments. Counts at interior times are estimates rather than exact observations.</p></div>
    </section>

    <section className="summaryCard" aria-labelledby="summaryTitle"><p className="lessonLabel">SECTION 3 · TAKEAWAYS</p><h2 id="summaryTitle">Count everything below the boundary</h2><ul><li>Cumulative frequency adds each class frequency to all the ones before it.</li><li>Plot upper class boundaries, plus an initial zero at the first lower boundary.</li><li>The graph never falls and finishes at the total number of observations.</li><li>Subtract cumulative counts to find the number between two boundaries.</li><li>Readings inside a class are estimates; table-boundary counts are known.</li></ul></section><footer className="lessonFooter"><Link className="primaryLink" href="/maths/s2/chapter-7">← Chapter 7 overview</Link><Link className="previousLink" href="/maths/s2/chapter-7/presentation-of-data">Revisit Section 2</Link></footer>

    <style jsx>{`
      .cumulativePage { max-width: 1120px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.7; }
      .cumulativePage :global(*) { box-sizing: border-box; }
      .cumulativePage :global(.backLink) { display: inline-block; color: #047857; font-size: 17px; font-weight: 800; margin-bottom: 26px; text-decoration: none; }
      header { margin-bottom: 31px; }
      .eyebrow, .lessonLabel, .smallLabel { color: #6d28d9; font-size: 13px; letter-spacing: .085em; font-weight: 900; line-height: 1.5; margin: 0 0 8px; }
      h1 { font-size: clamp(34px, 5vw, 51px); line-height: 1.18; letter-spacing: -.025em; margin: 0 0 18px; }
      h2 { font-size: clamp(25px, 3vw, 32px); line-height: 1.3; margin: 0; }
      h3 { font-size: 21px; line-height: 1.4; margin: 0 0 11px; }
      p { margin: 13px 0; }
      .introduction { font-size: 21px; color: #52657e; max-width: 930px; }
      .objectives, .jumpLinks { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 21px; }
      .objectives span { background: #ede9fe; color: #5b21b6; border-radius: 999px; padding: 7px 13px; font-weight: 750; font-size: 14px; }
      .jumpLinks { gap: 10px 22px; }
      .jumpLinks a, .cumulativePage :global(.previousLink) { color: #047857; font-size: 16px; font-weight: 800; text-underline-offset: 4px; }
      section[id] { scroll-margin-top: 24px; }
      .lessonCard { padding: 32px; border: 1px solid #d8e1ee; border-radius: 25px; background: white; margin-bottom: 28px; }
      .lessonHeading { display: flex; align-items: flex-start; gap: 18px; margin-bottom: 22px; }
      .lessonNumber { display: grid; place-items: center; width: 54px; height: 54px; flex: 0 0 54px; border-radius: 17px; background: #ede9fe; color: #6d28d9; font-size: 27px; font-weight: 900; }
      .twoColumns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 19px; margin-top: 22px; }
      .softPanel { padding: 23px; border-radius: 18px; background: #f5f3ff; border: 1px solid #e4dcfb; }
      .softPanel.green { background: #f0fdfa; border-color: #b6e8df; }
      .softPanel p { color: #435a72; font-size: 17px; }
      .softPanel p:last-child { margin-bottom: 0; }
      .tableWrap { max-width: 100%; overflow-x: auto; border-radius: 16px; border: 1px solid #cbd5e1; margin: 22px 0; }
      table { width: 100%; border-collapse: collapse; font-size: 16px; line-height: 1.6; }
      caption { text-align: left; padding: 14px 18px; font-weight: 800; background: #f8fafc; color: #172d50; }
      th, td { padding: 14px 16px; border-top: 1px solid #d8e1ee; text-align: center; vertical-align: middle; }
      thead th { background: #0f766e; color: white; font-weight: 800; }
      tbody th { font-weight: 800; color: #172d50; }
      tbody tr:nth-child(even) { background: #f8fafc; }
      .sourceTable { min-width: 660px; }
      .coordinateTable { min-width: 480px; }
      .comparisonTable { min-width: 630px; }
      .comparisonTable th, .comparisonTable td { text-align: left; }
      .practiceTable { min-width: 300px; }
      tfoot { background: #f0fdfa; font-weight: 850; }
      .note { background: #f0fdfa; color: #225a56; border-left: 4px solid #0f766e; padding: 17px 20px; border-radius: 12px; margin-top: 22px; }
      .warning { background: #fffbeb; border: 1px solid #fde68a; color: #854d0e; border-radius: 14px; padding: 18px 20px; margin: 23px 0 0; font-size: 17px; }
      .explorerCard { border-color: #c4b5fd; }
      .stepButtons, .classButtons { display: flex; flex-wrap: wrap; gap: 10px; margin: 23px 0 18px; }
      .stepButtons button, .classButtons button { border: 1px solid #c4b5fd; border-radius: 12px; background: white; color: #5b21b6; padding: 12px 17px; font: inherit; font-size: 15px; font-weight: 800; cursor: pointer; min-height: 46px; }
      .stepButtons button[aria-pressed="true"], .classButtons button[aria-pressed="true"] { color: white; background: #6d28d9; border-color: #6d28d9; }
      .diagramScroll { overflow-x: auto; max-width: 100%; border: 1px solid #d8e1ee; background: white; padding: 15px 0 5px; border-radius: 18px; margin: 20px 0; }
      .stepExplanation { background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 16px; padding: 21px; }
      .stepExplanation h3 { color: #5b21b6; }
      .stepExplanation p { margin-bottom: 0; font-size: 17px; color: #435a72; }
      .inspectPanel { padding: 22px; border: 1px solid #b6e8df; border-radius: 17px; background: #f0fdfa; margin-top: 21px; }
      .inspectPanel .classButtons { margin: 15px 0; }
      .inspectPanel p { margin-bottom: 0; }
      .ruleBox { padding: 23px; border: 1px solid #ddd6fe; background: #f5f3ff; border-radius: 18px; margin: 20px 0; }
      .ruleBox p:last-child { margin-bottom: 0; }
      .formula { font-size: 27px; color: #5b21b6; font-weight: 850; margin: 8px 0; }
      .supportText { font-size: 15px; color: #52657e; }
      .solution { border: 1px solid #c4b5fd; border-radius: 15px; background: #faf8ff; margin: 17px 0; }
      .solution summary { padding: 17px 21px; color: #5b21b6; font-weight: 800; cursor: pointer; }
      .solution > div:not(.tableWrap) { padding: 0 21px 15px; }
      .solution .tableWrap { margin: 0 17px 17px; }
      .solution p { font-size: 17px; }
      .guideToggle { display: flex; align-items: center; gap: 12px; padding: 14px 17px; border: 1px solid #cbd5e1; border-radius: 13px; background: #f8fafc; margin: 22px 0; cursor: pointer; font-size: 17px; font-weight: 750; }
      .guideToggle input { width: 21px; height: 21px; flex-shrink: 0; accent-color: #0f766e; }
      .legend { display: flex; flex-wrap: wrap; gap: 13px 25px; color: #52657e; font-size: 15px; }
      .legend span { display: inline-flex; align-items: center; gap: 9px; }
      .legend i { display: inline-block; width: 32px; height: 0; }
      .curveSwatch { border-top: 3px solid #0f766e; }
      .polygonSwatch { border-top: 2px dashed #64748b; }
      .practiceCard { background: #faf8ff; border-color: #c4b5fd; }
      .practiceGroup { min-width: 0; border: 1px solid #d8e1ee; border-radius: 18px; background: white; padding: 21px; margin: 26px 0; }
      .practiceGroup legend { font-weight: 850; color: #5b21b6; padding: 0 9px; max-width: 100%; font-size: 18px; }
      .practiceGroup > p { margin-top: 0; font-size: 17px; }
      .answerGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 19px; }
      .answerField label { display: block; font-size: 16px; font-weight: 750; margin-bottom: 8px; }
      .answerField input { width: 100%; min-width: 0; min-height: 48px; padding: 10px 13px; border: 1px solid #94a3b8; border-radius: 10px; color: #172d50; background: white; font: inherit; font-size: 18px; }
      .answerField input[aria-invalid="true"] { border: 2px solid #b45309; }
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
      .cumulativePage :global(.primaryLink) { display: inline-block; padding: 14px 20px; color: white; background: #0f766e; border-radius: 13px; font-size: 16px; font-weight: 800; text-decoration: none; }
      .cumulativePage :global(a:focus-visible), button:focus-visible, input:focus-visible, summary:focus-visible, .tableWrap:focus-visible, .diagramScroll:focus-visible { outline: 3px solid #2563eb; outline-offset: 4px; }
      @media (max-width: 800px) { .twoColumns { grid-template-columns: 1fr; } .lessonCard { padding: 26px; } .stepButtons button { flex: 1 1 180px; } }
      @media (max-width: 540px) { .cumulativePage { width: calc(100% - 28px); margin-top: 27px; font-size: 17px; } .introduction { font-size: 19px; } .lessonCard { padding: 21px 17px; } .lessonHeading { gap: 12px; } .lessonNumber { flex-basis: 42px; width: 42px; height: 42px; font-size: 23px; border-radius: 13px; } .lessonLabel { font-size: 11px; } .answerGrid { grid-template-columns: 1fr; } .stepButtons button { flex: 1 1 100%; } .classButtons button { flex: 1 1 120px; } .practiceGroup { padding: 17px 13px; } .practiceActions button { width: 100%; } .summaryCard { padding: 24px; } .inspectPanel, .stepExplanation { padding: 18px; } }
    
      .runningTable { min-width: 610px; }
      .runningTable tbody .includedRow { background: #ede9fe; }
      .cumulativeTable { min-width: 620px; }
      .boundaryButtons, .readerModes, .directionButtons { display: flex; flex-wrap: wrap; gap: 10px; margin: 23px 0 18px; }
      .boundaryButtons button, .readerModes button, .directionButtons button { border: 1px solid #c4b5fd; border-radius: 12px; background: white; color: #5b21b6; padding: 12px 17px; font: inherit; font-size: 15px; font-weight: 800; cursor: pointer; min-height: 46px; }
      .boundaryButtons button[aria-pressed="true"], .readerModes button[aria-pressed="true"], .directionButtons button[aria-pressed="true"] { color: white; background: #6d28d9; border-color: #6d28d9; }
      .countStrip { padding: 19px 22px; border: 1px solid #c4b5fd; border-radius: 16px; background: #f5f3ff; color: #5b21b6; }
      .countStrip p { margin-bottom: 0; font-size: 17px; }
      .readerControls { padding: 21px; border: 1px solid #ddd6fe; border-radius: 17px; background: #faf8ff; }
      .readerControls label { display: block; font-weight: 750; margin-bottom: 15px; }
      .readerControls input[type="range"] { display: block; width: 100%; min-height: 36px; margin: 0; accent-color: #6d28d9; cursor: pointer; }
      .readerControls p { margin-bottom: 0; color: #52657e; font-size: 16px; }
      .readingResult { background: #fff7ed; border: 1px solid #fdba74; border-radius: 17px; padding: 23px; }
      .readingResult .smallLabel { color: #9a3412; }
      .readingResult > p:last-child { font-size: 16px; color: #7c3c16; margin-bottom: 0; }
      .resultGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin: 17px 0; }
      .resultGrid span { display: block; color: #7c3c16; font-size: 15px; }
      .resultGrid strong { display: block; color: #9a3412; font-size: 29px; }
      .formula { font-size: 23px; }
      @media (max-width: 540px) { .boundaryButtons button { flex: 1 1 125px; } .directionButtons button { flex: 1 1 100%; } .resultGrid { grid-template-columns: 1fr; } .readerControls, .readingResult { padding: 18px; } }
`}</style>
  </main>;
}
