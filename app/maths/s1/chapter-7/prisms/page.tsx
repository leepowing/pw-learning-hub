"use client";

import { useRouter } from "next/navigation";

export default function PrismsPage() {
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

      <p className="eyebrow">S1 · CHAPTER 7 · SECTION 2</p>
      <h1>Volumes and Total Surface Areas of Prisms</h1>

      <p className="introduction">
        A prism has a uniform polygonal cross-section. Identify its two bases,
        lateral faces and perpendicular height before calculating volume or
        total surface area.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">WHAT IS A PRISM?</p>
            <h2>The cross-section remains the same throughout the solid</h2>
          </div>
        </div>

        <div className="diagramExplanation">
          <svg
            className="prismDiagram"
            viewBox="0 0 430 260"
            role="img"
            aria-label="A triangular prism with its two bases, lateral faces and height labelled"
          >
            <polygon
              points="70,180 135,70 200,180"
              fill="#ffe4e6"
              stroke="#be123c"
              strokeWidth="4"
            />
            <polygon
              points="210,130 275,20 340,130"
              fill="#fecdd3"
              stroke="#be123c"
              strokeWidth="4"
            />
            <polygon
              points="70,180 210,130 275,20 135,70"
              fill="#dbeafe"
              fillOpacity="0.8"
              stroke="#1d4ed8"
              strokeWidth="3"
            />
            <polygon
              points="135,70 275,20 340,130 200,180"
              fill="#e0e7ff"
              fillOpacity="0.75"
              stroke="#1d4ed8"
              strokeWidth="3"
            />
            <polygon
              points="70,180 210,130 340,130 200,180"
              fill="#bfdbfe"
              fillOpacity="0.75"
              stroke="#1d4ed8"
              strokeWidth="3"
            />
            <line
              x1="70"
              y1="215"
              x2="210"
              y2="165"
              stroke="#172033"
              strokeWidth="2"
            />
            <text x="112" y="242" className="svgText">prism height, h</text>
            <text x="34" y="126" className="svgText">base</text>
            <text x="330" y="72" className="svgText">base</text>
            <text x="190" y="78" className="svgText">lateral face</text>
          </svg>

          <div className="conceptStack">
            <article>
              <strong>Bases</strong>
              <p>Two congruent, parallel polygonal faces at opposite ends.</p>
            </article>
            <article>
              <strong>Lateral faces</strong>
              <p>The faces joining corresponding sides of the two bases.</p>
            </article>
            <article>
              <strong>Prism height</strong>
              <p>The perpendicular distance between the two parallel bases.</p>
            </article>
          </div>
        </div>

        <div className="keyNote">
          <strong>A prism is named after the shape of its base.</strong>
          <span>Examples include triangular, rectangular, pentagonal and hexagonal prisms.</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">RIGHT AND OBLIQUE PRISMS</p>
            <h2>Use the perpendicular distance between the bases</h2>
          </div>
        </div>

        <div className="prismTypeGrid">
          <article>
            <svg
              className="prismTypeDiagram"
              viewBox="0 0 360 220"
              role="img"
              aria-label="A right prism with congruent parallel bases and perpendicular lateral edges"
            >
              <polygon
                points="50,80 95,55 95,145 50,170"
                fill="#ffe4e6"
                stroke="#be123c"
                strokeWidth="4"
              />
              <polygon
                points="240,80 285,55 285,145 240,170"
                fill="#fecdd3"
                stroke="#be123c"
                strokeWidth="4"
              />
              <polygon
                points="50,80 95,55 285,55 240,80"
                fill="#dbeafe"
                fillOpacity="0.85"
                stroke="#1d4ed8"
                strokeWidth="3"
              />
              <polygon
                points="50,170 95,145 285,145 240,170"
                fill="#bfdbfe"
                fillOpacity="0.75"
                stroke="#1d4ed8"
                strokeWidth="3"
              />
              <line x1="50" y1="80" x2="240" y2="80" stroke="#1d4ed8" strokeWidth="3" />
              <line x1="50" y1="170" x2="240" y2="170" stroke="#1d4ed8" strokeWidth="3" />
              <line
                x1="95"
                y1="112"
                x2="240"
                y2="112"
                stroke="#4f46e5"
                strokeWidth="4"
                strokeDasharray="9 6"
              />
              <path d="M95 112 H111 V128" fill="none" stroke="#4f46e5" strokeWidth="3" />
              <text x="56" y="200" className="svgText">base</text>
              <text x="254" y="200" className="svgText">base</text>
              <text x="158" y="103" className="svgText">h</text>
              <text x="121" y="42" className="svgText">perpendicular lateral edge</text>
            </svg>
            <h3>Right prism</h3>
            <p>
              The congruent bases are parallel, and the lateral edges meet
              the base planes at 90°.
            </p>
            <strong>The lateral edge length equals the perpendicular height h.</strong>
          </article>
          <article>
            <svg
              className="prismTypeDiagram"
              viewBox="0 0 360 220"
              role="img"
              aria-label="An oblique prism with sloping lateral edges and a separate perpendicular height"
            >
              <polygon
                points="50,80 95,55 95,145 50,170"
                fill="#ffe4e6"
                stroke="#be123c"
                strokeWidth="4"
              />
              <polygon
                points="240,45 285,20 285,110 240,135"
                fill="#fecdd3"
                stroke="#be123c"
                strokeWidth="4"
              />
              <polygon
                points="50,80 95,55 285,20 240,45"
                fill="#dbeafe"
                fillOpacity="0.85"
                stroke="#1d4ed8"
                strokeWidth="3"
              />
              <polygon
                points="50,170 95,145 285,110 240,135"
                fill="#bfdbfe"
                fillOpacity="0.75"
                stroke="#1d4ed8"
                strokeWidth="3"
              />
              <line x1="50" y1="80" x2="240" y2="45" stroke="#1d4ed8" strokeWidth="3" />
              <line x1="50" y1="170" x2="240" y2="135" stroke="#1d4ed8" strokeWidth="3" />
              <line
                x1="95"
                y1="112"
                x2="240"
                y2="112"
                stroke="#4f46e5"
                strokeWidth="4"
                strokeDasharray="9 6"
              />
              <path d="M95 112 H111 V128" fill="none" stroke="#4f46e5" strokeWidth="3" />
              <text x="56" y="200" className="svgText">base</text>
              <text x="254" y="158" className="svgText">base</text>
              <text x="158" y="103" className="svgText">h</text>
              <text x="126" y="35" className="svgText">sloping lateral edge</text>
            </svg>
            <h3>Oblique prism</h3>
            <p>
              The congruent bases remain parallel, but the lateral edges meet
              them at an angle other than 90°.
            </p>
            <strong>The dashed perpendicular height h is shorter than the sloping edge.</strong>
          </article>
        </div>

        <div className="warningNote">
          <strong>Height always means perpendicular distance.</strong>
          <span>A sloping lateral edge of an oblique prism is not its height.</span>
        </div>
      </section>

      <section className="lessonCard volumeCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">VOLUME OF A PRISM</p>
            <h2>Multiply the base area by the prism height</h2>
          </div>
        </div>

        <div className="formulaBanner">
          <span>Volume of a prism</span>
          <strong>V = Bh</strong>
          <p>B = area of one base · h = perpendicular height of the prism</p>
        </div>

        <div className="workedQuestion">
          A triangular prism has a triangular base with base 6 cm and
          perpendicular height 4 cm. The prism is 10 cm long. Find its volume.
        </div>

        <div className="workedSteps">
          <article>
            <span>1</span>
            <p>Find the triangular base area.</p>
            <strong>B = ½(6)(4) = 12 cm²</strong>
          </article>
          <article>
            <span>2</span>
            <p>Identify the prism height.</p>
            <strong>h = 10 cm</strong>
          </article>
          <article>
            <span>3</span>
            <p>Multiply the base area by the height.</p>
            <strong>V = 12 × 10 = 120 cm³</strong>
          </article>
        </div>

        <div className="workedAnswer">Volume = 120 cm³</div>
      </section>

      <section className="lessonCard surfaceCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">TOTAL SURFACE AREA</p>
            <h2>Add the areas of every external face once</h2>
          </div>
        </div>

        <div className="surfaceFormulaGrid">
          <article>
            <p>Any prism</p>
            <strong>TSA = 2B + L</strong>
            <span>L is the total area of all lateral faces.</span>
          </article>
          <article>
            <p>Right prism</p>
            <strong>L = Ph</strong>
            <span>P is the perimeter of the base.</span>
          </article>
          <article>
            <p>Combined formula</p>
            <strong>TSA = 2B + Ph</strong>
            <span>This shortcut applies to a right prism.</span>
          </article>
        </div>

        <div className="keyNote">
          <strong>Why does P × h give the lateral area?</strong>
          <span>
            Each side of the base forms one rectangular lateral face. Adding
            their widths gives the base perimeter P.
          </span>
        </div>
      </section>

      <section className="lessonCard workedSurfaceCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">WORKED EXAMPLE</p>
            <h2>Find both the volume and total surface area</h2>
          </div>
        </div>

        <div className="exampleOverview">
          <div>
            <p>Base area</p>
            <strong>B = 36 cm²</strong>
          </div>
          <div>
            <p>Base perimeter</p>
            <strong>P = 28 cm</strong>
          </div>
          <div>
            <p>Prism height</p>
            <strong>h = 15 cm</strong>
          </div>
        </div>

        <div className="calculationColumns">
          <article>
            <p>VOLUME</p>
            <span>V = Bh</span>
            <span>V = 36 × 15</span>
            <strong>V = 540 cm³</strong>
          </article>
          <article>
            <p>TOTAL SURFACE AREA</p>
            <span>TSA = 2B + Ph</span>
            <span>TSA = 2(36) + 28(15)</span>
            <strong>TSA = 492 cm²</strong>
          </article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">6</span>
          <div>
            <p className="lessonLabel">NETS AND FACE COUNTING</p>
            <h2>A net displays every surface of a prism</h2>
          </div>
        </div>

        <div className="netGrid">
          <article>
            <span className="faceCount">2</span>
            <h3>Base faces</h3>
            <p>Congruent copies of the base polygon.</p>
          </article>
          <article>
            <span className="faceCount">n</span>
            <h3>Lateral faces</h3>
            <p>An n-sided base produces n lateral faces.</p>
          </article>
          <article>
            <span className="faceCount">n + 2</span>
            <h3>Total faces</h3>
            <p>An n-sided prism has n + 2 faces altogether.</p>
          </article>
        </div>

        <div className="methodStrip">
          <span>Identify the two bases</span>
          <span>List every lateral face</span>
          <span>Calculate each required area</span>
          <span>Add each face once</span>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">7</span>
          <div>
            <p className="lessonLabel">UNITS AND CONVERSIONS</p>
            <h2>Surface area is square; volume is cubic</h2>
          </div>
        </div>

        <div className="unitGrid">
          <article><strong>Surface area</strong><span>mm², cm², m²</span></article>
          <article><strong>Volume</strong><span>mm³, cm³, m³</span></article>
          <article><strong>Capacity link</strong><span>1 L = 1,000 cm³</span></article>
        </div>

        <div className="conversionGrid">
          <span>1 cm³ = 1,000 mm³</span>
          <span>1 m³ = 1,000,000 cm³</span>
        </div>

        <div className="warningNote">
          <strong>Convert all lengths to the same unit before calculating.</strong>
          <span>The length scale factor must be squared for area and cubed for volume.</span>
        </div>
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Separate base measurements from prism measurements</h2>
        <ul>
          <li>Using the perimeter of the base instead of its area in the volume formula.</li>
          <li>Using a sloping edge as the height of an oblique prism.</li>
          <li>Including only one base in the total surface area.</li>
          <li>Missing or counting a lateral face twice.</li>
          <li>Using P × h for an oblique prism without finding the actual lateral faces.</li>
          <li>Writing square units for volume or cubic units for surface area.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Identify the base, then build the calculation</h2>
        <div className="summaryGrid">
          <article><strong>Prism</strong><span>uniform polygonal cross-section</span></article>
          <article><strong>Volume</strong><span>V = Bh</span></article>
          <article><strong>Lateral area</strong><span>L = Ph for a right prism</span></article>
          <article><strong>Total area</strong><span>TSA = 2B + L</span></article>
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
          max-width: 920px;
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
        .summaryLabel { margin: 0 0 5px; color: #e11d48; }
        .lessonHeading h2,
        .mistakesCard h2,
        .summaryCard h2 { margin: 0; font-size: 27px; line-height: 1.25; }

        .diagramExplanation {
          display: grid;
          grid-template-columns: minmax(330px, 1.1fr) minmax(0, 0.9fr);
          gap: 24px;
          align-items: center;
        }

        .prismDiagram {
          width: 100%;
          min-height: 260px;
          border-radius: 18px;
          background: #f8fafc;
        }

        .svgText {
          fill: #172033;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
        }

        .conceptStack { display: grid; gap: 11px; }
        .conceptStack article {
          padding: 16px;
          border-radius: 15px;
          background: #f1f5f9;
        }
        .conceptStack strong { color: #be123c; }
        .conceptStack p { margin: 5px 0 0; color: #64748b; line-height: 1.5; }

        .keyNote,
        .warningNote {
          display: grid;
          gap: 4px;
          margin-top: 16px;
          padding: 16px 18px;
          border-radius: 15px;
          line-height: 1.55;
        }

        .keyNote { background: #eff6ff; color: #1e40af; }
        .warningNote { background: #fffbeb; color: #854d0e; }

        .prismTypeGrid,
        .surfaceFormulaGrid,
        .netGrid,
        .unitGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .prismTypeGrid article {
          padding: 22px;
          border-radius: 18px;
          background: #f8fafc;
        }

        .prismTypeDiagram {
          width: 100%;
          min-height: 220px;
          margin-bottom: 18px;
          border-radius: 16px;
          background: white;
        }
        .prismTypeGrid h3 { margin: 0 0 6px; }
        .prismTypeGrid p { color: #64748b; line-height: 1.55; }
        .prismTypeGrid strong { color: #4f46e5; }

        .volumeCard { background: linear-gradient(135deg, #eff6ff, #eef2ff); }
        .surfaceCard { background: linear-gradient(135deg, #fff1f2, #fff7ed); }
        .workedSurfaceCard { background: linear-gradient(135deg, #f0fdf4, #f7fee7); }

        .formulaBanner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 5px 18px;
          padding: 21px;
          border-radius: 17px;
          background: white;
        }
        .formulaBanner span { color: #475569; font-weight: 800; }
        .formulaBanner strong { grid-row: 1 / 3; grid-column: 2; color: #1d4ed8; font-size: 34px; }
        .formulaBanner p { margin: 0; color: #64748b; }

        .workedQuestion {
          margin-top: 15px;
          padding: 18px;
          border-radius: 15px;
          background: white;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.55;
        }

        .workedSteps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }
        .workedSteps article { padding: 17px; border-radius: 15px; background: white; }
        .workedSteps span {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: #bfdbfe;
          color: #1e40af;
          font-weight: 900;
        }
        .workedSteps p { min-height: 46px; margin: 10px 0 6px; color: #64748b; }
        .workedSteps strong { color: #172033; font-size: 18px; }
        .workedAnswer {
          margin-top: 14px;
          padding: 16px;
          border-radius: 14px;
          background: #1d4ed8;
          color: white;
          font-size: 20px;
          font-weight: 900;
          text-align: center;
        }

        .surfaceFormulaGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .surfaceFormulaGrid article {
          display: grid;
          gap: 7px;
          padding: 19px;
          border-radius: 16px;
          background: white;
        }
        .surfaceFormulaGrid p { margin: 0; color: #64748b; font-weight: 800; }
        .surfaceFormulaGrid strong { color: #be123c; font-size: 23px; }
        .surfaceFormulaGrid span { color: #64748b; line-height: 1.45; }

        .exampleOverview,
        .calculationColumns {
          display: grid;
          gap: 13px;
        }
        .exampleOverview { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .exampleOverview div {
          padding: 17px;
          border-radius: 15px;
          background: white;
          text-align: center;
        }
        .exampleOverview p { margin: 0 0 6px; color: #64748b; }
        .exampleOverview strong { color: #166534; font-size: 20px; }
        .calculationColumns { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 14px; }
        .calculationColumns article {
          display: grid;
          gap: 8px;
          padding: 21px;
          border-radius: 17px;
          background: white;
        }
        .calculationColumns p { margin: 0; color: #15803d; font-size: 13px; font-weight: 900; letter-spacing: 0.08em; }
        .calculationColumns span { color: #475569; font-size: 18px; }
        .calculationColumns strong { color: #166534; font-size: 23px; }

        .netGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .netGrid article { padding: 20px; border-radius: 17px; background: #f8fafc; text-align: center; }
        .faceCount {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          margin: 0 auto 13px;
          border-radius: 15px;
          background: #ede9fe;
          color: #6d28d9;
          font-size: 22px;
          font-weight: 900;
        }
        .netGrid h3 { margin: 0 0 7px; }
        .netGrid p { margin: 0; color: #64748b; line-height: 1.5; }
        .methodStrip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          margin-top: 16px;
        }
        .methodStrip span {
          display: grid;
          place-items: center;
          min-height: 56px;
          padding: 10px;
          border-radius: 13px;
          background: #f5f3ff;
          color: #5b21b6;
          font-weight: 800;
          text-align: center;
        }

        .unitGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .unitGrid article {
          display: grid;
          gap: 5px;
          padding: 20px;
          border-radius: 16px;
          background: #eff6ff;
          text-align: center;
        }
        .unitGrid strong { color: #1d4ed8; }
        .unitGrid span { color: #475569; font-size: 18px; font-weight: 800; }
        .conversionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px;
          margin-top: 13px;
        }
        .conversionGrid span {
          padding: 14px;
          border-radius: 13px;
          background: #f1f5f9;
          color: #334155;
          font-weight: 900;
          text-align: center;
        }

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
          .diagramExplanation { grid-template-columns: 1fr; }
          .workedSteps,
          .surfaceFormulaGrid,
          .exampleOverview,
          .netGrid,
          .methodStrip,
          .summaryGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 680px) {
          .page { width: calc(100% - 24px); margin-top: 28px; }
          .lessonCard,
          .mistakesCard,
          .summaryCard { padding: 21px; }
          .prismTypeGrid,
          .workedSteps,
          .surfaceFormulaGrid,
          .exampleOverview,
          .calculationColumns,
          .netGrid,
          .methodStrip,
          .unitGrid,
          .conversionGrid,
          .summaryGrid { grid-template-columns: 1fr; }
          .formulaBanner { grid-template-columns: 1fr; }
          .formulaBanner strong { grid-row: auto; grid-column: auto; }
          .returnButton { width: 100%; }
        }
      `}</style>
    </main>
  );
}
