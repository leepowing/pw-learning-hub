"use client";

import Link from "next/link";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { findWord } from "@/data/year8SpellingWeeks";

import { getCurrentStudent } from "@/lib/studentStorage";

import {
  getStudentMistakes,
  saveStudentReviewResult,
  saveStudentReviewXP,
} from "@/lib/supabase";

type MistakeRow = {
  word: string;
  wrong_count: number | null;
  correct_count: number | null;
};

const REVIEW_XP_PER_CORRECT = 3;

export default function ReviewPage() {
  const [reviewWords, setReviewWords] = useState<string[]>([]);
  const [sessionWords, setSessionWords] = useState<string[]>([]);
const [failedWords, setFailedWords] = useState<string[]>([]);

const [mistakeCounts, setMistakeCounts] = useState<
  Record<string, number>
>({});

const [masteryCounts, setMasteryCounts] = useState<
  Record<string, number>
>({});

const lastSessionWords = useRef<string[]>([]);

  const [started, setStarted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const [earnedXP, setEarnedXP] = useState(0);
  const currentWord = sessionWords[question];
  const currentWordData = currentWord
     ? findWord(currentWord)
     : null;
const visibleReviewWords = reviewWords.slice(
  0,
  visibleCount
);
const hiddenReviewWordCount = Math.max(
  reviewWords.length - visibleReviewWords.length,
  0
);   

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
  let cancelled = false;

  async function loadReviewWords() {
    const student = getCurrentStudent();

    if (student === "guest") {
      if (!cancelled) {
        setReviewWords([]);
        setMistakeCounts({});
        setMasteryCounts({});
        setHasLoaded(true);
      }

      return;
    }

    const rows = (await getStudentMistakes(
      student,
      "year8-spelling"
    )) as MistakeRow[];

    if (cancelled) {
      return;
    }

    const words = [
      ...new Set(
        rows
          .map((row) => row.word)
          .filter(
            (word): word is string =>
              typeof word === "string" &&
              word.trim() !== ""
          )
      ),
    ];

    const counts = rows.reduce<Record<string, number>>(
      (result, row) => {
        result[row.word] = row.wrong_count ?? 1;
        return result;
      },
      {}
    );

const masteryProgress = rows.reduce<
  Record<string, number>
>((result, row) => {
  result[row.word] = Math.min(
    row.correct_count ?? 0,
    3
  );

  return result;
}, {});

setReviewWords(words);
setMistakeCounts(counts);
setMasteryCounts(masteryProgress);
setHasLoaded(true);
  }

  loadReviewWords();

  return () => {
    cancelled = true;
  };
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

const prepareReview = () => {
  const student = getCurrentStudent();
  const recentWordsKey = `${student}_recentReviewWords`;

  let savedRecentWords: string[] = [];

  try {
    const savedValue =
      window.sessionStorage.getItem(recentWordsKey);

    const parsedValue = savedValue
      ? JSON.parse(savedValue)
      : [];

    if (Array.isArray(parsedValue)) {
      savedRecentWords = parsedValue.filter(
        (word): word is string =>
          typeof word === "string"
      );
    }
  } catch {
    savedRecentWords = [];
  }

  const previousWords = new Set([
    ...lastSessionWords.current,
    ...savedRecentWords,
  ]);

  const selectedWords = reviewWords
    .map((word) => ({
      word,
      wasInPreviousSession:
        previousWords.has(word) ? 1 : 0,
      correctCount: masteryCounts[word] ?? 0,
      wrongCount: mistakeCounts[word] ?? 0,
      randomOrder: Math.random(),
    }))
    .sort((first, second) => {
      if (
        first.wasInPreviousSession !==
        second.wasInPreviousSession
      ) {
        return (
          first.wasInPreviousSession -
          second.wasInPreviousSession
        );
      }

      if (first.correctCount !== second.correctCount) {
        return first.correctCount - second.correctCount;
      }

      if (first.wrongCount !== second.wrongCount) {
        return second.wrongCount - first.wrongCount;
      }

      return first.randomOrder - second.randomOrder;
    })
    .slice(0, 10)
    .map((item) => item.word);

  lastSessionWords.current = selectedWords;

  window.sessionStorage.setItem(
    recentWordsKey,
    JSON.stringify(selectedWords)
  );

  setSessionWords(selectedWords);
  setQuestion(0);
  setAnswer("");
  setFeedback("");
  setFinished(false);
  setScore(0);
  setFailedWords([]);
  setShowPreview(true);
  setStarted(false);
};

const startReview = () => {
  if (sessionWords.length === 0) {
    return;
  }

  setFailedWords([]);
  setQuestion(0);
  setAnswer("");
  setFeedback("");
  setScore(0);
  setFinished(false);
  setShowPreview(false);
  setStarted(true);
};

  const checkAnswer = async() => {
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

window.setTimeout(async () => {
      const isLastQuestion =
        question === sessionWords.length - 1;

if (isLastQuestion) {
const reviewedWords = [
  ...new Set(sessionWords),
];

const remainingSessionWords =
  reviewedWords.filter(
    (word) => updatedFailedWords.includes(word)
  );

  const student = getCurrentStudent();

const saveResults = await Promise.all(
  reviewedWords.map((word) =>
    saveStudentReviewResult(
      student,
      word,
      !remainingSessionWords.includes(word),
      "year8-spelling"
    )
  )
);

  if (saveResults.some((saved) => !saved)) {
    alert(
      "Some review results could not be saved. Please try again."
    );
  }

  const refreshedRows = (await getStudentMistakes(
    student,
    "year8-spelling"
  )) as MistakeRow[];

  const refreshedWords = [
    ...new Set(
      refreshedRows
        .map((row) => row.word)
        .filter(
          (word): word is string =>
            typeof word === "string"
        )
    ),
  ];

  const refreshedCounts =
    refreshedRows.reduce<Record<string, number>>(
      (result, row) => {
        result[row.word] = row.wrong_count ?? 1;
        return result;
      },
      {}
    );

const refreshedMasteryCounts =
  refreshedRows.reduce<Record<string, number>>(
    (result, row) => {
      result[row.word] = Math.min(
        row.correct_count ?? 0,
        3
      );

      return result;
    },
    {}
  );

setReviewWords(refreshedWords);
setMistakeCounts(refreshedCounts);
setMasteryCounts(refreshedMasteryCounts);

const gainedXP = newScore * REVIEW_XP_PER_CORRECT;

const xpSaved = await saveStudentReviewXP(
  student,
  gainedXP,
  "year8-spelling"
);

setEarnedXP(xpSaved ? gainedXP : 0);

if (!xpSaved) {
  alert("Review result was saved, but XP could not be added.");
}

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
  const correctWords = sessionWords.filter(
    (word) => !failedWords.includes(word)
  );

  const scorePercentage =
    sessionWords.length > 0
      ? Math.round((score / sessionWords.length) * 100)
      : 0;

  const resultMessage =
    scorePercentage === 100
      ? "Perfect work! You spelled every word correctly."
      : scorePercentage >= 80
        ? "Excellent work! You are very close to a perfect score."
        : scorePercentage >= 60
          ? "Good effort! A little more practice will help these words stick."
          : "Keep going! Review the tricky words and try another set when you are ready.";

  const resultEmoji =
    scorePercentage === 100
      ? "🏆"
      : scorePercentage >= 80
        ? "🌟"
        : scorePercentage >= 60
          ? "👏"
          : "💪";

  return (
    <main className="home-page">
      <Link href="/year8-spelling">← Back to spelling</Link>

      <section className="quiz-card quiz-result">
        <p className="small-title">SMART REVIEW COMPLETE</p>

        <div
          style={{
            fontSize: "56px",
            lineHeight: 1,
            marginBottom: "12px",
          }}
        >
          {resultEmoji}
        </div>

        <h1 style={{ marginBottom: "8px" }}>Well done!</h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            margin: "0 auto 28px",
            maxWidth: "620px",
          }}
        >
          {resultMessage}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "14px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderRadius: "18px",
              background: "#eef0ff",
            }}
          >
            <strong style={{ display: "block", fontSize: "34px" }}>
              {score} / {sessionWords.length}
            </strong>
            <span>Score</span>
          </div>

          <div
            style={{
              padding: "20px",
              borderRadius: "18px",
              background: "#ecfdf3",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#15803d",
                fontSize: "34px",
              }}
            >
              {correctWords.length}
            </strong>
            <span>Correct words</span>
          </div>

          <div
            style={{
              padding: "20px",
              borderRadius: "18px",
              background: failedWords.length > 0 ? "#fff7ed" : "#ecfdf3",
            }}
          >
            <strong
              style={{
                display: "block",
                color: failedWords.length > 0 ? "#c2410c" : "#15803d",
                fontSize: "34px",
              }}
            >
              {failedWords.length}
            </strong>
            <span>Words to practise</span>
          </div>
        </div>

        {failedWords.length > 0 ? (
          <div
            style={{
              padding: "22px",
              borderRadius: "20px",
              background: "#fff7ed",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            <h2 style={{ marginTop: 0 }}>📝 Practise these again</h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {failedWords.map((word) => (
                <span
                  key={word}
                  style={{
                    padding: "9px 14px",
                    borderRadius: "999px",
                    background: "white",
                    border: "1px solid #fed7aa",
                    fontWeight: 700,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="perfect-card">
            🎉 All 10 words were correct in this review.
          </div>
        )}

        {correctWords.length > 0 && (
          <details
            style={{
              margin: "20px 0",
              padding: "18px 20px",
              borderRadius: "18px",
              background: "#f8fafc",
              textAlign: "left",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              ✅ Correct this session ({correctWords.length})
            </summary>

            <p style={{ marginBottom: 0 }}>
              {correctWords.join(", ")}
            </p>
          </details>
        )}

        <p
          style={{
            color: "#666",
            fontWeight: 600,
            margin: "22px 0",
          }}
        >
          {reviewWords.length > 0
            ? `${reviewWords.length} words remain in your Review Centre.`
            : "You have completed every word in your Review Centre."}
        </p>

        <div className="quiz-actions">
          {reviewWords.length > 0 && (
            <button
              type="button"
              className="quiz-button"
              onClick={prepareReview}
            >
              Continue — Choose another 10 words
            </button>
          )}

          <Link href="/year8-spelling" className="secondary-link">
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
        <Link href="/year8-spelling">
          ← Back to spelling
        </Link>

        <section className="quiz-card quiz-result">
          <p className="small-title">SMART REVIEW</p>

          <h1>All caught up!</h1>

          <div className="perfect-card">
            ✅ There are no words to review right now.
          </div>

          <Link
            href="/year8-spelling"
            className="secondary-link"
          >
            Return to spelling
          </Link>
        </section>
      </main>
    );
  }

if (showPreview) {
  return (
    <main className="home-page">
      <Link href="/year8-spelling">
        ← Back to spelling
      </Link>

      <section className="student-section">
        <p className="small-title">
          10-WORD SMART REVIEW
        </p>

        <h1>Review these 10 words</h1>

        <p>
          Read and listen to each word before starting
          the spelling review.
        </p>

        <div className="word-list">
          {sessionWords.map((word, index) => {
            const wordData = findWord(word);

            return (
              <article
                className="word-card"
                key={word}
              >
                <div className="word-number">
                  {index + 1}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2>{word}</h2>

                    <button
                      type="button"
                      onClick={() =>
                        speak(
                          word,
                          wordData?.sentence
                        )
                      }
                      className="text-xl hover:scale-110"
                    >
                      🔊
                    </button>
                  </div>

                  {wordData ? (
                    <>
                      <p>{wordData.meaning}</p>

                      <p className="chinese-meaning">
                        中文：{wordData.chinese}
                      </p>

                      <div className="example-box">
                        <strong>Example</strong>
                        <p>{wordData.sentence}</p>
                      </div>
                    </>
                  ) : (
                    <p>
                      Word details are currently
                      unavailable.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="quiz-button"
          onClick={startReview}
        >
          Start 10-Word Review
        </button>
      </section>
    </main>
  );
}

  if (!started) {
    return (
      <main className="home-page">
        <Link href="/year8-spelling">
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
              {visibleReviewWords.map((word) => (
                <li key={word}>{word}</li>
              ))}
            </ul>
{visibleCount < reviewWords.length && (
  <button
    type="button"
    className="quiz-button"
    onClick={() =>
      setVisibleCount((count) =>
        Math.min(count + 10, reviewWords.length)
      )
    }
  >
    Show 10 more
  </button>
)}

{hiddenReviewWordCount > 0 && (
  <p
    style={{
      marginTop: "16px",
      color: "#666",
      fontWeight: 600,
    }}
  >
    + {hiddenReviewWordCount} more words waiting for
    review.
  </p>
)}

          </div>

          <button
  className="quiz-button"
  onClick={prepareReview}
>
  Continue — Choose 10 Words
</button>
        </section>
      </main>
    );
  }

  return (
    <main className="home-page">
      <Link href="/year8-spelling">
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