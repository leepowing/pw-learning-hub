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
    section: "Section 1 · Linear equations",
    prompt: "Which is a linear equation in two unknowns?",
    options: ["2x + 3y = 7", "x² + y = 7", "xy = 7", "1/x + y = 7"],
    answer: "2x + 3y = 7",
    explanation:
      "In 2x + 3y = 7, both unknowns have power 1 and they are not multiplied or divided by each other.",
  },
  {
    id: 2,
    section: "Section 1 · Ordered pairs",
    prompt: "Which ordered pair is a solution of the equation?",
    formula: ["x + 2y = 8"],
    options: ["(1, 2)", "(2, 3)", "(3, 1)", "(4, 1)"],
    answer: "(2, 3)",
    explanation:
      "Substitute x = 2 and y = 3: 2 + 2(3) = 8, so (2, 3) is a solution.",
  },
  {
    id: 3,
    section: "Section 2 · Graphical method",
    prompt: "At which point do these two straight lines intersect?",
    formula: ["y = x + 1", "y = −x + 5"],
    options: ["(1, 4)", "(2, 3)", "(3, 2)", "(4, 1)"],
    answer: "(2, 3)",
    explanation:
      "At the intersection, x + 1 = −x + 5. Therefore 2x = 4, so x = 2 and y = 3.",
  },
  {
    id: 4,
    section: "Section 2 · Number of solutions",
    prompt: "Two different parallel straight lines represent a pair of equations with…",
    options: [
      "one solution",
      "two solutions",
      "no solution",
      "infinitely many solutions",
    ],
    answer: "no solution",
    explanation:
      "Different parallel lines never intersect, so there is no ordered pair that satisfies both equations.",
  },
  {
    id: 5,
    section: "Section 3 · Substitution",
    prompt: "Solve the simultaneous equations.",
    formula: ["x = y + 2", "x + y = 8"],
    options: [
      "x = 3, y = 5",
      "x = 4, y = 4",
      "x = 5, y = 3",
      "x = 6, y = 2",
    ],
    answer: "x = 5, y = 3",
    explanation:
      "Substitute x = y + 2 into x + y = 8: 2y + 2 = 8, so y = 3 and x = 5.",
  },
  {
    id: 6,
    section: "Section 3 · Elimination",
    prompt: "Solve the simultaneous equations.",
    formula: ["2x + y = 11", "x − y = 1"],
    options: [
      "x = 3, y = 4",
      "x = 4, y = 3",
      "x = 5, y = 1",
      "x = 4, y = −3",
    ],
    answer: "x = 4, y = 3",
    explanation:
      "Add the equations to eliminate y: 3x = 12, so x = 4. Substitution gives y = 3.",
  },
  {
    id: 7,
    section: "Section 3 · Special cases",
    prompt: "How many solutions does this pair of equations have?",
    formula: ["x + 2y = 4", "2x + 4y = 8"],
    options: ["none", "one", "two", "infinitely many"],
    answer: "infinitely many",
    explanation:
      "The second equation is twice the first equation. They represent the same straight line.",
  },
  {
    id: 8,
    section: "Section 4 · Number problem",
    prompt:
      "The sum of two numbers is 25 and their difference is 7. What are the numbers?",
    options: ["18 and 7", "16 and 9", "15 and 10", "14 and 11"],
    answer: "16 and 9",
    explanation:
      "Let a be the larger number and b the smaller: a + b = 25 and a − b = 7. Adding gives 2a = 32, so a = 16 and b = 9.",
  },
  {
    id: 9,
    section: "Section 4 · Price problem",
    prompt:
      "Two notebooks and one pen cost £11. One notebook and one pen cost £7. Find each price.",
    formula: ["2n + p = 11", "n + p = 7"],
    options: [
      "Notebook £3, pen £4",
      "Notebook £4, pen £3",
      "Notebook £5, pen £2",
      "Notebook £6, pen £1",
    ],
    answer: "Notebook £4, pen £3",
    explanation:
      "Subtract n + p = 7 from 2n + p = 11 to get n = 4. Then 4 + p = 7, so p = 3.",
  },
  {
    id: 10,
    section: "Section 4 · Forming equations",
    prompt:
      "Two adult tickets and three child tickets cost £42. If a is the adult price and c is the child price, which equation is correct?",
    options: ["2a + 3c = 42", "3a + 2c = 42", "2(a + 3c) = 42", "a + c = 42"],
    answer: "2a + 3c = 42",
    explanation:
      "Two adult tickets cost 2a and three child tickets cost 3c, so their total is 2a + 3c = 42.",
  },
];

export default function ChapterFiveCheckpointPage() {
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
        onClick={() => router.push("/maths/s2/chapter-5")}
      >
        ← Back to Chapter 5
      </button>

      <p className="eyebrow">S2 · CHAPTER 5 · CHECKPOINT</p>
      <h1>Linear Equations in Two Unknowns</h1>

      <p className="introduction">
        Complete all 10 questions. After submitting, you will see your score
        and an explanation for every answer.
      </p>

      {submitted ? (
        <section
          className={percentage >= 70 ? "resultCard passedCard" : "resultCard reviewCard"}
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
              ? "You have shown a good understanding of Chapter 5."
              : "A score of 7 or above shows that you are ready to move on."}
          </p>
        </section>
      ) : (
        <section className="progressCard">
          <div className="progressInformation">
            <strong>{answeredCount} of 10 answered</strong>
            <span>{Math.round((answeredCount / questions.length) * 100)}%</span>
          </div>
          <div className="progressTrack" aria-hidden="true">
            <span
              className="progressFill"
              style={{ width: `${(answeredCount / questions.length) * 100}%` }}
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
                  <span className={isCorrect ? "answerStatus correctStatus" : "answerStatus wrongStatus"}>
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
              className="returnButton secondaryReturn"
              onClick={() => router.push("/maths/s2/chapter-5")}
            >
              ← Return to Chapter 5
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
              <p className="submitHint">Answer every question before submitting.</p>
            )}
          </>
        )}
      </section>

      {!submitted && (
        <div className="bottomNavigation">
          <button
            type="button"
            className="returnButton"
            onClick={() => router.push("/maths/s2/chapter-5")}
          >
            ← Return to Chapter 5
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
          border: 1px solid #c7d2fe;
          background: #eef2ff;
        }

        .progressInformation {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 11px;
          color: #4338ca;
          font-size: 16px;
        }

        .progressTrack {
          height: 12px;
          overflow: hidden;
          border-radius: 999px;
          background: #c7d2fe;
        }

        .progressFill {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
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
          background: #ede9fe;
          color: #6d28d9;
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
          border: 1px solid #bfdbfe;
          border-radius: 16px;
          background: #eff6ff;
          color: #1e3a8a;
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
          border-color: #818cf8;
          background: #f5f3ff;
        }

        .selectedOption {
          border-color: #6366f1;
          background: #eef2ff;
          color: #3730a3;
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
          border: 1px solid #ddd6fe;
          background: #faf5ff;
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

        .submitButton {
          background: #7c3aed;
          box-shadow: 0 6px 16px rgba(124, 58, 237, 0.2);
        }

        .submitButton:disabled {
          background: #cbd5e1;
          color: #64748b;
          box-shadow: none;
          cursor: not-allowed;
        }

        .tryAgainButton {
          background: #7c3aed;
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

        .secondaryReturn {
          background: #059669;
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
