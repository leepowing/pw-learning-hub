"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Concept of Linear Equations in Two Unknowns",
    description:
      "Understand linear equations in two unknowns, ordered-pair solutions and straight-line graphs.",
    route:
      "/maths/s2/chapter-5/concept-of-linear-equations",
    available: true,
  },
  {
    number: 2,
    title: "Graphical Method",
    description:
      "Solve simultaneous linear equations by drawing two straight lines and finding their point of intersection.",
    route: "/maths/s2/chapter-5/graphical-method",
    available: true,
  },
  {
    number: 3,
    title: "Algebraic Methods",
    description:
      "Solve simultaneous linear equations accurately using substitution and elimination.",
    route: "/maths/s2/chapter-5/algebraic-methods",
    available: true,
  },
  {
    number: 4,
    title: "Applications",
    description:
      "Translate word problems into two equations, solve them and interpret the answers in context.",
    route: "/maths/s2/chapter-5/applications",
    available: true,
  },
];

export default function ChapterFivePage() {
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

      <h1>Chapter 5 · Linear Equations in Two Unknowns</h1>

      <p className="introduction">
        Learn how to represent, graph and solve linear equations in two
        unknowns, then apply simultaneous equations to real situations.
      </p>

      <section className="sectionGrid">
        {sections.map((section) => (
          <article key={section.number} className="sectionCard">
            <div className="sectionTop">
              <span className="sectionNumber">{section.number}</span>

              <span className="sectionStatus">
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
          <p className="featureLabel flashcardLabel">
            EQUATION PRACTICE
          </p>

          <h2>Chapter 5 Flashcards</h2>

          <p>
            Practise key definitions, graphical ideas, solving methods and
            application steps from Chapter 5.
          </p>
        </div>

<button
  type="button"
  className="openFlashcardsButton"
  onClick={() => router.push("/maths/flashcards")}
>
  Open Flashcards →
</button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>

          <h2>Chapter 5 Checkpoint</h2>

          <p>
            Complete Sections 1–4 before attempting the checkpoint.
          </p>
        </div>

<button
  type="button"
  className="startCheckpointButton"
  onClick={() =>
    router.push("/maths/s2/chapter-5/checkpoint")
  }
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

        .eyebrow {
          margin: 0 0 6px;
          color: #2563eb;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        h1 {
          margin: 0 0 12px;
          font-size: clamp(36px, 5vw, 50px);
          line-height: 1.12;
        }

        .introduction {
          max-width: 900px;
          margin: 0 0 34px;
          color: #64748b;
          font-size: 19px;
          line-height: 1.65;
        }

        .sectionGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(100%, 430px), 1fr)
          );
          gap: 18px;
        }

        .sectionCard {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          padding: 28px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 7px 20px rgba(15, 23, 42, 0.05);
          box-sizing: border-box;
        }

        .sectionTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }

        .sectionNumber {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 17px;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 24px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .sectionStatus {
          color: #94a3b8;
          font-size: 15px;
          font-weight: 800;
        }

        .sectionCard h2 {
          margin: 22px 0 10px;
          font-size: 25px;
          line-height: 1.3;
        }

        .sectionDescription {
          margin: 0 0 24px;
          color: #64748b;
          font-size: 17px;
          line-height: 1.6;
        }

        .startSectionButton,
        .disabledSectionButton {
          width: 100%;
          margin-top: auto;
          padding: 14px 18px;
          border: none;
          border-radius: 14px;
          font-size: 17px;
          font-weight: 900;
        }

        .startSectionButton {
          background: #059669;
          color: #ffffff;
          cursor: pointer;
        }

        .disabledSectionButton {
          background: #e2e8f0;
          color: #94a3b8;
          cursor: not-allowed;
        }

        .featureCard {
          margin-top: 24px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          border-radius: 24px;
          box-sizing: border-box;
          opacity: 0.72;
        }

        .flashcardCard {
          border: 1px solid #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #f5f3ff);
        }

        .checkpointCard {
          border: 1px solid #fde68a;
          background: #fffbeb;
        }

        .featureLabel {
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .flashcardLabel {
          color: #4f46e5;
        }

        .checkpointLabel {
          color: #b45309;
        }

        .featureCard h2 {
          margin: 0 0 8px;
          font-size: 29px;
        }

        .featureCard p:last-child {
          margin: 0;
          color: #64748b;
          font-size: 17px;
          line-height: 1.5;
        }

        .disabledFeatureButton,
        .disabledCheckpointButton {
          padding: 14px 24px;
          border: none;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 900;
          cursor: not-allowed;
          flex-shrink: 0;
        }

        .disabledFeatureButton {
          background: #c7d2fe;
          color: #6366f1;
        }

        .disabledCheckpointButton {
          background: #fde68a;
          color: #b45309;
        }

.startCheckpointButton {
  flex-shrink: 0;
  padding: 13px 20px;
  border: none;
  border-radius: 14px;
  background: #7c3aed;
  color: #ffffff;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(124, 58, 237, 0.2);
}

.startCheckpointButton:hover {
  background: #6d28d9;
}

.openFlashcardsButton {
  flex-shrink: 0;
  padding: 13px 20px;
  border: none;
  border-radius: 14px;
  background: #4f46e5;
  color: #ffffff;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.2);
}

.openFlashcardsButton:hover {
  background: #4338ca;
}

        @media (max-width: 640px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .sectionCard {
            min-height: 0;
            padding: 22px;
          }

          .featureCard {
            align-items: flex-start;
            flex-direction: column;
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
