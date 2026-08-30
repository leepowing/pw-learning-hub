"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type CheckpointQuestion = {
  id: number;
  section: string;
  prompt: string;
  formula?: string[];
  options: string[];
  answer: string;
  explanation: string;
};

const questions: CheckpointQuestion[] = [
  {
    id: 1,
    section: "Section 1 · Multiplication law",
    prompt: "Simplify the expression.",
    formula: ["a⁴ × a⁵"],
    options: ["a⁹", "a²⁰", "2a⁹", "a"],
    answer: "a⁹",
    explanation:
      "When powers with the same base are multiplied, add the indices: a⁴ × a⁵ = a⁴⁺⁵ = a⁹.",
  },
  {
    id: 2,
    section: "Section 1 · Division law",
    prompt: "Simplify the expression.",
    formula: ["x⁸ ÷ x³"],
    options: ["x⁵", "x¹¹", "x²⁴", "x⁸⁄³"],
    answer: "x⁵",
    explanation:
      "When powers with the same non-zero base are divided, subtract the indices: x⁸ ÷ x³ = x⁸⁻³ = x⁵.",
  },
  {
    id: 3,
    section: "Section 1 · Power laws",
    prompt: "Simplify the expression.",
    formula: ["(2a³)²"],
    options: ["2a⁶", "4a⁵", "4a⁶", "2a⁹"],
    answer: "4a⁶",
    explanation:
      "Square both factors and multiply the indices: (2a³)² = 2²a³ˣ² = 4a⁶.",
  },
  {
    id: 4,
    section: "Section 2 · Recognising polynomials",
    prompt: "Which expression is a polynomial in x?",
    options: ["3x² − 5x + 1", "2/x + 3", "√x + 4", "x⁻² + x"],
    answer: "3x² − 5x + 1",
    explanation:
      "A polynomial has variables raised only to non-negative integral powers. The other expressions contain division by x, a square root or a negative index.",
  },
  {
    id: 5,
    section: "Section 2 · Degree",
    prompt: "What is the degree of this polynomial?",
    formula: ["4x³y² − 5x + 7"],
    options: ["2", "3", "4", "5"],
    answer: "5",
    explanation:
      "The degree of 4x³y² is 3 + 2 = 5. This is higher than the degree of every other term, so the polynomial has degree 5.",
  },
  {
    id: 6,
    section: "Section 3 · Addition",
    prompt: "Add and simplify.",
    formula: ["(2x² + 3x − 1) + (x² − 5x + 4)"],
    options: [
      "3x² − 2x + 3",
      "3x² + 8x + 3",
      "x² − 2x + 5",
      "3x² − 2x − 5",
    ],
    answer: "3x² − 2x + 3",
    explanation:
      "Combine corresponding like terms: (2x² + x²) + (3x − 5x) + (−1 + 4) = 3x² − 2x + 3.",
  },
  {
    id: 7,
    section: "Section 3 · Subtraction",
    prompt: "Subtract and simplify.",
    formula: ["(5x² + x − 7) − (2x² − 3x + 1)"],
    options: [
      "3x² − 2x − 6",
      "3x² + 4x − 8",
      "7x² − 2x − 8",
      "3x² − 4x + 8",
    ],
    answer: "3x² + 4x − 8",
    explanation:
      "Change every sign in the second bracket, then combine like terms: 5x² + x − 7 − 2x² + 3x − 1 = 3x² + 4x − 8.",
  },
  {
    id: 8,
    section: "Section 3 · Multiplication",
    prompt: "Expand and simplify.",
    formula: ["(x + 3)(2x − 5)"],
    options: [
      "2x² + x − 15",
      "2x² − 2x − 15",
      "2x² + 6x − 5",
      "2x² − 15",
    ],
    answer: "2x² + x − 15",
    explanation:
      "Expand every product: 2x² − 5x + 6x − 15 = 2x² + x − 15.",
  },
  {
    id: 9,
    section: "Section 4 · Common factors",
    prompt: "Factorize completely.",
    formula: ["12x³y − 18x²y²"],
    options: [
      "6x²y(2x − 3y)",
      "6xy(2x² − 3xy)",
      "3x²y(4x − 6y)",
      "6x²y(2x + 3y)",
    ],
    answer: "6x²y(2x − 3y)",
    explanation:
      "The greatest common factor is 6x²y. Dividing each term by it gives 2x − 3y, so the complete factorization is 6x²y(2x − 3y).",
  },
  {
    id: 10,
    section: "Section 4 · Grouping",
    prompt: "Factorize by grouping.",
    formula: ["x² + 3x + 2xy + 6y"],
    options: [
      "(x + 2y)(x + 3)",
      "(x + 2)(x + 3y)",
      "(x + 3)(x + 6y)",
      "(x − 2y)(x + 3)",
    ],
    answer: "(x + 2y)(x + 3)",
    explanation:
      "Group the terms: x(x + 3) + 2y(x + 3). The common bracket is x + 3, giving (x + 2y)(x + 3).",
  },
];

export default function ChapterTwoCheckpointPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  const score = useMemo(
    () =>
      questions.reduce(
        (total, question) =>
          total + (answers[question.id] === question.answer ? 1 : 0),
        0
      ),
    [answers]
  );

  const percentage = Math.round((score / questions.length) * 100);

  function chooseAnswer(questionId: number, answer: string) {
    if (submitted) return;

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: answer,
    }));
  }

  function submitCheckpoint() {
    if (!allAnswered) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function tryAgain() {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s2/chapter-2")}
      >
        ← Back to Chapter 2
      </button>

      <p className="eyebrow">S2 · CHAPTER 2 · CHECKPOINT</p>
      <h1>Operations and Factorization of Polynomials</h1>

      <p className="introduction">
        Complete all 10 questions. After submitting, you will see your score
        and an explanation for every answer.
      </p>

      {submitted ? (
        <section
          className={
            percentage >= 70
              ? "resultCard passedCard"
              : "resultCard reviewCard"
          }
        >
          <p className="resultLabel">
            {percentage >= 70 ? "CHECKPOINT COMPLETE" : "KEEP PRACTISING"}
          </p>
          <p className="scoreDisplay">
            {score}<span> / {questions.length}</span>
          </p>
          <p className="percentageDisplay">{percentage}%</p>
          <h2>
            {percentage >= 90
              ? "Excellent work!"
              : percentage >= 70
                ? "Well done!"
                : "Review the explanations and try again."}
          </h2>
          <p>
            {percentage >= 70
              ? "You have shown a good understanding of Chapter 2."
              : "A score of 7 or above shows that you are ready to move on."}
          </p>
        </section>
      ) : (
        <section className="progressCard">
          <div className="progressInformation">
            <strong>{answeredCount} of {questions.length} answered</strong>
            <span>
              {Math.round((answeredCount / questions.length) * 100)}%
            </span>
          </div>
          <div className="progressTrack" aria-hidden="true">
            <span
              className="progressFill"
              style={{
                width: `${(answeredCount / questions.length) * 100}%`,
              }}
            />
          </div>
        </section>
      )}

      <section className="questionList">
        {questions.map((question, index) => {
          const selectedAnswer = answers[question.id];
          const isCorrect = selectedAnswer === question.answer;

          return (
            <article
              key={question.id}
              className={
                submitted
                  ? isCorrect
                    ? "questionCard correctQuestion"
                    : "questionCard wrongQuestion"
                  : "questionCard"
              }
            >
              <div className="questionTop">
                <span className="questionNumber">{index + 1}</span>
                <span className="sectionLabel">{question.section}</span>
                {submitted && (
                  <span
                    className={
                      isCorrect
                        ? "answerStatus correctStatus"
                        : "answerStatus wrongStatus"
                    }
                  >
                    {isCorrect ? "✓ Correct" : "✕ Review"}
                  </span>
                )}
              </div>

              <h2>{question.prompt}</h2>

              {question.formula && (
                <div className="formulaBox">
                  {question.formula.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              )}

              <div className="optionGrid">
                {question.options.map((option) => {
                  const isSelected = selectedAnswer === option;
                  const isAnswer = question.answer === option;
                  let optionClass = "optionButton";

                  if (!submitted && isSelected) {
                    optionClass += " selectedOption";
                  }

                  if (submitted && isAnswer) {
                    optionClass += " correctOption";
                  } else if (submitted && isSelected && !isAnswer) {
                    optionClass += " wrongOption";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      className={optionClass}
                      disabled={submitted}
                      onClick={() => chooseAnswer(question.id, option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="explanationBox">
                  {!isCorrect && (
                    <p className="yourAnswer">
                      Your answer: <strong>{selectedAnswer}</strong>
                    </p>
                  )}
                  <p>
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </section>

      <section className="actionCard">
        {submitted ? (
          <>
            <button type="button" className="tryAgainButton" onClick={tryAgain}>
              Try Checkpoint Again
            </button>
            <button
              type="button"
              className="returnButton"
              onClick={() => router.push("/maths/s2/chapter-2")}
            >
              ← Return to Chapter 2
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="submitButton"
              disabled={!allAnswered}
              onClick={submitCheckpoint}
            >
              {allAnswered
                ? "Submit Checkpoint →"
                : `Answer ${questions.length - answeredCount} more question${
                    questions.length - answeredCount === 1 ? "" : "s"
                  }`}
            </button>
            {!allAnswered && (
              <p className="submitHint">
                Answer every question before submitting.
              </p>
            )}
          </>
        )}
      </section>

      {!submitted && (
        <div className="bottomNavigation">
          <button
            type="button"
            className="returnButton"
            onClick={() => router.push("/maths/s2/chapter-2")}
          >
            ← Return to Chapter 2
          </button>
        </div>
      )}

      <style jsx>{`
        .page {
          max-width: 980px;
          width: calc(100% - 48px);
          margin: 44px auto 72px;
          box-sizing: border-box;
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

        .eyebrow {
          margin: 0 0 7px;
          color: #7c3aed;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.11em;
        }

        h1 {
          margin: 0 0 12px;
          font-size: clamp(36px, 5vw, 50px);
          line-height: 1.12;
        }

        .introduction {
          max-width: 850px;
          margin: 0 0 30px;
          color: #64748b;
          font-size: 19px;
          line-height: 1.65;
        }

        .progressCard,
        .resultCard,
        .questionCard,
        .actionCard {
          border-radius: 22px;
          box-sizing: border-box;
        }

        .progressCard {
          margin-bottom: 22px;
          padding: 21px 24px;
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .progressInformation {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 11px;
          color: #c2410c;
          font-size: 16px;
        }

        .progressTrack {
          height: 12px;
          overflow: hidden;
          border-radius: 999px;
          background: #fed7aa;
        }

        .progressFill {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #ea580c, #f59e0b);
          transition: width 180ms ease;
        }

        .resultCard {
          margin-bottom: 24px;
          padding: 30px;
          text-align: center;
        }

        .passedCard {
          border: 2px solid #86efac;
          background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
          color: #166534;
        }

        .reviewCard {
          border: 2px solid #fdba74;
          background: linear-gradient(135deg, #fff7ed, #fffbeb);
          color: #9a3412;
        }

        .resultLabel {
          margin: 0 0 8px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .scoreDisplay {
          margin: 0;
          font-size: 62px;
          font-weight: 900;
          line-height: 1;
        }

        .scoreDisplay span {
          font-size: 28px;
        }

        .percentageDisplay {
          margin: 7px 0 15px;
          font-size: 22px;
          font-weight: 900;
        }

        .resultCard h2 {
          margin: 0 0 7px;
          font-size: 28px;
        }

        .resultCard > p:last-child {
          margin: 0;
          font-size: 17px;
        }

        .questionList {
          display: grid;
          gap: 18px;
        }

        .questionCard {
          padding: 27px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          box-shadow: 0 7px 20px rgba(15, 23, 42, 0.045);
        }

        .correctQuestion {
          border-color: #86efac;
        }

        .wrongQuestion {
          border-color: #fca5a5;
        }

        .questionTop {
          display: flex;
          align-items: center;
          gap: 11px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .questionNumber {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #ffedd5;
          color: #c2410c;
          font-size: 17px;
          font-weight: 900;
        }

        .sectionLabel {
          color: #64748b;
          font-size: 14px;
          font-weight: 800;
        }

        .answerStatus {
          margin-left: auto;
          padding: 7px 11px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 900;
        }

        .correctStatus {
          background: #dcfce7;
          color: #166534;
        }

        .wrongStatus {
          background: #fee2e2;
          color: #991b1b;
        }

        .questionCard h2 {
          margin: 0 0 18px;
          font-size: 23px;
          line-height: 1.4;
        }

        .formulaBox {
          display: grid;
          gap: 6px;
          margin: 0 0 20px;
          padding: 18px;
          border: 1px solid #fed7aa;
          border-radius: 16px;
          background: #fff7ed;
          color: #9a3412;
          text-align: center;
        }

        .formulaBox p {
          margin: 0;
          font-family: "Times New Roman", serif;
          font-size: 27px;
          font-weight: 700;
        }

        .optionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px;
        }

        .optionButton {
          min-height: 54px;
          padding: 13px 16px;
          border: 2px solid #cbd5e1;
          border-radius: 14px;
          background: #ffffff;
          color: #0f172a;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .optionButton:hover:not(:disabled) {
          border-color: #fb923c;
          background: #fff7ed;
        }

        .selectedOption {
          border-color: #ea580c;
          background: #ffedd5;
          color: #9a3412;
        }

        .correctOption {
          border-color: #16a34a;
          background: #dcfce7;
          color: #166534;
        }

        .wrongOption {
          border-color: #dc2626;
          background: #fee2e2;
          color: #991b1b;
        }

        .optionButton:disabled {
          cursor: default;
          opacity: 1;
        }

        .explanationBox {
          margin-top: 16px;
          padding: 16px 18px;
          border-radius: 14px;
          background: #f8fafc;
          color: #334155;
          font-size: 16px;
          line-height: 1.55;
        }

        .explanationBox p {
          margin: 0;
        }

        .explanationBox .yourAnswer {
          margin-bottom: 6px;
          color: #991b1b;
        }

        .actionCard {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
          margin-top: 22px;
          padding: 26px;
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .submitButton,
        .tryAgainButton,
        .returnButton {
          min-width: 280px;
          padding: 15px 24px;
          border: none;
          border-radius: 14px;
          color: #ffffff;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
        }

        .submitButton,
        .tryAgainButton {
          background: #ea580c;
          box-shadow: 0 6px 16px rgba(234, 88, 12, 0.2);
        }

        .submitButton:disabled {
          background: #cbd5e1;
          color: #64748b;
          box-shadow: none;
          cursor: not-allowed;
        }

        .submitHint {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        .bottomNavigation {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .returnButton {
          background: #059669;
          box-shadow: 0 6px 16px rgba(5, 150, 105, 0.18);
        }

        .returnButton:hover {
          background: #047857;
        }

        @media (max-width: 640px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .questionCard {
            padding: 21px;
          }

          .optionGrid {
            grid-template-columns: 1fr;
          }

          .answerStatus {
            width: 100%;
            margin-left: 49px;
            box-sizing: border-box;
            text-align: center;
          }

          .submitButton,
          .tryAgainButton,
          .returnButton {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </main>
  );
}
