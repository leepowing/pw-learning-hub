"use client";

import { useRouter } from "next/navigation";

const classificationExamples = [
  {
    item: "Number of students in a class",
    action: "Count",
    type: "Discrete",
    reason: "Only whole-number counts are possible.",
  },
  {
    item: "Time taken to run 100 m",
    action: "Measure",
    type: "Continuous",
    reason: "Any time within a range may be recorded.",
  },
  {
    item: "Number of emails received",
    action: "Count",
    type: "Discrete",
    reason: "The possible values are separate counts.",
  },
  {
    item: "Mass of a school bag",
    action: "Measure",
    type: "Continuous",
    reason: "The mass may take any value in a range.",
  },
];

export default function DifferentTypesOfDataPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-12")}
      >
        ← Back to Chapter 12
      </button>

      <header className="hero">
        <p className="eyebrow">S1 · CHAPTER 12 · SECTION 2</p>
        <h1>Different Types of Data</h1>
        <p className="introduction">
          Numerical data may be discrete or continuous. Ask whether the values
          are counted or measured, then look at the possible values.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading
          number="1"
          label="TWO TYPES OF NUMERICAL DATA"
          title="First decide whether the data is counted or measured"
        />

        <div className="decisionGrid">
          <article className="decisionPanel discreteTint">
            <span className="decisionIcon">123</span>
            <div>
              <p className="panelLabel">COUNT</p>
              <h3>Discrete data</h3>
              <p>Values occur as separate possibilities with gaps between them.</p>
            </div>
          </article>
          <div className="orBadge">OR</div>
          <article className="decisionPanel continuousTint">
            <span className="decisionIcon">↔</span>
            <div>
              <p className="panelLabel">MEASURE</p>
              <h3>Continuous data</h3>
              <p>Any value within a suitable range may be possible.</p>
            </div>
          </article>
        </div>

        <div className="memoryStrip">
          <strong>Quick question:</strong> Can the value fall between two listed
          values? If yes, the data is usually continuous.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="2"
          label="DISCRETE DATA"
          title="Discrete data can take only specific values"
        />

        <div className="twoColumn">
          <div className="diagramPanel">
            <p className="diagramTitle">NUMBER OF PENS IN A PENCIL CASE</p>
            <svg viewBox="0 0 660 290" role="img" aria-label="Separate points at zero, one, two, three, four and five pens">
              <line x1="70" y1="170" x2="590" y2="170" className="axis" />
              {[0, 1, 2, 3, 4, 5].map((value) => {
                const x = 90 + value * 96;
                return (
                  <g key={value}>
                    <line x1={x} y1="155" x2={x} y2="185" className="tick" />
                    <circle cx={x} cy="170" r="13" className="discreteDot" />
                    <text x={x} y="225" className="axisLabel">{value}</text>
                  </g>
                );
              })}
              <text x="330" y="265" className="axisCaption">Number of pens</text>
            </svg>
            <p className="diagramNote">There are separate possible values. You cannot have 2.4 pens.</p>
          </div>

          <div className="definitionPanel">
            <p className="panelLabel">DEFINITION</p>
            <h3>Specific, separated values</h3>
            <p>
              Discrete data can take only particular values. It is commonly
              obtained by counting.
            </p>
            <div className="formulaBox">0, 1, 2, 3, ...</div>
            <ul>
              <li>number of students</li>
              <li>number of goals scored</li>
              <li>number of books borrowed</li>
            </ul>
            <p className="reference">[Reference: discrete data]</p>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="3"
          label="CONTINUOUS DATA"
          title="Continuous data can take any value within a range"
        />

        <div className="twoColumn">
          <div className="diagramPanel">
            <p className="diagramTitle">MASS OF A SCHOOL BAG</p>
            <svg viewBox="0 0 660 290" role="img" aria-label="A continuous scale from two to four kilograms, including 3.27 kilograms">
              <defs>
                <linearGradient id="continuousGradient" x1="0" x2="1">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <line x1="90" y1="165" x2="570" y2="165" className="continuousLine" />
              <line x1="90" y1="145" x2="90" y2="185" className="tick" />
              <line x1="330" y1="145" x2="330" y2="185" className="tick" />
              <line x1="570" y1="145" x2="570" y2="185" className="tick" />
              <circle cx="395" cy="165" r="14" className="measurePoint" />
              <path d="M395 142 L395 105" className="pointer" />
              <rect x="342" y="53" width="106" height="50" rx="15" className="measureLabelBox" />
              <text x="395" y="87" className="measureLabel">3.27 kg</text>
              <text x="90" y="225" className="axisLabel">2 kg</text>
              <text x="330" y="225" className="axisLabel">3 kg</text>
              <text x="570" y="225" className="axisLabel">4 kg</text>
              <text x="330" y="265" className="axisCaption">Every point on the scale is possible</text>
            </svg>
            <p className="diagramNote">A more precise instrument may record more decimal places.</p>
          </div>

          <div className="definitionPanel continuousDefinition">
            <p className="panelLabel">DEFINITION</p>
            <h3>Any value in a range</h3>
            <p>
              Continuous data can take any value within a certain range. It is
              commonly obtained by measuring.
            </p>
            <div className="formulaBox">3 kg, 3.2 kg, 3.27 kg, ...</div>
            <ul>
              <li>height of a student</li>
              <li>time taken for a journey</li>
              <li>temperature of a room</li>
            </ul>
            <p className="reference">[Reference: continuous data]</p>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="4"
          label="COMPARE THE TWO TYPES"
          title="Look at all possible values, not only the values recorded"
        />

        <div className="comparisonTableWrap">
          <table className="comparisonTable">
            <thead>
              <tr>
                <th>Question to ask</th>
                <th>Discrete data</th>
                <th>Continuous data</th>
              </tr>
            </thead>
            <tbody>
              <tr><th>Usually found by</th><td>Counting</td><td>Measuring</td></tr>
              <tr><th>Possible values</th><td>Specific and separate</td><td>Any value in a range</td></tr>
              <tr><th>Values between?</th><td>Often not meaningful</td><td>Possible, even if not recorded</td></tr>
              <tr><th>Typical example</th><td>Number of pets</td><td>Mass of a pet</td></tr>
            </tbody>
          </table>
        </div>

        <div className="warningStrip">
          <strong>Important:</strong> a continuous measurement may be written as
          a whole number after rounding. That does not make the data discrete.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="5"
          label="WORKED CLASSIFICATION"
          title="Use count or measure, then justify the choice"
        />

        <div className="exampleGrid">
          {classificationExamples.map((example, index) => (
            <article key={example.item}>
              <div className="exampleTop">
                <span>{index + 1}</span>
                <b className={example.type === "Discrete" ? "discretePill" : "continuousPill"}>
                  {example.type}
                </b>
              </div>
              <h3>{example.item}</h3>
              <p><strong>{example.action}:</strong> {example.reason}</p>
            </article>
          ))}
        </div>

        <p className="reference centred">[Reference: types of data]</p>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="6"
          label="CHECK YOUR UNDERSTANDING"
          title="Classify data from everyday situations"
        />

        <div className="questionBox">
          <p className="panelLabel">PRACTICE</p>
          <h3>State whether each set of data is discrete or continuous.</h3>
          <ol>
            <li>The number of passengers on each bus</li>
            <li>The amount of water in each bottle</li>
            <li>The shoe size of each student</li>
            <li>The distance travelled by each cyclist</li>
          </ol>
        </div>

        <details className="practiceReveal">
          <summary>Show answer</summary>
          <div className="answerGrid">
            <p><b>1. Discrete</b> — passengers are counted.</p>
            <p><b>2. Continuous</b> — volume is measured.</p>
            <p><b>3. Discrete</b> — shoe sizes come from a fixed set of permitted values.</p>
            <p><b>4. Continuous</b> — distance is measured and may take any value in a range.</p>
          </div>
        </details>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Two definitions to remember</h2>
        <div className="summaryGrid">
          <article>
            <span>● ● ●</span>
            <h3>Discrete data</h3>
            <p>Can take only specific values, such as the number of pens.</p>
            <small>[Reference: discrete data]</small>
          </article>
          <article>
            <span>━━━━</span>
            <h3>Continuous data</h3>
            <p>Can take any value within a range, such as the mass of a school bag.</p>
            <small>[Reference: continuous data]</small>
          </article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-12")}
      >
        Finish Section 2 →
      </button>

      <style jsx>{`
        :global(*) { box-sizing: border-box; }
        :global(body) { margin: 0; background: #f3f6fb; color: #10213f; }
        .page { min-height: 100vh; padding: 30px clamp(18px, 5vw, 86px) 70px; font-family: Arial, Helvetica, sans-serif; }
        .backButton { border: 0; background: transparent; color: #5b21b6; font-weight: 800; font-size: 16px; cursor: pointer; padding: 10px 0; }
        .hero { max-width: 1160px; margin: 16px auto 28px; padding: clamp(28px, 5vw, 58px); border-radius: 34px; color: white; background: linear-gradient(135deg, #5b21b6, #7c3aed 58%, #14b8a6); box-shadow: 0 18px 45px rgba(69, 39, 160, .2); }
        .eyebrow, .panelLabel, .diagramTitle, .summaryLabel { margin: 0 0 10px; font-size: 14px; font-weight: 900; letter-spacing: .12em; }
        .hero h1 { margin: 0; font-size: clamp(38px, 6vw, 68px); line-height: 1.03; }
        .introduction { max-width: 850px; margin: 20px 0 0; font-size: clamp(18px, 2vw, 24px); line-height: 1.55; }
        .lessonCard, .summaryCard { max-width: 1160px; margin: 28px auto; padding: clamp(22px, 4vw, 46px); background: white; border: 1px solid #dce5f2; border-radius: 30px; box-shadow: 0 12px 30px rgba(34, 61, 102, .07); }
        .lessonHeading { display: flex; gap: 22px; align-items: flex-start; margin-bottom: 30px; }
        .numberBadge { display: grid; place-items: center; flex: 0 0 62px; height: 62px; border-radius: 20px; background: #ccfbf1; color: #0f766e; font-size: 30px; font-weight: 900; }
        .lessonHeading .label { margin: 2px 0 7px; color: #7c3aed; font-weight: 900; letter-spacing: .11em; }
        .lessonHeading h2 { margin: 0; font-size: clamp(28px, 4vw, 44px); line-height: 1.12; }
        .decisionGrid { display: grid; grid-template-columns: 1fr auto 1fr; gap: 18px; align-items: center; }
        .decisionPanel { display: flex; align-items: center; gap: 20px; padding: 26px; border-radius: 24px; border: 1px solid; }
        .discreteTint { background: #eefcf9; border-color: #7eead9; }
        .continuousTint { background: #f6f0ff; border-color: #d8b4fe; }
        .decisionIcon { display: grid; place-items: center; width: 76px; height: 76px; border-radius: 22px; background: white; color: #0f766e; font-size: 24px; font-weight: 900; }
        .decisionPanel h3, .definitionPanel h3, .exampleGrid h3, .summaryGrid h3 { margin: 5px 0 10px; font-size: 25px; }
        .decisionPanel p, .definitionPanel p, .exampleGrid p, .summaryGrid p { line-height: 1.55; }
        .orBadge { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 50%; color: white; background: #7c3aed; font-weight: 900; }
        .memoryStrip, .warningStrip { margin-top: 24px; padding: 20px 24px; border-left: 6px solid #14b8a6; border-radius: 16px; background: #effcf9; font-size: 18px; line-height: 1.5; }
        .warningStrip { border-left-color: #f59e0b; background: #fff8e8; }
        .twoColumn { display: grid; grid-template-columns: 1.35fr .85fr; gap: 26px; }
        .diagramPanel, .definitionPanel { border-radius: 25px; padding: 24px; }
        .diagramPanel { background: #f7f9fc; border: 1px solid #dde6f2; text-align: center; overflow: hidden; }
        .diagramTitle { color: #155e75; }
        .diagramPanel svg { display: block; width: 100%; max-height: 310px; }
        .axis, .tick { stroke: #244466; stroke-width: 5; stroke-linecap: round; }
        .discreteDot { fill: #7c3aed; stroke: white; stroke-width: 5; }
        .axisLabel, .axisCaption, .measureLabel { text-anchor: middle; dominant-baseline: middle; font-weight: 800; fill: #243b5a; }
        .axisLabel { font-size: 23px; }
        .axisCaption { font-size: 18px; fill: #566d87; }
        .diagramNote { margin: -5px 0 0; color: #536a85; line-height: 1.45; }
        .definitionPanel { background: #ecfdf8; border: 1px solid #79ead4; }
        .continuousDefinition { background: #f7f1ff; border-color: #d8b4fe; }
        .definitionPanel .panelLabel { color: #0f766e; }
        .formulaBox { margin: 20px 0; padding: 15px; border-radius: 14px; background: white; text-align: center; color: #6d28d9; font-size: 24px; font-weight: 900; }
        .definitionPanel ul { padding-left: 22px; line-height: 1.8; }
        .reference { color: #0f766e; font-weight: 800; }
        .continuousLine { stroke: url(#continuousGradient); stroke-width: 18; stroke-linecap: round; }
        .measurePoint { fill: #f97316; stroke: white; stroke-width: 5; }
        .pointer { stroke: #f97316; stroke-width: 4; stroke-dasharray: 7 5; }
        .measureLabelBox { fill: #fff7ed; stroke: #fb923c; stroke-width: 3; }
        .measureLabel { font-size: 21px; fill: #c2410c; }
        .comparisonTableWrap { overflow-x: auto; border: 1px solid #dce5f2; border-radius: 20px; }
        .comparisonTable { width: 100%; min-width: 650px; border-collapse: collapse; font-size: 17px; }
        .comparisonTable th, .comparisonTable td { padding: 18px 20px; border-bottom: 1px solid #dce5f2; text-align: left; }
        .comparisonTable thead th { background: #173b66; color: white; }
        .comparisonTable tbody th { color: #314e6e; background: #f7f9fc; }
        .comparisonTable td:nth-child(2) { background: #effcf9; }
        .comparisonTable td:nth-child(3) { background: #f8f3ff; }
        .exampleGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .exampleGrid article { padding: 22px; border: 1px solid #dce5f2; border-radius: 20px; background: #fafcff; }
        .exampleTop { display: flex; justify-content: space-between; align-items: center; }
        .exampleTop > span { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 12px; background: #e9e1ff; color: #6d28d9; font-weight: 900; }
        .exampleTop b { padding: 8px 12px; border-radius: 999px; font-size: 14px; }
        .discretePill { background: #ccfbf1; color: #0f766e; }
        .continuousPill { background: #ede9fe; color: #6d28d9; }
        .centred { text-align: center; margin-top: 22px; }
        .questionBox { padding: 25px; border-radius: 22px; background: #f7f9fc; border: 1px solid #dce5f2; }
        .questionBox h3 { font-size: 24px; }
        .questionBox ol { padding-left: 26px; line-height: 2; font-size: 18px; }
        .practiceReveal { margin-top: 20px; border: 2px solid #c4b5fd; border-radius: 18px; overflow: hidden; }
        .practiceReveal summary { padding: 18px 22px; color: #5b21b6; background: #f5f1ff; font-size: 18px; font-weight: 900; cursor: pointer; }
        .answerGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; padding: 22px; }
        .answerGrid p { margin: 0; padding: 16px; border-radius: 14px; background: #f3faf8; line-height: 1.5; }
        .summaryCard { background: linear-gradient(135deg, #173b66, #5b21b6); color: white; }
        .summaryLabel { color: #99f6e4; }
        .summaryCard h2 { margin: 0 0 25px; font-size: clamp(28px, 4vw, 42px); }
        .summaryGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .summaryGrid article { padding: 24px; border-radius: 20px; background: rgba(255,255,255,.12); }
        .summaryGrid article > span { color: #99f6e4; font-weight: 900; letter-spacing: .18em; }
        .summaryGrid small { color: #ccfbf1; }
        .finishButton { display: block; margin: 30px auto 0; padding: 17px 30px; border: 0; border-radius: 16px; color: white; background: #6d28d9; box-shadow: 0 10px 22px rgba(109,40,217,.25); font-size: 18px; font-weight: 900; cursor: pointer; }
        .finishButton:hover, .backButton:hover { transform: translateY(-1px); }
        @media (max-width: 780px) {
          .page { padding-inline: 14px; }
          .hero, .lessonCard, .summaryCard { border-radius: 24px; }
          .decisionGrid, .twoColumn, .exampleGrid, .answerGrid, .summaryGrid { grid-template-columns: 1fr; }
          .orBadge { margin: -5px auto; }
          .lessonHeading { gap: 14px; }
          .numberBadge { flex-basis: 52px; height: 52px; border-radius: 16px; font-size: 25px; }
          .decisionPanel { padding: 20px; }
        }
      `}</style>
    </main>
  );
}

function LessonHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="lessonHeading">
      <span className="numberBadge">{number}</span>
      <div>
        <p className="label">{label}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
