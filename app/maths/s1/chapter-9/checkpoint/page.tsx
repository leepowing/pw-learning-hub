"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type DiagramKind =
  | "straight-line"
  | "vertically-opposite"
  | "angles-at-point"
  | "four-at-point"
  | "corresponding"
  | "alternate"
  | "same-side"
  | "converse"
  | "triangle"
  | "exterior"
  | "exterior-adjacent"
  | "triangle-algebra";

type CheckpointQuestion = {
  section: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  diagram: DiagramKind;
};

const questions: CheckpointQuestion[] = [
  {
    section: "Section 1 · Angles Relating to Intersecting Lines",
    prompt: "The adjacent angles on the straight line are 137° and x. Find x.",
    options: ["43°", "53°", "137°", "223°"],
    answer: 0,
    explanation: "x + 137° = 180°, so x = 43°. [Reference: adj. ∠s on st. line]",
    diagram: "straight-line",
  },
  {
    section: "Section 1 · Angles Relating to Intersecting Lines",
    prompt: "Two straight lines intersect. The marked angles are vertically opposite. Find x.",
    options: ["54°", "126°", "180°", "234°"],
    answer: 1,
    explanation: "Vertically opposite angles are equal, so x = 126°. [Reference: vert. opp. ∠s]",
    diagram: "vertically-opposite",
  },
  {
    section: "Section 1 · Angles Relating to Intersecting Lines",
    prompt: "Three angles around a point are 115°, 75° and x. Find x.",
    options: ["170°", "180°", "190°", "245°"],
    answer: 0,
    explanation: "x + 115° + 75° = 360°, so x = 170°. [Reference: ∠s at a pt.]",
    diagram: "angles-at-point",
  },
  {
    section: "Section 1 · Angles Relating to Intersecting Lines",
    prompt: "Four angles at a point are 72°, 89°, 104° and x. Find x.",
    options: ["85°", "95°", "105°", "115°"],
    answer: 1,
    explanation: "x = 360° − 72° − 89° − 104° = 95°. [Reference: ∠s at a pt.]",
    diagram: "four-at-point",
  },
  {
    section: "Section 2 · Angles Relating to Parallel Lines",
    prompt: "In the diagram, p ∥ q. The marked angles are corresponding angles. Find x.",
    options: ["68°", "102°", "112°", "122°"],
    answer: 0,
    explanation: "Corresponding angles are equal when p ∥ q, so x = 68°. [Reference: corr. ∠s, p ∥ q]",
    diagram: "corresponding",
  },
  {
    section: "Section 2 · Angles Relating to Parallel Lines",
    prompt: "In the diagram, p ∥ q. The marked angles are alternate angles. Find x.",
    options: ["63°", "73°", "117°", "243°"],
    answer: 2,
    explanation: "Alternate angles are equal when p ∥ q, so x = 117°. [Reference: alt. ∠s, p ∥ q]",
    diagram: "alternate",
  },
  {
    section: "Section 2 · Angles Relating to Parallel Lines",
    prompt: "In the diagram, p ∥ q. The marked angles are interior angles on the same side. Find x.",
    options: ["68°", "102°", "112°", "122°"],
    answer: 2,
    explanation: "x + 68° = 180°, so x = 112°. [Reference: int. ∠s, p ∥ q]",
    diagram: "same-side",
  },
  {
    section: "Section 2 · Angles Relating to Parallel Lines",
    prompt: "A pair of corresponding angles is equal. Which reference proves that p ∥ q?",
    options: [
      "corr. ∠s equal",
      "alt. ∠s, p ∥ q",
      "int. ∠s, p ∥ q",
      "vert. opp. ∠s",
    ],
    answer: 0,
    explanation: "Equal corresponding angles prove that the two lines are parallel. [Reference: corr. ∠s equal]",
    diagram: "converse",
  },
  {
    section: "Section 3 · Angles of a Triangle",
    prompt: "The interior angles of a triangle are 48°, 67° and x. Find x.",
    options: ["55°", "65°", "75°", "115°"],
    answer: 1,
    explanation: "x = 180° − 48° − 67° = 65°. [Reference: ∠ sum of △]",
    diagram: "triangle",
  },
  {
    section: "Section 3 · Angles of a Triangle",
    prompt: "The two opposite interior angles are 46° and 31°. Find the exterior angle x.",
    options: ["15°", "46°", "77°", "103°"],
    answer: 2,
    explanation: "x = 46° + 31° = 77°. [Reference: ext. ∠ of △]",
    diagram: "exterior",
  },
  {
    section: "Section 3 · Angles of a Triangle",
    prompt: "An exterior angle is 124°. Find its adjacent interior angle x.",
    options: ["46°", "56°", "66°", "124°"],
    answer: 1,
    explanation: "x + 124° = 180°, so x = 56°. [Reference: adj. ∠s on st. line]",
    diagram: "exterior-adjacent",
  },
  {
    section: "Section 3 · Angles of a Triangle",
    prompt: "The three interior angles of a triangle are x, 2x and 3x. Find x.",
    options: ["20°", "30°", "45°", "60°"],
    answer: 1,
    explanation: "x + 2x + 3x = 180°, so 6x = 180° and x = 30°. [Reference: ∠ sum of △]",
    diagram: "triangle-algebra",
  },
];

function QuestionDiagram({ kind }: { kind: DiagramKind }) {
  if (kind === "straight-line") {
    return (
      <svg className="questionDiagram" viewBox="0 0 480 250" role="img" aria-label="Adjacent angles on a straight line">
        <line x1="45" y1="176" x2="435" y2="176" className="line" />
        <line x1="240" y1="176" x2="345" y2="48" className="line accentLine" />
        <path d="M184 176 A56 56 0 0 1 276 112" className="arc roseArc" />
        <path d="M276 112 A56 56 0 0 1 296 176" className="arc blueArc" />
        <text x="178" y="130" className="diagramText roseText">137°</text>
        <text x="306" y="144" className="diagramText blueText">x</text>
      </svg>
    );
  }

  if (kind === "vertically-opposite") {
    return (
      <svg className="questionDiagram" viewBox="0 0 480 250" role="img" aria-label="Vertically opposite angles">
        <line x1="70" y1="210" x2="410" y2="40" className="line" />
        <line x1="70" y1="40" x2="410" y2="210" className="line" />
        <path d="M205 82 A52 52 0 0 1 275 82" className="arc roseArc" />
        <path d="M275 168 A52 52 0 0 1 205 168" className="arc blueArc" />
        <text x="218" y="76" className="diagramText roseText">126°</text>
        <text x="234" y="205" className="diagramText blueText">x</text>
      </svg>
    );
  }

  if (kind === "angles-at-point" || kind === "four-at-point") {
    return (
      <svg className="questionDiagram" viewBox="0 0 480 250" role="img" aria-label="Angles around a point">
        <circle cx="240" cy="132" r="6" className="point" />
        <line x1="240" y1="132" x2="55" y2="132" className="line" />
        <line x1="240" y1="132" x2="330" y2="35" className="line accentLine" />
        <line x1="240" y1="132" x2="410" y2="210" className="line" />
        {kind === "four-at-point" && <line x1="240" y1="132" x2="125" y2="225" className="line" />}
        {kind === "angles-at-point" ? (
          <>
            <text x="128" y="92" className="diagramText roseText">115°</text>
            <text x="320" y="126" className="diagramText amberText">75°</text>
            <text x="176" y="194" className="diagramText blueText">x</text>
          </>
        ) : (
          <>
            <text x="135" y="92" className="diagramText roseText">72°</text>
            <text x="320" y="124" className="diagramText amberText">89°</text>
            <text x="286" y="205" className="diagramText greenText">104°</text>
            <text x="160" y="188" className="diagramText blueText">x</text>
          </>
        )}
      </svg>
    );
  }

  if (["corresponding", "alternate", "same-side", "converse"].includes(kind)) {
    return (
      <svg className="questionDiagram" viewBox="0 0 480 280" role="img" aria-label="Parallel lines cut by a transversal">
        <line x1="48" y1="78" x2="432" y2="78" className="line" />
        <line x1="48" y1="210" x2="432" y2="210" className="line" />
        <line x1="105" y1="258" x2="370" y2="20" className="line accentLine" />
        <text x="438" y="84" className="pointLabel">p</text>
        <text x="438" y="216" className="pointLabel">q</text>
        {kind !== "converse" && (
          <>
            <path d="M52 66 L64 78 L52 90 M68 66 L80 78 L68 90" className="parallelMark" />
            <path d="M52 198 L64 210 L52 222 M68 198 L80 210 L68 222" className="parallelMark" />
          </>
        )}
        {kind === "corresponding" && (
          <>
            <text x="332" y="62" className="diagramText roseText">68°</text>
            <text x="205" y="194" className="diagramText blueText">x</text>
          </>
        )}
        {kind === "alternate" && (
          <>
            <text x="272" y="117" className="diagramText roseText">117°</text>
            <text x="151" y="192" className="diagramText blueText">x</text>
          </>
        )}
        {kind === "same-side" && (
          <>
            <text x="284" y="117" className="diagramText roseText">68°</text>
            <text x="207" y="192" className="diagramText blueText">x</text>
          </>
        )}
        {kind === "converse" && (
          <>
            <text x="331" y="61" className="diagramText roseText">95°</text>
            <text x="205" y="193" className="diagramText blueText">95°</text>
          </>
        )}
      </svg>
    );
  }

  const isExterior = kind === "exterior" || kind === "exterior-adjacent";

  return (
    <svg className="questionDiagram" viewBox="0 0 500 280" role="img" aria-label="Triangle angle diagram">
      <line x1="45" y1="225" x2={isExterior ? 465 : 425} y2="225" className="line" />
      <polyline points="95,225 250,40 410,225" className="triangleLine" />
      {kind === "triangle" && (
        <>
          <text x="116" y="205" className="diagramText blueText">48°</text>
          <text x="362" y="205" className="diagramText amberText">67°</text>
          <text x="241" y="78" className="diagramText roseText">x</text>
        </>
      )}
      {kind === "exterior" && (
        <>
          <text x="119" y="204" className="diagramText blueText">46°</text>
          <text x="236" y="79" className="diagramText roseText">31°</text>
          <text x="425" y="202" className="diagramText greenText">x</text>
        </>
      )}
      {kind === "exterior-adjacent" && (
        <>
          <text x="364" y="204" className="diagramText blueText">x</text>
          <text x="424" y="202" className="diagramText greenText">124°</text>
        </>
      )}
      {kind === "triangle-algebra" && (
        <>
          <text x="122" y="204" className="diagramText blueText">2x</text>
          <text x="355" y="204" className="diagramText amberText">3x</text>
          <text x="242" y="79" className="diagramText roseText">x</text>
        </>
      )}
    </svg>
  );
}

export default function ChapterNineCheckpointPage() {
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

  const finalPercentage = Math.round((score / questions.length) * 100);
  const resultMessage =
    finalPercentage >= 80
      ? "Excellent work — your Chapter 9 angle facts are secure."
      : finalPercentage >= 60
        ? "Good progress — review the explanations and try once more."
        : "Keep practising — revisit Sections 1–3 before trying again.";

  return (
    <>
      {completed ? (
        <main className="resultPage">
          <section className="resultCard">
            <span className="resultIcon">✓</span>
            <p className="resultLabel">CHAPTER 9 CHECKPOINT COMPLETE</p>
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
                onClick={() => router.push("/maths/s1/chapter-9")}
              >
                Return to Chapter 9
              </button>
            </div>
          </section>
        </main>
      ) : (
        <main className="page">
          <button
            type="button"
            className="backButton"
            onClick={() => router.push("/maths/s1/chapter-9")}
          >
            ← Back to Chapter 9
          </button>

          <div className="headerRow">
            <div>
              <p className="eyebrow">S1 · CHAPTER 9</p>
              <h1>Angles and Parallel Lines (I) Checkpoint</h1>
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
            <QuestionDiagram kind={question.diagram} />

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
              <div
                className={selectedIsCorrect ? "feedback correctFeedback" : "feedback incorrectFeedback"}
                aria-live="polite"
              >
                <strong>{selectedIsCorrect ? "Correct" : "Not quite"}</strong>
                <p>{question.explanation}</p>
              </div>
            )}

            <button
              type="button"
              className="continueButton"
              onClick={continueCheckpoint}
              disabled={!answered}
            >
              {questionIndex === questions.length - 1 ? "Finish Checkpoint" : "Next Question"} →
            </button>
          </section>
        </main>
      )}

      <style jsx global>{`
        body { background: #f8fafc; }

        .page {
          max-width: 920px;
          width: calc(100% - 48px);
          margin: 44px auto 72px;
          box-sizing: border-box;
          color: #172033;
        }

        .backButton {
          margin-bottom: 25px;
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
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .eyebrow,
        .questionLabel,
        .resultLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow { margin: 0 0 7px; color: #e11d48; }

        h1 {
          max-width: 740px;
          margin: 0;
          font-size: clamp(34px, 5vw, 49px);
          line-height: 1.12;
          letter-spacing: -0.035em;
        }

        .scoreBadge {
          flex-shrink: 0;
          padding: 11px 15px;
          border-radius: 999px;
          background: #d1fae5;
          color: #047857;
          font-weight: 900;
        }

        .progressHeader {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          margin-top: 30px;
          color: #64748b;
          font-size: 14px;
          font-weight: 800;
        }

        .progressHeader span:last-child { color: #4f46e5; text-align: right; }

        .progressTrack {
          height: 10px;
          margin-top: 10px;
          overflow: hidden;
          border-radius: 999px;
          background: #e2e8f0;
        }

        .progressFill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          transition: width 0.25s ease;
        }

        .questionCard {
          margin-top: 20px;
          padding: 30px;
          border: 1px solid #c7d2fe;
          border-radius: 24px;
          background: white;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
        }

        .questionLabel { margin: 0 0 8px; color: #4f46e5; }

        .questionCard h2 {
          margin: 0;
          font-size: clamp(22px, 3.4vw, 29px);
          line-height: 1.4;
        }

        .questionDiagram {
          display: block;
          width: min(100%, 560px);
          height: 230px;
          margin: 20px auto 4px;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          background: #f8fafc;
        }

        .line,
        .triangleLine {
          fill: none;
          stroke: #172033;
          stroke-width: 7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .accentLine { stroke: #059669; }
        .point { fill: #172033; }

        .arc {
          fill: none;
          stroke-width: 5;
          stroke-linecap: round;
        }

        .roseArc { stroke: #e11d48; }
        .blueArc { stroke: #2563eb; }
        .diagramText,
        .pointLabel {
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 25px;
          font-weight: 900;
        }

        .pointLabel { fill: #172033; font-style: italic; }
        .roseText { fill: #e11d48; }
        .blueText { fill: #2563eb; }
        .amberText { fill: #b45309; }
        .greenText { fill: #047857; }

        .parallelMark {
          fill: none;
          stroke: #e11d48;
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .optionsGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 22px;
        }

        .optionButton {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 14px;
          border: 2px solid #e2e8f0;
          border-radius: 15px;
          background: #f8fafc;
          color: #172033;
          font-size: 16px;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
        }

        .optionButton:not(:disabled):hover { border-color: #a5b4fc; background: #eef2ff; }
        .optionButton:disabled { cursor: default; }

        .optionLetter {
          width: 35px;
          height: 35px;
          flex: 0 0 35px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #e0e7ff;
          color: #4338ca;
          font-weight: 900;
        }

        .correctOption { border-color: #10b981; background: #ecfdf5; color: #065f46; }
        .incorrectOption { border-color: #fb7185; background: #fff1f2; color: #9f1239; }

        .feedback {
          margin-top: 20px;
          padding: 17px;
          border-radius: 15px;
        }

        .feedback strong { display: block; margin-bottom: 5px; font-size: 18px; }
        .feedback p { margin: 0; line-height: 1.55; }
        .correctFeedback { background: #d1fae5; color: #065f46; }
        .incorrectFeedback { background: #fff1f2; color: #9f1239; }

        .continueButton {
          width: 100%;
          margin-top: 20px;
          padding: 15px;
          border: none;
          border-radius: 14px;
          background: #4f46e5;
          color: white;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
        }

        .continueButton:disabled { background: #cbd5e1; color: #64748b; cursor: not-allowed; }

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

        .resultLabel { margin: 0; color: #4f46e5; }
        .resultCard h1 { margin: 15px 0 4px; font-size: 56px; }
        .resultPercentage { color: #047857; font-size: 28px; font-weight: 900; }
        .resultMessage { margin: 20px auto 28px; color: #64748b; font-size: 18px; line-height: 1.55; }
        .resultActions { display: flex; justify-content: center; gap: 12px; }

        .resultActions button {
          padding: 13px 19px;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
        }

        .retryButton { border: 2px solid #4f46e5; background: white; color: #4f46e5; }
        .returnButton { border: 2px solid #047857; background: #047857; color: white; }

        @media (max-width: 650px) {
          .page { width: calc(100% - 24px); margin-top: 28px; }
          .headerRow,
          .progressHeader { align-items: flex-start; flex-direction: column; }
          .progressHeader { gap: 5px; }
          .progressHeader span:last-child { text-align: left; }
          .questionCard { padding: 21px; }
          .questionDiagram { height: 200px; }
          .optionsGrid { grid-template-columns: 1fr; }
        }

        @media (max-width: 520px) {
          .resultPage { padding: 12px; }
          .resultCard { padding: 28px 20px; }
          .resultActions { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
