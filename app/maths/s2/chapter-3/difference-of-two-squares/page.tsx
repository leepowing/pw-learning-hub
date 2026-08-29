"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import katex from "katex";

function MathFormula({
  expression,
  displayMode = true,
}: {
  expression: string;
  displayMode?: boolean;
}) {
  return (
    <span
      className={displayMode ? "math-display" : "math-inline"}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expression, {
          throwOnError: false,
          displayMode,
        }),
      }}
    />
  );
}

const quizOptions = [
  {
    label: String.raw`(x+7)(x-7)`,
    correct: true,
  },
  {
    label: String.raw`(x+49)(x-1)`,
    correct: false,
  },
  {
    label: String.raw`(x-7)^2`,
    correct: false,
  },
];

export default function DifferenceOfTwoSquaresPage() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] =
    useState<number | null>(null);

  const selectedOption =
    selectedAnswer === null
      ? null
      : quizOptions[selectedAnswer];

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s2/chapter-3")}
      >
        ← Back to Chapter 3
      </button>

      <header className="pageHeader">
        <p className="eyebrow">
          S2 MATHEMATICS · CHAPTER 3 · SECTION 2
        </p>

        <h1>The Difference of Two Squares Identity</h1>

        <p className="introduction">
          Learn how to recognise, expand and factorise an
          expression involving the difference of two perfect
          squares.
        </p>
      </header>

      <section className="identityHero">
        <p className="smallLabel">KEY IDENTITY</p>

        <MathFormula
          expression={String.raw`
            (a+b)(a-b)\equiv a^2-b^2
          `}
        />

        <p>
          The product of a sum and a difference gives the
          difference of two squares.
        </p>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">1</span>

          <div>
            <h2>Where does the identity come from?</h2>
            <p>
              Expand the two brackets using the distributive
              property.
            </p>
          </div>
        </div>

        <div className="workingBox">
          <MathFormula
            expression={String.raw`
              \begin{aligned}
              (a+b)(a-b)
                &=a(a-b)+b(a-b)\\
                &=a^2-ab+ab-b^2\\
                &=a^2-b^2
              \end{aligned}
            `}
          />

          <p className="workingNote">
            The middle terms{" "}
            <MathFormula
              expression={String.raw`-ab`}
              displayMode={false}
            />{" "}
            and{" "}
            <MathFormula
              expression={String.raw`+ab`}
              displayMode={false}
            />{" "}
            cancel each other.
          </p>
        </div>

        <div className="importantBox">
          <strong>Important:</strong> the signs inside the two
          brackets must be different:
          <MathFormula
            expression={String.raw`
              (a+b)(a-b)
            `}
          />
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">2</span>

          <div>
            <h2>Recognising a difference of two squares</h2>
            <p>
              Check that both terms are perfect squares and that
              they are separated by subtraction.
            </p>
          </div>
        </div>

        <div className="recognitionGrid">
          <article className="exampleTile">
            <MathFormula
              expression={String.raw`
                x^2-25
              `}
            />

            <p>
              <MathFormula
                expression={String.raw`25=5^2`}
                displayMode={false}
              />
            </p>

            <MathFormula
              expression={String.raw`
                x^2-5^2
              `}
            />
          </article>

          <article className="exampleTile">
            <MathFormula
              expression={String.raw`
                9a^2-16
              `}
            />

            <p>
              <MathFormula
                expression={String.raw`9a^2=(3a)^2`}
                displayMode={false}
              />
              {" and "}
              <MathFormula
                expression={String.raw`16=4^2`}
                displayMode={false}
              />
            </p>

            <MathFormula
              expression={String.raw`
                (3a)^2-4^2
              `}
            />
          </article>

          <article className="exampleTile">
            <MathFormula
              expression={String.raw`
                4m^2-81n^2
              `}
            />

            <p>Both terms are perfect squares.</p>

            <MathFormula
              expression={String.raw`
                (2m)^2-(9n)^2
              `}
            />
          </article>
        </div>

        <div className="warningBox">
          <strong>Be careful:</strong>{" "}
          <MathFormula
            expression={String.raw`a^2+b^2`}
            displayMode={false}
          />{" "}
          is a sum of two squares. The difference-of-two-squares
          identity does not apply to it.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">3</span>

          <div>
            <h2>Using the identity to expand brackets</h2>
            <p>
              Square the first term, then subtract the square of
              the second term.
            </p>
          </div>
        </div>

        <article className="workedExample">
          <p className="exampleLabel">WORKED EXAMPLE 1</p>

          <h3>Expand:</h3>

          <MathFormula
            expression={String.raw`
              (3x+5)(3x-5)
            `}
          />

          <div className="solution">
            <p>
              The first term is{" "}
              <MathFormula
                expression={String.raw`3x`}
                displayMode={false}
              />{" "}
              and the second term is{" "}
              <MathFormula
                expression={String.raw`5`}
                displayMode={false}
              />
              .
            </p>

            <MathFormula
              expression={String.raw`
                \begin{aligned}
                (3x+5)(3x-5)
                  &=(3x)^2-5^2\\
                  &=9x^2-25
                \end{aligned}
              `}
            />
          </div>
        </article>

        <article className="workedExample">
          <p className="exampleLabel">WORKED EXAMPLE 2</p>

          <h3>Expand:</h3>

          <MathFormula
            expression={String.raw`
              (4p-3q)(4p+3q)
            `}
          />

          <div className="solution">
            <MathFormula
              expression={String.raw`
                \begin{aligned}
                (4p-3q)(4p+3q)
                  &=(4p)^2-(3q)^2\\
                  &=16p^2-9q^2
                \end{aligned}
              `}
            />
          </div>
        </article>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">4</span>

          <div>
            <h2>Using the identity to factorise</h2>
            <p>
              The same identity can be used in reverse.
            </p>
          </div>
        </div>

        <div className="identityDirection">
          <div>
            <p>Expansion</p>

            <MathFormula
              expression={String.raw`
                (a+b)(a-b)\longrightarrow a^2-b^2
              `}
            />
          </div>

          <div>
            <p>Factorisation</p>

            <MathFormula
              expression={String.raw`
                a^2-b^2\longrightarrow(a+b)(a-b)
              `}
            />
          </div>
        </div>

        <article className="workedExample">
          <p className="exampleLabel">WORKED EXAMPLE 3</p>

          <h3>Factorise:</h3>

          <MathFormula
            expression={String.raw`
              x^2-64
            `}
          />

          <div className="solution">
            <MathFormula
              expression={String.raw`
                \begin{aligned}
                x^2-64
                  &=x^2-8^2\\
                  &=(x+8)(x-8)
                \end{aligned}
              `}
            />
          </div>
        </article>

        <article className="workedExample">
          <p className="exampleLabel">WORKED EXAMPLE 4</p>

          <h3>Factorise completely:</h3>

          <MathFormula
            expression={String.raw`
              25p^2-4q^2
            `}
          />

          <div className="solution">
            <MathFormula
              expression={String.raw`
                \begin{aligned}
                25p^2-4q^2
                  &=(5p)^2-(2q)^2\\
                  &=(5p+2q)(5p-2q)
                \end{aligned}
              `}
            />
          </div>
        </article>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">5</span>

          <div>
            <h2>Mental calculation</h2>
            <p>
              The identity can make some calculations much
              quicker.
            </p>
          </div>
        </div>

        <article className="workedExample">
          <p className="exampleLabel">WORKED EXAMPLE 5</p>

          <h3>Calculate without a calculator:</h3>

          <MathFormula
            expression={String.raw`
              103\times97
            `}
          />

          <div className="solution">
            <p>
              The numbers are equally far from{" "}
              <MathFormula
                expression={String.raw`100`}
                displayMode={false}
              />
              .
            </p>

            <MathFormula
              expression={String.raw`
                \begin{aligned}
                103\times97
                  &=(100+3)(100-3)\\
                  &=100^2-3^2\\
                  &=10000-9\\
                  &=9991
                \end{aligned}
              `}
            />
          </div>
        </article>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>

        <h2>
          Which expression is the complete factorisation of
          the following?
        </h2>

        <MathFormula
          expression={String.raw`
            x^2-49
          `}
        />

        <div className="optionGrid">
          {quizOptions.map((option, index) => {
            const isSelected = selectedAnswer === index;

            let optionClass = "quizOption";

            if (isSelected && option.correct) {
              optionClass += " correctOption";
            }

            if (isSelected && !option.correct) {
              optionClass += " incorrectOption";
            }

            return (
              <button
                key={option.label}
                type="button"
                className={optionClass}
                onClick={() => setSelectedAnswer(index)}
              >
                <MathFormula
                  expression={option.label}
                  displayMode={false}
                />
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
            {selectedOption.correct ? (
              <>
                <strong>Correct.</strong>{" "}
                <MathFormula
                  expression={String.raw`49=7^2`}
                  displayMode={false}
                />
                , so{" "}
                <MathFormula
                  expression={String.raw`
                    x^2-49=(x+7)(x-7)
                  `}
                  displayMode={false}
                />
                .
              </>
            ) : (
              <>
                <strong>Try again.</strong> First rewrite{" "}
                <MathFormula
                  expression={String.raw`49`}
                  displayMode={false}
                />{" "}
                as{" "}
                <MathFormula
                  expression={String.raw`7^2`}
                  displayMode={false}
                />
                .
              </>
            )}
          </div>
        )}

        {selectedAnswer !== null && (
          <button
            type="button"
            className="tryAgainButton"
            onClick={() => setSelectedAnswer(null)}
          >
            Reset question
          </button>
        )}
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>

        <div className="mistakeGrid">
          <article>
            <h3>Using the identity with addition</h3>

            <MathFormula
              expression={String.raw`
                a^2+b^2\ne(a+b)(a-b)
              `}
            />

            <p>
              The identity applies to a difference, not a sum.
            </p>
          </article>

          <article>
            <h3>Forgetting to square a coefficient</h3>

            <MathFormula
              expression={String.raw`
                (3x)^2=9x^2
              `}
            />

            <p>
              Both the coefficient and the variable must be
              squared.
            </p>
          </article>

          <article>
            <h3>Writing two identical brackets</h3>

            <MathFormula
              expression={String.raw`
                a^2-b^2=(a+b)(a-b)
              `}
            />

            <p>
              One bracket contains a plus sign and the other
              contains a minus sign.
            </p>
          </article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="smallLabel">SECTION SUMMARY</p>

        <h2>Remember these three steps</h2>

        <ol>
          <li>
            Check for two perfect-square terms separated by
            subtraction.
          </li>
          <li>
            Find the square roots of both terms.
          </li>
          <li>
            Write one sum bracket and one difference bracket.
          </li>
        </ol>

        <MathFormula
          expression={String.raw`
            a^2-b^2=(a+b)(a-b)
          `}
        />

        <button
          type="button"
          className="completeButton"
          onClick={() => router.push("/maths/s2/chapter-3")}
        >
          Complete Section 2 →
        </button>
      </section>

      <style jsx>{`
        .page {
          max-width: 1050px;
          width: calc(100% - 40px);
          margin: 42px auto 70px;
        }

        .backButton {
          border: none;
          background: transparent;
          padding: 0;
          margin-bottom: 26px;
          color: #047857;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .pageHeader {
          margin-bottom: 30px;
        }

        .eyebrow,
        .smallLabel,
        .exampleLabel,
        .quizLabel {
          margin: 0 0 8px;
          color: #4f46e5;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .pageHeader h1 {
          margin: 0 0 12px;
          font-size: clamp(36px, 6vw, 54px);
          line-height: 1.08;
        }

        .introduction {
          max-width: 850px;
          margin: 0;
          color: #64748b;
          font-size: 19px;
          line-height: 1.65;
        }

        .identityHero,
        .lessonCard,
        .quizCard,
        .mistakesCard,
        .summaryCard {
          margin-bottom: 24px;
          padding: 30px;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          background: white;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
        }

        .identityHero {
          border-color: #c7d2fe;
          background: linear-gradient(
            135deg,
            #eef2ff,
            #f5f3ff
          );
          text-align: center;
        }

        .identityHero p:last-child {
          margin: 10px 0 0;
          color: #475569;
          font-size: 17px;
        }

        .sectionHeading {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 24px;
        }

        .sectionNumber {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: #eef2ff;
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 22px;
          font-weight: 900;
        }

        .sectionHeading h2,
        .quizCard h2,
        .mistakesCard h2,
        .summaryCard h2 {
          margin: 0 0 7px;
          font-size: 28px;
        }

        .sectionHeading p {
          margin: 0;
          color: #64748b;
          font-size: 17px;
          line-height: 1.55;
        }

        .workingBox,
        .importantBox,
        .warningBox,
        .solution {
          padding: 22px;
          border-radius: 18px;
        }

        .workingBox {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .workingNote {
          margin: 14px 0 0;
          color: #475569;
          text-align: center;
          line-height: 1.6;
        }

        .importantBox {
          margin-top: 18px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1e3a8a;
          line-height: 1.6;
        }

        .warningBox {
          margin-top: 20px;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          color: #9a3412;
          line-height: 1.6;
        }

        .recognitionGrid,
        .mistakeGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(220px, 1fr)
          );
          gap: 16px;
        }

        .exampleTile,
        .mistakeGrid article {
          padding: 20px;
          border-radius: 18px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .exampleTile p,
        .mistakeGrid p {
          margin: 8px 0;
          color: #64748b;
          line-height: 1.55;
        }

        .workedExample {
          margin-top: 18px;
          padding: 24px;
          border-radius: 20px;
          border: 1px solid #c7d2fe;
          background: #fafaff;
        }

        .workedExample h3 {
          margin: 0;
          font-size: 21px;
        }

        .solution {
          margin-top: 16px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
        }

        .solution p {
          margin: 0 0 10px;
          color: #475569;
          line-height: 1.6;
        }

        .identityDirection {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(260px, 1fr)
          );
          gap: 16px;
        }

        .identityDirection > div {
          padding: 20px;
          border-radius: 18px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          text-align: center;
        }

        .identityDirection p {
          margin: 0 0 8px;
          color: #4f46e5;
          font-weight: 900;
        }

        .quizCard {
          border-color: #bae6fd;
          background: #f0f9ff;
        }

        .quizCard h2 {
          max-width: 760px;
        }

        .optionGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(210px, 1fr)
          );
          gap: 12px;
          margin-top: 22px;
        }

        .quizOption {
          min-height: 70px;
          padding: 15px;
          border: 2px solid #cbd5e1;
          border-radius: 15px;
          background: white;
          color: #0f172a;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .quizOption:hover {
          border-color: #4f46e5;
          background: #eef2ff;
        }

        .correctOption {
          border-color: #16a34a;
          background: #f0fdf4;
        }

        .incorrectOption {
          border-color: #dc2626;
          background: #fef2f2;
        }

        .feedback {
          margin-top: 18px;
          padding: 18px;
          border-radius: 15px;
          line-height: 1.6;
        }

        .correctFeedback {
          color: #166534;
          background: #dcfce7;
        }

        .incorrectFeedback {
          color: #991b1b;
          background: #fee2e2;
        }

        .tryAgainButton {
          margin-top: 14px;
          padding: 11px 18px;
          border: 1px solid #64748b;
          border-radius: 12px;
          background: white;
          color: #334155;
          font-weight: 800;
          cursor: pointer;
        }

        .mistakesCard {
          border-color: #fed7aa;
          background: #fffaf5;
        }

        .mistakeGrid article {
          background: white;
          border-color: #fed7aa;
        }

        .mistakeGrid h3 {
          margin: 0;
          font-size: 18px;
        }

        .summaryCard {
          border-color: #a7f3d0;
          background: linear-gradient(
            135deg,
            #ecfdf5,
            #f0fdf4
          );
        }

        .summaryCard ol {
          margin: 18px 0;
          padding-left: 25px;
          color: #334155;
          font-size: 17px;
          line-height: 1.8;
        }

        .completeButton {
          width: 100%;
          margin-top: 18px;
          padding: 16px 22px;
          border: none;
          border-radius: 15px;
          background: #059669;
          color: white;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
        }

        .completeButton:hover {
          background: #047857;
        }

        :global(.math-display) {
          display: block;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 5px 0;
          font-size: 1.1rem;
        }

        :global(.math-inline) {
          display: inline-block;
        }

        @media (max-width: 640px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 26px;
          }

          .identityHero,
          .lessonCard,
          .quizCard,
          .mistakesCard,
          .summaryCard {
            padding: 21px;
            border-radius: 19px;
          }

          .sectionHeading {
            flex-direction: column;
          }

          .sectionHeading h2,
          .quizCard h2,
          .mistakesCard h2,
          .summaryCard h2 {
            font-size: 24px;
          }

          :global(.math-display) {
            font-size: 0.96rem;
          }
        }
      `}</style>
    </main>
  );
}