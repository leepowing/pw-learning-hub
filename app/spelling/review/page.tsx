"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { findWord } from "@/data/spellingWeeks";

export default function ReviewPage() {
  const [reviewWords, setReviewWords] = useState<string[]>([]);
  const [sessionWords, setSessionWords] = useState<string[]>([]);
const [failedWords, setFailedWords] = useState<string[]>([]);

const [mistakeCounts, setMistakeCounts] = useState<
  Record<string, number>
>({});

  const [started, setStarted] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  const currentWord = sessionWords[question];
  const currentWordData = currentWord
     ? findWord(currentWord)
     : null;

const speak = useCallback(
  (word: string, sentence?: string) => {
    if (!word) {
      return;
    }

    window.speechSynthesis.cancel();

    const first = new SpeechSynthesisUtterance(
      `The word is ${word}.`
    );
    first.lang = "en-GB";
    first.rate = 0.82;

    const second = new SpeechSynthesisUtterance(
      sentence || word
    );
    second.lang = "en-GB";
    second.rate = 0.82;

    const third = new SpeechSynthesisUtterance(word);
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
  },
  []
);

  useEffect(() => {
    try {
      const savedReviewWords =
        window.localStorage.getItem("reviewWords");

      if (savedReviewWords) {
        const parsedReviewWords = JSON.parse(savedReviewWords);

        if (Array.isArray(parsedReviewWords)) {
          const validWords = parsedReviewWords.filter(
            (word): word is string =>
              typeof word === "string" &&
              word.trim() !== ""
          );

          const uniqueWords = [...new Set(validWords)];

          setReviewWords(uniqueWords);
const savedMistakeCounts =
  window.localStorage.getItem("reviewMistakeCounts");

if (savedMistakeCounts) {
  const parsedMistakeCounts = JSON.parse(
    savedMistakeCounts
  );

  if (
    parsedMistakeCounts &&
    typeof parsedMistakeCounts === "object"
  ) {
    setMistakeCounts(parsedMistakeCounts);
  }
}
        }
      }
    } catch {
      window.localStorage.removeItem("reviewWords");
      setReviewWords([]);
    }

    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (
      started &&
      !finished &&
      currentWord
    ) {
speak(
  currentWord,
  currentWordData?.sentence
);    }
  }, [started, finished, currentWord, speak]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

const startReview = () => {
  const expandedWords = reviewWords.flatMap((word) => {
    const numberOfMistakes = mistakeCounts[word] ?? 1;

    const numberOfReviews = Math.min(
      numberOfMistakes + 1,
      4
    );

    return Array.from(
      { length: numberOfReviews },
      () => word
    );
  });

  const shuffledWords = [...expandedWords].sort(
    () => Math.random() - 0.5
  );

  setSessionWords(shuffledWords);
  setFailedWords([]);
  setQuestion(0);
  setAnswer("");
  setFeedback("");
  setScore(0);
  setFinished(false);
  setStarted(true);
};

  const checkAnswer = () => {
    if (!answer.trim() || !currentWord) {
      setFeedback("Please enter your answer.");
      return;
    }

    const isCorrect =
      answer.trim().toLowerCase() ===
      currentWord.toLowerCase();

    const newScore = isCorrect ? score + 1 : score;

const updatedFailedWords = isCorrect
  ? failedWords
  : [...new Set([...failedWords, currentWord])];

setScore(newScore);
setFailedWords(updatedFailedWords);

    if (isCorrect) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(
        `❌ The correct spelling is: ${currentWord}`
      );
    }

    window.setTimeout(() => {
      const isLastQuestion =
        question === sessionWords.length - 1;

      if (isLastQuestion) {
const remainingWords = reviewWords.filter(
  (word) => updatedFailedWords.includes(word)
);

        window.localStorage.setItem(
          "reviewWords",
          JSON.stringify(remainingWords)
        );

        const updatedMistakeCounts = {
  ...mistakeCounts,
};

reviewWords.forEach((word) => {
  if (!remainingWords.includes(word)) {
    delete updatedMistakeCounts[word];
  }
});

window.localStorage.setItem(
  "reviewMistakeCounts",
  JSON.stringify(updatedMistakeCounts)
);

setMistakeCounts(updatedMistakeCounts);

        setReviewWords(remainingWords);
        setFinished(true);
        setStarted(false);
      } else {
        setQuestion(
          (previousQuestion) => previousQuestion + 1
        );
        setAnswer("");
        setFeedback("");
      }
    }, 1400);
  };

  if (!hasLoaded) {
    return (
      <main className="home-page">
        <section className="quiz-card">
          <p>Loading review words...</p>
        </section>
      </main>
    );
  }

  if (finished) {
    return (
      <main className="home-page">
        <Link href="/spelling">
          ← Back to spelling
        </Link>

        <section className="quiz-card quiz-result">
          <p className="small-title">
            SMART REVIEW COMPLETE
          </p>

          <h1>Your score</h1>

          <div className="score-display">
            {score} / {sessionWords.length}
          </div>

          {reviewWords.length === 0 ? (
            <div className="perfect-card">
              🎉 Excellent! All review words have been
              completed.
            </div>
          ) : (
            <div className="mistakes-card">
              <h2>Words still needing review</h2>

              <ul>
                {reviewWords.map((word) => (
                  <li key={word}>{word}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="quiz-actions">
            {reviewWords.length > 0 && (
              <button
                className="quiz-button"
                onClick={startReview}
              >
                🔁 Review remaining words
              </button>
            )}

            <Link
              href="/spelling"
              className="secondary-link"
            >
              Return to spelling
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (reviewWords.length === 0) {
    return (
      <main className="home-page">
        <Link href="/spelling">
          ← Back to spelling
        </Link>

        <section className="quiz-card quiz-result">
          <p className="small-title">SMART REVIEW</p>

          <h1>All caught up!</h1>

          <div className="perfect-card">
            ✅ There are no words to review right now.
          </div>

          <Link
            href="/spelling"
            className="secondary-link"
          >
            Return to spelling
          </Link>
        </section>
      </main>
    );
  }

  if (!started) {
    return (
      <main className="home-page">
        <Link href="/spelling">
          ← Back to spelling
        </Link>

        <section className="quiz-card">
          <p className="small-title">SMART REVIEW</p>

          <h1>Review Centre</h1>

          <p>
            You have {reviewWords.length}{" "}
            {reviewWords.length === 1
              ? "word"
              : "words"}{" "}
            to review.
          </p>

          <div className="mistakes-card">
            <h2>Words waiting for review</h2>

            <ul>
              {reviewWords.map((word) => (
                <li key={word}>{word}</li>
              ))}
            </ul>
          </div>

          <button
            className="quiz-button"
            onClick={startReview}
          >
            Start Review
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="home-page">
      <Link href="/spelling">
        ← Back to spelling
      </Link>

      <section className="quiz-card">
        <p className="small-title">SMART REVIEW</p>

        <h1>
          Question {question + 1} /{" "}
          {sessionWords.length}
        </h1>

        <p>
          Listen carefully, then type the spelling.
        </p>

        <button
          className="listen-button"
onClick={() =>
  speak(
    currentWord,
    currentWordData?.sentence
  )
}
        >
          🔊 Play word
        </button>

        <input
          className="quiz-input"
          type="text"
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);

            if (
              feedback === "Please enter your answer."
            ) {
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
            feedback.startsWith("✅") ||
            feedback.startsWith("❌")
          }
        />

        <button
          className="quiz-button"
          onClick={checkAnswer}
          disabled={
            feedback.startsWith("✅") ||
            feedback.startsWith("❌")
          }
        >
          Check answer
        </button>

        {feedback && (
          <p className="quiz-feedback">
            {feedback}
          </p>
        )}
      </section>
    </main>
  );
}