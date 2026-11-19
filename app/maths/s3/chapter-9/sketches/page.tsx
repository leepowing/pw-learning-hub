import Link from "next/link";
import styles from "../../chapter-8/chapter.module.css";

const lessons = [
  { kind: "tetra", title: "Sketch a regular tetrahedron", rule: "Four equilateral faces meet in groups of three at the vertices. Equal edges can appear different lengths on the page.", task: "Sketch a four-faced die resting on ABC. Which base edge is behind the die?", steps: ["Draw the triangular base ABC in perspective.", "Place V above its centre O. Use a light dotted guide for VO.", "Join V to A, B and C. The back edge AC is hidden, so dash AC."], answer: "Six edges in total. AC is the hidden edge in this view." },
  { kind: "rect", title: "Complete a rectangular pyramid", rule: "Each corner of the base joins the apex. For a right pyramid, the apex lies directly above the centre.", task: "A model has a rectangular base ABCD and apex V. Complete its sketch and find the hidden edges.", steps: ["Sketch the rectangle as a parallelogram.", "Use the intersection of the base diagonals to locate O. Mark V above O.", "Join V to all four corners. Use dashes on the three edges meeting the far corner D."], answer: "AD, CD and VD are hidden. VO is a construction line inside the model." },
  { kind: "cone", title: "Sketch a right circular cone", rule: "A circular rim seen at an angle appears elliptical. The straight sides of the silhouette meet at the apex.", task: "Sketch a party hat standing on its circular rim.", steps: ["Sketch the base as a shallow ellipse.", "Mark the centre O and put V above it.", "Draw the two outlines from V to the rim. Draw the front arc solid and the hidden back arc dashed."], answer: "The sketch shows one curved rim and one apex. The dotted axis locates the apex." },
  { kind: "iso", title: "Use an isometric grid", rule: "Follow the two sloping grid directions for the base and the vertical direction for height.", task: "Sketch a right pyramid with a base six grid steps long and four grid steps wide, and a height of six vertical steps.", steps: ["From A count six steps down-right to B and four up-right to D. Complete ABCD.", "Find the centre O and count six vertical steps up to V.", "Connect every base vertex to V. Distinguish the far edges from the visible ones."], answer: "AB and DC follow one grid direction. AD and BC follow the other." },
  { kind: "oblique", title: "Use an oblique grid", rule: "Draw the front edge horizontally, the receding edges along a diagonal and heights vertically.", task: "Sketch a right pyramid with a front base edge of nine horizontal intervals, a depth of four diagonal steps and a height of eight vertical intervals.", steps: ["Count nine intervals from A to B. From both ends count four diagonal steps back.", "Complete the base and mark its centre O. Count eight intervals vertically to V.", "Draw the sloping edges. Check that the outer boundary is solid."], answer: "The apex is above O. The diagonally receding base edges remain parallel in the sketch." },
];

export default function Sketches() {
  return <main className={styles.lesson}>
    <Link href="/maths/s3/chapter-9">← Back to Chapter 9</Link>
    <header><strong>SECTION 9.2</strong><h1>2-D Representations of Pyramids and Circular Cones</h1><p>Build a sketch from its base and show which edges the observer can see.</p></header>
    {lessons.map(({kind,title,rule,task,steps,answer},i) => <div key={kind}>
      <section><strong>LEARNING CARD {i+1}</strong><h2>{title}</h2><p>{rule}</p><img width="240" style={{maxWidth:"100%"}} src={'/maths/s3/ch9/sketches/'+kind+'-3.svg'} alt={answer}/></section>
      <section><strong>WORKED EXAMPLE {i+1}</strong><h2>{task}</h2><ol style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,190px),1fr))",gap:24,paddingLeft:24}}>{steps.map((step,j)=><li key={step}><img style={{width:"100%",maxWidth:240}} src={'/maths/s3/ch9/sketches/'+kind+'-'+(j+1)+'.svg'} alt={step}/><p>{step}</p></li>)}</ol><p className={styles.answer}>{answer}</p></section>
    </div>)}
    <section data-kind="mistakes"><h2>Common mistakes</h2><p>Tracing just the silhouette of a cone gives a triangle. Add the curved rim to show its circular base. On a pyramid, count one sloping edge for each base vertex. Leave the interior height out of the edge count.</p></section>
    <section data-kind="summary"><h2>Section summary</h2><p>Draw the base, locate the apex, complete the outline and mark hidden edges. On grid paper, use the grid for base directions and vertical height.</p><Link href="/maths/s3/chapter-9/checkpoint">Try the Chapter 9 Checkpoint →</Link></section>
    <Link href="/maths/s3/chapter-9">← Back to Chapter 9</Link>
  </main>;
}
