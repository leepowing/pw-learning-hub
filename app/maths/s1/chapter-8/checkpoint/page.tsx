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
    section: "Section 1 · Introduction to Rectangular Coordinate System",
    prompt: "In the ordered pair P(x, y), which coordinate is read first?",
    options: ["The y-coordinate", "The x-coordinate", "The larger coordinate", "The positive coordinate"],
    answer: 1,
    explanation: "Coordinates are always written and read in the order (x, y).",
  },
  {
    section: "Section 1 · Introduction to Rectangular Coordinate System",
    prompt: "Which statement describes every point on the y-axis?",
    options: ["Its x-coordinate is 0", "Its y-coordinate is 0", "Both coordinates are positive", "Both coordinates are equal"],
    answer: 0,
    explanation: "Every point on the y-axis has x = 0. Its y-coordinate may be positive, negative or zero.",
  },
  {
    section: "Section 1 · Introduction to Rectangular Coordinate System",
    prompt: "Which point lies in Quadrant II?",
    options: ["(3, 5)", "(−3, 5)", "(−3, −5)", "(3, −5)"],
    answer: 1,
    explanation: "A point in Quadrant II has a negative x-coordinate and a positive y-coordinate.",
  },
  {
    section: "Section 1 · Introduction to Rectangular Coordinate System",
    prompt: "Starting at the origin, move 4 units right and 6 units down. Which point is reached?",
    options: ["(−4, 6)", "(4, 6)", "(−4, −6)", "(4, −6)"],
    answer: 3,
    explanation: "Moving right gives x = 4 and moving down gives y = −6, so the point is (4, −6).",
  },
  {
    section: "Section 2 · Distance between Two Points",
    prompt: "A(−5, 2) and B(4, 2) lie on the same horizontal line. What is AB?",
    options: ["1 unit", "7 units", "9 units", "−9 units"],
    answer: 2,
    explanation: "AB = |4 − (−5)| = |9| = 9 units.",
  },
  {
    section: "Section 2 · Distance between Two Points",
    prompt: "C(3, −4) and D(3, 5) lie on the same vertical line. What is CD?",
    options: ["1 unit", "8 units", "9 units", "−9 units"],
    answer: 2,
    explanation: "CD = |5 − (−4)| = |9| = 9 units.",
  },
  {
    section: "Section 2 · Distance between Two Points",
    prompt: "What is the distance of T(−7, 3) from the y-axis?",
    options: ["3 units", "4 units", "7 units", "10 units"],
    answer: 2,
    explanation: "The distance from the y-axis is |x|. Therefore, |−7| = 7 units.",
  },
  {
    section: "Section 2 · Distance between Two Points",
    prompt: "Which pair of points lies on the same vertical line?",
    options: ["(2, 4) and (6, 4)", "(−3, 1) and (−3, 7)", "(5, −2) and (−5, 2)", "(0, 3) and (3, 0)"],
    answer: 1,
    explanation: "Points on the same vertical line have the same x-coordinate. Both points have x = −3.",
  },
  {
    section: "Section 3 · Areas of Polygons",
    prompt: "A rectangle has vertices (−2, 4), (5, 4), (5, −1) and (−2, −1). What is its area?",
    options: ["12 square units", "30 square units", "35 square units", "42 square units"],
    answer: 2,
    explanation: "The horizontal length is |5 − (−2)| = 7 and the vertical length is |4 − (−1)| = 5. Area = 7 × 5 = 35 square units.",
  },
  {
    section: "Section 3 · Areas of Polygons",
    prompt: "A triangle has base endpoints (−4, −2) and (6, −2), with third vertex (1, 5). What is its area?",
    options: ["17.5 square units", "35 square units", "50 square units", "70 square units"],
    answer: 1,
    explanation: "The base is 10 units and the perpendicular height is |5 − (−2)| = 7 units. Area = ½ × 10 × 7 = 35 square units.",
  },
  {
    section: "Section 3 · Areas of Polygons",
    prompt: "A compound polygon is split into non-overlapping rectangles measuring 6 by 5 units and 3 by 2 units. What is its total area?",
    options: ["30 square units", "33 square units", "36 square units", "48 square units"],
    answer: 2,
    explanation: "Add the component areas: (6 × 5) + (3 × 2) = 30 + 6 = 36 square units.",
  },
  {
    section: "Section 3 · Areas of Polygons",
    prompt: "A polygon fills a 9 by 7 rectangle except for a triangular corner with base 4 and height 3. What is the polygon's area?",
    options: ["51 square units", "57 square units", "59 square units", "63 square units"],
    answer: 1,
    explanation: "Rectangle area = 9 × 7 = 63. Triangle area = ½ × 4 × 3 = 6. Polygon area = 63 − 6 = 57 square units.",
  },
  {
    section: "Section 4 · Transformations of Points",
    prompt: "P(−2, 5) is translated 6 units right and 3 units down. What is P′?",
    options: ["(4, 2)", "(4, 8)", "(−8, 2)", "(−8, 8)"],
    answer: 0,
    explanation: "P′ = (−2 + 6, 5 − 3) = (4, 2).",
  },
  {
    section: "Section 4 · Transformations of Points",
    prompt: "Q(4, −7) is reflected in the x-axis. What is Q′?",
    options: ["(−4, −7)", "(−4, 7)", "(4, 7)", "(7, 4)"],
    answer: 2,
    explanation: "Reflection in the x-axis follows (x, y) → (x, −y), so Q′ = (4, 7).",
  },
  {
    section: "Section 4 · Transformations of Points",
    prompt: "R(3, 6) is reflected in the horizontal line y = 2. What is R′?",
    options: ["(3, −2)", "(−3, 2)", "(3, 2)", "(−3, −2)"],
    answer: 0,
    explanation: "For reflection in y = a, y′ = 2a − y. Therefore, y′ = 2(2) − 6 = −2 and R′ = (3, −2).",
  },
  {
    section: "Section 4 · Transformations of Points",
    prompt: "T(2, −5) is rotated 90° anticlockwise about the origin. What is T′?",
    options: ["(−5, −2)", "(−2, 5)", "(5, 2)", "(2, 5)"],
    answer: 2,
    explanation: "A 90° anticlockwise rotation follows (x, y) → (−y, x). Therefore, T′ = (5, 2).",
  },
];

export default function ChapterEightCheckpointPage() {
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
        ? "Excellent work — your coordinate-system foundations are secure."
        : finalPercentage >= 60
          ? "Good progress — review the explanations and try once more."
          : "Keep practising — revisit the four chapter sections before trying again.";

    return (
      <main className="resultPage">
        <section className="resultCard">
          <span className="resultIcon">✓</span>
          <p className="resultLabel">CHAPTER 8 CHECKPOINT COMPLETE</p>
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
              onClick={() => router.push("/maths/s1/chapter-8")}
            >
              Return to Chapter 8
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
        onClick={() => router.push("/maths/s1/chapter-8")}
      >
        ← Back to Chapter 8
      </button>

      <div className="headerRow">
        <div>
          <p className="eyebrow">S1 · CHAPTER 8</p>
          <h1>Rectangular Coordinate System (I) Checkpoint</h1>
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
                type="button"
                key={option}
                className={className}
                onClick={() => chooseAnswer(optionIndex)}
                disabled={answered}
              >
                <span className="optionLetter">{String.fromCharCode(65 + optionIndex)}</span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <div
            className={selectedIsCorrect ? "feedback correctFeedback" : "feedback incorrectFeedback"}
            aria-live="polite"
          >
            <strong>{selectedIsCorrect ? "Correct" : "Not quite"}</strong>
            <p>{question.explanation}</p>
          </div>
        )}

        <button
          type="button"
          className="continueButton"
          onClick={continueCheckpoint}
          disabled={!answered}
        >
          {questionIndex === questions.length - 1 ? "Finish Checkpoint" : "Next Question"} →
        </button>
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
          margin-bottom: 25px;
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
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .eyebrow,
        .questionLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #e11d48;
        }

        h1 {
          max-width: 720px;
          margin: 0;
          font-size: clamp(34px, 5vw, 49px);
          line-height: 1.12;
          letter-spacing: -0.035em;
        }

        .scoreBadge {
          flex-shrink: 0;
          padding: 11px 15px;
          border-radius: 999px;
          background: #d1fae5;
          color: #047857;
          font-weight: 900;
        }

        .progressHeader {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          margin-top: 30px;
          color: #64748b;
          font-size: 14px;
          font-weight: 800;
        }

        .progressHeader span:last-child {
          color: #4f46e5;
          text-align: right;
        }

        .progressTrack {
          height: 10px;
          margin-top: 10px;
          overflow: hidden;
          border-radius: 999px;
          background: #e2e8f0;
        }

        .progressFill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          transition: width 0.25s ease;
        }

        .questionCard {
          margin-top: 20px;
          padding: 30px;
          border: 1px solid #c7d2fe;
          border-radius: 24px;
          background: white;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
        }

        .questionLabel {
          margin: 0 0 8px;
          color: #4f46e5;
        }

        .questionCard h2 {
          margin: 0;
          font-size: clamp(23px, 3.5vw, 30px);
          line-height: 1.4;
        }

        .optionsGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 25px;
        }

        .optionButton {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 14px;
          border: 2px solid #e2e8f0;
          border-radius: 15px;
          background: #f8fafc;
          color: #172033;
          font-size: 16px;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
        }

        .optionButton:not(:disabled):hover {
          border-color: #a5b4fc;
          background: #eef2ff;
        }

        .optionButton:disabled { cursor: default; }

        .optionLetter {
          width: 35px;
          height: 35px;
          flex: 0 0 35px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #e0e7ff;
          color: #4338ca;
          font-weight: 900;
        }

        .correctOption {
          border-color: #10b981;
          background: #ecfdf5;
          color: #065f46;
        }

        .incorrectOption {
          border-color: #fb7185;
          background: #fff1f2;
          color: #9f1239;
        }

        .feedback {
          margin-top: 20px;
          padding: 17px;
          border-radius: 15px;
        }

        .feedback strong {
          display: block;
          margin-bottom: 5px;
          font-size: 18px;
        }

        .feedback p {
          margin: 0;
          line-height: 1.55;
        }

        .correctFeedback {
          background: #d1fae5;
          color: #065f46;
        }

        .incorrectFeedback {
          background: #fff1f2;
          color: #9f1239;
        }

        .continueButton {
          width: 100%;
          margin-top: 20px;
          padding: 15px;
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

        @media (max-width: 650px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .headerRow,
          .progressHeader {
            align-items: flex-start;
            flex-direction: column;
          }

          .progressHeader { gap: 5px; }
          .progressHeader span:last-child { text-align: left; }
          .questionCard { padding: 21px; }
          .optionsGrid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
