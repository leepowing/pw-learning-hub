"use client";
import {useState,type ReactNode} from 'react';
import Link from 'next/link';
import {DualReason} from '@/components/maths/DualReason';
import {CosineTriangle as Triangle,CosineQuarterCircle} from '@/components/maths/S2Chapter12CosineDiagram';

const cos=(x:number)=>Math.cos(x*Math.PI/180);
const acos=(x:number)=>Math.acos(x)*180/Math.PI;
function Working({rows}:{rows:[ReactNode,ReactNode?][]}){
 return <div className="working"><table><thead><tr><th>Working</th><th>Reason</th></tr></thead><tbody>{rows.map(([w,r],i)=><tr key={i}><td>{w}</td><td>{r}</td></tr>)}</tbody></table></div>;
}
function Practice({id,label,answer,solution}:{id:string;label:string;answer:string;solution:ReactNode}){
 const [value,setValue]=useState(''),[checked,setChecked]=useState(false),[show,setShow]=useState(false);
 const clean=(s:string)=>s.trim().toLowerCase().replace(/\s|°/g,'');
 const correct=clean(value)===clean(answer);
 return <div className="practice"><label htmlFor={id}>{label}</label><input id={id} value={value} onChange={e=>{setValue(e.target.value);setChecked(false)}} autoComplete="off"/>
 <div className="buttons"><button onClick={()=>setChecked(true)}>Check</button><button aria-expanded={show} onClick={()=>setShow(!show)}>{show?'Hide':'Show'} solution</button></div>
 {checked&&<p role="status">{!value.trim()?'Enter an answer first.':correct?'Correct.':'Not yet. Check the reference angle, ratio and rounding. Use the requested form.'}</p>}{show&&<div className="solution">{solution}</div>}</div>;
}
export default function CosineRatio(){
 const [angle,setAngle]=useState(30),[scale,setScale]=useState(1),[calc,setCalc]=useState('68'),[ratio,setRatio]=useState('0.9');
 const a=Number(calc),r=Number(ratio),validAngle=calc.trim()!==''&&Number.isFinite(a)&&a>0&&a<90,validRatio=ratio.trim()!==''&&Number.isFinite(r)&&r>0&&r<1;
 return <main className="cosine-lesson">
 <Link href="/maths/s2/chapter-12">← Chapter 12 overview</Link>
 <header><p className="eyebrow">S2 · SECTION 12.3</p><h1>The Cosine Ratio</h1><p>Use an acute angle and the ratio of adjacent side to hypotenuse to solve right-angled triangles.</p></header>
 <nav aria-label="Lesson sections"><a href="#definition">A · Definition</a><a href="#calculator">B · Calculator</a><a href="#properties">C · Properties</a><a href="#unknowns">D · Unknowns</a><a href="#review">Review</a></nav>
 <section id="definition"><h2>A. Adjacent side ÷ hypotenuse</h2>
 <p>First choose the acute angle θ. The adjacent side joins θ to the right angle. The hypotenuse is always opposite the right angle.</p>
 <p className="formula">cos θ = adjacent / hypotenuse</p><p>The side lengths must have the same units. Their ratio has no units. “cos θ” means the cosine of θ, not “cos × θ”.</p>
 <Triangle opposite={12} hypotenuse={13} names={['Y','X','Z']} adjacentLabel="5" oppositeLabel="12" hypotenuseLabel="13"/>
 <p>With θ at X, XY is adjacent and XZ is the hypotenuse: <strong>cos θ = 5/13</strong>.</p>
 <h3>Change the size, keep the angle</h3><label htmlFor="scale">Scale factor: {scale}</label><input id="scale" type="range" min="1" max="3" step="1" value={scale} onChange={e=>setScale(Number(e.target.value))}/>
 <div style={{maxWidth:300+scale*45,margin:'auto'}}><Triangle adjacentLabel={String(4*scale)} oppositeLabel={String(3*scale)} hypotenuseLabel={String(5*scale)}/></div>
 <p className="formula" aria-live="polite">cos θ = {4*scale}/{5*scale} = 4/5</p><p>Enlargement changes all lengths by the same factor. The ratio of adjacent side to hypotenuse stays the same.</p>
 <div className="grid"><Practice id="quick-a" label="Adjacent = 1, hypotenuse = 3. Write cos θ as a fraction." answer="1/3" solution={<p>cos θ = 1/3. The opposite side is not needed.</p>}/><Practice id="quick-b" label="Adjacent = 4, opposite = 3, hypotenuse = 5. Write cos θ as a fraction." answer="4/5" solution={<p>cos θ = adjacent/hypotenuse = 4/5.</p>}/></div>
 <article id="example7"><p className="eyebrow">WORKED EXAMPLE 7</p><h3>Two reference angles</h3><p>Triangle ABC is right-angled at A, with AC = 9 and BC = 15. Let θ = ∠ABC and φ = ∠ACB. Find AB, then cos θ + cos φ.</p>
 <Triangle opposite={9} hypotenuse={15} names={['A','B','C']} adjacentLabel="AB" oppositeLabel="9" hypotenuseLabel="15" otherAngleLabel="φ" rotation={-55}/>
 <Working rows={[[<>AB² + 9² = 15²</>,<DualReason reasonId="pythagoras.theorem"/>],['AB² = 144; AB = 12'],['cos θ = AB/BC = 12/15 = 4/5'],['cos φ = AC/BC = 9/15 = 3/5'],['cos θ + cos φ = 4/5 + 3/5 = 7/5']]}/>
 <p className="note">Each cosine is less than 1, but their sum can exceed 1. When the reference angle changes, the adjacent side changes.</p></article>
 <article><h3>Practice 7</h3><p>Triangle ABC has a right angle at C, BC = 8 and CA = 15. θ is at A and φ is at B.</p><Triangle opposite={8} hypotenuse={17} names={['C','A','B']} adjacentLabel="15" oppositeLabel="8" otherAngleLabel="φ" rotation={160}/>
 <Practice id="drill7" label="Find cos θ − cos φ as a fraction." answer="7/17" solution={<Working rows={[[<>AB² = 8² + 15² = 289</>,<DualReason reasonId="pythagoras.theorem"/>],['AB = 17'],['cos θ − cos φ = 15/17 − 8/17 = 7/17']]}/>}/></article>
 </section>
 <section id="calculator"><h2>B. Cosine and inverse cosine</h2><p>Use degree mode (DEG). Calculator key sequences differ, so identify the cosine and inverse cosine functions on your calculator.</p>
 <div className="grid"><article><h3>Angle → cosine</h3><p>cos 68° = 0.374606… ≈ 0.375 (3 significant figures).</p><label htmlFor="angle-input">Acute angle in degrees</label><input id="angle-input" type="number" value={calc} onChange={e=>setCalc(e.target.value)}/><p role="status">{validAngle?`cos ${a}° ≈ ${cos(a).toFixed(6)}`:'Enter an angle strictly between 0° and 90°.'}</p></article>
 <article><h3>Cosine → angle</h3><p>cos θ = 0.9 gives θ = cos⁻¹(0.9) = 25.8419…° ≈ 26° (nearest degree).</p><label htmlFor="ratio-input">Cosine of an acute angle</label><input id="ratio-input" type="number" step="any" value={ratio} onChange={e=>setRatio(e.target.value)}/><p role="status">{validRatio?`θ = cos⁻¹(${r}) ≈ ${acos(r).toFixed(4)}°`:'Enter a ratio strictly between 0 and 1 for an acute angle.'}</p></article></div>
 <p className="note">cos⁻¹ means inverse cosine (arccos), not 1/cos. Values 0 and 1 give 90° and 0° respectively; these are not acute angles.</p>
 <div className="grid"><Practice id="quick-c" label="Find cos 42° to 3 significant figures." answer="0.743" solution={<p>cos 42° = 0.743144… ≈ 0.743.</p>}/><Practice id="quick-d" label="cos θ = 0.42. Find acute θ to 3 significant figures." answer="65.2" solution={<p>θ = cos⁻¹(0.42) = 65.1654…° ≈ 65.2°.</p>}/></div>
 <article id="example8"><p className="eyebrow">WORKED EXAMPLE 8</p><h3>Calculate each expression separately</h3><p>Let x = cos 30° + cos 10° and cos y = (1/3) cos 30°, with y acute. Use 4 significant figures.</p>
 <Working rows={[[<>x = 0.866025… + 0.984807… ≈ 1.851</>],['cos y = (1/3) × 0.866025…'],['y = cos⁻¹((1/3) cos 30°) ≈ 73.22°']]}/>
 <p>cos 40° ≈ 0.7660, which differs from x. Also y differs from 10°. Adding angles and adding their cosines are different operations; multiplying a cosine does not multiply its angle.</p></article>
 <Practice id="drill8" label="Calculate cos 55° − cos 20° to 2 decimal places." answer="-0.37" solution={<p>0.573576… − 0.939692… = −0.366116… ≈ −0.37. This differs from cos 35° ≈ 0.819152… .</p>}/>
 <p>Do not use cos(a + b) = cos a + cos b, cos(a − b) = cos a − cos b, or cos(ka) = k cos a as identities.</p>
 </section>
 <section id="properties"><h2>C. Properties for acute angles</h2><p className="formula">For 0° &lt; θ &lt; 90°: 0 &lt; cos θ &lt; 1.<br/>As θ increases, cos θ decreases.</p>
 <p>Both side lengths are positive, and the adjacent side is shorter than the hypotenuse. Their ratio is therefore positive and less than 1.</p>
 <div className="values">{[1,12,35,65,80,88].map(n=><div key={n}><strong>{n}°</strong><br/>cos θ ≈ {cos(n).toFixed(4)}</div>)}</div><p className="note">Values above are rounded to 4 decimal places. A value close to 1 is still less than 1 for an acute angle.</p>
 <h3>Watch the horizontal length</h3><label htmlFor="angle-slider">θ = {angle}°</label><input id="angle-slider" type="range" min="15" max="75" step="1" value={angle} onChange={e=>setAngle(Number(e.target.value))}/>
 <CosineQuarterCircle angle={angle}/><p>OA = 1 and ∠OBA = 90°, so cos θ = OB/OA = OB. As A moves upward around the quarter circle, θ increases and OB becomes shorter.</p>
 <p>For example, cos 30° ≈ 0.866 and cos 60° = 0.5, so cos 30° &gt; cos 60°.</p>
 <Practice id="property-check" label="If 20° < θ < 70°, does cos θ increase or decrease as θ increases?" answer="decrease" solution={<p>It decreases. This statement concerns acute angles.</p>}/>
 </section>
 <section id="unknowns"><h2>D. Find an unknown side or angle</h2><ol><li>Locate the right angle and the reference angle.</li><li>Identify the adjacent side and hypotenuse.</li><li>Write the cosine equation before rearranging it.</li><li>Keep calculator precision until the final answer, then add units.</li></ol>
 <article id="example9"><p className="eyebrow">WORKED EXAMPLE 9</p><h3>Multiply or divide?</h3><div className="grid"><div><h4>(a) Find the adjacent side</h4><Triangle opposite={5*Math.sin(42*Math.PI/180)} hypotenuse={5} names={['B','C','A']} adjacentLabel="p" hypotenuseLabel="5" angleLabel="42°" rotation={90}/>
 <Working rows={[[<>cos ∠ACB = BC/AC</>],['cos 42° = p/5'],['p = 5 cos 42° ≈ 3.72']]}/></div><div><h4>(b) Find the hypotenuse</h4><Triangle opposite={3.5*Math.tan(64.5*Math.PI/180)} hypotenuse={3.5/cos(64.5)} names={['X','Y','Z']} adjacentLabel="3.5 cm" hypotenuseLabel="p cm" angleLabel="64.5°"/>
 <Working rows={[[<>cos ∠XYZ = XY/YZ</>],['cos 64.5° = 3.5/p'],['p cos 64.5° = 3.5'],['p = 3.5 / cos 64.5° ≈ 8.13 cm']]}/></div></div><p>Both answers use 3 significant figures. Check that the hypotenuse is longer than either leg.</p>
 <details><summary>Could sine also work?</summary><p>Yes, after finding the other acute angle: 48° in (a) or 25.5° in (b). Then p = 5 sin 48° or p = 3.5/sin 25.5°. Cosine uses the given angle directly.</p><Working rows={[[<>∠BAC + ∠ABC + ∠ACB = 180°</>,<DualReason reasonId="triangle.angleSum" variant="textbook2"/>],['∠BAC = 180° − 90° − 42° = 48°']]}/></details></article>
 <article><h3>Practice 9</h3><div className="grid"><div><Triangle opposite={10*Math.sin(50*Math.PI/180)} hypotenuse={10} names={['D','E','F']} adjacentLabel="m" hypotenuseLabel="10" angleLabel="50°" rotation={90}/><Practice id="drill9a" label="Find m to 3 significant figures." answer="6.43" solution={<p>cos 50° = m/10; m = 10 cos 50° = 6.42787… ≈ 6.43.</p>}/></div>
 <div><Triangle opposite={5.9*Math.tan(67*Math.PI/180)} hypotenuse={5.9/cos(67)} names={['Q','R','P']} adjacentLabel="5.9" hypotenuseLabel="m" angleLabel="67°" rotation={180}/><Practice id="drill9b" label="Find m to 3 significant figures." answer="15.1" solution={<p>cos 67° = 5.9/m; m = 5.9/cos 67° = 15.0998… ≈ 15.1.</p>}/></div></div></article>
 <article id="example10"><p className="eyebrow">WORKED EXAMPLE 10</p><h3>Find an angle</h3><p>Triangle ABC is right-angled at C, with BC = 20, AC = 15 and AB = 25. Find θ = ∠ABC to the nearest degree.</p><Triangle opposite={15} hypotenuse={25} names={['C','B','A']} adjacentLabel="20" oppositeLabel="15" hypotenuseLabel="25" rotation={-35}/>
 <Working rows={[[<>cos θ = BC/AB = 20/25</>],['θ = cos⁻¹(20/25) = 36.8698…° ≈ 37°']]}/>
 <details><summary>Check using sine</summary><p>sin θ = AC/AB = 15/25. Therefore θ = sin⁻¹(15/25) = 36.8698…° ≈ 37°. Both ratios give the same acute angle.</p></details></article>
 <article><h3>Practice 10</h3><div className="grid"><div><Triangle opposite={24} hypotenuse={26} names={['N','L','M']} adjacentLabel="10" oppositeLabel="24" hypotenuseLabel="26" rotation={-65}/><Practice id="drill10a" label="Find θ at L to the nearest degree." answer="67" solution={<p>cos θ = LN/LM = 10/26; θ = 67.3801…° ≈ 67°.</p>}/></div><div><Triangle opposite={21} hypotenuse={29} names={['S','U','T']} adjacentLabel="20" oppositeLabel="21" hypotenuseLabel="29" rotation={140}/><Practice id="drill10b" label="Find θ at U to the nearest degree." answer="46" solution={<p>cos θ = US/UT = 20/29; θ = 46.3971…° ≈ 46°.</p>}/></div></div></article>
 </section>
 <section id="review"><h2>Review your method</h2><p>Try these selected checks. Give angle answers in degrees and round only at the end.</p><div className="grid">
 <Practice id="review1" label="Calculate cos 72° to 3 significant figures." answer="0.309" solution={<p>cos 72° = 0.309016… ≈ 0.309.</p>}/>
 <Practice id="review2" label="Calculate (1/5) cos 15° to 3 significant figures." answer="0.193" solution={<p>(1/5) cos 15° = 0.193185… ≈ 0.193.</p>}/>
 <Practice id="review3" label="cos θ = 0.65. Find acute θ to the nearest degree." answer="49" solution={<p>θ = cos⁻¹(0.65) = 49.4583…° ≈ 49°.</p>}/>
 <Practice id="review4" label="5 cos θ = 3. Find acute θ to the nearest degree." answer="53" solution={<p>cos θ = 3/5; θ = cos⁻¹(3/5) = 53.1301…° ≈ 53°.</p>}/>
 </div><p className="note">These practice answers stay on this page only. They do not change flashcard progress.</p></section>
 <footer><Link href="/maths/s2/chapter-12/the-sine-ratio">← Section 12.2</Link><Link href="/maths/s2/chapter-12">Chapter overview →</Link><Link href="/maths/s2/chapter-12/the-tangent-ratio">Continue to Section 12.4 →</Link></footer>
 <style jsx global>{`
 .cosine-lesson{max-width:1080px;width:calc(100% - 32px);margin:36px auto 70px;font-family:Arial,sans-serif;color:#24364b;line-height:1.65;overflow-wrap:break-word}.cosine-lesson *{box-sizing:border-box}.cosine-lesson a{color:#0f766e;font-weight:700}.cosine-lesson header{background:#ecfeff;border:1px solid #a5f3fc;border-radius:24px;padding:32px;margin-top:22px}.cosine-lesson h1{font-size:clamp(32px,5vw,48px);line-height:1.2}.cosine-lesson h2{font-size:28px;line-height:1.3}.cosine-lesson h3{font-size:22px;line-height:1.4}.cosine-lesson .eyebrow{font-size:13px;font-weight:800;letter-spacing:.08em;color:#0e7490}.cosine-lesson section{background:white;border:1px solid #dce5ee;border-radius:22px;padding:28px;margin:24px 0}.cosine-lesson article{padding:22px;margin:24px 0;background:#f8fafc;border-radius:16px}.cosine-lesson .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}.cosine-lesson .grid>*{min-width:0}.cosine-lesson nav,.cosine-lesson footer,.cosine-lesson .buttons{display:flex;gap:12px;flex-wrap:wrap;margin-top:20px}.cosine-lesson nav a{padding:8px 12px;background:#ecfeff;border-radius:8px}.cosine-lesson label{display:block;font-weight:700}.cosine-lesson input{font:inherit;width:100%;max-width:400px;padding:10px;border:1px solid #94a3b8;border-radius:8px}.cosine-lesson input[type=range]{display:block;padding:8px 0;max-width:550px;accent-color:#0f766e}.cosine-lesson button{font:inherit;padding:9px 14px;border:1px solid #0f766e;border-radius:9px;background:white;color:#0f766e;cursor:pointer}.cosine-lesson :is(button,input,a,summary):focus-visible{outline:3px solid #d97706;outline-offset:3px}.cosine-lesson .formula{background:#f5f3ff;color:#5b21b6;font-weight:700;padding:18px;border-radius:12px}.cosine-lesson .note{background:#ecfeff;border-left:4px solid #0891b2;padding:14px;border-radius:8px}.cosine-lesson .practice{border:1px solid #cbd5e1;border-radius:12px;padding:16px;margin:16px 0;background:white}.cosine-lesson .solution{border-top:1px solid #cbd5e1;margin-top:14px;padding-top:12px}.cosine-lesson .working table{width:100%;table-layout:fixed;border-collapse:collapse}.cosine-lesson .working th,.cosine-lesson .working td{border:1px solid #cbd5e1;padding:13px;vertical-align:top;text-align:left;overflow-wrap:anywhere}.cosine-lesson .working th{background:#ecfeff}.cosine-lesson .working th:first-child{width:45%}.cosine-lesson summary{cursor:pointer;font-weight:700;color:#0f766e;padding:10px 0}.cosine-lesson .values{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.cosine-lesson .values>div{padding:12px;background:#f8fafc;border-radius:10px}.cosine-lesson footer p{width:100%}@media(max-width:700px){.cosine-lesson .grid{grid-template-columns:1fr}.cosine-lesson header,.cosine-lesson section{padding:18px}.cosine-lesson article{padding:14px}.cosine-lesson h2{font-size:25px}.cosine-lesson .working th,.cosine-lesson .working td{padding:7px}.cosine-lesson .values{grid-template-columns:repeat(2,minmax(0,1fr))}}
 `}</style></main>;
}
