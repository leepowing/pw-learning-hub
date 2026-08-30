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
    section: "Section 1 · Directed Numbers and Number Line",
    prompt: "Which directed number represents a withdrawal of £35?",
    options: ["+35", "−35", "+£35", "0"],
    answer: 1,
    explanation:
      "A withdrawal is a decrease in the account balance, so it is represented by −35.",
  },
  {
    section: "Section 1 · Directed Numbers and Number Line",
    prompt: "What is the opposite number of −1 3/4?",
    options: ["−1 3/4", "−4/3", "+3/4", "+1 3/4"],
    answer: 3,
    explanation:
      "Opposite numbers have the same magnitude but different signs. Therefore, the opposite of −1 3/4 is +1 3/4.",
  },
  {
    section: "Section 1 · Directed Numbers and Number Line",
    prompt: "Which is the greatest number?",
    options: ["−2.1", "−2.01", "−2.001", "−2.11"],
    answer: 2,
    explanation:
      "Among negative numbers, the number closest to zero is greatest. −2.001 is closest to zero.",
  },
  {
    section: "Section 1 · Directed Numbers and Number Line",
    prompt: "Which list is in ascending order?",
    options: [
      "−3, −1, 0, +2",
      "+2, 0, −1, −3",
      "−1, −3, 0, +2",
      "0, −1, −3, +2",
    ],
    answer: 0,
    explanation:
      "Ascending order means smallest to greatest. On a number line, −3 < −1 < 0 < +2.",
  },
  {
    section: "Section 1 · Directed Numbers and Number Line",
    prompt: "What is |−7.5|?",
    options: ["−7.5", "0", "+7", "7.5"],
    answer: 3,
    explanation:
      "Absolute value is distance from zero, so |−7.5| = 7.5.",
  },
  {
    section: "Section 2 · Addition and Subtraction",
    prompt: "Evaluate (−8) + (+3).",
    options: ["−11", "−5", "+5", "+11"],
    answer: 1,
    explanation:
      "The signs are different. Subtract the magnitudes, 8 − 3 = 5, and keep the sign of the larger magnitude: −5.",
  },
  {
    section: "Section 2 · Addition and Subtraction",
    prompt: "Evaluate (+6) − (−9).",
    options: ["−15", "−3", "+3", "+15"],
    answer: 3,
    explanation:
      "Subtracting a negative number means adding its opposite: 6 − (−9) = 6 + 9 = 15.",
  },
  {
    section: "Section 2 · Addition and Subtraction",
    prompt: "Evaluate −4.2 + 1.7.",
    options: ["−5.9", "−2.5", "+2.5", "+5.9"],
    answer: 1,
    explanation:
      "The signs are different. Since 4.2 > 1.7, the result is negative: −(4.2 − 1.7) = −2.5.",
  },
  {
    section: "Section 2 · Addition and Subtraction",
    prompt: "Evaluate (−12) − (−5) + (−3).",
    options: ["−20", "−14", "−10", "−4"],
    answer: 2,
    explanation:
      "Remove brackets: −12 + 5 − 3 = −7 − 3 = −10.",
  },
  {
    section: "Section 2 · Addition and Subtraction",
    prompt: "The temperature is −6°C. It rises by 8°C, then falls by 5°C. What is the final temperature?",
    options: ["−19°C", "−3°C", "+3°C", "+7°C"],
    answer: 1,
    explanation:
      "Represent the changes as −6 + 8 − 5. This equals 2 − 5 = −3°C.",
  },
  {
    section: "Section 3 · Multiplication and Division",
    prompt: "Evaluate (−7) × (+6).",
    options: ["−42", "−13", "+13", "+42"],
    answer: 0,
    explanation:
      "Different signs give a negative product, and 7 × 6 = 42. Therefore, the result is −42.",
  },
  {
    section: "Section 3 · Multiplication and Division",
    prompt: "Evaluate (−48) ÷ (−8).",
    options: ["−8", "−6", "+6", "+8"],
    answer: 2,
    explanation:
      "The signs are the same, so the quotient is positive. 48 ÷ 8 = 6.",
  },
  {
    section: "Section 3 · Multiplication and Division",
    prompt: "Evaluate (−2) × (−3) × (−4).",
    options: ["−24", "−9", "+9", "+24"],
    answer: 0,
    explanation:
      "There are three negative factors—an odd number—so the product is negative. 2 × 3 × 4 = 24.",
  },
  {
    section: "Section 3 · Multiplication and Division",
    prompt: "Evaluate (−16) ÷ [(−2) × (−5 + 7)].",
    options: ["−8", "−4", "+4", "+8"],
    answer: 2,
    explanation:
      "Work inside the brackets: −5 + 7 = 2, then (−2) × 2 = −4. Finally, −16 ÷ −4 = +4.",
  },
  {
    section: "Section 3 · Multiplication and Division",
    prompt: "Evaluate (−24) ÷ (+6) × (−3) + (−5).",
    options: ["−17", "−7", "+7", "+17"],
    answer: 2,
    explanation:
      "Work left to right for division and multiplication: −24 ÷ 6 = −4, then −4 × −3 = 12. Finally, 12 − 5 = 7.",
  },
];

export default function ChapterTwoCheckpointPage() {
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
        ? "Excellent work — your directed-number foundations are secure."
        : finalPercentage >= 60
          ? "Good progress — review the explanations and try once more."
          : "Keep practising — revisit the five sections before trying again.";

    return (
      <main className="resultPage">
        <section className="resultCard">
          <span className="resultIcon">✓</span>
          <p className="resultLabel">CHAPTER 2 CHECKPOINT COMPLETE</p>
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
              onClick={() => router.push("/maths/s1/chapter-2")}
            >
              Return to Chapter 2
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
        onClick={() => router.push("/maths/s1/chapter-2")}
      >
        ← Back to Chapter 2
      </button>

      <div className="headerRow">
        <div>
          <p className="eyebrow">S1 · CHAPTER 2</p>
          <h1>Directed Numbers Checkpoint</h1>
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
          <span>Directed Numbers and Number Line</span>
          <span>Addition and Subtraction</span>
          <span>Multiplication and Division</span>
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
