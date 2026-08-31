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
    section: "Section 1 · Review on Areas of Polygons",
    prompt: "Which measurement is the height of a polygon for an area formula?",
    options: [
      "Any sloping side",
      "The perpendicular distance to the chosen base",
      "The longest side",
      "The perimeter of the polygon",
    ],
    answer: 1,
    explanation:
      "The height used in an area formula must meet the chosen base at 90°.",
  },
  {
    section: "Section 1 · Review on Areas of Polygons",
    prompt: "A triangle has base 14 cm and perpendicular height 9 cm. What is its area?",
    options: ["46 cm²", "56 cm²", "63 cm²", "126 cm²"],
    answer: 2,
    explanation:
      "A = ½bh = ½(14)(9) = 7 × 9 = 63 cm².",
  },
  {
    section: "Section 1 · Review on Areas of Polygons",
    prompt: "A trapezium has parallel sides 8 cm and 14 cm, with height 5 cm. What is its area?",
    options: ["44 cm²", "50 cm²", "55 cm²", "110 cm²"],
    answer: 2,
    explanation:
      "A = ½(a + b)h = ½(8 + 14)(5) = ½(22)(5) = 55 cm².",
  },
  {
    section: "Section 1 · Review on Areas of Polygons",
    prompt: "A compound figure is split into non-overlapping rectangles measuring 7 cm by 4 cm and 3 cm by 6 cm. What is its total area?",
    options: ["40 cm²", "46 cm²", "52 cm²", "60 cm²"],
    answer: 1,
    explanation:
      "Add the component areas: (7 × 4) + (3 × 6) = 28 + 18 = 46 cm².",
  },
  {
    section: "Section 1 · Review on Areas of Polygons",
    prompt: "An L-shape is formed from a 12 cm by 9 cm rectangle by removing a 4 cm by 3 cm rectangle. What is its area?",
    options: ["72 cm²", "84 cm²", "92 cm²", "96 cm²"],
    answer: 3,
    explanation:
      "Use the filling method: (12 × 9) − (4 × 3) = 108 − 12 = 96 cm².",
  },
  {
    section: "Section 1 · Review on Areas of Polygons",
    prompt: "Convert 2 m² to cm².",
    options: ["200 cm²", "2,000 cm²", "10,000 cm²", "20,000 cm²"],
    answer: 3,
    explanation:
      "Since 1 m = 100 cm, 1 m² = 100² = 10,000 cm². Therefore, 2 m² = 20,000 cm².",
  },
  {
    section: "Section 2 · Volumes and Total Surface Areas of Prisms",
    prompt: "Which statement best describes a prism?",
    options: [
      "It has a uniform polygonal cross-section",
      "Every face must be a square",
      "It has exactly one base",
      "Its lateral edges must always be vertical",
    ],
    answer: 0,
    explanation:
      "A prism has two congruent, parallel bases and the same polygonal cross-section throughout.",
  },
  {
    section: "Section 2 · Volumes and Total Surface Areas of Prisms",
    prompt: "If B is the base area and h is the perpendicular height of a prism, which formula gives its volume?",
    options: ["V = B + h", "V = Bh", "V = 2B + h", "V = B/h"],
    answer: 1,
    explanation:
      "The volume of any prism is its base area multiplied by the perpendicular distance between its bases: V = Bh.",
  },
  {
    section: "Section 2 · Volumes and Total Surface Areas of Prisms",
    prompt: "A triangular prism has triangular base area 12 cm² and prism height 10 cm. What is its volume?",
    options: ["22 cm³", "60 cm³", "120 cm³", "240 cm³"],
    answer: 2,
    explanation:
      "V = Bh = 12 × 10 = 120 cm³.",
  },
  {
    section: "Section 2 · Volumes and Total Surface Areas of Prisms",
    prompt: "A right prism has base perimeter 24 cm and height 9 cm. What is its total lateral area?",
    options: ["108 cm²", "216 cm²", "264 cm²", "432 cm²"],
    answer: 1,
    explanation:
      "For a right prism, L = Ph = 24 × 9 = 216 cm².",
  },
  {
    section: "Section 2 · Volumes and Total Surface Areas of Prisms",
    prompt: "A right prism has base area 30 cm², base perimeter 22 cm and height 8 cm. What is its total surface area?",
    options: ["176 cm²", "206 cm²", "220 cm²", "236 cm²"],
    answer: 3,
    explanation:
      "TSA = 2B + Ph = 2(30) + 22(8) = 60 + 176 = 236 cm².",
  },
  {
    section: "Section 2 · Volumes and Total Surface Areas of Prisms",
    prompt: "Which length is used as h for an oblique prism?",
    options: [
      "The longest lateral edge",
      "Any edge of the base",
      "The perpendicular distance between the bases",
      "The perimeter of one base",
    ],
    answer: 2,
    explanation:
      "The height of an oblique prism is the perpendicular distance between its parallel bases, not a sloping lateral edge.",
  },
];

export default function ChapterSevenCheckpointPage() {
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
        ? "Excellent work — your polygon-area and prism foundations are secure."
        : finalPercentage >= 60
          ? "Good progress — review the explanations and try once more."
          : "Keep practising — revisit the two mensuration sections before trying again.";

    return (
      <main className="resultPage">
        <section className="resultCard">
          <span className="resultIcon">✓</span>
          <p className="resultLabel">CHAPTER 7 CHECKPOINT COMPLETE</p>
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
              onClick={() => router.push("/maths/s1/chapter-7")}
            >
              Return to Chapter 7
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
        onClick={() => router.push("/maths/s1/chapter-7")}
      >
        ← Back to Chapter 7
      </button>

      <div className="headerRow">
        <div>
          <p className="eyebrow">S1 · CHAPTER 7</p>
          <h1>Mensuration (I) Checkpoint</h1>
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
          <span>Review on Areas of Polygons</span>
          <span>Volumes and Total Surface Areas of Prisms</span>
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
