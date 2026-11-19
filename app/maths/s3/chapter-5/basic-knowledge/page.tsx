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

      <header className="hero">
        <p className="eyebrow">SECTION 5.1</p><h1>Basic Knowledge of Probability</h1><p className="intro">Decide when to count equally likely outcomes and when to estimate a probability from repeated trials.</p></header>
<section className="noteCard"><div className="numberBadge">1</div><div><h2>From outcomes to events</h2><p>An outcome is one possible result. The sample space contains every possible outcome. An event groups the outcomes that meet a condition. Its probability measures how likely it is, on a scale from 0 to 1.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 1</p><h2>Which events can happen on a six-sided die?</h2><div className="steps"><div><span>Step 1</span><p>List the faces: 1, 2, 3, 4, 5 and 6.</p></div><div><span>Step 2</span><p>For “above 4”, only 5 and 6 are favourable. For “below 7”, every face is favourable. For “exactly 8”, none is favourable.</p></div></div><div className="answerBox">Above 4 is a random event. Below 7 is certain (probability 1). Exactly 8 is impossible (probability 0).</div></section>
<section className="noteCard"><div className="numberBadge">2</div><div><h2>Counting equally likely outcomes</h2><p>For a finite sample space of equally likely outcomes, <MathFormula formula={String.raw`P(E)=\frac{\text{favourable outcomes}}{\text{all possible outcomes}}`} />. Count individual objects or positions when each has the same chance of selection.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 2</p><h2>A tile is chosen at random from five tiles spelling LEVEL. What is the chance of E?</h2><div className="steps"><div><span>Step 1</span><p>There are five equally likely tile positions.</p></div><div><span>Step 2</span><p>Two positions carry E.</p></div></div><div className="answerBox"><MathFormula formula={String.raw`P(E)=\frac25`} /></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 3</p><h2>Choose a units digit at random to complete a number from 40 to 49. How likely is a multiple of 3?</h2><div className="steps"><div><span>Step 1</span><p>There are ten possible units digits, including 0.</p></div><div><span>Step 2</span><p>The multiples of 3 in this range are 42, 45 and 48.</p></div></div><div className="answerBox"><MathFormula formula={String.raw`P=\frac3{10}`} /></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 4</p><h2>A bag has 6 blue, 2 red and some green counters. A random counter is blue with probability ⅓. How many are green?</h2><div className="steps"><div><span>Step 1</span><p>Six blue counters account for one third of the total, so there are 18 counters.</p></div><div><span>Step 2</span><p>Remove the 6 blue and 2 red counters from the total.</p></div></div><div className="answerBox">There are 10 green counters. Check: 6 out of 18 are blue.</div></section>
<section className="noteCard"><div className="numberBadge">3</div><div><h2>Reading a distribution</h2><p>When one person is chosen at random, each person counts as one outcome. Add the frequencies to find the total.</p></div></section>
<figure><figcaption>After-school clubs · number of students</figcaption><p>Art <meter min="0" max="12" value="6" aria-label="Art students" /> 6</p><p>Drama <meter min="0" max="12" value="12" aria-label="Drama students" /> 12</p><p>Music <meter min="0" max="12" value="9" aria-label="Music students" /> 9</p></figure><section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 5</p><h2>Each student belongs to exactly one of the three clubs above. Find the chance that a randomly chosen student is outside Drama.</h2><div className="steps"><div><span>Step 1</span><p>There are 6 + 12 + 9 = 27 students.</p></div><div><span>Step 2</span><p>Art and Music account for 6 + 9 = 15 students.</p></div></div><div className="answerBox"><MathFormula formula={String.raw`P=\frac{15}{27}=\frac59`} /></div></section>
<section className="noteCard"><div className="numberBadge">4</div><div><h2>Playing cards</h2><p>A standard deck without jokers has 52 cards. Hearts and diamonds are red. Spades and clubs are black. Each suit has 13 ranks, including one ace and three face cards (J, Q and K).</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 6</p><h2>One card is drawn from a shuffled deck. How likely is a red face card?</h2><div className="steps"><div><span>Step 1</span><p>Each red suit has three face cards. The two red suits give six favourable cards.</p></div><div><span>Step 2</span><p>Count all 52 cards in the denominator.</p></div></div><div className="answerBox"><MathFormula formula={String.raw`P=\frac6{52}=\frac3{26}`} /></div></section>
<section className="noteCard"><div className="numberBadge">5</div><div><h2>Estimating probability from trials</h2><p>When chances are unknown, record the results under similar conditions. Relative frequency is <MathFormula formula={String.raw`\frac{\text{times the event occurred}}{\text{number of trials}}`} />. Use this proportion to estimate the chance on a future trial.</p></div></section>
<section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 7</p><h2>A player took 40 shots and scored 26 times. Estimate the probability of missing the next shot.</h2><div className="steps"><div><span>Step 1</span><p>There were 40 − 26 = 14 misses.</p></div><div><span>Step 2</span><p>Use all 40 attempts as the denominator.</p></div></div><div className="answerBox"><MathFormula formula={String.raw`\frac{14}{40}=0.35`} /> is an estimate for a shot under similar conditions.</div></section>
<section className="mistakesCard"><h2>Common mistakes</h2><p>In LEVEL, counting three distinct letters gives E a probability of ⅓. Instead count the five tile positions: two carry E.</p><p>A spinner with two colours can have unequal coloured areas. Counting colours alone cannot establish a probability of ½.</p></section><section className="summaryCard"><h2>Section Summary</h2><p>Identify the sample space and the event. Use counting for equally likely outcomes and observed frequencies for estimates. Check that your result lies between 0 and 1.</p>        <button
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
