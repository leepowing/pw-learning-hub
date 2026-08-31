"use client";

import { useRouter } from "next/navigation";

export default function AnglesRelatingToIntersectingLinesPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-9")}
      >
        ← Back to Chapter 9
      </button>

      <p className="eyebrow">S1 · CHAPTER 9 · SECTION 1</p>
      <h1>Angles Relating to Intersecting Lines</h1>

      <p className="introduction">
        Use angle facts for straight lines, intersecting lines and angles at a
        point. State the geometric reason for every calculation.
      </p>

      <section className="lessonCard">
        <LessonHeading
          number="1"
          label="ADJACENT ANGLES"
          title="Angles on a straight line add up to 180°"
        />

        <div className="twoColumn">
          <svg
            className="diagram"
            viewBox="0 0 520 300"
            role="img"
            aria-label="Two adjacent angles a and b on a straight line"
          >
            <line x1="55" y1="220" x2="465" y2="220" className="mainLine" />
            <line x1="260" y1="220" x2="350" y2="65" className="mainLine" />
            <path d="M190 220 A70 70 0 0 1 295 160" className="arc rose" />
            <path d="M295 160 A70 70 0 0 1 330 220" className="arc blue" />
            <text x="220" y="173" className="angleText roseText">a</text>
            <text x="314" y="184" className="angleText blueText">b</text>
            <text x="244" y="246" className="pointText">O</text>
          </svg>

          <div className="factPanel">
            <p className="factLabel">ANGLE FACT</p>
            <div className="largeFormula">a + b = 180°</div>
            <p>
              Adjacent angles share a common vertex and a common arm. When
              their other arms form a straight line, they are supplementary.
            </p>
            <div className="reasonTag">[Reference: adj. ∠s on st. line]</div>
          </div>
        </div>

        <div className="workedStrip">
          <strong>Example</strong>
          <span>x + 135° = 180°</span>
          <span>x = 45°</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="2"
          label="VERTICALLY OPPOSITE ANGLES"
          title="Opposite angles formed by two straight lines are equal"
        />

        <div className="twoColumn">
          <svg
            className="diagram"
            viewBox="0 0 520 320"
            role="img"
            aria-label="Two intersecting straight lines with vertically opposite angles"
          >
            <line x1="70" y1="270" x2="450" y2="50" className="mainLine" />
            <line x1="80" y1="55" x2="440" y2="275" className="mainLine" />
            <path d="M212 132 A62 62 0 0 1 309 132" className="arc rose" />
            <path d="M309 188 A62 62 0 0 1 212 188" className="arc rose" />
            <text x="251" y="115" className="angleText roseText">a</text>
            <text x="251" y="222" className="angleText roseText">c</text>
            <text x="247" y="167" className="pointText">O</text>
          </svg>

          <div className="factPanel">
            <p className="factLabel">ANGLE FACT</p>
            <div className="largeFormula">a = c</div>
            <p>
              Vertically opposite angles lie directly opposite each other at
              the intersection of two straight lines.
            </p>
            <div className="reasonTag">[Reference: vert. opp. ∠s]</div>
          </div>
        </div>

        <div className="workedExample">
          <div>
            <p className="workedLabel">WORKED EXAMPLE</p>
            <h3>Find x when the opposite angle is 128°</h3>
          </div>
          <div className="calculation">
            <span>x = 128°</span>
            <small>vert. opp. ∠s</small>
          </div>
        </div>

        <div className="warningNote">
          <strong>Do not confuse adjacent and vertically opposite angles.</strong>
          <span>Adjacent angles are next to each other; vertically opposite angles face each other.</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="3"
          label="ANGLES AT A POINT"
          title="Angles around a point add up to 360°"
        />

        <div className="pointLayout">
          <div className="pointDiagram" aria-label="Four angles around a point">
            <span className="ray rayOne" />
            <span className="ray rayTwo" />
            <span className="ray rayThree" />
            <span className="ray rayFour" />
            <span className="centre">O</span>
            <span className="pointAngle angleA">a</span>
            <span className="pointAngle angleB">b</span>
            <span className="pointAngle angleC">c</span>
            <span className="pointAngle angleD">d</span>
          </div>

          <div className="pointExplanation">
            <div className="largeFormula pointFormula">a + b + c + d = 360°</div>
            <p>
              One complete turn about a point is 360°. Include every
              non-overlapping angle exactly once.
            </p>
            <div className="reasonTag">[Reference: ∠s at a pt.]</div>
          </div>
        </div>

        <div className="workedStrip threeStep">
          <strong>Example</strong>
          <span>x + 110° + 80° = 360°</span>
          <span>x = 170°</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <LessonHeading
          number="4"
          label="COMBINING ANGLE FACTS"
          title="Choose the correct fact before calculating"
        />

        <div className="methodGrid">
          <article>
            <span>1</span>
            <strong>Identify the diagram</strong>
            <p>Look for a straight line, intersecting lines or a complete turn.</p>
          </article>
          <article>
            <span>2</span>
            <strong>Write an equation</strong>
            <p>Use 180°, equal opposite angles or 360° as appropriate.</p>
          </article>
          <article>
            <span>3</span>
            <strong>Solve clearly</strong>
            <p>Show the subtraction and include the degree symbol.</p>
          </article>
          <article>
            <span>4</span>
            <strong>State the reason</strong>
            <p>Name the angle fact that justifies the result.</p>
          </article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Three essential intersecting-line facts</h2>

        <div className="summaryGrid">
          <article>
            <span>180°</span>
            <p>Adjacent angles on a straight line add up to 180°.</p>
          </article>
          <article>
            <span>=</span>
            <p>Vertically opposite angles are equal.</p>
          </article>
          <article>
            <span>360°</span>
            <p>Angles at a point add up to 360°.</p>
          </article>
          <article>
            <span>∠</span>
            <p>Always include the degree symbol and state the reason.</p>
          </article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-9")}
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
        .summaryLabel,
        .factLabel,
        .workedLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #65a30d;
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
          background: #ecfccb;
          color: #4d7c0f;
          font-size: 21px;
          font-weight: 900;
        }

        .lessonLabel,
        .summaryLabel,
        .factLabel,
        .workedLabel {
          margin: 0 0 5px;
          color: #4d7c0f;
        }

        .lessonHeading h2,
        .summaryCard h2 {
          margin: 0;
          font-size: 25px;
          line-height: 1.25;
        }

        .twoColumn,
        .pointLayout {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.95fr);
          gap: 26px;
          align-items: center;
        }

        .diagram {
          width: 100%;
          border-radius: 18px;
          background: linear-gradient(135deg, #f7fee7, #f8fafc);
        }

        .mainLine {
          stroke: #172033;
          stroke-width: 6;
          stroke-linecap: round;
        }

        .arc {
          fill: none;
          stroke-width: 6;
          stroke-linecap: round;
        }

        .rose { stroke: #e11d48; }
        .blue { stroke: #4f46e5; }

        .angleText,
        .pointText {
          font-family: Arial, sans-serif;
          font-weight: 900;
        }

        .angleText { font-size: 24px; }
        .pointText { fill: #172033; font-size: 16px; }
        .roseText { fill: #be123c; }
        .blueText { fill: #4338ca; }

        .factPanel,
        .pointExplanation {
          padding: 24px;
          border-radius: 18px;
          background: #f8fafc;
        }

        .factPanel p:not(.factLabel),
        .pointExplanation p {
          margin: 16px 0;
          color: #5c667a;
          line-height: 1.6;
        }

        .largeFormula {
          color: #1e3a8a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(31px, 5vw, 46px);
          font-weight: 800;
          text-align: center;
        }

        .pointFormula {
          max-width: 100%;
          font-size: clamp(22px, 3.2vw, 34px);
          letter-spacing: -0.035em;
          white-space: nowrap;
        }

        .reasonTag {
          padding: 12px;
          border-radius: 12px;
          background: #ecfdf5;
          color: #166534;
          font-weight: 900;
          text-align: center;
        }

        .workedStrip {
          display: grid;
          grid-template-columns: auto 1fr 1fr;
          gap: 12px;
          align-items: center;
          margin-top: 20px;
          padding: 16px;
          border-radius: 15px;
          background: #fffbeb;
        }

        .workedStrip strong { color: #92400e; }

        .workedStrip span {
          padding: 11px;
          border-radius: 11px;
          background: white;
          font-size: 18px;
          font-weight: 800;
          text-align: center;
        }

        .workedExample {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 20px;
          padding: 20px;
          border-radius: 17px;
          background: #eff6ff;
        }

        .workedExample h3 { margin: 5px 0 0; }

        .calculation {
          min-width: 210px;
          padding: 15px;
          border-radius: 13px;
          background: white;
          text-align: center;
        }

        .calculation span {
          display: block;
          color: #1e3a8a;
          font-size: 26px;
          font-weight: 900;
        }

        .calculation small {
          display: block;
          margin-top: 5px;
          color: #64748b;
        }

        .warningNote {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 14px;
          padding: 14px;
          border-radius: 13px;
          background: #fff7ed;
          color: #9a3412;
          text-align: center;
        }

        .pointDiagram {
          position: relative;
          min-height: 310px;
          overflow: hidden;
          border-radius: 18px;
          background: linear-gradient(135deg, #f7fee7, #f8fafc);
        }

        .centre {
          position: absolute;
          z-index: 3;
          top: 50%;
          left: 50%;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #172033;
          color: white;
          font-weight: 900;
          transform: translate(-50%, -50%);
        }

        .ray {
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          width: 42%;
          height: 5px;
          border-radius: 999px;
          background: #172033;
          transform-origin: left center;
        }

        .rayOne { transform: rotate(-70deg); }
        .rayTwo { transform: rotate(15deg); }
        .rayThree { transform: rotate(145deg); }
        .rayFour { transform: rotate(220deg); }

        .pointAngle {
          position: absolute;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          font-size: 20px;
          font-weight: 900;
        }

        .angleA { top: 14%; left: 39%; background: #ffe4e6; color: #be123c; }
        .angleB { top: 47%; right: 16%; background: #e0e7ff; color: #4338ca; }
        .angleC { bottom: 17%; left: 39%; background: #fef3c7; color: #92400e; }
        .angleD { top: 38%; left: 18%; background: #dcfce7; color: #166534; }

        .workedCard {
          border-color: #bef264;
          background: #fcfff7;
        }

        .methodGrid,
        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .methodGrid article,
        .summaryGrid article {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 16px;
          border-radius: 15px;
          background: white;
        }

        .methodGrid article > span,
        .summaryGrid article > span {
          min-width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #ecfccb;
          color: #4d7c0f;
          font-weight: 900;
        }

        .methodGrid p,
        .summaryGrid p {
          margin: 4px 0 0;
          color: #5c667a;
          line-height: 1.45;
        }

        .summaryCard {
          border-color: #d9f99d;
          background: linear-gradient(135deg, #f7fee7, #f0fdf4);
        }

        .summaryGrid { margin-top: 20px; }

        .finishButton {
          display: block;
          margin: 26px 0 0 auto;
          padding: 14px 22px;
          border: none;
          border-radius: 14px;
          background: #65a30d;
          color: white;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
        }

        .finishButton:hover { background: #4d7c0f; }

        @media (max-width: 760px) {
          .twoColumn,
          .pointLayout,
          .methodGrid,
          .summaryGrid {
            grid-template-columns: 1fr;
          }

          .workedExample,
          .warningNote {
            align-items: flex-start;
            flex-direction: column;
          }

          .calculation { width: 100%; box-sizing: border-box; }
        }

        @media (max-width: 620px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .summaryCard { padding: 20px; }

          .workedStrip {
            grid-template-columns: 1fr;
          }

          .lessonHeading { align-items: flex-start; }
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
      <span className="lessonNumber">{number}</span>
      <div>
        <p className="lessonLabel">{label}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
