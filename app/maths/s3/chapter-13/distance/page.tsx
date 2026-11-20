import { Card, Formula } from "../../chapter-11/lesson";
import { Lesson, Grid } from "../lesson";

export default function Distance(){
  return <Lesson number="13.1" title="Distance between Two Points" goal="Use coordinate differences to find lengths, compare distances and justify a right angle.">
    <Card label="LEARNING CARD 1" title="Build a right triangle"><Grid points={[["A",1,3],["B",4,7]]} outline guide description="A (1, 3) and B (4, 7) joined by a diagonal. Dashed legs meet at (4, 3)."/>
    <p>Travel horizontally from A to (4, 3), then vertically to B. The legs measure 3 and 4 units. The direct distance is the hypotenuse.</p>
    <details><summary>Calculate AB</summary>AB² = 3² + 4² = 25, so AB = 5 units.</details>
    <p>For arbitrary endpoints, the leg lengths are |x₂ − x₁| and |y₂ − y₁|. Squaring removes the signs. Taking the positive square root gives the length.</p>
    <aside><Formula tex={String.raw`d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}`}/></aside>
    <p>GCSE: Horizontal and vertical lines meet at a right angle, so Pythagoras’ theorem applies to these two legs and the diagonal.<br/>HKDSE: horizontal ⟂ vertical, Pyth. theorem</p></Card>
    <Card label="WORKED EXAMPLE 1" title="Keep a distance exact"><p>Find PQ for P(−2, 4) and Q(−5, 9). The horizontal change is −3 and the vertical change is 5.</p><aside><Formula tex={String.raw`PQ=\sqrt{(-3)^2+5^2}=\sqrt{34}`}/> units</aside><p>Reversing direction gives changes of 3 and −5. Their squares give the same distance.</p></Card>
    <Card label="LEARNING CARD 2" title="Choose which lengths to calculate"><p>For a perimeter, add the three side lengths. To decide which point is closer, compare squared distances. Taking square roots preserves their order.</p></Card>
    <Card label="WORKED EXAMPLE 2" title="Find a perimeter"><Grid points={[["A",-1,-1],["B",3,-1],["C",1,4]]} outline description="Triangle with A and B on y = −1 and C at (1, 4)."/>
    <p>A(−1, −1) and B(3, −1) share a horizontal line, so AB = 4. From each base vertex to C(1, 4), the horizontal gap is 2 and the vertical gap is 5. Each sloping side measures √29 units.</p><aside>Perimeter = 4 + 2√29 ≈ 14.77 units (2 d.p.).</aside></Card>
    <Card label="WORKED EXAMPLE 3" title="Prove a right angle and find the area"><Grid points={[["A",1,4],["B",-3,2],["C",3,0]]} outline description="Triangle joining A (1, 4), B (−3, 2) and C (3, 0)."/>
    <p>AB² = (−4)² + (−2)² = 20. AC² = 2² + (−4)² = 20. BC² = 6² + (−2)² = 40.</p>
    <p>GCSE: Since AB² + AC² = BC², the converse of Pythagoras’ theorem gives a right angle at A, opposite BC.<br/>HKDSE: ∠BAC = 90° (converse of Pyth. theorem)</p>
    <aside><Formula tex={String.raw`\text{Area}=\tfrac12\times\sqrt{20}\times\sqrt{20}=10`}/> square units</aside></Card>
    <Card label="WORKED EXAMPLE 4" title="Locate a point on an axis"><p>Let O be the origin and A be (4, 8). Where on the y-axis is B if OB = AB?</p>
    <Grid points={[["O",0,0],["A",4,8],["B",0,5]]} outline description="Isosceles triangle with B on the y-axis between the heights of O and A."/>
    <ol><li>Write B as (0, b). Then OB² = b².</li><li>Set the squared lengths equal. This gives b² = 16 + (8 − b)².</li><li>Expand the square. Both sides contain b², leaving 16b = 80.</li></ol><aside>B = (0, 5). Check: AB² = 4² + 3² = 25 = OB².</aside></Card>
    <Card label="CLASS PRACTICE" title="Try these before opening the solutions">
    <details><summary>Find the distance between (2, −3) and (4, 2) to two decimal places.</summary>√(2² + 5²) = √29 ≈ 5.39 units.</details>
    <details><summary>Which is closer to P(4, 2), Q(−5, 4) or R(8, −3)?</summary>PQ² = 81 + 4 = 85. PR² = 16 + 25 = 41. R is closer.</details>
    <details><summary>A point on the y-axis is equally far from (3, 1) and (−2, −4). Find it.</summary>Write (0, t). Equate 9 + (t − 1)² and 4 + (t + 4)². Simplifying gives 10 − 2t = 20 + 8t, so the point is (0, −1).</details></Card>
    <Card label="COMMON MISTAKES" title="Check signs, roots and units"><p>From −2 to −5, the change is −5 − (−2) = −3. Square the entire change. A squared distance of 34 gives a length of √34 units. Keep radicals exact until the final rounding step.</p></Card>
    <Card label="SECTION SUMMARY" title="From coordinates to a conclusion"><p>Subtract matching coordinates, square and add. Take the square root for a length. Keep squared lengths when testing equality, comparing distances or proving a right angle.</p></Card>
  </Lesson>;
}
