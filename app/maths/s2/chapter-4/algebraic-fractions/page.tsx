"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

const answerOptions = [
  {
    id: "a",
    content: (
      <MathFraction top="2x" bottom="3y" />
    ),
  },
  {
    id: "b",
    content: (
      <MathFraction top="2x" bottom="3" />
    ),
  },
  {
    id: "c",
    content: (
      <MathFraction top="3x" bottom="2y" />
    ),
  },
];

const correctAnswer = "a";

export default function AlgebraicFractionsPage() {
  const router = useRouter();

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const answered = selectedAnswer !== null;
  const isCorrect =
    selectedAnswer === correctAnswer;

  return (
    <main className="algebraicFractionsPage">
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
          S2 MATHEMATICS · CHAPTER 4 · SECTION 1
        </p>

        <h1>Algebraic Fractions</h1>

        <p className="introduction">
          Learn how to simplify algebraic fractions
          and perform multiplication, division,
          addition and subtraction.
        </p>
      </header>

      <LessonCard number="1" title="What is an algebraic fraction?">
        <p>
          An algebraic fraction is a fraction containing
          one or more variables in its numerator,
          denominator or both.
        </p>

        <MathPanel>
          <MathFraction top="2x + 3" bottom="x − 4" />
        </MathPanel>

        <ImportantNote>
          The denominator of a fraction must never be
          zero. In this example,{" "}
          <strong>x ≠ 4</strong>.
        </ImportantNote>
      </LessonCard>

      <LessonCard number="2" title="Simplifying algebraic fractions">
        <p>
          Simplify an algebraic fraction by factorizing
          the numerator and denominator, then cancelling
          common factors.
        </p>

        <WorkedExample title="Example 1">
          <MathLine>
            <MathFraction
              top={
                <>
                  12x<sup>2</sup>y
                </>
              }
              bottom={
                <>
                  18xy<sup>2</sup>
                </>
              }
            />
          </MathLine>

          <MathLine>
            =
            <MathFraction
              top="2 × 2 × 3 × x × x × y"
              bottom="2 × 3 × 3 × x × y × y"
            />
          </MathLine>

          <MathLine>
            =
            <MathFraction top="2x" bottom="3y" />
          </MathLine>

          <p className="restriction">
            Restrictions: x ≠ 0 and y ≠ 0
          </p>
        </WorkedExample>

        <ImportantNote>
          You may cancel common{" "}
          <strong>factors</strong>, but you cannot
          cancel separate terms joined by addition or
          subtraction.
        </ImportantNote>

        <div className="comparisonGrid">
          <div className="correctExample">
            <span className="exampleLabel">✓ Correct</span>

            <MathLine>
              <MathFraction top="6x" bottom="9x" />
              =
              <MathFraction top="2" bottom="3" />
            </MathLine>

            <p>
              The factor x appears in the entire
              numerator and denominator.
            </p>
          </div>

          <div className="wrongExample">
            <span className="exampleLabel">✕ Incorrect</span>

            <MathLine>
              <MathFraction top="x + 3" bottom="x" />
              ≠ 3
            </MathLine>

            <p>
              The x in the numerator is one term of a
              sum, not a common factor.
            </p>
          </div>
        </div>
      </LessonCard>

      <LessonCard
        number="3"
        title="Multiplying algebraic fractions"
      >
        <p>
          Multiply the numerators together and multiply
          the denominators together. Factorize and
          cancel common factors whenever possible.
        </p>

        <WorkedExample title="Example 2">
          <MathLine>
            <MathFraction top="2x" bottom="3y" />
            ×
            <MathFraction top="9y" bottom="4" />
          </MathLine>

          <MathLine>
            =
            <MathFraction top="18xy" bottom="12y" />
          </MathLine>

          <MathLine>
            =
            <MathFraction top="3x" bottom="2" />
          </MathLine>
        </WorkedExample>

        <p className="method">
          Multiply → factorize → cancel → simplify
        </p>
      </LessonCard>

      <LessonCard
        number="4"
        title="Dividing algebraic fractions"
      >
        <p>
          To divide by a fraction, multiply by its
          reciprocal. This means turning the second
          fraction upside down.
        </p>

        <WorkedExample title="Example 3">
          <MathLine>
            <MathFraction top="x" bottom="5" />
            ÷
            <MathFraction top="2x" bottom="15" />
          </MathLine>

          <MathLine>
            =
            <MathFraction top="x" bottom="5" />
            ×
            <MathFraction top="15" bottom="2x" />
          </MathLine>

          <MathLine>
            =
            <MathFraction top="3" bottom="2" />
          </MathLine>
        </WorkedExample>

        <ImportantNote>
          Only the fraction immediately after the
          division sign is replaced by its reciprocal.
        </ImportantNote>
      </LessonCard>

      <LessonCard
        number="5"
        title="Adding and subtracting algebraic fractions"
      >
        <h3>Same denominator</h3>

        <p>
          When the denominators are the same, add or
          subtract the numerators and keep the common
          denominator.
        </p>

        <MathPanel>
          <MathLine>
            <MathFraction top="5a" bottom="7b" />
            −
            <MathFraction top="2a" bottom="7b" />
            =
            <MathFraction top="3a" bottom="7b" />
          </MathLine>
        </MathPanel>

        <h3>Different denominators</h3>

        <p>
          Find a common denominator before combining
          the numerators.
        </p>

        <WorkedExample title="Example 4">
          <MathLine>
            <MathFraction top="1" bottom="2x" />
            +
            <MathFraction top="3" bottom="5x" />
          </MathLine>

          <MathLine>
            =
            <MathFraction top="5" bottom="10x" />
            +
            <MathFraction top="6" bottom="10x" />
          </MathLine>

          <MathLine>
            =
            <MathFraction top="11" bottom="10x" />
          </MathLine>

          <p className="restriction">
            Restriction: x ≠ 0
          </p>
        </WorkedExample>
      </LessonCard>

      <section className="summaryCard">
        <p className="summaryLabel">
          SECTION SUMMARY
        </p>

        <h2>Remember these rules</h2>

        <div className="summaryGrid">
          <SummaryItem
            number="1"
            text="Factorize before cancelling common factors."
          />

          <SummaryItem
            number="2"
            text="Never allow a denominator to equal zero."
          />

          <SummaryItem
            number="3"
            text="Multiply numerators and denominators separately."
          />

          <SummaryItem
            number="4"
            text="Change division into multiplication by the reciprocal."
          />

          <SummaryItem
            number="5"
            text="Use a common denominator before adding or subtracting."
          />
        </div>
      </section>

      <section className="questionCard">
        <p className="questionLabel">
          CHECK YOUR UNDERSTANDING
        </p>

        <h2>Simplify the following fraction.</h2>

        <MathPanel>
          <MathFraction
            top={
              <>
                12x<sup>2</sup>y
              </>
            }
            bottom={
              <>
                18xy<sup>2</sup>
              </>
            }
          />
        </MathPanel>

        <p className="questionRestriction">
          Assume x ≠ 0 and y ≠ 0.
        </p>

        <div className="answerGrid">
          {answerOptions.map((option) => {
            const optionIsSelected =
              selectedAnswer === option.id;

            const optionIsCorrect =
              answered &&
              option.id === correctAnswer;

            const optionIsWrong =
              answered &&
              optionIsSelected &&
              option.id !== correctAnswer;

            return (
              <button
                key={option.id}
                type="button"
                disabled={answered}
                onClick={() =>
                  setSelectedAnswer(option.id)
                }
                className={[
                  "answerButton",
                  optionIsCorrect
                    ? "correctAnswer"
                    : "",
                  optionIsWrong
                    ? "wrongAnswer"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="answerLetter">
                  {option.id.toUpperCase()}
                </span>

                {option.content}
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
              {isCorrect
                ? " Divide the numerator and denominator by the common factors 6xy."
                : " Factorize both parts and cancel the common factors 6xy. The answer is 2x ÷ 3y."}
            </span>
          </div>
        )}

        {answered && (
          <button
            type="button"
            className="tryAgainButton"
            onClick={() => setSelectedAnswer(null)}
          >
            Try again
          </button>
        )}
      </section>

      <section className="commonMistakes">
        <h2>Common mistakes</h2>

        <ul>
          <li>
            Cancelling terms across addition or
            subtraction.
          </li>

          <li>
            Forgetting to turn the second fraction
            upside down when dividing.
          </li>

          <li>
            Adding denominators when adding fractions.
          </li>

          <li>
            Forgetting the values that make a
            denominator equal to zero.
          </li>

          <li>
            Failing to factorize completely before
            cancelling.
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
        .algebraicFractionsPage {
          max-width: 1050px;
          width: calc(100% - 40px);
          margin: 42px auto 70px;
          color: #172033;
        }

        .algebraicFractionsPage .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: none;
          background: transparent;
          color: #047857;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .algebraicFractionsPage .pageHeader {
          margin-bottom: 30px;
        }

        .algebraicFractionsPage .eyebrow,
        .algebraicFractionsPage .questionLabel,
        .algebraicFractionsPage .summaryLabel {
          margin: 0 0 8px;
          color: #4f46e5;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .algebraicFractionsPage h1 {
          margin: 0 0 10px;
          font-size: clamp(38px, 6vw, 56px);
          line-height: 1.15;
        }

        .algebraicFractionsPage .introduction {
          max-width: 850px;
          margin: 0;
          color: #64748b;
          font-size: 20px;
          line-height: 1.65;
        }

        .algebraFractionsLessonCard {
          margin-bottom: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          background: white;
          box-shadow: 0 6px 18px
            rgba(15, 23, 42, 0.04);
        }

        .lessonHeading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .lessonNumber {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #eef2ff;
          color: #4f46e5;
          font-size: 23px;
          font-weight: 900;
        }

        .algebraFractionsLessonCard h2,
        .questionCard h2,
        .summaryCard h2,
        .commonMistakes h2 {
          margin: 0;
          font-size: 29px;
          line-height: 1.25;
        }

        .algebraFractionsLessonCard h3 {
          margin: 28px 0 10px;
          font-size: 22px;
        }

        .algebraFractionsLessonCard p,
        .commonMistakes li {
          color: #475569;
          font-size: 17px;
          line-height: 1.7;
        }

        .mathPanel {
          margin: 22px 0;
          padding: 24px;
          overflow-x: auto;
          border: 1px solid #c7d2fe;
          border-radius: 18px;
          background: #f8faff;
          text-align: center;
          font-size: 27px;
          font-family:
            Cambria Math, Times New Roman, serif;
        }

        .mathLine {
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          font-size: 26px;
          font-family:
            Cambria Math, Times New Roman, serif;
          white-space: nowrap;
        }

        .mathFraction {
          display: inline-flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
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

        .importantNote {
          margin-top: 20px;
          padding: 18px 20px;
          border-left: 5px solid #f59e0b;
          border-radius: 14px;
          background: #fffbeb;
          color: #92400e;
          font-size: 16px;
          line-height: 1.65;
        }

        .workedExample {
          margin-top: 22px;
          padding: 24px;
          border-radius: 18px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .workedExampleTitle {
          display: block;
          margin-bottom: 14px;
          color: #15803d;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.06em;
        }

        .restriction {
          margin: 12px 0 0 !important;
          color: #64748b !important;
          text-align: center;
          font-size: 15px !important;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-top: 22px;
        }

        .correctExample,
        .wrongExample {
          padding: 20px;
          border-radius: 16px;
        }

        .correctExample {
          border: 1px solid #bbf7d0;
          background: #f0fdf4;
        }

        .wrongExample {
          border: 1px solid #fecaca;
          background: #fff7f7;
        }

        .exampleLabel {
          font-size: 16px;
          font-weight: 900;
        }

        .correctExample .exampleLabel {
          color: #15803d;
        }

        .wrongExample .exampleLabel {
          color: #dc2626;
        }

        .correctExample p,
        .wrongExample p {
          margin-bottom: 0;
          font-size: 15px;
        }

        .method {
          margin-bottom: 0 !important;
          color: #4f46e5 !important;
          text-align: center;
          font-weight: 900;
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

        .summaryItem {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.8);
          color: #334155;
          font-size: 16px;
          line-height: 1.5;
        }

        .summaryNumber {
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

        .questionRestriction {
          color: #64748b;
          text-align: center;
        }

        .answerGrid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(190px, 1fr));
          gap: 14px;
          margin-top: 24px;
        }

        .answerButton {
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 16px;
          border: 2px solid #dbeafe;
          border-radius: 16px;
          background: white;
          color: #172033;
          font-size: 21px;
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
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #eef2ff;
          color: #4f46e5;
          font-family: Arial, sans-serif;
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
          .algebraicFractionsPage {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .algebraFractionsLessonCard,
          .questionCard,
          .summaryCard,
          .commonMistakes {
            padding: 22px;
          }

          .lessonHeading {
            align-items: flex-start;
          }

          .algebraFractionsLessonCard h2,
          .questionCard h2,
          .summaryCard h2 {
            font-size: 25px;
          }

          .mathLine,
          .mathPanel {
            font-size: 22px;
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
    <section className="algebraFractionsLessonCard">
      <div className="lessonHeading">
        <span className="lessonNumber">
          {number}
        </span>

        <h2>{title}</h2>
      </div>

      {children}
    </section>
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

function MathPanel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mathPanel">{children}</div>
  );
}

function MathLine({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mathLine">{children}</div>
  );
}

function ImportantNote({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="importantNote">
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
    <div className="workedExample">
      <span className="workedExampleTitle">
        {title}
      </span>

      {children}
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
    <div className="summaryItem">
      <span className="summaryNumber">
        {number}
      </span>

      <span>{text}</span>
    </div>
  );
}
