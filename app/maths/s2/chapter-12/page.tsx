"use client";

import { useState } from 'react';
import Link from 'next/link';
import { S2Chapter12Triangle } from '@/components/maths/S2Chapter12Triangle';

const sections = [
  ['12.1', 'Concepts of Trigonometric Ratios', 'Identify the hypotenuse, opposite side and adjacent side relative to an acute angle.'],
  ['12.2', 'The Sine Ratio', 'Use the opposite side and hypotenuse to find unknown lengths and acute angles.'],
  ['12.3', 'The Cosine Ratio', 'Use the adjacent side and hypotenuse to find unknown lengths and acute angles.'],
  ['12.4', 'The Tangent Ratio', 'Connect the opposite and adjacent sides, and explore how ratios change with an acute angle.'],
  ['12.5', 'Applications of Trigonometric Ratios', 'Identify right-angled triangles in a problem and choose suitable ratios.'],
];

export default function ChapterTwelve() {
  const [angle, setAngle] = useState<'A' | 'B'>('A');
  const [answer, setAnswer] = useState<string | null>(null);
  const atA = angle === 'A';
  return <main className="chapter">
    <Link href="/maths/s2">← S2 Mathematics</Link>
    <header><p className="eyebrow">S2 · CHAPTER 12</p><h1>Introduction to Trigonometry</h1>
      <p>Connect angles and side lengths in right-angled triangles.</p>
      <span className="status">Chapter overview and Sections 12.1–12.5 available</span>
    </header>
    <section aria-labelledby="learn"><h2 id="learn">What you will learn</h2>
      <div className="grid">{sections.map(([number, title, description]) => <article key={number}>
        <span className="number">{number}</span><h3>{title}</h3><p>{description}</p>{number === '12.1' ? <Link href="/maths/s2/chapter-12/concepts-of-trigonometric-ratios">Start lesson →</Link> : number === '12.2' ? <Link href="/maths/s2/chapter-12/the-sine-ratio">Start lesson →</Link> : number === '12.3' ? <Link href="/maths/s2/chapter-12/the-cosine-ratio">Start lesson →</Link> : number === '12.4' ? <Link href="/maths/s2/chapter-12/the-tangent-ratio">Start lesson →</Link> : number === '12.5' ? <Link href="/maths/s2/chapter-12/applications-of-trigonometric-ratios">Start lesson →</Link> : <span className="status">Coming soon</span>}
      </article>)}</div>
    </section>
    <section aria-labelledby="sides"><p className="eyebrow">EXPLORE</p><h2 id="sides">One triangle, two reference angles</h2>
      <p>The hypotenuse is opposite the right angle. The opposite and adjacent sides depend on which acute angle you choose.</p>
      <div className="choices" role="group" aria-label="Choose the reference angle">
        {(['A', 'B'] as const).map(value => <button key={value} type="button" aria-pressed={angle === value} onClick={() => setAngle(value)}>θ at {value}</button>)}
      </div>
      <div className="grid explore"><S2Chapter12Triangle angle={angle} /><div aria-live="polite">
        <h3>Relative to θ at {angle}</h3>
        <dl><dt>Hypotenuse</dt><dd>AB = 5</dd><dt>Opposite side</dt><dd>{atA ? 'BC = 3' : 'AC = 4'}</dd><dt>Adjacent side</dt><dd>{atA ? 'AC = 4' : 'BC = 3'}</dd></dl>
        <p>The adjacent side meets θ and the right angle; it is not the hypotenuse.</p>
      </div></div>
      <div className="ratios" aria-live="polite">
        <article><h3>Sine</h3><p>sin θ = opposite / hypotenuse</p><strong>sin θ = {atA ? '3 / 5' : '4 / 5'}</strong></article>
        <article><h3>Cosine</h3><p>cos θ = adjacent / hypotenuse</p><strong>cos θ = {atA ? '4 / 5' : '3 / 5'}</strong></article>
        <article><h3>Tangent</h3><p>tan θ = opposite / adjacent</p><strong>tan θ = {atA ? '3 / 4' : '4 / 3'}</strong></article>
      </div><p className="note">Here, “opposite”, “adjacent” and “hypotenuse” refer to side lengths. These definitions apply to an acute angle in a right-angled triangle.</p>
    </section>
    <section><h2>As an acute angle increases</h2><p>For 0° &lt; θ &lt; 90°:</p>
      <div className="ratios"><article><h3>Sine</h3><p>0 &lt; sin θ &lt; 1</p><p>sin θ increases as θ increases.</p></article>
        <article><h3>Cosine</h3><p>0 &lt; cos θ &lt; 1</p><p>cos θ decreases as θ increases.</p></article>
        <article><h3>Tangent</h3><p>tan θ &gt; 0</p><p>tan θ increases as θ increases. It can be greater than 1.</p></article></div>
    </section>
    <section><h2>Before you start</h2><ul><li>Recognise the right angle and identify the hypotenuse.</li><li>Work with fractions, ratios and simple equations.</li><li>Use degree mode (DEG) for angles given in degrees.</li><li>Keep calculator digits during working and round only the final answer as requested.</li></ul>
      <Link href="/maths/s2/chapter-11/pythagoras-theorem-and-applications">Review Pythagoras’ theorem →</Link>
      <h3>Quick check</h3><p>Which statement is always true for an acute angle θ in a right-angled triangle?</p>
      <div className="quiz">{['The hypotenuse is opposite θ.', 'The value of tan θ is always less than 1.', 'The value of sin θ is between 0 and 1.'].map(option => <button type="button" key={option} aria-pressed={answer === option} onClick={() => setAnswer(option)}>{option}</button>)}</div>
      {answer && <p role="status" className="feedback">{answer === 'The value of sin θ is between 0 and 1.' ? 'Correct.' : 'Try again.'} The opposite side is shorter than the hypotenuse, so 0 &lt; sin θ &lt; 1.</p>}
    </section>
    <div className="grid"><section><h2>Chapter Checkpoint</h2><p>Review the five sections and practise choosing the correct ratio.</p><Link href="/maths/s2/chapter-12/checkpoint">Start checkpoint</Link></section><section><h2>Chapter Flashcards</h2><p>Revise side names, trigonometric ratios and their properties.</p><Link href="/maths/s2/chapter-12/flashcards">Start flashcards</Link></section></div>
    <style jsx>{`
      .chapter{max-width:1080px;width:calc(100% - 32px);margin:36px auto 70px;color:#24364b;font-family:Arial,sans-serif;line-height:1.65;overflow-wrap:break-word}.chapter *{box-sizing:border-box}.chapter :global(a){color:#0f766e;font-weight:700}header{margin-top:22px;padding:36px;border:1px solid #a5f3fc;border-radius:26px;background:#ecfeff}h1{font-size:clamp(32px,5vw,52px);line-height:1.15;margin:16px 0}h2{font-size:28px;line-height:1.3}h3{font-size:20px;line-height:1.4}.eyebrow,.number{color:#0e7490;font-weight:800;letter-spacing:.08em;font-size:13px}section{padding:28px;margin-top:24px;border:1px solid #dce5ee;border-radius:22px;background:white}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}.grid>*{min-width:0}article{padding:20px;background:#f8fafc;border-radius:14px}article h3{margin:6px 0 10px}.status{display:inline-block;color:#52647a;background:#f1f5f9;padding:6px 10px;border-radius:8px;font-size:14px}.explore{align-items:center}.ratios{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.ratios article{background:#f5f3ff}.ratios strong{color:#5b21b6;font-size:20px}dt{font-weight:700}dd{margin:0 0 12px}.choices{display:flex;gap:12px;flex-wrap:wrap}button{font:inherit;border:1px solid #0f766e;color:#0f766e;background:white;border-radius:12px;padding:12px 18px;cursor:pointer;text-align:left}button[aria-pressed=true]{background:#0f766e;color:white}button:focus-visible,.chapter :global(a:focus-visible){outline:3px solid #d97706;outline-offset:3px}.quiz{display:grid;gap:10px}.note{font-size:14px;color:#52647a}.feedback{background:#ecfeff;padding:16px;border-radius:12px}li{margin-bottom:8px}@media(max-width:720px){.grid,.ratios{grid-template-columns:1fr}header,section{padding:20px}h2{font-size:25px}}
    `}</style>
  </main>;
}
