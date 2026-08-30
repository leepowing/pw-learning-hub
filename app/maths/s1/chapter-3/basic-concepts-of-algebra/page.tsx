"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "4x − 3", correct: true },
  { label: "4(x − 3)", correct: false },
  { label: "3 − 4x", correct: false },
  { label: "4x + 3", correct: false },
];

const phraseExamples = [
  { words: "The sum of x and 7", expression: "x + 7" },
  { words: "5 less than y", expression: "y − 5" },
  { words: "Three times n", expression: "3n" },
  { words: "The quotient of p and 4", expression: "p ÷ 4 = p/4" },
  { words: "Twice a, then add 9", expression: "2a + 9" },
  { words: "Subtract m from 12", expression: "12 − m" },
];

export default function BasicConceptsOfAlgebraPage() {
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

      <p className="eyebrow">S1 · CHAPTER 3 · SECTION 1</p>
      <h1>Basic Concepts of Algebra</h1>

      <p className="introduction">
        Algebra uses letters to represent numbers. This lets us describe a
        general rule, an unknown value or a relationship using a short and
        precise mathematical expression.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">LETTERS AND NUMBERS</p>
            <h2>A letter can stand for a number</h2>
          </div>
        </div>

        <div className="conceptGrid">
          <article>
            <span className="conceptSymbol">x</span>
            <h3>Unknown</h3>
            <p>A letter may represent a number that we need to find.</p>
            <strong>x + 4 = 11</strong>
          </article>
          <article>
            <span className="conceptSymbol">n</span>
            <h3>Variable</h3>
            <p>A letter may take different numerical values.</p>
            <strong>2n + 1</strong>
          </article>
          <article>
            <span className="conceptSymbol">P</span>
            <h3>Formula</h3>
            <p>Letters can show a general relationship between quantities.</p>
            <strong>P = 2l + 2w</strong>
          </article>
        </div>

        <div className="keyNote">
          <strong>The chosen letter does not change the method.</strong>
          <span>x, y, n and other letters may all represent numbers.</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">ALGEBRAIC NOTATION</p>
            <h2>Write multiplication and division compactly</h2>
          </div>
        </div>

        <div className="notationGrid">
          <article>
            <p>Multiplication sign omitted</p>
            <span>4 × x</span>
            <b>4x</b>
          </article>
          <article>
            <p>Number written first</p>
            <span>a × 6</span>
            <b>6a</b>
          </article>
          <article>
            <p>Letters written together</p>
            <span>x × y</span>
            <b>xy</b>
          </article>
          <article>
            <p>Repeated factors use indices</p>
            <span>m × m × m</span>
            <b>m³</b>
          </article>
          <article>
            <p>Division written as a fraction</p>
            <span>p ÷ 5</span>
            <b>p/5</b>
          </article>
          <article>
            <p>One is normally omitted</p>
            <span>1 × q</span>
            <b>q</b>
          </article>
        </div>

        <div className="warningNote">
          <strong>Do not write 34 for 3 × 4.</strong>
          <span>Omitting × is only safe when at least one factor is a letter or a bracket.</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">WORDS TO ALGEBRA</p>
            <h2>Read the order of each operation carefully</h2>
          </div>
        </div>

        <div className="operationWords">
          <article><strong>sum / increased by</strong><span>+</span></article>
          <article><strong>difference / less than</strong><span>−</span></article>
          <article><strong>product / times</strong><span>×</span></article>
          <article><strong>quotient / divided by</strong><span>÷</span></article>
        </div>

        <div className="phraseTable">
          {phraseExamples.map((example) => (
            <article key={example.words}>
              <span>{example.words}</span>
              <strong>{example.expression}</strong>
            </article>
          ))}
        </div>

        <div className="orderWarning">
          <b>Order matters:</b> “5 less than y” means y − 5, while “y less
          than 5” means 5 − y.
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">WORKED EXAMPLE</p>
            <h2>Build an expression one phrase at a time</h2>
          </div>
        </div>

        <div className="workedQuestion">
          Write an expression for “7 more than three times a number k”.
        </div>

        <div className="workedSteps">
          <article><span>1</span><p>Choose the letter given.</p><strong>k</strong></article>
          <article><span>2</span><p>Three times k.</p><strong>3k</strong></article>
          <article><span>3</span><p>Add 7.</p><strong>3k + 7</strong></article>
        </div>

        <div className="workedAnswer">Answer: 3k + 7</div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Which expression means “subtract 3 from the product of 4 and x”?</h2>

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
              The product of 4 and x is 4x. Subtracting 3 from that product
              gives 4x − 3.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Translate the meaning, not just the word order</h2>
        <ul>
          <li>Writing x6 instead of the standard form 6x.</li>
          <li>Writing x + x + x as x³ instead of 3x.</li>
          <li>Reversing subtraction in phrases such as “5 less than y”.</li>
          <li>Using 4 + x when “the product of 4 and x” means 4x.</li>
          <li>Forgetting brackets when an entire expression is multiplied.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Turn relationships into concise expressions</h2>
        <div className="summaryGrid">
          <article><strong>Letter</strong><span>represents a number</span></article>
          <article><strong>Multiplication</strong><span>4 × x becomes 4x</span></article>
          <article><strong>Division</strong><span>p ÷ 5 becomes p/5</span></article>
          <article><strong>Translation</strong><span>operation order matters</span></article>
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
