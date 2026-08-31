"use client";

import { useRouter } from "next/navigation";

export default function TransformationsOfPointsPage() {
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

      <p className="eyebrow">S1 · CHAPTER 8 · SECTION 4</p>
      <h1>Transformations of Points</h1>

      <p className="introduction">
        Use coordinate rules to translate, reflect and rotate points. The
        original point is the object and the transformed point is its image.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">OBJECT AND IMAGE</p>
            <h2>Use a prime mark to name the image</h2>
          </div>
        </div>

        <div className="objectImageLayout">
          <div className="notationCard">
            <span className="objectPoint">P(x, y)</span>
            <span className="transformArrow">→</span>
            <span className="imagePoint">P′(x′, y′)</span>
          </div>

          <div className="definitionGrid">
            <article>
              <span>P</span>
              <div>
                <strong>Object</strong>
                <p>The original point before the transformation.</p>
              </div>
            </article>
            <article>
              <span>P′</span>
              <div>
                <strong>Image</strong>
                <p>The new point after the transformation.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="keyNote">
          <strong>A transformation changes a point&apos;s position.</strong>
          <span>The coordinate rule tells us its exact new location.</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">TRANSLATION</p>
            <h2>Add the horizontal and vertical movements</h2>
          </div>
        </div>

        <div className="ruleGrid fourRules">
          <article>
            <span>Right n</span>
            <strong>(x, y) → (x + n, y)</strong>
          </article>
          <article>
            <span>Left n</span>
            <strong>(x, y) → (x − n, y)</strong>
          </article>
          <article>
            <span>Up n</span>
            <strong>(x, y) → (x, y + n)</strong>
          </article>
          <article>
            <span>Down n</span>
            <strong>(x, y) → (x, y − n)</strong>
          </article>
        </div>

        <div className="workedLayout">
          <svg
            className="coordinateDiagram"
            viewBox="0 0 470 370"
            role="img"
            aria-label="Point P two, three translated four units right and five units down to P prime six, negative two"
          >
            <defs>
              <pattern id="translation-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#dbeafe" strokeWidth="1.5" />
              </pattern>
              <marker id="translation-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#4f46e5" />
              </marker>
            </defs>
            <rect x="50" y="20" width="364" height="336" rx="14" fill="url(#translation-grid)" />
            <line x1="50" y1="188" x2="414" y2="188" stroke="#172033" strokeWidth="3" />
            <line x1="218" y1="356" x2="218" y2="20" stroke="#172033" strokeWidth="3" />
            <line x1="274" y1="104" x2="386" y2="104" stroke="#e11d48" strokeWidth="4" strokeDasharray="8 6" />
            <line x1="386" y1="104" x2="386" y2="244" stroke="#4f46e5" strokeWidth="4" strokeDasharray="8 6" markerEnd="url(#translation-arrow)" />
            <circle cx="274" cy="104" r="9" fill="#be123c" />
            <circle cx="386" cy="244" r="9" fill="#4338ca" />
            <text x="238" y="89" className="objectText">P(2, 3)</text>
            <text x="307" y="91" className="movementText">4 right</text>
            <text x="393" y="178" className="movementText">5 down</text>
            <text x="323" y="269" className="imageText">P′(6, −2)</text>
            <text x="225" y="205" className="axisText">O</text>
          </svg>

          <div className="workedSteps">
            <article>
              <span>1</span>
              <div>
                <p>Translate P(2, 3) four units right.</p>
                <strong>x′ = 2 + 4 = 6</strong>
              </div>
            </article>
            <article>
              <span>2</span>
              <div>
                <p>Translate five units down.</p>
                <strong>y′ = 3 − 5 = −2</strong>
              </div>
            </article>
            <article>
              <span>3</span>
              <div>
                <p>Write the image coordinates.</p>
                <strong>P′(6, −2)</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="lessonCard reflectionCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">REFLECTION IN AN AXIS</p>
            <h2>Change the sign of the coordinate perpendicular to the mirror line</h2>
          </div>
        </div>

        <div className="reflectionRules">
          <article>
            <div className="mirrorIcon horizontalMirror" aria-hidden="true">
              <span>P</span><i /><span>P′</span>
            </div>
            <h3>Reflect in the x-axis</h3>
            <strong>(x, y) → (x, −y)</strong>
            <p>The x-coordinate stays the same.</p>
          </article>
          <article>
            <div className="mirrorIcon verticalMirror" aria-hidden="true">
              <span>P</span><i /><span>P′</span>
            </div>
            <h3>Reflect in the y-axis</h3>
            <strong>(x, y) → (−x, y)</strong>
            <p>The y-coordinate stays the same.</p>
          </article>
        </div>

        <div className="exampleStrip">
          <span>Q(−4, 2)</span>
          <b>x-axis image → (−4, −2)</b>
          <b>y-axis image → (4, 2)</b>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">REFLECTION IN OTHER LINES</p>
            <h2>Keep the object and image equally far from the mirror line</h2>
          </div>
        </div>

        <div className="lineReflectionLayout">
          <svg
            className="reflectionDiagram"
            viewBox="0 0 470 370"
            role="img"
            aria-label="Reflection of point R three, five in the horizontal line y equals one"
          >
            <defs>
              <pattern id="reflection-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#e0e7ff" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect x="50" y="20" width="364" height="336" rx="14" fill="url(#reflection-grid)" />
            <line x1="50" y1="188" x2="414" y2="188" stroke="#172033" strokeWidth="3" />
            <line x1="218" y1="356" x2="218" y2="20" stroke="#172033" strokeWidth="3" />
            <line x1="50" y1="160" x2="414" y2="160" stroke="#e11d48" strokeWidth="5" />
            <line x1="302" y1="48" x2="302" y2="272" stroke="#4f46e5" strokeWidth="3" strokeDasharray="8 6" />
            <circle cx="302" cy="48" r="9" fill="#be123c" />
            <circle cx="302" cy="272" r="9" fill="#4338ca" />
            <text x="311" y="43" className="objectText">R(3, 5)</text>
            <text x="310" y="292" className="imageText">R′(3, −3)</text>
            <text x="334" y="151" className="mirrorText">y = 1</text>
            <text x="310" y="111" className="movementText">4 units</text>
            <text x="310" y="226" className="movementText">4 units</text>
            <text x="225" y="205" className="axisText">O</text>
          </svg>

          <div className="lineRuleGrid">
            <article>
              <span>Horizontal line y = a</span>
              <strong>(x, y) → (x, 2a − y)</strong>
              <p>The x-coordinate stays the same.</p>
            </article>
            <article>
              <span>Vertical line x = b</span>
              <strong>(x, y) → (2b − x, y)</strong>
              <p>The y-coordinate stays the same.</p>
            </article>
            <div className="calculationBox">
              For R(3, 5) reflected in y = 1:<br />
              y′ = 2(1) − 5 = −3, so R′(3, −3).
            </div>
          </div>
        </div>
      </section>

      <section className="lessonCard rotationCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">ROTATION ABOUT THE ORIGIN</p>
            <h2>Use the direction and angle to choose the coordinate rule</h2>
          </div>
        </div>

        <div className="rotationRuleGrid">
          <article>
            <span>90° anticlockwise</span>
            <small>or 270° clockwise</small>
            <strong>(x, y) → (−y, x)</strong>
          </article>
          <article>
            <span>180°</span>
            <small>clockwise or anticlockwise</small>
            <strong>(x, y) → (−x, −y)</strong>
          </article>
          <article>
            <span>270° anticlockwise</span>
            <small>or 90° clockwise</small>
            <strong>(x, y) → (y, −x)</strong>
          </article>
        </div>

        <div className="rotationLayout">
          <svg
            className="rotationDiagram"
            viewBox="0 0 460 430"
            role="img"
            aria-label="Point T three, one and its images after rotations about the origin"
          >
            <defs>
              <pattern id="rotation-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#dbeafe" strokeWidth="1.5" />
              </pattern>
              <marker id="rotation-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="48" y="42" width="364" height="336" rx="14" fill="url(#rotation-grid)" />
            <line x1="48" y1="210" x2="412" y2="210" stroke="#172033" strokeWidth="3" />
            <line x1="216" y1="378" x2="216" y2="42" stroke="#172033" strokeWidth="3" />
            <circle cx="300" cy="182" r="9" fill="#be123c" />
            <circle cx="188" cy="126" r="9" fill="#2563eb" />
            <circle cx="132" cy="238" r="9" fill="#059669" />
            <circle cx="244" cy="294" r="9" fill="#7c3aed" />
            <path d="M289 170 Q230 99 177 137" fill="none" stroke="#2563eb" strokeWidth="3" markerEnd="url(#rotation-arrow)" />
            <path d="M291 194 Q213 321 142 250" fill="none" stroke="#059669" strokeWidth="3" markerEnd="url(#rotation-arrow)" />
            <path d="M309 194 Q344 262 255 296" fill="none" stroke="#7c3aed" strokeWidth="3" markerEnd="url(#rotation-arrow)" />
            <text x="307" y="174" className="objectText">T(3, 1)</text>
            <text x="89" y="116" className="blueImageText">90° ACW: (−1, 3)</text>
            <text x="53" y="260" className="greenImageText">180°: (−3, −1)</text>
            <text x="251" y="318" className="imageText">90° CW: (1, −3)</text>
            <text x="223" y="227" className="axisText">O</text>
          </svg>

          <div className="rotationSteps">
            <article>
              <strong>Start with T(3, 1)</strong>
              <p>90° anticlockwise: (−1, 3)</p>
              <p>180°: (−3, −1)</p>
              <p>90° clockwise: (1, −3)</p>
            </article>
            <div className="rotationTip">
              Clockwise and anticlockwise give the same image for a 180° rotation.
            </div>
          </div>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Coordinate transformation rules</h2>

        <div className="summaryTable">
          <div className="tableHeader"><span>Transformation</span><span>Image of (x, y)</span></div>
          <div><span>Translate right n</span><strong>(x + n, y)</strong></div>
          <div><span>Translate up n</span><strong>(x, y + n)</strong></div>
          <div><span>Reflect in x-axis</span><strong>(x, −y)</strong></div>
          <div><span>Reflect in y-axis</span><strong>(−x, y)</strong></div>
          <div><span>Rotate 90° anticlockwise</span><strong>(−y, x)</strong></div>
          <div><span>Rotate 180°</span><strong>(−x, −y)</strong></div>
          <div><span>Rotate 90° clockwise</span><strong>(y, −x)</strong></div>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-8")}
      >
        Finish Section 4 →
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

        .objectImageLayout {
          display: grid;
          grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr);
          gap: 18px;
        }

        .notationCard {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          min-height: 160px;
          border-radius: 19px;
          background: linear-gradient(135deg, #eff6ff, #eef2ff);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(25px, 4vw, 39px);
          font-weight: 900;
        }

        .objectPoint { color: #be123c; }
        .imagePoint { color: #4338ca; }
        .transformArrow { color: #64748b; }

        .definitionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .definitionGrid article {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 18px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
        }

        .definitionGrid article > span {
          width: 43px;
          height: 43px;
          flex: 0 0 43px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #e0e7ff;
          color: #4338ca;
          font-weight: 900;
        }

        .definitionGrid p,
        .workedSteps p,
        .lineRuleGrid p,
        .reflectionRules p,
        .rotationSteps p {
          margin: 4px 0 0;
          color: #64748b;
          line-height: 1.45;
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

        .ruleGrid,
        .rotationRuleGrid {
          display: grid;
          gap: 11px;
          margin-bottom: 22px;
        }

        .fourRules {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .ruleGrid article,
        .rotationRuleGrid article {
          padding: 17px;
          border-radius: 15px;
          background: #eff6ff;
          text-align: center;
        }

        .ruleGrid span,
        .rotationRuleGrid span {
          display: block;
          margin-bottom: 8px;
          color: #1d4ed8;
          font-weight: 900;
        }

        .ruleGrid strong,
        .rotationRuleGrid strong {
          display: block;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
        }

        .workedLayout,
        .lineReflectionLayout,
        .rotationLayout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(310px, 0.9fr);
          gap: 26px;
          align-items: center;
        }

        .coordinateDiagram,
        .reflectionDiagram,
        .rotationDiagram {
          width: 100%;
          border-radius: 18px;
          background: white;
        }

        .objectText,
        .imageText,
        .blueImageText,
        .greenImageText,
        .movementText,
        .mirrorText,
        .axisText {
          font-family: Arial, sans-serif;
          font-weight: 800;
        }

        .objectText { fill: #be123c; font-size: 14px; }
        .imageText { fill: #6d28d9; font-size: 14px; }
        .blueImageText { fill: #1d4ed8; font-size: 13px; }
        .greenImageText { fill: #047857; font-size: 13px; }
        .movementText { fill: #4338ca; font-size: 13px; }
        .mirrorText { fill: #be123c; font-size: 14px; }
        .axisText { fill: #172033; font-size: 14px; }

        .workedSteps,
        .lineRuleGrid,
        .rotationSteps {
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

        .workedSteps strong {
          display: block;
          margin-top: 4px;
          color: #1e3a8a;
        }

        .reflectionCard {
          border-color: #fecdd3;
          background: #fffafb;
        }

        .reflectionRules {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .reflectionRules article {
          padding: 20px;
          border: 1px solid #fecdd3;
          border-radius: 18px;
          background: white;
          text-align: center;
        }

        .mirrorIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          min-height: 72px;
          color: #4338ca;
          font-weight: 900;
        }

        .mirrorIcon i {
          display: block;
          background: #e11d48;
        }

        .horizontalMirror { flex-direction: column; gap: 7px; }
        .horizontalMirror i { width: 110px; height: 4px; }
        .verticalMirror i { width: 4px; height: 70px; }

        .reflectionRules h3 {
          margin: 7px 0;
          font-size: 20px;
        }

        .reflectionRules strong {
          color: #9f1239;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
        }

        .exampleStrip {
          display: grid;
          grid-template-columns: auto 1fr 1fr;
          gap: 10px;
          margin-top: 17px;
        }

        .exampleStrip span,
        .exampleStrip b {
          display: grid;
          place-items: center;
          min-height: 54px;
          padding: 11px;
          border-radius: 13px;
          background: #fff1f2;
          color: #881337;
          text-align: center;
        }

        .lineRuleGrid article {
          padding: 18px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #f8fafc;
        }

        .lineRuleGrid article > span {
          display: block;
          margin-bottom: 8px;
          color: #c2410c;
          font-weight: 900;
        }

        .lineRuleGrid article strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
        }

        .calculationBox,
        .rotationTip {
          padding: 16px;
          border-radius: 14px;
          background: #ecfdf5;
          color: #166534;
          font-weight: 900;
          line-height: 1.55;
          text-align: center;
        }

        .rotationCard {
          border-color: #ddd6fe;
          background: #fdfcff;
        }

        .rotationRuleGrid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .rotationRuleGrid article {
          background: #f5f3ff;
        }

        .rotationRuleGrid span {
          color: #6d28d9;
        }

        .rotationRuleGrid small {
          display: block;
          min-height: 32px;
          margin-bottom: 8px;
          color: #64748b;
        }

        .rotationSteps article {
          padding: 18px;
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          background: white;
        }

        .rotationSteps article strong {
          display: block;
          margin-bottom: 9px;
          color: #5b21b6;
          font-size: 18px;
        }

        .summaryCard {
          border-color: #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #faf5ff);
        }

        .summaryLabel { color: #4f46e5; }

        .summaryTable {
          margin-top: 20px;
          overflow: hidden;
          border: 1px solid #c7d2fe;
          border-radius: 16px;
          background: white;
        }

        .summaryTable > div {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
        }

        .summaryTable > div + div {
          border-top: 1px solid #e2e8f0;
        }

        .summaryTable span,
        .summaryTable strong {
          padding: 13px 16px;
        }

        .summaryTable strong {
          border-left: 1px solid #e2e8f0;
          color: #4338ca;
          font-family: Georgia, "Times New Roman", serif;
        }

        .tableHeader {
          background: #4f46e5;
          color: white;
          font-weight: 900;
        }

        .tableHeader span + span {
          border-left: 1px solid rgba(255,255,255,0.35);
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

        .finishButton:hover { background: #047857; }

        @media (max-width: 900px) {
          .objectImageLayout,
          .workedLayout,
          .lineReflectionLayout,
          .rotationLayout {
            grid-template-columns: 1fr;
          }

          .fourRules { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .rotationRuleGrid { grid-template-columns: 1fr; }
        }

        @media (max-width: 680px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .summaryCard { padding: 20px; }

          .definitionGrid,
          .reflectionRules,
          .fourRules,
          .exampleStrip { grid-template-columns: 1fr; }

          .keyNote {
            align-items: flex-start;
            flex-direction: column;
          }

          .summaryTable span,
          .summaryTable strong { padding: 12px 10px; }
        }
      `}</style>
    </main>
  );
}
