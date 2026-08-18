"use client";

import Link from "next/link";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { findWord } from "@/data/spellingWeeks";

import { getCurrentStudent } from "@/lib/studentStorage";

import {
  getStudentMistakes,
  saveStudentReviewResult,
} from "@/lib/supabase";

type MistakeRow = {
  word: string;
  wrong_count: number | null;
  correct_count: number | null;
};

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
      "year7-spelling"
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
  const previousWords = new Set(
    lastSessionWords.current
  );

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
      // 優先選擇上一組沒有出現的生字
      if (
        first.wasInPreviousSession !==
        second.wasInPreviousSession
      ) {
        return (
          first.wasInPreviousSession -
          second.wasInPreviousSession
        );
      }

      // 正確次數較少的優先
      if (first.correctCount !== second.correctCount) {
        return first.correctCount - second.correctCount;
      }

      // 錯誤次數較多的優先
      if (first.wrongCount !== second.wrongCount) {
        return second.wrongCount - first.wrongCount;
      }

      // 相同優先度時隨機排列
      return first.randomOrder - second.randomOrder;
    })
    .slice(0, 10)
    .map((item) => item.word);

  lastSessionWords.current = selectedWords;

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
      "year7-spelling"
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
    "year7-spelling"
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
  <li
    key={word}
    style={{
      display: "flex",
      justifyContent: "space-between",
      gap: "16px",
    }}
  >
    <span>{word}</span>

    <span
      style={{
        color: "#4f46e5",
        fontWeight: 700,
        whiteSpace: "nowrap",
      }}
    >
      Mastery {masteryCounts[word] ?? 0} / 3
    </span>
  </li>
))}
              </ul>
            </div>
          )}

          <div className="quiz-actions">
            {reviewWords.length > 0 && (
              <button
                className="quiz-button"
                onClick={prepareReview}
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

if (showPreview) {
  return (
    <main className="home-page">
      <Link href="/spelling">
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