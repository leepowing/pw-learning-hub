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
    section: "Section 1 · Basic Concepts of Algebra",
    prompt: "Which expression means “subtract 3 from the product of 4 and x”?",
    options: ["4x − 3", "4(x − 3)", "3 − 4x", "4x + 3"],
    answer: 0,
    explanation:
      "The product of 4 and x is 4x. Subtracting 3 from that product gives 4x − 3.",
  },
  {
    section: "Section 1 · Basic Concepts of Algebra",
    prompt: "Which is an algebraic expression?",
    options: ["3x − 1", "3 + 7 = 10", "12 > 5", "8 ÷ 2 = 4"],
    answer: 0,
    explanation:
      "3x − 1 contains a letter and operations but no equality or inequality sign, so it is an algebraic expression.",
  },
  {
    section: "Section 1 · Basic Concepts of Algebra",
    prompt: "Ten notebooks cost £p each. Which expression gives their total cost?",
    options: ["p + 10", "10 − p", "10p", "p/10"],
    answer: 2,
    explanation:
      "Multiply the number of notebooks by the price of each notebook: 10 × p = 10p.",
  },
  {
    section: "Section 1 · Basic Concepts of Algebra",
    prompt: "Which is the standard algebraic form of a × a × b × 3?",
    options: ["aa3b", "3a²b", "3ab²", "a²b + 3"],
    answer: 1,
    explanation:
      "Write the number first, use an index for the repeated factor a, and then write b: 3a²b.",
  },
  {
    section: "Section 2 · Understanding Algebraic Expressions",
    prompt: "How many terms are in 2x − 3 + 5x − 7?",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation:
      "The terms, including their signs, are 2x, −3, 5x and −7. Therefore, there are four terms.",
  },
  {
    section: "Section 2 · Understanding Algebraic Expressions",
    prompt: "Which pair consists of like terms?",
    options: ["3a and 3b", "4x and 4x²", "3a² and −5a²", "2xy and 2x"],
    answer: 2,
    explanation:
      "3a² and −5a² have exactly the same letter part and indices, so they are like terms.",
  },
  {
    section: "Section 2 · Understanding Algebraic Expressions",
    prompt: "Simplify 2x − 3 + 5x − 7.",
    options: ["7x − 10", "7x + 10", "3x − 4", "7x − 4"],
    answer: 0,
    explanation:
      "Combine 2x and 5x to get 7x, and combine −3 and −7 to get −10. The result is 7x − 10.",
  },
  {
    section: "Section 2 · Understanding Algebraic Expressions",
    prompt: "Find 2a² − 3b when a = −2 and b = 4.",
    options: ["−20", "−4", "4", "20"],
    answer: 1,
    explanation:
      "Substitute using brackets: 2(−2)² − 3(4) = 2(4) − 12 = 8 − 12 = −4.",
  },
  {
    section: "Section 3 · Linear Equations in One Unknown",
    prompt: "Solve 2x + 7 = 25.",
    options: ["x = 7", "x = 9", "x = 11", "x = 16"],
    answer: 1,
    explanation:
      "Subtract 7 from both sides to get 2x = 18, then divide by 2. Therefore, x = 9.",
  },
  {
    section: "Section 3 · Linear Equations in One Unknown",
    prompt: "Solve 5 − 4y = 17.",
    options: ["y = −3", "y = −2", "y = 3", "y = 5.5"],
    answer: 0,
    explanation:
      "Subtract 5 from both sides: −4y = 12. Divide by −4 to obtain y = −3.",
  },
  {
    section: "Section 3 · Linear Equations in One Unknown",
    prompt: "Solve 7(m + 3) = 14.",
    options: ["m = −5", "m = −1", "m = 1", "m = 5"],
    answer: 1,
    explanation:
      "Divide both sides by 7: m + 3 = 2. Subtract 3 to obtain m = −1.",
  },
  {
    section: "Section 3 · Linear Equations in One Unknown",
    prompt: "Solve 4(p − 9) = 7p.",
    options: ["p = −12", "p = −3", "p = 3", "p = 12"],
    answer: 0,
    explanation:
      "Expand: 4p − 36 = 7p. Move 4p to the right: −36 = 3p. Therefore, p = −12.",
  },
  {
    section: "Section 4 · Formulating Equations to Solve Problems",
    prompt: "The sum of two consecutive even numbers is 26. What is the smaller number?",
    options: ["10", "12", "13", "14"],
    answer: 1,
    explanation:
      "Let x be the smaller number. Then x + (x + 2) = 26, so 2x = 24 and x = 12.",
  },
  {
    section: "Section 4 · Formulating Equations to Solve Problems",
    prompt: "Martin is 3 years more than twice Michelle’s age. Michelle is 10 years younger than Martin. How old is Michelle?",
    options: ["5", "7", "10", "13"],
    answer: 1,
    explanation:
      "Let Michelle be y. Martin is 2y + 3, and (2y + 3) − y = 10. Thus y + 3 = 10 and y = 7.",
  },
  {
    section: "Section 4 · Formulating Equations to Solve Problems",
    prompt: "A pen costs £x. A notebook costs £2 more. Together they cost £10. What is the price of the pen?",
    options: ["£3", "£4", "£5", "£6"],
    answer: 1,
    explanation:
      "Form x + (x + 2) = 10. Then 2x = 8, so x = 4. The pen costs £4.",
  },
  {
    section: "Section 4 · Formulating Equations to Solve Problems",
    prompt: "A rectangle has width x cm and length (x + 3) cm. Its perimeter is 30 cm. What is its width?",
    options: ["5 cm", "6 cm", "7 cm", "9 cm"],
    answer: 1,
    explanation:
      "Use 2x + 2(x + 3) = 30. This gives 4x + 6 = 30, so 4x = 24 and x = 6 cm.",
  },
];

export default function ChapterThreeCheckpointPage() {
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
        ? "Excellent work — your basic-algebra foundations are secure."
        : finalPercentage >= 60
          ? "Good progress — review the explanations and try once more."
          : "Keep practising — revisit the four sections before trying again.";

    return (
      <main className="resultPage">
        <section className="resultCard">
          <span className="resultIcon">✓</span>
          <p className="resultLabel">CHAPTER 3 CHECKPOINT COMPLETE</p>
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
              onClick={() => router.push("/maths/s1/chapter-3")}
            >
              Return to Chapter 3
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
        onClick={() => router.push("/maths/s1/chapter-3")}
      >
        ← Back to Chapter 3
      </button>

      <div className="headerRow">
        <div>
          <p className="eyebrow">S1 · CHAPTER 3</p>
          <h1>Basic Algebra (I) Checkpoint</h1>
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
                key={option}
                type="button"
                className={className}
                onClick={() => chooseAnswer(optionIndex)}
                disabled={answered}
              >
                <span className="optionLetter">
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={selectedIsCorrect ? "feedback correctFeedback" : "feedback incorrectFeedback"}>
            <strong>{selectedIsCorrect ? "Correct!" : "Not quite."}</strong>
            <span>{question.explanation}</span>
          </div>
        )}

        <div className="questionFooter">
          <span>{answered ? "Explanation shown above" : "Choose one answer"}</span>
          <button
            type="button"
            className="continueButton"
            onClick={continueCheckpoint}
            disabled={!answered}
          >
            {questionIndex === questions.length - 1 ? "See result →" : "Next question →"}
          </button>
        </div>
      </section>

      <section className="coverageCard">
        <p>CHECKPOINT COVERAGE</p>
        <div>
          <span>Basic Concepts of Algebra</span>
          <span>Understanding Algebraic Expressions</span>
          <span>Linear Equations in One Unknown</span>
          <span>Formulating Equations to Solve Problems</span>
        </div>
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
          margin-bottom: 26px;
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
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #e11d48;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        h1 {
          margin: 0;
          font-size: clamp(35px, 5vw, 50px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .scoreBadge {
          flex-shrink: 0;
          padding: 11px 16px;
          border-radius: 999px;
          background: #ecfdf5;
          color: #047857;
          font-weight: 900;
        }

        .progressHeader {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 30px;
          color: #64748b;
          font-size: 14px;
          font-weight: 800;
        }

        .progressTrack {
          height: 11px;
          margin-top: 9px;
          overflow: hidden;
          border-radius: 999px;
          background: #e2e8f0;
        }

        .progressFill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4f46e5, #10b981);
          transition: width 0.25s ease;
        }

        .questionCard {
          margin-top: 20px;
          padding: 31px;
          border: 1px solid #c7d2fe;
          border-radius: 25px;
          background: linear-gradient(145deg, #f8faff, #ffffff);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
        }

        .questionLabel {
          margin: 0 0 8px;
          color: #4f46e5;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .questionCard h2 {
          margin: 0;
          font-size: clamp(25px, 4vw, 32px);
          line-height: 1.35;
        }

        .optionsGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
          margin-top: 25px;
        }

        .optionButton {
          min-height: 74px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px;
          border: 2px solid #dbe3ef;
          border-radius: 16px;
          background: white;
          color: #172033;
          font-size: 16px;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
        }

        .optionButton:not(:disabled):hover {
          border-color: #818cf8;
          transform: translateY(-1px);
        }

        .optionButton:disabled { cursor: default; }

        .optionLetter {
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #eef2ff;
          color: #4f46e5;
          font-weight: 900;
        }

        .correctOption {
          border-color: #10b981;
          background: #ecfdf5;
          color: #047857;
        }

        .correctOption .optionLetter {
          background: #10b981;
          color: white;
        }

        .incorrectOption {
          border-color: #fb7185;
          background: #fff1f2;
          color: #be123c;
        }

        .incorrectOption .optionLetter {
          background: #fb7185;
          color: white;
        }

        .feedback {
          display: grid;
          gap: 5px;
          margin-top: 17px;
          padding: 16px 18px;
          border-radius: 15px;
          line-height: 1.55;
        }

        .correctFeedback { background: #d1fae5; color: #065f46; }
        .incorrectFeedback { background: #ffe4e6; color: #9f1239; }

        .questionFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-top: 22px;
        }

        .questionFooter > span {
          color: #94a3b8;
          font-size: 14px;
        }

        .continueButton {
          padding: 13px 19px;
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

        .coverageCard {
          margin-top: 18px;
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          background: #f8fafc;
        }

        .coverageCard p {
          margin: 0 0 12px;
          color: #64748b;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.09em;
        }

        .coverageCard div {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .coverageCard span {
          padding: 7px 10px;
          border-radius: 999px;
          background: white;
          color: #475569;
          font-size: 13px;
          font-weight: 700;
        }

        @media (max-width: 650px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .headerRow { align-items: flex-start; }
          .scoreBadge { margin-top: 2px; }
          .progressHeader { align-items: flex-start; flex-direction: column; gap: 5px; }
          .questionCard { padding: 22px; border-radius: 20px; }
          .optionsGrid { grid-template-columns: 1fr; }
          .questionFooter { align-items: stretch; flex-direction: column; }
          .continueButton { width: 100%; }
        }

        @media (max-width: 430px) {
          .headerRow { flex-direction: column; }
          .scoreBadge { align-self: flex-start; }
        }
      `}</style>
    </main>
  );
}
