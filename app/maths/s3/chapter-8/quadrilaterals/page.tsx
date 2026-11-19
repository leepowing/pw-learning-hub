import Link from "next/link";
import {Lesson, Diagram, Step, Working, Answer} from "../shared";

export default function Basics() {
  return <Lesson number="8.1" title="Basic Knowledge of Quadrilaterals" goal="Identify sides, angles and diagonals, and classify five quadrilaterals.">
    <section><strong>LEARNING CARD 1</strong><h2>Read the vertices in order</h2><Diagram/><p>Trace A → B → C → D → A. AB and BC are adjacent sides because they meet at B. AB and CD are opposite sides. Angles A and B share side AB, so they are adjacent. Angles A and C are opposite.</p><p>A diagonal joins two non-adjacent vertices. AC splits this figure into two triangles. Their angle sums give 180° + 180° = 360° for the quadrilateral. BD is the other diagonal.</p></section>
    <section><strong>LEARNING CARD 2</strong><h2>Recognise the shape</h2><ul>
      <li><b>Trapezium</b> · Exactly one pair of opposite sides is parallel in this textbook.</li>
      <li><b>Parallelogram</b> · Both pairs of opposite sides are parallel.</li>
      <li><b>Rhombus</b> · All four sides are equal.</li>
      <li><b>Rectangle</b> · All four angles are right angles.</li>
      <li><b>Square</b> · Four equal sides and four right angles. A square satisfies both the rectangle and rhombus definitions.</li></ul></section>
    <section><strong>WORKED EXAMPLE 1</strong><h2>Angles in a trapezium</h2><p>In trapezium ABCD, AB ∥ DC and angle B is 47°. Find angle C.</p><Working><Step reason="Co-interior angles on parallel lines add up to 180°." hk="int. ∠s, AB ∥ DC" result="BC crosses the parallel sides, so ∠C = 180° − 47° = 133°."/></Working>
    <Answer formula={String.raw`\angle C=133^\circ`}/></section>
    <section><strong>WORKED EXAMPLE 2</strong><h2>Split a right angle</h2><p>A diagonal splits one corner of a rectangle into 36° and x.</p><Working><Step reason="Each interior angle of a rectangle is 90°." hk="∠ of rectangle" result="x = 90° − 36° = 54°."/></Working><Answer formula={String.raw`x=54^\circ`}/></section>
    <details><summary>Check yourself · Two sides of a square measure (3x − 2) cm and 10 cm. Find x.</summary><p>All sides of a square are equal (HKDSE · sides of square). Hence 3x − 2 = 10, giving x = 4.</p></details>
    <section data-kind="mistakes"><h2>Common mistake</h2><p>A diagonal of a rectangle can split a corner into unequal angles, as the 36° and 54° example shows. Use the marked angles and the shape’s definition.</p></section><section data-kind="summary"><h2>Section Summary</h2><p>Read vertices around the boundary. Use shared vertices to identify adjacent sides and use parallel sides, equal lengths and right angles to classify shapes.</p></section><Link href="/maths/s3/chapter-8/parallelograms">Continue to 8.2 · Parallelograms →</Link></Lesson>;
}
