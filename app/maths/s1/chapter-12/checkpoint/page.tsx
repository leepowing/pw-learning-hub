"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type VisualKind =
  | "statistics-process"
  | "datum-data"
  | "statistical-question"
  | "discrete"
  | "continuous"
  | "possible-values"
  | "grouped-frequency"
  | "frequency-total"
  | "class-intervals"
  | "combined-chart"
  | "rainfall-change"
  | "chart-axes"
  | "stem-value"
  | "stem-repeat"
  | "back-to-back";

type CheckpointQuestion = {
  section: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  visual: VisualKind;
};

const questions: CheckpointQuestion[] = [
  {
    section: "Section 1 · Introduction to Statistics",
    prompt: "Which order correctly describes the four stages of a statistical investigation?",
    options: ["Collect, organize, present, interpret", "Present, collect, interpret, organize", "Organize, interpret, collect, present", "Collect, present, organize, interpret"],
    answer: 0,
    explanation: "First collect relevant data, then organize it, present it clearly and interpret the result. [Reference: statistics]",
    visual: "statistics-process",
  },
  {
    section: "Section 1 · Introduction to Statistics",
    prompt: "What is one individual recorded observation called?",
    options: ["A datum", "A data set", "A frequency", "An interval"],
    answer: 0,
    explanation: "One recorded value is a datum; a collection of observations is data. [Reference: datum]",
    visual: "datum-data",
  },
  {
    section: "Section 1 · Introduction to Statistics",
    prompt: "Which is a statistical question?",
    options: ["How long did Sam travel today?", "How long do students in the class take to travel to school?", "Is Sam present today?", "What is Sam's birthday?"],
    answer: 1,
    explanation: "The class question expects a collection of different values that can be analyzed. [Reference: statistical question]",
    visual: "statistical-question",
  },
  {
    section: "Section 2 · Different Types of Data",
    prompt: "Which set of data is discrete?",
    options: ["Masses of school bags", "Numbers of books borrowed", "Times taken to run 100 m", "Heights of students"],
    answer: 1,
    explanation: "Books are counted and only separate whole-number values are possible. [Reference: discrete data]",
    visual: "discrete",
  },
  {
    section: "Section 2 · Different Types of Data",
    prompt: "Which set of data is continuous?",
    options: ["Numbers of siblings", "Numbers of goals", "Journey times", "Shoe sizes"],
    answer: 2,
    explanation: "Time is measured and can take any value within a range. [Reference: continuous data]",
    visual: "continuous",
  },
  {
    section: "Section 2 · Different Types of Data",
    prompt: "A mass is recorded as 3 kg. Why may the data still be continuous?",
    options: ["All masses are whole numbers", "The value may have been rounded", "Continuous data cannot use units", "The value was counted"],
    answer: 1,
    explanation: "A measured value may be rounded; more precise values between whole numbers are still possible. [Reference: continuous data]",
    visual: "possible-values",
  },
  {
    section: "Section 3 · Organization of Data",
    prompt: "The officer counts are 21, 16, 26, 20, 24, 17, 17, 23, 22 and 21. What are the frequencies for 15–19, 20–24 and 25–29?",
    options: ["3, 6, 1", "2, 7, 1", "3, 5, 2", "4, 5, 1"],
    answer: 0,
    explanation: "15–19 contains 16, 17, 17; 20–24 contains six values; 25–29 contains 26. [Reference: frequency distribution table]",
    visual: "grouped-frequency",
  },
  {
    section: "Section 3 · Organization of Data",
    prompt: "A frequency table has frequencies 2, 4, 3 and 3. How many data items are there?",
    options: ["4", "10", "12", "14"],
    answer: 2,
    explanation: "Add the frequency column: 2 + 4 + 3 + 3 = 12. [Reference: total frequency]",
    visual: "frequency-total",
  },
  {
    section: "Section 3 · Organization of Data",
    prompt: "Which set of class intervals is suitable for grouping whole-number journey times?",
    options: ["0–9, 10–19, 20–29", "0–10, 10–20, 20–30", "0–9, 11–19, 21–29", "0–9, 5–14, 10–19"],
    answer: 0,
    explanation: "The intervals 0–9, 10–19 and 20–29 have no gaps and do not overlap. [Reference: organization of data into groups]",
    visual: "class-intervals",
  },
  {
    section: "Section 4 · Presentation of Data",
    prompt: "Use the combined diagram. What was the temperature in May?",
    options: ["20°C", "22°C", "24°C", "48°C"],
    answer: 1,
    explanation: "The May bar reaches 22 on the left temperature axis. [Reference: statistical diagram]",
    visual: "combined-chart",
  },
  {
    section: "Section 4 · Presentation of Data",
    prompt: "In the row 6 | 0 1 4 4 8, how many times does the value 64 occur?",
    options: ["1", "2", "4", "5"],
    answer: 1,
    explanation: "The leaf 4 appears twice beside stem 6, so 64 occurs twice. [Reference: stem-and-leaf diagram]",
    visual: "stem-repeat",
  },
  {
    section: "Section 4 · Presentation of Data",
    prompt: "Use the back-to-back stem-and-leaf diagram. What is the highest score in Class B?",
    options: ["64", "66", "68", "86"],
    answer: 1,
    explanation: "On the Class B side, stem 6 with the greatest leaf 6 represents 66. [Reference: back-to-back stem-and-leaf diagram]",
    visual: "back-to-back",
  },
];

export default function ChapterTwelveCheckpointPage() {
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
    ? "Excellent work — your Chapter 12 data skills are secure."
    : finalPercentage >= 60
      ? "Good progress — review the explanations and try once more."
      : "Keep practising — revisit Sections 1–4 before trying again.";

  return (
    <>
      {completed ? (
        <main className="resultPage">
          <section className="resultCard">
            <span className="resultIcon">✓</span>
            <p className="resultLabel">CHAPTER 12 CHECKPOINT COMPLETE</p>
            <h1>{score} / {questions.length}</h1>
            <div className="resultPercentage">{finalPercentage}%</div>
            <p className="resultMessage">{resultMessage}</p>
            <div className="resultActions">
              <button type="button" className="retryButton" onClick={restartCheckpoint}>Try again</button>
              <button type="button" className="returnButton" onClick={() => router.push("/maths/s1/chapter-12")}>Return to Chapter 12</button>
            </div>
          </section>
        </main>
      ) : (
        <main className="page">
          <button type="button" className="backButton" onClick={() => router.push("/maths/s1/chapter-12")}>← Back to Chapter 12</button>
          <div className="headerRow">
            <div><p className="eyebrow">S1 · CHAPTER 12</p><h1>Organization and Presentation of Data (1) Checkpoint</h1></div>
            <div className="scoreBadge">Score: {score}</div>
          </div>
          <div className="progressHeader"><span>Question {questionIndex + 1} of {questions.length}</span><span>{question.section}</span></div>
          <div className="progressTrack"><div className="progressFill" style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }} /></div>

          <section className="questionCard">
            <p className="questionLabel">CHECKPOINT QUESTION</p>
            <h2>{question.prompt}</h2>
            <QuestionVisual kind={question.visual} />
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
        .visualCard { width: min(100%, 680px); min-height: 210px; margin: 20px auto 4px; padding: 18px; border: 1px solid #e2e8f0; border-radius: 18px; background: #f8fafc; }
        .visualTitle { margin: 0 0 12px; color: #536a85; text-align: center; font-size: 13px; font-weight: 900; letter-spacing: .1em; }
        .processVisual { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; align-items: center; min-height: 145px; }
        .processVisual span { position: relative; padding: 20px 8px; border-radius: 14px; color: white; background: #0f766e; text-align: center; font-weight: 900; }
        .processVisual span:nth-child(even) { background: #7c3aed; }
        .datumVisual { display: grid; grid-template-columns: 1fr auto 1fr; gap: 18px; align-items: center; min-height: 145px; }
        .datumVisual div { padding: 20px; border-radius: 17px; text-align: center; }
        .datumVisual div:first-child { background: #ccfbf1; color: #0f766e; }
        .datumVisual div:last-child { background: #eee7ff; color: #6d28d9; }
        .datumVisual b { display: block; margin-bottom: 8px; font-size: 25px; }
        .datumVisual > span { font-size: 30px; font-weight: 900; }
        .questionVisual { display: grid; grid-template-columns: repeat(5,1fr); gap: 8px; align-items: end; min-height: 145px; }
        .questionVisual span { display: grid; place-items: center; height: 78px; border-radius: 50% 50% 16px 16px; color: white; background: #7c3aed; font-size: 24px; font-weight: 900; }
        .questionVisual span:nth-child(even) { height: 105px; background: #14b8a6; }
        .dotScale, .rangeScale { display: flex; align-items: center; justify-content: space-around; min-height: 130px; position: relative; }
        .dotScale::before, .rangeScale::before { content: ""; position: absolute; left: 6%; right: 6%; top: 50%; height: 5px; background: #294663; }
        .dotScale span { z-index: 1; display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; color: white; background: #7c3aed; font-weight: 900; }
        .rangeScale::before { height: 14px; border-radius: 999px; background: linear-gradient(90deg,#14b8a6,#7c3aed); }
        .rangeScale span { z-index: 1; align-self: flex-end; margin-bottom: 20px; font-weight: 800; }
        .roundedMarker { position: absolute; z-index: 2; left: 49%; top: 38%; width: 22px; height: 22px; border: 4px solid white; border-radius: 50%; background: #f97316; }
        .valueTable { width: 100%; border-collapse: collapse; text-align: center; }
        .valueTable th, .valueTable td { padding: 10px; border: 1px solid #bfddd6; }
        .valueTable th { color: #0f766e; background: #e8f8f4; }
        .equationVisual { display: grid; place-items: center; min-height: 150px; color: #5b21b6; font-size: clamp(29px, 6vw, 48px); font-weight: 900; }
        .intervalRow { display: grid; grid-template-columns: repeat(3,1fr); gap: 5px; margin: 55px auto; max-width: 520px; }
        .intervalRow span { padding: 22px 5px; color: white; background: #7c3aed; text-align: center; font-weight: 900; }
        .intervalRow span:first-child { border-radius: 15px 0 0 15px; }
        .intervalRow span:last-child { border-radius: 0 15px 15px 0; }
        .miniChart { display: block; width: 100%; max-height: 290px; }
        .chartGrid { stroke: #d9e3ef; stroke-width: 2; }
        .chartAxis { stroke: #294663; stroke-width: 4; }
        .temperatureBar { fill: #fde68a; stroke: #f59e0b; stroke-width: 3; }
        .rainfallLine { fill: none; stroke: #0ea5e9; stroke-width: 5; }
        .rainfallPoint { fill: white; stroke: #0284c7; stroke-width: 4; }
        .chartText { fill: #3d5875; font-size: 14px; font-weight: 700; }
        .chartKey { display: flex; justify-content: center; gap: 24px; margin-top: 3px; font-weight: 800; }
        .chartKey span { display: flex; align-items: center; gap: 7px; }
        .barKey { width: 24px; height: 14px; border: 2px solid #f59e0b; background: #fde68a; }
        .lineKey { width: 26px; border-top: 4px solid #0ea5e9; }
        .changeVisual { display: flex; justify-content: center; align-items: center; gap: 28px; min-height: 150px; }
        .changeVisual b { padding: 22px; border-radius: 18px; color: white; background: #0ea5e9; font-size: 25px; }
        .changeVisual span { color: #7c3aed; font-size: 40px; font-weight: 900; }
        .axesVisual { position: relative; height: 170px; max-width: 500px; margin: auto; }
        .axesVisual .horizontal { position: absolute; left: 12%; right: 12%; bottom: 28px; border-top: 5px solid #294663; }
        .axesVisual .leftAxis, .axesVisual .rightAxis { position: absolute; top: 20px; bottom: 28px; border-left: 5px solid #294663; }
        .axesVisual .leftAxis { left: 12%; }
        .axesVisual .rightAxis { right: 12%; }
        .axesVisual label { position: absolute; top: 70px; font-weight: 900; }
        .axesVisual label:first-of-type { left: 0; color: #f59e0b; }
        .axesVisual label:last-of-type { right: 0; color: #0284c7; }
        .stemTable, .backTable { width: min(100%,520px); margin: 18px auto; border-collapse: collapse; font-size: 21px; }
        .stemTable th, .stemTable td, .backTable th, .backTable td { padding: 11px 16px; border-bottom: 1px solid #cbe9e2; }
        .stemTable th { color: #0f766e; background: #e8f8f4; }
        .stemTable th:first-child, .stemTable td:first-child { width: 36%; border-right: 4px solid #0f766e; text-align: right; }
        .stemTable td:last-child { white-space: pre; }
        .highlightLeaf { display: inline-grid; place-items: center; width: 34px; height: 34px; border-radius: 9px; color: white; background: #7c3aed; }
        .keyBox { width: fit-content; margin: 12px auto 0; padding: 10px 16px; border-radius: 12px; color: #5b21b6; background: #eee7ff; font-weight: 900; }
        .backTable th { background: #eee7ff; }
        .backTable th:first-child, .backTable td:first-child { text-align: right; white-space: pre; }
        .backTable th:nth-child(2), .backTable td:nth-child(2) { width: 18%; border-right: 4px solid #7c3aed; border-left: 4px solid #7c3aed; text-align: center; }
        .backTable td:last-child { white-space: pre; }
        .optionsGrid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; margin-top: 22px; }
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
          .optionsGrid, .resultActions { grid-template-columns: 1fr; }
          .visualCard { padding: 12px 7px; }
          .intervalRow { font-size: 14px; }
          .changeVisual { gap: 10px; }
          .changeVisual b { padding: 15px; font-size: 19px; }
          .resultCard { padding: 30px 20px; }
        }
      `}</style>
    </>
  );
}

function QuestionVisual({ kind }: { kind: VisualKind }) {
  if (kind === "statistics-process") return <div className="visualCard"><p className="visualTitle">FOUR STAGES — NOT IN ORDER</p><div className="processVisual"><span>Present</span><span>Collect</span><span>Interpret</span><span>Organize</span></div></div>;
  if (kind === "datum-data") return <div className="visualCard"><p className="visualTitle">ONE OBSERVATION AND A COLLECTION</p><div className="datumVisual"><div><b>22 min</b>one observation</div><span>→</span><div><b>18, 22, 25</b>a collection</div></div></div>;
  if (kind === "statistical-question") return <div className="visualCard"><p className="visualTitle">A STATISTICAL QUESTION EXPECTS VARIATION</p><div className="questionVisual"><span>12</span><span>18</span><span>15</span><span>20</span><span>14</span></div></div>;
  if (kind === "discrete") return <div className="visualCard"><p className="visualTitle">COUNTED VALUES</p><div className="dotScale">{[0,1,2,3,4,5].map((n) => <span key={n}>{n}</span>)}</div></div>;
  if (kind === "continuous" || kind === "possible-values") return <div className="visualCard"><p className="visualTitle">A CONTINUOUS MEASUREMENT SCALE</p><div className="rangeScale"><span>2 kg</span><i className="roundedMarker" /><span>3 kg</span><span>4 kg</span></div></div>;
  if (kind === "grouped-frequency") return <div className="visualCard"><p className="visualTitle">NUMBER OF OFFICERS</p><table className="valueTable"><thead><tr><th>15–19</th><th>20–24</th><th>25–29</th></tr></thead><tbody><tr><td>?</td><td>?</td><td>?</td></tr></tbody></table></div>;
  if (kind === "frequency-total") return <div className="visualCard"><p className="visualTitle">ADD THE FREQUENCIES</p><div className="equationVisual">2 + 4 + 3 + 3 = ?</div></div>;
  if (kind === "class-intervals") return <div className="visualCard"><p className="visualTitle">JOURNEY TIMES (MINUTES)</p><div className="intervalRow"><span>3, 7</span><span>12, 18</span><span>24, 27</span></div></div>;
  if (kind === "combined-chart") return <MiniChart />;
  if (kind === "rainfall-change") return <div className="visualCard"><p className="visualTitle">RAINFALL</p><div className="changeVisual"><b>March<br />30 mm</b><span>→</span><b>June<br />55 mm</b></div></div>;
  if (kind === "chart-axes") return <div className="visualCard"><p className="visualTitle">CHECK BOTH VERTICAL AXES</p><div className="axesVisual"><div className="horizontal" /><div className="leftAxis" /><div className="rightAxis" /><label>Temperature<br />(°C)</label><label>Rainfall<br />(mm)</label></div></div>;
  if (kind === "stem-value") return <div className="visualCard"><p className="visualTitle">STEM-AND-LEAF DIAGRAM</p><table className="stemTable"><thead><tr><th>Stem</th><th>Leaf</th></tr></thead><tbody><tr><td>6</td><td><span className="highlightLeaf">4</span></td></tr></tbody></table><div className="keyBox">Key: 6 | 4 means 64</div></div>;
  if (kind === "stem-repeat") return <div className="visualCard"><p className="visualTitle">STEM-AND-LEAF DIAGRAM</p><table className="stemTable"><thead><tr><th>Stem</th><th>Leaf</th></tr></thead><tbody><tr><td>6</td><td>0  1  <span className="highlightLeaf">4</span>  <span className="highlightLeaf">4</span>  8</td></tr></tbody></table><div className="keyBox">Key: 6 | 4 means 64</div></div>;
  return <div className="visualCard"><p className="visualTitle">BACK-TO-BACK STEM-AND-LEAF DIAGRAM</p><table className="backTable"><thead><tr><th>Class A</th><th>Stem</th><th>Class B</th></tr></thead><tbody><tr><td>8  5  2</td><td>4</td><td>3  6</td></tr><tr><td>7  3  1</td><td>5</td><td>2  4  5</td></tr><tr><td>4  0</td><td>6</td><td>1  2  6</td></tr></tbody></table><div className="keyBox">Key: 2 | 4 | 3 means 42 for Class A and 43 for Class B</div></div>;
}

function MiniChart() {
  const data = [
    { month: "Mar", temperature: 18, rainfall: 30 },
    { month: "Apr", temperature: 20, rainfall: 40 },
    { month: "May", temperature: 22, rainfall: 48 },
    { month: "Jun", temperature: 24, rainfall: 55 },
  ];
  const xs = [145, 265, 385, 505];
  const baseline = 285;
  const tempY = (n: number) => baseline - n * 7;
  const rainY = (n: number) => baseline - n * 3.5;
  const points = data.map((d, i) => `${xs[i]},${rainY(d.rainfall)}`).join(" ");
  return (
    <div className="visualCard">
      <p className="visualTitle">MONTHLY AVERAGE TEMPERATURE AND RAINFALL</p>
      <svg className="miniChart" viewBox="0 0 650 350" role="img" aria-label="Combined temperature and rainfall diagram from March to June">
        {[0,10,20,30].map((n) => { const y = baseline - n * 7; return <g key={n}><line x1="85" y1={y} x2="565" y2={y} className="chartGrid" /><text x="66" y={y + 5} textAnchor="end" className="chartText">{n}</text><text x="584" y={y + 5} className="chartText">{n * 2}</text></g>; })}
        <line x1="85" y1="75" x2="85" y2={baseline} className="chartAxis" /><line x1="565" y1="75" x2="565" y2={baseline} className="chartAxis" /><line x1="85" y1={baseline} x2="565" y2={baseline} className="chartAxis" />
        {data.map((d,i) => { const y = tempY(d.temperature); return <g key={d.month}><rect x={xs[i]-25} y={y} width="50" height={baseline-y} className="temperatureBar" /><text x={xs[i]} y="316" textAnchor="middle" className="chartText">{d.month}</text></g>; })}
        <polyline points={points} className="rainfallLine" />
        {data.map((d,i) => <circle key={d.month} cx={xs[i]} cy={rainY(d.rainfall)} r="7" className="rainfallPoint" />)}
        <text x="24" y="190" transform="rotate(-90 24 190)" textAnchor="middle" className="chartText">Temperature (°C)</text><text x="626" y="190" transform="rotate(90 626 190)" textAnchor="middle" className="chartText">Rainfall (mm)</text>
      </svg>
      <div className="chartKey"><span><i className="barKey" />Temperature</span><span><i className="lineKey" />Rainfall</span></div>
    </div>
  );
}
