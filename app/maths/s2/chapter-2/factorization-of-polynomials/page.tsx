"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const answerOptions = [
  { label: "3x(2x − 3)", correct: true },
  { label: "3x(2x − 9)", correct: false },
  { label: "x(6x − 9x)", correct: false },
  { label: "3(2x² − 3x)", correct: false },
];

export default function FactorizationOfPolynomialsPage() {
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

      <p className="eyebrow">S2 · CHAPTER 2 · SECTION 4</p>
      <h1>Factorization of Polynomials</h1>

      <p className="introduction">
        Factorization rewrites a polynomial as a product of factors. Learn to
        extract common factors and factorize four-term expressions by grouping.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <h2>Factorization reverses expansion</h2>
            <p className="headingDescription">
              Expansion removes brackets; factorization puts suitable brackets
              back.
            </p>
          </div>
        </div>

        <div className="reverseProcess">
          <article>
            <p className="processLabel">EXPANSION</p>
            <p className="processFormula">3x(x + 4)</p>
            <span className="processArrow">→</span>
            <p className="processFormula">3x² + 12x</p>
          </article>

          <article>
            <p className="processLabel">FACTORIZATION</p>
            <p className="processFormula">3x² + 12x</p>
            <span className="processArrow">→</span>
            <p className="processFormula">3x(x + 4)</p>
          </article>
        </div>

        <div className="definitionBox">
          <p>
            To factorize an expression, identify a factor shared by every term
            and place it outside brackets.
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <h2>Extracting a common factor</h2>
            <p className="headingDescription">
              Divide every term by the factor placed outside the bracket.
            </p>
          </div>
        </div>

        <div className="methodSteps">
          <article>
            <span>1</span>
            <div>
              <strong>Find a common factor</strong>
              <p>Look at both coefficients and variable powers.</p>
            </div>
          </article>
          <article>
            <span>2</span>
            <div>
              <strong>Write it outside</strong>
              <p>Open a bracket after the common factor.</p>
            </div>
          </article>
          <article>
            <span>3</span>
            <div>
              <strong>Divide each term</strong>
              <p>Write each quotient inside the bracket.</p>
            </div>
          </article>
        </div>

        <div className="workedExample blueExample">
          <p className="workedLabel">FACTORIZING A NUMERICAL COMMON FACTOR</p>
          <p className="workedQuestion">12x + 18</p>

          <div className="factorAnalysis">
            <span>12x ÷ 6 = 2x</span>
            <span>18 ÷ 6 = 3</span>
          </div>

          <p className="finalAnswer">12x + 18 = 6(2x + 3)</p>
        </div>

        <div className="workedExample greenExample">
          <p className="workedLabel">FACTORIZING A VARIABLE COMMON FACTOR</p>
          <p className="workedQuestion">
            5x<sup>3</sup> + 10x<sup>2</sup>
          </p>

          <div className="factorAnalysis">
            <span>5x³ ÷ 5x² = x</span>
            <span>10x² ÷ 5x² = 2</span>
          </div>

          <p className="finalAnswer">
            5x<sup>3</sup> + 10x<sup>2</sup> = 5x<sup>2</sup>(x + 2)
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <h2>Extracting the greatest common factor</h2>
            <p className="headingDescription">
              Complete factorization usually requires the greatest factor
              common to all terms.
            </p>
          </div>
        </div>

        <div className="gcfDisplay">
          <p className="workedQuestion">
            12x<sup>3</sup>y − 18x<sup>2</sup>y<sup>2</sup>
          </p>

          <div className="gcfGrid">
            <article>
              <p className="gcfLabel">COEFFICIENT</p>
              <p>GCF of 12 and 18 is <strong>6</strong>.</p>
            </article>
            <article>
              <p className="gcfLabel">POWER OF x</p>
              <p>Smaller power is <strong>x²</strong>.</p>
            </article>
            <article>
              <p className="gcfLabel">POWER OF y</p>
              <p>Smaller power is <strong>y</strong>.</p>
            </article>
          </div>

          <p className="gcfResult">Greatest common factor = 6x²y</p>

          <div className="divisionWorking">
            <p>12x³y ÷ 6x²y = 2x</p>
            <p>−18x²y² ÷ 6x²y = −3y</p>
          </div>

          <p className="finalAnswer">
            12x<sup>3</sup>y − 18x<sup>2</sup>y<sup>2</sup>
            = 6x<sup>2</sup>y(2x − 3y)
          </p>
        </div>

        <div className="importantNote">
          When choosing the variable part of a common factor, use the smallest
          power present in every term.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <h2>Extracting a negative common factor</h2>
            <p className="headingDescription">
              A negative factor can make the first term inside the bracket
              positive.
            </p>
          </div>
        </div>

        <div className="negativeExample">
          <p className="workedQuestion">−8x² + 12x</p>

          <div className="signComparison">
            <article>
              <p className="comparisonLabel">EXTRACT 4x</p>
              <p>4x(−2x + 3)</p>
            </article>
            <article className="preferredFactor">
              <p className="comparisonLabel">EXTRACT −4x</p>
              <p>−4x(2x − 3)</p>
              <span>Often easier to read</span>
            </article>
          </div>
        </div>

        <div className="signReminder">
          Dividing a negative term by a negative factor gives a positive term:
          −8x² ÷ (−4x) = 2x.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <h2>Factorization by grouping</h2>
            <p className="headingDescription">
              Group four terms so that the same bracket appears twice.
            </p>
          </div>
        </div>

        <div className="groupingRule">
          <p className="generalFormula">ax + ay + bx + by</p>
          <p>= a(x + y) + b(x + y)</p>
          <p className="answerLine">= (a + b)(x + y)</p>
        </div>

        <div className="workedExample purpleExample">
          <p className="workedLabel">FACTORIZING BY GROUPING</p>
          <p className="workedQuestion">
            3x<sup>2</sup> + 6x + 2xy + 4y
          </p>

          <div className="groupingSteps">
            <article>
              <span className="stepBadge">1</span>
              <div>
                <strong>Make two groups</strong>
                <p>(3x² + 6x) + (2xy + 4y)</p>
              </div>
            </article>
            <article>
              <span className="stepBadge">2</span>
              <div>
                <strong>Factorize each group</strong>
                <p>3x(x + 2) + 2y(x + 2)</p>
              </div>
            </article>
            <article>
              <span className="stepBadge">3</span>
              <div>
                <strong>Extract the common bracket</strong>
                <p className="answerLine">(3x + 2y)(x + 2)</p>
              </div>
            </article>
          </div>
        </div>

        <div className="methodTip">
          If the two groups do not produce identical brackets, check the
          grouping, the common factors and every sign.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">6</span>
          <div>
            <h2>Check by expanding</h2>
            <p className="headingDescription">
              Expanding your factorized expression should reproduce the
              original polynomial exactly.
            </p>
          </div>
        </div>

        <div className="checkingExample">
          <p className="checkStart">Check: 6x²y(2x − 3y)</p>
          <p>
            = 6x²y(2x) + 6x²y(−3y)
          </p>
          <p className="checkResult">= 12x³y − 18x²y² ✓</p>
        </div>

        <div className="checkList">
          <span>✓ Same terms</span>
          <span>✓ Same coefficients</span>
          <span>✓ Same signs</span>
          <span>✓ Same indices</span>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Factorize completely.</h2>

        <p className="quizFormula">
          6x<sup>2</sup> − 9x
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
                <strong>Correct.</strong> The greatest common factor is 3x.
                Dividing the terms by 3x gives 2x and −3.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> Find the greatest numerical factor
                and the smallest power of x shared by both terms.
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
          <li>Extracting a factor that is not common to every term.</li>
          <li>Using the largest variable power instead of the smallest one.</li>
          <li>Dividing one term incorrectly when forming the bracket.</li>
          <li>Stopping before the expression is factorized completely.</li>
          <li>Making a sign error after extracting a negative factor.</li>
          <li>Using grouping when the two resulting brackets are not identical.</li>
          <li>Forgetting to expand the answer to check it.</li>
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

        .reverseProcess {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .reverseProcess article {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 12px;
          padding: 21px;
          border: 1px solid #c7d2fe;
          border-radius: 18px;
          background: #eef2ff;
          text-align: center;
        }

        .processLabel,
        .workedLabel,
        .quizLabel,
        .gcfLabel,
        .comparisonLabel {
          grid-column: 1 / -1;
          margin: 0 0 7px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .processLabel { color: #4f46e5; }

        .processFormula,
        .workedQuestion,
        .generalFormula,
        .quizFormula,
        .checkingExample {
          font-family: "Times New Roman", serif;
          font-weight: 700;
        }

        .processFormula {
          margin: 0;
          color: #312e81;
          font-size: 21px;
        }

        .processArrow {
          color: #7c3aed;
          font-size: 25px;
          font-weight: 900;
        }

        .definitionBox {
          margin-top: 17px;
          padding: 18px 20px;
          border: 1px solid #bfdbfe;
          border-radius: 16px;
          background: #eff6ff;
          color: #334155;
          font-size: 17px;
          line-height: 1.55;
          text-align: center;
        }

        .definitionBox p { margin: 0; }

        .methodSteps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 13px;
          margin-bottom: 17px;
        }

        .methodSteps article {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 17px;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          background: #f8fafc;
        }

        .methodSteps article > span,
        .stepBadge {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 12px;
          background: #2563eb;
          color: #ffffff;
          font-weight: 900;
        }

        .methodSteps strong { display: block; margin: 2px 0 5px; }
        .methodSteps p { margin: 0; color: #64748b; line-height: 1.45; }

        .workedExample {
          margin-top: 16px;
          padding: 22px;
          border-radius: 18px;
        }

        .blueExample { border: 1px solid #bfdbfe; background: #eff6ff; }
        .greenExample { border: 1px solid #bbf7d0; background: #f0fdf4; }
        .purpleExample { border: 1px solid #ddd6fe; background: #f5f3ff; }

        .blueExample .workedLabel { color: #1d4ed8; }
        .greenExample .workedLabel { color: #15803d; }
        .purpleExample .workedLabel { color: #6d28d9; }

        .workedQuestion {
          margin: 12px 0 18px;
          color: #0f172a;
          font-size: 29px;
          text-align: center;
        }

        .factorAnalysis,
        .divisionWorking,
        .fourProducts,
        .checkList {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 11px;
        }

        .factorAnalysis span,
        .divisionWorking p,
        .fourProducts span {
          margin: 0;
          padding: 14px;
          border-radius: 13px;
          background: #ffffff;
          color: #475569;
          font-family: "Times New Roman", serif;
          font-size: 18px;
          text-align: center;
        }

        .finalAnswer {
          margin: 17px 0 0;
          color: #166534;
          font-family: "Times New Roman", serif;
          font-size: 23px;
          font-weight: 900;
          text-align: center;
        }

        .gcfDisplay {
          padding: 23px;
          border: 1px solid #c7d2fe;
          border-radius: 19px;
          background: #eef2ff;
        }

        .gcfGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 12px;
        }

        .gcfGrid article {
          padding: 16px;
          border-radius: 14px;
          background: #ffffff;
          text-align: center;
        }

        .gcfLabel { color: #4f46e5; }
        .gcfGrid p:last-child { margin: 0; color: #475569; }

        .gcfResult {
          margin: 17px 0;
          color: #312e81;
          font-size: 20px;
          font-weight: 900;
          text-align: center;
        }

        .importantNote,
        .signReminder,
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

        .negativeExample {
          padding: 22px;
          border: 1px solid #fed7aa;
          border-radius: 18px;
          background: #fff7ed;
        }

        .signComparison {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 13px;
        }

        .signComparison article {
          padding: 17px;
          border-radius: 15px;
          background: #ffffff;
          color: #7c2d12;
          font-family: "Times New Roman", serif;
          font-size: 22px;
          font-weight: 700;
          text-align: center;
        }

        .comparisonLabel {
          color: #c2410c;
          font-family: inherit;
          font-size: 13px;
        }

        .signComparison article p { margin: 0 0 7px; }

        .preferredFactor {
          border: 2px solid #fb923c;
        }

        .preferredFactor span {
          color: #15803d;
          font-family: inherit;
          font-size: 14px;
        }

        .groupingRule {
          padding: 20px;
          border: 1px solid #cbd5e1;
          border-radius: 17px;
          background: #f8fafc;
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 23px;
          text-align: center;
        }

        .groupingRule p { margin: 6px 0; }
        .answerLine { color: #166534 !important; font-weight: 900; }

        .groupingSteps {
          display: grid;
          gap: 12px;
        }

        .groupingSteps article {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px;
          border-radius: 14px;
          background: #ffffff;
        }

        .groupingSteps strong { display: block; margin-bottom: 5px; }
        .groupingSteps p {
          margin: 0;
          color: #475569;
          font-family: "Times New Roman", serif;
          font-size: 20px;
        }

        .checkingExample {
          padding: 22px;
          border: 1px solid #bbf7d0;
          border-radius: 18px;
          background: #f0fdf4;
          color: #334155;
          font-size: 22px;
          text-align: center;
        }

        .checkingExample p { margin: 6px 0; }
        .checkStart { color: #166534; font-weight: 900; }
        .checkResult { color: #166534; font-size: 24px; font-weight: 900; }

        .checkList { margin-top: 14px; }
        .checkList span {
          padding: 12px;
          border-radius: 12px;
          background: #dcfce7;
          color: #166534;
          font-weight: 800;
          text-align: center;
        }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #faf5ff);
        }

        .quizLabel { color: #4f46e5; }
        .quizFormula {
          margin: 18px 0 24px;
          color: #312e81;
          font-size: 34px;
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
          .reverseProcess article { grid-template-columns: 1fr; }
          .processLabel { grid-column: 1; }
          .processArrow { transform: rotate(90deg); }
          .workedQuestion, .quizFormula { font-size: 25px; }
          .returnButton { width: 100%; min-width: 0; }
        }
      `}</style>
    </main>
  );
}
