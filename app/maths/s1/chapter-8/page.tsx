"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Introduction to Rectangular Coordinate System",
    description:
      "Read and plot ordered pairs, identify the origin and axes, and describe the position of a point in the four quadrants.",
    route:
      "/maths/s1/chapter-8/introduction-to-rectangular-coordinate-system",
    available: true,
  },
  {
    number: 2,
    title: "Distance between Two Points",
    description:
      "Find horizontal and vertical distances by comparing the coordinates of two points on the same grid line.",
    route: "/maths/s1/chapter-8/distance-between-two-points",
    available: true,
  },
  {
    number: 3,
    title: "Areas of Polygons",
    description:
      "Use coordinate differences to find side lengths, then calculate polygon areas by splitting or filling.",
    route: "/maths/s1/chapter-8/areas-of-polygons",
    available: true,
  },
  {
    number: 4,
    title: "Transformations of Points",
    description:
      "Describe translations, reflections and rotations, and determine the coordinates of image points.",
    route: "/maths/s1/chapter-8/transformations-of-points",
    available: true,
  },
];

export default function S1ChapterEightPage() {
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
      <h1>Chapter 8 · Rectangular Coordinate System (I)</h1>

      <p className="introduction">
        Locate points on a coordinate plane, measure horizontal and vertical
        distances, calculate polygon areas and transform points accurately.
      </p>

      <section className="overviewCard">
        <div className="overviewIcon">(x, y)</div>

        <div>
          <p className="overviewLabel">CHAPTER OVERVIEW</p>
          <h2>Connect positions, distances and transformations</h2>
          <p>
            Use ordered pairs to describe exact locations, compare coordinates
            to measure lengths and follow coordinate rules to move points.
          </p>
        </div>
      </section>

      <section className="coordinateCard">
        <div className="coordinateHeading">
          <p>COORDINATE PREVIEW</p>
          <strong>Read the horizontal coordinate before the vertical coordinate</strong>
        </div>

        <div className="coordinateExpression">P(x, y)</div>

        <div className="coordinateExample">
          <span>P(−3, 4)</span>
          <p>
            From the origin, move 3 units to the left and then 4 units upwards.
          </p>
        </div>
      </section>

      <section className="keyIdeasStrip">
        <article>
          <span>(x, y)</span>
          <strong>Ordered coordinates</strong>
          <p>Read the x-coordinate first and the y-coordinate second</p>
        </article>
        <article>
          <span>|x₂ − x₁|</span>
          <strong>Horizontal distance</strong>
          <p>Subtract x-coordinates when the y-coordinates are equal</p>
        </article>
        <article>
          <span>|y₂ − y₁|</span>
          <strong>Vertical distance</strong>
          <p>Subtract y-coordinates when the x-coordinates are equal</p>
        </article>
        <article>
          <span>(x, y) → (x + a, y + b)</span>
          <strong>Translation</strong>
          <p>Add the horizontal and vertical movements to the coordinates</p>
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
          <p className="rulesPreviewLabel">TRANSFORMATION PREVIEW</p>
          <h2>Track how each coordinate changes</h2>
          <p>
            A coordinate rule gives the exact image of every point after a
            translation, reflection or rotation.
          </p>
        </div>

        <div className="rulesGrid">
          <span>Right n: (x + n, y)</span>
          <span>Up n: (x, y + n)</span>
          <span>Reflect in y-axis: (−x, y)</span>
          <span>90° anticlockwise: (−y, x)</span>
        </div>
      </section>

      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">COORDINATE PRACTICE</p>
          <h2>Chapter 8 Flashcards</h2>
          <p>
            Practise coordinate vocabulary, distance rules, polygon areas and
            point transformations.
          </p>
        </div>

        <button
          type="button"
          className="openFlashcardsButton"
          onClick={() =>
            router.push("/maths/flashcards?level=s1&chapter=8")
          }
        >
          Open Flashcards →
        </button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 8 Checkpoint</h2>
          <p>Complete Sections 1–4 before attempting the checkpoint.</p>
        </div>

        <button
          type="button"
          className="startCheckpointButton"
          onClick={() => router.push("/maths/s1/chapter-8/checkpoint")}
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

        .rulesGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
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

          .openFlashcardsButton,
          .startCheckpointButton {
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
