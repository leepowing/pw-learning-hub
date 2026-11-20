import { Lesson, Grid } from "../lesson";
import { Card } from "../../chapter-11/lesson";

export default function Proofs() {
  return <Lesson number="13.5" title="Using Coordinate Geometry to Perform Geometric Proofs" goal="Choose axes and variables that let one calculation prove a result for a whole family of figures.">
    <Card label="DISTANCE PROOF" title="Why is every point on a perpendicular bisector equidistant from the endpoints?">
      <Grid points={[["A",-3,0],["P",0,4],["B",3,0]]} outline description="AB is horizontal and P lies on the vertical axis through its midpoint."/>
      <p>Place the midpoint at the origin and AB on the x-axis. Write A(−a, 0), B(a, 0) with a positive, and P(0, b). The diagram illustrates one case. The variables allow any segment length and any height b.</p>
      <p>PA² = (−a)² + (−b)² = a² + b². Likewise PB² = a² + (−b)² = a² + b².</p>
      <p>GCSE: Distances are non-negative, so equal squared distances give PA = PB.<br/>HKDSE: PA² = PB² ⇒ PA = PB.</p>
    </Card>
    <Card label="SLOPE PROOF" title="Prove that the diagonals of a square meet at right angles">
      <p>Place the vertices at O(0, 0), A(t, 0), B(t, t), C(0, t), with t positive. Along OB the slope is t/t = 1. Along AC it is t/(−t) = −1.</p>
      <p>GCSE: The slopes multiply to −1, so the diagonals are perpendicular.<br/>HKDSE: m(OB) × m(AC) = −1 ⇒ OB ⟂ AC.</p>
      <details><summary>How could you also prove the diagonals have equal length?</summary>OB² = t² + t² and AC² = (−t)² + t². Both lengths are t√2.</details>
    </Card>
    <Card label="MIDPOINT PROOF" title="Prove that the diagonals of any parallelogram bisect each other">
      <p>Put one side on the x-axis. Use O(0, 0), A(a, 0), C(b, c) and B(a + b, c), where a is positive and c is nonzero. Moving from C to B repeats the step from O to A. Keeping b variable allows the sides to slant.</p>
      <p>The midpoint of OB is ((a + b)/2, c/2). Averaging the coordinates of A and C gives ((a + b)/2, c/2) again.</p>
      <p>GCSE: Both diagonals pass through their common midpoint, so each divides the other into two equal parts.<br/>HKDSE: Same mid-pt ⇒ diagonals bisect each other.</p>
    </Card>
    <Card label="PRACTICE" title="Choose the calculation that proves the claim">
      <details><summary>In the square above, P and Q are the midpoints of OA and AB. Prove PQ is perpendicular to AC.</summary>P(t/2, 0) and Q(t, t/2) give m(PQ) = (t/2)/(t/2) = 1. Since m(AC) = −1, PQ ⟂ AC.</details>
      <details><summary>In a rectangle of width w and height h, prove that the diagonals are equal.</summary>Place opposite vertices at (0, 0) and (w, h). The other diagonal runs from (w, 0) to (0, h). Their squared lengths are w² + h² and (−w)² + h². Therefore their lengths agree.</details>
      <aside>Match the calculation to the claim. Compare squared lengths for equality, slopes for direction and midpoints for bisection. Choosing equal width and height would restrict a general rectangle proof to squares.</aside>
    </Card>
  </Lesson>;
}
