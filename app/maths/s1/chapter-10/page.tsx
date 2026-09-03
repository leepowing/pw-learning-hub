"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Concept of Congruent Triangles",
    description:
      "Identify corresponding vertices, angles and sides, and write congruent triangles in the correct order.",
    route: "/maths/s1/chapter-10/concept-of-congruent-triangles",
    available: true,
  },
  {
    number: 2,
    title: "Conditions for Triangles to be Congruent",
    description:
      "Use SSS, SAS, ASA, AAS and RHS to determine whether two triangles must be congruent.",
    route: "/maths/s1/chapter-10/conditions-for-triangles-to-be-congruent",
    available: true,
  },
  {
    number: 3,
    title: "Concept of Similar Triangles",
    description:
      "Match corresponding angles and compare corresponding sides using a common scale factor.",
    route: "/maths/s1/chapter-10/concept-of-similar-triangles",
    available: true,
  },
  {
    number: 4,
    title: "Conditions for Triangles to be Similar",
    description:
      "Apply the angle and side conditions that are sufficient to prove two triangles are similar.",
    route: "/maths/s1/chapter-10/conditions-for-triangles-to-be-similar",
    available: true,
  },
];

const congruenceConditions = ["SSS", "SAS", "ASA", "AAS", "RHS"];

const similarityConditions = [
  "AAA",
  "Three corresponding sides are proportional",
  "Two corresponding sides are proportional and the included angles are equal",
];

export default function S1ChapterTenPage() {
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
      <h1>Chapter 10 · Congruence and Similarity (I)</h1>

      <p className="introduction">
        Compare triangles carefully, match their corresponding parts and use the
        correct geometric conditions to prove congruence or similarity.
      </p>

      <section className="overviewCard">
        <div className="overviewIcon">≅ ∼</div>

        <div>
          <p className="overviewLabel">CHAPTER OVERVIEW</p>
          <h2>Same shape does not always mean same size</h2>
          <p>
            Congruent triangles have the same shape and size. Similar triangles
            have the same shape, but their sizes may be different.
          </p>
        </div>
      </section>

      <section className="comparisonCard">
        <article className="conceptPanel congruentPanel">
          <div className="conceptHeading">
            <span>≅</span>
            <div>
              <p>CONGRUENT TRIANGLES</p>
              <h2>Same shape and same size</h2>
            </div>
          </div>

          <div className="triangleStage congruentStage" aria-hidden="true">
            <svg viewBox="0 0 420 150" role="img">
              <polygon points="38,124 104,24 174,124" />
              <polygon points="246,124 312,24 382,124" />
              <line x1="57" y1="95" x2="69" y2="103" />
              <line x1="265" y1="95" x2="277" y2="103" />
              <line x1="137" y1="83" x2="151" y2="77" />
              <line x1="345" y1="83" x2="359" y2="77" />
              <text x="104" y="17" textAnchor="middle">A</text>
              <text x="28" y="143" textAnchor="middle">B</text>
              <text x="184" y="143" textAnchor="middle">C</text>
              <text x="312" y="17" textAnchor="middle">X</text>
              <text x="236" y="143" textAnchor="middle">Y</text>
              <text x="392" y="143" textAnchor="middle">Z</text>
            </svg>
          </div>

          <p className="conceptStatement">
            Corresponding angles are equal and corresponding sides are equal.
          </p>
          <strong>△ABC ≅ △XYZ</strong>
        </article>

        <article className="conceptPanel similarPanel">
          <div className="conceptHeading">
            <span>∼</span>
            <div>
              <p>SIMILAR TRIANGLES</p>
              <h2>Same shape; size may differ</h2>
            </div>
          </div>

          <div className="triangleStage similarStage" aria-hidden="true">
            <svg viewBox="0 -14 420 164" role="img">
              <polygon points="35,124 93,42 151,124" />
              <polygon points="218,124 300,8 388,124" />
              <text x="93" y="34" textAnchor="middle">A</text>
              <text x="25" y="143" textAnchor="middle">B</text>
              <text x="161" y="143" textAnchor="middle">C</text>
              <text x="300" y="-1" textAnchor="middle">X</text>
              <text x="208" y="143" textAnchor="middle">Y</text>
              <text x="398" y="143" textAnchor="middle">Z</text>
            </svg>
          </div>

          <p className="conceptStatement">
            Corresponding angles are equal and corresponding sides are
            proportional.
          </p>
          <strong>△ABC ∼ △XYZ</strong>
        </article>
      </section>

      <section className="keyIdeasStrip">
        <article>
          <span>Order matters</span>
          <strong>Corresponding vertices</strong>
          <p>△ABC ≅ △XYZ means A ↔ X, B ↔ Y and C ↔ Z.</p>
        </article>
        <article>
          <span>1 : 1</span>
          <strong>Congruent sides</strong>
          <p>Every pair of corresponding sides has equal length.</p>
        </article>
        <article>
          <span>k : 1</span>
          <strong>Similar sides</strong>
          <p>All corresponding side pairs share the same scale factor.</p>
        </article>
        <article>
          <span>Equal angles</span>
          <strong>Both relationships</strong>
          <p>Corresponding angles are equal in congruent and similar triangles.</p>
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

      <section className="rulesPreviewCard congruencePreviewCard">
        <div>
          <p className="rulesPreviewLabel">CONGRUENCE PREVIEW</p>
          <h2>Five conditions can prove triangles congruent</h2>
          <p>
            Use only the information marked or stated in the diagram. Match the
            correct sides and angles before choosing a condition.
          </p>
        </div>

        <div className="rulesGrid congruenceRulesGrid">
          {congruenceConditions.map((condition) => (
            <span key={condition}>
              {condition}
              <small>[Reference: {condition}]</small>
            </span>
          ))}
        </div>
      </section>

      <section className="rulesPreviewCard similarityPreviewCard">
        <div>
          <p className="rulesPreviewLabel similarityPreviewLabel">
            SIMILARITY PREVIEW
          </p>
          <h2>Use equal angles or proportional sides</h2>
          <p>
            Similarity is proved by the angle relationship, the side ratios or a
            suitable combination of sides and the included angle.
          </p>
        </div>

        <div className="rulesGrid similarityRulesGrid">
          {similarityConditions.map((condition, index) => (
            <span key={condition}>
              {condition}
              <small>
                [Reference: {index === 0 ? "AAA" : index === 1 ? "3 sides proportional" : "ratio of 2 sides, inc. ∠"}]
              </small>
            </span>
          ))}
        </div>
      </section>

      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">TRIANGLE PRACTICE</p>
          <h2>Chapter 10 Flashcards</h2>
          <p>
            Practise correspondence, notation, congruence conditions, scale
            factors and similarity conditions.
          </p>
        </div>

        <button
          type="button"
          className="flashcardButton"
          onClick={() => router.push("/maths/flashcards?level=s1&chapter=10")}
        >
          Start Flashcards →
        </button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 10 Checkpoint</h2>
          <p>Complete Sections 1–4 before attempting the checkpoint.</p>
        </div>

        <button
          type="button"
          className="checkpointButton"
          onClick={() => router.push("/maths/s1/chapter-10/checkpoint")}
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
          color: #0f766e;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .eyebrow,
        .overviewLabel,
        .conceptHeading p,
        .sectionLabel,
        .rulesPreviewLabel,
        .featureLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #0f766e;
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

        .overviewCard {
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 27px;
          border: 1px solid #99f6e4;
          border-radius: 23px;
          background: linear-gradient(135deg, #f0fdfa, #ecfeff);
          box-shadow: 0 8px 24px rgba(13, 148, 136, 0.08);
        }

        .overviewIcon {
          width: 92px;
          height: 76px;
          flex: 0 0 92px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          background: #ccfbf1;
          color: #0f766e;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          font-weight: 900;
        }

        .overviewLabel {
          margin: 0 0 6px;
          color: #0f766e;
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

        .comparisonCard {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 18px;
        }

        .conceptPanel {
          padding: 24px;
          border-radius: 22px;
        }

        .congruentPanel {
          border: 1px solid #bae6fd;
          background: #f0f9ff;
        }

        .similarPanel {
          border: 1px solid #ddd6fe;
          background: #faf5ff;
        }

        .conceptHeading {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .conceptHeading > span {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: white;
          color: #0f766e;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
          font-weight: 900;
        }

        .conceptHeading p {
          margin: 0 0 4px;
          color: #0f766e;
        }

        .conceptHeading h2 {
          margin: 0;
          font-size: 22px;
        }

        .triangleStage {
          margin: 18px 0;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.84);
        }

        .triangleStage svg {
          display: block;
          width: 100%;
          height: 150px;
        }

        .triangleStage polygon {
          fill: rgba(20, 184, 166, 0.12);
          stroke: #0f766e;
          stroke-width: 4;
          stroke-linejoin: round;
        }

        .similarStage polygon:first-child {
          fill: rgba(139, 92, 246, 0.1);
          stroke: #7c3aed;
        }

        .similarStage polygon:last-child {
          fill: rgba(139, 92, 246, 0.16);
          stroke: #7c3aed;
        }

        .triangleStage line {
          stroke: #0369a1;
          stroke-width: 4;
          stroke-linecap: round;
        }

        .triangleStage text {
          fill: #0f766e;
          font-size: 15px;
          font-weight: 800;
        }

        .similarStage text {
          fill: #7c3aed;
        }

        .conceptStatement {
          min-height: 48px;
          margin: 0 0 9px;
          color: #64748b;
          line-height: 1.5;
        }

        .conceptPanel > strong {
          color: #0f766e;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
        }

        .similarPanel > strong {
          color: #6d28d9;
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
          min-height: 48px;
          margin-bottom: 8px;
          color: #0f766e;
          font-size: 20px;
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
          background: #ccfbf1;
          color: #0f766e;
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
          color: #0f766e;
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
          background: #0d9488;
          color: white;
          cursor: pointer;
        }

        .startSectionButton:hover {
          background: #0f766e;
        }

        .disabledSectionButton {
          background: #e2e8f0;
          color: #94a3b8;
          cursor: not-allowed;
        }

        .rulesPreviewCard {
          display: grid;
          grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
          gap: 22px;
          margin-top: 18px;
          padding: 27px;
          border-radius: 22px;
        }

        .congruencePreviewCard {
          border: 1px solid #bae6fd;
          background: #f7fcff;
        }

        .similarityPreviewCard {
          border: 1px solid #ddd6fe;
          background: #fcfaff;
        }

        .rulesPreviewLabel {
          margin: 0 0 6px;
          color: #0369a1;
        }

        .similarityPreviewLabel {
          color: #6d28d9;
        }

        .rulesGrid {
          display: grid;
          gap: 10px;
        }

        .congruenceRulesGrid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .similarityRulesGrid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .rulesGrid span {
          display: grid;
          place-items: center;
          min-height: 68px;
          padding: 10px;
          border-radius: 13px;
          background: white;
          color: #075985;
          font-weight: 900;
          text-align: center;
        }

        .similarityRulesGrid span {
          color: #5b21b6;
        }

        .rulesGrid small {
          display: block;
          margin-top: 5px;
          color: #64748b;
          font-size: 11px;
          line-height: 1.3;
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

        .flashcardButton {
          flex-shrink: 0;
          padding: 13px 20px;
          border: none;
          border-radius: 14px;
          background: #4f46e5;
          color: white;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .flashcardButton:hover {
          background: #4338ca;
          transform: translateY(-1px);
        }

        .checkpointButton {
          flex-shrink: 0;
          padding: 13px 20px;
          border: none;
          border-radius: 14px;
          background: #7c3aed;
          color: white;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .checkpointButton:hover {
          background: #6d28d9;
          transform: translateY(-1px);
        }

        @media (max-width: 950px) {
          .congruenceRulesGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 850px) {
          .sectionGrid,
          .comparisonCard {
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

          .rulesPreviewCard,
          .congruenceRulesGrid,
          .similarityRulesGrid {
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
