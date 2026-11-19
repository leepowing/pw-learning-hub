import {Back, Diagram, Step} from "../shared";

export default function Parallelograms() {
  return <><Back/><h1>8.2 Parallelograms</h1><section><h2>Start from two pairs of parallel sides</h2><Diagram both/><p>AB ∥ CD and AD ∥ BC. Opposite sides are equal (AB = CD and AD = BC), opposite angles are equal, and adjacent angles sum to 180°. The diagonals bisect each other at E, so AE = EC and BE = ED.</p>
    <details><summary>Why are the opposite sides equal?</summary><ol>
    <Step reason="Alternate angles between parallel lines are equal." hk="alt. ∠s" result="Along BD, ∠ABD = ∠CDB and ∠ADB = ∠CBD."/>
    <Step reason="The triangles share BD, the side between the two equal angles." hk="common side; ASA" result="Triangle ABD is congruent to triangle CDB by ASA."/>
    <Step reason="Corresponding sides of congruent triangles are equal." hk="corr. sides, ≅ Δs" result="AB = CD and AD = CB."/></ol></details></section>
    <section><h2>Find a diagonal and an angle</h2><p>In the diagram, AE = 3x − 1 cm, EC = 11 cm and ∠A = 68°.</p><ol>
    <Step reason="The diagonals of a parallelogram bisect each other." hk="diags. of ∥gram" result="3x − 1 = 11, so x = 4 and AC = 22 cm."/>
    <Step reason="Co-interior angles on parallel lines add up to 180°." hk="int. ∠s, AD ∥ BC" result="∠B = 180° − 68° = 112°."/></ol></section>
    <section><h2>Use a right triangle to find the perimeter</h2><p>In parallelogram PQRS, PS is perpendicular to SQ, PS = 5 cm and SQ = 12 cm. Find the perimeter.</p><ol>
    <Step reason="Pythagoras’ theorem applies because PSQ is a right-angled triangle with hypotenuse PQ." hk="Pyth. theorem" result="PQ² = 5² + 12² = 169, so PQ = 13 cm."/>
    <Step reason="Opposite sides of a parallelogram are equal." hk="opp. sides of ∥gram" result="Perimeter = 2 × (13 + 5) = 36 cm."/></ol></section>
    <section><h2>How to prove a quadrilateral is a parallelogram</h2><p>Any one of these conditions is sufficient. Check every part of the condition you choose.</p><ul>
    <li>Both pairs of opposite sides are parallel (definition).</li><li>Both pairs of opposite sides are equal.</li><li>Both pairs of opposite angles are equal.</li><li>The diagonals bisect each other.</li><li>One pair of opposite sides is both equal and parallel.</li></ul>
    <h3>Worked proof</h3><p>In parallelogram ABCD, M is the midpoint of AB and N is the midpoint of DC. Prove MBND is a parallelogram.</p><ol>
    <Step reason="Opposite sides of a parallelogram are equal, and a midpoint halves a side." hk="opp. sides of ∥gram; mid-pts." result="MB is half of AB and DN is half of DC. Since AB = DC, MB = DN."/>
    <Step reason="Opposite sides of a parallelogram are parallel." hk="def. of ∥gram" result="MB lies on AB and DN lies on DC, so MB ∥ DN."/>
    <Step reason="One pair of opposite sides is both equal and parallel." hk="2 sides equal and ∥" result="MB and DN meet both conditions, so MBND is a parallelogram."/></ol></section>
    <details><summary>Check yourself · The angles of KLMN in order are x + 40°, 100°, 2x and 100°. Prove it is a parallelogram.</summary><p>The interior angles of a quadrilateral sum to 360° (HKDSE · ∠ sum of quad.). Hence 3x + 240° = 360° and x = 40°. Both pairs of opposite angles are equal (HKDSE · opp. ∠s equal), since ∠K = ∠M = 80° and ∠L = ∠N = 100°. Therefore KLMN is a parallelogram.</p></details>
    <section><h2>Common mistakes</h2><p>Bisecting tells you that each diagonal has two equal halves. The two whole diagonals may have different lengths. For the equal-and-parallel test, check the same pair of sides. An isosceles trapezium has equal legs and parallel bases, which are different pairs.</p><h2>Summary</h2><p>When the parallelogram is given, use its properties to calculate. When its shape is unknown, start from the given measurements and establish one complete test before using its properties.</p></section><Back/></>;
}
