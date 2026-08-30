"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const answerOptions = [
  { label: "3x² + 4x + 3", correct: false },
  { label: "3x² + 2x + 3", correct: true },
  { label: "3x² + 2x − 7", correct: false },
  { label: "2x² + 2x + 3", correct: false },
];

export default function OperationsOfPolynomialsPage() {
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
        onClick={() => router.push("/maths/s2/chapter-2")}
      >
        ← Back to Chapter 2
      </button>

      <p className="eyebrow">S2 · CHAPTER 2 · SECTION 3</p>
      <h1>Operations of Polynomials</h1>

      <p className="introduction">
        Add, subtract and multiply polynomials by handling brackets carefully,
        identifying like terms and applying the distributive law.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <h2>Like terms</h2>
            <p className="headingDescription">
              Only terms with exactly the same variable part can be combined.
            </p>
          </div>
        </div>

        <div className="definitionBox">
          <p>
            Like terms contain the same variables raised to the same powers.
            Their numerical coefficients may be different.
          </p>
        </div>

        <div className="comparisonGrid">
          <article className="exampleBox likeBox">
            <p className="boxLabel">LIKE TERMS</p>
            <p className="exampleFormula">
              4x<sup>2</sup>y and −7x<sup>2</sup>y
            </p>
            <p>The variable parts are both x²y.</p>
          </article>

          <article className="exampleBox unlikeBox">
            <p className="boxLabel">UNLIKE TERMS</p>
            <p className="exampleFormula">
              4x<sup>2</sup>y and 4xy<sup>2</sup>
            </p>
            <p>The powers of x and y are different.</p>
          </article>

          <article className="exampleBox unlikeBox">
            <p className="boxLabel">UNLIKE TERMS</p>
            <p className="exampleFormula">
              3x and 3x<sup>2</sup>
            </p>
            <p>x and x² are different variable parts.</p>
          </article>
        </div>

        <div className="combineExample">
          <p>
            5x<sup>2</sup> − 3x + 2x<sup>2</sup> + 7x
          </p>
          <p>
            = (5 + 2)x<sup>2</sup> + (−3 + 7)x
          </p>
          <p className="answerLine">
            = 7x<sup>2</sup> + 4x
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <h2>Addition of polynomials</h2>
            <p className="headingDescription">
              Remove the brackets, group the like terms and combine their
              coefficients.
            </p>
          </div>
        </div>

        <div className="methodSteps">
          <article>
            <span>1</span>
            <strong>Remove brackets</strong>
          </article>
          <article>
            <span>2</span>
            <strong>Group like terms</strong>
          </article>
          <article>
            <span>3</span>
            <strong>Combine coefficients</strong>
          </article>
        </div>

        <div className="workedExample blueExample">
          <p className="workedLabel">ADD</p>
          <p className="workedQuestion">
            (2x<sup>2</sup> + 3x − 1) + (x<sup>2</sup> − 5x + 4)
          </p>

          <div className="calculationSteps">
            <p>
              = 2x<sup>2</sup> + 3x − 1 + x<sup>2</sup> − 5x + 4
            </p>
            <p>
              = (2x<sup>2</sup> + x<sup>2</sup>) + (3x − 5x) + (−1 + 4)
            </p>
            <p className="answerLine">
              = 3x<sup>2</sup> − 2x + 3
            </p>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <h2>Subtraction of polynomials</h2>
            <p className="headingDescription">
              A minus sign before a bracket changes the sign of every term
              inside that bracket.
            </p>
          </div>
        </div>

        <div className="signRule">
          <p className="signRuleFormula">
            −(a + b − c) = −a − b + c
          </p>
          <p>Multiply every term inside the bracket by −1.</p>
        </div>

        <div className="workedExample orangeExample">
          <p className="workedLabel">SUBTRACT</p>
          <p className="workedQuestion">
            (3x<sup>2</sup> + 2x − 5) − (x<sup>2</sup> − 4x + 1)
          </p>

          <div className="calculationSteps">
            <p>
              = 3x<sup>2</sup> + 2x − 5 − x<sup>2</sup> + 4x − 1
            </p>
            <p>
              = (3x<sup>2</sup> − x<sup>2</sup>) + (2x + 4x) + (−5 − 1)
            </p>
            <p className="answerLine">
              = 2x<sup>2</sup> + 6x − 6
            </p>
          </div>
        </div>

        <div className="importantNote">
          <strong>Sign check:</strong> In −(x² − 4x + 1), the terms become
          −x² + 4x − 1 after removing the bracket.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <h2>Multiplying by a monomial</h2>
            <p className="headingDescription">
              Use the distributive law and multiply every term in the
              polynomial.
            </p>
          </div>
        </div>

        <div className="ruleDisplay">
          <p className="ruleFormula">k(a + b) = ka + kb</p>
          <p>Every term inside the bracket must be multiplied by k.</p>
        </div>

        <div className="workedExample greenExample">
          <p className="workedLabel">EXPAND</p>
          <p className="workedQuestion">
            3x(2x<sup>2</sup> − 5x + 4)
          </p>

          <div className="distributionRow">
            <span>
              3x × 2x<sup>2</sup>
              <strong> = 6x<sup>3</sup></strong>
            </span>
            <span>
              3x × (−5x)
              <strong> = −15x<sup>2</sup></strong>
            </span>
            <span>
              3x × 4
              <strong> = 12x</strong>
            </span>
          </div>

          <p className="finalExpansion">
            3x(2x<sup>2</sup> − 5x + 4)
            = 6x<sup>3</sup> − 15x<sup>2</sup> + 12x
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <h2>Multiplying two binomials</h2>
            <p className="headingDescription">
              Multiply every term in the first bracket by every term in the
              second bracket.
            </p>
          </div>
        </div>

        <div className="generalRule">
          <p>
            (a + b)(c + d) = ac + ad + bc + bd
          </p>
        </div>

        <div className="workedExample purpleExample">
          <p className="workedLabel">EXPAND</p>
          <p className="workedQuestion">(x + 2)(3x − 5)</p>

          <div className="fourProducts">
            <span>x(3x) = 3x²</span>
            <span>x(−5) = −5x</span>
            <span>2(3x) = 6x</span>
            <span>2(−5) = −10</span>
          </div>

          <div className="calculationSteps compactSteps">
            <p>
              = 3x<sup>2</sup> − 5x + 6x − 10
            </p>
            <p className="answerLine">
              = 3x<sup>2</sup> + x − 10
            </p>
          </div>
        </div>

        <div className="methodTip">
          After multiplying, check whether any middle terms are like terms and
          combine them before writing the final answer.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Simplify the expression.</h2>

        <p className="quizFormula">
          (x<sup>2</sup> + 3x − 2) + (2x<sup>2</sup> − x + 5)
        </p>

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
                <strong>Correct.</strong> x² + 2x² = 3x², 3x − x = 2x,
                and −2 + 5 = 3.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> Group the x² terms, x terms and
                constants separately before combining them.
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
          <li>Combining terms that have different variable parts.</li>
          <li>Changing only the first sign after a minus before brackets.</li>
          <li>Forgetting to multiply one of the terms inside a bracket.</li>
          <li>Adding indices when adding polynomials.</li>
          <li>Forgetting the sign rule: negative × negative = positive.</li>
          <li>Leaving like terms uncombined after expanding two brackets.</li>
        </ul>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s2/chapter-2")}
        >
          ← Return to Chapter 2
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
          color: #ea580c;
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

        .lessonNumber {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 16px;
          background: #ffedd5;
          color: #c2410c;
          font-size: 23px;
          font-weight: 900;
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

        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 14px;
          margin-top: 17px;
        }

        .exampleBox {
          padding: 20px;
          border-radius: 17px;
        }

        .likeBox {
          border: 1px solid #bbf7d0;
          background: #f0fdf4;
        }

        .unlikeBox {
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .boxLabel,
        .workedLabel,
        .quizLabel {
          margin: 0 0 9px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .likeBox .boxLabel { color: #15803d; }
        .unlikeBox .boxLabel { color: #c2410c; }

        .exampleFormula {
          margin: 0 0 8px;
          color: #0f172a;
          font-family: "Times New Roman", serif;
          font-size: 24px;
          font-weight: 700;
        }

        .exampleBox p:last-child {
          margin: 0;
          color: #475569;
          line-height: 1.5;
        }

        .combineExample {
          margin-top: 17px;
          padding: 19px;
          border: 1px solid #c7d2fe;
          border-radius: 16px;
          background: #eef2ff;
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 22px;
          text-align: center;
        }

        .combineExample p {
          margin: 5px 0;
        }

        .answerLine {
          color: #166534 !important;
          font-weight: 900;
        }

        .methodSteps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 13px;
          margin-bottom: 17px;
        }

        .methodSteps article {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          background: #f8fafc;
        }

        .methodSteps span {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 11px;
          background: #2563eb;
          color: #ffffff;
          font-weight: 900;
        }

        .workedExample {
          padding: 23px;
          border-radius: 18px;
        }

        .blueExample { border: 1px solid #bfdbfe; background: #eff6ff; }
        .orangeExample { border: 1px solid #fed7aa; background: #fff7ed; }
        .greenExample { border: 1px solid #bbf7d0; background: #f0fdf4; }
        .purpleExample { border: 1px solid #ddd6fe; background: #f5f3ff; }

        .blueExample .workedLabel { color: #1d4ed8; }
        .orangeExample .workedLabel { color: #c2410c; }
        .greenExample .workedLabel { color: #15803d; }
        .purpleExample .workedLabel { color: #6d28d9; }

        .workedQuestion,
        .quizFormula,
        .ruleFormula,
        .signRuleFormula,
        .generalRule p {
          font-family: "Times New Roman", serif;
          font-weight: 700;
          text-align: center;
        }

        .workedQuestion {
          margin: 12px 0 19px;
          color: #0f172a;
          font-size: 28px;
        }

        .calculationSteps {
          padding: 18px;
          border-radius: 15px;
          background: #ffffff;
          color: #334155;
          font-family: "Times New Roman", serif;
          font-size: 21px;
          text-align: center;
        }

        .calculationSteps p {
          margin: 6px 0;
        }

        .signRule,
        .ruleDisplay,
        .generalRule {
          margin-bottom: 17px;
          padding: 20px;
          border: 1px solid #cbd5e1;
          border-radius: 17px;
          background: #f8fafc;
          text-align: center;
        }

        .signRuleFormula,
        .ruleFormula,
        .generalRule p {
          margin: 0 0 8px;
          color: #312e81;
          font-size: 27px;
        }

        .signRule p:last-child,
        .ruleDisplay p:last-child {
          margin: 0;
          color: #64748b;
        }

        .importantNote,
        .methodTip {
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

        .distributionRow,
        .fourProducts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 11px;
        }

        .distributionRow span,
        .fourProducts span {
          padding: 14px;
          border-radius: 13px;
          background: #ffffff;
          color: #475569;
          font-family: "Times New Roman", serif;
          font-size: 18px;
          text-align: center;
        }

        .distributionRow strong {
          display: block;
          margin-top: 5px;
          color: #166534;
        }

        .finalExpansion {
          margin: 17px 0 0;
          color: #166534;
          font-family: "Times New Roman", serif;
          font-size: 22px;
          font-weight: 900;
          text-align: center;
        }

        .generalRule p {
          margin: 0;
        }

        .compactSteps {
          margin-top: 14px;
        }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #faf5ff);
        }

        .quizLabel { color: #4f46e5; }

        .quizFormula {
          margin: 18px 0 24px;
          color: #312e81;
          font-size: 30px;
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

        .selectedCorrect { border-color: #16a34a; background: #dcfce7; color: #166534; }
        .selectedWrong { border-color: #dc2626; background: #fee2e2; color: #991b1b; }

        .feedback {
          margin-top: 16px;
          padding: 17px 19px;
          border-radius: 14px;
          font-size: 17px;
          line-height: 1.5;
        }

        .correctFeedback { background: #dcfce7; color: #166534; }
        .wrongFeedback { background: #fee2e2; color: #991b1b; }

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

        .mistakesCard { border-color: #fed7aa; background: #fff7ed; }

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

        .returnButton:hover { background: #047857; }

        @media (max-width: 640px) {
          .page { width: calc(100% - 24px); margin-top: 28px; }
          .lessonCard, .quizCard, .mistakesCard { padding: 22px; }
          .lessonHeading { align-items: center; }
          h2 { font-size: 24px; }
          .workedQuestion, .quizFormula { font-size: 25px; }
          .returnButton { width: 100%; min-width: 0; }
        }
      `}</style>
    </main>
  );
}
