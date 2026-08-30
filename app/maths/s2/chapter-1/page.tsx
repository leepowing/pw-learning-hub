"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Significant Figures",
    description:
      "Identify significant figures and round numbers to a required number of significant figures.",
    route: "/maths/s2/chapter-1/significant-figures",
    available: false,
  },
  {
    number: 2,
    title: "Errors in Measurement",
    description:
      "Find maximum absolute error, limits of actual values, relative error and percentage error.",
    route: "/maths/s2/chapter-1/errors-in-measurement",
    available: false,
  },
];

export default function S2ChapterOneHomepage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s2")}
      >
        ← Back to S2 Mathematics
      </button>

      <p className="eyebrow">S2 MATHEMATICS</p>

      <h1>Chapter 1 · Approximation and Errors</h1>

      <p className="introduction">
        Develop accurate rounding skills and understand how measurement
        precision affects absolute, relative and percentage errors.
      </p>

      <section className="overviewCard">
        <div className="overviewIcon">≈</div>

        <div>
          <p className="overviewLabel">CHAPTER OVERVIEW</p>
          <h2>From significant figures to measurement limits</h2>
          <p>
            This chapter connects approximation, rounding and the possible
            range of actual values represented by a measurement.
          </p>
        </div>
      </section>

      <section className="keyIdeasCard">
        <p className="keyIdeasLabel">KEY IDEAS</p>

        <div className="keyIdeasGrid">
          <article>
            <span className="ideaNumber">1</span>
            <div>
              <strong>Round with purpose</strong>
              <p>
                Use the first significant figure and the next digit to round
                to the required accuracy.
              </p>
            </div>
          </article>

          <article>
            <span className="ideaNumber">2</span>
            <div>
              <strong>Measurements are approximate</strong>
              <p>
                A rounded measurement represents a range of possible actual
                values rather than one exact value.
              </p>
            </div>
          </article>

          <article>
            <span className="ideaNumber">3</span>
            <div>
              <strong>Compare errors fairly</strong>
              <p>
                Relative and percentage errors compare the maximum absolute
                error with the measured value.
              </p>
            </div>
          </article>
        </div>
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
              <button
                type="button"
                className="disabledSectionButton"
                disabled
              >
                Coming soon
              </button>
            )}
          </article>
        ))}
      </section>

      <section className="formulaPreviewCard">
        <div>
          <p className="formulaPreviewLabel">FORMULA PREVIEW</p>
          <h2>Error relationships</h2>
          <p>
            These formulas will be explained and applied in Section 2.
          </p>
        </div>

        <div className="formulaPreview">
          <span>Maximum absolute error = ½ × scale interval</span>
          <span>Relative error = maximum absolute error ÷ measured value</span>
          <span>Percentage error = relative error × 100%</span>
        </div>
      </section>

      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">NUMBER PRACTICE</p>
          <h2>Chapter 1 Flashcards</h2>
          <p>
            Practise significant-figure rules, measurement limits and error
            formulas from Chapter 1.
          </p>
        </div>

        <button type="button" className="disabledFeatureButton" disabled>
          Coming soon
        </button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 1 Checkpoint</h2>
          <p>Complete Sections 1–2 before attempting the checkpoint.</p>
        </div>

        <button type="button" className="disabledCheckpointButton" disabled>
          Coming soon
        </button>
      </section>

      <style jsx>{`
        .page {
          max-width: 1120px;
          width: calc(100% - 48px);
          margin: 46px auto 72px;
          box-sizing: border-box;
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
        .keyIdeasLabel,
        .featureLabel,
        .formulaPreviewLabel,
        .sectionLabel {
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #e11d48;
        }

        h1 {
          margin: 0 0 12px;
          font-size: clamp(36px, 5vw, 50px);
          line-height: 1.12;
        }

        .introduction {
          max-width: 900px;
          margin: 0 0 30px;
          color: #64748b;
          font-size: 19px;
          line-height: 1.65;
        }

        .overviewCard {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-bottom: 20px;
          padding: 25px 27px;
          border: 1px solid #fecdd3;
          border-radius: 22px;
          background: linear-gradient(135deg, #fff1f2, #fdf2f8);
          box-shadow: 0 6px 18px rgba(225, 29, 72, 0.06);
        }

        .overviewIcon {
          width: 74px;
          height: 74px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 21px;
          background: #ffe4e6;
          color: #be123c;
          font-family: "Times New Roman", serif;
          font-size: 43px;
          font-weight: 900;
        }

        .overviewLabel {
          margin: 0 0 5px;
          color: #be123c;
        }

        .overviewCard h2,
        .featureCard h2,
        .formulaPreviewCard h2 {
          margin: 0 0 6px;
          font-size: 25px;
        }

        .overviewCard p:last-child,
        .featureCard p:last-child,
        .formulaPreviewCard p:last-child {
          margin: 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.55;
        }

        .keyIdeasCard {
          margin-bottom: 28px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          background: #ffffff;
        }

        .keyIdeasLabel {
          margin: 0 0 16px;
          color: #475569;
        }

        .keyIdeasGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .keyIdeasGrid article {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 17px;
          border-radius: 16px;
          background: #f8fafc;
        }

        .ideaNumber {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 10px;
          background: #ffe4e6;
          color: #be123c;
          font-weight: 900;
        }

        .keyIdeasGrid strong {
          display: block;
          margin-bottom: 5px;
          font-size: 16px;
        }

        .keyIdeasGrid p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
        }

        .sectionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 17px;
          margin-bottom: 17px;
        }

        .sectionCard {
          display: flex;
          flex-direction: column;
          min-height: 270px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 5px 16px rgba(15, 23, 42, 0.04);
          box-sizing: border-box;
        }

        .sectionTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 16px;
        }

        .sectionNumber {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #fff1f2;
          color: #be123c;
          font-size: 23px;
          font-weight: 900;
        }

        .sectionStatus {
          padding: 7px 11px;
          border-radius: 999px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 13px;
          font-weight: 800;
        }

        .availableStatus {
          background: #dcfce7;
          color: #166534;
        }

        .sectionLabel {
          margin: 0 0 5px;
          color: #e11d48;
          font-size: 12px;
        }

        .sectionCard h2 {
          margin: 0 0 9px;
          font-size: 24px;
          line-height: 1.25;
        }

        .sectionDescription {
          flex: 1;
          margin: 0 0 22px;
          color: #64748b;
          font-size: 16px;
          line-height: 1.55;
        }

        .startSectionButton,
        .disabledSectionButton {
          width: 100%;
          padding: 14px 18px;
          border: none;
          border-radius: 13px;
          font-size: 16px;
          font-weight: 900;
        }

        .startSectionButton {
          background: #059669;
          color: #ffffff;
          cursor: pointer;
        }

        .disabledSectionButton {
          background: #e2e8f0;
          color: #64748b;
          cursor: not-allowed;
        }

        .formulaPreviewCard {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          align-items: center;
          gap: 24px;
          margin-bottom: 17px;
          padding: 27px;
          border: 1px solid #bae6fd;
          border-radius: 22px;
          background: linear-gradient(135deg, #f0f9ff, #ecfeff);
        }

        .formulaPreviewLabel {
          margin: 0 0 6px;
          color: #0369a1;
        }

        .formulaPreview {
          display: grid;
          gap: 9px;
        }

        .formulaPreview span {
          padding: 12px 14px;
          border: 1px solid #bae6fd;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.8);
          color: #0c4a6e;
          font-family: "Times New Roman", serif;
          font-size: 17px;
          font-weight: 700;
        }

        .featureCard {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 17px;
          padding: 27px;
          border-radius: 22px;
          box-sizing: border-box;
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

        .disabledFeatureButton,
        .disabledCheckpointButton {
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

        @media (max-width: 800px) {
          .keyIdeasGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .overviewCard,
          .featureCard {
            align-items: flex-start;
            flex-direction: column;
          }

          .sectionGrid,
          .formulaPreviewCard {
            grid-template-columns: 1fr;
          }

          .disabledFeatureButton,
          .disabledCheckpointButton {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
