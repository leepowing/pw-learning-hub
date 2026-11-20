import Link from "next/link";
import { Card, Formula, Triangle } from "../../chapter-11/lesson";
import styles from "../../chapter-11/lesson.module.css";

const back = <Link href="/maths/s3/chapter-12">← Back to Chapter 12</Link>;

function Contours() {
  return <svg viewBox="0 0 270 175" role="img" aria-label="Contour map. A lies on the 100 m contour and B on the 200 m contour. AB measures 4 cm on the original map, scale 1 to 10 000.">
    <rect x="1" y="2" width="268" height="135" rx="6" fill="#e6f2dc"/>
    {[54,134,214].map((x,i) => <g key={x}>
      <path d={`M ${x-12} 3 Q ${x+12} 37 ${x} 70 T ${x-12} 136`} stroke="#548557" fill="none"/>
      <text x={x-24} y="29" fill="#29482e">{100+50*i} m</text>
    </g>)}
    <path d="M54 70H214" stroke="#a03e24" strokeWidth="2"/>
    <circle cx="54" cy="70" r="3"/><circle cx="214" cy="70" r="3"/>
    <text x="36" y="89">A</text><text x="221" y="89">B</text><text x="110" y="63">4 cm</text>
    <text x="53" y="162">Scale 1 : 10 000</text>
  </svg>;
}

export default function Gradients() {
  return <main className={styles.lesson}>{back}
    <header><small>SECTION 12.1</small><h1>Gradients</h1><p>Compare slopes, find their inclinations and use a contour map to estimate the length of a straight road.</p></header>
    <Card label="LEARNING CARD 1" title="Which ramp is steeper?">
      <Triangle adj={12} opp={3} labels={["12 m","3 m","ramp"]}/>
      <p>This ramp rises 3 m over a horizontal run of 12 m. Its gradient is ¼, or 1 : 4. That means a rise of 1 m for every 4 m measured horizontally. Use the same unit for both distances.</p>
      <Formula tex={String.raw`g=\frac{\text{vertical distance}}{\text{horizontal distance}}`}/>
      <details><summary>A second ramp rises 3 m over 9 m horizontally. Which is steeper?</summary><p>The second ramp. Its gradient is ⅓, greater than ¼. With the same rise, a shorter run gives a steeper ramp.</p></details>
    </Card>
    <Card label="WORKED EXAMPLE 1" title="When the sloping length is given">
      <Triangle adj={24} opp={7} labels={["x","7 m","25 m"]}/>
      <p>A straight trail is 25 m long and climbs 7 m. Find the run, then express the gradient as 1 : n.</p>
      <ol><li>The trail is the hypotenuse. By Pythagoras’ theorem, x = √(25² − 7²) = 24 m.</li><li>The exact gradient is 7/24. Divide both terms of 7 : 24 by 7 to obtain 1 : (24/7).</li><li>If n is required to the nearest integer, the gradient is approximately 1 : 3.</li></ol>
    </Card>
    <Card label="LEARNING CARD 2" title="From a ratio to an angle">
      <Triangle adj={4} opp={1} labels={["4 units","1 unit","slope"]}/>
      <p>The inclination θ is measured from the horizontal. The rise is opposite θ and the run is adjacent, so tangent gives the gradient. Set your calculator to degrees.</p>
      <Formula tex={String.raw`g=\tan\theta,\qquad \theta=\tan^{-1}(g)`}/>
      <p>For the ramp shown, θ = tan⁻¹(1/4) ≈ 14.0° to the nearest 0.1°.</p>
      <details><summary>A road inclines at 6°. Find its gradient as 1 : n, rounding n to the nearest integer.</summary><p>1/n = tan 6°. Hence n = 1/tan 6° ≈ 9.51. The requested ratio is approximately 1 : 10.</p></details>
    </Card>
    <Card label="WORKED EXAMPLE 2" title="Compare two paths to a lookout">
      <svg viewBox="0 0 275 110" role="img" aria-label="Two straight paths meet at a lookout 3 m above a level baseline. Their horizontal runs are 8 m and 12 m.">
        <path d="M12 70 L108 34 L252 70 Z" fill="#e0f3eb" stroke="#245951"/><path d="M108 34 V70" stroke="#245951" strokeDasharray="3 3"/>
        <text x="114" y="61">3 m</text><text x="48" y="90">8 m</text><text x="164" y="90">12 m</text>
      </svg>
      <p>Both paths reach the same height. The left gradient is 3/8 = 0.375 and the right gradient is 3/12 = 0.25. The right path is gentler. Walking down either path gives the same measure of steepness as walking up it.</p>
    </Card>
    <Card label="LEARNING CARD 3" title="Read the landscape from above">
      <Contours/>
      <p>Each contour joins points at the same height above sea level. Compare A and B to find the vertical change. Use the map scale to find the horizontal change. The marked 4 cm is the measurement on the original map.</p>
    </Card>
    <Card label="WORKED EXAMPLE 3" title="From a map to a road profile">
      <Triangle adj={400} opp={100} labels={["run","rise","road"]}/>
      <p>Suppose a straight road with constant inclination joins A and B on the map above.</p>
      <ol><li>Rise = 200 − 100 = 100 m.</li><li>At 1 : 10 000, each centimetre represents 100 m. Run = 4 × 100 = 400 m.</li><li>Gradient = 100/400 = 1 : 4. Inclination = tan⁻¹(¼) ≈ 14.0°.</li><li>The road is the hypotenuse. Its length is √(400² + 100²) ≈ 412 m to the nearest metre.</li></ol>
    </Card>
    <Card label="SELF-CHECK" title="Practise with new distances">
      <details><summary>A ramp rises 60 cm over a horizontal distance of 9 m. Find its gradient.</summary><p>Convert 9 m to 900 cm. The ratio 60 : 900 simplifies to 1 : 15.</p></details>
      <details><summary>A path of gradient 1 : 18 climbs 4 m. How far does it run horizontally?</summary><p>Each metre of rise needs 18 m of run. The run is 4 × 18 = 72 m.</p></details>
      <details><summary>A road descends at 1 : 12 over a horizontal distance of 90 m. Find the drop.</summary><p>Divide the run by 12. The road drops 7.5 m.</p></details>
      <details><summary>On a 1 : 25 000 map, a 2 cm route joins heights of 90 m and 140 m. Find its inclination.</summary><p>The run is 500 m and the rise is 50 m. The inclination is tan⁻¹(0.1) ≈ 5.7° to the nearest 0.1°.</p></details>
    </Card>
    <Card label="COMMON MISTAKES" title="Check which distance you used">
      <p>For the 25 m trail, 7/25 gives the sine of the inclination. Gradient uses the horizontal run, so it is 7/24. On a contour map, subtract the two heights before dividing by the scaled horizontal distance.</p>
    </Card>
    <Card label="SECTION SUMMARY" title="Three measurements of a slope">
      <p>Gradient compares rise with run. Inclination is the angle to the horizontal. Sloping length is the hypotenuse. Keep full precision until the final rounding step.</p>
    </Card>{back}</main>;
}
