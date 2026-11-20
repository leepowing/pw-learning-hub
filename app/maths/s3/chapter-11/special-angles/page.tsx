import {Card,Formula,Lesson,Triangle} from "../lesson";
const rows = [
  ["sin",String.raw`\frac12`,String.raw`\frac{\sqrt2}{2}`,String.raw`\frac{\sqrt3}{2}`],
  ["cos",String.raw`\frac{\sqrt3}{2}`,String.raw`\frac{\sqrt2}{2}`,String.raw`\frac12`],
  ["tan",String.raw`\frac{\sqrt3}{3}`,"1",String.raw`\sqrt3`]
];
export default function SpecialAngles(){
  return <Lesson number="11.1" title="Trigonometric Ratios of Some Special Angles" goal="Build the exact values from two triangles and use them without a calculator.">
    <Card label="LEARNING CARD 1" title="Cut a unit square along a diagonal">
      <Triangle adj={1} opp={1} labels={["1","1","√2"]} angle="45°"/>
      <p>The diagonal divides a square into two right triangles. Each has two unit legs. By Pythagoras’ theorem its hypotenuse is <Formula tex={String.raw`\sqrt{1^2+1^2}=\sqrt2`}/>.</p>
      <aside><b>GCSE:</b> Equal sides have equal opposite angles. The two acute angles sum to 90°, so each is 45°.<br/><b>HKDSE:</b> base ∠s, isos. △; ∠ sum of △.</aside>
      <p>Relative to either acute angle, opposite and adjacent are both 1. Sine and cosine both equal <Formula tex={String.raw`1/\sqrt2=\sqrt2/2`}/> and tangent equals 1.</p>
    </Card>
    <Card label="LEARNING CARD 2" title="Halve an equilateral triangle">
      <Triangle adj={1} opp={Math.sqrt(3)} labels={["1","√3","2"]} angle="60°"/>
      <p>Start with sides of length 2. Draw the altitude to the base. Each half has hypotenuse 2, short leg 1 and long leg <Formula tex={String.raw`\sqrt{2^2-1^2}=\sqrt3`}/> .</p>
      <aside><b>GCSE:</b> The line of symmetry through the top vertex bisects the base and the 60° vertex angle at right angles to the base.<br/><b>HKDSE:</b> symmetry of equilat. △.</aside>
      <p>At 60°, the long leg is opposite. At 30°, the short leg is opposite. Use opposite/hypotenuse for sine, adjacent/hypotenuse for cosine and opposite/adjacent for tangent.</p>
      <table><caption>Exact ratios</caption><thead><tr>{["Ratio","30°","45°","60°"].map(v=><th key={v}>{v}</th>)}</tr></thead><tbody>{rows.map(([name,...values])=><tr key={name}><th scope="row">{name}</th>{values.map(v=><td key={v}><Formula tex={v}/></td>)}</tr>)}</tbody></table>
    </Card>
    <Card label="WORKED EXAMPLE 1" title="Evaluate an expression exactly">
      <p>Find <Formula tex={String.raw`(1+\tan^2 60^\circ)\cos 60^\circ`}/>. Substitute the exact ratios before multiplying.</p>
      <p><Formula tex={String.raw`(1+(\sqrt3)^2)\times\frac12=4\times\frac12`}/></p><aside>Answer: 2.</aside>
    </Card>
    <Card label="WORKED EXAMPLE 2" title="Recover an acute angle">
      <p>Solve <Formula tex={String.raw`3\cos\theta=\frac32`}/>. Divide both sides by 3 to get <Formula tex={String.raw`\cos\theta=\frac12`}/>. Read across the cosine row.</p><aside>Answer: θ = 60°.</aside>
    </Card>
    <Card label="WORKED EXAMPLE 3" title="Two sight lines to a beacon">
      <p>A beacon stands 6 m above level ground. Two observers on the same side see its top at 45° and 30°. How far apart are they?</p>
      <Triangle adj={6*Math.sqrt(3)} opp={6} labels={["far distance","6 m","sight line"]} angle="30°"/>
      <p>Each observer forms a right triangle with the same vertical height. The near distance is 6/tan 45° = 6 m. The far distance is 6/tan 30° = 6√3 m.</p><aside>Distance between observers: 6(√3 − 1) m.</aside>
    </Card>
    <Card label="COMMON MISTAKES" title="Square the ratio after evaluating it"><p>In tan² 60°, the square applies to the tangent value. Squaring √3 gives 3.</p><details><summary>Try it · Find 4 sin² 30° + tan 45°.</summary><p>4 × (1/2)² + 1 = 2.</p></details></Card>
    <Card label="SECTION SUMMARY" title="Rebuild the table from side lengths"><p>Use 1, 1, √2 for 45° and 1, √3, 2 for 30° and 60°. Mark the angle first, then identify the opposite and adjacent legs.</p></Card>
  </Lesson>;
}
