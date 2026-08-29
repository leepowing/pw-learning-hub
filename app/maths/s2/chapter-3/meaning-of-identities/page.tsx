"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import katex from "katex";

function MathFormula({
  formula,
  display = true,
}: {
  formula: string;
  display?: boolean;
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(formula, {
          throwOnError: false,
          displayMode: display,
          strict: false,
        }),
      }}
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        padding: "8px 0",
      }}
    />
  );
}

const quizOptions = [
  "Yes — it is an identity",
  "No — it is true only for one value",
];

export default function MeaningOfIdentitiesPage() {
  const router = useRouter();

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const correctAnswer =
    "Yes — it is an identity";

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() =>
          router.push("/maths/s2/chapter-3")
        }
      >
        ← Back to Chapter 3
      </button>

      <header className="hero">
        <p className="eyebrow">SECTION 1</p>

        <h1>Meaning of Identities</h1>

        <p className="intro">
          Learn the difference between an equation and an
          identity, verify identities by expansion and find
          unknown coefficients by comparing like terms.
        </p>
      </header>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge">1</span>

          <div>
            <h2>What is an identity?</h2>

            <p>
              An <strong>identity</strong> is an equality that
              is true for every permitted value of its
              variable.
            </p>

            <p>
              The symbol <strong>≡</strong> can be used to show
              that two expressions are identical.
            </p>
          </div>
        </div>

        <div className="formulaBox purple">
          <p className="formulaLabel">IDENTITY</p>

          <MathFormula
            formula={String.raw`
              3(x+2)+x
              \equiv
              4x+6
            `}
          />
        </div>

        <div className="important">
          The identity is true for every value of{" "}
          <strong>x</strong> because the left-hand side
          simplifies to exactly the same expression as the
          right-hand side.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge greenBadge">2</span>

          <div>
            <h2>Equation or identity?</h2>

            <p>
              An equation may be true only for particular
              values. An identity is true for every permitted
              value.
            </p>
          </div>
        </div>

        <div className="comparisonGrid">
          <article className="equationCard">
            <p className="comparisonLabel">EQUATION</p>

            <MathFormula
              formula={String.raw`2x+3=7`}
            />

            <p>
              This is true only when{" "}
              <strong>x = 2</strong>.
            </p>
          </article>

          <article className="identityCard">
            <p className="comparisonLabel">
              IDENTITY
            </p>

            <MathFormula
              formula={String.raw`
                2(x+1)\equiv2x+2
              `}
            />

            <p>
              This is true for every value of{" "}
              <strong>x</strong>.
            </p>
          </article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge purpleBadge">3</span>

          <div>
            <h2>Verify an identity</h2>

            <p>
              Expand and simplify the left-hand side and
              right-hand side separately.
            </p>

            <p>
              The statement is an identity if both sides
              simplify to the same expression.
            </p>
          </div>
        </div>

        <div className="methodGrid">
          <article>
            <span>Step 1</span>

            <h3>Expand</h3>

            <p>
              Remove brackets on each side.
            </p>
          </article>

          <article>
            <span>Step 2</span>

            <h3>Collect like terms</h3>

            <p>
              Simplify each expression completely.
            </p>
          </article>

          <article>
            <span>Step 3</span>

            <h3>Compare</h3>

            <p>
              Check whether both simplified sides are
              identical.
            </p>
          </article>
        </div>
      </section>

      <section className="workedExample">
        <p className="exampleLabel">
          WORKED EXAMPLE 1
        </p>

        <h2>Verify the following identity.</h2>

        <div className="questionFormula">
          <MathFormula
            formula={String.raw`
              4(x-2)+3x
              \equiv
              7x-8
            `}
          />
        </div>

        <div className="steps">
          <article>
            <span>Step 1</span>

            <p>Expand the left-hand side.</p>

            <MathFormula
              formula={String.raw`
                4(x-2)+3x
                =4x-8+3x
              `}
            />
          </article>

          <article>
            <span>Step 2</span>

            <p>Collect the like terms.</p>

            <MathFormula
              formula={String.raw`
                4x-8+3x
                =7x-8
              `}
            />
          </article>

          <article>
            <span>Step 3</span>

            <p>Compare both sides.</p>

            <MathFormula
              formula={String.raw`
                \text{L.H.S.}
                =
                \text{R.H.S.}
              `}
            />
          </article>
        </div>

        <div className="answerBox">
          <strong>Conclusion:</strong> Both sides simplify to
          7x − 8, so the statement is an identity.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="numberBadge orangeBadge">4</span>

          <div>
            <h2>Compare coefficients</h2>

            <p>
              If two polynomial expressions form an identity,
              the coefficients of corresponding like terms
              must be equal.
            </p>
          </div>
        </div>

        <div className="formulaBox orange">
          <MathFormula
            formula={String.raw`
              Ax+B
              \equiv
              5x-7
            `}
          />

          <MathFormula
            formula={String.raw`
              A=5,
              \qquad
              B=-7
            `}
          />
        </div>

        <div className="coefficientGrid">
          <article>
            <strong>
              Coefficient of x
            </strong>

            <MathFormula
              formula={String.raw`A=5`}
            />
          </article>

          <article>
            <strong>
              Constant term
            </strong>

            <MathFormula
              formula={String.raw`B=-7`}
            />
          </article>
        </div>

        <div className="important">
          Only compare corresponding like terms. For example,
          an x² coefficient must be compared with another x²
          coefficient.
        </div>
      </section>

      <section className="workedExample orangeExample">
        <p className="exampleLabel">
          WORKED EXAMPLE 2
        </p>

        <h2>Find A, B and C.</h2>

        <div className="questionFormula">
          <MathFormula
            formula={String.raw`
              x(2x-3)+4
              \equiv
              Ax^2+Bx+C
            `}
          />
        </div>

        <div className="steps">
          <article>
            <span>Step 1</span>

            <p>Expand the left-hand side.</p>

            <MathFormula
              formula={String.raw`
                x(2x-3)+4
                =
                2x^2-3x+4
              `}
            />
          </article>

          <article>
            <span>Step 2</span>

            <p>Compare the coefficients.</p>

            <MathFormula
              formula={String.raw`
                2x^2-3x+4
                \equiv
                Ax^2+Bx+C
              `}
            />
          </article>

          <article>
            <span>Step 3</span>

            <p>Match corresponding terms.</p>

            <MathFormula
              formula={String.raw`
                A=2,\quad
                B=-3,\quad
                C=4
              `}
            />
          </article>
        </div>

        <div className="answerBox orangeAnswer">
          <strong>Answer:</strong> A = 2, B = −3 and C = 4.
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">
          CHECK YOUR UNDERSTANDING
        </p>

        <h2>
          Is the following statement an identity?
        </h2>

        <div className="quizFormula">
          <MathFormula
            formula={String.raw`
              5(x-2)+3x
              \equiv
              8x-10
            `}
          />
        </div>

        <div className="optionGrid">
          {quizOptions.map((option) => {
            const answered =
              selectedAnswer !== null;

            const isCorrect =
              option === correctAnswer;

            const isSelected =
              option === selectedAnswer;

            let className = "optionButton";

            if (answered && isCorrect) {
              className += " correctOption";
            } else if (
              answered &&
              isSelected
            ) {
              className += " wrongOption";
            }

            return (
              <button
                key={option}
                type="button"
                className={className}
                disabled={answered}
                onClick={() =>
                  setSelectedAnswer(option)
                }
              >
                {option}
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <div
            className={
              selectedAnswer === correctAnswer
                ? "feedback correctFeedback"
                : "feedback wrongFeedback"
            }
          >
            {selectedAnswer === correctAnswer ? (
              <>
                <strong>Correct.</strong>{" "}
                Expanding the left-hand side gives
                5x − 10 + 3x = 8x − 10, which is
                identical to the right-hand side.
              </>
            ) : (
              <>
                <strong>Not quite.</strong>{" "}
                The left-hand side simplifies to
                8x − 10 for every value of x, so it
                is an identity.
              </>
            )}
          </div>
        )}

        {selectedAnswer && (
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

      <section className="mistakesCard">
        <h2>Common mistakes</h2>

        <ul>
          <li>
            Assuming that every equation is an identity.
          </li>

          <li>
            Checking only one value of the variable.
          </li>

          <li>
            Expanding one side but not simplifying it fully.
          </li>

          <li>
            Comparing coefficients of unlike terms.
          </li>

          <li>
            Losing a negative sign when removing brackets.
          </li>

          <li>
            Forgetting to include a missing term with
            coefficient zero.
          </li>
        </ul>
      </section>

      <section className="summaryCard">
        <div>
          <p className="eyebrow">
            SECTION SUMMARY
          </p>

          <h2>Key ideas</h2>
        </div>

        <div className="summaryGrid">
          <article>
            <strong>Identity</strong>

            <p>
              True for every permitted value of the
              variable.
            </p>
          </article>

          <article>
            <strong>Verification</strong>

            <p>
              Expand and simplify both sides, then
              compare them.
            </p>
          </article>

          <article>
            <strong>Like terms</strong>

            <p>
              Corresponding coefficients must be equal.
            </p>
          </article>

          <article>
            <strong>Unknown constants</strong>

            <p>
              Find them by comparing corresponding
              coefficients.
            </p>
          </article>
        </div>

        <button
          type="button"
          className="finishButton"
          onClick={() =>
            router.push("/maths/s2/chapter-3")
          }
        >
          Complete Section 1 →
        </button>
      </section>

      <style jsx>{`
        .page {
          width: calc(100% - 40px);
          max-width: 1050px;
          margin: 40px auto 70px;
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

        .hero {
          margin-bottom: 30px;
        }

        .eyebrow,
        .formulaLabel,
        .exampleLabel,
        .quizLabel {
          margin: 0 0 7px;
          color: #059669;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.09em;
        }

        h1 {
          margin: 0 0 10px;
          font-size: 44px;
        }

        h2 {
          margin: 0 0 12px;
          font-size: 27px;
        }

        h3 {
          margin: 8px 0;
          font-size: 20px;
        }

        p {
          line-height: 1.65;
        }

        .intro {
          max-width: 820px;
          margin: 0;
          color: #64748b;
          font-size: 20px;
        }

        .lessonCard,
        .workedExample,
        .quizCard,
        .mistakesCard,
        .summaryCard {
          margin-bottom: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          background: white;
          box-shadow:
            0 7px 20px rgba(15, 23, 42, 0.04);
        }

        .sectionHeading {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .numberBadge {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: #eef2ff;
          color: #4338ca;
          font-size: 22px;
          font-weight: 900;
        }

        .greenBadge {
          background: #ecfdf5;
          color: #047857;
        }

        .purpleBadge {
          background: #f5f3ff;
          color: #7c3aed;
        }

        .orangeBadge {
          background: #fff7ed;
          color: #c2410c;
        }

        .formulaBox,
        .questionFormula,
        .quizFormula {
          margin: 22px 0;
          padding: 22px;
          overflow-x: auto;
          border-radius: 17px;
          text-align: center;
          font-size: 20px;
        }

        .formulaBox.purple,
        .questionFormula {
          border: 1px solid #c7d2fe;
          background: #eef2ff;
        }

        .formulaBox.orange {
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .formulaLabel {
          color: #4f46e5;
        }

        .important {
          margin-top: 18px;
          padding: 17px 19px;
          border: 1px solid #fde68a;
          border-radius: 14px;
          background: #fffbeb;
          color: #92400e;
          line-height: 1.65;
        }

        .comparisonGrid,
        .coefficientGrid,
        .summaryGrid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin-top: 22px;
        }

        .comparisonGrid article,
        .coefficientGrid article,
        .summaryGrid article {
          padding: 21px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
          text-align: center;
        }

        .comparisonGrid p,
        .coefficientGrid p,
        .summaryGrid p {
          margin: 0;
          color: #475569;
        }

        .equationCard {
          border-color: #fecaca !important;
          background: #fff7f7 !important;
        }

        .identityCard {
          border-color: #bbf7d0 !important;
          background: #f0fdf4 !important;
        }

        .comparisonLabel {
          color: #64748b !important;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .methodGrid,
        .steps {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 22px;
        }

        .methodGrid article,
        .steps article {
          min-height: 170px;
          padding: 20px;
          box-sizing: border-box;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
          overflow-x: auto;
        }

        .methodGrid span,
        .steps span {
          color: #4f46e5;
          font-weight: 900;
        }

        .methodGrid p,
        .steps p {
          margin: 8px 0;
          color: #475569;
        }

        .workedExample {
          border-color: #c7d2fe;
          background: #fafaff;
        }

        .orangeExample {
          border-color: #fed7aa;
          background: #fffaf5;
        }

        .answerBox {
          margin-top: 16px;
          padding: 17px 20px;
          border-radius: 14px;
          background: #eef2ff;
          color: #312e81;
          font-size: 18px;
        }

        .orangeAnswer {
          background: #ffedd5;
          color: #9a3412;
        }

        .quizCard {
          border-color: #bae6fd;
          background: #f0f9ff;
        }

        .quizLabel {
          color: #0369a1;
        }

        .quizFormula {
          border: 1px solid #bae6fd;
          background: white;
        }

        .optionGrid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 20px;
        }

        .optionButton {
          padding: 15px;
          border: 2px solid #bae6fd;
          border-radius: 14px;
          background: white;
          color: #0f172a;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .optionButton:disabled {
          cursor: default;
          opacity: 1;
        }

        .correctOption {
          border-color: #22c55e;
          background: #dcfce7;
          color: #166534;
        }

        .wrongOption {
          border-color: #ef4444;
          background: #fee2e2;
          color: #991b1b;
        }

        .feedback {
          margin-top: 16px;
          padding: 17px 19px;
          border-radius: 14px;
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
          margin-top: 14px;
          padding: 11px 18px;
          border: 1px solid #0284c7;
          border-radius: 12px;
          background: white;
          color: #0369a1;
          font-weight: 800;
          cursor: pointer;
        }

        .mistakesCard {
          border-color: #fecaca;
          background: #fffafa;
        }

        .mistakesCard ul {
          margin: 16px 0 0;
          padding-left: 25px;
          color: #475569;
          line-height: 1.8;
        }

        .summaryCard {
          border-color: #a7f3d0;
          background: #f0fdf4;
        }

        .summaryGrid article {
          border-color: #bbf7d0;
          background: white;
          text-align: left;
        }

        .summaryGrid strong {
          display: block;
          margin-bottom: 7px;
          color: #166534;
          font-size: 18px;
        }

        .finishButton {
          width: 100%;
          margin-top: 22px;
          padding: 17px 22px;
          border: none;
          border-radius: 15px;
          background: #059669;
          color: white;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        @media (max-width: 760px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 25px;
          }

          h1 {
            font-size: 36px;
          }

          .lessonCard,
          .workedExample,
          .quizCard,
          .mistakesCard,
          .summaryCard {
            padding: 22px;
          }

          .sectionHeading {
            flex-direction: column;
          }

          .comparisonGrid,
          .coefficientGrid,
          .methodGrid,
          .steps,
          .optionGrid,
          .summaryGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}