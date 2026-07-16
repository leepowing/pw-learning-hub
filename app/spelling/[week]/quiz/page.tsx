"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { getSpellingWeek } from "@/data/spellingWeeks";
import {
  addXP,
  calculateLevel,
} from "@/lib/rewards";
import {
  getCurrentStudent,
  getStudentStorageKey,
} from "@/lib/studentStorage";

import { supabase } from "@/lib/supabase";

export default function WeekQuizPage() {
  const params = useParams<{ week: string }>();
  const weekNumber = Number(params.week);
  const weekData = getSpellingWeek(weekNumber);
  const quizWords = weekData?.words.map((item) => item.word) ?? [];
const bestScoreKey = getStudentStorageKey(
  `week${weekNumber}BestScore`
);

const masteredKey = getStudentStorageKey(
  `week${weekNumber}Mastered`
);

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
  const [practiceMode, setPracticeMode] = useState(false);
  const [practiceWords, setPracticeWords] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [earnedXP, setEarnedXP] = useState(0);
  const [totalXP, setTotalXP] = useState(0);  
  const transitionTimerRef = useRef<number | null>(null);

useEffect(() => {
  const savedBestScore = window.localStorage.getItem(bestScoreKey);

  if (savedBestScore) {
    setBestScore(Number(savedBestScore));
  }
}, [bestScoreKey]);

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
  const newTotalXP = addXP(gainedXP);

  setEarnedXP(gainedXP);
  setTotalXP(newTotalXP);
if (!practiceMode) {
  const student = getCurrentStudent();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    const { error: signInError } =
      await supabase.auth.signInAnonymously();

    if (signInError) {
      console.error(
        "Anonymous sign-in failed:",
        signInError.message
      );
    }
  }

  const { error: saveError } = await supabase
    .from("scores")
    .insert({
      student,
      week: weekNumber,
      score: finalScore,
      best_score: finalScore,
    });

  if (saveError) {
    console.error(
      "Score could not be saved:",
      saveError.message
    );
  } else {
    console.log("Score saved to Supabase.");
  }
}
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

  const savedReview: string[] = JSON.parse(
    window.localStorage.getItem(getStudentStorageKey("reviewWords")) ?? "[]"
  );

  if (!savedReview.includes(currentWord)) {
    window.localStorage.setItem(
      getStudentStorageKey("reviewWords"),
      JSON.stringify([...savedReview, currentWord])
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
  setMistakes((previousMistakes) => {
    if (previousMistakes.includes(currentWord)) {
      return previousMistakes;
    }

    return [...previousMistakes, currentWord];
  });
const savedReviewWords: string[] = JSON.parse(
  window.localStorage.getItem(getStudentStorageKey("reviewWords")) ?? "[]"
);

if (!savedReviewWords.includes(currentWord)) {
  window.localStorage.setItem(
    getStudentStorageKey("reviewWords"),
    JSON.stringify([...savedReviewWords, currentWord])
  );
}

const savedMistakeCounts: Record<string, number> = JSON.parse(
  window.localStorage.getItem(getStudentStorageKey("reviewMistakeCounts")) ?? "{}"
);

const updatedMistakeCounts = {
  ...savedMistakeCounts,
  [currentWord]: (savedMistakeCounts[currentWord] ?? 0) + 1,
};

window.localStorage.setItem(
  getStudentStorageKey("reviewMistakeCounts"),
  JSON.stringify(updatedMistakeCounts)
);

  setFeedback(`❌ The correct spelling is: ${currentWord}`);
}
    setTimeout(() => {
if (question === activeWords.length - 1) {
  const savedBestScore = Number(
    window.localStorage.getItem(bestScoreKey) ?? "0"
  );

if (newScore > savedBestScore) {
  window.localStorage.setItem(
    bestScoreKey,
    String(newScore)
  );

  setBestScore(newScore);
}

if (
  !practiceMode &&
  newScore === shuffledWords.length
) {
  window.localStorage.setItem(
    masteredKey,
    "true"
  );
}

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