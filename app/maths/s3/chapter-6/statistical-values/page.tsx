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

export default function StatisticalValuesPage() {
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
        <p className="eyebrow">SECTION 6.2</p>
        <h1>Measures of Central Tendency and Some Statistical Values</h1>
        <p className="intro">How much can a table tell you once the individual observations have been grouped? Use the same set of journey times to build a graph and read its quartiles.</p>
      </header>
      <section className="noteCard"><div className="numberBadge">1</div><div><h2>Ungrouped data · count every observation</h2><p>Frequency f tells you how often a value x occurs. Its contribution to the total is xf. The exact mean is <MathFormula formula={String.raw`\bar{x}=\frac{\sum xf}{\sum f}`} />. Running totals locate the middle observation or pair.</p></div></section>
      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 1</p><h2>How many books did a reader typically borrow?</h2>
        <table><caption>Books borrowed by ten readers</caption><thead><tr><th scope="col">Books</th><th scope="col">Readers</th><th scope="col">Running total</th></tr></thead><tbody>
        <tr><td>0</td><td>2</td><td>2</td></tr>
        <tr><td>1</td><td>3</td><td>5</td></tr>
        <tr><td>2</td><td>4</td><td>9</td></tr>
        <tr><td>3</td><td>1</td><td>10</td></tr>
</tbody></table>
        <div className="steps">
          <div><span>Step 1</span><p>There are 10 readers. Together they borrowed 0 × 2 + 1 × 3 + 2 × 4 + 3 × 1 = 14 books.</p></div>
          <div><span>Step 2</span><p>The fifth reader borrowed 1 book and the sixth borrowed 2. Average those two values.</p></div>
          <div><span>Step 3</span><p>Four readers borrowed 2 books, the highest frequency.</p></div>
        </div><div className="answerBox">Mean = 1.4 books, median = 1.5 books and mode = 2 books.</div>
      </section>
      <section className="noteCard"><div className="numberBadge">2</div><div><h2>Grouped data · class marks and modal classes</h2><p>Represent each interval by its midpoint, called its class mark. Weight each midpoint by its frequency to estimate the mean. For equal-width intervals the one with the greatest frequency is the modal class. List tied highest classes if other frequencies are lower. Under this course convention, equal frequencies throughout give no modal class.</p></div></section>
      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 2</p><h2>Estimate the mean journey time for twenty cyclists.</h2>
        <table><caption>Journey times recorded to the nearest minute</caption><thead><tr><th scope="col">Time (min)</th><th scope="col">Class mark</th><th scope="col">Cyclists</th></tr></thead><tbody>
        <tr><td>1–10</td><td>5.5</td><td>4</td></tr>
        <tr><td>11–20</td><td>15.5</td><td>8</td></tr>
        <tr><td>21–30</td><td>25.5</td><td>6</td></tr>
        <tr><td>31–40</td><td>35.5</td><td>2</td></tr>
</tbody></table>
        <div className="steps">
          <div><span>Step 1</span><p>Average the endpoints of each interval. For 11–20 minutes, (11 + 20) ÷ 2 = 15.5 minutes.</p></div>
          <div><span>Step 2</span><p>The estimated total is 5.5 × 4 + 15.5 × 8 + 25.5 × 6 + 35.5 × 2 = 370 minutes. Divide by 20.</p></div>
        </div><div className="answerBox">Estimated mean = 18.5 minutes. The modal class is 11–20 minutes (8 cyclists). The individual times within each class are unknown.</div>
      </section>
      <section className="noteCard"><div className="numberBadge">3</div><div><h2>Build a cumulative frequency polygon</h2><p>Plot each upper class boundary against the running total. Begin at the first lower boundary with frequency zero, then join successive points. For times rounded to the nearest minute, the boundary between 10 and 11 is 10.5 minutes.</p></div></section>
      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 3</p><h2>Where does the median fall on the journey-time graph?</h2>
        <table><caption>Running totals at the class boundaries</caption><thead><tr><th scope="col">Time below (min)</th><th scope="col">Cumulative frequency</th></tr></thead><tbody>
        <tr><td>0.5</td><td>0</td></tr>
        <tr><td>10.5</td><td>4</td></tr>
        <tr><td>20.5</td><td>12</td></tr>
        <tr><td>30.5</td><td>18</td></tr>
        <tr><td>40.5</td><td>20</td></tr>
</tbody></table><svg role="img" aria-label="Cumulative frequency of journey times. The dashed guides meet at 18 minutes and 10 cyclists." viewBox="0 0 360 218" style={{width:"100%",maxWidth:540,display:"block",margin:"auto"}}>
<line x1="48.0" y1="34" x2="48.0" y2="174" stroke="#ccd9db"/><text x="48.0" y="191" textAnchor="middle">0.5</text>
<line x1="116.0" y1="34" x2="116.0" y2="174" stroke="#ccd9db"/><text x="116.0" y="191" textAnchor="middle">10.5</text>
<line x1="184.0" y1="34" x2="184.0" y2="174" stroke="#ccd9db"/><text x="184.0" y="191" textAnchor="middle">20.5</text>
<line x1="252.0" y1="34" x2="252.0" y2="174" stroke="#ccd9db"/><text x="252.0" y="191" textAnchor="middle">30.5</text>
<line x1="320.0" y1="34" x2="320.0" y2="174" stroke="#ccd9db"/><text x="320.0" y="191" textAnchor="middle">40.5</text>
<line x1="48" y1="174" x2="320" y2="174" stroke="#ccd9db"/><text x="40" y="178" textAnchor="end">0</text>
<line x1="48" y1="139" x2="320" y2="139" stroke="#ccd9db"/><text x="40" y="143" textAnchor="end">5</text>
<line x1="48" y1="104" x2="320" y2="104" stroke="#ccd9db"/><text x="40" y="108" textAnchor="end">10</text>
<line x1="48" y1="69" x2="320" y2="69" stroke="#ccd9db"/><text x="40" y="73" textAnchor="end">15</text>
<line x1="48" y1="34" x2="320" y2="34" stroke="#ccd9db"/><text x="40" y="38" textAnchor="end">20</text>
<text x="12" y="18">Cumulative frequency (cyclists)</text><text x="184" y="211" textAnchor="middle">Journey time (minutes)</text>
<polyline points="48,174 116,146 184,90 252,48 320,34" fill="none" stroke="#047857" strokeWidth="3"/>
<path d="M48 104 H167 V174" fill="none" stroke="#92400e" strokeDasharray="4 3"/></svg>
        <div className="steps">
          <div><span>Step 1</span><p>Half of 20 is 10. Trace across from 10 cyclists to the polygon, then down to the time axis.</p></div>
          <div><span>Step 2</span><p>Between 10.5 and 20.5 minutes the count rises from 4 to 12. To reach 10, move six eighths of the way across the interval.</p></div>
        </div><div className="answerBox">Estimated median = 10.5 + (6 ÷ 8) × 10 = 18 minutes.</div>
      </section>
      <section className="noteCard"><div className="numberBadge">4</div><div><h2>Percentiles and quartiles</h2><p>For a group of N observations, read the pth percentile at cumulative frequency N × p/100. Follow the same horizontal-then-vertical path on a polygon or a smooth cumulative frequency curve. Lower quartile, median and upper quartile correspond to the 25th, 50th and 75th percentiles.</p></div></section>
      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 4</p><h2>What times enclose the middle half of the cycle journeys?</h2>

        <div className="steps">
          <div><span>Step 1</span><p>For the lower quartile use 20 × 0.25 = 5 cyclists. Move one eighth of the way from 10.5 to 20.5 minutes.</p></div>
          <div><span>Step 2</span><p>For the upper quartile use 20 × 0.75 = 15 cyclists. This is halfway between counts 12 and 18, so read halfway from 20.5 to 30.5 minutes.</p></div>
        </div><div className="answerBox">The middle half lies between approximately 11.75 and 25.5 minutes.</div>
      </section>
      <section className="workedExample">
        <p className="exampleLabel">WORKED EXAMPLE 5</p><h2>What time marks the start of the longest 5% of journeys?</h2>

        <div className="steps">
          <div><span>Step 1</span><p>The longest 5% lie above the 95th percentile. Its cumulative frequency is 0.95 × 20 = 19.</p></div>
          <div><span>Step 2</span><p>Read halfway between the final two plotted points, where the count increases from 18 to 20.</p></div>
        </div><div className="answerBox">The estimated cutoff is 35.5 minutes. Reading the graph in reverse, 12 of 20 journeys fall below 20.5 minutes, so that boundary marks the 60th percentile.</div>
      </section>
      <section className="mistakesCard"><h2>Common mistakes</h2><p>Dividing 14 books by four table rows gives 3.5. The question asks for books per reader, so divide by ten readers.</p><p>A cumulative frequency of 15 counts cyclists. Read across and down before reporting a journey time in minutes.</p></section>
      <section className="summaryCard"><h2>Section Summary</h2><p>Use exact values for an ungrouped mean and class marks for a grouped estimate. Report the modal interval. To find a percentile, convert the percentage to a count and read the corresponding value on the graph.</p>
<button
          type="button"
          onClick={() => router.push("/maths/s3/chapter-6")}
          className="finishButton"
        >
          Return to Chapter 6 →
        </button>
      </section>

      <style jsx>{`
        table { margin: 1rem auto; border-collapse: collapse; } th, td { padding: 6px 8px; border-bottom: 1px solid #cbd5e1; }
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