"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "−1.2", correct: false },
  { label: "−3/4", correct: false },
  { label: "0", correct: false },
  { label: "+1/2", correct: true },
];

export default function DirectedNumbersAndNumberLinePage() {
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

      <p className="eyebrow">S1 · CHAPTER 2 · SECTION 1</p>
      <h1>Directed Numbers and Number Line</h1>

      <p className="introduction">
        Directed numbers use positive and negative signs to represent opposite
        directions or changes. A number line shows their position, order and
        distance from zero clearly.
      </p>

      <section className="lessonCard meaningCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">DIRECTED NUMBERS</p>
            <h2>A sign gives a number direction</h2>
          </div>
        </div>

        <div className="signGrid">
          <article className="positiveCard">
            <span className="signSymbol">+</span>
            <div>
              <h3>Positive numbers</h3>
              <p>Numbers greater than zero.</p>
              <strong>+2, +3.5, +3/4</strong>
            </div>
          </article>

          <article className="zeroCard">
            <span className="signSymbol">0</span>
            <div>
              <h3>Zero</h3>
              <p>Neither positive nor negative.</p>
              <strong>The origin on a number line</strong>
            </div>
          </article>

          <article className="negativeCard">
            <span className="signSymbol">−</span>
            <div>
              <h3>Negative numbers</h3>
              <p>Numbers less than zero.</p>
              <strong>−3, −2.8, −1 1/8</strong>
            </div>
          </article>
        </div>

        <div className="signNote">
          <strong>The positive sign may be omitted:</strong>
          <span>+7 and 7 represent the same number.</span>
        </div>
      </section>

      <section className="lessonCard contextCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">OPPOSITE DIRECTIONS</p>
            <h2>Choose a reference point and a positive direction</h2>
          </div>
        </div>

        <div className="contextGrid">
          <article>
            <span className="contextIcon">🌡️</span>
            <h3>Temperature</h3>
            <p>+6°C means 6°C above zero.</p>
            <p>−6°C means 6°C below zero.</p>
          </article>
          <article>
            <span className="contextIcon">↕</span>
            <h3>Height</h3>
            <p>+12 m may mean 12 m above sea level.</p>
            <p>−12 m may mean 12 m below sea level.</p>
          </article>
          <article>
            <span className="contextIcon">£</span>
            <h3>Money</h3>
            <p>+£25 may represent a deposit or gain.</p>
            <p>−£25 may represent a withdrawal or loss.</p>
          </article>
          <article>
            <span className="contextIcon">←→</span>
            <h3>Movement</h3>
            <p>+8 m may represent 8 m to the right.</p>
            <p>−8 m may represent 8 m to the left.</p>
          </article>
        </div>

        <div className="referenceWarning">
          A sign only has meaning after the positive direction or reference
          point has been defined.
        </div>
      </section>

      <section className="lessonCard oppositeCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">OPPOSITE NUMBERS</p>
            <h2>Same distance from zero, opposite sides</h2>
          </div>
        </div>

        <div className="oppositeDisplay">
          <div className="oppositeValue negativeValue">−5</div>
          <div className="distanceArrow">
            <span>5 units</span>
            <i />
          </div>
          <div className="originValue">0</div>
          <div className="distanceArrow reverseArrow">
            <span>5 units</span>
            <i />
          </div>
          <div className="oppositeValue positiveValue">+5</div>
        </div>

        <div className="oppositeFacts">
          <article>
            <strong>Opposite of +5</strong>
            <span>−5</span>
          </article>
          <article>
            <strong>Opposite of −5</strong>
            <span>+5</span>
          </article>
          <article>
            <strong>Opposite of 0</strong>
            <span>0</span>
          </article>
        </div>

        <p className="absoluteNote">
          The distance of a number from zero is its absolute value:
          <strong> |−5| = |+5| = 5</strong>.
        </p>
      </section>

      <section className="lessonCard numberLineCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">NUMBER LINE</p>
            <h2>Values increase from left to right</h2>
          </div>
        </div>

        <div className="numberLineWrapper">
          <div className="directionLabels">
            <span>smaller ←</span>
            <span>→ greater</span>
          </div>

          <div className="numberLine" aria-label="Number line from negative seven to positive seven">
            {[-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].map(
              (value) => (
                <span key={value} className={value === 0 ? "zeroTick" : "numberTick"}>
                  <i />
                  <b>{value > 0 ? `+${value}` : value}</b>
                </span>
              )
            )}
          </div>
        </div>

        <div className="comparisonGrid">
          <article>
            <span className="comparisonLabel">POSITIVE AND NEGATIVE</span>
            <strong>−4 &lt; +2</strong>
            <p>Every negative number is less than every positive number.</p>
          </article>
          <article>
            <span className="comparisonLabel">TWO NEGATIVE NUMBERS</span>
            <strong>−7 &lt; −3</strong>
            <p>−7 is farther left, so it is smaller than −3.</p>
          </article>
          <article>
            <span className="comparisonLabel">ZERO AND A NEGATIVE</span>
            <strong>−1.5 &lt; 0</strong>
            <p>Zero is greater than every negative number.</p>
          </article>
        </div>
      </section>

      <section className="lessonCard orderingCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">ORDERING NUMBERS</p>
            <h2>Convert forms when comparisons are unclear</h2>
          </div>
        </div>

        <div className="orderingExample">
          <div>
            <p className="exampleLabel">ARRANGE IN ASCENDING ORDER</p>
            <h3>0.5, −1, −2/3, +1.4, 1 1/2</h3>
          </div>

          <div className="orderingSteps">
            <span>−2/3 ≈ −0.67 and 1 1/2 = 1.5</span>
            <span>Read positions from left to right.</span>
            <strong>−1 &lt; −2/3 &lt; 0.5 &lt; +1.4 &lt; 1 1/2</strong>
          </div>
        </div>

        <div className="orderVocabulary">
          <article>
            <strong>Ascending order</strong>
            <span>smallest to greatest</span>
          </article>
          <article>
            <strong>Descending order</strong>
            <span>greatest to smallest</span>
          </article>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Which is the greatest number?</h2>

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
              +1/2 = +0.5. It lies to the right of 0, −3/4 and −1.2, so it
              is the greatest number.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Read the sign before the magnitude</h2>
        <ul>
          <li>Thinking that −8 is greater than −3 because 8 is greater than 3.</li>
          <li>Calling zero a positive or negative number.</li>
          <li>Confusing the opposite of a number with its reciprocal.</li>
          <li>Forgetting to define what the positive direction represents.</li>
          <li>Reversing ascending and descending order.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Use position, direction and distance</h2>
        <div className="summaryGrid">
          <article>
            <strong>Sign</strong>
            <span>shows direction from zero</span>
          </article>
          <article>
            <strong>Position</strong>
            <span>farther right means greater</span>
          </article>
          <article>
            <strong>Opposite</strong>
            <span>same distance, other side</span>
          </article>
          <article>
            <strong>Absolute value</strong>
            <span>distance from zero</span>
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
        .comparisonLabel,
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
          max-width: 880px;
          margin: 0;
          font-size: clamp(36px, 5vw, 54px);
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

        .signGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .signGrid article {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px;
          border-radius: 18px;
        }

        .positiveCard { background: #ecfdf5; }
        .zeroCard { background: #f1f5f9; }
        .negativeCard { background: #fff1f2; }

        .signSymbol {
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: white;
          font-size: 25px;
          font-weight: 900;
        }

        .signGrid h3 {
          margin: 2px 0 5px;
          font-size: 19px;
        }

        .signGrid p {
          margin: 0 0 8px;
          color: #64748b;
        }

        .signGrid strong { line-height: 1.5; }

        .signNote,
        .referenceWarning,
        .absoluteNote {
          margin: 15px 0 0;
          padding: 16px 18px;
          border-radius: 15px;
          background: #fffbeb;
          color: #854d0e;
          line-height: 1.5;
        }

        .signNote {
          display: flex;
          gap: 8px;
        }

        .contextGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .contextGrid article {
          position: relative;
          padding: 20px 20px 20px 76px;
          border: 1px solid #dbeafe;
          border-radius: 18px;
          background: #f8fbff;
        }

        .contextIcon {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #dbeafe;
          font-size: 21px;
          font-weight: 900;
        }

        .contextGrid h3 { margin: 0 0 8px; }

        .contextGrid p {
          margin: 5px 0;
          color: #64748b;
          line-height: 1.45;
        }

        .oppositeDisplay {
          display: grid;
          grid-template-columns: auto 1fr auto 1fr auto;
          align-items: center;
          gap: 13px;
          padding: 24px;
          border-radius: 19px;
          background: #f8fafc;
        }

        .oppositeValue,
        .originValue {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          font-size: 22px;
          font-weight: 900;
        }

        .negativeValue { background: #ffe4e6; color: #be123c; }
        .positiveValue { background: #d1fae5; color: #047857; }
        .originValue { background: #e2e8f0; }

        .distanceArrow {
          display: grid;
          gap: 8px;
          color: #64748b;
          font-size: 13px;
          font-weight: 800;
          text-align: center;
        }

        .distanceArrow i {
          position: relative;
          height: 3px;
          background: #94a3b8;
        }

        .distanceArrow i::before,
        .distanceArrow i::after {
          content: "";
          position: absolute;
          top: -4px;
          width: 10px;
          height: 10px;
          border-top: 3px solid #94a3b8;
          border-left: 3px solid #94a3b8;
        }

        .distanceArrow i::before { left: 0; transform: rotate(-45deg); }
        .distanceArrow i::after { right: 0; transform: rotate(135deg); }

        .oppositeFacts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 15px;
        }

        .oppositeFacts article {
          padding: 16px;
          border-radius: 15px;
          background: #f1f5f9;
        }

        .oppositeFacts strong,
        .oppositeFacts span { display: block; }

        .oppositeFacts span {
          margin-top: 5px;
          color: #4f46e5;
          font-size: 20px;
          font-weight: 900;
        }

        .numberLineWrapper {
          overflow-x: auto;
          padding: 20px;
          border-radius: 18px;
          background: #f8fbff;
        }

        .directionLabels {
          min-width: 800px;
          display: flex;
          justify-content: space-between;
          color: #1d4ed8;
          font-weight: 900;
        }

        .numberLine {
          position: relative;
          min-width: 800px;
          display: grid;
          grid-template-columns: repeat(15, 1fr);
          margin: 30px 0 8px;
        }

        .numberLine::before {
          content: "";
          position: absolute;
          top: 6px;
          right: 0;
          left: 0;
          height: 4px;
          border-radius: 999px;
          background: #60a5fa;
        }

        .numberTick,
        .zeroTick {
          position: relative;
          display: grid;
          justify-items: center;
          gap: 6px;
        }

        .numberTick i,
        .zeroTick i {
          z-index: 1;
          width: 16px;
          height: 16px;
          box-sizing: border-box;
          border: 4px solid #3b82f6;
          border-radius: 50%;
          background: white;
        }

        .zeroTick i { border-color: #e11d48; }
        .zeroTick b { color: #e11d48; }

        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          margin-top: 15px;
        }

        .comparisonGrid article {
          padding: 17px;
          border: 1px solid #dbeafe;
          border-radius: 16px;
        }

        .comparisonLabel {
          display: block;
          margin-bottom: 9px;
          color: #1d4ed8;
          font-size: 11px;
        }

        .comparisonGrid strong {
          display: block;
          font-size: 21px;
        }

        .comparisonGrid p {
          margin: 7px 0 0;
          color: #64748b;
          line-height: 1.45;
        }

        .orderingExample {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 15px;
        }

        .orderingExample > div {
          padding: 21px;
          border-radius: 18px;
        }

        .orderingExample > div:first-child {
          display: grid;
          place-items: center;
          background: #fff7ed;
          text-align: center;
        }

        .exampleLabel { margin: 0 0 12px; color: #c2410c; }
        .orderingExample h3 { margin: 0; font-size: 21px; line-height: 1.5; }

        .orderingSteps {
          display: grid;
          gap: 8px;
          background: #f8fafc;
          color: #64748b;
          line-height: 1.5;
        }

        .orderingSteps strong { color: #047857; font-size: 17px; }

        .orderVocabulary {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 15px;
        }

        .orderVocabulary article {
          padding: 16px;
          border-radius: 15px;
          background: #eef2ff;
        }

        .orderVocabulary strong,
        .orderVocabulary span { display: block; }
        .orderVocabulary span { margin-top: 5px; color: #64748b; }

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

        @media (max-width: 800px) {
          .page { width: calc(100% - 24px); margin-top: 28px; }
          .lessonCard,
          .quizCard,
          .mistakesCard,
          .summaryCard { padding: 21px; border-radius: 20px; }
          .signGrid { grid-template-columns: 1fr; }
          .comparisonGrid { grid-template-columns: 1fr; }
          .orderingExample { grid-template-columns: 1fr; }
          .summaryGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 560px) {
          .lessonHeading { align-items: flex-start; }
          .lessonHeading h2,
          .quizCard h2,
          .mistakesCard h2,
          .summaryCard h2 { font-size: 23px; }
          .contextGrid,
          .oppositeFacts,
          .orderVocabulary { grid-template-columns: 1fr; }
          .oppositeDisplay { grid-template-columns: auto 1fr auto; }
          .oppositeDisplay .reverseArrow,
          .oppositeDisplay .positiveValue { display: none; }
          .quizOptions { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </main>
  );
}
