"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const divisibilityRules = [
  {
    divisor: "2",
    rule: "The units digit is 0, 2, 4, 6 or 8.",
    example: "4,738",
    check: "The units digit is 8.",
  },
  {
    divisor: "3",
    rule: "The sum of all the digits is divisible by 3.",
    example: "2,457",
    check: "2 + 4 + 5 + 7 = 18, and 18 ÷ 3 = 6.",
  },
  {
    divisor: "4",
    rule: "The number formed by the last two digits is divisible by 4.",
    example: "3,716",
    check: "The last two digits form 16, and 16 ÷ 4 = 4.",
  },
  {
    divisor: "5",
    rule: "The units digit is 0 or 5.",
    example: "8,925",
    check: "The units digit is 5.",
  },
  {
    divisor: "6",
    rule: "The number is divisible by both 2 and 3.",
    example: "1,374",
    check: "It is even, and 1 + 3 + 7 + 4 = 15.",
  },
  {
    divisor: "8",
    rule: "The number formed by the last three digits is divisible by 8.",
    example: "12,184",
    check: "The last three digits form 184, and 184 ÷ 8 = 23.",
  },
  {
    divisor: "9",
    rule: "The sum of all the digits is divisible by 9.",
    example: "7,236",
    check: "7 + 2 + 3 + 6 = 18, and 18 ÷ 9 = 2.",
  },
  {
    divisor: "10",
    rule: "The units digit is 0.",
    example: "54,230",
    check: "The units digit is 0.",
  },
];

const quizOptions = [
  { label: "342", correct: false },
  { label: "258", correct: true },
  { label: "315", correct: false },
  { label: "424", correct: false },
];

export default function DivisibilityPage() {
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
        onClick={() => router.push("/maths/s1/chapter-1")}
      >
        ← Back to Chapter 1
      </button>

      <p className="eyebrow">S1 · CHAPTER 1 · SECTION 3</p>
      <h1>Divisibility</h1>

      <p className="introduction">
        Divisibility tests tell us whether one whole number divides another
        exactly. They make it quicker to identify factors, simplify fractions
        and check calculations without performing long division.
      </p>

      <section className="lessonCard meaningCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">KEY IDEA</p>
            <h2>What does divisible mean?</h2>
          </div>
        </div>

        <div className="definitionPanel">
          <div className="divisionStatement">42 ÷ 7 = 6</div>
          <p>
            Because the quotient is a whole number with no remainder,
            <strong> 42 is divisible by 7</strong>.
          </p>
        </div>

        <div className="relationshipGrid">
          <article>
            <span className="relationshipIcon">÷</span>
            <strong>Divisible</strong>
            <p>42 is divisible by 7.</p>
          </article>
          <article>
            <span className="relationshipIcon">×</span>
            <strong>Factor</strong>
            <p>7 is a factor of 42.</p>
          </article>
          <article>
            <span className="relationshipIcon">…</span>
            <strong>Multiple</strong>
            <p>42 is a multiple of 7.</p>
          </article>
        </div>

        <div className="notDivisiblePanel">
          <strong>43 ÷ 7 = 6 remainder 1</strong>
          <span>Therefore, 43 is not divisible by 7.</span>
        </div>
      </section>

      <section className="lessonCard rulesCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">DIVISIBILITY TESTS</p>
            <h2>Use digits instead of long division</h2>
          </div>
        </div>

        <div className="rulesGrid">
          {divisibilityRules.map((item) => (
            <article key={item.divisor} className="ruleItem">
              <span className="divisorBadge">{item.divisor}</span>
              <div>
                <h3>Divisible by {item.divisor}</h3>
                <p className="ruleText">{item.rule}</p>
                <div className="ruleExample">
                  <strong>{item.example}</strong>
                  <span>{item.check}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lessonCard patternsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">RULE FAMILIES</p>
            <h2>Group similar tests together</h2>
          </div>
        </div>

        <div className="familyGrid">
          <article className="lastDigitFamily">
            <p className="familyLabel">LOOK AT THE UNITS DIGIT</p>
            <div className="familyNumbers">
              <span>2</span>
              <span>5</span>
              <span>10</span>
            </div>
            <p>
              These tests depend only on the last digit. Digits further to the
              left do not affect the result.
            </p>
          </article>

          <article className="digitSumFamily">
            <p className="familyLabel">ADD ALL THE DIGITS</p>
            <div className="familyNumbers">
              <span>3</span>
              <span>9</span>
            </div>
            <p>
              If the digit sum is divisible by 3 or 9, the original number is
              divisible by the same number.
            </p>
          </article>

          <article className="endingFamily">
            <p className="familyLabel">CHECK THE ENDING</p>
            <div className="familyNumbers">
              <span>4</span>
              <span>8</span>
            </div>
            <p>
              Use the last two digits for 4 and the last three digits for 8.
            </p>
          </article>

          <article className="combinedFamily">
            <p className="familyLabel">COMBINE TWO TESTS</p>
            <div className="familyNumbers">
              <span>6</span>
            </div>
            <p>
              A number is divisible by 6 only when it passes both the tests
              for 2 and 3.
            </p>
          </article>
        </div>
      </section>

      <section className="lessonCard workedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">WORKED EXAMPLES</p>
            <h2>Test one number in several ways</h2>
          </div>
        </div>

        <div className="workedNumber">2,376</div>

        <div className="workedChecks">
          <article className="passCheck">
            <span>✓</span>
            <div>
              <strong>Divisible by 2</strong>
              <p>The units digit is 6, which is even.</p>
            </div>
          </article>
          <article className="passCheck">
            <span>✓</span>
            <div>
              <strong>Divisible by 3</strong>
              <p>2 + 3 + 7 + 6 = 18, which is divisible by 3.</p>
            </div>
          </article>
          <article className="passCheck">
            <span>✓</span>
            <div>
              <strong>Divisible by 4</strong>
              <p>The last two digits form 76, and 76 ÷ 4 = 19.</p>
            </div>
          </article>
          <article className="passCheck">
            <span>✓</span>
            <div>
              <strong>Divisible by 6</strong>
              <p>It passes both the tests for 2 and 3.</p>
            </div>
          </article>
          <article className="passCheck">
            <span>✓</span>
            <div>
              <strong>Divisible by 8</strong>
              <p>The last three digits form 376, and 376 ÷ 8 = 47.</p>
            </div>
          </article>
          <article className="passCheck">
            <span>✓</span>
            <div>
              <strong>Divisible by 9</strong>
              <p>The digit sum is 18, which is divisible by 9.</p>
            </div>
          </article>
          <article className="failCheck">
            <span>×</span>
            <div>
              <strong>Not divisible by 5</strong>
              <p>The units digit is neither 0 nor 5.</p>
            </div>
          </article>
          <article className="failCheck">
            <span>×</span>
            <div>
              <strong>Not divisible by 10</strong>
              <p>The units digit is not 0.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="lessonCard missingDigitCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">MISSING DIGITS</p>
            <h2>Use a divisibility rule in reverse</h2>
          </div>
        </div>

        <div className="missingExample">
          <div className="missingQuestion">Find all digits □ so that 47□ is divisible by 3.</div>
          <div className="missingSteps">
            <span>Digit sum = 4 + 7 + □ = 11 + □</span>
            <span>The next multiples of 3 are 12 and 18.</span>
            <span>□ = 1 or 7</span>
          </div>
        </div>

        <p className="missingNote">
          Always check that a missing digit is one of 0, 1, 2, …, 9. A digit
          cannot be greater than 9.
        </p>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Which number is divisible by 6 but not divisible by 9?</h2>

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
              258 is even and 2 + 5 + 8 = 15, so it is divisible by 2 and 3,
              and therefore by 6. Since 15 is not divisible by 9, 258 is not
              divisible by 9.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Check the correct digits</h2>
        <ul>
          <li>Using only the last digit when testing divisibility by 4 or 8.</li>
          <li>Testing divisibility by 6 using only the rule for 2.</li>
          <li>Confusing the digit-sum rules for 3 and 9.</li>
          <li>Thinking every even number is divisible by 4.</li>
          <li>Forgetting that a result with a remainder is not divisible.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Choose the shortest test</h2>
        <div className="summaryGrid">
          <article>
            <strong>Last digit</strong>
            <span>2, 5 and 10</span>
          </article>
          <article>
            <strong>Digit sum</strong>
            <span>3 and 9</span>
          </article>
          <article>
            <strong>Last 2 or 3 digits</strong>
            <span>4 and 8</span>
          </article>
          <article>
            <strong>Two tests together</strong>
            <span>6 requires 2 and 3</span>
          </article>
        </div>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s1/chapter-1")}
        >
          ← Return to Chapter 1
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
        .familyLabel,
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
          margin: 0;
          font-size: clamp(38px, 6vw, 56px);
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
          background: #ffffff;
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
          background: #fff1f2;
          color: #e11d48;
          font-size: 22px;
          font-weight: 900;
        }

        .lessonLabel,
        .quizLabel,
        .summaryLabel {
          margin: 0 0 5px;
          color: #4f46e5;
        }

        .lessonHeading h2,
        .quizCard h2,
        .mistakesCard h2,
        .summaryCard h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.25;
        }

        .definitionPanel {
          display: grid;
          grid-template-columns: minmax(180px, 0.7fr) minmax(0, 1.3fr);
          align-items: center;
          gap: 20px;
          padding: 22px;
          border-radius: 19px;
          background: linear-gradient(145deg, #eef2ff, #f8fafc);
        }

        .divisionStatement {
          padding: 18px;
          border-radius: 15px;
          background: white;
          color: #312e81;
          font-size: 29px;
          font-weight: 900;
          text-align: center;
        }

        .definitionPanel p {
          margin: 0;
          color: #475569;
          font-size: 18px;
          line-height: 1.55;
        }

        .relationshipGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          margin-top: 15px;
        }

        .relationshipGrid article {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: 5px 11px;
          padding: 17px;
          border: 1px solid #dbeafe;
          border-radius: 16px;
        }

        .relationshipIcon {
          width: 36px;
          height: 36px;
          grid-row: span 2;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #dbeafe;
          color: #1d4ed8;
          font-weight: 900;
        }

        .relationshipGrid p {
          margin: 0;
          color: #64748b;
        }

        .notDivisiblePanel {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          margin-top: 15px;
          padding: 16px 18px;
          border: 1px solid #fecdd3;
          border-radius: 15px;
          background: #fff1f2;
          color: #9f1239;
        }

        .rulesGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .ruleItem {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          border: 1px solid #dbeafe;
          border-radius: 18px;
          background: #fbfdff;
        }

        .divisorBadge {
          width: 50px;
          height: 50px;
          flex: 0 0 50px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: #4f46e5;
          color: white;
          font-size: 21px;
          font-weight: 900;
        }

        .ruleItem h3 {
          margin: 1px 0 6px;
          font-size: 19px;
        }

        .ruleText {
          min-height: 48px;
          margin: 0;
          color: #475569;
          line-height: 1.5;
        }

        .ruleExample {
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          background: #eef2ff;
        }

        .ruleExample strong,
        .ruleExample span {
          display: block;
        }

        .ruleExample strong {
          color: #312e81;
          font-size: 18px;
        }

        .ruleExample span {
          margin-top: 4px;
          color: #6366f1;
          line-height: 1.4;
        }

        .familyGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .familyGrid article {
          padding: 21px;
          border-radius: 18px;
        }

        .lastDigitFamily { background: #ecfdf5; }
        .digitSumFamily { background: #eff6ff; }
        .endingFamily { background: #fff7ed; }
        .combinedFamily { background: #f5f3ff; }

        .familyLabel {
          margin: 0 0 13px;
          color: #475569;
        }

        .familyNumbers {
          display: flex;
          gap: 9px;
          margin-bottom: 13px;
        }

        .familyNumbers span {
          min-width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          padding: 0 7px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.85);
          font-size: 19px;
          font-weight: 900;
        }

        .familyGrid article > p:last-child {
          margin: 0;
          color: #475569;
          line-height: 1.55;
        }

        .workedNumber {
          padding: 20px;
          border-radius: 17px;
          background: #172033;
          color: white;
          font-size: 36px;
          font-weight: 900;
          text-align: center;
        }

        .workedChecks {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }

        .workedChecks article {
          display: flex;
          gap: 12px;
          padding: 16px;
          border-radius: 15px;
        }

        .passCheck {
          border: 1px solid #a7f3d0;
          background: #ecfdf5;
        }

        .failCheck {
          border: 1px solid #fecdd3;
          background: #fff1f2;
        }

        .workedChecks article > span {
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: white;
          font-weight: 900;
        }

        .passCheck > span { color: #047857; }
        .failCheck > span { color: #be123c; }

        .workedChecks p {
          margin: 4px 0 0;
          color: #475569;
          line-height: 1.45;
        }

        .missingExample {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 15px;
        }

        .missingQuestion,
        .missingSteps {
          padding: 21px;
          border-radius: 17px;
        }

        .missingQuestion {
          display: grid;
          place-items: center;
          background: #f5f3ff;
          color: #4c1d95;
          font-size: 22px;
          font-weight: 900;
          line-height: 1.45;
          text-align: center;
        }

        .missingSteps {
          display: grid;
          gap: 8px;
          background: #f8fafc;
          color: #475569;
          line-height: 1.5;
        }

        .missingSteps span:last-child {
          color: #047857;
          font-size: 20px;
          font-weight: 900;
        }

        .missingNote {
          margin: 15px 0 0;
          padding: 15px 17px;
          border-radius: 14px;
          background: #fffbeb;
          color: #854d0e;
          line-height: 1.5;
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

        .correctOption {
          border-color: #10b981;
          background: #ecfdf5;
          color: #047857;
        }

        .incorrectOption {
          border-color: #fb7185;
          background: #fff1f2;
          color: #be123c;
        }

        .feedback {
          display: grid;
          gap: 4px;
          margin-top: 15px;
          padding: 15px 17px;
          border-radius: 14px;
          line-height: 1.5;
        }

        .correctFeedback {
          background: #d1fae5;
          color: #065f46;
        }

        .incorrectFeedback {
          background: #ffe4e6;
          color: #9f1239;
        }

        .mistakesCard {
          border-color: #fed7aa;
          background: #fffaf2;
        }

        .mistakesLabel {
          margin: 0 0 5px;
          color: #c2410c;
        }

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

        .summaryGrid article {
          padding: 16px;
          border-radius: 15px;
          background: white;
        }

        .summaryGrid strong,
        .summaryGrid span {
          display: block;
        }

        .summaryGrid span {
          margin-top: 6px;
          color: #64748b;
          line-height: 1.4;
        }

        .bottomNavigation {
          display: flex;
          justify-content: flex-start;
          margin-top: 26px;
        }

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

        @media (max-width: 780px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .quizCard,
          .mistakesCard,
          .summaryCard {
            padding: 21px;
            border-radius: 20px;
          }

          .rulesGrid,
          .familyGrid,
          .workedChecks,
          .missingExample {
            grid-template-columns: 1fr;
          }

          .relationshipGrid,
          .summaryGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .definitionPanel {
            grid-template-columns: 1fr;
          }

          .ruleText { min-height: 0; }
        }

        @media (max-width: 520px) {
          .lessonHeading { align-items: flex-start; }

          .lessonHeading h2,
          .quizCard h2,
          .mistakesCard h2,
          .summaryCard h2 {
            font-size: 23px;
          }

          .relationshipGrid,
          .summaryGrid,
          .quizOptions {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .notDivisiblePanel {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
