"use client";

import { useRouter } from "next/navigation";

export default function MisusesPage() {
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


      <header className="hero"><p className="eyebrow">SECTION 6.5</p><h1>Misuses of Measures of Central Tendency</h1><p className="intro">A shop advertises its most common price. How many customers can actually buy something at that price?</p></header>
      <section className="noteCard"><div className="numberBadge">1</div><div><h2>Test the word “most”</h2><p>A mode identifies the most frequent value. A majority means more than half the observations.</p></div></section>
      <section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 1</p><h2>Do most workshops cost $20?</h2><p>Eight workshops cost $20, $20, $20, $45, $50, $55, $60 and $70.</p><div className="steps"><div><span>Step 1</span><p>Count the repeats. The mode is $20 because every other fee occurs once.</p></div><div><span>Step 2</span><p>Only 3 of 8 workshops cost $20. Five cost more.</p></div></div><div className="answerBox">A fair headline would be “Three workshops cost $20.”</div></section>
      <section className="noteCard"><div className="numberBadge">2</div><div><h2>Check for an extreme value</h2><p>Compare the mean with the ordered data when a claim describes a typical person.</p></div></section>
      <section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 2</p><h2>Does a typical shift earn $100?</h2><p>Five shifts paid $45, $45, $50, $60 and $300.</p><div className="steps"><div><span>Step 1</span><p>The total is $500, so the mean is $100. The middle payment is $50 and the mode is $45.</p></div><div><span>Step 2</span><p>Four payments are below $100. One unusually large payment pulls the mean up.</p></div></div><div className="answerBox">The median of $50 better describes the middle shift. The mean is useful for calculating the total wage bill.</div></section>
      <section className="noteCard"><div className="numberBadge">3</div><div><h2>Choose the unit you are averaging</h2><p>To describe a passenger, count each passenger once. To describe a route, count each route once.</p></div></section>
      <section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 3</p><h2>Did daily ticket income fall?</h2><p>Two routes charged $4 and $12. Their new fares are $6 and $8. On both days, 80 passengers use the first route and 20 use the second.</p><div className="steps"><div><span>Step 1</span><p>The mean of the two listed fares fell from $8 to $7, a fall of 12.5%.</p></div><div><span>Step 2</span><p>Daily income changed from 80 × $4 + 20 × $12 = $560 to 80 × $6 + 20 × $8 = $640.</p></div></div><div className="answerBox">Income rose by $80. The fare paid per passenger rose from $5.60 to $6.40 because the busier route became dearer.</div></section>
      <section className="workedExample"><h2>Check your reasoning</h2><p>In a batch of 25 parcels, the weight classes 1–2 kg, 3–4 kg and 5–6 kg contain 9, 8 and 8 parcels. A clerk says most weigh 1–2 kg. How would you correct the claim?</p><details><summary>Show reasoning</summary><p>1–2 kg is the modal class, but only 9 of 25 parcels (36%) fall in it. The other two classes together contain 16 parcels.</p></details></section>
      <section className="mistakesCard"><h2>Common mistakes</h2><p>A correctly calculated mean can still answer the wrong question. Counting the two routes equally hides the 80 passengers who paid the higher revised fare on the first route.</p></section>
      <section className="summaryCard"><h2>Section Summary</h2><p>Identify what is being counted, name the measure used and compare the claim with the distribution. Support your conclusion with a count, proportion or weighted total.</p>
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
