"use client";

import { useRouter } from "next/navigation";

export default function AreasOfPolygonsPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-7")}
      >
        ← Back to Chapter 7
      </button>

      <p className="eyebrow">S1 · CHAPTER 7 · SECTION 1</p>
      <h1>Review on Areas of Polygons</h1>

      <p className="introduction">
        Recall the area formulae for familiar polygons, identify the correct
        perpendicular height and calculate compound areas by splitting a
        figure or filling it to form a larger simple shape.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">AREA FORMULAE</p>
            <h2>Match every polygon with its perpendicular dimensions</h2>
          </div>
        </div>

        <div className="formulaGrid">
          <article>
            <div className="shape rectangleShape" aria-hidden="true" />
            <h3>Rectangle</h3>
            <strong>A = lw</strong>
            <p>length × width</p>
          </article>
          <article>
            <div className="shape parallelogramShape" aria-hidden="true" />
            <h3>Parallelogram</h3>
            <strong>A = bh</strong>
            <p>base × perpendicular height</p>
          </article>
          <article>
            <div className="shape triangleShape" aria-hidden="true" />
            <h3>Triangle</h3>
            <strong>A = ½bh</strong>
            <p>half × base × perpendicular height</p>
          </article>
          <article>
            <div className="shape trapeziumShape" aria-hidden="true" />
            <h3>Trapezium</h3>
            <strong>A = ½(a + b)h</strong>
            <p>half × sum of parallel sides × height</p>
          </article>
        </div>

        <div className="keyNote">
          <strong>Area measures the region inside a closed figure.</strong>
          <span>The answer must be written in square units such as cm² or m².</span>
        </div>
      </section>

      <section className="lessonCard heightCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">PERPENDICULAR HEIGHT</p>
            <h2>The height must meet the chosen base at 90°</h2>
          </div>
        </div>

        <div className="diagramExplanation">
          <svg
            className="heightDiagram"
            viewBox="0 0 360 220"
            role="img"
            aria-label="A parallelogram with a perpendicular height drawn to its base"
          >
            <polygon
              points="75,165 265,165 315,55 125,55"
              fill="#ffe4e6"
              stroke="#be123c"
              strokeWidth="4"
            />
            <line
              x1="125"
              y1="55"
              x2="125"
              y2="165"
              stroke="#4f46e5"
              strokeWidth="4"
              strokeDasharray="9 7"
            />
            <path
              d="M125 145 H145 V165"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="3"
            />
            <line
              x1="75"
              y1="186"
              x2="265"
              y2="186"
              stroke="#172033"
              strokeWidth="2"
            />
            <text x="164" y="208" className="svgText">base, b</text>
            <text x="88" y="112" className="svgText">height, h</text>
          </svg>

          <div className="explanationStack">
            <article>
              <strong>Choose a base</strong>
              <p>Any side may be used as the base if the matching height is known.</p>
            </article>
            <article>
              <strong>Locate the perpendicular distance</strong>
              <p>The sloping side is not the height unless it is perpendicular to the base.</p>
            </article>
            <article>
              <strong>Check the right-angle mark</strong>
              <p>A 90° mark confirms that the correct height has been identified.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">SPLITTING METHOD</p>
            <h2>Divide a compound polygon into simple figures</h2>
          </div>
        </div>

        <div className="workedLayout">
          <svg
            className="compoundDiagram"
            viewBox="0 0 300 220"
            role="img"
            aria-label="An L-shaped polygon split into two rectangles"
          >
            <polygon
              points="35,25 155,25 155,85 235,85 235,165 35,165"
              fill="#dbeafe"
              stroke="#1d4ed8"
              strokeWidth="4"
            />
            <line
              x1="155"
              y1="85"
              x2="155"
              y2="165"
              stroke="#e11d48"
              strokeWidth="3"
              strokeDasharray="8 6"
            />
            <text x="88" y="18" className="svgText">6 cm</text>
            <text x="178" y="78" className="svgText">4 cm</text>
            <text x="242" y="130" className="svgText">4 cm</text>
            <text x="7" y="100" className="svgText">7 cm</text>
            <text x="119" y="194" className="svgText">10 cm</text>
            <text x="165" y="55" className="svgText">3 cm</text>
          </svg>

          <div className="workedSteps verticalSteps">
            <article>
              <span>1</span>
              <p>Split the L-shape into two rectangles.</p>
              <strong>6 × 7 and 4 × 4</strong>
            </article>
            <article>
              <span>2</span>
              <p>Calculate the two component areas.</p>
              <strong>42 cm² and 16 cm²</strong>
            </article>
            <article>
              <span>3</span>
              <p>Add the component areas.</p>
              <strong>42 + 16 = 58 cm²</strong>
            </article>
          </div>
        </div>

        <div className="workedAnswer">Area of the compound polygon = 58 cm²</div>
      </section>

      <section className="lessonCard workedCard fillingCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">FILLING METHOD</p>
            <h2>Complete a larger figure and subtract the added part</h2>
          </div>
        </div>

        <div className="workedLayout">
          <svg
            className="compoundDiagram"
            viewBox="0 0 300 220"
            role="img"
            aria-label="An L-shaped polygon filled to form a large rectangle"
          >
            <rect
              x="35"
              y="25"
              width="200"
              height="140"
              fill="#dcfce7"
              stroke="#15803d"
              strokeWidth="4"
            />
            <rect
              x="155"
              y="25"
              width="80"
              height="60"
              fill="#fff1f2"
              stroke="#e11d48"
              strokeWidth="3"
              strokeDasharray="8 6"
            />
            <text x="119" y="194" className="svgText">10 cm</text>
            <text x="7" y="100" className="svgText">7 cm</text>
            <text x="176" y="18" className="svgText">4 cm</text>
            <text x="242" y="58" className="svgText">3 cm</text>
            <text x="164" y="58" className="svgText">extra</text>
          </svg>

          <div className="workedSteps verticalSteps">
            <article>
              <span>1</span>
              <p>Fill the gap to form a 10 cm by 7 cm rectangle.</p>
              <strong>10 × 7 = 70 cm²</strong>
            </article>
            <article>
              <span>2</span>
              <p>Find the area of the added 4 cm by 3 cm rectangle.</p>
              <strong>4 × 3 = 12 cm²</strong>
            </article>
            <article>
              <span>3</span>
              <p>Subtract the added area from the larger rectangle.</p>
              <strong>70 − 12 = 58 cm²</strong>
            </article>
          </div>
        </div>

        <div className="workedAnswer">Both methods give the same area: 58 cm²</div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">CHOOSING A METHOD</p>
            <h2>Use the method that creates fewer simple parts</h2>
          </div>
        </div>

        <div className="methodGrid">
          <article>
            <span className="methodIcon">＋</span>
            <h3>Split and add</h3>
            <p>Useful when clear lines divide the polygon into only a few familiar figures.</p>
          </article>
          <article>
            <span className="methodIcon">−</span>
            <h3>Fill and subtract</h3>
            <p>Useful when filling a gap produces one simple larger rectangle or triangle.</p>
          </article>
          <article>
            <span className="methodIcon">↔</span>
            <h3>Find missing lengths</h3>
            <p>Use equal total widths or heights before applying an area formula.</p>
          </article>
        </div>

        <div className="methodChecklist">
          <span>Sketch the split or filled region</span>
          <span>Label every required dimension</span>
          <span>Show each component calculation</span>
          <span>Finish with a square unit</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">6</span>
          <div>
            <p className="lessonLabel">AREA UNITS</p>
            <h2>Convert lengths before calculating area</h2>
          </div>
        </div>

        <div className="unitGrid">
          <article><strong>1 cm²</strong><span>= 100 mm²</span></article>
          <article><strong>1 m²</strong><span>= 10,000 cm²</span></article>
          <article><strong>1 hectare</strong><span>= 10,000 m²</span></article>
        </div>

        <div className="warningNote">
          <strong>Do not convert area units using the length scale factor only.</strong>
          <span>Since 1 m = 100 cm, 1 m² = 100² cm² = 10,000 cm².</span>
        </div>
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Keep dimensions, operations and units consistent</h2>
        <ul>
          <li>Using a sloping side instead of the perpendicular height.</li>
          <li>Forgetting the factor ½ in the triangle or trapezium formula.</li>
          <li>Adding an unshaded region instead of subtracting it.</li>
          <li>Counting an overlapping region twice after splitting.</li>
          <li>Mixing centimetres and metres in one calculation.</li>
          <li>Writing a linear unit instead of a square unit.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Recognise, decompose, calculate and check</h2>
        <div className="summaryGrid">
          <article><strong>Recognise</strong><span>the simple polygons</span></article>
          <article><strong>Height</strong><span>must be perpendicular</span></article>
          <article><strong>Split</strong><span>then add the areas</span></article>
          <article><strong>Fill</strong><span>then subtract the extra area</span></article>
        </div>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s1/chapter-7")}
        >
          ← Return to Chapter 7
        </button>
      </div>

      <style jsx>{`
        .page {
          max-width: 1040px;
          width: calc(100% - 48px);
          margin: 44px auto 72px;
          box-sizing: border-box;
          color: #172033;
        }

        .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: none;
          background: transparent;
          color: #be123c;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .eyebrow,
        .lessonLabel,
        .mistakesLabel,
        .summaryLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow { margin: 0 0 7px; color: #e11d48; }

        h1 {
          margin: 0;
          font-size: clamp(36px, 5vw, 54px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .introduction {
          max-width: 860px;
          margin: 18px 0 32px;
          color: #5c667a;
          font-size: 19px;
          line-height: 1.65;
        }

        .lessonCard,
        .mistakesCard,
        .summaryCard {
          margin-top: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 25px;
          background: white;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.055);
        }

        .lessonHeading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .lessonNumber {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background: #ffe4e6;
          color: #9f1239;
          font-size: 22px;
          font-weight: 900;
        }

        .lessonLabel,
        .summaryLabel {
          margin: 0 0 5px;
          color: #e11d48;
        }

        .lessonHeading h2,
        .mistakesCard h2,
        .summaryCard h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.25;
        }

        .formulaGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 13px;
        }

        .formulaGrid article {
          padding: 20px;
          border-radius: 18px;
          background: #fff1f2;
          text-align: center;
        }

        .shape {
          height: 66px;
          margin: 0 auto 14px;
          background: #fecdd3;
          border: 3px solid #be123c;
        }

        .rectangleShape { width: 94px; }
        .parallelogramShape { width: 92px; transform: skew(-18deg); }
        .triangleShape {
          width: 0;
          height: 0;
          border: none;
          border-right: 49px solid transparent;
          border-bottom: 70px solid #be123c;
          border-left: 49px solid transparent;
          background: transparent;
        }
        .trapeziumShape {
          width: 96px;
          clip-path: polygon(23% 0, 77% 0, 100% 100%, 0 100%);
        }

        .formulaGrid h3 { margin: 0 0 8px; }
        .formulaGrid strong { color: #9f1239; font-size: 21px; }
        .formulaGrid p { margin: 8px 0 0; color: #64748b; line-height: 1.45; }

        .keyNote,
        .warningNote {
          display: grid;
          gap: 4px;
          margin-top: 16px;
          padding: 16px 18px;
          border-radius: 15px;
          line-height: 1.55;
        }

        .keyNote { background: #f0fdf4; color: #166534; }
        .warningNote { background: #fffbeb; color: #854d0e; }

        .heightCard { background: linear-gradient(135deg, #f8fafc, #eff6ff); }
        .diagramExplanation,
        .workedLayout {
          display: grid;
          grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
          gap: 24px;
          align-items: center;
        }

        .heightDiagram,
        .compoundDiagram {
          width: 100%;
          min-height: 220px;
          border-radius: 18px;
          background: white;
        }

        .svgText {
          fill: #172033;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
        }

        .explanationStack,
        .verticalSteps {
          display: grid;
          gap: 11px;
        }

        .explanationStack article {
          padding: 16px;
          border-radius: 15px;
          background: white;
        }

        .explanationStack strong { color: #1d4ed8; }
        .explanationStack p { margin: 6px 0 0; color: #64748b; line-height: 1.5; }

        .workedCard { background: linear-gradient(135deg, #fff1f2, #fff7ed); }
        .fillingCard { background: linear-gradient(135deg, #f0fdf4, #f7fee7); }
        .workedSteps article {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 3px 12px;
          padding: 15px;
          border-radius: 15px;
          background: white;
        }

        .workedSteps span {
          grid-row: 1 / 3;
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #fecdd3;
          color: #9f1239;
          font-weight: 900;
        }

        .workedSteps p { margin: 0; color: #64748b; }
        .workedSteps strong { color: #172033; font-size: 18px; }
        .workedAnswer {
          margin-top: 16px;
          padding: 16px;
          border-radius: 14px;
          background: #9f1239;
          color: white;
          font-size: 20px;
          font-weight: 900;
          text-align: center;
        }

        .fillingCard .workedAnswer { background: #166534; }

        .methodGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .methodGrid article {
          padding: 20px;
          border-radius: 18px;
          background: #f8fafc;
        }

        .methodIcon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #ede9fe;
          color: #6d28d9;
          font-size: 25px;
          font-weight: 900;
        }

        .methodGrid h3 { margin: 13px 0 6px; }
        .methodGrid p { margin: 0; color: #64748b; line-height: 1.55; }
        .methodChecklist {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          margin-top: 16px;
        }

        .methodChecklist span {
          display: grid;
          place-items: center;
          min-height: 58px;
          padding: 11px;
          border-radius: 13px;
          background: #f5f3ff;
          color: #5b21b6;
          font-weight: 800;
          text-align: center;
        }

        .unitGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
        }

        .unitGrid article {
          display: grid;
          gap: 5px;
          padding: 20px;
          border-radius: 16px;
          background: #eff6ff;
          text-align: center;
        }

        .unitGrid strong { color: #1d4ed8; font-size: 22px; }
        .unitGrid span { color: #475569; font-weight: 800; }

        .mistakesCard { border-color: #fed7aa; background: #fffaf5; }
        .mistakesLabel { margin: 0 0 5px; color: #c2410c; }
        .mistakesCard ul { margin: 17px 0 0; padding-left: 22px; color: #475569; line-height: 1.8; }

        .summaryCard { border-color: #fecdd3; background: #fff7f8; }
        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .summaryGrid article { padding: 16px; border-radius: 15px; background: white; }
        .summaryGrid strong,
        .summaryGrid span { display: block; }
        .summaryGrid strong { color: #be123c; }
        .summaryGrid span { margin-top: 5px; color: #64748b; font-size: 14px; }

        .bottomNavigation { display: flex; justify-content: flex-start; margin-top: 24px; }
        .returnButton {
          padding: 14px 19px;
          border: none;
          border-radius: 14px;
          background: #e11d48;
          color: white;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
        }
        .returnButton:hover { background: #be123c; }

        @media (max-width: 850px) {
          .formulaGrid,
          .methodChecklist { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .diagramExplanation,
          .workedLayout { grid-template-columns: 1fr; }
        }

        @media (max-width: 680px) {
          .page { width: calc(100% - 24px); margin-top: 28px; }
          .lessonCard,
          .mistakesCard,
          .summaryCard { padding: 21px; }
          .formulaGrid,
          .methodGrid,
          .methodChecklist,
          .unitGrid,
          .summaryGrid { grid-template-columns: 1fr; }
          .returnButton { width: 100%; }
        }
      `}</style>
    </main>
  );
}
