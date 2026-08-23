"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getSpellingWeek } from "@/data/year8SpellingWeeks";
import { getCurrentStudent } from "@/lib/studentStorage";
import {
  getSpellingProgress,
  saveSpellingProgress,
} from "@/lib/supabase";

type SpellingProgressRow = {
  week: number;
  learned_words: string[] | null;
  best_score: number | null;
  mastered: boolean | null;
};

const speak = (word: string, sentence: string) => {
  window.speechSynthesis.cancel();

  const first = new SpeechSynthesisUtterance(
    `The word is ${word}.`
  );
  first.lang = "en-GB";
  first.rate = 0.82;

  const second = new SpeechSynthesisUtterance(sentence);
  second.lang = "en-GB";
  second.rate = 0.82;

  const third = new SpeechSynthesisUtterance(word);
  third.lang = "en-GB";
  third.rate = 0.82;

  window.speechSynthesis.speak(first);

  first.onend = () => {
    setTimeout(() => {
      window.speechSynthesis.speak(second);

      second.onend = () => {
        setTimeout(() => {
          window.speechSynthesis.speak(third);
        }, 800);
      };
    }, 800);
  };
};

export default function WeekPage() {
  const params = useParams<{ week: string }>();
  const weekNumber = Number(params.week);
  const weekData = getSpellingWeek(weekNumber);
  const words = weekData?.words ?? [];

  const [completed, setCompleted] = useState<number[]>([]);
  const [bestScore, setBestScore] = useState(0);
  const [mastered, setMastered] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadProgress() {
      const student = getCurrentStudent();

      if (student === "guest") {
        if (!cancelled) {
          setHasLoaded(true);
        }

        return;
      }

      const rows = (await getSpellingProgress(
        student,
        "year8-spelling"
      )) as SpellingProgressRow[];

      if (cancelled) {
        return;
      }

      const weekProgress = rows.find(
        (row) => row.week === weekNumber
      );

      if (weekProgress) {
        const learnedWords = Array.isArray(
          weekProgress.learned_words
        )
          ? weekProgress.learned_words
          : [];

        const completedIndexes = learnedWords
          .map((learnedWord) =>
            words.findIndex(
              (item) => item.word === learnedWord
            )
          )
          .filter((index) => index >= 0);

        setCompleted(completedIndexes);
        setBestScore(weekProgress.best_score ?? 0);
        setMastered(weekProgress.mastered ?? false);
      }

      setHasLoaded(true);
    }

    loadProgress();

    return () => {
      cancelled = true;
    };
  }, [weekNumber]);

  async function toggleLearned(index: number) {
    if (!hasLoaded || isSaving) {
      return;
    }

    const student = getCurrentStudent();

    if (student === "guest") {
      alert("Please sign in again.");
      return;
    }

    const previousCompleted = completed;

    const nextCompleted = completed.includes(index)
      ? completed.filter(
          (completedIndex) => completedIndex !== index
        )
      : [...completed, index];

    setCompleted(nextCompleted);
    setIsSaving(true);

    const learnedWords = nextCompleted
      .map((completedIndex) => words[completedIndex]?.word)
      .filter(
        (word): word is string => typeof word === "string"
      );

    const saved = await saveSpellingProgress(
      student,
      "year8-spelling",
      weekNumber,
      learnedWords,
      bestScore,
      mastered
    );

    if (!saved) {
      setCompleted(previousCompleted);
      alert("Progress could not be saved. Please try again.");
    }

    setIsSaving(false);
  }

  if (!weekData) {
    return (
      <main className="home-page">
        <Link href="/year8-spelling">
          ← Back to spelling
        </Link>

        <section className="student-section">
          <h1>Week {weekNumber} not found</h1>
          <p>This week has not been added yet.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="home-page">
      <Link href="/year8-spelling">← Back to spelling</Link>

      <section className="student-section">
        <p className="small-title">
          WEEK {weekNumber}
        </p>

        <h1>Spelling Words</h1>

        <p>
          Read each word, meaning and example sentence.
        </p>

        <div className="week-progress-summary">
          <strong>
            Progress: {completed.length} / {words.length}
          </strong>

          <div className="progress">
            <div
              className="progress-fill"
              style={{
                width: `${
                  words.length > 0
                    ? (completed.length / words.length) * 100
                    : 0
                }%`,
              }}
            />
          </div>
        </div>

        <div className="word-list">
          {words.map((item, index) => (
            <article
              className="word-card"
              key={item.word}
            >
              <div className="word-number">
                {index + 1}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2>{item.word}</h2>

                  <button
                    type="button"
                    onClick={() =>
                      speak(item.word, item.sentence)
                    }
                    className="text-xl hover:scale-110"
                  >
                    🔊
                  </button>

                  <button
                    type="button"
                    disabled={!hasLoaded || isSaving}
                    onClick={() => toggleLearned(index)}
                    style={{
                      marginLeft: "12px",
                      background: completed.includes(index)
                        ? "#22c55e"
                        : "#e5e7eb",
                      color: completed.includes(index)
                        ? "white"
                        : "black",
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      cursor:
                        !hasLoaded || isSaving
                          ? "not-allowed"
                          : "pointer",
                      opacity:
                        !hasLoaded || isSaving ? 0.6 : 1,
                    }}
                  >
                    {completed.includes(index)
                      ? "✓ Learned"
                      : "Mark Learned"}
                  </button>
                </div>

                <p>{item.meaning}</p>

                <p className="chinese-meaning">
                  中文：{item.chinese}
                </p>

                <div className="example-box">
                  <strong>Example</strong>
                  <p>{item.sentence}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link
          href={`/year8-spelling/${weekNumber}/quiz`}
          className="quiz-link"
        >
          📝 Start Week {weekNumber} Quiz
        </Link>
      </section>
    </main>
  );
}