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

export default function ChangingDataPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s3/chapter-6")}
      >
        ← Back to Chapter 6
      </button>


      <header className="hero">
        <p className="eyebrow">SECTION 6.3</p>
        <h1>Effects of Changing Data on Measures of Central Tendency</h1>
        <p className="intro">Predict a new mean, median and mode when every observation undergoes the same change.</p>
      </header>
      <section className="noteCard"><div className="numberBadge">1</div><div><h2>Add or subtract a common amount</h2><p>When k is added to each of n observations, the total increases by nk. Dividing by n raises the mean by k. The order and the frequencies stay the same, so the median and each mode also move by k.</p></div></section>
      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 1</p><h2>Five trees are 4, 4, 6, 7 and 9 years old. How do their ages compare two years later and one year earlier?</h2>
        <div className="steps">
          <div><span>Step 1</span><p>Their total age is 30 years. The mean is 6, the middle age is 6 and the repeated age is 4.</p></div>
          <div><span>Step 2</span><p>Two years later, add 2 to each measure. One year earlier, subtract 1 from each original measure.</p></div>
        </div><div className="answerBox">In mean, median, mode order: two years later (8, 8, 6) years. One year earlier (5, 5, 3) years.</div>
      </section>
      <section className="noteCard"><div className="numberBadge">2</div><div><h2>Multiply by a common factor</h2><p>Multiplying every value by a non-zero factor k multiplies each measure by k. A negative factor reverses the order, but the middle value (or the average of the middle pair) scales in the same way. Equal values still occur equally often.</p></div></section>
      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 2</p><h2>A game changes each score into a penalty equal to −2 times the score. What happens to 1, 3, 3 and 9?</h2>
        <div className="steps">
          <div><span>Step 1</span><p>The original mean is 16 ÷ 4 = 4. The median and mode are both 3.</p></div>
          <div><span>Step 2</span><p>Sort the new scores: −18, −6, −6, −2. Their sum is −32 and the middle pair are both −6.</p></div>
        </div><div className="answerBox">New mean = −8, median = −6 and mode = −6. Each equals its original measure multiplied by −2.</div>
      </section>
      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 3</p><h2>A map uses half the original scale. The original route lengths have mean 16 cm, median 14 cm and mode 12 cm. Find the new measures.</h2>
        <div className="steps">
          <div><span>Step 1</span><p>Each length is multiplied by 0.5. Apply the factor to each summary.</p></div>
          <div><span>Step 2</span><p>Half of 16 is 8, half of 14 is 7 and half of 12 is 6.</p></div>
        </div><div className="answerBox">Mean = 8 cm, median = 7 cm and mode = 6 cm.</div>
      </section>
      <section className="noteCard"><div className="numberBadge">3</div><div><h2>Combine a fixed change with a percentage</h2><p>For a 10% reduction multiply by 0.90. For a 20% increase multiply by 1.20. Apply operations to each measure in the same order as they were applied to the data.</p></div></section>
      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 4</p><h2>A shop adds $4 to every ticket price, then offers a 10% discount. The original mean, median and mode are $30, $28 and $24.</h2>
        <div className="steps">
          <div><span>Step 1</span><p>After the fixed increase the three measures are $34, $32 and $28.</p></div>
          <div><span>Step 2</span><p>Multiply each revised value by 0.90. For example, the new mean is 34 × 0.90 = 30.60.</p></div>
        </div><div className="answerBox">Final mean = $30.60, median = $28.80 and mode = $25.20.</div>
      </section>
      <section className="mistakesCard"><h2>Common mistakes</h2><p>Adding $4 after taking the discount would give a mean of $31. The discount applies to the revised price, including the $4 increase.</p><p>If only one of five scores increases by 10, the total rises by 10 and the mean rises by 2. Check that the change applies to every score before using the rule.</p></section>
      <section className="workedExample"><h2>Try it</h2><p>Five fares are $5, $5, $7, $8 and $10. Predict the mean, median and mode after a 20% increase, followed by a flat $1 reduction.</p><details><summary>Show working</summary><p>The original mean, median and mode are $7, $7 and $5. Multiply each by 1.20, then subtract $1. The final measures are $7.40, $7.40 and $5 respectively.</p></details></section>
      <section className="summaryCard"><h2>Section Summary</h2><p>For <MathFormula formula="y=ax+b" /> with non-zero a, transform each original measure using the same rule. If every observation is multiplied by zero, every resulting observation equals zero.</p>
<button
          type="button"
          onClick={() => router.push("/maths/s3/chapter-6")}
          className="finishButton"
        >
          Return to Chapter 6 →
        </button>
      </section>

      <style jsx>{`
        table { margin: 1rem auto; border-collapse: collapse; } th, td { padding: 8px 16px; border-bottom: 1px solid #cbd5e1; }
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