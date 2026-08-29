"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Meaning of Identities",
    description:
      "Understand what an identity is, verify identities by expansion and find unknown coefficients.",
    route:
      "/maths/s2/chapter-3/meaning-of-identities",
    colour: "#4f46e5",
    background: "#eef2ff",
  },
  {
    number: 2,
    title: "The Difference of Two Squares Identity",
    description:
      "Use the difference of two squares to expand, factorize and simplify calculations.",
    route:
      "/maths/s2/chapter-3/difference-of-two-squares",
    colour: "#059669",
    background: "#ecfdf5",
  },
  {
    number: 3,
    title: "The Perfect Square Identities",
    description:
      "Expand and recognise the square of a sum and the square of a difference.",
    route:
      "/maths/s2/chapter-3/perfect-square-identities",
    colour: "#c2410c",
    background: "#fff7ed",
  },
];

export default function ChapterThreePage() {
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

      <header className="hero">
        <p className="eyebrow">S2 MATHEMATICS</p>

        <h1>Chapter 3 · Identities</h1>

        <p className="intro">
          Learn how to verify and apply algebraic identities,
          including the difference of two squares and perfect
          square identities.
        </p>
      </header>

      <section className="overviewCard">
        <p className="overviewLabel">
          CHAPTER OVERVIEW
        </p>

        <h2>What you will learn</h2>

        <ul>
          <li>
            Distinguish an identity from an equation.
          </li>

          <li>
            Verify an identity by expanding and simplifying
            both sides.
          </li>

          <li>
            Compare coefficients to find unknown constants.
          </li>

          <li>
            Apply the difference of two squares identity.
          </li>

          <li>
            Expand the square of a sum or difference.
          </li>

          <li>
            Recognise and factorize perfect-square
            expressions.
          </li>
        </ul>
      </section>

      <section className="sectionGrid">
        {sections.map((section) => (
          <article
            key={section.number}
            className="sectionCard"
          >
            <div className="cardTop">
              <span
                className="numberBadge"
                style={{
                  color: section.colour,
                  background: section.background,
                }}
              >
                {section.number}
              </span>

              <span className="available">
                Available
              </span>
            </div>

            <h2>{section.title}</h2>

            <p>{section.description}</p>

            <button
              type="button"
              onClick={() =>
                router.push(section.route)
              }
              style={{
                background: section.colour,
              }}
            >
              Start Section {section.number} →
            </button>
          </article>
        ))}
      </section>

      <section className="formulaOverview">
        <div>
          <p className="formulaLabel">
            KEY IDENTITIES
          </p>

          <h2>Three essential formulas</h2>

          <p>
            Learn the structures carefully, especially the
            signs of the middle terms.
          </p>
        </div>

        <div className="formulaGrid">
          <article>
            <strong>
              (a + b)(a − b) = a² − b²
            </strong>

            <span>
              Difference of two squares
            </span>
          </article>

          <article>
            <strong>
              (a + b)² = a² + 2ab + b²
            </strong>

            <span>
              Square of a sum
            </span>
          </article>

          <article>
            <strong>
              (a − b)² = a² − 2ab + b²
            </strong>

            <span>
              Square of a difference
            </span>
          </article>
        </div>
      </section>

      <section className="flashcardSection">
        <div>
          <p className="flashcardLabel">
            FORMULA PRACTICE
          </p>

          <h2>Chapter 3 Flashcards</h2>

          <p>
            Practise all 18 identities, rules,
            applications and common errors.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            router.push("/maths/flashcards")
          }
        >
          Open Flashcards →
        </button>
      </section>

<section
  style={{
    marginTop: "22px",
    padding: "30px",
    borderRadius: "24px",
    border: "1px solid #fde68a",
    background: "#fffbeb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "22px",
  }}
>
  <div>
    <p
      style={{
        margin: "0 0 6px",
        color: "#b45309",
        fontSize: "15px",
        fontWeight: 900,
        letterSpacing: "0.08em",
      }}
    >
      FINAL ACTIVITY
    </p>

    <h2
      style={{
        margin: "0 0 8px",
        fontSize: "29px",
      }}
    >
      Chapter 3 Checkpoint
    </h2>

    <p
      style={{
        margin: 0,
        color: "#64748b",
        fontSize: "17px",
        lineHeight: 1.6,
      }}
    >
      Complete Sections 1–3, then test your understanding
      with 12 questions.
    </p>
  </div>

  <button
    type="button"
    onClick={() =>
      router.push("/maths/s2/chapter-3/checkpoint")
    }
    style={{
      border: "none",
      borderRadius: "14px",
      background: "#7c3aed",
      color: "#ffffff",
      padding: "14px 26px",
      fontSize: "17px",
      fontWeight: 900,
      cursor: "pointer",
      flexShrink: 0,
    }}
  >
    Start Checkpoint →
  </button>
</section>

      <style jsx>{`
        .page {
          max-width: 1100px;
          width: calc(100% - 40px);
          margin: 42px auto 70px;
          color: #172033;
        }

        .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: none;
          background: transparent;
          color: #047857;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
        }

        .hero {
          margin-bottom: 34px;
        }

        .eyebrow,
        .overviewLabel,
        .formulaLabel,
        .flashcardLabel,
        .checkpointLabel {
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.09em;
        }

        .eyebrow {
          color: #059669;
          font-size: 16px;
        }

        h1 {
          margin: 0 0 8px;
          font-size: 42px;
        }

        h2 {
          margin: 0 0 10px;
        }

        .intro {
          max-width: 840px;
          margin: 0;
          color: #64748b;
          font-size: 20px;
          line-height: 1.6;
        }

        .overviewCard {
          margin-bottom: 24px;
          padding: 25px 28px;
          border: 1px solid #bae6fd;
          border-radius: 22px;
          background: #f0f9ff;
        }

        .overviewLabel {
          color: #0369a1;
        }

        .overviewCard h2 {
          font-size: 26px;
        }

        .overviewCard ul {
          margin: 0;
          padding-left: 24px;
          color: #475569;
          font-size: 17px;
          line-height: 1.85;
        }

        .sectionGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(300px, 1fr)
          );
          gap: 18px;
        }

        .sectionCard {
          min-height: 300px;
          padding: 28px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          background: white;
          box-shadow:
            0 6px 18px rgba(0, 0, 0, 0.04);
        }

        .cardTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }

        .numberBadge {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          font-size: 23px;
          font-weight: 900;
        }

        .available {
          color: #059669;
          font-size: 15px;
          font-weight: 800;
        }

        .sectionCard h2 {
          margin: 22px 0 8px;
          font-size: 25px;
          line-height: 1.3;
        }

        .sectionCard p {
          margin: 0 0 24px;
          color: #64748b;
          font-size: 17px;
          line-height: 1.6;
        }

        .sectionCard button {
          width: 100%;
          margin-top: auto;
          padding: 14px 18px;
          border: none;
          border-radius: 14px;
          color: white;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
        }

        .formulaOverview {
          margin-top: 28px;
          padding: 28px;
          border: 1px solid #ddd6fe;
          border-radius: 24px;
          background: #faf5ff;
        }

        .formulaLabel {
          color: #7c3aed;
        }

        .formulaOverview > div:first-child p:last-child {
          margin: 0;
          color: #64748b;
          font-size: 17px;
        }

        .formulaGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(240px, 1fr)
          );
          gap: 14px;
          margin-top: 22px;
        }

        .formulaGrid article {
          padding: 21px;
          overflow-x: auto;
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          background: white;
          text-align: center;
        }

        .formulaGrid strong {
          display: block;
          margin-bottom: 9px;
          color: #5b21b6;
          font-size: 20px;
          white-space: nowrap;
        }

        .formulaGrid span {
          color: #64748b;
          font-size: 15px;
        }

        .flashcardSection,
        .checkpointSection {
          margin-top: 24px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          border-radius: 24px;
        }

        .flashcardSection {
          border: 1px solid #c7d2fe;
          background: linear-gradient(
            135deg,
            #eef2ff,
            #f5f3ff
          );
        }

        .flashcardLabel {
          color: #4f46e5;
        }

        .flashcardSection h2,
        .checkpointSection h2,
        .formulaOverview h2 {
          font-size: 29px;
        }

        .flashcardSection p,
        .checkpointSection p {
          margin: 0;
          color: #64748b;
          font-size: 17px;
          line-height: 1.6;
        }

        .flashcardSection button {
          padding: 16px 28px;
          border: none;
          border-radius: 16px;
          background: #4f46e5;
          color: white;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
          white-space: nowrap;
        }

        .checkpointSection {
          border: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .checkpointLabel {
          color: #94a3b8;
        }

        .checkpointSection button {
          padding: 14px 26px;
          border: none;
          border-radius: 14px;
          background: #e2e8f0;
          color: #94a3b8;
          font-size: 17px;
          font-weight: 800;
          cursor: not-allowed;
        }

        @media (max-width: 680px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          h1 {
            font-size: 36px;
          }

          .sectionGrid {
            grid-template-columns: 1fr;
          }

          .flashcardSection,
          .checkpointSection {
            align-items: flex-start;
            flex-direction: column;
          }

          .flashcardSection button,
          .checkpointSection button {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}