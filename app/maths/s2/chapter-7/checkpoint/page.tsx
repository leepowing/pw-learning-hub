"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-7/checkpoint/page.tsx
// Original, session-only checkpoint. No flashcard or database records are written.
const chapterPath = "/maths/s2/chapter-7";
const classes = [
  { lower: 20, upper: 29, frequency: 8 },
  { lower: 30, upper: 39, frequency: 14 },
  { lower: 40, upper: 49, frequency: 12 },
  { lower: 50, upper: 59, frequency: 6 },
];
const boundaries = [19.5, 29.5, 39.5, 49.5, 59.5];
const classMarks = [24.5, 34.5, 44.5, 54.5];
const cumulativeTotals = [0, 8, 22, 34, 40];
type Field = { id: string; label: string; explanation: string } & ({ kind: "number"; expected: number } | { kind: "select"; expected: string; options: { value: string; label: string }[] });
const fields: Field[] = [
  { id: "missing-frequency", kind: "number", expected: 6, label: "Q1: frequency for 50–59 minutes", explanation: "There are 40 sessions: 40 − 8 − 14 − 12 = 6." },
  { id: "lower-boundary", kind: "number", expected: 19.5, label: "Q1: lower class boundary for 20–29 minutes", explanation: "The times are recorded to the nearest minute. The lower boundary is 20 − 0.5 = 19.5 min." },
  { id: "upper-boundary", kind: "number", expected: 29.5, label: "Q1: upper class boundary for 20–29 minutes", explanation: "The upper boundary is 29 + 0.5 = 29.5 min." },
  { id: "class-mark", kind: "number", expected: 24.5, label: "Q1: class mark for 20–29 minutes", explanation: "The class mark is (20 + 29) ÷ 2 = 24.5 min." },
  { id: "class-width", kind: "number", expected: 10, label: "Q1: class width in minutes", explanation: "Use the boundaries: 29.5 − 19.5 = 10 min. Subtracting 29 − 20 would give the wrong width." },
  ...classes.map((row, index): Field => ({ id: `bar-${index}`, kind: "number", expected: row.frequency, label: `Q2: histogram height for ${row.lower}–${row.upper} minutes`, explanation: `The classes have equal width. The height for ${row.lower}–${row.upper} is its frequency, ${row.frequency}.` })),
  { id: "polygon-rule", kind: "select", expected: "marks", label: "Q2: horizontal positions of frequency polygon points", options: [{ value: "upper", label: "Upper class boundaries" }, { value: "marks", label: "Class marks" }], explanation: "Use class marks 24.5, 34.5, 44.5 and 54.5. Add zero-frequency points at the class marks of the extra classes: 14.5 and 64.5." },
  ...boundaries.map((boundary, index): Field => ({ id: `cf-${index}`, kind: "number", expected: cumulativeTotals[index], label: `Q3: cumulative frequency below ${boundary} minutes`, explanation: index === 0 ? "The initial point is (19.5, 0): the first class begins at this lower boundary." : `Add the first ${index} class ${index === 1 ? "frequency" : "frequencies"}: ${classes.slice(0, index).map(row => row.frequency).join(" + ")} = ${cumulativeTotals[index]}. Plot this at the upper boundary ${boundary}.` })),
  { id: "at-least", kind: "number", expected: 18, label: "Q4(a): number of sessions lasting at least 39.5 minutes", explanation: "40 − 22 = 18. Subtract the number below 39.5 from the total." },
  { id: "between", kind: "number", expected: 26, label: "Q4(b): number of sessions with 29.5 ≤ time < 49.5 minutes", explanation: "34 − 8 = 26. Subtract the cumulative count below 29.5 from the count below 49.5." },
  { id: "percentage", kind: "number", expected: 85, label: "Q4(c): percentage of sessions below 49.5 minutes", explanation: "34 ÷ 40 × 100% = 85%." },
  { id: "estimate", kind: "number", expected: 28, label: "Q4(d): estimated number of sessions below 44.5 minutes using a straight polygon segment", explanation: "44.5 is halfway between 39.5 and 49.5. Interpolate halfway between 22 and 34: 22 + (34 − 22) ÷ 2 = 28. This is an estimate within a class." },
  { id: "largest", kind: "select", expected: "c", label: "Q5(a): centre with the largest number of computers", options: [{ value: "a", label: "Centre A" }, { value: "b", label: "Centre B" }, { value: "c", label: "Centre C" }], explanation: "Read the heights: A has 12, B has 18 and C has 30. C has the largest count." },
  { id: "ratio-b", kind: "select", expected: "false", label: "Q5(b): B has three times as many computers as A", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }], explanation: "18 ÷ 12 = 1.5, not 3. In the distorted chart, B's bar is twice as wide and 1.5 times as tall, so its area is 3 times as large. Count is encoded by height." },
  { id: "ratio-c", kind: "select", expected: "true", label: "Q5(c): C has 2.5 times as many computers as A", options: [{ value: "true", label: "True" }, { value: "false", label: "False" }], explanation: "30 ÷ 12 = 2.5. This follows from the scale, regardless of the unequal widths." },
  { id: "repair", kind: "select", expected: "width", label: "Q5(d): improvement that removes the misleading area comparison", options: [{ value: "width", label: "Use equal bar widths and retain the zero baseline." }, { value: "baseline", label: "Start the vertical axis at 10." }, { value: "labels", label: "Remove the category labels." }], explanation: "Equal bar widths make their areas and heights vary by the same ratios. Keep the scale, labels and zero baseline." },
  { id: "purpose", kind: "select", expected: "pie", label: "Q5(e): diagram to show the shares of one whole group", options: [{ value: "cumulative", label: "Cumulative frequency curve" }, { value: "pie", label: "Pie chart" }, { value: "line", label: "Broken line graph" }], explanation: "Each student chooses exactly one favourite activity, so non-overlapping categories divide one whole group. A pie chart shows those shares." },
  { id: "evidence", kind: "select", expected: "totals", label: "Q5(f): information needed to compare actual survey counts", options: [{ value: "totals", label: "The total number of students in each survey." }, { value: "colour", label: "The colour of each bar." }, { value: "size", label: "The size of the screen showing the chart." }], explanation: "A percentage must be multiplied by its own survey total to obtain a count. A higher percentage alone does not establish a larger count." },
];
const fieldById = Object.fromEntries(fields.map(field => [field.id, field]));
const groups = [
  { id: "question-1", title: "Organize the data", section: 1, route: "organization-of-data", fields: ["missing-frequency", "lower-boundary", "upper-boundary", "class-mark", "class-width"] },
  { id: "question-2", title: "Build a histogram and frequency polygon", section: 2, route: "presentation-of-data", fields: ["bar-0", "bar-1", "bar-2", "bar-3", "polygon-rule"] },
  { id: "question-3", title: "Complete the cumulative totals", section: 3, route: "cumulative-frequency", fields: ["cf-0", "cf-1", "cf-2", "cf-3", "cf-4"] },
  { id: "question-4", title: "Use the cumulative frequency polygon", section: 3, route: "cumulative-frequency", fields: ["at-least", "between", "percentage", "estimate"] },
  { id: "question-5", title: "Interpret and evaluate diagrams", section: 4, route: "uses-and-misuses-of-statistical-diagrams", fields: ["largest", "ratio-b", "ratio-c", "repair", "purpose", "evidence"] },
];
function numericValue(raw: string): number | null {
  const value = raw.normalize("NFKC").trim().replace(/−/g, "-");
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value)) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}
function matches(field: Field, raw: string): boolean {
  return field.kind === "number" ? numericValue(raw) === field.expected : raw === field.expected;
}
function expectedLabel(field: Field): string {
  return field.kind === "number" ? String(field.expected) : field.options.find(option => option.value === field.expected)!.label;
}
function validHeight(raw: string, maximum: number): number | null {
  const value = numericValue(raw);
  return value !== null && Number.isInteger(value) && value >= 0 && value <= maximum ? value : null;
}
const navy = "#172d50", teal = "#0f766e", purple = "#6d28d9";
const svgFont = { fontFamily: "Arial, sans-serif", fontSize: 15 };
const plot = { left: 88, right: 704, top: 65, bottom: 337 };
const px = (x: number) => plot.left + x / 70 * (plot.right - plot.left);
const py = (y: number, maximum: number) => plot.bottom - y / maximum * (plot.bottom - plot.top);
type PlotPoint = { x: number; y: number | null };
type ChartMode = "histogram" | "polygon" | "both";
function DiagramFrame({ title, description, children, kind }: { title: string; description: string; children: ReactNode; kind: string }) {
  return <div tabIndex={0} className="diagramScroll" role="region" aria-label="Statistical diagram; scroll horizontally on small screens" style={{ overflowX: "auto", border: "1px solid #d8e1ee", borderRadius: 18, background: "white", padding: "13px 0 5px", margin: "20px 0" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 425" role="img" aria-label={`${title}. ${description}`} data-chart={kind} style={{ display: "block", width: "100%", minWidth: 590, height: "auto" }}><text x="390" y="28" textAnchor="middle" fill={navy} style={{ ...svgFont, fontSize: 21, fontWeight: 700 }}>{title}</text>{children}</svg></div>;
}
function Axes({ cumulative = false, ticks = [0, ...boundaries, 70] }: { cumulative?: boolean; ticks?: number[] }) {
  const maximum = cumulative ? 40 : 16, step = cumulative ? 5 : 2;
  return <g>
    {Array.from({ length: maximum / step + 1 }, (_, i) => i * step).map(value => <g key={value}><line x1={plot.left} y1={py(value, maximum)} x2={plot.right} y2={py(value, maximum)} stroke="#dce5f1" /><text x={plot.left - 13} y={py(value, maximum) + 5} textAnchor="end" fill="#52657e" style={svgFont}>{value}</text></g>)}
    {ticks.map((value, index) => <g key={value} data-x-tick={value}><line x1={px(value)} y1={plot.top} x2={px(value)} y2={plot.bottom + 6} stroke="#e2e8f0" /><text x={px(value)} y={plot.bottom + 26 + (index > 0 && value - ticks[index - 1] < 4 ? 19 : 0)} textAnchor="middle" fill={navy} style={{ ...svgFont, fontWeight: value === 0 ? 800 : 400 }}>{value}</text></g>)}
    <path d={`M ${plot.left} ${plot.top - 5} V ${plot.bottom} H ${plot.right + 10}`} stroke={navy} strokeWidth="2" fill="none" />
    <text x="395" y="406" textAnchor="middle" fill={navy} style={{ ...svgFont, fontSize: 16 }}>Reading-session time (min)</text>
    <text transform="translate(23 200) rotate(-90)" textAnchor="middle" fill={navy} style={{ ...svgFont, fontSize: 16 }}>{cumulative ? "Cumulative frequency" : "Frequency"}</text>
  </g>;
}
function PointSeries({ points, maximum, color, guide = false }: { points: PlotPoint[]; maximum: number; color: string; guide?: boolean }) {
  return <g data-series={guide ? "solution" : "student"}>
    {points.slice(1).map((point, i) => point.y !== null && points[i].y !== null ? <line key={i} x1={px(points[i].x)} y1={py(points[i].y!, maximum)} x2={px(point.x)} y2={py(point.y, maximum)} stroke={color} strokeWidth={guide ? 2 : 3} strokeDasharray={guide ? "7 5" : undefined} /> : null)}
    {points.map(point => point.y === null ? null : <g key={point.x} data-point-x={point.x} data-point-y={point.y}><circle cx={px(point.x)} cy={py(point.y, maximum)} r={guide ? 6 : 4.5} fill={guide ? "white" : color} stroke={color} strokeWidth={guide ? 2 : 1} />{!guide && <text x={px(point.x)} y={py(point.y, maximum) - 13} textAnchor="middle" fill={color} style={{ ...svgFont, fontWeight: 700 }}>{point.y}</text>}</g>)}
  </g>;
}
function DistributionChart({ heights, placement, mode, showSolution }: { heights: (number | null)[]; placement: string; mode: ChartMode; showSolution: boolean }) {
  const showBars = mode !== "polygon", showPolygon = mode !== "histogram";
  const selectedX = placement === "marks" ? classMarks : boundaries.slice(1);
  const hasPlacement = placement === "marks" || placement === "upper";
  const anyHeight = heights.some(value => value !== null);
  const points: PlotPoint[] = [{ x: selectedX[0] - 10, y: 0 }, ...selectedX.map((x, i) => ({ x, y: heights[i] })), { x: selectedX[3] + 10, y: 0 }];
  const correctPoints: PlotPoint[] = [{ x: 14.5, y: 0 }, ...classMarks.map((x, i) => ({ x, y: classes[i].frequency })), { x: 64.5, y: 0 }];
  const ticks = mode === "polygon" && hasPlacement ? [0, selectedX[0] - 10, ...selectedX, selectedX[3] + 10, 70] : [0, ...boundaries, 70];
  return <DiagramFrame title={mode === "histogram" ? "Your histogram" : mode === "polygon" ? "Your frequency polygon" : "Your histogram and frequency polygon"} description="Both axes start at zero. Bars use class boundaries; the polygon follows your chosen horizontal positions and entered heights. Blank or out-of-scale values are not plotted." kind={`distribution-${mode}`}>
    <Axes ticks={ticks} />
    {showBars && heights.map((height, i) => height === null ? null : <g key={i}><rect data-bar-index={i} data-height={height} x={px(boundaries[i])} y={py(height, 16)} width={px(boundaries[i + 1]) - px(boundaries[i])} height={plot.bottom - py(height, 16)} fill="#99f6e4" fillOpacity="0.55" stroke={teal} strokeWidth="2" />{!showPolygon && <text x={px(classMarks[i])} y={py(height, 16) - 12} textAnchor="middle" fill={teal} style={{ ...svgFont, fontWeight: 700 }}>{height}</text>}</g>)}
    {showPolygon && hasPlacement && anyHeight && <PointSeries points={points} maximum={16} color={purple} />}
    {showSolution && showBars && <g data-solution-bars="true">{classes.map((row, i) => <rect key={i} x={px(boundaries[i])} y={py(row.frequency, 16)} width={px(boundaries[i + 1]) - px(boundaries[i])} height={plot.bottom - py(row.frequency, 16)} fill="none" stroke="#c2410c" strokeWidth="2" strokeDasharray="7 5" />)}</g>}
    {showSolution && showPolygon && <PointSeries points={correctPoints} maximum={16} color="#c2410c" guide />}
  </DiagramFrame>;
}
function CumulativeChart({ heights, showSolution }: { heights: (number | null)[]; showSolution: boolean }) {
  return <DiagramFrame title="Your cumulative frequency polygon" description="The horizontal axis starts at zero. Points use the first lower boundary followed by each upper boundary. Enter cumulative totals in the table to draw them." kind="cumulative">
    <Axes cumulative />
    <PointSeries points={boundaries.map((x, i) => ({ x, y: heights[i] }))} maximum={40} color={purple} />
    {showSolution && <PointSeries points={boundaries.map((x, i) => ({ x, y: cumulativeTotals[i] }))} maximum={40} color="#c2410c" guide />}
  </DiagramFrame>;
}
function ComputerChart({ corrected = false }: { corrected?: boolean }) {
  const counts = [12, 18, 30], widths = corrected ? [76, 76, 76] : [48, 96, 144];
  const centers = [225, 405, 595], bottom = 337;
  const y = (value: number) => bottom - value / 36 * 272;
  return <DiagramFrame title={corrected ? "Corrected display: equal bar widths" : "Computers in three community centres"} description={`A has 12 computers, B has 18 and C has 30. ${corrected ? "The bars have equal widths." : "The bars have unequal widths. Read the vertical scale carefully."}`} kind={corrected ? "computers-corrected" : "computers"}>
    {[0, 6, 12, 18, 24, 30, 36].map(value => <g key={value}><line x1="88" y1={y(value)} x2="704" y2={y(value)} stroke="#dce5f1" /><text x="75" y={y(value) + 5} textAnchor="end" fill="#52657e" style={svgFont}>{value}</text></g>)}
    {counts.map((count, i) => <g key={i}><rect data-count={count} data-width={widths[i]} x={centers[i] - widths[i] / 2} y={y(count)} width={widths[i]} height={bottom - y(count)} fill={corrected ? teal : "#7c3aed"} fillOpacity="0.6" stroke={corrected ? teal : purple} strokeWidth="2" /><text x={centers[i]} y="365" textAnchor="middle" fill={navy} style={{ ...svgFont, fontWeight: 700 }}>{["A", "B", "C"][i]}</text></g>)}
    <path d="M 88 60 V 337 H 714" stroke={navy} strokeWidth="2" fill="none" />
    <text x="395" y="406" textAnchor="middle" fill={navy} style={{ ...svgFont, fontSize: 16 }}>Community centre</text><text transform="translate(23 200) rotate(-90)" textAnchor="middle" fill={navy} style={{ ...svgFont, fontSize: 16 }}>Number of computers</text>
  </DiagramFrame>;
}
function AnswerInput({ field, value, submitted, onChange }: { field: Field; value: string; submitted: boolean; onChange: (id: string, value: string) => void }) {
  const correct = matches(field, value), feedbackId = `feedback-${field.id}`;
  const style = { width: "100%", minWidth: 96, minHeight: 46, maxWidth: "100%", border: `1px solid ${submitted ? correct ? "#059669" : "#c2410c" : "#94a3b8"}`, borderRadius: 10, padding: "10px 12px", font: "inherit", fontSize: 16, color: navy, background: "white", boxSizing: "border-box" as const };
  return <div data-answer={field.id} style={{ minWidth: 0 }}>
    {field.kind === "number" ? <input id={`answer-${field.id}`} type="text" inputMode="decimal" autoComplete="off" maxLength={24} value={value} disabled={submitted} aria-label={field.label} aria-invalid={submitted && !correct} aria-describedby={submitted ? feedbackId : "number-help"} onChange={event => onChange(field.id, event.target.value)} style={style} /> : <select id={`answer-${field.id}`} value={value} disabled={submitted} aria-label={field.label} aria-invalid={submitted && !correct} aria-describedby={submitted ? feedbackId : undefined} onChange={event => onChange(field.id, event.target.value)} style={style}><option value="">Choose an answer…</option>{field.options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select>}
    {submitted && <p id={feedbackId} data-correct={correct} style={{ margin: "9px 0 0", padding: "9px 11px", borderRadius: 9, fontSize: 14, lineHeight: 1.5, color: correct ? "#065f46" : "#9a3412", background: correct ? "#ecfdf5" : "#fff7ed" }}><strong>{correct ? "Correct." : value.trim() === "" ? "Unanswered." : "Review."}</strong>{!correct && <> Answer: {expectedLabel(field)}.</>}</p>}
  </div>;
}

export default function ChapterSevenCheckpoint() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState<ChartMode>("histogram");
  const [showSolutions, setShowSolutions] = useState(false);
  const summaryRef = useRef<HTMLElement>(null);
  const answered = fields.filter(field => (answers[field.id] ?? "").trim() !== "").length;
  const score = fields.filter(field => matches(field, answers[field.id] ?? "")).length;
  const barHeights = classes.map((_, i) => validHeight(answers[`bar-${i}`] ?? "", 16));
  const cumulativeHeights = boundaries.map((_, i) => validHeight(answers[`cf-${i}`] ?? "", 40));
  const field = (id: string) => <AnswerInput field={fieldById[id]} value={answers[id] ?? ""} submitted={submitted} onChange={(name, value) => setAnswers(old => ({ ...old, [name]: value }))} />;
  function submit() { setSubmitted(true); setShowSolutions(false); summaryRef.current?.focus(); }
  function edit() { setSubmitted(false); setShowSolutions(false); }
  function reset() { setAnswers({}); setSubmitted(false); setShowSolutions(false); setMode("histogram"); }
  function heading(index: number) { return <div className="questionHeading"><span className="questionNumber">{index + 1}</span><div><p className="eyebrow">{groups[index].fields.length} MARKS · SECTION {groups[index].section}</p><h2>{groups[index].title}</h2></div></div>; }

  return <main className="checkpointPage">
    <Link className="backLink" href={chapterPath}>← Back to Chapter 7</Link>
    <header><p className="eyebrow">S2 MATHEMATICS · CHAPTER 7</p><h1>Chapter 7 Checkpoint</h1><p className="introduction">Organization and Presentation of Data (II)</p><p>Complete the tables, build the diagrams and judge the statistical claims. These are original practice examples.</p><div className="pills"><span>5 question groups</span><span>25 marks</span><span>Interactive SVG diagrams</span></div><nav className="jumpLinks" aria-label="Checkpoint questions">{groups.map((group, index) => <a key={group.id} href={`#${group.id}`}>Question {index + 1}</a>)}</nav></header>
    <section className="progressPanel" tabIndex={-1} ref={summaryRef} aria-label="Checkpoint progress and results">
      <div role="status"><h2>{submitted ? score === fields.length ? "Checkpoint complete — full marks!" : "Your checkpoint results" : "Ready when you are"}</h2><p className="progressCount">{submitted ? `${score} / ${fields.length} marks · ${Math.round(score / fields.length * 100)}%` : `${answered} / ${fields.length} answer boxes completed`}</p><p>{submitted ? `${fields.length - answered} unanswered. Review the feedback below or open the worked solutions.` : "Each answer box is worth one mark. Check your work when you are ready; any unanswered box will receive zero."}</p></div>
      {submitted && <div className="resultGrid">{groups.map((group, index) => { const result = group.fields.filter(id => matches(fieldById[id], answers[id] ?? "")).length; return <div key={group.id}><strong>Q{index + 1}: {result} / {group.fields.length}</strong><span>{group.title}</span>{result < group.fields.length && <Link href={`${chapterPath}/${group.route}`}>Review Section {group.section} →</Link>}</div>; })}</div>}
    </section>
    <p className="numberHelp" id="number-help">Enter numbers without units. Decimals such as 19.5 are accepted. Numeric X axes start at 0; a category axis uses names.</p>

    <section className="questionCard" id="question-1">{heading(0)}<p>The durations of <strong>40 reading sessions</strong> are recorded to the nearest minute and grouped as shown. Complete the missing frequency and the first row's class boundaries and class mark.</p>
      <div className="tableWrap" tabIndex={0} role="region" aria-label="Reading-session frequency distribution table"><table className="frequencyTable"><caption>Reading sessions recorded to the nearest minute</caption><thead><tr><th scope="col">Time (min)</th><th scope="col">Lower boundary (min)</th><th scope="col">Upper boundary (min)</th><th scope="col">Class mark (min)</th><th scope="col">Frequency</th></tr></thead><tbody>{classes.map((row, i) => <tr key={row.lower}><th scope="row">{row.lower}–{row.upper}</th><td>{i === 0 ? field("lower-boundary") : boundaries[i]}</td><td>{i === 0 ? field("upper-boundary") : boundaries[i + 1]}</td><td>{i === 0 ? field("class-mark") : classMarks[i]}</td><td>{i === 3 ? field("missing-frequency") : row.frequency}</td></tr>)}</tbody><tfoot><tr><th scope="row" colSpan={4}>Total</th><td>40</td></tr></tfoot></table></div>
      <div className="singleAnswer"><label htmlFor="answer-class-width">What is the width of each class, in minutes?</label>{field("class-width")}</div>
    </section>

    <section className="questionCard" id="question-2">{heading(1)}<p>Use the table in Question 1 to construct a histogram and a frequency polygon. The class boundaries and equal class widths are supplied in the drawing frame.</p>
      <div className="answerGrid fourColumns">{classes.map((row, i) => <div key={row.lower}><label htmlFor={`answer-bar-${i}`}>Height for {row.lower}–{row.upper}</label>{field(`bar-${i}`)}</div>)}</div>
      <div className="singleAnswer wide"><label htmlFor="answer-polygon-rule">At which horizontal positions should the frequency polygon points be plotted?</label>{field("polygon-rule")}</div>
      <div className="modeButtons" role="group" aria-label="Choose a diagram view">{(["histogram", "polygon", "both"] as ChartMode[]).map(view => <button type="button" key={view} aria-pressed={mode === view} onClick={() => setMode(view)}>{view === "both" ? "Overlay both" : view === "polygon" ? "Frequency polygon" : "Histogram"}</button>)}</div>
      <DistributionChart heights={barHeights} placement={answers["polygon-rule"] ?? ""} mode={mode} showSolution={submitted && showSolutions} />
      <p className="supportText">Enter whole-number heights from 0 to 16 to draw the bars. The polygon uses the same heights and your chosen horizontal positions; extra zero-frequency end points are added automatically. Blank or out-of-scale heights are not plotted.</p>
      {mode !== "histogram" && !answers["polygon-rule"] && <p className="note">Choose the polygon's horizontal positions and enter its heights to display your points.</p>}
      {submitted && showSolutions && <p className="solutionNote">The orange dashed outline and open circles show the correct diagram. Your entries remain visible for comparison.</p>}
    </section>

    <section className="questionCard" id="question-3">{heading(2)}<p>Complete the cumulative frequency table for the same 40 sessions. Your entries will plot the cumulative frequency polygon at the displayed boundaries.</p>
      <div className="tableWrap" tabIndex={0} role="region" aria-label="Cumulative frequency table"><table className="cumulativeTable"><caption>Cumulative counts below each boundary</caption><thead><tr><th scope="col">Time less than (min)</th>{boundaries.map(boundary => <th scope="col" key={boundary}>{boundary}</th>)}</tr></thead><tbody><tr><th scope="row">Cumulative frequency</th>{boundaries.map((boundary, i) => <td key={boundary}>{field(`cf-${i}`)}</td>)}</tr></tbody></table></div>
      <CumulativeChart heights={cumulativeHeights} showSolution={submitted && showSolutions} />
      <p className="supportText">Enter whole-number cumulative frequencies from 0 to 40. Only neighbouring entered points are joined. Check your own graph: should it ever decrease, and where should it finish?</p>
      {submitted && showSolutions && <p className="solutionNote">The orange dashed guide shows the correct cumulative frequency polygon. Its final height is the total of 40.</p>}
    </section>

    <section className="questionCard" id="question-4">{heading(3)}<p>Use the cumulative table and polygon that you constructed in Question 3. For the estimate in (d), use a straight segment between neighbouring plotted points.</p>
      <div className="answerGrid"><div><label htmlFor="answer-at-least">(a) Number of sessions lasting at least 39.5 min</label>{field("at-least")}</div><div><label htmlFor="answer-between">(b) Number of sessions with 29.5 ≤ time &lt; 49.5 min</label>{field("between")}</div><div><label htmlFor="answer-percentage">(c) Percentage of sessions below 49.5 min (%)</label>{field("percentage")}</div><div><label htmlFor="answer-estimate">(d) Estimated number of sessions below 44.5 min</label>{field("estimate")}</div></div>
      <p className="note">Distinguish a count at a class boundary from an estimate within a class. “At least 39.5” includes 39.5; “below 39.5” does not.</p>
    </section>

    <section className="questionCard" id="question-5">{heading(4)}<p>This diagram shows the numbers of computers in three community centres. Read the scale before comparing the shapes.</p><ComputerChart />
      <div className="answerGrid"><div><label htmlFor="answer-largest">(a) Which centre has the largest number of computers?</label>{field("largest")}</div><div><label htmlFor="answer-ratio-b">(b) “B has three times as many computers as A.”</label>{field("ratio-b")}</div><div><label htmlFor="answer-ratio-c">(c) “C has 2.5 times as many computers as A.”</label>{field("ratio-c")}</div><div><label htmlFor="answer-repair">(d) Which change makes the bar comparison clearer?</label>{field("repair")}</div><div><label htmlFor="answer-purpose">(e) Each student selects exactly one favourite activity. Which listed diagram best shows each activity's share of this whole group?</label>{field("purpose")}</div><div><label htmlFor="answer-evidence">(f) In two surveys, 60% and 75% choose the reading club. What else is needed to compare the actual numbers choosing it?</label>{field("evidence")}</div></div>
      {submitted && showSolutions && <><h3 className="subheading">A corrected version of the computer diagram</h3><ComputerChart corrected /><p className="solutionNote">The counts stay at 12, 18 and 30. Equal widths prevent areas from exaggerating the count ratios.</p></>}
    </section>

    <section className="actionPanel" aria-label="Check and review your work"><h2>{submitted ? "Review your checkpoint" : "Finished your answers?"}</h2><p>{submitted ? "Open the worked solutions to compare diagrams and explanations. Review and edit keeps your entries; start again clears them." : "Check all 25 answers together. Any unanswered boxes will be identified in the feedback."}</p><div className="actionButtons">{!submitted ? <button className="primaryButton" type="button" onClick={submit}>Check checkpoint</button> : <><button className="primaryButton" type="button" aria-expanded={showSolutions} aria-controls="worked-solutions" onClick={() => setShowSolutions(value => !value)}>{showSolutions ? "Hide worked solutions" : "Show worked solutions"}</button><button className="secondaryButton" type="button" onClick={edit}>Review and edit</button></>}<button className="secondaryButton" type="button" onClick={reset}>Start again</button></div></section>
    <section id="worked-solutions" className="workedSolutions" hidden={!submitted || !showSolutions}><p className="eyebrow">ANSWERS AND REASONS</p><h2>Worked solutions</h2><p>Correct graph outlines also appear in Questions 2 and 3. Switch the Question 2 view to inspect the histogram, frequency polygon or both.</p>{groups.map((group, index) => <article key={group.id}><h3>Question {index + 1} · {group.title}</h3><ul>{group.fields.map(id => <li key={id}><strong>{expectedLabel(fieldById[id])}.</strong> {fieldById[id].explanation}</li>)}</ul></article>)}</section>
    <footer className="footerLinks"><Link className="previousLink" href={`${chapterPath}/uses-and-misuses-of-statistical-diagrams`}>← Section 4: Uses and Misuses</Link><Link className="primaryLink" href={chapterPath}>Back to Chapter 7 →</Link></footer>

    <style jsx>{`
      .checkpointPage { max-width: 1180px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.65; }
      .checkpointPage :global(*) { box-sizing: border-box; }
      .checkpointPage :global(.backLink) { display: inline-block; color: #047857; font-size: 17px; font-weight: 800; margin-bottom: 26px; text-decoration: none; }
      header { margin-bottom: 28px; }
      .eyebrow { color: #6d28d9; font-size: 13px; font-weight: 900; letter-spacing: .085em; line-height: 1.5; margin: 0 0 8px; }
      h1 { font-size: clamp(36px, 5vw, 52px); line-height: 1.18; margin: 0 0 15px; letter-spacing: -.025em; }
      h2 { font-size: clamp(25px, 3vw, 32px); line-height: 1.3; margin: 0; }
      h3 { font-size: 22px; line-height: 1.4; margin: 0 0 13px; }
      p { margin: 13px 0; }
      .introduction { color: #52657e; font-size: 23px; }
      .pills, .jumpLinks { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
      .pills span { background: #ede9fe; color: #5b21b6; font-weight: 750; font-size: 14px; padding: 7px 13px; border-radius: 999px; }
      .jumpLinks { gap: 12px 24px; }
      .jumpLinks a { color: #047857; font-weight: 750; font-size: 16px; text-underline-offset: 4px; }
      .progressPanel { padding: 26px 30px; border: 1px solid #99f6e4; border-radius: 21px; background: #f0fdfa; scroll-margin-top: 24px; }
      .progressPanel h2 { font-size: 25px; }
      .progressPanel p:last-child { margin-bottom: 0; font-size: 16px; color: #435a72; }
      .progressCount { font-size: 27px; font-weight: 900; color: #0f766e; margin: 12px 0; }
      .resultGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; margin-top: 22px; }
      .resultGrid > div { padding: 16px; border-radius: 13px; border: 1px solid #b6e8df; background: white; }
      .resultGrid strong { display: block; color: #0f766e; font-size: 20px; }
      .resultGrid span { display: block; font-size: 14px; color: #52657e; margin-top: 6px; }
      .resultGrid :global(a) { display: inline-block; color: #5b21b6; font-size: 14px; font-weight: 800; margin-top: 10px; }
      .numberHelp { font-size: 15px; color: #52657e; margin: 20px 0 26px; }
      .questionCard { padding: 32px; border: 1px solid #d8e1ee; border-radius: 25px; background: white; margin-bottom: 28px; scroll-margin-top: 24px; }
      .questionHeading { display: flex; align-items: flex-start; gap: 18px; margin-bottom: 22px; }
      .questionNumber { display: grid; place-items: center; width: 54px; height: 54px; flex: 0 0 54px; border-radius: 17px; background: #ede9fe; color: #6d28d9; font-size: 27px; font-weight: 900; }
      .tableWrap { max-width: 100%; overflow-x: auto; border: 1px solid #cbd5e1; border-radius: 16px; margin: 23px 0; }
      table { width: 100%; border-collapse: collapse; font-size: 16px; line-height: 1.6; }
      .frequencyTable { min-width: 760px; }
      .cumulativeTable { min-width: 860px; }
      caption { text-align: left; padding: 15px 18px; font-weight: 800; color: #172d50; background: #f8fafc; }
      th, td { padding: 15px 13px; border-top: 1px solid #d8e1ee; text-align: center; vertical-align: top; }
      thead th { background: #0f766e; color: white; font-weight: 750; }
      tbody th { color: #172d50; font-weight: 800; }
      tbody tr:nth-child(even) { background: #f8fafc; }
      tfoot { background: #f0fdfa; font-weight: 850; }
      .frequencyTable th { width: 20%; }
      .cumulativeTable th:first-child { min-width: 160px; }
      .cumulativeTable td { min-width: 132px; }
      .singleAnswer { max-width: 400px; margin-top: 24px; }
      .singleAnswer.wide { max-width: 720px; }
      label { display: block; font-size: 16px; font-weight: 750; margin-bottom: 12px; }
      .answerGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 24px; }
      .answerGrid.fourColumns { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 17px; }
      .answerGrid > div { min-width: 0; }
      .modeButtons { display: flex; flex-wrap: wrap; gap: 11px; margin: 26px 0 18px; }
      .modeButtons button { border: 1px solid #c4b5fd; border-radius: 12px; background: white; color: #5b21b6; padding: 12px 17px; font: inherit; font-size: 15px; font-weight: 800; cursor: pointer; min-height: 46px; }
      .modeButtons button[aria-pressed="true"] { background: #6d28d9; border-color: #6d28d9; color: white; }
      .supportText { color: #52657e; font-size: 15px; }
      .note { padding: 17px 20px; background: #f0fdfa; color: #225a56; border-left: 4px solid #0f766e; border-radius: 12px; font-size: 16px; margin-top: 21px; }
      .solutionNote { padding: 16px 20px; background: #fff7ed; color: #9a3412; border: 1px solid #fed7aa; border-radius: 13px; font-size: 16px; }
      .subheading { margin-top: 28px; }
      .actionPanel { padding: 29px; background: #f5f3ff; border: 1px solid #c4b5fd; border-radius: 23px; }
      .actionPanel > p { color: #52657e; font-size: 17px; }
      .actionButtons { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 23px; }
      .primaryButton, .secondaryButton { border: 1px solid #6d28d9; border-radius: 12px; padding: 13px 19px; font: inherit; font-size: 16px; font-weight: 800; min-height: 48px; cursor: pointer; }
      .primaryButton { color: white; background: #6d28d9; }
      .secondaryButton { color: #5b21b6; background: white; }
      .workedSolutions { padding: 30px; border: 1px solid #99f6e4; background: #f0fdfa; border-radius: 23px; margin-top: 28px; }
      .workedSolutions article { margin-top: 26px; }
      .workedSolutions li { margin: 11px 0; font-size: 16px; }
      .workedSolutions ul { padding-left: 24px; }
      .footerLinks { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 22px; margin-top: 30px; }
      .checkpointPage :global(.previousLink) { color: #047857; font-size: 16px; font-weight: 800; text-underline-offset: 4px; }
      .checkpointPage :global(.primaryLink) { display: inline-block; padding: 14px 20px; border-radius: 13px; background: #0f766e; color: white; font-size: 16px; font-weight: 800; text-decoration: none; }
      .checkpointPage :global(a:focus-visible), button:focus-visible, .checkpointPage :global(input:focus-visible), .checkpointPage :global(select:focus-visible), .checkpointPage :global(.diagramScroll:focus-visible), .tableWrap:focus-visible, .progressPanel:focus { outline: 3px solid #2563eb; outline-offset: 4px; }
      @media (max-width: 820px) { .questionCard { padding: 26px; } .answerGrid.fourColumns { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      @media (max-width: 540px) { .checkpointPage { width: calc(100% - 28px); margin-top: 27px; font-size: 17px; } .introduction { font-size: 20px; } .questionCard { padding: 22px 17px; } .questionHeading { gap: 12px; } .questionNumber { width: 42px; height: 42px; flex-basis: 42px; font-size: 23px; border-radius: 13px; } .eyebrow { font-size: 11px; } .answerGrid { grid-template-columns: 1fr; } .answerGrid.fourColumns { gap: 17px 12px; } .modeButtons button { flex: 1 1 100%; } .actionButtons button { width: 100%; } .progressPanel, .workedSolutions, .actionPanel { padding: 24px 19px; } }
    `}</style>
  </main>;
}
