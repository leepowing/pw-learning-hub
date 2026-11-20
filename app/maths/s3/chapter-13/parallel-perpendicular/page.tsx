import { Card } from "../../chapter-11/lesson";
import { Lesson, Grid } from "../lesson";

export default function ParallelPerpendicular() {
  return <Lesson number="13.3" title="Parallel Lines and Perpendicular Lines" goal="Use slope to identify parallel sides, prove right angles and find missing coordinates.">
    <Card label="PARALLEL LINES" title="Match the rise for the same run">
      <p>Distinct non-vertical lines are parallel exactly when their slopes are equal. Two distinct vertical lines are also parallel. Equal slopes and a shared point describe the same line.</p>
      <p>A line through (−5, 5) and (−2, −1) has slope −6/3 = −2. A parallel line through (−1, 4) falls 4 units as it moves 2 units right, so it crosses the x-axis at (1, 0).</p>
    </Card>
    <Card label="PERPENDICULAR LINES" title="Recognise a quarter turn">
      <p>A step of 2 right and 1 up becomes 1 left and 2 up after a quarter turn. The corresponding slopes are ½ and −2. For two lines with defined slopes, a product of −1 means they meet at a right angle. A horizontal and a vertical line also meet at a right angle.</p>
      <Grid points={[["A",0,0],["B",4,2],["C",3,4]]} outline description="Triangle with slope one half along AB and negative two along BC, forming a right angle at B."/>
      <p>GCSE: AB has slope 2/4 and BC has slope 2/(−1). Their product is −1, so angle ABC is 90°.<br/>HKDSE: m(AB) × m(BC) = −1, hence AB ⟂ BC.</p>
    </Card>
    <Card label="WORKED EXAMPLE" title="Find the intercept of a perpendicular">
      <p>The line through (1, 8) and B(3, 4) has slope −4/2 = −2. The perpendicular through B has slope ½. Moving 3 units left to the y-axis changes its height by −3/2. Its y-intercept is 4 − 3/2 = 5/2.</p>
    </Card>
    <Card label="GEOMETRIC PROOF" title="Is the parallelogram a rectangle?">
      <p>Three consecutive vertices are A(1, 7), B(5, 3) and C(8, 4). Moving from B to C adds (3, 1). The same move from A gives D(4, 8). AB and DC both have slope −1. AD and BC both have slope ⅓. Both pairs of opposite sides are parallel.</p>
      <p>Adjacent slopes multiply to −⅓. The angle at B therefore differs from 90°, ruling out a rectangle.</p>
    </Card>
    <Card label="PRACTICE" title="Test the relationship">
      <details><summary>A line has slope −¾. Give a parallel slope and a perpendicular slope.</summary>Parallel: −¾. Perpendicular: 4/3. Their product is −1.</details>
      <details><summary>The segment from (2, 1) to (6, k) is parallel to a line of slope 3/2. Find k.</summary>The run is 4, so the rise is 6. Thus k = 1 + 6 = 7.</details>
      <details><summary>How are x = 3 and y = −2 related?</summary>They meet at (3, −2) at a right angle. Use their vertical and horizontal directions.</details>
    </Card>
    <Card label="SUMMARY" title="Choose the right test"><p>Compare slopes for parallelism. For perpendicularity, take the negative reciprocal of a nonzero slope. Changing the sign alone works only when the slope has magnitude 1. Check vertical lines separately.</p></Card>
  </Lesson>;
}
