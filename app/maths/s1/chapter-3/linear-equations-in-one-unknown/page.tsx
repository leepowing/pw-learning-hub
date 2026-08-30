"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "p = −12", correct: true },
  { label: "p = −3", correct: false },
  { label: "p = 3", correct: false },
  { label: "p = 12", correct: false },
];

export default function LinearEquationsInOneUnknownPage() {
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

      <p className="eyebrow">S1 · CHAPTER 3 · SECTION 3</p>
      <h1>Linear Equations in One Unknown</h1>

      <p className="introduction">
        Solve linear equations by keeping both sides balanced. Use inverse
        operations, combine like terms, remove brackets and clear fractions
        until the unknown is isolated.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">EQUATIONS AND SOLUTIONS</p>
            <h2>An equation states that two expressions are equal</h2>
          </div>
        </div>

        <div className="workedQuestion">3x + 2 = 17</div>

        <div className="conceptGrid">
          <article>
            <span className="conceptSymbol">=</span>
            <h3>Equation</h3>
            <p>The equal sign separates the left-hand side and right-hand side.</p>
            <strong>LHS = RHS</strong>
          </article>
          <article>
            <span className="conceptSymbol">x</span>
            <h3>One unknown</h3>
            <p>Only one letter represents the value that must be found.</p>
            <strong>x is the unknown</strong>
          </article>
          <article>
            <span className="conceptSymbol">1</span>
            <h3>Linear</h3>
            <p>The highest power of the unknown is one.</p>
            <strong>x, not x² or 1/x</strong>
          </article>
        </div>

        <div className="keyNote">
          <strong>A solution makes the equation true.</strong>
          <span>For x = 5, both sides of 3x + 2 = 17 equal 17.</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">BALANCE AND TRANSPOSITION</p>
            <h2>Perform equivalent operations on both sides</h2>
          </div>
        </div>

        <div className="operationWords">
          <article><strong>+ a moves across</strong><span>− a</span></article>
          <article><strong>− a moves across</strong><span>+ a</span></article>
          <article><strong>× a moves across</strong><span>÷ a</span></article>
          <article><strong>÷ a moves across</strong><span>× a</span></article>
        </div>

        <div className="phraseTable">
          <article><span>x + 2 = 8</span><strong>x = 8 − 2 = 6</strong></article>
          <article><span>y − 7 = 4</span><strong>y = 4 + 7 = 11</strong></article>
          <article><span>9m = −18</span><strong>m = −18 ÷ 9 = −2</strong></article>
          <article><span>n/5 = 3</span><strong>n = 3 × 5 = 15</strong></article>
        </div>

        <div className="warningNote">
          <strong>Transposition is shorthand for balancing.</strong>
          <span>The operation changes because its inverse is applied to both sides—not because a sign changes by magic.</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">UNKNOWN ON BOTH SIDES</p>
            <h2>Collect unknown terms on one side</h2>
          </div>
        </div>

        <div className="workedQuestion">Solve 6m − 7 = 5m.</div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>Move 5m to the left.</p>
            <strong>6m − 5m − 7 = 0</strong>
          </article>
          <article>
            <span>2</span>
            <p>Combine like terms.</p>
            <strong>m − 7 = 0</strong>
          </article>
          <article>
            <span>3</span>
            <p>Move −7 to the right.</p>
            <strong>m = 7</strong>
          </article>
        </div>

        <div className="workedAnswer">Solution: m = 7</div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">REMOVING BRACKETS</p>
            <h2>Multiply every term inside the brackets</h2>
          </div>
        </div>

        <div className="notationGrid">
          <article><p>Positive sum</p><span>a(b + c)</span><b>ab + ac</b></article>
          <article><p>Right multiplication</p><span>(b + c)a</span><b>ab + ac</b></article>
          <article><p>Positive difference</p><span>a(b − c)</span><b>ab − ac</b></article>
          <article><p>Negative multiplier</p><span>−a(b + c)</span><b>−ab − ac</b></article>
          <article><p>Subtract a bracket</p><span>−(b − c)</span><b>−b + c</b></article>
          <article><p>Double bracket term</p><span>3(2x − 5)</span><b>6x − 15</b></article>
        </div>

        <div className="workedQuestion">Solve −3(n − 5) = 2n.</div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>Expand the bracket.</p>
            <strong>−3n + 15 = 2n</strong>
          </article>
          <article>
            <span>2</span>
            <p>Collect n-terms.</p>
            <strong>−5n = −15</strong>
          </article>
          <article>
            <span>3</span>
            <p>Divide both sides by −5.</p>
            <strong>n = 3</strong>
          </article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">CANCELLING DENOMINATORS</p>
            <h2>Multiply every term by the L.C.M. of the denominators</h2>
          </div>
        </div>

        <div className="workedQuestion">Solve 6 + a/2 = a/4.</div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>The denominators are 2 and 4.</p>
            <strong>L.C.M. = 4</strong>
          </article>
          <article>
            <span>2</span>
            <p>Multiply every term by 4.</p>
            <strong>24 + 2a = a</strong>
          </article>
          <article>
            <span>3</span>
            <p>Collect the a-terms.</p>
            <strong>a = −24</strong>
          </article>
        </div>

        <div className="orderWarning">
          <b>Multiply every term:</b> when clearing denominators, the whole
          equation must be multiplied by the L.C.M., including terms that are
          already whole numbers.
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">6</span>
          <div>
            <p className="lessonLabel">CHECKING A SOLUTION</p>
            <h2>Substitute the answer into the original equation</h2>
          </div>
        </div>

        <div className="workedQuestion">Check n = 3 in −3(n − 5) = 2n.</div>

        <div className="phraseTable">
          <article><span>Left-hand side</span><strong>−3(3 − 5) = 6</strong></article>
          <article><span>Right-hand side</span><strong>2(3) = 6</strong></article>
        </div>

        <div className="workedAnswer">LHS = RHS, so n = 3 is correct.</div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Solve 4(p − 9) = 7p.</h2>

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
              Expand: 4p − 36 = 7p. Move 4p to the right: −36 = 3p.
              Divide by 3 to obtain p = −12.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Keep the equation balanced at every step</h2>
        <ul>
          <li>Changing a sign without applying the inverse operation correctly.</li>
          <li>Multiplying only the first term inside a bracket.</li>
          <li>Combining unlike terms such as 3x and 5.</li>
          <li>Clearing one denominator but not multiplying every other term.</li>
          <li>Dividing by a negative coefficient but forgetting to change the sign.</li>
          <li>Checking the answer in a rearranged line instead of the original equation.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Use inverse operations until the unknown is isolated</h2>
        <div className="summaryGrid">
          <article><strong>Transpose</strong><span>apply the inverse operation</span></article>
          <article><strong>Collect</strong><span>combine like terms</span></article>
          <article><strong>Expand</strong><span>multiply every bracket term</span></article>
          <article><strong>Clear fractions</strong><span>multiply by the L.C.M.</span></article>
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
