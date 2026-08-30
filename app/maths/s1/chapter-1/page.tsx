"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Review on Types of Numbers",
    description:
      "Review natural numbers, whole numbers, integers, fractions, decimals and number relationships.",
    route: "/maths/s1/chapter-1/types-of-numbers",
    available: true,
  },
  {
    number: 2,
    title: "The Four Basic Arithmetic Operations",
    description:
      "Use addition, subtraction, multiplication and division with the correct order of operations.",
    route: "/maths/s1/chapter-1/basic-arithmetic-operations",
    available: true,
  },
  {
    number: 3,
    title: "Divisibility",
    description:
      "Apply divisibility tests for 2, 3, 4, 5, 6, 8, 9 and 10 efficiently.",
    route: "/maths/s1/chapter-1/divisibility",
    available: true,
  },
  {
    number: 4,
    title: "Highest Common Factor and Lowest Common Multiple",
    description:
      "Find the H.C.F. and L.C.M. using prime factorization and short division.",
    route: "/maths/s1/chapter-1/hcf-and-lcm",
    available: true,
  },
  {
    number: 5,
    title: "Operations of Fractions and Decimals",
    description:
      "Calculate accurately with fractions, mixed numbers and decimals using the correct operation order.",
    route: "/maths/s1/chapter-1/fractions-and-decimals",
    available: true,
  },
];

export default function S1ChapterOneHomepageAllSectionsEnabled() {
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
      <h1>Chapter 1 · Basic Computation</h1>

      <p className="introduction">
        Strengthen essential number skills, operation rules, divisibility,
        common factors and accurate calculations with fractions and decimals.
      </p>

      <section className="overviewCard">
        <div className="overviewIcon">＋</div>

        <div>
          <p className="overviewLabel">CHAPTER OVERVIEW</p>
          <h2>Build a secure foundation for mathematics</h2>
          <p>
            This chapter reviews number types and connects arithmetic rules
            with divisibility, factors, multiples, fractions and decimals.
          </p>
        </div>
      </section>

      <section className="conceptStrip">
        <article>
          <span>＋ − × ÷</span>
          <strong>Arithmetic operations</strong>
        </article>
        <article>
          <span>2 · 3 · 5</span>
          <strong>Divisibility tests</strong>
        </article>
        <article>
          <span>H.C.F.</span>
          <strong>Common factors</strong>
        </article>
        <article>
          <span>L.C.M.</span>
          <strong>Common multiples</strong>
        </article>
        <article>
          <span>¾ · 0.75</span>
          <strong>Fractions and decimals</strong>
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

      <section className="rulesPreviewCard">
        <div>
          <p className="rulesLabel">QUICK PREVIEW</p>
          <h2>Core rules from this chapter</h2>
          <p>
            These ideas will be explained with worked examples in the five
            sections.
          </p>
        </div>

        <div className="rulesGrid">
          <span>Brackets before multiplication and division</span>
          <span>H.C.F. uses shared prime factors</span>
          <span>L.C.M. contains every required prime factor</span>
          <span>Fractions need a common denominator for + and −</span>
        </div>
      </section>

      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">NUMBER PRACTICE</p>
          <h2>Chapter 1 Flashcards</h2>
          <p>
            Practise operation vocabulary, divisibility rules, H.C.F., L.C.M.
            and fraction methods from Chapter 1.
          </p>
        </div>

        <button
          type="button"
          className="openFlashcardsButton"
          onClick={() =>
            router.push("/maths/flashcards?level=s1&chapter=1")
          }
        >
          Open Flashcards →
        </button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 1 Checkpoint</h2>
          <p>Complete Sections 1–5 before attempting the checkpoint.</p>
        </div>

        <button
          type="button"
          className="checkpointButton"
          onClick={() => router.push("/maths/s1/chapter-1/checkpoint")}
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
        .sectionLabel,
        .rulesLabel,
        .featureLabel {
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
          margin-bottom: 17px;
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
          font-size: 38px;
          font-weight: 900;
        }

        .overviewLabel {
          margin: 0 0 5px;
          color: #be123c;
        }

        .overviewCard h2,
        .rulesPreviewCard h2,
        .featureCard h2 {
          margin: 0 0 6px;
          font-size: 25px;
        }

        .overviewCard p:last-child,
        .rulesPreviewCard p:last-child,
        .featureCard p:last-child {
          margin: 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.55;
        }

        .conceptStrip {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 28px;
        }

        .conceptStrip article {
          padding: 15px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          background: #ffffff;
          text-align: center;
        }

        .conceptStrip span,
        .conceptStrip strong {
          display: block;
        }

        .conceptStrip span {
          min-height: 27px;
          margin-bottom: 6px;
          color: #be123c;
          font-family: "Times New Roman", serif;
          font-size: 20px;
          font-weight: 900;
        }

        .conceptStrip strong {
          color: #475569;
          font-size: 13px;
          line-height: 1.35;
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
          min-height: 285px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 5px 16px rgba(15, 23, 42, 0.04);
          box-sizing: border-box;
        }

        .sectionCard:last-child {
          grid-column: 1 / -1;
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

        .rulesPreviewCard {
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

        .rulesLabel {
          margin: 0 0 6px;
          color: #0369a1;
        }

        .rulesGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }

        .rulesGrid span {
          padding: 12px 14px;
          border: 1px solid #bae6fd;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.82);
          color: #0c4a6e;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
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

        .openFlashcardsButton,
        .checkpointButton {
          flex-shrink: 0;
          padding: 13px 20px;
          border: none;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 900;
        }

        .openFlashcardsButton {
          background: #4f46e5;
          color: white;
          cursor: pointer;
        }

        .openFlashcardsButton:hover {
          background: #4338ca;
        }

        .checkpointButton {
          background: #7c3aed;
          color: white;
          cursor: pointer;
        }

        .checkpointButton:hover {
          background: #6d28d9;
        }

        @media (max-width: 850px) {
          .conceptStrip {
            grid-template-columns: repeat(3, minmax(0, 1fr));
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

          .conceptStrip,
          .sectionGrid,
          .rulesPreviewCard,
          .rulesGrid {
            grid-template-columns: 1fr;
          }

          .sectionCard:last-child {
            grid-column: auto;
          }

          .openFlashcardsButton,
          .checkpointButton {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
