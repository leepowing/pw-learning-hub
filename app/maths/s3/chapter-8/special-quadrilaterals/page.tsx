import { Answer, Lesson, Step, Working } from "../shared";

type Point = [number, number];

function Figure({vertices, labels, description, centre}: {
  vertices: [Point, Point, Point, Point];
  labels: string;
  description: string;
  centre?: Point;
}) {
  const [a,b,c,d] = vertices;
  return <svg viewBox="0 0 250 180" role="img" aria-label={description}>
    <polygon points={vertices.map(p => p.join(",")).join(" ")} fill="#ecfdf5" stroke="#175847" strokeWidth="2"/>
    {centre && <g stroke="#25658b" fill="none">
      <line x1={a[0]} y1={a[1]} x2={c[0]} y2={c[1]}/>
      <line x1={b[0]} y1={b[1]} x2={d[0]} y2={d[1]}/>
    </g>}
    {centre && <text x={centre[0]+2} y={centre[1]-10}>O</text>}
    {vertices.map(([x,y],i) => <text key={labels[i]} textAnchor="middle"
      x={x+(x<125?-11:x>125?11:0)} y={y+(y<90?-5:16)}>{labels[i]}</text>)}
  </svg>;
}

export default function SpecialQuadrilaterals() {
  return <Lesson number="8.3" title="Properties of Rhombuses, Rectangles, Squares and Trapeziums"
    goal="Use diagonal properties to find lengths and areas, and use parallel sides and symmetry to calculate angles.">
    <section><strong>LEARNING CARD 1</strong><h2>Rhombus · perpendicular diagonals</h2>
      <Figure vertices={[[45,90],[125,30],[205,90],[125,150]]} centre={[125,90]} labels="ABCD" description="Rhombus ABCD with perpendicular diagonals AC and BD crossing at O."/>
      <p>All four sides are equal, so both pairs of opposite sides are equal. A rhombus is therefore a parallelogram. Its diagonals bisect each other, meet at right angles and bisect the angles at their endpoints.</p>
      <details><summary>Why do the diagonals meet at 90°?</summary><p>AO = CO because the diagonals bisect each other. AB = CB and BO is shared, so triangles ABO and CBO are congruent by SSS. Their equal angles at O add to 180° on line AC. Each is 90°.</p></details>
    </section>
    <section><strong>WORKED EXAMPLE 1</strong><h2>Find a side before finding the perimeter</h2>
      <p>In the rhombus above, AC = 16 cm and BD = 12 cm. Find the perimeter and area.</p>
      <Working>
        <Step result="AO = 8 cm and BO = 6 cm." reason="The diagonals of a parallelogram bisect each other." hk="diags. of ∥gram"/>
        <Step result="AB² = 8² + 6² = 100, so AB = 10 cm." reason="The diagonals of a rhombus are perpendicular, so Pythagoras’ theorem applies in triangle AOB." hk="property of rhombus; Pyth. theorem"/>
        <Step result="Perimeter = 4 × 10. Area = 2 × ½ × 16 × 6." reason="All four sides are equal. Diagonal AC splits the rhombus into two triangles with base 16 cm and perpendicular height 6 cm." hk="equal sides; area of Δ"/>
      </Working><Answer formula={String.raw`P=40\,\mathrm{cm},\quad A=96\,\mathrm{cm}^2`}/>
    </section>
    <section><strong>LEARNING CARD 2</strong><h2>Rectangle · equal diagonals</h2>
      <Figure vertices={[[32,50],[216,50],[216,128],[32,128]]} labels="ABCD" centre={[124,89]} description="Rectangle ABCD with equal diagonals crossing at their midpoint O."/>
      <p>A rectangle has four right angles and both pairs of opposite sides parallel. Each diagonal is the hypotenuse of a right triangle with the same width and height, so the diagonals are equal. They bisect each other, giving OA = OB = OC = OD.</p>
    </section>
    <section><strong>WORKED EXAMPLE 2</strong><h2>From a corner to the centre</h2>
      <p>A rectangular frame measures 12 cm by 5 cm. How far is B from O?</p>
      <Working>
        <Step result="AC² = 12² + 5² = 169, so AC = 13 cm." reason="Angle ABC is a right angle, so Pythagoras’ theorem gives the diagonal AC." hk="∠ of rectangle; Pyth. theorem"/>
        <Step result="BD = AC = 13 cm and BO = BD ÷ 2." reason="The diagonals of a rectangle are equal and bisect each other." hk="diags. of rectangle"/>
      </Working><Answer formula={String.raw`BO=6.5\,\mathrm{cm}`}/>
    </section>
    <section><strong>LEARNING CARD 3</strong><h2>Square · combine the two sets of properties</h2>
      <Figure vertices={[[62,26],[188,26],[188,152],[62,152]]} labels="ABCD" centre={[125,89]} description="Square ABCD with diagonals meeting at O. Each corner is divided into two equal angles."/>
      <p>A square is both a rectangle and a rhombus. Its diagonals are equal, bisect each other at right angles and split each 90° corner into two 45° angles.</p>
    </section>
    <section><strong>WORKED EXAMPLE 3</strong><h2>Keep the perimeter exact</h2>
      <p>The diagonal of a square tile is 10 cm. Find its perimeter in surd form.</p>
      <Working>
        <Step result="AO = BO = 5 cm and ∠AOB = 90°." reason="The equal diagonals of a square bisect each other at right angles." hk="diags. of square"/>
        <Step result="AB² = 5² + 5² = 50. Hence AB = 5√2 cm." reason="Pythagoras’ theorem gives the hypotenuse of right-angled triangle AOB." hk="Pyth. theorem"/>
        <Step result="P = 4 × 5√2 cm." reason="All four sides of a square are equal." hk="sides of square"/>
      </Working><Answer formula={String.raw`P=20\sqrt{2}\,\mathrm{cm}`}/>
    </section>
    <section><strong>LEARNING CARD 4</strong><h2>Trapezium · identify the bases</h2>
      <Figure vertices={[[76,40],[174,40],[214,130],[36,130]]} labels="ABCD" description="Isosceles trapezium ABCD with AB parallel to DC and equal legs AD and BC."/>
      <p>In this course a trapezium has exactly one pair of parallel sides, its bases. The height is the perpendicular distance between them. In a right-angled trapezium one leg is perpendicular to both bases and gives the height directly.</p>
      <p>An isosceles trapezium has equal non-parallel sides. Reflection in the perpendicular bisector of either base exchanges its endpoints. This gives equal angles at each base and equal diagonals.</p>
    </section>
    <section><strong>WORKED EXAMPLE 4</strong><h2>Choose the correct pair of angles</h2>
      <p>In isosceles trapezium ABCD above, AB ∥ DC and ∠D = 66°. Find ∠B.</p>
      <Working>
        <Step result="∠C = ∠D = 66°." reason="The angles at the same base of an isosceles trapezium are equal." hk="base ∠s of isos. trapezium"/>
        <Step result="∠B + ∠C = 180°, so ∠B = 180° − 66°." reason="Co-interior angles between parallel lines add up to 180°. BC crosses the parallel bases." hk="int. ∠s, AB ∥ DC"/>
      </Working><Answer formula={String.raw`\angle B=114^\circ`}/>
    </section>
    <details><summary>Check yourself · A diagonal of a rhombus makes 31° with a side. Find the interior angle at that vertex and the adjacent interior angle.</summary>
      <p>The diagonal bisects the vertex angle, so it measures 2 × 31° = 62°. Adjacent angles in a parallelogram sum to 180°, giving 118°.</p></details>
    <section data-kind="mistakes"><h2>Common mistakes</h2><p>Four right angles guarantee a rectangle. A 12 cm by 5 cm frame shows why they alone cannot guarantee a square. Likewise, the 16 cm and 12 cm diagonals in Example 1 bisect each other but have different lengths.</p></section>
    <section data-kind="summary"><h2>Section Summary</h2><ul>
      <li>For a rhombus, halve both diagonals to form a right triangle. Its area is half the product of the full diagonals.</li>
      <li>For a rectangle, the four centre-to-corner distances are equal.</li>
      <li>For a square, combine both rules. Each diagonal makes a 45° angle with a side at its endpoint.</li>
      <li>For a trapezium, identify the parallel bases first. Equal legs give the extra angle and diagonal properties of an isosceles trapezium.</li>
    </ul></section>
  </Lesson>;
}
