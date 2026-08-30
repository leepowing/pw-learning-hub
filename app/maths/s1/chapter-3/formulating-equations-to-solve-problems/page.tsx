"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "14", correct: false },
  { label: "16", correct: true },
  { label: "17", correct: false },
  { label: "18", correct: false },
];

export default function FormulatingEquationsToSolveProblemsPage() {
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

      <p className="eyebrow">S1 · CHAPTER 3 · SECTION 4</p>
      <h1>Formulating Equations to Solve Problems</h1>

      <p className="introduction">
        Turn information from a word problem into an equation. Define the
        unknown, express related quantities using the same letter, solve the
        equation and interpret the result in its original context.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">THE FIVE-STEP METHOD</p>
            <h2>Move systematically from words to an answer</h2>
          </div>
        </div>

        <div className="workedSteps">
          <article><span>1</span><p>Read carefully and identify the unknown.</p><strong>What must be found?</strong></article>
          <article><span>2</span><p>Choose a letter and express every related quantity.</p><strong>Let x be ...</strong></article>
          <article><span>3</span><p>Find an equivalent relationship and form an equation.</p><strong>LHS = RHS</strong></article>
          <article><span>4</span><p>Solve the equation using inverse operations.</p><strong>Find x</strong></article>
          <article><span>5</span><p>Write the answer clearly in the question's context.</p><strong>Include units</strong></article>
        </div>

        <div className="keyNote">
          <strong>Use one unknown wherever possible.</strong>
          <span>Express every other quantity in terms of the letter chosen in Step 2.</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">REPRESENTING QUANTITIES</p>
            <h2>Translate relationships before forming the equation</h2>
          </div>
        </div>

        <div className="notationGrid">
          <article><p>A number</p><span>the number</span><b>x</b></article>
          <article><p>Next integer</p><span>one more</span><b>x + 1</b></article>
          <article><p>Next even number</p><span>two more</span><b>x + 2</b></article>
          <article><p>Three times a number</p><span>three times</span><b>3x</b></article>
          <article><p>Five less than a number</p><span>five less</span><b>x − 5</b></article>
          <article><p>Half of a number</p><span>divide by two</span><b>x/2</b></article>
        </div>

        <div className="warningNote">
          <strong>Define the letter precisely.</strong>
          <span>Write “Let x be the smaller number,” not only “Let x be the number.”</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">WORKED NUMBER PROBLEM</p>
            <h2>The sum of two consecutive even numbers is 10</h2>
          </div>
        </div>

        <div className="workedQuestion">Find the smaller number.</div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>Let y be the smaller even number.</p>
            <strong>smaller = y</strong>
          </article>
          <article>
            <span>2</span>
            <p>The next even number is two greater.</p>
            <strong>larger = y + 2</strong>
          </article>
          <article>
            <span>3</span>
            <p>Their sum is 10.</p>
            <strong>y + (y + 2) = 10</strong>
          </article>
          <article>
            <span>4</span>
            <p>Solve the equation.</p>
            <strong>2y + 2 = 10 → y = 4</strong>
          </article>
          <article>
            <span>5</span>
            <p>Answer the question asked.</p>
            <strong>The smaller number is 4.</strong>
          </article>
        </div>

        <div className="workedAnswer">Check: 4 and 6 are consecutive even numbers, and 4 + 6 = 10.</div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">COMMON RELATIONSHIPS</p>
            <h2>Build expressions that match the context</h2>
          </div>
        </div>

        <div className="phraseTable">
          <article><span>Amy is x years old; Ben is 4 years older.</span><strong>Ben: x + 4</strong></article>
          <article><span>A pen costs p dollars; a ruler costs $3 less.</span><strong>Ruler: p − 3</strong></article>
          <article><span>A rectangle has width w and length 5 cm more.</span><strong>Length: w + 5</strong></article>
          <article><span>There are n girls and twice as many boys.</span><strong>Boys: 2n</strong></article>
          <article><span>A journey takes t hours; the return takes half as long.</span><strong>Return: t/2</strong></article>
          <article><span>The second number is 3 more than twice the first.</span><strong>Second: 2x + 3</strong></article>
        </div>

        <div className="orderWarning">
          <b>Use the relationship exactly:</b> if Martin is 10 years older than
          Michelle, then Martin's age − Michelle's age = 10.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">FORMING THE EQUATION</p>
            <h2>Look for two descriptions of the same quantity</h2>
          </div>
        </div>

        <div className="conceptGrid">
          <article>
            <span className="conceptSymbol">Σ</span>
            <h3>Total</h3>
            <p>Add individual quantities and set their sum equal to the stated total.</p>
            <strong>x + (x + 2) = 10</strong>
          </article>
          <article>
            <span className="conceptSymbol">Δ</span>
            <h3>Difference</h3>
            <p>Subtract in the order described and equal the stated difference.</p>
            <strong>(2y + 3) − y = 10</strong>
          </article>
          <article>
            <span className="conceptSymbol">=</span>
            <h3>Equivalent descriptions</h3>
            <p>Set two expressions equal when they describe the same value.</p>
            <strong>3x + 5 = 26</strong>
          </article>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">6</span>
          <div>
            <p className="lessonLabel">INTERPRETING AND CHECKING</p>
            <h2>A numerical solution is not always the final answer</h2>
          </div>
        </div>

        <div className="operationWords">
          <article><strong>Does it satisfy the equation?</strong><span>✓</span></article>
          <article><strong>Does it fit the context?</strong><span>✓</span></article>
          <article><strong>Did you answer what was asked?</strong><span>✓</span></article>
          <article><strong>Did you include the correct unit?</strong><span>✓</span></article>
        </div>

        <div className="keyNote">
          <strong>Reject impossible results.</strong>
          <span>A negative age, a fractional number of people or a length with the wrong unit signals an error or needs interpretation.</span>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>The sum of two consecutive even numbers is 34. What is the smaller number?</h2>

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
              Let x be the smaller number. Then x + (x + 2) = 34, so
              2x + 2 = 34, 2x = 32 and x = 16.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Define, model, solve and interpret</h2>
        <ul>
          <li>Choosing a letter without stating clearly what it represents.</li>
          <li>Using x + 1 for the next even or odd number instead of x + 2.</li>
          <li>Reversing relationships such as “5 less than” or “10 years younger”.</li>
          <li>Introducing a second unknown when it can be written using the first.</li>
          <li>Stopping at x = 4 without answering the quantity requested.</li>
          <li>Forgetting to check the result against the original information.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Connect every algebraic step to the problem</h2>
        <div className="summaryGrid">
          <article><strong>Define</strong><span>choose the unknown</span></article>
          <article><strong>Represent</strong><span>write related quantities</span></article>
          <article><strong>Form and solve</strong><span>build the equation</span></article>
          <article><strong>Interpret</strong><span>answer clearly with units</span></article>
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
