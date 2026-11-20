import Link from "next/link";
import { Card, Formula, Triangle } from "../../chapter-11/lesson";
import styles from "../../chapter-11/lesson.module.css";

const back = <Link href="/maths/s3/chapter-12">← Back to Chapter 12</Link>;

export default function ElevationDepression() {
  return <main className={styles.lesson}>{back}
    <header><small>SECTION 12.2</small><h1>Angles of Elevation and Depression</h1><p>Draw a horizontal through the observer’s eye, then use the sight line to find a height or distance.</p></header>
    <Card label="LEARNING CARD 1" title="One sight line, two viewpoints">
      <svg viewBox="0 0 280 148" role="img" aria-label="A looks up to B. B looks down to A. Equal angle arcs meet the two parallel horizontals.">
        <path d="M24 112H250 M24 32H250" fill="none" stroke="#55829a" strokeDasharray="5 3"/>
        <path d="M32 112L192 32" stroke="#00785d" strokeWidth="3"/>
        <path d="M64 112 A32 32 0 0 0 60.62 97.69 M160 32 A32 32 0 0 0 163.38 46.31" stroke="#ac5412" fill="none"/>
        <text x="16" y="132">A</text><text x="192" y="24">B</text><text x="70" y="107">elevation</text><text x="67" y="49">depression</text>
      </svg>
      <p>At A, measure upwards from the horizontal to B. At B, measure downwards from the horizontal to A. For these same two points, the angles are equal.</p>
      <aside><b>Reason</b><br/>GCSE: Alternate interior angles are equal because the two horizontal lines are parallel.<br/>HKDSE: alt. ∠s, horizontals ∥</aside>
    </Card>
    <Card label="WORKED EXAMPLE 1" title="How high is the light above the ground?">
      <Triangle adj={12} opp={9} labels={["12 m","9 m","sight line"]}/>
      <p>A surveyor’s eye is 1.6 m above level ground. A light is 12 m away horizontally and 9 m above eye level.</p>
      <ol><li>Use the vertical difference to find the elevation angle. In degree mode, θ = tan⁻¹(9/12) ≈ 36.9°.</li><li>The height above ground includes the observer’s eye height. The light is 9 + 1.6 = 10.6 m high.</li><li>The sight line measures √(12² + 9²) = 15 m. If this length and the rise were given, sin θ = 9/15 would give the same angle.</li></ol>
    </Card>
    <Card label="WORKED EXAMPLE 2" title="Use two sightings from the same window">
      <svg viewBox="0 0 260 190" role="img" aria-label="From window W, sight lines descend to a roof at 30 degrees and to its base at 45 degrees. The roof is 12 metres above its base.">
        <path d="M22 30H220" stroke="#507689" strokeDasharray="4 3"/>
        <path d="M30 30L174 113.14V174L30 30" fill="#e3f5ef" stroke="#186453"/>
        <text x="10" y="24">W</text><text x="180" y="112">roof</text><text x="180" y="151">12 m</text><text x="180" y="178">base</text>
      </svg>
      <p>From W the angles of depression to a roof and its base are 30° and 45°. The building is 12 m tall. How far away is it horizontally?</p>
      <ol><li>Both triangles have horizontal run x. The drops from W are x tan 30° and x tan 45°.</li><li>Their difference equals the building height.</li></ol>
      <Formula tex={String.raw`x=\frac{12}{\tan45^\circ-\tan30^\circ}\approx28.4\text{ m}`}/>
      <p>The window is x tan 45° ≈ 28.4 m above the base. Keeping the original value of x avoids rounding twice.</p>
      <details><summary>Looking up instead, how tall is a mast seen above a roof?</summary><p>From a point 20 m horizontally away, the roof and mast tip have elevations of 30° and 45°. Subtract their rises. The mast measures 20(tan 45° − tan 30°) ≈ 8.45 m.</p></details>
    </Card>
    <Card label="SELF-CHECK" title="Choose the right triangle">
      <details><summary>A lookout is 18 m above the water. A buoy is seen at a depression of 30°. Find its horizontal distance.</summary><p>18/d = tan 30°, so d ≈ 31.2 m.</p></details>
      <details><summary>Two buoys on the same side of the lookout lie on the same straight line from its base. The second is seen at 45°. How far apart are they?</summary><p>The nearer buoy is 18/tan 45° = 18 m away. Subtract the two runs to get 13.2 m to three significant figures.</p></details>
      <details><summary>A sight line makes 65° with a vertical wall. What is its angle with the horizontal?</summary><p>25°. A vertical wall meets a horizontal at 90°.</p></details>
    </Card>
    <Card label="SECTION SUMMARY" title="Check the observer and the reference line"><p>Place the angle at the observer. Measure it from the horizontal. Use the difference in heights for the vertical leg, then choose the ratio that contains the two sides you need.</p></Card>{back}
  </main>;
}
