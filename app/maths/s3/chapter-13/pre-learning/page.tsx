import Link from "next/link";
import { Card } from "../../chapter-11/lesson";
import { Lesson, Grid } from "../lesson";

export default function PreLearning(){
  return <Lesson number="13.0" title="Pre-Learning" goal="Read an ordered pair and use horizontal and vertical segments to measure distance.">
    <Card label="LEARNING CARD 1" title="Read across, then up or down"><p>Start at the origin. The first coordinate gives the horizontal position. The second gives the vertical position. Left and down correspond to negative values.</p>
    <Grid points={[["A",3,3],["B",-1,4],["C",1,-1]]} description="Unit grid with A three right and three up, B one left and four up, and C one right and one down from the origin."/>
    <details><summary>Read A, B and C, then check</summary>A (3, 3), B (−1, 4), C (1, −1).</details></Card>
    <Card label="WORKED EXAMPLE" title="Measure along one axis"><p>From (−1, −7) to (−1, 3), the x-coordinate stays fixed. Count 7 units up to zero and 3 more units to the endpoint.</p><aside>Vertical distance = |3 − (−7)| = 10 units.</aside></Card>
    <Card label="WARM-UP" title="Check the prerequisites"><details><summary>Find the distance from (−8, 2) to (−6, 2).</summary>The y-coordinates agree. The horizontal gap is |−6 − (−8)| = 2 units.</details>
    <details><summary>A triangle has sides 6, 8 and 10. Is it right-angled?</summary>6² + 8² = 100 = 10².<p>GCSE: The square of the longest side equals the sum of the squares of the other two, so the converse of Pythagoras’ theorem gives a right angle.<br/>HKDSE: converse of Pyth. theorem</p></details></Card>
    <Card label="SECTION SUMMARY" title="Coordinates give positions"><p>Subtract matching coordinates to find a gap. Take its absolute value because a length is non-negative.</p><Link href="/maths/s3/chapter-13/distance">Continue to 13.1 →</Link></Card>
  </Lesson>;
}
