"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  {
    label: "0 is a positive integer.",
    correct: false,
  },
  {
    label: "0 is a whole number and an integer.",
    correct: true,
  },
  {
    label: "0 is a prime number.",
    correct: false,
  },
  {
    label: "0 is an odd number.",
    correct: false,
  },
];

export default function ReviewOnTypesOfNumbersPage() {
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

      <p className="eyebrow">S1 · CHAPTER 1 · SECTION 1</p>
      <h1>Review on Types of Numbers</h1>

      <p className="introduction">
        Numbers can belong to more than one group. Review how natural numbers,
        whole numbers, integers, fractions and decimals are classified.
      </p>

      <section className="lessonCard numberFamiliesCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">NUMBER FAMILIES</p>
            <h2>Natural numbers, whole numbers and integers</h2>
          </div>
        </div>

        <div className="familyGrid">
          <article className="naturalCard">
            <p className="familyLabel">NATURAL NUMBERS</p>
            <strong>1, 2, 3, 4, …</strong>
            <p>The positive integers used for counting.</p>
          </article>

          <article className="wholeCard">
            <p className="familyLabel">WHOLE NUMBERS</p>
            <strong>0, 1, 2, 3, …</strong>
            <p>Natural numbers together with zero.</p>
          </article>

          <article className="integerCard">
            <p className="familyLabel">INTEGERS</p>
            <strong>…, −2, −1, 0, 1, 2, …</strong>
            <p>Negative whole numbers, zero and positive whole numbers.</p>
          </article>
        </div>

        <div className="nestingDiagram">
          <div className="integerSet">
            <span>Integers</span>
            <div className="wholeSet">
              <span>Whole numbers</span>
              <div className="naturalSet">
                <span>Natural numbers</span>
                <strong>1, 2, 3, …</strong>
              </div>
              <strong>0</strong>
            </div>
            <strong>−1, −2, −3, …</strong>
          </div>
        </div>

        <p className="relationshipNote">
          Every natural number is a whole number, and every whole number is an
          integer. The reverse statements are not always true.
        </p>
      </section>

      <section className="lessonCard signCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">SIGNS AND ZERO</p>
            <h2>Positive numbers, negative numbers and zero</h2>
          </div>
        </div>

        <div className="signGrid">
          <article>
            <span className="signSymbol negativeSymbol">−</span>
            <strong>Negative numbers</strong>
            <p>Numbers less than zero, such as −8 and −0.5.</p>
          </article>

          <article>
            <span className="signSymbol zeroSymbol">0</span>
            <strong>Zero</strong>
            <p>Zero is neither positive nor negative.</p>
          </article>

          <article>
            <span className="signSymbol positiveSymbol">＋</span>
            <strong>Positive numbers</strong>
            <p>Numbers greater than zero, such as 6 and 2.4.</p>
          </article>
        </div>

        <div className="numberLineCard">
          <p>Numbers increase from left to right</p>
          <div className="numberLine">
            {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((number) => (
              <span key={number} className={number === 0 ? "zeroPoint" : ""}>
                <i />
                <strong>{number}</strong>
              </span>
            ))}
          </div>
          <div className="directionLabels">
            <span>smaller</span>
            <span>larger</span>
          </div>
        </div>
      </section>

      <section className="lessonCard parityCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">EVEN AND ODD</p>
            <h2>Classify integers by divisibility by 2</h2>
          </div>
        </div>

        <div className="twoColumnGrid">
          <article className="evenCard">
            <p className="categoryLabel">EVEN INTEGERS</p>
            <strong>…, −4, −2, 0, 2, 4, …</strong>
            <p>An integer is even when it is divisible by 2.</p>
            <span>General form: 2n</span>
          </article>

          <article className="oddCard">
            <p className="categoryLabel">ODD INTEGERS</p>
            <strong>…, −3, −1, 1, 3, 5, …</strong>
            <p>An integer is odd when it is not divisible by 2.</p>
            <span>General form: 2n + 1</span>
          </article>
        </div>

        <div className="operationPatterns">
          <p className="patternsLabel">USEFUL PATTERNS</p>
          <div>
            <span>even + even = even</span>
            <span>odd + odd = even</span>
            <span>even + odd = odd</span>
            <span>odd × odd = odd</span>
            <span>even × integer = even</span>
          </div>
        </div>
      </section>

      <section className="lessonCard primeCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">PRIME AND COMPOSITE</p>
            <h2>Count the positive factors</h2>
          </div>
        </div>

        <div className="twoColumnGrid">
          <article className="primeDefinition">
            <p className="categoryLabel">PRIME NUMBER</p>
            <strong>Exactly two positive factors</strong>
            <p>Its only positive factors are 1 and itself.</p>
            <span>Examples: 2, 3, 5, 7, 11, 13</span>
          </article>

          <article className="compositeDefinition">
            <p className="categoryLabel">COMPOSITE NUMBER</p>
            <strong>More than two positive factors</strong>
            <p>It can be expressed as a product of smaller natural numbers.</p>
            <span>Examples: 4, 6, 8, 9, 10, 12</span>
          </article>
        </div>

        <div className="specialFacts">
          <article>
            <strong>1 is neither prime nor composite</strong>
            <span>It has only one positive factor: 1.</span>
          </article>
          <article>
            <strong>2 is the only even prime number</strong>
            <span>Every other even natural number has at least three factors.</span>
          </article>
        </div>
      </section>

      <section className="lessonCard fractionDecimalCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">OTHER NUMBER FORMS</p>
            <h2>Fractions and decimals</h2>
          </div>
        </div>

        <div className="representationGrid">
          <article>
            <p>Fraction</p>
            <strong>¾</strong>
          </article>
          <span className="equalsSymbol">=</span>
          <article>
            <p>Decimal</p>
            <strong>0.75</strong>
          </article>
          <span className="equalsSymbol">=</span>
          <article>
            <p>Percentage</p>
            <strong>75%</strong>
          </article>
        </div>

        <div className="fractionTypesGrid">
          <article>
            <strong>Proper fraction</strong>
            <span>Numerator &lt; denominator</span>
            <p>Example: ⅜</p>
          </article>
          <article>
            <strong>Improper fraction</strong>
            <span>Numerator ≥ denominator</span>
            <p>Example: ⁷⁄₄</p>
          </article>
          <article>
            <strong>Mixed number</strong>
            <span>Whole number + proper fraction</span>
            <p>Example: 1¾</p>
          </article>
          <article>
            <strong>Terminating decimal</strong>
            <span>Has a finite number of decimal places</span>
            <p>Example: 0.625</p>
          </article>
        </div>
      </section>

      <section className="classificationExample">
        <p className="workedLabel">WORKED EXAMPLE</p>
        <h2>Classify each number as fully as possible.</h2>

        <div className="classificationTable">
          <div className="tableHeader">
            <span>Number</span>
            <span>Classifications</span>
            <span>Reason</span>
          </div>
          <div>
            <strong>7</strong>
            <span>natural, whole, integer, odd, prime</span>
            <span>It is a positive counting number with factors 1 and 7.</span>
          </div>
          <div>
            <strong>0</strong>
            <span>whole, integer, even</span>
            <span>It is divisible by 2 but is neither positive nor negative.</span>
          </div>
          <div>
            <strong>−6</strong>
            <span>integer, negative, even</span>
            <span>It is a negative integer divisible by 2.</span>
          </div>
          <div>
            <strong>¾</strong>
            <span>proper fraction, positive number</span>
            <span>Its numerator is smaller than its denominator.</span>
          </div>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Which statement about zero is correct?</h2>

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
              Zero is a whole number, an integer and an even number. It is
              neither positive nor negative, and it is not prime.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>
        <ul>
          <li>Calling zero a positive or negative number.</li>
          <li>Forgetting that zero is an even integer.</li>
          <li>Calling 1 a prime number.</li>
          <li>Thinking that all odd numbers are prime.</li>
          <li>Assuming a number can belong to only one number group.</li>
          <li>Confusing an improper fraction with a mixed number.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Numbers can have several classifications</h2>

        <div className="summaryGrid">
          <article>
            <strong>Natural</strong>
            <span>positive counting numbers</span>
          </article>
          <article>
            <strong>Whole</strong>
            <span>natural numbers and zero</span>
          </article>
          <article>
            <strong>Integer</strong>
            <span>negative and non-negative whole numbers</span>
          </article>
          <article>
            <strong>Prime</strong>
            <span>exactly two positive factors</span>
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
        .categoryLabel,
        .patternsLabel,
        .workedLabel,
        .quizLabel,
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
        .classificationExample,
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
        .quizLabel,
        .summaryLabel {
          margin: 0 0 4px;
          color: #e11d48;
        }

        .lessonHeading h2,
        .classificationExample h2,
        .quizCard h2,
        .mistakesCard h2,
        .summaryCard h2 {
          margin: 0;
          font-size: 27px;
          line-height: 1.3;
        }

        .familyGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .familyGrid article {
          padding: 19px;
          border-radius: 16px;
          text-align: center;
        }

        .naturalCard {
          background: #ecfdf5;
          color: #065f46;
        }

        .wholeCard {
          background: #eff6ff;
          color: #1e40af;
        }

        .integerCard {
          background: #faf5ff;
          color: #6b21a8;
        }

        .familyLabel {
          margin: 0 0 9px;
          font-size: 11px;
        }

        .familyGrid strong {
          display: block;
          margin-bottom: 8px;
          font-family: "Times New Roman", serif;
          font-size: 22px;
        }

        .familyGrid p:last-child {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
        }

        .nestingDiagram {
          margin-top: 15px;
          padding: 19px;
          border-radius: 16px;
          background: #f8fafc;
        }

        .integerSet,
        .wholeSet,
        .naturalSet {
          border-radius: 16px;
          padding: 15px;
        }

        .integerSet {
          border: 2px solid #c084fc;
          color: #6b21a8;
        }

        .wholeSet {
          margin: 11px 0;
          border: 2px solid #93c5fd;
          color: #1e40af;
        }

        .naturalSet {
          margin: 11px 0;
          border: 2px solid #6ee7b7;
          color: #065f46;
        }

        .integerSet span,
        .wholeSet span,
        .naturalSet span {
          display: block;
          margin-bottom: 6px;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .integerSet strong,
        .wholeSet strong,
        .naturalSet strong {
          display: block;
          font-family: "Times New Roman", serif;
          font-size: 17px;
        }

        .relationshipNote {
          margin: 14px 0 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.55;
          text-align: center;
        }

        .signGrid,
        .twoColumnGrid,
        .fractionTypesGrid,
        .summaryGrid {
          display: grid;
          gap: 12px;
        }

        .signGrid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .signGrid article {
          padding: 18px;
          border-radius: 16px;
          background: #f8fafc;
          text-align: center;
        }

        .signSymbol {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 9px;
          border-radius: 14px;
          font-size: 22px;
          font-weight: 900;
        }

        .negativeSymbol {
          background: #fee2e2;
          color: #991b1b;
        }

        .zeroSymbol {
          background: #f1f5f9;
          color: #475569;
        }

        .positiveSymbol {
          background: #dcfce7;
          color: #166534;
        }

        .signGrid strong {
          display: block;
          margin-bottom: 5px;
          font-size: 17px;
        }

        .signGrid p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
        }

        .numberLineCard {
          margin-top: 15px;
          padding: 20px;
          border-radius: 16px;
          background: #f8fafc;
        }

        .numberLineCard > p {
          margin: 0 0 18px;
          color: #475569;
          font-size: 14px;
          font-weight: 800;
          text-align: center;
        }

        .numberLine {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          border-top: 4px solid #64748b;
        }

        .numberLine > span {
          position: relative;
          text-align: center;
        }

        .numberLine i {
          display: block;
          width: 3px;
          height: 12px;
          margin: -4px auto 5px;
          background: #64748b;
        }

        .numberLine strong {
          color: #475569;
          font-size: 14px;
        }

        .numberLine .zeroPoint i {
          width: 8px;
          height: 8px;
          margin-top: -6px;
          border-radius: 50%;
          background: #e11d48;
        }

        .numberLine .zeroPoint strong {
          color: #be123c;
        }

        .directionLabels {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          color: #94a3b8;
          font-size: 12px;
          font-weight: 800;
        }

        .twoColumnGrid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .twoColumnGrid article {
          padding: 20px;
          border-radius: 16px;
        }

        .evenCard,
        .primeDefinition {
          background: #eff6ff;
          color: #1e40af;
        }

        .oddCard,
        .compositeDefinition {
          background: #fff7ed;
          color: #9a3412;
        }

        .categoryLabel {
          margin: 0 0 9px;
          font-size: 11px;
        }

        .twoColumnGrid article > strong {
          display: block;
          margin-bottom: 7px;
          font-size: 19px;
        }

        .twoColumnGrid article > p:not(.categoryLabel) {
          margin: 0 0 9px;
          color: #64748b;
          line-height: 1.5;
        }

        .twoColumnGrid article > span {
          font-family: "Times New Roman", serif;
          font-size: 17px;
          font-weight: 800;
        }

        .operationPatterns {
          margin-top: 14px;
          padding: 17px;
          border-radius: 15px;
          background: #f8fafc;
        }

        .patternsLabel {
          margin: 0 0 10px;
          color: #475569;
          font-size: 11px;
        }

        .operationPatterns > div {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .operationPatterns span {
          padding: 8px 11px;
          border-radius: 999px;
          background: #ffffff;
          color: #475569;
          font-size: 13px;
          font-weight: 700;
        }

        .specialFacts {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px;
          margin-top: 14px;
        }

        .specialFacts article {
          padding: 16px;
          border: 1px solid #fde68a;
          border-radius: 14px;
          background: #fffbeb;
        }

        .specialFacts strong,
        .specialFacts span {
          display: block;
        }

        .specialFacts strong {
          margin-bottom: 5px;
          color: #92400e;
        }

        .specialFacts span {
          color: #64748b;
          font-size: 14px;
          line-height: 1.45;
        }

        .representationGrid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 9px;
        }

        .representationGrid article {
          padding: 17px;
          border: 1px solid #c7d2fe;
          border-radius: 15px;
          background: #eef2ff;
          color: #3730a3;
          text-align: center;
        }

        .representationGrid p {
          margin: 0 0 6px;
          color: #64748b;
          font-size: 13px;
        }

        .representationGrid strong {
          font-family: "Times New Roman", serif;
          font-size: 25px;
        }

        .equalsSymbol {
          color: #4f46e5;
          font-size: 22px;
          font-weight: 900;
        }

        .fractionTypesGrid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 14px;
        }

        .fractionTypesGrid article {
          padding: 16px;
          border-radius: 14px;
          background: #f8fafc;
        }

        .fractionTypesGrid strong,
        .fractionTypesGrid span,
        .fractionTypesGrid p {
          display: block;
        }

        .fractionTypesGrid strong {
          margin-bottom: 4px;
          color: #3730a3;
        }

        .fractionTypesGrid span {
          color: #64748b;
          font-size: 13px;
        }

        .fractionTypesGrid p {
          margin: 7px 0 0;
          font-family: "Times New Roman", serif;
          font-size: 17px;
          font-weight: 700;
        }

        .classificationExample {
          border: 1px solid #bae6fd;
          background: linear-gradient(135deg, #f0f9ff, #ecfeff);
        }

        .workedLabel {
          color: #0369a1;
        }

        .classificationExample h2 {
          margin-bottom: 18px;
        }

        .classificationTable {
          overflow: hidden;
          border: 1px solid #bae6fd;
          border-radius: 15px;
          background: #ffffff;
        }

        .classificationTable > div {
          display: grid;
          grid-template-columns: 0.35fr 1fr 1.4fr;
          gap: 13px;
          align-items: center;
          padding: 13px 16px;
          border-bottom: 1px solid #e0f2fe;
        }

        .classificationTable > div:last-child {
          border-bottom: none;
        }

        .tableHeader {
          background: #0369a1;
          color: #ffffff;
          font-weight: 900;
        }

        .classificationTable > div:not(.tableHeader) strong {
          color: #0369a1;
          font-family: "Times New Roman", serif;
          font-size: 20px;
        }

        .classificationTable > div:not(.tableHeader) span {
          color: #475569;
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
          margin-bottom: 19px;
        }

        .quizOptions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .quizOption {
          min-height: 56px;
          padding: 13px 15px;
          border: 2px solid #cbd5e1;
          border-radius: 13px;
          background: #ffffff;
          color: #0f172a;
          font-size: 16px;
          font-weight: 800;
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
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .summaryGrid article {
          padding: 15px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.78);
          text-align: center;
        }

        .summaryGrid strong,
        .summaryGrid span {
          display: block;
        }

        .summaryGrid strong {
          margin-bottom: 5px;
          color: #047857;
          font-size: 18px;
        }

        .summaryGrid span {
          color: #64748b;
          font-size: 13px;
          line-height: 1.4;
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
          .familyGrid,
          .signGrid,
          .summaryGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .classificationExample,
          .quizCard,
          .mistakesCard,
          .summaryCard {
            padding: 21px;
          }

          .familyGrid,
          .signGrid,
          .twoColumnGrid,
          .specialFacts,
          .fractionTypesGrid,
          .quizOptions,
          .summaryGrid {
            grid-template-columns: 1fr;
          }

          .representationGrid {
            grid-template-columns: 1fr;
          }

          .equalsSymbol {
            transform: rotate(90deg);
            justify-self: center;
          }

          .classificationTable > div {
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
