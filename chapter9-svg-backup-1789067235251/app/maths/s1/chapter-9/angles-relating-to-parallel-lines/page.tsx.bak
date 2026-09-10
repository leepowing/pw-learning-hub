"use client";

import { useRouter } from "next/navigation";

type DiagramKind = "corresponding" | "alternate" | "interior";

function ParallelDiagram({ kind }: { kind: DiagramKind }) {
  const labels = {
    corresponding: {
      a: { x: 368, y: 69 },
      b: { x: 237, y: 199 },
      title: "Corresponding angles in matching positions",
    },
    alternate: {
      a: { x: 275, y: 107 },
      b: { x: 237, y: 199 },
      title: "Alternate interior angles on opposite sides of a transversal",
    },
    interior: {
      a: { x: 355, y: 130 },
      b: { x: 237, y: 199 },
      title: "Interior angles on the same side of a transversal",
    },
  }[kind];

  return (
    <svg
      className="parallelDiagram"
      viewBox="0 0 520 300"
      role="img"
      aria-label={labels.title}
    >
      <line x1="55" y1="88" x2="465" y2="88" className="parallelLine" />
      <line x1="55" y1="218" x2="465" y2="218" className="parallelLine" />
      <line x1="126" y1="282" x2="392" y2="18" className="transversal" />

      <path d="M97 75 L109 88 L97 101" className="parallelMark" />
      <path d="M121 75 L133 88 L121 101" className="parallelMark" />
      <path d="M97 205 L109 218 L97 231" className="parallelMark" />
      <path d="M121 205 L133 218 L121 231" className="parallelMark" />

      <circle cx="321" cy="88" r="6" className="intersection" />
      <circle cx="190" cy="218" r="6" className="intersection" />
      <text x="474" y="93" className="lineName">p</text>
      <text x="474" y="223" className="lineName">q</text>
      <text x="391" y="28" className="lineName">t</text>

      <circle cx={labels.a.x} cy={labels.a.y} r="20" className="labelCircle labelA" />
      <circle cx={labels.b.x} cy={labels.b.y} r="20" className="labelCircle labelB" />
      <text x={labels.a.x} y={labels.a.y + 7} textAnchor="middle" className="angleLabel angleLabelA">a</text>
      <text x={labels.b.x} y={labels.b.y + 7} textAnchor="middle" className="angleLabel angleLabelB">b</text>
    </svg>
  );
}

function ConverseDiagram({ kind }: { kind: DiagramKind }) {
  const labels = {
    corresponding: {
      a: { x: 180, y: 72 },
      b: { x: 238, y: 162 },
      title: "Equal corresponding angles imply that AB is parallel to CD",
    },
    alternate: {
      a: { x: 180, y: 72 },
      b: { x: 169, y: 120 },
      title: "Equal alternate angles imply that AB is parallel to CD",
    },
    interior: {
      a: { x: 180, y: 72 },
      b: { x: 239, y: 119 },
      title: "Supplementary same-side interior angles imply that AB is parallel to CD",
    },
  }[kind];

  return (
    <svg
      className="converseDiagram"
      viewBox="0 0 360 190"
      role="img"
      aria-label={labels.title}
    >
      <line x1="42" y1="50" x2="322" y2="50" className="converseLine" />
      <line x1="42" y1="140" x2="322" y2="140" className="converseLine" />
      <line x1="120" y1="10" x2="230" y2="180" className="converseTransversal" />

      <circle cx="146" cy="50" r="5" className="intersection" />
      <circle cx="204" cy="140" r="5" className="intersection" />

      <text x="24" y="56" className="converseLineName">A</text>
      <text x="329" y="56" className="converseLineName">B</text>
      <text x="24" y="146" className="converseLineName">C</text>
      <text x="329" y="146" className="converseLineName">D</text>

      <circle cx={labels.a.x} cy={labels.a.y} r="16" className="converseAngleBubble converseAngleA" />
      <circle cx={labels.b.x} cy={labels.b.y} r="16" className="converseAngleBubble converseAngleB" />
      <text x={labels.a.x} y={labels.a.y + 6} textAnchor="middle" className="converseAngleText converseAngleTextA">a</text>
      <text x={labels.b.x} y={labels.b.y + 6} textAnchor="middle" className="converseAngleText converseAngleTextB">b</text>
    </svg>
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

export default function AnglesRelatingToParallelLinesPage() {
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

      <p className="eyebrow">S1 · CHAPTER 9 · SECTION 2</p>
      <h1>Angles Relating to Parallel Lines</h1>

      <p className="introduction">
        When a transversal crosses two parallel lines, angle positions reveal
        useful relationships. Identify the relationship before calculating.
      </p>

      <section className="lessonCard">
        <LessonHeading
          number="1"
          label="LINES AND TRANSVERSALS"
          title="Start by identifying the parallel lines"
        />

        <div className="introLayout">
          <svg
            className="introDiagram"
            viewBox="0 0 520 300"
            role="img"
            aria-label="Two parallel lines crossed by a transversal"
          >
            <line x1="65" y1="82" x2="455" y2="82" className="parallelLine" />
            <line x1="65" y1="218" x2="455" y2="218" className="parallelLine" />
            <line x1="142" y1="282" x2="385" y2="18" className="transversal" />
            <path d="M102 69 L114 82 L102 95" className="parallelMark" />
            <path d="M126 69 L138 82 L126 95" className="parallelMark" />
            <path d="M102 205 L114 218 L102 231" className="parallelMark" />
            <path d="M126 205 L138 218 L126 231" className="parallelMark" />
            <text x="466" y="88" className="lineName">p</text>
            <text x="466" y="224" className="lineName">q</text>
            <text x="388" y="28" className="lineName">t</text>
          </svg>

          <div className="factPanel">
            <p className="factLabel">READ THE DIAGRAM</p>
            <div className="parallelStatement">p // q</div>
            <p>
              The matching arrow marks show that <strong>p</strong> and
              <strong> q</strong> are parallel. Line <strong>t</strong> crosses
              both lines, so it is the transversal.
            </p>
            <div className="keyNote">A transversal creates eight angles.</div>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="2"
          label="CORRESPONDING ANGLES"
          title="Angles in matching positions are equal"
        />

        <div className="twoColumn">
          <ParallelDiagram kind="corresponding" />
          <div className="factPanel">
            <p className="shapeCue">F</p>
            <p className="factLabel">CORRESPONDING ANGLES</p>
            <div className="largeFormula">a = b</div>
            <p>
              Corresponding angles occupy the same relative position at the
              two intersections.
            </p>
            <div className="reasonTag">Reason: corr. ∠s, p // q</div>
          </div>
        </div>

        <div className="workedStrip">
          <strong>Example</strong>
          <span>If a = 64°, then b = 64°.</span>
          <span>Corresponding angles are equal.</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="3"
          label="ALTERNATE ANGLES"
          title="Interior angles on opposite sides are equal"
        />

        <div className="twoColumn">
          <ParallelDiagram kind="alternate" />
          <div className="factPanel">
            <p className="shapeCue">Z</p>
            <p className="factLabel">ALTERNATE ANGLES</p>
            <div className="largeFormula">a = b</div>
            <p>
              Alternate angles lie between the parallel lines and on opposite
              sides of the transversal.
            </p>
            <div className="reasonTag">Reason: alt. ∠s, p // q</div>
          </div>
        </div>

        <div className="workedStrip">
          <strong>Example</strong>
          <span>If a = 117°, then b = 117°.</span>
          <span>Alternate angles are equal.</span>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="4"
          label="INTERIOR ANGLES ON THE SAME SIDE"
          title="Same-side interior angles add up to 180°"
        />

        <div className="twoColumn">
          <ParallelDiagram kind="interior" />
          <div className="factPanel">
            <p className="shapeCue">C</p>
            <p className="factLabel">SAME-SIDE INTERIOR ANGLES</p>
            <div className="largeFormula compactFormula">a + b = 180°</div>
            <p>
              Both angles lie between the parallel lines and on the same side
              of the transversal.
            </p>
            <div className="reasonTag">Reason: int. ∠s, p // q</div>
          </div>
        </div>

        <div className="workedStrip">
          <strong>Example</strong>
          <span>b = 180° − 68°</span>
          <span>b = 112°</span>
        </div>
      </section>

      <section className="lessonCard proofCard">
        <LessonHeading
          number="5"
          label="CONDITIONS FOR PARALLEL LINES"
          title="The converse rules can prove that two lines are parallel"
        />

        <div className="converseGrid">
          <article>
            <ConverseDiagram kind="corresponding" />
            <h3>Equal corresponding angles</h3>
            <div className="converseEquation">If a = b, then AB // CD.</div>
            <div className="referenceTag">[Reference: corr. ∠s equal]</div>
          </article>
          <article>
            <ConverseDiagram kind="alternate" />
            <h3>Equal alternate angles</h3>
            <div className="converseEquation">If a = b, then AB // CD.</div>
            <div className="referenceTag">[Reference: alt. ∠s equal]</div>
          </article>
          <article>
            <ConverseDiagram kind="interior" />
            <h3>Interior angles on the same side</h3>
            <div className="converseEquation">If a + b = 180°, then AB // CD.</div>
            <div className="referenceTag">[Reference: int. ∠s supp.]</div>
          </article>
        </div>

        <div className="warningNote">
          <strong>Check the direction of the statement.</strong>
          <span>
            If parallel lines are already given, use them to find angles. If
            angle facts are given, use the converse rule to prove lines parallel.
          </span>
        </div>
      </section>

      <section className="lessonCard methodCard">
        <LessonHeading
          number="6"
          label="SOLVING ANGLE PROBLEMS"
          title="Follow the angle relationship through the diagram"
        />

        <div className="methodGrid">
          <article>
            <span>1</span>
            <strong>Find the parallel marks</strong>
            <p>Do not assume that two lines are parallel from appearance alone.</p>
          </article>
          <article>
            <span>2</span>
            <strong>Locate the transversal</strong>
            <p>Identify the line that crosses both parallel lines.</p>
          </article>
          <article>
            <span>3</span>
            <strong>Name the relationship</strong>
            <p>Choose corresponding, alternate or same-side interior angles.</p>
          </article>
          <article>
            <span>4</span>
            <strong>Calculate and justify</strong>
            <p>Write the equation, degree symbol and geometric reason.</p>
          </article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Three angle relationships and three converse tests</h2>

        <div className="summaryGrid">
          <article>
            <span>F</span>
            <p>Corresponding angles are equal.</p>
          </article>
          <article>
            <span>Z</span>
            <p>Alternate angles are equal.</p>
          </article>
          <article>
            <span>C</span>
            <p>Same-side interior angles add up to 180°.</p>
          </article>
          <article>
            <span>//</span>
            <p>The converse of each relationship can prove lines parallel.</p>
          </article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-9")}
      >
        Finish Section 2 →
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
        .factLabel,
        .summaryLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow { margin: 0 0 7px; color: #e11d48; }

        h1 {
          margin: 0;
          color: #172033;
          font-size: clamp(34px, 6vw, 58px);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .introduction {
          max-width: 800px;
          margin: 20px 0 34px;
          color: #5c667a;
          font-size: 18px;
          line-height: 1.7;
        }

        .lessonCard,
        .summaryCard {
          margin-top: 24px;
          padding: 30px;
          border: 1px solid #dbe3ee;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
        }

        .lessonHeading {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .lessonNumber {
          display: grid;
          flex: 0 0 auto;
          place-items: center;
          width: 48px;
          height: 48px;
          border-radius: 15px;
          background: #ffe4e6;
          color: #be123c;
          font-size: 22px;
          font-weight: 900;
        }

        .lessonLabel { margin: 2px 0 5px; color: #e11d48; }

        .lessonHeading h2,
        .summaryCard h2 {
          margin: 0;
          font-size: clamp(24px, 4vw, 34px);
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .twoColumn,
        .introLayout {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
          gap: 24px;
          align-items: stretch;
        }

        .parallelDiagram,
        .introDiagram {
          width: 100%;
          min-height: 280px;
          border-radius: 20px;
          background: linear-gradient(145deg, #f0fdf4, #f8fafc);
        }

        .parallelLine,
        .transversal {
          stroke: #172033;
          stroke-width: 6;
          stroke-linecap: round;
        }

        .transversal { stroke: #047857; }
        .parallelMark { fill: none; stroke: #e11d48; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
        .intersection { fill: #172033; }
        .lineName { fill: #172033; font-size: 22px; font-weight: 900; font-style: italic; }
        .labelCircle { stroke-width: 2; }
        .labelA { fill: #ffe4e6; stroke: #fb7185; }
        .labelB { fill: #e0e7ff; stroke: #818cf8; }
        .angleLabel { font-size: 21px; font-weight: 900; }
        .angleLabelA { fill: #be123c; }
        .angleLabelB { fill: #4338ca; }

        .factPanel {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          padding: 24px;
          border-radius: 20px;
          background: #f8fafc;
          overflow: hidden;
        }

        .factLabel { margin: 0 0 10px; color: #047857; }
        .factPanel p:not(.factLabel):not(.shapeCue) { margin: 14px 0; color: #5c667a; line-height: 1.6; }
        .parallelStatement,
        .largeFormula {
          color: #1e3a8a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          text-align: center;
          white-space: nowrap;
        }

        .compactFormula { font-size: clamp(25px, 3.4vw, 38px); }

        .shapeCue {
          position: absolute;
          top: -26px;
          right: 8px;
          margin: 0;
          color: rgba(16, 185, 129, 0.12);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 132px;
          font-weight: 900;
          line-height: 1;
        }

        .keyNote,
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
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 15px;
          background: #eff6ff;
          color: #1e3a8a;
        }

        .workedStrip strong { color: #be123c; }

        .proofCard { border-color: #a7f3d0; background: #fbfffd; }

        .converseGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .converseGrid article,
        .methodGrid article,
        .summaryGrid article {
          padding: 20px;
          border-radius: 18px;
          background: #f8fafc;
        }

        .converseDiagram {
          width: 100%;
          min-height: 178px;
          border-radius: 14px;
          background: #fff;
        }

        .converseLine,
        .converseTransversal {
          stroke: #172033;
          stroke-width: 4;
          stroke-linecap: round;
        }

        .converseTransversal { stroke: #047857; }
        .converseLineName { fill: #172033; font-size: 17px; font-weight: 900; font-style: italic; }
        .converseAngleBubble { stroke-width: 2; }
        .converseAngleA { fill: #ffe4e6; stroke: #fb7185; }
        .converseAngleB { fill: #e0e7ff; stroke: #818cf8; }
        .converseAngleText { font-size: 17px; font-weight: 900; }
        .converseAngleTextA { fill: #be123c; }
        .converseAngleTextB { fill: #4338ca; }

        .converseEquation {
          min-height: 48px;
          color: #172033;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 800;
          line-height: 1.45;
        }

        .referenceTag {
          margin-top: 12px;
          padding: 10px 12px;
          border-radius: 11px;
          background: #ecfdf5;
          color: #166534;
          font-size: 14px;
          font-weight: 900;
          line-height: 1.35;
        }

        .converseGrid h3 { margin: 14px 0 7px; font-size: 19px; }
        .converseGrid p,
        .methodGrid p,
        .summaryGrid p { margin: 0; color: #5c667a; line-height: 1.55; }

        .warningNote {
          display: flex;
          gap: 10px 18px;
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 15px;
          background: #fff7ed;
          color: #9a3412;
        }

        .warningNote span { color: #7c2d12; }
        .methodCard { border-color: #bef264; background: #fcfff7; }

        .methodGrid,
        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .methodGrid article { display: grid; grid-template-columns: 42px 1fr; gap: 5px 12px; }
        .methodGrid article > span {
          grid-row: span 2;
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border-radius: 13px;
          background: #172033;
          color: #fff;
          font-weight: 900;
        }

        .summaryCard { border: none; background: linear-gradient(135deg, #172033, #243552); color: #fff; }
        .summaryLabel { margin: 0 0 7px; color: #86efac; }
        .summaryGrid { margin-top: 22px; }
        .summaryGrid article { display: flex; align-items: center; gap: 14px; background: rgba(255,255,255,0.09); }
        .summaryGrid article > span { color: #86efac; font-size: 30px; font-weight: 900; }
        .summaryGrid p { color: #e2e8f0; }

        .finishButton {
          display: block;
          margin: 26px 0 0 auto;
          padding: 15px 22px;
          border: none;
          border-radius: 14px;
          background: #047857;
          color: #fff;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(4, 120, 87, 0.22);
        }

        @media (max-width: 820px) {
          .twoColumn,
          .introLayout { grid-template-columns: 1fr; }
          .converseGrid { grid-template-columns: 1fr; }
          .workedStrip { grid-template-columns: 1fr; }
          .warningNote { flex-direction: column; }
        }

        @media (max-width: 620px) {
          .page { width: calc(100% - 28px); margin-top: 28px; }
          .lessonCard,
          .summaryCard { padding: 20px; border-radius: 20px; }
          .lessonHeading { align-items: center; }
          .lessonNumber { width: 42px; height: 42px; }
          .methodGrid,
          .summaryGrid { grid-template-columns: 1fr; }
          .parallelDiagram,
          .introDiagram { min-height: 230px; }
          .compactFormula { font-size: 25px; }
        }
      `}</style>
    </main>
  );
}
