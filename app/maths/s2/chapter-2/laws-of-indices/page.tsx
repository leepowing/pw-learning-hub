"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const answerOptions = [
  { label: "4x⁶", correct: false },
  { label: "4x⁷", correct: true },
  { label: "2x⁷", correct: false },
  { label: "4x⁹", correct: false },
];

export default function LawsOfIndicesPage() {
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

      <p className="eyebrow">S2 · CHAPTER 2 · SECTION 1</p>
      <h1>Laws of Positive Integral Indices</h1>

      <p className="introduction">
        Understand index notation and apply the multiplication, division and
        power laws accurately when simplifying algebraic expressions.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <h2>Index notation</h2>
            <p className="headingDescription">
              An index shows how many times a base is used as a factor.
            </p>
          </div>
        </div>

        <div className="indexDisplay">
          <div className="largePower">
            <span className="baseValue">a</span>
            <span className="indexValue">n</span>
          </div>

          <div className="labelLines">
            <p><strong>a</strong> is the base</p>
            <p><strong>n</strong> is the index or exponent</p>
          </div>
        </div>

        <div className="definitionBox">
          <p className="formulaText">
            a<sup>n</sup> = a × a × a × … × a
          </p>
          <p className="underbraceText">a appears as a factor n times.</p>
        </div>

        <div className="exampleStrip">
          <span>Example</span>
          <p>
            3<sup>4</sup> = 3 × 3 × 3 × 3 = 81
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <h2>Multiplication and division laws</h2>
            <p className="headingDescription">
              These laws apply only when the bases are the same.
            </p>
          </div>
        </div>

        <div className="lawGrid">
          <article className="lawBox blueLaw">
            <p className="lawLabel">MULTIPLYING SAME BASES</p>
            <p className="lawFormula">
              a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>
            </p>
            <p className="lawInstruction">Keep the base and add the indices.</p>
            <div className="workedLine">
              <p>
                x<sup>4</sup> × x<sup>3</sup>
              </p>
              <p>
                = x<sup>4+3</sup>
              </p>
              <p className="answerLine">
                = x<sup>7</sup>
              </p>
            </div>
          </article>

          <article className="lawBox orangeLaw">
            <p className="lawLabel">DIVIDING SAME BASES</p>
            <p className="lawFormula">
              a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>
            </p>
            <p className="lawInstruction">
              When m &gt; n, keep the base and subtract the indices.
            </p>
            <div className="workedLine">
              <p>
                y<sup>9</sup> ÷ y<sup>4</sup>
              </p>
              <p>
                = y<sup>9−4</sup>
              </p>
              <p className="answerLine">
                = y<sup>5</sup>
              </p>
            </div>
          </article>
        </div>

        <div className="divisionCases">
          <h3>Division when the first index is not larger</h3>

          <div className="caseGrid">
            <article>
              <p className="caseTitle">When m = n</p>
              <p className="caseFormula">
                a<sup>m</sup> ÷ a<sup>m</sup> = 1
              </p>
              <p>provided that a ≠ 0</p>
            </article>

            <article>
              <p className="caseTitle">When m &lt; n</p>
              <p className="caseFormula">
                a<sup>m</sup> ÷ a<sup>n</sup> = 1/a<sup>n−m</sup>
              </p>
              <p>provided that a ≠ 0</p>
            </article>
          </div>

          <div className="fractionExample">
            <p>
              a<sup>3</sup> ÷ a<sup>7</sup>
              = 1/a<sup>7−3</sup>
              = <strong>1/a<sup>4</sup></strong>
            </p>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <h2>Powers of powers and products</h2>
            <p className="headingDescription">
              A power outside brackets affects every factor inside.
            </p>
          </div>
        </div>

        <div className="threeLawGrid">
          <article className="compactLawBox">
            <p className="lawLabel purpleLabel">POWER OF A POWER</p>
            <p className="lawFormula">
              (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>
            </p>
            <p>Multiply the indices.</p>
            <div className="compactExample">
              (x<sup>3</sup>)<sup>4</sup> = x<sup>12</sup>
            </div>
          </article>

          <article className="compactLawBox">
            <p className="lawLabel purpleLabel">POWER OF A PRODUCT</p>
            <p className="lawFormula">
              (ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup>
            </p>
            <p>Apply the power to every factor.</p>
            <div className="compactExample">
              (2x)<sup>3</sup> = 8x<sup>3</sup>
            </div>
          </article>

          <article className="compactLawBox">
            <p className="lawLabel purpleLabel">POWER OF A QUOTIENT</p>
            <p className="lawFormula">
              (a/b)<sup>n</sup> = a<sup>n</sup>/b<sup>n</sup>
            </p>
            <p>Apply the power to numerator and denominator.</p>
            <div className="compactExample">
              (2/3)<sup>4</sup> = 16/81
            </div>
          </article>
        </div>

        <div className="importantNote">
          <strong>Remember:</strong> In (2x)<sup>3</sup>, both 2 and x are
          cubed. Therefore (2x)<sup>3</sup> = 2<sup>3</sup>x<sup>3</sup> =
          8x<sup>3</sup>.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <h2>Combining more than one law</h2>
            <p className="headingDescription">
              Work on brackets first, then combine powers with the same base.
            </p>
          </div>
        </div>

        <div className="workedExample">
          <p className="workedLabel">SIMPLIFY</p>
          <p className="workedQuestion">
            (3a<sup>2</sup>)<sup>3</sup> × a<sup>4</sup>
          </p>

          <div className="calculationSteps">
            <div>
              <span className="stepBadge">1</span>
              <p>
                (3a<sup>2</sup>)<sup>3</sup>
                = 3<sup>3</sup>a<sup>2×3</sup>
                = 27a<sup>6</sup>
              </p>
            </div>

            <div>
              <span className="stepBadge">2</span>
              <p>
                27a<sup>6</sup> × a<sup>4</sup>
                = 27a<sup>6+4</sup>
              </p>
            </div>

            <div className="finalCalculation">
              <span className="stepBadge">3</span>
              <p>
                = 27a<sup>10</sup>
              </p>
            </div>
          </div>
        </div>

        <div className="methodTip">
          Numerical coefficients and variable powers must be handled
          separately. Do not add a coefficient to an index.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Simplify the expression.</h2>

        <p className="quizFormula">
          (2x<sup>3</sup>)<sup>2</sup> × x
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
                <strong>Correct.</strong> (2x³)² = 4x⁶, and 4x⁶ × x =
                4x⁷.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> Square both 2 and x³ first, then
                add the indices when multiplying by x.
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
          <li>
            Adding indices when the bases are different, such as
            x<sup>2</sup> × y<sup>3</sup>.
          </li>
          <li>
            Writing (a<sup>m</sup>)<sup>n</sup> as a<sup>m+n</sup> instead of
            a<sup>mn</sup>.
          </li>
          <li>
            Forgetting to apply an outside power to the numerical coefficient.
          </li>
          <li>Subtracting the indices in the wrong order during division.</li>
          <li>Dividing by a variable without stating that it is non-zero.</li>
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

        .indexDisplay {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 45px;
          padding: 24px;
          border: 1px solid #fed7aa;
          border-radius: 18px;
          background: #fff7ed;
        }

        .largePower {
          position: relative;
          width: 100px;
          height: 100px;
          color: #9a3412;
          font-family: "Times New Roman", serif;
        }

        .baseValue {
          position: absolute;
          left: 14px;
          bottom: 4px;
          font-size: 78px;
          font-style: italic;
          line-height: 1;
        }

        .indexValue {
          position: absolute;
          top: 2px;
          right: 10px;
          font-size: 36px;
          font-style: italic;
          font-weight: 700;
        }

        .labelLines p {
          margin: 7px 0;
          color: #7c2d12;
          font-size: 18px;
        }

        .definitionBox {
          margin-top: 17px;
          padding: 23px;
          border: 1px solid #bfdbfe;
          border-radius: 18px;
          background: #eff6ff;
          text-align: center;
        }

        .formulaText,
        .lawFormula,
        .caseFormula,
        .workedQuestion,
        .quizFormula {
          font-family: "Times New Roman", serif;
          font-weight: 700;
        }

        .formulaText {
          margin: 0;
          color: #1e3a8a;
          font-size: 32px;
        }

        .underbraceText {
          margin: 9px 0 0;
          color: #475569;
          font-size: 16px;
        }

        .exampleStrip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 16px;
          padding: 16px 19px;
          border-radius: 15px;
          background: #f8fafc;
        }

        .exampleStrip span {
          color: #64748b;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .exampleStrip p {
          margin: 0;
          color: #334155;
          font-family: "Times New Roman", serif;
          font-size: 23px;
          font-weight: 700;
        }

        .lawGrid,
        .caseGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        .lawBox {
          padding: 22px;
          border-radius: 18px;
        }

        .blueLaw {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
        }

        .orangeLaw {
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .lawLabel,
        .workedLabel,
        .quizLabel {
          margin: 0 0 10px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .blueLaw .lawLabel {
          color: #1d4ed8;
        }

        .orangeLaw .lawLabel {
          color: #c2410c;
        }

        .lawFormula {
          margin: 10px 0;
          color: #0f172a;
          font-size: 28px;
          text-align: center;
        }

        .lawInstruction {
          min-height: 48px;
          margin: 0;
          color: #475569;
          line-height: 1.5;
          text-align: center;
        }

        .workedLine {
          margin-top: 15px;
          padding: 15px;
          border-radius: 14px;
          background: #ffffff;
          font-family: "Times New Roman", serif;
          font-size: 21px;
          text-align: center;
        }

        .workedLine p {
          margin: 4px 0;
        }

        .answerLine {
          color: #166534;
          font-weight: 900;
        }

        .divisionCases {
          margin-top: 18px;
          padding: 22px;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          background: #f8fafc;
        }

        .divisionCases h3 {
          margin: 0 0 16px;
          font-size: 20px;
          text-align: center;
        }

        .caseGrid article {
          padding: 17px;
          border-radius: 15px;
          background: #ffffff;
          text-align: center;
        }

        .caseTitle {
          margin: 0 0 8px;
          color: #64748b;
          font-weight: 800;
        }

        .caseFormula {
          margin: 0;
          color: #312e81;
          font-size: 22px;
        }

        .caseGrid article p:last-child {
          margin: 8px 0 0;
          color: #64748b;
          font-size: 14px;
        }

        .fractionExample {
          margin-top: 14px;
          color: #334155;
          font-family: "Times New Roman", serif;
          font-size: 21px;
          text-align: center;
        }

        .fractionExample p {
          margin: 0;
        }

        .threeLawGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 15px;
        }

        .compactLawBox {
          padding: 20px;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          background: #f5f3ff;
          text-align: center;
        }

        .purpleLabel {
          color: #6d28d9;
        }

        .compactLawBox > p:not(.lawLabel):not(.lawFormula) {
          min-height: 45px;
          margin: 0;
          color: #64748b;
          line-height: 1.45;
        }

        .compactExample {
          margin-top: 13px;
          padding: 13px;
          border-radius: 13px;
          background: #ffffff;
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 21px;
          font-weight: 700;
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

        .workedExample {
          padding: 24px;
          border: 1px solid #c7d2fe;
          border-radius: 19px;
          background: linear-gradient(135deg, #eef2ff, #f5f3ff);
        }

        .workedLabel {
          color: #4f46e5;
        }

        .workedQuestion {
          margin: 12px 0 22px;
          color: #312e81;
          font-size: 31px;
          text-align: center;
        }

        .calculationSteps {
          display: grid;
          gap: 12px;
        }

        .calculationSteps > div {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          border-radius: 15px;
          background: #ffffff;
        }

        .stepBadge {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 12px;
          background: #6366f1;
          color: #ffffff;
          font-weight: 900;
        }

        .calculationSteps p {
          margin: 0;
          color: #334155;
          font-family: "Times New Roman", serif;
          font-size: 21px;
        }

        .calculationSteps .finalCalculation {
          border: 1px solid #86efac;
          background: #f0fdf4;
        }

        .calculationSteps .finalCalculation p {
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
          text-align: center;
        }

        .answerGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
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

          .indexDisplay {
            gap: 18px;
          }

          .formulaText {
            font-size: 25px;
          }

          .exampleStrip {
            align-items: flex-start;
            flex-direction: column;
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

