"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "1.75", correct: false },
  { label: "2", correct: false },
  { label: "2.25", correct: true },
  { label: "2.75", correct: false },
];

export default function FractionsAndDecimalsPage() {
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

      <p className="eyebrow">S1 · CHAPTER 1 · SECTION 5</p>
      <h1>Operations of Fractions and Decimals</h1>

      <p className="introduction">
        Fractions and decimals are two ways to represent parts of a whole.
        Convert between forms when useful, follow the correct operation rules
        and present every fraction in its simplest form.
      </p>

      <section className="lessonCard fractionBasicsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">FRACTION BASICS</p>
            <h2>Equivalent and simplest fractions</h2>
          </div>
        </div>

        <div className="fractionParts">
          <div className="largeFraction" aria-label="three quarters">
            <span>3</span>
            <span>4</span>
          </div>
          <div className="partLabels">
            <article>
              <strong>Numerator</strong>
              <span>The number of selected equal parts.</span>
            </article>
            <article>
              <strong>Denominator</strong>
              <span>The total number of equal parts in one whole.</span>
            </article>
          </div>
        </div>

        <div className="equivalentGrid">
          <article>
            <p className="miniLabel">EQUIVALENT FRACTIONS</p>
            <div className="equationLine">3/4 = 6/8 = 9/12</div>
            <p>
              Multiply or divide both numerator and denominator by the same
              non-zero number.
            </p>
          </article>
          <article>
            <p className="miniLabel">SIMPLEST FORM</p>
            <div className="equationLine">18/24 = 3/4</div>
            <p>
              Divide both parts by their H.C.F., 6. The numerator and
              denominator then have no common factor greater than 1.
            </p>
          </article>
        </div>
      </section>

      <section className="lessonCard conversionCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">MIXED NUMBERS</p>
            <h2>Convert before multiplying or dividing</h2>
          </div>
        </div>

        <div className="conversionGrid">
          <article>
            <span className="conversionTag">MIXED TO IMPROPER</span>
            <h3>2 3/5</h3>
            <div className="conversionSteps">
              <span>2 × 5 + 3 = 13</span>
              <strong>2 3/5 = 13/5</strong>
            </div>
          </article>
          <article>
            <span className="conversionTag">IMPROPER TO MIXED</span>
            <h3>17/4</h3>
            <div className="conversionSteps">
              <span>17 ÷ 4 = 4 remainder 1</span>
              <strong>17/4 = 4 1/4</strong>
            </div>
          </article>
        </div>

        <div className="conversionReminder">
          <strong>Remember:</strong>
          <span>
            The denominator stays the same during both conversions. Convert
            all mixed numbers to improper fractions before multiplication or
            division.
          </span>
        </div>
      </section>

      <section className="lessonCard additionCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">ADDITION AND SUBTRACTION</p>
            <h2>Use a common denominator</h2>
          </div>
        </div>

        <div className="ruleBanner">
          <strong>Same denominator first</strong>
          <span>Add or subtract the numerators. Do not add the denominators.</span>
        </div>

        <div className="workedGrid">
          <article>
            <p className="miniLabel">EXAMPLE A · ADDITION</p>
            <h3>3/4 + 5/6</h3>
            <div className="calculation">
              <span>= 9/12 + 10/12</span>
              <span>= 19/12</span>
              <strong>= 1 7/12</strong>
            </div>
            <p>The L.C.M. of 4 and 6 is 12.</p>
          </article>

          <article>
            <p className="miniLabel">EXAMPLE B · SUBTRACTION</p>
            <h3>2 1/3 − 5/8</h3>
            <div className="calculation">
              <span>= 7/3 − 5/8</span>
              <span>= 56/24 − 15/24</span>
              <span>= 41/24</span>
              <strong>= 1 17/24</strong>
            </div>
            <p>Convert the mixed number, then use denominator 24.</p>
          </article>
        </div>
      </section>

      <section className="lessonCard multiplyCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">MULTIPLICATION AND DIVISION</p>
            <h2>Multiply directly or use the reciprocal</h2>
          </div>
        </div>

        <div className="methodGrid">
          <article className="multiplyMethod">
            <span className="methodSymbol">×</span>
            <div>
              <h3>Multiplication</h3>
              <p>Multiply numerators together and denominators together.</p>
              <div className="methodExample">
                <span>2 1/4 × 1 1/3</span>
                <span>= 9/4 × 4/3</span>
                <span>= 3/1</span>
                <strong>= 3</strong>
              </div>
              <small>Cancel common factors before multiplying when possible.</small>
            </div>
          </article>

          <article className="divisionMethod">
            <span className="methodSymbol">÷</span>
            <div>
              <h3>Division</h3>
              <p>Multiply by the reciprocal of the second fraction.</p>
              <div className="methodExample">
                <span>5/6 ÷ 10/9</span>
                <span>= 5/6 × 9/10</span>
                <span>= 3/4</span>
                <strong>= 3/4</strong>
              </div>
              <small>Only the divisor is inverted.</small>
            </div>
          </article>
        </div>
      </section>

      <section className="lessonCard decimalsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">DECIMAL OPERATIONS</p>
            <h2>Keep place values under control</h2>
          </div>
        </div>

        <div className="decimalRules">
          <article>
            <span className="decimalIcon">＋−</span>
            <div>
              <h3>Addition and subtraction</h3>
              <p>Align decimal points and add placeholder zeros if needed.</p>
              <strong>8.40 − 2.75 = 5.65</strong>
            </div>
          </article>
          <article>
            <span className="decimalIcon">×</span>
            <div>
              <h3>Multiplication</h3>
              <p>
                Multiply as whole numbers, then insert the total number of
                decimal places.
              </p>
              <strong>1.2 × 0.35 = 0.420 = 0.42</strong>
            </div>
          </article>
          <article>
            <span className="decimalIcon">÷</span>
            <div>
              <h3>Division</h3>
              <p>
                Multiply both numbers by the same power of 10 until the
                divisor is a whole number.
              </p>
              <strong>4.68 ÷ 0.6 = 46.8 ÷ 6 = 7.8</strong>
            </div>
          </article>
        </div>

        <div className="placeValueCheck">
          <span>Estimate first:</span>
          <strong>4.68 ÷ 0.6 is close to 5 ÷ 0.5 = 10</strong>
          <span>Therefore, 7.8 is reasonable; 0.78 is not.</span>
        </div>
      </section>

      <section className="lessonCard mixedCard">
        <div className="lessonHeading">
          <span className="lessonNumber">6</span>
          <div>
            <p className="lessonLabel">MIXED FORMS</p>
            <h2>Convert to one form before calculating</h2>
          </div>
        </div>

        <div className="mixedExample">
          <div className="mixedQuestion">Calculate 7/10 + 0.66 ÷ 1.1</div>
          <div className="mixedWorking">
            <span>0.66 ÷ 1.1 = 6.6 ÷ 11 = 0.6</span>
            <span>7/10 = 0.7</span>
            <strong>0.7 + 0.6 = 1.3</strong>
          </div>
        </div>

        <div className="formChoiceGrid">
          <article>
            <strong>Choose fractions when</strong>
            <span>the numbers convert exactly and cancellation is helpful.</span>
          </article>
          <article>
            <strong>Choose decimals when</strong>
            <span>the fractions have denominators such as 10, 100 or 1,000.</span>
          </article>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Evaluate 2 1/3 × 3/4 + 0.5.</h2>

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
              2 1/3 = 7/3. Then 7/3 × 3/4 = 7/4 = 1.75, and
              1.75 + 0.5 = 2.25.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Protect the denominator and decimal point</h2>
        <ul>
          <li>Adding denominators when adding fractions.</li>
          <li>Forgetting to convert mixed numbers before multiplication or division.</li>
          <li>Inverting the first fraction instead of the divisor.</li>
          <li>Leaving a final fraction unsimplified.</li>
          <li>Failing to align decimal points for addition or subtraction.</li>
          <li>Moving the decimal point in only one number during division.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Match the method to the operation</h2>
        <div className="summaryGrid">
          <article>
            <strong>Fraction + or −</strong>
            <span>use a common denominator</span>
          </article>
          <article>
            <strong>Fraction ×</strong>
            <span>multiply and cancel factors</span>
          </article>
          <article>
            <strong>Fraction ÷</strong>
            <span>multiply by the reciprocal</span>
          </article>
          <article>
            <strong>Decimals</strong>
            <span>track place value and estimate</span>
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
        .miniLabel,
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
          font-size: clamp(36px, 5vw, 54px);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .introduction {
          max-width: 840px;
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

        .fractionParts {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
          align-items: center;
          gap: 22px;
          padding: 22px;
          border-radius: 19px;
          background: #f5f3ff;
        }

        .largeFraction {
          display: grid;
          place-items: center;
          color: #4c1d95;
          font-size: 44px;
          font-weight: 900;
        }

        .largeFraction span {
          width: 72px;
          padding: 3px;
          text-align: center;
        }

        .largeFraction span:first-child {
          border-bottom: 4px solid #4c1d95;
        }

        .partLabels {
          display: grid;
          gap: 12px;
        }

        .partLabels article {
          padding: 14px 16px;
          border-radius: 14px;
          background: white;
        }

        .partLabels strong,
        .partLabels span {
          display: block;
        }

        .partLabels span {
          margin-top: 4px;
          color: #64748b;
        }

        .equivalentGrid,
        .conversionGrid,
        .workedGrid,
        .methodGrid,
        .formChoiceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .equivalentGrid article,
        .workedGrid article {
          padding: 21px;
          border: 1px solid #dbeafe;
          border-radius: 18px;
          background: #f8fbff;
        }

        .miniLabel {
          margin: 0 0 12px;
          color: #1d4ed8;
        }

        .equationLine {
          padding: 14px;
          border-radius: 13px;
          background: white;
          color: #1e3a8a;
          font-size: 23px;
          font-weight: 900;
          text-align: center;
        }

        .equivalentGrid p:last-child,
        .workedGrid article > p:last-child {
          margin: 12px 0 0;
          color: #64748b;
          line-height: 1.5;
        }

        .conversionGrid { margin-top: 0; }

        .conversionGrid article {
          padding: 22px;
          border-radius: 19px;
          background: linear-gradient(145deg, #eef2ff, #fafaff);
          text-align: center;
        }

        .conversionTag {
          color: #4f46e5;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .conversionGrid h3 {
          margin: 14px 0;
          font-size: 30px;
        }

        .conversionSteps {
          display: grid;
          gap: 7px;
          padding: 15px;
          border-radius: 14px;
          background: white;
        }

        .conversionSteps strong { color: #047857; }

        .conversionReminder,
        .ruleBanner,
        .placeValueCheck {
          display: grid;
          gap: 5px;
          margin-top: 15px;
          padding: 16px 18px;
          border-radius: 15px;
          background: #fffbeb;
          color: #854d0e;
          line-height: 1.5;
        }

        .workedGrid { margin-top: 15px; }

        .workedGrid h3 {
          margin: 0 0 13px;
          color: #1e3a8a;
          font-size: 24px;
        }

        .calculation {
          display: grid;
          gap: 7px;
          padding: 15px;
          border-radius: 14px;
          background: white;
          font-size: 18px;
          font-weight: 800;
        }

        .calculation strong { color: #047857; }

        .methodGrid { margin-top: 0; }

        .methodGrid > article {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 22px;
          border-radius: 19px;
        }

        .multiplyMethod {
          border: 1px solid #a7f3d0;
          background: #ecfdf5;
        }

        .divisionMethod {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
        }

        .methodSymbol {
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: white;
          font-size: 24px;
          font-weight: 900;
        }

        .methodGrid h3 {
          margin: 2px 0 6px;
          font-size: 21px;
        }

        .methodGrid p {
          min-height: 48px;
          margin: 0;
          color: #475569;
          line-height: 1.5;
        }

        .methodExample {
          display: grid;
          gap: 6px;
          margin-top: 13px;
          padding: 14px;
          border-radius: 13px;
          background: white;
          font-size: 17px;
          font-weight: 800;
        }

        .methodGrid small {
          display: block;
          margin-top: 10px;
          color: #64748b;
          line-height: 1.4;
        }

        .decimalRules {
          display: grid;
          gap: 13px;
        }

        .decimalRules article {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 19px;
          border: 1px solid #dbeafe;
          border-radius: 17px;
          background: #f8fbff;
        }

        .decimalIcon {
          min-width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          padding: 0 7px;
          border-radius: 15px;
          background: #4f46e5;
          color: white;
          font-size: 18px;
          font-weight: 900;
        }

        .decimalRules h3 {
          margin: 1px 0 5px;
          font-size: 19px;
        }

        .decimalRules p {
          margin: 0 0 7px;
          color: #64748b;
          line-height: 1.5;
        }

        .mixedExample {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 15px;
        }

        .mixedQuestion,
        .mixedWorking {
          padding: 22px;
          border-radius: 18px;
        }

        .mixedQuestion {
          display: grid;
          place-items: center;
          background: #f5f3ff;
          color: #4c1d95;
          font-size: 22px;
          font-weight: 900;
          text-align: center;
        }

        .mixedWorking {
          display: grid;
          gap: 8px;
          background: #f8fafc;
          color: #475569;
          font-size: 17px;
        }

        .mixedWorking strong {
          color: #047857;
          font-size: 19px;
        }

        .formChoiceGrid article {
          padding: 17px;
          border-radius: 15px;
          background: #f1f5f9;
        }

        .formChoiceGrid strong,
        .formChoiceGrid span { display: block; }

        .formChoiceGrid span {
          margin-top: 5px;
          color: #64748b;
          line-height: 1.45;
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
          gap: 5px;
          margin-top: 15px;
          padding: 15px 17px;
          border-radius: 14px;
          line-height: 1.5;
        }

        .correctFeedback { background: #d1fae5; color: #065f46; }
        .incorrectFeedback { background: #ffe4e6; color: #9f1239; }

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
        .summaryGrid span { display: block; }

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

          .equivalentGrid,
          .conversionGrid,
          .workedGrid,
          .methodGrid,
          .mixedExample {
            grid-template-columns: 1fr;
          }

          .fractionParts {
            grid-template-columns: 120px minmax(0, 1fr);
          }

          .methodGrid p { min-height: 0; }

          .summaryGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 520px) {
          .lessonHeading { align-items: flex-start; }

          .lessonHeading h2,
          .quizCard h2,
          .mistakesCard h2,
          .summaryCard h2 { font-size: 23px; }

          .fractionParts { grid-template-columns: 1fr; }

          .methodGrid > article,
          .decimalRules article { flex-direction: column; }

          .formChoiceGrid,
          .summaryGrid,
          .quizOptions { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </main>
  );
}
