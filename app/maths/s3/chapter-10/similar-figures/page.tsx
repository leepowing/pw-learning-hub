import { Back, Card, Header, MathLine, Reason } from "../lesson";

export default function SimilarFigures() {
  return <>
    <Back />
    <Header tag="SECTION 10.5" title="Relations among Lengths, Areas and Volumes of Similar Figures">
      Match two corresponding lengths, then choose the scale factor for a boundary, a surface or a capacity.
    </Header>
    <Card tag="LEARNING CARD 1" title="Count the squares in an enlargement" image="similar/grid" caption="Each grid square is one square unit. Compare the widths, heights and numbers of squares.">
      <p>Similar plane figures have equal corresponding angles and proportional corresponding lengths. If every length is multiplied by k, the perimeter is multiplied by k as well.</p>
      <p>The small rectangle covers six squares. Doubling both dimensions gives four copies of the original rectangle, covering 24 squares. For any similar figures, the area factor is the square of the length factor.</p>
      <MathLine tex={String.raw`k=\frac{L_B}{L_A},\qquad \frac{A_B}{A_A}=k^2`} />
    </Card>
    <Card tag="WORKED EXAMPLE 1" title="Read the area of a courtyard from its plan" image="similar/plan" caption="The courtyard measures 6 cm by 4 cm on a plan drawn at 1 to 250.">
      <ol><li>Each centimetre represents 250 cm, or 2.5 m, on the ground.</li><li>The actual sides measure 15 m and 10 m. Multiply to find the area.</li></ol>
      <p className="answer">The courtyard covers 150 m². Check using areas directly: 24 × 250² = 1,500,000 cm². Divide by 10,000 to convert to m².</p>
    </Card>
    <Card tag="WORKED EXAMPLE 2" title="Find the area below a parallel cut" image="similar/cut" caption="D lies on AB and E lies on AC. DE is parallel to BC. The upper triangle has area 18 cm².">
      <p>AD is 3 cm and DB is 2 cm. Find the area of quadrilateral DBCE.</p>
      <Reason full="Triangles ADE and ABC share angle A. Their corresponding angles at D and B are equal because DE is parallel to BC. Two equal angle pairs establish similarity." short="∠A common, corr. ∠s, DE ∥ BC; △ADE ∼ △ABC (AA)." />
      <ol><li>The whole side AB measures 5 cm. Enlarging the top triangle to the whole triangle multiplies lengths by 5/3.</li><li>The whole area is 18 × (5/3)² = 50 cm².</li><li>Subtract the upper triangle.</li></ol>
      <p className="answer">DBCE has area 32 cm².</p>
    </Card>
    <Card tag="LEARNING CARD 2" title="A third dimension changes the volume factor" image="similar/blocks" caption="All corresponding edges of the two cubes have ratio 2 to 3.">
      <p>Similar solids have the same shape in three dimensions. When all lengths scale by k, each corresponding face scales by k². This also applies to corresponding curved surfaces and to total surface area. Volume scales by k³ because depth scales along with width and height.</p>
      <MathLine tex={String.raw`\frac{S_B}{S_A}=k^2,\qquad \frac{V_B}{V_A}=k^3`} />
    </Card>
    <Card tag="WORKED EXAMPLE 3" title="Compare the coating and capacity of two cubes" image="similar/blocks" caption="Cube A has edge 2 cm and cube B has edge 3 cm.">
      <ol><li>Keep the order A to B. The edge ratio is 2 : 3.</li><li>Square both terms for the outside areas. Cube both for the volumes.</li></ol>
      <p className="answer">Surface areas are in the ratio 4 : 9. Volumes are in the ratio 8 : 27. Check the surface areas directly: six faces give 24 cm² and 54 cm².</p>
    </Card>
    <Card tag="WORKED EXAMPLE 4" title="Work back from volume to rim length" image="similar/domes" caption="Two hemispheres P and Q have volumes in the ratio 8 to 27.">
      <p>The total surface area of Q is 81 cm². Find the ratio of their rim circumferences and the total surface area of P.</p>
      <ol><li>Take the cube root of each volume-ratio term. The radius ratio P : Q is 2 : 3.</li><li>Circumference is proportional to radius, so the rims also have ratio 2 : 3.</li><li>Scale the area down by (2/3)².</li></ol>
      <p className="answer">Rim ratio = 2 : 3. The smaller hemisphere has total surface area 36 cm².</p>
    </Card>
    <aside><h2>Try it yourself</h2><p>Two similar tanks have surface areas in the ratio 16 : 25. The smaller tank holds 128 litres. How much does the larger tank hold?</p>
      <details><summary>Show working</summary><p>Take square roots to get the length ratio 4 : 5. The volume ratio is 64 : 125, so the larger capacity is 128 × 125/64 = 250 litres.</p></details></aside>
    <aside><h2>Common mistakes</h2><p>Doubling just the width of a 3-by-2 rectangle gives a 6-by-2 rectangle. Its area doubles, but its shape changes. The square rule requires the same factor in both dimensions.</p></aside>
    <aside><h2>Section summary</h2><p>Write the order of comparison first. Starting with a length factor k, use k for perimeters, k² for areas and k³ for volumes. Recover a length factor with a square root from areas or a cube root from volumes.</p></aside>
    <Back />
  </>;
}
