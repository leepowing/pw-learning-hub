import Link from "next/link";
import { Card, Formula } from "../../chapter-11/lesson";
import styles from "../../chapter-11/lesson.module.css";

const back = <Link href="/maths/s3/chapter-12">← Back to Chapter 12</Link>;

function BearingDiagram({angle}:{angle:number}) {
  const radians = angle * Math.PI / 180;
  const end = (r:number) => [95+r*Math.sin(radians),85-r*Math.cos(radians)];
  const [x,y] = end(60);
  return <svg viewBox="0 0 200 175" role="img" aria-label={`Direction of B from A, measured clockwise from north through ${angle} degrees.`}>
    <path d="M95 150V20 m-4 8 4-8 4 8 M30 85H160" stroke="#68818b" fill="none"/>
    <path d={`M95 85 L${x} ${y}`} stroke="#047857" strokeWidth="3"/>
    <path d={`M95 61 A24 24 0 ${angle>180?1:0} 1 ${end(24).join(' ')}`} stroke="#b85b19" fill="none"/>
    <text x="89" y="17">N</text><text x="88" y="167">S</text><text x="165" y="90">E</text><text x="10" y="90">W</text>
    <text x="79" y="101">A</text><text x={x+4} y={y+4}>B</text>
  </svg>;
}

export default function Bearings() {
  return <main className={styles.lesson}>{back}
    <header><small>SECTION 12.3</small><h1>Bearings</h1><p>Describe a direction on a horizontal map, reverse a journey and find the shortest distance to a route.</p></header>
    <Card label="LEARNING CARD 1" title="Start at the point after “from”">
      <BearingDiagram angle={125}/>
      <p>The bearing of B from A starts at A. True bearings run clockwise from north, from 000° up to but excluding 360°. Write three digits before the decimal point, as in 008° or 072.5°.</p>
      <p>Moving clockwise in steps of 45° gives N, NE, E, SE, S, SW, W and NW. East is 090°, south is 180° and west is 270°.</p>
      <p>The ray shown is 125° clockwise from north. It lies 55° east of south, giving the compass bearing S55°E.</p>
      <table><caption>Converting a compass bearing to a true bearing</caption><thead><tr><th>Compass</th><th>Clockwise angle</th><th>Example</th></tr></thead><tbody>
        <tr><td>N α E</td><td>α</td><td>N25°E → 025°</td></tr><tr><td>S α E</td><td>180° − α</td><td>S25°E → 155°</td></tr>
        <tr><td>S α W</td><td>180° + α</td><td>S25°W → 205°</td></tr><tr><td>N α W</td><td>360° − α</td><td>N25°W → 335°</td></tr>
      </tbody></table>
    </Card>
    <Card label="WORKED EXAMPLE 1" title="Turn the journey around">
      <BearingDiagram angle={305}/>
      <p>If the outward bearing is 125°, the return ray points exactly half a turn away. Add 180° to get 305°, or N55°W. For an outward bearing of at least 180°, subtract 180°.</p>
      <details><summary>A cyclist leaves on 257°. Give both forms of the return bearing.</summary><p>257° − 180° = 077°, or N77°E. Both compass letters reverse when the journey reverses.</p></details>
    </Card>
    <Card label="WORKED EXAMPLE 2" title="Combine two legs of a walk">
      <svg viewBox="0 0 230 180" role="img" aria-label="From O walk 3 km east to P, then 4 km north to Q. OQ is the direct route.">
        <path d="M45 152H135V32Z" fill="#e1f5ed" stroke="#216553"/>
        <path d="M45 152V50 m-4 8 4-8 4 8 M125 152v-10h10" fill="none" stroke="#42798b"/>
        <text x="38" y="45">N</text><text x="28" y="162">O</text><text x="138" y="163">P</text><text x="140" y="32">Q</text><text x="68" y="172">3 km</text><text x="142" y="99">4 km</text>
      </svg>
      <p>The east and north legs meet at a right angle. The direct distance OQ is √(3² + 4²) = 5 km. From north at O, the east displacement is opposite the required angle and the north displacement is adjacent.</p>
      <Formula tex={String.raw`\theta=\tan^{-1}(3/4)\approx36.9^\circ`}/>
      <p>Q is on a bearing of 036.9° from O. Interchanging 3 and 4 would give the angle measured from east.</p>
    </Card>
    <Card label="WORKED EXAMPLE 3" title="Find the closest point on a sailing route">
      <svg viewBox="0 0 240 165" role="img" aria-label="A boat starts at R, east of light L, heading northwest. M is the foot of the perpendicular from L to the route.">
        <path d="M46 130H190L82 22 M46 130L118 58" fill="none" stroke="#23634e" strokeWidth="2"/>
        <path d="M112 64l6 6 6-6 M190 130V28 m-4 7 4-7 4 7" fill="none" stroke="#527f90"/>
        <text x="182" y="24">N</text><text x="32" y="138">L</text><text x="194" y="139">R</text><text x="118" y="53">M</text><text x="94" y="153">10 km</text>
      </svg>
      <p>A boat starts 10 km due east of a light and sails on 315°. The route makes 45° with the westward line to the light. Drop a perpendicular from L to the route at M. The boat reaches M on its forward journey.</p>
      <p>In triangle LMR, LR is the hypotenuse. The shortest distance is LM = 10 sin 45° ≈ 7.07 km.</p>
    </Card>
    <Card label="SELF-CHECK" title="Use bearings to make a decision">
      <details><summary>Two gates are 80 m apart on an east–west road. A tent is S45°E from the west gate and S45°W from the east gate. Can a walker reach the road in 25 s at 1.5 m/s?</summary><p>Drop a perpendicular of length h from the tent. Each horizontal part equals h tan 45° = h, so 2h = 80 and h = 40 m. The walker covers only 37.5 m in 25 s. The shortest walk takes about 26.7 s.</p></details>
      <details><summary>A hiker travels on 035° and turns 90° clockwise. What is the new compass bearing?</summary><p>035° + 90° = 125°. Subtract from 180° to obtain S55°E.</p></details>
    </Card>
    <Card label="SECTION SUMMARY" title="Check the direction before rounding"><p>Draw north at the starting point. Use the compass quadrant to check the angle, reverse the ray for a return bearing and measure perpendicular to a route for the shortest distance.</p></Card>{back}
  </main>;
}
