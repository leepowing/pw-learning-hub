"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getStudentScores,
  getStudentXP,
} from "@/lib/supabase";

type ScoreRecord = {
  id: number;
  student: string;
  course: string;
  week: number;
  score: number;
  best_score: number;
  xp: number;
  created_at: string;
};

export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [gretaScores, setGretaScores] = useState<ScoreRecord[]>([]);
  const [mathisScores, setMathisScores] = useState<ScoreRecord[]>([]);
  const [loadingScores, setLoadingScores] = useState(true);
  const [gretaXP, setGretaXP] = useState(0);
  const [mathisXP, setMathisXP] = useState(0);

  useEffect(() => {
    const savedStudent =
      window.localStorage.getItem("currentStudent");

    if (savedStudent) {
      setSelectedStudent(savedStudent);
    }

 async function loadScores() {
  try {
    const [
      gretaData,
      mathisData,
      gretaXPData,
      mathisXPData,
    ] = await Promise.all([
      getStudentScores("greta", "year7-spelling"),
      getStudentScores("mathis", "year7-spelling"),
      getStudentXP("greta"),
      getStudentXP("mathis"),
    ]);

    setGretaScores(gretaData as ScoreRecord[]);
    setMathisScores(mathisData as ScoreRecord[]);
    setGretaXP(gretaXPData);
    setMathisXP(mathisXPData);
  } catch (error) {
    console.error("Could not load scores:", error);
  } finally {
    setLoadingScores(false);
  }
}

    loadScores();
  }, []);

  const chooseStudent = (student: string) => {
    setSelectedStudent(student);
    window.localStorage.setItem("currentStudent", student);
  };

  const getBestScore = (scores: ScoreRecord[]) => {
    if (scores.length === 0) {
      return null;
    }

    return Math.max(
      ...scores.map((record) => record.best_score ?? record.score)
    );
  };

  const gretaBestScore = getBestScore(gretaScores);
  const mathisBestScore = getBestScore(mathisScores);

  return (
    <main className="home-page">
      <header className="home-header">
        <div className="logo">🎓</div>

        <div>
          <p className="small-title">
            LEARN • PRACTISE • PROGRESS
          </p>
          <h1>PW Learning Hub</h1>
        </div>
      </header>

      <section className="welcome-card">
        <p className="welcome-label">👋 Welcome back</p>

        <h2>
          Small steps.
          <br />
          Big progress.
        </h2>

        <p>A learning space for Greta and Mathis.</p>
      </section>

      <section className="student-section">
        <h2>Choose a student</h2>

        <div className="student-grid">
          <div
            className={`student-card ${
              selectedStudent === "greta"
                ? "student-card-selected"
                : ""
            }`}
            onClick={() => chooseStudent("greta")}
          >
            <span>G</span>
            <strong>Greta</strong>

            <small>
              {loadingScores
                ? "Loading score..."
                : gretaBestScore !== null
                  ? `Best quiz score: ${gretaBestScore}`
                  : "No quiz score yet"}
            </small>
            <p>⚡ XP: {gretaXP}</p>
          </div>

          <div
            className={`student-card ${
              selectedStudent === "mathis"
                ? "student-card-selected"
                : ""
            }`}
            onClick={() => chooseStudent("mathis")}
          >
            <span>M</span>
            <strong>Mathis</strong>

            <small>
              {loadingScores
                ? "Loading score..."
                : mathisBestScore !== null
                  ? `Best quiz score: ${mathisBestScore}`
                  : "No quiz score yet"}
            </small>
            <p>⚡ XP: {mathisXP}</p>
          </div>
        </div>
      </section>

      <section className="subject-section">
        <h2>Choose a subject</h2>

        <Link href="/spelling" className="subject-card">
          <span className="subject-icon">📚</span>

          <div>
            <h3>Spelling - Year 7</h3>
            <p>30 weeks of spelling practice</p>
          </div>

          <strong>Start →</strong>
        </Link>

        <article className="subject-card subject-card-disabled">
          <span className="subject-icon">📚</span>

          <div>
            <h3>Spelling - Year 8</h3>
            <p>Coming Soon</p>
          </div>

          <strong>Soon</strong>
        </article>
      </section>
    </main>
  );
}