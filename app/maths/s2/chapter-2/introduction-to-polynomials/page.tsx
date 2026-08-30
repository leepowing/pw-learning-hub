"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const answerOptions = [
  { label: "3", correct: false },
  { label: "4", correct: false },
  { label: "5", correct: true },
  { label: "7", correct: false },
];

export default function IntroductionToPolynomialsPage() {
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

      <p className="eyebrow">S2 · CHAPTER 2 · SECTION 2</p>
      <h1>Introduction to Polynomials</h1>

      <p className="introduction">
        Learn the language of polynomials: monomials, terms, coefficients,
        constant terms and degree. Then arrange and evaluate polynomials
        accurately.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <h2>Monomials and polynomials</h2>
            <p className="headingDescription">
              A polynomial is built from one or more valid monomial terms.
            </p>
          </div>
        </div>

        <div className="definitionGrid">
          <article className="definitionBox monomialBox">
            <p className="boxLabel">MONOMIAL</p>
            <h3>One term</h3>
            <p>
              A number, a variable, or a product of numbers and variables with
              positive integral indices.
            </p>
            <div className="exampleList">
              <span>−3</span>
              <span>5a</span>
              <span>5ab<sup>2</sup></span>
            </div>
          </article>

          <article className="definitionBox polynomialBox">
            <p className="boxLabel">POLYNOMIAL</p>
            <h3>One or more terms</h3>
            <p>
              A monomial or a sum and difference of several monomials.
            </p>
            <div className="exampleList">
              <span>5</span>
              <span>2x − 3</span>
              <span>3x<sup>2</sup> − 4y + 2</span>
            </div>
          </article>
        </div>

        <div className="notPolynomialBox">
          <p className="boxLabel">NOT POLYNOMIALS</p>
          <div className="notPolynomialGrid">
            <div>
              <p className="formulaText">1/x + 2</p>
              <span>A variable is in the denominator.</span>
            </div>
            <div>
              <p className="formulaText">√x + 3</p>
              <span>The variable does not have a positive integral index.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <h2>Terms, coefficients and constants</h2>
            <p className="headingDescription">
              Signs belong to the terms that follow them.
            </p>
          </div>
        </div>

        <div className="polynomialDisplay">
          <span className="term termOne">4x<sup>3</sup></span>
          <span className="operator">−</span>
          <span className="term termTwo">5x<sup>2</sup></span>
          <span className="operator">+</span>
          <span className="term termThree">2x</span>
          <span className="operator">−</span>
          <span className="term termFour">7</span>
        </div>

        <div className="informationGrid">
          <article>
            <p className="informationLabel">TERMS</p>
            <p className="informationFormula">
              4x<sup>3</sup>, −5x<sup>2</sup>, 2x, −7
            </p>
          </article>

          <article>
            <p className="informationLabel">COEFFICIENTS</p>
            <p className="informationFormula">4, −5, 2</p>
          </article>

          <article>
            <p className="informationLabel">CONSTANT TERM</p>
            <p className="informationFormula">−7</p>
          </article>
        </div>

        <div className="importantNote">
          <strong>Important:</strong> The coefficient of −5x² is −5, not 5.
          The subtraction sign is part of the term.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <h2>Degree of a term</h2>
            <p className="headingDescription">
              Add the indices of every variable in the term.
            </p>
          </div>
        </div>

        <div className="degreeExamples">
          <article>
            <p className="degreeTerm">7x<sup>4</sup></p>
            <p className="degreeWorking">Degree = 4</p>
          </article>

          <article>
            <p className="degreeTerm">3x<sup>2</sup>y<sup>3</sup></p>
            <p className="degreeWorking">Degree = 2 + 3 = 5</p>
          </article>

          <article>
            <p className="degreeTerm">−6ab<sup>2</sup>c<sup>3</sup></p>
            <p className="degreeWorking">Degree = 1 + 2 + 3 = 6</p>
          </article>

          <article>
            <p className="degreeTerm">9</p>
            <p className="degreeWorking">Degree = 0</p>
          </article>
        </div>

        <div className="ruleBox">
          <p className="ruleTitle">Degree of a polynomial</p>
          <p>
            The degree of a polynomial is the highest degree among all its
            non-zero terms.
          </p>
        </div>

        <div className="workedExample">
          <p className="workedLabel">EXAMPLE</p>
          <p className="workedPolynomial">
            x<sup>4</sup>y<sup>2</sup> + x<sup>3</sup>y + 5x<sup>2</sup> + 1
          </p>

          <div className="degreeBreakdown">
            <span>x⁴y² → degree 6</span>
            <span>x³y → degree 4</span>
            <span>5x² → degree 2</span>
            <span>1 → degree 0</span>
          </div>

          <p className="workedConclusion">
            The highest degree is 6, so the polynomial has degree 6.
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <h2>Arranging a polynomial</h2>
            <p className="headingDescription">
              Terms are usually arranged by descending or ascending powers of
              a chosen variable.
            </p>
          </div>
        </div>

        <div className="arrangementExample">
          <p className="originalPolynomial">
            1 + x<sup>2</sup> − 4x + x<sup>3</sup>
          </p>

          <div className="arrangementGrid">
            <article>
              <p className="arrangementLabel">DESCENDING POWERS OF x</p>
              <p className="arrangedPolynomial">
                x<sup>3</sup> + x<sup>2</sup> − 4x + 1
              </p>
            </article>

            <article>
              <p className="arrangementLabel">ASCENDING POWERS OF x</p>
              <p className="arrangedPolynomial">
                1 − 4x + x<sup>2</sup> + x<sup>3</sup>
              </p>
            </article>
          </div>
        </div>

        <div className="methodTip">
          Rearranging changes only the order of the terms. It does not change
          any sign, coefficient or index.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <h2>Evaluating a polynomial</h2>
            <p className="headingDescription">
              Substitute the given value for every occurrence of the variable.
            </p>
          </div>
        </div>

        <div className="evaluationExample">
          <p className="workedLabel">FIND THE VALUE WHEN x = −2</p>
          <p className="workedPolynomial">
            P(x) = 3x<sup>2</sup> − 5x + 1
          </p>

          <div className="evaluationSteps">
            <p>
              P(−2) = 3(−2)<sup>2</sup> − 5(−2) + 1
            </p>
            <p>= 3(4) + 10 + 1</p>
            <p className="answerLine">= 23</p>
          </div>
        </div>

        <div className="importantNote">
          Put a negative substituted value inside brackets. This makes
          expressions such as (−2)² clear and prevents sign errors.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>What is the degree of this polynomial?</h2>

        <p className="quizFormula">
          4x<sup>3</sup>y<sup>2</sup> − 5x + 7
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
                <strong>Correct.</strong> The term 4x³y² has degree 3 + 2 = 5,
                which is the highest degree in the polynomial.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> Add the indices of x and y in each
                term, then choose the highest result.
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
          <li>Forgetting that the sign before a term belongs to that term.</li>
          <li>Calling an expression with a variable in a denominator a polynomial.</li>
          <li>Using the largest coefficient as the degree.</li>
          <li>Finding the degree of x²y³ as 3 instead of 2 + 3 = 5.</li>
          <li>Changing signs when rearranging terms.</li>
          <li>Substituting a negative value without brackets.</li>
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

        .definitionGrid,
        .informationGrid,
        .degreeExamples,
        .arrangementGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 16px;
        }

        .definitionBox {
          padding: 22px;
          border-radius: 18px;
        }

        .monomialBox {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
        }

        .polynomialBox {
          border: 1px solid #c7d2fe;
          background: #eef2ff;
        }

        .boxLabel,
        .informationLabel,
        .workedLabel,
        .quizLabel,
        .arrangementLabel {
          margin: 0 0 9px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .monomialBox .boxLabel {
          color: #1d4ed8;
        }

        .polynomialBox .boxLabel {
          color: #4f46e5;
        }

        .definitionBox h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .definitionBox > p:last-of-type {
          color: #475569;
          line-height: 1.55;
        }

        .exampleList {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 16px;
        }

        .exampleList span {
          padding: 9px 12px;
          border-radius: 11px;
          background: #ffffff;
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 20px;
          font-weight: 700;
        }

        .notPolynomialBox {
          margin-top: 17px;
          padding: 21px;
          border: 1px solid #fecaca;
          border-radius: 18px;
          background: #fef2f2;
        }

        .notPolynomialBox > .boxLabel {
          color: #b91c1c;
        }

        .notPolynomialGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 13px;
        }

        .notPolynomialGrid > div {
          padding: 15px;
          border-radius: 14px;
          background: #ffffff;
          text-align: center;
        }

        .formulaText {
          margin: 0 0 7px;
          color: #991b1b;
          font-family: "Times New Roman", serif;
          font-size: 24px;
          font-weight: 700;
        }

        .notPolynomialGrid span {
          color: #64748b;
          line-height: 1.45;
        }

        .polynomialDisplay {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          padding: 25px;
          border: 1px solid #fed7aa;
          border-radius: 18px;
          background: #fff7ed;
          font-family: "Times New Roman", serif;
          font-size: 33px;
          font-weight: 700;
        }

        .term {
          padding: 5px 8px;
          border-radius: 9px;
        }

        .termOne { background: #dbeafe; color: #1e3a8a; }
        .termTwo { background: #ede9fe; color: #5b21b6; }
        .termThree { background: #dcfce7; color: #166534; }
        .termFour { background: #fee2e2; color: #991b1b; }

        .informationGrid {
          margin-top: 17px;
        }

        .informationGrid article {
          padding: 18px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #f8fafc;
          text-align: center;
        }

        .informationLabel {
          color: #64748b;
        }

        .informationFormula {
          margin: 0;
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 22px;
          font-weight: 700;
        }

        .importantNote,
        .methodTip,
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

        .degreeExamples article {
          padding: 19px;
          border: 1px solid #bfdbfe;
          border-radius: 17px;
          background: #eff6ff;
          text-align: center;
        }

        .degreeTerm {
          margin: 0 0 9px;
          color: #1e3a8a;
          font-family: "Times New Roman", serif;
          font-size: 27px;
          font-weight: 700;
        }

        .degreeWorking {
          margin: 0;
          color: #475569;
          font-size: 16px;
          font-weight: 800;
        }

        .ruleBox {
          margin-top: 17px;
          padding: 19px;
          border: 1px solid #c7d2fe;
          border-radius: 16px;
          background: #eef2ff;
          text-align: center;
        }

        .ruleTitle {
          margin: 0 0 6px;
          color: #4338ca;
          font-size: 18px;
          font-weight: 900;
        }

        .ruleBox p:last-child {
          margin: 0;
          color: #475569;
          line-height: 1.5;
        }

        .workedExample,
        .evaluationExample {
          margin-top: 17px;
          padding: 22px;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          background: #f5f3ff;
        }

        .workedLabel {
          color: #6d28d9;
        }

        .workedPolynomial,
        .originalPolynomial,
        .arrangedPolynomial,
        .quizFormula {
          font-family: "Times New Roman", serif;
          font-weight: 700;
          text-align: center;
        }

        .workedPolynomial {
          margin: 12px 0 18px;
          color: #312e81;
          font-size: 27px;
        }

        .degreeBreakdown {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 10px;
        }

        .degreeBreakdown span {
          padding: 12px;
          border-radius: 12px;
          background: #ffffff;
          color: #475569;
          text-align: center;
        }

        .workedConclusion {
          margin: 17px 0 0;
          color: #166534;
          font-size: 17px;
          font-weight: 900;
          text-align: center;
        }

        .arrangementExample {
          padding: 22px;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          background: #f8fafc;
        }

        .originalPolynomial {
          margin: 0 0 18px;
          color: #0f172a;
          font-size: 28px;
        }

        .arrangementGrid article {
          padding: 18px;
          border-radius: 15px;
          background: #ffffff;
        }

        .arrangementLabel {
          color: #64748b;
          text-align: center;
        }

        .arrangedPolynomial {
          margin: 0;
          color: #1e3a8a;
          font-size: 23px;
        }

        .evaluationExample {
          margin-top: 0;
          border-color: #bbf7d0;
          background: #f0fdf4;
        }

        .evaluationSteps {
          max-width: 600px;
          margin: 0 auto;
          color: #334155;
          font-family: "Times New Roman", serif;
          font-size: 21px;
          text-align: center;
        }

        .evaluationSteps p {
          margin: 6px 0;
        }

        .answerLine {
          color: #166534;
          font-size: 24px;
          font-weight: 900;
        }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #faf5ff);
        }

        .quizLabel {
          color: #4f46e5;
        }

        .quizFormula {
          margin: 18px 0 24px;
          color: #312e81;
          font-size: 34px;
        }

        .answerGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
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

          .polynomialDisplay {
            gap: 7px;
            font-size: 26px;
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
