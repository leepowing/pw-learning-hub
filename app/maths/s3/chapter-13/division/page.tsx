import { Lesson, Grid } from "../lesson";
import { Card, Formula } from "../../chapter-11/lesson";

export default function Division() {
  return <Lesson number="13.4" title="Point of Division" goal="Locate a point partway along a segment and work backwards to recover a missing endpoint.">
    <Card label="MIDPOINT" title="Halve each coordinate change">
      <Grid points={[["A",-4,3],["M",1,1],["B",6,-1]]} outline description="From A to M and from M to B, move five units right and two down."/>
      <p>From A(−4, 3) to B(6, −1) the change is (10, −4). Halfway along, add (5, −2) to A to reach M(1, 1). This gives the same result as averaging the two x-values and then the two y-values.</p>
      <Formula tex={String.raw`M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)`}/>
      <details><summary>If you know A and M, how can you recover B?</summary>Repeat the step from A to M once more, starting at M. In coordinates B = (2xₘ − xₐ, 2yₘ − yₐ).</details>
    </Card>
    <Card label="INTERNAL DIVISION" title="Count the parts from the starting point">
      <p>If AP : PB = r : s, there are r + s equal parts in AB. Travel r of them from A. Multiply each coordinate change by r/(r + s), then add the result to A.</p>
      <Formula tex={String.raw`P=\left(\frac{s x_1+r x_2}{r+s},\frac{s y_1+r y_2}{r+s}\right)`}/>
      <p>For A(−5, 4) and B(7, −2), one third of the change is (4, −2). The trisection points in order from A are (−1, 2) and (3, 0). The first divides AB in the ratio 1 : 2 and the second in the ratio 2 : 1.</p>
    </Card>
    <Card label="WORKED EXAMPLE" title="Recover an endpoint from an unequal division"><p>A(−1, 4) and P(2, 1) mark the first three parts of a segment divided in the ratio 3 : 2. The change from A to P is (3, −3), so one part is (1, −1). Two more parts from P give B(4, −1).</p></Card>
    <Card label="APPLICATION" title="Reconstruct a square from its diagonal"><p>Opposite corners A(−4, 2) and C(6, 0) have midpoint E(1, 1). AC has slope −1/5. The other diagonal has slope 5. From E, moving one unit left and five down reaches B(0, −4) on the y-axis. Moving the same distance in the opposite direction gives D(2, 6).</p><p>GCSE: The diagonals of a square bisect each other at right angles.<br/>HKDSE: Diagonals of square bisect each other, AC ⟂ BD.</p></Card>
    <Card label="PRACTICE" title="Check the position before calculating">
      <details><summary>Divide the segment from (5, −6) to (−11, 18) in the ratio 3 : 1.</summary>Three quarters of (−16, 24) is (−12, 18). Add this to (5, −6) to get (−7, 12).</details>
      <details><summary>M(4, −6) is the midpoint and A is (2, 7). Find B.</summary>From A to M, move (2, −13). Repeat from M to get (6, −19).</details>
      <aside>For a 1 : 3 split, the point lies one quarter of the way from A. A result nearer B signals that the weights were reversed.</aside>
    </Card>
  </Lesson>;
}
