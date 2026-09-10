"use client";

import { useState } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-7/presentation-of-data/page.tsx
// Self-contained lesson. Charts are drawn from the same data as the tables.
type DataRow = { lower: number; upper: number; lowerBoundary: number; upperBoundary: number; mark: number; frequency: number };
type Point = { x: number; y: number };
type ChartMode = "histogram" | "polygon" | "curve";

const rows: DataRow[] = [4, 9, 12, 5].map((frequency, index) => {
  const lower = 10 + index * 10;
  return { lower, upper: lower + 9, lowerBoundary: lower - 0.5, upperBoundary: lower + 9.5, mark: lower + 4.5, frequency };
});
const total = rows.reduce((sum, row) => sum + row.frequency, 0);
const classWidth = rows[0].upperBoundary - rows[0].lowerBoundary;
const polygonPoints: Point[] = [
  { x: rows[0].mark - classWidth, y: 0 },
  ...rows.map(row => ({ x: row.mark, y: row.frequency })),
  { x: rows[rows.length - 1].mark + classWidth, y: 0 },
];

// Shape-preserving cubic interpolation for this equal-spaced illustrative curve.
// Zero slopes at turning points and the two endpoints prevent overshoot.
function smoothSegments(points: Point[]) {
  const secants = points.slice(1).map((point, index) => (point.y - points[index].y) / (point.x - points[index].x));
  const slopes = points.map((_, index) => {
    if (index === 0 || index === points.length - 1) return 0;
    const left = secants[index - 1], right = secants[index];
    return left * right <= 0 ? 0 : 2 * left * right / (left + right);
  });
  return points.slice(0, -1).map((start, index) => {
    const end = points[index + 1], third = (end.x - start.x) / 3;
    return { start, c1: { x: start.x + third, y: start.y + slopes[index] * third }, c2: { x: end.x - third, y: end.y - slopes[index + 1] * third }, end };
  });
}

function DistributionChart({ mode, stage = 2, selectedClass = 1, showGuide = true }: { mode: ChartMode; stage?: number; selectedClass?: number; showGuide?: boolean }) {
  const left = 82, right = 642, top = 57, bottom = 307;
  const minX = 0, maxX = 60;
  const px = (value: number) => left + (value - minX) / (maxX - minX) * (right - left);
  const py = (value: number) => bottom - value / 15 * (bottom - top);
  const histogram = mode === "histogram";
  const ticks = histogram ? [minX, rows[0].lowerBoundary, ...rows.map(row => row.upperBoundary), maxX] : [minX, ...polygonPoints.map(point => point.x), maxX];
  const drawBars = (histogram && stage > 0) || (mode === "polygon" && stage < 2);
  const drawPolygon = (mode === "polygon" && stage > 0) || (mode === "curve" && showGuide);
  const drawPoints = mode === "polygon" || (mode === "curve" && showGuide);
  const points = mode === "polygon" && stage === 0 ? polygonPoints.slice(1, -1) : polygonPoints;
  const curve = smoothSegments(polygonPoints);
  const path = `M ${px(curve[0].start.x)} ${py(curve[0].start.y)} ` + curve.map(segment => `C ${px(segment.c1.x)} ${py(segment.c1.y)} ${px(segment.c2.x)} ${py(segment.c2.y)} ${px(segment.end.x)} ${py(segment.end.y)}`).join(" ");
  const chartName = histogram ? "Histogram" : mode === "polygon" ? "Frequency polygon" : "Frequency curve";
  const stateDescription = histogram && stage === 0 ? "Axes and class boundaries only; bars are added in Step 2." : mode === "polygon" && stage === 0 ? "Four class-mark points over faint histogram bars; join the points in Step 2." : "Frequencies are 4, 9, 12 and 5 for the recorded classes 10–19, 20–29, 30–39 and 40–49 minutes.";
  const textStyle = { fontFamily: "Arial, sans-serif", fontSize: 14 };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 710 387" role="img" aria-label={`${chartName}: journey times of 30 students. The horizontal axis runs from 0 to 60 minutes. ${stateDescription}`} data-chart-mode={mode} data-stage={stage} style={{ display: "block", width: "100%", minWidth: 580, height: "auto" }}>
    <text x="362" y="24" textAnchor="middle" fill="#172d50" style={{ ...textStyle, fontSize: 19, fontWeight: 700 }}>Journey times of 30 students</text>
    {[0, 5, 10, 15].map(value => <g key={value}><line x1={left} y1={py(value)} x2={right} y2={py(value)} stroke="#d8e1ee" strokeWidth="1" /><text x={left - 13} y={py(value) + 5} textAnchor="end" fill="#52657e" style={textStyle}>{value}</text></g>)}
    {ticks.map(value => <g key={value} data-x-tick={value}><line x1={px(value)} y1={top} x2={px(value)} y2={bottom} stroke="#edf1f7" /><line x1={px(value)} y1={bottom} x2={px(value)} y2={bottom + 6} stroke="#172d50" /><text x={px(value)} y={bottom + 25} textAnchor="middle" fill="#52657e" style={textStyle}>{value}</text></g>)}
    {drawBars && rows.map((row, index) => <g key={row.lower}><rect data-bar-class={row.lower} data-frequency={row.frequency} data-lower-boundary={row.lowerBoundary} data-upper-boundary={row.upperBoundary} x={px(row.lowerBoundary)} y={py(row.frequency)} width={px(row.upperBoundary) - px(row.lowerBoundary)} height={bottom - py(row.frequency)} fill={histogram && index === selectedClass ? "#14b8a6" : "#5eead4"} fillOpacity={histogram ? 0.55 : 0.13} stroke={histogram ? "#0f766e" : "#a1b9bc"} strokeWidth="2" />{histogram && stage === 2 && <text x={px(row.mark)} y={py(row.frequency) - 12} textAnchor="middle" fill="#0f766e" style={{ ...textStyle, fontSize: 18, fontWeight: 700 }}>{row.frequency}</text>}</g>)}
    <path d={`M ${left} ${top - 5} V ${bottom} H ${right + 9}`} stroke="#172d50" strokeWidth="2" fill="none" />
    {drawPolygon && <polyline data-frequency-polygon="true" points={polygonPoints.map(point => `${px(point.x)},${py(point.y)}`).join(" ")} fill="none" stroke={mode === "curve" ? "#64748b" : "#7c3aed"} strokeWidth={mode === "curve" ? 2 : 3} strokeDasharray={mode === "curve" ? "7 5" : undefined} strokeLinejoin="round" />}
    {mode === "curve" && <path data-frequency-curve="true" d={path} fill="none" stroke="#0f766e" strokeWidth="3.5" strokeLinecap="round" />}
    {drawPoints && points.map(point => <g key={point.x} data-point-x={point.x} data-point-y={point.y}><circle cx={px(point.x)} cy={py(point.y)} r="4.5" fill={mode === "curve" ? "#64748b" : "#7c3aed"} /><text x={px(point.x)} y={py(point.y) - 12} textAnchor="middle" fill={mode === "curve" ? "#52657e" : "#7c3aed"} style={{ ...textStyle, fontSize: 17, fontWeight: 700 }}>{point.y}</text></g>)}
    <text x="362" y="372" textAnchor="middle" fill="#172d50" style={{ ...textStyle, fontSize: 16 }}>Journey time (min)</text>
    <text transform="translate(24 181) rotate(-90)" textAnchor="middle" fill="#172d50" style={{ ...textStyle, fontSize: 16 }}>Frequency</text>
  </svg>;
}

const histogramSteps = [
  { label: "1 · Axes and boundaries", title: "Set up the axes and scales", text: "Start both axes at 0. Put journey time on the horizontal axis and frequency on the vertical axis. Mark class boundaries 9.5, 19.5, 29.5, 39.5 and 49.5. Use equal distances for equal numerical changes." },
  { label: "2 · Draw the bars", title: "Use one bar for each class", text: "Draw each bar from its lower boundary to its upper boundary. All four class widths are 10 minutes, so the heights can show the frequencies 4, 9, 12 and 5. Neighbouring bars meet at their shared boundary." },
  { label: "3 · Read the frequencies", title: "Check the heights against the table", text: "Read vertically to find a frequency. The tallest bar has height 12 and represents the recorded class 30–39 minutes. Add the four class frequencies to check the total of 30 students." },
];
const polygonSteps = [
  { label: "1 · Plot the class marks", title: "Use the centre of each class", text: "Above each class mark, plot its frequency. The point for 20–29 minutes is (24.5, 9). The faint histogram helps you locate the midpoint of the top of each bar." },
  { label: "2 · Add the ends and join", title: "Include two extra zero-frequency classes", text: "Add the classes 0–9 and 50–59 for closing the polygon. Their class marks are 4.5 and 54.5, and both frequencies are 0. Join all six points in order with straight segments." },
  { label: "3 · Show the polygon", title: "The polygon can stand on its own", text: "Remove the histogram guide. The vertices still represent frequencies at class marks. A segment can rise or fall because it connects individual class frequencies, not running totals." },
];

type PracticeField = { id: string; label: string; answer: number; hint: string; working: string };
const practiceRows = [6, 10, 8, 6].map((frequency, index) => ({ lower: 20 + index * 10, upper: 29 + index * 10, frequency }));
const practiceGroups: { title: string; context: string; fields: PracticeField[] }[] = [
  { title: "A · Describe a histogram bar", context: "For the recorded class 30–39 minutes:", fields: [
    { id: "bar-left", label: "Left edge: lower boundary (min)", answer: 29.5, hint: "The times are recorded to the nearest minute. Use 30 − 0.5.", working: "30 − 0.5 = 29.5 min" },
    { id: "bar-right", label: "Right edge: upper boundary (min)", answer: 39.5, hint: "Use the upper recorded limit plus half a minute.", working: "39 + 0.5 = 39.5 min" },
    { id: "bar-height", label: "Bar height (frequency)", answer: 10, hint: "All classes have equal width. Read the frequency of 30–39 in the practice table.", working: "The frequency in the practice table is 10." },
    { id: "bar-width", label: "Bar width (min)", answer: 10, hint: "Subtract the lower boundary from the upper boundary.", working: "39.5 − 29.5 = 10 min" },
  ] },
  { title: "B · Position the polygon points", context: "Use class marks for the horizontal coordinates. Add an extra zero-frequency class of the same width at each end.", fields: [
    { id: "point-x", label: "x-coordinate for the class 40–49", answer: 44.5, hint: "Find the midpoint of 40 and 49, rather than using a boundary.", working: "(40 + 49) ÷ 2 = 44.5; the point is (44.5, 8)." },
    { id: "left-end", label: "x-coordinate of the left closing point", answer: 14.5, hint: "The first real class is 20–29. The extra class before it is 10–19.", working: "(10 + 19) ÷ 2 = 14.5; the point is (14.5, 0)." },
    { id: "right-end", label: "x-coordinate of the right closing point", answer: 64.5, hint: "The last real class is 50–59. Use the midpoint of the extra class 60–69.", working: "(60 + 69) ÷ 2 = 64.5; the point is (64.5, 0)." },
  ] },
  { title: "C · Interpret the distribution", context: "Combine the two classes with recorded times from 30 to 49 minutes, inclusive.", fields: [
    { id: "percentage", label: "Percentage of the 30 observations (%)", answer: 60, hint: "Add 10 and 8, divide by the total 30, then multiply by 100.", working: "(10 + 8) ÷ 30 × 100% = 60%" },
  ] },
];
const practiceFields = practiceGroups.flatMap(group => group.fields);
function matchesAnswer(raw: string, expected: number) {
  const value = raw.trim();
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value)) return false;
  return Number.isFinite(Number(value)) && Math.abs(Number(value) - expected) < 1e-9;
}

export default function PresentationOfDataPage() {
  const [histogramStep, setHistogramStep] = useState(0);
  const [polygonStep, setPolygonStep] = useState(0);
  const [selectedClass, setSelectedClass] = useState(1);
  const [showCurveGuide, setShowCurveGuide] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showSolutions, setShowSolutions] = useState(false);
  const chosen = rows[selectedClass];
  const correctCount = practiceFields.filter(field => checked[field.id] && matchesAnswer(answers[field.id] ?? "", field.answer)).length;
  const checkedCount = practiceFields.filter(field => checked[field.id]).length;

  function resetPractice() { setAnswers({}); setChecked({}); setShowSolutions(false); }

  return <main className="presentationPage">
    <Link className="backLink" href="/maths/s2/chapter-7">← Back to Chapter 7</Link>
    <header><p className="eyebrow">S2 · CHAPTER 7 · SECTION 2</p><h1>Presentation of Data</h1><p className="introduction">Use a grouped frequency table to construct a histogram, a frequency polygon and a frequency curve. Learn what each display can tell you.</p><div className="objectives" aria-label="Learning objectives"><span>Draw bars at class boundaries</span><span>Plot frequencies at class marks</span><span>Interpret the distribution</span></div><nav className="jumpLinks" aria-label="On this page"><a href="#histogram">Histogram</a><a href="#polygon">Frequency polygon</a><a href="#curve">Frequency curve</a><a href="#interpret">Read the data</a><a href="#practice">Try it yourself</a></nav></header>

    <section className="lessonCard" aria-labelledby="startTitle"><div className="lessonHeading"><span className="lessonNumber">1</span><div><p className="lessonLabel">START WITH THE TABLE</p><h2 id="startTitle">The same data, different displays</h2></div></div><p>These are the <strong>{total} journey times</strong> from Section 1, recorded to the <strong>nearest minute</strong>. Every class has width <strong>10 minutes</strong>.</p>
      <div className="tableWrap" tabIndex={0} role="region" aria-label="Journey-time frequency table; scroll horizontally if needed"><table className="sourceTable"><caption>Journey times of 30 students</caption><thead><tr><th scope="col">Recorded time (min)</th><th scope="col">Class boundaries (min)</th><th scope="col">Class mark (min)</th><th scope="col">Frequency</th></tr></thead><tbody>{rows.map(row => <tr key={row.lower}><th scope="row">{row.lower}–{row.upper}</th><td>{row.lowerBoundary}–{row.upperBoundary}</td><td>{row.mark}</td><td>{row.frequency}</td></tr>)}</tbody><tfoot><tr><th scope="row">Total</th><td>—</td><td>—</td><td>{total}</td></tr></tfoot></table></div>
      <div className="twoColumns"><article className="softPanel"><p className="smallLabel">HISTOGRAM</p><h3>Display a continuous distribution</h3><p>Each bar represents an interval of measurements. Its horizontal edges use the class boundaries. Adjacent classes share a boundary.</p></article><article className="softPanel green"><p className="smallLabel">BAR CHART</p><h3>Compare separate categories</h3><p>Bars can represent categories such as bus, bicycle and walking. They are separated by gaps, and their widths do not represent numerical class intervals.</p></article></div>
      <p className="note"><strong>Equal-width classes in this lesson:</strong> the histogram heights show frequencies. With unequal class widths, frequency density is needed so that bar area represents frequency; you cannot simply use frequency as the height.</p>
    </section>

    <section className="lessonCard explorerCard" id="histogram" aria-labelledby="histogramTitle"><div className="lessonHeading"><span className="lessonNumber">2</span><div><p className="lessonLabel">WORKED EXAMPLE 1 · BUILD A HISTOGRAM</p><h2 id="histogramTitle">Bar edges belong at class boundaries</h2></div></div><p>Select the steps in order, then go back to compare them. Frequency starts at zero on the vertical axis.</p>
      <div className="stepButtons histogramSteps" role="group" aria-label="Histogram construction steps">{histogramSteps.map((step, index) => <button type="button" key={step.label} aria-pressed={histogramStep === index} aria-controls="histogram-display" onClick={() => setHistogramStep(index)}>{step.label}</button>)}</div>
      <div id="histogram-display"><div className="diagramScroll" tabIndex={0} role="region" aria-label="Histogram construction; scroll horizontally on small screens"><DistributionChart mode="histogram" stage={histogramStep} selectedClass={selectedClass} /></div><div className="stepExplanation" aria-live="polite"><h3>{histogramSteps[histogramStep].title}</h3><p>{histogramSteps[histogramStep].text}</p></div></div>
      {histogramStep > 0 && <div className="inspectPanel"><h3>Inspect one bar</h3><div className="classButtons" role="group" aria-label="Choose a histogram class">{rows.map((row, index) => <button type="button" key={row.lower} aria-pressed={selectedClass === index} aria-controls="bar-description" onClick={() => setSelectedClass(index)}>{row.lower}–{row.upper} min</button>)}</div><p id="bar-description" aria-live="polite"><strong>{chosen.lower}–{chosen.upper} minutes:</strong> left edge {chosen.lowerBoundary}, right edge {chosen.upperBoundary}; width {classWidth} minutes; height {chosen.frequency} students.</p></div>}
      <div className="twoColumns"><div className="softPanel"><h3>Keep the widths meaningful</h3><p>The class 20–29 has width 29.5 − 19.5 = 10 minutes. Drawing from 20 to 29 would leave incorrect gaps between these classes.</p></div><div className="softPanel green"><h3>Keep empty intervals in place</h3><p>A class with frequency 0 has a bar of height 0. Its interval still occupies the correct space on the horizontal scale.</p></div></div>
      <p className="supportText">Every horizontal axis in this section runs from 0 to 60 minutes. Equal numerical changes always take equal horizontal distances.</p>
    </section>

    <section className="lessonCard explorerCard" id="polygon" aria-labelledby="polygonTitle"><div className="lessonHeading"><span className="lessonNumber">3</span><div><p className="lessonLabel">WORKED EXAMPLE 2 · BUILD A FREQUENCY POLYGON</p><h2 id="polygonTitle">Plot the class marks, then join the points</h2></div></div><div className="ruleBox"><p className="smallLabel">THE COORDINATE RULE</p><p className="formula">(class mark, frequency)</p><p>For the class 20–29: class mark = (20 + 29) ÷ 2 = 24.5, so plot <strong>(24.5, 9)</strong>.</p></div>
      <div className="stepButtons polygonSteps" role="group" aria-label="Frequency polygon construction steps">{polygonSteps.map((step, index) => <button type="button" key={step.label} aria-pressed={polygonStep === index} aria-controls="polygon-display" onClick={() => setPolygonStep(index)}>{step.label}</button>)}</div>
      <div id="polygon-display"><div className="diagramScroll" tabIndex={0} role="region" aria-label="Frequency polygon construction; scroll horizontally on small screens"><DistributionChart mode="polygon" stage={polygonStep} /></div><div className="stepExplanation" aria-live="polite"><h3>{polygonSteps[polygonStep].title}</h3><p>{polygonSteps[polygonStep].text}</p></div></div>
      <details className="solution"><summary>See all six coordinates, including the closing points</summary><div className="tableWrap" tabIndex={0} role="region" aria-label="Frequency polygon coordinates"><table className="coordinateTable"><caption>Points in order from left to right</caption><thead><tr><th scope="col">Class</th><th scope="col">Purpose</th><th scope="col">Point</th></tr></thead><tbody><tr><th scope="row">0–9</th><td>Extra zero-frequency class</td><td>(4.5, 0)</td></tr>{rows.map(row => <tr key={row.lower}><th scope="row">{row.lower}–{row.upper}</th><td>Original data class</td><td>({row.mark}, {row.frequency})</td></tr>)}<tr><th scope="row">50–59</th><td>Extra zero-frequency class</td><td>(54.5, 0)</td></tr></tbody></table></div></details>
      <p className="note"><strong>The two extra classes add no observations.</strong> They close the polygon on the horizontal axis. The total frequency is still 30. The horizontal axis starts at 0; the first closing point, (4.5, 0), lies to the right of the origin.</p>
      <p className="warning"><strong>Use the midpoint, not the boundary.</strong> For 20–29, the vertex is (24.5, 9). The coordinate (29.5, 9) uses the upper boundary and puts the vertex in the wrong horizontal position.</p>
    </section>

    <section className="lessonCard explorerCard" id="curve" aria-labelledby="curveTitle"><div className="lessonHeading"><span className="lessonNumber">4</span><div><p className="lessonLabel">FROM STRAIGHT SEGMENTS TO A SMOOTH SHAPE</p><h2 id="curveTitle">A frequency curve</h2></div></div><p>A <strong>frequency curve</strong> is a smooth version of the frequency polygon. It shows the broad shape of the distribution without sharp corners at the vertices.</p><p>Use the polygon as a guide, smooth the changes in direction and keep the curve on or above the horizontal axis. A smooth sketch need not pass through every plotted point exactly.</p>
      <label className="guideToggle"><input type="checkbox" checked={showCurveGuide} onChange={event => setShowCurveGuide(event.target.checked)} aria-controls="curve-display" /><span>Show the frequency polygon and points as a guide</span></label>
      <div id="curve-display" className="diagramScroll" tabIndex={0} role="region" aria-label="Frequency curve and optional polygon guide; scroll horizontally on small screens"><DistributionChart mode="curve" showGuide={showCurveGuide} /></div>
      <div className="legend" aria-label="Curve diagram legend"><span><i className="curveSwatch" aria-hidden="true" />Solid teal: frequency curve</span>{showCurveGuide && <span><i className="polygonSwatch" aria-hidden="true" />Dashed grey: frequency polygon</span>}</div>
      <div className="twoColumns"><div className="softPanel"><h3>What remains the same?</h3><p>The source data, axes and units. The curve gives another view of the same 30 observations.</p></div><div className="softPanel green"><h3>What has changed?</h3><p>The corners have been smoothed. This is an illustrative shape, not a new set of measured frequencies or exact individual journey times.</p></div></div>
      <p className="note"><strong>The table supplies the exact class counts.</strong> Do not treat an arbitrary point on the smooth curve as the exact number of students with one particular journey time.</p>
    </section>

    <section className="lessonCard" id="interpret" aria-labelledby="interpretTitle"><div className="lessonHeading"><span className="lessonNumber">5</span><div><p className="lessonLabel">READ AND EXPLAIN</p><h2 id="interpretTitle">What does the distribution tell us?</h2></div></div><p>Use the original journey-time table and its diagrams. Think about each question before revealing the reasoning.</p>
      <details className="solution"><summary>Which recorded class contains the most observations?</summary><div><p><strong>30–39 minutes</strong>, with frequency 12. It is the <strong>modal class</strong>. The highest polygon vertex is at (34.5, 12), but this does not mean that 12 students each travelled for exactly 34.5 minutes.</p></div></details>
      <details className="solution"><summary>How many recorded times are from 20 to 39 minutes, inclusive?</summary><div><p>Add the two class frequencies: <strong>9 + 12 = 21 students</strong>.</p><p>As a percentage: 21 ÷ 30 × 100% = <strong>70%</strong>. Combine class frequencies; do not add the class marks.</p></div></details>
      <details className="solution"><summary>Must a frequency polygon always rise from left to right?</summary><div><p><strong>No.</strong> Class frequencies can increase or decrease. Here they are 4, 9, 12 and 5. The polygon rises to the class 30–39 and then falls.</p><p>Cumulative frequency uses running totals. You will study that different idea in Section 3.</p></div></details>
      <details className="solution"><summary>Can the graph tell us exactly how many journeys took 25 minutes?</summary><div><p><strong>No.</strong> The class 20–29 contains 9 observations, but the grouped graph does not separate them into individual recorded times. A smooth curve does not recover that lost detail.</p></div></details>
      <div className="tableWrap" tabIndex={0} role="region" aria-label="Comparison of the three statistical diagrams"><table className="comparisonTable"><caption>Choose the correct construction rule</caption><thead><tr><th scope="col">Diagram</th><th scope="col">Horizontal placement</th><th scope="col">How it is drawn</th></tr></thead><tbody><tr><th scope="row">Histogram</th><td>Bar edges at class boundaries</td><td>Adjacent class bars; frequency heights for equal-width classes</td></tr><tr><th scope="row">Frequency polygon</th><td>Vertices at class marks</td><td>Straight segments, with zero-frequency closing points</td></tr><tr><th scope="row">Frequency curve</th><td>Follows the distribution shown by the polygon</td><td>A smooth outline of the overall pattern</td></tr></tbody></table></div>
    </section>

    <section className="lessonCard practiceCard" id="practice" aria-labelledby="practiceTitle"><div className="lessonHeading"><span className="lessonNumber">6</span><div><p className="lessonLabel">TRY IT YOURSELF · A FRESH DATA SET</p><h2 id="practiceTitle">Plan a histogram and a polygon</h2></div></div><p>The table shows <strong>30 reading sessions</strong>, with durations recorded to the <strong>nearest minute</strong>. Use this table for all eight answers below.</p>
      <div className="tableWrap" tabIndex={0} role="region" aria-label="Practice data: durations of reading sessions"><table className="practiceTable"><caption>Durations of 30 reading sessions</caption><thead><tr><th scope="col">Recorded duration (min)</th><th scope="col">Frequency</th></tr></thead><tbody>{practiceRows.map(row => <tr key={row.lower}><th scope="row">{row.lower}–{row.upper}</th><td>{row.frequency}</td></tr>)}</tbody><tfoot><tr><th scope="row">Total</th><td>30</td></tr></tfoot></table></div>
      <p>Enter numbers only. The units and percentage sign are supplied in the question labels.</p>
      <form noValidate onSubmit={event => { event.preventDefault(); setChecked(Object.fromEntries(practiceFields.map(field => [field.id, true]))); }}>
        {practiceGroups.map(group => <fieldset key={group.title} className="practiceGroup"><legend>{group.title}</legend><p>{group.context}</p><div className="answerGrid">{group.fields.map(field => {
          const value = answers[field.id] ?? "", isChecked = checked[field.id] === true;
          const isCorrect = isChecked && matchesAnswer(value, field.answer);
          return <div className="answerField" key={field.id}><label htmlFor={field.id}>{field.label}</label><input id={field.id} type="text" inputMode="decimal" autoComplete="off" value={value} aria-invalid={isChecked && !isCorrect ? true : undefined} aria-describedby={isChecked ? `${field.id}-feedback` : undefined} onChange={event => { setAnswers(previous => ({ ...previous, [field.id]: event.target.value })); setChecked(previous => ({ ...previous, [field.id]: false })); }} />{isChecked && <p id={`${field.id}-feedback`} className={`feedback ${isCorrect ? "correct" : "retry"}`}>{isCorrect ? "Correct." : value.trim() === "" ? "Enter an answer, then check again." : `Try again. ${field.hint}`}</p>}</div>;
        })}</div></fieldset>)}
        <div className="practiceActions"><button type="submit" className="primaryButton">Check answers</button><button type="button" className="secondaryButton" onClick={resetPractice}>Reset practice</button><button type="button" className="secondaryButton" aria-expanded={showSolutions} aria-controls="practice-solutions" onClick={() => setShowSolutions(previous => !previous)}>{showSolutions ? "Hide worked answers" : "Show worked answers"}</button></div><p className="score" role="status" aria-live="polite">{checkedCount === 0 ? "No answers checked yet." : `${correctCount} of ${practiceFields.length} correct · ${checkedCount} answers checked. You can edit an answer and check again.`}</p>
      </form>
      <div id="practice-solutions" hidden={!showSolutions} className="workedAnswers"><h3>Worked answers</h3><ol>{practiceFields.map(field => <li key={field.id}><strong>{field.label}:</strong> {field.working}</li>)}</ol></div>
    </section>

    <section className="summaryCard" aria-labelledby="summaryTitle"><p className="lessonLabel">SECTION 2 · TAKEAWAYS</p><h2 id="summaryTitle">Boundaries for bars; marks for polygon points</h2><ul><li>Label the axes, give units and use consistent scales.</li><li>Draw histogram bars across class boundaries. For equal-width classes, use frequency as height.</li><li>Plot a frequency polygon at (class mark, frequency), including the two zero-frequency closing points.</li><li>Smooth the polygon to show a frequency curve. Use the table for exact class counts.</li></ul></section>
    <footer className="lessonFooter"><Link className="primaryLink" href="/maths/s2/chapter-7">← Chapter 7 overview</Link><Link className="previousLink" href="/maths/s2/chapter-7/organization-of-data">Revisit Section 1</Link></footer>

    <style jsx>{`
      .presentationPage { max-width: 1120px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.7; }
      .presentationPage :global(*) { box-sizing: border-box; }
      .presentationPage :global(.backLink) { display: inline-block; color: #047857; font-size: 17px; font-weight: 800; margin-bottom: 26px; text-decoration: none; }
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
      .jumpLinks a, .presentationPage :global(.previousLink) { color: #047857; font-size: 16px; font-weight: 800; text-underline-offset: 4px; }
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
      .presentationPage :global(.primaryLink) { display: inline-block; padding: 14px 20px; color: white; background: #0f766e; border-radius: 13px; font-size: 16px; font-weight: 800; text-decoration: none; }
      .presentationPage :global(a:focus-visible), button:focus-visible, input:focus-visible, summary:focus-visible, .tableWrap:focus-visible, .diagramScroll:focus-visible { outline: 3px solid #2563eb; outline-offset: 4px; }
      @media (max-width: 800px) { .twoColumns { grid-template-columns: 1fr; } .lessonCard { padding: 26px; } .stepButtons button { flex: 1 1 180px; } }
      @media (max-width: 540px) { .presentationPage { width: calc(100% - 28px); margin-top: 27px; font-size: 17px; } .introduction { font-size: 19px; } .lessonCard { padding: 21px 17px; } .lessonHeading { gap: 12px; } .lessonNumber { flex-basis: 42px; width: 42px; height: 42px; font-size: 23px; border-radius: 13px; } .lessonLabel { font-size: 11px; } .answerGrid { grid-template-columns: 1fr; } .stepButtons button { flex: 1 1 100%; } .classButtons button { flex: 1 1 120px; } .practiceGroup { padding: 17px 13px; } .practiceActions button { width: 100%; } .summaryCard { padding: 24px; } .inspectPanel, .stepExplanation { padding: 18px; } }
    `}</style>
  </main>;
}
