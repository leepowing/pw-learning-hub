"use client";

// Chapter 9 homepage: Flashcards button enabled.

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Angles Relating to Intersecting Lines",
    description:
      "Use angle facts for straight lines, vertically opposite angles and angles at a point to find unknown angles.",
    route: "/maths/s1/chapter-9/angles-relating-to-intersecting-lines",
    available: true,
  },
  {
    number: 2,
    title: "Angles Relating to Parallel Lines",
    description:
      "Recognise corresponding, alternate and interior angles, and apply these relationships when lines are parallel.",
    route: "/maths/s1/chapter-9/angles-relating-to-parallel-lines",
    available: true,
  },
  {
    number: 3,
    title: "Angles of a Triangle",
    description:
      "Use the interior-angle sum and exterior-angle property of a triangle to solve angle problems.",
    route: "/maths/s1/chapter-9/angles-of-a-triangle",
    available: true,
  },
];

export default function S1ChapterNinePage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1")}
      >
        ← Back to S1 Mathematics
      </button>

      <p className="eyebrow">S1 MATHEMATICS</p>
      <h1>Chapter 9 · Angles and Parallel Lines (I)</h1>

      <p className="introduction">
        Study angle relationships formed by intersecting and parallel lines, then
        apply these facts to the interior and exterior angles of triangles.
      </p>

      <section className="overviewCard">
        <div className="overviewIcon">∠</div>

        <div>
          <p className="overviewLabel">CHAPTER OVERVIEW</p>
          <h2>Connect angle facts and geometric reasoning</h2>
          <p>
            Identify the geometric reason behind each angle relationship and use
            clear working to calculate unknown angles.
          </p>
        </div>
      </section>

      <section className="coordinateCard">
        <div className="coordinateHeading">
          <p>ANGLE PREVIEW</p>
          <strong>State the angle fact used at every step</strong>
        </div>

        <div className="coordinateExpression">a + b = 180°</div>

        <div className="coordinateExample">
          <span>Angles on a straight line</span>
          <p>
            Adjacent angles forming a straight line have a total of 180°.
          </p>
        </div>
      </section>

      <section className="keyIdeasStrip">
        <article>
          <span>a + b = 180°</span>
          <strong>Straight line</strong>
          <p>Adjacent angles on a straight line are supplementary</p>
        </article>
        <article>
          <span>a = b</span>
          <strong>Vertically opposite</strong>
          <p>Vertically opposite angles are equal</p>
        </article>
        <article>
          <span>a + b = 360°</span>
          <strong>Angles at a point</strong>
          <p>Angles around a point add up to 360°</p>
        </article>
        <article>
          <span>a + b + c = 180°</span>
          <strong>Triangle</strong>
          <p>The interior angles of a triangle add up to 180°</p>
        </article>
      </section>

      <section className="sectionGrid">
        {sections.map((section) => (
          <article key={section.number} className="sectionCard">
            <div className="sectionTop">
              <span className="sectionNumber">{section.number}</span>
              <span
                className={
                  section.available
                    ? "sectionStatus availableStatus"
                    : "sectionStatus"
                }
              >
                {section.available ? "Available" : "Coming soon"}
              </span>
            </div>

            <p className="sectionLabel">SECTION {section.number}</p>
            <h2>{section.title}</h2>
            <p className="sectionDescription">{section.description}</p>

            {section.available ? (
              <button
                type="button"
                className="startSectionButton"
                onClick={() => router.push(section.route)}
              >
                Start Section {section.number} →
              </button>
            ) : (
              <button type="button" className="disabledSectionButton" disabled>
                Coming soon
              </button>
            )}
          </article>
        ))}
      </section>

      <section className="rulesPreviewCard">
        <div>
          <p className="rulesPreviewLabel">PARALLEL-LINE PREVIEW</p>
          <h2>Recall the three key parallel-line relationships</h2>
          <p>
            When a transversal crosses parallel lines, corresponding and alternate
            angles are equal, while same-side interior angles are supplementary.
          </p>
        </div>

        <div className="rulesGrid">
          <span>Corresponding angles are equal</span>
          <span>Alternate angles are equal</span>
          <span>Same-side interior angles total 180°</span>
        </div>
      </section>

      <section className="rulesPreviewCard trianglePreviewCard">
        <div>
          <p className="rulesPreviewLabel trianglePreviewLabel">
            TRIANGLE-ANGLE PREVIEW
          </p>
          <h2>Recall the two essential triangle-angle facts</h2>
          <p>
            The interior angles of a triangle total 180°, and an exterior angle
            equals the sum of the two opposite interior angles.
          </p>
        </div>

        <div className="rulesGrid triangleRulesGrid">
          <span>Interior angles of a triangle total 180°</span>
          <span>Exterior angle = two opposite interior angles</span>
        </div>
      </section>

      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">ANGLE PRACTICE</p>
          <h2>Chapter 9 Flashcards</h2>
          <p>
            Practise angle notation, intersecting-line facts, parallel-line
            relationships and triangle angle properties.
          </p>
        </div>

        <button
          type="button"
          className="openFlashcardsButton"
          onClick={() =>
            router.push("/maths/flashcards?level=s1&chapter=9")
          }
        >
          Open Flashcards →
        </button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 9 Checkpoint</h2>
          <p>Complete Sections 1–3 before attempting the checkpoint.</p>
        </div>

        <button
          type="button"
          className="startCheckpointButton"
          onClick={() => router.push("/maths/s1/chapter-9/checkpoint")}
        >
          Start Checkpoint →
        </button>
      </section>

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
        .overviewLabel,
        .coordinateHeading p,
        .sectionLabel,
        .rulesPreviewLabel,
        .featureLabel {
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
          max-width: 820px;
          margin: 17px 0 30px;
          color: #5c667a;
          font-size: 19px;
          line-height: 1.6;
        }

        .overviewCard {
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 27px;
          border: 1px solid #fed7aa;
          border-radius: 23px;
          background: linear-gradient(135deg, #fff7ed, #fffbeb);
          box-shadow: 0 8px 24px rgba(194, 65, 12, 0.07);
        }

        .overviewIcon {
          width: 76px;
          height: 76px;
          flex: 0 0 76px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          background: #ffedd5;
          color: #c2410c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-weight: 900;
        }

        .overviewLabel {
          margin: 0 0 6px;
          color: #c2410c;
        }

        .overviewCard h2,
        .rulesPreviewCard h2,
        .featureCard h2 {
          margin: 0 0 7px;
          font-size: 25px;
        }

        .overviewCard p:last-child,
        .rulesPreviewCard > div > p:last-child,
        .featureCard div > p:last-child {
          margin: 0;
          color: #64748b;
          line-height: 1.5;
        }

        .coordinateCard {
          margin-top: 18px;
          padding: 24px;
          border: 1px solid #bfdbfe;
          border-radius: 22px;
          background: #f8fbff;
        }

        .coordinateHeading {
          display: flex;
          justify-content: space-between;
          gap: 18px;
        }

        .coordinateHeading p {
          margin: 0;
          color: #1d4ed8;
        }

        .coordinateExpression {
          margin: 28px 0 20px;
          padding: 22px;
          border-radius: 16px;
          background: white;
          color: #3f6212;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 800;
          text-align: center;
        }

        .coordinateExample {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 14px;
          border-radius: 14px;
          background: white;
        }

        .coordinateExample span {
          color: #1e3a8a;
          font-size: 18px;
          font-weight: 900;
        }

        .coordinateExample p {
          margin: 0;
          color: #64748b;
        }

        .keyIdeasStrip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .keyIdeasStrip article {
          padding: 18px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: white;
        }

        .keyIdeasStrip article > span {
          display: block;
          min-height: 56px;
          margin-bottom: 8px;
          color: #c2410c;
          font-size: 21px;
          font-weight: 900;
        }

        .keyIdeasStrip strong,
        .keyIdeasStrip p {
          display: block;
        }

        .keyIdeasStrip p {
          margin: 5px 0 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.4;
        }

        .sectionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .sectionCard {
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid #e2e8f0;
          border-radius: 21px;
          background: white;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.045);
        }

        .sectionTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .sectionNumber {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: #fff7ed;
          color: #c2410c;
          font-size: 21px;
          font-weight: 900;
        }

        .sectionStatus {
          padding: 7px 10px;
          border-radius: 999px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 12px;
          font-weight: 900;
        }

        .availableStatus {
          background: #d1fae5;
          color: #047857;
        }

        .sectionLabel {
          margin: 20px 0 7px;
          color: #c2410c;
        }

        .sectionCard h2 {
          margin: 0;
          font-size: 22px;
          line-height: 1.3;
        }

        .sectionDescription {
          flex: 1;
          margin: 12px 0 20px;
          color: #64748b;
          line-height: 1.55;
        }

        .startSectionButton,
        .disabledSectionButton {
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: 13px;
          font-size: 15px;
          font-weight: 900;
        }

        .startSectionButton {
          background: #059669;
          color: white;
          cursor: pointer;
        }

        .disabledSectionButton {
          background: #e2e8f0;
          color: #94a3b8;
          cursor: not-allowed;
        }

        .rulesPreviewCard {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 22px;
          margin-top: 18px;
          padding: 27px;
          border: 1px solid #c7d2fe;
          border-radius: 22px;
          background: #fafaff;
        }

        .rulesPreviewLabel {
          margin: 0 0 6px;
          color: #4f46e5;
        }

        .trianglePreviewCard {
          border-color: #fed7aa;
          background: #fffaf5;
        }

        .trianglePreviewLabel {
          color: #c2410c;
        }

        .rulesGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .rulesGrid span {
          display: grid;
          place-items: center;
          min-height: 52px;
          padding: 10px;
          border-radius: 13px;
          background: white;
          color: #312e81;
          font-weight: 900;
          text-align: center;
        }

        .triangleRulesGrid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .triangleRulesGrid span {
          color: #9a3412;
        }

        .featureCard {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 17px;
          padding: 27px;
          border-radius: 22px;
        }

        .flashcardCard {
          border: 1px solid #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #f5f3ff);
        }

        .checkpointCard {
          border: 1px solid #fde68a;
          background: linear-gradient(135deg, #fffbeb, #fff7ed);
        }

        .featureLabel {
          margin: 0 0 6px;
        }

        .flashcardLabel {
          color: #4f46e5;
        }

        .checkpointLabel {
          color: #b45309;
        }

        .openFlashcardsButton,
        .startCheckpointButton {
          flex-shrink: 0;
          padding: 13px 20px;
          border: none;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 900;
        }

        .openFlashcardsButton {
          background: #6d28d9;
          color: #ffffff;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .openFlashcardsButton:hover {
          background: #5b21b6;
          transform: translateY(-1px);
        }

        .startCheckpointButton {
          background: #7c3aed;
          color: white;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .startCheckpointButton:hover {
          background: #6d28d9;
          transform: translateY(-1px);
        }

        .disabledFeatureButton {
          flex-shrink: 0;
          padding: 13px 20px;
          border: none;
          border-radius: 14px;
          background: #cbd5e1;
          color: #64748b;
          font-size: 16px;
          font-weight: 900;
          cursor: not-allowed;
        }

        @media (max-width: 850px) {
          .sectionGrid {
            grid-template-columns: 1fr;
          }

          .keyIdeasStrip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .overviewCard {
            align-items: flex-start;
          }

          .coordinateHeading,
          .coordinateExample {
            align-items: flex-start;
            flex-direction: column;
          }

          .rulesPreviewCard,
          .rulesGrid {
            grid-template-columns: 1fr;
          }

          .featureCard {
            align-items: flex-start;
            flex-direction: column;
          }

          .disabledFeatureButton {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .overviewCard {
            flex-direction: column;
          }

          .keyIdeasStrip {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
