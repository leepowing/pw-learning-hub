"use client";
import { reasonRef } from "@/data/maths/reasons/reasonBank";
import { DualReason, ReasonContent } from "@/components/maths/DualReason";



import { useState, type ReactNode } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-6/euclid-and-elements/page.tsx
// This lesson's self-check uses temporary React state, not flashcard progress.
type XY = readonly [number, number];
type ProofRow = readonly [statement: string, reason: string];
const navy = "#172d50", purple = "#6d28d9", teal = "#0f766e";
const bookOne = "https://mathcs.clarku.edu/~djoyce/elements/bookI/";

function Segment({ from, to, color = navy, dashed = false }: { from: XY; to: XY; color?: string; dashed?: boolean }) {
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={color} strokeWidth={3} strokeLinecap="round" strokeDasharray={dashed ? "8 6" : undefined} />;
}
function Point({ at, label, offset = [0, 27], dot = false }: { at: XY; label: string; offset?: XY; dot?: boolean }) {
  return <g>{dot && <circle cx={at[0]} cy={at[1]} r={4} fill={navy} />}<text x={at[0] + offset[0]} y={at[1] + offset[1]} fill={navy} fontSize={22} fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle">{label}</text></g>;
}
function polar(center: XY, radius: number, degrees: number): XY {
  return [center[0] + radius * Math.cos(degrees * Math.PI / 180), center[1] - radius * Math.sin(degrees * Math.PI / 180)];
}
function Angle({ center, from, to, label, color = purple, radius = 33, labelRadius = 60 }: {
  center: XY; from: XY; to: XY; label: string; color?: string; radius?: number; labelRadius?: number;
}) {
  const direction = (p: XY) => Math.atan2(center[1] - p[1], p[0] - center[0]) * 180 / Math.PI;
  const start = direction(from), turn = ((direction(to) - start + 540) % 360) - 180;
  const first = polar(center, radius, start), last = polar(center, radius, start + turn), textAt = polar(center, labelRadius, start + turn / 2);
  return <g data-angle={label} data-angle-degrees={Math.abs(turn)}><path d={`M ${first[0]} ${first[1]} A ${radius} ${radius} 0 0 ${turn < 0 ? 1 : 0} ${last[0]} ${last[1]}`} fill="none" stroke={color} strokeWidth={2.5} /><text x={textAt[0]} y={textAt[1] + 6} fill={color} textAnchor="middle" fontSize={23} fontWeight={700} fontFamily="Arial, sans-serif">{label}</text></g>;
}
function Diagram({ label, children, height = 330 }: { label: string; children: ReactNode; height?: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 480 ${height}`} role="img" aria-label={label} style={{ display: "block", width: "100%", height: "auto" }}>{children}</svg>;
}
function PostulateDiagram({ index }: { index: number }) {
  if (index === 0) return <Diagram label="A straight segment joins the two distinct points A and B."><Segment from={[80, 220]} to={[398, 95]} /><Point at={[80, 220]} label="A" dot /><Point at={[398, 95]} label="B" dot /></Diagram>;
  if (index === 1) return <Diagram label="The segment AB is continued in the same straight direction beyond B to C."><Segment from={[60, 230]} to={[270, 160]} /><Segment from={[270, 160]} to={[435, 105]} color={teal} dashed /><Point at={[60, 230]} label="A" dot /><Point at={[270, 160]} label="B" dot /><Point at={[435, 105]} label="C" dot /></Diagram>;
  if (index === 2) return <Diagram label="A circle has centre O and radius OA. Every point on its circumference is the same distance from O."><circle cx={240} cy={164} r={111} fill="none" stroke={teal} strokeWidth={2.5} /><Segment from={[240, 164]} to={[351, 164]} color={purple} /><Point at={[240, 164]} label="O" offset={[-13, 27]} dot /><Point at={[351, 164]} label="A" offset={[20, 8]} dot /><text x={293} y={147} textAnchor="middle" fill={purple} fontFamily="Georgia, serif" fontStyle="italic" fontSize={24}>r</text></Diagram>;
  if (index === 3) {
    const o: XY = [102, 235], p: XY = [330, 182], arm = 101, side = 24;
    const u = polar(p, arm, 35), v = polar(p, arm, 125), pu = polar(p, side, 35), pv = polar(p, side, 125);
    const corner: XY = [pu[0] + pv[0] - p[0], pu[1] + pv[1] - p[1]];
    return <Diagram label="Two right angles in different orientations are equal. Each measures 90 degrees in modern notation.">
      <Segment from={o} to={[102, 75]} /><Segment from={o} to={[220, 235]} /><path d="M 102 211 L 126 211 L 126 235" fill="none" stroke={purple} strokeWidth={2.5} />
      <Segment from={p} to={u} /><Segment from={p} to={v} /><path d={`M ${pu[0]} ${pu[1]} L ${corner[0]} ${corner[1]} L ${pv[0]} ${pv[1]}`} fill="none" stroke={teal} strokeWidth={2.5} />
      <text x={151} y={183} fill={purple} fontSize={24} fontFamily="Arial, sans-serif" fontWeight={700}>90°</text><text x={342} y={120} textAnchor="middle" fill={teal} fontSize={24} fontFamily="Arial, sans-serif" fontWeight={700}>90°</text>
      <Point at={o} label="O" offset={[-13, 28]} /><Point at={p} label="P" offset={[0, 30]} />
    </Diagram>;
  }
  const leftTop: XY = [45, 90], leftBottom: XY = [45, 286], meeting: XY = [423, 201];
  const x = 140, top: XY = [x, 90 + (x - 45) * 111 / 378], bottom: XY = [x, 286 - (x - 45) * 85 / 378];
  return <Diagram label="A transversal t cuts lines l and m. Interior angles a and b on its right have a sum less than 180 degrees. The lines meet at R on that side." height={350}>
    <Segment from={leftTop} to={meeting} /><Segment from={leftBottom} to={meeting} /><Segment from={[x, 36]} to={[x, 319]} color={teal} />
    <Angle center={top} from={meeting} to={bottom} label="a" radius={30} labelRadius={56} /><Angle center={bottom} from={top} to={meeting} label="b" color={teal} radius={30} labelRadius={56} />
    <Point at={leftTop} label="l" offset={[0, -17]} /><Point at={leftBottom} label="m" offset={[0, 29]} /><Point at={[x, 36]} label="t" offset={[0, -14]} /><Point at={meeting} label="R" offset={[18, 6]} dot />
  </Diagram>;
}
function EquilateralDiagram({ stage }: { stage: number }) {
  const a: XY = [184, 206], b: XY = [296, 206], length = b[0] - a[0];
  const c: XY = [(a[0] + b[0]) / 2, a[1] - Math.sqrt(3) * length / 2];
  return <Diagram label={stage === 0 ? "Start with the given segment AB." : stage === 1 ? "Two circles of radius AB have centres A and B. Their upper intersection is C." : "Join AC and BC. AC and AB are radii of the circle centred at A; BC and BA are radii of the circle centred at B."} height={350}>
    {stage >= 1 && <g data-construction-circles=""><circle cx={a[0]} cy={a[1]} r={length} fill="none" stroke={teal} strokeWidth={2} strokeDasharray="6 5" /><circle cx={b[0]} cy={b[1]} r={length} fill="none" stroke={purple} strokeWidth={2} strokeDasharray="6 5" /></g>}
    <g data-triangle-sides=""><Segment from={a} to={b} />{stage >= 2 && <><Segment from={a} to={c} /><Segment from={b} to={c} /></>}</g>
    <Point at={a} label="A" offset={[-13, 27]} dot /><Point at={b} label="B" offset={[13, 27]} dot />
    {stage >= 1 && <Point at={c} label="C" offset={[0, -20]} dot />}
  </Diagram>;
}
function OppositeAnglesDiagram() {
  const o: XY = [240, 169], a: XY = [43, 169], b: XY = [437, 169], c: XY = [136, 55], d: XY = [344, 283];
  return <Diagram label="Straight lines AB and CD intersect at O. Angles a and c are vertically opposite; each is adjacent to angle b.">
    <Segment from={a} to={b} /><Segment from={c} to={d} />
    <Angle center={o} from={c} to={a} label="a" radius={34} labelRadius={62} /><Angle center={o} from={b} to={c} label="b" color={teal} radius={40} labelRadius={69} /><Angle center={o} from={d} to={b} label="c" radius={34} labelRadius={62} />
    <Point at={a} label="A" offset={[-14, 7]} /><Point at={b} label="B" offset={[14, 7]} /><Point at={c} label="C" offset={[-12, -12]} /><Point at={d} label="D" offset={[14, 19]} /><Point at={o} label="O" offset={[-10, 29]} />
  </Diagram>;
}
function Proof({ caption, rows }: { caption: string; rows: readonly ProofRow[] }) {
  return <div style={{ overflowX: "auto", margin: "22px 0", border: "1px solid #cbd5e1", borderRadius: 16 }}>
    <table style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", textAlign: "left", background: "white", fontSize: 16, lineHeight: 1.65 }}>
      <caption style={{ textAlign: "left", padding: "14px 16px", color: "#52657e", background: "#f8fafc", fontWeight: 700 }}>{caption}</caption>
      <thead><tr>{["Statement", "Reason"].map(label => <th key={label} scope="col" style={{ padding: "13px 16px", background: teal, color: "white" }}>{label}</th>)}</tr></thead>
      <tbody>{rows.map(([statement, reason], index) => <tr key={index} style={{ background: index === rows.length - 1 ? "#ecfdf5" : "white" }}><td style={{ padding: "13px 16px", borderTop: "1px solid #dce4f1", verticalAlign: "top", overflowWrap: "anywhere", fontWeight: 650 }}>{statement}</td><td style={{ padding: "13px 16px", borderTop: "1px solid #dce4f1", borderLeft: "1px solid #dce4f1", verticalAlign: "top", overflowWrap: "anywhere", color: "#52657e" }}><ReasonContent>{reason}</ReasonContent></td></tr>)}</tbody>
    </table>
  </div>;
}

const postulates = [
  { name: "Join points", statement: "Two distinct points can be joined by a straight segment.", reading: "Choose A and B; draw the straight segment AB.", equation: "Join A to B.", source: "post1.html" },
  { name: "Extend a segment", statement: "A straight segment can be continued in the same straight direction.", reading: "Extend AB beyond B. The continuation must stay on the same straight line.", equation: "A, B and C are collinear.", source: "post2.html" },
  { name: "Draw a circle", statement: "A circle can be drawn with a chosen centre and radius.", reading: "Place the centre at O and use OA as the radius. This is the circle construction allowed in the Elements.", equation: "Centre O · Radius OA", source: "post3.html" },
  { name: "Compare right angles", statement: "Any two right angles have equal size.", reading: "Turning or moving the drawing does not change a right angle. In modern degree notation, each is 90°.", equation: "90° = 90°", source: "post4.html" },
  { name: "The parallel postulate", statement: "When a transversal cuts two lines in the same plane, and the interior angles on one side sum to less than 180°, the lines meet on that side when extended.", reading: "Here a + b < 180°, so l and m meet at R to the right of t. This is a simplified account of Euclid's original fifth postulate, used to develop his theory of parallel lines.", equation: "a + b < 180°", source: "post5.html" },
];
const constructionSteps = [
  { button: "1 · Given segment", title: "Start with AB", text: "The task is to construct an equilateral triangle with AB as one side." },
  { button: "2 · Draw two circles", title: "Keep the same radius", text: "Draw a circle centred at A through B, and one centred at B through A. Label their upper intersection C." },
  { button: "3 · Join and prove", title: "Join C to A and B", text: "The new triangle looks equilateral. Its equal sides must now be justified using the circles." },
];
const questions = [
  { id: "contribution", prompt: "What was a major contribution of Euclid's Elements?", options: ["It replaced proofs with accurate measurements.", "It organised mathematical knowledge into a systematic development with proofs.", "It showed that every statement should be accepted without a reason."], answer: 1, explanation: "Euclid organised earlier mathematical knowledge into a deductive presentation. Definitions and accepted starting points support proofs of later results." },
  { id: "definition", prompt: "An equilateral triangle is a triangle with three equal sides. What role does this statement play?", options: ["Definition", "Measurement", "Conjecture"], answer: 0, explanation: "It specifies what the term equilateral triangle means. In a particular question, you must still establish that the triangle has three equal sides." },
  { id: "axiom", prompt: "If two lengths both equal a third length, they equal one another. In Euclid's framework, this is an example of which starting point?", options: ["A drawing convention", "A conclusion based only on appearance", "A common notion (axiom)"], answer: 2, explanation: "This is the equality principle used to connect AC = AB and BC = AB in the construction." },
  { id: "postulate", prompt: "Which statement describes Euclid's circle postulate?", options: ["Every triangle has three equal sides.", "A circle can be drawn with a chosen centre and radius.", "Every curved line is part of a circle."], answer: 1, explanation: "The third postulate permits the circle construction. A circle's radii are equal by its defining property." },
  { id: "theorem", prompt: "The interior angles of a triangle add up to 180°. In the Euclidean geometry studied here, what role does this result have?", options: ["A theorem supported by a proof", "The definition of every three-sided shape", "A statement established by measuring one triangle"], answer: 0, explanation: "Section 3 proved the result using a parallel through a vertex and established angle facts. It can then be cited as a theorem." },
  { id: "construction", prompt: "In the two-circle construction, why does AC equal BC?", options: ["The triangle looks symmetrical.", "The two sides have similar positions on the screen.", "AC = AB and BC = AB, so both equal the same length."], answer: 2, explanation: "Use equal radii within each circle, then the common notion about equality. The drawing helps you follow the proof; its appearance is not the proof." },
];

export default function EuclidAndElementsPage() {
  const [postulate, setPostulate] = useState(0);
  const [stage, setStage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const answered = questions.filter(question => answers[question.id] !== undefined).length;
  const correct = questions.filter(question => answers[question.id] === question.answer).length;

  return <main className="euclidPage">
    <Link href="/maths/s2/chapter-6" className="backLink">← Back to Chapter 6</Link>
    <header><p className="eyebrow">S2 · CHAPTER 6 · SECTION 4</p><h1>Euclid and <em>Elements</em></h1><p className="introduction">Discover how geometry can be built from clear meanings, accepted starting points and carefully justified conclusions. Connect Euclid's approach to the proofs you have written in this chapter.</p><div className="objectives"><span>Euclid's contribution</span><span>Definitions and starting points</span><span>Five postulates</span><span>Deductive proof</span></div></header>

    <section className="lessonCard">
      <div className="lessonHeading"><span className="lessonNumber">1</span><div><p className="lessonLabel">A MATHEMATICAL LEGACY</p><h2>Who was Euclid?</h2></div></div>
      <div className="twoColumns"><div><p><strong>Euclid</strong> was a Greek mathematician who taught in Alexandria, Egypt. His best-known work, <em>Elements</em>, organised mathematical knowledge into a systematic presentation with proofs.</p><p>It contains <strong>13 books</strong> covering topics such as plane geometry, number theory and solid geometry. Euclid drew on the work of earlier mathematicians.</p><p className="sourceNote">Historical background: <a href="https://mathshistory.st-andrews.ac.uk/Biographies/Euclid/" target="_blank" rel="noreferrer">MacTutor, University of St Andrews</a>.</p></div><div className="softPanel green"><p className="smallLabel">THE IDEA TO REMEMBER</p><h3>Explain why a result follows</h3><p>A mathematical statement becomes useful in a proof when its meaning and justification are clear. This approach connects the facts you know to new conclusions.</p></div></div>
    </section>

    <section className="lessonCard" aria-labelledby="rolesTitle">
      <div className="lessonHeading"><span className="lessonNumber">2</span><div><p className="lessonLabel">THE STRUCTURE OF A DEDUCTIVE SYSTEM</p><h2 id="rolesTitle">Four terms with different jobs</h2></div></div>
      <div className="rolesGrid">
        <article className="factTile"><p className="smallLabel">GIVE A MEANING</p><h3>Definition</h3><p>Specifies what a word or mathematical object means.</p><p className="exampleLine">An equilateral triangle has three equal sides.</p><p>Use the definition when identifying or describing the object.</p></article>
        <article className="factTile"><p className="smallLabel">ACCEPT A GENERAL STARTING POINT</p><h3>Axiom / common notion</h3><p>A basic principle accepted for use in the system, such as a rule about equality.</p><p className="exampleLine">If u = v and w = v, then u = w.</p><p>This rule lets us connect two equalities.</p></article>
        <article className="factTile"><p className="smallLabel">ACCEPT A GEOMETRIC STARTING POINT</p><h3>Postulate</h3><p>An assumption about geometric objects or permitted constructions.</p><p className="exampleLine">A circle can be drawn with a chosen centre and radius.</p><p>It supplies a starting point for geometric reasoning.</p></article>
        <article className="factTile"><p className="smallLabel">ESTABLISH A RESULT</p><h3>Theorem</h3><p>A statement proved using definitions, accepted starting points and previously established results.</p><p className="exampleLine">The interior angles of a triangle sum to 180°.</p><p>You proved this in Section 3 and may use it in later proofs.</p></article>
      </div>
      <div className="note"><strong>Accepted within a system:</strong> axioms and postulates are starting assumptions; a theorem needs a proof. Here “axiom” is used for Euclid's common notions, while “postulate” refers to his geometric starting points.</div>
      <div className="twoColumns commonNotions"><div className="softPanel"><p className="smallLabel">COMMON NOTION 1 · EQUALITY</p><h3>Compare with the same quantity</h3><p>If AB = EF and CD = EF, then AB = CD.</p></div><div className="softPanel green"><p className="smallLabel">COMMON NOTION 3 · SUBTRACTION</p><h3>Remove equal amounts from equals</h3><p>If a + b = c + b, subtracting b from both sides gives a = c.</p></div></div>
      <p className="sourceNote">Examples adapted from <a href={bookOne + "cn.html"} target="_blank" rel="noreferrer">Euclid's Common Notions</a>.</p>
    </section>

    <section className="lessonCard workedCard" aria-labelledby="postulatesTitle">
      <div className="lessonHeading"><span className="lessonNumber">3</span><div><p className="lessonLabel">EUCLID'S FIVE POSTULATES</p><h2 id="postulatesTitle">Explore the geometric starting points</h2></div></div>
      <p>These are simplified explanations of the five postulates at the start of Book I. Select each one to see its meaning.</p>
      <div className="postulateButtons" role="group" aria-label="Choose a postulate">{postulates.map((item, index) => <button type="button" key={item.name} aria-pressed={postulate === index} onClick={() => setPostulate(index)}>{index + 1} · {item.name}</button>)}</div>
      <div className="twoColumns postulateExplorer"><figure><PostulateDiagram index={postulate} /><figcaption>{postulates[postulate].equation}</figcaption></figure><div className="softPanel" aria-live="polite" role="status"><p className="smallLabel">POSTULATE {postulate + 1}</p><h3>{postulates[postulate].name}</h3><p><strong>{postulates[postulate].statement}</strong></p><p>{postulates[postulate].reading}</p><p className="sourceNote"><a href={bookOne + postulates[postulate].source} target="_blank" rel="noreferrer">Read Postulate {postulate + 1} in the translated text</a>.</p></div></div>
      <p className="supportText">The fifth postulate concerns two lines in the same plane. Its angle condition is essential: it is not a claim that every pair of lines must meet.</p>
    </section>

    <section className="lessonCard" aria-labelledby="constructionTitle">
      <div className="lessonHeading"><span className="lessonNumber">4</span><div><p className="lessonLabel">SEE THE METHOD IN ACTION</p><h2 id="constructionTitle">Construct an equilateral triangle</h2></div></div>
      <p>The first proposition of <em>Elements</em> constructs an equilateral triangle on a given segment. Follow the construction, then examine why its sides are equal.</p>
      <div className="stepButtons" role="group" aria-label="Explore the equilateral triangle construction">{constructionSteps.map((item, index) => <button type="button" key={item.button} aria-pressed={stage === index} onClick={() => setStage(index)}>{item.button}</button>)}</div>
      <div className="twoColumns constructionArea"><figure><EquilateralDiagram stage={stage} /><figcaption>{stage === 0 ? "AB is the given segment." : stage === 1 ? "Both circles use the length AB as their radius." : "AC and BC join the upper intersection to the two centres."}</figcaption></figure><div className="softPanel green" role="status" aria-live="polite"><p className="smallLabel">STEP {stage + 1} OF 3</p><h3>{constructionSteps[stage].title}</h3><p>{constructionSteps[stage].text}</p>{stage >= 1 && <p className="supportText">The first circle has centre A; the second has centre B.</p>}</div></div>
      {stage === 2 && <div className="constructionProof"><Proof caption="Why the constructed triangle is equilateral" rows={[
        ["AC = AB", reasonRef("geometry.equalRadii")], ["BC = BA", reasonRef("geometry.equalRadii")], ["AC = BC", "Both equal AB; use Common Notion 1."], ["AB = BC = CA", "Combine the equalities."], ["∴ △ABC is equilateral.", reasonRef("triangle.equilateralSides", {"variant":"textbook1"})]
      ]} /><div className="note"><strong>Notice the roles:</strong> Postulate 3 permits the circles, Postulate 1 permits the joining segments, equal radii supply the equalities, and a definition names the resulting triangle.</div></div>}
      <p className="sourceNote">Adapted from <a href={bookOne + "propI1.html"} target="_blank" rel="noreferrer">Book I, Proposition 1</a>.</p>
    </section>

    <section className="lessonCard workedCard">
      <div className="lessonHeading"><span className="lessonNumber">5</span><div><p className="lessonLabel">CONNECT TO THIS CHAPTER</p><h2>The same reasoning appears in your angle proofs</h2></div></div>
      <p>Recall the proof that vertically opposite angles are equal. <strong>AOB and COD are straight lines</strong>. Follow how equality and subtraction connect the two angle equations.</p>
      <div className="twoColumns"><figure><OppositeAnglesDiagram /><figcaption>Angle b is adjacent to both a and c.</figcaption></figure><div className="softPanel"><p className="smallLabel">THINK ABOUT THE REASONS</p><h3>Both totals equal 180°</h3><p>Use a previously established straight-line angle fact, compare the equal totals, then subtract the shared angle b.</p><p>Every step has a mathematical reason.</p></div></div>
      <details className="solution"><summary>Reveal the proof and its foundations</summary><div className="solutionBody"><Proof caption="A chapter proof using common notions" rows={[
        ["a + b = 180°", reasonRef("angles.straightLine", {"variant":"textbook1"})], ["b + c = 180°", reasonRef("angles.straightLine", {"variant":"textbook1"})], ["a + b = b + c", "Both totals equal 180°; Common Notion 1."], ["∴ a = c", "Subtract the same b from both sides; Common Notion 3."]
      ]} /></div></details>
      <div className="note"><strong>Your proof-writing habit:</strong> identify the given conditions, choose an established fact, show the logical steps, and state the conclusion. A diagram guides the reasoning; measuring or inspecting it does not replace a proof.</div>
      <div className="chapterLinks"><Link href="/maths/s2/chapter-6/introduction-to-deductive-reasoning">Section 1 · Structure of a proof →</Link><Link href="/maths/s2/chapter-6/proofs-relating-to-intersecting-and-parallel-lines">Section 2 · Lines and angle reasons →</Link><Link href="/maths/s2/chapter-6/proofs-relating-to-triangles">Section 3 · Triangle proofs →</Link></div>
    </section>

    <section className="lessonCard practiceCard" aria-labelledby="practiceTitle">
      <div className="lessonHeading"><span className="lessonNumber">6</span><div><p className="lessonLabel">QUICK CHECK</p><h2 id="practiceTitle">Identify the role of each idea</h2></div></div>
      <p>Select an answer, then read the explanation. You can change your choice and try again.</p><p className="supportText">This self-check resets when you reload the page.</p>
      {questions.map((question, questionIndex) => {
        const selected = answers[question.id], isAnswered = selected !== undefined, isCorrect = selected === question.answer;
        return <fieldset key={question.id} className="quizQuestion"><legend><span className="questionNumber">{questionIndex + 1}.</span> {question.prompt}</legend><div className="options">{question.options.map((option, optionIndex) => <label key={option} className={"option" + (selected === optionIndex ? " selectedOption" : "")}><input type="radio" name={"euclid-" + question.id} checked={selected === optionIndex} onChange={() => setAnswers(previous => ({ ...previous, [question.id]: optionIndex }))} aria-describedby={isAnswered ? "feedback-" + question.id : undefined} /><span>{option}</span></label>)}</div><div id={"feedback-" + question.id} aria-live="polite" aria-atomic="true">{isAnswered && <p className={"feedback " + (isCorrect ? "correctFeedback" : "retryFeedback")}><strong>{isCorrect ? "Correct. " : "Not quite. "}</strong><ReasonContent>{question.explanation}</ReasonContent></p>}</div></fieldset>;
      })}
      <div className="practiceFooter"><p role="status" aria-label="Self-check score">{answered} of {questions.length} answered · {correct} correct{correct === questions.length ? " — all correct!" : ""}</p><button type="button" className="secondaryButton" onClick={() => setAnswers({})}>Reset self-check</button></div>
    </section>

    <section className="summaryCard"><p className="lessonLabel">SECTION AND CHAPTER SUMMARY</p><h2>Give every conclusion a reason</h2><ol className="summaryList"><li><strong>Definitions</strong> clarify what terms mean.</li><li><strong>Axioms and postulates</strong> provide accepted starting points.</li><li><strong>Proofs</strong> connect starting facts to justified conclusions.</li><li><strong>Theorems</strong> are proved results that can support later proofs.</li></ol><div className="finishRow"><Link href="/maths/s2/chapter-6" className="primaryLink">Back to Chapter 6 →</Link><p>This is the final learning section of Chapter 6. Revisit any section from the chapter page.</p></div></section>

    <style jsx>{`

      .euclidPage { max-width: 1120px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.65; }
      .euclidPage *, .euclidPage *::before, .euclidPage *::after { box-sizing: border-box; }
      .euclidPage :global(.backLink) { display: inline-block; color: #047857; font-size: 17px; font-weight: 800; text-decoration: none; margin-bottom: 25px; }
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
      .euclidPage :global(.primaryLink) { display: inline-block; flex-shrink: 0; padding: 14px 20px; border-radius: 13px; background: #047857; color: white; font-size: 16px; font-weight: 800; text-decoration: none; }
      .finishRow p { font-size: 15px; color: #52657e; margin: 0; }
      button:focus-visible, summary:focus-visible, input:focus-visible, .euclidPage :global(a:focus-visible) { outline: 3px solid #2563eb; outline-offset: 4px; }
      @media (max-width: 820px) { .twoColumns, .factGrid { grid-template-columns: 1fr; } .finishRow { align-items: flex-start; flex-direction: column; } figure { max-width: 520px; width: 100%; margin: 0 auto; } .factTile :global(svg) { max-width: 480px; margin: 0 auto; } }
      @media (max-width: 520px) { .euclidPage { width: calc(100% - 28px); margin-top: 26px; font-size: 17px; } .lessonCard, .summaryCard { padding: 22px 17px; border-radius: 20px; } .lessonHeading { gap: 12px; } .lessonNumber { width: 42px; height: 42px; border-radius: 13px; font-size: 21px; } .lessonLabel { font-size: 12px; } .introduction { font-size: 18px; } .quizQuestion { padding: 14px 10px; } legend { font-size: 17px; } .option { padding: 13px 11px; font-size: 16px; } .solution summary { padding: 16px; } .solutionBody { padding: 0 8px 8px; } .softPanel { padding: 19px; } .factTile { padding: 20px 12px; } }
    
      .rolesGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; margin: 22px 0; }
      .exampleLine { padding: 12px 15px; background: white; border: 1px solid #ddd6fe; border-radius: 12px; font-weight: 750; color: #0f766e; }
      .commonNotions { align-items: stretch; }
      .postulateButtons { display: flex; flex-wrap: wrap; gap: 10px; margin: 22px 0; }
      .postulateButtons button { flex: 1 1 175px; padding: 13px 15px; background: white; border: 1px solid #a78bfa; border-radius: 13px; color: #5b21b6; font: inherit; font-size: 16px; font-weight: 800; cursor: pointer; min-height: 48px; }
      .postulateButtons button[aria-pressed="true"] { color: white; background: #6d28d9; }
      .sourceNote, .factTile .sourceNote { font-size: 14px; color: #52657e; }
      .sourceNote a { color: #047857; text-underline-offset: 3px; }
      .chapterLinks { display: grid; gap: 10px; margin-top: 24px; }
      .chapterLinks :global(a) { display: block; padding: 14px 18px; border: 1px solid #dce4f1; border-radius: 12px; color: #047857; background: #f8fafc; font-weight: 750; font-size: 16px; text-decoration: none; }
      .chapterLinks :global(a:hover) { border-color: #0f766e; background: #ecfdf5; }
      @media (max-width: 820px) { .rolesGrid { grid-template-columns: 1fr; } }

    `}</style>
  </main>;
}
