"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-6/proofs-relating-to-intersecting-and-parallel-lines/page.tsx
// Self-check answers are temporary React state and do not change cloud progress.
type Relationship = "alternate" | "corresponding" | "interior";
type ProofRow = readonly [statement: string, reason: string];
const navy = "#172d50", purple = "#6d28d9", teal = "#0f766e";

function polar(cx: number, cy: number, radius: number, angle: number) {
  return [cx + radius * Math.cos(angle * Math.PI / 180), cy - radius * Math.sin(angle * Math.PI / 180)];
}
function Segment({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={navy} strokeWidth={3} strokeLinecap="round" />;
}
function Point({ x, y, label }: { x: number; y: number; label: string }) {
  return <text x={x} y={y} fill={navy} fontSize={21} fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">{label}</text>;
}
function Angle({ cx, cy, start, end, label, color = purple, radius = 36, labelRadius = 62 }: {
  cx: number; cy: number; start: number; end: number; label: string; color?: string; radius?: number; labelRadius?: number;
}) {
  const [x1, y1] = polar(cx, cy, radius, start), [x2, y2] = polar(cx, cy, radius, end);
  const [tx, ty] = polar(cx, cy, labelRadius, (start + end) / 2);
  const d = "M" + x1 + " " + y1 + " A" + radius + " " + radius + " 0 " + (end - start > 180 ? 1 : 0) + " 0 " + x2 + " " + y2;
  return <g><path d={d} stroke={color} strokeWidth={2.5} fill="none" /><text x={tx} y={ty + 6} textAnchor="middle" fill={color} fontSize={23} fontFamily="Arial, sans-serif" fontWeight={700}>{label}</text></g>;
}
function Diagram({ label, children, height = 310 }: { label: string; children: ReactNode; height?: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 480 " + height} role="img" aria-label={label} style={{ display: "block", width: "100%", height: "auto" }}>{children}</svg>;
}
function ParallelMark({ x, y }: { x: number; y: number }) {
  return <path data-parallel-mark="" d={"M" + (x - 6) + " " + (y - 6) + " L" + (x + 3) + " " + y + " L" + (x - 6) + " " + (y + 6)} fill="none" stroke={teal} strokeWidth={3} />;
}
function CrossingDiagram() {
  return <Diagram label="AOB and COD are straight lines meeting at O. Angles a and c are vertically opposite; b is adjacent to both.">
    <Segment x1={45} y1={165} x2={435} y2={165} /><Segment x1={135} y1={60} x2={345} y2={270} />
    <Angle cx={240} cy={165} start={135} end={180} label="a" />
    <Angle cx={240} cy={165} start={0} end={135} label="b" radius={43} labelRadius={73} color={teal} />
    <Angle cx={240} cy={165} start={315} end={360} label="c" />
    <Point x={35} y={170} label="A" /><Point x={448} y={170} label="B" /><Point x={123} y={49} label="C" /><Point x={361} y={287} label="D" /><Point x={225} y={195} label="O" />
  </Diagram>;
}
function StraightDiagram() {
  return <Diagram label="Two adjacent angles a and b together form a straight angle." height={280}>
    <Segment x1={40} y1={218} x2={440} y2={218} /><Segment x1={240} y1={218} x2={325} y2={71} />
    <Angle cx={240} cy={218} start={60} end={180} label="a" radius={48} labelRadius={80} /><Angle cx={240} cy={218} start={0} end={60} label="b" radius={48} labelRadius={80} color={teal} />
    <Point x={235} y={250} label="O" />
  </Diagram>;
}
function PointDiagram({ numeric = false }: { numeric?: boolean }) {
  const cx = 240, cy = 155;
  return <Diagram label={numeric ? "Three non-overlapping angles around O are 80 degrees, 125 degrees and x." : "Three non-overlapping angles a, b and c make a complete turn around O."}>
    {[0, 80, 205].map(angle => { const [x, y] = polar(cx, cy, 130, angle); return <Segment key={angle} x1={cx} y1={cy} x2={x} y2={y} />; })}
    <Angle cx={cx} cy={cy} start={0} end={80} label={numeric ? "80°" : "a"} labelRadius={82} />
    <Angle cx={cx} cy={cy} start={80} end={205} label={numeric ? "125°" : "b"} labelRadius={82} color={teal} />
    <Angle cx={cx} cy={cy} start={205} end={360} label={numeric ? "x" : "c"} labelRadius={82} color="#b45309" /><Point x={235} y={179} label="O" />
  </Diagram>;
}
function PerpendicularDiagram() {
  return <Diagram label="AOD is a straight line. Rays OB and OC divide the upper angle into 2x, x and 3x. No perpendicular mark is given.">
    <Segment x1={45} y1={245} x2={435} y2={245} /><Segment x1={240} y1={245} x2={150} y2={89} /><Segment x1={240} y1={245} x2={240} y2={46} />
    <Angle cx={240} cy={245} start={120} end={180} label="2x" radius={45} labelRadius={79} /><Angle cx={240} cy={245} start={90} end={120} label="x" radius={60} labelRadius={91} color={teal} /><Angle cx={240} cy={245} start={0} end={90} label="3x" radius={45} labelRadius={74} />
    <Point x={35} y={272} label="A" /><Point x={443} y={272} label="D" /><Point x={233} y={279} label="O" /><Point x={136} y={78} label="B" /><Point x={254} y={41} label="C" />
  </Diagram>;
}
function ParallelDiagram({ kind, knownParallel }: { kind: Relationship; knownParallel: boolean }) {
  const bottomX = 260 - 130 / Math.tan(Math.PI / 3);
  const topStart = kind === "alternate" ? 180 : kind === "interior" ? 240 : 0;
  const topEnd = kind === "alternate" ? 240 : kind === "interior" ? 360 : 60;
  return <Diagram label={kind + " angles a and b on lines p and q cut by transversal t. " + (knownParallel ? "Arrows show p and q are given parallel." : "No parallel arrows are given; parallelism is to be proved.")}>
    <Segment x1={50} y1={90} x2={435} y2={90} /><Segment x1={50} y1={220} x2={435} y2={220} />
    <Segment x1={260 - 202 / Math.tan(Math.PI / 3)} y1={292} x2={260 + 68 / Math.tan(Math.PI / 3)} y2={22} />
    {knownParallel && <g><ParallelMark x={354} y={90} /><ParallelMark x={354} y={220} /></g>}
    <Angle cx={260} cy={90} start={topStart} end={topEnd} label="a" radius={30} labelRadius={58} /><Angle cx={bottomX} cy={220} start={0} end={60} label="b" radius={30} labelRadius={58} color={teal} />
    <Point x={454} y={97} label="p" /><Point x={454} y={227} label="q" /><Point x={318} y={26} label="t" />
  </Diagram>;
}
function ChainDiagram() {
  const dx = 145 / Math.tan(74 * Math.PI / 180);
  return <Diagram label="BD is given parallel to FE. C, D and E are collinear. Angle ABD is 74 degrees and angle CEF is 106 degrees. Prove AB parallel to CE." height={325}>
    <Segment x1={120} y1={115} x2={300 + dx} y2={115} /><Segment x1={100} y1={260} x2={300} y2={260} />
    <Segment x1={120} y1={115} x2={120 + 90 / Math.tan(74 * Math.PI / 180)} y2={25} /><Segment x1={300} y1={260} x2={300 + 235 / Math.tan(74 * Math.PI / 180)} y2={25} />
    <ParallelMark x={220} y={115} /><ParallelMark x={205} y={260} />
    <Angle cx={120} cy={115} start={0} end={74} label="74°" radius={25} labelRadius={56} /><Angle cx={300} cy={260} start={74} end={180} label="106°" radius={31} labelRadius={64} color={teal} />
    <Point x={140} y={17} label="A" /><Point x={108} y={142} label="B" /><Point x={382} y={25} label="C" /><Point x={362} y={121} label="D" /><Point x={311} y={287} label="E" /><Point x={88} y={287} label="F" />
  </Diagram>;
}
function Proof({ caption, rows }: { caption: string; rows: readonly ProofRow[] }) {
  return <div style={{ overflowX: "auto", margin: "22px 0", border: "1px solid #cbd5e1", borderRadius: 16 }}>
    <table style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", textAlign: "left", background: "white", fontSize: 16, lineHeight: 1.65 }}>
      <caption style={{ textAlign: "left", padding: "14px 16px", color: "#52657e", background: "#f8fafc", fontWeight: 700 }}>{caption}</caption>
      <thead><tr>{["Statement", "Reason"].map(label => <th key={label} scope="col" style={{ padding: "13px 16px", background: teal, color: "white" }}>{label}</th>)}</tr></thead>
      <tbody>{rows.map(([statement, reason], index) => <tr key={index} style={{ background: index === rows.length - 1 ? "#ecfdf5" : "white" }}>
        <td style={{ padding: "13px 16px", borderTop: "1px solid #dce4f1", verticalAlign: "top", overflowWrap: "anywhere", fontWeight: 650 }}>{statement}</td>
        <td style={{ padding: "13px 16px", borderTop: "1px solid #dce4f1", borderLeft: "1px solid #dce4f1", verticalAlign: "top", overflowWrap: "anywhere", color: "#52657e" }}>{reason}</td>
      </tr>)}</tbody>
    </table>
  </div>;
}
const relationships: { kind: Relationship; title: string; location: string; result: string; forwardReason: string; converseReason: string }[] = [
  { kind: "alternate", title: "Alternate angles", location: "Inside the two lines, on opposite sides of the transversal.", result: "a = b", forwardReason: "alt. ∠s, p // q", converseReason: "alt. ∠s equal" },
  { kind: "corresponding", title: "Corresponding angles", location: "In matching positions at the two intersections.", result: "a = b", forwardReason: "corr. ∠s, p // q", converseReason: "corr. ∠s equal" },
  { kind: "interior", title: "Interior angles on the same side", location: "Inside the two lines, on the same side of the transversal.", result: "a + b = 180°", forwardReason: "int. ∠s, p // q", converseReason: "int. ∠s supp." },
];
const questions = [
  { id: "straight", prompt: "Three adjacent angles on one side of a straight line are 2x, x and 3x. What is x?", options: ["30°", "60°", "90°"], answer: 0, explanation: "2x + x + 3x = 180° (adjacent angles on a straight line). Hence 6x = 180° and x = 30°." },
  { id: "opposite", prompt: "Two straight lines intersect. One of the angles is 137°. Which result follows?", options: ["Every angle at the intersection is 137°.", "Its vertically opposite angle is 137°.", "Each adjacent angle is 137°."], answer: 1, explanation: "Vertically opposite angles are equal. Each adjacent angle is 180° − 137° = 43°." },
  { id: "point", prompt: "The three non-overlapping angles making a complete turn at O are 80°, 125° and x. Find x.", options: ["25°", "205°", "155°"], answer: 2, explanation: "80° + 125° + x = 360° (angles at a point), so x = 155°. All three angles must be counted once." },
  { id: "converse", prompt: "A transversal cuts p and q. A pair of alternate angles are both 62°. What is the correct conclusion and reason?", options: ["p // q, because alternate angles are equal.", "p // q, because angles at a point sum to 360°.", "p is perpendicular to q, because the two angles are equal."], answer: 0, explanation: "Use the converse: equal alternate angles establish that p and q are parallel. Parallelism is the conclusion, not the starting condition." },
  { id: "interior", prompt: "A transversal cuts two lines. The interior angles on the same side are 73° and 107°. What can you prove?", options: ["The lines are perpendicular.", "The lines are parallel, since 73° + 107° = 180°.", "Nothing: interior angles must be equal to prove parallel lines."], answer: 1, explanation: "The interior angles on the same side are supplementary, so the two lines are parallel (converse of the interior-angle theorem)." },
  { id: "circular", prompt: "A question asks you to prove p // q. The lines only look parallel; no parallel condition is given. Which step is invalid?", options: ["Calculating two angles from other given facts.", "Checking whether corresponding angles are equal.", "Writing “a = b because p // q” before parallelism has been proved."], answer: 2, explanation: "That step assumes the conclusion. First establish a suitable angle equality or a sum of 180°, then apply a converse theorem." },
] as const;

export default function IntersectingAndParallelLinesPage() {
  const [mode, setMode] = useState<"use" | "prove">("use");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const answered = questions.filter(q => answers[q.id] !== undefined).length;
  const correct = questions.filter(q => answers[q.id] === q.answer).length;
  const knownParallel = mode === "use";
  return <main className="linesPage">
    <Link href="/maths/s2/chapter-6" className="backLink">← Back to Chapter 6</Link>
    <header><p className="eyebrow">S2 · CHAPTER 6 · SECTION 2</p><h1>Proofs Relating to Intersecting and Parallel Lines</h1>
      <p className="introduction">Choose an angle theorem, state why it applies, and connect your steps to the required conclusion. Use a converse when the task is to prove that two lines are parallel.</p>
      <div className="objectives"><span>Intersecting-line theorems</span><span>Parallel-line theorems</span><span>Converse theorems</span><span>Proof with reasons</span></div>
    </header>
    <section className="lessonCard">
      <div className="lessonHeading"><span className="lessonNumber">1</span><div><p className="lessonLabel">RECALL THE FOUNDATIONS</p><h2>Three facts for intersecting lines</h2></div></div>
      <div className="factGrid">
        <article className="factTile"><h3>Adjacent angles on a straight line</h3><StraightDiagram /><p className="factEquation">a + b = 180°</p><p>The angles share an arm, and their other arms point in opposite directions along one straight line.</p><p className="reference">[adj. ∠s on st. line]</p></article>
        <article className="factTile"><h3>Vertically opposite angles</h3><CrossingDiagram /><p className="factEquation">a = c</p><p>The angles face each other at the intersection of two straight lines.</p><p className="reference">[vert. opp. ∠s]</p></article>
        <article className="factTile"><h3>Angles at a point</h3><PointDiagram /><p className="factEquation">a + b + c = 360°</p><p>Include all the non-overlapping angles that make one complete turn, counting each angle once.</p><p className="reference">[∠s at a pt.]</p></article>
      </div>
      <div className="note"><strong>Read the condition first.</strong> A straight angle gives 180°; a complete turn gives 360°. A drawing alone does not supply a missing straight-line condition.</div>
    </section>
    <section className="lessonCard workedCard">
      <div className="lessonHeading"><span className="lessonNumber">2</span><div><p className="lessonLabel">PROVING A THEOREM</p><h2>Why are vertically opposite angles equal?</h2></div></div>
      <p>AOB and COD are straight lines meeting at O. Use the straight-line angle sum to prove that <strong>a = c</strong>.</p>
      <div className="twoColumns"><figure><CrossingDiagram /><figcaption>Angle b is adjacent to both a and c.</figcaption></figure><div className="softPanel"><p className="smallLabel">PLAN</p><h3>Both angles share the same supplement</h3><p>a + b and b + c are each 180°. Subtract the same angle b from the two totals.</p><p><strong>Do not use “vertically opposite angles are equal” as the reason here:</strong> that is the result we are proving.</p></div></div>
      <Proof caption="Proof of the vertically opposite angle theorem" rows={[["a + b = 180°", "Adjacent angles on straight line AOB."], ["b + c = 180°", "Adjacent angles on straight line COD."], ["a + b = b + c", "Both expressions equal 180°."], ["∴ a = c", "Subtract b from both sides."]]} />
      <p className="supportText">Once this theorem has been established, “vert. opp. ∠s” can be used as a reason in later proofs.</p>
    </section>
    <section className="lessonCard">
      <div className="lessonHeading"><span className="lessonNumber">3</span><div><p className="lessonLabel">WORKED EXAMPLE 1</p><h2>Prove that a ray is perpendicular to a line</h2></div></div>
      <p>AOD is a straight line. OB and OC divide the upper straight angle into <strong>2x, x and 3x</strong>, as shown. Prove that <strong>OC ⟂ AD</strong>.</p>
      <div className="twoColumns"><figure><PerpendicularDiagram /><figcaption>The angle labels are given. No right-angle mark is given.</figcaption></figure><div className="softPanel green"><p className="smallLabel">TARGET</p><h3>Show that ∠COD = 90°</h3><p>First find x from the straight-line angle sum. Then calculate 3x and use the definition of perpendicular lines.</p></div></div>
      <details className="solution"><summary>Reveal the perpendicular-line proof</summary><div className="solutionBody"><Proof caption="From an angle equation to perpendicularity" rows={[["2x + x + 3x = 180°", "Adjacent angles on straight line AOD."], ["6x = 180°", "Collect like terms."], ["x = 30°", "Divide both sides by 6."], ["∠COD = 3x = 90°", "Substitute x = 30° into the given angle expression."], ["∴ OC ⟂ AD", "Definition of perpendicular lines."]]} /></div></details>
      <div className="miniExample"><h3>When the angles make a complete turn</h3><div className="twoColumns"><figure><PointDiagram numeric /><figcaption>All three angles together make one turn.</figcaption></figure><div><p className="factEquation">80° + 125° + x = 360°</p><p><strong>x = 155°</strong>, using angles at a point.</p><p className="supportText">This diagram needs 360°, because all the angles around O are included.</p></div></div></div>
    </section>
    <section className="lessonCard" aria-labelledby="parallelTitle">
      <div className="lessonHeading"><span className="lessonNumber">4</span><div><p className="lessonLabel">THEOREMS AND THEIR CONVERSES</p><h2 id="parallelTitle">Which direction does the reasoning go?</h2></div></div>
      <p>A <strong>transversal</strong> is a line that cuts two other lines at different points. The position of the angles determines which relationship you can use.</p>
      <div className="modeButtons" role="group" aria-label="Choose the direction of reasoning"><button type="button" aria-pressed={knownParallel} onClick={() => setMode("use")}>Given parallel lines → deduce angles</button><button type="button" aria-pressed={!knownParallel} onClick={() => setMode("prove")}>Given angle facts → prove parallel lines</button></div>
      <div className="modeSummary" role="status" aria-live="polite">{knownParallel ? <p><strong>Given: p // q.</strong> The matching arrows mark this condition. Use an angle theorem to obtain a relationship between a and b.</p> : <p><strong>To prove: p // q.</strong> No parallel arrows are supplied. Establish the required angle relationship first, then use the relevant converse.</p>}</div>
      <div className="relationshipGrid">{relationships.map(item => <article className="relationshipCard" key={item.kind}><h3>{item.title}</h3><ParallelDiagram kind={item.kind} knownParallel={knownParallel} /><p className="positionNote">{item.location}</p><div className="ruleDirection"><p className="smallLabel">{knownParallel ? "GIVEN" : "ESTABLISH FIRST"}</p><p className="factEquation">{knownParallel ? "p // q" : item.result}</p><p className="smallLabel">{knownParallel ? "THEREFORE" : "THEREFORE, BY THE CONVERSE"}</p><p className="factEquation">{knownParallel ? item.result : "p // q"}</p></div><p className="reference">[Reference: {knownParallel ? item.forwardReason : item.converseReason}]</p></article>)}</div>
      <p className="supportText">Diagrams are schematic. When parallelism is the target, the drawing's appearance is not evidence. “Supplementary” means that the two angles sum to 180°.</p>
      <p className="warning"><strong>Use the right pair:</strong> not every pair of equal angles proves that lines are parallel. They must be in the alternate or corresponding positions for the same transversal. The 180° test uses interior angles on the same side.</p>
    </section>
    <section className="lessonCard workedCard">
      <div className="lessonHeading"><span className="lessonNumber">5</span><div><p className="lessonLabel">WORKED EXAMPLE 2</p><h2>Use known parallel lines to prove another pair parallel</h2></div></div>
      <p>Given <strong>BD // FE</strong>, with C, D and E collinear in that order, ∠ABD = 74° and ∠CEF = 106°. Prove that <strong>AB // CE</strong>.</p>
      <div className="twoColumns"><figure><ChainDiagram /><figcaption>Only BD and FE have parallel arrows: that is the given pair.</figcaption></figure><div className="softPanel"><p className="smallLabel">BUILD A TWO-STAGE ARGUMENT</p><h3>Find an angle, then apply a converse</h3><p>1. Use BD // FE and transversal CE to find ∠CDB.</p><p>2. Use ∠ABD and ∠CDB, with transversal BD, to establish AB // CE.</p></div></div>
      <Proof caption="A theorem first, then a converse" rows={[["∠CDB = ∠CEF = 106°", "Corresponding angles, BD // FE; C, D and E are collinear."], ["∠ABD + ∠CDB = 74° + 106°", "Substitute the given angle and the angle just found."], ["∠ABD + ∠CDB = 180°", "Simplify."], ["∴ AB // CE", "Interior angles on the same side of transversal BD are supplementary."]]} />
      <div className="note"><strong>Notice the change of reason.</strong> The first step uses a given parallel pair. The final step proves a different pair parallel using <strong>[int. ∠s supp.]</strong>.</div>
    </section>
    <section className="lessonCard">
      <div className="lessonHeading"><span className="lessonNumber">6</span><div><p className="lessonLabel">WORKED EXAMPLE 3</p><h2>Prove parallel lines using equal alternate angles</h2></div></div>
      <p>The marked alternate angles are <strong>a = (2x + 13)°</strong> and <strong>b = (3x − 9)°</strong>. It is given that <strong>x = 22</strong>. Prove that <strong>p // q</strong>.</p>
      <div className="twoColumns"><figure><ParallelDiagram kind="alternate" knownParallel={false} /><figcaption>No parallel marks are given. Calculate a and b separately.</figcaption></figure><div className="softPanel green"><p className="smallLabel">START FROM THE GIVEN VALUE</p><h3>Does the angle equality follow?</h3><p>The value of x is already known. Substitute it into each expression before deciding whether the alternate angles are equal.</p></div></div>
      <details className="solution"><summary>Reveal the alternate-angle proof</summary><div className="solutionBody"><Proof caption="Establish equality before claiming parallelism" rows={[["a = 2(22) + 13 = 57°", "Substitute x = 22 (given)."], ["b = 3(22) − 9 = 57°", "Substitute x = 22 (given)."], ["a = b", "Both angles equal 57°."], ["∴ p // q", "Alternate angles are equal (converse theorem)."]]} /></div></details>
      <p className="warning"><strong>Avoid circular reasoning:</strong> do not start by setting 2x + 13 = 3x − 9 just because the lines look parallel. Here the angle equality must be established from the given x = 22.</p>
    </section>
    <section className="lessonCard practiceCard" aria-labelledby="practiceTitle">
      <div className="lessonHeading"><span className="lessonNumber">7</span><div><p className="lessonLabel">QUICK CHECK</p><h2 id="practiceTitle">Choose the result and justify it</h2></div></div>
      <p>Select one answer for each question. Read the explanation and change your choice if needed.</p><p className="supportText">This self-check resets when you reload. It does not update Flashcard or Checkpoint progress.</p>
      {questions.map((question, questionIndex) => {
        const selected = answers[question.id], isAnswered = selected !== undefined, isCorrect = selected === question.answer;
        return <fieldset key={question.id} className="quizQuestion"><legend><span className="questionNumber">{questionIndex + 1}.</span> {question.prompt}</legend><div className="options">{question.options.map((option, optionIndex) => <label key={option} className={"option" + (selected === optionIndex ? " selectedOption" : "")}><input type="radio" name={"lines-" + question.id} checked={selected === optionIndex} onChange={() => setAnswers(previous => ({ ...previous, [question.id]: optionIndex }))} aria-describedby={isAnswered ? "feedback-" + question.id : undefined} /><span>{option}</span></label>)}</div><div id={"feedback-" + question.id} aria-live="polite" aria-atomic="true">{isAnswered && <p className={"feedback " + (isCorrect ? "correctFeedback" : "retryFeedback")}><strong>{isCorrect ? "Correct. " : "Not quite. "}</strong>{question.explanation}</p>}</div></fieldset>;
      })}
      <div className="practiceFooter"><p role="status" aria-label="Self-check score">{answered} of {questions.length} answered · {correct} correct{correct === questions.length ? " — all correct!" : ""}</p><button type="button" className="secondaryButton" onClick={() => setAnswers({})}>Reset self-check</button></div>
    </section>
    <section className="summaryCard"><p className="lessonLabel">SECTION SUMMARY</p><h2>Match the reason to the conclusion</h2><ol className="summaryList"><li><strong>Intersecting lines:</strong> use a straight angle, vertically opposite angles or a complete turn.</li><li><strong>Given parallel lines:</strong> deduce equal alternate or corresponding angles, or supplementary interior angles.</li><li><strong>To prove parallel lines:</strong> establish the appropriate angle relationship, then use a converse.</li><li><strong>Write a complete proof:</strong> include both the statements and their reasons.</li></ol><div className="finishRow"><Link href="/maths/s2/chapter-6" className="primaryLink">Back to Chapter 6 →</Link><p>Next topic: proofs relating to triangles. Open Section 3 from the chapter page when available.</p></div><p><Link href="/maths/s2/chapter-6/introduction-to-deductive-reasoning" className="backLink">← Revisit Section 1</Link></p></section>
    <style jsx>{`
        .linesPage { max-width: 1120px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.65; }
        .linesPage *, .linesPage *::before, .linesPage *::after { box-sizing: border-box; }
        .linesPage :global(.backLink) { display: inline-block; color: #047857; font-size: 17px; font-weight: 800; text-decoration: none; margin-bottom: 25px; }
        header { margin-bottom: 30px; }
        h1 { font-size: clamp(34px, 4.8vw, 52px); line-height: 1.15; letter-spacing: -0.025em; margin: 0 0 18px; max-width: 960px; }
        h2 { font-size: clamp(24px, 3vw, 33px); line-height: 1.25; margin: 0 0 8px; letter-spacing: -0.015em; }
        h3 { font-size: 21px; line-height: 1.4; margin: 0 0 10px; }
        p { margin: 12px 0; }
        .eyebrow, .lessonLabel, .smallLabel { color: #6d28d9; font-size: 13px; line-height: 1.5; font-weight: 900; letter-spacing: 0.1em; margin: 0 0 7px; }
        .introduction { max-width: 940px; color: #52657e; font-size: 20px; }
        .objectives { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
        .objectives span { border: 1px solid #ddd6fe; background: #f5f3ff; color: #5b21b6; padding: 6px 13px; border-radius: 999px; font-size: 14px; font-weight: 700; }
        .lessonCard { background: #fff; border: 1px solid #dce4f1; border-radius: 26px; margin-bottom: 24px; padding: 32px; box-shadow: 0 8px 25px rgba(27, 42, 74, 0.035); }
        .lessonHeading { display: flex; align-items: flex-start; gap: 17px; margin-bottom: 22px; }
        .lessonHeading > div { min-width: 0; }
        .lessonNumber { display: flex; justify-content: center; align-items: center; flex-shrink: 0; width: 54px; height: 54px; border-radius: 17px; background: #ede9fe; color: #6d28d9; font-size: 25px; font-weight: 800; }
        .reasoningChain { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; list-style: none; margin: 24px 0 20px; padding: 0; counter-reset: reasoning; }
        .reasoningChain li { position: relative; padding: 22px; border: 1px solid #ddd6fe; border-radius: 18px; background: #f8f6ff; }
        .reasoningChain li::before { counter-increment: reasoning; content: counter(reasoning) ". "; color: #6d28d9; font-size: 14px; font-weight: 900; }
        .reasoningChain li:last-child { background: #ecfdf5; border-color: #a7f3d0; }
        .reasoningChain h3 { margin-top: 14px; }
        .reasoningChain p { color: #52657e; font-size: 16px; margin-bottom: 0; }
        .twoColumns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; align-items: center; margin: 20px 0; }
        .vocabulary { align-items: stretch; }
        .softPanel { padding: 24px; background: #f5f3ff; border: 1px solid #e2d9fc; border-radius: 18px; }
        .softPanel p:last-child { margin-bottom: 0; }
        .green { background: #ecfdf5; border-color: #a7f3d0; }
        .green .smallLabel { color: #047857; }
        .questionStrip { padding: 20px 23px; border-radius: 16px; background: #f1f5fb; }
        figure { margin: 0; background: #f8fafc; padding: 14px; border: 1px solid #dce4f1; border-radius: 19px; }
        svg { display: block; width: 100%; height: auto; }
        figcaption { text-align: center; color: #52657e; font-size: 14px; line-height: 1.5; padding: 5px 8px 10px; }
        .mainLine { stroke: #172d50; stroke-width: 3.5; stroke-linecap: round; fill: none; }
        .arc { fill: none; stroke-width: 2.5; stroke-linecap: round; }
        .purpleArc { stroke: #7c3aed; }
        .tealArc { stroke: #0f766e; }
        .pointText { fill: #172d50; font-size: 23px; font-family: Georgia, serif; font-style: italic; }
        .angleText { font-size: 27px; font-weight: 700; }
        .purpleText { fill: #6d28d9; }
        .tealText { fill: #0f766e; }
        .factsList > div { padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
        .factsList > div:last-child { border-bottom: 0; }
        .factsList p { margin: 8px 0 0; }
        .pill { display: inline-block; border-radius: 7px; padding: 3px 8px; background: #ede9fe; color: #5b21b6; font-size: 12px; font-weight: 900; letter-spacing: 0.06em; }
        .greenPill { background: #d1fae5; color: #065f46; }
        .note { background: #eff6ff; border-left: 4px solid #0ea5e9; padding: 18px 20px; border-radius: 13px; }
        .warning { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 18px 20px; border-radius: 13px; color: #794512; font-size: 17px; }
        .workedCard { border-color: #b7e7d9; }
        .tableWrap { margin: 22px 0; overflow-x: auto; border: 1px solid #cbd5e1; border-radius: 16px; }
        table { border-collapse: collapse; width: 100%; table-layout: fixed; text-align: left; }
        caption { text-align: left; color: #52657e; padding: 15px 18px; background: #f8fafc; font-size: 15px; font-weight: 700; }
        th, td { padding: 16px 18px; vertical-align: top; overflow-wrap: anywhere; }
        th { background: #0f766e; color: white; font-size: 16px; }
        td { border-bottom: 1px solid #dde6ef; font-size: 17px; }
        td:first-child { font-weight: 650; }
        td + td { border-left: 1px solid #dde6ef; color: #52657e; }
        tr:last-child td { border-bottom: 0; }
        .conclusionRow td { background: #ecfdf5; color: #065f46; }
        .supportText { color: #52657e; font-size: 15px; }
        .solution { margin-top: 22px; border: 1px solid #c4b5fd; border-radius: 16px; background: #faf8ff; }
        .solution summary { padding: 18px 22px; color: #5b21b6; font-size: 18px; font-weight: 800; cursor: pointer; }
        .solution .tableWrap { margin: 0 18px 18px; background: white; }
        .converseBox { padding: 24px; border: 1px solid #fcd592; background: #fffbeb; border-radius: 18px; margin-top: 22px; }
        .converseBox .smallLabel { color: #92400e; }
        .practiceCard { border-color: #c4b5fd; }
        .quizQuestion { margin: 26px 0; padding: 20px; border: 1px solid #dce4f1; border-radius: 18px; min-width: 0; }
        legend { max-width: 100%; padding: 0 8px; font-size: 18px; font-weight: 750; line-height: 1.6; }
        .questionNumber { color: #6d28d9; }
        .options { display: grid; gap: 10px; }
        .option { display: flex; align-items: flex-start; gap: 12px; padding: 15px; border: 1px solid #cbd5e1; border-radius: 12px; cursor: pointer; font-size: 17px; background: white; }
        .option:hover { border-color: #8b5cf6; background: #faf5ff; }
        .option input { margin: 6px 0 0; width: 18px; height: 18px; flex-shrink: 0; accent-color: #7c3aed; }
        .selectedOption { border-color: #7c3aed; background: #f5f3ff; box-shadow: inset 0 0 0 1px #7c3aed; }
        .feedback { padding: 15px 17px; border-radius: 12px; margin-bottom: 0; font-size: 16px; }
        .correctFeedback { background: #ecfdf5; color: #065f46; }
        .retryFeedback { background: #fff7ed; color: #9a3412; }
        .practiceFooter { display: flex; gap: 16px; align-items: center; justify-content: space-between; flex-wrap: wrap; }
        .practiceFooter p { font-weight: 800; }
        .secondaryButton { background: white; color: #5b21b6; border: 1px solid #a78bfa; padding: 12px 18px; border-radius: 12px; font: inherit; font-size: 16px; font-weight: 750; cursor: pointer; min-height: 44px; }
        .summaryCard { background: linear-gradient(135deg, #ecfdf5, #f0fdfa); border: 1px solid #a7f3d0; border-radius: 26px; padding: 32px; }
        .summaryCard .lessonLabel { color: #047857; }
        .summaryList { margin: 18px 0 26px; padding-left: 24px; }
        .summaryList li { margin: 10px 0; padding-left: 5px; }
        .finishRow { border-top: 1px solid #a7f3d0; padding-top: 24px; display: flex; align-items: center; gap: 22px; }
        .linesPage :global(.primaryLink) { display: inline-block; flex-shrink: 0; padding: 14px 20px; border-radius: 13px; background: #047857; color: white; font-size: 16px; font-weight: 800; text-decoration: none; }
        .finishRow p { font-size: 15px; color: #52657e; margin: 0; }
        button:focus-visible, summary:focus-visible, input:focus-visible, .linesPage :global(a:focus-visible) { outline: 3px solid #2563eb; outline-offset: 4px; }
        @media (max-width: 820px) { .reasoningChain { grid-template-columns: 1fr; } .twoColumns { grid-template-columns: 1fr; } .finishRow { align-items: flex-start; flex-direction: column; } figure { max-width: 520px; width: 100%; margin: 0 auto; } }
        @media (max-width: 520px) { .linesPage { width: calc(100% - 28px); margin-top: 26px; font-size: 17px; } .lessonCard, .summaryCard { padding: 22px 17px; border-radius: 20px; } .lessonHeading { gap: 12px; } .lessonNumber { width: 42px; height: 42px; border-radius: 13px; font-size: 21px; } .lessonLabel { font-size: 12px; } .introduction { font-size: 18px; } th, td { padding: 12px 10px; font-size: 15px; } .quizQuestion { padding: 14px 10px; } legend { font-size: 17px; } .option { padding: 13px 11px; font-size: 16px; } .solution summary { padding: 16px; } .solution .tableWrap { margin: 0 8px 12px; } .softPanel { padding: 19px; } }
      
        .factGrid, .relationshipGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 17px; margin: 22px 0; }
        .factTile, .relationshipCard { border: 1px solid #ddd6fe; border-radius: 18px; padding: 20px 16px; background: #faf8ff; min-width: 0; }
        .factTile h3, .relationshipCard h3 { font-size: 19px; min-height: 55px; }
        .factTile p, .relationshipCard p { font-size: 16px; }
        .factTile .factEquation, .relationshipCard .factEquation, .factEquation { font-size: clamp(22px, 2.5vw, 28px); font-weight: 800; color: #0f766e; line-height: 1.5; margin: 12px 0; }
        .reference { font-size: 14px !important; color: #5b21b6; font-weight: 750; overflow-wrap: anywhere; }
        .solutionBody { padding: 0 17px; }
        .miniExample { margin-top: 30px; border-top: 1px solid #dce4f1; padding-top: 22px; }
        .miniExample .twoColumns { margin-bottom: 0; }
        .modeButtons { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
        .modeButtons button { flex: 1 1 280px; padding: 15px 18px; border: 1px solid #a78bfa; border-radius: 13px; color: #5b21b6; background: white; font: inherit; font-size: 16px; font-weight: 800; cursor: pointer; min-height: 48px; }
        .modeButtons button[aria-pressed="true"] { background: #6d28d9; color: white; }
        .modeSummary { background: #f5f3ff; padding: 16px 20px; border-radius: 14px; margin-top: 16px; }
        .modeSummary p { margin: 0; }
        .positionNote { color: #52657e; min-height: 78px; }
        .ruleDirection { padding: 15px; border-radius: 13px; background: #ecfdf5; margin: 16px 0; border: 1px solid #a7f3d0; }
        .ruleDirection .smallLabel { color: #047857; font-size: 12px; }
        @media (max-width: 1000px) { .factGrid, .relationshipGrid { grid-template-columns: 1fr; } .factTile, .relationshipCard { padding: 23px; } .factTile h3, .relationshipCard h3, .positionNote { min-height: 0; } .factTile :global(svg), .relationshipCard :global(svg) { max-width: 480px; margin: 0 auto; } }
        @media (max-width: 520px) { .factTile, .relationshipCard { padding: 16px; } .solutionBody { padding: 0 8px; } }
`}</style>
  </main>;
}
