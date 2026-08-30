"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "180", correct: false },
  { label: "360", correct: false },
  { label: "540", correct: true },
  { label: "900", correct: false },
];

export default function FormulaeAndSubstitutionPage() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const selectedOption = quizOptions.find(
    (option) => option.label === selectedAnswer
  );

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-4")}
      >
        ← Back to Chapter 4
      </button>

      <p className="eyebrow">S1 · CHAPTER 4 · SECTION 1</p>
      <h1>Formulae and the Method of Substitution</h1>

      <p className="introduction">
        A formula shows a relationship among quantities. Substitute the given
        values for its variables, follow the correct order of operations and
        state the calculated value with an appropriate unit.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">WHAT IS A FORMULA?</p>
            <h2>A formula connects related quantities</h2>
          </div>
        </div>

        <div className="conceptGrid">
          <article>
            <span className="conceptSymbol">P</span>
            <h3>Subject</h3>
            <p>The single variable written on the left-hand side.</p>
            <strong>P = 2l + 2w</strong>
          </article>
          <article>
            <span className="conceptSymbol">l, w</span>
            <h3>Variables</h3>
            <p>Letters representing quantities whose values may change.</p>
            <strong>length and width</strong>
          </article>
          <article>
            <span className="conceptSymbol">=</span>
            <h3>Relationship</h3>
            <p>The two sides describe equal values.</p>
            <strong>left-hand side = right-hand side</strong>
          </article>
        </div>

        <div className="keyNote">
          <strong>A formula is not one calculation only.</strong>
          <span>Different valid values of its variables produce different results.</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">METHOD OF SUBSTITUTION</p>
            <h2>Replace each variable with its given value</h2>
          </div>
        </div>

        <div className="workedQuestion">Find E when E = ½mv², m = 10 and v = 3.</div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>Write the original formula.</p>
            <strong>E = ½mv²</strong>
          </article>
          <article>
            <span>2</span>
            <p>Substitute all given values.</p>
            <strong>E = ½(10)(3)²</strong>
          </article>
          <article>
            <span>3</span>
            <p>Evaluate powers before multiplication.</p>
            <strong>E = 5 × 9 = 45</strong>
          </article>
        </div>

        <div className="workedAnswer">E = 45</div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">SUBSTITUTION CHECKLIST</p>
            <h2>Make every replacement visible</h2>
          </div>
        </div>

        <div className="operationWords">
          <article><strong>Write the formula</strong><span>1</span></article>
          <article><strong>Insert values in brackets</strong><span>2</span></article>
          <article><strong>Follow operation order</strong><span>3</span></article>
          <article><strong>Give the unit</strong><span>4</span></article>
        </div>

        <div className="phraseTable">
          <article><span>P = 2l + 2w, l = 5, w = 3</span><strong>P = 16</strong></article>
          <article><span>A = ½bh, b = 8, h = 7</span><strong>A = 28</strong></article>
          <article><span>d = rt, r = 12, t = 4.5</span><strong>d = 54</strong></article>
          <article><span>C = 2πr, r = 3</span><strong>C = 6π</strong></article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">NEGATIVE AND FRACTIONAL VALUES</p>
            <h2>Use brackets to preserve each value and its sign</h2>
          </div>
        </div>

        <div className="workedQuestion">Find T = 3a² − 2b when a = −2 and b = 5.</div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>Put the negative value in brackets.</p>
            <strong>T = 3(−2)² − 2(5)</strong>
          </article>
          <article>
            <span>2</span>
            <p>Evaluate the square first.</p>
            <strong>T = 3(4) − 10</strong>
          </article>
          <article>
            <span>3</span>
            <p>Complete the calculation.</p>
            <strong>T = 12 − 10 = 2</strong>
          </article>
        </div>

        <div className="warningNote">
          <strong>Brackets change the meaning:</strong>
          <span>(−2)² = 4, while −2² means −(2²) = −4.</span>
        </div>

        <div className="notationGrid">
          <article><p>Fractional value</p><span>x = 1/2</span><b>3x = 3/2</b></article>
          <article><p>Negative value</p><span>y = −4</span><b>y² = 16</b></article>
          <article><p>Decimal value</p><span>r = 2.5</span><b>2r = 5</b></article>
          <article><p>Zero value</p><span>n = 0</span><b>n + 7 = 7</b></article>
          <article><p>Reciprocal term</p><span>p = 4</span><b>1/p = 1/4</b></article>
          <article><p>Repeated variable</p><span>a = 3</span><b>a(a + 2) = 15</b></article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">UNITS AND REASONABLENESS</p>
            <h2>Interpret the result after calculating</h2>
          </div>
        </div>

        <div className="conceptGrid">
          <article>
            <span className="conceptSymbol">cm</span>
            <h3>Length</h3>
            <p>Perimeter and distance use linear units.</p>
            <strong>cm, m, km</strong>
          </article>
          <article>
            <span className="conceptSymbol">cm²</span>
            <h3>Area</h3>
            <p>Area formulae produce square units.</p>
            <strong>cm², m²</strong>
          </article>
          <article>
            <span className="conceptSymbol">cm³</span>
            <h3>Volume</h3>
            <p>Volume formulae produce cubic units.</p>
            <strong>cm³, m³</strong>
          </article>
        </div>

        <div className="orderWarning">
          <b>Estimate before accepting the answer.</b> A substituted result
          should fit the expected size, sign and unit of the quantity.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>If S = 180(n − 2), find S when n = 5.</h2>

        <div className="quizOptions">
          {quizOptions.map((option) => {
            const selected = selectedAnswer === option.label;
            const className = selected
              ? option.correct
                ? "quizOption correctOption"
                : "quizOption incorrectOption"
              : "quizOption";

            return (
              <button
                key={option.label}
                type="button"
                className={className}
                onClick={() => setSelectedAnswer(option.label)}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {selectedOption && (
          <div
            className={
              selectedOption.correct
                ? "feedback correctFeedback"
                : "feedback incorrectFeedback"
            }
          >
            <strong>{selectedOption.correct ? "Correct!" : "Try again."}</strong>
            <span>
              Substitute n = 5: S = 180(5 − 2) = 180 × 3 = 540.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Substitute first, then calculate carefully</h2>
        <ul>
          <li>Replacing only one occurrence of a variable.</li>
          <li>Substituting a negative value without brackets.</li>
          <li>Calculating multiplication before an index or bracket.</li>
          <li>Confusing a variable with its numerical coefficient.</li>
          <li>Rounding intermediate values too early.</li>
          <li>Giving an area or volume answer with a linear unit.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Replace, calculate and interpret</h2>
        <div className="summaryGrid">
          <article><strong>Formula</strong><span>relates quantities</span></article>
          <article><strong>Variable</strong><span>represents a quantity</span></article>
          <article><strong>Substitute</strong><span>insert every given value</span></article>
          <article><strong>Evaluate</strong><span>follow operation order</span></article>
        </div>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s1/chapter-4")}
        >
          ← Return to Chapter 4
        </button>
      </div>

      <style jsx>{`
        .page {
          max-width: 1040px;
          width: calc(100% - 48px);
          margin: 44px auto 72px;
          box-sizing: border-box;
          color: #172033;
        }

        .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: none;
          background: transparent;
          color: #047857;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .eyebrow, .lessonLabel, .quizLabel, .mistakesLabel, .summaryLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow { margin: 0 0 7px; color: #65a30d; }

        h1 {
          margin: 0;
          font-size: clamp(36px, 5vw, 54px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .introduction {
          max-width: 840px;
          margin: 18px 0 32px;
          color: #5c667a;
          font-size: 19px;
          line-height: 1.65;
        }

        .lessonCard, .quizCard, .mistakesCard, .summaryCard {
          margin-top: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 25px;
          background: white;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.055);
        }

        .lessonHeading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .lessonNumber {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background: #ecfccb;
          color: #3f6212;
          font-size: 22px;
          font-weight: 900;
        }

        .lessonLabel, .quizLabel, .summaryLabel {
          margin: 0 0 5px;
          color: #65a30d;
        }

        .lessonHeading h2, .quizCard h2, .mistakesCard h2, .summaryCard h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.25;
        }

        .conceptGrid, .notationGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .conceptGrid article {
          padding: 20px;
          border-radius: 18px;
          background: #f7fee7;
        }

        .conceptSymbol {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: white;
          color: #3f6212;
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 900;
        }

        .conceptGrid h3 { margin: 13px 0 6px; }
        .conceptGrid p { min-height: 48px; margin: 0 0 10px; color: #64748b; line-height: 1.5; }
        .conceptGrid strong { color: #365314; font-size: 18px; }

        .keyNote, .warningNote, .orderWarning {
          margin-top: 16px;
          padding: 16px 18px;
          border-radius: 15px;
          line-height: 1.55;
        }

        .keyNote { display: grid; gap: 4px; background: #f0fdf4; color: #166534; }
        .warningNote { display: grid; gap: 4px; background: #fffbeb; color: #854d0e; }
        .orderWarning { background: #fff7ed; color: #9a3412; }

        .notationGrid article {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 7px 12px;
          padding: 18px;
          border: 1px solid #dbeafe;
          border-radius: 17px;
          background: #f8fbff;
        }

        .notationGrid p { grid-column: 1 / -1; margin: 0; color: #64748b; font-size: 14px; }
        .notationGrid span { color: #64748b; text-decoration: line-through; }
        .notationGrid b { color: #1d4ed8; font-size: 20px; }

        .operationWords {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .operationWords article {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 15px;
          border-radius: 14px;
          background: #f1f5f9;
        }

        .operationWords strong { font-size: 14px; }
        .operationWords span { color: #4f46e5; font-size: 23px; font-weight: 900; }

        .phraseTable { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin-top: 16px; }
        .phraseTable article { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px; border: 1px solid #e2e8f0; border-radius: 14px; }
        .phraseTable span { color: #475569; }
        .phraseTable strong { color: #3f6212; font-size: 18px; white-space: nowrap; }

        .workedCard { background: linear-gradient(135deg, #f7fee7, #f0fdf4); }
        .workedQuestion { padding: 18px; border-radius: 15px; background: white; font-size: 19px; font-weight: 800; }
        .workedSteps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 14px; }
        .workedSteps article { padding: 17px; border-radius: 15px; background: white; }
        .workedSteps span { width: 29px; height: 29px; display: grid; place-items: center; border-radius: 9px; background: #d9f99d; color: #3f6212; font-weight: 900; }
        .workedSteps p { margin: 10px 0 6px; color: #64748b; }
        .workedSteps strong { color: #365314; font-size: 20px; }
        .workedAnswer { margin-top: 14px; padding: 16px; border-radius: 14px; background: #3f6212; color: white; font-size: 20px; font-weight: 900; text-align: center; }

        .quizCard { border-color: #c7d2fe; background: #fafaff; }
        .quizOptions { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 20px; }
        .quizOption { padding: 15px; border: 2px solid #e2e8f0; border-radius: 14px; background: white; color: #172033; font-size: 17px; font-weight: 900; cursor: pointer; }
        .quizOption:hover { border-color: #a5b4fc; }
        .correctOption { border-color: #10b981; background: #ecfdf5; color: #047857; }
        .incorrectOption { border-color: #fb7185; background: #fff1f2; color: #be123c; }

        .feedback { display: grid; gap: 5px; margin-top: 15px; padding: 16px; border-radius: 14px; line-height: 1.5; }
        .correctFeedback { background: #ecfdf5; color: #065f46; }
        .incorrectFeedback { background: #fff1f2; color: #9f1239; }

        .mistakesCard { border-color: #fed7aa; background: #fffaf5; }
        .mistakesLabel { margin: 0 0 5px; color: #c2410c; }
        .mistakesCard ul { margin: 17px 0 0; padding-left: 22px; color: #475569; line-height: 1.8; }

        .summaryCard { border-color: #bbf7d0; background: #f7fff9; }
        .summaryGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 18px; }
        .summaryGrid article { padding: 16px; border-radius: 15px; background: white; }
        .summaryGrid strong, .summaryGrid span { display: block; }
        .summaryGrid strong { color: #166534; }
        .summaryGrid span { margin-top: 5px; color: #64748b; font-size: 14px; }

        .bottomNavigation { display: flex; justify-content: flex-start; margin-top: 24px; }
        .returnButton { padding: 14px 19px; border: none; border-radius: 14px; background: #059669; color: white; font-size: 16px; font-weight: 900; cursor: pointer; }
        .returnButton:hover { background: #047857; }

        @media (max-width: 800px) {
          .conceptGrid, .notationGrid, .workedSteps { grid-template-columns: 1fr; }
          .operationWords, .quizOptions, .summaryGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 620px) {
          .page { width: calc(100% - 24px); margin-top: 28px; }
          .lessonCard, .quizCard, .mistakesCard, .summaryCard { padding: 21px; }
          .phraseTable, .operationWords, .quizOptions, .summaryGrid { grid-template-columns: 1fr; }
          .phraseTable article { align-items: flex-start; flex-direction: column; }
          .returnButton { width: 100%; }
        }
      `}</style>
    </main>
  );
}
