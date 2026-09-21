"use client";
import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { DualReason } from '@/components/maths/DualReason';
import { SineDiagram, SineQuarterCircle } from '@/components/maths/S2Chapter12SineDiagram';

const sin=(x:number)=>Math.sin(x*Math.PI/180);
const asin=(x:number)=>Math.asin(x)*180/Math.PI;
function Working({rows}:{rows:[ReactNode,ReactNode?][]}) {
 return <div className="sine-table"><table><thead><tr><th>Working</th><th>Reason</th></tr></thead><tbody>{rows.map(([work,reason],i)=><tr key={i}><td>{work}</td><td>{reason}</td></tr>)}</tbody></table></div>;
}
function Practice({id,label,accepted,solution}:{id:string;label:string;accepted:string[];solution:ReactNode}){
 const [value,setValue]=useState(''),[checked,setChecked]=useState(false),[show,setShow]=useState(false);
 const clean=(x:string)=>x.toLowerCase().replace(/\s|°/g,'').replace(/sqrt\((\d+)\)/g,'√$1');
 const valid=accepted.some(x=>clean(x)===clean(value));
 return <div className="practice"><label htmlFor={id}>{label}</label><input id={id} value={value} onChange={e=>{setValue(e.target.value);setChecked(false);}} autoComplete="off" spellCheck={false}/><div className="buttons"><button type="button" onClick={()=>setChecked(true)}>Check</button><button type="button" aria-expanded={show} onClick={()=>setShow(!show)}>{show?'Hide':'Show'} solution</button></div>{checked&&<p role="status">{!value.trim()?'Enter an answer first.':valid?'Correct.':'Not yet. Check the sides, degree mode and requested rounding.'}</p>}{show&&<div className="solution">{solution}</div>}</div>;
}
export default function SineRatio(){
 const [scale,setScale]=useState(1),[angle,setAngle]=useState(30),[calc,setCalc]=useState('20'),[ratio,setRatio]=useState('0.71');
 const numericAngle=Number(calc),numericRatio=Number(ratio);
 const ratioOK=ratio.trim()!==''&&Number.isFinite(numericRatio)&&numericRatio>0&&numericRatio<1;
 return <main className="lesson"><Link href="/maths/s2/chapter-12">← Chapter 12 overview</Link>
 <header><p className="eyebrow">S2 · SECTION 12.2</p><h1>The Sine Ratio</h1><p>Compare an opposite side with the hypotenuse, then use the ratio to calculate lengths and acute angles.</p></header>
 <nav aria-label="Lesson sections"><a href="#definition">A · Definition</a><a href="#calculator">B · Calculator</a><a href="#inverse">C · Finding angles</a><a href="#properties">D · Properties</a><a href="#unknowns">E · Unknown sides and angles</a><a href="#review">Review</a></nav>
 <section id="definition"><h2>A. A ratio that stays the same</h2><p>Enlarge a right-angled triangle without changing its angles. Both the opposite side and hypotenuse increase by the same factor, so their ratio stays unchanged.</p>
 <label htmlFor="scale">Enlargement factor: {scale}</label><input id="scale" type="range" min="1" max="3" step="1" value={scale} onChange={e=>setScale(Number(e.target.value))}/>
 <div style={{maxWidth:250+scale*80,margin:'auto'}}><SineDiagram oppositeLabel={String(3*scale)} adjacentLabel={String(4*scale)} hypotenuseLabel={String(5*scale)}/></div><p className="formula" aria-live="polite">opposite / hypotenuse = {3*scale} / {5*scale} = 3 / 5</p><p className="note">This is a numerical enlargement demonstration, not a centimetre measurement of the printed activity.</p>
 <h3>Why does this work?</h3><p>In triangles ABC and XYZ, B and Y are right angles, and the acute angles at C and Z are equal.</p><div className="grid"><SineDiagram names={['B','C','A']}/><SineDiagram names={['Y','Z','X']}/></div>
 <Working rows={[
 ['∠ABC = ∠XYZ = 90°; ∠ACB = ∠XZY = θ'],
 ['△ABC ∼ △XYZ',<DualReason reasonId="similarity.aa"/>],
 ['AB / XY = AC / XZ',<DualReason reasonId="similarity.correspondingSides"/>],
 ['AB / AC = XY / XZ'],
 ]}/>
 <p className="formula">sin θ = opposite / hypotenuse</p><p>For a fixed acute angle θ, this value does not depend on the size of the right-angled triangle. The side lengths must use the same units; the ratio itself has no units.</p><p><strong>sin θ</strong> means the sine of θ, not “sin × θ”. Identify θ and the right angle before choosing the sides.</p>
 <article><p className="eyebrow">WORKED EXAMPLE 1</p><h3>Two angles, two opposite sides</h3><SineDiagram opposite={15} hypotenuse={17} names={['B','A','C']} oppositeLabel="15 cm" adjacentLabel="8 cm" hypotenuseLabel="17 cm" otherAngleLabel="φ" rotation={180}/><p>For θ at A, the opposite side is BC. For φ at C, the opposite side is AB. The hypotenuse is AC for both.</p><p className="formula">sin θ = BC / AC = 15 / 17<br/>sin φ = AB / AC = 8 / 17</p></article>
 <article><h3>Practice 1</h3><SineDiagram opposite={40} hypotenuse={41} oppositeLabel="40" adjacentLabel="9" hypotenuseLabel="41" otherAngleLabel="φ" names={['','','']} rotation={180}/><Practice id="drill1-theta" label="sin θ (give a fraction)" accepted={['40/41']} solution={<p>Opposite / hypotenuse = 40 / 41.</p>}/><Practice id="drill1-phi" label="sin φ (give a fraction)" accepted={['9/41']} solution={<p>The opposite side for φ is 9, so sin φ = 9 / 41.</p>}/></article>
 <article><p className="eyebrow">WORKED EXAMPLE 2</p><h3>Find the missing side first</h3><SineDiagram opposite={Math.sqrt(21)} hypotenuse={5} names={['Y','X','Z']} adjacentLabel="2" hypotenuseLabel="5" angleLabel="φ"/>
 <Working rows={[
 ['YZ² + XY² = XZ²',<DualReason reasonId="pythagoras.theorem"/>],
 ['YZ² + 2² = 5²'],['YZ² = 21; YZ = √21 (a positive length)'],['sin φ = YZ / XZ = √21 / 5'],
 ]}/><p>Keep the exact square root when an exact answer is requested.</p></article>
 <article><h3>Practice 2</h3><SineDiagram opposite={Math.sqrt(55)} hypotenuse={8} names={['A','C','B']} adjacentLabel="3" hypotenuseLabel="8"/><Practice id="drill2" label="sin θ (enter √55/8 or sqrt(55)/8)" accepted={['√55/8']} solution={<Working rows={[[<>AB² + 3² = 8²</>,<DualReason reasonId="pythagoras.theorem"/>],['AB = √55'],['sin θ = AB / BC = √55 / 8']]}/>}/></article>
 </section>
 <section id="calculator"><h2>B. Calculate sin θ</h2><p>Set your calculator to degree mode (DEG). Enter the angle using the sine function. Key sequences vary by calculator model.</p><p className="formula">sin 20° = 0.342020… ≈ 0.342 (3 d.p.)</p>
 <label htmlFor="sine-input">Try an acute angle in degrees</label><input id="sine-input" type="number" value={calc} onChange={e=>setCalc(e.target.value)}/><p role="status">{calc.trim()!==''&&numericAngle>0&&numericAngle<90?`sin ${numericAngle}° ≈ ${sin(numericAngle).toFixed(6)}`:'Enter an angle strictly between 0° and 90°.'}</p>
 <article><p className="eyebrow">WORKED EXAMPLE 3</p><h3>Sine does not distribute over addition</h3><p>Evaluate separately, to 4 decimal places:</p><ul><li>sin 40° ≈ 0.6428</li><li>2 sin 20° ≈ 0.6840</li><li>sin 15° + sin 25° ≈ 0.6814</li></ul><p>These results differ. Doubling an angle is not the same as doubling its sine; adding angles is not the same as adding their sines.</p></article>
 <article><h3>Practice 3</h3><Practice id="drill3a" label="sin 5° (3 d.p.)" accepted={['0.087','.087']} solution={<p>sin 5° = 0.087155… ≈ 0.087.</p>}/><Practice id="drill3b" label="sin 80° − sin 75° (3 d.p.)" accepted={['0.019','.019']} solution={<p>0.984807… − 0.965925… = 0.018881… ≈ 0.019. Therefore sin 5° is not equal to sin 80° − sin 75°.</p>}/></article>
 <p className="note">Do not use sin(a + b) = sin a + sin b, sin(a − b) = sin a − sin b, or sin(ka) = k sin a as identities.</p></section>
 <section id="inverse"><h2>C. Find an acute angle from its sine</h2><p>Use the inverse sine function, written sin⁻¹ or arcsin. Here sin⁻¹ does not mean 1 / sin. Keep the calculator in degree mode.</p><p className="formula">sin θ = 0.71 → θ = sin⁻¹(0.71) ≈ 45° (nearest degree)</p>
 <label htmlFor="ratio-input">Enter a sine ratio for an acute angle</label><input id="ratio-input" type="number" step="any" value={ratio} onChange={e=>setRatio(e.target.value)}/><p role="status">{ratioOK?`θ ≈ ${asin(numericRatio).toFixed(4)}°`:'For an acute angle, enter a ratio strictly between 0 and 1.'}</p>
 <article><p className="eyebrow">WORKED EXAMPLE 4</p><h3>Make sin θ the subject first</h3><p className="formula">4 sin θ = 3<br/>sin θ = 3 / 4<br/>θ = sin⁻¹(3 / 4) ≈ 48.6° (nearest 0.1°)</p></article>
 <article><h3>Practice 4</h3><Practice id="drill4" label="3 sin θ = 1. Find acute θ to the nearest 0.1°." accepted={['19.5']} solution={<p>sin θ = 1/3, so θ = sin⁻¹(1/3) = 19.4712…° ≈ 19.5°.</p>}/></article>
 <p className="note">If 3 sin θ = 4, then sin θ = 4/3 &gt; 1. There is no real angle with this sine value. A calculator error here is a clue to check the ratio, not a reason to change calculator mode.</p></section>
 <section id="properties"><h2>D. Properties for acute angles</h2><p>For 0° &lt; θ &lt; 90°, side lengths are positive and the opposite side is shorter than the hypotenuse.</p><p className="formula">0 &lt; sin θ &lt; 1</p><p>As an acute angle increases, its sine increases. In this quarter circle, OA stays equal to 1, so sin θ = AB / 1 = AB.</p>
 <label htmlFor="angle-slider">θ = {angle}°</label><input id="angle-slider" type="range" min="15" max="75" step="1" value={angle} onChange={e=>setAngle(Number(e.target.value))}/><SineQuarterCircle angle={angle}/>
 <p className="note">Compare 30° and 60°: sin 30° = 0.5 and sin 60° ≈ 0.866. These are acute-angle properties; do not apply the “increases” statement to every possible angle.</p>
 <details><summary>Check the activity values (3 significant figures)</summary><div className="activity-values">{[1,12,35,65,80,88].map(a=><p key={a}>sin {a}° ≈ {sin(a).toPrecision(3)}</p>)}</div></details></section>
 <section id="unknowns"><h2>E. Unknown sides and angles</h2><ol><li>Mark the right angle and the required acute angle.</li><li>Identify opposite and hypotenuse, then write sin θ = opposite / hypotenuse.</li><li>Rearrange before calculating. Use consistent length units.</li><li>Keep full calculator precision until the final answer.</li></ol>
 <article><p className="eyebrow">WORKED EXAMPLE 5A</p><h3>Find the opposite side</h3><SineDiagram opposite={14*sin(38)} hypotenuse={14} names={['B','C','A']} oppositeLabel="x" hypotenuseLabel="14" angleLabel="38°"/>
 <p className="formula">sin 38° = x / 14<br/>x = 14 sin 38° ≈ 8.62 (3 s.f.)</p><p>Check: x is shorter than the hypotenuse, 14.</p></article>
 <article><p className="eyebrow">WORKED EXAMPLE 5B</p><h3>Find the hypotenuse</h3><SineDiagram opposite={6.5} hypotenuse={6.5/sin(27)} names={['P','R','Q']} oppositeLabel="6.5 cm" hypotenuseLabel="x cm" angleLabel="27°" rotation={-65}/>
 <p className="formula">sin 27° = 6.5 / x<br/>x sin 27° = 6.5<br/>x = 6.5 / sin 27° ≈ 14.3 cm (3 s.f.)</p><p>Check: x is longer than 6.5 cm.</p></article>
 <article><h3>Practice 5</h3><div className="grid"><div><SineDiagram opposite={12} hypotenuse={12/sin(35)} names={['F','D','E']} oppositeLabel="12 cm" hypotenuseLabel="x cm" angleLabel="35°" rotation={180}/><Practice id="drill5a" label="Find x in cm (3 s.f.)." accepted={['20.9']} solution={<p>sin 35° = 12/x, so x = 12 / sin 35° ≈ 20.9 cm.</p>}/></div><div><SineDiagram opposite={8.6*sin(40)} hypotenuse={8.6} names={['L','M','N']} oppositeLabel="x cm" hypotenuseLabel="8.6 cm" angleLabel="40°" rotation={180}/><Practice id="drill5b" label="Find x in cm (3 s.f.)." accepted={['5.53']} solution={<p>sin 40° = x/8.6, so x = 8.6 sin 40° ≈ 5.53 cm.</p>}/></div></div></article>
 <article><p className="eyebrow">WORKED EXAMPLE 6</p><h3>Find both acute angles</h3><SineDiagram opposite={12} hypotenuse={37} names={['Y','X','Z']} oppositeLabel="12" hypotenuseLabel="37" angleLabel="α" otherAngleLabel="β"/>
 <Working rows={[
 ['sin α = YZ / XZ = 12 / 37'],['α = sin⁻¹(12 / 37) = 18.9246…° ≈ 18.9°'],
 ['∠XZY + ∠XYZ + ∠YXZ = 180°',<DualReason reasonId="triangle.angleSum" variant="textbook2"/>],
 ['β = 180° − 90° − sin⁻¹(12 / 37) ≈ 71.1°'],
 ]}/><p>Both answers are to the nearest 0.1°. Use the unrounded angle in the subtraction.</p>
 <details><summary>Alternative: find the other side first</summary><Working rows={[[<>XY² + 12² = 37²</>,<DualReason reasonId="pythagoras.theorem"/>],['XY = √1225 = 35'],['sin β = 35 / 37; β = sin⁻¹(35 / 37) ≈ 71.1°']]}/></details></article>
 <article><h3>Practice 6</h3><SineDiagram opposite={14} hypotenuse={50} names={['P','Q','R']} oppositeLabel="14" hypotenuseLabel="50" angleLabel="α" otherAngleLabel="β" rotation={180}/><Practice id="drill6a" label="Find α to the nearest 0.1°." accepted={['16.3']} solution={<p>sin α = 14/50, so α = 16.2602…° ≈ 16.3°.</p>}/><Practice id="drill6b" label="Find β to the nearest 0.1°." accepted={['73.7']} solution={<Working rows={[[<>α + β + 90° = 180°</>,<DualReason reasonId="triangle.angleSum" variant="textbook2"/>],['β = 90° − sin⁻¹(14/50) ≈ 73.7°']]}/>}/></article>
 </section>
 <section id="review"><h2>Review your method</h2><p>In this section, θ is acute. Sine compares opposite with hypotenuse, not adjacent with hypotenuse.</p><div className="grid">
 <Practice id="review1" label="sin 32° (3 d.p.)" accepted={['0.530','.530','0.53','.53']} solution={<p>sin 32° = 0.529919… ≈ 0.530. The final zero shows 3 decimal places.</p>}/>
 <Practice id="review2" label="sin 75.3° (3 d.p.)" accepted={['0.967','.967']} solution={<p>sin 75.3° = 0.967267… ≈ 0.967.</p>}/>
 <Practice id="review3" label="sin θ = 0.1. Find θ to the nearest degree." accepted={['6']} solution={<p>θ = sin⁻¹(0.1) = 5.73917…° ≈ 6°.</p>}/>
 <Practice id="review4" label="sin θ = 0.8. Find θ to the nearest degree." accepted={['53']} solution={<p>θ = sin⁻¹(0.8) = 53.1301…° ≈ 53°.</p>}/>
 </div><p className="note">Practice answers are temporary on this page; they do not change flashcard progress.</p></section>
 <footer><Link href="/maths/s2/chapter-12/concepts-of-trigonometric-ratios">← Section 12.1</Link><Link href="/maths/s2/chapter-12">Chapter overview →</Link><Link href="/maths/s2/chapter-12/the-cosine-ratio">Continue to Section 12.3 →</Link></footer>
 <style jsx global>{`
 .lesson{max-width:1080px;width:calc(100% - 32px);margin:36px auto 70px;color:#24364b;font-family:Arial,sans-serif;line-height:1.65;overflow-wrap:break-word}.lesson *{box-sizing:border-box}.lesson a{color:#0f766e;font-weight:700}.lesson header{padding:32px;background:#ecfeff;border:1px solid #a5f3fc;border-radius:24px;margin-top:22px}.lesson h1{font-size:clamp(32px,5vw,48px);line-height:1.2}.lesson h2{font-size:28px;line-height:1.3}.lesson h3{font-size:22px;line-height:1.4}.lesson .eyebrow{font-size:13px;font-weight:800;letter-spacing:.08em;color:#0e7490}.lesson section{padding:28px;background:white;border:1px solid #dce5ee;border-radius:22px;margin:24px 0;scroll-margin-top:18px}.lesson article{padding:22px;margin:24px 0;border-radius:16px;background:#f8fafc}.lesson .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}.lesson .grid>*{min-width:0}.lesson nav,.lesson .buttons,.lesson footer{display:flex;flex-wrap:wrap;gap:12px;margin-top:22px}.lesson nav a{padding:8px 12px;background:#ecfeff;border-radius:8px}.lesson label{display:block;font-weight:700}.lesson input{font:inherit;width:100%;max-width:400px;padding:10px;border:1px solid #94a3b8;border-radius:8px}.lesson input[type=range]{display:block;max-width:550px;padding:8px 0;accent-color:#0f766e}.lesson button{font:inherit;padding:9px 14px;border:1px solid #0f766e;border-radius:9px;background:white;color:#0f766e;cursor:pointer}.lesson :is(button,input,a,summary):focus-visible{outline:3px solid #d97706;outline-offset:3px}.lesson .formula{padding:18px;background:#f5f3ff;border-radius:12px;color:#5b21b6;font-weight:700}.lesson .note{padding:14px;background:#ecfeff;border-left:4px solid #0891b2;border-radius:8px}.lesson .practice{padding:16px;margin:16px 0;border:1px solid #cbd5e1;border-radius:12px;background:white}.lesson .solution{margin-top:14px;border-top:1px solid #cbd5e1;padding-top:12px}.lesson .sine-table table{width:100%;border-collapse:collapse;table-layout:fixed}.lesson .sine-table th,.lesson .sine-table td{padding:13px;border:1px solid #cbd5e1;text-align:left;vertical-align:top;overflow-wrap:anywhere}.lesson .sine-table th{background:#ecfeff}.lesson .sine-table th:first-child{width:45%}.lesson summary{cursor:pointer;font-weight:700;color:#0f766e;padding:10px 0}.lesson .activity-values{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.lesson footer p{width:100%}@media(max-width:700px){.lesson .grid{grid-template-columns:1fr}.lesson header,.lesson section{padding:18px}.lesson article{padding:14px}.lesson h2{font-size:25px}.lesson .sine-table th,.lesson .sine-table td{padding:7px}.lesson .activity-values{grid-template-columns:repeat(2,minmax(0,1fr))}}
 `}</style></main>;
}
