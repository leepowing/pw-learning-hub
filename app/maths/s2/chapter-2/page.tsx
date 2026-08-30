"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Laws of Positive Integral Indices",
    description:
      "Understand index notation and apply the laws of multiplication, division and powers accurately.",
    route: "/maths/s2/chapter-2/laws-of-indices",
    available: true,
  },
  {
    number: 2,
    title: "Introduction to Polynomials",
    description:
      "Recognise monomials and polynomials, identify coefficients and constant terms, and determine degree.",
    route: "/maths/s2/chapter-2/introduction-to-polynomials",
    available: true,
  },
  {
    number: 3,
    title: "Operations of Polynomials",
    description:
      "Add, subtract and multiply polynomials by removing brackets, grouping like terms and simplifying.",
    route: "/maths/s2/chapter-2/operations-of-polynomials",
    available: true,
  },
  {
    number: 4,
    title: "Factorization of Polynomials",
    description:
      "Factorize polynomials by extracting common factors and using grouping where appropriate.",
    route: "/maths/s2/chapter-2/factorization-of-polynomials",
    available: true,
  },
];

export default function S2ChapterTwoHomepageWithFlashcards() {
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

      <h1>Chapter 2 · Operations and Factorization of Polynomials</h1>

      <p className="introduction">
        Build a secure understanding of positive integral indices and
        polynomials, then apply the correct operations and factorization
        methods.
      </p>

      <section className="overviewCard">
        <div className="overviewIcon">x²</div>

        <div>
          <p className="overviewLabel">CHAPTER OVERVIEW</p>
          <h2>From index laws to factorization</h2>
          <p>
            This chapter connects index notation, polynomial vocabulary,
            algebraic operations and the reverse process of factorization.
          </p>
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

      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">ALGEBRA PRACTICE</p>
          <h2>Chapter 2 Flashcards</h2>
          <p>
            Practise index laws, polynomial vocabulary, operations and
            factorization methods from Chapter 2.
          </p>
        </div>

        <button
          type="button"
          className="openFlashcardsButton"
          onClick={() =>
            router.push("/maths/flashcards?level=s2&chapter=2")
          }
        >
          Open Flashcards →
        </button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 2 Checkpoint</h2>
          <p>Complete Sections 1–4 before attempting the checkpoint.</p>
        </div>

        <button
          type="button"
          className="startCheckpointButton"
          onClick={() => router.push("/maths/s2/chapter-2/checkpoint")}
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
        .featureLabel {
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #ea580c;
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
          margin-bottom: 28px;
          padding: 25px 27px;
          border: 1px solid #fed7aa;
          border-radius: 22px;
          background: linear-gradient(135deg, #fff7ed, #fffbeb);
          box-shadow: 0 6px 18px rgba(234, 88, 12, 0.06);
        }

        .overviewIcon {
          width: 74px;
          height: 74px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 21px;
          background: #ffedd5;
          color: #c2410c;
          font-family: "Times New Roman", serif;
          font-size: 31px;
          font-weight: 900;
        }

        .overviewLabel {
          margin: 0 0 5px;
          color: #c2410c;
        }

        .overviewCard h2,
        .featureCard h2 {
          margin: 0 0 6px;
          font-size: 26px;
        }

        .overviewCard p:last-child,
        .featureCard p:last-child {
          margin: 0;
          color: #64748b;
          font-size: 17px;
          line-height: 1.55;
        }

        .sectionGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(100%, 430px), 1fr)
          );
          gap: 17px;
          margin-bottom: 28px;
        }

        .sectionCard {
          display: flex;
          flex-direction: column;
          min-height: 285px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          border-radius: 21px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.045);
          box-sizing: border-box;
        }

        .sectionTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .sectionNumber {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #ffedd5;
          color: #c2410c;
          font-size: 22px;
          font-weight: 900;
        }

        .sectionStatus {
          padding: 7px 11px;
          border-radius: 999px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 13px;
          font-weight: 900;
        }

        .availableStatus {
          background: #dcfce7;
          color: #166534;
        }

        .sectionCard h2 {
          margin: 0 0 10px;
          font-size: 23px;
          line-height: 1.3;
        }

        .sectionDescription {
          margin: 0 0 21px;
          color: #64748b;
          font-size: 16px;
          line-height: 1.55;
        }

        .startSectionButton,
        .disabledSectionButton {
          width: 100%;
          margin-top: auto;
          padding: 13px 17px;
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

        .startSectionButton:hover {
          background: #047857;
        }

        .disabledSectionButton {
          background: #e2e8f0;
          color: #64748b;
          cursor: not-allowed;
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
