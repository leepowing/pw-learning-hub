"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const answerOptions = [
  { label: "x = 2, y = 3", correct: false },
  { label: "x = 3, y = 1", correct: true },
  { label: "x = 1, y = 3", correct: false },
  { label: "x = 4, y = −1", correct: false },
];

export default function AlgebraicMethodsPage() {
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

      <p className="eyebrow">S2 · CHAPTER 5 · SECTION 3</p>

      <h1>Solving Simultaneous Equations — Algebraic Methods</h1>

      <p className="introduction">
        Solve simultaneous linear equations exactly by substitution or
        elimination, then check the solution in both original equations.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <h2>Choosing an algebraic method</h2>
            <p className="headingDescription">
              Both methods remove one unknown so that the other unknown can be
              found first.
            </p>
          </div>
        </div>

        <div className="methodGrid">
          <article className="methodBox substitutionBox">
            <p className="boxLabel">SUBSTITUTION</p>
            <h3>Replace one unknown</h3>
            <p>
              Use this method when one equation already gives, or can easily
              give, x or y by itself.
            </p>
            <p className="miniFormula">x = y + 1</p>
          </article>

          <article className="methodBox eliminationBox">
            <p className="boxLabel">ELIMINATION</p>
            <h3>Cancel one unknown</h3>
            <p>
              Use this method when adding or subtracting the equations can
              remove x or y.
            </p>
            <p className="miniFormula">(1) + (2)</p>
          </article>
        </div>

        <div className="importantNote">
          The final ordered pair must satisfy <strong>both</strong> original
          equations. Always substitute the answer back to check it.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <h2>Method of substitution</h2>
            <p className="headingDescription">
              Express one unknown in terms of the other, then substitute that
              expression into the second equation.
            </p>
          </div>
        </div>

        <div className="equationPair" aria-label="x minus y equals one and two x equals three y">
          <span className="brace">&#123;</span>
          <span>
            <strong>x − y = 1</strong>
            <strong>2x = 3y</strong>
          </span>
        </div>

        <div className="stepList">
          <article className="stepRow">
            <span className="stepBadge">1</span>
            <div>
              <h3>Make x the subject of the first equation</h3>
              <p className="calculation">x − y = 1</p>
              <p className="calculation answerLine">x = y + 1</p>
            </div>
          </article>

          <article className="stepRow">
            <span className="stepBadge">2</span>
            <div>
              <h3>Substitute x = y + 1 into 2x = 3y</h3>
              <p className="calculation">2(y + 1) = 3y</p>
              <p className="calculation">2y + 2 = 3y</p>
              <p className="calculation answerLine">y = 2</p>
            </div>
          </article>

          <article className="stepRow">
            <span className="stepBadge">3</span>
            <div>
              <h3>Substitute y = 2 into x = y + 1</h3>
              <p className="calculation">x = 2 + 1</p>
              <p className="calculation answerLine">x = 3</p>
            </div>
          </article>
        </div>

        <div className="solutionBox">
          <p className="solutionStatement">The solution is x = 3, y = 2.</p>
          <p>
            Check: 3 − 2 = 1 and 2(3) = 3(2), so both equations are true.
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <h2>Method of elimination</h2>
            <p className="headingDescription">
              Add or subtract the equations so that one unknown disappears.
            </p>
          </div>
        </div>

        <div className="equationPair orangePair" aria-label="x plus y equals one and x minus y equals three">
          <span className="brace">&#123;</span>
          <span>
            <strong>x + y = 1&nbsp;&nbsp; (1)</strong>
            <strong>x − y = 3&nbsp;&nbsp; (2)</strong>
          </span>
        </div>

        <div className="eliminationWorking">
          <p className="instructionLine">
            Add (1) and (2). The terms +y and −y cancel.
          </p>

          <div className="verticalCalculation">
            <p>x + y = 1</p>
            <p className="underlined">+&nbsp; x − y = 3</p>
            <p>2x = 4</p>
            <p className="answerLine">x = 2</p>
          </div>

          <div className="substituteBack">
            <p>Substitute x = 2 into equation (1):</p>
            <p className="calculation">2 + y = 1</p>
            <p className="calculation answerLine">y = −1</p>
          </div>
        </div>

        <div className="solutionBox">
          <p className="solutionStatement">The solution is x = 2, y = −1.</p>
          <p>
            Check: 2 + (−1) = 1 and 2 − (−1) = 3.
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <h2>When coefficients do not cancel immediately</h2>
            <p className="headingDescription">
              Multiply one or both equations first to create equal or opposite
              coefficients.
            </p>
          </div>
        </div>

        <div className="workedExample">
          <div className="workedEquations">
            <p>2x + y = 7&nbsp;&nbsp; (1)</p>
            <p>x − y = 2&nbsp;&nbsp; (2)</p>
          </div>

          <div className="arrowExplanation">
            <span>Add (1) and (2)</span>
            <strong>→</strong>
            <span>3x = 9</span>
            <strong>→</strong>
            <span>x = 3</span>
          </div>

          <p className="workedConclusion">
            Substitute x = 3 into x − y = 2: 3 − y = 2, so y = 1.
          </p>
        </div>

        <div className="tipBox">
          <strong>Tip:</strong> Before multiplying equations, first check
          whether addition or subtraction already eliminates an unknown.
      </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <h2>Special cases</h2>
            <p className="headingDescription">
              Elimination may produce a contradiction or a statement that is
              always true.
            </p>
          </div>
        </div>

        <div className="specialGrid">
          <article className="specialBox noSolutionBox">
            <p className="boxLabel">NO SOLUTION</p>
            <div className="smallEquationPair">
              <p>x + y = 1</p>
              <p>x + y = 2</p>
            </div>
            <p className="resultFormula">0 = 1</p>
            <p>
              This contradiction is impossible. The corresponding lines are
              parallel.
            </p>
          </article>

          <article className="specialBox manySolutionsBox">
            <p className="boxLabel">INFINITELY MANY SOLUTIONS</p>
            <div className="smallEquationPair">
              <p>x + 2y = 3</p>
              <p>2x + 4y = 6</p>
            </div>
            <p className="resultFormula">0 = 0</p>
            <p>
              The equations are equivalent and represent exactly the same
              straight line.
            </p>
          </article>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Solve the simultaneous equations.</h2>

        <div className="quizEquations">
          <span>2x + y = 7</span>
          <span>x − y = 2</span>
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
                <strong>Correct.</strong> Adding the equations gives 3x = 9,
                so x = 3. Substitution then gives y = 1.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> Add the equations to eliminate y,
                find x, and then substitute x back into either equation.
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
          <li>Substituting into only part of an equation.</li>
          <li>Forgetting to multiply every term in an equation.</li>
          <li>Making a sign error when subtracting equations.</li>
          <li>Finding one unknown but not finding the other.</li>
          <li>Not checking the final values in both original equations.</li>
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
        .stepBadge {
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

        .methodGrid,
        .specialGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        .methodBox,
        .specialBox {
          padding: 22px;
          border-radius: 18px;
        }

        .substitutionBox {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
        }

        .eliminationBox {
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .boxLabel,
        .quizLabel {
          margin: 0 0 9px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .substitutionBox .boxLabel {
          color: #1d4ed8;
        }

        .eliminationBox .boxLabel {
          color: #c2410c;
        }

        .methodBox h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .methodBox p:not(.boxLabel):not(.miniFormula) {
          color: #475569;
          line-height: 1.55;
        }

        .miniFormula {
          margin: 15px 0 0;
          font-family: "Times New Roman", serif;
          font-size: 26px;
          font-weight: 700;
          text-align: center;
        }

        .importantNote,
        .tipBox {
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

        .equationPair {
          max-width: 470px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 22px;
          border: 1px solid #bfdbfe;
          border-radius: 18px;
          background: #eff6ff;
          color: #1e3a8a;
          font-family: "Times New Roman", serif;
        }

        .orangePair {
          border-color: #fed7aa;
          background: #fff7ed;
          color: #9a3412;
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

        .stepList {
          display: grid;
          gap: 14px;
        }

        .stepRow {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
        }

        .stepBadge {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #2563eb;
          color: #ffffff;
          font-size: 18px;
        }

        .stepRow h3 {
          margin: 2px 0 10px;
          font-size: 19px;
        }

        .calculation {
          margin: 4px 0;
          color: #334155;
          font-family: "Times New Roman", serif;
          font-size: 24px;
        }

        .answerLine {
          color: #166534;
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

        .eliminationWorking,
        .workedExample {
          padding: 24px;
          border: 1px solid #cbd5e1;
          border-radius: 18px;
          background: #f8fafc;
        }

        .instructionLine {
          margin: 0 0 18px;
          color: #475569;
          font-size: 17px;
          text-align: center;
        }

        .verticalCalculation {
          width: min(100%, 300px);
          margin: 0 auto 20px;
          font-family: "Times New Roman", serif;
          font-size: 25px;
          text-align: right;
        }

        .verticalCalculation p {
          margin: 5px 0;
        }

        .verticalCalculation .underlined {
          padding-bottom: 7px;
          border-bottom: 2px solid #334155;
        }

        .substituteBack {
          padding: 17px;
          border-radius: 15px;
          background: #ffffff;
          text-align: center;
        }

        .substituteBack p:first-child {
          margin: 0 0 8px;
          color: #475569;
          font-size: 17px;
        }

        .workedEquations {
          display: grid;
          gap: 7px;
          color: #1e3a8a;
          font-family: "Times New Roman", serif;
          font-size: 27px;
          font-weight: 700;
          text-align: center;
        }

        .workedEquations p {
          margin: 0;
        }

        .arrowExplanation {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin: 22px 0;
          color: #334155;
          font-size: 19px;
          font-weight: 800;
        }

        .arrowExplanation strong {
          color: #2563eb;
          font-size: 27px;
        }

        .workedConclusion {
          margin: 0;
          color: #166534;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.55;
          text-align: center;
        }

        .noSolutionBox {
          border: 1px solid #fecaca;
          background: #fef2f2;
        }

        .manySolutionsBox {
          border: 1px solid #c7d2fe;
          background: #eef2ff;
        }

        .noSolutionBox .boxLabel {
          color: #b91c1c;
        }

        .manySolutionsBox .boxLabel {
          color: #4338ca;
        }

        .smallEquationPair {
          font-family: "Times New Roman", serif;
          font-size: 23px;
          font-weight: 700;
          text-align: center;
        }

        .smallEquationPair p {
          margin: 5px 0;
        }

        .resultFormula {
          margin: 15px 0;
          font-family: "Times New Roman", serif;
          font-size: 29px;
          font-weight: 900;
          text-align: center;
        }

        .specialBox > p:last-child {
          margin-bottom: 0;
          color: #475569;
          line-height: 1.55;
        }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #faf5ff);
        }

        .quizLabel {
          color: #4f46e5;
        }

        .quizEquations {
          display: grid;
          gap: 7px;
          margin: 18px 0 24px;
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 30px;
          font-weight: 700;
          text-align: center;
        }

        .answerGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
        }

        .answerButton {
          padding: 15px 18px;
          border: 2px solid #cbd5e1;
          border-radius: 14px;
          background: #ffffff;
          color: #0f172a;
          font-size: 18px;
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

          .stepRow {
            padding: 16px;
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
