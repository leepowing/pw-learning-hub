"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Basic Concepts of Geometry",
    description:
      "Learn about plane figures, polygons, sides, vertices, diagonals and the classification of triangles and polygons.",
    route:
      "/maths/s1/chapter-6/basic-concepts-of-geometry",
  },
  {
    number: 2,
    title: "3-D Figures",
    description:
      "Learn about polyhedra, faces, edges, vertices, prisms, cylinders, 2-D representations and cross-sections.",
    route:
      "/maths/s1/chapter-6/three-dimensional-figures",
  },
];

export default function ChapterSixPage() {
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

      <header style={{ marginBottom: "34px" }}>
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
          Chapter 6 · Basic Geometry
        </h1>

        <p
          style={{
            maxWidth: "820px",
            margin: 0,
            color: "#64748b",
            fontSize: "20px",
            lineHeight: 1.6,
          }}
        >
          Learn the basic properties of 2-D and 3-D figures
          before completing the Chapter 6 Checkpoint Activity.
        </p>
      </header>

      <section
        style={{
          marginBottom: "24px",
          padding: "24px 28px",
          borderRadius: "20px",
          border: "1px solid #bae6fd",
          background: "#f0f9ff",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            color: "#0369a1",
            fontSize: "14px",
            fontWeight: 900,
            letterSpacing: "0.08em",
          }}
        >
          CHAPTER OVERVIEW
        </p>

        <h2
          style={{
            margin: "0 0 12px",
            fontSize: "25px",
          }}
        >
          What you will learn
        </h2>

        <ul
          style={{
            margin: 0,
            paddingLeft: "24px",
            color: "#475569",
            fontSize: "17px",
            lineHeight: 1.8,
          }}
        >
          <li>Recognise and describe polygons.</li>

          <li>
            Identify sides, vertices and diagonals.
          </li>

          <li>
            Classify polygons and triangles.
          </li>

          <li>
            Describe faces, edges and vertices of solids.
          </li>

          <li>
            Recognise prisms, cylinders and polyhedra.
          </li>

          <li>
            Interpret hidden edges and cross-sections.
          </li>
        </ul>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(360px, 1fr))",
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
                "0 6px 18px rgba(0,0,0,0.04)",
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
                  background:
                    section.number === 1
                      ? "#eef2ff"
                      : "#ecfdf5",
                  color:
                    section.number === 1
                      ? "#4338ca"
                      : "#047857",
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
                  color: "#059669",
                  fontSize: "16px",
                  fontWeight: 800,
                }}
              >
                Available
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
              onClick={() =>
                router.push(section.route)
              }
              style={{
                width: "100%",
                marginTop: "auto",
                padding: "14px 18px",
                border: "none",
                borderRadius: "14px",
                background:
                  section.number === 1
                    ? "#4f46e5"
                    : "#059669",
                color: "white",
                fontSize: "17px",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Start Section {section.number} →
            </button>
          </article>
        ))}
      </section>

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
            GEOMETRY PRACTICE
          </p>

          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "29px",
            }}
          >
            Chapter 6 Flashcards
          </h2>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.6,
            }}
          >
            Practise all 24 definitions and geometry concepts
            from Chapter 6, with 2-D and 3-D diagrams.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            router.push("/maths/flashcards")
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
          Open Flashcards →
        </button>
      </section>

      <section
        style={{
          marginTop: "22px",
          padding: "30px",
          borderRadius: "24px",
          border: "1px solid #e2e8f0",
          background: "#f8fafc",
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
              color: "#94a3b8",
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
              color: "#475569",
            }}
          >
            Chapter 6 Checkpoint
          </h2>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.6,
            }}
          >
            Complete Sections 1 and 2 before attempting the
            checkpoint.
          </p>
        </div>

<button
  type="button"
  onClick={() =>
    router.push("/maths/s1/chapter-6/checkpoint")
  }
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
  Start Checkpoint →
</button>
      </section>
    </main>
  );
}