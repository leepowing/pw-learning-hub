import { Card, Formula } from "../../chapter-11/lesson";
import { Lesson, Grid } from "../lesson";

export default function Slope() {
  return <Lesson number="13.2" title="Slope of a Straight Line" goal="Use signed coordinate changes to measure slope, test collinearity and find intercepts.">
    <Card label="SLOPE FORMULA" title="How far up for each step right?">
      <Grid points={[["A",-2,1],["B",4,4]]} outline guide description="From A to B the dashed path moves six units right and three units up."/>
      <p>From A(−2, 1) to B(4, 4), the rise is 3 and the run is 6. A slope of ½ means the line rises one unit for every two units to the right.</p>
      <Formula tex={String.raw`m=\frac{y_2-y_1}{x_2-x_1},\quad x_2\ne x_1`}/>
      <p>Reading from left to right, rising lines have positive slope and falling lines have negative slope. Greater absolute slope means a steeper line. A horizontal line has zero rise and slope 0. A vertical line has zero run, so its slope is undefined.</p>
    </Card>
    <Card label="WORKED EXAMPLE" title="Find both intercepts">
      <p>A line joins P(−1, 6) to Q(4, −4). Its slope is (−4 − 6) ÷ (4 + 1) = −2. Move one unit right from P to reach (0, 4). The y-intercept is 4. Move another two units right and four down to reach (2, 0). The x-intercept is 2.</p>
    </Card>
    <Card label="WORKED EXAMPLE" title="Recover a missing coordinate">
      <p>The line from (1, k) to (k − 1, 6) has slope ⅓. Its rise is 6 − k and its run is k − 2. Therefore 3(6 − k) = k − 2, giving k = 5. Substitution gives a rise of 1 and a run of 3.</p>
    </Card>
    <Card label="REASONING" title="Do three points lie on one line?">
      <p>Take A(1, −5), B(4, 1) and C(−2, −11). From A to B the slope is 6/3. From A to C it is −6/(−3).</p>
      <p>GCSE: Both lines have slope 2 and pass through A. They coincide, so A, B and C are collinear.<br/>HKDSE: Equal slopes and common point A imply collinearity.</p>
    </Card>
    <Card label="PRACTICE" title="Check your slope calculations">
      <details><summary>Which line is steeper, one with slope −3 or one with slope 2?</summary>The first. Its height changes by 3 units per unit run.</details>
      <details><summary>Find both intercepts of the line through (4, 6) and (−8, −3).</summary>The slope is 9/12 = ¾. From (4, 6), move 4 left and 3 down to (0, 3). Repeat to reach (−4, 0). The intercepts are −4 on x and 3 on y.</details>
      <details><summary>What is the slope through (5, 2) and (5, −4)?</summary>Undefined. The horizontal change is zero.</details>
    </Card>
    <Card label="SUMMARY" title="Keep the direction consistent"><p>Subtract both coordinates in the same point order. Compare absolute slopes for steepness. Set y = 0 at an x-intercept and x = 0 at a y-intercept.</p></Card>
  </Lesson>;
}
