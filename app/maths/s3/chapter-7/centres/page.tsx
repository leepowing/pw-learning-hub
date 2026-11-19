import Link from "next/link";
import styles from "../more-proofs/lesson.module.css";

const home = "/maths/s3/chapter-7";
const centres = [
  ["I","Incentre","Internal angle bisectors","Always inside. Its perpendicular distances to the sides are equal. A circle with this distance as radius touches all three sides."],
  ["O","Circumcentre","Perpendicular bisectors","Equally far from the vertices. The circle with radius OA passes through A, B and C. O is inside an acute triangle, outside an obtuse triangle and at the midpoint of the hypotenuse in a right triangle."],
  ["G","Centroid","Medians","Always inside. Each median joins a vertex to the opposite midpoint. A uniform triangular sheet balances at G. Along each median the vertex-to-centroid length is twice the centroid-to-midpoint length."],
  ["H","Orthocentre","Altitudes","Inside an acute triangle and at the right-angled vertex of a right triangle. In an obtuse triangle, extend the altitude lines to meet outside."]
];
const proofs = [
  ["Why does the third angle bisector pass through I?", [
    ["Let the bisectors at A and B meet at I.","Each bisector lies inside its vertex angle.","construction"],
    ["I is equally far from AB and AC, and from AB and BC.","A point on an angle bisector has equal perpendicular distances to its two sides.","property of ∠ bisector"],
    ["CI bisects angle ACB.","The perpendicular distances from I to AC and BC are equal. An interior point with this property lies on their angle bisector.","converse of ∠ bisector property"]
  ]],
  ["Why does the third perpendicular bisector pass through O?", [
    ["Let the perpendicular bisectors of AB and BC meet at O.","The two sides have different directions, so their perpendicular bisectors intersect.","construction"],
    ["OA = OB and OB = OC.","Every point on a perpendicular bisector is equally far from the two endpoints.","property of ⊥ bisector"],
    ["O lies on the perpendicular bisector of AC.","OA = OC, so the converse of the perpendicular bisector property applies.","converse of ⊥ bisector property"]
  ]]
] as const;

export default function CentresPage() {
  return <main className={styles.lesson}><Link href={home}>← Back to Chapter 7</Link>
    <header><strong>SECTION 7.3</strong><h1>Centres of Triangles</h1><p>Choose a centre from its defining lines, justify where it lies and locate it with compasses and a straight edge.</p></header>
    <section className={styles.learning}><h2>Four ways for three lines to meet</h2><p>Three lines are concurrent when all three pass through one point. Look at the same scalene triangle below. Changing the construction changes the point of intersection.</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:24}}>{centres.map(([symbol,name,lines,description])=><article key={symbol}><h3>{name} · {symbol}</h3><img className={styles.figure} src={home+"/centres/"+symbol+".svg"} alt={lines+" meeting at "+symbol} width="250" height="215"/><b>{lines}</b><p>{description}</p></article>)}</div></section>
    {proofs.map(([title,steps])=><section key={title}><strong>WORKED PROOF</strong><h2>{title}</h2><table><thead><tr><th>Statement</th><th>Reason</th></tr></thead><tbody>{steps.map(([statement,reason,short])=><tr key={statement}><td>{statement}</td><td>{reason}<small>HKDSE · {short}</small></td></tr>)}</tbody></table></section>)}
    <section><h2>Using the centre in a calculation</h2>
    <h3>Recover a perimeter from medians</h3><p>Two medians meet AB and AC at their midpoints F and E. If AF = 5 cm, AE = 6 cm and BC = 9 cm, then AB = 10 cm and AC = 12 cm. The perimeter is <b>31 cm</b>.</p>
    <h3>Find an angle at the incentre</h3><p>If angle A = 64°, the angles at B and C sum to 116°. BI and CI bisect them, so the two angles at B and C in triangle BIC sum to 58°. Hence angle BIC = 180° − 58° = <b>122°</b>.</p>
    <h3>Use two radii</h3><p>O is the circumcentre and angle BOC = 124°. OB = OC because both are radii. Triangle BOC has equal base angles, so angle OBC = (180° − 124°) ÷ 2 = <b>28°</b>.</p></section>
    <section><h2>Construct each centre on paper</h2><p>Draw a scalene triangle. Use an unmarked straight edge and compasses. Keep the construction arcs visible. Two lines locate the centre and the third checks it.</p>
    <ol><li><b>Incentre.</b> Draw an arc centred at A cutting both arms of angle A. From the two cuts draw equal arcs meeting inside the angle away from A. Join A to their intersection. Repeat at B and mark I.</li>
    <li><b>Circumcentre.</b> Open the compasses wider than half AB. From A and B draw equal arcs crossing on both sides of AB. Join the crossings. Repeat on BC and mark O. Check that a circle centred at O passes through all three vertices.</li>
    <li><b>Centroid.</b> Use perpendicular bisectors to mark the midpoints of BC and AC. Join these midpoints to A and B respectively. Mark their intersection G.</li>
    <li><b>Orthocentre.</b> From A draw an arc cutting the line BC twice, extending BC if necessary. From those cuts draw equal arcs meeting on the other side of BC. Join A to that crossing. Repeat from B to the line AC and mark H.</li></ol></section>
    <section><h2>Common mistake</h2><p>A centre outside the triangle could be O or H. Trace the marked lines. A perpendicular through a side midpoint helps locate O. A perpendicular from the opposite vertex helps locate H.</p></section>
    <section className={styles.learning}><h2>Section summary</h2><p>For a point equally far from three roads forming a triangle, choose the incentre inside the triangle. For a point equally far from three landmarks at the vertices, choose the circumcentre. Use medians for balance and altitudes for the orthocentre.</p><Link href={home+"/checkpoint"}>Start the Chapter 7 Checkpoint →</Link></section><Link href={home}>← Back to Chapter 7</Link></main>;
}
