"use client";

import { useRouter } from "next/navigation";

const strategyCards = [
  {
    symbol: "↔",
    title: "Rounding off",
    subtitle: "Use the nearest value",
    example: "47 ≈ 50",
    reference: "[Reference: rounding off]",
    tone: "nearest",
  },
  {
    symbol: "↓",
    title: "Rounding down",
    subtitle: "Use the next lower value",
    example: "47 ≈ 40",
    reference: "[Reference: rounding down]",
    tone: "down",
  },
  {
    symbol: "↑",
    title: "Rounding up",
    subtitle: "Use the next higher value",
    example: "47 ≈ 50",
    reference: "[Reference: rounding up]",
    tone: "up",
  },
];

const decisionCards = [
  {
    number: "1",
    title: "A close estimate",
    text: "Round off when the aim is to obtain a value close to the exact answer.",
    answer: "ROUND OFF",
  },
  {
    number: "2",
    title: "Complete groups only",
    text: "Round down when an incomplete group cannot be counted as a complete one.",
    answer: "ROUND DOWN",
  },
  {
    number: "3",
    title: "Enough must be provided",
    text: "Round up when underestimating could leave too little money, material or capacity.",
    answer: "ROUND UP",
  },
];

export default function EstimationStrategiesPage() {
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
        <p className="eyebrow">S1 · CHAPTER 11 · SECTION 2</p>
        <h1>Estimation Strategies</h1>
        <p className="introduction">
          Estimate an expression by replacing its numbers with convenient
          nearby values. Choose rounding off, rounding down or rounding up to
          suit the purpose of the estimate.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading
          number="1"
          label="ROUND TO A PLACE VALUE"
          title="First decide the required degree of accuracy"
        />

        <div className="twoColumn">
          <div className="placeValuePanel">
            <p className="panelLabel">ROUND 6,482 TO THE NEAREST HUNDRED</p>
            <div className="placeValueNumber" aria-label="Six thousand four hundred and eighty-two">
              <span><b>6,</b><small className="emptyLabel">empty</small></span>
              <span className="targetDigit"><b>4</b><small>hundreds</small></span>
              <span className="checkDigit"><b>8</b><small>check</small></span>
              <span><b>2</b><small className="emptyLabel">empty</small></span>
            </div>
            <div className="roundingResult">6,482 ≈ 6,500</div>
          </div>

          <div className="stepsPanel">
            <p className="panelLabel">METHOD</p>
            <div className="methodStep">
              <span>1</span>
              <p>Find the digit in the required place.</p>
            </div>
            <div className="methodStep">
              <span>2</span>
              <p>Look at the digit immediately to its right.</p>
            </div>
            <div className="methodStep">
              <span>3</span>
              <p>Since 8 ≥ 5, increase the hundreds digit by 1.</p>
            </div>
          </div>
        </div>

        <div className="memoryStrip">
          <strong>Rounding rule:</strong> if the checking digit is 0–4, keep the
          target digit; if it is 5–9, increase the target digit by 1.
        </div>
        <p className="reference centred">[Reference: rounding off]</p>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="2"
          label="THREE STRATEGIES"
          title="The same number can be estimated in different ways"
        />

        <div className="strategyGrid">
          {strategyCards.map((strategy) => (
            <article className={`strategyCard ${strategy.tone}`} key={strategy.title}>
              <span className="strategyIcon">{strategy.symbol}</span>
              <p>{strategy.title.toUpperCase()}</p>
              <h3>{strategy.subtitle}</h3>
              <div className="strategyFormula">{strategy.example}</div>
              <small>{strategy.reference}</small>
            </article>
          ))}
        </div>

        <div className="noteStrip">
          <strong>Notice:</strong> rounding off and rounding up give the same
          result for 47 to the nearest ten, but they use different rules and may
          give different results for another number.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="3"
          label="COMPARE THE METHODS"
          title="Estimate one expression in three ways"
        />

        <div className="expressionBanner">
          Estimate <strong>4.36 + 2.71 + 5.18</strong> by rounding each number to
          1 decimal place.
        </div>

        <div className="calculationGrid">
          <article>
            <p>ROUNDING OFF</p>
            <div>4.36 ≈ 4.4</div>
            <div>2.71 ≈ 2.7</div>
            <div>5.18 ≈ 5.2</div>
            <strong>Estimate = 12.3</strong>
          </article>
          <article>
            <p>ROUNDING DOWN</p>
            <div>4.36 ≈ 4.3</div>
            <div>2.71 ≈ 2.7</div>
            <div>5.18 ≈ 5.1</div>
            <strong>Estimate = 12.1</strong>
          </article>
          <article>
            <p>ROUNDING UP</p>
            <div>4.36 ≈ 4.4</div>
            <div>2.71 ≈ 2.8</div>
            <div>5.18 ≈ 5.2</div>
            <strong>Estimate = 12.4</strong>
          </article>
        </div>

        <div className="checkStrip">
          <strong>Exact value:</strong>
          <span>4.36 + 2.71 + 5.18 = 12.25. Each estimate has a different purpose.</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="4"
          label="CHOOSE A SUITABLE STRATEGY"
          title="The situation determines the best method"
        />

        <div className="decisionGrid">
          {decisionCards.map((item) => (
            <article key={item.number}>
              <div className="decisionTop">
                <span>{item.number}</span>
                <strong>{item.answer}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="warningBox">
          <strong>Important:</strong> a mathematically close estimate is not
          always the most useful practical estimate. Always consider what the
          estimated value will be used for.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="5"
          label="WORKED EXAMPLE"
          title="Round up when the estimated budget must be sufficient"
        />

        <div className="workedGrid">
          <div className="workedQuestion">
            <p className="panelLabel">QUESTION</p>
            <h3>Three activity items cost £27, £36 and £48.</h3>
            <p>
              Estimate the total amount of money needed. The estimate must not
              be less than the exact cost.
            </p>
            <div className="priceRow">
              <span>£27</span><b>+</b><span>£36</span><b>+</b><span>£48</span>
            </div>
          </div>

          <div className="solutionPanel">
            <p className="panelLabel">SOLUTION</p>
            <div className="solutionStep">
              <span>1</span>
              <div>
                <p>Choose rounding up because the money must be sufficient.</p>
                <strong>[Reference: rounding up]</strong>
              </div>
            </div>
            <div className="solutionStep">
              <span>2</span>
              <div>
                <p>Round each cost up to the next ten.</p>
                <strong>£27 ≈ £30, £36 ≈ £40, £48 ≈ £50</strong>
              </div>
            </div>
            <div className="solutionStep">
              <span>3</span>
              <div>
                <p>Add the estimated costs.</p>
                <strong>£30 + £40 + £50 = £120</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="answerStrip">
          <span>Estimated budget</span>
          <strong>£120</strong>
          <p>The exact cost is £111, so £120 is sufficient.</p>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="6"
          label="ESTIMATION CHECKLIST"
          title="Use this order every time"
        />

        <div className="checklistGrid">
          <article><b>1</b><strong>Read the purpose</strong><p>Decide whether the estimate should be close, lower or higher.</p></article>
          <article><b>2</b><strong>Choose a strategy</strong><p>Use rounding off, rounding down or rounding up.</p></article>
          <article><b>3</b><strong>Choose accuracy</strong><p>Round every value to a suitable and consistent place value.</p></article>
          <article><b>4</b><strong>Calculate and check</strong><p>Use ≈ and decide whether the result is sensible.</p></article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Three strategies to remember</h2>
        <div className="summaryGrid">
          <article><span>↔</span><strong>Rounding off</strong><p>Use nearby values to obtain a close estimate.</p></article>
          <article><span>↓</span><strong>Rounding down</strong><p>Use lower values when only complete groups count.</p></article>
          <article><span>↑</span><strong>Rounding up</strong><p>Use higher values when enough must be provided.</p></article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-11")}
      >
        Finish Section 2 →
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
        .introduction { max-width: 900px; margin: 18px 0 0; color: #49627f; font-size: 20px; line-height: 1.62; }
        .lessonCard { padding: 30px; margin-bottom: 22px; border: 1px solid #dce7f2; border-radius: 25px; background: white; box-shadow: 0 12px 32px rgba(16,34,63,.055); }
        .lessonHeading { display: grid; grid-template-columns: 54px 1fr; gap: 16px; align-items: center; margin-bottom: 24px; }
        .lessonNumber { width: 54px; height: 54px; display: grid; place-items: center; border-radius: 16px; background: #bae6fd; color: #0369a1; font-size: 24px; font-weight: 900; }
        .lessonLabel { margin: 0 0 4px; color: #7c3aed; font-size: 13px; font-weight: 900; letter-spacing: .11em; }
        .lessonHeading h2 { margin: 0; font-size: clamp(24px, 3.1vw, 34px); line-height: 1.15; }
        .twoColumn, .workedGrid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 20px; }
        .placeValuePanel { min-height: 275px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px; border: 1px solid #dce7f2; border-radius: 20px; background: #f8fafc; }
        .placeValuePanel .panelLabel { align-self: stretch; text-align: center; }
        .placeValueNumber { width: min(100%, 370px); display: grid; grid-template-columns: repeat(4, minmax(68px, 1fr)); gap: 4px; align-items: start; margin: 22px 0 8px; font: 900 clamp(46px, 7vw, 70px) Georgia, serif; }
        .placeValueNumber > span { min-width: 0; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .placeValueNumber b { font: inherit; line-height: 1; }
        .placeValueNumber small { width: 100%; min-height: 27px; display: block; margin-top: 8px; padding-top: 6px; border-top: 7px solid currentColor; font: 800 11px Inter, sans-serif; letter-spacing: .04em; text-align: center; text-transform: uppercase; white-space: nowrap; }
        .placeValueNumber .emptyLabel { visibility: hidden; }
        .targetDigit { color: #6d28d9; }
        .targetDigit small { color: #6d28d9; }
        .checkDigit { color: #ea580c; }
        .checkDigit small { color: #ea580c; }
        .roundingResult { margin-top: 12px; color: #0369a1; font: 800 30px Georgia, serif; }
        .stepsPanel { padding: 25px; border: 1px solid #a7f3d0; border-radius: 20px; background: #ecfdf5; }
        .methodStep { display: grid; grid-template-columns: 40px 1fr; gap: 13px; align-items: start; padding: 15px 0; border-top: 1px solid #a7f3d0; }
        .methodStep:first-of-type { margin-top: 8px; }
        .methodStep span, .solutionStep > span { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 12px; background: #0f766e; color: white; font-weight: 900; }
        .methodStep p { margin: 6px 0 0; color: #405a76; line-height: 1.45; }
        .memoryStrip, .noteStrip, .warningBox, .checkStrip { margin-top: 20px; padding: 17px 20px; border-radius: 15px; color: #334e68; line-height: 1.55; }
        .memoryStrip, .noteStrip { border-left: 5px solid #0ea5e9; background: #f0f9ff; }
        .warningBox { border-left: 5px solid #f59e0b; background: #fff7ed; }
        .checkStrip { display: flex; gap: 10px; border-left: 5px solid #10b981; background: #ecfdf5; }
        .reference { margin-top: 12px; color: #0369a1; font-size: 14px; font-weight: 800; }
        .centred { text-align: center; }
        .strategyGrid, .calculationGrid, .decisionGrid, .summaryGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 15px; }
        .strategyCard { padding: 24px; border-radius: 20px; }
        .strategyCard.nearest { border: 1px solid #bae6fd; background: #f0f9ff; }
        .strategyCard.down { border: 1px solid #a7f3d0; background: #ecfdf5; }
        .strategyCard.up { border: 1px solid #fed7aa; background: #fff7ed; }
        .strategyIcon { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 14px; background: white; color: #7c3aed; font-size: 26px; font-weight: 900; }
        .strategyCard > p { margin: 17px 0 5px; color: #0369a1; font-size: 12px; font-weight: 900; letter-spacing: .1em; }
        .strategyCard h3 { margin: 0; font-size: 20px; }
        .strategyFormula { margin: 20px 0 13px; color: #0f766e; font: 800 28px Georgia, serif; }
        .strategyCard small { color: #526b84; font-weight: 800; }
        .expressionBanner { padding: 18px 20px; margin-bottom: 17px; border-radius: 16px; background: #ede9fe; color: #4c1d95; font-size: 18px; line-height: 1.5; }
        .calculationGrid article { padding: 22px; border: 1px solid #dce7f2; border-radius: 18px; background: #fbfdff; }
        .calculationGrid p { margin: 0 0 14px; color: #7c3aed; font-size: 12px; font-weight: 900; letter-spacing: .1em; }
        .calculationGrid div { padding: 5px 0; color: #526b84; font: 700 18px Georgia, serif; }
        .calculationGrid strong { display: block; margin-top: 14px; padding-top: 14px; border-top: 1px solid #dce7f2; color: #0f766e; font-size: 20px; }
        .decisionGrid article { min-height: 210px; padding: 21px; border: 1px solid #dce7f2; border-radius: 18px; background: #fbfdff; }
        .decisionTop { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .decisionTop span { width: 39px; height: 39px; display: grid; place-items: center; border-radius: 11px; background: #ede9fe; color: #6d28d9; font-weight: 900; }
        .decisionTop strong { color: #0369a1; font-size: 12px; letter-spacing: .08em; }
        .decisionGrid h3 { margin: 18px 0 8px; font-size: 20px; }
        .decisionGrid p { margin: 0; color: #5a7088; line-height: 1.5; }
        .workedQuestion { padding: 26px; border: 1px solid #dce7f2; border-radius: 20px; background: #f8fafc; }
        .workedQuestion h3 { margin: 9px 0 8px; font-size: 23px; line-height: 1.35; }
        .workedQuestion > p:last-of-type { color: #526b84; line-height: 1.5; }
        .priceRow { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 28px; }
        .priceRow span { padding: 15px 18px; border-radius: 14px; background: white; color: #7c3aed; font-size: 24px; font-weight: 900; }
        .priceRow b { color: #64748b; font-size: 22px; }
        .solutionPanel { padding: 26px; border: 1px solid #a7f3d0; border-radius: 20px; background: #ecfdf5; }
        .solutionStep { display: grid; grid-template-columns: 40px 1fr; gap: 13px; margin-top: 15px; padding-top: 15px; border-top: 1px solid #a7f3d0; }
        .solutionStep p { margin: 1px 0 6px; color: #49627f; }
        .solutionStep strong { display: block; color: #0f766e; font-size: 17px; line-height: 1.4; }
        .answerStrip { display: grid; grid-template-columns: auto auto 1fr; gap: 14px; align-items: center; margin-top: 20px; padding: 18px 22px; border-radius: 16px; background: #ede9fe; }
        .answerStrip span { color: #4c1d95; font-weight: 800; }
        .answerStrip strong { color: #6d28d9; font-size: 28px; }
        .answerStrip p { margin: 0; color: #526b84; }
        .checklistGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; }
        .checklistGrid article { min-height: 165px; display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #dce7f2; border-radius: 18px; background: #fbfdff; }
        .checklistGrid b { width: 37px; height: 37px; display: grid; place-items: center; border-radius: 11px; background: #ede9fe; color: #6d28d9; font-weight: 900; }
        .checklistGrid strong { font-size: 18px; }
        .checklistGrid p { margin: 0; color: #5a7088; line-height: 1.45; }
        .summaryCard { padding: 32px; margin-top: 26px; border-radius: 25px; background: linear-gradient(135deg, #0369a1, #075985); color: white; }
        .summaryCard .summaryLabel { color: #bae6fd; }
        .summaryCard h2 { margin: 0 0 20px; font-size: 31px; }
        .summaryGrid article { min-height: 145px; padding: 18px; border-radius: 17px; background: rgba(255,255,255,.12); }
        .summaryGrid span { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 10px; background: #e0f2fe; color: #0369a1; font-weight: 900; }
        .summaryGrid strong { display: block; margin-top: 12px; }
        .summaryGrid p { margin: 7px 0 0; line-height: 1.4; }
        .finishButton { display: block; padding: 17px 30px; margin-top: 24px; border: 0; border-radius: 16px; background: #7c3aed; color: white; font-weight: 900; cursor: pointer; box-shadow: 0 10px 24px rgba(124,58,237,.2); }
        .finishButton:hover { background: #6d28d9; transform: translateY(-1px); }
        @media (max-width: 860px) {
          .twoColumn, .workedGrid { grid-template-columns: 1fr; }
          .strategyGrid, .calculationGrid, .decisionGrid, .summaryGrid { grid-template-columns: repeat(2, 1fr); }
          .checklistGrid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .page { padding: 22px 16px 55px; }
          .hero, .lessonCard, .summaryCard { padding: 22px 18px; border-radius: 20px; }
          .lessonHeading { grid-template-columns: 45px 1fr; gap: 12px; }
          .lessonNumber { width: 45px; height: 45px; border-radius: 13px; }
          .strategyGrid, .calculationGrid, .decisionGrid, .summaryGrid, .checklistGrid { grid-template-columns: 1fr; }
          .placeValueNumber { width: min(100%, 280px); grid-template-columns: repeat(4, minmax(54px, 1fr)); font-size: 45px; }
          .placeValueNumber small { font-size: 9px; }
          .priceRow { flex-wrap: wrap; }
          .answerStrip { grid-template-columns: 1fr; }
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
