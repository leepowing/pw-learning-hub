"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState("");

  const chooseStudent = (student: string) => {
    setSelectedStudent(student);
    window.localStorage.setItem("currentStudent", student);
  };

  return (
      <main className="home-page">
      <header className="home-header">
        <div className="logo">🎓</div>

        <div>
          <p className="small-title">LEARN • PRACTISE • PROGRESS</p>
          <h1>PW Learning Hub</h1>
        </div>
      </header>

      <section className="welcome-card">
        <p className="welcome-label">👋 Welcome back</p>
        <h2>Small steps.<br />Big progress.</h2>

        <p>
          A learning space for Greta and Mathis.
        </p>
      </section>

      <section className="student-section">
        <h2>Choose a student</h2>

        <div className="student-grid">
<div
  className={`student-card ${
    selectedStudent === "greta" ? "student-card-selected" : ""
  }`}
  onClick={() => chooseStudent("greta")}
>
              <span>G</span>
            <strong>Greta</strong>
            <small>Ready to learn</small>
          </div>

<div
  className={`student-card ${
    selectedStudent === "mathis" ? "student-card-selected" : ""
  }`}
  onClick={() => chooseStudent("mathis")}
>

            <span>M</span>
            <strong>Mathis</strong>
            <small>Ready to learn</small>
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