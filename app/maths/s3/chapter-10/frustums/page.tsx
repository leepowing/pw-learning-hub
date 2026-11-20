import Link from "next/link";
import { Back, Header, Card, Reason, root } from "../lesson";

export default function Frustums() {
  return <><Back/><Header tag="S3 MATHEMATICS · 10.6" title="Frustums of Pyramids and Circular Cones">Slice a cone or pyramid parallel to its base. The piece between the two parallel faces is a frustum. Its height is the perpendicular distance between those faces.</Header>
    <Card tag="Volume" title="Restore the missing tip" image="frustums/cone" caption="Axial section of a cone. Extend the sloping sides to recover the apex.">
      <p>A mould has circular ends of radii 3 cm and 6 cm, separated by 4 cm. How much does it hold?</p>
      <details><summary>Show working</summary><p>Let x be the height of the missing tip. Compare the tip with the whole cone. Their heights satisfy x/(x + 4) = 3/6, so x = 4 cm.</p><Reason full="The parallel radii give equal corresponding angles. The two right triangles share the angle at the apex, so they are similar." short="Similar triangles (AA)."/><p>Subtract the tip from the whole cone. V = π(6² × 8 − 3² × 4)/3 = <b>84π cm³</b>.</p></details>
    </Card>
    <Card tag="Surface area" title="Choose the exposed surfaces" image="frustums/cone" caption="The frustum’s sloping side spans a vertical rise of 4 cm and a horizontal run of 3 cm.">
      <p>How much paper wraps the curved side of the same mould? Its slant height is √(4² + 3²) = 5 cm. By similarity the tip and whole cone have slant heights 5 cm and 10 cm.</p><details><summary>Show areas</summary><p>Curved area = π × 6 × 10 − π × 3 × 5 = <b>45π cm²</b>. Closing both ends adds π(6² + 3²), giving <b>90π cm²</b> in total. For a wrap alone, use the curved area.</p></details>
    </Card>
    <Card tag="Pyramids" title="Measure a square pedestal" image="frustums/pyramid" caption="Square bases of sides 8 cm and 2 cm. The perpendicular height between them is 4 cm.">
      <p>The tip-to-whole length ratio is 2/8 = 1/4. The pedestal occupies three quarters of the original height, so the whole height is 16/3 cm. The tip is 4/3 cm high.</p><details><summary>Find volume and surface area</summary><p>Subtract the pyramid volumes. V = (8² × 16/3 − 2² × 4/3)/3 = <b>112 cm³</b>.</p><p>Each trapezium has face height √(4² + 3²) = 5 cm. The four faces cover 4 × (8 + 2) × 5/2 = 100 cm². Both square ends add 68 cm², giving <b>168 cm²</b>.</p></details>
    </Card>
    <article><h2>Try it upside down</h2><p>An inverted cone has height 12 cm. A parallel cut separates a tip of height 4 cm from the frustum. What fraction of the original volume is in the frustum?</p><details><summary>Check your reasoning</summary><p>The tip is similar to the whole cone. Its volume fraction is (4/12)³ = 1/27. The frustum contains the remaining <b>26/27</b>. Turning it upside down preserves its volume.</p></details></article>
    <Link href={root + "/checkpoint"}>Try the Chapter 10 checkpoint →</Link></>;
}
