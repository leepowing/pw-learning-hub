"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Algebraic Fractions",
    description:
      "Simplify algebraic fractions and perform multiplication, division, addition and subtraction.",
    route:
      "/maths/s2/chapter-4/algebraic-fractions",
    available: true,
  },
  {
    number: 2,
    title: "Formulae and Substitution",
    description:
      "Understand formulae and substitute positive, negative and fractional values correctly.",
    route:
      "/maths/s2/chapter-4/formulae-and-substitution",
    available: true,
  },
  {
    number: 3,
    title: "Change of Subject of a Formula",
    description:
      "Rearrange formulae using inverse operations to make a different variable the subject.",
    route:
      "/maths/s2/chapter-4/change-of-subject",
    available: true,
  },
];

export default function ChapterFourPage() {
  const router = useRouter();

  return (
    <main
      style={{
        maxWidth: "1100px",
        width: "calc(100% - 40px)",
        margin: "42px auto 70px",
      }}
    >
      <button
        type="button"
        onClick={() => router.push("/maths/s2")}
        style={{
          border: "none",
          background: "transparent",
          padding: 0,
          marginBottom: "26px",
          color: "#047857",
          fontSize: "17px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        ← Back to S2 Mathematics
      </button>

      <p
        style={{
          margin: "0 0 5px",
          color: "#059669",
          fontSize: "16px",
          fontWeight: 900,
          letterSpacing: "0.08em",
        }}
      >
        S2 MATHEMATICS
      </p>

      <h1
        style={{
          margin: "0 0 8px",
          fontSize: "42px",
          lineHeight: 1.2,
        }}
      >
        Chapter 4 · Algebraic Fractions and Formulae
      </h1>

      <p
        style={{
          margin: "0 0 34px",
          color: "#64748b",
          fontSize: "20px",
          lineHeight: 1.6,
        }}
      >
        Learn all three sections before completing the
        Chapter 4 Checkpoint.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "18px",
        }}
      >
        {sections.map((section) => (
          <article
            key={section.number}
            style={{
              minHeight: "260px",
              padding: "28px",
              boxSizing: "border-box",
              borderRadius: "22px",
              border: "1px solid #e2e8f0",
              background: "white",
              display: "flex",
              flexDirection: "column",
              boxShadow:
                "0 6px 18px rgba(0, 0, 0, 0.04)",
              opacity: section.available ? 1 : 0.68,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "18px",
              }}
            >
              <span
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "16px",
                  background: section.available
                    ? "#ecfdf5"
                    : "#f1f5f9",
                  color: section.available
                    ? "#047857"
                    : "#64748b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "23px",
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >
                {section.number}
              </span>

              <span
                style={{
                  color: section.available
                    ? "#059669"
                    : "#94a3b8",
                  fontSize: "16px",
                  fontWeight: 800,
                }}
              >
                {section.available
                  ? "Available"
                  : "Coming soon"}
              </span>
            </div>

            <h2
              style={{
                margin: "22px 0 8px",
                fontSize: "26px",
                lineHeight: 1.25,
              }}
            >
              {section.title}
            </h2>

            <p
              style={{
                margin: "0 0 24px",
                color: "#64748b",
                fontSize: "17px",
                lineHeight: 1.6,
              }}
            >
              {section.description}
            </p>

            <button
              type="button"
              disabled={!section.available}
              onClick={() => {
                if (section.available) {
                  router.push(section.route);
                }
              }}
              style={{
                width: "100%",
                marginTop: "auto",
                padding: "14px 18px",
                border: "none",
                borderRadius: "14px",
                background: section.available
                  ? "#059669"
                  : "#e2e8f0",
                color: section.available
                  ? "white"
                  : "#94a3b8",
                fontSize: "17px",
                fontWeight: 900,
                cursor: section.available
                  ? "pointer"
                  : "not-allowed",
              }}
            >
              {section.available
                ? `Start Section ${section.number} →`
                : "Coming soon"}
            </button>
          </article>
        ))}
      </section>

      <section
        style={{
          marginTop: "28px",
          padding: "28px",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg, #eef2ff, #f5f3ff)",
          border: "1px solid #c7d2fe",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 6px",
              color: "#4f46e5",
              fontSize: "14px",
              fontWeight: 900,
              letterSpacing: "1.4px",
            }}
          >
            FORMULA PRACTICE
          </p>

          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "29px",
            }}
          >
            Chapter 4 Flashcards
          </h2>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.6,
            }}
          >
            Practise algebraic fractions, substitution
            and changing the subject of a formula.
          </p>
        </div>

<button
  type="button"
  onClick={() =>
    router.push("/maths/flashcards")
  }
  style={{
    border: "none",
    borderRadius: "14px",
    background: "#4f46e5",
    color: "#ffffff",
    padding: "14px 26px",
    fontSize: "17px",
    fontWeight: 900,
    cursor: "pointer",
    flexShrink: 0,
  }}
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
            Chapter 4 Checkpoint
          </h2>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Complete Sections 1–3 before attempting the
            checkpoint.
          </p>
        </div>

<button
  type="button"
  onClick={() =>
    router.push("/maths/s2/chapter-4/checkpoint")
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
    </main>
  );
}