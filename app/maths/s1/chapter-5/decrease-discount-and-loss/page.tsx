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

export default function DecreaseDiscountAndLossPage() {
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
        <p className="eyebrow">SECTION 3</p>
        <h1>Decrease, Discount and Loss</h1>

        <p className="intro">
          Learn how to calculate a decrease, a discount, a loss and the
          resulting selling price.
        </p>
      </header>

      {/* Decrease */}
      <section className="learningCard">
        <div className="sectionHeading">
          <span className="numberBadge">1</span>

          <div>
            <h2>Decrease in value</h2>

            <p>
              A decrease is the amount removed from an original value to
              obtain a smaller new value.
            </p>
          </div>
        </div>

        <div className="formulaBox red">
          <p className="formulaLabel">KEY FORMULAS</p>

          <div className="formulaList">
            <div>
              <MathFormula
                formula={String.raw`\text{Decrease}
                =\text{Original value}-\text{New value}`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{Percentage decrease}
                =\frac{\text{Decrease}}
                {\text{Original value}}\times100\%`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{Decrease}
                =\text{Original value}
                \times\text{Percentage decrease}`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{New value}
                =\text{Original value}
                \times(1-\text{Percentage decrease})`}
                display
              />
            </div>
          </div>
        </div>

        <div className="important">
          <strong>Remember:</strong> Percentage decrease is compared with
          the original value. A percentage decrease is normally written as
          a positive percentage.
        </div>
      </section>

      <section className="workedExample redExample">
        <p className="exampleLabel">WORKED EXAMPLE 1</p>

        <h2>A value decreases from 850 to 680.</h2>

        <p>Find the decrease and the percentage decrease.</p>

        <div className="steps">
          <article>
            <span>Step 1</span>
            <p>Subtract the new value from the original value.</p>

            <MathFormula
              formula={String.raw`\text{Decrease}=850-680=170`}
              display
            />
          </article>

          <article>
            <span>Step 2</span>
            <p>Compare the decrease with the original value.</p>

            <MathFormula
              formula={String.raw`\frac{170}{850}\times100\%`}
              display
            />
          </article>

          <article>
            <span>Step 3</span>
            <p>Calculate the percentage.</p>

            <MathFormula
              formula={String.raw`\frac{170}{850}\times100\%=20\%`}
              display
            />
          </article>
        </div>

        <div className="answerBox redAnswer">
          <strong>Answer:</strong> The decrease is 170 and the percentage
          decrease is 20%.
        </div>
      </section>

      {/* Discount */}
      <section className="learningCard discountCard">
        <div className="sectionHeading">
          <span className="numberBadge orangeBadge">2</span>

          <div>
            <h2>Discount</h2>

            <p>
              A discount is the amount taken away from the marked price of
              an item.
            </p>
          </div>
        </div>

        <div className="vocabularyGrid">
          <article>
            <strong>Marked price</strong>
            <p>The price shown before a discount is applied.</p>
          </article>

          <article>
            <strong>Discount</strong>
            <p>The amount taken away from the marked price.</p>
          </article>

          <article>
            <strong>Selling price</strong>
            <p>The price paid after the discount is applied.</p>
          </article>
        </div>

        <div className="formulaBox orange">
          <p className="formulaLabel">KEY FORMULAS</p>

          <div className="formulaList">
            <div>
              <MathFormula
                formula={String.raw`\text{Discount}
                =\text{Marked price}-\text{Selling price}`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{Discount percentage}
                =\frac{\text{Discount}}
                {\text{Marked price}}\times100\%`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{Discount}
                =\text{Marked price}
                \times\text{Discount percentage}`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{Selling price}
                =\text{Marked price}
                \times(1-\text{Discount percentage})`}
                display
              />
            </div>
          </div>
        </div>

        <div className="important orangeImportant">
          <strong>Remember:</strong> Discount percentage is calculated
          using the marked price as the denominator.
        </div>
      </section>

      <section className="workedExample orangeExample">
        <p className="exampleLabel">WORKED EXAMPLE 2</p>

        <h2>An item has a marked price of £260.</h2>

        <p>Find the discount and selling price after a 15% discount.</p>

        <div className="steps">
          <article>
            <span>Step 1</span>
            <p>Convert 15% into a decimal.</p>

            <MathFormula formula={String.raw`15\%=0.15`} display />
          </article>

          <article>
            <span>Step 2</span>
            <p>Calculate the discount.</p>

            <MathFormula
              formula={String.raw`\text{Discount}
              =260\times0.15=39`}
              display
            />
          </article>

          <article>
            <span>Step 3</span>
            <p>Subtract the discount from the marked price.</p>

            <MathFormula
              formula={String.raw`\text{Selling price}
              =260-39=221`}
              display
            />
          </article>
        </div>

        <div className="answerBox orangeAnswer">
          <strong>Answer:</strong> The discount is £39 and the selling price
          is £221.
        </div>

        <div className="alternative">
          <strong>Alternative method:</strong>

          <MathFormula
            formula={String.raw`\text{Selling price}
            =260\times(1-0.15)
            =260\times0.85
            =221`}
            display
          />
        </div>
      </section>

      {/* Loss */}
      <section className="learningCard lossCard">
        <div className="sectionHeading">
          <span className="numberBadge purpleBadge">3</span>

          <div>
            <h2>Loss</h2>

            <p>
              A loss is made when the selling price is less than the cost
              price.
            </p>
          </div>
        </div>

        <div className="vocabularyGrid purpleVocabulary">
          <article>
            <strong>Cost price</strong>
            <p>The amount paid to buy or produce an item.</p>
          </article>

          <article>
            <strong>Selling price</strong>
            <p>The amount received when the item is sold.</p>
          </article>

          <article>
            <strong>Loss</strong>
            <p>The amount lost when the selling price is too low.</p>
          </article>
        </div>

        <div className="formulaBox purple">
          <p className="formulaLabel">KEY FORMULAS</p>

          <div className="formulaList">
            <div>
              <MathFormula
                formula={String.raw`\text{Loss}
                =\text{Cost price}-\text{Selling price}`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{Loss percentage}
                =\frac{\text{Loss}}
                {\text{Cost price}}\times100\%`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{Loss}
                =\text{Cost price}
                \times\text{Loss percentage}`}
                display
              />
            </div>

            <div>
              <MathFormula
                formula={String.raw`\text{Selling price}
                =\text{Cost price}
                \times(1-\text{Loss percentage})`}
                display
              />
            </div>
          </div>
        </div>

        <div className="important purpleImportant">
          <strong>Remember:</strong> Loss percentage is calculated using
          the cost price as the denominator.
        </div>
      </section>

      <section className="workedExample purpleExample">
        <p className="exampleLabel">WORKED EXAMPLE 3</p>

        <h2>An item costs £450 and is sold for £378.</h2>

        <p>Find the loss and the loss percentage.</p>

        <div className="steps twoSteps">
          <article>
            <span>Step 1</span>
            <p>Subtract the selling price from the cost price.</p>

            <MathFormula
              formula={String.raw`\text{Loss}=450-378=72`}
              display
            />
          </article>

          <article>
            <span>Step 2</span>
            <p>Compare the loss with the cost price.</p>

            <MathFormula
              formula={String.raw`\text{Loss percentage}
              =\frac{72}{450}\times100\%
              =16\%`}
              display
            />
          </article>
        </div>

        <div className="answerBox purpleAnswer">
          <strong>Answer:</strong> The loss is £72 and the loss percentage
          is 16%.
        </div>
      </section>

      <section className="comparisonCard">
        <h2>Choosing the correct denominator</h2>

        <div className="comparisonGrid">
          <article>
            <strong>Percentage decrease</strong>
            <p>Divide by the original value.</p>
          </article>

          <article>
            <strong>Discount percentage</strong>
            <p>Divide by the marked price.</p>
          </article>

          <article>
            <strong>Loss percentage</strong>
            <p>Divide by the cost price.</p>
          </article>
        </div>
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>

        <ul>
          <li>
            Dividing a decrease by the new value instead of the original
            value.
          </li>

          <li>
            Dividing a discount by the selling price instead of the marked
            price.
          </li>

          <li>
            Dividing a loss by the selling price instead of the cost price.
          </li>

          <li>
            Adding a discount or decrease instead of subtracting it.
          </li>

          <li>
            Multiplying by 20 instead of 0.20 when the rate is 20%.
          </li>

          <li>
            Confusing marked price, cost price and selling price.
          </li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="eyebrow">SECTION SUMMARY</p>
        <h2>All 12 key formulas</h2>

        <div className="summaryGrid">
          <div>
            <MathFormula
              formula={String.raw`\text{Decrease}
              =\text{Original value}-\text{New value}`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Percentage decrease}
              =\frac{\text{Decrease}}
              {\text{Original value}}\times100\%`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Decrease}
              =\text{Original value}
              \times\text{Percentage decrease}`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{New value}
              =\text{Original value}
              \times(1-\text{Percentage decrease})`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Discount}
              =\text{Marked price}-\text{Selling price}`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Discount percentage}
              =\frac{\text{Discount}}
              {\text{Marked price}}\times100\%`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Discount}
              =\text{Marked price}
              \times\text{Discount percentage}`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Selling price}
              =\text{Marked price}
              \times(1-\text{Discount percentage})`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Loss}
              =\text{Cost price}-\text{Selling price}`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Loss percentage}
              =\frac{\text{Loss}}
              {\text{Cost price}}\times100\%`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Loss}
              =\text{Cost price}
              \times\text{Loss percentage}`}
              display
            />
          </div>

          <div>
            <MathFormula
              formula={String.raw`\text{Selling price}
              =\text{Cost price}
              \times(1-\text{Loss percentage})`}
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

        p {
          line-height: 1.65;
        }

        .intro {
          max-width: 800px;
          margin: 0;
          color: #64748b;
          font-size: 20px;
        }

        .learningCard,
        .workedExample,
        .comparisonCard,
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
          background: #fef2f2;
          color: #b91c1c;
          font-size: 22px;
          font-weight: 900;
        }

        .orangeBadge {
          background: #fff7ed;
          color: #c2410c;
        }

        .purpleBadge {
          background: #f5f3ff;
          color: #6d28d9;
        }

        .formulaBox {
          margin: 22px 0;
          padding: 24px;
          overflow-x: auto;
          border-radius: 18px;
          text-align: center;
        }

        .formulaBox.red {
          border: 1px solid #fecaca;
          background: #fef2f2;
        }

        .formulaBox.orange {
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .formulaBox.purple {
          border: 1px solid #ddd6fe;
          background: #f5f3ff;
        }

        .formulaList,
        .summaryGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 13px;
          margin-top: 18px;
        }

        .formulaList > div,
        .summaryGrid > div {
          padding: 19px;
          overflow-x: auto;
          border-radius: 15px;
          border: 1px solid #e2e8f0;
          background: white;
        }

        .important {
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 14px;
          background: #fff1f2;
          border: 1px solid #fecdd3;
          color: #9f1239;
          line-height: 1.6;
        }

        .orangeImportant {
          background: #fff7ed;
          border-color: #fed7aa;
          color: #9a3412;
        }

        .purpleImportant {
          background: #f5f3ff;
          border-color: #ddd6fe;
          color: #5b21b6;
        }

        .workedExample {
          background: #fafafa;
        }

        .redExample {
          border-color: #fecaca;
          background: #fffafa;
        }

        .orangeExample {
          border-color: #fed7aa;
          background: #fffaf5;
        }

        .purpleExample {
          border-color: #ddd6fe;
          background: #faf9ff;
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
          color: #be123c;
          font-weight: 900;
        }

        .answerBox,
        .alternative {
          margin-top: 16px;
          padding: 17px 20px;
          overflow-x: auto;
          border-radius: 14px;
          font-size: 18px;
        }

        .redAnswer {
          background: #ffe4e6;
          color: #9f1239;
        }

        .orangeAnswer {
          background: #ffedd5;
          color: #9a3412;
        }

        .purpleAnswer {
          background: #ede9fe;
          color: #5b21b6;
        }

        .alternative {
          background: white;
          border: 1px solid #fed7aa;
          color: #334155;
        }

        .vocabularyGrid,
        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .vocabularyGrid article,
        .comparisonGrid article {
          min-height: 130px;
          padding: 20px;
          box-sizing: border-box;
          border: 1px solid #fed7aa;
          border-radius: 17px;
          background: #fff7ed;
          text-align: center;
        }

        .vocabularyGrid strong,
        .comparisonGrid strong {
          display: block;
          color: #c2410c;
          font-size: 19px;
        }

        .vocabularyGrid p,
        .comparisonGrid p {
          margin-bottom: 0;
          color: #475569;
        }

        .purpleVocabulary article {
          border-color: #ddd6fe;
          background: #f5f3ff;
        }

        .purpleVocabulary strong {
          color: #6d28d9;
        }

        .comparisonCard {
          border-color: #bae6fd;
          background: #f0f9ff;
        }

        .comparisonGrid article {
          border-color: #bae6fd;
          background: white;
        }

        .comparisonGrid strong {
          color: #0369a1;
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
          margin: 22px 0;
        }

        .summaryGrid > div {
          border-color: #bbf7d0;
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
            font-size: 35px;
          }

          .learningCard,
          .workedExample,
          .comparisonCard,
          .mistakesCard,
          .summaryCard {
            padding: 22px;
          }

          .sectionHeading {
            flex-direction: column;
          }

          .steps,
          .steps.twoSteps,
          .vocabularyGrid,
          .comparisonGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}