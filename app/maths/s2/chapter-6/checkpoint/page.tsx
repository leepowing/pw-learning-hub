"use client";
import { reasonRef } from "@/data/maths/reasons/reasonBank";
import { DualReason, ReasonContent } from "@/components/maths/DualReason";



import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-6/checkpoint/page.tsx
// This checkpoint is a session activity. It does not write flashcard records.
type XY = readonly [number, number];
type Option = { value: string; label: string };
type AnswerFieldSpec = {
  id: string;
  label: string;
  kind: "number" | "select" | "radio";
  expected: string;
  options?: Option[];
  explanation: string;
};
type ProofRow = readonly [statement: ReactNode, reason: ReactNode];
const navy = "#172d50", purple = "#6d28d9", teal = "#0f766e";
const chapterPath = "/maths/s2/chapter-6";

function polar(center: XY, radius: number, degrees: number): XY {
  return [center[0] + radius * Math.cos(degrees * Math.PI / 180), center[1] - radius * Math.sin(degrees * Math.PI / 180)];
}
function Segment({ from, to }: { from: XY; to: XY }) {
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={navy} strokeWidth={3} strokeLinecap="round" />;
}
function Point({ at, label, offset = [0, 0] }: { at: XY; label: string; offset?: XY }) {
  return <text x={at[0] + offset[0]} y={at[1] + offset[1]} fill={navy} fontSize={22} fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">{label}</text>;
}
function Angle({ center, from, to, label, color = purple, radius = 34, labelRadius = 60 }: { center: XY; from: XY; to: XY; label: string; color?: string; radius?: number; labelRadius?: number }) {
  const direction = (point: XY) => Math.atan2(center[1] - point[1], point[0] - center[0]) * 180 / Math.PI;
  const start = direction(from), turn = ((direction(to) - start + 540) % 360) - 180;
  const first = polar(center, radius, start), last = polar(center, radius, start + turn), textAt = polar(center, labelRadius, start + turn / 2);
  return <g data-angle={label} data-angle-degrees={Math.abs(turn)}><path d={`M ${first[0]} ${first[1]} A ${radius} ${radius} 0 0 ${turn < 0 ? 1 : 0} ${last[0]} ${last[1]}`} fill="none" stroke={color} strokeWidth={2.5} /><text x={textAt[0]} y={textAt[1] + 6} fill={color} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize={23} fontWeight={700}>{label}</text></g>;
}
function ParallelMark({ at }: { at: XY }) {
  return <path data-parallel-mark="" d={`M ${at[0] - 6} ${at[1] - 6} L ${at[0] + 3} ${at[1]} L ${at[0] - 6} ${at[1] + 6}`} fill="none" stroke={teal} strokeWidth={3} />;
}
function Diagram({ label, children, height = 320 }: { label: string; children: ReactNode; height?: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 480 ${height}`} role="img" aria-label={label} style={{ display: "block", width: "100%", height: "auto" }}>{children}</svg>;
}
function PerpendicularDiagram() {
  const o: XY = [240, 250], a: XY = [45, 250], d: XY = [435, 250], b = polar(o, 200, 120), c: XY = [240, 43];
  return <Diagram label="AOD is a straight line. Angles AOB, BOC and COD are 4x, 2x and 6x. No right-angle mark is given.">
    <Segment from={a} to={d} /><Segment from={o} to={b} /><Segment from={o} to={c} />
    <Angle center={o} from={a} to={b} label="4x" radius={43} labelRadius={81} /><Angle center={o} from={b} to={c} label="2x" radius={61} labelRadius={99} color={teal} /><Angle center={o} from={c} to={d} label="6x" radius={43} labelRadius={73} />
    <Point at={a} label="A" offset={[-12, 7]} /><Point at={d} label="D" offset={[14, 7]} /><Point at={b} label="B" offset={[-13, -15]} /><Point at={c} label="C" offset={[12, -15]} /><Point at={o} label="O" offset={[-7, 29]} />
  </Diagram>;
}
function ParallelChainDiagram() {
  const tangent = Math.tan(82 * Math.PI / 180), b: XY = [110, 115], e: XY = [315, 260], f: XY = [95, 260];
  const a: XY = [b[0] + 70 / tangent, 45], d: XY = [e[0] + 145 / tangent, 115], c: XY = [e[0] + 215 / tangent, 45];
  return <Diagram label="BD is given parallel to FE. C, D and E are collinear in that order. Angle ABD is 82 degrees and angle CEF is 98 degrees. Prove AB parallel to CE.">
    <Segment from={b} to={a} /><Segment from={b} to={d} /><Segment from={e} to={c} /><Segment from={f} to={e} />
    <ParallelMark at={[210, 115]} /><ParallelMark at={[202, 260]} />
    <Angle center={b} from={d} to={a} label="82°" radius={26} labelRadius={58} /><Angle center={e} from={c} to={f} label="98°" radius={31} labelRadius={63} color={teal} />
    <Point at={a} label="A" offset={[-3, -17]} /><Point at={b} label="B" offset={[-12, 27]} /><Point at={c} label="C" offset={[10, -17]} /><Point at={d} label="D" offset={[22, 7]} /><Point at={e} label="E" offset={[5, 29]} /><Point at={f} label="F" offset={[-13, 28]} />
  </Diagram>;
}
function ExteriorParallelDiagram() {
  const a: XY = [240, 45], b: XY = [70, 230], c: XY = [290, 230], d: XY = [315, 322.5], e: XY = [441, 322.5];
  return <Diagram label="A, C and D are collinear in that order. Angles BAC, ABC and ADE are a, b and x. The exterior angle BCD is e. No parallel arrows are supplied." height={380}>
    <Segment from={a} to={b} /><Segment from={b} to={c} /><Segment from={a} to={d} /><Segment from={d} to={e} />
    <Angle center={a} from={b} to={c} label="a" radius={32} labelRadius={62} /><Angle center={b} from={c} to={a} label="b" color={teal} radius={32} labelRadius={61} /><Angle center={c} from={b} to={d} label="e" color="#b45309" radius={25} labelRadius={48} /><Angle center={d} from={e} to={a} label="x" radius={29} labelRadius={57} />
    <Point at={a} label="A" offset={[0, -20]} /><Point at={b} label="B" offset={[-13, 25]} /><Point at={c} label="C" offset={[20, 0]} /><Point at={d} label="D" offset={[-3, 29]} /><Point at={e} label="E" offset={[0, 28]} />
  </Diagram>;
}

const answerFields: AnswerFieldSpec[] = [
  { id: "q1-total", label: "Question 1: sum of 4x, 2x and 6x, in degrees", kind: "number", expected: "180", explanation: "The three adjacent angles together form the straight angle AOD." + reasonRef("angles.straightLine", {"variant":"textbook2"}) },
  { id: "q1-straight-reason", label: "Question 1: reason for the angle-sum equation", kind: "select", expected: "straight", options: [{ value: "point", label: "Angles at a point" }, { value: "straight", label: "Adjacent angles on straight line AOD" }, { value: "triangle", label: "Angle sum of a triangle" }], explanation: "The given condition is a straight line. These three angles make half a turn, not a complete turn." + reasonRef("angles.straightLine", {"variant":"textbook2"}) },
  { id: "q1-x", label: "Question 1: value of x in degrees", kind: "number", expected: "15", explanation: "4x + 2x + 6x = 12x = 180°, so x = 15°." },
  { id: "q1-angle", label: "Question 1: angle COD in degrees", kind: "number", expected: "90", explanation: "∠COD = 6x = 6 × 15° = 90°." },
  { id: "q1-perpendicular-reason", label: "Question 1: reason that OC is perpendicular to AD", kind: "select", expected: "perpendicular", options: [{ value: "appearance", label: "The drawing looks perpendicular" }, { value: "parallel", label: "Corresponding angles are equal" }, { value: "perpendicular", label: "Definition of perpendicular lines" }], explanation: "OC meets AD at a right angle, which establishes perpendicularity." + reasonRef("geometry.perpendicular") },
  { id: "q2-angle", label: "Question 2: angle CDB in degrees", kind: "number", expected: "98", explanation: "∠CDB corresponds to ∠CEF, so it is 98° because BD // FE." + reasonRef("parallel.corresponding", {"params":{"line1":"BD","line2":"FE"},"variant":"textbook2"}) },
  { id: "q2-corresponding-reason", label: "Question 2: reason that angle CDB equals angle CEF", kind: "select", expected: "corresponding", options: [{ value: "alternate", label: "Alternate angles, BD // FE" }, { value: "corresponding", label: "Corresponding angles, BD // FE" }, { value: "opposite", label: "Vertically opposite angles" }], explanation: "The two angles occupy corresponding positions when CE cuts the given parallel lines BD and FE." + reasonRef("parallel.corresponding", {"params":{"line1":"BD","line2":"FE"},"variant":"textbook2"}) },
  { id: "q2-total", label: "Question 2: sum of angles ABD and CDB in degrees", kind: "number", expected: "180", explanation: "∠ABD + ∠CDB = 82° + 98° = 180°." },
  { id: "q2-parallel-reason", label: "Question 2: reason that AB is parallel to CE", kind: "select", expected: "interior", options: [{ value: "corresponding", label: "Corresponding angles are equal" }, { value: "interior", label: "Interior angles on the same side sum to 180°" }, { value: "opposite", label: "Vertically opposite angles are equal" }], explanation: "Apply the converse for supplementary interior angles on the same side, with BD as the transversal." + reasonRef("parallel.converseCoInterior", {"params":{"line1":"AB","line2":"CE"},"variant":"textbook1"}) },
  { id: "q3-expression", label: "Question 3: expression for exterior angle BCD", kind: "select", expected: "a+b", options: [{ value: "a+x", label: "a + x" }, { value: "a+b", label: "a + b" }, { value: "b+x", label: "b + x" }], explanation: "The exterior angle at C equals the sum of the two remote interior angles a and b." + reasonRef("triangle.exteriorAngle", {"variant":"textbook2"}) },
  { id: "q3-exterior-reason", label: "Question 3: reason for the expression for angle BCD", kind: "select", expected: "exterior", options: [{ value: "straight", label: "Adjacent angles on a straight line" }, { value: "parallel", label: "Alternate angles, BC // DE" }, { value: "exterior", label: "Exterior angle of triangle ABC" }], explanation: "AC is extended to D, so ∠BCD is an exterior angle of triangle ABC. Parallelism has not yet been proved." + reasonRef("triangle.exteriorAngle", {"variant":"textbook2"}) },
  { id: "q3-parallel-reason", label: "Question 3: reason that BC is parallel to DE", kind: "select", expected: "alternate", options: [{ value: "alternate", label: "Alternate angles are equal" }, { value: "corresponding", label: "Corresponding angles are equal" }, { value: "interior", label: "Interior angles on the same side sum to 180°" }], explanation: "∠BCD and ∠ADE are alternate angles for lines BC and DE with AD as the transversal." + reasonRef("parallel.converseAlternate", {"params":{"line1":"BC","line2":"DE"},"variant":"textbook1"}) },
  { id: "q4-hypothesis", label: "Question 4: identify the hypothesis", kind: "radio", expected: "parallel", options: [{ value: "equal", label: "The corresponding angles are equal." }, { value: "parallel", label: "The two lines are parallel." }, { value: "measure", label: "The diagram has been measured." }], explanation: "The hypothesis is the condition in the if-part. The equality of corresponding angles is the conclusion." },
  { id: "q5-proof", label: "Question 5: choose a valid general proof", kind: "radio", expected: "deduction", options: [{ value: "measure", label: "Measure three triangles and accept the result for every triangle." }, { value: "circular", label: "Use the angle-sum theorem itself as the reason for the angle-sum theorem." }, { value: "deduction", label: "Use a parallel through a vertex, alternate angles and a straight angle." }], explanation: "An argument using an arbitrary triangle and established facts proves the result generally. Examples and circular reasoning do not." },
  { id: "q6-theorem", label: "Question 6: identify the role of a proved statement", kind: "radio", expected: "theorem", options: [{ value: "definition", label: "Definition: it tells us what the word triangle means." }, { value: "theorem", label: "Theorem: it is a result established by proof." }, { value: "postulate", label: "Postulate: it is being accepted as a starting assumption here." }], explanation: "In the Euclidean geometry studied in this chapter, the triangle angle-sum result is a theorem. Section 3 established it from earlier facts." },
  { id: "q7-equality", label: "Question 7: choose the equality principle", kind: "radio", expected: "same", options: [{ value: "same", label: "Quantities equal to the same quantity are equal to each other." }, { value: "whole", label: "A whole is greater than a proper part." }, { value: "circle", label: "A circle can be drawn with a chosen centre and radius." }], explanation: "AC and BC both equal AB. Euclid's first common notion therefore gives AC = BC." },
];
const fieldById = Object.fromEntries(answerFields.map(field => [field.id, field]));
const sectionLinks = [
  { number: 1, title: "Deductive Reasoning", route: "introduction-to-deductive-reasoning" },
  { number: 2, title: "Intersecting and Parallel Lines", route: "proofs-relating-to-intersecting-and-parallel-lines" },
  { number: 3, title: "Triangle Proofs", route: "proofs-relating-to-triangles" },
  { number: 4, title: "Euclid and Elements", route: "euclid-and-elements" },
];
const questionGroups = [
  { number: 1, title: "Prove perpendicularity", section: 2, fields: ["q1-total", "q1-straight-reason", "q1-x", "q1-angle", "q1-perpendicular-reason"] },
  { number: 2, title: "Prove a second parallel pair", section: 2, fields: ["q2-angle", "q2-corresponding-reason", "q2-total", "q2-parallel-reason"] },
  { number: 3, title: "Use an exterior angle", section: 3, fields: ["q3-expression", "q3-exterior-reason", "q3-parallel-reason"] },
  { number: 4, title: "Identify the hypothesis", section: 1, fields: ["q4-hypothesis"] },
  { number: 5, title: "Recognise a valid proof", section: 1, fields: ["q5-proof"] },
  { number: 6, title: "Identify a theorem", section: 4, fields: ["q6-theorem"] },
  { number: 7, title: "Use a common notion", section: 4, fields: ["q7-equality"] },
];
const conceptPrompts = [
  { group: 3, field: "q4-hypothesis", prompt: "If two lines cut by a transversal are parallel, then their corresponding angles are equal. What is the hypothesis of this statement?" },
  { group: 4, field: "q5-proof", prompt: "Which method can establish the angle-sum theorem for every triangle in Euclidean plane geometry?" },
  { group: 5, field: "q6-theorem", prompt: "The interior angles of a triangle add up to 180°. What role does this statement have in the geometry studied in this chapter?" },
  { group: 6, field: "q7-equality", prompt: "In a construction, AC = AB and BC = AB. Which principle allows you to conclude that AC = BC?" },
];

function isCorrect(field: AnswerFieldSpec, raw: string): boolean {
  if (field.kind !== "number") return raw === field.expected;
  const value = raw.normalize("NFKC").trim().replace(/\s*°$/, "").trim();
  return /^[+−-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value) && Number(value.replace("−", "-")) === Number(field.expected);
}
function expectedLabel(field: AnswerFieldSpec): string {
  return field.kind === "number" ? field.expected + "°" : field.options?.find(option => option.value === field.expected)?.label ?? field.expected;
}
function AnswerField({ field, value, submitted, onChange }: { field: AnswerFieldSpec; value: string; submitted: boolean; onChange: (id: string, value: string) => void }) {
  const correct = isCorrect(field, value), feedbackId = "feedback-" + field.id;
  const border = submitted ? (correct ? "#059669" : "#c2410c") : "#94a3b8";
  const controlStyle = { font: "inherit", fontSize: 16, color: navy, border: `1px solid ${border}`, borderRadius: 10, padding: "10px 12px", minHeight: 44, background: "white", maxWidth: "100%", boxSizing: "border-box" as const };
  return <div data-answer-field={field.id} style={{ minWidth: 0 }}>
    {field.kind === "number" ? <div style={{ display: "flex", alignItems: "center", gap: 7 }}><input id={"answer-" + field.id} type="text" inputMode="decimal" maxLength={24} autoComplete="off" spellCheck={false} value={value} disabled={submitted} aria-label={field.label} aria-invalid={submitted && !correct} aria-describedby={submitted ? feedbackId : "numberHelp"} onChange={event => onChange(field.id, event.target.value)} style={{ ...controlStyle, width: 112 }} /><span aria-hidden="true">°</span></div>
      : field.kind === "select" ? <select id={"answer-" + field.id} value={value} disabled={submitted} aria-label={field.label} aria-invalid={submitted && !correct} aria-describedby={submitted ? feedbackId : undefined} onChange={event => onChange(field.id, event.target.value)} style={{ ...controlStyle, width: "100%" }}><option value="">Choose an answer…</option>{field.options?.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select>
      : <div role="radiogroup" aria-label={field.label} aria-describedby={submitted ? feedbackId : undefined} style={{ display: "grid", gap: 10 }}>{field.options?.map((option, index) => <label key={option.value} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 15, border: `1px solid ${value === option.value ? border : "#cbd5e1"}`, borderRadius: 12, background: value === option.value ? "#f5f3ff" : "white", cursor: submitted ? "default" : "pointer", fontSize: 17 }}><input id={"answer-" + field.id + (index === 0 ? "" : "-" + index)} type="radio" name={field.id} value={option.value} checked={value === option.value} disabled={submitted} onChange={() => onChange(field.id, option.value)} style={{ marginTop: 6, width: 18, height: 18, flexShrink: 0, accentColor: purple }} /><span>{option.label}</span></label>)}</div>}
    {submitted && <div id={feedbackId} data-correct={correct ? "true" : "false"} style={{ marginTop: 9, fontSize: 15, lineHeight: 1.55, padding: "10px 12px", borderRadius: 10, background: correct ? "#ecfdf5" : "#fff7ed", color: correct ? "#065f46" : "#9a3412" }}><strong>{correct ? "Correct. " : "Review. "}</strong>{!correct && <span>Answer: <strong>{expectedLabel(field)}</strong>. </span>}<ReasonContent>{field.explanation}</ReasonContent></div>}
  </div>;
}
function ProofTable({ caption, rows }: { caption: string; rows: readonly ProofRow[] }) {
  return <div style={{ overflowX: "auto", margin: "22px 0", border: "1px solid #cbd5e1", borderRadius: 16 }}><table style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", textAlign: "left", background: "white", fontSize: 16, lineHeight: 1.6 }}><caption style={{ textAlign: "left", padding: "14px 16px", background: "#f8fafc", color: "#52657e", fontWeight: 700 }}>{caption}</caption><thead><tr><th scope="col" style={{ width: "44%", padding: "13px 12px", background: teal, color: "white" }}>Statement</th><th scope="col" style={{ padding: "13px 12px", background: teal, color: "white" }}>Reason</th></tr></thead><tbody>{rows.map(([statement, reason], index) => <tr key={index}><td style={{ padding: "15px 12px", borderTop: "1px solid #dce4f1", verticalAlign: "top", overflowWrap: "anywhere" }}>{statement}</td><td style={{ padding: "15px 12px", borderTop: "1px solid #dce4f1", borderLeft: "1px solid #dce4f1", verticalAlign: "top", overflowWrap: "anywhere" }}><ReasonContent>{reason}</ReasonContent></td></tr>)}</tbody></table></div>;
}

export default function S2ChapterSixCheckpointPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLElement>(null);
  const answeredCount = answerFields.filter(field => (answers[field.id] ?? "").trim() !== "").length;
  const score = answerFields.filter(field => isCorrect(field, answers[field.id] ?? "")).length;
  const percentage = Math.round(score / answerFields.length * 100);
  const groupScore = (group: typeof questionGroups[number]) => group.fields.filter(id => isCorrect(fieldById[id], answers[id] ?? "")).length;
  const reviewSections = sectionLinks.filter(section => questionGroups.some(group => group.section === section.number && groupScore(group) < group.fields.length));

  useEffect(() => { if (submitted) resultRef.current?.focus(); }, [submitted]);
  function changeAnswer(id: string, value: string) {
    if (submitted) return;
    setAnswers(previous => ({ ...previous, [id]: value }));
    setError("");
  }
  function submitCheckpoint() {
    if (submitted) return;
    const missing = answerFields.filter(field => !(answers[field.id] ?? "").trim());
    if (missing.length) {
      setError(`Complete the ${missing.length} remaining answer${missing.length === 1 ? "" : "s"} before submitting.`);
      document.getElementById("answer-" + missing[0].id)?.focus();
      return;
    }
    setError("");
    setSubmitted(true);
  }
  function restart() {
    setAnswers({});
    setSubmitted(false);
    setError("");
    window.requestAnimationFrame(() => document.getElementById("answer-q1-total")?.focus());
  }
  const slot = (id: string) => <AnswerField field={fieldById[id]} value={answers[id] ?? ""} submitted={submitted} onChange={changeAnswer} />;

  return <main className="checkpointPage">
    <Link href={chapterPath} className="backLink">← Back to Chapter 6</Link>
    <header><p className="eyebrow">S2 · CHAPTER 6 · CHECKPOINT</p><h1>Angles and Parallel Lines (II)</h1><p className="introduction">Complete three geometric proofs and four concept questions. Give the angle values and choose reasons that justify each step.</p><div className="facts"><span>7 questions</span><span>{answerFields.length} marks</span><span>1 mark per answer field</span><span>Sections 1–4</span></div><p className="supportText">Your score and explanations appear after submission. This activity resets when you reload the page.</p></header>

    {submitted && <section ref={resultRef} tabIndex={-1} className="resultCard" aria-labelledby="resultTitle"><p className="eyebrow">CHECKPOINT COMPLETE</p><h2 id="resultTitle">Your result</h2><p className="scoreDisplay" aria-label="Checkpoint score">{score}<span> / {answerFields.length}</span></p><p className="percentage">{percentage}%</p><p>{score === answerFields.length ? "Every answer is correct. Read the complete proofs below to review how the reasons connect." : "Review the marked answers below, then revisit the linked sections before trying again."}</p><div className="breakdown">{questionGroups.map(group => <div key={group.number}><span>Q{group.number} · {group.title}</span><strong>{groupScore(group)} / {group.fields.length}</strong></div>)}</div>{reviewSections.length > 0 && <div className="reviewLinks"><h3>Sections to revisit</h3>{reviewSections.map(section => <Link key={section.number} href={chapterPath + "/" + section.route}>Section {section.number} · {section.title} →</Link>)}</div>}<div className="actions"><button type="button" className="primaryButton" onClick={restart}>Try again</button><Link href={chapterPath} className="secondaryLink">Back to Chapter 6</Link></div></section>}

    <form noValidate onSubmit={event => { event.preventDefault(); submitCheckpoint(); }}>
      <section className="progressCard" aria-label="Checkpoint completion"><div className="progressText"><strong>{submitted ? "Answers submitted" : "Complete every answer field"}</strong><span role="status" aria-label="Answer completion">{answeredCount} of {answerFields.length} answered</span></div><progress value={answeredCount} max={answerFields.length} aria-label="Answer completion progress" /><p id="numberHelp">For angle values, enter a number such as 45. An optional ° symbol is accepted.</p>{error && <p className="errorMessage" role="alert">{error}</p>}</section>

      <section className="questionCard" aria-labelledby="q1Title"><div className="questionHeading"><span className="questionNumber">1</span><div><p className="questionLabel">SECTION 2 · 5 MARKS</p><h2 id="q1Title">Prove that OC is perpendicular to AD</h2></div></div><p>AOD is a straight line. The adjacent angles <strong>∠AOB = 4x</strong>, <strong>∠BOC = 2x</strong> and <strong>∠COD = 6x</strong> are shown below. Complete the proof that <strong>OC ⟂ AD</strong>.</p><figure><PerpendicularDiagram /><figcaption>The angle expressions and the straight line are given. No right-angle mark is supplied.</figcaption></figure>
        <ProofTable caption="Complete the angle calculation and justify the conclusion" rows={[
          [<><p>4x + 2x + 6x =</p>{slot("q1-total")}</>, slot("q1-straight-reason")],
          [<><p>x =</p>{slot("q1-x")}</>, "Collect like terms, then divide both sides by 12."],
          [<><p>∠COD = 6x =</p>{slot("q1-angle")}</>, "Substitute the value of x."],
          [<strong>∴ OC ⟂ AD</strong>, slot("q1-perpendicular-reason")]
        ]} />
        {submitted && <details className="solution"><summary>Read the complete proof for Question 1</summary><div className="solutionBody"><p>4x + 2x + 6x = 180° <span><ReasonContent>{reasonRef("angles.straightLine", {"variant":"textbook2"})}</ReasonContent></span></p><p>12x = 180°, so x = 15°.</p><p>∠COD = 6 × 15° = 90°.</p><p><strong>∴ OC ⟂ AD</strong>, <DualReason reasonId="geometry.perpendicular" heading /></p></div></details>}
      </section>

      <section className="questionCard" aria-labelledby="q2Title"><div className="questionHeading"><span className="questionNumber">2</span><div><p className="questionLabel">SECTION 2 · 4 MARKS</p><h2 id="q2Title">Use one parallel pair to prove another</h2></div></div><p>C, D and E are collinear in that order, and <strong>BD // FE</strong>. Given <strong>∠ABD = 82°</strong> and <strong>∠CEF = 98°</strong>, prove that <strong>AB // CE</strong>.</p><figure><ParallelChainDiagram /><figcaption>The matching arrows mark BD // FE, the given parallel pair.</figcaption></figure>
        <ProofTable caption="Use a theorem first, then a converse" rows={[
          [<><p>∠CDB = ∠CEF =</p>{slot("q2-angle")}</>, slot("q2-corresponding-reason")],
          [<><p>∠ABD + ∠CDB =</p>{slot("q2-total")}</>, "Substitute the angle values and add."],
          [<strong>∴ AB // CE</strong>, slot("q2-parallel-reason")]
        ]} />
        {submitted && <details className="solution"><summary>Read the complete proof for Question 2</summary><div className="solutionBody"><p>∠CDB = ∠CEF = 98° <span><ReasonContent>{reasonRef("parallel.corresponding", {"params":{"line1":"BD","line2":"FE"},"variant":"textbook2"})}</ReasonContent></span></p><p>∠ABD + ∠CDB = 82° + 98° = 180°.</p><p><strong>∴ AB // CE</strong> <span><ReasonContent>{reasonRef("parallel.converseCoInterior", {"params":{"line1":"AB","line2":"CE"},"variant":"textbook1"})}</ReasonContent></span></p><p>For the final step, BD is the transversal. The first step used the given parallel lines; the final step proves a different pair parallel.</p></div></details>}
      </section>

      <section className="questionCard" aria-labelledby="q3Title"><div className="questionHeading"><span className="questionNumber">3</span><div><p className="questionLabel">SECTION 3 · 3 MARKS</p><h2 id="q3Title">Use an exterior angle to prove parallel lines</h2></div></div><p>A, C and D are collinear in that order. In triangle ABC, <strong>∠BAC = a</strong> and <strong>∠ABC = b</strong>. Also, <strong>∠ADE = x</strong>. Given <strong>a + b = x</strong>, prove that <strong>BC // DE</strong>. Let e = ∠BCD.</p><figure><ExteriorParallelDiagram /><figcaption>BC // DE is the required conclusion. No parallel marks are given.</figcaption></figure>
        <ProofTable caption="Establish an angle equality before concluding parallelism" rows={[
          [<><p>∠BCD = e =</p>{slot("q3-expression")}</>, slot("q3-exterior-reason")],
          ["∠BCD = ∠ADE = x", "Substitute the given relation a + b = x and the angle label."],
          [<strong>∴ BC // DE</strong>, slot("q3-parallel-reason")]
        ]} />
        {submitted && <details className="solution"><summary>Read the complete proof for Question 3</summary><div className="solutionBody"><p>∠BCD = a + b <span><ReasonContent>{reasonRef("triangle.exteriorAngle", {"variant":"textbook2"})}</ReasonContent></span></p><p>Since a + b = x, ∠BCD = ∠ADE.</p><p><strong>∴ BC // DE</strong> <span><ReasonContent>{reasonRef("parallel.converseAlternate", {"params":{"line1":"BC","line2":"DE"},"variant":"textbook1"})}</ReasonContent></span></p><p>The equal angles lie on opposite sides of transversal AD and between BC and DE. Do not assume BC // DE at the start of this proof.</p></div></details>}
      </section>

      <section className="questionCard" aria-labelledby="conceptTitle"><p className="questionLabel">SECTIONS 1 AND 4 · 4 MARKS</p><h2 id="conceptTitle">Check the reasoning behind a proof</h2>{conceptPrompts.map(item => {
        const group = questionGroups[item.group];
        return <fieldset className="conceptQuestion" key={item.field}><legend><strong>Question {group.number} · 1 mark</strong><br />{item.prompt}</legend>{slot(item.field)}</fieldset>;
      })}</section>

      <section className="submitCard">{submitted ? <><h2>Review your marked answers</h2><p>Your submitted answers are locked so the result stays consistent. Start a new attempt when you are ready.</p><div className="actions"><button type="button" className="primaryButton" onClick={restart}>Try again</button><Link href={chapterPath} className="secondaryLink">Back to Chapter 6</Link></div></> : <><h2>Ready to check your work?</h2><p>Complete all {answerFields.length} answer fields. Each number or selected response is worth one mark.</p><button type="submit" className="primaryButton">Submit Checkpoint →</button></>}</section>
    </form>

    <style jsx>{`
      .checkpointPage { max-width: 1120px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.65; }
      .checkpointPage :global(*) { box-sizing: border-box; }
      .checkpointPage :global(.backLink) { display: inline-block; margin-bottom: 25px; color: #047857; font-size: 17px; font-weight: 800; text-decoration: none; }
      header { margin-bottom: 28px; }
      h1 { font-size: clamp(34px, 4.8vw, 52px); line-height: 1.15; letter-spacing: -0.025em; margin: 0 0 18px; }
      h2 { font-size: clamp(24px, 3vw, 32px); line-height: 1.3; margin: 0 0 10px; }
      h3 { font-size: 21px; margin: 0 0 10px; }
      p { margin: 12px 0; }
      .eyebrow, .questionLabel { color: #6d28d9; font-size: 13px; line-height: 1.5; font-weight: 900; letter-spacing: .1em; margin: 0 0 8px; }
      .introduction { font-size: 20px; color: #52657e; max-width: 940px; }
      .supportText { color: #52657e; font-size: 15px; }
      .facts { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
      .facts span { background: #f5f3ff; border: 1px solid #ddd6fe; padding: 6px 13px; border-radius: 999px; color: #5b21b6; font-size: 14px; font-weight: 750; }
      .questionCard, .progressCard, .submitCard, .resultCard { background: white; border: 1px solid #dce4f1; border-radius: 25px; margin: 0 0 24px; padding: 32px; box-shadow: 0 8px 25px rgba(27,42,74,.035); }
      .questionHeading { display: flex; align-items: flex-start; gap: 17px; margin-bottom: 22px; }
      .questionHeading > div { min-width: 0; }
      .questionNumber { display: grid; place-items: center; flex-shrink: 0; width: 54px; height: 54px; border-radius: 17px; background: #ede9fe; color: #6d28d9; font-size: 25px; font-weight: 850; }
      figure { max-width: 540px; margin: 24px auto; background: #f8fafc; border: 1px solid #dce4f1; padding: 14px; border-radius: 19px; }
      figcaption { text-align: center; color: #52657e; font-size: 14px; line-height: 1.55; padding: 5px 8px 10px; }
      .progressCard { padding: 23px 28px; background: #faf8ff; border-color: #ddd6fe; }
      .progressText { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; }
      .progressText span { font-size: 16px; font-weight: 750; }
      progress { display: block; width: 100%; height: 13px; accent-color: #7c3aed; }
      .progressCard p { font-size: 15px; color: #52657e; margin-bottom: 0; }
      .progressCard .errorMessage { background: #fff1f2; border: 1px solid #fecdd3; color: #9f1239; padding: 13px 15px; border-radius: 12px; font-weight: 700; }
      .conceptQuestion { min-width: 0; border: 1px solid #dce4f1; border-radius: 17px; padding: 20px; margin: 27px 0; }
      legend { max-width: 100%; padding: 0 8px; font-size: 18px; line-height: 1.6; }
      legend strong { display: inline-block; color: #6d28d9; font-size: 14px; margin-bottom: 7px; }
      .solution { margin-top: 22px; border: 1px solid #c4b5fd; border-radius: 16px; background: #faf8ff; }
      .solution summary { padding: 17px 21px; color: #5b21b6; font-weight: 800; cursor: pointer; }
      .solutionBody { padding: 0 21px 18px; }
      .solutionBody span { color: #0f766e; font-size: 16px; }
      .resultCard { background: #ecfdf5; border-color: #86efac; }
      .resultCard .eyebrow { color: #047857; }
      .scoreDisplay { margin: 10px 0 0; font-size: 66px; line-height: 1.2; color: #065f46; font-weight: 900; }
      .scoreDisplay span { font-size: 32px; font-weight: 700; }
      .percentage { font-size: 25px; color: #047857; font-weight: 800; }
      .breakdown { margin: 24px 0; border: 1px solid #a7f3d0; border-radius: 15px; background: white; overflow: hidden; }
      .breakdown > div { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; padding: 12px 17px; border-bottom: 1px solid #d1fae5; font-size: 16px; }
      .breakdown > div:last-child { border-bottom: 0; }
      .breakdown strong { flex-shrink: 0; color: #065f46; }
      .reviewLinks { display: grid; gap: 9px; margin: 24px 0; }
      .reviewLinks :global(a) { display: block; padding: 11px 15px; background: white; border: 1px solid #a7f3d0; border-radius: 11px; font-size: 16px; color: #047857; font-weight: 750; text-decoration: none; }
      .actions { display: flex; flex-wrap: wrap; gap: 13px; align-items: center; margin-top: 24px; }
      .primaryButton { border: 0; border-radius: 13px; padding: 15px 23px; background: #6d28d9; color: white; font: inherit; font-size: 17px; font-weight: 850; min-height: 48px; cursor: pointer; }
      .primaryButton:hover { background: #5b21b6; }
      .checkpointPage :global(.secondaryLink) { display: inline-block; border: 1px solid #a7f3d0; border-radius: 13px; padding: 13px 20px; color: #047857; background: white; font-size: 16px; font-weight: 800; text-decoration: none; }
      .checkpointPage :global(input:focus-visible), .checkpointPage :global(select:focus-visible), button:focus-visible, summary:focus-visible, .checkpointPage :global(a:focus-visible), .resultCard:focus-visible { outline: 3px solid #2563eb; outline-offset: 3px; }
      .checkpointPage :global(input:disabled), .checkpointPage :global(select:disabled) { opacity: 1; -webkit-text-fill-color: #172d50; cursor: default; }
      .submitCard { background: #f5f3ff; border-color: #ddd6fe; }
      @media (max-width: 700px) { figure { max-width: 500px; } }
      @media (max-width: 520px) { .checkpointPage { width: calc(100% - 28px); margin-top: 26px; font-size: 17px; } .questionCard, .resultCard, .submitCard { padding: 22px 16px; border-radius: 20px; } .progressCard { padding: 20px 17px; } .questionHeading { gap: 12px; } .questionNumber { width: 42px; height: 42px; border-radius: 13px; font-size: 21px; } .introduction { font-size: 18px; } figure { padding: 8px; } .conceptQuestion { padding: 15px 10px; } legend { font-size: 17px; } .solution summary { padding: 15px; } .solutionBody { padding: 0 15px 15px; } .scoreDisplay { font-size: 55px; } }
    `}</style>
  </main>;
}
