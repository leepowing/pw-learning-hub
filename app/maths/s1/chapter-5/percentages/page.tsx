"use client";

import katex from "katex";
import { useRouter } from "next/navigation";

function MathFormula({
  formula,
  display = false,
}: {
  formula: string;
  display?: boolean;
}) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(formula, {
          throwOnError: false,
          displayMode: display,
        }),
      }}
    />
  );
}

export default function PercentagesPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-5")}
      >
        ← Back to Chapter 5
      </button>

      <header className="hero">
        <p className="eyebrow">SECTION 1</p>
        <h1>Percentages</h1>
        <p className="intro">
          Learn how to express one quantity as a percentage of another and
          how to find a percentage of a quantity.
        </p>
      </header>

      <section className="noteCard">
        <div className="numberBadge">1</div>

        <div>
          <h2>What is a percentage?</h2>

          <p>
            A percentage is a way of expressing a number as a fraction of
            100. The word percentage means “per hundred”.
          </p>

          <div className="simpleFormula">
            <MathFormula
              formula={String.raw`1\%=\frac{1}{100}`}
              display
            />
          </div>

          <p>
            For example, 25% means 25 out of every 100, so:
          </p>

          <div className="simpleFormula">
            <MathFormula
              formula={String.raw`25\%=\frac{25}{100}=\frac{1}{4}`}
              display
            />
          </div>
        </div>
      </section>

      <section className="formulaSection">
        <div className="sectionHeading">
          <span className="numberBadge">2</span>

          <div>
            <h2>Express one quantity as a percentage of another</h2>
            <p>
              Divide the quantity being compared by the whole or reference
              quantity, then multiply by 100%.
            </p>
          </div>
        </div>

        <div className="formulaBox purple">
          <p className="formulaLabel">FORMULA</p>

          <MathFormula
            formula={String.raw`\text{Percentage}=\frac{x}{y}\times100\%`}
            display
          />
        </div>

        <div className="symbolGrid">
          <article>
            <strong>
              <MathFormula formula="x" />
            </strong>
            <p>The quantity being compared</p>
          </article>

          <article>
            <strong>
              <MathFormula formula="y" />
            </strong>
            <p>The whole or reference quantity</p>
          </article>

          <article>
            <strong>
              <MathFormula formula="100\%" />
            </strong>
            <p>Converts the ratio into a percentage</p>
          </article>
        </div>

        <div className="important">
          <strong>Important:</strong> The denominator must be the whole or
          reference quantity. Also, <MathFormula formula="y" /> cannot be
          zero.
        </div>
      </section>

      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 1</p>

        <h2>Express 21 as a percentage of 28.</h2>

        <div className="steps">
          <div>
            <span>Step 1</span>
            <p>Write the part over the whole.</p>
            <MathFormula formula={String.raw`\frac{21}{28}`} display />
          </div>

          <div>
            <span>Step 2</span>
            <p>Multiply by 100%.</p>
            <MathFormula
              formula={String.raw`\frac{21}{28}\times100\%`}
              display
            />
          </div>

          <div>
            <span>Step 3</span>
            <p>Simplify.</p>
            <MathFormula
              formula={String.raw`\frac{21}{28}\times100\%=75\%`}
              display
            />
          </div>
        </div>

        <div className="answerBox">
          <strong>Answer:</strong> 21 is 75% of 28.
        </div>
      </section>

      <section className="formulaSection">
        <div className="sectionHeading">
          <span className="numberBadge greenBadge">3</span>

          <div>
            <h2>Find a percentage of a quantity</h2>
            <p>
              Convert the percentage into a fraction over 100, then multiply
              it by the whole quantity.
            </p>
          </div>
        </div>

        <div className="formulaBox green">
          <p className="formulaLabel">FORMULA</p>

          <MathFormula
            formula={String.raw`a\%\text{ of }y
              =y\times\frac{a}{100}`}
            display
          />
        </div>

        <div className="symbolGrid twoColumns">
          <article>
            <strong>
              <MathFormula formula="a" />
            </strong>
            <p>The percentage number</p>
          </article>

          <article>
            <strong>
              <MathFormula formula="y" />
            </strong>
            <p>The whole quantity</p>
          </article>
        </div>
      </section>

      <section className="workedExample greenExample">
        <p className="exampleLabel">WORKED EXAMPLE 2</p>

        <h2>Find 18% of 250.</h2>

        <div className="steps">
          <div>
            <span>Step 1</span>
            <p>Write 18% as a fraction over 100.</p>
            <MathFormula formula={String.raw`\frac{18}{100}`} display />
          </div>

          <div>
            <span>Step 2</span>
            <p>Multiply it by the whole quantity.</p>
            <MathFormula
              formula={String.raw`250\times\frac{18}{100}`}
              display
            />
          </div>

          <div>
            <span>Step 3</span>
            <p>Calculate the result.</p>
            <MathFormula
              formula={String.raw`250\times\frac{18}{100}=45`}
              display
            />
          </div>
        </div>

        <div className="answerBox greenAnswer">
          <strong>Answer:</strong> 18% of 250 is 45.
        </div>
      </section>

      <section className="whyCard">
        <h2>Why do we multiply a ratio by 100%?</h2>

        <p>
          Since 100% is equal to 1, multiplying a ratio by 100% does not
          change its value. It only expresses the ratio in percentage form.
        </p>

        <div className="simpleFormula">
          <MathFormula
            formula={String.raw`\frac{x}{y}
              =\frac{x}{y}\times1
              =\frac{x}{y}\times100\%`}
            display
          />
        </div>
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>

        <ul>
          <li>
            Reversing the part and the whole in the fraction.
          </li>
          <li>
            Dividing by the quantity being compared instead of the whole.
          </li>
          <li>
            Using <MathFormula formula="a" /> instead of{" "}
            <MathFormula formula={String.raw`\frac{a}{100}`} /> when finding{" "}
            <MathFormula formula="a\%" /> of a quantity.
          </li>
          <li>
            Forgetting the percentage sign in the final answer.
          </li>
          <li>
            Assuming that every percentage must be less than 100%.
          </li>
        </ul>
      </section>

      <section className="summaryCard">
        <div>
          <p className="eyebrow">SECTION SUMMARY</p>
          <h2>Key formulas</h2>
        </div>

        <div className="summaryFormulas">
          <div>
            <MathFormula
              formula={String.raw`\text{Percentage}
                =\frac{x}{y}\times100\%`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`a\%\text{ of }y
                =y\times\frac{a}{100}`}
              display
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => router.push("/maths/s1/chapter-5")}
          className="finishButton"
        >
          Return to Chapter 5 →
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
          border: none;
          background: transparent;
          padding: 0;
          margin-bottom: 26px;
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
        .exampleLabel {
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

        p {
          line-height: 1.65;
        }

        .intro {
          max-width: 780px;
          margin: 0;
          color: #64748b;
          font-size: 20px;
        }

        .noteCard,
        .formulaSection,
        .workedExample,
        .whyCard,
        .mistakesCard,
        .summaryCard {
          margin-bottom: 22px;
          padding: 30px;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          background: white;
          box-shadow: 0 7px 20px rgba(15, 23, 42, 0.04);
        }

        .noteCard,
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

        .simpleFormula,
        .formulaBox {
          margin: 20px 0;
          padding: 22px;
          overflow-x: auto;
          border-radius: 17px;
          text-align: center;
          font-size: 20px;
        }

        .simpleFormula {
          background: #f8fafc;
        }

        .formulaBox.purple {
          border: 1px solid #c7d2fe;
          background: #eef2ff;
        }

        .formulaBox.green {
          border: 1px solid #a7f3d0;
          background: #ecfdf5;
        }

        .formulaBox.green .formulaLabel {
          color: #047857;
        }

        .symbolGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 20px;
        }

        .symbolGrid.twoColumns {
          grid-template-columns: repeat(2, 1fr);
        }

        .symbolGrid article {
          min-height: 120px;
          padding: 20px;
          box-sizing: border-box;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
          text-align: center;
        }

        .symbolGrid strong {
          display: block;
          margin-bottom: 9px;
          color: #3730a3;
          font-size: 25px;
        }

        .symbolGrid p {
          margin: 0;
          color: #475569;
        }

        .important {
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid #fde68a;
          background: #fffbeb;
          color: #92400e;
          line-height: 1.6;
        }

        .workedExample {
          border-color: #c7d2fe;
          background: #fafaff;
        }

        .greenExample {
          border-color: #a7f3d0;
          background: #f7fffb;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .steps > div {
          min-height: 180px;
          padding: 20px;
          box-sizing: border-box;
          border-radius: 17px;
          border: 1px solid #e2e8f0;
          background: white;
          overflow-x: auto;
        }

        .steps span {
          color: #4f46e5;
          font-weight: 900;
        }

        .answerBox {
          margin-top: 16px;
          padding: 17px 20px;
          border-radius: 14px;
          background: #eef2ff;
          color: #312e81;
          font-size: 18px;
        }

        .greenAnswer {
          background: #ecfdf5;
          color: #166534;
        }

        .whyCard {
          border-color: #bae6fd;
          background: #f0f9ff;
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

        .summaryFormulas {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin: 22px 0;
        }

        .summaryFormulas > div {
          padding: 18px;
          overflow-x: auto;
          border: 1px solid #bbf7d0;
          border-radius: 16px;
          background: white;
        }

        .finishButton {
          width: 100%;
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

          .noteCard,
          .formulaSection,
          .workedExample,
          .whyCard,
          .mistakesCard,
          .summaryCard {
            padding: 22px;
          }

          .symbolGrid,
          .symbolGrid.twoColumns,
          .steps,
          .summaryFormulas {
            grid-template-columns: 1fr;
          }

          .noteCard,
          .sectionHeading {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}