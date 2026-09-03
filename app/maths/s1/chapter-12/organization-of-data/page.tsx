"use client";

import { useRouter } from "next/navigation";

const rawScores = [3, 5, 4, 3, 2, 5, 3, 4, 5, 3, 2, 4];

const ungroupedRows = [
  { score: 2, tally: 2, frequency: 2 },
  { score: 3, tally: 4, frequency: 4 },
  { score: 4, tally: 3, frequency: 3 },
  { score: 5, tally: 3, frequency: 3 },
];

const groupedRows = [
  { interval: "0–9", tally: 3, frequency: 3 },
  { interval: "10–19", tally: 4, frequency: 4 },
  { interval: "20–29", tally: 6, frequency: 6 },
  { interval: "30–39", tally: 2, frequency: 2 },
];

export default function OrganizationOfDataPage() {
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
        <p className="eyebrow">S1 · CHAPTER 12 · SECTION 3</p>
        <h1>Organization of Data</h1>
        <p className="introduction">
          A frequency distribution table turns raw data into an organized
          summary. Data may be listed value by value or arranged into groups.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading
          number="1"
          label="FROM RAW DATA TO A TABLE"
          title="Organize values so patterns are easier to see"
        />

        <div className="flowGrid">
          <article>
            <span className="flowNumber">1</span>
            <p className="panelLabel">RAW DATA</p>
            <h3>Keep every recorded value</h3>
            <div className="rawValues">
              {rawScores.map((score, index) => <b key={`${score}-${index}`}>{score}</b>)}
            </div>
          </article>
          <span className="flowArrow">→</span>
          <article>
            <span className="flowNumber">2</span>
            <p className="panelLabel">COUNT</p>
            <h3>Use tally marks</h3>
            <div className="largeTally"><TallyMarks count={5} /></div>
          </article>
          <span className="flowArrow">→</span>
          <article>
            <span className="flowNumber">3</span>
            <p className="panelLabel">SUMMARIZE</p>
            <h3>Record each frequency</h3>
            <div className="frequencyBadge">f</div>
          </article>
        </div>

        <div className="definitionStrip">
          <strong>Frequency</strong> is the number of times a value or group of
          values occurs. <span>[Reference: frequency]</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="2"
          label="TALLY MARKS"
          title="Count efficiently in groups of five"
        />

        <div className="twoColumn">
          <div className="tallyDiagram">
            <svg viewBox="0 0 680 310" role="img" aria-label="Tally marks one to five, with the fifth mark crossing the first four">
              <g className="tallyLines">
                <line x1="105" y1="90" x2="105" y2="220" />
                <line x1="205" y1="90" x2="205" y2="220" />
                <line x1="305" y1="90" x2="305" y2="220" />
                <line x1="405" y1="90" x2="405" y2="220" />
                <line x1="80" y1="225" x2="430" y2="85" className="fifthLine" />
              </g>
              <g className="tallyLabels">
                <text x="105" y="270">1</text>
                <text x="205" y="270">2</text>
                <text x="305" y="270">3</text>
                <text x="405" y="270">4</text>
                <text x="545" y="158" className="equals">= 5</text>
              </g>
            </svg>
          </div>

          <div className="methodPanel">
            <p className="panelLabel">TALLY METHOD</p>
            <ol>
              <li><span>1</span><p>Read one raw-data value at a time.</p></li>
              <li><span>2</span><p>Add one tally in the correct row.</p></li>
              <li><span>3</span><p>Cross every fifth tally over the first four.</p></li>
              <li><span>4</span><p>Count the tallies to obtain the frequency.</p></li>
            </ol>
          </div>
        </div>

        <div className="memoryStrip">
          <strong>Accuracy tip:</strong> cross out or point to each raw value as
          it is tallied, so no value is counted twice or missed.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="3"
          label="WITHOUT GROUPING"
          title="Use one row for each distinct value"
        />

        <div className="workedGrid">
          <div className="questionPanel">
            <p className="panelLabel">RAW SCORES OUT OF 5</p>
            <div className="rawValues large">
              {rawScores.map((score, index) => <b key={`${score}-large-${index}`}>{score}</b>)}
            </div>
            <p>
              The range of possible scores is small, so each score can have its
              own row.
            </p>
          </div>

          <FrequencyTable
            caption="Frequency distribution table"
            headings={["Score", "Tally", "Frequency"]}
            rows={ungroupedRows.map((row) => [row.score, row.tally, row.frequency])}
            total={12}
          />
        </div>

        <div className="conclusionStrip">
          <strong>Example conclusion:</strong> score 3 has the greatest
          frequency, so it is the most common score.
          <span>[Reference: organization of data without grouping]</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="4"
          label="INTO GROUPS"
          title="Use class intervals when there are many possible values"
        />

        <div className="workedGrid">
          <div className="groupExplanation">
            <p className="panelLabel">EXAMPLE: JOURNEY TIMES</p>
            <h3>Group many different times into intervals</h3>
            <div className="intervalBlocks">
              <span>0–9</span><span>10–19</span><span>20–29</span><span>30–39</span>
            </div>
            <ul>
              <li>The intervals do not overlap.</li>
              <li>There are no gaps between intervals.</li>
              <li>Every recorded value belongs to exactly one interval.</li>
            </ul>
          </div>

          <FrequencyTable
            caption="Grouped frequency distribution table"
            headings={["Time (min)", "Tally", "Frequency"]}
            rows={groupedRows.map((row) => [row.interval, row.tally, row.frequency])}
            total={15}
          />
        </div>

        <div className="warningStrip">
          <strong>Trade-off:</strong> grouping makes a large set easier to read,
          but the exact original values cannot be seen from the table.
          <span>[Reference: organization of data into groups]</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="5"
          label="CHECK THE TABLE"
          title="The total frequency must equal the number of data items"
        />

        <div className="checkEquation">
          <div>
            <span className="equationLabel">NUMBER OF RAW VALUES</span>
            <strong>12</strong>
          </div>
          <span>=</span>
          <div>
            <span className="equationLabel">SUM OF FREQUENCIES</span>
            <strong>2 + 4 + 3 + 3 = 12</strong>
          </div>
        </div>

        <div className="checklistGrid">
          <article><b>1</b><h3>All values included?</h3><p>Each raw value must be counted once.</p></article>
          <article><b>2</b><h3>Rows in order?</h3><p>Arrange values or intervals logically.</p></article>
          <article><b>3</b><h3>Tallies match?</h3><p>Count every tally carefully.</p></article>
          <article><b>4</b><h3>Totals agree?</h3><p>Add the frequency column and check.</p></article>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="6"
          label="CHECK YOUR UNDERSTANDING"
          title="Complete a frequency distribution table"
        />

        <div className="practiceQuestion">
          <p className="panelLabel">NUMBER OF BOOKS READ BY 10 STUDENTS</p>
          <div className="practiceValues">2, 4, 1, 3, 2, 5, 2, 4, 3, 2</div>
          <p>Find the frequency of each value from 1 to 5. Then identify the most common value.</p>
        </div>

        <details className="practiceReveal">
          <summary>Show answer</summary>
          <div className="answerContent">
            <FrequencyTable
              caption="Answer"
              headings={["Books", "Tally", "Frequency"]}
              rows={[
                [1, 1, 1], [2, 4, 4], [3, 2, 2], [4, 2, 2], [5, 1, 1],
              ]}
              total={10}
            />
            <p><strong>Most common value:</strong> 2 books, with frequency 4.</p>
          </div>
        </details>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Four ideas to remember</h2>
        <div className="summaryGrid">
          <article><span>1</span><h3>Frequency</h3><p>The number of times a value or interval occurs.</p></article>
          <article><span>2</span><h3>Tally marks</h3><p>A quick counting system arranged in groups of five.</p></article>
          <article><span>3</span><h3>Without grouping</h3><p>Give each distinct value its own row.</p></article>
          <article><span>4</span><h3>Into groups</h3><p>Combine many possible values into non-overlapping intervals.</p></article>
        </div>
        <p className="summaryReference">[Reference: frequency distribution table]</p>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-12")}
      >
        Finish Section 3 →
      </button>

      <style jsx>{`
        :global(*) { box-sizing: border-box; }
        :global(body) { margin: 0; background: #f3f6fb; color: #10213f; }
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
        .flowGrid { display: grid; grid-template-columns: 1fr auto .8fr auto .8fr; align-items: stretch; gap: 14px; }
        .flowGrid article { position: relative; padding: 24px; border-radius: 22px; border: 1px solid #cfdbea; background: #f8fafc; text-align: center; }
        .flowGrid h3 { margin: 8px 0 18px; font-size: 21px; }
        .flowNumber { position: absolute; top: 12px; left: 12px; display: grid; place-items: center; width: 30px; height: 30px; border-radius: 10px; background: #e9e1ff; color: #6d28d9; font-weight: 900; }
        .flowArrow { align-self: center; color: #7c3aed; font-size: 34px; font-weight: 900; }
        .rawValues { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
        .rawValues b { display: grid; place-items: center; width: 37px; height: 37px; border-radius: 11px; color: #0f766e; background: #ccfbf1; }
        .rawValues.large b { width: 42px; height: 42px; }
        .largeTally { color: #0f766e; font-size: 56px; font-weight: 900; }
        .frequencyBadge { display: grid; place-items: center; width: 74px; height: 74px; margin: 0 auto; border-radius: 50%; color: white; background: #7c3aed; font: italic 900 42px Georgia, serif; }
        .definitionStrip, .memoryStrip, .conclusionStrip, .warningStrip { margin-top: 24px; padding: 20px 24px; border-left: 6px solid #14b8a6; border-radius: 16px; background: #effcf9; font-size: 18px; line-height: 1.55; }
        .definitionStrip span, .conclusionStrip span, .warningStrip span { display: block; margin-top: 6px; color: #0f766e; font-size: 15px; font-weight: 800; }
        .warningStrip { border-color: #f59e0b; background: #fff8e8; }
        .twoColumn, .workedGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; }
        .tallyDiagram, .methodPanel, .questionPanel, .groupExplanation { border-radius: 24px; padding: 24px; }
        .tallyDiagram, .questionPanel { border: 1px solid #dce5f2; background: #f8fafc; }
        .tallyDiagram svg { display: block; width: 100%; }
        .tallyLines line { stroke: #0f766e; stroke-width: 15; stroke-linecap: round; }
        .tallyLines .fifthLine { stroke: #7c3aed; }
        .tallyLabels text { text-anchor: middle; fill: #244466; font-size: 22px; font-weight: 900; }
        .tallyLabels .equals { fill: #6d28d9; font-size: 38px; }
        .methodPanel { border: 1px solid #79ead4; background: #ecfdf8; }
        .methodPanel ol { padding: 0; margin: 0; list-style: none; }
        .methodPanel li { display: flex; align-items: center; gap: 16px; padding: 10px 0; border-bottom: 1px solid #bcecdf; }
        .methodPanel li:last-child { border-bottom: 0; }
        .methodPanel li span { display: grid; place-items: center; flex: 0 0 42px; height: 42px; border-radius: 13px; color: white; background: #0f766e; font-weight: 900; }
        .methodPanel li p { line-height: 1.45; }
        .questionPanel p, .groupExplanation p, .groupExplanation li { line-height: 1.55; }
        .tableCard { overflow: hidden; align-self: start; border: 1px solid #91d7c8; border-radius: 20px; background: white; }
        .tableCard table { width: 100%; border-collapse: collapse; }
        .tableCard caption { padding: 15px; color: white; background: #0f766e; font-size: 17px; font-weight: 900; }
        .tableCard th, .tableCard td { padding: 14px; border-right: 1px solid #cae8e1; border-bottom: 1px solid #cae8e1; text-align: center; }
        .tableCard th:last-child, .tableCard td:last-child { border-right: 0; }
        .tableCard thead th { color: #155e75; background: #e6f8f4; }
        .tableCard tfoot th, .tableCard tfoot td { color: #5b21b6; background: #f4efff; font-weight: 900; }
        .intervalBlocks { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin: 25px 0; }
        .intervalBlocks span { padding: 18px 5px; color: white; background: #7c3aed; text-align: center; font-weight: 900; }
        .intervalBlocks span:first-child { border-radius: 14px 0 0 14px; }
        .intervalBlocks span:last-child { border-radius: 0 14px 14px 0; }
        .groupExplanation { border: 1px solid #d8b4fe; background: #f8f3ff; }
        .groupExplanation h3 { font-size: 24px; }
        .checkEquation { display: grid; grid-template-columns: 1fr auto 1.4fr; gap: 24px; align-items: center; padding: 28px; border-radius: 24px; color: white; background: linear-gradient(135deg, #173b66, #0f766e); text-align: center; }
        .checkEquation > span { font-size: 44px; font-weight: 900; }
        .checkEquation div { display: flex; flex-direction: column; gap: 10px; }
        .equationLabel { color: #99f6e4; font-size: 13px; font-weight: 900; letter-spacing: .1em; }
        .checkEquation strong { font-size: clamp(25px, 4vw, 38px); }
        .checklistGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 24px; }
        .checklistGrid article { padding: 20px; border: 1px solid #dce5f2; border-radius: 18px; background: #fafcff; }
        .checklistGrid b { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 11px; color: white; background: #7c3aed; }
        .checklistGrid h3 { font-size: 18px; }
        .checklistGrid p { color: #536a85; line-height: 1.45; }
        .practiceQuestion { padding: 26px; border: 1px solid #dce5f2; border-radius: 22px; background: #f8fafc; text-align: center; }
        .practiceValues { margin: 20px auto; color: #6d28d9; font-size: clamp(24px, 4vw, 36px); font-weight: 900; letter-spacing: .08em; }
        .practiceReveal { margin-top: 20px; overflow: hidden; border: 2px solid #c4b5fd; border-radius: 18px; }
        .practiceReveal summary { padding: 18px 22px; color: #5b21b6; background: #f5f1ff; font-size: 18px; font-weight: 900; cursor: pointer; }
        .answerContent { display: grid; grid-template-columns: 1.2fr .8fr; gap: 22px; align-items: center; padding: 22px; }
        .answerContent p { padding: 18px; border-radius: 16px; background: #effcf9; line-height: 1.5; }
        .summaryCard { color: white; background: linear-gradient(135deg, #173b66, #5b21b6); }
        .summaryLabel { color: #99f6e4; }
        .summaryCard h2 { margin: 0 0 25px; font-size: clamp(28px, 4vw, 42px); }
        .summaryGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
        .summaryGrid article { padding: 20px; border-radius: 18px; background: rgba(255,255,255,.12); }
        .summaryGrid span { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 12px; color: #173b66; background: #99f6e4; font-weight: 900; }
        .summaryGrid h3 { font-size: 19px; }
        .summaryGrid p { color: #eef7ff; line-height: 1.5; }
        .summaryReference { margin: 22px 0 0; color: #ccfbf1; text-align: center; font-weight: 800; }
        .finishButton { display: block; margin: 30px auto 0; padding: 17px 30px; border: 0; border-radius: 16px; color: white; background: #6d28d9; box-shadow: 0 10px 22px rgba(109,40,217,.25); font-size: 18px; font-weight: 900; cursor: pointer; }
        .finishButton:hover, .backButton:hover { transform: translateY(-1px); }
        @media (max-width: 900px) {
          .flowGrid { grid-template-columns: 1fr; }
          .flowArrow { transform: rotate(90deg); justify-self: center; }
          .checklistGrid, .summaryGrid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .page { padding-inline: 14px; }
          .hero, .lessonCard, .summaryCard { border-radius: 24px; }
          .twoColumn, .workedGrid, .answerContent, .summaryGrid, .checklistGrid { grid-template-columns: 1fr; }
          .lessonHeading { gap: 14px; }
          .numberBadge { flex-basis: 52px; height: 52px; border-radius: 16px; font-size: 25px; }
          .checkEquation { grid-template-columns: 1fr; gap: 10px; }
          .checkEquation > span { font-size: 30px; }
          .intervalBlocks { font-size: 13px; }
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

function FrequencyTable({
  caption,
  headings,
  rows,
  total,
}: {
  caption: string;
  headings: string[];
  rows: (string | number)[][];
  total: number;
}) {
  return (
    <div className="tableCard">
      <table>
        <caption>{caption}</caption>
        <thead><tr>{headings.map((heading) => <th key={heading}>{heading}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${caption}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`}>
                  {headings[cellIndex] === "Tally" && typeof cell === "number"
                    ? <TallyMarks count={cell} />
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot><tr><th colSpan={2}>Total</th><td>{total}</td></tr></tfoot>
      </table>
    </div>
  );
}

function TallyMarks({ count }: { count: number }) {
  const completeGroups = Math.floor(count / 5);
  const remainder = count % 5;
  const groups = Array.from({ length: completeGroups + (remainder > 0 ? 1 : 0) });
  const groupWidth = 54;
  const width = Math.max(groupWidth, groups.length * groupWidth);

  return (
    <svg
      viewBox={`0 0 ${width} 42`}
      width={width}
      height="42"
      role="img"
      aria-label={`${count} tally marks`}
      style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
    >
      {groups.map((_, groupIndex) => {
        const marksInGroup = groupIndex < completeGroups ? 5 : remainder;
        const startX = groupIndex * groupWidth + 8;
        return (
          <g key={groupIndex}>
            {Array.from({ length: Math.min(marksInGroup, 4) }).map((__, markIndex) => {
              const x = startX + markIndex * 10;
              return (
                <line
                  key={markIndex}
                  x1={x}
                  y1="8"
                  x2={x}
                  y2="34"
                  stroke="#0f766e"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              );
            })}
            {marksInGroup === 5 && (
              <line
                x1={startX - 4}
                y1="34"
                x2={startX + 34}
                y2="8"
                stroke="#7c3aed"
                strokeWidth="4"
                strokeLinecap="round"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
