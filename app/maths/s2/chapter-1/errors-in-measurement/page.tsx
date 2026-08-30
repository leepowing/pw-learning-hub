"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "24 ≤ T < 26", correct: false },
  { label: "24.5 ≤ T < 25.5", correct: true },
  { label: "24.5 < T ≤ 25.5", correct: false },
  { label: "25 ≤ T < 25.5", correct: false },
];

export default function ErrorsInMeasurementPage() {
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

      <p className="eyebrow">S2 · CHAPTER 1 · SECTION 2</p>
      <h1>Errors in Measurement</h1>

      <p className="introduction">
        A measured value is usually an approximation. Learn how to describe
        the greatest possible error and the range in which the actual value
        must lie.
      </p>

      <section className="lessonCard approximationCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">MEASURED VALUES</p>
            <h2>A measurement is not usually exact</h2>
          </div>
        </div>

        <div className="comparisonGrid">
          <article>
            <p className="comparisonLabel">MEASURED VALUE</p>
            <strong>10 m</strong>
            <p>The value shown after rounding to the nearest metre.</p>
          </article>

          <span className="comparisonArrow">→</span>

          <article>
            <p className="comparisonLabel">ACTUAL VALUE</p>
            <strong>Between 9.5 m and 10.5 m</strong>
            <p>The true length before the measurement was rounded.</p>
          </article>
        </div>

        <p className="importantNote">
          The measured value is approximate, while the actual value may be
          any value inside the permitted interval.
        </p>
      </section>

      <section className="lessonCard absoluteErrorCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">MAXIMUM ABSOLUTE ERROR</p>
            <h2>Take half of the smallest measuring interval</h2>
          </div>
        </div>

        <div className="formulaBox">
          <span>maximum absolute error</span>
          <strong>= ½ × scale interval</strong>
        </div>

        <p>
          The <strong>scale interval</strong> is the difference between two
          consecutive markings or the rounding unit stated in the question.
        </p>

        <div className="intervalGrid">
          <article>
            <span>Nearest 1 m</span>
            <strong>Maximum error = 0.5 m</strong>
          </article>

          <article>
            <span>Nearest 5 g</span>
            <strong>Maximum error = 2.5 g</strong>
          </article>

          <article>
            <span>Nearest 0.1 cm</span>
            <strong>Maximum error = 0.05 cm</strong>
          </article>

          <article>
            <span>Nearest 10 km</span>
            <strong>Maximum error = 5 km</strong>
          </article>
        </div>
      </section>

      <section className="lessonCard limitsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">LIMITS OF THE ACTUAL VALUE</p>
            <h2>Find the lower and upper limits</h2>
          </div>
        </div>

        <div className="limitsFormulaGrid">
          <article>
            <p>Lower limit</p>
            <strong>
              measured value
              <br />− maximum absolute error
            </strong>
          </article>

          <article>
            <p>Upper limit</p>
            <strong>
              measured value
              <br />+ maximum absolute error
            </strong>
          </article>
        </div>

        <div className="rangeDiagram">
          <div className="rangeLabels">
            <span>lower limit</span>
            <span>measured value</span>
            <span>upper limit</span>
          </div>

          <div className="numberLine">
            <span className="closedPoint" />
            <span className="rangeLine" />
            <span className="measuredPoint" />
            <span className="rangeLine" />
            <span className="openPoint" />
          </div>

          <div className="rangeValues">
            <strong>9.5</strong>
            <strong>10</strong>
            <strong>10.5</strong>
          </div>
        </div>

        <div className="inequalityBox">
          <span>If x is the actual value:</span>
          <strong>9.5 ≤ x &lt; 10.5</strong>
        </div>

        <p className="boundaryExplanation">
          The lower limit is included. The upper limit is excluded because an
          actual value of exactly 10.5 m would round to 11 m, not 10 m.
        </p>
      </section>

      <section className="lessonCard relativeErrorCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">COMPARING ERRORS</p>
            <h2>Relative error and percentage error</h2>
          </div>
        </div>

        <div className="errorFormulaGrid">
          <article>
            <p>Relative error</p>
            <div className="fraction">
              <span>maximum absolute error</span>
              <span>measured value</span>
            </div>
          </article>

          <article>
            <p>Percentage error</p>
            <strong>relative error × 100%</strong>
          </article>
        </div>

        <p>
          Relative error has no unit. Percentage error expresses the same
          comparison as a percentage.
        </p>
      </section>

      <section className="workedExample">
        <p className="workedLabel">WORKED EXAMPLE 1</p>
        <h2>
          The height of a tree is measured as 10 m, correct to the nearest
          metre.
        </h2>

        <div className="solutionSteps">
          <article>
            <span className="stepNumber">1</span>
            <div>
              <p>Maximum absolute error</p>
              <strong>½ × 1 m = 0.5 m</strong>
            </div>
          </article>

          <article>
            <span className="stepNumber">2</span>
            <div>
              <p>Lower limit</p>
              <strong>10 − 0.5 = 9.5 m</strong>
            </div>
          </article>

          <article>
            <span className="stepNumber">3</span>
            <div>
              <p>Upper limit</p>
              <strong>10 + 0.5 = 10.5 m</strong>
            </div>
          </article>

          <article>
            <span className="stepNumber">4</span>
            <div>
              <p>Range of the actual height h</p>
              <strong>9.5 ≤ h &lt; 10.5</strong>
            </div>
          </article>

          <article>
            <span className="stepNumber">5</span>
            <div>
              <p>Relative error</p>
              <strong>0.5 ÷ 10 = 0.05</strong>
            </div>
          </article>

          <article>
            <span className="stepNumber">6</span>
            <div>
              <p>Percentage error</p>
              <strong>0.05 × 100% = 5%</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="workedExample secondExample">
        <p className="workedLabel">WORKED EXAMPLE 2</p>
        <h2>
          The mass of a parcel is 250 g, correct to the nearest 5 g.
        </h2>

        <div className="calculationTable">
          <div>
            <span>Maximum absolute error</span>
            <strong>½ × 5 = 2.5 g</strong>
          </div>
          <div>
            <span>Lower limit</span>
            <strong>247.5 g</strong>
          </div>
          <div>
            <span>Upper limit</span>
            <strong>252.5 g</strong>
          </div>
          <div>
            <span>Actual mass m</span>
            <strong>247.5 ≤ m &lt; 252.5</strong>
          </div>
          <div>
            <span>Relative error</span>
            <strong>2.5 ÷ 250 = 0.01</strong>
          </div>
          <div className="highlightResult">
            <span>Percentage error</span>
            <strong>1%</strong>
          </div>
        </div>
      </section>

      <section className="accuracyCard">
        <div>
          <p className="accuracyLabel">IMPORTANT DISTINCTION</p>
          <h2>Absolute error and relative error answer different questions</h2>
        </div>

        <div className="accuracyGrid">
          <article>
            <strong>Absolute error</strong>
            <span>How large can the error be in the original unit?</span>
          </article>
          <article>
            <strong>Relative error</strong>
            <span>How large is the error compared with the measured value?</span>
          </article>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>
          A temperature is measured as 25°C, correct to the nearest degree.
          Which range contains the actual temperature T?
        </h2>

        <div className="quizOptions">
          {quizOptions.map((option) => {
            let optionClass = "quizOption";

            if (selectedAnswer === option.label) {
              optionClass += option.correct
                ? " correctOption"
                : " wrongOption";
            }

            return (
              <button
                key={option.label}
                type="button"
                className={optionClass}
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
              The maximum absolute error is ½ × 1°C = 0.5°C. Therefore,
              24.5 ≤ T &lt; 25.5.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>
        <ul>
          <li>Using the whole scale interval instead of half of it.</li>
          <li>Adding the error to find the lower limit.</li>
          <li>Subtracting the error to find the upper limit.</li>
          <li>Including the upper limit when a value was rounded to the nearest unit.</li>
          <li>Dividing by the actual value instead of the measured value for relative error.</li>
          <li>Forgetting to multiply relative error by 100%.</li>
          <li>Writing a unit for relative error or percentage error.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>The complete measurement-error process</h2>

        <div className="summaryFlow">
          <article>
            <span>1</span>
            <strong>Find half the interval</strong>
          </article>
          <span className="summaryArrow">→</span>
          <article>
            <span>2</span>
            <strong>Calculate both limits</strong>
          </article>
          <span className="summaryArrow">→</span>
          <article>
            <span>3</span>
            <strong>Write the actual-value range</strong>
          </article>
          <span className="summaryArrow">→</span>
          <article>
            <span>4</span>
            <strong>Find relative and percentage errors</strong>
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
        .accuracyLabel,
        .quizLabel,
        .summaryLabel,
        .comparisonLabel {
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
        .accuracyCard,
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
          margin-bottom: 19px;
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
        .accuracyLabel,
        .quizLabel,
        .summaryLabel {
          margin: 0 0 4px;
          color: #e11d48;
        }

        .lessonHeading h2,
        .workedExample h2,
        .accuracyCard h2,
        .quizCard h2,
        .mistakesCard h2,
        .summaryCard h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.3;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: stretch;
          gap: 14px;
        }

        .comparisonGrid article {
          padding: 20px;
          border: 1px solid #fecdd3;
          border-radius: 16px;
          background: #fff1f2;
          text-align: center;
        }

        .comparisonLabel {
          margin: 0 0 9px;
          color: #be123c;
          font-size: 11px;
        }

        .comparisonGrid article strong {
          display: block;
          margin-bottom: 8px;
          color: #881337;
          font-size: 22px;
        }

        .comparisonGrid article > p:last-child {
          margin: 0;
          color: #64748b;
          line-height: 1.5;
        }

        .comparisonArrow {
          align-self: center;
          color: #e11d48;
          font-size: 28px;
          font-weight: 900;
        }

        .importantNote {
          margin: 15px 0 0;
          padding: 14px 16px;
          border-radius: 13px;
          background: #f8fafc;
          color: #475569;
          font-size: 16px;
          line-height: 1.55;
          text-align: center;
        }

        .formulaBox {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
          padding: 22px;
          border: 2px solid #bae6fd;
          border-radius: 17px;
          background: #f0f9ff;
          color: #0c4a6e;
          text-align: center;
        }

        .formulaBox span {
          font-size: 17px;
          font-weight: 800;
        }

        .formulaBox strong {
          font-family: "Times New Roman", serif;
          font-size: 29px;
        }

        .absoluteErrorCard > p,
        .relativeErrorCard > p {
          margin: 0 0 18px;
          color: #475569;
          font-size: 16px;
          line-height: 1.6;
        }

        .relativeErrorCard > p {
          margin: 16px 0 0;
          text-align: center;
        }

        .intervalGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px;
        }

        .intervalGrid article {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 15px 17px;
          border-radius: 14px;
          background: #f8fafc;
        }

        .intervalGrid span {
          color: #64748b;
        }

        .intervalGrid strong {
          color: #0369a1;
        }

        .limitsFormulaGrid,
        .errorFormulaGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .limitsFormulaGrid article,
        .errorFormulaGrid article {
          padding: 20px;
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          background: #faf5ff;
          color: #5b21b6;
          text-align: center;
        }

        .limitsFormulaGrid p,
        .errorFormulaGrid p {
          margin: 0 0 10px;
          color: #7c3aed;
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .limitsFormulaGrid strong,
        .errorFormulaGrid strong {
          font-family: "Times New Roman", serif;
          font-size: 21px;
          line-height: 1.45;
        }

        .rangeDiagram {
          margin-top: 18px;
          padding: 22px 14px;
          border-radius: 16px;
          background: #f8fafc;
        }

        .rangeLabels,
        .rangeValues {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          text-align: center;
        }

        .rangeLabels {
          color: #64748b;
          font-size: 13px;
        }

        .numberLine {
          display: grid;
          grid-template-columns: auto 1fr auto 1fr auto;
          align-items: center;
          margin: 13px 9%;
        }

        .closedPoint,
        .openPoint,
        .measuredPoint {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          box-sizing: border-box;
        }

        .closedPoint {
          background: #7c3aed;
        }

        .openPoint {
          border: 3px solid #7c3aed;
          background: #ffffff;
        }

        .measuredPoint {
          width: 13px;
          height: 13px;
          background: #e11d48;
        }

        .rangeLine {
          height: 4px;
          background: #7c3aed;
        }

        .rangeValues {
          color: #5b21b6;
          font-size: 17px;
        }

        .inequalityBox {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 15px;
          padding: 16px;
          border-radius: 14px;
          background: #ede9fe;
          color: #5b21b6;
        }

        .inequalityBox strong {
          font-family: "Times New Roman", serif;
          font-size: 24px;
        }

        .boundaryExplanation {
          margin: 13px 0 0;
          color: #64748b;
          font-size: 15px;
          line-height: 1.55;
          text-align: center;
        }

        .fraction {
          display: inline-grid;
          text-align: center;
          font-family: "Times New Roman", serif;
          font-size: 19px;
          font-weight: 700;
        }

        .fraction span:first-child {
          padding: 0 8px 5px;
          border-bottom: 2px solid currentColor;
        }

        .fraction span:last-child {
          padding-top: 5px;
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

        .solutionSteps {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px;
        }

        .solutionSteps article {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 16px;
          border: 1px solid #bae6fd;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.85);
        }

        .stepNumber {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 11px;
          background: #0369a1;
          color: #ffffff;
          font-weight: 900;
        }

        .solutionSteps p {
          margin: 0 0 4px;
          color: #64748b;
          font-size: 14px;
        }

        .solutionSteps strong {
          color: #0c4a6e;
          font-size: 17px;
        }

        .secondExample {
          border-color: #a7f3d0;
          background: linear-gradient(135deg, #ecfdf5, #f0fdf4);
        }

        .secondExample .workedLabel {
          color: #047857;
        }

        .calculationTable {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 11px;
        }

        .calculationTable > div {
          padding: 16px;
          border: 1px solid #a7f3d0;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.82);
          text-align: center;
        }

        .calculationTable span,
        .calculationTable strong {
          display: block;
        }

        .calculationTable span {
          margin-bottom: 7px;
          color: #64748b;
          font-size: 13px;
        }

        .calculationTable strong {
          color: #047857;
          font-size: 17px;
        }

        .highlightResult {
          background: #d1fae5 !important;
        }

        .highlightResult strong {
          font-size: 24px;
        }

        .accuracyCard {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          align-items: center;
          gap: 22px;
          border: 1px solid #fde68a;
          background: linear-gradient(135deg, #fffbeb, #fff7ed);
        }

        .accuracyLabel {
          color: #b45309;
        }

        .accuracyGrid {
          display: grid;
          gap: 10px;
        }

        .accuracyGrid article {
          padding: 14px 16px;
          border: 1px solid #fde68a;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.8);
        }

        .accuracyGrid strong,
        .accuracyGrid span {
          display: block;
        }

        .accuracyGrid strong {
          margin-bottom: 4px;
          color: #92400e;
        }

        .accuracyGrid span {
          color: #64748b;
          font-size: 14px;
          line-height: 1.45;
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
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .quizOption {
          min-height: 56px;
          padding: 13px;
          border: 2px solid #cbd5e1;
          border-radius: 13px;
          background: #ffffff;
          color: #0f172a;
          font-family: "Times New Roman", serif;
          font-size: 18px;
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
          margin-bottom: 17px;
        }

        .summaryFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: stretch;
          gap: 8px;
        }

        .summaryFlow article {
          padding: 15px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.78);
          text-align: center;
        }

        .summaryFlow article span {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 8px;
          border-radius: 9px;
          background: #059669;
          color: #ffffff;
          font-weight: 900;
        }

        .summaryFlow article strong {
          color: #047857;
          font-size: 14px;
          line-height: 1.4;
        }

        .summaryArrow {
          align-self: center;
          color: #059669;
          font-size: 21px;
          font-weight: 900;
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

        @media (max-width: 780px) {
          .summaryFlow {
            grid-template-columns: 1fr;
          }

          .summaryArrow {
            justify-self: center;
            transform: rotate(90deg);
          }

          .calculationTable {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .workedExample,
          .accuracyCard,
          .quizCard,
          .mistakesCard,
          .summaryCard {
            padding: 21px;
          }

          .comparisonGrid,
          .intervalGrid,
          .limitsFormulaGrid,
          .errorFormulaGrid,
          .solutionSteps,
          .calculationTable,
          .accuracyCard,
          .quizOptions {
            grid-template-columns: 1fr;
          }

          .comparisonArrow {
            justify-self: center;
            transform: rotate(90deg);
          }

          .inequalityBox,
          .feedback {
            align-items: flex-start;
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
