"use client";

import { s3Chapter11Flashcards } from "@/data/maths/flashcards/s3chapter11";
import { useRouter } from "next/navigation";

const sections = [
  {
    "number": "11.1",
    "title": "Trigonometric Ratios of Some Special Angles",
    "description": "Derive exact ratios for 30°, 45° and 60°.",
    "available": true,
    "route": "/maths/s3/chapter-11/special-angles"
  },
  {
    "number": "11.2",
    "title": "Using Pythagoras’ Theorem to Find Trigonometric Ratios",
    "description": "Reconstruct a right triangle from one known ratio.",
    "available": true,
    "route": "/maths/s3/chapter-11/pythagoras"
  },
  {
    "number": "11.3",
    "title": "Trigonometric Relations",
    "description": "Explore relationships between sine, cosine and tangent.",
    "available": true,
    "route": "/maths/s3/chapter-11/relations"
  }
];

export default function ChapterElevenPage() {
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
        Chapter 11 · Trigonometric Relations
      </h1>

      <p
        style={{
          margin: "0 0 34px",
          color: "#64748b",
          fontSize: "20px",
          lineHeight: 1.6,
        }}
      >
        Start with two special triangles, then use their side lengths to calculate exact ratios.
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
      {/* Chapter 11 Flashcards */}
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
            Chapter 11 Flashcards
          </h2>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            {s3Chapter11Flashcards.length} cards available
          </p>
        </div>
        <button type="button" style={{background:"#4f46e5",color:"white",padding:"14px 22px",borderRadius:14,border:0,fontWeight:800,cursor:"pointer"}} onClick={() => router.push("/maths/s3/chapter-11/flashcards")}>Start Flashcards →</button>


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
            Practise after completing Sections 11.1–11.3.
          </p>
        </div>
        <button type="button" style={{background:"#7c3aed",color:"white",padding:"14px 22px",borderRadius:14,border:0,fontWeight:800,cursor:"pointer"}} onClick={() => router.push("/maths/s3/chapter-11/checkpoint")}>Start →</button>


      </section>
    </main>
  );
}
