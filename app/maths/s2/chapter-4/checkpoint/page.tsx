"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

type AnswerOption = {
  id: string;
  content: ReactNode;
};

type CheckpointQuestion = {
  topic: string;
  prompt: string;
  formula?: ReactNode;
  options: AnswerOption[];
  correctAnswer: string;
  explanation: string;
};

type QuestionResult = {
  correct: boolean;
  topic: string;
};

const questions: CheckpointQuestion[] = [
  {
    topic: "Algebraic Fractions",
    prompt: "Which expression is an algebraic fraction?",
    options: [
      {
        id: "a",
        content: "2x + 5",
      },
      {
        id: "b",
        content: (
          <MathFraction top="x + 2" bottom="x − 3" />
        ),
      },
      {
        id: "c",
        content: (
          <span>
            x<sup>2</sup> − 9
          </span>
        ),
      },
    ],
    correctAnswer: "b",
    explanation:
      "An algebraic fraction contains a variable in its numerator, denominator or both.",
  },
  {
    topic: "Simplifying Algebraic Fractions",
    prompt: "Simplify the algebraic fraction.",
    formula: (
      <MathFraction
        top={
          <span>
            12x<sup>2</sup>y
          </span>
        }
        bottom={
          <span>
            18xy<sup>2</sup>
          </span>
        }
      />
    ),
    options: [
      {
        id: "a",
        content: (
          <MathFraction top="2x" bottom="3y" />
        ),
      },
      {
        id: "b",
        content: (
          <MathFraction top="3x" bottom="2y" />
        ),
      },
      {
        id: "c",
        content: (
          <MathFraction top="2y" bottom="3x" />
        ),
      },
    ],
    correctAnswer: "a",
    explanation:
      "Cancel the common factors 6xy to obtain 2x ÷ 3y.",
  },
  {
    topic: "Multiplying Algebraic Fractions",
    prompt: "Simplify the product.",
    formula: (
      <MathExpression>
        <MathFraction top="2x" bottom="3" />
        <span>×</span>
        <MathFraction top="9" bottom="4x" />
      </MathExpression>
    ),
    options: [
      {
        id: "a",
        content: (
          <MathFraction top="3" bottom="2" />
        ),
      },
      {
        id: "b",
        content: (
          <MathFraction top="2" bottom="3" />
        ),
      },
      {
        id: "c",
        content: (
          <MathFraction top="18x" bottom="12" />
        ),
      },
    ],
    correctAnswer: "a",
    explanation:
      "Multiply the fractions and cancel x. Then simplify 18 ÷ 12 to 3 ÷ 2.",
  },
  {
    topic: "Dividing Algebraic Fractions",
    prompt: "Simplify the division.",
    formula: (
      <MathExpression>
        <MathFraction top="x" bottom="5" />
        <span>÷</span>
        <MathFraction top="2x" bottom="15" />
      </MathExpression>
    ),
    options: [
      {
        id: "a",
        content: (
          <MathFraction top="2" bottom="3" />
        ),
      },
      {
        id: "b",
        content: (
          <MathFraction top="3" bottom="2" />
        ),
      },
      {
        id: "c",
        content: (
          <MathFraction top="1" bottom="6" />
        ),
      },
    ],
    correctAnswer: "b",
    explanation:
      "Multiply x ÷ 5 by the reciprocal 15 ÷ 2x. Cancelling gives 3 ÷ 2.",
  },
  {
    topic: "Adding Algebraic Fractions",
    prompt: "Add and simplify.",
    formula: (
      <MathExpression>
        <MathFraction top="3" bottom="4x" />
        <span>+</span>
        <MathFraction top="1" bottom="2x" />
      </MathExpression>
    ),
    options: [
      {
        id: "a",
        content: (
          <MathFraction top="4" bottom="6x" />
        ),
      },
      {
        id: "b",
        content: (
          <MathFraction top="5" bottom="4x" />
        ),
      },
      {
        id: "c",
        content: (
          <MathFraction top="4" bottom="4x" />
        ),
      },
    ],
    correctAnswer: "b",
    explanation:
      "Rewrite 1 ÷ 2x as 2 ÷ 4x. Then add the numerators: 3 + 2 = 5.",
  },
  {
    topic: "Subject of a Formula",
    prompt: "What is the subject of this formula?",
    formula: <span>P = 2l + 2w</span>,
    options: [
      {
        id: "a",
        content: "P",
      },
      {
        id: "b",
        content: "l",
      },
      {
        id: "c",
        content: "w",
      },
    ],
    correctAnswer: "a",
    explanation:
      "P is the subject because it stands alone on one side of the equals sign.",
  },
  {
    topic: "Formulae and Substitution",
    prompt:
      "Use P = 2l + 2w. Find P when l = 8 and w = 5.",
    formula: <span>P = 2l + 2w</span>,
    options: [
      {
        id: "a",
        content: "P = 21",
      },
      {
        id: "b",
        content: "P = 26",
      },
      {
        id: "c",
        content: "P = 80",
      },
    ],
    correctAnswer: "b",
    explanation:
      "P = 2(8) + 2(5) = 16 + 10 = 26.",
  },
  {
    topic: "Substitution with Negative Numbers",
    prompt: "Find y when x = −2.",
    formula: (
      <span>
        y = 2x<sup>2</sup> − 3x
      </span>
    ),
    options: [
      {
        id: "a",
        content: "y = 2",
      },
      {
        id: "b",
        content: "y = 14",
      },
      {
        id: "c",
        content: "y = −14",
      },
    ],
    correctAnswer: "b",
    explanation:
      "y = 2(−2)² − 3(−2) = 2(4) + 6 = 14.",
  },
  {
    topic: "Formulae and Substitution",
    prompt:
      "Use v = u + at. Find v when u = 4, a = 3 and t = 5.",
    formula: <span>v = u + at</span>,
    options: [
      {
        id: "a",
        content: "v = 19",
      },
      {
        id: "b",
        content: "v = 35",
      },
      {
        id: "c",
        content: "v = 12",
      },
    ],
    correctAnswer: "a",
    explanation:
      "v = 4 + 3(5) = 4 + 15 = 19.",
  },
  {
    topic: "Change of Subject",
    prompt: "Make Q the subject.",
    formula: <span>P = 4Q − 6</span>,
    options: [
      {
        id: "a",
        content: (
          <MathExpression>
            <span>Q =</span>
            <MathFraction top="P − 6" bottom="4" />
          </MathExpression>
        ),
      },
      {
        id: "b",
        content: (
          <MathExpression>
            <span>Q =</span>
            <MathFraction top="P + 6" bottom="4" />
          </MathExpression>
        ),
      },
      {
        id: "c",
        content: (
          <MathExpression>
            <span>Q =</span>
            <MathFraction top="4" bottom="P + 6" />
          </MathExpression>
        ),
      },
    ],
    correctAnswer: "b",
    explanation:
      "Add 6 to both sides, then divide both sides by 4.",
  },
  {
    topic: "Change of Subject",
    prompt: "Make t the subject.",
    formula: <span>d = vt</span>,
    options: [
      {
        id: "a",
        content: (
          <MathExpression>
            <span>t =</span>
            <MathFraction top="d" bottom="v" />
          </MathExpression>
        ),
      },
      {
        id: "b",
        content: (
          <MathExpression>
            <span>t =</span>
            <MathFraction top="v" bottom="d" />
          </MathExpression>
        ),
      },
      {
        id: "c",
        content: <span>t = dv</span>,
      },
    ],
    correctAnswer: "a",
    explanation:
      "Divide both sides of d = vt by v to obtain t = d ÷ v.",
  },
  {
    topic: "Squares and Square Roots",
    prompt: "Make r the subject.",
    formula: (
      <span>
        A = πr<sup>2</sup>
      </span>
    ),
    options: [
      {
        id: "a",
        content: (
          <MathExpression>
            <span>r =</span>
            <MathFraction top="A" bottom="π" />
          </MathExpression>
        ),
      },
      {
        id: "b",
        content: (
          <MathExpression>
            <span>r = √</span>
            <span className="rootContent">
              <MathFraction top="A" bottom="π" />
            </span>
          </MathExpression>
        ),
      },
      {
        id: "c",
        content: (
          <MathExpression>
            <span>r =</span>
            <MathFraction top="π" bottom="A" />
          </MathExpression>
        ),
      },
    ],
    correctAnswer: "b",
    explanation:
      "Divide by π and then take the positive square root.",
  },
];

export default function ChapterFourCheckpointPage() {
  const router = useRouter();

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const [results, setResults] = useState<
    QuestionResult[]
  >([]);

  const [finished, setFinished] =
    useState(false);

  const question = questions[questionIndex];
  const answered = selectedAnswer !== null;

  const score = results.filter(
    (result) => result.correct
  ).length;

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  const reviewTopics = Array.from(
    new Set(
      results
        .filter((result) => !result.correct)
        .map((result) => result.topic)
    )
  );

  function handleNext() {
    if (!selectedAnswer) {
      return;
    }

    const nextResults = [
      ...results,
      {
        correct:
          selectedAnswer ===
          question.correctAnswer,
        topic: question.topic,
      },
    ];

    setResults(nextResults);

    if (
      questionIndex ===
      questions.length - 1
    ) {
      setFinished(true);
      return;
    }

    setQuestionIndex(
      (previous) => previous + 1
    );

    setSelectedAnswer(null);
  }

  function restartCheckpoint() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setResults([]);
    setFinished(false);
  }

  if (finished) {
    return (
      <main className="checkpointPage">
        <button
          type="button"
          className="backButton"
          onClick={() =>
            router.push("/maths/s2/chapter-4")
          }
        >
          ← Back to Chapter 4
        </button>

        <section className="resultCard">
          <p className="resultLabel">
            CHECKPOINT RESULT
          </p>

          <h1>
            {score} / {questions.length}
          </h1>

          <p className="percentage">
            Accuracy: {percentage}%
          </p>

          <p className="resultMessage">
            {percentage === 100
              ? "Excellent — you answered every question correctly."
              : percentage >= 80
                ? "Very good work. Review the topics shown below."
                : percentage >= 60
                  ? "Good effort. Review the weaker topics and try again."
                  : "Keep practising the three sections, then try the checkpoint again."}
          </p>

          {reviewTopics.length === 0 ? (
            <div className="allCorrectMessage">
              All Chapter 4 topics are currently
              secure.
            </div>
          ) : (
            <div className="reviewBox">
              <strong>Topics to review:</strong>

              <ul>
                {reviewTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="resultButtons">
            <button
              type="button"
              className="tryAgainButton largeButton"
              onClick={restartCheckpoint}
            >
              Try again
            </button>

            <button
              type="button"
              className="returnButton"
              onClick={() =>
                router.push(
                  "/maths/s2/chapter-4"
                )
              }
            >
              Return to Chapter 4 →
            </button>
          </div>
        </section>

        <CheckpointStyles />
      </main>
    );
  }

  const progress =
    ((questionIndex + 1) /
      questions.length) *
    100;

  return (
    <main className="checkpointPage">
      <button
        type="button"
        className="backButton"
        onClick={() =>
          router.push("/maths/s2/chapter-4")
        }
      >
        ← Back to Chapter 4
      </button>

      <header className="checkpointHeader">
        <p className="eyebrow">
          S2 MATHEMATICS · CHAPTER 4
        </p>

        <h1>Chapter 4 Checkpoint</h1>

        <p>
          Test your understanding of algebraic
          fractions, substitution and changing the
          subject.
        </p>
      </header>

      <div className="progressInformation">
        <span>
          Question {questionIndex + 1} of{" "}
          {questions.length}
        </span>

        <span>{question.topic}</span>
      </div>

      <div className="progressTrack">
        <div
          className="progressBar"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <section className="questionCard">
        <p className="questionNumber">
          QUESTION {questionIndex + 1}
        </p>

        <h2>{question.prompt}</h2>

        {question.formula && (
          <div className="formulaPanel">
            {question.formula}
          </div>
        )}

        <div className="answerGrid">
          {question.options.map((option) => {
            const selected =
              selectedAnswer === option.id;

            const correct =
              answered &&
              option.id ===
                question.correctAnswer;

            const wrong =
              answered &&
              selected &&
              option.id !==
                question.correctAnswer;

            return (
              <button
                key={option.id}
                type="button"
                disabled={answered}
                onClick={() =>
                  setSelectedAnswer(option.id)
                }
                className={[
                  "answerButton",
                  selected
                    ? "selectedAnswer"
                    : "",
                  correct
                    ? "correctAnswer"
                    : "",
                  wrong
                    ? "wrongAnswer"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="answerLetter">
                  {option.id.toUpperCase()}
                </span>

                <span className="answerContent">
                  {option.content}
                </span>
              </button>
            );
          })}
        </div>

        {answered && (
          <div
            className={
              selectedAnswer ===
              question.correctAnswer
                ? "feedback correctFeedback"
                : "feedback wrongFeedback"
            }
          >
            <strong>
              {selectedAnswer ===
              question.correctAnswer
                ? "Correct!"
                : "Not quite."}
            </strong>

            <span>
              {" "}
              {question.explanation}
            </span>
          </div>
        )}

        {answered && (
          <button
            type="button"
            className="nextButton"
            onClick={handleNext}
          >
            {questionIndex ===
            questions.length - 1
              ? "See result →"
              : "Next question →"}
          </button>
        )}
      </section>

      <CheckpointStyles />
    </main>
  );
}

function MathFraction({
  top,
  bottom,
}: {
  top: ReactNode;
  bottom: ReactNode;
}) {
  return (
    <span className="mathFraction">
      <span className="fractionTop">{top}</span>
      <span className="fractionBottom">
        {bottom}
      </span>
    </span>
  );
}

function MathExpression({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="mathExpression">
      {children}
    </span>
  );
}

function CheckpointStyles() {
  return (
    <style jsx global>{`
      .checkpointPage {
        max-width: 1000px;
        width: calc(100% - 40px);
        margin: 42px auto 70px;
        color: #172033;
      }

      .checkpointPage .backButton {
        margin-bottom: 26px;
        padding: 0;
        border: none;
        background: transparent;
        color: #047857;
        font-size: 17px;
        font-weight: 800;
        cursor: pointer;
      }

      .checkpointHeader {
        margin-bottom: 28px;
      }

      .checkpointHeader .eyebrow,
      .questionNumber,
      .resultLabel {
        margin: 0 0 8px;
        color: #7c3aed;
        font-size: 15px;
        font-weight: 900;
        letter-spacing: 0.1em;
      }

      .checkpointHeader h1 {
        margin: 0 0 10px;
        font-size: clamp(38px, 6vw, 54px);
        line-height: 1.15;
      }

      .checkpointHeader > p:last-child {
        margin: 0;
        color: #64748b;
        font-size: 19px;
        line-height: 1.6;
      }

      .progressInformation {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 10px;
        color: #64748b;
        font-size: 15px;
        font-weight: 800;
      }

      .progressTrack {
        height: 12px;
        overflow: hidden;
        margin-bottom: 24px;
        border-radius: 999px;
        background: #ede9fe;
      }

      .progressBar {
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(
          90deg,
          #7c3aed,
          #4f46e5
        );
        transition: width 250ms ease;
      }

      .questionCard,
      .resultCard {
        padding: 34px;
        border: 1px solid #ddd6fe;
        border-radius: 26px;
        background: white;
        box-shadow:
          0 8px 24px rgba(76, 29, 149, 0.07);
      }

      .questionCard h2 {
        margin: 0;
        font-size: 29px;
        line-height: 1.35;
      }

      .formulaPanel {
        margin: 24px 0;
        padding: 26px;
        overflow-x: auto;
        border: 1px solid #c7d2fe;
        border-radius: 18px;
        background: #f8faff;
        text-align: center;
        font-family:
          Cambria Math, Times New Roman, serif;
        font-size: 30px;
        font-weight: 700;
      }

      .answerGrid {
        display: grid;
        gap: 14px;
        margin-top: 24px;
      }

      .answerButton {
        min-height: 76px;
        display: flex;
        align-items: center;
        gap: 18px;
        padding: 17px 20px;
        border: 2px solid #e2e8f0;
        border-radius: 16px;
        background: white;
        color: #172033;
        text-align: left;
        cursor: pointer;
      }

      .answerButton:hover:not(:disabled) {
        border-color: #818cf8;
        background: #f8faff;
      }

      .answerButton:disabled {
        cursor: default;
      }

      .answerLetter {
        width: 38px;
        height: 38px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 11px;
        background: #eef2ff;
        color: #4f46e5;
        font-size: 16px;
        font-weight: 900;
      }

      .answerContent {
        display: flex;
        align-items: center;
        gap: 8px;
        font-family:
          Cambria Math, Times New Roman, serif;
        font-size: 23px;
        font-weight: 700;
      }

      .selectedAnswer {
        border-color: #818cf8;
        background: #f5f3ff;
      }

      .answerButton.correctAnswer {
        border-color: #22c55e;
        background: #f0fdf4;
        color: #166534;
      }

      .answerButton.wrongAnswer {
        border-color: #ef4444;
        background: #fef2f2;
        color: #991b1b;
      }

      .feedback {
        margin-top: 20px;
        padding: 18px;
        border-radius: 14px;
        font-size: 16px;
        line-height: 1.65;
      }

      .correctFeedback {
        background: #dcfce7;
        color: #166534;
      }

      .wrongFeedback {
        background: #fee2e2;
        color: #991b1b;
      }

      .nextButton {
        width: 100%;
        margin-top: 18px;
        padding: 15px 22px;
        border: none;
        border-radius: 14px;
        background: #7c3aed;
        color: white;
        font-size: 17px;
        font-weight: 900;
        cursor: pointer;
      }

      .mathFraction {
        display: inline-flex;
        flex-direction: column;
        align-items: stretch;
        vertical-align: middle;
        text-align: center;
        line-height: 1.15;
      }

      .fractionTop {
        padding: 0 7px 5px;
        border-bottom: 2px solid currentColor;
      }

      .fractionBottom {
        padding: 5px 7px 0;
      }

      .mathExpression {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }

      .rootContent {
        display: inline-flex;
        padding-top: 3px;
        border-top: 2px solid currentColor;
      }

      .resultCard {
        text-align: center;
      }

      .resultCard h1 {
        margin: 6px 0;
        font-size: 58px;
      }

      .percentage {
        margin: 0 0 16px;
        color: #4f46e5;
        font-size: 22px;
        font-weight: 900;
      }

      .resultMessage {
        margin: 0 auto 24px;
        max-width: 650px;
        color: #64748b;
        font-size: 18px;
        line-height: 1.6;
      }

      .reviewBox,
      .allCorrectMessage {
        max-width: 650px;
        margin: 0 auto 24px;
        padding: 20px;
        border-radius: 16px;
        text-align: left;
      }

      .reviewBox {
        background: #fff7ed;
        color: #9a3412;
      }

      .reviewBox ul {
        margin: 12px 0 0;
        padding-left: 24px;
        line-height: 1.7;
      }

      .allCorrectMessage {
        background: #dcfce7;
        color: #166534;
        text-align: center;
        font-weight: 800;
      }

      .resultButtons {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(220px, 1fr));
        gap: 14px;
      }

      .largeButton,
      .returnButton {
        padding: 15px 20px;
        border-radius: 14px;
        font-size: 17px;
        font-weight: 900;
        cursor: pointer;
      }

      .largeButton {
        border: 2px solid #7c3aed;
        background: white;
        color: #7c3aed;
      }

      .returnButton {
        border: none;
        background: #059669;
        color: white;
      }

      @media (max-width: 640px) {
        .checkpointPage {
          width: calc(100% - 24px);
          margin-top: 28px;
        }

        .questionCard,
        .resultCard {
          padding: 22px;
        }

        .questionCard h2 {
          font-size: 25px;
        }

        .progressInformation {
          align-items: flex-start;
          flex-direction: column;
          gap: 4px;
        }

        .formulaPanel {
          font-size: 24px;
        }

        .answerContent {
          font-size: 20px;
        }
      }
    `}</style>
  );
}