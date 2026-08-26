"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentStudent } from "@/lib/studentStorage";

const mathsCourses = [
  {
    level: "S1",
    description: "Hong Kong Secondary 1 Mathematics",
    route: "/maths/s1",
    available: true,
  },
  {
    level: "S2",
    description: "Hong Kong Secondary 2 Mathematics",
    route: "",
    available: false,
  },
  {
    level: "S3",
    description: "Hong Kong Secondary 3 Mathematics",
    route: "",
    available: false,
  },
  {
    level: "S4",
    description: "Hong Kong Secondary 4 Mathematics",
    route: "",
    available: false,
  },
  {
    level: "S5",
    description: "Hong Kong Secondary 5 Mathematics",
    route: "",
    available: false,
  },
  {
    level: "S6",
    description: "Hong Kong Secondary 6 Mathematics",
    route: "",
    available: false,
  },
];

export default function MathematicsSubjectsPage() {
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
        onClick={() => router.push("/subjects")}
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
        ← Back to subjects
      </button>

      <h1
        style={{
          fontSize: "42px",
          margin: "0 0 8px",
        }}
      >
        Choose a mathematics course
      </h1>

      <p
        style={{
          margin: "0 0 28px",
          color: "#666",
          fontSize: "20px",
        }}
      >
        Hong Kong mathematics curriculum
      </p>

      <button
        type="button"
        onClick={() => router.push("/maths/flashcards")}
        style={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "26px 30px",
          marginBottom: "28px",
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)",
          border: "2px solid #c7d2fe",
          boxShadow: "0 6px 18px rgba(79,70,229,0.08)",
          color: "inherit",
          cursor: "pointer",
          textAlign: "left",
          flexWrap: "wrap",
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
              width: "70px",
              height: "70px",
              borderRadius: "20px",
              background: "#e0e7ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
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
                fontSize: "27px",
                lineHeight: 1.25,
                marginBottom: "5px",
              }}
            >
              Mathematics Formula Flashcards
            </strong>

            <span
              style={{
                display: "block",
                color: "#64748b",
                fontSize: "17px",
                lineHeight: 1.45,
              }}
            >
              Choose chapters across S1–S6 and practise them together.
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
          Choose levels and chapters →
        </span>
      </button>

      {mathsCourses.map((course) => (
        <button
          key={course.level}
          type="button"
          disabled={!course.available}
          onClick={() => {
            if (course.available) {
              router.push(course.route);
            }
          }}
          style={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 32px",
            borderRadius: "22px",
            background: "white",
            border: "1px solid #e5e7eb",
            marginBottom: "16px",
            cursor: course.available ? "pointer" : "not-allowed",
            boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
            textAlign: "left",
            color: "inherit",
            opacity: course.available ? 1 : 0.58,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <span
              style={{
                width: "76px",
                height: "76px",
                borderRadius: "22px",
                background: course.available ? "#ecfdf5" : "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px",
                fontWeight: 800,
                color: course.available ? "#047857" : "#6b7280",
                flexShrink: 0,
              }}
            >
              {course.level}
            </span>

            <span>
              <strong
                style={{
                  display: "block",
                  fontSize: "28px",
                  marginBottom: "7px",
                }}
              >
                Mathematics - {course.level}
              </strong>

              <span
                style={{
                  display: "block",
                  fontSize: "19px",
                  color: "#666",
                }}
              >
                {course.description}
              </span>
            </span>
          </span>

          <span
            style={{
              fontSize: "19px",
              fontWeight: 700,
              color: course.available ? "#047857" : "#6b7280",
              whiteSpace: "nowrap",
            }}
          >
            {course.available ? "Start →" : "Coming soon"}
          </span>
        </button>
      ))}
    </main>
  );
}