"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { spellingWeeks } from "@/data/spellingWeeks";
import { calculateLevel } from "@/lib/rewards";
import {
  getFamilySpellingOverview,
  supabase,
  type FamilySpellingOverviewRow,
} from "@/lib/supabase";

type StudentStats = {
  student: string;
  weeksCompleted: number;
  learnedWords: number;
  quizAverage: number;
  totalXP: number;
  reviewCount: number;
  level: number;
  xpInCurrentLevel: number;
  xpPerLevel: number;
  attemptedScore: number;
  attemptedWords: number;
};

function createStudentStats(student: string): StudentStats {
  return {
    student,
    weeksCompleted: 0,
    learnedWords: 0,
    quizAverage: 0,
    totalXP: 0,
    reviewCount: 0,
    level: 1,
    xpInCurrentLevel: 0,
    xpPerLevel: 200,
    attemptedScore: 0,
    attemptedWords: 0,
  };
}

export default function FamilyPage() {
  const router = useRouter();

  const [students, setStudents] = useState<
    Record<string, StudentStats>
  >({
    greta: createStudentStats("greta"),
    mathis: createStudentStats("mathis"),
  });

  const [currentStudent, setCurrentStudent] = useState("");
  const [loading, setLoading] = useState(true);

  const availableWeekNumbers =
    Object.keys(spellingWeeks).map(Number);

  const totalWeeks = availableWeekNumbers.length;

  const totalWords = availableWeekNumbers.reduce(
    (total, weekNumber) =>
      total + (spellingWeeks[weekNumber]?.words.length ?? 0),
    0
  );

  useEffect(() => {
    let cancelled = false;

    async function loadFamilyOverview() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const { data: profile, error: profileError } =
        await supabase
          .from("profiles")
          .select("student")
          .eq("id", user.id)
          .single();

      if (profileError || !profile) {
        console.error(
          "Could not load student profile:",
          profileError
        );

        router.replace("/login");
        return;
      }

      const loggedInStudent =
        profile.student.trim().toLowerCase();

      window.localStorage.setItem(
        "currentStudent",
        loggedInStudent
      );

      const rows = await getFamilySpellingOverview(
        "year7-spelling"
      );

      if (cancelled) {
        return;
      }

      const loadedStudents: Record<string, StudentStats> = {
        greta: createStudentStats("greta"),
        mathis: createStudentStats("mathis"),
      };

      rows.forEach((row: FamilySpellingOverviewRow) => {
        const studentKey = row.student
          .trim()
          .toLowerCase();

        if (!loadedStudents[studentKey]) {
          loadedStudents[studentKey] =
            createStudentStats(studentKey);
        }

        const student = loadedStudents[studentKey];

const weekWords =
  row.week === null
    ? 0
    : spellingWeeks[row.week]?.words.length ?? 0;

        const learnedCount =
          Number(row.learned_count ?? 0);

        const bestScore =
          Number(row.best_score ?? 0);

        student.learnedWords += learnedCount;

        if (
          weekWords > 0 &&
          learnedCount >= weekWords
        ) {
          student.weeksCompleted += 1;
        }

        if (weekWords > 0 && bestScore > 0) {
          student.attemptedScore += bestScore;
          student.attemptedWords += weekWords;
        }

        student.totalXP = Math.max(
          student.totalXP,
          Number(row.total_xp ?? 0)
        );

        student.reviewCount = Math.max(
          student.reviewCount,
          Number(row.review_count ?? 0)
        );
      });

      Object.values(loadedStudents).forEach((student) => {
        student.quizAverage =
          student.attemptedWords > 0
            ? Math.round(
                (student.attemptedScore /
                  student.attemptedWords) *
                  100
              )
            : 0;

        const levelDetails =
          calculateLevel(student.totalXP);

        student.level = levelDetails.level;
        student.xpInCurrentLevel =
          levelDetails.xpInCurrentLevel;
        student.xpPerLevel =
          levelDetails.xpPerLevel;
      });

      setCurrentStudent(loggedInStudent);
      setStudents(loadedStudents);
      setLoading(false);
    }

    loadFamilyOverview();

    return () => {
      cancelled = true;
    };
  }, [router]);

async function handleSignOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Could not sign out:", error);
    alert("Could not sign out. Please try again.");
    return;
  }

  window.localStorage.removeItem("currentStudent");

  router.replace("/login");
  router.refresh();
}

  if (loading) {
    return (
      <main
        style={{
          maxWidth: "1100px",
          margin: "70px auto",
          padding: "0 24px",
        }}
      >
        <h1>Loading family progress...</h1>
      </main>
    );
  }

  const currentName =
    currentStudent.charAt(0).toUpperCase() +
    currentStudent.slice(1);

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "50px auto",
        padding: "0 24px",
      }}
    >
<button
  type="button"
  onClick={handleSignOut}
  style={{
    display: "block",
    marginLeft: "auto",
    marginBottom: "20px",
    padding: "10px 18px",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    background: "white",
    color: "#3730a3",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
  }}
>
  Sign out
</button>

      <p
        style={{
          color: "#4f46e5",
          fontWeight: 800,
          letterSpacing: "2px",
          marginBottom: "8px",
        }}
      >
        FAMILY PROGRESS
      </p>

      <h1
        style={{
          fontSize: "46px",
          margin: "0 0 8px",
        }}
      >
        Welcome, {currentName}
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "19px",
          marginBottom: "30px",
        }}
      >
        View both students’ spelling progress.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "22px",
        }}
      >
        {["greta", "mathis"].map((studentKey) => {
          const student = students[studentKey];
          const isCurrent =
            studentKey === currentStudent;

          const displayName =
            studentKey.charAt(0).toUpperCase() +
            studentKey.slice(1);

          return (
            <article
              key={studentKey}
              style={{
                position: "relative",
                borderRadius: "28px",
                padding: "28px",
                color: isCurrent ? "white" : "#111827",
                background: isCurrent
                  ? "linear-gradient(135deg, #3531c9, #5b3df5)"
                  : "white",
                border: isCurrent
                  ? "none"
                  : "1px solid #e5e7eb",
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              <h2
                style={{
                  fontSize: "31px",
                  margin: "0 0 22px",
                }}
              >
                {displayName}
              </h2>

              {isCurrent && (
                <span
                  style={{
                    position: "absolute",
                    top: "26px",
                    right: "26px",
                    padding: "7px 15px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.18)",
                    fontWeight: 700,
                  }}
                >
                  You
                </span>
              )}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                <Stat
                  value={`${student.weeksCompleted} / ${totalWeeks}`}
                  label="Weeks completed"
                  highlighted={isCurrent}
                />

                <Stat
                  value={`${student.learnedWords} / ${totalWords}`}
                  label="Words learned"
                  highlighted={isCurrent}
                />

                <Stat
                  value={`${student.quizAverage}%`}
                  label="Quiz average"
                  highlighted={isCurrent}
                />

                <Stat
                  value={`${student.totalXP} XP`}
                  label="Total XP"
                  highlighted={isCurrent}
                />

                <Stat
                  value={`Level ${student.level}`}
                  label={`${student.xpInCurrentLevel} / ${student.xpPerLevel} XP`}
                  highlighted={isCurrent}
                />

                <Stat
                  value={student.reviewCount}
                  label="Words to review"
                  highlighted={isCurrent}
                />
              </div>
            </article>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => router.push("/subjects")}
        style={{
          width: "100%",
          marginTop: "24px",
          padding: "16px",
          border: "none",
          borderRadius: "16px",
          background: "#3730a3",
          color: "white",
          fontSize: "18px",
          fontWeight: 800,
          cursor: "pointer",
        }}
      >
        Continue to subjects →
      </button>
    </main>
  );
}

function Stat({
  value,
  label,
  highlighted,
}: {
  value: string | number;
  label: string;
  highlighted: boolean;
}) {
  return (
    <div
      style={{
        borderRadius: "17px",
        padding: "16px",
        background: highlighted
          ? "rgba(255,255,255,0.12)"
          : "#f7f7ff",
      }}
    >
      <strong
        style={{
          display: "block",
          fontSize: "23px",
          marginBottom: "3px",
        }}
      >
        {value}
      </strong>

      <span
        style={{
          fontSize: "14px",
          color: highlighted
            ? "rgba(255,255,255,0.78)"
            : "#666",
        }}
      >
        {label}
      </span>
    </div>
  );
}