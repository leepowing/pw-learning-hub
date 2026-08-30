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
    section: "Section 1 · Formulae and the Method of Substitution",
    prompt: "Which statement best describes a formula?",
    options: [
      "A list of unrelated numbers",
      "A relationship among quantities",
      "An equation with no variables",
      "A rule used only once",
    ],
    answer: 1,
    explanation:
      "A formula uses variables and mathematical operations to show a general relationship among quantities.",
  },
  {
    section: "Section 1 · Formulae and the Method of Substitution",
    prompt: "Find E when E = ½mv², m = 8 and v = 5.",
    options: ["20", "40", "100", "200"],
    answer: 2,
    explanation:
      "Substitute the values: E = ½(8)(5²) = 4 × 25 = 100.",
  },
  {
    section: "Section 1 · Formulae and the Method of Substitution",
    prompt: "Find P when P = 2l + 2w, l = 7 and w = 4.",
    options: ["11", "18", "22", "56"],
    answer: 2,
    explanation:
      "P = 2(7) + 2(4) = 14 + 8 = 22.",
  },
  {
    section: "Section 1 · Formulae and the Method of Substitution",
    prompt: "Find T when T = 3a² − 2b, a = −3 and b = 4.",
    options: ["−35", "11", "19", "35"],
    answer: 2,
    explanation:
      "Use brackets for the negative value: T = 3(−3)² − 2(4) = 27 − 8 = 19.",
  },
  {
    section: "Section 1 · Formulae and the Method of Substitution",
    prompt: "Find S when S = 180(n − 2) and n = 7.",
    options: ["720", "900", "1080", "1260"],
    answer: 1,
    explanation:
      "Substitute n = 7: S = 180(7 − 2) = 180 × 5 = 900.",
  },
  {
    section: "Section 1 · Formulae and the Method of Substitution",
    prompt: "A = ½bh. Find A when b = 12 cm and h = 5 cm.",
    options: ["17 cm²", "30 cm²", "60 cm²", "120 cm²"],
    answer: 1,
    explanation:
      "A = ½(12)(5) = 6 × 5 = 30 cm². Area is written in square units.",
  },
  {
    section: "Section 2 · Sequences",
    prompt: "What is the next term of 12, 8, 4, 0, …?",
    options: ["−8", "−4", "2", "4"],
    answer: 1,
    explanation:
      "The common difference is −4, so the next term is 0 − 4 = −4.",
  },
  {
    section: "Section 2 · Sequences",
    prompt: "What is the general term of 6, 10, 14, 18, …?",
    options: ["4n − 2", "4n + 2", "6n − 2", "6n + 4"],
    answer: 1,
    explanation:
      "The common difference is 4, so start with 4n. Since 4(1) + 2 = 6, the rule is 4n + 2.",
  },
  {
    section: "Section 2 · Sequences",
    prompt: "If aₙ = 4n − 1, what are the first three terms?",
    options: ["3, 7, 11", "4, 8, 12", "5, 9, 13", "3, 6, 9"],
    answer: 0,
    explanation:
      "Substitute n = 1, 2 and 3: 4(1) − 1 = 3, 4(2) − 1 = 7 and 4(3) − 1 = 11.",
  },
  {
    section: "Section 2 · Sequences",
    prompt: "What is the 15th term of the sequence of even numbers?",
    options: ["28", "29", "30", "32"],
    answer: 2,
    explanation:
      "The general term of the even numbers is 2n. Therefore, a₁₅ = 2(15) = 30.",
  },
  {
    section: "Section 2 · Sequences",
    prompt: "What is the 8th square number?",
    options: ["16", "32", "64", "81"],
    answer: 2,
    explanation:
      "The general term of the square numbers is n². Therefore, a₈ = 8² = 64.",
  },
  {
    section: "Section 2 · Sequences",
    prompt: "What is the 10th triangular number?",
    options: ["45", "50", "55", "60"],
    answer: 2,
    explanation:
      "Use n(n + 1)/2: 10(11)/2 = 110/2 = 55.",
  },
];

export default function ChapterFourCheckpointPage() {
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
        ? "Excellent work — your formulae-and-sequences foundations are secure."
        : finalPercentage >= 60
          ? "Good progress — review the explanations and try once more."
          : "Keep practising — revisit the two sections before trying again.";

    return (
      <main className="resultPage">
        <section className="resultCard">
          <span className="resultIcon">✓</span>
          <p className="resultLabel">CHAPTER 4 CHECKPOINT COMPLETE</p>
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
              onClick={() => router.push("/maths/s1/chapter-4")}
            >
              Return to Chapter 4
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
        onClick={() => router.push("/maths/s1/chapter-4")}
      >
        ← Back to Chapter 4
      </button>

      <div className="headerRow">
        <div>
          <p className="eyebrow">S1 · CHAPTER 4</p>
          <h1>Basic Algebra (II) Checkpoint</h1>
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
          <span>Formulae and the Method of Substitution</span>
          <span>Sequences</span>
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
