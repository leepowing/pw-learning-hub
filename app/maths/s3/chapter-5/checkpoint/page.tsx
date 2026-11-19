"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


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
  displayAnswer?: string;
  explanation: string;
  topic: string;
};

type CalculationQuestion = {
  number: number;
  information: string;
  parts: CalculationPart[];
};

const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    "id": 1,
    "statement": "On a fair six-sided die, the probability of rolling 2 is ⅙.",
    "answer": "correct",
    "explanation": "One of the six equally likely faces shows 2.",
    "topic": "Equally likely outcomes"
  },
  {
    "id": 2,
    "statement": "Three labelled coins have eight possible head/tail sequences.",
    "answer": "correct",
    "explanation": "Each of three positions has two possibilities: 2 × 2 × 2 = 8.",
    "topic": "Listing outcomes"
  },
  {
    "id": 3,
    "statement": "Rolling a fair die 24 times guarantees four fives.",
    "answer": "wrong",
    "explanation": "24 × ⅙ = 4 is the expected count. The observed count can vary.",
    "topic": "Expected counts"
  }
];
const calculationQuestions: CalculationQuestion[] = [
  {
    "number": 4,
    "information": "A box contains 12 chocolate, 5 fruit and 3 cheese cakes. Each cake has the same chance of selection.",
    "parts": [
      {
        "id": "q4-0",
        "label": "Probability of chocolate",
        "expected": 0.6,
        "explanation": "12 of the 20 cakes are chocolate: 12/20 = 3/5.",
        "topic": "Counting outcomes"
      },
      {
        "id": "q4-1",
        "label": "Probability of cheese",
        "expected": 0.15,
        "explanation": "3 of the 20 cakes are cheese: 3/20.",
        "topic": "Counting outcomes"
      }
    ]
  },
  {
    "number": 5,
    "information": "A restaurant recorded 95 days with at most 300 customers and 5 days with more than 300.",
    "parts": [
      {
        "id": "q5-0",
        "label": "Estimated probability of more than 300 customers tomorrow",
        "expected": 0.05,
        "explanation": "The event occurred on 5 out of 100 observed days.",
        "topic": "Relative frequency"
      }
    ]
  },
  {
    "number": 6,
    "information": "Choose independently and uniformly from A = {1, 2, 3} and B = {4, 5, 6}. Complete the table of sums, then count the sums above 8.",
    "parts": [
      {
        "id": "q6-0",
        "label": "A = 1, B = 4",
        "expected": 5,
        "explanation": "1 + 4 = 5.",
        "topic": "Two-way tables"
      },
      {
        "id": "q6-1",
        "label": "A = 1, B = 5",
        "expected": 6,
        "explanation": "1 + 5 = 6.",
        "topic": "Two-way tables"
      },
      {
        "id": "q6-2",
        "label": "A = 1, B = 6",
        "expected": 7,
        "explanation": "1 + 6 = 7.",
        "topic": "Two-way tables"
      },
      {
        "id": "q6-3",
        "label": "A = 2, B = 4",
        "expected": 6,
        "explanation": "2 + 4 = 6.",
        "topic": "Two-way tables"
      },
      {
        "id": "q6-4",
        "label": "A = 2, B = 5",
        "expected": 7,
        "explanation": "2 + 5 = 7.",
        "topic": "Two-way tables"
      },
      {
        "id": "q6-5",
        "label": "A = 2, B = 6",
        "expected": 8,
        "explanation": "2 + 6 = 8.",
        "topic": "Two-way tables"
      },
      {
        "id": "q6-6",
        "label": "A = 3, B = 4",
        "expected": 7,
        "explanation": "3 + 4 = 7.",
        "topic": "Two-way tables"
      },
      {
        "id": "q6-7",
        "label": "A = 3, B = 5",
        "expected": 8,
        "explanation": "3 + 5 = 8.",
        "topic": "Two-way tables"
      },
      {
        "id": "q6-8",
        "label": "A = 3, B = 6",
        "expected": 9,
        "explanation": "3 + 6 = 9.",
        "topic": "Two-way tables"
      },
      {
        "id": "q6-9",
        "label": "Probability of a sum above 8",
        "expected": 1 / 9,
        "displayAnswer": "1/9",
        "explanation": "Only (3, 6) qualifies among nine equally likely pairs: 1/9.",
        "topic": "Two-way tables"
      }
    ]
  },
  {
    "number": 7,
    "information": "A coupon is worth $50, $100 or $200 with probabilities 0.4, 0.5 and 0.1 respectively.",
    "parts": [
      {
        "id": "q7-0",
        "label": "Expected face value in dollars",
        "expected": 90,
        "explanation": "50 × 0.4 + 100 × 0.5 + 200 × 0.1 = 90.",
        "topic": "Expected values"
      }
    ]
  }
];
function normaliseNumber(raw: string) {
  const value = raw.trim();
  const fraction = value.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (fraction) return Number(fraction[1]) / Number(fraction[2]);
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)%?$/.test(value)) return NaN;
  return value.endsWith("%") ? Number(value.slice(0, -1)) / 100 : Number(value);
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
    return Number.isFinite(value) && Math.abs(value - part.expected) < 1e-12;
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
        href="/maths/s3/chapter-5"
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
          Check your understanding of probability, sample spaces and expected values.
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
          Enter exact numbers. For probabilities, fractions, decimals and percentages are accepted.
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

              <div style={{ display: "grid", gridTemplateColumns: question.number === 6 ? "repeat(3, minmax(0, 1fr))" : "1fr", gap: "6px", marginTop: "15px" }}>
                {question.parts.map((part, index) => {
                  const isCorrect = isCalculationCorrect(part);

                  return (
                    <div
                      key={part.id}
                      style={{
                        gridColumn: part.id === "q6-9" ? "1 / -1" : undefined,
                        padding: question.number === 6 ? "8px" : "18px",
                        overflowWrap: "anywhere",
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

                        <input
                          id={part.id}
                          type="text"
                          inputMode="text"
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
                            maxWidth: "100%",
                            padding: "10px 6px",
                            borderRadius: "12px",
                            border: "1px solid #9ca3af",
                            background: submitted ? "#f3f4f6" : "#ffffff",
                            fontSize: "18px",
                            boxSizing: "border-box",
                          }}
                        />

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
                            : `The correct answer is ${part.displayAnswer ?? part.expected}. ${part.explanation}`}
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
              : score / totalQuestions >= 0.8
                ? "Very good work. Review the topics shown below."
                : score / totalQuestions >= 0.6
                  ? "Good effort. Review the formulas before trying again."
                  : "Review Sections 5.1–5.3 and then try the checkpoint again."}
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
              href="/maths/s3/chapter-5"
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