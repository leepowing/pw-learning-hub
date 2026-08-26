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

export default function IncreaseAndProfitPage() {
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
        <p className="eyebrow">SECTION 2</p>
        <h1>Increase and Profit</h1>

        <p className="intro">
          Learn how to calculate an increase, a percentage increase, profit
          and selling price.
        </p>
      </header>

      <section className="learningCard">
        <div className="sectionHeading">
          <span className="numberBadge">1</span>

          <div>
            <h2>Increase in value</h2>
            <p>
              An increase is the amount added to an original value to obtain
              a new value.
            </p>
          </div>
        </div>

        <div className="formulaBox blue">
          <p className="formulaLabel">KEY FORMULAS</p>

          <MathFormula
            formula={String.raw`\begin{aligned}
              \text{Increase}
              &=\text{New value}-\text{Original value}\\[8pt]
              \text{Percentage increase}
              &=\frac{\text{Increase}}
              {\text{Original value}}\times100\%
            \end{aligned}`}
            display
          />
        </div>

        <div className="relationship">
          <h3>Finding the increase and new value</h3>

          <p>
            Before multiplying, convert the percentage into a decimal. For
            example, 15% = 0.15.
          </p>

          <div className="formulaPair">
            <div>
              <MathFormula
                formula={String.raw`\text{Increase}
                =\text{Original value}
                \times\text{Percentage increase}`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{New value}
                =\text{Original value}
                \times(1+\text{Percentage increase})`}
                display
              />
            </div>
          </div>
        </div>

        <div className="important">
          <strong>Remember:</strong> The percentage increase is always
          compared with the original value, not the new value.
        </div>
      </section>

      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 1</p>

        <h2>A price of £240 is increased by 15%.</h2>

        <p>Find the increase and the new price.</p>

        <div className="steps">
          <article>
            <span>Step 1</span>
            <p>Convert 15% into a decimal.</p>

            <MathFormula
              formula={String.raw`15\%=0.15`}
              display
            />
          </article>

          <article>
            <span>Step 2</span>
            <p>Calculate the increase.</p>

            <MathFormula
              formula={String.raw`\text{Increase}
              =240\times0.15=36`}
              display
            />
          </article>

          <article>
            <span>Step 3</span>
            <p>Add the increase to the original price.</p>

            <MathFormula
              formula={String.raw`\text{New price}
              =240+36=276`}
              display
            />
          </article>
        </div>

        <div className="answerBox">
          <strong>Answer:</strong> The increase is £36 and the new price is
          £276.
        </div>

        <div className="alternative">
          <strong>Alternative method:</strong>

          <MathFormula
            formula={String.raw`\text{New price}
            =240\times(1+0.15)
            =240\times1.15
            =276`}
            display
          />
        </div>
      </section>

      <section className="learningCard profitCard">
        <div className="sectionHeading">
          <span className="numberBadge greenBadge">2</span>

          <div>
            <h2>Profit</h2>

            <p>
              A profit is made when the selling price is greater than the
              cost price.
            </p>
          </div>
        </div>

        <div className="vocabularyGrid">
          <article>
            <strong>Cost price</strong>
            <p>The amount paid to buy or produce an item.</p>
          </article>

          <article>
            <strong>Selling price</strong>
            <p>The amount received when the item is sold.</p>
          </article>

          <article>
            <strong>Profit</strong>
            <p>The amount gained after the item is sold.</p>
          </article>
        </div>

        <div className="formulaBox green">
          <p className="formulaLabel">KEY FORMULAS</p>

          <MathFormula
            formula={String.raw`\begin{aligned}
              \text{Profit}
              &=\text{Selling price}-\text{Cost price}\\[8pt]
              \text{Profit percentage}
              &=\frac{\text{Profit}}
              {\text{Cost price}}\times100\%
            \end{aligned}`}
            display
          />
        </div>

        <div className="relationship">
          <h3>Finding profit and selling price</h3>

          <div className="formulaPair">
            <div>
              <MathFormula
                formula={String.raw`\text{Profit}
                =\text{Cost price}
                \times\text{Profit percentage}`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{Selling price}
                =\text{Cost price}
                \times(1+\text{Profit percentage})`}
                display
              />
            </div>
          </div>
        </div>

        <div className="important greenImportant">
          <strong>Remember:</strong> Profit percentage is calculated using
          the cost price as the denominator.
        </div>
      </section>

      <section className="workedExample greenExample">
        <p className="exampleLabel">WORKED EXAMPLE 2</p>

        <h2>An item costs £320 and is sold for £376.</h2>

        <p>Find the profit and the profit percentage.</p>

        <div className="steps twoSteps">
          <article>
            <span>Step 1</span>
            <p>Subtract the cost price from the selling price.</p>

            <MathFormula
              formula={String.raw`\text{Profit}
              =376-320=56`}
              display
            />
          </article>

          <article>
            <span>Step 2</span>
            <p>Compare the profit with the cost price.</p>

            <MathFormula
              formula={String.raw`\text{Profit percentage}
              =\frac{56}{320}\times100\%
              =17.5\%`}
              display
            />
          </article>
        </div>

        <div className="answerBox greenAnswer">
          <strong>Answer:</strong> The profit is £56 and the profit
          percentage is 17.5%.
        </div>
      </section>

      <section className="workedExample goldExample">
        <p className="exampleLabel">WORKED EXAMPLE 3</p>

        <h2>An item costs £480.</h2>

        <p>Find the selling price if a profit of 25% is required.</p>

        <div className="steps twoSteps">
          <article>
            <span>Step 1</span>
            <p>Convert 25% into a decimal.</p>

            <MathFormula
              formula={String.raw`25\%=0.25`}
              display
            />
          </article>

          <article>
            <span>Step 2</span>
            <p>Use the selling price formula.</p>

            <MathFormula
              formula={String.raw`\text{Selling price}
              =480\times(1+0.25)
              =480\times1.25
              =600`}
              display
            />
          </article>
        </div>

        <div className="answerBox goldAnswer">
          <strong>Answer:</strong> The selling price is £600.
        </div>
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>

        <ul>
          <li>
            Subtracting the new value from the original value when finding
            an increase.
          </li>

          <li>
            Dividing the increase by the new value instead of the original
            value.
          </li>

          <li>
            Using the selling price as the denominator when calculating
            profit percentage.
          </li>

          <li>
            Multiplying by 15 instead of 0.15 when the increase is 15%.
          </li>

          <li>
            Adding a percentage directly to an amount without first finding
            its value.
          </li>

          <li>
            Confusing profit with selling price.
          </li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="eyebrow">SECTION SUMMARY</p>
        <h2>Key formulas</h2>

<div className="summaryGrid">
  <div>
    <MathFormula
      formula={String.raw`\text{Increase}
      =\text{New value}-\text{Original value}`}
      display
    />
  </div>

  <div>
    <MathFormula
      formula={String.raw`\text{Percentage increase}
      =\frac{\text{Increase}}
      {\text{Original value}}\times100\%`}
      display
    />
  </div>

  <div>
    <MathFormula
      formula={String.raw`\text{Increase}
      =\text{Original value}
      \times\text{Percentage increase}`}
      display
    />
  </div>

  <div>
    <MathFormula
      formula={String.raw`\text{New value}
      =\text{Original value}
      \times(1+\text{Percentage increase})`}
      display
    />
  </div>

  <div>
    <MathFormula
      formula={String.raw`\text{Profit}
      =\text{Selling price}-\text{Cost price}`}
      display
    />
  </div>

  <div>
    <MathFormula
      formula={String.raw`\text{Profit percentage}
      =\frac{\text{Profit}}
      {\text{Cost price}}\times100\%`}
      display
    />
  </div>

  <div>
    <MathFormula
      formula={String.raw`\text{Profit}
      =\text{Cost price}
      \times\text{Profit percentage}`}
      display
    />
  </div>

  <div>
    <MathFormula
      formula={String.raw`\text{Selling price}
      =\text{Cost price}
      \times(1+\text{Profit percentage})`}
      display
    />
  </div>
</div>
        <button
          type="button"
          className="finishButton"
          onClick={() => router.push("/maths/s1/chapter-5")}
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

        h3 {
          margin: 0 0 10px;
          font-size: 21px;
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

        .learningCard,
        .workedExample,
        .mistakesCard,
        .summaryCard {
          margin-bottom: 22px;
          padding: 30px;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          background: white;
          box-shadow: 0 7px 20px rgba(15, 23, 42, 0.04);
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
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 22px;
          font-weight: 900;
        }

        .greenBadge {
          background: #ecfdf5;
          color: #047857;
        }

        .formulaBox {
          margin: 22px 0;
          padding: 24px;
          overflow-x: auto;
          border-radius: 18px;
          text-align: center;
          font-size: 18px;
        }

        .formulaBox.blue {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
        }

        .formulaBox.green {
          border: 1px solid #a7f3d0;
          background: #ecfdf5;
        }

        .formulaBox.green .formulaLabel {
          color: #047857;
        }

        .relationship {
          padding: 22px;
          border-radius: 18px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .formulaPair {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 16px;
        }

        .formulaPair > div {
          padding: 18px;
          overflow-x: auto;
          border-radius: 15px;
          background: white;
          border: 1px solid #e2e8f0;
        }

        .important {
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 14px;
          background: #fffbeb;
          border: 1px solid #fde68a;
          color: #92400e;
          line-height: 1.6;
        }

        .greenImportant {
          background: #f0fdf4;
          border-color: #bbf7d0;
          color: #166534;
        }

        .workedExample {
          border-color: #bfdbfe;
          background: #f8fbff;
        }

        .greenExample {
          border-color: #a7f3d0;
          background: #f7fffb;
        }

        .goldExample {
          border-color: #fde68a;
          background: #fffdf5;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .steps.twoSteps {
          grid-template-columns: repeat(2, 1fr);
        }

        .steps article {
          min-height: 190px;
          padding: 20px;
          box-sizing: border-box;
          overflow-x: auto;
          border-radius: 17px;
          border: 1px solid #e2e8f0;
          background: white;
        }

        .steps span {
          color: #2563eb;
          font-weight: 900;
        }

        .answerBox,
        .alternative {
          margin-top: 16px;
          padding: 17px 20px;
          overflow-x: auto;
          border-radius: 14px;
          background: #dbeafe;
          color: #1e3a8a;
          font-size: 18px;
        }

        .alternative {
          background: white;
          border: 1px solid #bfdbfe;
          color: #334155;
        }

        .greenAnswer {
          background: #dcfce7;
          color: #166534;
        }

        .goldAnswer {
          background: #fef3c7;
          color: #92400e;
        }

        .vocabularyGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .vocabularyGrid article {
          min-height: 125px;
          padding: 20px;
          box-sizing: border-box;
          border: 1px solid #d1fae5;
          border-radius: 17px;
          background: #f0fdf4;
          text-align: center;
        }

        .vocabularyGrid strong {
          display: block;
          color: #047857;
          font-size: 19px;
        }

        .vocabularyGrid p {
          margin-bottom: 0;
          color: #475569;
        }

        .mistakesCard {
          border-color: #fecaca;
          background: #fffafa;
        }

        .mistakesCard ul {
          margin: 15px 0 0;
          padding-left: 25px;
          color: #475569;
          line-height: 1.85;
        }

        .summaryCard {
          border-color: #a7f3d0;
          background: #f0fdf4;
        }

        .summaryGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin: 22px 0;
        }

        .summaryGrid > div {
          padding: 18px;
          overflow-x: auto;
          border-radius: 15px;
          border: 1px solid #bbf7d0;
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

          .learningCard,
          .workedExample,
          .mistakesCard,
          .summaryCard {
            padding: 22px;
          }

          .sectionHeading {
            flex-direction: column;
          }

          .formulaPair,
          .steps,
          .steps.twoSteps,
          .vocabularyGrid,
          .summaryGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}