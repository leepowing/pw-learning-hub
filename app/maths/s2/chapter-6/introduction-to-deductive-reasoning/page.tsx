"use client";
import { reasonRef } from "@/data/maths/reasons/reasonBank";
import { DualReason, ReasonContent } from "@/components/maths/DualReason";



import { useState } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-6/introduction-to-deductive-reasoning/page.tsx
// Self-contained lesson. Practice answers are temporary React state, not cloud progress.
const questions = [
  {
    id: "given",
    prompt: "Given that A, O and B lie on a straight line, prove that two equal adjacent angles at O are each 90°. Which statement is the conclusion to prove?",
    options: ["A, O and B lie on a straight line.", "The two adjacent angles are equal.", "Each of the two angles is 90°."],
    answer: 2,
    explanation: "The straight line and the equal angles are given. The conclusion is the result that must follow: each angle is 90°.",
  },
  {
    id: "reason",
    prompt: "A, O and B lie on a straight line. Ray OC lies between OA and OB, and ∠AOC = 47°. Which reason justifies 47° + ∠COB = 180°?",
    options: ["Adjacent angles on a straight line.", "Angles at a point.", "Vertically opposite angles."],
    answer: 0,
    explanation: "OA and OB are opposite rays on a straight line. The two adjacent angles therefore sum to 180°, so ∠COB = 133°." + reasonRef("angles.straightLine", {"variant":"textbook1"}),
  },
  {
    id: "deduction",
    prompt: "Which argument uses deductive reasoning?",
    options: ["These three triangles look equal, so every triangle has the same size.", "A right angle is 90°. ∠PQR is a right angle, so ∠PQR = 90°.", "A protractor gives about 90°, so this proves that the lines are perpendicular."],
    answer: 1,
    explanation: "The correct argument applies a definition to a given fact. Appearance and approximate measurements are not exact mathematical proofs.",
  },
  {
    id: "converse",
    prompt: "Vertically opposite angles are equal. Two angles are equal. Must they be vertically opposite?",
    options: ["Yes: any two equal angles are vertically opposite.", "Yes: equality proves that two lines intersect.", "No: two separate right angles are equal but need not be vertically opposite."],
    answer: 2,
    explanation: "Reversing a true statement does not automatically give another true statement. Two separate 90° angles provide a counterexample.",
  },
] as const;

export default function DeductiveReasoningPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const answered = questions.filter((q) => answers[q.id] !== undefined).length;
  const correct = questions.filter((q) => answers[q.id] === q.answer).length;

  return (
    <main className="deductionPage">
      <Link className="backLink" href="/maths/s2/chapter-6">← Back to Chapter 6</Link>
      <header>
        <p className="eyebrow">S2 · CHAPTER 6 · SECTION 1</p>
        <h1>Introduction to Deductive Reasoning</h1>
        <p className="introduction">Go beyond finding an answer. Learn to explain why a conclusion must be true, using known facts and a logical chain of reasons.</p>
        <div className="objectives" aria-label="Learning objectives">
          <span>Identify the given facts</span><span>Justify each step</span><span>Reach the conclusion</span>
        </div>
      </header>

      <section className="lessonCard">
        <div className="lessonHeading"><span className="lessonNumber">1</span><div><p className="lessonLabel">CORE IDEA</p><h2>What is deductive reasoning?</h2></div></div>
        <p><strong>Deductive reasoning</strong> uses accepted facts, definitions or established theorems to reach a conclusion through logical steps. If the starting facts are true and the reasoning is valid, the conclusion must be true.</p>
        <ol className="reasoningChain" aria-label="A deductive argument in three steps">
          <li><span className="smallLabel">KNOWN RULE</span><h3>A right angle measures 90°.</h3><p>This is a definition.</p></li>
          <li><span className="smallLabel">GIVEN FACT</span><h3>∠ABC is a right angle.</h3><p>This is stated in the question.</p></li>
          <li><span className="smallLabel">CONCLUSION</span><h3>∠ABC = 90°.</h3><p>This follows from the first two statements.</p></li>
        </ol>
        <div className="note"><strong>The key question:</strong> “What fact or rule allows me to make this statement?”</div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading"><span className="lessonNumber">2</span><div><p className="lessonLabel">READ THE QUESTION</p><h2>Separate the given facts from the goal</h2></div></div>
        <div className="twoColumns vocabulary">
          <article className="softPanel"><p className="smallLabel">GIVEN / HYPOTHESIS</p><h3>What may I use?</h3><p>The conditions supplied by the question. They are the starting point of the proof.</p></article>
          <article className="softPanel green"><p className="smallLabel">CONCLUSION / TO PROVE</p><h3>What must I establish?</h3><p>The statement you must justify. Do not treat it as a given fact.</p></article>
        </div>
        <div className="questionStrip"><strong>Example:</strong> If A, O and B lie on a straight line and ∠AOC = 68°, prove that ∠COB = 112°. Ray OC lies between OA and OB.</div>
        <div className="twoColumns">
          <figure>
            <svg viewBox="0 0 480 280" role="img" aria-label="A, O and B are collinear. Ray OC splits the upper straight angle into ∠AOC of 68 degrees and unknown ∠COB.">
              <line x1="46" y1="210" x2="432" y2="210" className="mainLine" />
              <line x1="244" y1="210" x2="180" y2="51" className="mainLine" />
              <path d="M190 210 A54 54 0 0 1 224 160" className="arc purpleArc" />
              <path d="M217 143 A72 72 0 0 1 316 210" className="arc tealArc" />
              <circle cx="244" cy="210" r="4" fill="#172d50" />
              <text x="36" y="238" className="pointText">A</text><text x="235" y="239" className="pointText">O</text><text x="427" y="239" className="pointText">B</text><text x="167" y="40" className="pointText">C</text>
              <text x="169" y="180" className="angleText purpleText">68°</text><text x="277" y="161" className="angleText tealText">?</text>
            </svg>
            <figcaption>Use the stated facts. The diagram is not a measuring tool.</figcaption>
          </figure>
          <div className="factsList">
            <div><span className="pill">GIVEN</span><p>A, O and B are collinear; OC lies between OA and OB; ∠AOC = 68°.</p></div>
            <div><span className="pill greenPill">TO PROVE</span><p>∠COB = 112°.</p></div>
            <div><span className="pill">USEFUL RULE</span><p>Adjacent angles on a straight line sum to 180°.</p></div>
          </div>
        </div>
        <p className="warning"><strong>Avoid circular reasoning:</strong> you cannot write “∠COB = 112° because that is what the question asks us to prove.”</p>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading"><span className="lessonNumber">3</span><div><p className="lessonLabel">WORKED EXAMPLE 1</p><h2>Pair each statement with a reason</h2></div></div>
        <p>Use the facts from the diagram above. A two-column proof keeps the calculation and its justification together.</p>
        <div className="tableWrap">
          <table>
            <caption>Proof that ∠COB = 112°</caption>
            <thead><tr><th scope="col">Statement</th><th scope="col">Reason</th></tr></thead>
            <tbody>
              <tr><td>A, O and B lie on a straight line.</td><td><DualReason reasonId="geometry.given" variant="textbook1" /></td></tr>
              <tr><td>∠AOC + ∠COB = 180°</td><td><DualReason reasonId="angles.straightLine" variant="textbook1" /></td></tr>
              <tr><td>68° + ∠COB = 180°</td><td><ReasonContent>{"Substitute ∠AOC = 68° " + reasonRef("geometry.given") + "."}</ReasonContent></td></tr>
              <tr><td>∠COB = 180° − 68°</td><td>Subtract 68° from both sides.</td></tr>
              <tr className="conclusionRow"><td>∴ ∠COB = 112°</td><td>Simplify. The required conclusion follows.</td></tr>
            </tbody>
          </table>
        </div>
        <div className="twoColumns">
          <div className="note"><strong>∴ means “therefore”.</strong><br />It introduces a conclusion supported by earlier steps.</div>
          <div className="note"><strong>Standard reason:</strong><br /><ReasonContent>{reasonRef("angles.straightLine", {"variant":"textbook1"})}</ReasonContent></div>
        </div>
        <p className="supportText">A numerical answer alone is not a complete proof. The reason explains why the equation is valid.</p>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading"><span className="lessonNumber">4</span><div><p className="lessonLabel">WORKED EXAMPLE 2</p><h2>Deduce a new geometric fact</h2></div></div>
        <p>A, O and B lie on a straight line. Ray OC lies between OA and OB, and <strong>∠AOC = ∠COB</strong>. Prove that <strong>OC ⟂ AB</strong>.</p>
        <div className="twoColumns">
          <figure>
            <svg viewBox="0 0 480 280" role="img" aria-label="A, O and B lie on a straight line. Ray OC divides the upper straight angle into two equal angles, each labelled x. Perpendicularity is to be proved, not given.">
              <line x1="46" y1="212" x2="432" y2="212" className="mainLine" />
              <line x1="240" y1="212" x2="240" y2="44" className="mainLine" />
              <path d="M184 212 A56 56 0 0 1 240 156" className="arc purpleArc" />
              <path d="M240 156 A56 56 0 0 1 296 212" className="arc purpleArc" />
              <path d="M197 169 L205 177 M275 177 L283 169" className="arc purpleArc" />
              <circle cx="240" cy="212" r="4" fill="#172d50" />
              <text x="36" y="240" className="pointText">A</text><text x="231" y="241" className="pointText">O</text><text x="427" y="240" className="pointText">B</text><text x="253" y="44" className="pointText">C</text>
              <text x="177" y="164" className="angleText purpleText">x</text><text x="289" y="164" className="angleText purpleText">x</text>
            </svg>
            <figcaption>The matching arc marks show equal angles. No right-angle mark is given.</figcaption>
          </figure>
          <div className="softPanel"><p className="smallLabel">PLAN THE ARGUMENT</p><h3>Equal angles + a straight line</h3><p>Let each angle be x. Use the straight-line angle sum to find x, then use the meaning of perpendicular lines.</p><p><strong>⟂ means “is perpendicular to”.</strong> Perpendicular lines meet at a right angle.</p></div>
        </div>
        <details className="solution">
          <summary>Reveal the step-by-step proof</summary>
          <div className="tableWrap">
            <table>
              <caption>From equal angles to perpendicular lines</caption>
              <thead><tr><th scope="col">Statement</th><th scope="col">Reason</th></tr></thead>
              <tbody>
                <tr><td>Let ∠AOC = ∠COB = x.</td><td><ReasonContent>{"The two angles are equal " + reasonRef("geometry.given") + "."}</ReasonContent></td></tr>
                <tr><td>x + x = 180°</td><td><DualReason reasonId="angles.straightLine" variant="textbook1" /></td></tr>
                <tr><td>2x = 180°</td><td>Collect like terms.</td></tr>
                <tr><td>x = 90°</td><td>Divide both sides by 2.</td></tr>
                <tr><td>∠COB = 90°</td><td>Substitute the value of x.</td></tr>
                <tr className="conclusionRow"><td>∴ OC ⟂ AB</td><td><DualReason reasonId="geometry.perpendicular" /></td></tr>
              </tbody>
            </table>
          </div>
        </details>
        <p className="warning"><strong>Prove it, do not assume it:</strong> the ray may look vertical, but its appearance is not the reason that OC is perpendicular to AB.</p>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading"><span className="lessonNumber">5</span><div><p className="lessonLabel">CHECK YOUR LOGIC</p><h2>What does not count as a proof?</h2></div></div>
        <div className="twoColumns">
          <article className="softPanel"><h3>“It works in my examples.”</h3><p>Several examples may suggest a pattern. This is <strong>inductive reasoning</strong>, and it can help you form a conjecture. It does not, by itself, prove a claim about every case.</p><p><strong>Deduction:</strong> use rules and valid steps that apply to the stated conditions.</p></article>
          <article className="softPanel"><h3>“It looks right in the diagram.”</h3><p>Equal-looking lengths, apparent parallel lines and protractor measurements are not exact justifications.</p><p><strong>Use:</strong> the written conditions, explicit diagram markings, definitions and established theorems.</p></article>
        </div>
        <div className="converseBox">
          <p className="smallLabel">A STATEMENT AND ITS CONVERSE</p>
          <h3>Do not reverse an argument automatically</h3>
          <p><strong>True:</strong> if two angles are vertically opposite, then they are equal.</p>
          <p><strong>Not always true:</strong> if two angles are equal, then they are vertically opposite.</p>
          <p>Two separate right angles are both 90° but need not share a vertex. This is a <strong>counterexample</strong>: one case that disproves the reversed claim.</p>
          <p className="supportText">Some converses are true, but they need justification. Section 2 will use established converses to prove that lines are parallel.</p>
        </div>
      </section>

      <section className="lessonCard practiceCard" aria-labelledby="practiceTitle">
        <div className="lessonHeading"><span className="lessonNumber">6</span><div><p className="lessonLabel">QUICK CHECK</p><h2 id="practiceTitle">Can you justify the conclusion?</h2></div></div>
        <p>Choose one answer for each question. Read the feedback and change your answer if needed.</p>
        <p className="supportText">This is an on-page self-check. Answers reset when you reload; they are not saved as Flashcard or Checkpoint progress.</p>
        {questions.map((question, questionIndex) => {
          const selected = answers[question.id];
          const isAnswered = selected !== undefined;
          const isCorrect = selected === question.answer;
          return (
            <fieldset key={question.id} className="quizQuestion">
              <legend><span className="questionNumber">{questionIndex + 1}.</span> {question.prompt}</legend>
              <div className="options">
                {question.options.map((option, optionIndex) => (
                  <label key={option} className={`option${selected === optionIndex ? " selectedOption" : ""}`}>
                    <input type="radio" name={`deduction-${question.id}`} value={optionIndex} checked={selected === optionIndex} onChange={() => setAnswers((previous) => ({ ...previous, [question.id]: optionIndex }))} aria-describedby={isAnswered ? `feedback-${question.id}` : undefined} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <div id={`feedback-${question.id}`} aria-live="polite" aria-atomic="true">
                {isAnswered && <p className={`feedback ${isCorrect ? "correctFeedback" : "retryFeedback"}`}><strong>{isCorrect ? "Correct. " : "Not quite. "}</strong><ReasonContent>{question.explanation}</ReasonContent></p>}
              </div>
            </fieldset>
          );
        })}
        <div className="practiceFooter">
          <p role="status">{answered} of {questions.length} answered · {correct} correct{correct === questions.length ? " — all correct!" : ""}</p>
          <button type="button" className="secondaryButton" onClick={() => setAnswers({})}>Reset self-check</button>
        </div>
      </section>

      <section className="summaryCard">
        <p className="lessonLabel">SECTION SUMMARY</p><h2>A reliable proof has a clear route</h2>
        <ol className="summaryList"><li><strong>Identify</strong> the given conditions and the conclusion.</li><li><strong>Choose</strong> a definition or theorem that fits the facts.</li><li><strong>Deduce</strong> one statement at a time, with a reason.</li><li><strong>Finish</strong> by stating exactly what you were asked to prove.</li></ol>
        <div className="finishRow"><Link href="/maths/s2/chapter-6" className="primaryLink">Back to Chapter 6 →</Link><p>Next topic: proofs relating to intersecting and parallel lines. Open it from the chapter page when available.</p></div>
      </section>

      <style jsx>{`
        .deductionPage { max-width: 1120px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.65; }
        .deductionPage *, .deductionPage *::before, .deductionPage *::after { box-sizing: border-box; }
        .deductionPage :global(.backLink) { display: inline-block; color: #047857; font-size: 17px; font-weight: 800; text-decoration: none; margin-bottom: 25px; }
        header { margin-bottom: 30px; }
        h1 { font-size: clamp(34px, 4.8vw, 52px); line-height: 1.15; letter-spacing: -0.025em; margin: 0 0 18px; max-width: 960px; }
        h2 { font-size: clamp(24px, 3vw, 33px); line-height: 1.25; margin: 0 0 8px; letter-spacing: -0.015em; }
        h3 { font-size: 21px; line-height: 1.4; margin: 0 0 10px; }
        p { margin: 12px 0; }
        .eyebrow, .lessonLabel, .smallLabel { color: #6d28d9; font-size: 13px; line-height: 1.5; font-weight: 900; letter-spacing: 0.1em; margin: 0 0 7px; }
        .introduction { max-width: 940px; color: #52657e; font-size: 20px; }
        .objectives { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
        .objectives span { border: 1px solid #ddd6fe; background: #f5f3ff; color: #5b21b6; padding: 6px 13px; border-radius: 999px; font-size: 14px; font-weight: 700; }
        .lessonCard { background: #fff; border: 1px solid #dce4f1; border-radius: 26px; margin-bottom: 24px; padding: 32px; box-shadow: 0 8px 25px rgba(27, 42, 74, 0.035); }
        .lessonHeading { display: flex; align-items: flex-start; gap: 17px; margin-bottom: 22px; }
        .lessonHeading > div { min-width: 0; }
        .lessonNumber { display: flex; justify-content: center; align-items: center; flex-shrink: 0; width: 54px; height: 54px; border-radius: 17px; background: #ede9fe; color: #6d28d9; font-size: 25px; font-weight: 800; }
        .reasoningChain { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; list-style: none; margin: 24px 0 20px; padding: 0; counter-reset: reasoning; }
        .reasoningChain li { position: relative; padding: 22px; border: 1px solid #ddd6fe; border-radius: 18px; background: #f8f6ff; }
        .reasoningChain li::before { counter-increment: reasoning; content: counter(reasoning) ". "; color: #6d28d9; font-size: 14px; font-weight: 900; }
        .reasoningChain li:last-child { background: #ecfdf5; border-color: #a7f3d0; }
        .reasoningChain h3 { margin-top: 14px; }
        .reasoningChain p { color: #52657e; font-size: 16px; margin-bottom: 0; }
        .twoColumns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; align-items: center; margin: 20px 0; }
        .vocabulary { align-items: stretch; }
        .softPanel { padding: 24px; background: #f5f3ff; border: 1px solid #e2d9fc; border-radius: 18px; }
        .softPanel p:last-child { margin-bottom: 0; }
        .green { background: #ecfdf5; border-color: #a7f3d0; }
        .green .smallLabel { color: #047857; }
        .questionStrip { padding: 20px 23px; border-radius: 16px; background: #f1f5fb; }
        figure { margin: 0; background: #f8fafc; padding: 14px; border: 1px solid #dce4f1; border-radius: 19px; }
        svg { display: block; width: 100%; height: auto; }
        figcaption { text-align: center; color: #52657e; font-size: 14px; line-height: 1.5; padding: 5px 8px 10px; }
        .mainLine { stroke: #172d50; stroke-width: 3.5; stroke-linecap: round; fill: none; }
        .arc { fill: none; stroke-width: 2.5; stroke-linecap: round; }
        .purpleArc { stroke: #7c3aed; }
        .tealArc { stroke: #0f766e; }
        .pointText { fill: #172d50; font-size: 23px; font-family: Georgia, serif; font-style: italic; }
        .angleText { font-size: 27px; font-weight: 700; }
        .purpleText { fill: #6d28d9; }
        .tealText { fill: #0f766e; }
        .factsList > div { padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
        .factsList > div:last-child { border-bottom: 0; }
        .factsList p { margin: 8px 0 0; }
        .pill { display: inline-block; border-radius: 7px; padding: 3px 8px; background: #ede9fe; color: #5b21b6; font-size: 12px; font-weight: 900; letter-spacing: 0.06em; }
        .greenPill { background: #d1fae5; color: #065f46; }
        .note { background: #eff6ff; border-left: 4px solid #0ea5e9; padding: 18px 20px; border-radius: 13px; }
        .warning { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 18px 20px; border-radius: 13px; color: #794512; font-size: 17px; }
        .workedCard { border-color: #b7e7d9; }
        .tableWrap { margin: 22px 0; overflow-x: auto; border: 1px solid #cbd5e1; border-radius: 16px; }
        table { border-collapse: collapse; width: 100%; table-layout: fixed; text-align: left; }
        caption { text-align: left; color: #52657e; padding: 15px 18px; background: #f8fafc; font-size: 15px; font-weight: 700; }
        th, td { padding: 16px 18px; vertical-align: top; overflow-wrap: anywhere; }
        th { background: #0f766e; color: white; font-size: 16px; }
        td { border-bottom: 1px solid #dde6ef; font-size: 17px; }
        td:first-child { font-weight: 650; }
        td + td { border-left: 1px solid #dde6ef; color: #52657e; }
        tr:last-child td { border-bottom: 0; }
        .conclusionRow td { background: #ecfdf5; color: #065f46; }
        .supportText { color: #52657e; font-size: 15px; }
        .solution { margin-top: 22px; border: 1px solid #c4b5fd; border-radius: 16px; background: #faf8ff; }
        .solution summary { padding: 18px 22px; color: #5b21b6; font-size: 18px; font-weight: 800; cursor: pointer; }
        .solution .tableWrap { margin: 0 18px 18px; background: white; }
        .converseBox { padding: 24px; border: 1px solid #fcd592; background: #fffbeb; border-radius: 18px; margin-top: 22px; }
        .converseBox .smallLabel { color: #92400e; }
        .practiceCard { border-color: #c4b5fd; }
        .quizQuestion { margin: 26px 0; padding: 20px; border: 1px solid #dce4f1; border-radius: 18px; min-width: 0; }
        legend { max-width: 100%; padding: 0 8px; font-size: 18px; font-weight: 750; line-height: 1.6; }
        .questionNumber { color: #6d28d9; }
        .options { display: grid; gap: 10px; }
        .option { display: flex; align-items: flex-start; gap: 12px; padding: 15px; border: 1px solid #cbd5e1; border-radius: 12px; cursor: pointer; font-size: 17px; background: white; }
        .option:hover { border-color: #8b5cf6; background: #faf5ff; }
        .option input { margin: 6px 0 0; width: 18px; height: 18px; flex-shrink: 0; accent-color: #7c3aed; }
        .selectedOption { border-color: #7c3aed; background: #f5f3ff; box-shadow: inset 0 0 0 1px #7c3aed; }
        .feedback { padding: 15px 17px; border-radius: 12px; margin-bottom: 0; font-size: 16px; }
        .correctFeedback { background: #ecfdf5; color: #065f46; }
        .retryFeedback { background: #fff7ed; color: #9a3412; }
        .practiceFooter { display: flex; gap: 16px; align-items: center; justify-content: space-between; flex-wrap: wrap; }
        .practiceFooter p { font-weight: 800; }
        .secondaryButton { background: white; color: #5b21b6; border: 1px solid #a78bfa; padding: 12px 18px; border-radius: 12px; font: inherit; font-size: 16px; font-weight: 750; cursor: pointer; min-height: 44px; }
        .summaryCard { background: linear-gradient(135deg, #ecfdf5, #f0fdfa); border: 1px solid #a7f3d0; border-radius: 26px; padding: 32px; }
        .summaryCard .lessonLabel { color: #047857; }
        .summaryList { margin: 18px 0 26px; padding-left: 24px; }
        .summaryList li { margin: 10px 0; padding-left: 5px; }
        .finishRow { border-top: 1px solid #a7f3d0; padding-top: 24px; display: flex; align-items: center; gap: 22px; }
        .deductionPage :global(.primaryLink) { display: inline-block; flex-shrink: 0; padding: 14px 20px; border-radius: 13px; background: #047857; color: white; font-size: 16px; font-weight: 800; text-decoration: none; }
        .finishRow p { font-size: 15px; color: #52657e; margin: 0; }
        button:focus-visible, summary:focus-visible, input:focus-visible, .deductionPage :global(a:focus-visible) { outline: 3px solid #2563eb; outline-offset: 4px; }
        @media (max-width: 820px) { .reasoningChain { grid-template-columns: 1fr; } .twoColumns { grid-template-columns: 1fr; } .finishRow { align-items: flex-start; flex-direction: column; } figure { max-width: 520px; width: 100%; margin: 0 auto; } }
        @media (max-width: 520px) { .deductionPage { width: calc(100% - 28px); margin-top: 26px; font-size: 17px; } .lessonCard, .summaryCard { padding: 22px 17px; border-radius: 20px; } .lessonHeading { gap: 12px; } .lessonNumber { width: 42px; height: 42px; border-radius: 13px; font-size: 21px; } .lessonLabel { font-size: 12px; } .introduction { font-size: 18px; } th, td { padding: 12px 10px; font-size: 15px; } .quizQuestion { padding: 14px 10px; } legend { font-size: 17px; } .option { padding: 13px 11px; font-size: 16px; } .solution summary { padding: 16px; } .solution .tableWrap { margin: 0 8px 12px; } .softPanel { padding: 19px; } }
      `}</style>
    </main>
  );
}
