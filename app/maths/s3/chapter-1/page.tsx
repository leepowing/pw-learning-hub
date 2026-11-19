"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Factorization Using Identities",
    description:
      "Factorize differences of two squares and perfect square trinomials, then use both identities to simplify expressions.",
    route: "/maths/s3/chapter-1/identities",
    available: true,
  },
  {
    number: 2,
    title: "Factorization Using the Cross-method",
    description:
      "Pair factors of the leading and constant terms to form the middle term.",
    route: "/maths/s3/chapter-1/cross-method",
    available: true,
  },
];

export default function S3ChapterOneHomepageComplete() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s3")}
      >
        ← Back to S3 Mathematics
      </button>

      <p className="eyebrow">S3 MATHEMATICS</p>

      <h1>Chapter 1 · More about Factorization</h1>

      <p className="introduction">
        Write polynomials as products using identities and the cross-method.
      </p>

      <section className="overviewCard">
        <div className="overviewIcon">×</div>

        <div>
          <p className="overviewLabel">CHAPTER OVERVIEW</p>
          <h2>From expanding brackets to finding factors</h2>
          <p>
            Expanding gives 9x² − 4 from (3x + 2)(3x − 2). Factorizing takes you back to those brackets.
          </p>
        </div>
      </section>

      <section className="keyIdeasCard">
        <p className="keyIdeasLabel">KEY IDEAS</p>

        <div className="keyIdeasGrid">
          <article>
            <span className="ideaNumber">1</span>
            <div>
              <strong>Extract common factors</strong>
              <p>
                Look for a number or variable shared by every term.
              </p>
            </div>
          </article>

          <article>
            <span className="ideaNumber">2</span>
            <div>
              <strong>Recognise square terms</strong>
              <p>
                Identify both squares before applying the difference of two squares identity.
              </p>
            </div>
          </article>

          <article>
            <span className="ideaNumber">3</span>
            <div>
              <strong>Check by expanding</strong>
              <p>
                Multiply the factors and compare each term with the original polynomial.
              </p>
            </div>
          </article>
        </div>
      </section>

      <details className="warmup"><summary>1.0 Pre-Learning</summary><p>Before using identities, recall how to extract a common factor and group terms.</p>
      <details><summary>Factorize 6x² + 9x.</summary><p>Both terms contain 3x. Dividing each term by 3x gives 3x(2x + 3).</p></details>
      <details><summary>Factorize ap + aq + bp + bq.</summary><p>Group the first two and last two terms. Then a(p + q) + b(p + q) = (a + b)(p + q).</p></details>
    </details>
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
          <h2>Factorization identities</h2>
          <p>
            Read each identity from left to right to factorize.
          </p>
        </div>

        <div className="formulaPreview">
          <span>a² − b² = (a + b)(a − b)</span>
          <span>a² + 2ab + b² = (a + b)²</span>
          <span>a² − 2ab + b² = (a − b)²</span>
        </div>
      </section>

      <p><a href="/maths/s3/chapter-1/cross-method#summary">Read the chapter summary →</a></p>
      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">ALGEBRA PRACTICE</p>
          <h2>Chapter 1 Flashcards</h2>
          <p>
            Recall identities and recognise factorization patterns.
          </p>
        </div>

        <a className="openFlashcardsButton" href="/maths/s3/chapter-1/flashcards">Open Flashcards →</a>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 1 Checkpoint</h2>
          <p>Complete Sections 1–2 before attempting the checkpoint.</p>
        </div>

        <button
          type="button"
          className="startCheckpointButton"
          onClick={() => router.push("/maths/s3/chapter-1/checkpoint")}
        >
          Start Checkpoint →
        </button>
      </section>

      <style jsx>{`
        .warmup { padding: 15px 22px; margin-bottom: 16px; border-radius: 16px; background: white; }
        details summary { cursor: pointer; font-weight: 700; }
        button:disabled { cursor: default; }
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
        .disabledCheckpointButton,
        .startCheckpointButton,
        .openFlashcardsButton {
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

        .startCheckpointButton {
          background: #7c3aed;
          color: #ffffff;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(124, 58, 237, 0.2);
        }

        .startCheckpointButton:hover {
          background: #6d28d9;
        }

        .openFlashcardsButton {
          background: #4f46e5;
          color: #ffffff;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(79, 70, 229, 0.2);
        }

        .openFlashcardsButton:hover {
          background: #4338ca;
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
          .disabledCheckpointButton,
          .startCheckpointButton,
          .openFlashcardsButton {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
