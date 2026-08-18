"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { spellingWeeks } from "@/data/spellingWeeks";
import { calculateLevel } from "@/lib/rewards";
import { getAchievements } from "@/lib/achievements";
import { getCurrentStudent } from "@/lib/studentStorage";
import {
  getSpellingProgress,
  getStudentMistakes,
  getStudentXP,
} from "@/lib/supabase";

type WeekProgress = {
  learned: number;
  bestScore: number;
  mastered: boolean;
};

type SpellingProgressRow = {
  week: number;
  learned_words: string[] | null;
  best_score: number | null;
  mastered: boolean | null;
};


export default function SpellingPage() {
  const [progress, setProgress] = useState<
    Record<number, WeekProgress>
  >({});
  const [reviewCount, setReviewCount] = useState(0);
  const [totalXP, setTotalXP] = useState(0);

  const availableWeekNumbers = Object.keys(spellingWeeks).map(Number);
  const totalWeeks = Math.max(...availableWeekNumbers);

useEffect(() => {
  let cancelled = false;

  async function loadDashboard() {
    const student = getCurrentStudent();
    const course = "year7-spelling";

    if (student === "guest") {
      console.error("No student has been selected.");

      if (!cancelled) {
        setProgress({});
        setTotalXP(0);
        setReviewCount(0);
      }

      return;
    }

    const [progressRows, xp, mistakes] = await Promise.all([
      getSpellingProgress(student, course),
      getStudentXP(student, course),
      getStudentMistakes(student, course),
    ]);

    if (cancelled) {
      return;
    }

    const loadedProgress: Record<number, WeekProgress> = {};

    for (let weekNumber = 1; weekNumber <= totalWeeks; weekNumber++) {
      loadedProgress[weekNumber] = {
        learned: 0,
        bestScore: 0,
        mastered: false,
      };
    }

    (progressRows as SpellingProgressRow[]).forEach((row) => {
      loadedProgress[row.week] = {
        learned: Array.isArray(row.learned_words)
          ? row.learned_words.length
          : 0,
        bestScore: row.best_score ?? 0,
        mastered: row.mastered ?? false,
      };
    });

    setProgress(loadedProgress);
    setTotalXP(xp);
    setReviewCount(mistakes.length);
  }

  loadDashboard();

  return () => {
    cancelled = true;
  };
}, [totalWeeks]);

const totalAvailableWeeks = availableWeekNumbers.length;

const totalWords = availableWeekNumbers.reduce(
  (total, weekNumber) =>
    total + (spellingWeeks[weekNumber]?.words.length ?? 0),
  0
);

const learnedWords = availableWeekNumbers.reduce(
  (total, weekNumber) =>
    total + (progress[weekNumber]?.learned ?? 0),
  0
);

const masteredWeeks = availableWeekNumbers.filter(
  (weekNumber) => progress[weekNumber]?.mastered
).length;

const completedWeeks = availableWeekNumbers.filter(
  (weekNumber) => {
    const totalWeekWords =
      spellingWeeks[weekNumber]?.words.length ?? 0;

    return (
      totalWeekWords > 0 &&
      progress[weekNumber]?.learned === totalWeekWords
    );
  }
).length;

const attemptedWeeks = availableWeekNumbers.filter(
  (weekNumber) => (progress[weekNumber]?.bestScore ?? 0) > 0
);

const attemptedQuizScore = attemptedWeeks.reduce(
  (total, weekNumber) =>
    total + (progress[weekNumber]?.bestScore ?? 0),
  0
);

const attemptedQuizWords = attemptedWeeks.reduce(
  (total, weekNumber) =>
    total + (spellingWeeks[weekNumber]?.words.length ?? 0),
  0
);

const quizAverage =
  attemptedQuizWords > 0
    ? Math.round(
        (attemptedQuizScore / attemptedQuizWords) * 100
      )
    : 0;
const level = calculateLevel(totalXP);
const achievements = getAchievements({
  totalXP,
  masteredWeeks,
  learnedWords,
  quizAverage,
});

const unlockedAchievements = achievements.filter(
  (achievement) => achievement.unlocked
).length;

  return (
    <main className="home-page">
<Link href="/subjects">← Back to subjects</Link>

      <section className="student-section">
        <p className="small-title">SPELLING PROGRAMME</p>

        <h1>52 Weeks of Spelling</h1>

        <p>
          Choose a week to learn, practise and complete a quiz.
        </p>
<section className="dashboard-summary">
<div className="dashboard-card level-dashboard-card">
  <span className="dashboard-icon">⭐</span>

  <strong>Level {level.level}</strong>

  <p>
    {level.xpInCurrentLevel} / {level.xpPerLevel} XP
  </p>

  <div className="level-progress-track">
    <div
      className="level-progress-fill"
      style={{
        width: `${(level.xpInCurrentLevel / level.xpPerLevel) * 100}%`,
      }}
    />
  </div>

  <small>
    {level.xpPerLevel - level.xpInCurrentLevel} XP to next level
  </small>
</div>
  <div className="dashboard-card">
    <span className="dashboard-icon">🏆</span>
<strong>
  {completedWeeks} / {totalAvailableWeeks}
</strong>

<p>Weeks Completed</p>  </div>

  <div className="dashboard-card">
    <span className="dashboard-icon">📚</span>
    <strong>{learnedWords} / {totalWords}</strong>
    <p>Words Learned</p>
  </div>

  <div className="dashboard-card">
    <span className="dashboard-icon">⭐</span>
    <strong>{quizAverage}%</strong>
    <p>Quiz Average</p>
  </div>
</section>

<section className="achievements-section">
  <div className="achievements-heading">
    <div>
      <p className="small-title">ACHIEVEMENTS</p>
      <h2>🏅 Badge Collection</h2>
    </div>

    <strong>
      {unlockedAchievements} / {achievements.length} unlocked
    </strong>
  </div>

  <div className="achievements-grid">
    {achievements.map((achievement) => (
      <article
        key={achievement.id}
        className={`achievement-card ${
          achievement.unlocked
            ? "achievement-unlocked"
            : "achievement-locked"
        }`}
      >
        <span className="achievement-icon">
          {achievement.unlocked ? achievement.icon : "🔒"}
        </span>

        <div>
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>

          <span className="achievement-status">
            {achievement.unlocked ? "Unlocked" : "Locked"}
          </span>
        </div>
      </article>
    ))}
  </div>
</section>

<section className="review-centre-card">
  <div>
    <p className="small-title">SMART REVIEW</p>
    <h2>📚 Review Centre</h2>

    <p>
      {reviewCount > 0
        ? `${reviewCount} words need review`
        : "No words need review right now."}
    </p>
  </div>

  {reviewCount > 0 ? (
    <Link href="/spelling/review" className="review-button">
      Start Review →
    </Link>
  ) : (
    <span className="review-complete">
      ✅ All caught up
    </span>
  )}
</section>

        <div className="week-grid">
            {Array.from({ length: totalWeeks }, (_, index) => {
            const weekNumber = index + 1;
            const weekData = spellingWeeks[weekNumber];
            const weekProgress = progress[weekNumber] ?? {
              learned: 0,
              bestScore: 0,
              mastered: false,
            };

            const totalWords = weekData?.words.length ?? 0;

            const percentage =
              totalWords > 0
                ? (weekProgress.learned / totalWords) * 100
                : 0;

            const completed =
              totalWords > 0 &&
              weekProgress.learned === totalWords;

            if (!weekData) {
              return (
                <article
                  key={weekNumber}
                  className="week-card week-card-disabled"
                >
                  <div className="week-number">
                    {weekNumber}
                  </div>

                  <h2>Week {weekNumber}</h2>

                  <p>Coming soon</p>
                </article>
              );
            }

            return (
              <Link
                key={weekNumber}
                href={`/spelling/${weekNumber}`}
                className="week-card-link"
              >
                <article className="week-card">
                  <div className="week-number">
                    {weekNumber}
                  </div>

                  <h2>{weekData.title}</h2>

                  <p>{totalWords} spelling words</p>

                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  <p className="progress-text">
                    {weekProgress.learned} / {totalWords} Learned
                  </p>

                  <p className="best-score-card">
                    🏆 Best Quiz: {weekProgress.bestScore} /{" "}
                    {totalWords}
                  </p>

                {weekProgress.mastered ? (
                <span className="badge">
                      🏆 Mastered
                </span>
                ) : completed ? (
                <span className="badge">
                      ✅ Completed
                </span>
                ) : (
                <span className="in-progress-badge">
                    In progress
                </span>
                )}
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}