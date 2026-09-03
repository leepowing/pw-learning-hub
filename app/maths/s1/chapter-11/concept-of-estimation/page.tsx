"use client";

import { useRouter } from "next/navigation";

const usesOfEstimation = [
  {
    number: "1",
    title: "Calculate quickly",
    text: "Use convenient nearby numbers to find an approximate result mentally.",
  },
  {
    number: "2",
    title: "Check an answer",
    text: "Compare an exact calculation with an estimate to see whether it is reasonable.",
  },
  {
    number: "3",
    title: "Plan safely",
    text: "Estimate costs, quantities or time before making a practical decision.",
  },
  {
    number: "4",
    title: "Communicate clearly",
    text: "Use an approximate value when an exact value is unnecessary or unavailable.",
  },
];

export default function ConceptOfEstimationPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-11")}
      >
        ← Back to Chapter 11
      </button>

      <header className="hero">
        <p className="eyebrow">S1 · CHAPTER 11 · SECTION 1</p>
        <h1>Concept of Estimation</h1>
        <p className="introduction">
          An estimate is a sensible value close to the exact value. It helps us
          calculate quickly, check answers and make practical decisions.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading
          number="1"
          label="MEANING OF ESTIMATION"
          title="An estimated value is close to the exact value"
        />

        <div className="twoColumn">
          <div className="diagramPanel">
            <svg
              className="numberLine"
              viewBox="0 0 640 300"
              role="img"
              aria-label="The exact value 368 shown between 300 and 400 and estimated as 400"
            >
              <line x1="80" y1="176" x2="560" y2="176" className="axis" />
              <path d="M548 164 L566 176 L548 188" className="arrow" />
              <line x1="120" y1="158" x2="120" y2="194" className="tick" />
              <line x1="480" y1="158" x2="480" y2="194" className="tick" />
              <circle cx="365" cy="176" r="10" className="exactPoint" />
              <path d="M365 144 Q424 102 480 144" className="estimateArrow" />
              <path d="M468 136 L480 144 L470 154" className="estimateArrowHead" />
              <text x="120" y="226" className="axisText">300</text>
              <text x="480" y="226" className="axisText">400</text>
              <text x="365" y="130" className="exactText">368</text>
              <text x="300" y="272" className="formulaText">368 ≈ 400</text>
            </svg>
          </div>

          <div className="factPanel">
            <p className="panelLabel">ESTIMATION</p>
            <div className="largeFormula">exact value ≈ estimated value</div>
            <p>
              The estimated value is not normally identical to the exact value,
              but it should be reasonably close and easier to use.
            </p>
            <p className="reference">[Reference: estimated value]</p>
          </div>
        </div>

        <div className="memoryStrip">
          <strong>Memory rule:</strong> an estimate should be close enough to be
          useful, but simple enough to make the calculation easier.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="2"
          label="EXACT AND ESTIMATED VALUES"
          title="Decide whether a value is exact or approximate"
        />

        <div className="comparisonGrid">
          <article className="comparisonPanel exactPanel">
            <div className="comparisonHeading">
              <span>=</span>
              <div>
                <p>EXACT VALUE</p>
                <h3>The precise value</h3>
              </div>
            </div>
            <p>
              An exact value has not been rounded or deliberately replaced by a
              nearby number.
            </p>
            <div className="exampleBox">
              <small>EXAMPLE</small>
              <strong>There are exactly 28 students.</strong>
            </div>
          </article>

          <article className="comparisonPanel estimatePanel">
            <div className="comparisonHeading">
              <span>≈</span>
              <div>
                <p>ESTIMATED VALUE</p>
                <h3>A nearby value</h3>
              </div>
            </div>
            <p>
              An estimated value has been rounded, measured approximately or
              chosen as a sensible close value.
            </p>
            <div className="exampleBox">
              <small>EXAMPLE</small>
              <strong>The journey is about 20 km.</strong>
            </div>
          </article>
        </div>

        <div className="questionStrip">
          <div>
            <strong>Exact or estimated?</strong>
            <span>A theatre sold 503 tickets.</span>
          </div>
          <div>
            <strong>Exact or estimated?</strong>
            <span>About 500 people attended.</span>
          </div>
          <p>
            <b>Answers:</b> 503 is exact; about 500 is estimated.
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="3"
          label="ESTIMATION SYMBOL"
          title="Use ≈ for approximately equal to"
        />

        <div className="symbolGrid">
          <article>
            <span className="symbol equalSymbol">=</span>
            <div>
              <h3>Exactly equal</h3>
              <div className="symbolFormula">18 + 24 + 49 = 91</div>
              <p>Both sides have exactly the same value.</p>
            </div>
          </article>

          <article>
            <span className="symbol approxSymbol">≈</span>
            <div>
              <h3>Approximately equal</h3>
              <div className="symbolFormula">18 + 24 + 49 ≈ 90</div>
              <p>90 is close to 91, but the two values are not identical.</p>
            </div>
          </article>
        </div>

        <div className="warningBox">
          <strong>Common mistake:</strong> do not write 18 + 24 + 49 = 90. The
          value 90 is an estimate, so the correct symbol is ≈.
        </div>
        <p className="reference centred">[Reference: ≈ means approximately equal to]</p>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="4"
          label="WHY WE ESTIMATE"
          title="Estimation has several useful purposes"
        />

        <div className="usesGrid">
          {usesOfEstimation.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="tipStrip">
          <strong>Important:</strong> the best estimate depends on its purpose.
          Section 2 explains when to round off, round down or round up.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="5"
          label="WORKED EXAMPLE"
          title="Use an estimate to check whether an answer is reasonable"
        />

        <div className="workedGrid">
          <div className="workedQuestion">
            <p className="panelLabel">QUESTION</p>
            <h3>A school event recorded 198, 304 and 497 visitors.</h3>
            <p>Estimate the total number of visitors to the nearest hundred.</p>
            <div className="visitorCards">
              <span>198</span>
              <b>+</b>
              <span>304</span>
              <b>+</b>
              <span>497</span>
            </div>
          </div>

          <div className="solutionPanel">
            <p className="panelLabel">SOLUTION</p>
            <div className="solutionStep">
              <span>1</span>
              <div>
                <p>Replace each number by a nearby hundred.</p>
                <strong>198 ≈ 200, 304 ≈ 300, 497 ≈ 500</strong>
              </div>
            </div>
            <div className="solutionStep">
              <span>2</span>
              <div>
                <p>Add the convenient values.</p>
                <strong>200 + 300 + 500 = 1,000</strong>
              </div>
            </div>
            <div className="solutionStep">
              <span>3</span>
              <div>
                <p>State the estimated answer correctly.</p>
                <strong>Total ≈ 1,000 visitors</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="checkStrip">
          <strong>Check:</strong>
          <span>The exact total is 999, so the estimate of 1,000 is reasonable.</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="6"
          label="ESTIMATION CHECKLIST"
          title="Four questions to ask"
        />

        <div className="checklistGrid">
          <article><b>1</b><strong>What is required?</strong><p>An exact value or an estimated value?</p></article>
          <article><b>2</b><strong>What accuracy?</strong><p>Which place value will make the numbers convenient?</p></article>
          <article><b>3</b><strong>Which symbol?</strong><p>Use = for exact equality and ≈ for approximation.</p></article>
          <article><b>4</b><strong>Is it sensible?</strong><p>Compare the estimate with the size of the original values.</p></article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Four facts to remember</h2>
        <div className="summaryGrid">
          <article><span>1</span><p>An exact value is precise.</p></article>
          <article><span>2</span><p>An estimated value is a sensible nearby value.</p></article>
          <article><span>3</span><p>The symbol ≈ means approximately equal to.</p></article>
          <article><span>4</span><p>Estimates help us calculate, check and plan.</p></article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-11")}
      >
        Finish Section 1 →
      </button>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f4f7fb; color: #10223f; }
        button { font: inherit; }
        .page { min-height: 100vh; padding: 34px 5vw 70px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .page > * { width: min(1180px, 100%); margin-left: auto; margin-right: auto; }
        .backButton { display: block; padding: 8px 0; margin-bottom: 18px; border: 0; background: transparent; color: #0369a1; font-weight: 800; cursor: pointer; }
        .backButton:hover { color: #7c3aed; }
        .hero { padding: 38px 42px; margin-bottom: 24px; border: 1px solid #7dd3fc; border-radius: 28px; background: linear-gradient(135deg, #e0f2fe 0%, #ecfeff 62%, #ede9fe 100%); }
        .eyebrow, .panelLabel, .summaryLabel { margin: 0 0 8px; color: #0369a1; font-size: 14px; font-weight: 900; letter-spacing: .12em; }
        h1 { margin: 0; font-size: clamp(35px, 5vw, 58px); line-height: 1.04; letter-spacing: -.035em; }
        .introduction { max-width: 880px; margin: 18px 0 0; color: #49627f; font-size: 20px; line-height: 1.62; }
        .lessonCard { padding: 30px; margin-bottom: 22px; border: 1px solid #dce7f2; border-radius: 25px; background: white; box-shadow: 0 12px 32px rgba(16,34,63,.055); }
        .lessonHeading { display: grid; grid-template-columns: 54px 1fr; gap: 16px; align-items: center; margin-bottom: 24px; }
        .lessonNumber { width: 54px; height: 54px; display: grid; place-items: center; border-radius: 16px; background: #bae6fd; color: #0369a1; font-size: 24px; font-weight: 900; }
        .lessonLabel { margin: 0 0 4px; color: #7c3aed; font-size: 13px; font-weight: 900; letter-spacing: .11em; }
        .lessonHeading h2 { margin: 0; font-size: clamp(24px, 3.1vw, 34px); line-height: 1.15; }
        .twoColumn, .workedGrid { display: grid; grid-template-columns: 1.08fr .92fr; gap: 20px; }
        .diagramPanel { min-height: 300px; display: grid; place-items: center; padding: 18px; border: 1px solid #e5edf5; border-radius: 20px; background: #f8fafc; }
        .numberLine { width: 100%; max-height: 310px; }
        .axis, .tick { stroke: #0f766e; stroke-width: 6; stroke-linecap: round; }
        .arrow { fill: none; stroke: #0f766e; stroke-width: 6; stroke-linecap: round; stroke-linejoin: round; }
        .exactPoint { fill: #7c3aed; stroke: white; stroke-width: 4; }
        .estimateArrow, .estimateArrowHead { fill: none; stroke: #f97316; stroke-width: 6; stroke-linecap: round; }
        .axisText { fill: #334e68; font-size: 22px; font-weight: 850; text-anchor: middle; }
        .exactText { fill: #7c3aed; font-size: 26px; font-weight: 900; text-anchor: middle; }
        .formulaText { fill: #0369a1; font: 900 31px Georgia, serif; text-anchor: middle; }
        .factPanel { display: flex; flex-direction: column; justify-content: center; padding: 28px; border: 1px solid #7dd3fc; border-radius: 20px; background: #f0f9ff; }
        .largeFormula { margin: 5px 0 16px; color: #0369a1; font: 700 clamp(27px, 3.2vw, 41px) Georgia, "Times New Roman", serif; }
        .factPanel p { color: #405a76; font-size: 17px; line-height: 1.55; }
        .reference { margin-top: 12px !important; color: #0369a1 !important; font-size: 14px !important; font-weight: 800; }
        .centred { text-align: center; }
        .memoryStrip, .tipStrip, .warningBox, .checkStrip { margin-top: 20px; padding: 17px 20px; border-radius: 15px; color: #334e68; line-height: 1.55; }
        .memoryStrip, .tipStrip { border-left: 5px solid #0ea5e9; background: #f0f9ff; }
        .warningBox { border-left: 5px solid #f59e0b; background: #fff7ed; }
        .checkStrip { display: flex; gap: 10px; border-left: 5px solid #10b981; background: #ecfdf5; }
        .comparisonGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
        .comparisonPanel { padding: 25px; border-radius: 20px; }
        .exactPanel { border: 1px solid #bae6fd; background: #f0f9ff; }
        .estimatePanel { border: 1px solid #ddd6fe; background: #faf5ff; }
        .comparisonHeading { display: flex; align-items: center; gap: 14px; }
        .comparisonHeading > span { width: 50px; height: 50px; display: grid; place-items: center; border-radius: 14px; background: white; color: #0369a1; font: 900 30px Georgia, serif; }
        .comparisonHeading p { margin: 0 0 4px; color: #0369a1; font-size: 13px; font-weight: 900; letter-spacing: .1em; }
        .comparisonHeading h3 { margin: 0; font-size: 22px; }
        .comparisonPanel > p { min-height: 82px; color: #526b84; font-size: 16px; line-height: 1.55; }
        .exampleBox { padding: 16px; border-radius: 14px; background: white; }
        .exampleBox small { display: block; margin-bottom: 6px; color: #7c3aed; font-weight: 900; letter-spacing: .09em; }
        .exampleBox strong { color: #294766; }
        .questionStrip { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; padding: 18px; border-radius: 16px; background: #f8fafc; }
        .questionStrip > div { padding: 13px; border-radius: 12px; background: white; }
        .questionStrip strong, .questionStrip span { display: block; }
        .questionStrip strong { margin-bottom: 5px; color: #0369a1; }
        .questionStrip p { grid-column: 1 / -1; margin: 2px 0 0; color: #475569; }
        .symbolGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .symbolGrid article { display: grid; grid-template-columns: 65px 1fr; gap: 16px; padding: 23px; border: 1px solid #dce7f2; border-radius: 19px; background: #fbfdff; }
        .symbol { width: 65px; height: 65px; display: grid; place-items: center; border-radius: 17px; font: 900 35px Georgia, serif; }
        .equalSymbol { background: #e0f2fe; color: #0369a1; }
        .approxSymbol { background: #ede9fe; color: #7c3aed; }
        .symbolGrid h3 { margin: 3px 0 10px; font-size: 20px; }
        .symbolFormula { color: #0f766e; font: 800 23px Georgia, serif; }
        .symbolGrid p { margin: 9px 0 0; color: #64748b; line-height: 1.45; }
        .usesGrid, .checklistGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; }
        .usesGrid article, .checklistGrid article { min-height: 165px; display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #dce7f2; border-radius: 18px; background: #fbfdff; }
        .usesGrid span, .checklistGrid b { width: 37px; height: 37px; display: grid; place-items: center; border-radius: 11px; background: #ede9fe; color: #6d28d9; font-weight: 900; }
        .usesGrid strong, .checklistGrid strong { font-size: 18px; }
        .usesGrid p, .checklistGrid p { margin: 0; color: #5a7088; line-height: 1.45; }
        .workedQuestion { padding: 26px; border: 1px solid #dce7f2; border-radius: 20px; background: #f8fafc; }
        .workedQuestion h3 { margin: 9px 0 8px; font-size: 23px; line-height: 1.35; }
        .workedQuestion > p:last-of-type { color: #526b84; line-height: 1.5; }
        .visitorCards { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 28px; }
        .visitorCards span { padding: 15px 18px; border-radius: 14px; background: white; color: #7c3aed; font-size: 24px; font-weight: 900; }
        .visitorCards b { color: #64748b; font-size: 22px; }
        .solutionPanel { padding: 26px; border: 1px solid #a7f3d0; border-radius: 20px; background: #ecfdf5; }
        .solutionStep { display: grid; grid-template-columns: 39px 1fr; gap: 13px; margin-top: 15px; padding-top: 15px; border-top: 1px solid #a7f3d0; }
        .solutionStep > span { width: 39px; height: 39px; display: grid; place-items: center; border-radius: 12px; background: #0f766e; color: white; font-weight: 900; }
        .solutionStep p { margin: 1px 0 6px; color: #49627f; }
        .solutionStep strong { display: block; color: #0f766e; font-size: 19px; line-height: 1.4; }
        .summaryCard { padding: 32px; margin-top: 26px; border-radius: 25px; background: linear-gradient(135deg, #0369a1, #075985); color: white; }
        .summaryCard .summaryLabel { color: #bae6fd; }
        .summaryCard h2 { margin: 0 0 20px; font-size: 31px; }
        .summaryGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 13px; }
        .summaryGrid article { min-height: 120px; padding: 17px; border-radius: 17px; background: rgba(255,255,255,.12); }
        .summaryGrid span { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 10px; background: #e0f2fe; color: #0369a1; font-weight: 900; }
        .summaryGrid p { margin: 11px 0 0; font-weight: 750; line-height: 1.4; }
        .finishButton { display: block; padding: 17px 30px; margin-top: 24px; border: 0; border-radius: 16px; background: #7c3aed; color: white; font-weight: 900; cursor: pointer; box-shadow: 0 10px 24px rgba(124,58,237,.2); }
        .finishButton:hover { background: #6d28d9; transform: translateY(-1px); }
        @media (max-width: 860px) {
          .twoColumn, .workedGrid, .comparisonGrid, .symbolGrid { grid-template-columns: 1fr; }
          .usesGrid, .checklistGrid, .summaryGrid { grid-template-columns: repeat(2, 1fr); }
          .comparisonPanel > p { min-height: auto; }
        }
        @media (max-width: 560px) {
          .page { padding: 22px 16px 55px; }
          .hero, .lessonCard, .summaryCard { padding: 22px 18px; border-radius: 20px; }
          .lessonHeading { grid-template-columns: 45px 1fr; gap: 12px; }
          .lessonNumber { width: 45px; height: 45px; border-radius: 13px; }
          .usesGrid, .checklistGrid, .summaryGrid, .questionStrip { grid-template-columns: 1fr; }
          .questionStrip p { grid-column: auto; }
          .symbolGrid article { grid-template-columns: 50px 1fr; padding: 17px; }
          .symbol { width: 50px; height: 50px; }
          .diagramPanel { min-height: 230px; padding: 6px; }
          .visitorCards { flex-wrap: wrap; }
          .checkStrip { align-items: flex-start; flex-direction: column; }
        }
      `}</style>
    </main>
  );
}

function LessonHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div className="lessonHeading">
      <div className="lessonNumber">{number}</div>
      <div>
        <p className="lessonLabel">{label}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
