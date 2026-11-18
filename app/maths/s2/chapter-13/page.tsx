'use client';

import { useState } from 'react';
import Link from 'next/link';

const sections = [
  ['13.1', 'Circles', 'Use radius and diameter to calculate circumference and area.'],
  ['13.2', 'Arcs and Sectors', 'Connect the angle at the centre to arc length, sector area and perimeter.'],
  ['13.3', 'Circular Cylinders', 'Calculate volume and distinguish curved surface area from total surface area.'],
];
const decimal = (n: number) => Number(n.toFixed(3)).toString();

export default function ChapterThirteen() {
  const [shape, setShape] = useState<'Circle' | 'Sector' | 'Cylinder'>('Circle');
  const [radius, setRadius] = useState(5);
  const [angle, setAngle] = useState(120);
  const [height, setHeight] = useState(3);
  const [answer, setAnswer] = useState<number | null>(null);
  const radians = angle * Math.PI / 180;
  const endX = 160 + 95 * Math.cos(radians);
  const endY = 145 - 95 * Math.sin(radians);
  const sectorPath = `M 160 145 L 255 145 A 95 95 0 ${angle > 180 ? 1 : 0} 0 ${endX} ${endY} Z`;
  const arcPath = `M 190 145 A 30 30 0 ${angle > 180 ? 1 : 0} 0 ${160 + 30 * Math.cos(radians)} ${145 - 30 * Math.sin(radians)}`;
  return <main className="chapter">
    <Link href="/maths/s2">← S2 Mathematics</Link>
    <header><p className="eyebrow">S2 · CHAPTER 13</p><h1>Mensuration (II)</h1><p>From circles to curved surfaces: measure lengths, areas and volumes.</p><span className="status">Sections 13.1–13.3, Checkpoint and Flashcards available</span></header>
    <section><h2>What you will learn</h2><div className="ratios">{sections.map(([number, title, description]) => <article key={number}><span className="number">{number}</span><h3>{title}</h3><p>{description}</p>{number === '13.1' ? <Link href="/maths/s2/chapter-13/circles">Start lesson →</Link> : number === '13.2' ? <Link href="/maths/s2/chapter-13/arcs-and-sectors">Start lesson →</Link> : <Link href="/maths/s2/chapter-13/circular-cylinders">Start lesson →</Link>}</article>)}</div></section>
    <section><p className="eyebrow">EXPLORE</p><h2>One radius, different measurements</h2><p>Choose a shape and change its measurements. All lengths below are in centimetres.</p>
      <div className="choices" role="group" aria-label="Choose a shape">{(['Circle', 'Sector', 'Cylinder'] as const).map(value => <button key={value} type="button" aria-pressed={shape === value} onClick={() => setShape(value)}>{value}</button>)}</div>
      <div className="grid explore"><div>
        <svg viewBox="0 0 320 300" role="img" aria-label={`${shape}: radius ${radius} cm${shape === 'Sector' ? `, angle ${angle} degrees` : shape === 'Cylinder' ? `, perpendicular height ${height} cm` : ''}`} style={{width:'100%',height:'auto',maxWidth:420,display:'block',margin:'auto'}}>
          {shape === 'Circle' && <><circle cx="160" cy="145" r="95" fill="#cffafe" stroke="#0e7490" strokeWidth="2.5"/><line x1="65" y1="145" x2="255" y2="145" stroke="#64748b" strokeDasharray="5 4"/><line x1="160" y1="145" x2="217" y2="69" stroke="#be123c" strokeWidth="3"/><text x="207" y="104" fill="#9f1239">r = {radius}</text><text x="160" y="175" textAnchor="middle">d = {2 * radius}</text><circle cx="160" cy="145" r="3"/><text x="147" y="138">O</text></>}
          {shape === 'Sector' && <><circle cx="160" cy="145" r="95" fill="none" stroke="#94a3b8" strokeDasharray="5 4"/><path d={sectorPath} fill="#fef3c7" stroke="#b45309" strokeWidth="2.5"/><path d={arcPath} fill="none" stroke="#0e7490" strokeWidth="2"/><text x={160 + 53 * Math.cos(radians / 2)} y={150 - 53 * Math.sin(radians / 2)} textAnchor="middle" fontSize="14">{angle}°</text><text x="210" y="166" textAnchor="middle">r = {radius}</text><text x="145" y="160">O</text><text x="160" y="275" textAnchor="middle">Dashed line: rest of the circle</text></>}
          {shape === 'Cylinder' && <><path d="M 80 75 L 80 215 A 80 25 0 0 0 240 215 L 240 75" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5"/><path d="M 80 215 A 80 25 0 0 1 240 215" fill="none" stroke="#0f766e" strokeDasharray="5 4"/><ellipse cx="160" cy="75" rx="80" ry="25" fill="#f0fdfa" stroke="#0f766e" strokeWidth="2.5"/><line x1="160" y1="75" x2="240" y2="75" stroke="#be123c" strokeWidth="2"/><text x="190" y="65" textAnchor="middle">r = {radius}</text><path d="M 258 75 H 270 M 264 75 V 215 M 258 215 H 270" fill="none" stroke="#334155"/><text x="280" y="145" textAnchor="middle">h</text><text x="160" y="270" textAnchor="middle">Perpendicular height h = {height} cm</text></>}
        </svg><p className="note">Diagrams are schematic. Labels show the selected measurements.</p>
      </div><div>
        <label htmlFor="radius">Radius r: <strong>{radius} cm</strong></label><input id="radius" type="range" min="1" max="10" value={radius} onChange={e => setRadius(Number(e.target.value))}/>
        {shape === 'Sector' && <><label htmlFor="angle">Angle at the centre θ: <strong>{angle}°</strong></label><input id="angle" type="range" min="30" max="330" step="10" value={angle} onChange={e => setAngle(Number(e.target.value))}/></>}
        {shape === 'Cylinder' && <><label htmlFor="height">Perpendicular height h: <strong>{height} cm</strong></label><input id="height" type="range" min="1" max="15" value={height} onChange={e => setHeight(Number(e.target.value))}/></>}
        <div aria-live="polite" className="results">
          {shape === 'Circle' ? <><h3>Circle</h3><p>C = 2πr = {2 * radius}π cm</p><p>A = πr² = {radius * radius}π cm²</p><p>Diameter d = 2r. Circumference is the distance around the circle.</p></> : shape === 'Sector' ? <><h3>Sector: {angle}/360 of a circle</h3><p>Arc length l = (θ / 360°) × 2πr</p><p>l = ({angle}/360) × {2 * radius}π cm ≈ {decimal(angle / 360 * 2 * Math.PI * radius)} cm</p><p>Area A = (θ / 360°) × πr²</p><p>A = ({angle}/360) × {radius * radius}π cm² ≈ {decimal(angle / 360 * Math.PI * radius * radius)} cm²</p><p><strong>Sector perimeter = l + 2r</strong></p><p>Include both straight radii as well as the arc.</p></> : <><h3>Closed right circular cylinder</h3><p>Volume V = πr²h = {radius * radius * height}π cm³</p><p>Curved surface area = 2πrh = {2 * radius * height}π cm²</p><p>Total surface area = 2πrh + 2πr² = {2 * radius * height + 2 * radius * radius}π cm²</p><p>Total surface area includes both circular bases. An open container has a different exposed surface area.</p></>}
        </div>
      </div></div>
    </section>
    <section><h2>Before you start</h2><ul><li>Distinguish radius from diameter: d = 2r.</li><li>Use consistent units before substituting into a formula.</li><li>Use cm for length, cm² for area and cm³ for volume.</li><li>Keep π in exact answers. For decimal answers, round only at the end.</li></ul><h3>Quick check</h3><p>A circle has diameter 10 cm. Which expression gives its area?</p><div className="quiz">{['10π cm²', '25π cm²', '100π cm²'].map((option, i) => <button key={option} type="button" aria-pressed={answer === i} onClick={() => setAnswer(i)}>{option}</button>)}</div>{answer !== null && <p role="status" className="feedback">{answer === 1 ? 'Correct.' : 'Try again.'} The radius is 10 ÷ 2 = 5 cm, so A = π × 5² = 25π cm².</p>}<button type="button" className="reset" onClick={() => setAnswer(null)}>Reset quick check</button></section>
    <div className="grid"><section><h2>Chapter Checkpoint</h2><p>Check your understanding of circles, sectors and cylinders.</p><Link href="/maths/s2/chapter-13/checkpoint">Start checkpoint →</Link></section><section><h2>Chapter Flashcards</h2><p>Practise key definitions, formulae and common mistakes.</p><Link href="/maths/s2/chapter-13/flashcards">Start flashcards →</Link></section></div>
    <style jsx>{`

      .chapter{max-width:1080px;width:calc(100% - 32px);margin:36px auto 70px;color:#24364b;font-family:Arial,sans-serif;line-height:1.65;overflow-wrap:break-word}.chapter *{box-sizing:border-box}.chapter :global(a){color:#0f766e;font-weight:700}header{margin-top:22px;padding:36px;border:1px solid #a5f3fc;border-radius:26px;background:#ecfeff}h1{font-size:clamp(32px,5vw,52px);line-height:1.15;margin:16px 0}h2{font-size:28px;line-height:1.3}h3{font-size:20px;line-height:1.4}.eyebrow,.number{color:#0e7490;font-weight:800;letter-spacing:.08em;font-size:13px}section{padding:28px;margin-top:24px;border:1px solid #dce5ee;border-radius:22px;background:white}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}.grid>*{min-width:0}article{padding:20px;background:#f8fafc;border-radius:14px}article h3{margin:6px 0 10px}.status{display:inline-block;color:#52647a;background:#f1f5f9;padding:6px 10px;border-radius:8px;font-size:14px}.explore{align-items:center}.ratios{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.ratios article{background:#f5f3ff}.ratios strong{color:#5b21b6;font-size:20px}dt{font-weight:700}dd{margin:0 0 12px}.choices{display:flex;gap:12px;flex-wrap:wrap}button{font:inherit;border:1px solid #0f766e;color:#0f766e;background:white;border-radius:12px;padding:12px 18px;cursor:pointer;text-align:left}button[aria-pressed=true]{background:#0f766e;color:white}button:focus-visible,.chapter :global(a:focus-visible){outline:3px solid #d97706;outline-offset:3px}.quiz{display:grid;gap:10px}.note{font-size:14px;color:#52647a}.feedback{background:#ecfeff;padding:16px;border-radius:12px}li{margin-bottom:8px}@media(max-width:720px){.grid,.ratios{grid-template-columns:1fr}header,section{padding:20px}h2{font-size:25px}}
    
input[type=range]{display:block;width:100%;margin:12px 0 24px;accent-color:#0f766e}label{display:block}.results{padding:16px;background:#f0fdfa;border-radius:14px}.reset{margin-top:12px}svg{font-family:Arial,sans-serif;font-size:16px}
    `}</style>
  </main>;
}
