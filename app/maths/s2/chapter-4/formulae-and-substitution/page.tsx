"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

const quizAnswers = [
  {
    id: "a",
    text: "T = −22",
  },
  {
    id: "b",
    text: "T = 2",
  },
  {
    id: "c",
    text: "T = 22",
  },
];

const correctAnswer = "b";

export default function FormulaeAndSubstitutionPage() {
  const router = useRouter();

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const answered = selectedAnswer !== null;
  const isCorrect =
    selectedAnswer === correctAnswer;

  return (
    <main className="formulaSubstitutionPage">
      <button
        type="button"
        className="backButton"
        onClick={() =>
          router.push("/maths/s2/chapter-4")
        }
      >
        ← Back to Chapter 4
      </button>

      <header className="pageHeader">
        <p className="eyebrow">
          S2 MATHEMATICS · CHAPTER 4 · SECTION 2
        </p>

        <h1>Formulae and Substitution</h1>

        <p className="introduction">
          Learn how formulae describe relationships
          between variables and how to substitute
          numerical values accurately.
        </p>
      </header>

      <LessonCard
        number="1"
        title="What is a formula?"
      >
        <p>
          A formula is an equation showing the
          relationship between two or more variables.
        </p>

        <FormulaBox>
          P = 2l + 2w
        </FormulaBox>

        <p>
          This formula calculates the perimeter{" "}
          <strong>P</strong> of a rectangle using its
          length <strong>l</strong> and width{" "}
          <strong>w</strong>.
        </p>

        <ImportantNote>
          The letters in a formula represent quantities
          that may have different numerical values.
        </ImportantNote>
      </LessonCard>

      <LessonCard
        number="2"
        title="The subject of a formula"
      >
        <p>
          The subject is the variable that stands alone
          on one side of the equals sign.
        </p>

        <FormulaBox>
          d = vt
        </FormulaBox>

        <p>
          In this formula, <strong>d</strong> is the
          subject. The formula calculates distance from
          speed <strong>v</strong> and time{" "}
          <strong>t</strong>.
        </p>

        <div className="comparisonGrid">
          <div className="informationBox">
            <span className="boxLabel">
              Formula
            </span>

            <span className="largeFormula">
              A = lw
            </span>

            <p>
              The subject is <strong>A</strong>.
            </p>
          </div>

          <div className="informationBox">
            <span className="boxLabel">
              Formula
            </span>

            <span className="largeFormula">
              v = u + at
            </span>

            <p>
              The subject is <strong>v</strong>.
            </p>
          </div>
        </div>
      </LessonCard>

      <LessonCard
        number="3"
        title="How to substitute values"
      >
        <p>
          Substitution means replacing each variable
          with its given numerical value.
        </p>

        <div className="stepsGrid">
          <Step
            number="1"
            text="Write down the formula."
          />

          <Step
            number="2"
            text="Replace each variable with its value."
          />

          <Step
            number="3"
            text="Use brackets around negative values."
          />

          <Step
            number="4"
            text="Calculate using the correct order of operations."
          />

          <Step
            number="5"
            text="Write the answer with the correct unit."
          />
        </div>

        <WorkedExample title="Example 1">
          <p>
            Find the perimeter when l = 7 cm and
            w = 3 cm.
          </p>

          <CalculationLine>
            P = 2l + 2w
          </CalculationLine>

          <CalculationLine>
            P = 2(7) + 2(3)
          </CalculationLine>

          <CalculationLine>
            P = 14 + 6
          </CalculationLine>

          <CalculationLine>
            P = 20 cm
          </CalculationLine>
        </WorkedExample>
      </LessonCard>

      <LessonCard
        number="4"
        title="Substitution involving negative numbers"
      >
        <p>
          Always put a substituted negative number
          inside brackets. This is especially important
          when the variable is squared.
        </p>

        <WorkedExample title="Example 2">
          <p>
            Find y when x = −2.
          </p>

          <CalculationLine>
            y = 3x² − 2x + 4
          </CalculationLine>

          <CalculationLine>
            y = 3(−2)² − 2(−2) + 4
          </CalculationLine>

          <CalculationLine>
            y = 3(4) + 4 + 4
          </CalculationLine>

          <CalculationLine>
            y = 20
          </CalculationLine>
        </WorkedExample>

        <ImportantNote>
          (−2)² = 4 because the complete negative
          number is being squared.
        </ImportantNote>

        <div className="comparisonGrid">
          <div className="correctBox">
            <span className="boxLabel">
              ✓ Correct
            </span>

            <span className="largeFormula">
              (−3)² = 9
            </span>
          </div>

          <div className="wrongBox">
            <span className="boxLabel">
              ✕ Common error
            </span>

            <span className="largeFormula">
              −3² = −9
            </span>
          </div>
        </div>
      </LessonCard>

      <LessonCard
        number="5"
        title="Substitution involving fractions"
      >
        <p>
          Replace the variables first, then simplify
          the numerator and denominator separately.
        </p>

        <WorkedExample title="Example 3">
          <p>
            Find r when v = 6 and u = 9.
          </p>

          <CalculationLine>
            r =
            <MathFraction top="v²" bottom="u" />
          </CalculationLine>

          <CalculationLine>
            r =
            <MathFraction top="6²" bottom="9" />
          </CalculationLine>

          <CalculationLine>
            r =
            <MathFraction top="36" bottom="9" />
          </CalculationLine>

          <CalculationLine>
            r = 4
          </CalculationLine>
        </WorkedExample>
      </LessonCard>

      <LessonCard
        number="6"
        title="Using formulae with units"
      >
        <p>
          Check the units given in the question before
          substituting. Convert incompatible units
          first.
        </p>

        <WorkedExample title="Example 4">
          <p>
            A vehicle travels at 12 m/s for 8 seconds.
            Find the distance travelled.
          </p>

          <CalculationLine>
            d = vt
          </CalculationLine>

          <CalculationLine>
            d = 12 × 8
          </CalculationLine>

          <CalculationLine>
            d = 96 m
          </CalculationLine>
        </WorkedExample>

        <ImportantNote>
          A numerical answer is incomplete when the
          quantity requires a unit.
        </ImportantNote>
      </LessonCard>

      <section className="summaryCard">
        <p className="summaryLabel">
          SECTION SUMMARY
        </p>

        <h2>Substitution checklist</h2>

        <div className="summaryGrid">
          <SummaryItem
            number="1"
            text="Identify the formula and its subject."
          />

          <SummaryItem
            number="2"
            text="Replace every variable with the given value."
          />

          <SummaryItem
            number="3"
            text="Use brackets around negative numbers."
          />

          <SummaryItem
            number="4"
            text="Apply powers before multiplication and addition."
          />

          <SummaryItem
            number="5"
            text="Include the correct unit in the final answer."
          />
        </div>
      </section>

      <section className="questionCard">
        <p className="questionLabel">
          CHECK YOUR UNDERSTANDING
        </p>

        <h2>Find T when a = −2 and b = 5.</h2>

        <FormulaBox>
          T = 3a² − 2b
        </FormulaBox>

        <div className="answerGrid">
          {quizAnswers.map((answer) => {
            const isSelected =
              selectedAnswer === answer.id;

            const showCorrect =
              answered &&
              answer.id === correctAnswer;

            const showWrong =
              answered &&
              isSelected &&
              answer.id !== correctAnswer;

            return (
              <button
                key={answer.id}
                type="button"
                disabled={answered}
                onClick={() =>
                  setSelectedAnswer(answer.id)
                }
                className={[
                  "answerButton",
                  showCorrect
                    ? "correctAnswer"
                    : "",
                  showWrong
                    ? "wrongAnswer"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="answerLetter">
                  {answer.id.toUpperCase()}
                </span>

                {answer.text}
              </button>
            );
          })}
        </div>

        {answered && (
          <div
            className={
              isCorrect
                ? "feedback correctFeedback"
                : "feedback wrongFeedback"
            }
          >
            <strong>
              {isCorrect
                ? "Correct!"
                : "Not quite."}
            </strong>

            <span>
              {" "}
              T = 3(−2)² − 2(5) = 3(4) − 10 =
              12 − 10 = 2.
            </span>
          </div>
        )}

        {answered && (
          <button
            type="button"
            className="tryAgainButton"
            onClick={() =>
              setSelectedAnswer(null)
            }
          >
            Try again
          </button>
        )}
      </section>

      <section className="commonMistakes">
        <h2>Common mistakes</h2>

        <ul>
          <li>
            Substituting a negative value without
            brackets.
          </li>

          <li>
            Calculating multiplication before a power.
          </li>

          <li>
            Replacing only some of the variables.
          </li>

          <li>
            Using the wrong value for a variable with a
            similar letter.
          </li>

          <li>
            Forgetting to convert units before
            substituting.
          </li>

          <li>
            Leaving the unit out of the final answer.
          </li>
        </ul>
      </section>

      <button
        type="button"
        className="completeButton"
        onClick={() =>
          router.push("/maths/s2/chapter-4")
        }
      >
        Return to Chapter 4 →
      </button>

      <style jsx global>{`
        .formulaSubstitutionPage {
          max-width: 1050px;
          width: calc(100% - 40px);
          margin: 42px auto 70px;
          color: #172033;
        }

        .formulaSubstitutionPage .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: none;
          background: transparent;
          color: #047857;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .formulaSubstitutionPage .pageHeader {
          margin-bottom: 30px;
        }

        .formulaSubstitutionPage .eyebrow,
        .formulaSubstitutionPage .questionLabel,
        .formulaSubstitutionPage .summaryLabel {
          margin: 0 0 8px;
          color: #4f46e5;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .formulaSubstitutionPage h1 {
          margin: 0 0 10px;
          font-size: clamp(38px, 6vw, 56px);
          line-height: 1.15;
        }

        .formulaSubstitutionPage .introduction {
          max-width: 850px;
          margin: 0;
          color: #64748b;
          font-size: 20px;
          line-height: 1.65;
        }

        .formulaLessonCard {
          margin-bottom: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          background: white;
          box-shadow:
            0 6px 18px rgba(15, 23, 42, 0.04);
        }

        .formulaLessonHeading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .formulaLessonNumber {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #ecfdf5;
          color: #047857;
          font-size: 23px;
          font-weight: 900;
        }

        .formulaLessonCard h2,
        .questionCard h2,
        .summaryCard h2,
        .commonMistakes h2 {
          margin: 0;
          font-size: 29px;
          line-height: 1.25;
        }

        .formulaLessonCard p,
        .commonMistakes li {
          color: #475569;
          font-size: 17px;
          line-height: 1.7;
        }

        .formulaBox {
          margin: 22px 0;
          padding: 25px;
          overflow-x: auto;
          border: 1px solid #a7f3d0;
          border-radius: 18px;
          background: #f0fdf4;
          color: #166534;
          text-align: center;
          font-family:
            Cambria Math, Times New Roman, serif;
          font-size: 32px;
          font-weight: 700;
        }

        .importantFormulaNote {
          margin-top: 20px;
          padding: 18px 20px;
          border-left: 5px solid #f59e0b;
          border-radius: 14px;
          background: #fffbeb;
          color: #92400e;
          font-size: 16px;
          line-height: 1.65;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(230px, 1fr));
          gap: 16px;
          margin-top: 22px;
        }

        .informationBox,
        .correctBox,
        .wrongBox {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 22px;
          border-radius: 16px;
          text-align: center;
        }

        .informationBox {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
        }

        .correctBox {
          border: 1px solid #bbf7d0;
          background: #f0fdf4;
        }

        .wrongBox {
          border: 1px solid #fecaca;
          background: #fff7f7;
        }

        .boxLabel {
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.05em;
        }

        .informationBox .boxLabel {
          color: #2563eb;
        }

        .correctBox .boxLabel {
          color: #15803d;
        }

        .wrongBox .boxLabel {
          color: #dc2626;
        }

        .largeFormula {
          color: #172033;
          font-family:
            Cambria Math, Times New Roman, serif;
          font-size: 27px;
          font-weight: 700;
        }

        .informationBox p {
          margin: 0;
          font-size: 15px;
        }

        .stepsGrid {
          display: grid;
          gap: 12px;
          margin-top: 22px;
        }

        .formulaStep {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px 17px;
          border-radius: 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 16px;
          line-height: 1.5;
        }

        .formulaStepNumber {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #059669;
          color: white;
          font-weight: 900;
        }

        .formulaWorkedExample {
          margin-top: 22px;
          padding: 24px;
          border: 1px solid #c7d2fe;
          border-radius: 18px;
          background: #f8faff;
        }

        .formulaWorkedExampleTitle {
          display: block;
          margin-bottom: 12px;
          color: #4f46e5;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.06em;
        }

        .formulaWorkedExample p {
          margin-top: 0;
          text-align: center;
        }

        .calculationLine {
          min-height: 47px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #172033;
          font-family:
            Cambria Math, Times New Roman, serif;
          font-size: 27px;
          white-space: nowrap;
        }

        .mathFraction {
          display: inline-flex;
          flex-direction: column;
          align-items: stretch;
          vertical-align: middle;
          text-align: center;
          line-height: 1.15;
        }

        .fractionTop {
          padding: 0 7px 5px;
          border-bottom: 2px solid currentColor;
        }

        .fractionBottom {
          padding: 5px 7px 0;
        }

        .summaryCard {
          margin: 28px 0 22px;
          padding: 30px;
          border: 1px solid #c7d2fe;
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            #eef2ff,
            #f5f3ff
          );
        }

        .summaryGrid {
          display: grid;
          gap: 12px;
          margin-top: 22px;
        }

        .formulaSummaryItem {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.82);
          color: #334155;
          font-size: 16px;
          line-height: 1.5;
        }

        .formulaSummaryNumber {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #4f46e5;
          color: white;
          font-weight: 900;
        }

        .questionCard {
          margin-top: 22px;
          padding: 30px;
          border: 1px solid #bfdbfe;
          border-radius: 24px;
          background: white;
        }

        .answerGrid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(190px, 1fr));
          gap: 14px;
          margin-top: 24px;
        }

        .answerButton {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 16px;
          border: 2px solid #dbeafe;
          border-radius: 16px;
          background: white;
          color: #172033;
          font-size: 20px;
          font-weight: 800;
          cursor: pointer;
        }

        .answerButton:hover:not(:disabled) {
          border-color: #60a5fa;
          background: #eff6ff;
        }

        .answerButton:disabled {
          cursor: default;
        }

        .answerLetter {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #eef2ff;
          color: #4f46e5;
          font-size: 15px;
          font-weight: 900;
        }

        .answerButton.correctAnswer {
          border-color: #22c55e;
          background: #f0fdf4;
          color: #166534;
        }

        .answerButton.wrongAnswer {
          border-color: #ef4444;
          background: #fef2f2;
          color: #991b1b;
        }

        .feedback {
          margin-top: 18px;
          padding: 18px;
          border-radius: 14px;
          font-size: 16px;
          line-height: 1.6;
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
          margin-top: 16px;
          padding: 11px 18px;
          border: 1px solid #4f46e5;
          border-radius: 12px;
          background: white;
          color: #4338ca;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .commonMistakes {
          margin-top: 22px;
          padding: 30px;
          border: 1px solid #fed7aa;
          border-radius: 24px;
          background: #fff7ed;
        }

        .commonMistakes ul {
          margin: 18px 0 0;
          padding-left: 24px;
        }

        .completeButton {
          width: 100%;
          margin-top: 24px;
          padding: 16px 24px;
          border: none;
          border-radius: 16px;
          background: #059669;
          color: white;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        @media (max-width: 640px) {
          .formulaSubstitutionPage {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .formulaLessonCard,
          .questionCard,
          .summaryCard,
          .commonMistakes {
            padding: 22px;
          }

          .formulaLessonHeading {
            align-items: flex-start;
          }

          .formulaLessonCard h2,
          .questionCard h2,
          .summaryCard h2 {
            font-size: 25px;
          }

          .calculationLine,
          .formulaBox {
            font-size: 23px;
          }
        }
      `}</style>
    </main>
  );
}

function LessonCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="formulaLessonCard">
      <div className="formulaLessonHeading">
        <span className="formulaLessonNumber">
          {number}
        </span>

        <h2>{title}</h2>
      </div>

      {children}
    </section>
  );
}

function FormulaBox({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="formulaBox">{children}</div>
  );
}

function ImportantNote({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="importantFormulaNote">
      <strong>Important: </strong>
      {children}
    </div>
  );
}

function WorkedExample({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="formulaWorkedExample">
      <span className="formulaWorkedExampleTitle">
        {title}
      </span>

      {children}
    </div>
  );
}

function CalculationLine({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="calculationLine">
      {children}
    </div>
  );
}

function MathFraction({
  top,
  bottom,
}: {
  top: ReactNode;
  bottom: ReactNode;
}) {
  return (
    <span className="mathFraction">
      <span className="fractionTop">{top}</span>
      <span className="fractionBottom">
        {bottom}
      </span>
    </span>
  );
}

function Step({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="formulaStep">
      <span className="formulaStepNumber">
        {number}
      </span>

      <span>{text}</span>
    </div>
  );
}

function SummaryItem({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="formulaSummaryItem">
      <span className="formulaSummaryNumber">
        {number}
      </span>

      <span>{text}</span>
    </div>
  );
}