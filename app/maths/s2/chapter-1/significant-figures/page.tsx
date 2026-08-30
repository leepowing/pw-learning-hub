"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "0.0078", correct: false },
  { label: "0.00784", correct: false },
  { label: "0.00785", correct: true },
  { label: "0.008", correct: false },
];

export default function SignificantFiguresPage() {
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
        onClick={() => router.push("/maths/s2/chapter-1")}
      >
        ← Back to Chapter 1
      </button>

      <p className="eyebrow">S2 · CHAPTER 1 · SECTION 1</p>
      <h1>Significant Figures</h1>

      <p className="introduction">
        Significant figures describe the important digits in a number. Learn
        where counting begins and how to round numbers to a required degree of
        accuracy.
      </p>

      <section className="lessonCard firstDigitCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">CORE IDEA</p>
            <h2>Find the first significant figure</h2>
          </div>
        </div>

        <p>
          The <strong>first significant figure</strong> is the first non-zero
          digit when the number is read from left to right. Count that digit
          and every significant digit that follows it.
        </p>

        <div className="exampleGrid threeColumns">
          <article>
            <p className="exampleLabel">WHOLE NUMBER</p>
            <p className="largeNumber">
              <mark>2</mark> 115
            </p>
            <p>First significant figure: 2</p>
            <strong>4 significant figures</strong>
          </article>

          <article>
            <p className="exampleLabel">INTERNAL ZERO</p>
            <p className="largeNumber">
              <mark>4</mark>0 017
            </p>
            <p>First significant figure: 4</p>
            <strong>5 significant figures</strong>
          </article>

          <article>
            <p className="exampleLabel">SMALL DECIMAL</p>
            <p className="largeNumber">
              0.0<mark>8</mark>9 2
            </p>
            <p>First significant figure: 8</p>
            <strong>3 significant figures</strong>
          </article>
        </div>
      </section>

      <section className="lessonCard zeroRulesCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">ZERO RULES</p>
            <h2>Which zeros are significant?</h2>
          </div>
        </div>

        <div className="ruleList">
          <article>
            <span className="ruleStatus noStatus">✕</span>
            <div>
              <h3>Leading zeros are not significant</h3>
              <p>
                In 0.0047, the zeros only locate the decimal point. The number
                has <strong>2 significant figures</strong>.
              </p>
            </div>
          </article>

          <article>
            <span className="ruleStatus yesStatus">✓</span>
            <div>
              <h3>Zeros between non-zero digits are significant</h3>
              <p>
                In 4.007, both internal zeros count. The number has
                <strong> 4 significant figures</strong>.
              </p>
            </div>
          </article>

          <article>
            <span className="ruleStatus yesStatus">✓</span>
            <div>
              <h3>Trailing zeros after a decimal point are significant</h3>
              <p>
                In 2.300, the final zeros show precision. The number has
                <strong> 4 significant figures</strong>.
              </p>
            </div>
          </article>

          <article>
            <span className="ruleStatus cautionStatus">!</span>
            <div>
              <h3>Trailing zeros in whole numbers need context</h3>
              <p>
                Write a number in standard form to show its accuracy clearly:
                4.20 × 10³ has <strong>3 significant figures</strong>.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="lessonCard roundingCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">ROUNDING METHOD</p>
            <h2>Round to significant figures</h2>
          </div>
        </div>

        <div className="stepsGrid">
          <article>
            <span>STEP 1</span>
            <strong>Locate</strong>
            <p>Find the first non-zero digit.</p>
          </article>

          <article>
            <span>STEP 2</span>
            <strong>Count</strong>
            <p>Count to the final significant figure required.</p>
          </article>

          <article>
            <span>STEP 3</span>
            <strong>Inspect</strong>
            <p>Look at the next digit on the right.</p>
          </article>

          <article>
            <span>STEP 4</span>
            <strong>Round</strong>
            <p>Round up for 5–9; keep the digit for 0–4.</p>
          </article>
        </div>

        <div className="roundingRule">
          <div className="roundDown">
            <span>0, 1, 2, 3, 4</span>
            <strong>Keep the final required digit</strong>
          </div>
          <div className="roundUp">
            <span>5, 6, 7, 8, 9</span>
            <strong>Increase it by 1</strong>
          </div>
        </div>
      </section>

      <section className="workedExample">
        <p className="workedLabel">WORKED EXAMPLE 1</p>
        <h2>Round 0.02654 to different numbers of significant figures.</h2>

        <div className="answerTable">
          <div className="tableHeader">
            <span>Accuracy</span>
            <span>Reasoning</span>
            <span>Answer</span>
          </div>

          <div>
            <strong>1 s.f.</strong>
            <span>The first digit is 2; the next digit is 6, so round up.</span>
            <strong>0.03</strong>
          </div>

          <div>
            <strong>2 s.f.</strong>
            <span>Keep 2 and 6; the next digit is 5, so 6 becomes 7.</span>
            <strong>0.027</strong>
          </div>

          <div>
            <strong>3 s.f.</strong>
            <span>Keep 2, 6 and 5; the next digit is 4, so do not round up.</span>
            <strong>0.0265</strong>
          </div>
        </div>
      </section>

      <section className="workedExample secondExample">
        <p className="workedLabel">WORKED EXAMPLE 2</p>
        <h2>Round 42 680 to 2 significant figures.</h2>

        <div className="calculationFlow">
          <div>
            <span>First two significant digits</span>
            <strong>4 and 2</strong>
          </div>
          <span className="flowArrow">→</span>
          <div>
            <span>Next digit</span>
            <strong>6, so round up</strong>
          </div>
          <span className="flowArrow">→</span>
          <div className="finalResult">
            <span>Final answer</span>
            <strong>43 000</strong>
          </div>
        </div>

        <p className="placeValueNote">
          Replace all digits after the final significant figure with zeros so
          that the original place value is preserved.
        </p>
      </section>

      <section className="standardFormCard">
        <div>
          <p className="standardFormLabel">ACCURACY TIP</p>
          <h2>Use standard form to make significant figures clear</h2>
          <p>
            The coefficient in standard form displays exactly which digits
            are significant.
          </p>
        </div>

        <div className="standardFormExamples">
          <span>4 × 10³ &nbsp;→&nbsp; 1 s.f.</span>
          <span>4.2 × 10³ &nbsp;→&nbsp; 2 s.f.</span>
          <span>4.20 × 10³ &nbsp;→&nbsp; 3 s.f.</span>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Round 0.007846 to 3 significant figures.</h2>

        <div className="quizOptions">
          {quizOptions.map((option) => {
            let buttonClass = "quizOption";

            if (selectedAnswer === option.label) {
              buttonClass += option.correct
                ? " correctOption"
                : " wrongOption";
            }

            return (
              <button
                key={option.label}
                type="button"
                className={buttonClass}
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
                : "feedback wrongFeedback"
            }
          >
            <strong>
              {selectedOption.correct ? "Correct." : "Try again."}
            </strong>
            <span>
              The significant digits are 7, 8 and 4. The next digit is 6, so
              4 rounds up to 5. The answer is 0.00785.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>
        <ul>
          <li>Counting leading zeros before the first non-zero digit.</li>
          <li>Rounding from the wrong place value instead of significant figures.</li>
          <li>Rounding in stages rather than rounding once from the original number.</li>
          <li>Removing zeros that are needed to preserve the place value.</li>
          <li>Writing too few digits when trailing decimal zeros show accuracy.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Remember these three ideas</h2>

        <div className="summaryGrid">
          <article>
            <strong>Begin</strong>
            <span>at the first non-zero digit.</span>
          </article>
          <article>
            <strong>Count</strong>
            <span>the required significant digits.</span>
          </article>
          <article>
            <strong>Round</strong>
            <span>using the next digit only once.</span>
          </article>
        </div>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s2/chapter-1")}
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
        .workedLabel,
        .quizLabel,
        .summaryLabel,
        .standardFormLabel,
        .exampleLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.11em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #e11d48;
        }

        h1 {
          margin: 0 0 12px;
          font-size: clamp(38px, 5vw, 52px);
          line-height: 1.1;
        }

        .introduction {
          max-width: 880px;
          margin: 0 0 30px;
          color: #64748b;
          font-size: 19px;
          line-height: 1.65;
        }

        .lessonCard,
        .workedExample,
        .standardFormCard,
        .quizCard,
        .mistakesCard,
        .summaryCard {
          margin-bottom: 20px;
          padding: 28px;
          border-radius: 22px;
          box-sizing: border-box;
        }

        .lessonCard {
          border: 1px solid #e2e8f0;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
        }

        .lessonHeading {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 18px;
        }

        .lessonNumber {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 15px;
          background: #ffe4e6;
          color: #be123c;
          font-size: 21px;
          font-weight: 900;
        }

        .lessonLabel,
        .workedLabel,
        .quizLabel,
        .summaryLabel,
        .standardFormLabel {
          margin: 0 0 4px;
          color: #e11d48;
        }

        .lessonHeading h2,
        .workedExample h2,
        .quizCard h2,
        .mistakesCard h2,
        .summaryCard h2,
        .standardFormCard h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.3;
        }

        .lessonCard > p {
          margin: 0 0 20px;
          color: #475569;
          font-size: 17px;
          line-height: 1.65;
        }

        .exampleGrid {
          display: grid;
          gap: 13px;
        }

        .threeColumns {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .exampleGrid article {
          padding: 19px;
          border: 1px solid #fecdd3;
          border-radius: 16px;
          background: #fff1f2;
          text-align: center;
        }

        .exampleLabel {
          margin: 0 0 10px;
          color: #be123c;
          font-size: 11px;
        }

        .largeNumber {
          margin: 0 0 10px;
          color: #0f172a;
          font-family: "Times New Roman", serif;
          font-size: 32px;
          font-weight: 800;
        }

        mark {
          padding: 1px 4px;
          border-radius: 6px;
          background: #fda4af;
          color: #881337;
        }

        .exampleGrid article > p:not(.exampleLabel):not(.largeNumber) {
          margin: 0 0 7px;
          color: #64748b;
          font-size: 14px;
        }

        .ruleList {
          display: grid;
          gap: 12px;
        }

        .ruleList article {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 17px;
          border-radius: 15px;
          background: #f8fafc;
        }

        .ruleStatus {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 11px;
          font-weight: 900;
        }

        .yesStatus {
          background: #dcfce7;
          color: #166534;
        }

        .noStatus {
          background: #fee2e2;
          color: #991b1b;
        }

        .cautionStatus {
          background: #fef3c7;
          color: #92400e;
        }

        .ruleList h3 {
          margin: 0 0 5px;
          font-size: 17px;
        }

        .ruleList p {
          margin: 0;
          color: #64748b;
          line-height: 1.55;
        }

        .stepsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 11px;
        }

        .stepsGrid article {
          padding: 17px;
          border-radius: 15px;
          background: #fff1f2;
        }

        .stepsGrid article > span {
          display: block;
          margin-bottom: 8px;
          color: #be123c;
          font-size: 11px;
          font-weight: 900;
        }

        .stepsGrid strong {
          display: block;
          margin-bottom: 5px;
          font-size: 17px;
        }

        .stepsGrid p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.45;
        }

        .roundingRule {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }

        .roundingRule > div {
          padding: 17px;
          border-radius: 15px;
          text-align: center;
        }

        .roundDown {
          background: #eff6ff;
          color: #1e40af;
        }

        .roundUp {
          background: #ecfdf5;
          color: #166534;
        }

        .roundingRule span,
        .roundingRule strong {
          display: block;
        }

        .roundingRule span {
          margin-bottom: 5px;
          font-size: 21px;
          font-weight: 900;
        }

        .workedExample {
          border: 1px solid #bae6fd;
          background: linear-gradient(135deg, #f0f9ff, #ecfeff);
        }

        .workedLabel {
          color: #0369a1;
        }

        .workedExample h2 {
          margin-bottom: 20px;
        }

        .answerTable {
          overflow: hidden;
          border: 1px solid #bae6fd;
          border-radius: 15px;
          background: #ffffff;
        }

        .answerTable > div {
          display: grid;
          grid-template-columns: 0.45fr 1.8fr 0.55fr;
          gap: 14px;
          align-items: center;
          padding: 14px 17px;
          border-bottom: 1px solid #e0f2fe;
        }

        .answerTable > div:last-child {
          border-bottom: none;
        }

        .tableHeader {
          background: #0369a1;
          color: #ffffff;
          font-weight: 900;
        }

        .answerTable > div:not(.tableHeader) span {
          color: #475569;
          line-height: 1.5;
        }

        .answerTable > div:not(.tableHeader) strong:last-child {
          color: #0369a1;
          font-size: 20px;
        }

        .secondExample {
          border-color: #ddd6fe;
          background: linear-gradient(135deg, #faf5ff, #eef2ff);
        }

        .secondExample .workedLabel {
          color: #6d28d9;
        }

        .calculationFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: stretch;
          gap: 10px;
        }

        .calculationFlow > div {
          padding: 17px;
          border: 1px solid #ddd6fe;
          border-radius: 14px;
          background: #ffffff;
          text-align: center;
        }

        .calculationFlow span:not(.flowArrow),
        .calculationFlow strong {
          display: block;
        }

        .calculationFlow span:not(.flowArrow) {
          margin-bottom: 6px;
          color: #64748b;
          font-size: 13px;
        }

        .calculationFlow strong {
          color: #5b21b6;
          font-size: 18px;
        }

        .flowArrow {
          align-self: center;
          color: #7c3aed;
          font-size: 25px;
          font-weight: 900;
        }

        .finalResult {
          background: #ede9fe !important;
        }

        .finalResult strong {
          font-size: 23px;
        }

        .placeValueNote {
          margin: 16px 0 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.55;
          text-align: center;
        }

        .standardFormCard {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 22px;
          border: 1px solid #fde68a;
          background: linear-gradient(135deg, #fffbeb, #fff7ed);
        }

        .standardFormLabel {
          color: #b45309;
        }

        .standardFormCard h2 {
          margin-bottom: 7px;
        }

        .standardFormCard > div:first-child > p:last-child {
          margin: 0;
          color: #64748b;
          line-height: 1.55;
        }

        .standardFormExamples {
          display: grid;
          gap: 8px;
        }

        .standardFormExamples span {
          padding: 11px 13px;
          border: 1px solid #fde68a;
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.8);
          color: #92400e;
          font-family: "Times New Roman", serif;
          font-size: 18px;
          font-weight: 700;
        }

        .quizCard {
          border: 2px solid #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #f5f3ff);
        }

        .quizLabel {
          color: #4f46e5;
        }

        .quizCard h2 {
          margin-bottom: 20px;
        }

        .quizOptions {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .quizOption {
          min-height: 55px;
          padding: 12px;
          border: 2px solid #cbd5e1;
          border-radius: 13px;
          background: #ffffff;
          color: #0f172a;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
        }

        .quizOption:hover {
          border-color: #818cf8;
        }

        .correctOption {
          border-color: #16a34a;
          background: #dcfce7;
          color: #166534;
        }

        .wrongOption {
          border-color: #dc2626;
          background: #fee2e2;
          color: #991b1b;
        }

        .feedback {
          display: flex;
          gap: 8px;
          margin-top: 14px;
          padding: 15px 17px;
          border-radius: 13px;
          line-height: 1.5;
        }

        .feedback strong {
          flex-shrink: 0;
        }

        .correctFeedback {
          background: #dcfce7;
          color: #166534;
        }

        .wrongFeedback {
          background: #fff7ed;
          color: #9a3412;
        }

        .mistakesCard {
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .mistakesCard h2 {
          margin-bottom: 13px;
        }

        .mistakesCard ul {
          display: grid;
          gap: 8px;
          margin: 0;
          padding-left: 23px;
          color: #7c2d12;
          font-size: 16px;
          line-height: 1.5;
        }

        .summaryCard {
          border: 1px solid #a7f3d0;
          background: linear-gradient(135deg, #ecfdf5, #f0fdf4);
        }

        .summaryLabel {
          color: #047857;
        }

        .summaryCard h2 {
          margin-bottom: 16px;
        }

        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 11px;
        }

        .summaryGrid article {
          padding: 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.75);
          text-align: center;
        }

        .summaryGrid strong,
        .summaryGrid span {
          display: block;
        }

        .summaryGrid strong {
          margin-bottom: 4px;
          color: #047857;
          font-size: 19px;
        }

        .summaryGrid span {
          color: #475569;
          font-size: 14px;
        }

        .bottomNavigation {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .returnButton {
          min-width: 260px;
          padding: 15px 24px;
          border: none;
          border-radius: 14px;
          background: #059669;
          color: #ffffff;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(5, 150, 105, 0.18);
        }

        .returnButton:hover {
          background: #047857;
        }

        @media (max-width: 760px) {
          .threeColumns,
          .stepsGrid,
          .quizOptions,
          .summaryGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .calculationFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            transform: rotate(90deg);
            justify-self: center;
          }
        }

        @media (max-width: 620px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .workedExample,
          .standardFormCard,
          .quizCard,
          .mistakesCard,
          .summaryCard {
            padding: 21px;
          }

          .threeColumns,
          .stepsGrid,
          .roundingRule,
          .quizOptions,
          .summaryGrid,
          .standardFormCard {
            grid-template-columns: 1fr;
          }

          .answerTable > div {
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .tableHeader {
            display: none !important;
          }

          .feedback {
            flex-direction: column;
          }

          .returnButton {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </main>
  );
}
