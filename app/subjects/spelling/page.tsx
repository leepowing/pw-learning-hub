"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentStudent } from "@/lib/studentStorage";

const spellingCourses = [
  {
    title: "Spelling - Year 7",
    description: "52 weeks of spelling practice",
    icon: "📚",
    route: "/spelling",
  },
  {
    title: "Spelling - Year 8",
    description: "41 weeks · 30 words each week",
    icon: "📚",
    route: "/year8-spelling",
  },
];

export default function SpellingSubjectsPage() {
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
          color: "#3730a3",
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
        Choose a spelling course
      </h1>

      <p
        style={{
          margin: "0 0 28px",
          color: "#666",
          fontSize: "20px",
        }}
      >
        Select a year group to start learning.
      </p>

      {spellingCourses.map((course) => (
        <button
          key={course.route}
          type="button"
          onClick={() => router.push(course.route)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "28px 32px",
            borderRadius: "22px",
            background: "white",
            border: "1px solid #e5e7eb",
            marginBottom: "16px",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
            textAlign: "left",
            color: "inherit",
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
                width: "84px",
                height: "84px",
                borderRadius: "24px",
                background: "#eef0ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                flexShrink: 0,
              }}
            >
              {course.icon}
            </span>

            <span>
              <strong
                style={{
                  display: "block",
                  fontSize: "30px",
                  marginBottom: "8px",
                }}
              >
                {course.title}
              </strong>

              <span
                style={{
                  display: "block",
                  fontSize: "20px",
                  color: "#666",
                }}
              >
                {course.description}
              </span>
            </span>
          </span>

          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#3730a3",
              whiteSpace: "nowrap",
            }}
          >
            Start →
          </span>
        </button>
      ))}
    </main>
  );
}