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
    "statement": "A median must equal an observed value.",
    "answer": "wrong",
    "explanation": "The median of 2 and 8 is 5.",
    "topic": "6.1 · Median"
  },
  {
    "id": 2,
    "statement": "Using class midpoints generally gives an estimate of the mean.",
    "answer": "correct",
    "explanation": "The values within each interval are unknown.",
    "topic": "6.2 · Grouped data"
  },
  {
    "id": 3,
    "statement": "Multiplying all values by −2 multiplies their median by −2.",
    "answer": "correct",
    "explanation": "The order reverses, but the middle value or middle pair still determines the median.",
    "topic": "6.3 · Changing data"
  },
  {
    "id": 4,
    "statement": "Doubling all positive weights doubles the weighted mean.",
    "answer": "wrong",
    "explanation": "Both the weighted total and total weight double. Their quotient stays the same.",
    "topic": "6.4 · Weights"
  },
  {
    "id": 5,
    "statement": "If 4 of 11 items share the modal price, most items have that price.",
    "answer": "wrong",
    "explanation": "A majority requires at least 6 of 11.",
    "topic": "6.5 · Majority"
  }
];
const calculationQuestions: CalculationQuestion[] = [
  {
    "number": 6,
    "information": "Five waiting times in minutes are 8, 2, 5, 4 and 6. A sixth person waits 5 minutes.",
    "parts": [
      {
        "id": "q6-1",
        "label": "Mean of all six times (min)",
        "expected": 5,
        "explanation": "The six times total 30 minutes.",
        "topic": "6.1 · Raw data"
      },
      {
        "id": "q6-2",
        "label": "Median (min)",
        "expected": 5,
        "explanation": "The ordered middle pair is 5 and 5.",
        "topic": "6.1 · Raw data"
      },
      {
        "id": "q6-3",
        "label": "Mode (min)",
        "expected": 5,
        "explanation": "Only 5 occurs twice.",
        "topic": "6.1 · Raw data"
      }
    ]
  },
  {
    "number": 7,
    "information": "Parcel weights recorded to the nearest kilogram fall into three classes. The frequencies for 1–2, 3–4 and 5–6 kg are 2, 5 and 3 respectively.",
    "parts": [
      {
        "id": "q7-1",
        "label": "Class mark of 5–6 kg",
        "expected": 5.5,
        "explanation": "(5 + 6) ÷ 2 = 5.5.",
        "topic": "6.2 · Grouped data"
      },
      {
        "id": "q7-2",
        "label": "Estimated mean (kg)",
        "expected": 3.7,
        "explanation": "(1.5 × 2 + 3.5 × 5 + 5.5 × 3) ÷ 10 = 3.7.",
        "topic": "6.2 · Grouped data"
      },
      {
        "id": "q7-3",
        "label": "Lower class limit of the modal class (kg)",
        "expected": 3,
        "explanation": "The largest frequency is 5, for 3–4 kg.",
        "topic": "6.2 · Grouped data"
      }
    ]
  },
  {
    "number": 8,
    "information": "Read the cumulative frequency polygon for 40 journeys. Follow each target frequency across to the line and then down to the time axis.",
    "parts": [
      {
        "id": "q8-1",
        "label": "Lower quartile (min)",
        "expected": 15,
        "explanation": "At frequency 10, read halfway between 10 and 20 minutes.",
        "topic": "6.2 · Graph reading"
      },
      {
        "id": "q8-2",
        "label": "Median (min)",
        "expected": 22.5,
        "explanation": "At frequency 20, read one quarter of the way from (20, 15) to (30, 35).",
        "topic": "6.2 · Graph reading"
      },
      {
        "id": "q8-3",
        "label": "85th percentile (min)",
        "expected": 29.5,
        "explanation": "Frequency 34 is 19/20 of the way from 15 to 35. The time is 20 + 9.5 minutes.",
        "topic": "6.2 · Graph reading"
      }
    ]
  },
  {
    "number": 9,
    "information": "A set has mean 12, median 10 and mode 8. Subtract 3 from each value, then double each result.",
    "parts": [
      {
        "id": "q9-1",
        "label": "New mean",
        "expected": 18,
        "explanation": "(12 − 3) × 2 = 18.",
        "topic": "6.3 · Changing data"
      },
      {
        "id": "q9-2",
        "label": "New median",
        "expected": 14,
        "explanation": "(10 − 3) × 2 = 14.",
        "topic": "6.3 · Changing data"
      },
      {
        "id": "q9-3",
        "label": "New mode",
        "expected": 10,
        "explanation": "(8 − 3) × 2 = 10.",
        "topic": "6.3 · Changing data"
      }
    ]
  },
  {
    "number": 10,
    "information": "Two performances score 64 and 84 with weights 2 and 3 respectively.",
    "parts": [
      {
        "id": "q10-1",
        "label": "Weighted mean",
        "expected": 76,
        "explanation": "(64 × 2 + 84 × 3) ÷ 5 = 76.",
        "topic": "6.4 · Weighted mean"
      }
    ]
  },
  {
    "number": 11,
    "information": "Tickets for two routes originally cost $5 and $10. They now cost $6 and $8. On both days 90 passengers use the first route and 10 use the second.",
    "parts": [
      {
        "id": "q11-1",
        "label": "Original daily income ($)",
        "expected": 550,
        "explanation": "90 × 5 + 10 × 10 = 550.",
        "topic": "6.5 · Checking claims"
      },
      {
        "id": "q11-2",
        "label": "New daily income ($)",
        "expected": 620,
        "explanation": "90 × 6 + 10 × 8 = 620. Income rose despite the fall in the simple mean fare.",
        "topic": "6.5 · Checking claims"
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
        href="/maths/s3/chapter-6"
        style={{
          display: "inline-block",
          marginBottom: "26px",
          color: "#047857",
          fontSize: "17px",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        ← Back to Chapter 6
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
          Chapter 6 Checkpoint
        </h1>

        <p
          style={{
            margin: 0,
            color: "#4b5563",
            fontSize: "19px",
            lineHeight: 1.6,
          }}
        >
          Check your understanding of the measures and claims in Sections 6.1–6.5.
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
          Enter exact numbers. Use the units shown beside each answer.
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
              {question.number === 8 && <figure style={{maxWidth: 480, margin: "16px auto"}}>
                <svg viewBox="0 0 310 250" role="img" aria-label="Cumulative frequency polygon through (0,0), (10,5), (20,15), (30,35) and (40,40).">
                  {[0,5,10,15,20,25,30,35,40].map(t => <g key={t} stroke="#cbd5e1">
                    <line x1={55+t*5} x2={55+t*5} y1="15" y2="195"/>
                    <line x1="55" x2="255" y1={195-t*4.5} y2={195-t*4.5}/>
                    <text stroke="none" x="48" y={199-t*4.5} textAnchor="end" fontSize="10">{t}</text>
                    <text stroke="none" x={55+t*5} y="210" textAnchor="middle" fontSize="10">{t}</text>
                  </g>)}
                  <polyline points="55,195 105,172.5 155,127.5 205,37.5 255,15" fill="none" stroke="#047857" strokeWidth="3"/>
                  <text x="155" y="232" textAnchor="middle">Journey time (min)</text>
                  <text transform="translate(17 106) rotate(-90)" textAnchor="middle" fontSize="13">Cumulative frequency</text>
                </svg></figure>}

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
                  : "Review Sections 6.1–6.5 and then try the checkpoint again."}
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
              href="/maths/s3/chapter-6"
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
              Return to Chapter 6 →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}