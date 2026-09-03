"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type VisualKind =
  | "values"
  | "symbol"
  | "purpose"
  | "integer"
  | "place-value"
  | "decimal"
  | "direction"
  | "expression"
  | "groups"
  | "budget";

type CheckpointQuestion = {
  section: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  visual: VisualKind;
  visualLabel: string;
  visualText: string;
  visualNote?: string;
};

const questions: CheckpointQuestion[] = [
  {
    section: "Section 1 · Concept of Estimation",
    prompt: "Which statement contains an estimated value?",
    options: [
      "Exactly 406 tickets were sold.",
      "About 400 people attended.",
      "There are 28 chairs in the room.",
      "The ticket number is 12.",
    ],
    answer: 1,
    explanation: "The word ‘about’ shows that 400 is a sensible nearby value rather than an exact count. [Reference: estimated value]",
    visual: "values",
    visualLabel: "EXACT OR ESTIMATED?",
    visualText: "406     about 400",
  },
  {
    section: "Section 1 · Concept of Estimation",
    prompt: "Which symbol should replace the blank?",
    options: ["=", "≈", ">", "<"],
    answer: 1,
    explanation: "1,982 is close to 2,000 but is not exactly equal to it, so use ≈. [Reference: ≈ means approximately equal to]",
    visual: "symbol",
    visualLabel: "APPROXIMATE VALUE",
    visualText: "1,982  ___  2,000",
  },
  {
    section: "Section 1 · Concept of Estimation",
    prompt: "Why is estimation useful when checking a calculated answer?",
    options: [
      "It proves every digit is correct.",
      "It makes the exact answer larger.",
      "It shows whether the answer is reasonable.",
      "It removes the need to calculate.",
    ],
    answer: 2,
    explanation: "A quick estimate gives the expected size of the result and helps identify an unreasonable exact answer. [Reference: checking by estimation]",
    visual: "purpose",
    visualLabel: "ESTIMATE → COMPARE → CHECK",
    visualText: "Is the exact answer sensible?",
  },
  {
    section: "Section 2 · Estimation Strategies",
    prompt: "Round 286 to the nearest ten.",
    options: ["280", "286", "290", "300"],
    answer: 2,
    explanation: "The ones digit is 6, so increase the tens digit by 1: 286 ≈ 290. [Reference: rounding off]",
    visual: "integer",
    visualLabel: "NEAREST TEN",
    visualText: "286 ≈ ?",
  },
  {
    section: "Section 2 · Estimation Strategies",
    prompt: "Round 6,482 to the nearest hundred.",
    options: ["6,400", "6,480", "6,500", "7,000"],
    answer: 2,
    explanation: "The tens digit is 8, so increase the hundreds digit from 4 to 5: 6,482 ≈ 6,500. [Reference: rounding off]",
    visual: "place-value",
    visualLabel: "CHECK THE TENS DIGIT",
    visualText: "6,482",
    visualNote: "Target: hundreds",
  },
  {
    section: "Section 2 · Estimation Strategies",
    prompt: "Round 7.46 to 1 decimal place.",
    options: ["7.4", "7.5", "7.46", "8.0"],
    answer: 1,
    explanation: "The hundredths digit is 6, so the tenths digit increases from 4 to 5: 7.46 ≈ 7.5. [Reference: rounding off]",
    visual: "decimal",
    visualLabel: "1 DECIMAL PLACE",
    visualText: "7.46 ≈ ?",
  },
  {
    section: "Section 2 · Estimation Strategies",
    prompt: "Round 7.89 down to 1 decimal place.",
    options: ["7.8", "7.9", "8.0", "7.0"],
    answer: 0,
    explanation: "Rounding down replaces 7.89 by the next lower value at 1 decimal place, which is 7.8. [Reference: rounding down]",
    visual: "direction",
    visualLabel: "ROUND DOWN",
    visualText: "7.89  ↓  ?",
  },
  {
    section: "Section 2 · Estimation Strategies",
    prompt: "Round 12.31 up to 1 decimal place.",
    options: ["12.3", "12.4", "12.0", "13.0"],
    answer: 1,
    explanation: "Rounding up uses the next higher value at 1 decimal place, so 12.31 ≈ 12.4. [Reference: rounding up]",
    visual: "direction",
    visualLabel: "ROUND UP",
    visualText: "12.31  ↑  ?",
  },
  {
    section: "Section 2 · Estimation Strategies",
    prompt: "Estimate 38 + 61 + 82 by rounding each number to the nearest ten.",
    options: ["170", "180", "181", "190"],
    answer: 1,
    explanation: "38 ≈ 40, 61 ≈ 60 and 82 ≈ 80. Therefore, the estimated sum is 40 + 60 + 80 = 180. [Reference: rounding off]",
    visual: "expression",
    visualLabel: "ESTIMATE THE SUM",
    visualText: "38 + 61 + 82",
  },
  {
    section: "Section 2 · Estimation Strategies",
    prompt: "Estimate 6.74 + 3.29 by rounding each number down to 1 decimal place.",
    options: ["9.8", "9.9", "10.0", "10.1"],
    answer: 1,
    explanation: "6.74 rounds down to 6.7 and 3.29 rounds down to 3.2. Hence, 6.7 + 3.2 = 9.9. [Reference: rounding down]",
    visual: "expression",
    visualLabel: "ROUND EACH VALUE DOWN",
    visualText: "6.74 + 3.29",
    visualNote: "To 1 decimal place",
  },
  {
    section: "Section 2 · Estimation Strategies",
    prompt: "Ninety-eight cards are placed into complete packs of 12. Which strategy gives the number of complete packs?",
    options: ["Rounding off", "Rounding down", "Rounding up", "No estimation"],
    answer: 1,
    explanation: "98 ÷ 12 gives 8 complete packs with some cards left over. An incomplete pack is not counted, so round down. [Reference: rounding down]",
    visual: "groups",
    visualLabel: "COMPLETE PACKS ONLY",
    visualText: "98 cards ÷ 12 per pack",
  },
  {
    section: "Section 2 · Estimation Strategies",
    prompt: "Items cost £24, £31 and £46. Round each cost up to the next £10. What estimated budget is sufficient?",
    options: ["£100", "£110", "£120", "£130"],
    answer: 2,
    explanation: "£24 ≈ £30, £31 ≈ £40 and £46 ≈ £50 when rounding up. The estimated budget is £30 + £40 + £50 = £120. [Reference: rounding up]",
    visual: "budget",
    visualLabel: "ALLOW ENOUGH MONEY",
    visualText: "£24 + £31 + £46",
    visualNote: "Round up to the next £10",
  },
];

export default function ChapterElevenCheckpointPage() {
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
    if (optionIndex === question.answer) setScore((current) => current + 1);
  }

  function continueCheckpoint() {
    if (!answered) return;
    if (questionIndex === questions.length - 1) {
      setCompleted(true);
      return;
    }
    setQuestionIndex((current) => current + 1);
    setSelectedOption(null);
  }

  function restartCheckpoint() {
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setCompleted(false);
  }

  const finalPercentage = Math.round((score / questions.length) * 100);
  const resultMessage = finalPercentage >= 80
    ? "Excellent work — your Chapter 11 estimation skills are secure."
    : finalPercentage >= 60
      ? "Good progress — review the explanations and try once more."
      : "Keep practising — revisit Sections 1–2 before trying again.";

  return (
    <>
      {completed ? (
        <main className="resultPage">
          <section className="resultCard">
            <span className="resultIcon">✓</span>
            <p className="resultLabel">CHAPTER 11 CHECKPOINT COMPLETE</p>
            <h1>{score} / {questions.length}</h1>
            <div className="resultPercentage">{finalPercentage}%</div>
            <p className="resultMessage">{resultMessage}</p>
            <div className="resultActions">
              <button type="button" className="retryButton" onClick={restartCheckpoint}>Try again</button>
              <button type="button" className="returnButton" onClick={() => router.push("/maths/s1/chapter-11")}>Return to Chapter 11</button>
            </div>
          </section>
        </main>
      ) : (
        <main className="page">
          <button type="button" className="backButton" onClick={() => router.push("/maths/s1/chapter-11")}>← Back to Chapter 11</button>
          <div className="headerRow">
            <div>
              <p className="eyebrow">S1 · CHAPTER 11</p>
              <h1>Numerical Estimation Checkpoint</h1>
            </div>
            <div className="scoreBadge">Score: {score}</div>
          </div>

          <div className="progressHeader">
            <span>Question {questionIndex + 1} of {questions.length}</span>
            <span>{question.section}</span>
          </div>
          <div className="progressTrack">
            <div className="progressFill" style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }} />
          </div>

          <section className="questionCard">
            <p className="questionLabel">CHECKPOINT QUESTION</p>
            <h2>{question.prompt}</h2>
            <QuestionVisual question={question} />

            <div className="optionsGrid">
              {question.options.map((option, optionIndex) => {
                let className = "optionButton";
                if (answered && optionIndex === question.answer) className += " correctOption";
                else if (answered && optionIndex === selectedOption) className += " incorrectOption";
                return (
                  <button
                    type="button"
                    key={option}
                    className={className}
                    onClick={() => chooseAnswer(optionIndex)}
                    disabled={answered}
                  >
                    <span className="optionLetter">{String.fromCharCode(65 + optionIndex)}</span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className={selectedIsCorrect ? "feedback correctFeedback" : "feedback incorrectFeedback"} aria-live="polite">
                <strong>{selectedIsCorrect ? "Correct" : "Not quite"}</strong>
                <p>{question.explanation}</p>
              </div>
            )}

            <button type="button" className="continueButton" onClick={continueCheckpoint} disabled={!answered}>
              {questionIndex === questions.length - 1 ? "Finish Checkpoint" : "Next Question"} →
            </button>
          </section>
        </main>
      )}

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f4f7fb; color: #172033; }
        button { font: inherit; }
        .page { max-width: 940px; width: calc(100% - 48px); margin: 44px auto 72px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .backButton { margin-bottom: 25px; padding: 0; border: 0; background: transparent; color: #0369a1; font-size: 17px; font-weight: 800; cursor: pointer; }
        .headerRow { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
        .eyebrow, .questionLabel, .resultLabel, .visualLabel { font-size: 13px; font-weight: 900; letter-spacing: .1em; }
        .eyebrow { margin: 0 0 7px; color: #7c3aed; }
        h1 { max-width: 760px; margin: 0; font-size: clamp(34px, 5vw, 49px); line-height: 1.12; letter-spacing: -.035em; }
        .scoreBadge { flex-shrink: 0; padding: 11px 15px; border-radius: 999px; background: #e0f2fe; color: #0369a1; font-weight: 900; }
        .progressHeader { display: flex; justify-content: space-between; gap: 18px; margin-top: 30px; color: #64748b; font-size: 14px; font-weight: 800; }
        .progressHeader span:last-child { color: #7c3aed; text-align: right; }
        .progressTrack { height: 10px; margin-top: 10px; overflow: hidden; border-radius: 999px; background: #e2e8f0; }
        .progressFill { height: 100%; border-radius: inherit; background: linear-gradient(90deg, #0284c7, #7c3aed); transition: width .25s ease; }
        .questionCard { margin-top: 20px; padding: 30px; border: 1px solid #c4b5fd; border-radius: 24px; background: white; box-shadow: 0 10px 30px rgba(15,23,42,.07); }
        .questionLabel { margin: 0 0 8px; color: #7c3aed; }
        .questionCard h2 { margin: 0; font-size: clamp(22px, 3.4vw, 29px); line-height: 1.4; }
        .questionVisual { min-height: 176px; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 20px 0 4px; padding: 24px; border: 1px solid #dce7f2; border-radius: 18px; background: linear-gradient(135deg, #f0f9ff, #faf5ff); text-align: center; }
        .visualLabel { margin: 0 0 15px; color: #0369a1; }
        .visualText { color: #0f766e; font: 900 clamp(28px, 5vw, 45px) Georgia, "Times New Roman", serif; white-space: pre-wrap; }
        .visualNote { margin: 13px 0 0; color: #6d28d9; font-weight: 850; }
        .place-value .visualText { padding: 4px 18px 9px; border-bottom: 7px solid #7c3aed; }
        .direction .visualText { color: #6d28d9; }
        .budget .visualText { color: #b45309; }
        .groups .visualText { font-size: clamp(25px, 4.5vw, 39px); }
        .optionsGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; margin-top: 22px; }
        .optionButton { min-height: 76px; display: flex; align-items: center; gap: 13px; padding: 14px; border: 2px solid #e2e8f0; border-radius: 15px; background: #f8fafc; color: #172033; font-size: 16px; font-weight: 800; text-align: left; cursor: pointer; }
        .optionButton:not(:disabled):hover { border-color: #c4b5fd; background: #f5f3ff; }
        .optionButton:disabled { cursor: default; }
        .optionLetter { width: 35px; height: 35px; flex: 0 0 35px; display: grid; place-items: center; border-radius: 10px; background: #ede9fe; color: #6d28d9; font-weight: 900; }
        .correctOption { border-color: #10b981; background: #ecfdf5; color: #065f46; }
        .incorrectOption { border-color: #fb7185; background: #fff1f2; color: #9f1239; }
        .feedback { margin-top: 20px; padding: 17px; border-radius: 15px; }
        .feedback strong { display: block; margin-bottom: 5px; font-size: 18px; }
        .feedback p { margin: 0; line-height: 1.55; }
        .correctFeedback { background: #d1fae5; color: #065f46; }
        .incorrectFeedback { background: #fff1f2; color: #9f1239; }
        .continueButton { width: 100%; margin-top: 18px; padding: 16px 20px; border: 0; border-radius: 14px; background: #7c3aed; color: white; font-weight: 900; cursor: pointer; }
        .continueButton:disabled { background: #cbd5e1; cursor: not-allowed; }
        .resultPage { min-height: 100vh; display: grid; place-items: center; padding: 30px; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
        .resultCard { width: min(620px,100%); padding: 42px; text-align: center; border: 1px solid #c4b5fd; border-radius: 28px; background: white; box-shadow: 0 16px 45px rgba(15,23,42,.09); }
        .resultIcon { width: 70px; height: 70px; display: grid; place-items: center; margin: 0 auto 18px; border-radius: 22px; background: #ccfbf1; color: #0f766e; font-size: 35px; font-weight: 900; }
        .resultLabel { color: #7c3aed; }
        .resultCard h1 { margin: 12px auto 0; font-size: 58px; }
        .resultPercentage { color: #0369a1; font-size: 32px; font-weight: 900; }
        .resultMessage { color: #52677f; font-size: 18px; line-height: 1.55; }
        .resultActions { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 24px; }
        .retryButton, .returnButton { padding: 15px; border-radius: 14px; font-weight: 900; cursor: pointer; }
        .retryButton { border: 2px solid #7c3aed; background: white; color: #6d28d9; }
        .returnButton { border: 2px solid #0369a1; background: #0369a1; color: white; }
        @media (max-width: 620px) {
          .page { width: calc(100% - 30px); margin-top: 25px; }
          .headerRow { display: block; }
          .scoreBadge { display: inline-block; margin-top: 15px; }
          .progressHeader { display: grid; }
          .progressHeader span:last-child { text-align: left; }
          .questionCard { padding: 20px 16px; }
          .questionVisual { min-height: 145px; padding: 18px 12px; }
          .optionsGrid, .resultActions { grid-template-columns: 1fr; }
          .resultCard { padding: 30px 20px; }
        }
      `}</style>
    </>
  );
}

function QuestionVisual({ question }: { question: CheckpointQuestion }) {
  return (
    <div className={`questionVisual ${question.visual}`} aria-label={`${question.visualLabel}: ${question.visualText}`}>
      <p className="visualLabel">{question.visualLabel}</p>
      <div className="visualText">{question.visualText}</div>
      {question.visualNote && <p className="visualNote">{question.visualNote}</p>}
    </div>
  );
}
