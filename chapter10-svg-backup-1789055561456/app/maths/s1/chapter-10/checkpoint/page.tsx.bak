"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type DiagramKind =
  | "congruence-order"
  | "congruence-sides"
  | "sss"
  | "sas"
  | "rhs"
  | "aaa-not-congruent"
  | "similarity-order"
  | "scale-factor"
  | "missing-side"
  | "aaa"
  | "three-sides-proportional"
  | "two-sides-angle";

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
    section: "Section 1 · Concept of Congruent Triangles",
    prompt: "Given △ABC ≅ △XYZ, which angle corresponds to ∠B?",
    options: ["∠X", "∠Y", "∠Z", "∠A"],
    answer: 1,
    explanation: "The second vertex corresponds to the second vertex, so B ↔ Y and ∠B = ∠Y. [Reference: corr. ∠s equal]",
    diagram: "congruence-order",
  },
  {
    section: "Section 1 · Concept of Congruent Triangles",
    prompt: "Given △ABC ≅ △XYZ, which side corresponds to AC?",
    options: ["XY", "YZ", "XZ", "AB"],
    answer: 2,
    explanation: "A ↔ X and C ↔ Z, so side AC corresponds to side XZ. [Reference: corr. sides equal]",
    diagram: "congruence-sides",
  },
  {
    section: "Section 1 · Concept of Congruent Triangles",
    prompt: "Which statement is always true for congruent triangles?",
    options: ["They have the same shape and size", "They only have equal angles", "Their sizes must be different", "Their sides are only proportional"],
    answer: 0,
    explanation: "Congruent triangles have the same shape and the same size. [Reference: congruent triangles]",
    diagram: "congruence-order",
  },
  {
    section: "Section 2 · Conditions for Triangles to be Congruent",
    prompt: "All three pairs of corresponding sides are equal. Which condition proves congruence?",
    options: ["SSS", "SAS", "AAA", "RHS"],
    answer: 0,
    explanation: "Three equal pairs of corresponding sides prove the triangles congruent. [Reference: SSS]",
    diagram: "sss",
  },
  {
    section: "Section 2 · Conditions for Triangles to be Congruent",
    prompt: "Two corresponding sides and the angle between them are equal. Which condition applies?",
    options: ["SSS", "SAS", "AAS", "RHS"],
    answer: 1,
    explanation: "The equal angle is included between the two equal side pairs. [Reference: SAS]",
    diagram: "sas",
  },
  {
    section: "Section 2 · Conditions for Triangles to be Congruent",
    prompt: "Both triangles are right-angled. Their hypotenuses and one other pair of sides are equal. Which condition applies?",
    options: ["ASA", "SSS", "AAA", "RHS"],
    answer: 3,
    explanation: "Right angle, equal hypotenuse and one equal corresponding side give RHS. [Reference: RHS]",
    diagram: "rhs",
  },
  {
    section: "Section 3 · Concept of Similar Triangles",
    prompt: "Given △PQR ∼ △STU, which side corresponds to QR?",
    options: ["ST", "TU", "SU", "PQ"],
    answer: 1,
    explanation: "Q ↔ T and R ↔ U, so QR corresponds to TU. [Reference: corr. sides proportional]",
    diagram: "similarity-order",
  },
  {
    section: "Section 3 · Concept of Similar Triangles",
    prompt: "A corresponding side increases from 3 cm to 9 cm. What is the enlargement scale factor?",
    options: ["1/3", "2", "3", "6"],
    answer: 2,
    explanation: "Scale factor = new length ÷ original length = 9 ÷ 3 = 3.",
    diagram: "scale-factor",
  },
  {
    section: "Section 3 · Concept of Similar Triangles",
    prompt: "The triangles are similar. Use 4/6 = x/9 to find x.",
    options: ["4", "6", "8", "13.5"],
    answer: 1,
    explanation: "4/6 = x/9, so 6x = 36 and x = 6. [Reference: corr. sides proportional]",
    diagram: "missing-side",
  },
  {
    section: "Section 4 · Conditions for Triangles to be Similar",
    prompt: "Three pairs of corresponding angles are equal. Which condition proves similarity?",
    options: ["AAA", "SSS", "RHS", "SAS"],
    answer: 0,
    explanation: "Equal corresponding angles fix the shape of a triangle. [Reference: AAA]",
    diagram: "aaa",
  },
  {
    section: "Section 4 · Conditions for Triangles to be Similar",
    prompt: "The corresponding side lengths are 3, 4, 5 and 6, 8, 10. Which condition proves similarity?",
    options: ["AAA", "3 sides proportional", "RHS", "AAS"],
    answer: 1,
    explanation: "3/6 = 4/8 = 5/10 = 1/2. [Reference: 3 sides proportional]",
    diagram: "three-sides-proportional",
  },
  {
    section: "Section 4 · Conditions for Triangles to be Similar",
    prompt: "Two side ratios are equal and the angles between those sides are equal. Which condition proves similarity?",
    options: ["AAA", "RHS", "Ratio of 2 sides, included angle", "SSS"],
    answer: 2,
    explanation: "The two side pairs are proportional and the included angles are equal. [Reference: ratio of 2 sides, inc. ∠]",
    diagram: "two-sides-angle",
  },
];

export default function ChapterTenCheckpointPage() {
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
    ? "Excellent work — your Chapter 10 triangle facts are secure."
    : finalPercentage >= 60
      ? "Good progress — review the explanations and try once more."
      : "Keep practising — revisit Sections 1–4 before trying again.";

  return (
    <>
      {completed ? (
        <main className="resultPage">
          <section className="resultCard">
            <span className="resultIcon">✓</span>
            <p className="resultLabel">CHAPTER 10 CHECKPOINT COMPLETE</p>
            <h1>{score} / {questions.length}</h1>
            <div className="resultPercentage">{finalPercentage}%</div>
            <p className="resultMessage">{resultMessage}</p>
            <div className="resultActions">
              <button type="button" className="retryButton" onClick={restartCheckpoint}>Try again</button>
              <button type="button" className="returnButton" onClick={() => router.push("/maths/s1/chapter-10")}>Return to Chapter 10</button>
            </div>
          </section>
        </main>
      ) : (
        <main className="page">
          <button type="button" className="backButton" onClick={() => router.push("/maths/s1/chapter-10")}>← Back to Chapter 10</button>
          <div className="headerRow">
            <div><p className="eyebrow">S1 · CHAPTER 10</p><h1>Congruence and Similarity (I) Checkpoint</h1></div>
            <div className="scoreBadge">Score: {score}</div>
          </div>
          <div className="progressHeader"><span>Question {questionIndex + 1} of {questions.length}</span><span>{question.section}</span></div>
          <div className="progressTrack"><div className="progressFill" style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }} /></div>

          <section className="questionCard">
            <p className="questionLabel">CHECKPOINT QUESTION</p>
            <h2>{question.prompt}</h2>
            <QuestionDiagram kind={question.diagram} />
            <div className="optionsGrid">
              {question.options.map((option, optionIndex) => {
                let className = "optionButton";
                if (answered && optionIndex === question.answer) className += " correctOption";
                else if (answered && optionIndex === selectedOption) className += " incorrectOption";
                return (
                  <button type="button" key={option} className={className} onClick={() => chooseAnswer(optionIndex)} disabled={answered}>
                    <span className="optionLetter">{String.fromCharCode(65 + optionIndex)}</span><span>{option}</span>
                  </button>
                );
              })}
            </div>
            {answered && (
              <div className={selectedIsCorrect ? "feedback correctFeedback" : "feedback incorrectFeedback"} aria-live="polite">
                <strong>{selectedIsCorrect ? "Correct" : "Not quite"}</strong><p>{question.explanation}</p>
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
        .page { max-width: 940px; width: calc(100% - 48px); margin: 44px auto 72px; }
        .backButton { margin-bottom: 25px; padding: 0; border: 0; background: transparent; color: #0f766e; font-size: 17px; font-weight: 800; cursor: pointer; }
        .headerRow { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
        .eyebrow, .questionLabel, .resultLabel { font-size: 13px; font-weight: 900; letter-spacing: .1em; }
        .eyebrow { margin: 0 0 7px; color: #7c3aed; }
        h1 { max-width: 760px; margin: 0; font-size: clamp(34px, 5vw, 49px); line-height: 1.12; letter-spacing: -.035em; }
        .scoreBadge { flex-shrink: 0; padding: 11px 15px; border-radius: 999px; background: #ccfbf1; color: #0f766e; font-weight: 900; }
        .progressHeader { display: flex; justify-content: space-between; gap: 18px; margin-top: 30px; color: #64748b; font-size: 14px; font-weight: 800; }
        .progressHeader span:last-child { color: #7c3aed; text-align: right; }
        .progressTrack { height: 10px; margin-top: 10px; overflow: hidden; border-radius: 999px; background: #e2e8f0; }
        .progressFill { height: 100%; border-radius: inherit; background: linear-gradient(90deg, #0f766e, #7c3aed); transition: width .25s ease; }
        .questionCard { margin-top: 20px; padding: 30px; border: 1px solid #c4b5fd; border-radius: 24px; background: white; box-shadow: 0 10px 30px rgba(15,23,42,.07); }
        .questionLabel { margin: 0 0 8px; color: #7c3aed; }
        .questionCard h2 { margin: 0; font-size: clamp(22px, 3.4vw, 29px); line-height: 1.4; }
        .questionDiagram { display: block; width: min(100%, 620px); height: 245px; margin: 20px auto 4px; padding: 9px; border: 1px solid #e2e8f0; border-radius: 18px; background: #f8fafc; }
        .triA { fill: #ccfbf1; stroke: #0f766e; stroke-width: 7; stroke-linejoin: round; }
        .triB { fill: #ede9fe; stroke: #7c3aed; stroke-width: 7; stroke-linejoin: round; }
        .vertex { fill: #172033; font: 900 22px Inter, sans-serif; }
        .measure { fill: #6d28d9; font: 850 21px Inter, sans-serif; }
        .tick { fill: none; stroke: #7c3aed; stroke-width: 5; stroke-linecap: round; }
        .arc { fill: none; stroke: #f59e0b; stroke-width: 5; stroke-linecap: round; }
        .rightMark { fill: none; stroke: #f59e0b; stroke-width: 5; }
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
        .resultPage { min-height: 100vh; display: grid; place-items: center; padding: 30px; }
        .resultCard { width: min(620px,100%); padding: 42px; text-align: center; border: 1px solid #c4b5fd; border-radius: 28px; background: white; box-shadow: 0 16px 45px rgba(15,23,42,.09); }
        .resultIcon { width: 70px; height: 70px; display: grid; place-items: center; margin: 0 auto 18px; border-radius: 22px; background: #ccfbf1; color: #0f766e; font-size: 35px; font-weight: 900; }
        .resultLabel { color: #7c3aed; }
        .resultCard h1 { margin: 12px auto 0; font-size: 58px; }
        .resultPercentage { color: #0f766e; font-size: 32px; font-weight: 900; }
        .resultMessage { color: #52677f; font-size: 18px; line-height: 1.55; }
        .resultActions { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 24px; }
        .retryButton, .returnButton { padding: 15px; border-radius: 14px; font-weight: 900; cursor: pointer; }
        .retryButton { border: 2px solid #7c3aed; background: white; color: #6d28d9; }
        .returnButton { border: 2px solid #0f766e; background: #0f766e; color: white; }
        @media (max-width: 620px) {
          .page { width: calc(100% - 30px); margin-top: 25px; }
          .headerRow { display: block; }
          .scoreBadge { display: inline-block; margin-top: 15px; }
          .progressHeader { display: grid; }
          .progressHeader span:last-child { text-align: left; }
          .questionCard { padding: 20px 16px; }
          .questionDiagram { height: 210px; }
          .optionsGrid, .resultActions { grid-template-columns: 1fr; }
          .resultCard { padding: 30px 20px; }
        }
      `}</style>
    </>
  );
}

function QuestionDiagram({ kind }: { kind: DiagramKind }) {
  if (kind === "rhs") return <RhsDiagram />;
  if (kind === "two-sides-angle") return <SasProportionalDiagram />;
  if (["scale-factor", "missing-side", "three-sides-proportional"].includes(kind)) return <ProportionalDiagram kind={kind} />;
  return <PairedTrianglesDiagram kind={kind} />;
}

function PairedTrianglesDiagram({ kind }: { kind: DiagramKind }) {
  const similar = ["similarity-order", "aaa"].includes(kind);
  const showAngles = kind === "aaa";
  const showAllSides = kind === "sss";
  const showSas = kind === "sas" || kind === "two-sides-angle";
  const showAC = kind === "congruence-sides";
  return (
    <svg className="questionDiagram" viewBox="0 0 720 280" role="img" aria-label="Two labelled triangles">
      <path className="triA" d="M55 225 L155 55 L275 225 Z" />
      <path className="triB" d={similar ? "M380 225 L505 12.5 L655 225 Z" : "M385 225 L485 55 L605 225 Z"} />
      <g className="vertex"><text x="28" y="255">{kind === "similarity-order" ? "P" : "A"}</text><text x="146" y="42">{kind === "similarity-order" ? "Q" : "B"}</text><text x="282" y="255">{kind === "similarity-order" ? "R" : "C"}</text><text x={similar ? "350" : "356"} y="255">{kind === "similarity-order" ? "S" : "X"}</text><text x={similar ? "496" : "476"} y={similar ? "25" : "42"}>{kind === "similarity-order" ? "T" : "Y"}</text><text x={similar ? "662" : "612"} y="255">{kind === "similarity-order" ? "U" : "Z"}</text></g>
      {(showAllSides || showSas) && <path className="tick" d="M96 150 l16 10 M426 150 l16 10" />}
      {(showAllSides || showSas) && <path className="tick" d="M207 119 l15 -10 M216 132 l15 -10 M537 119 l15 -10 M546 132 l15 -10" />}
      {showAllSides && <path className="tick" d="M145 225 v-17 M160 225 v-17 M175 225 v-17 M475 225 v-17 M490 225 v-17 M505 225 v-17" />}
      {showSas && <path className="arc" d="M140 80 Q155 92 171 79 M470 80 Q485 92 501 79" />}
      {showAngles && <><path className="arc" d="M77 225 Q74 209 64 196 M402 225 Q399 209 389 196"/><path className="arc" d="M140 80 Q155 92 171 79 M134 89 Q155 106 177 88 M490 39 Q505 51 521 38 M484 48 Q505 65 527 47"/><path className="arc" d="M253 225 Q256 209 266 196 M244 225 Q249 203 261 188 M235 225 Q242 197 256 180 M633 225 Q636 209 646 196 M624 225 Q629 203 641 188 M615 225 Q622 197 636 180"/></>}
      {showAC && <path d="M55 225 H275 M385 225 H605" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="9 8" />}
      {kind === "aaa-not-congruent" && <text x="220" y="35" className="measure">AAA ≠ congruent</text>}
    </svg>
  );
}

function RhsDiagram() {
  return (
    <svg className="questionDiagram" viewBox="0 0 720 280" role="img" aria-label="Two right-angled triangles with equal hypotenuses and one equal side">
      <path className="triA" d="M70 225 L70 55 L290 225 Z" /><path className="triB" d="M410 225 L410 55 L630 225 Z" />
      <g className="vertex"><text x="42" y="255">A</text><text x="48" y="44">B</text><text x="297" y="255">C</text><text x="382" y="255">X</text><text x="388" y="44">Y</text><text x="637" y="255">Z</text></g>
      <path className="rightMark" d="M70 199 h26 v26 M410 199 h26 v26" />
      <path className="tick" d="M70 135 h18 M410 135 h18 M171 122 l12 -15 M182 131 l12 -15 M511 122 l12 -15 M522 131 l12 -15" />
    </svg>
  );
}

function ProportionalDiagram({ kind }: { kind: DiagramKind }) {
  const scale = kind === "scale-factor";
  const missing = kind === "missing-side";
  if (scale) {
    return (
      <svg className="questionDiagram" viewBox="0 0 720 280" role="img" aria-label="One triangle enlarged by scale factor three">
        <path className="triA" d="M90 225 L90 165 L170 225 Z" /><path className="triB" d="M350 225 L350 45 L590 225 Z" />
        <g className="vertex"><text x="62" y="253">A</text><text x="67" y="157">B</text><text x="177" y="253">C</text><text x="321" y="253">X</text><text x="327" y="37">Y</text><text x="597" y="253">Z</text></g>
        <path className="rightMark" d="M90 207 h18 v18 M350 198 h27 v27" />
        <g className="measure"><text x="61" y="201">3</text><text x="313" y="145">9</text><text x="214" y="130">scale factor = ?</text></g>
      </svg>
    );
  }
  return (
    <svg className="questionDiagram" viewBox="0 0 720 280" role="img" aria-label="Two similar right triangles with proportional side lengths">
      <path className="triA" d="M55 225 L55 135 L175 225 Z" /><path className="triB" d="M350 225 L350 45 L590 225 Z" />
      <g className="vertex"><text x="28" y="253">A</text><text x="32" y="127">B</text><text x="182" y="253">C</text><text x="321" y="253">X</text><text x="327" y="37">Y</text><text x="597" y="253">Z</text></g>
      <path className="rightMark" d="M55 204 h21 v21 M350 198 h27 v27" />
      {missing && <g className="measure"><text x="98" y="252">4</text><text x="25" y="185">x</text><text x="455" y="252">6</text><text x="313" y="145">9</text></g>}
      {kind === "three-sides-proportional" && <g className="measure"><text x="25" y="185">3</text><text x="102" y="252">4</text><text x="105" y="176">5</text><text x="313" y="145">6</text><text x="462" y="252">8</text><text x="465" y="137">10</text></g>}
    </svg>
  );
}

function SasProportionalDiagram() {
  return (
    <svg className="questionDiagram" viewBox="0 0 720 280" role="img" aria-label="Two similar triangles with two proportional sides around equal included angles">
      <path className="triA" d="M70 225 L120 138.4 L150 225 Z" /><path className="triB" d="M370 225 L470 51.8 L530 225 Z" />
      <g className="vertex"><text x="42" y="253">A</text><text x="112" y="126">B</text><text x="157" y="253">C</text><text x="342" y="253">X</text><text x="462" y="40">Y</text><text x="537" y="253">Z</text></g>
      <g className="measure"><text x="83" y="177">5</text><text x="103" y="253">4</text><text x="405" y="132">10</text><text x="445" y="253">8</text></g>
      <path className="arc" d="M89 225 Q86 211 78 200 M389 225 Q386 211 378 200" />
    </svg>
  );
}
