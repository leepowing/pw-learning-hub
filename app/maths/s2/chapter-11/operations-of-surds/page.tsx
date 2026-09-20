"use client";

import { useState } from 'react';
import Link from 'next/link';
import { simplifyRoot, SurdSquare } from '@/components/maths/S2Chapter11Surds';

const choices = [8, 12, 18, 20, 27, 32, 45, 48, 50, 72];
const questions = [
  { id: 's115-01', q: 'Simplify √12.', options: ['2√3', '3√2', '6'], answer: 0, why: '12 = 4 × 3, so √12 = √4 × √3 = 2√3.' },
  { id: 's115-02', q: 'Simplify √75.', options: ['3√5', '5√3', '25√3'], answer: 1, why: '75 = 25 × 3, so √75 = 5√3.' },
  { id: 's115-03', q: 'Simplify 3√2 + 5√2.', options: ['8√4', '15√2', '8√2'], answer: 2, why: 'These are like surds. Add the coefficients: (3 + 5)√2 = 8√2.' },
  { id: 's115-04', q: 'Simplify √18 − √8.', options: ['√2', '√10', '5√2'], answer: 0, why: '√18 = 3√2 and √8 = 2√2, so their difference is √2.' },
  { id: 's115-05', q: 'Simplify √3 × √12.', options: ['√15', '6', '3√12'], answer: 1, why: '√3 × √12 = √36 = 6.' },
  { id: 's115-06', q: 'Simplify (2√3)(3√2).', options: ['5√5', '6√5', '6√6'], answer: 2, why: 'Multiply the coefficients and the roots separately: 2 × 3 × √(3 × 2) = 6√6.' },
  { id: 's115-07', q: 'Simplify √48 ÷ √3.', options: ['4', '√45', '16'], answer: 0, why: '√48 ÷ √3 = √(48/3) = √16 = 4.' },
  { id: 's115-08', q: 'Rationalize 1/√5.', options: ['√5', '√5/5', '5/√5'], answer: 1, why: 'Multiply numerator and denominator by √5: 1/√5 = √5/5.' },
  { id: 's115-09', q: 'Rationalize 3/√6 and simplify.', options: ['3√6', '√6/6', '√6/2'], answer: 2, why: '3/√6 = 3√6/6 = √6/2.' },
  { id: 's115-10', q: 'Which expression is already in simplest surd form?', options: ['2√7', '√28', '√12'], answer: 0, why: '7 has no square factor greater than 1. The other expressions simplify to 2√7 and 2√3.' },
  { id: 's115-11', q: 'Simplify (√5 + 2)(√5 − 2).', options: ['9', '1', '√5'], answer: 1, why: 'Use the difference of two squares: (√5)² − 2² = 5 − 4 = 1.' },
  { id: 's115-12', q: 'Simplify √2 + √3.', options: ['√5', '2√5', 'It cannot be combined into one like-surd term.'], answer: 2, why: '√2 and √3 are unlike surds. Their sum stays √2 + √3.' },
  { id: 's115-13', q: 'Simplify 2√12 + √27.', options: ['7√3', '3√39', '5√3'], answer: 0, why: '2√12 + √27 = 4√3 + 3√3 = 7√3.' },
  { id: 's115-14', q: 'Evaluate (3√2)².', options: ['6', '18', '9√2'], answer: 1, why: '(3√2)² = 3² × (√2)² = 9 × 2 = 18.' },
  { id: 's115-15', q: 'A rectangle has sides 2√3 cm and √3 cm. Find its area.', options: ['3√3 cm²', '6√3 cm²', '6 cm²'], answer: 2, why: 'Area = 2√3 × √3 = 2 × 3 = 6 cm².' },
  { id: 's115-16', q: 'Simplify 1/√2 + 3√2, with a rational denominator.', options: ['7√2/2', '4√2', '3√2/2'], answer: 0, why: '1/√2 = √2/2, so √2/2 + 6√2/2 = 7√2/2.' },
];

export default function SurdsLesson() {
  const [n, setN] = useState(32);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const { coefficient, radicand } = simplifyRoot(n);
  const attempted = Object.keys(answers).length;
  const score = questions.filter(q => answers[q.id] === q.answer).length;
  return (
    <main className="lesson">
      <Link href="/maths/s2/chapter-11">← Chapter 11 overview</Link>
      <header>
        <p className="eyebrow">S2 · CHAPTER 11 · SECTION 11.5</p>
        <h1>Operations of Surds</h1>
        <p>Simplify roots, combine like surds and keep answers exact.</p>
      </header>

      <section>
        <h2>Learning goals</h2>
        <ul>
          <li>Extract square factors to simplify square-root surds.</li>
          <li>Add and subtract like surds.</li>
          <li>Multiply, divide and expand expressions containing surds.</li>
          <li>Rationalize a denominator containing a single square-root term.</li>
        </ul>
      </section>

      <section>
        <h2>1. Surds and the two root rules</h2>
        <p>A surd is an irrational root of a rational number. In this section we work mainly with square-root surds, such as √2, √3 and √5. By contrast, √9 = 3 is rational.</p>
        <p>For positive numbers a and b:</p>
        <div className="grid">
          <article><h3>Multiplication</h3><p className="formula">√a × √b = √(ab)</p><p>For example, √2 × √8 = √16 = 4.</p></article>
          <article><h3>Division</h3><p className="formula">√a / √b = √(a/b)</p><p>For example, √18 / √2 = √9 = 3.</p></article>
        </div>
        <p className="warning">These rules do not allow you to split a sum: √(a + b) is not generally √a + √b. For instance, √(9 + 16) = 5, while √9 + √16 = 7.</p>
      </section>

      <section>
        <h2>2. Simplify by extracting a square factor</h2>
        <p>Look for the largest perfect-square factor: 4, 9, 16, 25, 36, …</p>
        <p className="formula">√72 = √(36 × 2) = √36 × √2 = 6√2</p>
        <p>Do not stop at √72 = 3√8: √8 can still be simplified.</p>
        <label htmlFor="radicand">Choose a number under the root</label>
        <select id="radicand" value={n} onChange={e => setN(Number(e.target.value))}>
          {choices.map(value => <option key={value} value={value}>√{value}</option>)}
        </select>
        <SurdSquare n={n} />
        <p className="formula" role="status">√{n} = √({coefficient*coefficient} × {radicand}) = {coefficient}√{radicand}</p>
        <p>The diagram contains {coefficient*coefficient} small squares, arranged {coefficient} by {coefficient}. Each has side √{radicand}, so the whole side is {coefficient}√{radicand}.</p>
        <p className="note">The grid illustrates the exact length relationship; the display size is adjusted to fit the page.</p>
        <div className="tableWrap">
          <table>
            <caption>Example 1 · Simplify 3√20</caption>
            <thead><tr><th>Working</th><th>Reference</th></tr></thead>
            <tbody>
              <tr><td>3√20 = 3√(4 × 5)</td><td>Extract a square factor</td></tr>
              <tr><td>= 3 × 2√5</td><td>Product rule for square roots</td></tr>
              <tr><td>= 6√5</td><td>Multiply the coefficients</td></tr>
            </tbody>
          </table>
        </div>
        <p className="note">Reference entries here are explanatory rule names, not claimed textbook abbreviations.</p>
      </section>

      <section>
        <h2>3. Add and subtract like surds</h2>
        <p>Like surds have the same root part after simplification. Combine their coefficients and keep that root part unchanged.</p>
        <p className="formula">4√3 + 7√3 − 2√3 = (4 + 7 − 2)√3 = 9√3</p>
        <div className="tableWrap">
          <table>
            <caption>Example 2 · Simplify first</caption>
            <thead><tr><th>Working</th><th>Reference</th></tr></thead>
            <tbody>
              <tr><td>√50 + √8 − √18</td><td>Given expression</td></tr>
              <tr><td>= 5√2 + 2√2 − 3√2</td><td>Extract square factors</td></tr>
              <tr><td>= (5 + 2 − 3)√2</td><td>Collect like surds</td></tr>
              <tr><td>= 4√2</td><td>Arithmetic</td></tr>
            </tbody>
          </table>
        </div>
        <p>√2 + √3 cannot be combined in this way because the simplified root parts differ.</p>
      </section>

      <section>
        <h2>4. Multiply surds and expand brackets</h2>
        <p>Multiply the coefficients, multiply the roots, then simplify.</p>
        <p className="formula">(2√6)(3√3) = 6√18 = 18√2</p>
        <div className="grid">
          <article>
            <h3>Example 3 · One bracket</h3>
            <p>√3(2 + √12)</p><p>= 2√3 + √36</p><p>= 2√3 + 6</p>
            <p>Multiply every term inside the bracket.</p>
          </article>
          <article>
            <h3>Example 4 · Two brackets</h3>
            <p>(√3 + 2)(√3 − 1)</p><p>= 3 − √3 + 2√3 − 2</p><p>= 1 + √3</p>
            <p>Expand all four products, then collect like terms.</p>
          </article>
        </div>
        <p className="formula">(√5 + 2)(√5 − 2) = (√5)² − 2² = 1</p>
        <p>This uses the difference-of-two-squares identity. Also remember that (3√2)² = 9 × 2 = 18: both factors are squared.</p>
      </section>

      <section>
        <h2>5. Divide surds</h2>
        <p>Divide the coefficients and the roots, then simplify any fraction.</p>
        <p className="formula">(6√15) / (2√3) = 3√(15/3) = 3√5</p>
        <p>Another example: √45 / √5 = √9 = 3.</p>
        <p className="warning">Only cancel common factors. You cannot cancel a term across addition: (√2 + 1)/√2 is not equal to 1 + 1.</p>
      </section>

      <section>
        <h2>6. Rationalize the denominator</h2>
        <p>Rationalizing means rewriting an equivalent expression with a rational denominator. Multiply the numerator and denominator by the same non-zero factor.</p>
        <p className="formula">1/√3 = (1 × √3)/(√3 × √3) = √3/3</p>
        <div className="tableWrap">
          <table>
            <caption>Example 5 · Rationalize 3/√6</caption>
            <thead><tr><th>Working</th><th>Reference</th></tr></thead>
            <tbody>
              <tr><td>3/√6 = (3 × √6)/(√6 × √6)</td><td>Multiply by √6/√6 = 1</td></tr>
              <tr><td>= 3√6/6</td><td>(√6)² = 6</td></tr>
              <tr><td>= √6/2</td><td>Simplify the fraction</td></tr>
            </tbody>
          </table>
        </div>
        <p>With a coefficient in the denominator:</p>
        <p className="formula">5/(2√5) = 5√5/(2 × 5) = √5/2</p>
        <p className="warning">Multiply both numerator and denominator. Multiplying only the denominator changes the value.</p>
      </section>

      <section>
        <h2>7. Put the steps together</h2>
        <p>Simplify 1/√2 + 3√2, leaving a rational denominator.</p>
        <div className="tableWrap">
          <table>
            <caption>Example 6 · Rationalize, then combine</caption>
            <thead><tr><th>Working</th><th>Reference</th></tr></thead>
            <tbody>
              <tr><td>1/√2 + 3√2 = √2/2 + 3√2</td><td>Rationalize the denominator</td></tr>
              <tr><td>= √2/2 + 6√2/2</td><td>Use a common denominator</td></tr>
              <tr><td>= 7√2/2</td><td>Add the numerators</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Check your final form</h3>
        <ul><li>No removable perfect-square factor remains under a square root.</li><li>Like surds are combined.</li><li>Fractions are simplified, and denominators are rational when required.</li><li>The answer stays exact unless a decimal is requested.</li></ul>
        <p>For example, an area of 6 cm² is exact; there is no need to keep an unnecessary root sign or decimal approximation.</p>
      </section>

      <section id="practice">
        <h2>8. Check your understanding</h2>
        <p>Choose one answer per question. Read the explanation and restart for a new attempt.</p>
        <p className="score" role="status">Answered {attempted} of {questions.length} · Correct {score} of {attempted}</p>
        <p className="note">Practice is temporary on this page. It does not save progress or award XP.</p>
        {questions.map((q, index) => (
          <fieldset key={q.id}>
            <legend>{index+1}. {q.q}</legend>
            <div className="choices">
              {q.options.map((option, optionIndex) => (
                <button key={`${q.id}-${optionIndex}`} type="button" disabled={answers[q.id] !== undefined} aria-pressed={answers[q.id] === optionIndex} onClick={() => setAnswers(previous => previous[q.id] !== undefined ? previous : { ...previous, [q.id]: optionIndex })}>{option}</button>
              ))}
            </div>
            {answers[q.id] !== undefined && (
              <p role="status" className={answers[q.id] === q.answer ? 'correct' : 'feedback'}><strong>{answers[q.id] === q.answer ? 'Correct. ' : 'Not quite. '}</strong>{q.why}</p>
            )}
          </fieldset>
        ))}
        {attempted === questions.length && (
          <p className="formula" role="status">Practice complete: {score} / {questions.length}. {score === questions.length ? 'You are ready to revise the chapter.' : 'Review the explanations and try again.'}</p>
        )}
        <button type="button" onClick={() => { setAnswers({}); document.getElementById('practice')?.scrollIntoView({ behavior: 'smooth' }); }}>Restart practice</button>
      </section>

      <section>
        <h2>Before you leave</h2>
        <p>Can you explain why √8 + √18 = 5√2, and why 1/√2 = √2/2?</p>
        <div className="choices"><Link href="/maths/s2/chapter-11/rational-and-irrational-numbers">← Section 11.4</Link><Link href="/maths/s2/chapter-11">Chapter 11 overview →</Link></div>
        <p><Link href="/maths/s2/chapter-11/checkpoint">Start Chapter Checkpoint →</Link></p><p className="note">Chapter Flashcards — coming soon.</p>
      </section>
 <style jsx>{`
 .lesson{max-width:1080px;width:calc(100% - 32px);margin:36px auto 70px;color:#24364b;font:18px/1.65 Arial,sans-serif}.lesson *{box-sizing:border-box}.lesson :global(a){color:#0f766e;font-weight:700}header{padding:36px;background:#ecfeff;border:1px solid #a5f3fc;border-radius:26px;margin-top:22px}h1{font-size:clamp(32px,5vw,50px);line-height:1.2}h2{font-size:28px;line-height:1.3}h3{font-size:21px;line-height:1.4}.eyebrow{font-size:13px;font-weight:800;letter-spacing:.1em;color:#0e7490}section{padding:30px;border:1px solid #dce5ee;border-radius:22px;margin-top:24px;background:white}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}.grid article{padding:22px;background:#f8fafc;border-radius:14px;min-width:0}.formula{padding:18px;background:#f5f3ff;color:#5b21b6;border-radius:12px;font-weight:700;overflow-wrap:anywhere}.reference{font-family:Georgia,serif;font-style:italic;color:#5b21b6}.note{font-size:15px;color:#52647a}.warning{background:#fff7ed;border-left:4px solid #c2410c;padding:16px}.tableWrap{overflow:auto;margin:22px 0}table{width:100%;border-collapse:collapse;text-align:left;font-size:16px}caption{text-align:left;font-weight:700;padding:8px 0}th,td{border:1px solid #dce5ee;padding:13px;vertical-align:top}th{background:#ecfeff}label{display:block;font-weight:700}select{max-width:100%;padding:12px;font:inherit;margin-top:12px}fieldset{min-width:0;margin:24px 0;padding:20px;border:1px solid #cbd5e1;border-radius:14px}legend{font-weight:700;padding:0 8px;max-width:100%}.choices{display:flex;flex-wrap:wrap;gap:12px}button{min-height:46px;padding:12px 18px;font:inherit;border:1px solid #0f766e;color:#0f766e;background:white;border-radius:12px;cursor:pointer}button[aria-pressed=true]{background:#0f766e;color:white}button:disabled{cursor:default}button:disabled:not([aria-pressed=true]){color:#52647a;border-color:#cbd5e1}.correct{color:#166534}.feedback{color:#9a3412}.score{font-weight:700}button:focus-visible,select:focus-visible,.lesson :global(a:focus-visible){outline:3px solid #d97706;outline-offset:3px}li{margin-bottom:8px}@media(max-width:720px){.grid{grid-template-columns:1fr}header,section{padding:22px}.lesson{font-size:17px}fieldset{padding:15px}th,td{padding:10px}}
 `}</style>
    </main>
  );
}
