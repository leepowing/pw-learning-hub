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

export default function ProbabilityPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s3/chapter-5")}
      >
        ← Back to Chapter 5
      </button>


      <header className="hero"><p className="eyebrow">SECTION 5.3</p>
        <h1>Expected Values</h1><p className="intro">Predict a count across many trials, then use a weighted average to compare scores and prizes.</p>
      </header>
<section className="noteCard"><div className="numberBadge">1</div><div><h2>Expected number of occurrences</h2><p>When an event has probability p on each of n trials, its expected count is <MathFormula formula="np" />. This predicts the average count across repeated batches of n trials.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 1</p><h2>A spinner lands on blue with probability 0.35. How many blue results should we expect in 30 spins?</h2><div className="steps">
<div><span>Step 1</span><p>Identify the event (blue) and the number of trials (30).</p></div>
<div><span>Step 2</span><p>Multiply the number of trials by the probability: 30 × 0.35 = 10.5.</p></div>
</div><div className="answerBox">Expect 10.5 blue results per batch on average. A single batch always has a whole-number count.</div></section>
<section className="noteCard"><div className="numberBadge">2</div><div><h2>Expected value per trial</h2><p>List each possible value with its probability. Multiply each value by its probability and add the products: <MathFormula formula={String.raw`E(X)=\sum_i x_i p_i`} />. Check that the probabilities add to 1.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 2</p><h2>A quiz awards 5 marks for a correct answer and deducts 1 for a wrong answer. What is a random guess worth?</h2><div className="steps">
<div><span>Step 1</span><p>With four options and one correct answer, the probabilities are ¼ and ¾.</p></div>
<div><span>Step 2</span><p>Over 40 guesses, expect 10 correct and 30 wrong. The expected total is 10 × 5 − 30 × 1 = 20 marks.</p></div>
</div><div className="answerBox">Per question, 20 ÷ 40 = 0.5 marks. The weighted average gives the same result: 5 × ¼ − 1 × ¾ = 0.5.</div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 3</p><h2>What is the expected score on a fair six-sided die?</h2><div className="steps">
<div><span>Step 1</span><p>Each face has probability ⅙.</p></div>
<div><span>Step 2</span><p>Weight all six scores equally: (1 + 2 + 3 + 4 + 5 + 6) ÷ 6 = 3.5.</p></div>
</div><div className="answerBox">The long-run average is 3.5 points per roll, even though every roll shows an integer.</div></section>
<section className="noteCard"><div className="numberBadge">3</div><div><h2>Is a game fair?</h2><p>Subtract the entry fee from the expected prize. A positive expected net gain favours the player. Zero gives a fair game. A negative result favours the organiser.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 4</p><h2>A bag holds one gold token, two silver tokens and five plain tokens. Is a $5 entry fee fair?</h2><div className="steps">
<div><span>Step 1</span><p>A random draw pays $24 for gold, $8 for silver and $0 for plain. Their probabilities are ⅛, ¼ and ⅝.</p></div>
<div><span>Step 2</span><p>The expected prize is $24 × ⅛ + $8 × ¼ + $0 × ⅝ = $5.</p></div>
</div><div className="answerBox">The expected net gain is $5 − $5 = $0 per play. The game is fair.</div></section>
<section className="mistakesCard"><h2>Common mistakes</h2><p>Averaging the three prizes equally gives $10.67. Count the tokens: the $0 outcome occurs on five of the eight possible draws.</p></section>
<section className="summaryCard"><h2>Section Summary</h2><p>Use np for an expected count, a probability-weighted average for a score or prize, and expected prize minus fee for a net gain.</p>        <button
          type="button"
          onClick={() => router.push("/maths/s3/chapter-5")}
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