"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import katex from "katex";

type Topic =
  | "Meaning of Identities"
  | "Difference of Two Squares"
  | "Perfect Square Identities";

type QuizOption = {
  expression: string;
};

type QuizQuestion = {
  id: number;
  topic: Topic;
  prompt: string;
  formula?: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
};

function MathFormula({
  expression,
  displayMode = true,
}: {
  expression: string;
  displayMode?: boolean;
}) {
  return (
    <span
      className={displayMode ? "mathDisplay" : "mathInline"}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expression, {
          throwOnError: false,
          displayMode,
        }),
      }}
    />
  );
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    topic: "Meaning of Identities",
    prompt:
      "Which statement is an identity that is true for every value of x?",
    options: [
      {
        expression: String.raw`3(x+2)\equiv3x+6`,
      },
      {
        expression: String.raw`x+4\equiv9`,
      },
      {
        expression: String.raw`2x\equiv10`,
      },
      {
        expression: String.raw`x^2\equiv x`,
      },
    ],
    correctIndex: 0,
    explanation:
      "Expanding 3(x + 2) gives 3x + 6 for every value of x.",
  },
  {
    id: 2,
    topic: "Meaning of Identities",
    prompt:
      "Which symbol is commonly used to show that two expressions are identically equal?",
    options: [
      {
        expression: String.raw`=`,
      },
      {
        expression: String.raw`\equiv`,
      },
      {
        expression: String.raw`\approx`,
      },
      {
        expression: String.raw`\ne`,
      },
    ],
    correctIndex: 1,
    explanation:
      "The symbol ≡ indicates an identity that is true for every permitted value of the variable.",
  },
  {
    id: 3,
    topic: "Meaning of Identities",
    prompt: "Simplify the expression.",
    formula: String.raw`5(x-1)+2x`,
    options: [
      {
        expression: String.raw`7x+5`,
      },
      {
        expression: String.raw`5x-5`,
      },
      {
        expression: String.raw`7x-5`,
      },
      {
        expression: String.raw`7x-1`,
      },
    ],
    correctIndex: 2,
    explanation:
      "5(x − 1) + 2x = 5x − 5 + 2x = 7x − 5.",
  },
  {
    id: 4,
    topic: "Meaning of Identities",
    prompt:
      "Find the values of A and B that make the identity true.",
    formula: String.raw`
      x(4x+3)\equiv Ax^2+Bx
    `,
    options: [
      {
        expression: String.raw`A=3,\quad B=4`,
      },
      {
        expression: String.raw`A=4,\quad B=-3`,
      },
      {
        expression: String.raw`A=-4,\quad B=3`,
      },
      {
        expression: String.raw`A=4,\quad B=3`,
      },
    ],
    correctIndex: 3,
    explanation:
      "Expanding the left-hand side gives 4x² + 3x, so A = 4 and B = 3.",
  },
  {
    id: 5,
    topic: "Difference of Two Squares",
    prompt: "Expand the expression.",
    formula: String.raw`
      (x+6)(x-6)
    `,
    options: [
      {
        expression: String.raw`x^2-12x+36`,
      },
      {
        expression: String.raw`x^2-36`,
      },
      {
        expression: String.raw`x^2+36`,
      },
      {
        expression: String.raw`x^2-6`,
      },
    ],
    correctIndex: 1,
    explanation:
      "Using (a + b)(a − b) = a² − b² gives x² − 6² = x² − 36.",
  },
  {
    id: 6,
    topic: "Difference of Two Squares",
    prompt: "Factorise completely.",
    formula: String.raw`
      9a^2-25
    `,
    options: [
      {
        expression: String.raw`(9a+5)(a-5)`,
      },
      {
        expression: String.raw`(3a-5)^2`,
      },
      {
        expression: String.raw`(3a+5)(3a-5)`,
      },
      {
        expression: String.raw`(9a+25)(a-1)`,
      },
    ],
    correctIndex: 2,
    explanation:
      "9a² = (3a)² and 25 = 5², so the factorisation is (3a + 5)(3a − 5).",
  },
  {
    id: 7,
    topic: "Difference of Two Squares",
    prompt:
      "Use the difference-of-two-squares identity to calculate the value.",
    formula: String.raw`
      52\times48
    `,
    options: [
      {
        expression: String.raw`2496`,
      },
      {
        expression: String.raw`2504`,
      },
      {
        expression: String.raw`2400`,
      },
      {
        expression: String.raw`2600`,
      },
    ],
    correctIndex: 0,
    explanation:
      "52 × 48 = (50 + 2)(50 − 2) = 50² − 2² = 2500 − 4 = 2496.",
  },
  {
    id: 8,
    topic: "Difference of Two Squares",
    prompt:
      "Which expression is not a difference of two squares?",
    options: [
      {
        expression: String.raw`x^2-16`,
      },
      {
        expression: String.raw`25a^2-9`,
      },
      {
        expression: String.raw`4p^2-49q^2`,
      },
      {
        expression: String.raw`x^2+16`,
      },
    ],
    correctIndex: 3,
    explanation:
      "x² + 16 is a sum of two squares. The difference-of-two-squares identity requires subtraction.",
  },
  {
    id: 9,
    topic: "Perfect Square Identities",
    prompt: "Expand the expression.",
    formula: String.raw`
      (x+5)^2
    `,
    options: [
      {
        expression: String.raw`x^2+25`,
      },
      {
        expression: String.raw`x^2+5x+25`,
      },
      {
        expression: String.raw`x^2+10x+25`,
      },
      {
        expression: String.raw`x^2-10x+25`,
      },
    ],
    correctIndex: 2,
    explanation:
      "Using (a + b)² = a² + 2ab + b² gives x² + 2(x)(5) + 25 = x² + 10x + 25.",
  },
  {
    id: 10,
    topic: "Perfect Square Identities",
    prompt: "Expand the expression.",
    formula: String.raw`
      (3y-2)^2
    `,
    options: [
      {
        expression: String.raw`9y^2-4`,
      },
      {
        expression: String.raw`9y^2-12y+4`,
      },
      {
        expression: String.raw`9y^2+12y+4`,
      },
      {
        expression: String.raw`3y^2-12y+4`,
      },
    ],
    correctIndex: 1,
    explanation:
      "Using (a − b)² = a² − 2ab + b² gives 9y² − 12y + 4.",
  },
  {
    id: 11,
    topic: "Perfect Square Identities",
    prompt: "Factorise completely.",
    formula: String.raw`
      x^2-14x+49
    `,
    options: [
      {
        expression: String.raw`(x+7)^2`,
      },
      {
        expression: String.raw`(x-49)(x-1)`,
      },
      {
        expression: String.raw`(x-14)^2`,
      },
      {
        expression: String.raw`(x-7)^2`,
      },
    ],
    correctIndex: 3,
    explanation:
      "49 = 7² and −14x = −2(x)(7), so the expression is (x − 7)².",
  },
  {
    id: 12,
    topic: "Perfect Square Identities",
    prompt: "Factorise completely.",
    formula: String.raw`
      4p^2+20p+25
    `,
    options: [
      {
        expression: String.raw`(2p+5)^2`,
      },
      {
        expression: String.raw`(2p-5)^2`,
      },
      {
        expression: String.raw`(4p+5)^2`,
      },
      {
        expression: String.raw`(2p+25)(2p+1)`,
      },
    ],
    correctIndex: 0,
    explanation:
      "4p² = (2p)², 25 = 5² and 20p = 2(2p)(5), so the expression is (2p + 5)².",
  },
];

const topicRoutes: Record<Topic, string> = {
  "Meaning of Identities":
    "/maths/s2/chapter-3/meaning-of-identities",
  "Difference of Two Squares":
    "/maths/s2/chapter-3/difference-of-two-squares",
  "Perfect Square Identities":
    "/maths/s2/chapter-3/perfect-square-identities",
};

export default function ChapterThreeCheckpointPage() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<number, number>
  >({});
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedIndex = answers[currentIndex];
  const hasAnswered = selectedIndex !== undefined;
  const isCorrect =
    hasAnswered &&
    selectedIndex === currentQuestion.correctIndex;

  const score = useMemo(
    () =>
      questions.reduce((total, question, index) => {
        return (
          total +
          (answers[index] === question.correctIndex ? 1 : 0)
        );
      }, 0),
    [answers]
  );

  const reviewTopics = useMemo(() => {
    const topics = questions
      .filter(
        (question, index) =>
          answers[index] !== question.correctIndex
      )
      .map((question) => question.topic);

    return Array.from(new Set(topics));
  }, [answers]);

  function selectAnswer(optionIndex: number) {
    if (hasAnswered) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [currentIndex]: optionIndex,
    }));
  }

  function goToNextQuestion() {
    if (!hasAnswered) {
      return;
    }

    if (currentIndex === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((previous) => previous + 1);
  }

  function restartCheckpoint() {
    setAnswers({});
    setCurrentIndex(0);
    setFinished(false);
  }

  function getResultMessage() {
    if (score === questions.length) {
      return "Excellent — every answer is correct.";
    }

    if (score >= 10) {
      return "Very good work. Review the topics shown below.";
    }

    if (score >= 7) {
      return "Good progress. Review your weaker topics and try again.";
    }

    return "Keep practising. Review the three sections before trying again.";
  }

  if (finished) {
    return (
      <main className="page">
        <button
          type="button"
          className="backButton"
          onClick={() =>
            router.push("/maths/s2/chapter-3")
          }
        >
          ← Back to Chapter 3
        </button>

        <section className="resultCard">
          <p className="eyebrow">CHECKPOINT RESULT</p>

          <h1>
            {score} / {questions.length}
          </h1>

          <p className="resultMessage">
            {getResultMessage()}
          </p>

          <div className="scoreBar">
            <div
              className="scoreBarFill"
              style={{
                width: `${
                  (score / questions.length) * 100
                }%`,
              }}
            />
          </div>

          <p className="percentage">
            {Math.round(
              (score / questions.length) * 100
            )}
            %
          </p>

          {reviewTopics.length === 0 ? (
            <div className="perfectResult">
              <strong>All topics mastered</strong>

              <p>
                You answered every checkpoint question
                correctly.
              </p>
            </div>
          ) : (
            <div className="reviewBox">
              <h2>Topics to review</h2>

              <div className="reviewGrid">
                {reviewTopics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() =>
                      router.push(topicRoutes[topic])
                    }
                  >
                    <span>{topic}</span>
                    <strong>Review →</strong>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="resultActions">
            <button
              type="button"
              className="secondaryButton"
              onClick={restartCheckpoint}
            >
              Try again
            </button>

            <button
              type="button"
              className="primaryButton"
              onClick={() =>
                router.push("/maths/s2/chapter-3")
              }
            >
              Return to Chapter 3 →
            </button>
          </div>
        </section>

        <style jsx>{pageStyles}</style>
      </main>
    );
  }

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s2/chapter-3")}
      >
        ← Back to Chapter 3
      </button>

      <header className="pageHeader">
        <p className="eyebrow">
          S2 MATHEMATICS · CHAPTER 3
        </p>

        <h1>Identities Checkpoint</h1>

        <p>
          Answer all 12 questions covering the three sections
          in this chapter.
        </p>
      </header>

      <section className="progressSection">
        <div className="progressText">
          <span>
            Question {currentIndex + 1} of{" "}
            {questions.length}
          </span>

          <span>{currentQuestion.topic}</span>
        </div>

        <div className="progressBar">
          <div
            className="progressBarFill"
            style={{
              width: `${
                ((currentIndex + 1) /
                  questions.length) *
                100
              }%`,
            }}
          />
        </div>
      </section>

      <section className="questionCard">
        <p className="questionNumber">
          QUESTION {currentQuestion.id}
        </p>

        <h2>{currentQuestion.prompt}</h2>

        {currentQuestion.formula && (
          <div className="questionFormula">
            <MathFormula
              expression={currentQuestion.formula}
            />
          </div>
        )}

        <div className="optionGrid">
          {currentQuestion.options.map(
            (option, optionIndex) => {
              const selected =
                selectedIndex === optionIndex;
              const correct =
                optionIndex ===
                currentQuestion.correctIndex;

              let className = "optionButton";

              if (hasAnswered && correct) {
                className += " correctOption";
              }

              if (
                hasAnswered &&
                selected &&
                !correct
              ) {
                className += " incorrectOption";
              }

              return (
                <button
                  key={option.expression}
                  type="button"
                  className={className}
                  disabled={hasAnswered}
                  onClick={() =>
                    selectAnswer(optionIndex)
                  }
                >
                  <span className="optionLetter">
                    {String.fromCharCode(
                      65 + optionIndex
                    )}
                  </span>

                  <MathFormula
                    expression={option.expression}
                    displayMode={false}
                  />
                </button>
              );
            }
          )}
        </div>

        {hasAnswered && (
          <div
            className={
              isCorrect
                ? "feedback correctFeedback"
                : "feedback incorrectFeedback"
            }
          >
            <strong>
              {isCorrect
                ? "Correct."
                : "Not quite."}
            </strong>

            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        <button
          type="button"
          className="nextButton"
          disabled={!hasAnswered}
          onClick={goToNextQuestion}
        >
          {currentIndex === questions.length - 1
            ? "See my result →"
            : "Next question →"}
        </button>
      </section>

      <style jsx>{pageStyles}</style>
    </main>
  );
}

const pageStyles = `
  .page {
    max-width: 1000px;
    width: calc(100% - 40px);
    margin: 42px auto 70px;
  }

  .backButton {
    border: none;
    background: transparent;
    padding: 0;
    margin-bottom: 26px;
    color: #047857;
    font-size: 17px;
    font-weight: 800;
    cursor: pointer;
  }

  .pageHeader {
    margin-bottom: 28px;
  }

  .eyebrow,
  .questionNumber {
    margin: 0 0 8px;
    color: #4f46e5;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 1.3px;
  }

  .pageHeader h1 {
    margin: 0 0 10px;
    font-size: clamp(38px, 6vw, 52px);
  }

  .pageHeader > p:last-child {
    margin: 0;
    color: #64748b;
    font-size: 18px;
    line-height: 1.6;
  }

  .progressSection {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #c7d2fe;
    border-radius: 18px;
    background: #eef2ff;
  }

  .progressText {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 12px;
    color: #4338ca;
    font-weight: 800;
  }

  .progressBar,
  .scoreBar {
    height: 12px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
  }

  .progressBarFill,
  .scoreBarFill {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      #4f46e5,
      #7c3aed
    );
    transition: width 0.3s ease;
  }

  .questionCard,
  .resultCard {
    padding: 32px;
    border: 1px solid #e2e8f0;
    border-radius: 24px;
    background: white;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  }

  .questionCard h2 {
    margin: 0 0 18px;
    font-size: 27px;
    line-height: 1.4;
  }

  .questionFormula {
    margin: 15px 0 24px;
    padding: 18px;
    border-radius: 17px;
    background: #f8fafc;
    text-align: center;
  }

  .optionGrid {
    display: grid;
    gap: 12px;
  }

  .optionButton {
    width: 100%;
    min-height: 70px;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 15px 18px;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    background: white;
    color: #0f172a;
    font-size: 17px;
    font-weight: 800;
    text-align: left;
    cursor: pointer;
  }

  .optionButton:not(:disabled):hover {
    border-color: #6366f1;
    background: #eef2ff;
  }

  .optionButton:disabled {
    cursor: default;
  }

  .optionLetter {
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 12px;
    background: #eef2ff;
    color: #4338ca;
    font-weight: 900;
  }

  .correctOption {
    border-color: #16a34a;
    background: #f0fdf4;
  }

  .correctOption .optionLetter {
    background: #16a34a;
    color: white;
  }

  .incorrectOption {
    border-color: #dc2626;
    background: #fef2f2;
  }

  .incorrectOption .optionLetter {
    background: #dc2626;
    color: white;
  }

  .feedback {
    margin-top: 20px;
    padding: 18px;
    border-radius: 16px;
    line-height: 1.6;
  }

  .feedback p {
    margin: 5px 0 0;
  }

  .correctFeedback {
    border: 1px solid #86efac;
    background: #dcfce7;
    color: #166534;
  }

  .incorrectFeedback {
    border: 1px solid #fca5a5;
    background: #fee2e2;
    color: #991b1b;
  }

  .nextButton {
    width: 100%;
    margin-top: 22px;
    padding: 16px 20px;
    border: none;
    border-radius: 15px;
    background: #4f46e5;
    color: white;
    font-size: 17px;
    font-weight: 900;
    cursor: pointer;
  }

  .nextButton:disabled {
    background: #cbd5e1;
    color: #64748b;
    cursor: not-allowed;
  }

  .resultCard {
    text-align: center;
    border-color: #c7d2fe;
    background: linear-gradient(
      135deg,
      #fafaff,
      #f5f3ff
    );
  }

  .resultCard h1 {
    margin: 5px 0 10px;
    color: #312e81;
    font-size: clamp(50px, 9vw, 76px);
  }

  .resultMessage {
    margin: 0 0 22px;
    color: #475569;
    font-size: 18px;
  }

  .scoreBar {
    max-width: 620px;
    margin: 0 auto;
  }

  .percentage {
    margin: 9px 0 25px;
    color: #4f46e5;
    font-size: 20px;
    font-weight: 900;
  }

  .reviewBox,
  .perfectResult {
    margin-top: 22px;
    padding: 24px;
    border-radius: 19px;
    text-align: left;
  }

  .reviewBox {
    border: 1px solid #fed7aa;
    background: #fff7ed;
  }

  .reviewBox h2 {
    margin: 0 0 15px;
    color: #9a3412;
  }

  .reviewGrid {
    display: grid;
    gap: 10px;
  }

  .reviewGrid button {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 15px;
    border: 1px solid #fdba74;
    border-radius: 13px;
    background: white;
    color: #7c2d12;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
  }

  .perfectResult {
    border: 1px solid #86efac;
    background: #dcfce7;
    color: #166534;
    text-align: center;
  }

  .perfectResult strong {
    font-size: 21px;
  }

  .perfectResult p {
    margin: 7px 0 0;
  }

  .resultActions {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(220px, 1fr)
    );
    gap: 12px;
    margin-top: 24px;
  }

  .primaryButton,
  .secondaryButton {
    padding: 15px 20px;
    border-radius: 14px;
    font-size: 17px;
    font-weight: 900;
    cursor: pointer;
  }

  .primaryButton {
    border: none;
    background: #059669;
    color: white;
  }

  .secondaryButton {
    border: 2px solid #4f46e5;
    background: white;
    color: #4338ca;
  }

  :global(.mathDisplay) {
    display: block;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 5px 0;
    font-size: 1.08rem;
  }

  :global(.mathInline) {
    display: inline-block;
  }

  @media (max-width: 640px) {
    .page {
      width: calc(100% - 24px);
      margin-top: 26px;
    }

    .questionCard,
    .resultCard {
      padding: 21px;
      border-radius: 19px;
    }

    .progressText {
      flex-direction: column;
      gap: 4px;
    }

    .questionCard h2 {
      font-size: 23px;
    }

    .optionButton {
      gap: 12px;
      padding: 13px;
    }

    :global(.mathDisplay) {
      font-size: 0.94rem;
    }
  }
`;