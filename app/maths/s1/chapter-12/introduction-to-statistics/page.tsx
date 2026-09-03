"use client";

import { useRouter } from "next/navigation";

const processSteps = [
  { number: "1", title: "Collect", text: "Gather data that answers the question." },
  { number: "2", title: "Organize", text: "Arrange the raw data so patterns can be seen." },
  { number: "3", title: "Present", text: "Use a suitable table or statistical diagram." },
  { number: "4", title: "Interpret", text: "Describe what the organized data tells us." },
];

const rawData = [18, 22, 19, 22, 25, 21, 22];

export default function IntroductionToStatisticsPage() {
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
        <p className="eyebrow">S1 · CHAPTER 12 · SECTION 1</p>
        <h1>Introduction to Statistics</h1>
        <p className="introduction">
          Statistics helps us collect, organize, present and interpret data.
          These stages turn a list of observations into useful information.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading
          number="1"
          label="MEANING OF STATISTICS"
          title="Statistics turns data into useful information"
        />

        <div className="twoColumn">
          <div className="cyclePanel">
            <svg viewBox="0 0 620 350" role="img" aria-label="The four-stage statistical process: collect, organize, present and interpret">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" className="arrowHead" />
                </marker>
              </defs>
              <path d="M185 95 Q310 18 435 95" className="cycleArrow" markerEnd="url(#arrowhead)" />
              <path d="M485 128 Q558 175 485 225" className="cycleArrow" markerEnd="url(#arrowhead)" />
              <path d="M435 258 Q310 334 185 258" className="cycleArrow" markerEnd="url(#arrowhead)" />
              <path d="M135 225 Q62 175 135 128" className="cycleArrow" markerEnd="url(#arrowhead)" />
              <g className="cycleNodes">
                <rect x="90" y="64" width="145" height="66" rx="20" />
                <rect x="385" y="64" width="145" height="66" rx="20" />
                <rect x="385" y="220" width="145" height="66" rx="20" />
                <rect x="90" y="220" width="145" height="66" rx="20" />
              </g>
              <g className="cycleText">
                <text x="162" y="105">Collect</text>
                <text x="457" y="105">Organize</text>
                <text x="457" y="261">Present</text>
                <text x="162" y="261">Interpret</text>
              </g>
              <circle cx="310" cy="175" r="60" className="centreCircle" />
              <text x="310" y="184" className="centreText">DATA</text>
            </svg>
          </div>

          <div className="definitionPanel">
            <p className="panelLabel">STATISTICS</p>
            <h3>A way to learn from data</h3>
            <p>
              Statistics involves collecting relevant data, organizing and
              presenting it clearly, then interpreting the result.
            </p>
            <div className="definitionFormula">
              data → information → conclusion
            </div>
            <p className="reference">[Reference: statistics]</p>
          </div>
        </div>

        <div className="memoryStrip">
          <strong>Memory rule:</strong> data is collected for a purpose. A clear
          question tells us which data is relevant.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="2"
          label="DATA AND DATUM"
          title="One item is a datum; several items form data"
        />

        <div className="termGrid">
          <article className="datumCard">
            <span className="termIcon">1</span>
            <p className="panelLabel">DATUM</p>
            <h3>One observation</h3>
            <div className="termExample">22 minutes</div>
            <p>One recorded value is called a datum.</p>
            <small>[Reference: datum]</small>
          </article>

          <article className="dataCard">
            <span className="termIcon">1+</span>
            <p className="panelLabel">DATA</p>
            <h3>A collection of observations</h3>
            <div className="termExample">18, 22, 19, 25</div>
            <p>A collection of recorded values is called data.</p>
            <small>[Reference: data]</small>
          </article>
        </div>

        <div className="languageNote">
          <strong>Language note:</strong> “Data” is commonly used for the whole
          collection, while “datum” means one item in that collection.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="3"
          label="RAW DATA"
          title="Raw data is recorded before it is organized"
        />

        <div className="rawDataGrid">
          <div className="rawListPanel">
            <p className="panelLabel">TRAVEL TIMES TO SCHOOL (MINUTES)</p>
            <div className="rawValues">
              {rawData.map((value, index) => (
                <span key={`${value}-${index}`}>{value}</span>
              ))}
            </div>
          </div>

          <div className="rawDefinitionPanel">
            <h3>What makes this raw data?</h3>
            <p>
              The values are shown in the order in which they were recorded.
              They have not yet been sorted, grouped or placed in a table.
            </p>
            <p className="reference">[Reference: raw data]</p>
          </div>
        </div>

        <details className="practiceReveal">
          <summary>Check your understanding — Show answer</summary>
          <div>
            <p><strong>Question:</strong> How many data items are in the list, and what is its largest value?</p>
            <p><strong>Answer:</strong> There are 7 data items, and the largest value is 25 minutes.</p>
          </div>
        </details>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="4"
          label="A STATISTICAL QUESTION"
          title="A good question expects data with different values"
        />

        <div className="questionComparison">
          <article className="goodQuestion">
            <span>✓</span>
            <div>
              <p className="panelLabel">STATISTICAL QUESTION</p>
              <h3>How many minutes do students take to travel to school?</h3>
              <p>Different students may give different numerical answers.</p>
            </div>
          </article>

          <article className="notStatistical">
            <span>×</span>
            <div>
              <p className="panelLabel">NOT A STATISTICAL QUESTION</p>
              <h3>How many minutes did Sam take today?</h3>
              <p>The question asks for only one particular value.</p>
            </div>
          </article>
        </div>

        <div className="tipStrip">
          <strong>Before collecting data:</strong> identify exactly what will be
          measured or counted, whose data is needed, and which unit should be used.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="5"
          label="WORKED EXAMPLE"
          title="Follow the statistical process"
        />

        <div className="workedQuestion">
          <p className="panelLabel">INVESTIGATION</p>
          <h3>How many pages did seven students read yesterday?</h3>
          <div className="workedValues">12&nbsp;&nbsp; 18&nbsp;&nbsp; 15&nbsp;&nbsp; 20&nbsp;&nbsp; 18&nbsp;&nbsp; 14&nbsp;&nbsp; 18</div>
        </div>

        <div className="processGrid">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="exampleConclusion">
          <strong>A valid observation:</strong>
          <span>18 pages occurs three times in the recorded data.</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="6"
          label="STATISTICS CHECKLIST"
          title="Ask four questions"
        />

        <div className="checklistGrid">
          <article><b>1</b><strong>What is the question?</strong><p>State the purpose clearly.</p></article>
          <article><b>2</b><strong>What data is needed?</strong><p>Collect only relevant observations.</p></article>
          <article><b>3</b><strong>How will it be shown?</strong><p>Choose a clear table or diagram.</p></article>
          <article><b>4</b><strong>What does it show?</strong><p>Support the conclusion with the data.</p></article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Four facts to remember</h2>
        <div className="summaryGrid">
          <article><span>1</span><p>Statistics helps us learn from data.</p></article>
          <article><span>2</span><p>A datum is one observation; data is a collection.</p></article>
          <article><span>3</span><p>Raw data has not yet been organized.</p></article>
          <article><span>4</span><p>Collect, organize, present and interpret.</p></article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-12")}
      >
        Finish Section 1 →
      </button>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f4f7fb; color: #10223f; }
        button { font: inherit; }
        .page { min-height: 100vh; padding: 34px 5vw 70px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .page > * { width: min(1180px, 100%); margin-left: auto; margin-right: auto; }
        .backButton { display: block; padding: 8px 0; margin-bottom: 18px; border: 0; background: transparent; color: #6d28d9; font-weight: 800; cursor: pointer; }
        .backButton:hover { color: #0f766e; }
        .hero { padding: 38px 42px; margin-bottom: 24px; border: 1px solid #c4b5fd; border-radius: 28px; background: linear-gradient(135deg, #f5f3ff 0%, #eef2ff 62%, #f0fdfa 100%); }
        .eyebrow, .panelLabel, .summaryLabel { margin: 0 0 8px; color: #6d28d9; font-size: 14px; font-weight: 900; letter-spacing: .12em; }
        h1 { margin: 0; font-size: clamp(35px, 5vw, 58px); line-height: 1.04; letter-spacing: -.035em; }
        .introduction { max-width: 880px; margin: 18px 0 0; color: #49627f; font-size: 20px; line-height: 1.62; }
        .lessonCard { padding: 30px; margin-bottom: 22px; border: 1px solid #dce7f2; border-radius: 25px; background: white; box-shadow: 0 12px 32px rgba(16,34,63,.055); }
        .lessonHeading { display: grid; grid-template-columns: 54px 1fr; gap: 16px; align-items: center; margin-bottom: 24px; }
        .lessonNumber { width: 54px; height: 54px; display: grid; place-items: center; border-radius: 16px; background: #ede9fe; color: #6d28d9; font-size: 24px; font-weight: 900; }
        .lessonLabel { margin: 0 0 4px; color: #0f766e; font-size: 13px; font-weight: 900; letter-spacing: .11em; }
        .lessonHeading h2 { margin: 0; font-size: clamp(24px, 3.1vw, 34px); line-height: 1.15; }
        .twoColumn { display: grid; grid-template-columns: 1.08fr .92fr; gap: 20px; }
        .cyclePanel { min-height: 350px; display: grid; place-items: center; padding: 12px; border: 1px solid #e5edf5; border-radius: 20px; background: #f8fafc; }
        .cyclePanel svg { width: 100%; max-height: 350px; }
        .cycleArrow { fill: none; stroke: #7c3aed; stroke-width: 7; stroke-linecap: round; }
        .arrowHead { fill: #7c3aed; }
        .cycleNodes rect { fill: #ffffff; stroke: #99f6e4; stroke-width: 4; }
        .cycleText { fill: #0f766e; font: 900 21px Inter, sans-serif; text-anchor: middle; }
        .centreCircle { fill: #ede9fe; stroke: #c4b5fd; stroke-width: 4; }
        .centreText { fill: #6d28d9; font: 900 22px Inter, sans-serif; text-anchor: middle; }
        .definitionPanel { display: flex; flex-direction: column; justify-content: center; padding: 28px; border: 1px solid #a7f3d0; border-radius: 20px; background: #f0fdfa; }
        .definitionPanel h3 { margin: 3px 0 12px; font-size: 26px; }
        .definitionPanel > p:not(.panelLabel):not(.reference) { color: #405a76; font-size: 17px; line-height: 1.55; }
        .definitionFormula { margin-top: 10px; padding: 17px; border-radius: 14px; background: white; color: #0f766e; font: 800 22px Georgia, serif; text-align: center; }
        .reference { margin-top: 13px !important; color: #6d28d9 !important; font-size: 14px !important; font-weight: 800; }
        .memoryStrip, .languageNote, .tipStrip, .exampleConclusion { margin-top: 20px; padding: 17px 20px; border-radius: 15px; color: #334e68; line-height: 1.55; }
        .memoryStrip, .tipStrip { border-left: 5px solid #7c3aed; background: #f5f3ff; }
        .languageNote { border-left: 5px solid #0f766e; background: #f0fdfa; }
        .termGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
        .termGrid article { position: relative; padding: 25px; border-radius: 20px; }
        .datumCard { border: 1px solid #bae6fd; background: #f0f9ff; }
        .dataCard { border: 1px solid #ddd6fe; background: #faf5ff; }
        .termIcon { width: 48px; height: 48px; display: grid; place-items: center; margin-bottom: 16px; border-radius: 14px; background: white; color: #6d28d9; font-weight: 900; }
        .termGrid h3 { margin: 0; font-size: 23px; }
        .termExample { margin: 18px 0 12px; padding: 16px; border-radius: 13px; background: white; color: #0f766e; font: 800 23px Georgia, serif; text-align: center; }
        .termGrid article > p:last-of-type { color: #526b84; line-height: 1.5; }
        .termGrid small { color: #6d28d9; font-weight: 800; }
        .rawDataGrid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 18px; }
        .rawListPanel { padding: 24px; border: 1px solid #ddd6fe; border-radius: 19px; background: #faf5ff; }
        .rawValues { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 22px; }
        .rawValues span { width: 58px; height: 58px; display: grid; place-items: center; border-radius: 15px; background: white; color: #6d28d9; font-size: 21px; font-weight: 900; box-shadow: 0 3px 10px rgba(109,40,217,.08); }
        .rawDefinitionPanel { display: flex; flex-direction: column; justify-content: center; padding: 25px; border: 1px solid #a7f3d0; border-radius: 19px; background: #f0fdfa; }
        .rawDefinitionPanel h3 { margin: 0 0 10px; font-size: 23px; }
        .rawDefinitionPanel > p:not(.reference) { margin: 0; color: #526b84; line-height: 1.55; }
        .practiceReveal { margin-top: 19px; overflow: hidden; border: 1px solid #bae6fd; border-radius: 15px; background: #f0f9ff; }
        .practiceReveal summary { padding: 17px 20px; color: #0369a1; font-weight: 900; cursor: pointer; }
        .practiceReveal > div { padding: 0 20px 15px; color: #405a76; line-height: 1.5; }
        .questionComparison { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 17px; }
        .questionComparison article { display: grid; grid-template-columns: 48px 1fr; gap: 15px; padding: 23px; border-radius: 19px; }
        .questionComparison article > span { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 14px; color: white; font-size: 25px; font-weight: 900; }
        .goodQuestion { border: 1px solid #a7f3d0; background: #ecfdf5; }
        .goodQuestion > span { background: #0f766e; }
        .notStatistical { border: 1px solid #fed7aa; background: #fff7ed; }
        .notStatistical > span { background: #ea580c; }
        .questionComparison h3 { margin: 0; font-size: 20px; line-height: 1.35; }
        .questionComparison div > p:last-child { color: #526b84; line-height: 1.45; }
        .workedQuestion { padding: 24px; border: 1px solid #ddd6fe; border-radius: 19px; background: #faf5ff; text-align: center; }
        .workedQuestion h3 { margin: 5px 0 17px; font-size: 23px; }
        .workedValues { padding: 15px; border-radius: 13px; background: white; color: #6d28d9; font: 800 22px Georgia, serif; }
        .processGrid, .checklistGrid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 13px; margin-top: 18px; }
        .processGrid article, .checklistGrid article { min-height: 155px; display: flex; flex-direction: column; gap: 8px; padding: 19px; border: 1px solid #dce7f2; border-radius: 17px; background: #fbfdff; }
        .processGrid span, .checklistGrid b { width: 37px; height: 37px; display: grid; place-items: center; border-radius: 11px; background: #ede9fe; color: #6d28d9; font-weight: 900; }
        .processGrid strong, .checklistGrid strong { font-size: 18px; }
        .processGrid p, .checklistGrid p { margin: 0; color: #5a7088; line-height: 1.43; }
        .exampleConclusion { display: flex; gap: 10px; border-left: 5px solid #0f766e; background: #f0fdfa; }
        .summaryCard { padding: 32px; margin-top: 26px; border-radius: 25px; background: linear-gradient(135deg, #6d28d9, #4c1d95); color: white; }
        .summaryCard .summaryLabel { color: #ddd6fe; }
        .summaryCard h2 { margin: 0 0 20px; font-size: 31px; }
        .summaryGrid { display: grid; grid-template-columns: repeat(4,1fr); gap: 13px; }
        .summaryGrid article { min-height: 120px; padding: 17px; border-radius: 17px; background: rgba(255,255,255,.13); }
        .summaryGrid span { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 10px; background: #ccfbf1; color: #0f766e; font-weight: 900; }
        .summaryGrid p { margin: 11px 0 0; font-weight: 750; line-height: 1.4; }
        .finishButton { display: block; padding: 17px 30px; margin-top: 24px; border: 0; border-radius: 16px; background: #7c3aed; color: white; font-weight: 900; cursor: pointer; box-shadow: 0 10px 24px rgba(124,58,237,.2); }
        .finishButton:hover { background: #6d28d9; transform: translateY(-1px); }
        @media (max-width: 860px) {
          .twoColumn, .rawDataGrid, .termGrid, .questionComparison { grid-template-columns: 1fr; }
          .processGrid, .checklistGrid, .summaryGrid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 560px) {
          .page { padding: 22px 16px 55px; }
          .hero, .lessonCard, .summaryCard { padding: 22px 18px; border-radius: 20px; }
          .lessonHeading { grid-template-columns: 45px 1fr; gap: 12px; }
          .lessonNumber { width: 45px; height: 45px; border-radius: 13px; }
          .processGrid, .checklistGrid, .summaryGrid { grid-template-columns: 1fr; }
          .cyclePanel { min-height: 260px; padding: 2px; }
          .questionComparison article { grid-template-columns: 42px 1fr; padding: 18px 14px; }
          .questionComparison article > span { width: 42px; height: 42px; }
          .exampleConclusion { align-items: flex-start; flex-direction: column; }
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
