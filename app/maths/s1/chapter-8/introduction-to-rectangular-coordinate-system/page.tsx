"use client";

import { useRouter } from "next/navigation";

const gridValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

export default function RectangularCoordinateSystemPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-8")}
      >
        ← Back to Chapter 8
      </button>

      <p className="eyebrow">S1 · CHAPTER 8 · SECTION 1</p>
      <h1>Introduction to Rectangular Coordinate System</h1>

      <p className="introduction">
        Use two perpendicular number lines to describe the exact position of a
        point. Read the horizontal coordinate first and the vertical
        coordinate second.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">THE COORDINATE PLANE</p>
            <h2>Two axes meet at the origin</h2>
          </div>
        </div>

        <div className="planeLayout">
          <CoordinatePlane />

          <div className="definitionStack">
            <article>
              <span className="definitionSymbol">x</span>
              <div>
                <strong>x-axis</strong>
                <p>The horizontal number line. Positive values are to the right.</p>
              </div>
            </article>
            <article>
              <span className="definitionSymbol">y</span>
              <div>
                <strong>y-axis</strong>
                <p>The vertical number line. Positive values are upwards.</p>
              </div>
            </article>
            <article>
              <span className="definitionSymbol">O</span>
              <div>
                <strong>Origin</strong>
                <p>The axes meet at O(0, 0).</p>
              </div>
            </article>
          </div>
        </div>

        <div className="keyNote">
          <strong>The axes are perpendicular.</strong>
          <span>They divide the plane into four quadrants.</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">ORDERED PAIRS</p>
            <h2>A point is written as P(x, y)</h2>
          </div>
        </div>

        <div className="orderedPairLayout">
          <div className="orderedPairFormula">
            <span className="pointName">P</span>
            <span>(</span>
            <strong className="xValue">x</strong>
            <span>,</span>
            <strong className="yValue">y</strong>
            <span>)</span>
          </div>

          <div className="coordinateMeanings">
            <article>
              <span className="xBadge">FIRST</span>
              <strong>x-coordinate</strong>
              <p>Move left or right from the origin.</p>
            </article>
            <article>
              <span className="yBadge">SECOND</span>
              <strong>y-coordinate</strong>
              <p>Then move downwards or upwards.</p>
            </article>
          </div>
        </div>

        <div className="memoryRule">
          <span>Across first</span>
          <b>→</b>
          <span>Up or down second</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">PLOTTING A POINT</p>
            <h2>Plot A(−3, 4) from the origin</h2>
          </div>
        </div>

        <div className="workedLayout">
          <svg
            className="plotDiagram"
            viewBox="0 0 420 360"
            role="img"
            aria-label="Point A at negative three, four on a coordinate plane"
          >
            <defs>
              <pattern id="plot-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#dbeafe" strokeWidth="1.5" />
              </pattern>
              <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#1d4ed8" />
              </marker>
            </defs>
            <rect x="45" y="15" width="330" height="330" rx="12" fill="url(#plot-grid)" />
            <line x1="45" y1="180" x2="375" y2="180" stroke="#172033" strokeWidth="3" />
            <line x1="210" y1="345" x2="210" y2="15" stroke="#172033" strokeWidth="3" />
            <line x1="210" y1="180" x2="120" y2="180" stroke="#e11d48" strokeWidth="5" markerEnd="url(#arrow-blue)" />
            <line x1="120" y1="180" x2="120" y2="60" stroke="#4f46e5" strokeWidth="5" strokeDasharray="8 7" markerEnd="url(#arrow-blue)" />
            <circle cx="120" cy="60" r="8" fill="#be123c" />
            <text x="91" y="48" className="pointText">A(−3, 4)</text>
            <text x="219" y="198" className="axisText">O</text>
            <text x="354" y="170" className="axisText">x</text>
            <text x="220" y="31" className="axisText">y</text>
            <text x="146" y="202" className="movementText">3 left</text>
            <text x="73" y="124" className="movementText">4 up</text>
          </svg>

          <div className="workedSteps">
            <article>
              <span>1</span>
              <div>
                <p>Start at the origin.</p>
                <strong>O(0, 0)</strong>
              </div>
            </article>
            <article>
              <span>2</span>
              <div>
                <p>The x-coordinate is −3.</p>
                <strong>Move 3 units left.</strong>
              </div>
            </article>
            <article>
              <span>3</span>
              <div>
                <p>The y-coordinate is 4.</p>
                <strong>Move 4 units upwards.</strong>
              </div>
            </article>
            <article>
              <span>4</span>
              <div>
                <p>Mark and label the point.</p>
                <strong>A(−3, 4)</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">FOUR QUADRANTS</p>
            <h2>The signs of the coordinates identify the quadrant</h2>
          </div>
        </div>

        <div className="quadrantGrid" aria-label="Signs of coordinates in the four quadrants">
          <article className="quadrantTwo">
            <span>II</span>
            <strong>(−, +)</strong>
            <p>left and up</p>
          </article>
          <article className="quadrantOne">
            <span>I</span>
            <strong>(+, +)</strong>
            <p>right and up</p>
          </article>
          <article className="quadrantThree">
            <span>III</span>
            <strong>(−, −)</strong>
            <p>left and down</p>
          </article>
          <article className="quadrantFour">
            <span>IV</span>
            <strong>(+, −)</strong>
            <p>right and down</p>
          </article>
          <div className="horizontalAxis" aria-hidden="true" />
          <div className="verticalAxis" aria-hidden="true" />
          <span className="originLabel">O</span>
        </div>

        <div className="axisNotes">
          <span>A point on the x-axis has y = 0.</span>
          <span>A point on the y-axis has x = 0.</span>
          <span>The origin is not in any quadrant.</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">READING COORDINATES</p>
            <h2>Project the point onto each axis</h2>
          </div>
        </div>

        <div className="readingExample">
          <svg
            className="readingDiagram"
            viewBox="0 0 390 260"
            role="img"
            aria-label="Point B at four, negative two with guide lines to both axes"
          >
            <defs>
              <pattern id="reading-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#e0e7ff" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="55" y="18" width="280" height="224" rx="12" fill="url(#reading-grid)" />
            <line x1="55" y1="130" x2="335" y2="130" stroke="#172033" strokeWidth="3" />
            <line x1="195" y1="242" x2="195" y2="18" stroke="#172033" strokeWidth="3" />
            <line x1="307" y1="130" x2="307" y2="186" stroke="#4f46e5" strokeWidth="3" strokeDasharray="7 6" />
            <line x1="195" y1="186" x2="307" y2="186" stroke="#e11d48" strokeWidth="3" strokeDasharray="7 6" />
            <circle cx="307" cy="186" r="8" fill="#be123c" />
            <text x="315" y="205" className="pointText">B(4, −2)</text>
            <text x="297" y="122" className="guideText">x = 4</text>
            <text x="203" y="178" className="guideText">y = −2</text>
            <text x="202" y="147" className="axisText">O</text>
          </svg>

          <div className="readingSteps">
            <article>
              <span className="xBadge">x</span>
              <div>
                <strong>Read the vertical guide line</strong>
                <p>It meets the x-axis at 4, so the x-coordinate is 4.</p>
              </div>
            </article>
            <article>
              <span className="yBadge">y</span>
              <div>
                <strong>Read the horizontal guide line</strong>
                <p>It meets the y-axis at −2, so the y-coordinate is −2.</p>
              </div>
            </article>
            <div className="readingAnswer">Therefore, the point is B(4, −2).</div>
          </div>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Coordinate essentials</h2>

        <div className="summaryGrid">
          <article>
            <span>1</span>
            <p>The x-axis is horizontal and the y-axis is vertical.</p>
          </article>
          <article>
            <span>2</span>
            <p>The origin is O(0, 0).</p>
          </article>
          <article>
            <span>3</span>
            <p>Coordinates are written in the order (x, y).</p>
          </article>
          <article>
            <span>4</span>
            <p>Use the signs of x and y to identify the quadrant.</p>
          </article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-8")}
      >
        Finish Section 1 →
      </button>

      <style jsx global>{`
        .page {
          max-width: 1120px;
          width: calc(100% - 48px);
          margin: 46px auto 72px;
          box-sizing: border-box;
          color: #172033;
        }

        .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: none;
          background: transparent;
          color: #047857;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .eyebrow,
        .lessonLabel,
        .summaryLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #e11d48;
        }

        h1 {
          max-width: 950px;
          margin: 0;
          font-size: clamp(36px, 5vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .introduction {
          max-width: 850px;
          margin: 17px 0 30px;
          color: #5c667a;
          font-size: 19px;
          line-height: 1.6;
        }

        .lessonCard,
        .summaryCard {
          margin-top: 18px;
          padding: 28px;
          border: 1px solid #e2e8f0;
          border-radius: 23px;
          background: white;
          box-shadow: 0 7px 22px rgba(15, 23, 42, 0.045);
        }

        .lessonHeading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .lessonNumber {
          width: 50px;
          height: 50px;
          flex: 0 0 50px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background: #fff7ed;
          color: #c2410c;
          font-size: 21px;
          font-weight: 900;
        }

        .lessonLabel,
        .summaryLabel {
          margin: 0 0 5px;
          color: #c2410c;
        }

        .lessonHeading h2,
        .summaryCard h2 {
          margin: 0;
          font-size: 25px;
          line-height: 1.25;
        }

        .planeLayout,
        .workedLayout,
        .readingExample {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
          gap: 26px;
          align-items: center;
        }

        .coordinatePlane,
        .plotDiagram,
        .readingDiagram {
          width: 100%;
          max-height: 430px;
          border-radius: 18px;
          background: #f8fbff;
        }

        .axisLabel,
        .tickLabel,
        .axisText,
        .pointText,
        .movementText,
        .guideText {
          font-family: Arial, sans-serif;
          font-weight: 800;
        }

        .axisLabel,
        .axisText {
          fill: #172033;
          font-size: 15px;
        }

        .tickLabel {
          fill: #64748b;
          font-size: 11px;
        }

        .pointText {
          fill: #be123c;
          font-size: 16px;
        }

        .movementText,
        .guideText {
          fill: #4338ca;
          font-size: 13px;
        }

        .definitionStack,
        .workedSteps,
        .readingSteps {
          display: grid;
          gap: 12px;
        }

        .definitionStack article,
        .workedSteps article,
        .readingSteps article {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          border-radius: 15px;
          background: #f8fafc;
        }

        .definitionSymbol,
        .workedSteps article > span {
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #dbeafe;
          color: #1d4ed8;
          font-size: 19px;
          font-weight: 900;
        }

        .definitionStack p,
        .workedSteps p,
        .readingSteps p {
          margin: 4px 0 0;
          color: #64748b;
          line-height: 1.45;
        }

        .keyNote {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 22px;
          padding: 15px;
          border-radius: 14px;
          background: #ecfdf5;
          color: #166534;
          text-align: center;
        }

        .orderedPairLayout {
          display: grid;
          grid-template-columns: minmax(260px, 0.75fr) minmax(0, 1.25fr);
          gap: 20px;
          align-items: stretch;
        }

        .orderedPairFormula {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          min-height: 180px;
          border-radius: 19px;
          background: linear-gradient(135deg, #eff6ff, #eef2ff);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(40px, 6vw, 62px);
          font-weight: 800;
        }

        .pointName {
          margin-right: 8px;
          color: #172033;
        }

        .xValue {
          color: #e11d48;
        }

        .yValue {
          color: #4f46e5;
        }

        .coordinateMeanings {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .coordinateMeanings article {
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
        }

        .coordinateMeanings strong {
          display: block;
          margin-top: 13px;
          font-size: 18px;
        }

        .coordinateMeanings p {
          margin: 7px 0 0;
          color: #64748b;
          line-height: 1.45;
        }

        .xBadge,
        .yBadge {
          display: inline-grid;
          place-items: center;
          min-width: 34px;
          min-height: 30px;
          padding: 0 8px;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 900;
        }

        .xBadge {
          background: #ffe4e6;
          color: #be123c;
        }

        .yBadge {
          background: #e0e7ff;
          color: #4338ca;
        }

        .memoryRule {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 18px;
          padding: 15px;
          border-radius: 14px;
          background: #fffbeb;
          color: #92400e;
          font-weight: 900;
        }

        .memoryRule b {
          font-size: 23px;
        }

        .workedCard {
          border-color: #bfdbfe;
          background: #fbfdff;
        }

        .workedSteps article > div {
          min-width: 0;
        }

        .workedSteps strong {
          display: block;
          margin-top: 4px;
          color: #1e3a8a;
        }

        .quadrantGrid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
          max-width: 760px;
          margin: 0 auto;
          padding: 14px;
          border-radius: 20px;
          background: #f8fafc;
        }

        .quadrantGrid article {
          min-height: 125px;
          display: grid;
          place-items: center;
          align-content: center;
          padding: 16px;
          border-radius: 14px;
          text-align: center;
        }

        .quadrantGrid article > span {
          color: #475569;
          font-size: 13px;
          font-weight: 900;
        }

        .quadrantGrid article strong {
          margin-top: 6px;
          font-size: 25px;
        }

        .quadrantGrid article p {
          margin: 5px 0 0;
          color: #64748b;
        }

        .quadrantOne {
          background: #dcfce7;
        }

        .quadrantTwo {
          background: #dbeafe;
        }

        .quadrantThree {
          background: #fef3c7;
        }

        .quadrantFour {
          background: #ffe4e6;
        }

        .horizontalAxis,
        .verticalAxis {
          position: absolute;
          z-index: 2;
          background: #172033;
          pointer-events: none;
        }

        .horizontalAxis {
          top: 50%;
          right: 5px;
          left: 5px;
          height: 3px;
        }

        .verticalAxis {
          top: 5px;
          bottom: 5px;
          left: 50%;
          width: 3px;
        }

        .originLabel {
          position: absolute;
          z-index: 3;
          top: 50%;
          left: 50%;
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #172033;
          color: white;
          font-weight: 900;
          transform: translate(-50%, -50%);
        }

        .axisNotes {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 18px;
        }

        .axisNotes span {
          padding: 14px;
          border-radius: 13px;
          background: #f1f5f9;
          color: #475569;
          font-weight: 800;
          text-align: center;
        }

        .readingAnswer {
          padding: 16px;
          border-radius: 14px;
          background: #ecfdf5;
          color: #166534;
          font-weight: 900;
          text-align: center;
        }

        .summaryCard {
          border-color: #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #faf5ff);
        }

        .summaryLabel {
          color: #4f46e5;
        }

        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 20px;
        }

        .summaryGrid article {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          border-radius: 14px;
          background: white;
        }

        .summaryGrid span {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #e0e7ff;
          color: #4338ca;
          font-weight: 900;
        }

        .summaryGrid p {
          margin: 0;
          color: #475569;
          line-height: 1.45;
        }

        .finishButton {
          width: 100%;
          margin-top: 20px;
          padding: 16px;
          border: none;
          border-radius: 15px;
          background: #059669;
          color: white;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
        }

        .finishButton:hover {
          background: #047857;
        }

        @media (max-width: 820px) {
          .planeLayout,
          .workedLayout,
          .readingExample,
          .orderedPairLayout {
            grid-template-columns: 1fr;
          }

          .axisNotes {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .summaryCard {
            padding: 20px;
          }

          .coordinateMeanings,
          .summaryGrid {
            grid-template-columns: 1fr;
          }

          .keyNote,
          .memoryRule {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}

function CoordinatePlane() {
  const origin = 210;
  const step = 32;

  return (
    <svg
      className="coordinatePlane"
      viewBox="0 0 420 420"
      role="img"
      aria-label="Rectangular coordinate plane with x-axis, y-axis, origin and four quadrants"
    >
      <rect x="24" y="24" width="372" height="372" rx="18" fill="#f8fbff" />

      {gridValues.map((value) => {
        const position = origin + value * step;

        return (
          <g key={`grid-${value}`}>
            <line
              x1={position}
              y1="50"
              x2={position}
              y2="370"
              stroke={value === 0 ? "#172033" : "#dbeafe"}
              strokeWidth={value === 0 ? 3 : 1.5}
            />
            <line
              x1="50"
              y1={position}
              x2="370"
              y2={position}
              stroke={value === 0 ? "#172033" : "#dbeafe"}
              strokeWidth={value === 0 ? 3 : 1.5}
            />
          </g>
        );
      })}

      {gridValues.filter((value) => value !== 0).map((value) => (
        <g key={`label-${value}`}>
          <text x={origin + value * step} y="226" textAnchor="middle" className="tickLabel">
            {value}
          </text>
          <text x="197" y={origin - value * step + 4} textAnchor="end" className="tickLabel">
            {value}
          </text>
        </g>
      ))}

      <text x="376" y="202" className="axisLabel">x</text>
      <text x="219" y="48" className="axisLabel">y</text>
      <text x="218" y="228" className="axisLabel">O</text>
      <text x="292" y="100" className="tickLabel">Quadrant I</text>
      <text x="70" y="100" className="tickLabel">Quadrant II</text>
      <text x="66" y="338" className="tickLabel">Quadrant III</text>
      <text x="282" y="338" className="tickLabel">Quadrant IV</text>
    </svg>
  );
}
