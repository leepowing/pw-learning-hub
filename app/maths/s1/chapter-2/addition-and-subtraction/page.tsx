"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "−17", correct: false },
  { label: "−9", correct: true },
  { label: "−5", correct: false },
  { label: "+3", correct: false },
];

export default function AdditionAndSubtractionDirectedNumbersPage() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const selectedOption = quizOptions.find(
    (option) => option.label === selectedAnswer
  );

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1/chapter-2")}
      >
        ← Back to Chapter 2
      </button>

      <p className="eyebrow">S1 · CHAPTER 2 · SECTION 2</p>
      <h1>Addition and Subtraction of Directed Numbers</h1>

      <p className="introduction">
        Addition combines directed changes, while subtraction can be rewritten
        as addition of the opposite number. Use number-line movement and sign
        rules to calculate accurately.
      </p>

      <section className="lessonCard movementCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">NUMBER-LINE MOVEMENT</p>
            <h2>Add by moving from the starting value</h2>
          </div>
        </div>

        <div className="movementRules">
          <article className="rightRule">
            <span>→</span>
            <div>
              <strong>Add a positive number</strong>
              <p>Move to the right.</p>
            </div>
          </article>
          <article className="leftRule">
            <span>←</span>
            <div>
              <strong>Add a negative number</strong>
              <p>Move to the left.</p>
            </div>
          </article>
        </div>

        <div className="numberLineExample">
          <div className="exampleHeading">
            <span>Start at −2</span>
            <strong>−2 + (+5) = +3</strong>
          </div>

          <div className="numberLine" aria-label="Move from negative two to positive three">
            {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={
                  value === -2
                    ? "numberTick startTick"
                    : value === 3
                      ? "numberTick endTick"
                      : "numberTick"
                }
              >
                <i />
                <b>{value > 0 ? `+${value}` : value}</b>
              </span>
            ))}
            <div className="moveArrow">+5 →</div>
          </div>
        </div>

        <div className="secondExample">
          <strong>+3 + (−7) = −4</strong>
          <span>Start at +3 and move 7 units left.</span>
        </div>
      </section>

      <section className="lessonCard additionCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">ADDING DIRECTED NUMBERS</p>
            <h2>Compare the signs and magnitudes</h2>
          </div>
        </div>

        <div className="additionRules">
          <article className="sameSignsCard">
            <span className="ruleTag">SAME SIGNS</span>
            <h3>Add the magnitudes and keep the common sign</h3>
            <div className="ruleExamples">
              <span>(+4) + (+7) = +(4 + 7) = +11</span>
              <span>(−4) + (−7) = −(4 + 7) = −11</span>
            </div>
          </article>

          <article className="differentSignsCard">
            <span className="ruleTag">DIFFERENT SIGNS</span>
            <h3>Subtract magnitudes and use the sign of the larger magnitude</h3>
            <div className="ruleExamples">
              <span>(+9) + (−5) = +(9 − 5) = +4</span>
              <span>(+5) + (−9) = −(9 − 5) = −4</span>
            </div>
          </article>
        </div>

        <div className="magnitudeReminder">
          <strong>Magnitude means distance from zero.</strong>
          <span>
            The magnitude of −9 is 9, so −9 has a larger magnitude than +5.
          </span>
        </div>
      </section>

      <section className="lessonCard subtractionCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">SUBTRACTION RULE</p>
            <h2>Add the opposite number</h2>
          </div>
        </div>

        <div className="mainRule">
          <span>GENERAL RULE</span>
          <strong>a − b = a + (−b)</strong>
          <p>Change subtraction to addition, then change the sign of the second number.</p>
        </div>

        <div className="subtractionExamples">
          <article>
            <p className="exampleLabel">SUBTRACT A POSITIVE</p>
            <h3>(−3) − (+5)</h3>
            <div>
              <span>= (−3) + (−5)</span>
              <strong>= −8</strong>
            </div>
          </article>
          <article>
            <p className="exampleLabel">SUBTRACT A NEGATIVE</p>
            <h3>(−3) − (−5)</h3>
            <div>
              <span>= (−3) + (+5)</span>
              <strong>= +2</strong>
            </div>
          </article>
          <article>
            <p className="exampleLabel">POSITIVE START</p>
            <h3>(+6) − (−4)</h3>
            <div>
              <span>= (+6) + (+4)</span>
              <strong>= +10</strong>
            </div>
          </article>
        </div>

        <div className="subtractNegativeNote">
          <span>−(−)</span>
          <p>
            Subtracting a negative number produces addition because the
            opposite of a negative number is positive.
          </p>
        </div>
      </section>

      <section className="lessonCard bracketsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">REMOVING BRACKETS</p>
            <h2>Combine the operation sign and number sign</h2>
          </div>
        </div>

        <div className="bracketRules">
          <article>
            <span>x + (+a)</span>
            <strong>= x + a</strong>
          </article>
          <article>
            <span>x + (−a)</span>
            <strong>= x − a</strong>
          </article>
          <article>
            <span>x − (+a)</span>
            <strong>= x − a</strong>
          </article>
          <article>
            <span>x − (−a)</span>
            <strong>= x + a</strong>
          </article>
        </div>

        <div className="bracketExplanation">
          <div>
            <strong>Same signs become +</strong>
            <span>+(+) and −(−)</span>
          </div>
          <div>
            <strong>Different signs become −</strong>
            <span>+(−) and −(+)</span>
          </div>
        </div>
      </section>

      <section className="lessonCard mixedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">MIXED CALCULATIONS</p>
            <h2>Remove brackets, then work from left to right</h2>
          </div>
        </div>

        <div className="workedGrid">
          <article>
            <p className="exampleLabel">EXAMPLE A</p>
            <h3>(−8) + (+3) − (−6)</h3>
            <div className="calculation">
              <span>= −8 + 3 + 6</span>
              <span>= −5 + 6</span>
              <strong>= +1</strong>
            </div>
          </article>

          <article>
            <p className="exampleLabel">EXAMPLE B</p>
            <h3>(+12) − (+17) + (−4)</h3>
            <div className="calculation">
              <span>= 12 − 17 − 4</span>
              <span>= −5 − 4</span>
              <strong>= −9</strong>
            </div>
          </article>

          <article>
            <p className="exampleLabel">EXAMPLE C</p>
            <h3>−2.5 − (−1.2) + 0.8</h3>
            <div className="calculation">
              <span>= −2.5 + 1.2 + 0.8</span>
              <span>= −1.3 + 0.8</span>
              <strong>= −0.5</strong>
            </div>
          </article>
        </div>

        <p className="leftToRightNote">
          Addition and subtraction have equal priority. After removing
          brackets, calculate from left to right.
        </p>
      </section>

      <section className="lessonCard applicationCard">
        <div className="lessonHeading">
          <span className="lessonNumber">6</span>
          <div>
            <p className="lessonLabel">APPLICATION</p>
            <h2>Represent changes with directed numbers</h2>
          </div>
        </div>

        <div className="applicationExample">
          <div>
            <span className="applicationIcon">🌡️</span>
            <h3>Temperature change</h3>
            <p>
              The temperature is −4°C. It rises by 7°C, then falls by 3°C.
            </p>
          </div>
          <div className="applicationWorking">
            <span>−4 + (+7) + (−3)</span>
            <span>= +3 − 3</span>
            <strong>= 0°C</strong>
          </div>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Evaluate (−7) − (−4) + (−6).</h2>

        <div className="quizOptions">
          {quizOptions.map((option) => {
            const selected = selectedAnswer === option.label;
            const className = selected
              ? option.correct
                ? "quizOption correctOption"
                : "quizOption incorrectOption"
              : "quizOption";

            return (
              <button
                key={option.label}
                type="button"
                className={className}
                onClick={() => setSelectedAnswer(option.label)}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {selectedOption && (
          <div
            className={
              selectedOption.correct
                ? "feedback correctFeedback"
                : "feedback incorrectFeedback"
            }
          >
            <strong>{selectedOption.correct ? "Correct!" : "Try again."}</strong>
            <span>
              (−7) − (−4) + (−6) = −7 + 4 − 6 = −3 − 6 = −9.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Do not lose the operation sign</h2>
        <ul>
          <li>Adding magnitudes when the two numbers have different signs.</li>
          <li>Keeping the sign of the first number instead of the larger magnitude.</li>
          <li>Forgetting to change subtraction into addition of the opposite.</li>
          <li>Changing both numbers instead of only the number being subtracted.</li>
          <li>Ignoring left-to-right order in a chain of additions and subtractions.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Read, rewrite, then calculate</h2>
        <div className="summaryGrid">
          <article>
            <strong>Same signs</strong>
            <span>add magnitudes</span>
          </article>
          <article>
            <strong>Different signs</strong>
            <span>subtract magnitudes</span>
          </article>
          <article>
            <strong>Subtraction</strong>
            <span>add the opposite</span>
          </article>
          <article>
            <strong>Mixed operations</strong>
            <span>work left to right</span>
          </article>
        </div>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s1/chapter-2")}
        >
          ← Return to Chapter 2
        </button>
      </div>

      <style jsx>{`
        .page {
          max-width: 1040px;
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

        .eyebrow,
        .lessonLabel,
        .ruleTag,
        .exampleLabel,
        .quizLabel,
        .mistakesLabel,
        .summaryLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #e11d48;
        }

        h1 {
          max-width: 900px;
          margin: 0;
          font-size: clamp(35px, 5vw, 52px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .introduction {
          max-width: 830px;
          margin: 18px 0 32px;
          color: #5c667a;
          font-size: 19px;
          line-height: 1.65;
        }

        .lessonCard,
        .quizCard,
        .mistakesCard,
        .summaryCard {
          margin-top: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 25px;
          background: white;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.055);
        }

        .lessonHeading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .lessonNumber {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background: #fff7ed;
          color: #c2410c;
          font-size: 22px;
          font-weight: 900;
        }

        .lessonLabel,
        .quizLabel,
        .summaryLabel {
          margin: 0 0 5px;
          color: #c2410c;
        }

        .lessonHeading h2,
        .quizCard h2,
        .mistakesCard h2,
        .summaryCard h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.25;
        }

        .movementRules {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .movementRules article {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 19px;
          border-radius: 17px;
        }

        .rightRule { background: #ecfdf5; }
        .leftRule { background: #fff1f2; }

        .movementRules article > span {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: white;
          font-size: 25px;
          font-weight: 900;
        }

        .rightRule > span { color: #047857; }
        .leftRule > span { color: #be123c; }

        .movementRules strong { font-size: 18px; }
        .movementRules p { margin: 5px 0 0; color: #64748b; }

        .numberLineExample {
          margin-top: 15px;
          padding: 20px;
          overflow-x: auto;
          border: 1px solid #bfdbfe;
          border-radius: 18px;
          background: #f8fbff;
        }

        .exampleHeading {
          min-width: 690px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #1e3a8a;
        }

        .numberLine {
          position: relative;
          min-width: 690px;
          display: grid;
          grid-template-columns: repeat(11, 1fr);
          margin: 48px 0 8px;
        }

        .numberLine::before {
          content: "";
          position: absolute;
          top: 6px;
          right: 0;
          left: 0;
          height: 4px;
          background: #60a5fa;
        }

        .numberTick {
          position: relative;
          display: grid;
          justify-items: center;
          gap: 6px;
        }

        .numberTick i {
          z-index: 1;
          width: 16px;
          height: 16px;
          box-sizing: border-box;
          border: 4px solid #3b82f6;
          border-radius: 50%;
          background: white;
        }

        .startTick i { border-color: #e11d48; background: #ffe4e6; }
        .endTick i { border-color: #059669; background: #d1fae5; }
        .startTick b { color: #be123c; }
        .endTick b { color: #047857; }

        .moveArrow {
          position: absolute;
          top: -35px;
          left: 30%;
          width: 45%;
          padding-bottom: 6px;
          border-bottom: 3px solid #059669;
          color: #047857;
          font-weight: 900;
          text-align: center;
        }

        .secondExample,
        .magnitudeReminder,
        .leftToRightNote {
          margin-top: 15px;
          padding: 16px 18px;
          border-radius: 15px;
          background: #f1f5f9;
          color: #475569;
          line-height: 1.5;
        }

        .secondExample {
          display: flex;
          justify-content: space-between;
          gap: 14px;
        }

        .additionRules {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .additionRules > article {
          padding: 22px;
          border-radius: 19px;
        }

        .sameSignsCard { border: 1px solid #a7f3d0; background: #ecfdf5; }
        .differentSignsCard { border: 1px solid #bfdbfe; background: #eff6ff; }

        .ruleTag { color: #475569; }

        .additionRules h3 {
          min-height: 56px;
          margin: 13px 0;
          font-size: 19px;
          line-height: 1.45;
        }

        .ruleExamples {
          display: grid;
          gap: 8px;
          padding: 15px;
          border-radius: 14px;
          background: white;
          font-weight: 800;
        }

        .magnitudeReminder {
          display: grid;
          gap: 4px;
          background: #fffbeb;
          color: #854d0e;
        }

        .mainRule {
          display: grid;
          justify-items: center;
          gap: 10px;
          padding: 23px;
          border-radius: 19px;
          background: #f5f3ff;
          text-align: center;
        }

        .mainRule > span {
          color: #4f46e5;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.09em;
        }

        .mainRule strong { color: #4c1d95; font-size: 30px; }
        .mainRule p { margin: 0; color: #64748b; }

        .subtractionExamples,
        .workedGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          margin-top: 15px;
        }

        .subtractionExamples article,
        .workedGrid article {
          padding: 19px;
          border: 1px solid #dbeafe;
          border-radius: 17px;
          background: #f8fbff;
        }

        .exampleLabel { margin: 0 0 9px; color: #1d4ed8; font-size: 11px; }
        .subtractionExamples h3,
        .workedGrid h3 { margin: 0 0 12px; font-size: 19px; }

        .subtractionExamples article > div,
        .calculation {
          display: grid;
          gap: 7px;
          padding: 13px;
          border-radius: 12px;
          background: white;
        }

        .subtractionExamples strong,
        .calculation strong { color: #047857; }

        .subtractNegativeNote {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 15px;
          padding: 16px 18px;
          border-radius: 15px;
          background: #fffbeb;
          color: #854d0e;
        }

        .subtractNegativeNote > span {
          padding: 8px 10px;
          border-radius: 11px;
          background: white;
          font-size: 18px;
          font-weight: 900;
        }

        .subtractNegativeNote p { margin: 0; line-height: 1.5; }

        .bracketRules {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .bracketRules article {
          display: grid;
          gap: 7px;
          padding: 18px;
          border-radius: 16px;
          background: #eef2ff;
          text-align: center;
        }

        .bracketRules span { color: #64748b; }
        .bracketRules strong { color: #312e81; font-size: 19px; }

        .bracketExplanation {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }

        .bracketExplanation div {
          padding: 16px;
          border-radius: 14px;
          background: #f1f5f9;
        }

        .bracketExplanation strong,
        .bracketExplanation span { display: block; }
        .bracketExplanation span { margin-top: 5px; color: #64748b; }

        .leftToRightNote { background: #fffbeb; color: #854d0e; }

        .applicationExample {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr);
          gap: 15px;
        }

        .applicationExample > div {
          padding: 21px;
          border-radius: 18px;
          background: #f8fafc;
        }

        .applicationIcon { font-size: 30px; }
        .applicationExample h3 { margin: 10px 0 7px; }
        .applicationExample p { margin: 0; color: #64748b; line-height: 1.5; }

        .applicationWorking {
          display: grid;
          align-content: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 800;
        }

        .applicationWorking strong { color: #047857; }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(145deg, #eef2ff, #ffffff);
        }

        .quizOptions {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 22px;
        }

        .quizOption {
          padding: 15px;
          border: 2px solid #cbd5e1;
          border-radius: 14px;
          background: white;
          color: #172033;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        .quizOption:hover { border-color: #818cf8; }
        .correctOption { border-color: #10b981; background: #ecfdf5; color: #047857; }
        .incorrectOption { border-color: #fb7185; background: #fff1f2; color: #be123c; }

        .feedback {
          display: grid;
          gap: 5px;
          margin-top: 15px;
          padding: 15px 17px;
          border-radius: 14px;
          line-height: 1.5;
        }

        .correctFeedback { background: #d1fae5; color: #065f46; }
        .incorrectFeedback { background: #ffe4e6; color: #9f1239; }

        .mistakesCard { border-color: #fed7aa; background: #fffaf2; }
        .mistakesLabel { margin: 0 0 5px; color: #c2410c; }

        .mistakesCard ul {
          margin: 18px 0 0;
          padding-left: 23px;
          color: #475569;
          font-size: 17px;
          line-height: 1.8;
        }

        .summaryCard {
          border-color: #a7f3d0;
          background: linear-gradient(145deg, #ecfdf5, #ffffff);
        }

        .summaryLabel { color: #047857; }

        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 20px;
        }

        .summaryGrid article { padding: 16px; border-radius: 15px; background: white; }
        .summaryGrid strong,
        .summaryGrid span { display: block; }
        .summaryGrid span { margin-top: 6px; color: #64748b; line-height: 1.4; }

        .bottomNavigation { display: flex; margin-top: 26px; }

        .returnButton {
          padding: 13px 20px;
          border: none;
          border-radius: 14px;
          background: #047857;
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 820px) {
          .page { width: calc(100% - 24px); margin-top: 28px; }
          .lessonCard,
          .quizCard,
          .mistakesCard,
          .summaryCard { padding: 21px; border-radius: 20px; }
          .additionRules,
          .applicationExample { grid-template-columns: 1fr; }
          .subtractionExamples,
          .workedGrid { grid-template-columns: 1fr; }
          .additionRules h3 { min-height: 0; }
          .bracketRules { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .summaryGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 540px) {
          .lessonHeading { align-items: flex-start; }
          .lessonHeading h2,
          .quizCard h2,
          .mistakesCard h2,
          .summaryCard h2 { font-size: 23px; }
          .movementRules,
          .bracketExplanation { grid-template-columns: 1fr; }
          .secondExample,
          .subtractNegativeNote { align-items: flex-start; flex-direction: column; }
          .quizOptions { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </main>
  );
}
