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
      className={displayMode ? "mathDisplay" : "mathInline"}
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
    expression: String.raw`(2x+3)^2`,
    correct: true,
  },
  {
    expression: String.raw`(2x-3)^2`,
    correct: false,
  },
  {
    expression: String.raw`(4x+3)^2`,
    correct: false,
  },
];

export default function PerfectSquareIdentitiesPage() {
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
          S2 MATHEMATICS · CHAPTER 3 · SECTION 3
        </p>

        <h1>Perfect Square Identities</h1>

        <p className="introduction">
          Learn how to expand and recognise the square of a sum
          and the square of a difference.
        </p>
      </header>

      <section className="identityHero">
        <p className="smallLabel">
          THE TWO PERFECT SQUARE IDENTITIES
        </p>

        <div className="heroFormulaGrid">
          <div className="positiveFormula">
            <MathFormula
              expression={String.raw`
                (a+b)^2\equiv a^2+2ab+b^2
              `}
            />
          </div>

          <div className="negativeFormula">
            <MathFormula
              expression={String.raw`
                (a-b)^2\equiv a^2-2ab+b^2
              `}
            />
          </div>
        </div>

        <p>
          The first and last terms are squares. The middle term
          is twice the product of the two terms.
        </p>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">1</span>

          <div>
            <h2>Square of a sum</h2>

            <p>
              Squaring a bracket means multiplying the bracket
              by itself.
            </p>
          </div>
        </div>

        <div className="workingBox">
          <MathFormula
            expression={String.raw`
              \begin{aligned}
              (a+b)^2
                &=(a+b)(a+b)\\
                &=a^2+ab+ab+b^2\\
                &=a^2+2ab+b^2
              \end{aligned}
            `}
          />
        </div>

        <div className="patternBox positivePattern">
          <div>
            <span>Square the first term</span>

            <MathFormula
              expression={String.raw`a^2`}
            />
          </div>

          <div>
            <span>Twice the product</span>

            <MathFormula
              expression={String.raw`+2ab`}
            />
          </div>

          <div>
            <span>Square the second term</span>

            <MathFormula
              expression={String.raw`+b^2`}
            />
          </div>
        </div>

        <article className="workedExample">
          <p className="exampleLabel">WORKED EXAMPLE 1</p>

          <h3>Expand:</h3>

          <MathFormula
            expression={String.raw`
              (3x+4)^2
            `}
          />

          <div className="solution">
            <MathFormula
              expression={String.raw`
                \begin{aligned}
                (3x+4)^2
                  &=(3x)^2+2(3x)(4)+4^2\\
                  &=9x^2+24x+16
                \end{aligned}
              `}
            />
          </div>
        </article>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">2</span>

          <div>
            <h2>Square of a difference</h2>

            <p>
              The middle term becomes negative, but the final
              square remains positive.
            </p>
          </div>
        </div>

        <div className="workingBox">
          <MathFormula
            expression={String.raw`
              \begin{aligned}
              (a-b)^2
                &=(a-b)(a-b)\\
                &=a^2-ab-ab+b^2\\
                &=a^2-2ab+b^2
              \end{aligned}
            `}
          />
        </div>

        <div className="patternBox negativePattern">
          <div>
            <span>Square the first term</span>

            <MathFormula
              expression={String.raw`a^2`}
            />
          </div>

          <div>
            <span>Subtract twice the product</span>

            <MathFormula
              expression={String.raw`-2ab`}
            />
          </div>

          <div>
            <span>Add the final square</span>

            <MathFormula
              expression={String.raw`+b^2`}
            />
          </div>
        </div>

        <article className="workedExample">
          <p className="exampleLabel">WORKED EXAMPLE 2</p>

          <h3>Expand:</h3>

          <MathFormula
            expression={String.raw`
              (2p-5)^2
            `}
          />

          <div className="solution">
            <MathFormula
              expression={String.raw`
                \begin{aligned}
                (2p-5)^2
                  &=(2p)^2-2(2p)(5)+5^2\\
                  &=4p^2-20p+25
                \end{aligned}
              `}
            />
          </div>
        </article>

        <div className="importantBox">
          <strong>Important:</strong>{" "}
          <MathFormula
            expression={String.raw`(-b)^2=b^2`}
            displayMode={false}
          />
          . Therefore, the final term is positive.
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">3</span>

          <div>
            <h2>Recognising the correct identity</h2>

            <p>
              The sign in the original bracket controls the sign
              of the middle term.
            </p>
          </div>
        </div>

        <div className="comparisonGrid">
          <article className="comparisonPositive">
            <p className="comparisonTitle">Plus inside</p>

            <MathFormula
              expression={String.raw`
                (a+b)^2
              `}
            />

            <MathFormula
              expression={String.raw`
                a^2+\color{#15803d}{2ab}+b^2
              `}
            />

            <p>The middle term is positive.</p>
          </article>

          <article className="comparisonNegative">
            <p className="comparisonTitle">Minus inside</p>

            <MathFormula
              expression={String.raw`
                (a-b)^2
              `}
            />

            <MathFormula
              expression={String.raw`
                a^2-\color{#dc2626}{2ab}+b^2
              `}
            />

            <p>The middle term is negative.</p>
          </article>
        </div>

        <div className="warningBox">
          <strong>Do not forget the middle term.</strong>

          <MathFormula
            expression={String.raw`
              (a+b)^2\ne a^2+b^2
            `}
          />

          <p>
            The correct expansion contains{" "}
            <MathFormula
              expression={String.raw`2ab`}
              displayMode={false}
            />
            .
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">4</span>

          <div>
            <h2>Factorising a perfect-square trinomial</h2>

            <p>
              Perfect square identities can also be used in
              reverse.
            </p>
          </div>
        </div>

        <article className="workedExample">
          <p className="exampleLabel">WORKED EXAMPLE 3</p>

          <h3>Factorise:</h3>

          <MathFormula
            expression={String.raw`
              x^2+10x+25
            `}
          />

          <div className="solution">
            <p>
              The first and last terms are{" "}
              <MathFormula
                expression={String.raw`x^2`}
                displayMode={false}
              />{" "}
              and{" "}
              <MathFormula
                expression={String.raw`5^2`}
                displayMode={false}
              />
              .
            </p>

            <p>
              The middle term is:
            </p>

            <MathFormula
              expression={String.raw`
                2(x)(5)=10x
              `}
            />

            <MathFormula
              expression={String.raw`
                x^2+10x+25=(x+5)^2
              `}
            />
          </div>
        </article>

        <article className="workedExample">
          <p className="exampleLabel">WORKED EXAMPLE 4</p>

          <h3>Factorise:</h3>

          <MathFormula
            expression={String.raw`
              9y^2-24y+16
            `}
          />

          <div className="solution">
            <MathFormula
              expression={String.raw`
                \begin{aligned}
                9y^2&=(3y)^2\\
                16&=4^2\\
                -24y&=-2(3y)(4)
                \end{aligned}
              `}
            />

            <MathFormula
              expression={String.raw`
                9y^2-24y+16=(3y-4)^2
              `}
            />
          </div>
        </article>

        <div className="checklist">
          <h3>Perfect-square checklist</h3>

          <ol>
            <li>Is the first term a perfect square?</li>
            <li>Is the last term a perfect square?</li>
            <li>
              Is the middle term twice their square roots
              multiplied together?
            </li>
          </ol>
        </div>
      </section>

      <section className="lessonCard">
        <div className="sectionHeading">
          <span className="sectionNumber">5</span>

          <div>
            <h2>Mental calculations</h2>

            <p>
              Perfect square identities can simplify calculations
              involving numbers close to a convenient value.
            </p>
          </div>
        </div>

        <div className="mentalGrid">
          <article className="workedExample">
            <p className="exampleLabel">WORKED EXAMPLE 5</p>

            <h3>Calculate:</h3>

            <MathFormula
              expression={String.raw`
                102^2
              `}
            />

            <div className="solution">
              <MathFormula
                expression={String.raw`
                  \begin{aligned}
                  102^2
                    &=(100+2)^2\\
                    &=100^2+2(100)(2)+2^2\\
                    &=10000+400+4\\
                    &=10404
                  \end{aligned}
                `}
              />
            </div>
          </article>

          <article className="workedExample">
            <p className="exampleLabel">WORKED EXAMPLE 6</p>

            <h3>Calculate:</h3>

            <MathFormula
              expression={String.raw`
                98^2
              `}
            />

            <div className="solution">
              <MathFormula
                expression={String.raw`
                  \begin{aligned}
                  98^2
                    &=(100-2)^2\\
                    &=100^2-2(100)(2)+2^2\\
                    &=10000-400+4\\
                    &=9604
                  \end{aligned}
                `}
              />
            </div>
          </article>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>

        <h2>
          Which expression is the complete factorisation of:
        </h2>

        <MathFormula
          expression={String.raw`
            4x^2+12x+9
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
                key={option.expression}
                type="button"
                className={optionClass}
                onClick={() => setSelectedAnswer(index)}
              >
                <MathFormula
                  expression={option.expression}
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
                <strong>Correct.</strong> The square roots of{" "}
                <MathFormula
                  expression={String.raw`4x^2`}
                  displayMode={false}
                />{" "}
                and{" "}
                <MathFormula
                  expression={String.raw`9`}
                  displayMode={false}
                />{" "}
                are{" "}
                <MathFormula
                  expression={String.raw`2x`}
                  displayMode={false}
                />{" "}
                and{" "}
                <MathFormula
                  expression={String.raw`3`}
                  displayMode={false}
                />
                . Also,
                <MathFormula
                  expression={String.raw`
                    2(2x)(3)=12x
                  `}
                />
              </>
            ) : (
              <>
                <strong>Try again.</strong> The middle term is
                positive, so the bracket must contain a plus
                sign. Check the square roots of the first and
                final terms.
              </>
            )}
          </div>
        )}

        {selectedAnswer !== null && (
          <button
            type="button"
            className="resetButton"
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
            <h3>Missing the middle term</h3>

            <MathFormula
              expression={String.raw`
                (a+b)^2\ne a^2+b^2
              `}
            />

            <p>
              The complete expansion must contain{" "}
              <MathFormula
                expression={String.raw`2ab`}
                displayMode={false}
              />
              .
            </p>
          </article>

          <article>
            <h3>Making the last term negative</h3>

            <MathFormula
              expression={String.raw`
                (a-b)^2=a^2-2ab+b^2
              `}
            />

            <p>
              The final term is positive because a negative
              number squared is positive.
            </p>
          </article>

          <article>
            <h3>Not squaring the coefficient</h3>

            <MathFormula
              expression={String.raw`
                (3x)^2=9x^2
              `}
            />

            <p>
              Square both the number and the variable.
            </p>
          </article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="smallLabel">SECTION SUMMARY</p>

        <h2>Perfect square identities</h2>

        <div className="summaryFormulaGrid">
          <MathFormula
            expression={String.raw`
              (a+b)^2=a^2+2ab+b^2
            `}
          />

          <MathFormula
            expression={String.raw`
              (a-b)^2=a^2-2ab+b^2
            `}
          />
        </div>

        <ul>
          <li>The first and last terms are perfect squares.</li>
          <li>
            The middle term is twice the product of the two
            original terms.
          </li>
          <li>
            A plus bracket gives a positive middle term.
          </li>
          <li>
            A minus bracket gives a negative middle term.
          </li>
          <li>The final square term is always positive.</li>
        </ul>

        <button
          type="button"
          className="completeButton"
          onClick={() => router.push("/maths/s2/chapter-3")}
        >
          Complete Section 3 →
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

        .identityHero > p:last-child {
          margin: 14px 0 0;
          color: #475569;
          font-size: 17px;
          line-height: 1.6;
        }

        .heroFormulaGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(280px, 1fr)
          );
          gap: 16px;
        }

        .heroFormulaGrid > div {
          padding: 18px;
          border-radius: 18px;
          background: white;
        }

        .positiveFormula {
          border: 2px solid #86efac;
        }

        .negativeFormula {
          border: 2px solid #fca5a5;
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
        .solution,
        .checklist {
          padding: 22px;
          border-radius: 18px;
        }

        .workingBox {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .patternBox {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(180px, 1fr)
          );
          gap: 12px;
          margin-top: 18px;
        }

        .patternBox > div {
          padding: 18px;
          border-radius: 16px;
          text-align: center;
        }

        .patternBox span {
          display: block;
          min-height: 42px;
          color: #475569;
          font-weight: 700;
          line-height: 1.4;
        }

        .positivePattern > div {
          background: #f0fdf4;
          border: 1px solid #86efac;
        }

        .negativePattern > div {
          background: #fff7ed;
          border: 1px solid #fdba74;
        }

        .workedExample {
          margin-top: 20px;
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

        .importantBox {
          margin-top: 18px;
          border: 1px solid #bfdbfe;
          background: #eff6ff;
          color: #1e3a8a;
          line-height: 1.6;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(280px, 1fr)
          );
          gap: 16px;
        }

        .comparisonGrid article {
          padding: 22px;
          border-radius: 18px;
          text-align: center;
        }

        .comparisonPositive {
          border: 1px solid #86efac;
          background: #f0fdf4;
        }

        .comparisonNegative {
          border: 1px solid #fca5a5;
          background: #fef2f2;
        }

        .comparisonTitle {
          margin: 0;
          font-size: 18px;
          font-weight: 900;
        }

        .comparisonGrid article > p:last-child {
          margin: 8px 0 0;
          color: #475569;
        }

        .warningBox {
          margin-top: 20px;
          border: 1px solid #fed7aa;
          background: #fff7ed;
          color: #9a3412;
          text-align: center;
        }

        .warningBox p {
          margin: 8px 0 0;
        }

        .checklist {
          margin-top: 20px;
          border: 1px solid #bae6fd;
          background: #f0f9ff;
        }

        .checklist h3 {
          margin: 0 0 10px;
          color: #0369a1;
        }

        .checklist ol {
          margin: 0;
          padding-left: 24px;
          color: #334155;
          line-height: 1.8;
        }

        .mentalGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(300px, 1fr)
          );
          gap: 18px;
        }

        .mentalGrid .workedExample {
          margin-top: 0;
        }

        .quizCard {
          border-color: #bae6fd;
          background: #f0f9ff;
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
          line-height: 1.65;
        }

        .correctFeedback {
          color: #166534;
          background: #dcfce7;
        }

        .incorrectFeedback {
          color: #991b1b;
          background: #fee2e2;
        }

        .resetButton {
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

        .mistakeGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(220px, 1fr)
          );
          gap: 16px;
        }

        .mistakeGrid article {
          padding: 20px;
          border: 1px solid #fed7aa;
          border-radius: 18px;
          background: white;
        }

        .mistakeGrid h3 {
          margin: 0;
          font-size: 18px;
        }

        .mistakeGrid p {
          margin: 8px 0 0;
          color: #64748b;
          line-height: 1.55;
        }

        .summaryCard {
          border-color: #a7f3d0;
          background: linear-gradient(
            135deg,
            #ecfdf5,
            #f0fdf4
          );
        }

        .summaryFormulaGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(280px, 1fr)
          );
          gap: 12px;
        }

        .summaryFormulaGrid > :global(span) {
          padding: 15px;
          border-radius: 15px;
          background: white;
          border: 1px solid #a7f3d0;
        }

        .summaryCard ul {
          margin: 18px 0;
          padding-left: 24px;
          color: #334155;
          font-size: 17px;
          line-height: 1.8;
        }

        .completeButton {
          width: 100%;
          margin-top: 10px;
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

        :global(.mathDisplay) {
          display: block;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 5px 0;
          font-size: 1.08rem;
        }

        :global(.mathInline) {
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

          :global(.mathDisplay) {
            font-size: 0.94rem;
          }
        }
      `}</style>
    </main>
  );
}