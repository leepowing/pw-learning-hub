import Link from "next/link";

export default function Home() {
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
          <div className="student-card">
            <span>G</span>
            <strong>Greta</strong>
            <small>Ready to learn</small>
          </div>

          <div className="student-card">
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
            <h3>Spelling</h3>
            <p>30 weeks of spelling practice</p>
          </div>

          <strong>Start →</strong>
        </Link>
      </section>
    </main>
  );
}