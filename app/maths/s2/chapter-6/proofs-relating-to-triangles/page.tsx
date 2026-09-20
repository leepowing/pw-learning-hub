"use client";
import { reasonRef } from "@/data/maths/reasons/reasonBank";
import { DualReason, ReasonContent } from "@/components/maths/DualReason";



import { useState, type ReactNode } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-6/proofs-relating-to-triangles/page.tsx
// Lesson self-checks use temporary React state; flashcard progress is unchanged.
type XY = readonly [number, number];
type ProofRow = readonly [statement: string, reason: string];
const navy = "#172d50", purple = "#6d28d9", teal = "#0f766e", amber = "#b45309";
const toRadians = (degrees: number) => degrees * Math.PI / 180;

function polar(center: XY, radius: number, degrees: number): XY {
  return [center[0] + radius * Math.cos(toRadians(degrees)), center[1] - radius * Math.sin(toRadians(degrees))];
}
function direction(from: XY, to: XY) {
  return Math.atan2(from[1] - to[1], to[0] - from[0]) * 180 / Math.PI;
}
function Segment({ from, to, auxiliary = false }: { from: XY; to: XY; auxiliary?: boolean }) {
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={auxiliary ? teal : navy} strokeWidth={3} strokeLinecap="round" strokeDasharray={auxiliary ? "8 6" : undefined} />;
}
function Point({ at, label, offset = [0, 0] }: { at: XY; label: string; offset?: XY }) {
  return <text x={at[0] + offset[0]} y={at[1] + offset[1]} fill={navy} fontSize={22} fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">{label}</text>;
}
function Angle({ center, from, to, label, color = purple, radius = 32, labelRadius = 57, labelOffset = [0, 0] }: {
  center: XY; from: XY; to: XY; label: string; color?: string; radius?: number; labelRadius?: number; labelOffset?: XY;
}) {
  const start = direction(center, from);
  // The shorter turn gives the non-reflex angle between the two supplied rays.
  const turn = ((direction(center, to) - start + 540) % 360) - 180;
  const first = polar(center, radius, start), last = polar(center, radius, start + turn);
  const textAt = polar(center, labelRadius, start + turn / 2);
  const d = `M ${first[0]} ${first[1]} A ${radius} ${radius} 0 0 ${turn < 0 ? 1 : 0} ${last[0]} ${last[1]}`;
  return <g data-angle={label} data-angle-degrees={Math.abs(turn)}>
    <path d={d} stroke={color} strokeWidth={2.5} fill="none" />
    <text x={textAt[0] + labelOffset[0]} y={textAt[1] + 6 + labelOffset[1]} fill={color} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize={23} fontWeight={700}>{label}</text>
  </g>;
}
function ParallelMark({ at }: { at: XY }) {
  return <path data-parallel-mark="" d={`M ${at[0] - 6} ${at[1] - 6} L ${at[0] + 3} ${at[1]} L ${at[0] - 6} ${at[1] + 6}`} stroke={teal} strokeWidth={3} fill="none" />;
}
function Diagram({ label, children, height = 315 }: { label: string; children: ReactNode; height?: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 480 ${height}`} role="img" aria-label={label} style={{ display: "block", width: "100%", height: "auto" }}>{children}</svg>;
}
function TriangleLines({ a, b, c }: { a: XY; b: XY; c: XY }) {
  return <><Segment from={a} to={b} /><Segment from={b} to={c} /><Segment from={c} to={a} /></>;
}
function SumDiagram({ stage = 0 }: { stage?: number }) {
  const a: XY = [240, 65], b: XY = [80, 255], c: XY = [408, 255], d: XY = [32, 65], e: XY = [447, 65];
  return <Diagram label={stage === 0 ? "Triangle ABC has interior angles a, b and c." : "A line DE is constructed through A parallel to BC. Alternate angles at A match b and c."}>
    <TriangleLines a={a} b={b} c={c} />
    {stage >= 1 && <g data-construction=""><Segment from={d} to={e} auxiliary /><ParallelMark at={[380, 65]} /><ParallelMark at={[280, 255]} /><Point at={d} label="D" offset={[0, -15]} /><Point at={e} label="E" offset={[0, -15]} /></g>}
    <Angle center={a} from={b} to={c} label="a" radius={32} labelRadius={68} />
    <Angle center={b} from={c} to={a} label="b" color={teal} />
    <Angle center={c} from={a} to={b} label="c" color={amber} />
    {stage >= 2 && <g data-matched-angles=""><Angle center={a} from={d} to={b} label="b" radius={36} labelRadius={65} color={teal} /><Angle center={a} from={c} to={e} label="c" radius={36} labelRadius={65} color={amber} /></g>}
    <Point at={a} label="A" offset={[0, -22]} /><Point at={b} label="B" offset={[-13, 27]} /><Point at={c} label="C" offset={[13, 27]} />
  </Diagram>;
}
function ExteriorDiagram({ numeric = false }: { numeric?: boolean }) {
  const b: XY = [65, 255], c: XY = [310, 255], d: XY = [447, 255];
  const base = c[0] - b[0], leftSlope = Math.tan(toRadians(48)), rightSlope = Math.tan(toRadians(68));
  const leftRun = base * rightSlope / (leftSlope + rightSlope);
  const a: XY = [b[0] + leftRun, b[1] - leftRun * leftSlope];
  return <Diagram label={numeric ? "BC is extended to D. Triangle ABC has angles A 64 degrees and B 48 degrees. The exterior angle at C is x and its adjacent interior angle is y." : "B, C and D lie on a straight line in that order. Angles a and b are remote from the exterior angle e at C; c is adjacent to e."}>
    <TriangleLines a={a} b={b} c={c} /><Segment from={c} to={d} />
    <Angle center={a} from={b} to={c} label={numeric ? "64°" : "a"} radius={32} labelRadius={66} />
    <Angle center={b} from={c} to={a} label={numeric ? "48°" : "b"} radius={34} labelRadius={73} color={teal} />
    <Angle center={c} from={a} to={b} label={numeric ? "y" : "c"} radius={30} labelRadius={52} color={navy} />
    <Angle center={c} from={d} to={a} label={numeric ? "x" : "e"} radius={42} labelRadius={73} color={amber} />
    <Point at={a} label="A" offset={[0, -23]} /><Point at={b} label="B" offset={[-12, 28]} /><Point at={c} label="C" offset={[0, 28]} /><Point at={d} label="D" offset={[0, 28]} />
  </Diagram>;
}
function PerpendicularTriangle() {
  const a: XY = [90, 65], b: XY = [90, 255], c: XY = [90 + 190 / Math.tan(toRadians(30)), 255];
  return <Diagram label="Triangle ABC has angles A 2x, B 3x and C x. No right-angle mark is given.">
    <TriangleLines a={a} b={b} c={c} />
    <Angle center={a} from={b} to={c} label="2x" radius={32} labelRadius={65} />
    <Angle center={b} from={c} to={a} label="3x" radius={34} labelRadius={63} color={teal} />
    <Angle center={c} from={a} to={b} label="x" radius={40} labelRadius={76} color={amber} />
    <Point at={a} label="A" offset={[-13, -18]} /><Point at={b} label="B" offset={[-20, 25]} /><Point at={c} label="C" offset={[15, 25]} />
  </Diagram>;
}
function ParallelTargetDiagram() {
  const a: XY = [240, 45], b: XY = [70, 230], c: XY = [290, 230], d: XY = [315, 322.5], e: XY = [441, 322.5];
  return <Diagram label="A, C and D are collinear in that order. Triangle ABC has angles a at A and b at B. Its exterior angle BCD is e; angle ADE is x. No parallel marks are given." height={380}>
    <TriangleLines a={a} b={b} c={c} /><Segment from={c} to={d} /><Segment from={d} to={e} />
    <Angle center={a} from={b} to={c} label="a" radius={32} labelRadius={62} />
    <Angle center={b} from={c} to={a} label="b" radius={32} labelRadius={61} color={teal} />
    <Angle center={c} from={b} to={d} label="e" radius={25} labelRadius={48} color={amber} />
    <Angle center={d} from={e} to={a} label="x" radius={29} labelRadius={57} color={purple} />
    <Point at={a} label="A" offset={[0, -20]} /><Point at={b} label="B" offset={[-13, 25]} /><Point at={c} label="C" offset={[20, 0]} /><Point at={d} label="D" offset={[-3, 29]} /><Point at={e} label="E" offset={[0, 28]} />
  </Diagram>;
}
function Proof({ caption, rows }: { caption: string; rows: readonly ProofRow[] }) {
  return <div style={{ overflowX: "auto", margin: "22px 0", border: "1px solid #cbd5e1", borderRadius: 16 }}>
    <table style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", textAlign: "left", background: "white", fontSize: 16, lineHeight: 1.65 }}>
      <caption style={{ textAlign: "left", padding: "14px 16px", color: "#52657e", background: "#f8fafc", fontWeight: 700 }}>{caption}</caption>
      <thead><tr>{["Statement", "Reason"].map(label => <th key={label} scope="col" style={{ padding: "13px 16px", background: teal, color: "white" }}>{label}</th>)}</tr></thead>
      <tbody>{rows.map(([statement, reason], index) => <tr key={index} style={{ background: index === rows.length - 1 ? "#ecfdf5" : "white" }}>
        <td style={{ padding: "13px 16px", borderTop: "1px solid #dce4f1", verticalAlign: "top", overflowWrap: "anywhere", fontWeight: 650 }}>{statement}</td>
        <td style={{ padding: "13px 16px", borderTop: "1px solid #dce4f1", borderLeft: "1px solid #dce4f1", verticalAlign: "top", overflowWrap: "anywhere", color: "#52657e" }}><ReasonContent>{reason}</ReasonContent></td>
      </tr>)}</tbody>
    </table>
  </div>;
}

const constructionSteps = [
  { button: "1 · Start with the triangle", title: "What must we prove?", text: "The interior angles are a, b and c. We want to show that a + b + c = 180°. Start from established straight-line and parallel-line facts." },
  { button: "2 · Add a parallel line", title: "Construct DE through A, parallel to BC", text: "D, A and E are collinear in that order. This auxiliary line is deliberately constructed parallel to BC, so we may mark the pair with matching arrows." },
  { button: "3 · Match the angles", title: "Bring all three angles to one straight line", text: "Using AB as a transversal gives ∠DAB = b. Using AC as a transversal gives ∠CAE = c. The three adjacent angles below DE are now b, a and c." },
];
const questions = [
  { id: "sum", prompt: "Two interior angles of a triangle are 48° and 67°. Find the third angle.", options: ["115°", "65°", "245°"], answer: 1, explanation: "The three interior angles sum to 180°. The third angle is 180° − 48° − 67° = 65°." + reasonRef("triangle.angleSum", {"variant":"textbook1"}) },
  { id: "remote", prompt: "An exterior angle of a triangle is 128°. One of its two remote interior angles is 53°. Find the other remote interior angle.", options: ["75°", "52°", "181°"], answer: 0, explanation: "The exterior angle equals the sum of the two remote interior angles. The missing angle is 128° − 53° = 75°. The adjacent interior angle would be 52°." + reasonRef("triangle.exteriorAngle", {"variant":"textbook1"}) + reasonRef("angles.straightLine", {"variant":"textbook1"}) },
  { id: "exterior", prompt: "B, C and D are collinear in that order. In triangle ABC, ∠A = a, ∠B = b and ∠C = c. Which expression equals ∠ACD?", options: ["a + b + c", "b + c", "a + b"], answer: 2, explanation: "∠ACD is the exterior angle at C. Its remote interior angles are a and b; c is adjacent to it. Hence ∠ACD = a + b." + reasonRef("triangle.exteriorAngle", {"variant":"textbook1"}) },
  { id: "perpendicular", prompt: "A triangle has angles 2x, 3x and x. Which result can be proved?", options: ["x = 60°, so 3x is a straight angle.", "x = 30°, so the sides enclosing 3x are perpendicular.", "The triangle is equilateral because its angles contain x."], answer: 1, explanation: "2x + 3x + x = 180° gives x = 30°. The angle 3x is 90°, which proves that its two sides are perpendicular." + reasonRef("triangle.angleSum", {"variant":"textbook1"}) + reasonRef("geometry.perpendicular") },
  { id: "parallel", prompt: "In Worked Example 3, you have established ∠BCD = ∠ADE. Which reason completes the proof that BC // DE?", options: ["The lines look parallel in the drawing.", "Angles in a triangle sum to 180°.", "Alternate angles are equal, using AD as the transversal."], answer: 2, explanation: "The equality is between alternate angles for BC and DE cut by AD. Apply the converse theorem: equal alternate angles imply parallel lines." + reasonRef("parallel.converseAlternate", {"params":{"line1":"BC","line2":"DE"},"variant":"textbook1"}) },
  { id: "proof", prompt: "When proving the triangle angle-sum theorem itself, which approach is valid?", options: ["Construct a parallel through a vertex, use alternate angles, then use a straight angle.", "Write a + b + c = 180° because the triangle angle-sum theorem says so.", "Measure one triangle and conclude that every triangle has the same angle sum."], answer: 0, explanation: "Use previously established results to prove the theorem. Quoting the theorem being proved is circular, and measuring one example does not prove a statement about all triangles." },
];

export default function ProofsRelatingToTrianglesPage() {
  const [stage, setStage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const answered = questions.filter(question => answers[question.id] !== undefined).length;
  const correct = questions.filter(question => answers[question.id] === question.answer).length;

  return <main className="trianglesPage">
    <Link href="/maths/s2/chapter-6" className="backLink">← Back to Chapter 6</Link>
    <header><p className="eyebrow">S2 · CHAPTER 6 · SECTION 3</p><h1>Proofs Relating to Triangles</h1>
      <p className="introduction">Explain why triangle angle facts are true, then use them to find angles and prove relationships between lines. Every important step needs a reason.</p>
      <div className="objectives"><span>Interior angle sum</span><span>Exterior angles</span><span>Auxiliary lines</span><span>Proof with reasons</span></div>
    </header>

    <section className="lessonCard">
      <div className="lessonHeading"><span className="lessonNumber">1</span><div><p className="lessonLabel">TWO ESSENTIAL FACTS</p><h2>Identify the angles before using a theorem</h2></div></div>
      <div className="factGrid">
        <article className="factTile"><h3>Interior angles of a triangle</h3><SumDiagram /><p className="factEquation">a + b + c = 180°</p><p>Count the three angles inside the triangle, one at each vertex.</p><p className="reference"><DualReason reasonId="triangle.angleSum" variant="textbook1" heading /></p></article>
        <article className="factTile"><h3>Exterior angle of a triangle</h3><ExteriorDiagram /><p className="factEquation">e = a + b</p><p>B, C and D are collinear in that order. Extending BC to D creates exterior angle e = ∠ACD.</p><p className="reference"><DualReason reasonId="triangle.exteriorAngle" variant="textbook1" heading /></p></article>
      </div>
      <div className="note"><strong>Remote interior angles</strong> are the two interior angles not adjacent to the exterior angle. In the second diagram, they are a and b. Angle c is adjacent to e, so <strong>c + e = 180°</strong>.</div>
    </section>

    <section className="lessonCard workedCard" aria-labelledby="sumProofTitle">
      <div className="lessonHeading"><span className="lessonNumber">2</span><div><p className="lessonLabel">PROVING THE ANGLE SUM</p><h2 id="sumProofTitle">Why do the interior angles add up to 180°?</h2></div></div>
      <p>An <strong>auxiliary line</strong> is an extra line added to help a proof. Here, a parallel through A lets us compare the three interior angles along one straight line.</p>
      <div className="stepButtons" role="group" aria-label="Explore the triangle angle-sum proof">{constructionSteps.map((item, index) => <button type="button" key={item.button} aria-pressed={stage === index} onClick={() => setStage(index)}>{item.button}</button>)}</div>
      <div className="twoColumns constructionArea"><figure><SumDiagram stage={stage} /><figcaption>{stage === 0 ? "Begin with triangle ABC." : stage === 1 ? "The dashed auxiliary line is constructed so that DE // BC." : "Matching colours show the two pairs of equal alternate angles."}</figcaption></figure>
        <div className="softPanel" role="status" aria-live="polite"><p className="smallLabel">STEP {stage + 1} OF 3</p><h3>{constructionSteps[stage].title}</h3><p>{constructionSteps[stage].text}</p>{stage === 2 && <p className="factEquation">b + a + c = 180°</p>}</div>
      </div>
      {stage === 2 && <div className="sumProof"><Proof caption="Proof using a parallel line through A" rows={[
        ["Construct DE through A with DE // BC.", "A line parallel to BC can be drawn through A; D, A and E are collinear."],
        ["∠DAB = ∠ABC = b", reasonRef("parallel.alternate", {"params":{"line1":"DE","line2":"BC"},"variant":"textbook3"})],
        ["∠CAE = ∠ACB = c", reasonRef("parallel.alternate", {"params":{"line1":"DE","line2":"BC"},"variant":"textbook4"})],
        ["∠DAB + ∠BAC + ∠CAE = 180°", reasonRef("angles.straightLine", {"variant":"textbook1"})],
        ["b + a + c = 180°", "Substitute the equal angles."],
        ["∴ a + b + c = 180°", "Rearrange the terms."]
      ]} /></div>}
      <p className="warning"><strong>Proving or applying?</strong> When proving this theorem, use established straight-line and parallel-line facts. Once it has been proved, you may cite “∠ sum of △” in later questions.</p>
    </section>

    <section className="lessonCard">
      <div className="lessonHeading"><span className="lessonNumber">3</span><div><p className="lessonLabel">PROVING THE EXTERIOR-ANGLE THEOREM</p><h2>Subtract the same adjacent angle</h2></div></div>
      <p>B, C and D are collinear in that order. Prove that the exterior angle <strong>e = a + b</strong>.</p>
      <div className="twoColumns"><figure><ExteriorDiagram /><figcaption>The interior angle c and exterior angle e form a straight angle.</figcaption></figure><div className="softPanel green"><p className="smallLabel">PLAN</p><h3>Find two expressions for 180°</h3><p>The triangle gives a + b + c = 180°. The straight line gives c + e = 180°. Remove c from both expressions.</p></div></div>
      <Proof caption="Proof of the exterior-angle theorem" rows={[
        ["a + b + c = 180°", reasonRef("triangle.angleSum", {"variant":"textbook1"})],
        ["c + e = 180°", reasonRef("angles.straightLine", {"variant":"textbook1"})],
        ["a + b + c = c + e", "Both expressions equal 180°."],
        ["∴ e = a + b", "Subtract c from both sides, then reverse the equality."]
      ]} />
      <div className="note"><strong>A useful consequence:</strong> e is greater than either remote interior angle, because a and b are both positive. Thus e &gt; a and e &gt; b.</div>
    </section>

    <section className="lessonCard">
      <div className="lessonHeading"><span className="lessonNumber">4</span><div><p className="lessonLabel">WORKED EXAMPLE 1</p><h2>Prove that two sides are perpendicular</h2></div></div>
      <p>In triangle ABC, <strong>∠BAC = 2x</strong>, <strong>∠ABC = 3x</strong> and <strong>∠ACB = x</strong>. Prove that <strong>AB ⟂ BC</strong>.</p>
      <div className="twoColumns"><figure><PerpendicularTriangle /><figcaption>No right-angle mark is supplied. Establish ∠ABC = 90° from the angle expressions.</figcaption></figure><div className="softPanel"><p className="smallLabel">TARGET</p><h3>Find x, then calculate 3x</h3><p>The angle enclosed by AB and BC is ∠ABC. Showing that this angle equals 90° completes the proof.</p></div></div>
      <details className="solution"><summary>Reveal the perpendicular-side proof</summary><div className="solutionBody"><Proof caption="From the triangle angle sum to perpendicular sides" rows={[
        ["2x + 3x + x = 180°", reasonRef("triangle.angleSum", {"variant":"textbook1"})], ["6x = 180°", "Collect like terms."], ["x = 30°", "Divide both sides by 6."], ["∠ABC = 3x = 90°", "Substitute x = 30°."], ["∴ AB ⟂ BC", reasonRef("geometry.perpendicular")]
      ]} /></div></details>
    </section>

    <section className="lessonCard workedCard">
      <div className="lessonHeading"><span className="lessonNumber">5</span><div><p className="lessonLabel">WORKED EXAMPLE 2</p><h2>Find an exterior angle and its adjacent interior angle</h2></div></div>
      <p>BC is extended to D. Given <strong>∠BAC = 64°</strong> and <strong>∠ABC = 48°</strong>, find <strong>x = ∠ACD</strong> and <strong>y = ∠ACB</strong>.</p>
      <div className="twoColumns"><figure><ExteriorDiagram numeric /><figcaption>x is outside the triangle; y is the adjacent angle inside it.</figcaption></figure><div className="softPanel green"><p className="smallLabel">CHOOSE THE REASON</p><h3>Use the two remote angles first</h3><p>64° and 48° are the remote interior angles for x. After finding x, use the straight-line pair x and y.</p></div></div>
      <details className="solution"><summary>Reveal the angle calculation</summary><div className="solutionBody"><Proof caption="Calculate x and y with a reason for each step" rows={[
        ["x = 64° + 48° = 112°", reasonRef("triangle.exteriorAngle", {"variant":"textbook1"})], ["x + y = 180°", reasonRef("angles.straightLine", {"variant":"textbook1"})], ["y = 180° − 112° = 68°", "Substitute x, then subtract."], ["∴ x = 112° and y = 68°", "The two required angles."]
      ]} /><p>Check using the triangle: 64° + 48° + 68° = 180°.</p></div></details>
      <p className="warning"><strong>Do not include the adjacent angle:</strong> the exterior angle is the sum of the two remote interior angles. Adding all three interior angles gives 180°, not x.</p>
    </section>

    <section className="lessonCard">
      <div className="lessonHeading"><span className="lessonNumber">6</span><div><p className="lessonLabel">WORKED EXAMPLE 3</p><h2>Use a triangle theorem to prove parallel lines</h2></div></div>
      <p>A, C and D are collinear in that order. In the figure, <strong>∠BAC = a</strong>, <strong>∠ABC = b</strong> and <strong>∠ADE = x</strong>. Given <strong>a + b = x</strong>, prove that <strong>BC // DE</strong>. Let e = ∠BCD.</p>
      <div className="twoColumns"><figure className="parallelTarget"><ParallelTargetDiagram /><figcaption>No parallel arrows are given: BC // DE is the conclusion to be proved.</figcaption></figure><div className="softPanel"><p className="smallLabel">CONNECT TWO THEOREMS</p><h3>Find an angle equality, then use a converse</h3><p>1. Use the exterior-angle theorem to express e in terms of a and b.</p><p>2. Compare e with x using the given equality.</p><p>3. Identify the equal alternate angles for transversal AD.</p></div></div>
      <details className="solution"><summary>Reveal the parallel-line proof</summary><div className="solutionBody"><Proof caption="An exterior angle followed by a parallel-line converse" rows={[
        ["a + b = x", reasonRef("geometry.given", {"variant":"textbook1"})], ["∠BCD = e = a + b", reasonRef("triangle.exteriorAngle", {"variant":"textbook1"})], ["∠BCD = x = ∠ADE", "Substitute the given equality and angle label."], ["∴ BC // DE", reasonRef("parallel.converseAlternate", {"params":{"line1":"BC","line2":"DE"},"variant":"textbook3"})]
      ]} /></div></details>
      <div className="note"><strong>Match each reason to its job.</strong> “ext. ∠ of △” establishes the angle equality. “alt. ∠s equal” then proves the lines parallel.</div>
    </section>

    <section className="lessonCard practiceCard" aria-labelledby="practiceTitle">
      <div className="lessonHeading"><span className="lessonNumber">7</span><div><p className="lessonLabel">QUICK CHECK</p><h2 id="practiceTitle">Check both the answer and the reason</h2></div></div>
      <p>Select one answer for each question. Read the explanation and change your choice if needed.</p><p className="supportText">This self-check resets when you reload the page.</p>
      {questions.map((question, questionIndex) => {
        const selected = answers[question.id], isAnswered = selected !== undefined, isCorrect = selected === question.answer;
        return <fieldset key={question.id} className="quizQuestion"><legend><span className="questionNumber">{questionIndex + 1}.</span> {question.prompt}</legend><div className="options">{question.options.map((option, optionIndex) => <label key={option} className={"option" + (selected === optionIndex ? " selectedOption" : "")}><input type="radio" name={"triangles-" + question.id} checked={selected === optionIndex} onChange={() => setAnswers(previous => ({ ...previous, [question.id]: optionIndex }))} aria-describedby={isAnswered ? "feedback-" + question.id : undefined} /><span>{option}</span></label>)}</div><div id={"feedback-" + question.id} aria-live="polite" aria-atomic="true">{isAnswered && <p className={"feedback " + (isCorrect ? "correctFeedback" : "retryFeedback")}><strong>{isCorrect ? "Correct. " : "Not quite. "}</strong><ReasonContent>{question.explanation}</ReasonContent></p>}</div></fieldset>;
      })}
      <div className="practiceFooter"><p role="status" aria-label="Self-check score">{answered} of {questions.length} answered · {correct} correct{correct === questions.length ? " — all correct!" : ""}</p><button type="button" className="secondaryButton" onClick={() => setAnswers({})}>Reset self-check</button></div>
    </section>

    <section className="summaryCard"><p className="lessonLabel">SECTION SUMMARY</p><h2>From triangle facts to a complete proof</h2>
      <ol className="summaryList"><li><strong>Interior angles:</strong> the three angles of a triangle sum to 180°.</li><li><strong>Exterior angle:</strong> add the two remote interior angles.</li><li><strong>Perpendicular lines:</strong> establish that the enclosed angle is 90°.</li><li><strong>Parallel lines:</strong> establish the required angle relationship, then apply a converse theorem.</li><li><strong>Proof:</strong> state the given conditions, justify each step and finish with the required conclusion.</li></ol>
      <div className="finishRow"><Link href="/maths/s2/chapter-6" className="primaryLink">Back to Chapter 6 →</Link><p>Next topic: Euclid and Elements. Open Section 4 from the chapter page when available.</p></div>
      <p><Link href="/maths/s2/chapter-6/proofs-relating-to-intersecting-and-parallel-lines" className="backLink">← Revisit Section 2</Link></p>
    </section>

    <style jsx>{`
      .trianglesPage { max-width: 1120px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.65; }
      .trianglesPage *, .trianglesPage *::before, .trianglesPage *::after { box-sizing: border-box; }
      .trianglesPage :global(.backLink) { display: inline-block; color: #047857; font-size: 17px; font-weight: 800; text-decoration: none; margin-bottom: 25px; }
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
      .twoColumns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; align-items: center; margin: 20px 0; }
      .twoColumns > * { min-width: 0; }
      .factGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin: 22px 0; }
      .factTile { border: 1px solid #ddd6fe; border-radius: 18px; padding: 22px 18px; background: #faf8ff; min-width: 0; }
      .factTile p { font-size: 16px; }
      .factEquation, .factTile .factEquation { font-size: clamp(23px, 2.6vw, 29px); font-weight: 800; color: #0f766e; line-height: 1.5; margin: 12px 0; }
      .reference { font-size: 14px !important; color: #5b21b6; font-weight: 750; }
      figure { margin: 0; background: #f8fafc; padding: 14px; border: 1px solid #dce4f1; border-radius: 19px; }
      figcaption { text-align: center; color: #52657e; font-size: 14px; line-height: 1.5; padding: 5px 8px 10px; }
      .softPanel { padding: 24px; background: #f5f3ff; border: 1px solid #e2d9fc; border-radius: 18px; }
      .softPanel p:last-child { margin-bottom: 0; }
      .green { background: #ecfdf5; border-color: #a7f3d0; }
      .green .smallLabel { color: #047857; }
      .stepButtons { display: flex; flex-wrap: wrap; gap: 12px; margin: 24px 0 16px; }
      .stepButtons button { flex: 1 1 220px; padding: 15px 18px; border: 1px solid #a78bfa; border-radius: 13px; color: #5b21b6; background: white; font: inherit; font-size: 16px; font-weight: 800; cursor: pointer; min-height: 48px; }
      .stepButtons button[aria-pressed="true"] { background: #6d28d9; color: white; }
      .note { background: #eff6ff; border-left: 4px solid #0ea5e9; padding: 18px 20px; border-radius: 13px; }
      .warning { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 18px 20px; border-radius: 13px; color: #794512; font-size: 17px; }
      .workedCard { border-color: #b7e7d9; }
      .supportText { color: #52657e; font-size: 15px; }
      .solution { margin-top: 22px; border: 1px solid #c4b5fd; border-radius: 16px; background: #faf8ff; }
      .solution summary { padding: 18px 22px; color: #5b21b6; font-size: 18px; font-weight: 800; cursor: pointer; }
      .solutionBody { padding: 0 17px 8px; }
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
      .trianglesPage :global(.primaryLink) { display: inline-block; flex-shrink: 0; padding: 14px 20px; border-radius: 13px; background: #047857; color: white; font-size: 16px; font-weight: 800; text-decoration: none; }
      .finishRow p { font-size: 15px; color: #52657e; margin: 0; }
      button:focus-visible, summary:focus-visible, input:focus-visible, .trianglesPage :global(a:focus-visible) { outline: 3px solid #2563eb; outline-offset: 4px; }
      @media (max-width: 820px) { .twoColumns, .factGrid { grid-template-columns: 1fr; } .finishRow { align-items: flex-start; flex-direction: column; } figure { max-width: 520px; width: 100%; margin: 0 auto; } .factTile :global(svg) { max-width: 480px; margin: 0 auto; } }
      @media (max-width: 520px) { .trianglesPage { width: calc(100% - 28px); margin-top: 26px; font-size: 17px; } .lessonCard, .summaryCard { padding: 22px 17px; border-radius: 20px; } .lessonHeading { gap: 12px; } .lessonNumber { width: 42px; height: 42px; border-radius: 13px; font-size: 21px; } .lessonLabel { font-size: 12px; } .introduction { font-size: 18px; } .quizQuestion { padding: 14px 10px; } legend { font-size: 17px; } .option { padding: 13px 11px; font-size: 16px; } .solution summary { padding: 16px; } .solutionBody { padding: 0 8px 8px; } .softPanel { padding: 19px; } .factTile { padding: 20px 12px; } }
    `}</style>
  </main>;
}
