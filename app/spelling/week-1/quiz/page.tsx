"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSpellingWeek } from "@/data/spellingWeeks-backup";

const week = getSpellingWeek(1);

if (!week) {
  throw new Error("Week 1 data was not found.");
}

const quizWords = week.words.map((item) => item.word);

export default function WeekOneQuizPage() {
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
useEffect(() => {
  const savedBestScore = window.localStorage.getItem("week1BestScore");

  if (savedBestScore) {
    setBestScore(Number(savedBestScore));
  }
}, []);

  const currentWord = shuffledWords[question];

  const speak = () => {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.lang = "en-GB";
    utterance.rate = 0.85;

    window.speechSynthesis.speak(utterance);
  };

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

  setFeedback(`❌ The correct spelling is: ${currentWord}`);
}
    setTimeout(() => {
if (question === shuffledWords.length - 1) {
  const savedBestScore = Number(
    window.localStorage.getItem("week1BestScore") ?? "0"
  );

  if (newScore > savedBestScore) {
    window.localStorage.setItem(
      "week1BestScore",
      String(newScore)
    );

    setBestScore(newScore);
  }

  setFinished(true);
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
            {score} / {shuffledWords.length}
          </div>
<p className="best-score">
  🏆 Best score: {Math.max(bestScore, score)} /{" "}
  {shuffledWords.length}
</p>
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
            {score === 10
              ? "Excellent work! 🌟"
              : score >= 8
                ? "Great job! 👏"
                : "Keep practising. You are improving! 💪"}
          </p>

          <div className="quiz-actions">
            <Link href="/spelling/week-1" className="secondary-link">
              ← Return to Week 1
            </Link>

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
      <Link href="/spelling/week-1">← Back to Week 1</Link>

      <section className="quiz-card">
        <p className="small-title">WEEK 1 QUIZ</p>

        <h1>
          Question {question + 1} / {shuffledWords.length}
        </h1>

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