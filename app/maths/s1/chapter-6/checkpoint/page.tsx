"use client";

import {
  useEffect,
  useState,
  type ComponentProps,
} from "react";
import Link from "next/link";

import GeometryDiagram from "@/components/maths/GeometryDiagram";

type Choice = "correct" | "wrong" | "";

type GeometryDiagramData = ComponentProps<
  typeof GeometryDiagram
>["diagram"];

type TrueFalseQuestion = {
  id: number;
  statement: string;
  answer: Exclude<Choice, "">;
  explanation: string;
  topic: string;
};

type MultipleChoiceQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  topic: string;
  diagram?: GeometryDiagramData;
};

const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 1,
    statement:
      "A polygon is a closed plane figure made entirely from straight line segments.",
    answer: "correct",
    explanation:
      "A polygon must be closed and all its sides must be straight line segments.",
    topic: "Polygons",
  },
  {
    id: 2,
    statement:
      "Every quadrilateral has exactly two diagonals.",
    answer: "correct",
    explanation:
      "A quadrilateral has four vertices. Each diagonal joins two non-adjacent vertices, giving two diagonals.",
    topic: "Diagonals",
  },
  {
    id: 3,
    statement:
      "Every equilateral polygon is a regular polygon.",
    answer: "wrong",
    explanation:
      "A regular polygon must be both equilateral and equiangular. Equal sides alone are not enough.",
    topic: "Regular Polygons",
  },
  {
    id: 4,
    statement:
      "An obtuse-angled triangle can have two angles greater than 90°.",
    answer: "wrong",
    explanation:
      "The angles in a triangle total 180°, so a triangle can have only one obtuse angle.",
    topic: "Triangles",
  },
  {
    id: 5,
    statement:
      "A cylinder is a polyhedron.",
    answer: "wrong",
    explanation:
      "A polyhedron is enclosed only by flat polygonal faces. A cylinder has a curved surface.",
    topic: "Polyhedra",
  },
  {
    id: 6,
    statement:
      "A dashed line in a 2-D representation can show a hidden edge.",
    answer: "correct",
    explanation:
      "Dashed lines are normally used for edges that are hidden from the chosen view.",
    topic: "2-D Representations",
  },
  {
    id: 7,
    statement:
      "Cross-sections of a prism parallel to its identical ends have the same shape and size.",
    answer: "correct",
    explanation:
      "A prism has a uniform cross-section throughout its length when cuts are parallel to its ends.",
    topic: "Cross-sections",
  },
];

const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 8,
    question:
      "Which description identifies a concave polygon?",
    options: [
      "Every interior angle is less than 180°",
      "At least one interior angle is greater than 180°",
      "All sides and all angles are equal",
    ],
    answer:
      "At least one interior angle is greater than 180°",
    explanation:
      "A concave polygon has at least one interior angle greater than 180°. Part of the polygon bends inwards.",
    topic: "Convex and Concave Polygons",
    diagram: {
      type: "polygon",
      variant: "convex-vs-concave",
    },
  },
  {
    id: 9,
    question:
      "A triangle contains an angle of 110°. How should it be classified?",
    options: [
      "Acute-angled triangle",
      "Right-angled triangle",
      "Obtuse-angled triangle",
    ],
    answer: "Obtuse-angled triangle",
    explanation:
      "Since 110° is greater than 90°, the triangle is obtuse-angled.",
    topic: "Triangles",
    diagram: {
      type: "triangle",
      variant: "obtuse",
    },
  },
  {
    id: 10,
    question:
      "How many edges does a cuboid have?",
    options: ["8 edges", "12 edges", "16 edges"],
    answer: "12 edges",
    explanation:
      "A cuboid has 6 faces, 12 edges and 8 vertices.",
    topic: "Faces, Edges and Vertices",
    diagram: {
      type: "solid",
      variant: "cuboid",
    },
  },
  {
    id: 11,
    question:
      "Which of these solids is not a polyhedron?",
    options: [
      "Triangular prism",
      "Cuboid",
      "Cylinder",
    ],
    answer: "Cylinder",
    explanation:
      "A cylinder has a curved surface. A polyhedron must be enclosed entirely by flat polygonal faces.",
    topic: "Polyhedra",
    diagram: {
      type: "solid",
      variant: "prism-vs-cylinder",
    },
  },
  {
    id: 12,
    question:
      "A triangular prism is cut parallel to its triangular ends. What is the shape of the cross-section?",
    options: [
      "Triangle",
      "Rectangle",
      "Circle",
    ],
    answer: "Triangle",
    explanation:
      "A cross-section parallel to the triangular ends has the same triangular shape and size.",
    topic: "Cross-sections",
    diagram: {
      type: "cross-section",
      variant: "uniform-prism",
    },
  },
];

export default function ChapterSixCheckpointPage() {
  const [mounted, setMounted] = useState(false);

  const [choices, setChoices] = useState<
    Record<number, Choice>
  >({});

  const [multipleChoiceAnswers, setMultipleChoiceAnswers] =
    useState<Record<number, string>>({});

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

  const answeredTrueFalse =
    trueFalseQuestions.filter(
      (question) => choices[question.id],
    ).length;

  const answeredMultipleChoice =
    multipleChoiceQuestions.filter(
      (question) =>
        (multipleChoiceAnswers[question.id] ?? "") !== "",
    ).length;

  const totalQuestions =
    trueFalseQuestions.length +
    multipleChoiceQuestions.length;

  const answeredQuestions =
    answeredTrueFalse + answeredMultipleChoice;

  const allAnswered =
    answeredQuestions === totalQuestions;

  const trueFalseScore =
    trueFalseQuestions.filter(
      (question) =>
        choices[question.id] === question.answer,
    ).length;

  const multipleChoiceScore =
    multipleChoiceQuestions.filter(
      (question) =>
        multipleChoiceAnswers[question.id] ===
        question.answer,
    ).length;

  const score =
    trueFalseScore + multipleChoiceScore;

  const incorrectTopics = Array.from(
    new Set([
      ...trueFalseQuestions
        .filter(
          (question) =>
            submitted &&
            choices[question.id] !== question.answer,
        )
        .map((question) => question.topic),

      ...multipleChoiceQuestions
        .filter(
          (question) =>
            submitted &&
            multipleChoiceAnswers[question.id] !==
              question.answer,
        )
        .map((question) => question.topic),
    ]),
  );

  function handleSubmit() {
    if (!allAnswered) {
      return;
    }

    setSubmitted(true);

    window.setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }

  function handleReset() {
    setChoices({});
    setMultipleChoiceAnswers({});
    setSubmitted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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
        href="/maths/s1/chapter-6"
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
          Test your understanding of polygons, triangles,
          polyhedra, prisms, 2-D representations and
          cross-sections.
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
            Answered {answeredQuestions} of{" "}
            {totalQuestions}
          </span>

          <span>
            {Math.round(
              (answeredQuestions / totalQuestions) * 100,
            )}
            %
          </span>
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
              width: `${
                (answeredQuestions / totalQuestions) * 100
              }%`,
              height: "100%",
              borderRadius: "999px",
              background: "#7c3aed",
              transition: "width 0.25s ease",
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "34px" }}>
        <h2
          style={{
            marginBottom: "8px",
            fontSize: "30px",
          }}
        >
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

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {trueFalseQuestions.map((question) => {
            const selectedAnswer =
              choices[question.id];

            const isCorrect =
              selectedAnswer === question.answer;

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
                  boxShadow:
                    "0 5px 16px rgba(0,0,0,0.04)",
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
                    gridTemplateColumns:
                      "repeat(2, minmax(0, 1fr))",
                    gap: "12px",
                  }}
                >
                  {(["correct", "wrong"] as const).map(
                    (answer) => {
                      const selected =
                        selectedAnswer === answer;

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
                            background: selected
                              ? "#ede9fe"
                              : "#ffffff",
                            color: selected
                              ? "#5b21b6"
                              : "#374151",
                            fontSize: "17px",
                            fontWeight: 800,
                            cursor: submitted
                              ? "default"
                              : "pointer",
                          }}
                        >
                          {answer === "correct"
                            ? "✓ Correct"
                            : "✕ Wrong"}
                        </button>
                      );
                    },
                  )}
                </div>

                {submitted && (
                  <div
                    style={{
                      marginTop: "16px",
                      padding: "15px 17px",
                      borderRadius: "13px",
                      background: isCorrect
                        ? "#ecfdf5"
                        : "#fef2f2",
                      color: isCorrect
                        ? "#166534"
                        : "#991b1b",
                      fontSize: "16px",
                      lineHeight: 1.6,
                      fontWeight: 650,
                    }}
                  >
                    {isCorrect
                      ? "Correct. "
                      : "Not quite. "}

                    {question.explanation}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section style={{ marginBottom: "34px" }}>
        <h2
          style={{
            marginBottom: "8px",
            fontSize: "30px",
          }}
        >
          Part B: Choose the correct answer
        </h2>

        <p
          style={{
            margin: "0 0 22px",
            color: "#4b5563",
            fontSize: "18px",
          }}
        >
          Study each diagram and select one answer.
        </p>

        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {multipleChoiceQuestions.map((question) => {
            const selectedAnswer =
              multipleChoiceAnswers[question.id];

            const isCorrect =
              selectedAnswer === question.answer;

            return (
              <article
                key={question.id}
                style={{
                  padding: "26px",
                  borderRadius: "22px",
                  background: "#ffffff",
                  border:
                    submitted && isCorrect
                      ? "2px solid #22c55e"
                      : submitted
                        ? "2px solid #ef4444"
                        : "1px solid #e5e7eb",
                  boxShadow:
                    "0 5px 16px rgba(0,0,0,0.04)",
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
                      background: "#dbeafe",
                      color: "#1d4ed8",
                      fontSize: "18px",
                      fontWeight: 800,
                    }}
                  >
                    {question.id}
                  </span>

                  <h3
                    style={{
                      margin: "5px 0 18px",
                      fontSize: "21px",
                      lineHeight: 1.5,
                    }}
                  >
                    {question.question}
                  </h3>
                </div>

                {question.diagram && (
                  <div
                    style={{
                      maxWidth: "720px",
                      margin: "4px auto 22px",
                    }}
                  >
                    <GeometryDiagram
                      diagram={question.diagram}
                    />
                  </div>
                )}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(210px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {question.options.map((option) => {
                    const selected =
                      selectedAnswer === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={submitted}
                        onClick={() =>
                          setMultipleChoiceAnswers(
                            (current) => ({
                              ...current,
                              [question.id]: option,
                            }),
                          )
                        }
                        style={{
                          padding: "15px",
                          borderRadius: "14px",
                          border: selected
                            ? "2px solid #2563eb"
                            : "1px solid #d1d5db",
                          background: selected
                            ? "#dbeafe"
                            : "#ffffff",
                          color: selected
                            ? "#1e40af"
                            : "#374151",
                          fontSize: "16px",
                          lineHeight: 1.45,
                          fontWeight: 800,
                          cursor: submitted
                            ? "default"
                            : "pointer",
                        }}
                      >
                        {option}
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
                      background: isCorrect
                        ? "#ecfdf5"
                        : "#fef2f2",
                      color: isCorrect
                        ? "#166534"
                        : "#991b1b",
                      fontSize: "16px",
                      lineHeight: 1.6,
                      fontWeight: 650,
                    }}
                  >
                    {isCorrect
                      ? "Correct. "
                      : `Not quite. The correct answer is "${question.answer}". `}

                    {question.explanation}
                  </div>
                )}
              </article>
            );
          })}
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
              Answer all {totalQuestions} questions before
              checking your work.
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
              background: allAnswered
                ? "#7c3aed"
                : "#d1d5db",
              color: allAnswered
                ? "#ffffff"
                : "#6b7280",
              fontSize: "19px",
              fontWeight: 800,
              cursor: allAnswered
                ? "pointer"
                : "not-allowed",
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
            background:
              score === totalQuestions
                ? "#ecfdf5"
                : "#f5f3ff",
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

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "38px",
            }}
          >
            {score} / {totalQuestions}
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.6,
            }}
          >
            {score === totalQuestions
              ? "Excellent work. Every answer is correct."
              : score >= 10
                ? "Very good work. Review the topics shown below."
                : score >= 8
                  ? "Good effort. Review the key ideas before trying again."
                  : "Review Sections 1 and 2, then try the checkpoint again."}
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

              <ul
                style={{
                  margin: 0,
                  lineHeight: 1.8,
                }}
              >
                {incorrectTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
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
              href="/maths/s1/chapter-6"
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