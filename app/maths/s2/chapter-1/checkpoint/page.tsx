"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type CheckpointQuestion = {
  id: number;
  section: string;
  prompt: string;
  formula?: string;
  options: string[];
  answer: string;
  explanation: string;
};

const questions: CheckpointQuestion[] = [
  {
    id: 1,
    section: "Section 1 · Counting significant figures",
    prompt: "How many significant figures are in this number?",
    formula: "0.00470",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation:
      "The leading zeros do not count. The digits 4 and 7 count, and the final zero after the decimal point also shows precision, giving 3 significant figures.",
  },
  {
    id: 2,
    section: "Section 1 · Small decimals",
    prompt: "Round the number to 2 significant figures.",
    formula: "0.02298",
    options: ["0.022", "0.023", "0.0229", "0.030"],
    answer: "0.023",
    explanation:
      "The first two significant digits are 2 and 2. The next digit is 9, so the second 2 rounds up to 3.",
  },
  {
    id: 3,
    section: "Section 1 · Whole numbers",
    prompt: "Round the number to 2 significant figures.",
    formula: "42 680",
    options: ["42 000", "42 700", "43 000", "43 680"],
    answer: "43 000",
    explanation:
      "Keep 4 and 2. The next digit is 6, so 42 rounds up to 43. Zeros preserve the original place value.",
  },
  {
    id: 4,
    section: "Section 1 · Rounding",
    prompt: "Round the number to 3 significant figures.",
    formula: "2.468",
    options: ["2.46", "2.47", "2.468", "2.50"],
    answer: "2.47",
    explanation:
      "Keep 2, 4 and 6. The next digit is 8, so the 6 rounds up to 7.",
  },
  {
    id: 5,
    section: "Section 2 · Maximum absolute error",
    prompt:
      "A length is measured correct to the nearest 0.2 cm. What is the maximum absolute error?",
    options: ["0.05 cm", "0.1 cm", "0.2 cm", "0.4 cm"],
    answer: "0.1 cm",
    explanation:
      "Maximum absolute error is half the measuring interval: ½ × 0.2 cm = 0.1 cm.",
  },
  {
    id: 6,
    section: "Section 2 · Limits",
    prompt:
      "A temperature is measured as 25°C, correct to the nearest degree. Which range contains the actual temperature T?",
    options: [
      "24 ≤ T < 26",
      "24.5 ≤ T < 25.5",
      "24.5 < T ≤ 25.5",
      "25 ≤ T < 25.5",
    ],
    answer: "24.5 ≤ T < 25.5",
    explanation:
      "The maximum absolute error is 0.5°C. The lower limit is included, while the upper limit is excluded.",
  },
  {
    id: 7,
    section: "Section 2 · Relative error",
    prompt:
      "A watch has a measured mass of 50 g, correct to the nearest 5 g. What is the relative error?",
    options: ["0.01", "0.025", "0.05", "0.10"],
    answer: "0.05",
    explanation:
      "The maximum absolute error is ½ × 5 g = 2.5 g. Relative error = 2.5 ÷ 50 = 0.05.",
  },
  {
    id: 8,
    section: "Section 2 · Actual-value range",
    prompt:
      "A length is recorded as 8.4 cm, correct to the nearest 0.1 cm. Which range is correct?",
    options: [
      "8.3 ≤ L < 8.5",
      "8.35 ≤ L < 8.45",
      "8.35 < L ≤ 8.45",
      "8.39 ≤ L < 8.41",
    ],
    answer: "8.35 ≤ L < 8.45",
    explanation:
      "Half of 0.1 cm is 0.05 cm. Therefore, the limits are 8.4 − 0.05 = 8.35 and 8.4 + 0.05 = 8.45.",
  },
  {
    id: 9,
    section: "Section 2 · Percentage error",
    prompt:
      "A length is measured as 120 cm, correct to the nearest centimetre. What is the percentage error, to 3 significant figures?",
    options: ["0.0417%", "0.417%", "0.833%", "1.20%"],
    answer: "0.417%",
    explanation:
      "Maximum absolute error = 0.5 cm. Percentage error = (0.5 ÷ 120) × 100% = 0.4166…%, which is 0.417% to 3 significant figures.",
  },
  {
    id: 10,
    section: "Section 2 · Comparing accuracy",
    prompt:
      "Both lengths are measured to the nearest centimetre. Which measurement has the smaller relative error?",
    formula: "A: 20 cm     B: 200 cm",
    options: [
      "A, because it is shorter",
      "B, because its relative error is smaller",
      "They have the same relative error",
      "There is not enough information",
    ],
    answer: "B, because its relative error is smaller",
    explanation:
      "Both have maximum absolute error 0.5 cm. For A, 0.5 ÷ 20 = 0.025; for B, 0.5 ÷ 200 = 0.0025. Therefore B has the smaller relative error.",
  },
];

export default function S2ChapterOneCheckpointPage() {
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
        onClick={() => router.push("/maths/s2/chapter-1")}
      >
        ← Back to Chapter 1
      </button>

      <p className="eyebrow">S2 · CHAPTER 1 · CHECKPOINT</p>
      <h1>Approximation and Errors</h1>

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
              ? "You have shown a good understanding of Chapter 1."
              : "A score of 7 or above shows that you are ready to move on."}
          </p>
        </section>
      ) : (
        <section className="progressCard">
          <div className="progressInformation">
            <strong>
              {answeredCount} of {questions.length} answered
            </strong>
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
                <div className="formulaBox">{question.formula}</div>
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
              onClick={() => router.push("/maths/s2/chapter-1")}
            >
              ← Return to Chapter 1
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
            onClick={() => router.push("/maths/s2/chapter-1")}
          >
            ← Return to Chapter 1
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
          color: #e11d48;
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
          border: 1px solid #fecdd3;
          background: #fff1f2;
        }

        .progressInformation {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 11px;
          color: #be123c;
          font-size: 16px;
        }

        .progressTrack {
          height: 12px;
          overflow: hidden;
          border-radius: 999px;
          background: #fecdd3;
        }

        .progressFill {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #e11d48, #f43f5e);
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
          background: #ffe4e6;
          color: #be123c;
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
          margin: 0 0 20px;
          padding: 18px;
          border: 1px solid #fecdd3;
          border-radius: 16px;
          background: #fff1f2;
          color: #881337;
          font-family: "Times New Roman", serif;
          font-size: 27px;
          font-weight: 700;
          text-align: center;
          white-space: pre-wrap;
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
          border-color: #fb7185;
          background: #fff1f2;
        }

        .selectedOption {
          border-color: #e11d48;
          background: #fff1f2;
          color: #9f1239;
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
          border: 1px solid #fecdd3;
          background: #fff1f2;
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
          background: #e11d48;
          box-shadow: 0 6px 16px rgba(225, 29, 72, 0.2);
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
