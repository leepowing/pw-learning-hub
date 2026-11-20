import { Back, Card, Header, MathLine } from "../lesson";

export default function Spheres() {
  return <>
    <Back />
    <Header tag="SECTION 10.4" title="Spheres">Read the radius from a diagram, calculate volume and decide which surfaces are exposed when solids are joined.</Header>

    <Card tag="LEARNING CARD 1" title="From a globe to two hemispheres" image="spheres/globe" caption="The diameter passes through O. A cut through O gives two equal hemispheres.">
      <p>Every point on the surface of a sphere lies the same distance r from its centre O. A diameter crosses the centre and measures 2r. Each half of a central cut has a flat circular face of radius r.</p>
      <MathLine tex={String.raw`V_{\rm sphere}=\frac43\pi r^3`}/><p>A hemisphere occupies half this volume. Use cubic units for both.</p>
    </Card>
    <Card tag="WORKED EXAMPLE 1" title="How much space does the model occupy?" image="spheres/model" caption="A hemisphere of radius 3 cm sits on a cone of perpendicular height 4 cm.">
      <ol><li>The shared rim gives both parts the same radius.</li><li>The dome occupies ⅔ × π × 3³ = 18π cm³.</li><li>The cone occupies ⅓ × π × 3² × 4 = 12π cm³.</li></ol>
      <p className="answer">Add the two volumes to get 30π cm³.</p>
    </Card>
    <Card tag="WORKED EXAMPLE 2" title="Recover a bead’s radius from a rise in water level" image="spheres/water" caption="A fully submerged bead raises the water by 0.75 cm in a cylinder of internal radius 4 cm.">
      <ol><li>With no spill, the submerged bead displaces its own volume of water.</li><li>The rise adds a cylindrical layer of volume π × 4² × 0.75 = 12π cm³.</li><li>Equating ⁴⁄₃πr³ to 12π gives r³ = 9. Take the cube root.</li></ol>
      <p className="answer">The radius is approximately 2.08 cm (3 significant figures).</p>
    </Card>
    <Card tag="LEARNING CARD 2" title="Trace the exposed surface" image="spheres/half" caption="The shaded circular face appears when a solid sphere is cut through its centre.">
      <MathLine tex={String.raw`A_{\rm sphere}=4\pi r^2`}/><p>Half the curved surface has area 2πr². A solid hemisphere also has a circular base of area πr², giving a total of 3πr². Area is measured in square units.</p>
    </Card>
    <Card tag="WORKED EXAMPLE 3" title="Find a radius from the painted area" image="spheres/half" caption="Both the curved dome and the flat disc receive paint.">
      <p>A solid hemispherical paperweight has 75π cm² of painted surface.</p>
      <ol><li>Count both surfaces, so 3πr² = 75π.</li><li>Divide by 3π to get r² = 25. A length is positive.</li></ol>
      <p className="answer">The radius is 5 cm. The curved part accounts for 50π cm² and the disc for 25π cm².</p>
    </Card>
    <Card tag="WORKED EXAMPLE 4" title="Measure a capsule with two rounded ends" image="spheres/capsule" caption="Each end has radius 3 mm. The straight cylindrical part has length L.">
      <p>A capsule of volume 108π mm³ consists of a cylinder between two hemispheres. Find its overall length and outside area.</p>
      <ol><li>The ends together occupy one sphere, or 36π mm³. The cylinder occupies the remaining 72π mm³.</li><li>Its base area is 9π mm², so L = 72π ÷ 9π = 8 mm. Each end extends another 3 mm.</li><li>The two circular joins lie inside. Count the curved cylinder wall and the two rounded ends.</li></ol>
      <p className="answer">Overall length = 14 mm. Outside area = 2π × 3 × 8 + 4π × 3² = 84π mm².</p>
    </Card>
    <aside><h2>Try it yourself</h2><p>A solid hemisphere has diameter 12 cm. Find its volume and the area of its curved surface. How much more area would you paint if you included the base?</p>
      <details><summary>Show working</summary><p>The radius is 6 cm. Volume = ⅔ × π × 6³ = 144π cm³. Curved area = 2π × 6² = 72π cm². Add 36π cm² for the base.</p></details></aside>
    <aside><h2>Common mistakes</h2><p>Using the diameter as the radius multiplies a volume by eight. In the practice problem, that gives 1152π cm³. Halve the diameter before cubing.</p></aside>
    <aside><h2>Section summary</h2><p>For volume, split a composite solid into pieces and add their volumes. For surface area, trace its outside boundary. A flat disc counts on a separate solid hemisphere and disappears inside a joined capsule.</p></aside>
    <Back />
  </>;
}
