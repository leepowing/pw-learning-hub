import {Back,Card,Header,MathLine,Reason} from "../lesson";

export default function Pyramids(){
  return <><Back/><Header tag="SECTION 10.2" title="Pyramids">Identify the pyramid, find the space it encloses, and measure the material needed to cover it.</Header>
  <Card tag="LEARNING CARD 1" title="Read the base, apex and lateral faces" image="right" caption="V is the apex. ABCD is the base, VB a slant edge and VH the perpendicular height.">
    <p>A pyramid has one polygonal base. A triangular face joins each base edge to the common apex. Name the pyramid after its base: a pentagonal pyramid has five lateral faces.</p><p>For a right rectangular pyramid the apex lies above the centre of the rectangle. Its four slant edges are equal and each lateral face is isosceles. A regular pyramid is a right pyramid with a regular polygon as its base.</p>
  </Card>
  <Card tag="WORKED EXAMPLE 1" title="Does moving the apex matter?" image="oblique" caption="The perpendicular VH meets the rectangular base away from its centre.">
    <ol><li>ABCD still has four sides, so there are four lateral triangles.</li><li>The foot H has moved away from the intersection of the base diagonals. The pyramid is now oblique.</li></ol><p className="answer">It is an oblique rectangular pyramid. VH still measures its height.</p>
  </Card>
  <Card tag="LEARNING CARD 2" title="Measure the space inside" image="right" caption="Use the area of ABCD and the perpendicular VH.">
    <p>A pyramid occupies one third of the volume of a prism with the same base area B and perpendicular height h.</p><MathLine tex={String.raw`V=\frac{1}{3}Bh`}/><p>The rule holds for right and oblique pyramids. Use square units for B and cubic units for V.</p>
  </Card>
  <Card tag="WORKED EXAMPLE 2" title="Recover a missing base length" image="right" caption="A square-based pyramid has height 9 cm and volume 192 cm³.">
    <ol><li>Find the base area: <MathLine tex={String.raw`B=3V/h=3(192)/9=64\text{ cm}^2`}/>.</li><li>The square has side <MathLine tex={String.raw`s=\sqrt{64}=8\text{ cm}`}/>.</li></ol><p className="answer">Each base edge is 8 cm. Check: 64 × 9 ÷ 3 = 192 cm³.</p>
  </Card>
  <Card tag="WORKED EXAMPLE 3" title="From slant edge to vertical height" image="triangle" caption="True shape of triangle VHC. HC is in the base and VC is the slant edge.">
    <p>A right rectangular pyramid has base 8 cm by 6 cm and slant edge 13 cm.</p><ol><li>The base diagonal is <MathLine tex={String.raw`\sqrt{8^2+6^2}=10`}/> cm. The centre bisects it, so HC = 5 cm.</li><li>VH is perpendicular to HC. In triangle VHC, <MathLine tex={String.raw`h=\sqrt{13^2-5^2}=12\text{ cm}`}/>.</li><li>The volume is 8 × 6 × 12 ÷ 3.</li></ol>
    <Reason full="Pythagoras’ theorem applies in right-angled triangle VHC, with VC as its hypotenuse." short="Pyth. theorem in △VHC, ∠VHC = 90°."/>
    <p className="answer">Height = 12 cm. Volume = 192 cm³.</p>
  </Card>
  <Card tag="LEARNING CARD 3" title="Unfold the surface" image="net" caption="A square and four congruent triangles form the net of a regular square pyramid.">
    <p>Add the base area and the area of every lateral face. For a triangular face, measure its height within that face, perpendicular to its base edge. A right rectangular pyramid with unequal base dimensions has two different pairs of faces.</p>
  </Card>
  <Card tag="WORKED EXAMPLE 4" title="How much card covers a closed model?" image="face" caption="Half of one isosceles face. The 13 cm slant edge is the hypotenuse.">
    <p>A regular square pyramid has base side 10 cm and slant edge 13 cm. Allow no overlap.</p><ol><li>The altitude of an isosceles face bisects its base, giving two 5 cm segments.</li><li>The face height is <MathLine tex={String.raw`\sqrt{13^2-5^2}=12\text{ cm}`}/>. One face has area ½ × 10 × 12 = 60 cm².</li><li>Add the square and the four triangles: 100 + 4 × 60.</li></ol>
    <Reason full="The face altitude forms a right-angled triangle, so Pythagoras’ theorem gives its length." short="Pyth. theorem in half-face right △."/>
    <p className="answer">340 cm² for the closed model. An open base would require 240 cm².</p>
    <details><summary>Try it: a right pyramid has base 10 cm by 18 cm and equal slant edges of 13 cm. Find its total surface area.</summary><p>For a 10 cm edge, face height = 12 cm. For an 18 cm edge, face height = √(169 − 81) = √88 cm. Total = 180 + 2(60) + 18√88 ≈ 469 cm² (3 significant figures).</p></details>
  </Card>
  <aside><h2>Common mistake</h2>The 13 cm slant edge in Example 3 gives 208 cm³ if substituted directly. The perpendicular height is 12 cm, so the volume is 192 cm³.</aside>
  <aside><h2>Section summary</h2>Volume uses the perpendicular height above the base. Surface area uses the heights of the triangular faces and includes the base once.</aside><Back/></>;
}
