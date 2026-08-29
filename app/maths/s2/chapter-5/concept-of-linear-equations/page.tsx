"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const answerOptions = [
  { label: "(1, 2)", correct: false },
  { label: "(3, 1)", correct: false },
  { label: "(0, 4)", correct: true },
  { label: "(4, 2)", correct: false },
];

export default function ConceptOfLinearEquationsPage() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const selectedOption = answerOptions.find(
    (option) => option.label === selectedAnswer
  );

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s2/chapter-5")}
      >
        ← Back to Chapter 5
      </button>

      <p className="eyebrow">S2 · CHAPTER 5 · SECTION 1</p>

      <h1>Concept of Linear Equations in Two Unknowns</h1>

      <p className="introduction">
        Learn what a linear equation in two unknowns means, how ordered pairs
        can be solutions, and why its graph is a straight line.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <h2>Linear equations in two unknowns</h2>
            <p className="headingDescription">
              A linear equation contains two unknowns, each with highest power
              1.
            </p>
          </div>
        </div>

        <div className="definitionBox">
          <p className="mathDisplay">
            ax + by = c
          </p>

          <p>
            Here, <strong>x</strong> and <strong>y</strong> are the two
            unknowns. The constants <strong>a</strong> and <strong>b</strong>
            cannot both be zero.
          </p>
        </div>

        <div className="comparisonGrid">
          <article className="exampleBox correctExample">
            <p className="boxLabel">LINEAR</p>
            <p className="exampleFormula">2x + 3y = 12</p>
            <p>Both unknowns have power 1.</p>
          </article>

          <article className="exampleBox wrongExample">
            <p className="boxLabel">NOT LINEAR</p>
            <p className="exampleFormula">
              x<sup>2</sup> + y = 9
            </p>
            <p>The highest power of x is 2.</p>
          </article>

          <article className="exampleBox wrongExample">
            <p className="boxLabel">NOT LINEAR</p>
            <p className="exampleFormula">xy = 10</p>
            <p>The two unknowns are multiplied together.</p>
          </article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <h2>Solutions are ordered pairs</h2>
            <p className="headingDescription">
              A solution is written as (x, y). Substituting both values must
              make the equation true.
            </p>
          </div>
        </div>

        <div className="workedExample">
          <p className="workedLabel">CHECK WHETHER (3, 2) IS A SOLUTION</p>
          <p className="mathDisplay smallMath">2x + 3y = 12</p>

          <div className="calculationSteps">
            <p>
              Left-hand side = 2(3) + 3(2)
            </p>
            <p>= 6 + 6</p>
            <p>= 12</p>
            <p className="conclusion">
              L.H.S. = R.H.S., so <strong>(3, 2) is a solution.</strong>
            </p>
          </div>
        </div>

        <div className="importantNote">
          <strong>Important:</strong> The order matters. In (3, 2), x = 3
          and y = 2. It does not mean x = 2 and y = 3.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <h2>One equation has many solutions</h2>
            <p className="headingDescription">
              Different ordered pairs can satisfy the same linear equation.
            </p>
          </div>
        </div>

        <p className="mathDisplay smallMath">2x + y = 6</p>

        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>x</th>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>y = 6 − 2x</th>
                <td>6</td>
                <td>4</td>
                <td>2</td>
                <td>0</td>
              </tr>
              <tr>
                <th>Solution</th>
                <td>(0, 6)</td>
                <td>(1, 4)</td>
                <td>(2, 2)</td>
                <td>(3, 0)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="afterTable">
          Each listed ordered pair makes 2x + y = 6 true. There are many more
          solutions between and beyond these points.
        </p>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <h2>The graph is a straight line</h2>
            <p className="headingDescription">
              Every point on the line represents one solution of the equation.
            </p>
          </div>
        </div>

        <div className="graphPanel">
          <svg
            viewBox="0 0 600 370"
            role="img"
            aria-label="Graph of two x plus y equals six"
          >
            <rect x="0" y="0" width="600" height="370" rx="20" fill="#f8fafc" />

            {[90, 190, 290, 390, 490].map((x) => (
              <line
                key={`vertical-${x}`}
                x1={x}
                y1="35"
                x2={x}
                y2="320"
                stroke="#dbeafe"
                strokeWidth="2"
              />
            ))}

            {[60, 100, 140, 180, 220, 260, 300].map((y) => (
              <line
                key={`horizontal-${y}`}
                x1="55"
                y1={y}
                x2="535"
                y2={y}
                stroke="#dbeafe"
                strokeWidth="2"
              />
            ))}

            <line x1="55" y1="300" x2="545" y2="300" stroke="#334155" strokeWidth="3" />
            <line x1="90" y1="330" x2="90" y2="28" stroke="#334155" strokeWidth="3" />

            <polygon points="545,300 531,293 531,307" fill="#334155" />
            <polygon points="90,28 83,42 97,42" fill="#334155" />

            <line x1="90" y1="60" x2="390" y2="300" stroke="#2563eb" strokeWidth="6" />

            {[
              [90, 60],
              [190, 140],
              [290, 220],
              [390, 300],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="8" fill="#dc2626" />
            ))}

            <text x="440" y="286" fill="#0f172a" fontSize="19" fontWeight="700">x</text>
            <text x="106" y="45" fill="#0f172a" fontSize="19" fontWeight="700">y</text>

            <text x="78" y="326" fill="#475569" fontSize="16">0</text>
            <text x="184" y="326" fill="#475569" fontSize="16">1</text>
            <text x="284" y="326" fill="#475569" fontSize="16">2</text>
            <text x="384" y="326" fill="#475569" fontSize="16">3</text>

            <text x="62" y="226" fill="#475569" fontSize="16">2</text>
            <text x="62" y="146" fill="#475569" fontSize="16">4</text>
            <text x="62" y="66" fill="#475569" fontSize="16">6</text>

            <text x="315" y="110" fill="#1d4ed8" fontSize="21" fontWeight="800">
              2x + y = 6
            </text>
          </svg>
        </div>

        <div className="graphExplanation">
          <p>
            <strong>(0, 6), (1, 4), (2, 2)</strong> and
            <strong> (3, 0)</strong> lie on the same straight line.
          </p>
          <p>
            A point not on this line is not a solution of 2x + y = 6.
          </p>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>Which ordered pair is a solution?</h2>
        <p className="quizFormula">2x + 3y = 12</p>

        <div className="answerGrid">
          {answerOptions.map((option) => {
            const isSelected = selectedAnswer === option.label;
            const className = isSelected
              ? option.correct
                ? "answerButton selectedCorrect"
                : "answerButton selectedWrong"
              : "answerButton";

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
                : "feedback wrongFeedback"
            }
          >
            {selectedOption.correct ? (
              <>
                <strong>Correct.</strong> 2(0) + 3(4) = 12, so (0, 4) is a
                solution.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> Substitute the x-value first and
                the y-value second, then check whether the result is 12.
              </>
            )}
          </div>
        )}

        {selectedAnswer && (
          <button
            type="button"
            className="tryAgainButton"
            onClick={() => setSelectedAnswer(null)}
          >
            Try again
          </button>
        )}
      </section>

      <section className="mistakesCard">
        <h2>Common mistakes</h2>
        <ul>
          <li>Reversing the x- and y-values in an ordered pair.</li>
          <li>Checking only one side of the ordered pair.</li>
          <li>Calling equations containing x², y² or xy linear.</li>
          <li>Thinking that one linear equation has only one solution.</li>
        </ul>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() =>
            router.push("/maths/s2/chapter-5")
          }
        >
          ← Return to Chapter 5
        </button>
      </div>

      <style jsx>{`
        .page {
          max-width: 1080px;
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

        .eyebrow {
          margin: 0 0 7px;
          color: #2563eb;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.11em;
        }

        h1 {
          margin: 0 0 12px;
          font-size: clamp(36px, 5vw, 50px);
          line-height: 1.12;
        }

        .introduction {
          max-width: 920px;
          margin: 0 0 34px;
          color: #64748b;
          font-size: 19px;
          line-height: 1.65;
        }

        .lessonCard,
        .quizCard,
        .mistakesCard {
          margin-bottom: 22px;
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 7px 20px rgba(15, 23, 42, 0.045);
          box-sizing: border-box;
        }

        .lessonHeading {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 24px;
        }

        .lessonNumber {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #dbeafe;
          color: #1d4ed8;
          font-size: 23px;
          font-weight: 900;
          flex-shrink: 0;
        }

        h2 {
          margin: 0 0 7px;
          font-size: 28px;
          line-height: 1.3;
        }

        .headingDescription {
          margin: 0;
          color: #64748b;
          font-size: 17px;
          line-height: 1.55;
        }

        .definitionBox,
        .workedExample,
        .importantNote,
        .graphExplanation {
          border-radius: 18px;
        }

        .definitionBox {
          padding: 25px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          text-align: center;
        }

        .definitionBox p:last-child {
          margin: 12px 0 0;
          color: #334155;
          font-size: 17px;
          line-height: 1.55;
        }

        .mathDisplay {
          margin: 0;
          color: #1e3a8a;
          font-family: "Times New Roman", serif;
          font-size: 42px;
          font-weight: 700;
        }

        .smallMath {
          margin: 12px 0 22px;
          font-size: 34px;
          text-align: center;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .exampleBox {
          padding: 20px;
          border-radius: 17px;
        }

        .correctExample {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }

        .wrongExample {
          background: #fff7ed;
          border: 1px solid #fed7aa;
        }

        .boxLabel,
        .workedLabel,
        .quizLabel {
          margin: 0 0 9px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .correctExample .boxLabel {
          color: #15803d;
        }

        .wrongExample .boxLabel {
          color: #c2410c;
        }

        .exampleFormula {
          margin: 0 0 8px;
          color: #0f172a;
          font-family: "Times New Roman", serif;
          font-size: 28px;
          font-weight: 700;
        }

        .exampleBox p:last-child {
          margin: 0;
          color: #475569;
          line-height: 1.5;
        }

        .workedExample {
          padding: 25px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
        }

        .workedLabel {
          color: #4f46e5;
        }

        .calculationSteps {
          max-width: 570px;
          margin: 0 auto;
          color: #334155;
          font-size: 19px;
          line-height: 1.5;
          text-align: center;
        }

        .calculationSteps p {
          margin: 4px 0;
        }

        .calculationSteps .conclusion {
          margin-top: 15px;
          color: #166534;
        }

        .importantNote {
          margin-top: 16px;
          padding: 18px 20px;
          background: #fffbeb;
          border: 1px solid #fde68a;
          color: #854d0e;
          font-size: 17px;
          line-height: 1.55;
        }

        .tableWrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          min-width: 650px;
          border-collapse: collapse;
          overflow: hidden;
          border-radius: 16px;
        }

        th,
        td {
          padding: 15px;
          border: 1px solid #cbd5e1;
          text-align: center;
          font-size: 17px;
        }

        th {
          background: #eff6ff;
          color: #1e3a8a;
          font-weight: 900;
        }

        td {
          background: #ffffff;
        }

        .afterTable {
          margin: 18px 0 0;
          color: #475569;
          font-size: 17px;
          line-height: 1.6;
        }

        .graphPanel {
          max-width: 760px;
          margin: 0 auto;
          border: 1px solid #bfdbfe;
          border-radius: 20px;
          overflow: hidden;
          background: #f8fafc;
        }

        .graphPanel svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .graphExplanation {
          margin-top: 17px;
          padding: 18px 20px;
          background: #eff6ff;
          color: #334155;
          font-size: 17px;
          line-height: 1.55;
          text-align: center;
        }

        .graphExplanation p {
          margin: 4px 0;
        }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #faf5ff);
        }

        .quizLabel {
          color: #4f46e5;
        }

        .quizFormula {
          margin: 18px 0 24px;
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 34px;
          font-weight: 700;
          text-align: center;
        }

        .answerGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
        }

        .answerButton {
          padding: 15px 18px;
          border: 2px solid #cbd5e1;
          border-radius: 14px;
          background: #ffffff;
          color: #0f172a;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
        }

        .selectedCorrect {
          border-color: #16a34a;
          background: #dcfce7;
          color: #166534;
        }

        .selectedWrong {
          border-color: #dc2626;
          background: #fee2e2;
          color: #991b1b;
        }

        .feedback {
          margin-top: 16px;
          padding: 17px 19px;
          border-radius: 14px;
          font-size: 17px;
          line-height: 1.5;
        }

        .correctFeedback {
          background: #dcfce7;
          color: #166534;
        }

        .wrongFeedback {
          background: #fee2e2;
          color: #991b1b;
        }

        .tryAgainButton {
          margin-top: 15px;
          padding: 11px 18px;
          border: 1px solid #6366f1;
          border-radius: 12px;
          background: #ffffff;
          color: #4338ca;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
        }

        .mistakesCard {
          border-color: #fed7aa;
          background: #fff7ed;
        }

        .mistakesCard ul {
          margin: 15px 0 0;
          padding-left: 24px;
          color: #7c2d12;
          font-size: 17px;
          line-height: 1.8;
        }

.bottomNavigation {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.returnButton {
  min-width: 280px;
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

        @media (max-width: 640px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 28px;
          }

          .lessonCard,
          .quizCard,
          .mistakesCard {
            padding: 22px;
          }

          .lessonHeading {
            align-items: center;
          }

          h2 {
            font-size: 24px;
          }

          .mathDisplay {
            font-size: 34px;
          }
        }
      `}</style>
    </main>
  );
}
