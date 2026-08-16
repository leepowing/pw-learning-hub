"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { spellingWeeks } from "@/data/spellingWeeks";
import { getCurrentStudent } from "@/lib/studentStorage";
import {
  getFamilySpellingOverview,
  type FamilySpellingOverviewRow,
} from "@/lib/supabase";

type StudentOverview = {
  student: string;
  totalXP: number;
  completedWeeks: number;
  learnedWords: number;
  quizAverage: number;
  reviewCount: number;
};

function formatStudentName(student: string) {
  return (
    student.charAt(0).toUpperCase() +
    student.slice(1).toLowerCase()
  );
}

function createStudentOverview(
  student: string,
  rows: FamilySpellingOverviewRow[]
): StudentOverview {
  const studentRows = rows.filter(
    (row) => row.student === student
  );

  const learnedWords = studentRows.reduce(
    (total, row) =>
      total + Number(row.learned_count ?? 0),
    0
  );

  const completedWeeks = studentRows.filter((row) => {
    if (row.week === null) return false;

    const weekData = spellingWeeks[row.week];
    const numberOfWords =
      weekData?.words.length ?? 24;

    return (
      Number(row.learned_count ?? 0) >=
      numberOfWords
    );
  }).length;

  const completedQuizzes = studentRows.filter(
    (row) => Number(row.best_score ?? 0) > 0
  );

  const totalQuizScores = completedQuizzes.reduce(
    (total, row) =>
      total + Number(row.best_score ?? 0),
    0
  );

  const quizAverage =
    completedQuizzes.length > 0
      ? Math.round(
          (totalQuizScores /
            (completedQuizzes.length * 24)) *
            100
        )
      : 0;

  return {
    student,
    totalXP: Number(studentRows[0]?.total_xp ?? 0),
    completedWeeks,
    learnedWords,
    quizAverage,
    reviewCount: Number(
      studentRows[0]?.review_count ?? 0
    ),
  };
}

export default function SubjectsPage() {
  const router = useRouter();

  const [currentStudent, setCurrentStudent] =
    useState("");
  const [students, setStudents] = useState<
    StudentOverview[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadFamilyOverview() {
      const student = getCurrentStudent();

      if (student === "guest") {
        router.replace("/login");
        return;
      }

      setCurrentStudent(student);

      const rows =
        await getFamilySpellingOverview(
          "year7-spelling"
        );

      if (cancelled) return;

      if (rows.length === 0) {
        setLoadError(
          "Could not load the family progress."
        );
        setLoading(false);
        return;
      }

      const studentNames = Array.from(
        new Set(rows.map((row) => row.student))
      );

      const overview = studentNames.map(
        (studentName) =>
          createStudentOverview(
            studentName,
            rows
          )
      );

      overview.sort((first, second) => {
        if (first.student === student) return -1;
        if (second.student === student) return 1;

        return first.student.localeCompare(
          second.student
        );
      });

      setStudents(overview);
      setLoading(false);
    }

    loadFamilyOverview();

    return () => {
      cancelled = true;
    };
  }, [router]);

  return (
    <main
      style={{
        maxWidth: "1100px",
        width: "calc(100% - 48px)",
        margin: "48px auto",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          color: "#4f46e5",
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          marginBottom: "8px",
        }}
      >
        FAMILY PROGRESS
      </p>

      <h1
        style={{
          fontSize: "42px",
          margin: "0 0 10px",
        }}
      >
        Welcome
        {currentStudent
          ? `, ${formatStudentName(
              currentStudent
            )}`
          : ""}
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "19px",
          margin: "0 0 24px",
        }}
      >
        View both students&apos; spelling progress.
      </p>

      {loading && (
        <p style={{ fontSize: "18px" }}>
          Loading progress...
        </p>
      )}

      {loadError && (
        <p style={{ color: "#dc2626" }}>
          {loadError}
        </p>
      )}

      {!loading && !loadError && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "18px",
            marginBottom: "42px",
          }}
        >
          {students.map((student) => {
            const isCurrentStudent =
              student.student === currentStudent;

            return (
              <section
                key={student.student}
                style={{
                  padding: "24px",
                  borderRadius: "22px",
                  background: isCurrentStudent
                    ? "linear-gradient(135deg, #4338ca, #6366f1)"
                    : "white",
                  color: isCurrentStudent
                    ? "white"
                    : "#1f2937",
                  border: isCurrentStudent
                    ? "none"
                    : "1px solid #e5e7eb",
                  boxShadow:
                    "0 6px 18px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "28px",
                      margin: 0,
                    }}
                  >
                    {formatStudentName(
                      student.student
                    )}
                  </h2>

                  {isCurrentStudent && (
                    <span
                      style={{
                        padding: "6px 11px",
                        borderRadius: "999px",
                        background:
                          "rgba(255,255,255,0.18)",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      You
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(2, 1fr)",
                    gap: "14px",
                  }}
                >
                  <ProgressItem
                    label="Weeks completed"
                    value={`${student.completedWeeks} / 52`}
                    highlighted={isCurrentStudent}
                  />

                  <ProgressItem
                    label="Words learned"
                    value={`${student.learnedWords} / 1225`}
                    highlighted={isCurrentStudent}
                  />

                  <ProgressItem
                    label="Quiz average"
                    value={`${student.quizAverage}%`}
                    highlighted={isCurrentStudent}
                  />

                  <ProgressItem
                    label="Total XP"
                    value={`${student.totalXP} XP`}
                    highlighted={isCurrentStudent}
                  />

                  <ProgressItem
                    label="Words to review"
                    value={student.reviewCount}
                    highlighted={isCurrentStudent}
                  />
                </div>
              </section>
            );
          })}
        </div>
      )}

      <h2
        style={{
          fontSize: "34px",
          margin: "0 0 24px",
        }}
      >
        Choose a subject
      </h2>

      <div
        onClick={() => router.push("/spelling")}
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
          boxShadow:
            "0 6px 18px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "24px",
              background: "#eef0ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
            }}
          >
            📚
          </div>

          <div>
            <h3
              style={{
                fontSize: "30px",
                margin: "0 0 8px",
              }}
            >
              Spelling - Year 7
            </h3>

            <p
              style={{
                fontSize: "20px",
                margin: 0,
                color: "#666",
              }}
            >
              52 weeks of spelling practice
            </p>
          </div>
        </div>

        <div
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#3730a3",
          }}
        >
          Start →
        </div>
      </div>

      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 32px",
          borderRadius: "22px",
          background: "#f5f5f5",
          border: "1px solid #ececec",
          opacity: 0.65,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "24px",
              background: "#e8e8f4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
            }}
          >
            📚
          </div>

          <div>
            <h3
              style={{
                fontSize: "30px",
                margin: "0 0 8px",
              }}
            >
              Spelling - Year 8
            </h3>

            <p
              style={{
                fontSize: "20px",
                margin: 0,
                color: "#666",
              }}
            >
              Coming Soon
            </p>
          </div>
        </div>

        <div
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#5b5b8f",
          }}
        >
          Soon
        </div>
      </div>
    </main>
  );
}

function ProgressItem({
  label,
  value,
  highlighted,
}: {
  label: string;
  value: string | number;
  highlighted: boolean;
}) {
  return (
    <div
      style={{
        padding: "14px",
        borderRadius: "14px",
        background: highlighted
          ? "rgba(255,255,255,0.12)"
          : "#f8fafc",
      }}
    >
      <strong
        style={{
          display: "block",
          fontSize: "22px",
          marginBottom: "4px",
        }}
      >
        {value}
      </strong>

      <span
        style={{
          fontSize: "14px",
          color: highlighted
            ? "rgba(255,255,255,0.78)"
            : "#64748b",
        }}
      >
        {label}
      </span>
    </div>
  );
}