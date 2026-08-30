"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "7x − 10", correct: true },
  { label: "7x + 10", correct: false },
  { label: "3x − 4", correct: false },
  { label: "7x − 4", correct: false },
];

export default function UnderstandingAlgebraicExpressionsPage() {
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
        onClick={() => router.push("/maths/s1/chapter-3")}
      >
        ← Back to Chapter 3
      </button>

      <p className="eyebrow">S1 · CHAPTER 3 · SECTION 2</p>
      <h1>Understanding Algebraic Expressions</h1>

      <p className="introduction">
        Learn how an algebraic expression is organised into terms, identify
        coefficients and constants, combine like terms and evaluate an
        expression by substituting numerical values.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">TERMS OF AN EXPRESSION</p>
            <h2>Every term carries the sign immediately before it</h2>
          </div>
        </div>

        <div className="workedQuestion">3y² + y − 2 + 8y² + 1</div>

        <div className="conceptGrid">
          <article>
            <span className="conceptSymbol">5</span>
            <h3>Number of terms</h3>
            <p>The expression is separated at addition and subtraction signs.</p>
            <strong>3y², y, −2, 8y², 1</strong>
          </article>
          <article>
            <span className="conceptSymbol">−2</span>
            <h3>Constant terms</h3>
            <p>Terms containing numbers only are called constant terms.</p>
            <strong>−2 and 1</strong>
          </article>
          <article>
            <span className="conceptSymbol">3</span>
            <h3>Coefficient</h3>
            <p>The numerical factor multiplying the letter part.</p>
            <strong>3 is the coefficient of y²</strong>
          </article>
        </div>

        <div className="keyNote">
          <strong>The sign belongs to the term.</strong>
          <span>In x − 7, the constant term is −7, not 7.</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">LIKE TERMS</p>
            <h2>Only terms with identical letter parts can be combined</h2>
          </div>
        </div>

        <div className="operationWords">
          <article><strong>3x and −5x</strong><span>✓</span></article>
          <article><strong>4a² and 9a²</strong><span>✓</span></article>
          <article><strong>2xy and −7xy</strong><span>✓</span></article>
          <article><strong>6 and −11</strong><span>✓</span></article>
        </div>

        <div className="phraseTable">
          <article><span>x and x²</span><strong>Unlike terms</strong></article>
          <article><span>3a and 3b</span><strong>Unlike terms</strong></article>
          <article><span>2xy and 2x</span><strong>Unlike terms</strong></article>
          <article><span>5m²n and −m²n</span><strong>Like terms</strong></article>
        </div>

        <div className="warningNote">
          <strong>Check letters and indices—not just coefficients.</strong>
          <span>All constant terms are like terms because none contains a letter.</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">COMBINING LIKE TERMS</p>
            <h2>Add or subtract coefficients and keep the letter part</h2>
          </div>
        </div>

        <div className="workedQuestion">Simplify: 5y + 6 − 3y</div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>Identify the like terms.</p>
            <strong>5y and −3y</strong>
          </article>
          <article>
            <span>2</span>
            <p>Combine their coefficients.</p>
            <strong>(5 − 3)y = 2y</strong>
          </article>
          <article>
            <span>3</span>
            <p>Keep the constant term.</p>
            <strong>2y + 6</strong>
          </article>
        </div>

        <div className="workedAnswer">5y + 6 − 3y = 2y + 6</div>

        <div className="notationGrid">
          <article><p>Same letter</p><span>7a + 2a</span><b>9a</b></article>
          <article><p>Subtract coefficients</p><span>8m − 11m</span><b>−3m</b></article>
          <article><p>Constants combine</p><span>4x + 9 − 3</span><b>4x + 6</b></article>
          <article><p>Two groups</p><span>3p + 2q + 5p − q</span><b>8p + q</b></article>
          <article><p>Indices stay unchanged</p><span>6t² − 2t²</span><b>4t²</b></article>
          <article><p>Unlike terms remain</p><span>5x + 3x²</span><b>5x + 3x²</b></article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">SUBSTITUTION</p>
            <h2>Replace each letter with its given value</h2>
          </div>
        </div>

        <div className="workedQuestion">Find 3a² − 2b when a = −2 and b = 5.</div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>Use brackets around negative values.</p>
            <strong>3(−2)² − 2(5)</strong>
          </article>
          <article>
            <span>2</span>
            <p>Calculate the power first.</p>
            <strong>3(4) − 10</strong>
          </article>
          <article>
            <span>3</span>
            <p>Complete the operations.</p>
            <strong>12 − 10 = 2</strong>
          </article>
        </div>

        <div className="orderWarning">
          <b>Important:</b> (−2)² = 4, but −2² = −4. Brackets show that
          the entire negative number is squared.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Simplify 2x − 3 + 5x − 7.</h2>

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
              Combine 2x and 5x to get 7x. Combine −3 and −7 to get −10.
              Therefore, the simplified expression is 7x − 10.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Match the complete letter part before combining</h2>
        <ul>
          <li>Calling 7 the constant term in x − 7; the term is −7.</li>
          <li>Combining x and x² even though their indices are different.</li>
          <li>Adding letter parts: 3x + 4x is 7x, not 7x².</li>
          <li>Dropping the negative sign when rearranging terms.</li>
          <li>Substituting a negative number without brackets.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Identify first, then simplify</h2>
        <div className="summaryGrid">
          <article><strong>Term</strong><span>includes its sign</span></article>
          <article><strong>Coefficient</strong><span>numerical factor</span></article>
          <article><strong>Like terms</strong><span>same letters and indices</span></article>
          <article><strong>Substitution</strong><span>replace letters with values</span></article>
        </div>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s1/chapter-3")}
        >
          ← Return to Chapter 3
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
