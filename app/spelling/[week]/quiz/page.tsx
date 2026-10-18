"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useParams } from "next/navigation";
import { getSpellingWeek } from "@/data/spellingWeeks";
import { calculateLevel } from "@/lib/rewards";
import { getCurrentStudent } from "@/lib/studentStorage";
import {
  getSpellingProgress,
  getStudentXP,
  saveStudentMistake,
  saveYear7QuizSetProgress,
  supabase,
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

export default function WeekQuizPage() {
  const params = useParams<{ week: string }>();
  const weekNumber = Number(params.week);
  const weekData = getSpellingWeek(weekNumber);
  const quizWords = useMemo(
    () => weekData?.words.map((item) => item.word) ?? [],
    [weekData]
  );

  const [student, setStudent] = useState("guest");
  const [quizCycle, setQuizCycle] = useState(1);
  const [completedSets, setCompletedSets] = useState<number[]>([]);
  const [setScores, setSetScores] = useState<number[]>([0, 0, 0]);
  const [currentSetNumber, setCurrentSetNumber] = useState<number | null>(null);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);
  const [mistakes, setMistakes] = useState<string[]>([]);
  const [bestScore, setBestScore] = useState(0);
  const [learnedWords, setLearnedWords] = useState<string[]>([]);
  const [mastered, setMastered] = useState(false);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [practiceWords, setPracticeWords] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [earnedXP, setEarnedXP] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [resultCoverage, setResultCoverage] = useState(0);
  const [resultCycleComplete, setResultCycleComplete] = useState(false);
  const [resultCycleScore, setResultCycleScore] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const transitionTimerRef = useRef<number | null>(null);
  const finishInProgressRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function loadQuizProgress() {
      const selectedStudent = getCurrentStudent();
      setStudent(selectedStudent);

      if (selectedStudent === "guest") {
        if (!cancelled) {
          setCurrentSetNumber(1);
          setProgressLoaded(true);
        }

        return;
      }

      const [rows, savedXP] = await Promise.all([
        getSpellingProgress(selectedStudent, "year7-spelling"),
        getStudentXP(selectedStudent, "year7-spelling"),
      ]);

      if (cancelled) {
        return;
      }

      const weekProgress = (rows as SpellingProgressRow[]).find(
        (row) => row.week === weekNumber
      );

      const loadedCompletedSets = normaliseCompletedSets(
        weekProgress?.quiz_completed_sets
      );

      if (weekProgress) {
        setLearnedWords(
          Array.isArray(weekProgress.learned_words)
            ? weekProgress.learned_words
            : []
        );
        setBestScore(weekProgress.best_score ?? 0);
        setMastered(weekProgress.mastered ?? false);
        setQuizCycle(Math.max(1, weekProgress.quiz_cycle ?? 1));
        setSetScores(normaliseSetScores(weekProgress.quiz_set_scores));
      }

      setCompletedSets(loadedCompletedSets);
      setCurrentSetNumber(getNextQuizSetNumber(loadedCompletedSets));
      setTotalXP(savedXP);
      setProgressLoaded(true);
    }

    void loadQuizProgress();

    return () => {
      cancelled = true;
    };
  }, [weekNumber]);

  const quizSets = useMemo(
    () => createYear7QuizSets(quizWords, student, weekNumber, quizCycle),
    [quizWords, student, weekNumber, quizCycle]
  );

  const currentSetWords =
    currentSetNumber === null ? [] : quizSets[currentSetNumber - 1] ?? [];
  const activeWords = practiceMode ? practiceWords : currentSetWords;
  const currentWord = activeWords[question];
  const currentWordData = weekData?.words.find(
    (item) => item.word === currentWord
  );

  const speak = useCallback(() => {
    if (!currentWord) {
      return;
    }

    window.speechSynthesis.cancel();

    const first = new SpeechSynthesisUtterance(`The word is ${currentWord}.`);
    first.lang = "en-GB";
    first.rate = 0.82;

    const second = new SpeechSynthesisUtterance(
      currentWordData?.sentence ?? currentWord
    );
    second.lang = "en-GB";
    second.rate = 0.82;

    const third = new SpeechSynthesisUtterance(currentWord);
    third.lang = "en-GB";
    third.rate = 0.82;

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

    window.speechSynthesis.speak(first);
  }, [currentWord, currentWordData?.sentence]);

  const finishQuiz = useCallback(async (finalScore: number) => {
    if (finishInProgressRef.current) {
      return;
    }

    finishInProgressRef.current = true;
    setIsSaving(true);

    const course = "year7-spelling";
    let gainedXP = practiceMode ? finalScore * 3 : finalScore * 5;
    let nextCoverage = completedSets.length * YEAR7_QUIZ_SET_SIZE;
    let cycleComplete = false;
    let cycleScore = setScores.reduce((total, item) => total + item, 0);
    let nextBestScore = bestScore;
    let nextMastered = mastered;

    if (!practiceMode && currentSetNumber !== null) {
      const nextCompletedSets = normaliseCompletedSets([
        ...completedSets,
        currentSetNumber,
      ]);
      const nextSetScores = normaliseSetScores(setScores);
      nextSetScores[currentSetNumber - 1] = finalScore;

      nextCoverage = nextCompletedSets.length * YEAR7_QUIZ_SET_SIZE;
      cycleComplete = nextCompletedSets.length === YEAR7_QUIZ_SET_COUNT;
      cycleScore = nextSetScores.reduce((total, item) => total + item, 0);
      nextBestScore = cycleComplete
        ? Math.max(bestScore, cycleScore)
        : bestScore;
      nextMastered = mastered || (cycleComplete && cycleScore === quizWords.length);

      if (cycleComplete && cycleScore === quizWords.length) {
        gainedXP += 20;
      }

      if (student !== "guest") {
        const progressSaved = await saveYear7QuizSetProgress(
          student,
          weekNumber,
          learnedWords,
          nextBestScore,
          nextMastered,
          {
            quizCycle,
            completedSets: nextCompletedSets,
            setScores: nextSetScores,
            lastCompletedAt: cycleComplete ? new Date().toISOString() : null,
          }
        );

        if (!progressSaved) {
          alert("Quiz progress could not be saved. Please try this set again.");
          setIsSaving(false);
          finishInProgressRef.current = false;
          return;
        }
      }

      setCompletedSets(nextCompletedSets);
      setSetScores(nextSetScores);
      setBestScore(nextBestScore);
      setMastered(nextMastered);
    }

    setEarnedXP(gainedXP);
    setResultCoverage(nextCoverage);
    setResultCycleComplete(cycleComplete);
    setResultCycleScore(cycleScore);

    if (student !== "guest") {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        alert("Your session has expired. Please sign in again.");
      } else {
        const { error: scoreError } = await supabase.from("scores").insert({
          student,
          course,
          week: weekNumber,
          score: finalScore,
          best_score: finalScore,
          xp: gainedXP,
        });

        if (scoreError) {
          console.error("Score could not be saved:", scoreError.message);
          alert("The set progress was saved, but its XP could not be added.");
          setEarnedXP(0);
        }

        const updatedXP = await getStudentXP(student, course);
        setTotalXP(updatedXP);
      }
    }

    setFinished(true);
    setIsSaving(false);
    finishInProgressRef.current = false;
  }, [
    bestScore,
    completedSets,
    currentSetNumber,
    learnedWords,
    mastered,
    practiceMode,
    quizCycle,
    quizWords.length,
    setScores,
    student,
    weekNumber,
  ]);

  useEffect(() => {
    const answerHasBeenChecked =
      feedback.startsWith("✅") || feedback.startsWith("❌");

    if (
      !progressLoaded ||
      !currentWord ||
      finished ||
      answerHasBeenChecked ||
      timeLeft === 0
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setTimeLeft((previousTime) => Math.max(previousTime - 1, 0));
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [timeLeft, finished, feedback, progressLoaded, currentWord]);

  useEffect(() => {
    if (
      timeLeft !== 0 ||
      finished ||
      !currentWord ||
      transitionTimerRef.current !== null
    ) {
      return;
    }

    setFeedback(`⏰ Time's up! The correct spelling is: ${currentWord}`);
    setMistakes((previousMistakes) =>
      previousMistakes.includes(currentWord)
        ? previousMistakes
        : [...previousMistakes, currentWord]
    );

    if (!practiceMode && student !== "guest") {
      void saveStudentMistake(
        student,
        weekNumber,
        currentWord,
        "year7-spelling"
      );
    }

    transitionTimerRef.current = window.setTimeout(() => {
      transitionTimerRef.current = null;

      if (question === activeWords.length - 1) {
        void finishQuiz(score);
      } else {
        setQuestion((previousQuestion) => previousQuestion + 1);
        setAnswer("");
        setFeedback("");
        setTimeLeft(60);
      }
    }, 1500);

    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
    };
  }, [
    timeLeft,
    finished,
    currentWord,
    question,
    activeWords.length,
    practiceMode,
    student,
    weekNumber,
    score,
    finishQuiz,
  ]);

  useEffect(() => {
    if (progressLoaded && !finished && currentWord) {
      speak();
    }
  }, [
    question,
    practiceMode,
    finished,
    progressLoaded,
    currentWord,
    speak,
  ]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();

      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  if (!weekData) {
    return (
      <main className="home-page">
        <Link href="/spelling">← Back to spelling</Link>
        <section className="quiz-card">
          <h1>Week {weekNumber} not found</h1>
          <p>This week has not been added yet.</p>
        </section>
      </main>
    );
  }

  if (!progressLoaded) {
    return (
      <main className="home-page">
        <Link href={`/spelling/${weekNumber}`}>← Back to Week {weekNumber}</Link>
        <section className="quiz-card">
          <p className="small-title">WEEK {weekNumber} QUIZ</p>
          <h1>Loading your set…</h1>
        </section>
      </main>
    );
  }

  if (currentSetNumber === null && !finished) {
    return (
      <main className="home-page">
        <section className="quiz-card quiz-result">
          <p className="small-title">WEEK {weekNumber} COMPLETED</p>
          <h1>All three sets are complete.</h1>
          <p>Return to the week page to review the 24 words or start a new cycle.</p>
          <div className="quiz-actions">
            <Link href={`/spelling/${weekNumber}`} className="secondary-link">
              ← Return to Week {weekNumber}
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const checkAnswer = () => {
    const answerIsLocked =
      feedback.startsWith("✅") ||
      feedback.startsWith("❌") ||
      feedback.startsWith("⏰");

    if (
      !answer.trim() ||
      !currentWord ||
      isSaving ||
      timeLeft === 0 ||
      answerIsLocked
    ) {
      if (!answer.trim()) {
        setFeedback("Please enter your answer.");
      }
      return;
    }

    const isCorrect =
      answer.trim().toLowerCase() === currentWord.toLowerCase();
    const newScore = isCorrect ? score + 1 : score;

    setScore(newScore);

    if (isCorrect) {
      setFeedback("✅ Correct!");
    } else {
      if (!practiceMode && student !== "guest") {
        void saveStudentMistake(
          student,
          weekNumber,
          currentWord,
          "year7-spelling"
        );
      }

      setMistakes((previousMistakes) =>
        previousMistakes.includes(currentWord)
          ? previousMistakes
          : [...previousMistakes, currentWord]
      );
      setFeedback(`❌ The correct spelling is: ${currentWord}`);
    }

    transitionTimerRef.current = window.setTimeout(() => {
      transitionTimerRef.current = null;

      if (question === activeWords.length - 1) {
        void finishQuiz(newScore);
      } else {
        setQuestion((previousQuestion) => previousQuestion + 1);
        setAnswer("");
        setFeedback("");
        setTimeLeft(60);
      }
    }, 1400);
  };

  const beginMistakePractice = () => {
    setPracticeWords([...mistakes]);
    setPracticeMode(true);
    setQuestion(0);
    setAnswer("");
    setScore(0);
    setFeedback("");
    setMistakes([]);
    setFinished(false);
    setEarnedXP(0);
    setTimeLeft(60);
    finishInProgressRef.current = false;
  };

  if (finished) {
    const nextSetNumber = getNextQuizSetNumber(completedSets);

    return (
      <main className="home-page">
        <section className="quiz-card quiz-result">
          <p className="small-title">
            {practiceMode
              ? "PRACTICE COMPLETE"
              : resultCycleComplete
                ? "WEEK COMPLETE"
                : `SET ${currentSetNumber} COMPLETE`}
          </p>
          <h1>Your score</h1>

          <div className="score-display">
            {score} / {activeWords.length}
          </div>

          <div className="xp-earned-card">
            <strong>⭐ +{earnedXP} XP</strong>
            <span>Level {calculateLevel(totalXP).level}</span>
          </div>

          {!practiceMode && (
            <div className="quiz-coverage-card">
              <span>Weekly coverage</span>
              <strong>{resultCoverage} / {quizWords.length}</strong>
              <div className="progress">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(resultCoverage / quizWords.length) * 100}%`,
                  }}
                />
              </div>
              {resultCycleComplete && (
                <small>
                  Cycle score: {resultCycleScore} / {quizWords.length} · Best: {Math.max(bestScore, resultCycleScore)} / {quizWords.length}
                </small>
              )}
            </div>
          )}

          {mistakes.length > 0 ? (
            <div className="mistakes-card">
              <h2>Words to practise again</h2>
              <ul>
                {mistakes.map((word) => (
                  <li key={word}>{word}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="perfect-card">
              🎉 Perfect! You spelled every word correctly.
            </div>
          )}

          <p>
            {score === activeWords.length
              ? "Excellent work! 🌟"
              : score >= Math.ceil(activeWords.length * 0.8)
                ? "Great job! 👏"
                : "Keep practising. You are improving! 💪"}
          </p>

          <div className="quiz-actions">
            {mistakes.length > 0 && (
              <button className="quiz-button" onClick={beginMistakePractice}>
                🔁 Practise mistakes
              </button>
            )}

            {!practiceMode && !resultCycleComplete && nextSetNumber !== null && (
              <button
                className="quiz-button"
                onClick={() => window.location.reload()}
              >
                Continue to Set {nextSetNumber} →
              </button>
            )}

            {!practiceMode && resultCycleComplete && (
              <>
                <Link href="/spelling/review" className="secondary-link">
                  Review Mistakes
                </Link>
                {getSpellingWeek(weekNumber + 1) && (
                  <Link
                    href={`/spelling/${weekNumber + 1}`}
                    className="quiz-link quiz-result-primary-link"
                  >
                    Next Week →
                  </Link>
                )}
              </>
            )}

            <Link
              href={`/spelling/${weekNumber}`}
              className="secondary-link"
            >
              ← Return to Week {weekNumber}
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="home-page">
      <Link href={`/spelling/${weekNumber}`}>
        ← Back to Week {weekNumber}
      </Link>

      <section className="quiz-card">
        <p className="small-title">
          {practiceMode
            ? `WEEK ${weekNumber} MISTAKE PRACTICE`
            : `WEEK ${weekNumber} · SET ${currentSetNumber} OF ${YEAR7_QUIZ_SET_COUNT}`}
        </p>

        <h1>
          Question {question + 1} / {activeWords.length}
        </h1>

        <div className="quiz-progress-wrapper">
          <div className="quiz-progress-info">
            <span>Progress</span>
            <span>
              {Math.round(((question + 1) / activeWords.length) * 100)}%
            </span>
          </div>
          <div className="quiz-progress-track">
            <div
              className="quiz-progress-fill"
              style={{
                width: `${((question + 1) / activeWords.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div
          className={`quiz-timer ${
            timeLeft <= 10 ? "quiz-timer-warning" : ""
          }`}
        >
          <span>⏰ Time remaining</span>
          <strong>{timeLeft}s</strong>
        </div>

        <p>Listen carefully, then type the spelling.</p>

        <button className="listen-button" onClick={speak}>
          🔊 Play word
        </button>

        <input
          className="quiz-input"
          type="text"
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);

            if (feedback === "Please enter your answer.") {
              setFeedback("");
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              checkAnswer();
            }
          }}
          placeholder="Type the word here"
          autoComplete="off"
          autoFocus
          disabled={
            isSaving ||
            timeLeft === 0 ||
            feedback.startsWith("✅") ||
            feedback.startsWith("❌") ||
            feedback.startsWith("⏰")
          }
        />

        <button
          className="quiz-button"
          onClick={checkAnswer}
          disabled={
            isSaving ||
            timeLeft === 0 ||
            feedback.startsWith("✅") ||
            feedback.startsWith("❌") ||
            feedback.startsWith("⏰")
          }
        >
          {isSaving ? "Saving…" : "Check answer"}
        </button>

        {feedback && <p className="quiz-feedback">{feedback}</p>}
      </section>
    </main>
  );
}
