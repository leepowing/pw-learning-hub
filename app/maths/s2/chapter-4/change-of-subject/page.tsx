"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

const answers = [
  {
    id: "a",
    content: (
      <MathFraction top="C − 7" bottom="3" />
    ),
  },
  {
    id: "b",
    content: (
      <MathFraction top="C + 7" bottom="3" />
    ),
  },
  {
    id: "c",
    content: (
      <MathFraction top="C" bottom="3" />
    ),
  },
];

const correctAnswer = "b";

export default function ChangeOfSubjectPage() {
  const router = useRouter();

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const answered = selectedAnswer !== null;
  const isCorrect =
    selectedAnswer === correctAnswer;

  return (
    <main className="changeSubjectPage">
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
          S2 MATHEMATICS · CHAPTER 4 · SECTION 3
        </p>

        <h1>Change of Subject of a Formula</h1>

        <p className="introduction">
          Learn how to rearrange a formula so that a
          different variable stands alone.
        </p>
      </header>

      <LessonCard
        number="1"
        title="What is the subject?"
      >
        <p>
          The subject of a formula is the variable that
          stands alone on one side of the equals sign.
        </p>

        <FormulaBox>
          P = 5Q − 8
        </FormulaBox>

        <p>
          In this formula, <strong>P</strong> is the
          subject because P stands alone.
        </p>

        <p>
          If we rearrange the formula into:
        </p>

        <FormulaBox>
          Q =
          <MathFraction top="P + 8" bottom="5" />
        </FormulaBox>

        <p>
          <strong>Q</strong> becomes the new subject.
        </p>
      </LessonCard>

      <LessonCard
        number="2"
        title="Use inverse operations"
      >
        <p>
          Changing the subject is similar to solving an
          equation. Apply the same operation to both
          sides of the formula.
        </p>

        <div className="operationGrid">
          <Operation
            operation="Addition"
            inverse="Subtraction"
          />

          <Operation
            operation="Subtraction"
            inverse="Addition"
          />

          <Operation
            operation="Multiplication"
            inverse="Division"
          />

          <Operation
            operation="Division"
            inverse="Multiplication"
          />

          <Operation
            operation="Squaring"
            inverse="Square root"
          />
        </div>

        <ImportantNote>
          Keep both sides balanced by performing the
          same operation on both sides.
        </ImportantNote>
      </LessonCard>

      <LessonCard
        number="3"
        title="Changing the subject in two steps"
      >
        <WorkedExample title="Example 1">
          <p>
            Make <strong>Q</strong> the subject.
          </p>

          <CalculationLine>
            P = 5Q − 8
          </CalculationLine>

          <StepExplanation>
            Add 8 to both sides.
          </StepExplanation>

          <CalculationLine>
            P + 8 = 5Q
          </CalculationLine>

          <StepExplanation>
            Divide both sides by 5.
          </StepExplanation>

          <CalculationLine>
            Q =
            <MathFraction top="P + 8" bottom="5" />
          </CalculationLine>
        </WorkedExample>

        <p className="method">
          Undo addition or subtraction first, then undo
          multiplication or division.
        </p>
      </LessonCard>

      <LessonCard
        number="4"
        title="The required subject is inside brackets"
      >
        <WorkedExample title="Example 2">
          <p>
            Make <strong>x</strong> the subject.
          </p>

          <CalculationLine>
            y = a(x + b)
          </CalculationLine>

          <StepExplanation>
            Divide both sides by a.
          </StepExplanation>

          <CalculationLine>
            <MathFraction top="y" bottom="a" />
            = x + b
          </CalculationLine>

          <StepExplanation>
            Subtract b from both sides.
          </StepExplanation>

          <CalculationLine>
            x =
            <MathFraction top="y" bottom="a" />
            − b
          </CalculationLine>

          <p className="restriction">
            Restriction: a ≠ 0
          </p>
        </WorkedExample>

        <ImportantNote>
          When the required variable is inside
          brackets, remove the operation outside the
          brackets first.
        </ImportantNote>
      </LessonCard>

      <LessonCard
        number="5"
        title="The required subject is in a denominator"
      >
        <WorkedExample title="Example 3">
          <p>
            Make <strong>t</strong> the subject.
          </p>

          <CalculationLine>
            v =
            <MathFraction top="d" bottom="t" />
          </CalculationLine>

          <StepExplanation>
            Multiply both sides by t.
          </StepExplanation>

          <CalculationLine>
            vt = d
          </CalculationLine>

          <StepExplanation>
            Divide both sides by v.
          </StepExplanation>

          <CalculationLine>
            t =
            <MathFraction top="d" bottom="v" />
          </CalculationLine>

          <p className="restriction">
            Restriction: v ≠ 0
          </p>
        </WorkedExample>
      </LessonCard>

      <LessonCard
        number="6"
        title="The required subject is squared"
      >
        <WorkedExample title="Example 4">
          <p>
            Make <strong>r</strong> the subject.
          </p>

          <CalculationLine>
            A = πr²
          </CalculationLine>

          <StepExplanation>
            Divide both sides by π.
          </StepExplanation>

          <CalculationLine>
            <MathFraction top="A" bottom="π" />
            = r²
          </CalculationLine>

          <StepExplanation>
            Take the square root.
          </StepExplanation>

          <CalculationLine>
            r = √
            <span className="rootContent">
              <MathFraction top="A" bottom="π" />
            </span>
          </CalculationLine>
        </WorkedExample>

        <ImportantNote>
          For a length such as a radius, we use the
          positive square root.
        </ImportantNote>
      </LessonCard>

      <LessonCard
        number="7"
        title="Removing an algebraic fraction"
      >
        <WorkedExample title="Example 5">
          <p>
            Make <strong>p</strong> the subject.
          </p>

          <CalculationLine>
            q =
            <MathFraction top="p + r" bottom="s" />
          </CalculationLine>

          <StepExplanation>
            Multiply both sides by s.
          </StepExplanation>

          <CalculationLine>
            sq = p + r
          </CalculationLine>

          <StepExplanation>
            Subtract r from both sides.
          </StepExplanation>

          <CalculationLine>
            p = sq − r
          </CalculationLine>

          <p className="restriction">
            Restriction: s ≠ 0
          </p>
        </WorkedExample>
      </LessonCard>

      <section className="summaryCard">
        <p className="summaryLabel">
          SECTION SUMMARY
        </p>

        <h2>Steps for changing the subject</h2>

        <div className="summaryGrid">
          <SummaryItem
            number="1"
            text="Identify the variable that must become the subject."
          />

          <SummaryItem
            number="2"
            text="Remove operations using their inverse operations."
          />

          <SummaryItem
            number="3"
            text="Perform the same operation on both sides."
          />

          <SummaryItem
            number="4"
            text="Work from the outside towards the required variable."
          />

          <SummaryItem
            number="5"
            text="Check that the new subject stands alone."
          />

          <SummaryItem
            number="6"
            text="State restrictions when a denominator may equal zero."
          />
        </div>
      </section>

      <section className="questionCard">
        <p className="questionLabel">
          CHECK YOUR UNDERSTANDING
        </p>

        <h2>Make F the subject of the formula.</h2>

        <FormulaBox>
          C = 3F − 7
        </FormulaBox>

        <div className="answerGrid">
          {answers.map((answer) => {
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

                <span className="answerFormula">
                  F = {answer.content}
                </span>
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
              Add 7 to both sides to obtain C + 7 =
              3F, then divide both sides by 3.
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
            Changing the sign of a term without
            applying an operation to both sides.
          </li>

          <li>
            Dividing only one term instead of the whole
            side of the formula.
          </li>

          <li>
            Removing operations in the wrong order.
          </li>

          <li>
            Forgetting to multiply when the required
            subject is in a denominator.
          </li>

          <li>
            Forgetting the square root when undoing a
            square.
          </li>

          <li>
            Stopping before the new subject is completely
            isolated.
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
        .changeSubjectPage {
          max-width: 1050px;
          width: calc(100% - 40px);
          margin: 42px auto 70px;
          color: #172033;
        }

        .changeSubjectPage .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: none;
          background: transparent;
          color: #047857;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .changeSubjectPage .pageHeader {
          margin-bottom: 30px;
        }

        .changeSubjectPage .eyebrow,
        .changeSubjectPage .questionLabel,
        .changeSubjectPage .summaryLabel {
          margin: 0 0 8px;
          color: #4f46e5;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .changeSubjectPage h1 {
          margin: 0 0 10px;
          font-size: clamp(38px, 6vw, 56px);
          line-height: 1.15;
        }

        .changeSubjectPage .introduction {
          max-width: 850px;
          margin: 0;
          color: #64748b;
          font-size: 20px;
          line-height: 1.65;
        }

        .subjectLessonCard {
          margin-bottom: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          background: white;
          box-shadow:
            0 6px 18px rgba(15, 23, 42, 0.04);
        }

        .subjectLessonHeading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .subjectLessonNumber {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #f3e8ff;
          color: #7c3aed;
          font-size: 23px;
          font-weight: 900;
        }

        .subjectLessonCard h2,
        .questionCard h2,
        .summaryCard h2,
        .commonMistakes h2 {
          margin: 0;
          font-size: 29px;
          line-height: 1.25;
        }

        .subjectLessonCard p,
        .commonMistakes li {
          color: #475569;
          font-size: 17px;
          line-height: 1.7;
        }

        .subjectFormulaBox {
          margin: 22px 0;
          padding: 25px;
          overflow-x: auto;
          border: 1px solid #d8b4fe;
          border-radius: 18px;
          background: #faf5ff;
          color: #6b21a8;
          text-align: center;
          font-family:
            Cambria Math, Times New Roman, serif;
          font-size: 32px;
          font-weight: 700;
        }

        .operationGrid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(210px, 1fr));
          gap: 14px;
          margin-top: 22px;
        }

        .operationCard {
          padding: 18px;
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          background: #f8f7ff;
          text-align: center;
        }

        .operationName,
        .inverseName {
          display: block;
        }

        .operationName {
          color: #4f46e5;
          font-size: 17px;
          font-weight: 900;
        }

        .inverseArrow {
          display: block;
          margin: 7px 0;
          color: #94a3b8;
          font-size: 20px;
        }

        .inverseName {
          color: #334155;
          font-size: 16px;
          font-weight: 800;
        }

        .importantSubjectNote {
          margin-top: 20px;
          padding: 18px 20px;
          border-left: 5px solid #f59e0b;
          border-radius: 14px;
          background: #fffbeb;
          color: #92400e;
          font-size: 16px;
          line-height: 1.65;
        }

        .subjectWorkedExample {
          margin-top: 22px;
          padding: 24px;
          border: 1px solid #c7d2fe;
          border-radius: 18px;
          background: #f8faff;
        }

        .subjectWorkedExampleTitle {
          display: block;
          margin-bottom: 12px;
          color: #4f46e5;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.06em;
        }

        .subjectWorkedExample p {
          margin-top: 0;
          text-align: center;
        }

        .subjectCalculationLine {
          min-height: 49px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #172033;
          font-family:
            Cambria Math, Times New Roman, serif;
          font-size: 28px;
          white-space: nowrap;
        }

        .stepExplanation {
          margin: 8px auto;
          color: #64748b;
          text-align: center;
          font-size: 15px;
          font-weight: 700;
        }

        .method {
          margin-bottom: 0 !important;
          color: #7c3aed !important;
          text-align: center;
          font-weight: 900;
        }

        .restriction {
          margin: 12px 0 0 !important;
          color: #64748b !important;
          text-align: center;
          font-size: 15px !important;
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

        .rootContent {
          display: inline-flex;
          border-top: 2px solid currentColor;
          padding-top: 3px;
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

        .subjectSummaryItem {
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

        .subjectSummaryNumber {
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
            repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
          margin-top: 24px;
        }

        .answerButton {
          min-height: 90px;
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

        .answerFormula {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family:
            Cambria Math, Times New Roman, serif;
          font-size: 23px;
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
          .changeSubjectPage {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .subjectLessonCard,
          .questionCard,
          .summaryCard,
          .commonMistakes {
            padding: 22px;
          }

          .subjectLessonHeading {
            align-items: flex-start;
          }

          .subjectLessonCard h2,
          .questionCard h2,
          .summaryCard h2 {
            font-size: 25px;
          }

          .subjectCalculationLine,
          .subjectFormulaBox {
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
    <section className="subjectLessonCard">
      <div className="subjectLessonHeading">
        <span className="subjectLessonNumber">
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
    <div className="subjectFormulaBox">
      {children}
    </div>
  );
}

function ImportantNote({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="importantSubjectNote">
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
    <div className="subjectWorkedExample">
      <span className="subjectWorkedExampleTitle">
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
    <div className="subjectCalculationLine">
      {children}
    </div>
  );
}

function StepExplanation({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="stepExplanation">
      ↓ {children}
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

function Operation({
  operation,
  inverse,
}: {
  operation: string;
  inverse: string;
}) {
  return (
    <div className="operationCard">
      <span className="operationName">
        {operation}
      </span>

      <span className="inverseArrow">↕</span>

      <span className="inverseName">
        {inverse}
      </span>
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
    <div className="subjectSummaryItem">
      <span className="subjectSummaryNumber">
        {number}
      </span>

      <span>{text}</span>
    </div>
  );
}