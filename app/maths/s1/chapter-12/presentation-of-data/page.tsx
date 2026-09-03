"use client";

import { useRouter } from "next/navigation";

const months = [
  { month: "Mar", temperature: 18, rainfall: 30 },
  { month: "Apr", temperature: 20, rainfall: 40 },
  { month: "May", temperature: 22, rainfall: 48 },
  { month: "Jun", temperature: 24, rainfall: 55 },
];

const stemRows = [
  { stem: 4, leaves: "3  7" },
  { stem: 5, leaves: "1  2  7" },
  { stem: 6, leaves: "0  1  4  4  8" },
];

const backToBackRows = [
  { classA: "8  5  2", stem: 4, classB: "3  6" },
  { classA: "7  3  1", stem: 5, classB: "2  4  5" },
  { classA: "4  0", stem: 6, classB: "1  2  6" },
];

export default function PresentationOfDataPage() {
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
        <p className="eyebrow">S1 · CHAPTER 12 · SECTION 4</p>
        <h1>Presentation of Data</h1>
        <p className="introduction">
          A suitable statistical diagram makes patterns and comparisons easier
          to see. Always read its title, axes, scales and key before using it.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading
          number="1"
          label="CHOOSE A SUITABLE DISPLAY"
          title="Present data clearly and keep its meaning accurate"
        />

        <div className="purposeGrid">
          <article>
            <span>▥</span>
            <h3>Statistical diagram</h3>
            <p>Shows patterns, changes or comparisons visually.</p>
          </article>
          <article>
            <span>4│2</span>
            <h3>Stem-and-leaf diagram</h3>
            <p>Shows the distribution while retaining every datum.</p>
          </article>
          <article>
            <span>2│4│3</span>
            <h3>Back-to-back diagram</h3>
            <p>Compares two data sets of the same kind.</p>
          </article>
        </div>

        <div className="checkStrip">
          <strong>Before reading:</strong> check the title, labels, units, scale
          intervals and key. <span>[Reference: presentation of data]</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="2"
          label="TWO DATA SETS IN ONE DIAGRAM"
          title="Use the key and the correct axis for each data set"
        />

        <div className="chartLayout">
          <div className="chartPanel">
            <p className="chartTitle">Monthly average temperature and rainfall</p>
            <CombinedChart />
            <div className="chartKey" aria-label="Chart key">
              <span><i className="barKey" />Temperature</span>
              <span><i className="lineKey" />Rainfall</span>
            </div>
          </div>

          <div className="readingPanel">
            <p className="panelLabel">HOW TO READ IT</p>
            <ol>
              <li><span>1</span><p>Use the <b>left axis</b> for the temperature bars.</p></li>
              <li><span>2</span><p>Use the <b>right axis</b> for the rainfall line.</p></li>
              <li><span>3</span><p>Match each mark to the correct month.</p></li>
              <li><span>4</span><p>Include the correct unit in every answer.</p></li>
            </ol>
            <p className="reference">[Reference: statistical diagram]</p>
          </div>
        </div>

        <div className="warningStrip">
          <strong>Do not mix the axes:</strong> the height of a bar and the height
          of a point may represent different scales and different units.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="3"
          label="READ AND COMPARE"
          title="Support every statement with values from the diagram"
        />

        <div className="workedGrid">
          <article>
            <span className="workedNumber">1</span>
            <p className="panelLabel">READ ONE VALUE</p>
            <h3>What was the temperature in May?</h3>
            <div className="workedAnswer">22°C</div>
            <p>Read the May bar against the left temperature axis.</p>
          </article>
          <article>
            <span className="workedNumber">2</span>
            <p className="panelLabel">COMPARE VALUES</p>
            <h3>How did rainfall change from March to June?</h3>
            <div className="workedAnswer">55 − 30 = 25 mm</div>
            <p>Rainfall increased by 25 mm.</p>
          </article>
          <article>
            <span className="workedNumber">3</span>
            <p className="panelLabel">DESCRIBE A TREND</p>
            <h3>What happened to both sets of data?</h3>
            <div className="workedAnswer">Both increased</div>
            <p>Temperature and rainfall rose in every month shown.</p>
          </article>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="4"
          label="STEM-AND-LEAF DIAGRAM"
          title="Retain every value while showing the distribution"
        />

        <div className="stemLayout">
          <div className="constructionPanel">
            <p className="panelLabel">DATA IN ASCENDING ORDER</p>
            <div className="numberList">43, 47, 51, 52, 57, 60, 61, 64, 64, 68</div>
            <div className="splitExample">
              <span>6</span><b>|</b><span>4</span>
            </div>
            <div className="splitLabels"><span>stem</span><span>leaf</span></div>
            <p>The stem is the tens digit; the leaf is the units digit.</p>
          </div>

          <StemAndLeafTable rows={stemRows} />
        </div>

        <div className="rulesGrid">
          <article><b>1</b><h3>Order the data</h3><p>Sort all values before constructing the diagram.</p></article>
          <article><b>2</b><h3>Write each leaf</h3><p>Record every datum once, including repeats.</p></article>
          <article><b>3</b><h3>Order the leaves</h3><p>Leaves increase away from the stem.</p></article>
          <article><b>4</b><h3>Always give a key</h3><p>The key explains the place value and unit.</p></article>
        </div>
        <p className="centredReference">[Reference: stem-and-leaf diagram]</p>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="5"
          label="BACK-TO-BACK STEM-AND-LEAF"
          title="Compare two data sets using one shared stem"
        />

        <div className="backLayout">
          <BackToBackTable rows={backToBackRows} />
          <div className="comparisonPanel">
            <p className="panelLabel">READ CAREFULLY</p>
            <h3>The leaf order is different on the two sides</h3>
            <div className="directionRow">
              <span>Class A: decreasing → stem</span>
              <span>stem → increasing: Class B</span>
            </div>
            <ul>
              <li>Both classes contain 8 scores.</li>
              <li>Class A ranges from 42 to 64.</li>
              <li>Class B ranges from 43 to 66.</li>
              <li>The shared stems make comparison easier.</li>
            </ul>
            <p className="reference">[Reference: back-to-back stem-and-leaf diagram]</p>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="6"
          label="CHECK YOUR UNDERSTANDING"
          title="Construct and interpret a stem-and-leaf diagram"
        />

        <div className="practiceBox">
          <p className="panelLabel">TEN TEST SCORES</p>
          <div className="practiceValues">12, 15, 17, 21, 22, 22, 29, 30, 34, 38</div>
          <ol>
            <li>Construct a stem-and-leaf diagram.</li>
            <li>State the smallest and largest scores.</li>
            <li>How many scores are in the twenties?</li>
          </ol>
        </div>

        <details className="practiceReveal">
          <summary>Show answer</summary>
          <div className="practiceAnswer">
            <StemAndLeafTable rows={[
              { stem: 1, leaves: "2  5  7" },
              { stem: 2, leaves: "1  2  2  9" },
              { stem: 3, leaves: "0  4  8" },
            ]} keyText="2 | 2 means a score of 22" />
            <div>
              <p><b>Smallest score:</b> 12</p>
              <p><b>Largest score:</b> 38</p>
              <p><b>Scores in the twenties:</b> 4</p>
            </div>
          </div>
        </details>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Three presentation tools to remember</h2>
        <div className="summaryGrid">
          <article><span>▥</span><h3>Combined diagram</h3><p>Presents two related data sets together for comparison.</p></article>
          <article><span>4│2</span><h3>Stem-and-leaf</h3><p>Shows the distribution and retains every original value.</p></article>
          <article><span>2│4│3</span><h3>Back-to-back</h3><p>Compares two distributions of the same kind.</p></article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-12")}
      >
        Finish Section 4 →
      </button>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f3f6fb; color: #10213f; }
        .page { min-height: 100vh; padding: 30px clamp(18px, 5vw, 86px) 70px; font-family: Arial, Helvetica, sans-serif; }
        .backButton { padding: 10px 0; border: 0; background: transparent; color: #5b21b6; font-size: 16px; font-weight: 800; cursor: pointer; }
        .hero { max-width: 1160px; margin: 16px auto 28px; padding: clamp(28px, 5vw, 58px); border-radius: 34px; color: white; background: linear-gradient(135deg, #5b21b6, #7c3aed 58%, #14b8a6); box-shadow: 0 18px 45px rgba(69,39,160,.2); }
        .eyebrow, .panelLabel, .summaryLabel { margin: 0 0 10px; font-size: 14px; font-weight: 900; letter-spacing: .12em; }
        .hero h1 { margin: 0; font-size: clamp(38px, 6vw, 68px); line-height: 1.03; }
        .introduction { max-width: 850px; margin: 20px 0 0; font-size: clamp(18px, 2vw, 24px); line-height: 1.55; }
        .lessonCard, .summaryCard { max-width: 1160px; margin: 28px auto; padding: clamp(22px, 4vw, 46px); border: 1px solid #dce5f2; border-radius: 30px; background: white; box-shadow: 0 12px 30px rgba(34,61,102,.07); }
        .lessonHeading { display: flex; gap: 22px; align-items: flex-start; margin-bottom: 30px; }
        .numberBadge { display: grid; place-items: center; flex: 0 0 62px; height: 62px; border-radius: 20px; background: #ccfbf1; color: #0f766e; font-size: 30px; font-weight: 900; }
        .lessonHeading .label { margin: 2px 0 7px; color: #7c3aed; font-weight: 900; letter-spacing: .11em; }
        .lessonHeading h2 { margin: 0; font-size: clamp(28px, 4vw, 44px); line-height: 1.12; }
        .purposeGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .purposeGrid article { padding: 24px; border: 1px solid #dce5f2; border-radius: 22px; background: #f9fbfe; text-align: center; }
        .purposeGrid article > span { display: grid; place-items: center; min-width: 74px; width: fit-content; height: 68px; margin: 0 auto 15px; padding: 0 12px; border-radius: 19px; color: #6d28d9; background: #eee7ff; font-size: 24px; font-weight: 900; }
        .purposeGrid h3 { font-size: 22px; }
        .purposeGrid p { color: #526a85; line-height: 1.5; }
        .checkStrip, .warningStrip { margin-top: 24px; padding: 20px 24px; border-left: 6px solid #14b8a6; border-radius: 16px; background: #effcf9; font-size: 18px; line-height: 1.55; }
        .checkStrip span { display: block; margin-top: 5px; color: #0f766e; font-size: 15px; font-weight: 800; }
        .warningStrip { border-color: #f59e0b; background: #fff8e8; }
        .chartLayout, .stemLayout, .backLayout { display: grid; grid-template-columns: 1.35fr .65fr; gap: 26px; }
        .chartPanel, .readingPanel, .constructionPanel, .comparisonPanel { padding: 24px; border-radius: 24px; }
        .chartPanel, .constructionPanel { border: 1px solid #dce5f2; background: #f8fafc; }
        .chartTitle { margin: 0 0 12px; color: #173b66; text-align: center; font-size: 20px; font-weight: 900; }
        .combinedChart { display: block; width: 100%; }
        .chartGrid { stroke: #d9e3ef; stroke-width: 2; }
        .chartAxis { stroke: #294663; stroke-width: 4; }
        .temperatureBar { fill: #fde68a; stroke: #f59e0b; stroke-width: 3; }
        .rainfallLine { fill: none; stroke: #0ea5e9; stroke-width: 5; }
        .rainfallPoint { fill: white; stroke: #0284c7; stroke-width: 4; }
        .chartText { fill: #3d5875; font-size: 15px; font-weight: 700; }
        .chartText.axisTitle { fill: #173b66; font-size: 16px; font-weight: 900; }
        .chartKey { display: flex; justify-content: center; gap: 28px; margin-top: 8px; font-weight: 800; }
        .chartKey span { display: flex; align-items: center; gap: 9px; }
        .barKey { width: 28px; height: 16px; border: 2px solid #f59e0b; background: #fde68a; }
        .lineKey { width: 30px; height: 0; border-top: 4px solid #0ea5e9; }
        .readingPanel { border: 1px solid #78ead5; background: #ecfdf8; }
        .readingPanel ol { margin: 0; padding: 0; list-style: none; }
        .readingPanel li { display: flex; align-items: center; gap: 13px; padding: 8px 0; border-bottom: 1px solid #bcecdf; }
        .readingPanel li:last-child { border-bottom: 0; }
        .readingPanel li span { display: grid; place-items: center; flex: 0 0 38px; height: 38px; border-radius: 12px; color: white; background: #0f766e; font-weight: 900; }
        .readingPanel li p { line-height: 1.45; }
        .reference, .centredReference { color: #0f766e; font-weight: 800; }
        .centredReference { margin-top: 22px; text-align: center; }
        .workedGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .workedGrid article { position: relative; padding: 24px; border: 1px solid #dce5f2; border-radius: 22px; background: #fafcff; }
        .workedNumber { position: absolute; top: 17px; right: 17px; display: grid; place-items: center; width: 36px; height: 36px; border-radius: 12px; color: white; background: #7c3aed; font-weight: 900; }
        .workedGrid h3 { min-height: 56px; font-size: 20px; }
        .workedAnswer { margin: 18px 0; color: #0f766e; font-size: 27px; font-weight: 900; }
        .workedGrid p { line-height: 1.5; }
        .constructionPanel .numberList, .practiceValues { padding: 18px; border-radius: 16px; color: #5b21b6; background: white; font-size: clamp(19px, 2.5vw, 26px); font-weight: 900; line-height: 1.6; text-align: center; }
        .splitExample { display: flex; justify-content: center; align-items: center; gap: 18px; margin-top: 26px; font-size: 58px; }
        .splitExample span:first-child { color: #0f766e; }
        .splitExample span:last-child { color: #7c3aed; }
        .splitLabels { display: flex; justify-content: center; gap: 55px; color: #526a85; font-weight: 800; }
        .constructionPanel > p:last-child { text-align: center; }
        .stemTableCard { align-self: start; overflow: hidden; border: 1px solid #91d7c8; border-radius: 20px; background: white; }
        .stemTableCard table { width: 100%; border-collapse: collapse; }
        .stemTableCard caption { padding: 15px; color: white; background: #0f766e; font-size: 18px; font-weight: 900; }
        .stemTableCard th, .stemTableCard td { padding: 15px; border-bottom: 1px solid #cbe9e2; font-size: 18px; }
        .stemTableCard th { color: #155e75; background: #e8f8f4; }
        .stemTableCard td:first-child, .stemTableCard th:first-child { width: 34%; border-right: 3px solid #0f766e; text-align: right; }
        .stemTableCard td:last-child, .stemTableCard th:last-child { text-align: left; white-space: pre; }
        .keyBox { margin: 18px; padding: 14px; border-radius: 13px; color: #5b21b6; background: #f2edff; text-align: center; font-weight: 900; }
        .rulesGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 24px; }
        .rulesGrid article { padding: 18px; border: 1px solid #dce5f2; border-radius: 18px; background: #fafcff; }
        .rulesGrid b { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 10px; color: white; background: #7c3aed; }
        .rulesGrid h3 { font-size: 18px; }
        .rulesGrid p { color: #536a85; line-height: 1.45; }
        .backLayout { grid-template-columns: .9fr 1.1fr; }
        .backTableCard { align-self: start; overflow: hidden; border: 1px solid #c4b5fd; border-radius: 20px; }
        .backTableCard table { width: 100%; border-collapse: collapse; }
        .backTableCard caption { padding: 15px; color: white; background: #6d28d9; font-weight: 900; }
        .backTableCard th, .backTableCard td { padding: 14px; border-bottom: 1px solid #e2d9fa; font-size: 18px; }
        .backTableCard th { background: #f2edff; }
        .backTableCard th:first-child, .backTableCard td:first-child { text-align: right; white-space: pre; }
        .backTableCard th:nth-child(2), .backTableCard td:nth-child(2) { width: 20%; border-right: 3px solid #6d28d9; border-left: 3px solid #6d28d9; text-align: center; }
        .backTableCard th:last-child, .backTableCard td:last-child { text-align: left; white-space: pre; }
        .comparisonPanel { border: 1px solid #d8b4fe; background: #f8f3ff; }
        .comparisonPanel h3 { font-size: 23px; }
        .directionRow { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 18px 0; }
        .directionRow span { padding: 13px; border-radius: 12px; color: white; background: #7c3aed; text-align: center; font-size: 14px; font-weight: 800; }
        .comparisonPanel li { line-height: 1.7; }
        .practiceBox { padding: 26px; border: 1px solid #dce5f2; border-radius: 22px; background: #f8fafc; }
        .practiceBox ol { line-height: 1.9; font-size: 17px; }
        .practiceReveal { margin-top: 20px; overflow: hidden; border: 2px solid #c4b5fd; border-radius: 18px; }
        .practiceReveal summary { padding: 18px 22px; color: #5b21b6; background: #f5f1ff; font-size: 18px; font-weight: 900; cursor: pointer; }
        .practiceAnswer { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center; padding: 22px; }
        .practiceAnswer > div:last-child { padding: 20px; border-radius: 18px; background: #effcf9; }
        .practiceAnswer p { line-height: 1.6; }
        .summaryCard { color: white; background: linear-gradient(135deg, #173b66, #5b21b6); }
        .summaryLabel { color: #99f6e4; }
        .summaryCard h2 { margin: 0 0 25px; font-size: clamp(28px, 4vw, 42px); }
        .summaryGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .summaryGrid article { padding: 22px; border-radius: 20px; background: rgba(255,255,255,.12); }
        .summaryGrid span { color: #99f6e4; font-size: 25px; font-weight: 900; }
        .summaryGrid h3 { font-size: 20px; }
        .summaryGrid p { color: #eef7ff; line-height: 1.5; }
        .finishButton { display: block; margin: 30px auto 0; padding: 17px 30px; border: 0; border-radius: 16px; color: white; background: #6d28d9; box-shadow: 0 10px 22px rgba(109,40,217,.25); font-size: 18px; font-weight: 900; cursor: pointer; }
        .finishButton:hover, .backButton:hover { transform: translateY(-1px); }
        @media (max-width: 900px) {
          .purposeGrid, .workedGrid, .summaryGrid { grid-template-columns: 1fr; }
          .chartLayout, .stemLayout, .backLayout { grid-template-columns: 1fr; }
          .rulesGrid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .page { padding-inline: 14px; }
          .hero, .lessonCard, .summaryCard { border-radius: 24px; }
          .lessonHeading { gap: 14px; }
          .numberBadge { flex-basis: 52px; height: 52px; border-radius: 16px; font-size: 25px; }
          .rulesGrid, .practiceAnswer { grid-template-columns: 1fr; }
          .chartKey { flex-direction: column; align-items: center; gap: 10px; }
          .directionRow { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}

function LessonHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="lessonHeading">
      <span className="numberBadge">{number}</span>
      <div><p className="label">{label}</p><h2>{title}</h2></div>
    </div>
  );
}

function CombinedChart() {
  const xPositions = [145, 265, 385, 505];
  const baseline = 310;
  const temperatureY = (value: number) => baseline - value * 8;
  const rainfallY = (value: number) => baseline - value * 4;
  const points = months.map((item, index) => `${xPositions[index]},${rainfallY(item.rainfall)}`).join(" ");

  return (
    <svg className="combinedChart" viewBox="0 0 650 400" role="img" aria-label="Bar and line diagram showing monthly average temperature and rainfall from March to June">
      {[0, 10, 20, 30].map((value) => {
        const y = baseline - value * 8;
        return <g key={value}><line x1="85" y1={y} x2="565" y2={y} className="chartGrid" /><text x="65" y={y + 5} className="chartText" textAnchor="end">{value}</text><text x="585" y={y + 5} className="chartText">{value * 2}</text></g>;
      })}
      <line x1="85" y1="70" x2="85" y2={baseline} className="chartAxis" />
      <line x1="565" y1="70" x2="565" y2={baseline} className="chartAxis" />
      <line x1="85" y1={baseline} x2="565" y2={baseline} className="chartAxis" />
      {months.map((item, index) => {
        const x = xPositions[index];
        const y = temperatureY(item.temperature);
        return <g key={item.month}><rect x={x - 27} y={y} width="54" height={baseline - y} className="temperatureBar" /><text x={x} y="340" textAnchor="middle" className="chartText">{item.month}</text></g>;
      })}
      <polyline points={points} className="rainfallLine" />
      {months.map((item, index) => <circle key={item.month} cx={xPositions[index]} cy={rainfallY(item.rainfall)} r="7" className="rainfallPoint" />)}
      <text x="28" y="205" transform="rotate(-90 28 205)" textAnchor="middle" className="chartText axisTitle">Temperature (°C)</text>
      <text x="625" y="205" transform="rotate(90 625 205)" textAnchor="middle" className="chartText axisTitle">Rainfall (mm)</text>
      <text x="325" y="382" textAnchor="middle" className="chartText axisTitle">Month</text>
    </svg>
  );
}

function StemAndLeafTable({ rows, keyText = "4 | 3 means a score of 43" }: { rows: { stem: number; leaves: string }[]; keyText?: string }) {
  return (
    <div className="stemTableCard">
      <table>
        <caption>Stem-and-leaf diagram</caption>
        <thead><tr><th>Stem (10)</th><th>Leaf (1)</th></tr></thead>
        <tbody>{rows.map((row) => <tr key={row.stem}><td>{row.stem}</td><td>{row.leaves}</td></tr>)}</tbody>
      </table>
      <div className="keyBox"><strong>Key:</strong> {keyText}</div>
    </div>
  );
}

function BackToBackTable({ rows }: { rows: { classA: string; stem: number; classB: string }[] }) {
  return (
    <div className="backTableCard">
      <table>
        <caption>Back-to-back stem-and-leaf diagram</caption>
        <thead><tr><th>Class A</th><th>Stem</th><th>Class B</th></tr></thead>
        <tbody>{rows.map((row) => <tr key={row.stem}><td>{row.classA}</td><td>{row.stem}</td><td>{row.classB}</td></tr>)}</tbody>
      </table>
      <div className="keyBox"><strong>Key:</strong> 2 | 4 | 3 means 42 for Class A and 43 for Class B</div>
    </div>
  );
}
