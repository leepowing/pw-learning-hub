"use client";

import { useRouter } from "next/navigation";

export default function AreasOfPolygonsOnCoordinatesPage() {
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

      <p className="eyebrow">S1 · CHAPTER 8 · SECTION 3</p>
      <h1>Areas of Polygons</h1>

      <p className="introduction">
        Read horizontal and vertical lengths from coordinate differences, then
        use familiar area formulae to calculate the areas of polygons on a
        rectangular coordinate plane.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">LENGTHS FROM COORDINATES</p>
            <h2>Find the dimensions before finding the area</h2>
          </div>
        </div>

        <div className="lengthRuleGrid">
          <article>
            <span className="ruleIcon">↔</span>
            <div>
              <h3>Horizontal segment</h3>
              <strong>length = |x₂ − x₁|</strong>
              <p>The endpoints have the same y-coordinate.</p>
            </div>
          </article>
          <article>
            <span className="ruleIcon">↕</span>
            <div>
              <h3>Vertical segment</h3>
              <strong>length = |y₂ − y₁|</strong>
              <p>The endpoints have the same x-coordinate.</p>
            </div>
          </article>
        </div>

        <div className="formulaStrip">
          <span>Rectangle: A = lw</span>
          <span>Triangle: A = ½bh</span>
          <span>Parallelogram: A = bh</span>
          <span>Trapezium: A = ½(a + b)h</span>
        </div>

        <div className="keyNote">
          <strong>Use perpendicular dimensions.</strong>
          <span>Coordinate differences give exact horizontal and vertical lengths.</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">RECTANGLE</p>
            <h2>Use coordinate differences for the length and width</h2>
          </div>
        </div>

        <div className="workedLayout">
          <svg
            className="coordinateDiagram"
            viewBox="0 0 470 360"
            role="img"
            aria-label="Rectangle ABCD on a coordinate plane"
          >
            <defs>
              <pattern id="rectangle-area-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#dbeafe" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="50" y="18" width="364" height="308" rx="14" fill="url(#rectangle-area-grid)" />
            <line x1="50" y1="186" x2="414" y2="186" stroke="#172033" strokeWidth="3" />
            <line x1="218" y1="326" x2="218" y2="18" stroke="#172033" strokeWidth="3" />
            <polygon points="106,102 302,102 302,242 106,242" fill="#bfdbfe" fillOpacity="0.8" stroke="#1d4ed8" strokeWidth="5" />
            <text x="49" y="88" className="pointText">A(−4, 3)</text>
            <text x="280" y="88" className="pointText">B(3, 3)</text>
            <text x="311" y="251" className="pointText">C(3, −2)</text>
            <text x="45" y="266" className="pointText">D(−4, −2)</text>
            <text x="179" y="91" className="measureText">7 units</text>
            <text x="311" y="177" className="measureText">5 units</text>
            <text x="225" y="203" className="axisText">O</text>
          </svg>

          <div className="workedSteps">
            <article>
              <span>1</span>
              <div>
                <p>Find the horizontal length.</p>
                <strong>AB = |3 − (−4)| = 7 units</strong>
              </div>
            </article>
            <article>
              <span>2</span>
              <div>
                <p>Find the vertical width.</p>
                <strong>BC = |3 − (−2)| = 5 units</strong>
              </div>
            </article>
            <article>
              <span>3</span>
              <div>
                <p>Apply the rectangle area formula.</p>
                <strong>A = 7 × 5 = 35 square units</strong>
              </div>
            </article>
          </div>
        </div>

        <div className="workedAnswer">Area of rectangle ABCD = 35 square units</div>
      </section>

      <section className="lessonCard workedCard triangleCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">TRIANGLE</p>
            <h2>Choose a base and its perpendicular height</h2>
          </div>
        </div>

        <div className="workedLayout">
          <svg
            className="coordinateDiagram"
            viewBox="0 0 470 370"
            role="img"
            aria-label="Triangle PQR with a horizontal base on a coordinate plane"
          >
            <defs>
              <pattern id="triangle-area-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#e0e7ff" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="50" y="20" width="364" height="308" rx="14" fill="url(#triangle-area-grid)" />
            <line x1="50" y1="188" x2="414" y2="188" stroke="#172033" strokeWidth="3" />
            <line x1="218" y1="328" x2="218" y2="20" stroke="#172033" strokeWidth="3" />
            <polygon points="134,244 358,244 246,76" fill="#ddd6fe" fillOpacity="0.85" stroke="#6d28d9" strokeWidth="5" />
            <line x1="246" y1="76" x2="246" y2="244" stroke="#e11d48" strokeWidth="4" strokeDasharray="8 6" />
            <path d="M246 224H266V244" fill="none" stroke="#e11d48" strokeWidth="3" />
            <text x="74" y="267" className="pointText">P(−3, −2)</text>
            <text x="365" y="267" className="pointText">Q(5, −2)</text>
            <text x="254" y="66" className="pointText">R(1, 4)</text>
            <text x="220" y="269" className="measureText">8 units</text>
            <text x="255" y="164" className="measureText">6 units</text>
            <text x="225" y="205" className="axisText">O</text>
          </svg>

          <div className="workedSteps">
            <article>
              <span>1</span>
              <div>
                <p>Use PQ as the horizontal base.</p>
                <strong>PQ = |5 − (−3)| = 8 units</strong>
              </div>
            </article>
            <article>
              <span>2</span>
              <div>
                <p>Find the vertical distance from R to y = −2.</p>
                <strong>h = |4 − (−2)| = 6 units</strong>
              </div>
            </article>
            <article>
              <span>3</span>
              <div>
                <p>Apply the triangle area formula.</p>
                <strong>A = ½ × 8 × 6 = 24 square units</strong>
              </div>
            </article>
          </div>
        </div>

        <div className="workedAnswer purpleAnswer">Area of triangle PQR = 24 square units</div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">SPLITTING METHOD</p>
            <h2>Divide a compound polygon into simple figures</h2>
          </div>
        </div>

        <div className="methodLayout">
          <svg
            className="methodDiagram"
            viewBox="0 0 470 380"
            role="img"
            aria-label="An L-shaped polygon split into two rectangles on a coordinate plane"
          >
            <defs>
              <pattern id="split-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#dbeafe" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="50" y="20" width="364" height="336" rx="14" fill="url(#split-grid)" />
            <line x1="50" y1="188" x2="414" y2="188" stroke="#172033" strokeWidth="3" />
            <line x1="218" y1="356" x2="218" y2="20" stroke="#172033" strokeWidth="3" />
            <polygon points="106,76 274,76 274,160 358,160 358,272 106,272" fill="#bbf7d0" fillOpacity="0.85" stroke="#15803d" strokeWidth="5" />
            <line x1="274" y1="160" x2="274" y2="272" stroke="#e11d48" strokeWidth="4" strokeDasharray="8 6" />
            <text x="55" y="65" className="pointText">(−4, 4)</text>
            <text x="274" y="65" className="pointText">(2, 4)</text>
            <text x="365" y="167" className="pointText">(5, 1)</text>
            <text x="365" y="289" className="pointText">(5, −3)</text>
            <text x="48" y="289" className="pointText">(−4, −3)</text>
            <text x="182" y="178" className="shapeLabel">Rectangle 1</text>
            <text x="282" y="222" className="shapeLabel">Rectangle 2</text>
          </svg>

          <div className="methodSteps">
            <article>
              <strong>Rectangle 1</strong>
              <p>Width = |2 − (−4)| = 6</p>
              <p>Height = |4 − (−3)| = 7</p>
              <span>Area = 6 × 7 = 42</span>
            </article>
            <article>
              <strong>Rectangle 2</strong>
              <p>Width = |5 − 2| = 3</p>
              <p>Height = |1 − (−3)| = 4</p>
              <span>Area = 3 × 4 = 12</span>
            </article>
            <div className="methodTotal">Total area = 42 + 12 = 54 square units</div>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">FILLING METHOD</p>
            <h2>Complete a larger figure and subtract the extra part</h2>
          </div>
        </div>

        <div className="methodLayout">
          <svg
            className="methodDiagram"
            viewBox="0 0 470 380"
            role="img"
            aria-label="A pentagon completed to a rectangle with a triangular extra region"
          >
            <defs>
              <pattern id="fill-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#e0e7ff" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="50" y="20" width="364" height="336" rx="14" fill="url(#fill-grid)" />
            <line x1="50" y1="188" x2="414" y2="188" stroke="#172033" strokeWidth="3" />
            <line x1="218" y1="356" x2="218" y2="20" stroke="#172033" strokeWidth="3" />
            <rect x="106" y="76" width="224" height="168" fill="#fef3c7" stroke="#d97706" strokeWidth="4" strokeDasharray="8 6" />
            <polygon points="106,244 330,244 330,160 246,76 106,76" fill="#fde68a" stroke="#b45309" strokeWidth="5" />
            <polygon points="246,76 330,76 330,160" fill="#ffe4e6" stroke="#e11d48" strokeWidth="3" strokeDasharray="7 5" />
            <text x="270" y="103" className="shapeLabel">extra</text>
            <text x="54" y="259" className="pointText">(−4, −2)</text>
            <text x="337" y="259" className="pointText">(4, −2)</text>
            <text x="337" y="165" className="pointText">(4, 1)</text>
            <text x="212" y="65" className="pointText">(1, 4)</text>
            <text x="53" y="65" className="pointText">(−4, 4)</text>
          </svg>

          <div className="methodSteps">
            <article>
              <strong>Bounding rectangle</strong>
              <p>Width = |4 − (−4)| = 8</p>
              <p>Height = |4 − (−2)| = 6</p>
              <span>Area = 8 × 6 = 48</span>
            </article>
            <article>
              <strong>Extra triangle</strong>
              <p>Base = |4 − 1| = 3</p>
              <p>Height = |4 − 1| = 3</p>
              <span>Area = ½ × 3 × 3 = 4.5</span>
            </article>
            <div className="methodTotal amberTotal">Polygon area = 48 − 4.5 = 43.5 square units</div>
          </div>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>A reliable coordinate-area method</h2>

        <div className="summaryGrid">
          <article>
            <span>1</span>
            <p>Mark the vertices clearly on the coordinate plane.</p>
          </article>
          <article>
            <span>2</span>
            <p>Use coordinate differences to find the required lengths.</p>
          </article>
          <article>
            <span>3</span>
            <p>Split the polygon or fill it to form familiar figures.</p>
          </article>
          <article>
            <span>4</span>
            <p>Apply the correct formula and write the answer in square units.</p>
          </article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-8")}
      >
        Finish Section 3 →
      </button>

      <style jsx>{`
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
          margin: 0;
          font-size: clamp(38px, 5vw, 54px);
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

        .lengthRuleGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .lengthRuleGrid article {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border: 1px solid #dbeafe;
          border-radius: 18px;
          background: #f8fbff;
        }

        .ruleIcon {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: #dbeafe;
          color: #1d4ed8;
          font-size: 26px;
          font-weight: 900;
        }

        .lengthRuleGrid h3 {
          margin: 0 0 5px;
          font-size: 20px;
        }

        .lengthRuleGrid strong {
          color: #1e3a8a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
        }

        .lengthRuleGrid p {
          margin: 5px 0 0;
          color: #64748b;
        }

        .formulaStrip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          margin-top: 16px;
        }

        .formulaStrip span {
          display: grid;
          place-items: center;
          min-height: 58px;
          padding: 11px;
          border-radius: 13px;
          background: #fff7ed;
          color: #9a3412;
          font-weight: 900;
          text-align: center;
        }

        .keyNote {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 18px;
          padding: 15px;
          border-radius: 14px;
          background: #ecfdf5;
          color: #166534;
          text-align: center;
        }

        .workedCard {
          border-color: #bfdbfe;
          background: #fbfdff;
        }

        .triangleCard {
          border-color: #c7d2fe;
          background: #fdfcff;
        }

        .workedLayout,
        .methodLayout {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
          gap: 26px;
          align-items: center;
        }

        .coordinateDiagram,
        .methodDiagram {
          width: 100%;
          border-radius: 18px;
          background: white;
        }

        .pointText,
        .measureText,
        .axisText,
        .shapeLabel {
          font-family: Arial, sans-serif;
          font-weight: 800;
        }

        .pointText {
          fill: #be123c;
          font-size: 13px;
        }

        .measureText {
          fill: #4338ca;
          font-size: 14px;
        }

        .axisText {
          fill: #172033;
          font-size: 14px;
        }

        .shapeLabel {
          fill: #166534;
          font-size: 13px;
        }

        .workedSteps,
        .methodSteps {
          display: grid;
          gap: 12px;
        }

        .workedSteps article {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          border-radius: 15px;
          background: white;
        }

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

        .workedSteps p,
        .methodSteps p {
          margin: 4px 0 0;
          color: #64748b;
          line-height: 1.45;
        }

        .workedSteps strong {
          display: block;
          margin-top: 4px;
          color: #1e3a8a;
        }

        .workedAnswer,
        .methodTotal {
          margin-top: 20px;
          padding: 16px;
          border-radius: 14px;
          background: #dbeafe;
          color: #1e3a8a;
          font-size: 18px;
          font-weight: 900;
          text-align: center;
        }

        .purpleAnswer {
          background: #ede9fe;
          color: #5b21b6;
        }

        .methodSteps article {
          padding: 18px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #f8fafc;
        }

        .methodSteps article strong {
          display: block;
          margin-bottom: 7px;
          color: #172033;
          font-size: 18px;
        }

        .methodSteps article span {
          display: block;
          margin-top: 9px;
          color: #166534;
          font-weight: 900;
        }

        .methodTotal {
          margin-top: 0;
          background: #dcfce7;
          color: #166534;
        }

        .amberTotal {
          background: #fef3c7;
          color: #92400e;
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
          width: 35px;
          height: 35px;
          flex: 0 0 35px;
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

        @media (max-width: 900px) {
          .workedLayout,
          .methodLayout {
            grid-template-columns: 1fr;
          }

          .formulaStrip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .summaryCard {
            padding: 20px;
          }

          .lengthRuleGrid,
          .summaryGrid,
          .formulaStrip {
            grid-template-columns: 1fr;
          }

          .keyNote {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
