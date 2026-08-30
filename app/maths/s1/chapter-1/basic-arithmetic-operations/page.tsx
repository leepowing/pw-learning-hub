"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "44", correct: false },
  { label: "52", correct: false },
  { label: "56", correct: true },
  { label: "64", correct: false },
];

const operationRows = [
  {
    symbol: "+",
    name: "Addition",
    example: "13 + 8 = 21",
    vocabulary: "addend + addend = sum",
    colour: "addition",
  },
  {
    symbol: "−",
    name: "Subtraction",
    example: "19 − 7 = 12",
    vocabulary: "minuend − subtrahend = difference",
    colour: "subtraction",
  },
  {
    symbol: "×",
    name: "Multiplication",
    example: "6 × 4 = 24",
    vocabulary: "factor × factor = product",
    colour: "multiplication",
  },
  {
    symbol: "÷",
    name: "Division",
    example: "35 ÷ 5 = 7",
    vocabulary: "dividend ÷ divisor = quotient",
    colour: "division",
  },
];

export default function BasicArithmeticOperationsPage() {
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
        onClick={() => router.push("/maths/s1/chapter-1")}
      >
        ← Back to Chapter 1
      </button>

      <p className="eyebrow">S1 · CHAPTER 1 · SECTION 2</p>
      <h1>The Four Basic Arithmetic Operations</h1>

      <p className="introduction">
        Addition, subtraction, multiplication and division are the building
        blocks of calculation. Learn their vocabulary, properties and correct
        order so that every expression is evaluated accurately.
      </p>

      <section className="lessonCard operationsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">OPERATION LANGUAGE</p>
            <h2>Know what each operation does</h2>
          </div>
        </div>

        <div className="operationGrid">
          {operationRows.map((operation) => (
            <article
              key={operation.name}
              className={`operationItem ${operation.colour}`}
            >
              <span className="operationSymbol">{operation.symbol}</span>
              <div>
                <h3>{operation.name}</h3>
                <strong>{operation.example}</strong>
                <p>{operation.vocabulary}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="inversePanel">
          <div>
            <strong>Addition and subtraction are inverse operations.</strong>
            <span>18 + 7 = 25, so 25 − 7 = 18.</span>
          </div>
          <div>
            <strong>Multiplication and division are inverse operations.</strong>
            <span>8 × 6 = 48, so 48 ÷ 6 = 8.</span>
          </div>
        </div>
      </section>

      <section className="lessonCard orderCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">ORDER OF OPERATIONS</p>
            <h2>Follow the same order every time</h2>
          </div>
        </div>

        <div className="orderSteps">
          <article>
            <span>1</span>
            <div>
              <strong>Brackets</strong>
              <p>Complete operations inside brackets first.</p>
            </div>
          </article>
          <article>
            <span>2</span>
            <div>
              <strong>Multiplication and division</strong>
              <p>Work from left to right when they have equal priority.</p>
            </div>
          </article>
          <article>
            <span>3</span>
            <div>
              <strong>Addition and subtraction</strong>
              <p>Work from left to right when they have equal priority.</p>
            </div>
          </article>
        </div>

        <div className="priorityWarning">
          <span>!</span>
          <p>
            Multiplication does not automatically come before division.
            Addition does not automatically come before subtraction. For
            operations with equal priority, calculate from left to right.
          </p>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">WORKED EXAMPLES</p>
            <h2>Apply the order carefully</h2>
          </div>
        </div>

        <div className="workedGrid">
          <article>
            <p className="workedLabel">EXAMPLE A · MULTIPLICATION FIRST</p>
            <h3>17 + 6 × 4</h3>
            <div className="calculation">
              <span>= 17 + 24</span>
              <span>= 41</span>
            </div>
            <p className="reason">Calculate 6 × 4 before adding 17.</p>
          </article>

          <article>
            <p className="workedLabel">EXAMPLE B · BRACKETS FIRST</p>
            <h3>5 × (14 − 8) + 3</h3>
            <div className="calculation">
              <span>= 5 × 6 + 3</span>
              <span>= 30 + 3</span>
              <span>= 33</span>
            </div>
            <p className="reason">Complete 14 − 8 inside the brackets first.</p>
          </article>

          <article>
            <p className="workedLabel">EXAMPLE C · LEFT TO RIGHT</p>
            <h3>48 ÷ 6 × 2</h3>
            <div className="calculation">
              <span>= 8 × 2</span>
              <span>= 16</span>
            </div>
            <p className="reason">
              Division and multiplication have equal priority, so work from
              left to right.
            </p>
          </article>

          <article>
            <p className="workedLabel">EXAMPLE D · NESTED CALCULATION</p>
            <h3>100 − [24 ÷ (9 − 3) + 7]</h3>
            <div className="calculation">
              <span>= 100 − [24 ÷ 6 + 7]</span>
              <span>= 100 − [4 + 7]</span>
              <span>= 100 − 11</span>
              <span>= 89</span>
            </div>
            <p className="reason">Start with the innermost brackets.</p>
          </article>
        </div>
      </section>

      <section className="lessonCard propertiesCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">USEFUL PROPERTIES</p>
            <h2>Recognise what may—and may not—be rearranged</h2>
          </div>
        </div>

        <div className="propertyGrid">
          <article className="trueProperty">
            <span className="propertyBadge">ORDER MAY CHANGE</span>
            <h3>Addition</h3>
            <p>8 + 15 = 15 + 8</p>
            <h3>Multiplication</h3>
            <p>7 × 9 = 9 × 7</p>
          </article>

          <article className="falseProperty">
            <span className="propertyBadge">ORDER MATTERS</span>
            <h3>Subtraction</h3>
            <p>12 − 5 ≠ 5 − 12</p>
            <h3>Division</h3>
            <p>20 ÷ 4 ≠ 4 ÷ 20</p>
          </article>
        </div>

        <div className="identityGrid">
          <article>
            <strong>Additive identity</strong>
            <span>n + 0 = n</span>
          </article>
          <article>
            <strong>Multiplicative identity</strong>
            <span>n × 1 = n</span>
          </article>
          <article>
            <strong>Multiplying by zero</strong>
            <span>n × 0 = 0</span>
          </article>
          <article>
            <strong>Division restriction</strong>
            <span>Division by zero is undefined.</span>
          </article>
        </div>
      </section>

      <section className="lessonCard estimationCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">CHECKING ANSWERS</p>
            <h2>Estimate and use inverse operations</h2>
          </div>
        </div>

        <div className="checkingGrid">
          <article>
            <span className="checkingIcon">≈</span>
            <div>
              <h3>Estimate first</h3>
              <p>
                For 398 + 205, use 400 + 200 ≈ 600. An answer of 6,030 is
                clearly unreasonable.
              </p>
            </div>
          </article>
          <article>
            <span className="checkingIcon">↔</span>
            <div>
              <h3>Use the inverse</h3>
              <p>
                If 864 ÷ 24 = 36, check that 36 × 24 = 864.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Evaluate the expression.</h2>
        <div className="quizExpression">
          72 − [18 ÷ 3 × 2 + 4]
        </div>

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
              18 ÷ 3 × 2 = 12, then 12 + 4 = 16, so 72 − 16 = 56.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Watch out for these errors</h2>
        <ul>
          <li>Calculating strictly from left to right without using priority.</li>
          <li>Doing addition before multiplication when there are no brackets.</li>
          <li>Doing multiplication before division instead of working left to right.</li>
          <li>Changing the order in subtraction or division.</li>
          <li>Forgetting that division by zero is undefined.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Calculate accurately in three stages</h2>
        <div className="summaryGrid">
          <article>
            <span>1</span>
            <strong>Brackets</strong>
          </article>
          <article>
            <span>2</span>
            <strong>Multiply and divide left to right</strong>
          </article>
          <article>
            <span>3</span>
            <strong>Add and subtract left to right</strong>
          </article>
        </div>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s1/chapter-1")}
        >
          ← Return to Chapter 1
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

        .eyebrow,
        .lessonLabel,
        .workedLabel,
        .quizLabel,
        .mistakesLabel,
        .summaryLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #e11d48;
        }

        h1 {
          margin: 0;
          max-width: 800px;
          font-size: clamp(36px, 5vw, 54px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .introduction {
          max-width: 820px;
          margin: 18px 0 32px;
          color: #5c667a;
          font-size: 19px;
          line-height: 1.65;
        }

        .lessonCard,
        .quizCard,
        .mistakesCard,
        .summaryCard {
          margin-top: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 25px;
          background: #ffffff;
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
          background: #fff1f2;
          color: #e11d48;
          font-size: 22px;
          font-weight: 900;
        }

        .lessonLabel,
        .workedLabel,
        .quizLabel,
        .summaryLabel {
          margin: 0 0 5px;
          color: #4f46e5;
        }

        .lessonHeading h2,
        .quizCard h2,
        .mistakesCard h2,
        .summaryCard h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.25;
        }

        .operationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .operationItem {
          display: flex;
          align-items: center;
          gap: 17px;
          padding: 20px;
          border: 1px solid #dbeafe;
          border-radius: 19px;
          background: #f8fbff;
        }

        .operationSymbol {
          width: 56px;
          height: 56px;
          flex: 0 0 56px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          color: #ffffff;
          font-size: 30px;
          font-weight: 900;
        }

        .addition .operationSymbol { background: #059669; }
        .subtraction .operationSymbol { background: #e11d48; }
        .multiplication .operationSymbol { background: #4f46e5; }
        .division .operationSymbol { background: #d97706; }

        .operationItem h3 {
          margin: 0 0 4px;
          font-size: 20px;
        }

        .operationItem strong {
          display: block;
          margin-bottom: 4px;
          font-size: 18px;
        }

        .operationItem p {
          margin: 0;
          color: #64748b;
          line-height: 1.45;
        }

        .inversePanel {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 16px;
        }

        .inversePanel div {
          padding: 17px 19px;
          border-radius: 16px;
          background: #f1f5f9;
        }

        .inversePanel strong,
        .inversePanel span {
          display: block;
        }

        .inversePanel span {
          margin-top: 5px;
          color: #64748b;
        }

        .orderSteps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .orderSteps article {
          padding: 20px;
          border-radius: 18px;
          background: linear-gradient(145deg, #eef2ff, #f8fafc);
        }

        .orderSteps article > span {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          margin-bottom: 13px;
          border-radius: 50%;
          background: #4f46e5;
          color: #ffffff;
          font-weight: 900;
        }

        .orderSteps strong {
          font-size: 18px;
        }

        .orderSteps p {
          margin: 7px 0 0;
          color: #64748b;
          line-height: 1.5;
        }

        .priorityWarning {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin-top: 16px;
          padding: 17px 19px;
          border: 1px solid #fde68a;
          border-radius: 16px;
          background: #fffbeb;
        }

        .priorityWarning span {
          width: 28px;
          height: 28px;
          flex: 0 0 28px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #f59e0b;
          color: white;
          font-weight: 900;
        }

        .priorityWarning p {
          margin: 1px 0 0;
          color: #854d0e;
          line-height: 1.55;
        }

        .workedGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .workedGrid article {
          padding: 21px;
          border: 1px solid #c7d2fe;
          border-radius: 18px;
          background: #fafaff;
        }

        .workedGrid h3 {
          margin: 0 0 13px;
          color: #312e81;
          font-size: 23px;
        }

        .calculation {
          display: grid;
          gap: 6px;
          padding: 14px 16px;
          border-radius: 13px;
          background: white;
          font-size: 18px;
          font-weight: 800;
        }

        .reason {
          margin: 12px 0 0;
          color: #64748b;
          line-height: 1.5;
        }

        .propertyGrid,
        .identityGrid,
        .checkingGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .propertyGrid > article {
          padding: 21px;
          border-radius: 18px;
        }

        .trueProperty {
          border: 1px solid #a7f3d0;
          background: #ecfdf5;
        }

        .falseProperty {
          border: 1px solid #fecdd3;
          background: #fff1f2;
        }

        .propertyBadge {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .propertyGrid h3 {
          margin: 15px 0 4px;
          font-size: 17px;
        }

        .propertyGrid p {
          margin: 0;
          font-size: 19px;
          font-weight: 800;
        }

        .identityGrid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 15px;
        }

        .identityGrid article {
          padding: 17px;
          border-radius: 15px;
          background: #f1f5f9;
        }

        .identityGrid strong,
        .identityGrid span {
          display: block;
        }

        .identityGrid strong {
          margin-bottom: 7px;
          font-size: 14px;
        }

        .identityGrid span {
          color: #475569;
          line-height: 1.45;
        }

        .checkingGrid article {
          display: flex;
          gap: 15px;
          padding: 20px;
          border-radius: 18px;
          background: #f8fafc;
        }

        .checkingIcon {
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #e0e7ff;
          color: #4338ca;
          font-size: 24px;
          font-weight: 900;
        }

        .checkingGrid h3 {
          margin: 0 0 6px;
        }

        .checkingGrid p {
          margin: 0;
          color: #64748b;
          line-height: 1.55;
        }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(145deg, #eef2ff, #ffffff);
        }

        .quizExpression {
          margin: 22px 0;
          padding: 22px;
          border-radius: 17px;
          background: #ffffff;
          color: #312e81;
          font-size: clamp(27px, 5vw, 38px);
          font-weight: 900;
          text-align: center;
        }

        .quizOptions {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .quizOption {
          padding: 15px;
          border: 2px solid #cbd5e1;
          border-radius: 14px;
          background: white;
          color: #172033;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        .quizOption:hover {
          border-color: #818cf8;
        }

        .correctOption {
          border-color: #10b981;
          background: #ecfdf5;
          color: #047857;
        }

        .incorrectOption {
          border-color: #fb7185;
          background: #fff1f2;
          color: #be123c;
        }

        .feedback {
          display: grid;
          gap: 4px;
          margin-top: 15px;
          padding: 15px 17px;
          border-radius: 14px;
          line-height: 1.5;
        }

        .correctFeedback {
          background: #d1fae5;
          color: #065f46;
        }

        .incorrectFeedback {
          background: #ffe4e6;
          color: #9f1239;
        }

        .mistakesCard {
          border-color: #fed7aa;
          background: #fffaf2;
        }

        .mistakesLabel {
          margin: 0 0 5px;
          color: #c2410c;
        }

        .mistakesCard ul {
          margin: 18px 0 0;
          padding-left: 23px;
          color: #475569;
          font-size: 17px;
          line-height: 1.8;
        }

        .summaryCard {
          border-color: #a7f3d0;
          background: linear-gradient(145deg, #ecfdf5, #ffffff);
        }

        .summaryLabel {
          color: #047857;
        }

        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          margin-top: 20px;
        }

        .summaryGrid article {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 15px;
          background: white;
        }

        .summaryGrid span {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #059669;
          color: white;
          font-weight: 900;
        }

        .bottomNavigation {
          display: flex;
          justify-content: flex-start;
          margin-top: 26px;
        }

        .returnButton {
          padding: 13px 20px;
          border: none;
          border-radius: 14px;
          background: #047857;
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 760px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .quizCard,
          .mistakesCard,
          .summaryCard {
            padding: 21px;
            border-radius: 20px;
          }

          .operationGrid,
          .inversePanel,
          .workedGrid,
          .propertyGrid,
          .checkingGrid {
            grid-template-columns: 1fr;
          }

          .orderSteps,
          .summaryGrid {
            grid-template-columns: 1fr;
          }

          .identityGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 520px) {
          .lessonHeading {
            align-items: flex-start;
          }

          .lessonHeading h2,
          .quizCard h2,
          .mistakesCard h2,
          .summaryCard h2 {
            font-size: 23px;
          }

          .operationItem {
            align-items: flex-start;
          }

          .identityGrid,
          .quizOptions {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .checkingGrid article {
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
