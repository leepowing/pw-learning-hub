import Link from "next/link";
import styles from "../../chapter-8/chapter.module.css";
import SliceExplorer from "./SliceExplorer";

const chapter = "/maths/s3/chapter-9";
const topics = [
  {
    title: "Prisms and cylinders",
    rule: "Find the two matching ends. These are the bases, even when the solid rests on its side. Every cut parallel to them has the same shape and size as either base. This is a uniform cross section.",
    question: "A right circular cylinder, 14 cm long and 6 cm across, lies on its side. Sketch the section made by a plane containing its axis.",
    steps: ["Mark the diameter where the plane crosses each circular end.", "Join matching endpoints along the length. These edges meet the end diameters at right angles."],
    answer: "A rectangle measuring 14 cm by 6 cm. Moving the plane parallel to itself away from the axis keeps the length but shortens the chord.",
  },
  {
    title: "Trace an inclined cut",
    rule: "On a polyhedron, follow the cut from face to face until the outline closes. Each crossed face contributes a straight side. A cube can give a triangle, quadrilateral, pentagon or hexagon. On a right circular cylinder, a tilted plane cutting only the curved surface gives an ellipse.",
    question: "A plane clips one corner of a cube, meeting the three edges from that corner at their midpoints. What does the outline look like face-on?",
    steps: ["Join each pair of midpoints on their shared square face. Three segments close the outline.", "Each segment spans the diagonal of an identical half-size square, so all three lengths match."],
    answer: "An equilateral triangle.",
  },
  {
    title: "Pyramids, cones and frustums",
    rule: "Parallel to the base, a pyramid or cone gives a similar, smaller section as the plane approaches the apex. A plane through the apex and a segment across the base makes a triangle. An inclined cut missing the apex of a square pyramid can also give a quadrilateral or pentagon.",
    question: "A square pyramid is cut halfway from its apex to its base, parallel to the base. The base has side 12 cm. What shape is exposed? What remains below it?",
    steps: ["The distance from the apex has halved, so each side of the parallel section is half the base side.", "Removing the smaller pyramid leaves two parallel square faces. A vertical cut through their centres, parallel to a base edge, meets them in unequal parallel segments."],
    answer: "The exposed square has side 6 cm. The lower solid is a frustum, and the specified vertical section is a trapezium.",
  },
  {
    title: "Spheres and the greatest cross section",
    rule: "Every plane passing through the interior of a sphere produces a circular section. Its size depends on the distance from the centre to the plane. Turning a plane about the centre keeps the circle at its greatest size.",
    question: "A sphere has diameter 18 cm. One plane passes through its centre and another passes 2 cm above it. Which cut gives the larger circle?",
    steps: ["The central plane contains a full diameter, so its section has radius 9 cm.", "The offset plane misses the centre. Its section is still circular, but its diameter is shorter."],
    answer: "The central cut gives the larger circle, with diameter 18 cm.",
  },
];

function CornerCut() {
  return <svg role="img" aria-label="A plane joins the midpoints of three edges at the top front right corner of a cube. Face-on, the section is an equilateral triangle." viewBox="0 0 310 145">
    <g stroke="#334155" strokeWidth="2" strokeLinejoin="round">
      <path fill="#e0f2fe" d="M22 45h90v90H22z"/>
      <path fill="#f0f9ff" d="M22 45l36-30h90l-36 30z"/>
      <path fill="#bae6fd" d="M112 45l36-30v90l-36 30z"/>
      <path fill="#99f6e4" stroke="#047857" d="M67 45l63-15-18 60z M195 103l42-72.75 42 72.75z"/>
    </g><text x="237" y="133" textAnchor="middle" fontSize="15">Face-on view</text>
  </svg>;
}

export default function CrossSections() {
  return <main className={styles.lesson}>
    <Link href={chapter}>← Back to Chapter 9</Link>
    <header><strong>SECTION 9.1</strong><h1>Cross Sections of Solids</h1><p>Predict the flat shape exposed by a cut, then describe how its size changes as the cutting plane moves.</p></header>
    <section><h2>Look straight at the cut</h2><p>A cross section is the flat region where a plane passes through a solid. Compare the highlighted section inside each solid with its face-on view. Move the cut before changing solids.</p><SliceExplorer /></section>
    {topics.map((topic, i) => <div key={topic.title}>
      <section><strong>LEARNING CARD {i + 1}</strong><h2>{topic.title}</h2><p>{topic.rule}</p></section>
      <section><strong>WORKED EXAMPLE {i + 1}</strong><h2>{topic.question}</h2>{i === 1 && <CornerCut />}<ol>{topic.steps.map(step => <li key={step}>{step}</li>)}</ol>{i === 1 && <p><b>GCSE:</b> Corresponding sides of congruent squares are equal, and their diagonals are equal in length.<small>HKDSE: corresponding diagonals of congruent squares</small></p>}<p className={styles.answer}><b>Answer</b> {topic.answer}</p></section>
    </div>)}
    <section data-kind="mistakes"><h2>Common mistakes</h2><p>A circle viewed at an angle looks oval. Decide whether the plane itself is tilted relative to the base before naming the shape.</p><p>A perpendicular cut through a right prism with a convex base gives a rectangle. For a pyramid, check whether the cut passes through the apex before predicting a triangle.</p></section>
    <section data-kind="summary"><h2>Section summary</h2><p>Identify the solid and its base. Check the direction and position of the plane. Trace the boundary, imagine facing the plane, and name the shape. Compare sizes separately.</p>
    <details><summary>Check yourself · Can a cube give a seven-sided section?</summary><p>No. A cube has six faces. Each side belongs to a face crossed by the plane.</p><p>GCSE: A plane intersects each crossed square face in one straight line segment.<small>HKDSE: one line segment per crossed face</small></p></details></section>
    <footer><Link href={chapter}>← Back to Chapter 9</Link></footer>
  </main>;
}
