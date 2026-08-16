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
  mergeLegacySpellingProgress,
  migrateLegacyXP,
  migrateLegacyMistakes,
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

async function migrateLocalProgress(
  student: string,
  course: string
) {
  const migrationKey =
    `${student}_fullLocalStorageMigrationV3`;

  if (
    window.localStorage.getItem(migrationKey) === "true"
  ) {
    return;
  }

  let allSucceeded = true;

  function getFirstValue(keys: string[]) {
    for (const key of keys) {
      const value = window.localStorage.getItem(key);

      if (value !== null) {
        return value;
      }
    }

    return null;
  }

  // 搬移每星期已學單字、最佳分數和完成狀態
  for (
    let weekNumber = 1;
    weekNumber <= totalWeeks;
    weekNumber++
  ) {
    const learnedValue = getFirstValue([
      `${student}_week${weekNumber}Learned`,
      `week${weekNumber}Learned`,
    ]);

    const bestScoreValue = getFirstValue([
      `${student}_week${weekNumber}BestScore`,
      `week${weekNumber}BestScore`,
    ]);

    const masteredValue = getFirstValue([
      `${student}_week${weekNumber}Mastered`,
      `week${weekNumber}Mastered`,
    ]);

    const hasLocalProgress =
      learnedValue !== null ||
      bestScoreValue !== null ||
      masteredValue !== null;

    if (!hasLocalProgress) {
      continue;
    }

    let learnedWords: string[] = [];

    try {
      const parsed = learnedValue
        ? JSON.parse(learnedValue)
        : [];

      if (Array.isArray(parsed)) {
        learnedWords = parsed
          .map((item) => {
            if (typeof item === "string") {
              return item;
            }

            if (typeof item === "number") {
              return spellingWeeks[
                weekNumber
              ]?.words[item]?.word;
            }

            return undefined;
          })
          .filter(
            (word): word is string =>
              typeof word === "string"
          );
      }
    } catch {
      learnedWords = [];
    }

    learnedWords = [...new Set(learnedWords)];

    const parsedScore = Number(
      bestScoreValue ?? "0"
    );

    const bestScore = Number.isFinite(parsedScore)
      ? parsedScore
      : 0;

    const mastered = masteredValue === "true";

    const saved =
      await mergeLegacySpellingProgress(
        student,
        course,
        weekNumber,
        learnedWords,
        bestScore,
        mastered
      );

    if (!saved) {
      allSucceeded = false;
    }
  }

  // 搬移舊 XP；只補回 Supabase 尚欠的 XP
  const xpKeys = [
    `${student}_pwTotalXP`,
    `${student}_totalXP`,
    "pwTotalXP",
    "totalXP",
  ];

  const xpValues = xpKeys
    .map((key) =>
      Number(window.localStorage.getItem(key))
    )
    .filter(
      (value) =>
        Number.isFinite(value) && value >= 0
    );

  const legacyTotalXP =
    xpValues.length > 0
      ? Math.max(...xpValues)
      : 0;

  if (legacyTotalXP > 0) {
    const xpSaved = await migrateLegacyXP(
      student,
      legacyTotalXP,
      course
    );

    if (!xpSaved) {
      allSucceeded = false;
    }
  }

  // 尋找單字屬於哪一星期
  function findWeekForWord(word: string) {
    const normalisedWord =
      word.trim().toLowerCase();

    for (
      let weekNumber = 1;
      weekNumber <= totalWeeks;
      weekNumber++
    ) {
      const found = spellingWeeks[
        weekNumber
      ]?.words.some(
        (item) =>
          item.word.trim().toLowerCase() ===
          normalisedWord
      );

      if (found) {
        return weekNumber;
      }
    }

    return 1;
  }

  const mistakeCounts = new Map<
    string,
    number
  >();

  const countKeys = [
    `${student}_reviewMistakeCounts`,
    "reviewMistakeCounts",
  ];

  for (const key of countKeys) {
    const savedCounts =
      window.localStorage.getItem(key);

    if (!savedCounts) {
      continue;
    }

    try {
      const parsed = JSON.parse(savedCounts);

      if (
        parsed &&
        typeof parsed === "object" &&
        !Array.isArray(parsed)
      ) {
        Object.entries(parsed).forEach(
          ([word, value]) => {
            const normalisedWord =
              word.trim().toLowerCase();

            const count = Number(value);

            if (
              normalisedWord &&
              Number.isFinite(count)
            ) {
              mistakeCounts.set(
                normalisedWord,
                Math.max(
                  mistakeCounts.get(
                    normalisedWord
                  ) ?? 0,
                  count,
                  1
                )
              );
            }
          }
        );
      }
    } catch {
      console.error(
        `Could not read localStorage key: ${key}`
      );
    }
  }

  const legacyMistakeMap = new Map<
    string,
    {
      word: string;
      week: number;
      wrongCount: number;
    }
  >();

  function addLegacyMistake(
    word: string,
    week?: number,
    wrongCount?: number
  ) {
    const normalisedWord =
      word.trim().toLowerCase();

    if (!normalisedWord) {
      return;
    }

    const validWeek =
      typeof week === "number" &&
      Number.isFinite(week) &&
      week >= 1
        ? week
        : findWeekForWord(normalisedWord);

    const validCount = Math.max(
      Number.isFinite(wrongCount)
        ? Number(wrongCount)
        : 1,
      mistakeCounts.get(normalisedWord) ?? 1,
      1
    );

    const existing =
      legacyMistakeMap.get(normalisedWord);

    legacyMistakeMap.set(normalisedWord, {
      word: normalisedWord,
      week: existing?.week ?? validWeek,
      wrongCount: Math.max(
        existing?.wrongCount ?? 1,
        validCount
      ),
    });
  }

  // 搬移 Review Centre 的單字
  const reviewWordKeys = [
    `${student}_reviewWords`,
    "reviewWords",
  ];

  for (const key of reviewWordKeys) {
    const savedWords =
      window.localStorage.getItem(key);

    if (!savedWords) {
      continue;
    }

    try {
      const parsed = JSON.parse(savedWords);

      if (Array.isArray(parsed)) {
        parsed.forEach((word) => {
          if (typeof word === "string") {
            addLegacyMistake(word);
          }
        });
      }
    } catch {
      console.error(
        `Could not read localStorage key: ${key}`
      );
    }
  }

  // 搬移舊版 mistakeBook
  const mistakeBookKeys = [
    `${student}_mistakeBook`,
    "mistakeBook",
  ];

  for (const key of mistakeBookKeys) {
    const savedBook =
      window.localStorage.getItem(key);

    if (!savedBook) {
      continue;
    }

    try {
      const parsed = JSON.parse(savedBook);

      if (Array.isArray(parsed)) {
        parsed.forEach((item) => {
          if (
            item &&
            typeof item.word === "string"
          ) {
            addLegacyMistake(
              item.word,
              Number(item.week),
              1
            );
          }
        });
      }
    } catch {
      console.error(
        `Could not read localStorage key: ${key}`
      );
    }
  }

  // 即使單字只存在於次數紀錄，也要搬移
  mistakeCounts.forEach((count, word) => {
    addLegacyMistake(word, undefined, count);
  });

  const legacyMistakes = [
    ...legacyMistakeMap.values(),
  ];

  if (legacyMistakes.length > 0) {
    const mistakesSaved =
      await migrateLegacyMistakes(
        student,
        legacyMistakes,
        course
      );

    if (!mistakesSaved) {
      allSucceeded = false;
    }
  }

  // 全部成功後才寫入完成標記
  if (allSucceeded) {
    window.localStorage.setItem(
      migrationKey,
      "true"
    );
  }
}

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

await migrateLocalProgress(student, course);

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
      <Link href="/">← Back to home</Link>

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