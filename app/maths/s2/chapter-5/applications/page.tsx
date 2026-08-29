"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const answerOptions = [
  { label: "Adult £7, child £9", correct: false },
  { label: "Adult £9, child £7", correct: true },
  { label: "Adult £8, child £7", correct: false },
  { label: "Adult £10, child £6", correct: false },
];

export default function ApplicationsPage() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const selectedOption = answerOptions.find(
    (option) => option.label === selectedAnswer
  );

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s2/chapter-5")}
      >
        ← Back to Chapter 5
      </button>

      <p className="eyebrow">S2 · CHAPTER 5 · SECTION 4</p>
      <h1>Applications of Simultaneous Linear Equations</h1>

      <p className="introduction">
        Turn information from a word problem into two equations, solve them,
        and interpret the values correctly in the original situation.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <h2>A reliable four-step method</h2>
            <p className="headingDescription">
              Organising the information carefully is often the most important
              part of an application question.
            </p>
          </div>
        </div>

        <div className="processGrid">
          <article className="processBox">
            <span className="processNumber">1</span>
            <h3>Define</h3>
            <p>Identify the two unknown quantities and assign letters.</p>
          </article>

          <article className="processBox">
            <span className="processNumber">2</span>
            <h3>Form</h3>
            <p>Translate the information into two linear equations.</p>
          </article>

          <article className="processBox">
            <span className="processNumber">3</span>
            <h3>Solve</h3>
            <p>Use substitution or elimination to find both unknowns.</p>
          </article>

          <article className="processBox">
            <span className="processNumber">4</span>
            <h3>Interpret</h3>
            <p>Answer the question in context and include the correct units.</p>
          </article>
        </div>

        <div className="importantNote">
          Do not begin with equations alone. First write what each letter
          represents, including its unit where appropriate.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <h2>Worked example: two numbers</h2>
            <p className="headingDescription">
              The sum of two numbers is 18 and their difference is 6. Find the
              two numbers.
            </p>
          </div>
        </div>

        <div className="workedSteps">
          <article className="workedStep">
            <p className="stepLabel">STEP 1 · DEFINE THE UNKNOWNS</p>
            <p>
              Let <strong>a</strong> be the larger number and <strong>b</strong>
              be the smaller number.
            </p>
          </article>

          <article className="workedStep">
            <p className="stepLabel">STEP 2 · FORM THE EQUATIONS</p>
            <div className="equationPair" aria-label="a plus b equals eighteen and a minus b equals six">
              <span className="brace">&#123;</span>
              <span>
                <strong>a + b = 18&nbsp;&nbsp; (1)</strong>
                <strong>a − b = 6&nbsp;&nbsp; (2)</strong>
              </span>
            </div>
          </article>

          <article className="workedStep">
            <p className="stepLabel">STEP 3 · SOLVE</p>
            <div className="calculationBlock">
              <p>Add (1) and (2):</p>
              <p>a + b + a − b = 18 + 6</p>
              <p>2a = 24</p>
              <p className="answerLine">a = 12</p>
              <p>Substitute a = 12 into (1):</p>
              <p>12 + b = 18</p>
              <p className="answerLine">b = 6</p>
            </div>
          </article>

          <article className="workedStep finalStep">
            <p className="stepLabel">STEP 4 · INTERPRET</p>
            <p className="finalAnswer">The two numbers are 12 and 6.</p>
            <p>Check: 12 + 6 = 18 and 12 − 6 = 6.</p>
          </article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <h2>Worked example: prices</h2>
            <p className="headingDescription">
              Three pens and two pencils cost £13. One pen and two pencils
              cost £7. Find the price of each item.
            </p>
          </div>
        </div>

        <div className="definitionBox">
          <p>
            Let <strong>p</strong> be the price of one pen in pounds and
            <strong> c</strong> be the price of one pencil in pounds.
          </p>
        </div>

        <div className="priceModel">
          <article>
            <p className="itemPictures" aria-label="Three pens and two pencils">
              <span>🖊️🖊️🖊️</span>
              <span>✏️✏️</span>
            </p>
            <p className="modelEquation">3p + 2c = 13&nbsp;&nbsp; (1)</p>
          </article>

          <article>
            <p className="itemPictures" aria-label="One pen and two pencils">
              <span>🖊️</span>
              <span>✏️✏️</span>
            </p>
            <p className="modelEquation">p + 2c = 7&nbsp;&nbsp; (2)</p>
          </article>
        </div>

        <div className="priceWorking">
          <div>
            <p className="workingTitle">Subtract (2) from (1)</p>
            <p>3p + 2c − (p + 2c) = 13 − 7</p>
            <p>2p = 6</p>
            <p className="answerLine">p = 3</p>
          </div>

          <div>
            <p className="workingTitle">Substitute p = 3 into (2)</p>
            <p>3 + 2c = 7</p>
            <p>2c = 4</p>
            <p className="answerLine">c = 2</p>
          </div>
        </div>

        <div className="solutionBox">
          <p className="solutionStatement">One pen costs £3 and one pencil costs £2.</p>
          <p>
            Check: 3(£3) + 2(£2) = £13 and £3 + 2(£2) = £7.
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <h2>Translate common phrases</h2>
            <p className="headingDescription">
              Look for relationships rather than copying words directly into
              equations.
            </p>
          </div>
        </div>

        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>Words</th>
                <th>Possible equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The sum of two numbers is 20</td>
                <td>x + y = 20</td>
              </tr>
              <tr>
                <td>x is 4 greater than y</td>
                <td>x = y + 4</td>
              </tr>
              <tr>
                <td>Twice x is 3 less than y</td>
                <td>2x = y − 3</td>
              </tr>
              <tr>
                <td>Three adult and two child tickets cost £41</td>
                <td>3a + 2c = 41</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="languageTip">
          <strong>Language check:</strong> “4 greater than y” means y + 4,
          while “4 less than y” means y − 4.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Find the price of each type of ticket.</h2>

        <p className="quizQuestion">
          Two adult tickets and three child tickets cost £39. One adult
          ticket and two child tickets cost £23.
        </p>

        <div className="quizEquations">
          <span>2a + 3c = 39</span>
          <span>a + 2c = 23</span>
        </div>

        <div className="answerGrid">
          {answerOptions.map((option) => {
            const isSelected = selectedAnswer === option.label;
            const className = isSelected
              ? option.correct
                ? "answerButton selectedCorrect"
                : "answerButton selectedWrong"
              : "answerButton";

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
                : "feedback wrongFeedback"
            }
          >
            {selectedOption.correct ? (
              <>
                <strong>Correct.</strong> Doubling the second equation gives
                2a + 4c = 46. Subtracting the first equation gives c = 7,
                and then a = 9.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> Eliminate a by doubling the second
                equation, then substitute the value of c back into a + 2c =
                23.
              </>
            )}
          </div>
        )}

        {selectedAnswer && (
          <button
            type="button"
            className="tryAgainButton"
            onClick={() => setSelectedAnswer(null)}
          >
            Try again
          </button>
        )}
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>
        <ul>
          <li>Using letters without stating what they represent.</li>
          <li>Reversing phrases such as “5 less than x”.</li>
          <li>Mixing quantities with different units in one equation.</li>
          <li>Stopping after finding only one unknown.</li>
          <li>Giving values without answering the question in context.</li>
          <li>Accepting an impossible result, such as a negative number of items.</li>
        </ul>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s2/chapter-5")}
        >
          ← Return to Chapter 5
        </button>
      </div>

      <style jsx>{`
        .page {
          max-width: 1080px;
          width: calc(100% - 48px);
          margin: 44px auto 72px;
          box-sizing: border-box;
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

        .eyebrow {
          margin: 0 0 7px;
          color: #2563eb;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.11em;
        }

        h1 {
          margin: 0 0 12px;
          font-size: clamp(36px, 5vw, 50px);
          line-height: 1.12;
        }

        .introduction {
          max-width: 920px;
          margin: 0 0 34px;
          color: #64748b;
          font-size: 19px;
          line-height: 1.65;
        }

        .lessonCard,
        .quizCard,
        .mistakesCard {
          margin-bottom: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 7px 20px rgba(15, 23, 42, 0.045);
          box-sizing: border-box;
        }

        .lessonHeading {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 24px;
        }

        .lessonNumber,
        .processNumber {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: 900;
        }

        .lessonNumber {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: #dbeafe;
          color: #1d4ed8;
          font-size: 23px;
        }

        h2 {
          margin: 0 0 7px;
          font-size: 28px;
          line-height: 1.3;
        }

        .headingDescription {
          margin: 0;
          color: #64748b;
          font-size: 17px;
          line-height: 1.55;
        }

        .processGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 14px;
        }

        .processBox {
          padding: 20px;
          border: 1px solid #bfdbfe;
          border-radius: 17px;
          background: #eff6ff;
          text-align: center;
        }

        .processNumber {
          width: 42px;
          height: 42px;
          margin: 0 auto 12px;
          border-radius: 13px;
          background: #2563eb;
          color: #ffffff;
          font-size: 19px;
        }

        .processBox h3 {
          margin: 0 0 7px;
          font-size: 21px;
        }

        .processBox p {
          margin: 0;
          color: #475569;
          line-height: 1.5;
        }

        .importantNote,
        .languageTip {
          margin-top: 17px;
          padding: 18px 20px;
          border: 1px solid #fde68a;
          border-radius: 16px;
          background: #fffbeb;
          color: #854d0e;
          font-size: 17px;
          line-height: 1.55;
          text-align: center;
        }

        .workedSteps {
          display: grid;
          gap: 14px;
        }

        .workedStep {
          padding: 21px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
        }

        .stepLabel,
        .quizLabel {
          margin: 0 0 10px;
          color: #2563eb;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .workedStep > p:last-child {
          margin-bottom: 0;
          color: #334155;
          font-size: 17px;
          line-height: 1.55;
        }

        .equationPair {
          max-width: 470px;
          margin: 5px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: #1e3a8a;
          font-family: "Times New Roman", serif;
        }

        .equationPair .brace {
          font-size: 76px;
          line-height: 0.9;
        }

        .equationPair span:last-child {
          display: grid;
          gap: 8px;
          font-size: 29px;
        }

        .calculationBlock {
          max-width: 550px;
          margin: 0 auto;
          font-family: "Times New Roman", serif;
          font-size: 22px;
          text-align: center;
        }

        .calculationBlock p {
          margin: 5px 0;
        }

        .answerLine {
          color: #166534;
          font-weight: 900;
        }

        .finalStep {
          border-color: #bbf7d0;
          background: #f0fdf4;
          text-align: center;
        }

        .finalAnswer {
          margin: 0 0 6px;
          color: #166534 !important;
          font-size: 22px !important;
          font-weight: 900;
        }

        .definitionBox {
          padding: 19px 21px;
          border: 1px solid #bfdbfe;
          border-radius: 16px;
          background: #eff6ff;
          color: #334155;
          font-size: 17px;
          line-height: 1.55;
          text-align: center;
        }

        .definitionBox p {
          margin: 0;
        }

        .priceModel,
        .priceWorking {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }

        .priceModel article,
        .priceWorking > div {
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
          text-align: center;
        }

        .itemPictures {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin: 0 0 12px;
          font-size: 27px;
        }

        .modelEquation {
          margin: 0;
          color: #1e3a8a;
          font-family: "Times New Roman", serif;
          font-size: 25px;
          font-weight: 800;
        }

        .priceWorking p {
          margin: 5px 0;
          font-family: "Times New Roman", serif;
          font-size: 20px;
        }

        .priceWorking .workingTitle {
          margin-bottom: 12px;
          color: #475569;
          font-family: inherit;
          font-size: 16px;
          font-weight: 900;
        }

        .solutionBox {
          margin-top: 17px;
          padding: 18px 20px;
          border: 1px solid #bbf7d0;
          border-radius: 16px;
          background: #f0fdf4;
          color: #166534;
          font-size: 17px;
          line-height: 1.55;
          text-align: center;
        }

        .solutionBox p {
          margin: 4px 0;
        }

        .solutionStatement {
          font-size: 22px;
          font-weight: 900;
        }

        .tableWrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          min-width: 660px;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 15px;
          border: 1px solid #cbd5e1;
          text-align: left;
          font-size: 17px;
        }

        th {
          background: #eff6ff;
          color: #1e3a8a;
          font-weight: 900;
        }

        td:last-child {
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 20px;
          font-weight: 700;
          text-align: center;
        }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #faf5ff);
        }

        .quizLabel {
          color: #4f46e5;
        }

        .quizQuestion {
          margin: 12px 0 16px;
          color: #475569;
          font-size: 17px;
          line-height: 1.55;
        }

        .quizEquations {
          display: grid;
          gap: 7px;
          margin: 15px 0 24px;
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 29px;
          font-weight: 700;
          text-align: center;
        }

        .answerGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 12px;
        }

        .answerButton {
          padding: 15px 18px;
          border: 2px solid #cbd5e1;
          border-radius: 14px;
          background: #ffffff;
          color: #0f172a;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .selectedCorrect {
          border-color: #16a34a;
          background: #dcfce7;
          color: #166534;
        }

        .selectedWrong {
          border-color: #dc2626;
          background: #fee2e2;
          color: #991b1b;
        }

        .feedback {
          margin-top: 16px;
          padding: 17px 19px;
          border-radius: 14px;
          font-size: 17px;
          line-height: 1.5;
        }

        .correctFeedback {
          background: #dcfce7;
          color: #166534;
        }

        .wrongFeedback {
          background: #fee2e2;
          color: #991b1b;
        }

        .tryAgainButton {
          margin-top: 15px;
          padding: 11px 18px;
          border: 1px solid #6366f1;
          border-radius: 12px;
          background: #ffffff;
          color: #4338ca;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .mistakesCard {
          border-color: #fed7aa;
          background: #fff7ed;
        }

        .mistakesCard ul {
          margin: 15px 0 0;
          padding-left: 24px;
          color: #7c2d12;
          font-size: 17px;
          line-height: 1.8;
        }

        .bottomNavigation {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .returnButton {
          min-width: 280px;
          padding: 15px 24px;
          border: none;
          border-radius: 14px;
          background: #059669;
          color: #ffffff;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(5, 150, 105, 0.18);
        }

        .returnButton:hover {
          background: #047857;
        }

        @media (max-width: 640px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .quizCard,
          .mistakesCard {
            padding: 22px;
          }

          .lessonHeading {
            align-items: center;
          }

          h2 {
            font-size: 24px;
          }

          .equationPair .brace {
            font-size: 60px;
          }

          .equationPair span:last-child {
            font-size: 24px;
          }

          .returnButton {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </main>
  );
}
