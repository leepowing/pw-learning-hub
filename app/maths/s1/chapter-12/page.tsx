"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Introduction to Statistics",
    description:
      "Understand how statistics helps us collect, organize, present and interpret data.",
    route: "/maths/s1/chapter-12/introduction-to-statistics",
    available: true,
  },
  {
    number: 2,
    title: "Different Types of Data",
    description:
      "Distinguish discrete data from continuous data by considering the possible values.",
    route: "/maths/s1/chapter-12/different-types-of-data",
    available: true,
  },
  {
    number: 3,
    title: "Organization of Data",
    description:
      "Organize raw data in frequency distribution tables, with or without grouping.",
    route: "/maths/s1/chapter-12/organization-of-data",
    available: true,
  },
  {
    number: 4,
    title: "Presentation of Data",
    description:
      "Read statistical diagrams and construct stem-and-leaf and back-to-back stem-and-leaf diagrams.",
    route: "/maths/s1/chapter-12/presentation-of-data",
    available: true,
  },
];

const statisticsSteps = [
  { number: "1", title: "Collect", text: "Gather relevant data." },
  { number: "2", title: "Organize", text: "Arrange the values clearly." },
  { number: "3", title: "Present", text: "Use a table or diagram." },
  { number: "4", title: "Interpret", text: "Describe what the data shows." },
];

export default function ChapterTwelvePage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1")}
      >
        ← Back to S1 Mathematics
      </button>

      <header className="hero">
        <div className="chapterBadge">12</div>
        <div>
          <p className="eyebrow">S1 MATHEMATICS</p>
          <h1>Organization and Presentation of Data (1)</h1>
          <p className="introduction">
            Learn how to identify, organize and present data so that useful
            information can be seen and compared clearly.
          </p>
        </div>
      </header>

      <section className="overviewCard">
        <div className="overviewIcon">▦</div>
        <div>
          <p className="sectionLabel">CHAPTER OVERVIEW</p>
          <h2>Turn raw data into useful information</h2>
          <p>
            Statistics is a process: collect the data, organize it, present it
            clearly, and then interpret what it tells us.
          </p>
        </div>
      </section>

      <section className="processCard">
        <div className="processIntro">
          <p className="sectionLabel">THE STATISTICAL PROCESS</p>
          <h2>Four connected stages</h2>
        </div>
        <div className="processGrid">
          {statisticsSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dataTypesCard">
        <div className="cardHeading">
          <div>
            <p className="sectionLabel">DATA TYPES PREVIEW</p>
            <h2>Discrete data and continuous data</h2>
          </div>
          <span className="headingSymbol">1, 2, 3 …</span>
        </div>

        <div className="dataTypesGrid">
          <article className="dataTypePanel discretePanel">
            <p className="panelLabel">DISCRETE DATA</p>
            <h3>Separate possible values</h3>
            <div className="dotRow" aria-label="One, two, three, four and five books">
              {[1, 2, 3, 4, 5].map((value) => <span key={value}>{value}</span>)}
            </div>
            <p>
              Discrete data can take only specific values, such as the number
              of books on a shelf.
            </p>
            <small>[Reference: discrete data]</small>
          </article>

          <article className="dataTypePanel continuousPanel">
            <p className="panelLabel">CONTINUOUS DATA</p>
            <h3>Any value within a range</h3>
            <div className="rangeScale" aria-label="A continuous scale from 150 to 160 centimetres">
              <div className="rangeLine"><span /></div>
              <div className="rangeLabels"><span>150 cm</span><span>155.4 cm</span><span>160 cm</span></div>
            </div>
            <p>
              Continuous data can take any value in a range, such as a height,
              time or mass.
            </p>
            <small>[Reference: continuous data]</small>
          </article>
        </div>
      </section>

      <section className="organizationCard">
        <div className="cardHeading">
          <div>
            <p className="sectionLabel">ORGANIZATION PREVIEW</p>
            <h2>Summarize repeated values with frequencies</h2>
          </div>
          <span className="headingSymbol">ƒ</span>
        </div>

        <div className="organizationGrid">
          <div className="rawDataPanel">
            <p className="panelLabel">RAW DATA</p>
            <div className="rawValues">12&nbsp;&nbsp; 14&nbsp;&nbsp; 13&nbsp;&nbsp; 12&nbsp;&nbsp; 15&nbsp;&nbsp; 14&nbsp;&nbsp; 12&nbsp;&nbsp; 13</div>
            <p>Count how often each value occurs.</p>
          </div>

          <div className="frequencyPanel">
            <p className="panelLabel">FREQUENCY DISTRIBUTION TABLE</p>
            <table>
              <thead><tr><th>Value</th><th>Frequency</th></tr></thead>
              <tbody>
                <tr><td>12</td><td>3</td></tr>
                <tr><td>13</td><td>2</td></tr>
                <tr><td>14</td><td>2</td></tr>
                <tr><td>15</td><td>1</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="referenceStrip">
          <strong>Two forms:</strong> data may be organized without grouping or
          into suitable groups. <span>[Reference: frequency distribution table]</span>
        </div>
      </section>

      <section className="presentationCard">
        <div className="cardHeading">
          <div>
            <p className="sectionLabel">PRESENTATION PREVIEW</p>
            <h2>Choose a display that makes comparison easy</h2>
          </div>
          <span className="headingSymbol">▥</span>
        </div>

        <div className="presentationGrid">
          <article className="chartPanel">
            <p className="panelLabel">TWO DATA SETS IN ONE DIAGRAM</p>
            <svg viewBox="0 0 520 280" role="img" aria-label="Bars and a line comparing two data sets from March to June">
              <line x1="65" y1="225" x2="475" y2="225" className="axis" />
              <line x1="65" y1="225" x2="65" y2="35" className="axis" />
              <line x1="65" y1="175" x2="475" y2="175" className="gridLine" />
              <line x1="65" y1="125" x2="475" y2="125" className="gridLine" />
              <line x1="65" y1="75" x2="475" y2="75" className="gridLine" />
              <g className="bars">
                <rect x="105" y="145" width="45" height="80" />
                <rect x="205" y="130" width="45" height="95" />
                <rect x="305" y="105" width="45" height="120" />
                <rect x="405" y="80" width="45" height="145" />
              </g>
              <polyline points="127,160 227,135 327,112 427,75" className="trendLine" />
              <g className="points"><circle cx="127" cy="160" r="7" /><circle cx="227" cy="135" r="7" /><circle cx="327" cy="112" r="7" /><circle cx="427" cy="75" r="7" /></g>
              <g className="chartLabels"><text x="127" y="255">Mar</text><text x="227" y="255">Apr</text><text x="327" y="255">May</text><text x="427" y="255">Jun</text></g>
            </svg>
            <p>Different representations can show two related data sets together.</p>
            <small>[Reference: statistical diagram]</small>
          </article>

          <article className="stemPanel">
            <p className="panelLabel">STEM-AND-LEAF DIAGRAM</p>
            <div className="stemTable">
              <div><b>Stem (10)</b><b>Leaf (1)</b></div>
              <div><span>4</span><span>2&nbsp;&nbsp;5&nbsp;&nbsp;8</span></div>
              <div><span>5</span><span>1&nbsp;&nbsp;3&nbsp;&nbsp;7&nbsp;&nbsp;9</span></div>
              <div><span>6</span><span>0&nbsp;&nbsp;2&nbsp;&nbsp;4</span></div>
            </div>
            <div className="keyBox"><strong>Key:</strong> 4 | 2 means 42</div>
            <p>A stem-and-leaf diagram keeps every original data value visible.</p>
            <small>[Reference: stem-and-leaf diagram]</small>
          </article>
        </div>
      </section>

      <section className="sectionGrid">
        {sections.map((section) => (
          <article key={section.number} className="sectionCard">
            <div className="sectionTop">
              <span className="sectionNumber">{section.number}</span>
              <span className={section.available ? "sectionStatus availableStatus" : "sectionStatus"}>
                {section.available ? "Available" : "Coming soon"}
              </span>
            </div>
            <p className="sectionLabel">SECTION {section.number}</p>
            <h2>{section.title}</h2>
            <p className="sectionDescription">{section.description}</p>
            {section.available ? (
              <button type="button" className="startSectionButton" onClick={() => router.push(section.route)}>
                Start Section {section.number} →
              </button>
            ) : (
              <button type="button" className="disabledButton" disabled>Coming soon</button>
            )}
          </article>
        ))}
      </section>

      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">DATA PRACTICE</p>
          <h2>Chapter 12 Flashcards</h2>
          <p>Practise data vocabulary, frequency tables and diagram-reading facts.</p>
        </div>
        <button
          type="button"
          className="startFlashcardsButton"
          onClick={() => router.push("/maths/flashcards?level=s1&chapter=12")}
        >
          Start Flashcards →
        </button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 12 Checkpoint</h2>
          <p>Complete Sections 1–4 before attempting the checkpoint.</p>
        </div>
        <button
          type="button"
          className="startCheckpointButton"
          onClick={() => router.push("/maths/s1/chapter-12/checkpoint")}
        >
          Start Checkpoint →
        </button>
      </section>

      <style jsx>{`
        .page { max-width: 1120px; width: calc(100% - 48px); margin: 46px auto 72px; color: #172033; box-sizing: border-box; }
        .page * { box-sizing: border-box; }
        button { font: inherit; }
        .backButton { margin-bottom: 24px; padding: 0; border: 0; background: transparent; color: #6d28d9; font-size: 16px; font-weight: 850; cursor: pointer; }
        .hero { display: grid; grid-template-columns: 92px 1fr; gap: 24px; align-items: center; padding: 38px; border: 1px solid #c4b5fd; border-radius: 28px; background: linear-gradient(135deg, #f5f3ff, #eef2ff 56%, #f0fdfa); }
        .chapterBadge { width: 92px; height: 92px; display: grid; place-items: center; border-radius: 28px; background: #7c3aed; color: white; font-size: 42px; font-weight: 950; box-shadow: 0 12px 28px rgba(124,58,237,.22); }
        .eyebrow, .sectionLabel, .panelLabel, .featureLabel { margin: 0 0 7px; font-size: 13px; font-weight: 900; letter-spacing: .1em; }
        .eyebrow, .sectionLabel { color: #6d28d9; }
        h1 { margin: 0; font-size: clamp(34px, 5vw, 54px); line-height: 1.08; letter-spacing: -.035em; }
        .introduction { max-width: 840px; margin: 16px 0 0; color: #536981; font-size: 19px; line-height: 1.58; }
        .overviewCard { display: flex; gap: 20px; align-items: center; margin-top: 22px; padding: 27px; border: 1px solid #99f6e4; border-radius: 22px; background: #f0fdfa; }
        .overviewIcon { width: 70px; height: 70px; flex: 0 0 70px; display: grid; place-items: center; border-radius: 20px; background: white; color: #0f766e; font-size: 34px; font-weight: 900; }
        .overviewCard h2, .processCard h2, .cardHeading h2, .featureCard h2 { margin: 0; font-size: clamp(23px, 3vw, 31px); }
        .overviewCard p:last-child, .featureCard p:last-child { margin: 8px 0 0; color: #52677f; line-height: 1.5; }
        .processCard, .dataTypesCard, .organizationCard, .presentationCard { margin-top: 20px; padding: 28px; border: 1px solid #dbe5ef; border-radius: 23px; background: white; }
        .processIntro { margin-bottom: 18px; }
        .processGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 13px; }
        .processGrid article { min-height: 135px; padding: 18px; border-radius: 17px; background: #f8fafc; border: 1px solid #e2e8f0; }
        .processGrid span { width: 35px; height: 35px; display: grid; place-items: center; border-radius: 10px; background: #ede9fe; color: #6d28d9; font-weight: 900; }
        .processGrid strong { display: block; margin-top: 12px; font-size: 18px; }
        .processGrid p { margin: 6px 0 0; color: #60758c; }
        .cardHeading { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 20px; }
        .headingSymbol { min-width: 74px; padding: 13px; border-radius: 15px; background: #ede9fe; color: #6d28d9; font: 900 21px Georgia, serif; text-align: center; }
        .dataTypesGrid, .organizationGrid, .presentationGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 17px; }
        .dataTypePanel, .rawDataPanel, .frequencyPanel, .chartPanel, .stemPanel { padding: 23px; border-radius: 19px; }
        .discretePanel { border: 1px solid #bae6fd; background: #f0f9ff; }
        .continuousPanel { border: 1px solid #a7f3d0; background: #ecfdf5; }
        .panelLabel { color: #0369a1; }
        .dataTypePanel h3 { margin: 0; font-size: 22px; }
        .dataTypePanel > p:last-of-type, .chartPanel > p, .stemPanel > p { color: #52677f; line-height: 1.48; }
        .dataTypePanel small, .chartPanel small, .stemPanel small { color: #6d28d9; font-weight: 800; }
        .dotRow { display: flex; gap: 10px; margin: 24px 0; }
        .dotRow span { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: white; color: #0369a1; font-weight: 900; box-shadow: 0 3px 9px rgba(3,105,161,.1); }
        .rangeScale { margin: 29px 0 25px; }
        .rangeLine { position: relative; height: 8px; border-radius: 999px; background: linear-gradient(90deg, #5eead4, #0f766e); }
        .rangeLine::before, .rangeLine::after, .rangeLine span { content: ""; position: absolute; top: 50%; width: 15px; height: 15px; border: 4px solid white; border-radius: 50%; background: #0f766e; transform: translate(-50%,-50%); }
        .rangeLine::before { left: 0; }
        .rangeLine span { left: 54%; }
        .rangeLine::after { left: 100%; }
        .rangeLabels { display: flex; justify-content: space-between; margin-top: 11px; color: #0f766e; font-size: 12px; font-weight: 850; }
        .rawDataPanel { display: flex; flex-direction: column; justify-content: center; border: 1px solid #ddd6fe; background: #faf5ff; }
        .rawValues { margin: 14px 0; padding: 22px 15px; border-radius: 14px; background: white; color: #6d28d9; font: 800 21px Georgia, serif; text-align: center; line-height: 1.7; }
        .rawDataPanel > p:last-child { margin: 0; color: #60758c; text-align: center; }
        .frequencyPanel { border: 1px solid #a7f3d0; background: #f0fdfa; }
        table { width: 100%; margin-top: 13px; border-collapse: collapse; overflow: hidden; border-radius: 12px; background: white; }
        th, td { padding: 10px; border: 1px solid #99f6e4; text-align: center; }
        th { background: #ccfbf1; color: #0f766e; }
        .referenceStrip { margin-top: 17px; padding: 16px 18px; border-left: 5px solid #7c3aed; border-radius: 13px; background: #f5f3ff; color: #52677f; line-height: 1.5; }
        .referenceStrip span { color: #6d28d9; font-weight: 800; }
        .chartPanel { border: 1px solid #bae6fd; background: #f8fafc; }
        .chartPanel svg { width: 100%; min-height: 240px; margin: 2px 0 8px; }
        .axis { stroke: #334155; stroke-width: 4; }
        .gridLine { stroke: #cbd5e1; stroke-width: 2; stroke-dasharray: 6 6; }
        .bars rect { fill: #bae6fd; stroke: #0284c7; stroke-width: 3; }
        .trendLine { fill: none; stroke: #f97316; stroke-width: 5; stroke-linecap: round; stroke-linejoin: round; }
        .points circle { fill: #f97316; stroke: white; stroke-width: 3; }
        .chartLabels { fill: #475569; font: 800 15px Inter, sans-serif; text-anchor: middle; }
        .stemPanel { border: 1px solid #ddd6fe; background: #faf5ff; }
        .stemTable { margin: 18px 0; border-radius: 13px; overflow: hidden; background: white; }
        .stemTable > div { display: grid; grid-template-columns: 1fr 2fr; }
        .stemTable b, .stemTable span { padding: 10px 13px; border: 1px solid #ddd6fe; }
        .stemTable b { background: #ede9fe; color: #5b21b6; }
        .stemTable span:first-child { color: #6d28d9; font-weight: 900; text-align: center; }
        .keyBox { display: inline-block; padding: 10px 13px; border-radius: 10px; background: #ede9fe; color: #4c1d95; }
        .sectionGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; margin-top: 22px; }
        .sectionCard { min-height: 300px; display: flex; flex-direction: column; padding: 26px; border: 1px solid #dbe5ef; border-radius: 21px; background: white; }
        .sectionTop { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .sectionNumber { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 15px; background: #ede9fe; color: #6d28d9; font-size: 22px; font-weight: 900; }
        .sectionStatus { padding: 7px 11px; border-radius: 999px; background: #e2e8f0; color: #64748b; font-size: 12px; font-weight: 850; }
        .availableStatus { background: #dcfce7; color: #166534; }
        .sectionCard h2 { margin: 0; font-size: 25px; }
        .sectionDescription { flex: 1; color: #60758c; line-height: 1.5; }
        .startSectionButton, .disabledButton { width: 100%; padding: 14px; border: 0; border-radius: 13px; font-weight: 900; }
        .startSectionButton { background: #7c3aed; color: white; cursor: pointer; }
        .disabledButton, .disabledFeatureButton { background: #e2e8f0; color: #94a3b8; cursor: not-allowed; }
        .featureCard { display: flex; align-items: center; justify-content: space-between; gap: 22px; margin-top: 18px; padding: 24px; border-radius: 20px; }
        .flashcardCard { border: 1px solid #c7d2fe; background: #eef2ff; }
        .checkpointCard { border: 1px solid #fde68a; background: #fffbeb; }
        .flashcardLabel { color: #4f46e5; }
        .checkpointLabel { color: #b45309; }
        .disabledFeatureButton, .startFlashcardsButton, .startCheckpointButton { flex: 0 0 auto; padding: 12px 18px; border: 0; border-radius: 12px; font-weight: 900; }
        .startFlashcardsButton { background: #4f46e5; color: white; cursor: pointer; }
        .startCheckpointButton { background: #7c3aed; color: white; cursor: pointer; }
        @media (max-width: 820px) {
          .processGrid { grid-template-columns: repeat(2,1fr); }
          .dataTypesGrid, .organizationGrid, .presentationGrid, .sectionGrid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .page { width: calc(100% - 28px); margin-top: 28px; }
          .hero { grid-template-columns: 1fr; padding: 25px; }
          .chapterBadge { width: 70px; height: 70px; border-radius: 21px; font-size: 33px; }
          .overviewCard, .featureCard { align-items: flex-start; flex-direction: column; }
          .processGrid { grid-template-columns: 1fr; }
          .processCard, .dataTypesCard, .organizationCard, .presentationCard { padding: 20px 16px; }
          .cardHeading { align-items: flex-start; flex-direction: column; }
          .dotRow { flex-wrap: wrap; }
          .disabledFeatureButton, .startFlashcardsButton, .startCheckpointButton { width: 100%; }
        }
      `}</style>
    </main>
  );
}
