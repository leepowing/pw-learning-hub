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

export default function CentralTendencyPage() {
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


      <header className="hero"><p className="eyebrow">SECTION 6.1</p><h1>Introduction to Measures of Central Tendency</h1><p className="intro">Calculate three measures of centre, then use the data to explain which one answers your question.</p></header>
<section className="noteCard"><div className="numberBadge">1</div><div><h2>Mean · sharing a total equally</h2><p>If n observations have total S, their arithmetic mean is <MathFormula formula={String.raw`\bar{x}=\frac{S}{n}`} />. Recover the total by multiplying the mean by the count.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 1</p><h2>Four library helpers shelve 8, 11, 5 and 12 books. What is their mean?</h2><div className="steps">
<div><span>Step 1</span><p>Add all four counts to get 36 books.</p></div>
<div><span>Step 2</span><p>Share that total equally among the four helpers.</p></div>
</div><div className="answerBox">36 ÷ 4 = 9 books per helper.</div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 2</p><h2>A fifth helper brings the mean up to 10. How many books did this helper shelve?</h2><div className="steps">
<div><span>Step 1</span><p>Five helpers averaging 10 books shelve 50 altogether.</p></div>
<div><span>Step 2</span><p>Subtract the original total of 36.</p></div>
</div><div className="answerBox">The fifth helper shelved 14 books. Check that 50 ÷ 5 = 10.</div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 3</p><h2>Eight students average 12 laps and four others average 18. Find the combined mean.</h2><div className="steps">
<div><span>Step 1</span><p>Recover each total. The groups ran 8 × 12 = 96 and 4 × 18 = 72 laps.</p></div>
<div><span>Step 2</span><p>Divide the combined total by the combined headcount.</p></div>
</div><div className="answerBox">168 ÷ 12 = 14 laps per student.</div></section>
<section className="noteCard"><div className="numberBadge">2</div><div><h2>Median · locating the centre</h2><p>Sort the observations. For an odd count n, take position (n + 1)/2. For an even count, average the values at positions n/2 and n/2 + 1.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 4</p><h2>Five journeys take 9, 4, 15, 6 and 8 minutes. What changes when a 16-minute journey is added?</h2><div className="steps">
<div><span>Step 1</span><p>Sort the five times to get 4, 6, 8, 9, 15. The third value is 8.</p></div>
<div><span>Step 2</span><p>With 16 at the end, the two central values are 8 and 9.</p></div>
</div><div className="answerBox">The median rises from 8 minutes to 8.5 minutes.</div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 5</p><h2>In the ordered list 2, 5, x, 12 the median is 7. Find x.</h2><div className="steps">
<div><span>Step 1</span><p>The middle pair is 5 and x. Their sum must be twice the median.</p></div>
<div><span>Step 2</span><p>Subtract 5 from 14. Check that the result lies between 5 and 12.</p></div>
</div><div className="answerBox">x = 9.</div></section>
<section className="noteCard"><div className="numberBadge">3</div><div><h2>Mode · counting repeats</h2><p>A mode is a value with the highest frequency. In this course, equally frequent values give no mode. If several values tie above the others, list each of them.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 6</p><h2>Which values are modes in 4, 4, 6, 7, 7? What if one more 7 is added?</h2><div className="steps">
<div><span>Step 1</span><p>Both 4 and 7 occur twice. The 6 occurs once.</p></div>
<div><span>Step 2</span><p>After adding a 7, its frequency rises to three.</p></div>
</div><div className="answerBox">Initially the modes are 4 and 7. Afterwards 7 is the only mode.</div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 7</p><h2>For 3, 3, 8, x, y to have 8 as its only mode, what must x and y be?</h2><div className="steps">
<div><span>Step 1</span><p>The frequency of 3 is already two.</p></div>
<div><span>Step 2</span><p>The single 8 needs both remaining observations to reach three.</p></div>
</div><div className="answerBox">x = y = 8.</div></section>
<section className="noteCard"><div className="numberBadge">4</div><div><h2>Read a stem-and-leaf diagram</h2><p>Each leaf represents one observation. Use the key to combine each stem and leaf, including repeated leaves.</p></div></section>
<table><caption>Journey times in minutes · key: 1 | 2 = 12 min</caption><thead><tr><th>Stem</th><th>Leaves</th></tr></thead><tbody><tr><th>0</th><td>8</td></tr><tr><th>1</th><td>2　2　4</td></tr><tr><th>2</th><td>4</td></tr></tbody></table><section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 8</p><h2>What do the three measures tell us about these journeys?</h2><div className="steps">
<div><span>Step 1</span><p>Read the five times as 8, 12, 12, 14 and 24. Their total is 70.</p></div>
<div><span>Step 2</span><p>The third observation is 12. It is also the only repeated time.</p></div>
</div><div className="answerBox">Mean = 14 min, median = 12 min and mode = 12 min.</div></section>
<section className="noteCard"><div className="numberBadge">5</div><div><h2>Choose a suitable measure</h2><p>Use the mean to share a total. The median describes a typical position when an extreme value pulls the mean away. The mode answers questions about the most popular value or category.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 9</p><h2>A stall sells caps in sizes S, M, M, M and L. Which size should it restock first?</h2><div className="steps">
<div><span>Step 1</span><p>Count sales for each size. M accounts for three of the five sales.</p></div>
<div><span>Step 2</span><p>The decision depends on demand for a particular size.</p></div>
</div><div className="answerBox">Restock M first, the modal size.</div></section>
<section className="noteCard"><div className="numberBadge">6</div><div><h2>Compare two groups</h2><p>Use the same measure and units for both groups. Look for extreme values and check whether the most frequent value represents many observations.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 10</p><h2>Which bus usually has the shorter wait? A takes 3, 4, 5, 6, 42 minutes. B takes 6, 7, 8, 9, 10.</h2><div className="steps">
<div><span>Step 1</span><p>One long delay raises the mean for A to 12 minutes. The mean for B is 8 minutes.</p></div>
<div><span>Step 2</span><p>Compare the middle of each ordered list. The medians are 5 and 8 minutes.</p></div>
</div><div className="answerBox">A has the shorter typical wait by 3 minutes, although its long delay makes its average wait longer.</div></section>
<section className="mistakesCard"><h2>Common mistakes</h2><p>Averaging 12 and 18 gives 15 laps, but that gives each group equal influence despite their different sizes. Use the total laps and total headcount.</p><p>For 9, 2, 5 the second entry is 2. Sorting first gives 2, 5, 9 and a median of 5.</p></section><section className="summaryCard"><h2>Section Summary</h2><p>Mean uses the total, median uses ordered positions and mode uses frequency. Support a comparison with a value from each group and explain why the measure suits the question.</p><button
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