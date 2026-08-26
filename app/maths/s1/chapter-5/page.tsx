"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Percentages",
    description:
      "Express one quantity as a percentage of another and find a percentage of a quantity.",
    available: true,
    route: "/maths/s1/chapter-5/percentages",
  },
{
  number: 2,
  title: "Increase and Profit",
  description:
    "Learn percentage increase, profit, cost price and selling price.",
  available: true,
  route: "/maths/s1/chapter-5/increase-and-profit",
},
  {
    number: 3,
    title: "Decrease, Discount and Loss",
    description:
      "Learn percentage decrease, discount, loss and selling price.",
    available: true,
    route: "/maths/s1/chapter-5/decrease-discount-and-loss",
  },
  {
    number: 4,
    title: "Percentage Change",
    description:
      "Calculate positive and negative percentage changes.",
available: true,
route: "/maths/s1/chapter-5/percentage-change",
  },
];

export default function ChapterFivePage() {
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
        onClick={() => router.push("/maths/s1")}
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
        ← Back to S1 Mathematics
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
        S1 MATHEMATICS
      </p>

      <h1
        style={{
          margin: "0 0 8px",
          fontSize: "42px",
        }}
      >
        Chapter 5 · Percentages (I)
      </h1>

      <p
        style={{
          margin: "0 0 34px",
          color: "#64748b",
          fontSize: "20px",
          lineHeight: 1.6,
        }}
      >
        Learn all four sections before completing the Checkpoint Activity.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
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
                  color: "#94a3b8",
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
      {/* Chapter 5 Flashcards */}
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
            Chapter 5 Flashcards
          </h2>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Practise all 26 formulas from Chapter 5.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            router.push("/maths/s1/chapter-5/flashcards")
          }
          style={{
            border: "none",
            borderRadius: "16px",
            padding: "16px 28px",
            background: "#4f46e5",
            color: "white",
            fontSize: "17px",
            fontWeight: 900,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Start Flashcards →
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
            Checkpoint Activity
          </h2>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Complete Sections 1–4 before attempting the checkpoint.
          </p>
        </div>

<button
  type="button"
  onClick={() => router.push("/maths/s1/chapter-5/checkpoint")}
  style={{
    border: "none",
    borderRadius: "14px",
    background: "#7c3aed",
    color: "#ffffff",
    padding: "14px 26px",
    fontSize: "17px",
    fontWeight: 800,
    cursor: "pointer",
    flexShrink: 0,
  }}
>
  Start →
</button>
      </section>
    </main>
  );
}