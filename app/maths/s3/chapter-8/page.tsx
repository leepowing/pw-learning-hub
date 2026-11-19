"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    "number": "8.1",
    "title": "Basic Knowledge of Quadrilaterals",
    "description": "Identify sides, angles and diagonals, and classify five quadrilaterals.",
    "available": true,
    "route": "/maths/s3/chapter-8/quadrilaterals"
  },
  {
    "number": "8.2",
    "title": "Parallelograms",
    "description": "Calculate lengths and angles, then prove when a quadrilateral is a parallelogram.",
    "available": true,
    "route": "/maths/s3/chapter-8/parallelograms"
  },
  {
    "number": "8.3",
    "title": "Properties of Rhombuses, Rectangles, Squares and Trapeziums",
    "description": "Compare the side, angle and diagonal properties of special quadrilaterals.",
    "available": true,
    "route": "/maths/s3/chapter-8/special-quadrilaterals"
  },
  {
    "number": "8.4",
    "title": "Proofs Related to Parallelograms",
    "description": "Use parallel lines and congruent triangles to build a proof.",
    "available": false,
    "route": ""
  },
  {
    "number": "8.5",
    "title": "Mid-point Theorem and Intercept Theorem",
    "description": "Use midpoints and parallel lines to relate lengths in triangles.",
    "available": false,
    "route": ""
  }
];

export default function ChapterEightPage() {
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
        onClick={() => router.push("/maths/s3")}
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
        ← Back to S3 Mathematics
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
        S3 MATHEMATICS
      </p>

      <h1
        style={{
          margin: "0 0 8px",
          fontSize: "42px",
        }}
      >
        Chapter 8 · Quadrilaterals
      </h1>

      <p
        style={{
          margin: "0 0 34px",
          color: "#64748b",
          fontSize: "20px",
          lineHeight: 1.6,
        }}
      >
        Start with Section 8.1 to identify quadrilaterals. In Section 8.2, use their properties to calculate and prove.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: "18px",
        }}
      >
        {sections.map((section) => (
          <article
            key={section.number}
            style={{
              minHeight: "230px",
              padding: "28px",
              boxSizing: "border-box",
              borderRadius: "22px",
              border: "1px solid #e2e8f0",
              background: "white",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
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
                  background: "#ecfdf5",
                  color: "#047857",
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
                  color: section.available ? "#047857" : "#64748b",
                  fontSize: "16px",
                  fontWeight: 800,
                }}
              >
{section.available ? "Available" : "Coming soon"}
              </span>
            </div>

            <h2
              style={{
                margin: "22px 0 8px",
                fontSize: "27px",
              }}
            >
              {section.title}
            </h2>

            <p
              style={{
                margin: 0,
                color: "#64748b",
                fontSize: "17px",
                lineHeight: 1.6,
              }}
            >
              {section.description}
            </p>
            {section.available && (
  <button
    type="button"
    onClick={() => router.push(section.route)}
    style={{
      width: "100%",
      marginTop: "auto",
      padding: "14px 18px",
      border: "none",
      borderRadius: "14px",
      background: "#059669",
      color: "white",
      fontSize: "17px",
      fontWeight: 900,
      cursor: "pointer",
    }}
  >
    Start →
  </button>
)}
          </article>
        ))}
      </section>
      {/* Chapter 8 Flashcards */}
      <section
        style={{
          marginTop: "28px",
          marginBottom: "24px",
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
            Chapter 8 Flashcards
          </h2>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Coming soon · 0 cards available
          </p>
        </div>


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
            Checkpoint Activity
          </h2>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Coming soon · Study Sections 8.1–8.5 before attempting the checkpoint.
          </p>
        </div>


      </section>
    </main>
  );
}
