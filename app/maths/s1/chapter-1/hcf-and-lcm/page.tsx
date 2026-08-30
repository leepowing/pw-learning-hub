"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quizOptions = [
  { label: "H.C.F. = 6, L.C.M. = 72", correct: false },
  { label: "H.C.F. = 12, L.C.M. = 72", correct: true },
  { label: "H.C.F. = 12, L.C.M. = 144", correct: false },
  { label: "H.C.F. = 24, L.C.M. = 36", correct: false },
];

export default function HcfAndLcmPage() {
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

      <p className="eyebrow">S1 · CHAPTER 1 · SECTION 4</p>
      <h1>Highest Common Factor and Lowest Common Multiple</h1>

      <p className="introduction">
        Factors divide a number exactly, while multiples are produced by
        multiplying it by whole numbers. Use lists, prime factorization or
        short division to find the H.C.F. and L.C.M. efficiently.
      </p>

      <section className="lessonCard foundationsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <p className="lessonLabel">FOUNDATIONS</p>
            <h2>Factors and multiples</h2>
          </div>
        </div>

        <div className="definitionGrid">
          <article className="factorCard">
            <span className="definitionBadge">FACTOR</span>
            <h3>A number that divides another number exactly</h3>
            <div className="numberSentence">24 ÷ 6 = 4</div>
            <p>Therefore, 6 is a factor of 24.</p>
            <strong>Factors of 24:</strong>
            <span>1, 2, 3, 4, 6, 8, 12, 24</span>
          </article>

          <article className="multipleCard">
            <span className="definitionBadge">MULTIPLE</span>
            <h3>A result obtained by multiplying by a whole number</h3>
            <div className="numberSentence">6 × 4 = 24</div>
            <p>Therefore, 24 is a multiple of 6.</p>
            <strong>First multiples of 6:</strong>
            <span>6, 12, 18, 24, 30, 36, …</span>
          </article>
        </div>

        <div className="relationshipNote">
          <strong>One number sentence gives two relationships:</strong>
          <span>
            If 7 × 8 = 56, then 7 and 8 are factors of 56, and 56 is a
            multiple of both 7 and 8.
          </span>
        </div>
      </section>

      <section className="lessonCard meaningCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <p className="lessonLabel">COMMON VALUES</p>
            <h2>Understand H.C.F. and L.C.M.</h2>
          </div>
        </div>

        <div className="meaningGrid">
          <article>
            <span className="meaningSymbol">H</span>
            <div>
              <p className="meaningLabel">HIGHEST COMMON FACTOR</p>
              <h3>The greatest factor shared by all the given numbers</h3>
              <div className="listExample">
                <span>Factors of 12: 1, 2, 3, 4, <b>6</b>, 12</span>
                <span>Factors of 18: 1, 2, 3, <b>6</b>, 9, 18</span>
                <strong>H.C.F. of 12 and 18 = 6</strong>
              </div>
            </div>
          </article>

          <article>
            <span className="meaningSymbol">L</span>
            <div>
              <p className="meaningLabel">LOWEST COMMON MULTIPLE</p>
              <h3>The smallest positive multiple shared by all given numbers</h3>
              <div className="listExample">
                <span>Multiples of 12: 12, 24, <b>36</b>, 48, …</span>
                <span>Multiples of 18: 18, <b>36</b>, 54, 72, …</span>
                <strong>L.C.M. of 12 and 18 = 36</strong>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="lessonCard primeCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <p className="lessonLabel">PRIME FACTORIZATION</p>
            <h2>Compare powers of prime factors</h2>
          </div>
        </div>

        <div className="primeQuestion">
          Find the H.C.F. and L.C.M. of <strong>72</strong> and <strong>90</strong>.
        </div>

        <div className="factorTrees">
          <article>
            <p>72</p>
            <span>= 8 × 9</span>
            <span>= 2³ × 3²</span>
          </article>
          <article>
            <p>90</p>
            <span>= 9 × 10</span>
            <span>= 2 × 3² × 5</span>
          </article>
        </div>

        <div className="powerTable">
          <div className="powerHeader">Prime</div>
          <div className="powerHeader">72</div>
          <div className="powerHeader">90</div>
          <div className="powerHeader">For H.C.F.</div>
          <div className="powerHeader">For L.C.M.</div>

          <div>2</div><div>2³</div><div>2¹</div><div className="hcfCell">2¹</div><div className="lcmCell">2³</div>
          <div>3</div><div>3²</div><div>3²</div><div className="hcfCell">3²</div><div className="lcmCell">3²</div>
          <div>5</div><div>—</div><div>5¹</div><div className="hcfCell">—</div><div className="lcmCell">5¹</div>
        </div>

        <div className="resultGrid">
          <article className="hcfResult">
            <p>H.C.F. uses common primes with the smaller powers.</p>
            <strong>H.C.F. = 2 × 3² = 18</strong>
          </article>
          <article className="lcmResult">
            <p>L.C.M. uses every prime with the larger powers.</p>
            <strong>L.C.M. = 2³ × 3² × 5 = 360</strong>
          </article>
        </div>
      </section>

      <section className="lessonCard divisionCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <p className="lessonLabel">SHORT DIVISION</p>
            <h2>Find both results in one table</h2>
          </div>
        </div>

        <div className="shortDivisionLayout">
          <div className="divisionTable" aria-label="Short division of 24 and 36">
            <div className="divisionRow">
              <span className="divider">2</span><span>24</span><span>36</span>
            </div>
            <div className="divisionRow">
              <span className="divider">2</span><span>12</span><span>18</span>
            </div>
            <div className="divisionRow">
              <span className="divider">3</span><span>6</span><span>9</span>
            </div>
            <div className="divisionRow finalRow">
              <span></span><span>2</span><span>3</span>
            </div>
          </div>

          <div className="divisionExplanation">
            <article>
              <span className="stepNumber">1</span>
              <p>Divide both numbers by common prime factors: 2, 2 and 3.</p>
            </article>
            <article>
              <span className="stepNumber">2</span>
              <p>H.C.F. = 2 × 2 × 3 = <strong>12</strong>.</p>
            </article>
            <article>
              <span className="stepNumber">3</span>
              <p>
                L.C.M. = 2 × 2 × 3 × 2 × 3 = <strong>72</strong>.
              </p>
            </article>
          </div>
        </div>

        <div className="checkFormula">
          <span>For two positive integers:</span>
          <strong>H.C.F. × L.C.M. = product of the two numbers</strong>
          <span>12 × 72 = 24 × 36 = 864 ✓</span>
        </div>
      </section>

      <section className="lessonCard applicationsCard">
        <div className="lessonHeading">
          <span className="lessonNumber">5</span>
          <div>
            <p className="lessonLabel">APPLICATIONS</p>
            <h2>Decide whether the problem needs H.C.F. or L.C.M.</h2>
          </div>
        </div>

        <div className="applicationGrid">
          <article className="hcfApplication">
            <span className="applicationTag">USE H.C.F.</span>
            <h3>Largest equal groups or pieces</h3>
            <p>
              Two ribbons are 84 cm and 126 cm long. They are cut into equal
              pieces of the greatest possible length.
            </p>
            <div className="applicationWorking">
              <span>H.C.F. of 84 and 126 = 42</span>
              <strong>Each piece is 42 cm long.</strong>
            </div>
          </article>

          <article className="lcmApplication">
            <span className="applicationTag">USE L.C.M.</span>
            <h3>First time repeated events meet</h3>
            <p>
              One light flashes every 12 seconds and another every 18 seconds.
              They flash together now. When will they next flash together?
            </p>
            <div className="applicationWorking">
              <span>L.C.M. of 12 and 18 = 36</span>
              <strong>They next flash together after 36 seconds.</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>What are the H.C.F. and L.C.M. of 24 and 36?</h2>

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
              24 = 2³ × 3 and 36 = 2² × 3². The smaller powers give
              H.C.F. = 2² × 3 = 12; the larger powers give
              L.C.M. = 2³ × 3² = 72.
            </span>
          </div>
        )}
      </section>

      <section className="mistakesCard">
        <p className="mistakesLabel">COMMON MISTAKES</p>
        <h2>Keep the two methods separate</h2>
        <ul>
          <li>Choosing the largest factor instead of the largest common factor.</li>
          <li>Starting a list of multiples at zero when finding the positive L.C.M.</li>
          <li>Using larger prime powers for H.C.F. instead of smaller powers.</li>
          <li>Forgetting a prime factor that appears in only one number when finding L.C.M.</li>
          <li>Using H.C.F. for a “next time together” problem.</li>
        </ul>
      </section>

      <section className="summaryCard">
        <p className="summaryLabel">SECTION SUMMARY</p>
        <h2>Use the clues in the question</h2>
        <div className="summaryGrid">
          <article>
            <strong>H.C.F.</strong>
            <span>greatest shared factor</span>
          </article>
          <article>
            <strong>L.C.M.</strong>
            <span>smallest shared positive multiple</span>
          </article>
          <article>
            <strong>Prime factors</strong>
            <span>smaller powers for H.C.F.</span>
          </article>
          <article>
            <strong>Prime factors</strong>
            <span>larger powers for L.C.M.</span>
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
        .meaningLabel,
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

        .definitionGrid,
        .meaningGrid,
        .resultGrid,
        .applicationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .definitionGrid article {
          padding: 22px;
          border-radius: 19px;
        }

        .factorCard {
          border: 1px solid #a7f3d0;
          background: #ecfdf5;
        }

        .multipleCard {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
        }

        .definitionBadge,
        .applicationTag {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .definitionGrid h3 {
          min-height: 52px;
          margin: 14px 0;
          font-size: 19px;
          line-height: 1.4;
        }

        .numberSentence {
          margin-bottom: 12px;
          padding: 15px;
          border-radius: 14px;
          background: white;
          font-size: 24px;
          font-weight: 900;
          text-align: center;
        }

        .definitionGrid p {
          color: #475569;
          line-height: 1.5;
        }

        .definitionGrid article > strong,
        .definitionGrid article > span:last-child {
          display: block;
        }

        .definitionGrid article > span:last-child {
          margin-top: 5px;
          color: #475569;
          line-height: 1.5;
        }

        .relationshipNote {
          display: grid;
          gap: 5px;
          margin-top: 15px;
          padding: 17px 19px;
          border-radius: 15px;
          background: #f1f5f9;
          color: #475569;
          line-height: 1.5;
        }

        .relationshipNote strong { color: #172033; }

        .meaningGrid > article {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 22px;
          border: 1px solid #c7d2fe;
          border-radius: 19px;
          background: #fafaff;
        }

        .meaningSymbol {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background: #4f46e5;
          color: white;
          font-size: 22px;
          font-weight: 900;
        }

        .meaningLabel {
          margin: 2px 0 7px;
          color: #4f46e5;
        }

        .meaningGrid h3 {
          margin: 0 0 15px;
          font-size: 18px;
          line-height: 1.45;
        }

        .listExample {
          display: grid;
          gap: 7px;
          color: #64748b;
          line-height: 1.45;
        }

        .listExample strong {
          color: #047857;
          font-size: 17px;
        }

        .primeQuestion {
          padding: 18px;
          border-radius: 15px;
          background: #f5f3ff;
          color: #4c1d95;
          font-size: 19px;
          text-align: center;
        }

        .factorTrees {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 15px;
        }

        .factorTrees article {
          display: grid;
          gap: 7px;
          padding: 19px;
          border: 1px solid #dbeafe;
          border-radius: 17px;
          background: #f8fbff;
          text-align: center;
        }

        .factorTrees p {
          margin: 0;
          color: #1d4ed8;
          font-size: 27px;
          font-weight: 900;
        }

        .factorTrees span:last-child {
          font-size: 20px;
          font-weight: 900;
        }

        .powerTable {
          display: grid;
          grid-template-columns: repeat(5, minmax(90px, 1fr));
          margin-top: 15px;
          overflow-x: auto;
          border: 1px solid #dbeafe;
          border-radius: 16px;
        }

        .powerTable > div {
          padding: 13px 10px;
          border-right: 1px solid #dbeafe;
          border-bottom: 1px solid #dbeafe;
          text-align: center;
          font-weight: 800;
        }

        .powerHeader {
          background: #172033;
          color: white;
          font-size: 13px;
        }

        .hcfCell { background: #ecfdf5; color: #047857; }
        .lcmCell { background: #eff6ff; color: #1d4ed8; }

        .resultGrid {
          margin-top: 15px;
        }

        .resultGrid article {
          padding: 19px;
          border-radius: 17px;
        }

        .hcfResult { background: #ecfdf5; }
        .lcmResult { background: #eff6ff; }

        .resultGrid p {
          margin: 0 0 9px;
          color: #475569;
          line-height: 1.45;
        }

        .resultGrid strong { font-size: 19px; }

        .shortDivisionLayout {
          display: grid;
          grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1.2fr);
          gap: 20px;
        }

        .divisionTable {
          padding: 18px;
          border-radius: 18px;
          background: #f8fafc;
        }

        .divisionRow {
          display: grid;
          grid-template-columns: 48px repeat(2, 1fr);
          color: #172033;
          font-size: 22px;
          font-weight: 900;
          text-align: center;
        }

        .divisionRow span {
          padding: 11px;
          border-bottom: 2px solid #94a3b8;
        }

        .divisionRow .divider {
          border-right: 2px solid #4f46e5;
          color: #4f46e5;
        }

        .finalRow span { border-bottom: none; }

        .divisionExplanation {
          display: grid;
          gap: 11px;
        }

        .divisionExplanation article {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px;
          border-radius: 14px;
          background: #f1f5f9;
        }

        .stepNumber {
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #4f46e5;
          color: white;
          font-weight: 900;
        }

        .divisionExplanation p {
          margin: 0;
          color: #475569;
          line-height: 1.5;
        }

        .checkFormula {
          display: grid;
          gap: 6px;
          margin-top: 16px;
          padding: 17px 19px;
          border: 1px solid #fde68a;
          border-radius: 15px;
          background: #fffbeb;
          color: #854d0e;
          text-align: center;
        }

        .checkFormula strong { font-size: 18px; }

        .applicationGrid article {
          padding: 22px;
          border-radius: 19px;
        }

        .hcfApplication {
          border: 1px solid #a7f3d0;
          background: #ecfdf5;
        }

        .lcmApplication {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
        }

        .applicationGrid h3 {
          margin: 14px 0 8px;
          font-size: 21px;
        }

        .applicationGrid > article > p {
          min-height: 96px;
          margin: 0;
          color: #475569;
          line-height: 1.55;
        }

        .applicationWorking {
          display: grid;
          gap: 5px;
          margin-top: 14px;
          padding: 14px;
          border-radius: 13px;
          background: white;
          line-height: 1.45;
        }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(145deg, #eef2ff, #ffffff);
        }

        .quizOptions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 22px;
        }

        .quizOption {
          padding: 15px;
          border: 2px solid #cbd5e1;
          border-radius: 14px;
          background: white;
          color: #172033;
          font-size: 16px;
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

        @media (max-width: 800px) {
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

          .definitionGrid,
          .meaningGrid,
          .resultGrid,
          .applicationGrid,
          .factorTrees,
          .shortDivisionLayout {
            grid-template-columns: 1fr;
          }

          .definitionGrid h3,
          .applicationGrid > article > p { min-height: 0; }

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

          .meaningGrid > article { flex-direction: column; }

          .quizOptions,
          .summaryGrid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
