"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
  getCurrentStudent,
  getMathsFlashcardProgress,
} from "@/lib/studentStorage";

import type {
  MathsFlashcardProgressMap,
} from "@/lib/studentStorage";

import {
  getMathsFlashcardProgressFromSupabase,
} from "@/lib/supabase";

function formatCardName(cardId: string) {
  return cardId
    .replace(/^s\d+-c\d+-/, "")
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

function formatDate(dateValue: string) {
  if (!dateValue) {
    return "Not yet";
  }

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(dateValue));
}

export default function FlashcardProgressPage() {
  const [student, setStudent] = useState("guest");
  const [progress, setProgress] =
    useState<MathsFlashcardProgressMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
  let cancelled = false;

  async function loadProgress() {
    const currentStudent = getCurrentStudent();
    const localProgress = getMathsFlashcardProgress();

    setStudent(currentStudent);

    if (currentStudent === "guest") {
      setProgress(localProgress);
      setLoaded(true);
      return;
    }

    const cloudRows =
      await getMathsFlashcardProgressFromSupabase(
        currentStudent
      );

    if (cancelled) {
      return;
    }

    if (cloudRows.length === 0) {
      setProgress(localProgress);
      setLoaded(true);
      return;
    }

    const cloudProgress =
      cloudRows.reduce<MathsFlashcardProgressMap>(
        (result, row) => {
          result[row.card_id] = {
            cardId: row.card_id,
            attempts: row.attempts,
            correct: row.correct,
            practice: row.practice,
            lastResult: row.last_result,
            lastPractisedAt:
              row.last_practised_at,
          };

          return result;
        },
        {}
      );

    setProgress(cloudProgress);
    setLoaded(true);
  }

  void loadProgress();

  return () => {
    cancelled = true;
  };
}, []);


  const records = useMemo(
    () => Object.values(progress),
    [progress]
  );

  const totalAttempts = records.reduce(
    (total, item) => total + item.attempts,
    0
  );

  const totalCorrect = records.reduce(
    (total, item) => total + item.correct,
    0
  );

  const totalPractice = records.reduce(
    (total, item) => total + item.practice,
    0
  );

  const accuracy =
    totalAttempts === 0
      ? 0
      : Math.round((totalCorrect / totalAttempts) * 100);

  const lastPractised = records.reduce(
    (latest, item) => {
      if (!item.lastPractisedAt) {
        return latest;
      }

      if (!latest) {
        return item.lastPractisedAt;
      }

      return new Date(item.lastPractisedAt) >
        new Date(latest)
        ? item.lastPractisedAt
        : latest;
    },
    ""
  );

  const weakCards = [...records]
    .filter(
      (item) =>
        item.practice > 0 ||
        item.lastResult === "practice"
    )
    .sort((first, second) => {
      const firstAccuracy =
        first.attempts === 0
          ? 0
          : first.correct / first.attempts;

      const secondAccuracy =
        second.attempts === 0
          ? 0
          : second.correct / second.attempts;

      if (firstAccuracy !== secondAccuracy) {
        return firstAccuracy - secondAccuracy;
      }

      return second.practice - first.practice;
    })
    .slice(0, 10);

  if (!loaded) {
    return (
      <main
        style={{
          maxWidth: "1050px",
          width: "calc(100% - 40px)",
          margin: "42px auto 70px",
        }}
      >
        <p>Loading progress...</p>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1050px",
        width: "calc(100% - 40px)",
        margin: "42px auto 70px",
      }}
    >
      <Link
        href="/maths/flashcards"
        style={{
          display: "inline-block",
          marginBottom: "26px",
          color: "#15803d",
          fontSize: "17px",
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        ← Back to Flashcards
      </Link>

      <header style={{ marginBottom: "32px" }}>
        <p
          style={{
            margin: "0 0 8px",
            color: "#4f46e5",
            fontWeight: 900,
            letterSpacing: "1.4px",
          }}
        >
          FORMULA PRACTICE
        </p>

        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "46px",
          }}
        >
          Flashcard Progress
        </h1>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "19px",
          }}
        >
          Progress for{" "}
          <strong style={{ textTransform: "capitalize" }}>
            {student}
          </strong>
        </p>
      </header>

      {records.length === 0 ? (
        <section
          style={{
            padding: "34px",
            borderRadius: "24px",
            background: "white",
            border: "1px solid #e5e7eb",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginBottom: "14px",
              fontSize: "52px",
            }}
          >
            📚
          </div>

          <h2 style={{ margin: "0 0 10px" }}>
            No progress yet
          </h2>

          <p
            style={{
              margin: "0 0 24px",
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Complete some formula flashcards to see your
            progress here.
          </p>

          <Link
            href="/maths/flashcards"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              borderRadius: "14px",
              background: "#4f46e5",
              color: "white",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Start practising →
          </Link>
        </section>
      ) : (
        <>
          <section
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <SummaryCard
              label="Cards practised"
              value={records.length}
              colour="#4f46e5"
            />

            <SummaryCard
              label="Total attempts"
              value={totalAttempts}
              colour="#0f766e"
            />

            <SummaryCard
              label="Remembered"
              value={totalCorrect}
              colour="#15803d"
            />

            <SummaryCard
              label="Need practice"
              value={totalPractice}
              colour="#dc2626"
            />

            <SummaryCard
              label="Accuracy"
              value={`${accuracy}%`}
              colour="#d97706"
            />
          </section>

          <section
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "white",
              border: "1px solid #e5e7eb",
              marginBottom: "24px",
            }}
          >
            <h2 style={{ margin: "0 0 8px" }}>
              Recent activity
            </h2>

            <p
              style={{
                margin: 0,
                color: "#64748b",
                fontSize: "17px",
              }}
            >
              Last practised: {formatDate(lastPractised)}
            </p>
          </section>

          <section
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "white",
              border: "1px solid #e5e7eb",
            }}
          >
            <h2 style={{ margin: "0 0 8px" }}>
              Formulas to review
            </h2>

            <p
              style={{
                margin: "0 0 22px",
                color: "#64748b",
              }}
            >
              These cards have been marked as needing more
              practice.
            </p>

            {weakCards.length === 0 ? (
              <div
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  background: "#f0fdf4",
                  color: "#166534",
                  fontWeight: 800,
                }}
              >
                Excellent — no cards currently need more
                practice.
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gap: "12px",
                }}
              >
                {weakCards.map((item) => {
                  const cardAccuracy =
                    item.attempts === 0
                      ? 0
                      : Math.round(
                          (item.correct / item.attempts) *
                            100
                        );

                  return (
                    <article
                      key={item.cardId}
                      style={{
                        padding: "18px",
                        borderRadius: "16px",
                        border: "1px solid #fecaca",
                        background: "#fff7f7",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "16px",
                          flexWrap: "wrap",
                        }}
                      >
                        <div>
                          <strong
                            style={{
                              display: "block",
                              marginBottom: "6px",
                              fontSize: "18px",
                            }}
                          >
                            {formatCardName(item.cardId)}
                          </strong>

                          <span
                            style={{
                              color: "#64748b",
                            }}
                          >
                            {item.attempts} attempts ·{" "}
                            {item.practice} need practice
                          </span>
                        </div>

                        <span
                          style={{
                            padding: "8px 12px",
                            borderRadius: "999px",
                            background: "#fee2e2",
                            color: "#b91c1c",
                            fontWeight: 900,
                          }}
                        >
                          {cardAccuracy}% accuracy
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}

function SummaryCard({
  label,
  value,
  colour,
}: {
  label: string;
  value: number | string;
  colour: string;
}) {
  return (
    <article
      style={{
        padding: "22px",
        borderRadius: "20px",
        background: "white",
        border: "1px solid #e5e7eb",
      }}
    >
      <p
        style={{
          margin: "0 0 10px",
          color: "#64748b",
          fontWeight: 700,
        }}
      >
        {label}
      </p>

      <strong
        style={{
          color: colour,
          fontSize: "34px",
        }}
      >
        {value}
      </strong>
    </article>
  );
}