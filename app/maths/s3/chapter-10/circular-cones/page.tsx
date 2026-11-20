import { Back, Card, Header, MathLine, Reason } from "../lesson";

export default function CircularCones() {
  return <>
    <Back />
    <Header tag="SECTION 10.3" title="Circular Cones">Choose the height that measures capacity, then unfold the curved surface to find how much material a cone needs.</Header>
    <Card tag="LEARNING CARD 1" title="Find the foot of the height" image="cones/types" caption="O marks each base centre. In the oblique cone the perpendicular lands at H.">
      <p>A circular cone has one circular base and one curved surface meeting at a vertex. Its height h is the perpendicular distance from that vertex to the base plane.</p>
      <p>In a right circular cone the vertex projects onto the centre O. Every straight segment from vertex to rim has the same length, the slant height ℓ. In an oblique cone those lengths vary.</p>
    </Card>
    <Card tag="WORKED EXAMPLE 1" title="A funnel is 12 cm across and 10 cm along its slope. How deep is it?" image="cones/section" caption="The right cone and half of its axial section share the same perpendicular height.">
      <ol><li>The opening is a diameter. Halve it to get a radius of 6 cm.</li><li>Read the half-section: the slant height is opposite the right angle.</li><li><MathLine tex={String.raw`h=\sqrt{10^2-6^2}=8\text{ cm}`} /></li></ol>
      <Reason full="The radius and perpendicular height meet at a right angle, so Pythagoras’ theorem applies with the slant height as hypotenuse." short="Pyth. theorem, ℓ² = r² + h² (right cone)." />
      <p className="answer">The depth is 8 cm.</p>
    </Card>
    <Card tag="LEARNING CARD 2" title="Volume depends on perpendicular height" image="cones/types" caption="Both cones have the same base radius and perpendicular height.">
      <p>Imagine a pyramid with more and more sides inscribed in the same circular base. Its base area approaches πr². The factor of one third in the pyramid volume formula carries over to the cone.</p>
      <MathLine tex={String.raw`V=\frac13\pi r^2h`}/><p>This holds for right and oblique cones. Moving the vertex sideways at the same height preserves volume.</p>
    </Card>
    <Card tag="WORKED EXAMPLE 2" title="Recast a wax cone as a cylinder" image="cones/recast" caption="The cone has radius 6 cm and height 8 cm. The new cylinder is 6 cm tall.">
      <ol><li>The cone contains ⅓ × π × 6² × 8 = 96π cm³ of wax.</li><li>All the wax is reused at the same density. Equate the volumes: 6πR² = 96π.</li><li>Divide by 6π and take the positive square root.</li></ol>
      <p className="answer">The cylinder radius is 4 cm. Check: π × 4² × 6 = 96π cm³.</p>
    </Card>
    <Card tag="LEARNING CARD 3" title="Unroll the curved side into a sector" image="cones/net" caption="The highlighted sector arc wraps once around the circular base.">
      <p>Cut a right cone from vertex to rim. Flatten the side without stretching it. Its sector radius is ℓ, and its arc has length 2πr. If θ is the sector angle in degrees, equating arc and rim gives θ/360 = r/ℓ.</p>
      <p>Multiply that fraction by the area of the full circle of radius ℓ:</p>
      <MathLine tex={String.raw`A_{\rm curved}=\frac r\ell\pi\ell^2=\pi r\ell`}/>
      <p>A closed cone also has one circular base. Its total surface area is πrℓ + πr².</p>
    </Card>
    <Card tag="WORKED EXAMPLE 3" title="Recover a slant height from a closed surface" image="cones/section" caption="The radius runs from the centre to the rim. The slope runs from the rim to the vertex.">
      <p>A closed right cone of radius 6 cm has total area 96π cm². Find its slant height, then check it against the drawing.</p>
      <ol><li>Subtract the base: 96π − 36π = 60π cm² of curved surface.</li><li>Solve π × 6 × ℓ = 60π.</li></ol><p className="answer">ℓ = 10 cm. The perpendicular height of this cone is 8 cm.</p>
    </Card>
    <Card tag="WORKED EXAMPLE 4" title="Can thirty paper cups hold nine litres?" image="cones/net" caption="Each cup is rolled from a 216° sector of radius 10 cm, with the straight edges meeting exactly.">
      <ol><li>The sector arc measures (216/360) × 2π × 10 = 12π cm. Set 2πr = 12π to obtain r = 6 cm.</li><li>The slant height is 10 cm. As in Example 1, the depth is 8 cm.</li><li>One cup holds 96π cm³. Thirty cups hold 2880π cm³, about 9.05 L because 1000 cm³ = 1 L.</li></ol>
      <p className="answer">Yes, if filled to the rim. Their combined spare capacity is about 48 mL.</p>
    </Card>
    <aside><h2>Try it yourself</h2><p>A right cone has diameter 10 cm and perpendicular height 12 cm. Find its volume, curved area and total area in terms of π.</p>
      <details><summary>Show working</summary><p>r = 5 cm and ℓ = √(5² + 12²) = 13 cm. Volume = 100π cm³. Curved area = 65π cm². Adding the base gives 90π cm².</p></details></aside>
    <aside><h2>Common mistakes</h2><p>Using the 10 cm slope as the funnel depth would give 120π cm³ instead of 96π cm³. Trace the perpendicular before calculating capacity. For an open paper cup the sector alone supplies the material. Add a circular disc only when the base is covered.</p></aside>
    <aside><h2>Section summary</h2><p>Volume uses r and h for any circular cone. Curved area uses r and ℓ for a right cone. When rolling a sector, match the sector arc to the rim and the sector radius to the slope.</p></aside>
    <Back />
  </>;
}
