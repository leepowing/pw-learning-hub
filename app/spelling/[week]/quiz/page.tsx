"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { getSpellingWeek } from "@/data/spellingWeeks";
import { calculateLevel } from "@/lib/rewards";
import { getCurrentStudent } from "@/lib/studentStorage";

import {
  supabase,
  getSpellingProgress,
  getStudentXP,
  saveSpellingProgress,
  saveStudentMistake,
} from "@/lib/supabase";

export default function WeekQuizPage() {
  const currentStudent = getCurrentStudent();
  const params = useParams<{ week: string }>();
  const weekNumber = Number(params.week);
  const weekData = getSpellingWeek(weekNumber);
  const quizWords = weekData?.words.map((item) => item.word) ?? [];


  const [shuffledWords] = useState(() =>
  [...quizWords].sort(() => Math.random() - 0.5)
);
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
  const transitionTimerRef = useRef<number | null>(null);

useEffect(() => {
  let cancelled = false;

  async function loadQuizProgress() {
    const student = getCurrentStudent();
    const course = "year7-spelling";

    if (student === "guest") {
      if (!cancelled) {
        setProgressLoaded(true);
      }

      return;
    }

    const [rows, savedXP] = await Promise.all([
      getSpellingProgress(student, course),
      getStudentXP(student, course),
    ]);

    if (cancelled) {
      return;
    }

    const weekProgress = rows.find(
      (row) => row.week === weekNumber
    );

    if (weekProgress) {
      setLearnedWords(
        Array.isArray(weekProgress.learned_words)
          ? weekProgress.learned_words
          : []
      );

      setBestScore(weekProgress.best_score ?? 0);
      setMastered(weekProgress.mastered ?? false);
    }

    setTotalXP(savedXP);
    setProgressLoaded(true);
  }

  loadQuizProgress();

  return () => {
    cancelled = true;
  };
}, [weekNumber]);

useEffect(() => {
  setTimeLeft(60);
}, [question, practiceMode]);

useEffect(() => {
  const answerHasBeenChecked =
    feedback.startsWith("✅") ||
    feedback.startsWith("❌");

  if (
    finished ||
    answerHasBeenChecked ||
    timeLeft === 0
  ) {
    return;
  }

  const timer = window.setTimeout(() => {
    setTimeLeft((previousTime) =>
      Math.max(previousTime - 1, 0)
    );
  }, 1000);

  return () => {
    window.clearTimeout(timer);
  };
}, [timeLeft, finished, feedback]);



const activeWords = practiceMode ? practiceWords : shuffledWords;
const currentWord = activeWords[question];
const currentWordData = weekData?.words.find(
  (item) => item.word === currentWord
);
const finishQuiz = async (finalScore: number) => {
  const answerXP = practiceMode
    ? finalScore * 3
    : finalScore * 5;

  const perfectBonus =
    !practiceMode &&
    finalScore === activeWords.length
      ? 20
      : 0;

  const gainedXP = answerXP + perfectBonus;
  const student = getCurrentStudent();
  const course = "year7-spelling";

  setEarnedXP(gainedXP);

  if (student === "guest") {
    setFinished(true);
    return;
  }

const {
  data: { user },
  error: userError,
} = await supabase.auth.getUser();

if (userError || !user) {
  alert("Your session has expired. Please sign in again.");
  setFinished(true);
  return;
}

  const { error: scoreError } = await supabase
    .from("scores")
    .insert({
      student,
      course,
      week: weekNumber,
      score: finalScore,
      best_score: finalScore,
      xp: gainedXP,
    });

  if (scoreError) {
    console.error(
      "Score could not be saved:",
      scoreError.message
    );
  }

  if (!practiceMode) {
    const nextBestScore = Math.max(
      bestScore,
      finalScore
    );

    const nextMastered =
      mastered ||
      finalScore === activeWords.length;

    const progressSaved = await saveSpellingProgress(
      student,
      course,
      weekNumber,
      learnedWords,
      nextBestScore,
      nextMastered
    );

    if (progressSaved) {
      setBestScore(nextBestScore);
      setMastered(nextMastered);
    }
  }

  const updatedXP = await getStudentXP(
    student,
    course
  );

  setTotalXP(updatedXP);
  setFinished(true);
};

const speak = () => {
  if (!currentWord) {
    return;
  }

  window.speechSynthesis.cancel();

  const first = new SpeechSynthesisUtterance(
    `The word is ${currentWord}.`
  );
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
};

useEffect(() => {
  if (
    timeLeft !== 0 ||
    finished ||
    transitionTimerRef.current !== null
  ) {
    return;
  }

  setFeedback(
    `⏰ Time's up! The correct spelling is: ${currentWord}`
  );

  setMistakes((previousMistakes) => {
    if (previousMistakes.includes(currentWord)) {
      return previousMistakes;
    }

    return [...previousMistakes, currentWord];
  });

if (currentWord) {
  void saveStudentMistake(
    getCurrentStudent(),
    weekNumber,
    currentWord,
    "year7-spelling"
  );
}

  transitionTimerRef.current = window.setTimeout(() => {
    transitionTimerRef.current = null;

    if (question === activeWords.length - 1) {
      finishQuiz(score);
    } else {
      setQuestion((previousQuestion) => previousQuestion + 1);
      setAnswer("");
      setFeedback("");
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
]);

useEffect(() => {
  if (!finished && currentWord) {
    speak();
  }
}, [question, practiceMode, finished]);

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


  const checkAnswer = () => {
    if (!answer.trim()) {
      setFeedback("Please enter your answer.");
      return;
    }

    const isCorrect =
      answer.trim().toLowerCase() === currentWord.toLowerCase();

    const newScore = isCorrect ? score + 1 : score;

    setScore(newScore);

if (isCorrect) {
  setFeedback("✅ Correct!");
} else {
    void saveStudentMistake(
    currentStudent,
    weekNumber,
    currentWord,
    "year7-spelling"
    );

  setMistakes((previousMistakes) => {
    if (previousMistakes.includes(currentWord)) {
      return previousMistakes;
    }

    return [...previousMistakes, currentWord];
  });

  setFeedback(`❌ The correct spelling is: ${currentWord}`);
}
    setTimeout(() => {
if (question === activeWords.length - 1) {


      finishQuiz(newScore);
}
        else {
        setQuestion(question + 1);
        setAnswer("");
        setFeedback("");
      }
    }, 1400);
  };

  if (finished) {
    return (
      <main className="home-page">
        <section className="quiz-card quiz-result">
          <p className="small-title">QUIZ COMPLETE</p>
          <h1>Your score</h1>

          <div className="score-display">
            {score} / {activeWords.length}
          </div>
          <div className="xp-earned-card">
              <strong>⭐ +{earnedXP} XP</strong>

          <span>
              Level {calculateLevel(totalXP).level}
          </span>
          </div>

{!practiceMode && (
  <p className="best-score">
    🏆 Best score: {Math.max(bestScore, score)} / {shuffledWords.length}
  </p>
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
              : score >= 8
                ? "Great job! 👏"
                : "Keep practising. You are improving! 💪"}
          </p>

<div className="quiz-actions">
  <Link
    href={`/spelling/${weekNumber}`}
    className="secondary-link"
  >
    ← Return to Week {weekNumber}
  </Link>

  {mistakes.length > 0 && (
    <button
      className="quiz-button"
      onClick={() => {
        const wordsToPractice = [...mistakes];

        setPracticeWords(wordsToPractice);
        setPracticeMode(true);
        setQuestion(0);
        setAnswer("");
        setScore(0);
        setFeedback("");
        setMistakes([]);
        setFinished(false);
      }}
    >
      🔁 Practise mistakes
    </button>
  )}

  <button
    className="quiz-button"
    onClick={() => window.location.reload()}
  >
    Try again
  </button>
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
        <p className="small-title">WEEK {weekNumber} QUIZ</p>

        <h1>
          Question {question + 1} / {activeWords.length}
        </h1>
<div className="quiz-progress-wrapper">
  <div className="quiz-progress-info">
    <span>Progress</span>

    <span>
      {Math.round(
        ((question + 1) / activeWords.length) * 100
      )}
      %
    </span>
  </div>

  <div className="quiz-progress-track">
    <div
      className="quiz-progress-fill"
      style={{
        width: `${
          ((question + 1) / activeWords.length) * 100
        }%`,
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
disabled={feedback.startsWith("✅") || feedback.startsWith("❌")}
/>

        <button
          className="quiz-button"
          onClick={checkAnswer}
disabled={feedback.startsWith("✅") || feedback.startsWith("❌")}        >
          Check answer
        </button>

        {feedback && <p className="quiz-feedback">{feedback}</p>}
      </section>
    </main>
  );
}