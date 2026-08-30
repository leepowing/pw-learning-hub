"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "3, 4, 5", correct: false },
  { label: "4, 7, 10", correct: true },
  { label: "4, 8, 12", correct: false },
  { label: "1, 4, 7", correct: false },
];

export default function SequencesPage() {
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

      <p className="eyebrow">S1 · CHAPTER 4 · SECTION 2</p>
      <h1>Sequences</h1>

      <p className="introduction">
        A sequence is an ordered list of numbers. Describe its terms using
        position notation, generate values from a general term and recognise
        common rules such as even, odd, square and triangular numbers.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">SEQUENCES AND TERMS</p>
            <h2>Position matters in an ordered list</h2>
          </div>
        </div>

        <div className="workedQuestion">2, 5, 8, 11, 14, …</div>

        <div className="conceptGrid">
          <article>
            <span className="conceptSymbol">a₁</span>
            <h3>First term</h3>
            <p>The number in position 1.</p>
            <strong>a₁ = 2</strong>
          </article>
          <article>
            <span className="conceptSymbol">a₄</span>
            <h3>Fourth term</h3>
            <p>The number in position 4.</p>
            <strong>a₄ = 11</strong>
          </article>
          <article>
            <span className="conceptSymbol">aₙ</span>
            <h3>General term</h3>
            <p>An algebraic rule for the term in position n.</p>
            <strong>aₙ = 3n − 1</strong>
          </article>
        </div>

        <div className="keyNote">
          <strong>The position n normally begins at 1.</strong>
          <span>a₁ is the first term, a₂ is the second term and so on.</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">GENERATING A SEQUENCE</p>
            <h2>Substitute n = 1, 2, 3, … into the general term</h2>
          </div>
        </div>

        <div className="workedQuestion">Generate the first four terms when aₙ = n/(n + 1).</div>

        <div className="workedSteps">
          <article><span>1</span><p>Substitute n = 1.</p><strong>a₁ = 1/2</strong></article>
          <article><span>2</span><p>Substitute n = 2.</p><strong>a₂ = 2/3</strong></article>
          <article><span>3</span><p>Substitute n = 3.</p><strong>a₃ = 3/4</strong></article>
          <article><span>4</span><p>Substitute n = 4.</p><strong>a₄ = 4/5</strong></article>
        </div>

        <div className="workedAnswer">Sequence: 1/2, 2/3, 3/4, 4/5, …</div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">LINEAR SEQUENCES</p>
            <h2>Use the common difference to build a general term</h2>
          </div>
        </div>

        <div className="workedQuestion">Find the general term of 5, 8, 11, 14, …</div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>Find the common difference.</p>
            <strong>+3 each time</strong>
          </article>
          <article>
            <span>2</span>
            <p>Start with 3n.</p>
            <strong>3, 6, 9, 12, …</strong>
          </article>
          <article>
            <span>3</span>
            <p>Compare and adjust by +2.</p>
            <strong>aₙ = 3n + 2</strong>
          </article>
        </div>

        <div className="notationGrid">
          <article><p>4, 7, 10, …</p><span>difference 3</span><b>3n + 1</b></article>
          <article><p>9, 5, 1, …</p><span>difference −4</span><b>13 − 4n</b></article>
          <article><p>−2, 3, 8, …</p><span>difference 5</span><b>5n − 7</b></article>
          <article><p>1/3, 2/3, 1, …</p><span>difference 1/3</span><b>n/3</b></article>
          <article><p>10, 20, 30, …</p><span>difference 10</span><b>10n</b></article>
          <article><p>0, 2, 4, …</p><span>difference 2</span><b>2n − 2</b></article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">COMMON SEQUENCES</p>
            <h2>Learn the standard general terms</h2>
          </div>
        </div>

        <div className="phraseTable">
          <article><span>Even: 2, 4, 6, 8, …</span><strong>aₙ = 2n</strong></article>
          <article><span>Odd: 1, 3, 5, 7, …</span><strong>aₙ = 2n − 1</strong></article>
          <article><span>Square: 1, 4, 9, 16, …</span><strong>aₙ = n²</strong></article>
          <article><span>Triangular: 1, 3, 6, 10, …</span><strong>aₙ = n(n + 1)/2</strong></article>
        </div>

        <div className="operationWords">
          <article><strong>12th even term</strong><span>24</span></article>
          <article><strong>10th odd term</strong><span>19</span></article>
          <article><strong>10th square term</strong><span>100</span></article>
          <article><strong>12th triangular term</strong><span>78</span></article>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">FINDING A PARTICULAR TERM</p>
            <h2>Substitute the required position into the rule</h2>
          </div>
        </div>

        <div className="workedQuestion">Find the 20th term when aₙ = 4n − 7.</div>

        <div className="workedSteps">
          <article><span>1</span><p>The required position is 20.</p><strong>n = 20</strong></article>
          <article><span>2</span><p>Substitute into the rule.</p><strong>a₂₀ = 4(20) − 7</strong></article>
          <article><span>3</span><p>Calculate.</p><strong>a₂₀ = 80 − 7 = 73</strong></article>
        </div>

        <div className="warningNote">
          <strong>Do not continue the list term by term.</strong>
          <span>The general term gives a direct route to any position.</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">6</span>
          <div>
            <p className="lessonLabel">CHECKING A GENERAL TERM</p>
            <h2>Test several positions before accepting the rule</h2>
          </div>
        </div>

        <div className="conceptGrid">
          <article>
            <span className="conceptSymbol">1</span>
            <h3>First position</h3>
            <p>Substitute n = 1 and compare with the first term.</p>
            <strong>Does a₁ match?</strong>
          </article>
          <article>
            <span className="conceptSymbol">2</span>
            <h3>Second position</h3>
            <p>Substitute n = 2 and compare with the second term.</p>
            <strong>Does a₂ match?</strong>
          </article>
          <article>
            <span className="conceptSymbol">n</span>
            <h3>Pattern</h3>
            <p>Confirm that the rule continues with the correct change.</p>
            <strong>Does every term fit?</strong>
          </article>
        </div>

        <div className="orderWarning">
          <b>A matching first term is not enough.</b> Different formulae can
          produce the same first value, so test more than one position.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>If aₙ = 3n + 1, what are the first three terms?</h2>

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
              Substitute n = 1, 2 and 3: 3(1) + 1 = 4,
              3(2) + 1 = 7 and 3(3) + 1 = 10.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Keep position and term value separate</h2>
        <ul>
          <li>Beginning with n = 0 when the first position is n = 1.</li>
          <li>Confusing the position n with the term value aₙ.</li>
          <li>Using n + 2 for consecutive even numbers instead of 2n.</li>
          <li>Writing the triangular-number rule without dividing by 2.</li>
          <li>Using the common difference as the whole general term.</li>
          <li>Checking only one term when testing a proposed rule.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Connect each position to its term</h2>
        <div className="summaryGrid">
          <article><strong>Sequence</strong><span>ordered list of numbers</span></article>
          <article><strong>aₙ</strong><span>term in position n</span></article>
          <article><strong>General term</strong><span>rule for every position</span></article>
          <article><strong>Common sequences</strong><span>2n, 2n − 1, n², n(n + 1)/2</span></article>
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
