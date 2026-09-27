"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentStudent } from "@/lib/studentStorage";

const subjects = [
  {
    title: "Spelling",
    description: "Year 7 and Year 8 spelling courses",
    icon: "📚",
    route: "/subjects/spelling",
    iconBackground: "#eef0ff",
    colour: "#3730a3",
  },
  {
    title: "Mathematics",
    description: "Hong Kong Secondary Mathematics",
    icon: "🧮",
    route: "/subjects/mathematics",
    iconBackground: "#ecfdf5",
    colour: "#047857",
  },
  {
    title: "Knowledge Organisers",
    description: "Year 8 subjects, mind maps, flashcards and quizzes",
    icon: "🧠",
    route: "/knowledge-organisers",
    iconBackground: "#fff7ed",
    colour: "#c2410c",
  },
];

export default function SubjectsPage() {
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
        onClick={() => router.push("/family")}
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
        ← Back to family progress
      </button>

      <h1
        style={{
          fontSize: "42px",
          margin: "0 0 8px",
        }}
      >
        Choose a subject
      </h1>

      <p
        style={{
          margin: "0 0 28px",
          color: "#666",
          fontSize: "20px",
        }}
      >
        Select a subject to continue learning.
      </p>

      {subjects.map((subject) => (
        <button
          key={subject.route}
          type="button"
          onClick={() => router.push(subject.route)}
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
                background: subject.iconBackground,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                flexShrink: 0,
              }}
            >
              {subject.icon}
            </span>

            <span>
              <strong
                style={{
                  display: "block",
                  fontSize: "30px",
                  marginBottom: "8px",
                }}
              >
                {subject.title}
              </strong>

              <span
                style={{
                  display: "block",
                  fontSize: "20px",
                  color: "#666",
                }}
              >
                {subject.description}
              </span>
            </span>
          </span>

          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: subject.colour,
              whiteSpace: "nowrap",
            }}
          >
            Choose →
          </span>
        </button>
      ))}
    </main>
  );
}
