"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "−17", correct: false },
  { label: "−7", correct: false },
  { label: "+7", correct: true },
  { label: "+17", correct: false },
];

export default function MultiplicationAndDivisionDirectedNumbersPage() {
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

      <p className="eyebrow">S1 · CHAPTER 2 · SECTION 3</p>
      <h1>Multiplication and Division of Directed Numbers</h1>

      <p className="introduction">
        Multiply or divide the magnitudes first, then determine the sign. The
        same sign rules apply to whole numbers, fractions and decimals.
      </p>

      <section className="lessonCard signRulesCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">SIGN RULES</p>
            <h2>Same signs give positive; different signs give negative</h2>
          </div>
        </div>

        <div className="signRuleGrid">
          <article className="positiveResult">
            <div className="signEquation">(+) × (+) = (+)</div>
            <strong>(+3) × (+4) = +12</strong>
          </article>
          <article className="negativeResult">
            <div className="signEquation">(−) × (+) = (−)</div>
            <strong>(−3) × (+4) = −12</strong>
          </article>
          <article className="negativeResult">
            <div className="signEquation">(+) × (−) = (−)</div>
            <strong>(+3) × (−4) = −12</strong>
          </article>
          <article className="positiveResult">
            <div className="signEquation">(−) × (−) = (+)</div>
            <strong>(−3) × (−4) = +12</strong>
          </article>
        </div>

        <div className="divisionRuleStrip">
          <span>(+) ÷ (+) = (+)</span>
          <span>(−) ÷ (+) = (−)</span>
          <span>(+) ÷ (−) = (−)</span>
          <span>(−) ÷ (−) = (+)</span>
        </div>

        <p className="ruleNote">
          Division follows exactly the same sign pattern as multiplication.
          Decide the sign separately from the numerical calculation.
        </p>
      </section>

      <section className="lessonCard twoStepCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">TWO-STEP METHOD</p>
            <h2>Sign first, magnitude second</h2>
          </div>
        </div>

        <div className="methodFlow">
          <article>
            <span>1</span>
            <div>
              <strong>Compare the signs</strong>
              <p>Same signs → positive; different signs → negative.</p>
            </div>
          </article>
          <article>
            <span>2</span>
            <div>
              <strong>Calculate the magnitudes</strong>
              <p>Ignore the signs temporarily and multiply or divide.</p>
            </div>
          </article>
          <article>
            <span>3</span>
            <div>
              <strong>Attach the result sign</strong>
              <p>Combine the sign from Step 1 with the magnitude from Step 2.</p>
            </div>
          </article>
        </div>

        <div className="methodExample">
          <div className="exampleExpression">(−7) × (+8)</div>
          <div className="exampleSteps">
            <span>Different signs → negative result</span>
            <span>7 × 8 = 56</span>
            <strong>(−7) × (+8) = −56</strong>
          </div>
        </div>
      </section>

      <section className="lessonCard multipleFactorsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">MORE THAN TWO FACTORS</p>
            <h2>Count the negative factors</h2>
          </div>
        </div>

        <div className="negativeCountGrid">
          <article className="evenNegatives">
            <span className="countBadge">EVEN</span>
            <h3>An even number of negative factors gives a positive product</h3>
            <div>
              <span>(−2) × (−3) × (+4)</span>
              <strong>= +24</strong>
            </div>
          </article>

          <article className="oddNegatives">
            <span className="countBadge">ODD</span>
            <h3>An odd number of negative factors gives a negative product</h3>
            <div>
              <span>(−2) × (−3) × (−4)</span>
              <strong>= −24</strong>
            </div>
          </article>
        </div>

        <div className="pairingExample">
          <span className="pair">(−) × (−) → (+)</span>
          <span className="pair">(−) × (−) → (+)</span>
          <strong>Four negative factors can be paired, so the product is positive.</strong>
        </div>
      </section>

      <section className="lessonCard fractionDecimalCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">FRACTIONS AND DECIMALS</p>
            <h2>The sign rules do not change</h2>
          </div>
        </div>

        <div className="workedGrid">
          <article>
            <p className="exampleLabel">FRACTION MULTIPLICATION</p>
            <h3>(−2/3) × (+9/4)</h3>
            <div className="calculation">
              <span>= −(2 × 9)/(3 × 4)</span>
              <span>= −18/12</span>
              <strong>= −3/2 = −1 1/2</strong>
            </div>
          </article>

          <article>
            <p className="exampleLabel">FRACTION DIVISION</p>
            <h3>(−5/6) ÷ (−10/9)</h3>
            <div className="calculation">
              <span>= (+5/6) × (9/10)</span>
              <span>= 45/60</span>
              <strong>= +3/4</strong>
            </div>
          </article>

          <article>
            <p className="exampleLabel">DECIMAL MULTIPLICATION</p>
            <h3>(+1.2) × (−0.5)</h3>
            <div className="calculation">
              <span>Different signs → negative</span>
              <span>1.2 × 0.5 = 0.6</span>
              <strong>= −0.6</strong>
            </div>
          </article>

          <article>
            <p className="exampleLabel">DECIMAL DIVISION</p>
            <h3>(−4.8) ÷ (−0.6)</h3>
            <div className="calculation">
              <span>Same signs → positive</span>
              <span>4.8 ÷ 0.6 = 8</span>
              <strong>= +8</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="lessonCard restrictionsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">ZERO RULES</p>
            <h2>Zero may be multiplied but never used as a divisor</h2>
          </div>
        </div>

        <div className="zeroRuleGrid">
          <article className="allowedRule">
            <span>✓</span>
            <div>
              <strong>Any number multiplied by zero</strong>
              <p>(−15) × 0 = 0</p>
            </div>
          </article>
          <article className="allowedRule">
            <span>✓</span>
            <div>
              <strong>Zero divided by a non-zero number</strong>
              <p>0 ÷ (−7) = 0</p>
            </div>
          </article>
          <article className="forbiddenRule">
            <span>×</span>
            <div>
              <strong>Division by zero</strong>
              <p>(−7) ÷ 0 is undefined</p>
            </div>
          </article>
        </div>

        <p className="zeroExplanation">
          There is no number that can be multiplied by 0 to recover a non-zero
          dividend, so division by zero is not defined.
        </p>
      </section>

      <section className="lessonCard mixedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">6</span>
          <div>
            <p className="lessonLabel">MIXED OPERATIONS</p>
            <h2>Use operation priority and sign rules together</h2>
          </div>
        </div>

        <div className="priorityStrip">
          <span>1 · Brackets</span>
          <span>2 · Multiplication and division</span>
          <span>3 · Addition and subtraction</span>
        </div>

        <div className="mixedExamples">
          <article>
            <p className="exampleLabel">EXAMPLE A</p>
            <h3>(−16) ÷ [(−2) × (−5 + 7)]</h3>
            <div className="calculation">
              <span>= (−16) ÷ [(−2) × (+2)]</span>
              <span>= (−16) ÷ (−4)</span>
              <strong>= +4</strong>
            </div>
          </article>

          <article>
            <p className="exampleLabel">EXAMPLE B</p>
            <h3>(−6) + (+3) × (−4)</h3>
            <div className="calculation">
              <span>= −6 + (−12)</span>
              <strong>= −18</strong>
            </div>
          </article>

          <article>
            <p className="exampleLabel">EXAMPLE C</p>
            <h3>(−36) ÷ (+6) × (−2)</h3>
            <div className="calculation">
              <span>= (−6) × (−2)</span>
              <strong>= +12</strong>
            </div>
          </article>
        </div>

        <p className="leftToRightNote">
          Multiplication and division have equal priority. When only these
          operations remain, calculate from left to right.
        </p>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Evaluate (−24) ÷ (+6) × (−3) + (−5).</h2>

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
              (−24) ÷ (+6) = −4, then (−4) × (−3) = +12, and
              +12 + (−5) = +7.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Separate the sign from the magnitude</h2>
        <ul>
          <li>Assuming every product containing a negative number is negative.</li>
          <li>Using addition sign rules for multiplication or division.</li>
          <li>Forgetting to count all negative factors in a longer product.</li>
          <li>Performing addition before multiplication in a mixed expression.</li>
          <li>Doing multiplication before division instead of working left to right.</li>
          <li>Treating division by zero as an ordinary calculation.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Determine the sign, then calculate</h2>
        <div className="summaryGrid">
          <article>
            <strong>Same signs</strong>
            <span>positive result</span>
          </article>
          <article>
            <strong>Different signs</strong>
            <span>negative result</span>
          </article>
          <article>
            <strong>Several factors</strong>
            <span>count negative signs</span>
          </article>
          <article>
            <strong>Mixed operations</strong>
            <span>follow operation priority</span>
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
        .countBadge,
        .exampleLabel,
        .quizLabel,
        .mistakesLabel,
        .summaryLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow { margin: 0 0 7px; color: #e11d48; }

        h1 {
          max-width: 920px;
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
        .summaryLabel { margin: 0 0 5px; color: #c2410c; }

        .lessonHeading h2,
        .quizCard h2,
        .mistakesCard h2,
        .summaryCard h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.25;
        }

        .signRuleGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .signRuleGrid article {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px;
          border-radius: 17px;
        }

        .positiveResult { background: #ecfdf5; color: #047857; }
        .negativeResult { background: #fff1f2; color: #be123c; }

        .signEquation {
          padding: 11px 14px;
          border-radius: 12px;
          background: white;
          font-size: 19px;
          font-weight: 900;
        }

        .divisionRuleStrip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          margin-top: 14px;
        }

        .divisionRuleStrip span {
          padding: 14px;
          border-radius: 14px;
          background: #eef2ff;
          color: #312e81;
          font-weight: 900;
          text-align: center;
        }

        .ruleNote,
        .zeroExplanation,
        .leftToRightNote {
          margin: 15px 0 0;
          padding: 16px 18px;
          border-radius: 15px;
          background: #fffbeb;
          color: #854d0e;
          line-height: 1.5;
        }

        .methodFlow {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
        }

        .methodFlow article {
          padding: 19px;
          border-radius: 17px;
          background: #f1f5f9;
        }

        .methodFlow article > span {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          margin-bottom: 12px;
          border-radius: 50%;
          background: #4f46e5;
          color: white;
          font-weight: 900;
        }

        .methodFlow strong { font-size: 17px; }
        .methodFlow p { margin: 7px 0 0; color: #64748b; line-height: 1.45; }

        .methodExample {
          display: grid;
          grid-template-columns: minmax(190px, 0.7fr) minmax(0, 1.3fr);
          gap: 15px;
          margin-top: 15px;
        }

        .exampleExpression,
        .exampleSteps {
          padding: 20px;
          border-radius: 17px;
        }

        .exampleExpression {
          display: grid;
          place-items: center;
          background: #f5f3ff;
          color: #4c1d95;
          font-size: 25px;
          font-weight: 900;
        }

        .exampleSteps {
          display: grid;
          gap: 7px;
          background: #f8fafc;
          color: #64748b;
        }

        .exampleSteps strong { color: #047857; font-size: 18px; }

        .negativeCountGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .negativeCountGrid article {
          padding: 22px;
          border-radius: 19px;
        }

        .evenNegatives { border: 1px solid #a7f3d0; background: #ecfdf5; }
        .oddNegatives { border: 1px solid #fecdd3; background: #fff1f2; }

        .countBadge { color: #475569; }

        .negativeCountGrid h3 {
          min-height: 56px;
          margin: 13px 0;
          font-size: 19px;
          line-height: 1.45;
        }

        .negativeCountGrid article > div {
          display: grid;
          gap: 7px;
          padding: 14px;
          border-radius: 13px;
          background: white;
          font-size: 18px;
        }

        .pairingExample {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
          padding: 16px;
          border-radius: 15px;
          background: #f1f5f9;
        }

        .pair {
          flex-shrink: 0;
          padding: 8px 10px;
          border-radius: 11px;
          background: white;
          color: #4f46e5;
          font-weight: 900;
        }

        .workedGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .workedGrid article,
        .mixedExamples article {
          padding: 20px;
          border: 1px solid #dbeafe;
          border-radius: 18px;
          background: #f8fbff;
        }

        .exampleLabel { margin: 0 0 9px; color: #1d4ed8; font-size: 11px; }
        .workedGrid h3,
        .mixedExamples h3 { margin: 0 0 12px; font-size: 20px; }

        .calculation {
          display: grid;
          gap: 7px;
          padding: 14px;
          border-radius: 13px;
          background: white;
          font-size: 17px;
        }

        .calculation strong { color: #047857; }

        .zeroRuleGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
        }

        .zeroRuleGrid article {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px;
          border-radius: 17px;
        }

        .allowedRule { background: #ecfdf5; }
        .forbiddenRule { background: #fff1f2; }

        .zeroRuleGrid article > span {
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: white;
          font-weight: 900;
        }

        .allowedRule > span { color: #047857; }
        .forbiddenRule > span { color: #be123c; }
        .zeroRuleGrid p { margin: 7px 0 0; color: #64748b; line-height: 1.4; }

        .priorityStrip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .priorityStrip span {
          padding: 14px;
          border-radius: 14px;
          background: #eef2ff;
          color: #312e81;
          font-weight: 900;
          text-align: center;
        }

        .mixedExamples {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          margin-top: 14px;
        }

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
          .methodFlow,
          .zeroRuleGrid,
          .priorityStrip,
          .mixedExamples { grid-template-columns: 1fr; }
          .workedGrid { grid-template-columns: 1fr; }
          .negativeCountGrid h3 { min-height: 0; }
          .summaryGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 560px) {
          .lessonHeading { align-items: flex-start; }
          .lessonHeading h2,
          .quizCard h2,
          .mistakesCard h2,
          .summaryCard h2 { font-size: 23px; }
          .signRuleGrid,
          .negativeCountGrid,
          .methodExample { grid-template-columns: 1fr; }
          .signRuleGrid article { align-items: flex-start; flex-direction: column; }
          .divisionRuleStrip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .pairingExample { align-items: flex-start; flex-direction: column; }
          .quizOptions { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </main>
  );
}
