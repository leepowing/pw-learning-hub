import Link from "next/link";
import {Back,Card,Header,Reason,root} from "../lesson";

export default function Heights(){
  return <><Back/><Header tag="SECTION 10.1" title="Heights of Solids">Find the foot of a perpendicular and measure height from a chosen face.</Header>
  <Card tag="LEARNING CARD 1" title="Project a point onto a plane" image="projection" caption="P lies above the plane. HA and HB meet at H in the plane.">
    <p>Lower a perpendicular from P to the plane. Its foot H is the projection of P. The length PH is the shortest distance from P to the plane.</p><p>A line perpendicular to a plane is perpendicular to every line in the plane through its foot. To establish this, it suffices to check two distinct intersecting lines through that foot.</p>
  </Card>
  <Card tag="WORKED EXAMPLE 1" title="Which point is the projection?" image="projection" caption="PH meets both HA and HB at right angles.">
    <ol><li>Identify where PH meets the plane. This point is H.</li><li>HA and HB are distinct lines through H. Both are perpendicular to PH.</li></ol>
    <Reason full="A line perpendicular to two intersecting lines in a plane at their intersection is perpendicular to the plane." short="PH ⟂ HA, PH ⟂ HB ⇒ PH ⟂ plane AHB."/>
    <p className="answer">H is the projection. PH is the perpendicular distance.</p>
  </Card>
  <Card tag="LEARNING CARD 2" title="Match the height to the selected face" image="prism" caption="A triangular end and a long rectangular face give different reference planes.">
    <p>For a prism or cylinder, the height between its parallel bases is their perpendicular separation. For a pyramid or cone, drop the perpendicular from the apex to the base plane.</p><p>For another supporting face, find the greatest perpendicular distance from the solid to that face’s plane. Turning the drawing does not change this distance.</p>
  </Card>
  <Card tag="WORKED EXAMPLE 2" title="One prism, two corresponding heights" image="prism" caption="The right prism is 11 cm long. Its triangular end has perpendicular sides AB and AC.">
    <ol><li>Select the triangular end ABC. The other end is 11 cm away along a perpendicular joining edge.</li><li>Now select the rectangle built on AB. AC is perpendicular to AB and to the prism’s length direction. C is 8 cm from this rectangular face.</li></ol>
    <p className="answer">Triangular end: 11 cm. Rectangle on AB: 8 cm.</p>
    <details><summary>Try the rectangle on AC. What is its corresponding height?</summary><p>6 cm. AB runs from that face to the farthest corner B at right angles.</p></details>
  </Card>
  <aside><h2>Common mistake</h2><p>One right angle is insufficient. In the diagram, a line lying entirely in the plane could itself be perpendicular to HA. Check a second direction through H.</p></aside>
  <aside><h2>Section summary</h2>Select the face, locate the perpendicular, then read its length. A projection is a point. A perpendicular distance is a length.</aside><Back/> · <Link href={root+"/pyramids"}>Continue to 10.2 →</Link></>;
}
