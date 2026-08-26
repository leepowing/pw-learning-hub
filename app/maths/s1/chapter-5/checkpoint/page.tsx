"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import katex from "katex";

type Choice = "correct" | "wrong" | "";

type TrueFalseQuestion = {
  id: number;
  statement: string;
  answer: Exclude<Choice, "">;
  explanation: string;
  topic: string;
};

type CalculationPart = {
  id: string;
  label: string;
  expected: number;
  suffix?: string;
  explanation: string;
  topic: string;
};

type CalculationQuestion = {
  number: number;
  information: string;
  parts: CalculationPart[];
};

function MathFormula({ formula }: { formula: string }) {
  const html = katex.renderToString(formula, {
    throwOnError: false,
    displayMode: true,
    strict: false,
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        padding: "10px 0",
      }}
    />
  );
}

const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 1,
    statement: "15% of 80 is 12.",
    answer: "correct",
    explanation: "80 × 0.15 = 12.",
    topic: "Percentages",
  },
  {
    id: 2,
    statement: "A percentage increase can never be greater than 100%.",
    answer: "wrong",
    explanation:
      "A percentage increase can be greater than 100%. For example, increasing from 20 to 50 is a 150% increase.",
    topic: "Increase",
  },
  {
    id: 3,
    statement:
      "If a value decreases from 250 to 200, its percentage change is −20%.",
    answer: "correct",
    explanation:
      "The change is 200 − 250 = −50, and −50 ÷ 250 × 100% = −20%.",
    topic: "Percentage Change",
  },
  {
    id: 4,
    statement:
      "An item marked at £400 and sold for £340 has a discount of 15%.",
    answer: "correct",
    explanation:
      "The discount is £60, and £60 ÷ £400 × 100% = 15%.",
    topic: "Discount",
  },
  {
    id: 5,
    statement:
      "An item bought for £150 and sold for £180 makes a profit of 20%.",
    answer: "correct",
    explanation:
      "The profit is £30, and £30 ÷ £150 × 100% = 20%.",
    topic: "Profit",
  },
  {
    id: 6,
    statement:
      "If the cost price is £200 and the loss percentage is 25%, the loss is £150.",
    answer: "wrong",
    explanation:
      "The loss is £200 × 25% = £50. The selling price would be £150.",
    topic: "Loss",
  },
  {
    id: 7,
    statement:
      "A value that rises from 120 to 150 has increased by 30%.",
    answer: "wrong",
    explanation:
      "The increase is 30, but 30 ÷ 120 × 100% = 25%.",
    topic: "Percentage Change",
  },
];

const calculationQuestions: CalculationQuestion[] = [
  {
    number: 8,
    information:
      "An item has a cost price of £120, a marked price of £180 and a selling price of £153.",
    parts: [
      {
        id: "8a",
        label: "Discount",
        expected: 27,
        suffix: "£",
        explanation: "£180 − £153 = £27.",
        topic: "Discount",
      },
      {
        id: "8b",
        label: "Discount percentage",
        expected: 15,
        suffix: "%",
        explanation: "£27 ÷ £180 × 100% = 15%.",
        topic: "Discount",
      },
      {
        id: "8c",
        label: "Profit",
        expected: 33,
        suffix: "£",
        explanation: "£153 − £120 = £33.",
        topic: "Profit",
      },
      {
        id: "8d",
        label: "Profit percentage",
        expected: 27.5,
        suffix: "%",
        explanation: "£33 ÷ £120 × 100% = 27.5%.",
        topic: "Profit",
      },
    ],
  },
  {
    number: 9,
    information:
      "An item has a cost price of £240, a marked price of £300 and a selling price of £210.",
    parts: [
      {
        id: "9a",
        label: "Discount",
        expected: 90,
        suffix: "£",
        explanation: "£300 − £210 = £90.",
        topic: "Discount",
      },
      {
        id: "9b",
        label: "Discount percentage",
        expected: 30,
        suffix: "%",
        explanation: "£90 ÷ £300 × 100% = 30%.",
        topic: "Discount",
      },
      {
        id: "9c",
        label: "Loss",
        expected: 30,
        suffix: "£",
        explanation: "£240 − £210 = £30.",
        topic: "Loss",
      },
      {
        id: "9d",
        label: "Loss percentage",
        expected: 12.5,
        suffix: "%",
        explanation: "£30 ÷ £240 × 100% = 12.5%.",
        topic: "Loss",
      },
    ],
  },
];

function normaliseNumber(value: string) {
  return Number(value.replace(/[£%,\s]/g, ""));
}

export default function CheckpointPage() {
  const [mounted, setMounted] = useState(false);  
  const [choices, setChoices] = useState<Record<number, Choice>>({});
  const [calculationAnswers, setCalculationAnswers] = useState<
    Record<string, string>
  >({});
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main
        style={{
          maxWidth: "1050px",
          width: "calc(100% - 40px)",
          margin: "40px auto",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#6d28d9",
          }}
        >
          Loading checkpoint...
        </p>
      </main>
    );
  }
  const calculationParts = calculationQuestions.flatMap(
    (question) => question.parts,
  );

  const answeredTrueFalse = trueFalseQuestions.filter(
    (question) => choices[question.id],
  ).length;

const answeredCalculations = calculationParts.filter(
  (part) => (calculationAnswers[part.id] ?? "").trim() !== "",
).length;

  const totalQuestions = trueFalseQuestions.length + calculationParts.length;
  const answeredQuestions = answeredTrueFalse + answeredCalculations;
  const allAnswered = answeredQuestions === totalQuestions;

  const isCalculationCorrect = (part: CalculationPart) => {
    const value = normaliseNumber(calculationAnswers[part.id] ?? "");
    return Number.isFinite(value) && Math.abs(value - part.expected) < 0.001;
  };

  const score =
    trueFalseQuestions.filter(
      (question) => choices[question.id] === question.answer,
    ).length +
    calculationParts.filter((part) => isCalculationCorrect(part)).length;

  const incorrectTopics = Array.from(
    new Set([
      ...trueFalseQuestions
        .filter(
          (question) =>
            submitted && choices[question.id] !== question.answer,
        )
        .map((question) => question.topic),
      ...calculationParts
        .filter((part) => submitted && !isCalculationCorrect(part))
        .map((part) => part.topic),
    ]),
  );

  const handleSubmit = () => {
    if (!allAnswered) return;

    setSubmitted(true);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleReset = () => {
    setChoices({});
    setCalculationAnswers({});
    setSubmitted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main
      style={{
        maxWidth: "1050px",
        width: "calc(100% - 40px)",
        margin: "40px auto 70px",
        boxSizing: "border-box",
      }}
    >
      <Link
        href="/maths/s1/chapter-5"
        style={{
          display: "inline-block",
          marginBottom: "26px",
          color: "#047857",
          fontSize: "17px",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        ← Back to Chapter 5
      </Link>

      <header style={{ marginBottom: "30px" }}>
        <p
          style={{
            margin: "0 0 8px",
            color: "#7c3aed",
            fontSize: "16px",
            fontWeight: 800,
            letterSpacing: "1.5px",
          }}
        >
          FINAL ACTIVITY
        </p>

        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "44px",
            lineHeight: 1.15,
          }}
        >
          Chapter 5 Checkpoint
        </h1>

        <p
          style={{
            margin: 0,
            color: "#4b5563",
            fontSize: "19px",
            lineHeight: 1.6,
          }}
        >
          Test your understanding of percentages, increase, profit, decrease,
          discount, loss and percentage change.
        </p>
      </header>

      <section
        style={{
          padding: "22px 26px",
          borderRadius: "20px",
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            marginBottom: "12px",
            fontSize: "17px",
            fontWeight: 800,
          }}
        >
          <span>
            Answered {answeredQuestions} of {totalQuestions}
          </span>
          <span>{Math.round((answeredQuestions / totalQuestions) * 100)}%</span>
        </div>

        <div
          style={{
            height: "12px",
            borderRadius: "999px",
            background: "#e5e7eb",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${(answeredQuestions / totalQuestions) * 100}%`,
              height: "100%",
              borderRadius: "999px",
              background: "#7c3aed",
              transition: "width 0.25s ease",
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "34px" }}>
        <h2 style={{ marginBottom: "8px", fontSize: "30px" }}>
          Part A: Correct or Wrong
        </h2>

        <p
          style={{
            margin: "0 0 22px",
            color: "#4b5563",
            fontSize: "18px",
          }}
        >
          Decide whether each statement is correct or wrong.
        </p>

        <div style={{ display: "grid", gap: "18px" }}>
          {trueFalseQuestions.map((question) => {
            const selectedAnswer = choices[question.id];
            const isCorrect = selectedAnswer === question.answer;

            return (
              <article
                key={question.id}
                style={{
                  padding: "24px",
                  borderRadius: "20px",
                  background: "#ffffff",
                  border:
                    submitted && isCorrect
                      ? "2px solid #22c55e"
                      : submitted
                        ? "2px solid #ef4444"
                        : "1px solid #e5e7eb",
                  boxShadow: "0 5px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      width: "42px",
                      height: "42px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "13px",
                      background: "#ede9fe",
                      color: "#6d28d9",
                      fontSize: "18px",
                      fontWeight: 800,
                    }}
                  >
                    {question.id}
                  </span>

                  <p
                    style={{
                      margin: "5px 0 20px",
                      fontSize: "19px",
                      lineHeight: 1.6,
                      fontWeight: 650,
                    }}
                  >
                    {question.statement}
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "12px",
                  }}
                >
                  {(["correct", "wrong"] as const).map((answer) => {
                    const selected = selectedAnswer === answer;

                    return (
                      <button
                        key={answer}
                        type="button"
                        disabled={submitted}
                        onClick={() =>
                          setChoices((current) => ({
                            ...current,
                            [question.id]: answer,
                          }))
                        }
                        style={{
                          padding: "15px",
                          borderRadius: "14px",
                          border: selected
                            ? "2px solid #7c3aed"
                            : "1px solid #d1d5db",
                          background: selected ? "#ede9fe" : "#ffffff",
                          color: selected ? "#5b21b6" : "#374151",
                          fontSize: "17px",
                          fontWeight: 800,
                          cursor: submitted ? "default" : "pointer",
                        }}
                      >
                        {answer === "correct" ? "✓ Correct" : "✕ Wrong"}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div
                    style={{
                      marginTop: "16px",
                      padding: "15px 17px",
                      borderRadius: "13px",
                      background: isCorrect ? "#ecfdf5" : "#fef2f2",
                      color: isCorrect ? "#166534" : "#991b1b",
                      fontSize: "16px",
                      lineHeight: 1.6,
                      fontWeight: 650,
                    }}
                  >
                    {isCorrect ? "Correct. " : "Not quite. "}
                    {question.explanation}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section style={{ marginBottom: "34px" }}>
        <h2 style={{ marginBottom: "8px", fontSize: "30px" }}>
          Part B: Complete the calculations
        </h2>

        <p
          style={{
            margin: "0 0 22px",
            color: "#4b5563",
            fontSize: "18px",
          }}
        >
          Enter a number in every answer box.
        </p>

        <div style={{ display: "grid", gap: "24px" }}>
          {calculationQuestions.map((question) => (
            <article
              key={question.number}
              style={{
                padding: "26px",
                borderRadius: "22px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 5px 16px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ margin: "0 0 12px", fontSize: "24px" }}>
                Question {question.number}
              </h3>

              <p
                style={{
                  margin: "0 0 22px",
                  fontSize: "18px",
                  lineHeight: 1.7,
                }}
              >
                {question.information}
              </p>

              {question.number === 8 && (
                <MathFormula
                  formula={String.raw`
                    \text{Cost price}=£120,\quad
                    \text{Marked price}=£180,\quad
                    \text{Selling price}=£153
                  `}
                />
              )}

              {question.number === 9 && (
                <MathFormula
                  formula={String.raw`
                    \text{Cost price}=£240,\quad
                    \text{Marked price}=£300,\quad
                    \text{Selling price}=£210
                  `}
                />
              )}

              <div style={{ display: "grid", gap: "15px", marginTop: "15px" }}>
                {question.parts.map((part, index) => {
                  const isCorrect = isCalculationCorrect(part);

                  return (
                    <div
                      key={part.id}
                      style={{
                        padding: "18px",
                        borderRadius: "16px",
                        background: "#f9fafb",
                        border:
                          submitted && isCorrect
                            ? "2px solid #22c55e"
                            : submitted
                              ? "2px solid #ef4444"
                              : "1px solid #e5e7eb",
                      }}
                    >
                      <label
                        htmlFor={part.id}
                        style={{
                          display: "block",
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 750,
                        }}
                      >
                        ({String.fromCharCode(97 + index)}) {part.label}
                      </label>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {part.suffix === "£" && (
                          <span style={{ fontSize: "20px", fontWeight: 800 }}>
                            £
                          </span>
                        )}

                        <input
                          id={part.id}
                          type="text"
                          inputMode="decimal"
                          disabled={submitted}
                          value={calculationAnswers[part.id] ?? ""}
                          onChange={(event) =>
                            setCalculationAnswers((current) => ({
                              ...current,
                              [part.id]: event.target.value,
                            }))
                          }
                          placeholder="Answer"
                          style={{
                            width: "170px",
                            maxWidth: "70%",
                            padding: "13px 15px",
                            borderRadius: "12px",
                            border: "1px solid #9ca3af",
                            background: submitted ? "#f3f4f6" : "#ffffff",
                            fontSize: "18px",
                            boxSizing: "border-box",
                          }}
                        />

                        {part.suffix === "%" && (
                          <span style={{ fontSize: "20px", fontWeight: 800 }}>
                            %
                          </span>
                        )}
                      </div>

                      {submitted && (
                        <div
                          style={{
                            marginTop: "12px",
                            color: isCorrect ? "#166534" : "#991b1b",
                            fontSize: "16px",
                            lineHeight: 1.6,
                            fontWeight: 650,
                          }}
                        >
                          {isCorrect
                            ? `Correct. ${part.explanation}`
                            : `The correct answer is ${part.suffix === "£" ? "£" : ""}${part.expected}${part.suffix === "%" ? "%" : ""}. ${part.explanation}`}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      {!submitted && (
        <section
          style={{
            padding: "24px",
            borderRadius: "20px",
            background: "#ffffff",
            border: "1px solid #e5e7eb",
          }}
        >
          {!allAnswered && (
            <p
              style={{
                margin: "0 0 15px",
                color: "#92400e",
                fontSize: "16px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Answer all {totalQuestions} items before checking your work.
            </p>
          )}

          <button
            type="button"
            disabled={!allAnswered}
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "16px",
              background: allAnswered ? "#7c3aed" : "#d1d5db",
              color: allAnswered ? "#ffffff" : "#6b7280",
              fontSize: "19px",
              fontWeight: 800,
              cursor: allAnswered ? "pointer" : "not-allowed",
            }}
          >
            Check all answers
          </button>
        </section>
      )}

      {submitted && (
        <section
          style={{
            padding: "30px",
            borderRadius: "24px",
            background: score === totalQuestions ? "#ecfdf5" : "#f5f3ff",
            border:
              score === totalQuestions
                ? "2px solid #22c55e"
                : "2px solid #a78bfa",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              color: "#6d28d9",
              fontSize: "16px",
              fontWeight: 800,
              letterSpacing: "1.2px",
            }}
          >
            CHECKPOINT RESULT
          </p>

          <h2 style={{ margin: "0 0 10px", fontSize: "38px" }}>
            {score} / {totalQuestions}
          </h2>

          <p style={{ fontSize: "19px", lineHeight: 1.6 }}>
            {score === totalQuestions
              ? "Excellent work. Every answer is correct."
              : score >= 12
                ? "Very good work. Review the topics shown below."
                : score >= 9
                  ? "Good effort. Review the formulas before trying again."
                  : "Review Sections 1–4 and then try the checkpoint again."}
          </p>

          {incorrectTopics.length > 0 && (
            <div
              style={{
                margin: "22px auto",
                maxWidth: "600px",
                padding: "20px",
                borderRadius: "16px",
                background: "#ffffff",
                textAlign: "left",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "18px",
                }}
              >
                Topics to review:
              </strong>

              <ul style={{ margin: 0, lineHeight: 1.8 }}>
                {incorrectTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "22px",
            }}
          >
            <button
              type="button"
              onClick={handleReset}
              style={{
                padding: "16px",
                borderRadius: "15px",
                border: "1px solid #7c3aed",
                background: "#ffffff",
                color: "#6d28d9",
                fontSize: "17px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Try again
            </button>

            <Link
              href="/maths/s1/chapter-5"
              style={{
                padding: "16px",
                borderRadius: "15px",
                background: "#059669",
                color: "#ffffff",
                fontSize: "17px",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Return to Chapter 5 →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}