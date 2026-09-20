"use client";
import { reasonRef } from "@/data/maths/reasons/reasonBank";
import { DualReason, ReasonContent } from "@/components/maths/DualReason";



import { Straight, Crossing, Around, Parallel, Triangle, CheckpointDiagram } from "@/components/maths/Chapter9Geometry";

import { useRouter } from "next/navigation";

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

export default function AnglesOfATrianglePage() {
  const router = useRouter();

  return (
    <>
      <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-9")}
      >
        ← Back to Chapter 9
      </button>

      <p className="eyebrow">S1 · CHAPTER 9 · SECTION 3</p>
      <h1>Angles of a Triangle</h1>

      <p className="introduction">
        Use the interior-angle sum and the exterior-angle property of a triangle
        to find unknown angles. State the textbook reference for every result.
      </p>

      <section className="lessonCard">
        <LessonHeading
          number="1"
          label="INTERIOR ANGLES"
          title="The interior angles of a triangle add up to 180°"
        />

        <div className="twoColumn">
          <Triangle/>

          <div className="factPanel">
            <p className="factLabel">ANGLE FACT</p>
            <div className="largeFormula compactFormula">a + b + c = 180°</div>
            <p>
              Count the three interior angles exactly once. The shape and size
              of the triangle do not change the total.
            </p>
            <div className="referenceTag"><DualReason reasonId="triangle.angleSum" variant="textbook1" heading /></div>
          </div>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <LessonHeading
          number="2"
          label="FINDING AN INTERIOR ANGLE"
          title="Subtract the two known angles from 180°"
        />

        <div className="workedLayout">
          <Triangle kind="interior-example"/>

          <div className="workedSteps">
            <article>
              <span>1</span>
              <div>
                <p>Write the angle sum.</p>
                <strong>x + 50° + 55° = 180°</strong>
              </div>
            </article>
            <article>
              <span>2</span>
              <div>
                <p>Combine the known angles.</p>
                <strong>x + 105° = 180°</strong>
              </div>
            </article>
            <article>
              <span>3</span>
              <div>
                <p>Subtract from 180°.</p>
                <strong>x = 75°</strong>
              </div>
            </article>
            <div className="referenceTag"><DualReason reasonId="triangle.angleSum" variant="textbook1" heading /></div>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading
          number="3"
          label="EXTERIOR ANGLES"
          title="An exterior angle equals the two opposite interior angles"
        />

        <div className="twoColumn">
          <Triangle kind="exterior"/>

          <div className="factPanel">
            <p className="factLabel">EXTERIOR-ANGLE FACT</p>
            <div className="largeFormula">c₁ = a + b</div>
            <p>
              The two angles added are the interior angles that are not adjacent
              to the exterior angle.
            </p>
            <div className="referenceTag"><DualReason reasonId="triangle.exteriorAngle" variant="textbook1" heading /></div>
          </div>
        </div>

        <div className="keyNote">
          <strong>Use the two opposite interior angles.</strong>
          <span>Do not add the interior angle beside the exterior angle.</span>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <LessonHeading
          number="4"
          label="WORKED EXTERIOR-ANGLE EXAMPLE"
          title="Add the two opposite interior angles"
        />

        <div className="workedLayout">
          <Triangle kind="exterior-example"/>

          <div className="workedSteps exteriorSteps">
            <article>
              <span>1</span>
              <div>
                <p>Identify the exterior angle.</p>
                <strong>x is outside the triangle at C.</strong>
              </div>
            </article>
            <article>
              <span>2</span>
              <div>
                <p>Add the opposite interior angles.</p>
                <strong>x = 44° + 28°</strong>
              </div>
            </article>
            <article>
              <span>3</span>
              <div>
                <p>Evaluate.</p>
                <strong>x = 72°</strong>
              </div>
            </article>
            <div className="referenceTag"><DualReason reasonId="triangle.exteriorAngle" variant="textbook1" heading /></div>
          </div>
        </div>
      </section>

      <section className="lessonCard connectionCard">
        <LessonHeading
          number="5"
          label="CONNECTING ANGLE FACTS"
          title="The exterior-angle fact agrees with the straight-line fact"
        />

        <div className="connectionGrid">
          <article>
            <span className="connectionSymbol">180°</span>
            <h3>Exterior + adjacent interior</h3>
            <p>These two angles form a straight line and add up to 180°.</p>
            <div className="referenceTag"><DualReason reasonId="angles.straightLine" variant="textbook1" heading /></div>
          </article>
          <article>
            <span className="connectionSymbol">+</span>
            <h3>Two opposite interior angles</h3>
            <p>Their sum equals the exterior angle of the triangle.</p>
            <div className="referenceTag"><DualReason reasonId="triangle.exteriorAngle" variant="textbook1" heading /></div>
          </article>
        </div>
      </section>

      <section className="lessonCard methodCard">
        <LessonHeading
          number="6"
          label="SOLVING TRIANGLE-ANGLE PROBLEMS"
          title="Choose the shortest valid angle route"
        />

        <div className="methodGrid">
          <article>
            <span>1</span>
            <strong>Mark the unknown</strong>
            <p>Decide whether it is inside or outside the triangle.</p>
          </article>
          <article>
            <span>2</span>
            <strong>Select the angle fact</strong>
            <p>Use the triangle sum, exterior angle or straight-line fact.</p>
          </article>
          <article>
            <span>3</span>
            <strong>Write one clear equation</strong>
            <p>Include every required angle exactly once.</p>
          </article>
          <article>
            <span>4</span>
            <strong>Calculate and reference</strong>
            <p>Include the degree symbol and the textbook reference.</p>
          </article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Two essential triangle-angle facts</h2>

        <div className="summaryGrid">
          <article>
            <span>180°</span>
            <p>The three interior angles of a triangle add up to 180°.</p>
          </article>
          <article>
            <span>ext.</span>
            <p>An exterior angle equals the two opposite interior angles.</p>
          </article>
          <article>
            <span>∠</span>
            <p>An exterior angle and its adjacent interior angle total 180°.</p>
          </article>
          <article>
            <span>△</span>
            <p>Use the textbook reference that matches the angle relationship.</p>
          </article>
        </div>
      </section>

      <button
        type="button"
        className="finishButton"
        onClick={() => router.push("/maths/s1/chapter-9")}
      >
        Finish Section 3 →
      </button>
      </main>

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
          max-width: 810px;
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
        .workedLayout {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
          gap: 24px;
          align-items: stretch;
        }

        .triangleDiagram,
        .workedDiagram {
          width: 100%;
          min-height: 300px;
          border-radius: 20px;
          background: linear-gradient(145deg, #fff7ed, #f8fafc);
        }

        .triangleShape,
        .triangleOpen,
        .baseLine {
          fill: rgba(254, 226, 226, 0.38);
          stroke: #172033;
          stroke-width: 6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .triangleOpen { fill: none; }
        .baseLine { fill: none; }

        .angleArc {
          fill: none;
          stroke-width: 6;
          stroke-linecap: round;
        }

        .roseArc { stroke: #e11d48; }
        .blueArc { stroke: #2563eb; }
        .amberArc { stroke: #d97706; }
        .greenArc { stroke: #059669; }
        .angleText { font-size: 24px; font-weight: 900; }
        .degreeText { font-size: 21px; font-weight: 900; }
        .pointText { fill: #172033; font-size: 19px; font-weight: 900; }
        .roseText { fill: #be123c; }
        .blueText { fill: #1d4ed8; }
        .amberText { fill: #b45309; }
        .greenText { fill: #047857; }

        .factPanel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          padding: 24px;
          border-radius: 20px;
          background: #f8fafc;
        }

        .factLabel { margin: 0 0 10px; color: #047857; }
        .factPanel p { margin: 15px 0; color: #5c667a; line-height: 1.6; }

        .largeFormula {
          color: #1e3a8a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(31px, 5vw, 46px);
          font-weight: 800;
          text-align: center;
          white-space: nowrap;
        }

        .compactFormula { font-size: clamp(25px, 3.4vw, 38px); }

        .referenceTag {
          padding: 11px 13px;
          border-radius: 12px;
          background: #ecfdf5;
          color: #166534;
          font-weight: 900;
          line-height: 1.4;
          text-align: center;
        }

        .workedCard { border-color: #bae6fd; background: #fbfdff; }

        .workedSteps {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
        }

        .workedSteps article {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 5px 12px;
          padding: 15px;
          border-radius: 15px;
          background: #f8fafc;
        }

        .workedSteps article > span,
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

        .workedSteps p,
        .workedSteps strong { margin: 0; }
        .workedSteps p { color: #5c667a; }

        .keyNote {
          display: flex;
          gap: 10px 18px;
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 15px;
          background: #fff7ed;
          color: #9a3412;
        }

        .keyNote span { color: #7c2d12; }
        .connectionCard { border-color: #a7f3d0; background: #fbfffd; }

        .connectionGrid,
        .methodGrid,
        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .connectionGrid article,
        .methodGrid article,
        .summaryGrid article {
          padding: 20px;
          border-radius: 18px;
          background: #f8fafc;
        }

        .connectionSymbol {
          display: grid;
          place-items: center;
          width: 64px;
          height: 54px;
          border-radius: 16px;
          background: #dcfce7;
          color: #166534;
          font-size: 22px;
          font-weight: 900;
        }

        .connectionGrid h3 { margin: 14px 0 8px; font-size: 19px; }
        .connectionGrid p,
        .methodGrid p,
        .summaryGrid p { margin: 0; color: #5c667a; line-height: 1.55; }
        .connectionGrid .referenceTag { margin-top: 14px; }
        .methodCard { border-color: #bef264; background: #fcfff7; }
        .methodGrid article { display: grid; grid-template-columns: 42px 1fr; gap: 5px 12px; }

        .summaryCard {
          border: none;
          background: linear-gradient(135deg, #172033, #243552);
          color: #fff;
        }

        .summaryLabel { margin: 0 0 7px; color: #86efac; }
        .summaryGrid { margin-top: 22px; }
        .summaryGrid article { display: flex; align-items: center; gap: 14px; background: rgba(255,255,255,0.09); }
        .summaryGrid article > span { color: #86efac; font-size: 27px; font-weight: 900; }
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
          .workedLayout { grid-template-columns: 1fr; }
          .keyNote { flex-direction: column; }
        }

        @media (max-width: 620px) {
          .page { width: calc(100% - 28px); margin-top: 28px; }
          .lessonCard,
          .summaryCard { padding: 20px; border-radius: 20px; }
          .lessonHeading { align-items: center; }
          .lessonNumber { width: 42px; height: 42px; }
          .connectionGrid,
          .methodGrid,
          .summaryGrid { grid-template-columns: 1fr; }
          .triangleDiagram,
          .workedDiagram { min-height: 245px; }
          .compactFormula { font-size: 24px; }
        }
      `}</style>
    </>
  );
}
