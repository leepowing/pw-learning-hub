"use client";

import { useRouter } from "next/navigation";

export default function DistanceBetweenTwoPointsPage() {
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

      <p className="eyebrow">S1 · CHAPTER 8 · SECTION 2</p>
      <h1>Distance between Two Points</h1>

      <p className="introduction">
        Compare the coordinates of two points on the same horizontal or
        vertical line. Distance is always a non-negative length.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">READ THE DIRECTION</p>
            <h2>First identify which coordinate stays the same</h2>
          </div>
        </div>

        <div className="directionGrid">
          <article>
            <svg viewBox="0 0 320 150" role="img" aria-label="Two points on a horizontal line">
              <line x1="42" y1="76" x2="278" y2="76" stroke="#1d4ed8" strokeWidth="5" />
              <circle cx="80" cy="76" r="9" fill="#e11d48" />
              <circle cx="244" cy="76" r="9" fill="#e11d48" />
              <text x="65" y="54" className="pointText">P</text>
              <text x="251" y="54" className="pointText">Q</text>
              <text x="119" y="112" className="diagramText">same y-coordinate</text>
            </svg>
            <h3>Horizontal line</h3>
            <strong>Compare the x-coordinates</strong>
            <p>The y-coordinates are equal.</p>
          </article>

          <article>
            <svg viewBox="0 0 320 150" role="img" aria-label="Two points on a vertical line">
              <line x1="160" y1="20" x2="160" y2="132" stroke="#4f46e5" strokeWidth="5" />
              <circle cx="160" cy="42" r="9" fill="#e11d48" />
              <circle cx="160" cy="112" r="9" fill="#e11d48" />
              <text x="177" y="47" className="pointText">R</text>
              <text x="177" y="117" className="pointText">S</text>
              <text x="28" y="82" className="diagramText">same x-coordinate</text>
            </svg>
            <h3>Vertical line</h3>
            <strong>Compare the y-coordinates</strong>
            <p>The x-coordinates are equal.</p>
          </article>
        </div>

        <div className="keyNote">
          <strong>Only one coordinate changes.</strong>
          <span>The changing coordinate determines the distance.</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">HORIZONTAL DISTANCE</p>
            <h2>Subtract the x-coordinates</h2>
          </div>
        </div>

        <div className="formulaBanner">
          <span>P(x₁, y)</span>
          <strong>PQ = |x₂ − x₁|</strong>
          <span>Q(x₂, y)</span>
        </div>

        <div className="workedLayout">
          <svg
            className="coordinateDiagram"
            viewBox="0 0 430 280"
            role="img"
            aria-label="Points P negative four, three and Q five, three on a horizontal line"
          >
            <defs>
              <pattern id="horizontal-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M30 0H0V30" fill="none" stroke="#dbeafe" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="35" y="18" width="360" height="240" rx="14" fill="url(#horizontal-grid)" />
            <line x1="35" y1="168" x2="395" y2="168" stroke="#172033" strokeWidth="3" />
            <line x1="215" y1="258" x2="215" y2="18" stroke="#172033" strokeWidth="3" />
            <line x1="95" y1="78" x2="365" y2="78" stroke="#1d4ed8" strokeWidth="6" />
            <line x1="95" y1="78" x2="95" y2="168" stroke="#94a3b8" strokeWidth="2" strokeDasharray="7 6" />
            <line x1="365" y1="78" x2="365" y2="168" stroke="#94a3b8" strokeWidth="2" strokeDasharray="7 6" />
            <circle cx="95" cy="78" r="9" fill="#be123c" />
            <circle cx="365" cy="78" r="9" fill="#be123c" />
            <text x="51" y="62" className="pointText">P(−4, 3)</text>
            <text x="321" y="62" className="pointText">Q(5, 3)</text>
            <text x="204" y="61" className="distanceText">9 units</text>
            <text x="222" y="185" className="axisText">O</text>
          </svg>

          <div className="workedSteps">
            <article>
              <span>1</span>
              <div>
                <p>Confirm that the points are horizontal.</p>
                <strong>Both y-coordinates are 3.</strong>
              </div>
            </article>
            <article>
              <span>2</span>
              <div>
                <p>Subtract the x-coordinates.</p>
                <strong>|5 − (−4)|</strong>
              </div>
            </article>
            <article>
              <span>3</span>
              <div>
                <p>Evaluate the absolute value.</p>
                <strong>PQ = |9| = 9 units</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="lessonCard workedCard verticalCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">VERTICAL DISTANCE</p>
            <h2>Subtract the y-coordinates</h2>
          </div>
        </div>

        <div className="formulaBanner verticalFormula">
          <span>R(x, y₁)</span>
          <strong>RS = |y₂ − y₁|</strong>
          <span>S(x, y₂)</span>
        </div>

        <div className="workedLayout">
          <svg
            className="coordinateDiagram"
            viewBox="0 0 430 330"
            role="img"
            aria-label="Points R two, negative five and S two, four on a vertical line"
          >
            <defs>
              <pattern id="vertical-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#e0e7ff" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="47" y="12" width="336" height="308" rx="14" fill="url(#vertical-grid)" />
            <line x1="47" y1="152" x2="383" y2="152" stroke="#172033" strokeWidth="3" />
            <line x1="215" y1="320" x2="215" y2="12" stroke="#172033" strokeWidth="3" />
            <line x1="271" y1="292" x2="271" y2="40" stroke="#4f46e5" strokeWidth="6" />
            <line x1="215" y1="292" x2="271" y2="292" stroke="#94a3b8" strokeWidth="2" strokeDasharray="7 6" />
            <line x1="215" y1="40" x2="271" y2="40" stroke="#94a3b8" strokeWidth="2" strokeDasharray="7 6" />
            <circle cx="271" cy="292" r="9" fill="#be123c" />
            <circle cx="271" cy="40" r="9" fill="#be123c" />
            <text x="286" y="300" className="pointText">R(2, −5)</text>
            <text x="286" y="47" className="pointText">S(2, 4)</text>
            <text x="283" y="172" className="distanceText">9 units</text>
            <text x="222" y="169" className="axisText">O</text>
          </svg>

          <div className="workedSteps">
            <article>
              <span>1</span>
              <div>
                <p>Confirm that the points are vertical.</p>
                <strong>Both x-coordinates are 2.</strong>
              </div>
            </article>
            <article>
              <span>2</span>
              <div>
                <p>Subtract the y-coordinates.</p>
                <strong>|4 − (−5)|</strong>
              </div>
            </article>
            <article>
              <span>3</span>
              <div>
                <p>Evaluate the absolute value.</p>
                <strong>RS = |9| = 9 units</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">DISTANCE FROM AN AXIS</p>
            <h2>Use the absolute value of one coordinate</h2>
          </div>
        </div>

        <div className="axisDistanceLayout">
          <svg
            className="axisDiagram"
            viewBox="0 0 430 310"
            role="img"
            aria-label="Point T negative six, two with its distances from both axes"
          >
            <defs>
              <pattern id="axis-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#dbeafe" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="47" y="14" width="336" height="280" rx="14" fill="url(#axis-grid)" />
            <line x1="47" y1="154" x2="383" y2="154" stroke="#172033" strokeWidth="3" />
            <line x1="215" y1="294" x2="215" y2="14" stroke="#172033" strokeWidth="3" />
            <line x1="47" y1="98" x2="215" y2="98" stroke="#e11d48" strokeWidth="5" />
            <line x1="47" y1="98" x2="47" y2="154" stroke="#4f46e5" strokeWidth="5" />
            <circle cx="47" cy="98" r="9" fill="#be123c" />
            <text x="58" y="84" className="pointText">T(−6, 2)</text>
            <text x="116" y="87" className="distanceText">6 units</text>
            <text x="56" y="130" className="distanceText">2 units</text>
            <text x="222" y="171" className="axisText">O</text>
          </svg>

          <div className="axisRuleGrid">
            <article>
              <span>|x|</span>
              <strong>Distance from the y-axis</strong>
              <p>For T(−6, 2), the distance is |−6| = 6 units.</p>
            </article>
            <article>
              <span>|y|</span>
              <strong>Distance from the x-axis</strong>
              <p>For T(−6, 2), the distance is |2| = 2 units.</p>
            </article>
          </div>
        </div>

        <div className="keyNote axisKeyNote">
          <strong>A coordinate may be negative, but a distance cannot be negative.</strong>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">SIDE LENGTHS ON A GRID</p>
            <h2>Coordinate differences reveal horizontal and vertical sides</h2>
          </div>
        </div>

        <div className="rectangleLayout">
          <svg
            className="rectangleDiagram"
            viewBox="0 0 460 360"
            role="img"
            aria-label="Rectangle ABCD on a coordinate plane"
          >
            <defs>
              <pattern id="rectangle-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#dbeafe" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="48" y="18" width="364" height="308" rx="14" fill="url(#rectangle-grid)" />
            <line x1="48" y1="186" x2="412" y2="186" stroke="#172033" strokeWidth="3" />
            <line x1="216" y1="326" x2="216" y2="18" stroke="#172033" strokeWidth="3" />
            <polygon points="132,74 356,74 356,242 132,242" fill="#dbeafe" fillOpacity="0.75" stroke="#1d4ed8" strokeWidth="5" />
            <circle cx="132" cy="74" r="7" fill="#be123c" />
            <circle cx="356" cy="74" r="7" fill="#be123c" />
            <circle cx="356" cy="242" r="7" fill="#be123c" />
            <circle cx="132" cy="242" r="7" fill="#be123c" />
            <text x="77" y="60" className="pointText">A(−3, 4)</text>
            <text x="329" y="60" className="pointText">B(5, 4)</text>
            <text x="365" y="251" className="pointText">C(5, −2)</text>
            <text x="63" y="267" className="pointText">D(−3, −2)</text>
            <text x="217" y="63" className="distanceText">8 units</text>
            <text x="365" y="163" className="distanceText">6 units</text>
          </svg>

          <div className="sideCalculations">
            <article>
              <span>Horizontal sides</span>
              <strong>AB = DC = |5 − (−3)| = 8 units</strong>
              <p>A and B share y = 4. D and C share y = −2.</p>
            </article>
            <article>
              <span>Vertical sides</span>
              <strong>BC = AD = |4 − (−2)| = 6 units</strong>
              <p>B and C share x = 5. A and D share x = −3.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Distance rules</h2>

        <div className="summaryGrid">
          <article>
            <span>↔</span>
            <div>
              <strong>Horizontal</strong>
              <p>Same y-coordinate; subtract the x-coordinates.</p>
            </div>
          </article>
          <article>
            <span>↕</span>
            <div>
              <strong>Vertical</strong>
              <p>Same x-coordinate; subtract the y-coordinates.</p>
            </div>
          </article>
          <article>
            <span>| |</span>
            <div>
              <strong>Absolute value</strong>
              <p>Use absolute value so the distance is non-negative.</p>
            </div>
          </article>
          <article>
            <span>0</span>
            <div>
              <strong>From an axis</strong>
              <p>Distance from the y-axis is |x|; from the x-axis is |y|.</p>
            </div>
          </article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-8")}
      >
        Finish Section 2 →
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
          max-width: 840px;
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

        .directionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .directionGrid article {
          padding: 18px;
          border: 1px solid #dbeafe;
          border-radius: 18px;
          background: #f8fbff;
          text-align: center;
        }

        .directionGrid svg {
          width: 100%;
          max-height: 150px;
        }

        .directionGrid h3 {
          margin: 8px 0 6px;
          font-size: 21px;
        }

        .directionGrid strong {
          color: #1e3a8a;
        }

        .directionGrid p {
          margin: 6px 0 0;
          color: #64748b;
        }

        .pointText,
        .diagramText,
        .distanceText,
        .axisText {
          font-family: Arial, sans-serif;
          font-weight: 800;
        }

        .pointText {
          fill: #be123c;
          font-size: 14px;
        }

        .diagramText,
        .distanceText {
          fill: #4338ca;
          font-size: 13px;
        }

        .axisText {
          fill: #172033;
          font-size: 14px;
        }

        .keyNote {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
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

        .verticalCard {
          border-color: #c7d2fe;
        }

        .formulaBanner {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 16px;
          margin-bottom: 22px;
          padding: 17px;
          border-radius: 15px;
          background: #eff6ff;
          color: #1e3a8a;
          text-align: center;
        }

        .formulaBanner strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(23px, 4vw, 34px);
        }

        .formulaBanner span {
          font-weight: 900;
        }

        .verticalFormula {
          background: #eef2ff;
          color: #3730a3;
        }

        .workedLayout,
        .axisDistanceLayout,
        .rectangleLayout {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(310px, 0.92fr);
          gap: 26px;
          align-items: center;
        }

        .coordinateDiagram,
        .axisDiagram,
        .rectangleDiagram {
          width: 100%;
          border-radius: 18px;
          background: white;
        }

        .workedSteps,
        .axisRuleGrid,
        .sideCalculations {
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
        .axisRuleGrid p,
        .sideCalculations p {
          margin: 4px 0 0;
          color: #64748b;
          line-height: 1.45;
        }

        .workedSteps strong {
          display: block;
          margin-top: 4px;
          color: #1e3a8a;
        }

        .axisRuleGrid article,
        .sideCalculations article {
          padding: 19px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
        }

        .axisRuleGrid article > span,
        .sideCalculations article > span {
          display: block;
          margin-bottom: 9px;
          color: #c2410c;
          font-size: 24px;
          font-weight: 900;
        }

        .axisRuleGrid strong,
        .sideCalculations strong {
          display: block;
          color: #172033;
          font-size: 17px;
        }

        .axisKeyNote {
          display: block;
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
          gap: 13px;
          padding: 16px;
          border-radius: 15px;
          background: white;
        }

        .summaryGrid article > span {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #e0e7ff;
          color: #4338ca;
          font-size: 18px;
          font-weight: 900;
        }

        .summaryGrid p {
          margin: 4px 0 0;
          color: #64748b;
          line-height: 1.4;
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

        @media (max-width: 850px) {
          .workedLayout,
          .axisDistanceLayout,
          .rectangleLayout {
            grid-template-columns: 1fr;
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

          .directionGrid,
          .summaryGrid {
            grid-template-columns: 1fr;
          }

          .formulaBanner {
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
