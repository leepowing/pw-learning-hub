"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Basic Concepts of Algebra",
    description:
      "Learn how letters represent numbers and translate mathematical statements into algebraic expressions.",
    route: "/maths/s1/chapter-3/basic-concepts-of-algebra",
    available: true,
  },
  {
    number: 2,
    title: "Understanding Algebraic Expressions",
    description:
      "Identify terms, coefficients, constant terms and like terms, then simplify expressions by combining like terms.",
    route: "/maths/s1/chapter-3/understanding-algebraic-expressions",
    available: true,
  },
  {
    number: 3,
    title: "Linear Equations in One Unknown",
    description:
      "Solve linear equations by transposing terms, removing brackets, combining like terms and cancelling denominators.",
    route: "/maths/s1/chapter-3/linear-equations-in-one-unknown",
    available: true,
  },
  {
    number: 4,
    title: "Formulating Equations to Solve Problems",
    description:
      "Choose an unknown, form an equation from the information given and interpret the solution in context.",
    route: "/maths/s1/chapter-3/formulating-equations-to-solve-problems",
    available: true,
  },
];

export default function S1ChapterThreePage() {
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
      <h1>Chapter 3 · Basic Algebra (I)</h1>

      <p className="introduction">
        Build algebraic expressions from words, simplify like terms, solve
        linear equations and use equations to solve everyday problems.
      </p>

      <section className="overviewCard">
        <div className="overviewIcon">x</div>

        <div>
          <p className="overviewLabel">CHAPTER OVERVIEW</p>
          <h2>Letters can represent unknown numbers</h2>
          <p>
            Algebra uses letters, numbers and operation signs to describe
            relationships clearly and solve problems systematically.
          </p>
        </div>
      </section>

      <section className="numberLineCard">
        <div className="numberLineHeading">
          <p>ALGEBRAIC EXPRESSION PREVIEW</p>
          <strong>Every term carries its sign</strong>
        </div>

        <div className="algebraExpression">3y² + y − 2 + 8y² + 1</div>

        <div className="comparisonExample">
          <span>5 terms</span>
          <p>3y² and 8y² are like terms; −2 and 1 are constant terms.</p>
        </div>
      </section>

      <section className="keyIdeasStrip">
        <article>
          <span>3x</span>
          <strong>Term</strong>
          <p>A number, a letter or their product</p>
        </article>
        <article>
          <span>3</span>
          <strong>Coefficient</strong>
          <p>The numerical factor of a term</p>
        </article>
        <article>
          <span>−7</span>
          <strong>Constant term</strong>
          <p>A term containing no letters</p>
        </article>
        <article>
          <span>2x, −5x</span>
          <strong>Like terms</strong>
          <p>Same letters with the same indices</p>
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
          <p className="rulesPreviewLabel">EQUATION-SOLVING PREVIEW</p>
          <h2>Keep both sides balanced</h2>
          <p>These techniques will be developed and explained in Sections 3 and 4.</p>
        </div>

        <div className="rulesGrid">
          <span>x + 2 = 8 → x = 6</span>
          <span>9y = −18 → y = −2</span>
          <span>6m − 7 = 5m → m = 7</span>
          <span>4(a + 2) = 20 → a = 3</span>
        </div>
      </section>

      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">ALGEBRA PRACTICE</p>
          <h2>Chapter 3 Flashcards</h2>
          <p>
            Practise algebra vocabulary, like terms, equation-solving
            techniques and problem-forming steps from Chapter 3.
          </p>
        </div>

        <button
          type="button"
          className="openFlashcardsButton"
          onClick={() =>
            router.push("/maths/flashcards?level=s1&chapter=3")
          }
        >
          Open Flashcards →
        </button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 3 Checkpoint</h2>
          <p>Complete Sections 1–4 before attempting the checkpoint.</p>
        </div>

        <button
          type="button"
          className="startCheckpointButton"
          onClick={() => router.push("/maths/s1/chapter-3/checkpoint")}
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
        .numberLineHeading p,
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
          font-size: 36px;
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

        .numberLineCard {
          margin-top: 18px;
          padding: 24px;
          overflow: hidden;
          border: 1px solid #bfdbfe;
          border-radius: 22px;
          background: #f8fbff;
        }

        .numberLineHeading {
          display: flex;
          justify-content: space-between;
          gap: 18px;
        }

        .numberLineHeading p {
          margin: 0;
          color: #1d4ed8;
        }

        .algebraExpression {
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

        .numberLine {
          position: relative;
          min-width: 690px;
          display: grid;
          grid-template-columns: repeat(11, 1fr);
          margin: 36px 10px 20px;
        }

        .numberLine::before {
          content: "";
          position: absolute;
          top: 7px;
          right: 0;
          left: 0;
          height: 4px;
          border-radius: 999px;
          background: #60a5fa;
        }

        .linePoint,
        .zeroPoint {
          position: relative;
          display: grid;
          justify-items: center;
          gap: 7px;
          color: #475569;
        }

        .linePoint i,
        .zeroPoint i {
          z-index: 1;
          width: 17px;
          height: 17px;
          box-sizing: border-box;
          border: 4px solid #3b82f6;
          border-radius: 50%;
          background: white;
        }

        .zeroPoint i {
          border-color: #e11d48;
          background: #ffe4e6;
        }

        .zeroPoint b { color: #e11d48; }

        .comparisonExample {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 14px;
          border-radius: 14px;
          background: white;
        }

        .comparisonExample span {
          color: #1e3a8a;
          font-size: 18px;
          font-weight: 900;
        }

        .comparisonExample p {
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
          margin-bottom: 8px;
          color: #c2410c;
          font-size: 23px;
          font-weight: 900;
        }

        .keyIdeasStrip strong,
        .keyIdeasStrip p { display: block; }

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

        .featureLabel { margin: 0 0 6px; }
        .flashcardLabel { color: #4f46e5; }
        .checkpointLabel { color: #b45309; }

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
          background: #4f46e5;
          color: white;
          cursor: pointer;
        }

        .openFlashcardsButton:hover {
          background: #4338ca;
        }

        .startCheckpointButton {
          background: #7c3aed;
          color: white;
          cursor: pointer;
          transition: background 0.18s ease, transform 0.18s ease;
        }

        .startCheckpointButton:hover {
          background: #6d28d9;
          transform: translateY(-1px);
        }

        @media (max-width: 850px) {
          .sectionGrid { grid-template-columns: 1fr; }
          .keyIdeasStrip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 680px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .overviewCard { align-items: flex-start; }
          .numberLineCard { overflow-x: auto; }
          .comparisonExample { align-items: flex-start; flex-direction: column; }
          .rulesPreviewCard,
          .rulesGrid { grid-template-columns: 1fr; }

          .featureCard {
            align-items: flex-start;
            flex-direction: column;
          }

          .openFlashcardsButton,
          .startCheckpointButton { width: 100%; }
        }

        @media (max-width: 480px) {
          .overviewCard { flex-direction: column; }
          .keyIdeasStrip { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
