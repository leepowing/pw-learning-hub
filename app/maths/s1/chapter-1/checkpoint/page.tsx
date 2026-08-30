"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CheckpointQuestion = {
  section: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

const questions: CheckpointQuestion[] = [
  {
    section: "Section 1 · Types of Numbers",
    prompt: "Which statement about 0 is correct?",
    options: [
      "It is a positive integer.",
      "It is a whole number and an integer.",
      "It is a prime number.",
      "It is an odd number.",
    ],
    answer: 1,
    explanation:
      "Zero is a whole number and an integer, but it is neither positive nor negative, neither prime nor odd.",
  },
  {
    section: "Section 1 · Types of Numbers",
    prompt: "Which number is prime?",
    options: ["21", "29", "39", "51"],
    answer: 1,
    explanation:
      "29 has exactly two positive factors: 1 and 29. The other numbers are divisible by 3.",
  },
  {
    section: "Section 1 · Types of Numbers",
    prompt: "Which is an improper fraction?",
    options: ["3/8", "5/9", "7/11", "11/7"],
    answer: 3,
    explanation:
      "In 11/7, the numerator is greater than the denominator, so it is an improper fraction.",
  },
  {
    section: "Section 2 · Arithmetic Operations",
    prompt: "What is the result of a division called?",
    options: ["Difference", "Product", "Quotient", "Sum"],
    answer: 2,
    explanation:
      "Dividend ÷ divisor = quotient. For example, 35 ÷ 5 = 7, so 7 is the quotient.",
  },
  {
    section: "Section 2 · Arithmetic Operations",
    prompt: "Evaluate 60 − [18 ÷ 3 + 4 × 5].",
    options: ["24", "30", "34", "46"],
    answer: 2,
    explanation:
      "18 ÷ 3 = 6 and 4 × 5 = 20. The brackets equal 26, so 60 − 26 = 34.",
  },
  {
    section: "Section 2 · Arithmetic Operations",
    prompt: "Evaluate 48 ÷ 6 × 2.",
    options: ["4", "8", "16", "24"],
    answer: 2,
    explanation:
      "Division and multiplication have equal priority. Work left to right: 48 ÷ 6 = 8, then 8 × 2 = 16.",
  },
  {
    section: "Section 3 · Divisibility",
    prompt: "Which number is divisible by 9?",
    options: ["3,421", "4,752", "6,124", "8,203"],
    answer: 1,
    explanation:
      "The digit sum of 4,752 is 4 + 7 + 5 + 2 = 18, which is divisible by 9.",
  },
  {
    section: "Section 3 · Divisibility",
    prompt: "Which number is divisible by 6 but not by 9?",
    options: ["258", "315", "342", "424"],
    answer: 0,
    explanation:
      "258 is even and its digit sum is 15, so it is divisible by 2 and 3, and therefore by 6. Its digit sum is not divisible by 9.",
  },
  {
    section: "Section 3 · Divisibility",
    prompt: "What is the smallest digit □ that makes 53□ divisible by 3?",
    options: ["0", "1", "2", "3"],
    answer: 1,
    explanation:
      "The digit sum is 5 + 3 + □ = 8 + □. The smallest multiple of 3 above 8 is 9, so □ = 1.",
  },
  {
    section: "Section 4 · H.C.F. and L.C.M.",
    prompt: "What is the H.C.F. of 84 and 126?",
    options: ["14", "21", "42", "63"],
    answer: 2,
    explanation:
      "84 = 2² × 3 × 7 and 126 = 2 × 3² × 7. Their common prime factors give 2 × 3 × 7 = 42.",
  },
  {
    section: "Section 4 · H.C.F. and L.C.M.",
    prompt: "What is the L.C.M. of 12 and 18?",
    options: ["6", "24", "30", "36"],
    answer: 3,
    explanation:
      "12 = 2² × 3 and 18 = 2 × 3². Using the larger powers gives 2² × 3² = 36.",
  },
  {
    section: "Section 4 · H.C.F. and L.C.M.",
    prompt: "The H.C.F. of 24 and 36 is 12. What is their L.C.M.?",
    options: ["48", "60", "72", "96"],
    answer: 2,
    explanation:
      "For two positive integers, H.C.F. × L.C.M. equals their product. Therefore L.C.M. = (24 × 36) ÷ 12 = 72.",
  },
  {
    section: "Section 5 · Fractions and Decimals",
    prompt: "Calculate 3/4 + 5/6. Give the answer as a mixed number.",
    options: ["1 1/12", "1 5/12", "1 7/12", "1 9/12"],
    answer: 2,
    explanation:
      "The common denominator is 12: 3/4 + 5/6 = 9/12 + 10/12 = 19/12 = 1 7/12.",
  },
  {
    section: "Section 5 · Fractions and Decimals",
    prompt: "Calculate 5/6 ÷ 10/9.",
    options: ["3/4", "4/5", "25/27", "50/54"],
    answer: 0,
    explanation:
      "Multiply by the reciprocal: 5/6 × 9/10 = 45/60 = 3/4.",
  },
  {
    section: "Section 5 · Fractions and Decimals",
    prompt: "Calculate 4.68 ÷ 0.6.",
    options: ["0.78", "7.08", "7.8", "78"],
    answer: 2,
    explanation:
      "Multiply both numbers by 10: 4.68 ÷ 0.6 = 46.8 ÷ 6 = 7.8.",
  },
];

export default function ChapterOneCheckpointPage() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[questionIndex];
  const answered = selectedOption !== null;
  const selectedIsCorrect = selectedOption === question.answer;

  function chooseAnswer(optionIndex: number) {
    if (answered) return;

    setSelectedOption(optionIndex);
    if (optionIndex === question.answer) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function continueCheckpoint() {
    if (!answered) return;

    if (questionIndex === questions.length - 1) {
      setCompleted(true);
      return;
    }

    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedOption(null);
  }

  function restartCheckpoint() {
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setCompleted(false);
  }

  if (completed) {
    const finalPercentage = Math.round((score / questions.length) * 100);
    const resultMessage =
      finalPercentage >= 80
        ? "Excellent work — your Chapter 1 foundations are secure."
        : finalPercentage >= 60
          ? "Good progress — review the explanations and try once more."
          : "Keep practising — revisit the five sections before trying again.";

    return (
      <main className="resultPage">
        <section className="resultCard">
          <span className="resultIcon">✓</span>
          <p className="resultLabel">CHAPTER 1 CHECKPOINT COMPLETE</p>
          <h1>{score} / {questions.length}</h1>
          <div className="resultPercentage">{finalPercentage}%</div>
          <p className="resultMessage">{resultMessage}</p>

          <div className="resultActions">
            <button type="button" className="retryButton" onClick={restartCheckpoint}>
              Try again
            </button>
            <button
              type="button"
              className="returnButton"
              onClick={() => router.push("/maths/s1/chapter-1")}
            >
              Return to Chapter 1
            </button>
          </div>
        </section>

        <style jsx>{`
          .resultPage {
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 28px;
            box-sizing: border-box;
            background: linear-gradient(145deg, #eef2ff, #ecfdf5);
            color: #172033;
          }

          .resultCard {
            width: min(620px, 100%);
            padding: 42px;
            box-sizing: border-box;
            border: 1px solid #c7d2fe;
            border-radius: 28px;
            background: white;
            box-shadow: 0 18px 50px rgba(15, 23, 42, 0.1);
            text-align: center;
          }

          .resultIcon {
            width: 72px;
            height: 72px;
            display: grid;
            place-items: center;
            margin: 0 auto 18px;
            border-radius: 50%;
            background: #d1fae5;
            color: #047857;
            font-size: 34px;
            font-weight: 900;
          }

          .resultLabel {
            margin: 0;
            color: #4f46e5;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.1em;
          }

          h1 {
            margin: 15px 0 4px;
            font-size: 56px;
          }

          .resultPercentage {
            color: #047857;
            font-size: 28px;
            font-weight: 900;
          }

          .resultMessage {
            margin: 20px auto 28px;
            color: #64748b;
            font-size: 18px;
            line-height: 1.55;
          }

          .resultActions {
            display: flex;
            justify-content: center;
            gap: 12px;
          }

          .resultActions button {
            padding: 13px 19px;
            border-radius: 14px;
            font-size: 16px;
            font-weight: 900;
            cursor: pointer;
          }

          .retryButton {
            border: 2px solid #4f46e5;
            background: white;
            color: #4f46e5;
          }

          .returnButton {
            border: 2px solid #047857;
            background: #047857;
            color: white;
          }

          @media (max-width: 520px) {
            .resultPage { padding: 12px; }
            .resultCard { padding: 28px 20px; }
            .resultActions { flex-direction: column; }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-1")}
      >
        ← Back to Chapter 1
      </button>

      <div className="headerRow">
        <div>
          <p className="eyebrow">S1 · CHAPTER 1</p>
          <h1>Basic Computation Checkpoint</h1>
        </div>
        <div className="scoreBadge">Score: {score}</div>
      </div>

      <div className="progressHeader">
        <span>Question {questionIndex + 1} of {questions.length}</span>
        <span>{question.section}</span>
      </div>

      <div className="progressTrack">
        <div
          className="progressFill"
          style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <section className="questionCard">
        <p className="questionLabel">CHECKPOINT QUESTION</p>
        <h2>{question.prompt}</h2>

        <div className="optionsGrid">
          {question.options.map((option, optionIndex) => {
            let className = "optionButton";

            if (answered && optionIndex === question.answer) {
              className += " correctOption";
            } else if (answered && optionIndex === selectedOption) {
              className += " incorrectOption";
            }

            return (
              <button
                key={option}
                type="button"
                className={className}
                onClick={() => chooseAnswer(optionIndex)}
                disabled={answered}
              >
                <span className="optionLetter">
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={selectedIsCorrect ? "feedback correctFeedback" : "feedback incorrectFeedback"}>
            <strong>{selectedIsCorrect ? "Correct!" : "Not quite."}</strong>
            <span>{question.explanation}</span>
          </div>
        )}

        <div className="questionFooter">
          <span>{answered ? "Explanation shown above" : "Choose one answer"}</span>
          <button
            type="button"
            className="continueButton"
            onClick={continueCheckpoint}
            disabled={!answered}
          >
            {questionIndex === questions.length - 1 ? "See result →" : "Next question →"}
          </button>
        </div>
      </section>

      <section className="coverageCard">
        <p>CHECKPOINT COVERAGE</p>
        <div>
          <span>Types of Numbers</span>
          <span>Arithmetic Operations</span>
          <span>Divisibility</span>
          <span>H.C.F. and L.C.M.</span>
          <span>Fractions and Decimals</span>
        </div>
      </section>

      <style jsx>{`
        .page {
          max-width: 900px;
          width: calc(100% - 48px);
          margin: 44px auto 72px;
          box-sizing: border-box;
          color: #172033;
        }

        .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: none;
          background: transparent;
          color: #047857;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .headerRow {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #e11d48;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        h1 {
          margin: 0;
          font-size: clamp(35px, 5vw, 50px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .scoreBadge {
          flex-shrink: 0;
          padding: 11px 16px;
          border-radius: 999px;
          background: #ecfdf5;
          color: #047857;
          font-weight: 900;
        }

        .progressHeader {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 30px;
          color: #64748b;
          font-size: 14px;
          font-weight: 800;
        }

        .progressTrack {
          height: 11px;
          margin-top: 9px;
          overflow: hidden;
          border-radius: 999px;
          background: #e2e8f0;
        }

        .progressFill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4f46e5, #10b981);
          transition: width 0.25s ease;
        }

        .questionCard {
          margin-top: 20px;
          padding: 31px;
          border: 1px solid #c7d2fe;
          border-radius: 25px;
          background: linear-gradient(145deg, #f8faff, #ffffff);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
        }

        .questionLabel {
          margin: 0 0 8px;
          color: #4f46e5;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .questionCard h2 {
          margin: 0;
          font-size: clamp(25px, 4vw, 32px);
          line-height: 1.35;
        }

        .optionsGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
          margin-top: 25px;
        }

        .optionButton {
          min-height: 74px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px;
          border: 2px solid #dbe3ef;
          border-radius: 16px;
          background: white;
          color: #172033;
          font-size: 16px;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
        }

        .optionButton:not(:disabled):hover {
          border-color: #818cf8;
          transform: translateY(-1px);
        }

        .optionButton:disabled { cursor: default; }

        .optionLetter {
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #eef2ff;
          color: #4f46e5;
          font-weight: 900;
        }

        .correctOption {
          border-color: #10b981;
          background: #ecfdf5;
          color: #047857;
        }

        .correctOption .optionLetter {
          background: #10b981;
          color: white;
        }

        .incorrectOption {
          border-color: #fb7185;
          background: #fff1f2;
          color: #be123c;
        }

        .incorrectOption .optionLetter {
          background: #fb7185;
          color: white;
        }

        .feedback {
          display: grid;
          gap: 5px;
          margin-top: 17px;
          padding: 16px 18px;
          border-radius: 15px;
          line-height: 1.55;
        }

        .correctFeedback { background: #d1fae5; color: #065f46; }
        .incorrectFeedback { background: #ffe4e6; color: #9f1239; }

        .questionFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-top: 22px;
        }

        .questionFooter > span {
          color: #94a3b8;
          font-size: 14px;
        }

        .continueButton {
          padding: 13px 19px;
          border: none;
          border-radius: 14px;
          background: #4f46e5;
          color: white;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
        }

        .continueButton:disabled {
          background: #cbd5e1;
          color: #64748b;
          cursor: not-allowed;
        }

        .coverageCard {
          margin-top: 18px;
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          background: #f8fafc;
        }

        .coverageCard p {
          margin: 0 0 12px;
          color: #64748b;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.09em;
        }

        .coverageCard div {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .coverageCard span {
          padding: 7px 10px;
          border-radius: 999px;
          background: white;
          color: #475569;
          font-size: 13px;
          font-weight: 700;
        }

        @media (max-width: 650px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .headerRow { align-items: flex-start; }
          .scoreBadge { margin-top: 2px; }
          .progressHeader { align-items: flex-start; flex-direction: column; gap: 5px; }
          .questionCard { padding: 22px; border-radius: 20px; }
          .optionsGrid { grid-template-columns: 1fr; }
          .questionFooter { align-items: stretch; flex-direction: column; }
          .continueButton { width: 100%; }
        }

        @media (max-width: 430px) {
          .headerRow { flex-direction: column; }
          .scoreBadge { align-self: flex-start; }
        }
      `}</style>
    </main>
  );
}
