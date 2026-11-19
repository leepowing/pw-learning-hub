import Link from "next/link";
import katex from "katex";
import styles from "../more-proofs/lesson.module.css";

const home = "/maths/s3/chapter-7";
function Diagram({name, alt}: {name: string, alt: string}) {
  return <img className={styles.figure} src={home + "/lines/proof-" + name + ".svg"} width="320" height="180" alt={alt}/>;
}
type Step = [string, string, string];
function Proof({steps}: {steps: Step[]}) {
  return <table><thead><tr><th>Statement</th><th>Reason</th></tr></thead><tbody>
    {steps.map(([statement,reason,short]) => <tr key={statement}><td>{statement}</td><td>{reason}<small>HKDSE · {short}</small></td></tr>)}
  </tbody></table>;
}
const lines = [
  ["angle","Angle bisector","AD splits angle BAC into two equal angles. Look for matching arcs at A."],
  ["median","Median","AD joins vertex A to the midpoint of BC. Matching ticks show BD = DC."],
  ["altitude","Altitude","AD gives the perpendicular height from A to the line through BC. The square marks a right angle."],
  ["perpendicular","Perpendicular bisector","PM crosses BC at its midpoint at 90°. Both the ticks and the square matter. The line can miss vertex A."]
];
export default function LinesInTriangles() {
  return <main className={styles.lesson}><Link href={home}>← Back to Chapter 7</Link>
    <header><strong>SECTION 7.2</strong><h1>Lines in Triangles</h1><p>Read the markings on a triangle, then use perpendicular distances to decide which line a point lies on.</p></header>
    <section className={styles.learning}><strong>LEARNING CARD 1</strong><h2>Recognise the four lines</h2>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:20}}>{lines.map(([name,title,description])=><div key={name}><h3>{title}</h3><Diagram name={name} alt={description}/><p>{description}</p></div>)}</div>
    <p>A triangle has three lines of each type. Every median lies inside. In an acute triangle all three altitudes lie inside. In an obtuse triangle two meet extended sides. In a right-angled triangle the two legs are themselves altitudes.</p></section>
    <section><strong>WORKED EXAMPLE 1</strong><h2>Recover the whole base</h2><p>In the median diagram, suppose DC is 5 cm and the perpendicular height from A to BC is 6 cm. Find the area.</p><p>D is the midpoint, so BC = 2 × 5 = 10 cm. Pair that base with its perpendicular height.</p><div className={styles.answer} dangerouslySetInnerHTML={{__html:katex.renderToString(String.raw`\text{Area}=\tfrac12\times10\times6=30\ \mathrm{cm}^2`)}}/></section>
    <section><strong>WORKED EXAMPLE 2</strong><h2>Combine an altitude and an angle bisector</h2><p>Triangle ABC has a right angle at B, so AB is an altitude to BC. D lies on AC, BD bisects angle ABC and angle BAC is 32°. Find angle ADB.</p><Proof steps={[
    ["∠ABD = 45°","An angle bisector divides the right angle into two equal angles.","bisector of ∠ABC"],
    ["∠ADB = 180° − 32° − 45°","The interior angles of triangle ABD add up to 180°.","∠ sum of △"]
    ]}/><p className={styles.answer}>Angle ADB is 103°.</p></section>
    <section className={styles.learning}><strong>LEARNING CARD 2</strong><h2>Equal distances from two sides</h2><Diagram name="locus" alt="P inside angle AOB, with perpendicular feet E and F on OA and OB."/><p>The distance from a point to a straight line is the length of the perpendicular. If P lies on the internal bisector of angle AOB, its distances PE and PF to the sides are equal. Conversely, an interior point with equal perpendicular distances lies on the internal bisector.</p></section>
    <section><strong>WORKED EXAMPLE 3</strong><h2>Prove the angle bisector property in both directions</h2><p>In the diagram above, start with OP bisecting angle AOB.</p><Proof steps={[
    ["∠OEP = ∠OFP = 90°","Each distance is measured perpendicular to its side.","⊥ distances"],
    ["∠EOP = ∠FOP","OP divides the angle into two equal parts.","∠ bisector"],
    ["△OEP ≅ △OFP","Two pairs of angles are equal and OP is a shared corresponding side.","AAS"],
    ["PE = PF","Corresponding sides of congruent triangles are equal.","corr. sides, ≅ △s"]
    ]}/><p className={styles.answer}>Reverse the argument starting with PE = PF. The right triangles have equal hypotenuse OP and an equal shorter side, so they are congruent by RHS. Their corresponding angles at O are equal, which proves OP bisects angle AOB.</p></section>
    <section className={styles.learning}><strong>LEARNING CARD 3</strong><h2>Equal distances from two endpoints</h2><Diagram name="equal" alt="P above the midpoint M of AB, with PM perpendicular to AB."/><p>Every point on the perpendicular bisector of AB is the same distance from A and B. Conversely, PA = PB places P on that perpendicular bisector.</p></section>
    <section><strong>WORKED EXAMPLE 4</strong><h2>Why does the midpoint matter?</h2><p>Use the diagram above to prove PA = PB.</p><Proof steps={[
    ["AM = BM and ∠AMP = ∠BMP = 90°","A perpendicular bisector crosses the segment at its midpoint at right angles.","⊥ bisector"],
    ["△AMP ≅ △BMP","AM and BM are equal, MP is shared and the included angles are equal.","SAS"],
    ["PA = PB","Corresponding sides of congruent triangles are equal.","corr. sides, ≅ △s"]
    ]}/><p className={styles.answer}>Conversely, given PA = PB and midpoint M, triangles AMP and BMP are congruent by SSS. Their equal angles at M form a straight angle, so both are 90°. Hence PM is the perpendicular bisector. If P coincides with M, it already lies on the bisector.</p></section>
    <section><strong>WORKED EXAMPLE 5</strong><h2>Find a side from two perimeters</h2><p>E lies between A and C and on the perpendicular bisector of AB. Triangles ABC and BCE have perimeters 48 cm and 31 cm. Find AB.</p><Proof steps={[
    ["EA = EB","A point on the perpendicular bisector is equidistant from the endpoints.","property of ⊥ bisector"],
    ["BC + AC = BC + CE + EB = 31 cm","AC is the sum of AE and EC, and AE can be replaced by EB.","A, E, C collinear"],
    ["AB = 48 − 31 = 17 cm","Subtract the other two sides from the perimeter of triangle ABC.","perimeter of △"]
    ]}/></section>
    <section><h2>Try it yourself</h2><p>Triangle ABC has AB = AC. M is the midpoint of BC. Prove that the median AM is also an altitude and an angle bisector.</p><details><summary>Show proof</summary><p>AB = AC, BM = CM and AM is shared. Triangles ABM and ACM are congruent by SSS. Their corresponding angles at A are equal, so AM bisects angle BAC. Their corresponding angles at M are also equal and add to 180° on the straight line BC. Each is 90°, so AM is an altitude.</p></details></section>
    <section><h2>Common mistakes</h2><p>A midpoint alone establishes a median from the opposite vertex. In the median diagram, AD slopes towards D, while the perpendicular height meets BC directly below A. Using AD as the height would overestimate the area.</p><p>Check what the distances are measured to. Equal lengths PA and PB locate P relative to two endpoints. To use the angle bisector property, measure perpendicular distances to the two sides.</p></section>
    <section className={styles.learning}><h2>Section summary</h2><p>Use angle arcs for an angle bisector, a midpoint and a vertex for a median, and a vertex and a right angle for an altitude. A perpendicular bisector requires both a midpoint and a right angle. Use the converse of each bisector property when equal distances are given and the line is to be identified.</p></section><Link href={home}>← Back to Chapter 7</Link></main>;
}
