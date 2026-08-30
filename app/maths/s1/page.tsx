"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentStudent } from "@/lib/studentStorage";

const chapters = [
  { number: 1, title: "Basic Computation" },
  { number: 2, title: "Directed Numbers" },
  { number: 3, title: "Basic Algebra (I)" },
  { number: 4, title: "Basic Algebra (II)" },
  { number: 5, title: "Percentages (I)" },
  { number: 6, title: "Basic Geometry" },
  { number: 7, title: "Mensuration (I)" },
  { number: 8, title: "Rectangular Coordinate System (I)" },
  { number: 9, title: "Angles and Parallel Lines (I)" },
  { number: 10, title: "Congruence and Similarity (I)" },
  { number: 11, title: "Numerical Estimation" },
  {
    number: 12,
    title: "Organization and Presentation of Data (I)",
  },
];

export default function S1MathematicsPage() {
  const router = useRouter();

  useEffect(() => {
    const student = getCurrentStudent();

    if (student === "guest") {
      router.replace("/login");
    }
  }, [router]);

  return (
    <main
      style={{
        maxWidth: "1100px",
        width: "calc(100% - 48px)",
        margin: "48px auto",
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <button
        type="button"
        onClick={() => router.push("/subjects/mathematics")}
        style={{
          border: "none",
          background: "transparent",
          padding: 0,
          marginBottom: "28px",
          color: "#047857",
          fontSize: "17px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        ← Back to mathematics courses
      </button>

      <h1
        style={{
          fontSize: "42px",
          margin: "0 0 8px",
        }}
      >
        S1 Mathematics
      </h1>

      <p
        style={{
          margin: "0 0 8px",
          color: "#666",
          fontSize: "20px",
        }}
      >
        Hong Kong Secondary 1 Mathematics
      </p>

      <p
        style={{
          margin: "0 0 30px",
          color: "#047857",
          fontSize: "17px",
          fontWeight: 700,
        }}
      >
          Chapters 1 - 6 are currently available
      </p>
      <button
        type="button"
        onClick={() => router.push("/maths/s1/flashcards")}
        style={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "24px 26px",
          marginBottom: "28px",
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)",
          border: "2px solid #c7d2fe",
          boxShadow: "0 6px 18px rgba(79,70,229,0.08)",
          color: "inherit",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            minWidth: 0,
          }}
        >
          <span
            style={{
              width: "66px",
              height: "66px",
              borderRadius: "19px",
              background: "#e0e7ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              flexShrink: 0,
            }}
          >
            🗂️
          </span>

          <span>
            <span
              style={{
                display: "block",
                color: "#4f46e5",
                fontSize: "14px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                marginBottom: "5px",
              }}
            >
              FORMULA PRACTICE
            </span>

            <strong
              style={{
                display: "block",
                fontSize: "25px",
                lineHeight: 1.25,
                marginBottom: "5px",
              }}
            >
              S1 Formula Flashcards
            </strong>

            <span
              style={{
                display: "block",
                color: "#64748b",
                fontSize: "17px",
                lineHeight: 1.45,
              }}
            >
              Choose one or more chapters and practise the formulas together.
            </span>
          </span>
        </span>

        <span
          style={{
            padding: "12px 18px",
            borderRadius: "14px",
            background: "#4f46e5",
            color: "white",
            fontSize: "16px",
            fontWeight: 800,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Choose chapters →
        </span>
      </button>
      
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "16px",
        }}
      >
        {chapters.map((chapter) => {
const available = [1, 2, 3, 4, 5, 6].includes(
  chapter.number
);
          return (
            <button
              key={chapter.number}
              type="button"
              disabled={!available}
onClick={() => {
  if (available) {
    router.push(
      `/maths/s1/chapter-${chapter.number}`
    );
  }
}}
              style={{
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                padding: "22px 24px",
                borderRadius: "20px",
                background: "white",
                border: available
                  ? "2px solid #a7f3d0"
                  : "1px solid #e5e7eb",
                cursor: available ? "pointer" : "not-allowed",
                boxShadow: "0 5px 16px rgba(0,0,0,0.04)",
                textAlign: "left",
                color: "inherit",
                opacity: available ? 1 : 0.58,
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    width: "62px",
                    height: "62px",
                    borderRadius: "18px",
                    background: available ? "#ecfdf5" : "#f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: available ? "#047857" : "#6b7280",
                    fontSize: "24px",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {chapter.number}
                </span>

                <span>
                  <span
                    style={{
                      display: "block",
                      color: "#6b7280",
                      fontSize: "15px",
                      fontWeight: 700,
                      marginBottom: "5px",
                    }}
                  >
                    Chapter {chapter.number}
                  </span>

                  <strong
                    style={{
                      display: "block",
                      fontSize: "21px",
                      lineHeight: 1.25,
                    }}
                  >
                    {chapter.title}
                  </strong>
                </span>
              </span>

              <span
                style={{
                  color: available ? "#047857" : "#6b7280",
                  fontSize: "16px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {available ? "Start →" : "Coming soon"}
              </span>
            </button>
          );
        })}
      </section>
    </main>
  );
}