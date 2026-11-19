import { Answer, Diagram, Lesson, Step, Working } from "../shared";

export default function Proofs() {
  return <Lesson number="8.4" title="Proofs Related to Parallelograms" goal="Choose a pair of triangles, match their vertices and justify each step towards the required conclusion.">
    <section><strong>LEARNING CARD 1</strong><h2>Work backwards from the two lengths</h2><p>To prove two segments equal, look for a triangle containing each segment. Parallel sides can supply equal alternate angles. A diagonal can supply a common side, or two equal halves if another diagonal bisects it.</p></section>
    <section><strong>WORKED EXAMPLE 1</strong><h2>Prove that opposite sides are equal</h2><Diagram both/><p>ABCD is a parallelogram. Use diagonal AC to prove AB = CD using only the parallel sides and triangle congruence.</p><Working>
      <Step result="∠BAC = ∠DCA" reason="Alternate angles are equal because AB is parallel to CD." hk="alt. ∠s, AB ∥ CD"/>
      <Step result="AC = CA" reason="AC is a common side." hk="common side"/>
      <Step result="∠BCA = ∠DAC" reason="Alternate angles are equal because BC is parallel to AD." hk="alt. ∠s, BC ∥ AD"/>
      <Step result="△BAC ≅ △DCA" reason="The triangles are congruent by ASA: two corresponding angles and the included side are equal." hk="ASA"/>
      <Step result="AB = CD" reason="Corresponding sides of congruent triangles are equal." hk="corr. sides, ≅ △s"/>
    </Working><Answer formula="AB=CD"/></section>
    <section><strong>LEARNING CARD 2</strong><h2>Prove the shape before using its diagonals</h2><p>When the goal is to prove that two segments bisect each other, join their endpoints in boundary order. If the resulting quadrilateral is a parallelogram, its diagonals have a common midpoint.</p></section>
    <section><strong>WORKED EXAMPLE 2</strong><h2>A parallelogram inside a rectangle</h2>
    <svg viewBox="0 0 240 150" role="img" aria-label="Rectangle PQRS with A on PS, B on PQ, C on QR and D on SR. AC and BD meet at O."><path d="M25 20H210V125H25Z" fill="none" stroke="#526375"/><path d="M70 20L25 95L165 125L210 50Z" fill="#dcf5ee" stroke="#176653"/><path d="M70 20L165 125M25 95L210 50" stroke="#28659c"/>{[["P",10,20],["Q",10,140],["R",212,140],["S",213,20],["A",65,16],["B",10,96],["C",162,142],["D",213,55],["O",120,89]].map(([s,x,y])=><text key={s} x={x} y={y}>{s}</text>)}</svg>
    <p>PA = RC and QB = SD. Prove that AC and BD bisect each other at O.</p><Working>
      <Step result="PB = RD and QC = SA" reason="Opposite sides of a rectangle are equal. Subtracting equal lengths from equal lengths leaves equal remainders." hk="opp. sides of rect.; subtraction"/>
      <Step result="△APB ≅ △CRD" reason="Two pairs of sides and their included angles are equal (SAS). AB and CD are corresponding sides of congruent triangles." hk="SAS; corr. sides"/>
      <Step result="△BQC ≅ △DSA" reason="Two pairs of sides and their included angles are equal (SAS). BC and DA are corresponding sides of congruent triangles." hk="SAS; corr. sides"/>
      <Step result="ABCD is a parallelogram" reason="A quadrilateral with both pairs of opposite sides equal is a parallelogram." hk="opp. sides equal"/>
    </Working><Answer formula={String.raw`AO=OC,\quad BO=OD`}/><p>The diagonals of a parallelogram bisect each other.</p></section>
    <section data-kind="mistakes"><h2>Common mistake</h2><p>In the second example, starting with AO = OC assumes part of the conclusion. Start with the marked equalities on the rectangle instead.</p></section>
    <section data-kind="summary"><h2>Section summary</h2><p>Identify the given shape, choose triangles in corresponding order, and cite a condition before applying a parallelogram property.</p></section>
  </Lesson>;
}
