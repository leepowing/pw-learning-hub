"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { getSpellingWeek } from "@/data/spellingWeeks";
import { getCurrentStudent } from "@/lib/studentStorage";
import {
  getSpellingProgress,
  saveSpellingProgress,
  saveYear7QuizSetProgress,
} from "@/lib/supabase";
import {
  createYear7QuizSets,
  getNextQuizSetNumber,
  normaliseCompletedSets,
  normaliseSetScores,
  YEAR7_QUIZ_SET_COUNT,
  YEAR7_QUIZ_SET_SIZE,
} from "@/lib/year7QuizSets";

type SpellingProgressRow = {
  week: number;
  learned_words: string[] | null;
  best_score: number | null;
  mastered: boolean | null;
  quiz_cycle: number | null;
  quiz_completed_sets: number[] | null;
  quiz_set_scores: number[] | null;
};

type WordView = "current" | "all";

const speak = (word: string, sentence: string) => {
  window.speechSynthesis.cancel();

  const first = new SpeechSynthesisUtterance(`The word is ${word}.`);
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
    window.setTimeout(() => {
      window.speechSynthesis.speak(second);

      second.onend = () => {
        window.setTimeout(() => {
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
  const words = useMemo(() => weekData?.words ?? [], [weekData]);

  const [student, setStudent] = useState("guest");
  const [completed, setCompleted] = useState<number[]>([]);
  const [bestScore, setBestScore] = useState(0);
  const [mastered, setMastered] = useState(false);
  const [quizCycle, setQuizCycle] = useState(1);
  const [completedSets, setCompletedSets] = useState<number[]>([]);
  const [setScores, setSetScores] = useState<number[]>([0, 0, 0]);
  const [wordView, setWordView] = useState<WordView>("current");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadProgress() {
      const selectedStudent = getCurrentStudent();
      setStudent(selectedStudent);

      if (selectedStudent === "guest") {
        if (!cancelled) {
          setHasLoaded(true);
        }

        return;
      }

      const rows = (await getSpellingProgress(
        selectedStudent,
        "year7-spelling"
      )) as SpellingProgressRow[];

      if (cancelled) {
        return;
      }

      const weekProgress = rows.find((row) => row.week === weekNumber);

      if (weekProgress) {
        const learnedWords = Array.isArray(weekProgress.learned_words)
          ? weekProgress.learned_words
          : [];

        const completedIndexes = learnedWords
          .map((learnedWord) =>
            words.findIndex((item) => item.word === learnedWord)
          )
          .filter((index) => index >= 0);

        const loadedCompletedSets = normaliseCompletedSets(
          weekProgress.quiz_completed_sets
        );

        setCompleted(completedIndexes);
        setBestScore(weekProgress.best_score ?? 0);
        setMastered(weekProgress.mastered ?? false);
        setQuizCycle(Math.max(1, weekProgress.quiz_cycle ?? 1));
        setCompletedSets(loadedCompletedSets);
        setSetScores(normaliseSetScores(weekProgress.quiz_set_scores));

        if (loadedCompletedSets.length === YEAR7_QUIZ_SET_COUNT) {
          setWordView("all");
        }
      }

      setHasLoaded(true);
    }

    void loadProgress();

    return () => {
      cancelled = true;
    };
  }, [weekNumber, words]);

  const quizSets = useMemo(
    () =>
      createYear7QuizSets(
        words.map((item) => item.word),
        student,
        weekNumber,
        quizCycle
      ),
    [words, student, weekNumber, quizCycle]
  );

  const nextSetNumber = getNextQuizSetNumber(completedSets);
  const cycleComplete = nextSetNumber === null;
  const currentSetNumber = nextSetNumber ?? YEAR7_QUIZ_SET_COUNT;
  const currentSetWords = quizSets[currentSetNumber - 1] ?? [];
  const coverage = completedSets.length * YEAR7_QUIZ_SET_SIZE;

  const displayedWords =
    wordView === "all"
      ? words.map((item, index) => ({ item, originalIndex: index }))
      : currentSetWords
          .map((word) => {
            const originalIndex = words.findIndex(
              (item) => item.word === word
            );

            return {
              item: words[originalIndex],
              originalIndex,
            };
          })
          .filter(
            (
              entry
            ): entry is {
              item: (typeof words)[number];
              originalIndex: number;
            } => Boolean(entry.item) && entry.originalIndex >= 0
          );

  async function toggleLearned(index: number) {
    if (!hasLoaded || isSaving) {
      return;
    }

    if (student === "guest") {
      alert("Please sign in again.");
      return;
    }

    const previousCompleted = completed;
    const nextCompleted = completed.includes(index)
      ? completed.filter((completedIndex) => completedIndex !== index)
      : [...completed, index];

    setCompleted(nextCompleted);
    setIsSaving(true);

    const learnedWords = nextCompleted
      .map((completedIndex) => words[completedIndex]?.word)
      .filter((word): word is string => typeof word === "string");

    const saved = await saveSpellingProgress(
      student,
      "year7-spelling",
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

  async function startNewCycle() {
    if (student === "guest" || isSaving) {
      return;
    }

    const confirmed = window.confirm(
      "Start a new quiz cycle? The three sets will be reshuffled. Your best score and learned words will be kept."
    );

    if (!confirmed) {
      return;
    }

    setIsSaving(true);

    const learnedWords = completed
      .map((completedIndex) => words[completedIndex]?.word)
      .filter((word): word is string => typeof word === "string");
    const nextCycle = quizCycle + 1;

    const saved = await saveYear7QuizSetProgress(
      student,
      weekNumber,
      learnedWords,
      bestScore,
      mastered,
      {
        quizCycle: nextCycle,
        completedSets: [],
        setScores: [0, 0, 0],
        lastCompletedAt: null,
      }
    );

    if (saved) {
      setQuizCycle(nextCycle);
      setCompletedSets([]);
      setSetScores([0, 0, 0]);
      setWordView("current");
    } else {
      alert("The new quiz cycle could not be started. Please try again.");
    }

    setIsSaving(false);
  }

  if (!weekData) {
    return (
      <main className="home-page">
        <Link href="/spelling">← Back to spelling</Link>

        <section className="student-section">
          <h1>Week {weekNumber} not found</h1>
          <p>This week has not been added yet.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="home-page">
      <Link href="/spelling">← Back to spelling</Link>

      <section className="student-section">
        <p className="small-title">WEEK {weekNumber}</p>
        <h1>Spelling Words</h1>
        <p>Learn the current set, then complete its 8-word quiz.</p>

        <section className="spelling-set-summary">
          <div className="spelling-set-summary-heading">
            <div>
              <span className="spelling-set-label">
                {cycleComplete
                  ? "WEEK COMPLETE"
                  : `SET ${currentSetNumber} OF ${YEAR7_QUIZ_SET_COUNT}`}
              </span>
              <h2>
                {cycleComplete
                  ? "24 / 24 words covered"
                  : `${YEAR7_QUIZ_SET_SIZE} new words`}
              </h2>
            </div>

            <strong>
              {coverage} / {words.length}
            </strong>
          </div>

          <div className="progress">
            <div
              className="progress-fill"
              style={{
                width: `${
                  words.length > 0 ? (coverage / words.length) * 100 : 0
                }%`,
              }}
            />
          </div>

          <div className="spelling-set-steps" aria-label="Quiz set progress">
            {Array.from(
              { length: YEAR7_QUIZ_SET_COUNT },
              (_, index) => index + 1
            ).map((setNumber) => {
              const isComplete = completedSets.includes(setNumber);
              const isCurrent = !cycleComplete && setNumber === currentSetNumber;

              return (
                <div
                  key={setNumber}
                  className={`spelling-set-step ${
                    isComplete
                      ? "spelling-set-step-complete"
                      : isCurrent
                        ? "spelling-set-step-current"
                        : ""
                  }`}
                >
                  <span>{isComplete ? "✓" : setNumber}</span>
                  <div>
                    <strong>Set {setNumber}</strong>
                    <small>
                      {isComplete
                        ? `${setScores[setNumber - 1] ?? 0}/8 complete`
                        : isCurrent
                          ? "Current set"
                          : "Not started"}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="word-view-tabs" role="tablist" aria-label="Word list view">
          <button
            type="button"
            role="tab"
            aria-selected={wordView === "current"}
            className={wordView === "current" ? "word-view-tab-active" : ""}
            onClick={() => setWordView("current")}
          >
            Current Set (8)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={wordView === "all"}
            className={wordView === "all" ? "word-view-tab-active" : ""}
            onClick={() => setWordView("all")}
          >
            All Words (24)
          </button>
        </div>

        <div className="week-progress-summary">
          <strong>
            Learned: {completed.length} / {words.length}
          </strong>
          <div className="progress">
            <div
              className="progress-fill"
              style={{
                width: `${
                  words.length > 0 ? (completed.length / words.length) * 100 : 0
                }%`,
              }}
            />
          </div>
        </div>

        <div className="word-list">
          {displayedWords.map(({ item, originalIndex }, displayIndex) => (
            <article className="word-card" key={item.word}>
              <div className="word-number">{displayIndex + 1}</div>

              <div>
                <div className="flex items-center gap-2">
                  <h2>{item.word}</h2>

                  <button
                    type="button"
                    onClick={() => speak(item.word, item.sentence)}
                    className="text-xl hover:scale-110"
                    aria-label={`Listen to ${item.word}`}
                  >
                    🔊
                  </button>

                  <button
                    type="button"
                    disabled={!hasLoaded || isSaving}
                    onClick={() => toggleLearned(originalIndex)}
                    style={{
                      marginLeft: "12px",
                      background: completed.includes(originalIndex)
                        ? "#22c55e"
                        : "#e5e7eb",
                      color: completed.includes(originalIndex) ? "white" : "black",
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      cursor: !hasLoaded || isSaving ? "not-allowed" : "pointer",
                      opacity: !hasLoaded || isSaving ? 0.6 : 1,
                    }}
                  >
                    {completed.includes(originalIndex)
                      ? "✓ Learned"
                      : "Mark Learned"}
                  </button>
                </div>

                <p>{item.meaning}</p>
                <p className="chinese-meaning">中文：{item.chinese}</p>

                <div className="example-box">
                  <strong>Example</strong>
                  <p>{item.sentence}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!hasLoaded ? (
          <p className="spelling-set-loading">Loading quiz set…</p>
        ) : cycleComplete ? (
          <section className="week-cycle-complete">
            <p className="small-title">WEEK COMPLETED</p>
            <h2>🎉 All 24 words have been covered.</h2>
            <p>Review mistakes, continue to the next week, or begin a new cycle.</p>

            <div className="week-cycle-actions">
              <Link href="/spelling/review" className="secondary-link">
                Review Mistakes
              </Link>

              {getSpellingWeek(weekNumber + 1) && (
                <Link
                  href={`/spelling/${weekNumber + 1}`}
                  className="quiz-link week-cycle-primary-action"
                >
                  Next Week →
                </Link>
              )}

              <button
                type="button"
                className="quiz-button week-cycle-reset"
                disabled={isSaving}
                onClick={() => void startNewCycle()}
              >
                {isSaving ? "Starting…" : "Retry This Week"}
              </button>
            </div>
          </section>
        ) : (
          <Link
            href={`/spelling/${weekNumber}/quiz`}
            className="quiz-link"
          >
            📝 Start Set {currentSetNumber} Quiz (8 words)
          </Link>
        )}
      </section>
    </main>
  );
}
