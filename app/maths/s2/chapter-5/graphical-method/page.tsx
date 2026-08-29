"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const answerOptions = [
  { label: "(2, 5)", correct: false },
  { label: "(3, 5)", correct: true },
  { label: "(3, 4)", correct: false },
  { label: "(5, 3)", correct: false },
];

const xGridLines = [85, 165, 245, 325, 405, 485, 565];
const yGridLines = [30, 85, 140, 195, 250, 305, 360];

export default function GraphicalMethodPage() {
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

      <p className="eyebrow">S2 · CHAPTER 5 · SECTION 2</p>

      <h1>Solving Simultaneous Equations — Graphical Method</h1>

      <p className="introduction">
        Draw the two straight-line graphs on the same coordinate plane. Their
        point of intersection gives the solution of both equations.
      </p>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">1</span>
          <div>
            <h2>What are simultaneous equations?</h2>
            <p className="headingDescription">
              They are two equations that must be true for the same values of
              x and y.
            </p>
          </div>
        </div>

        <div className="equationPair" aria-label="A pair of simultaneous equations">
          <span className="brace">&#123;</span>
          <span>
            <strong>y = x + 1</strong>
            <strong>x + y = 5</strong>
          </span>
        </div>

        <div className="importantNote">
          A solution must satisfy <strong>both equations</strong>. On a graph,
          it is the ordered pair where the two lines meet.
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">2</span>
          <div>
            <h2>Prepare both equations for graphing</h2>
            <p className="headingDescription">
              Write each equation in the form y = mx + c, then make a table of
              values.
            </p>
          </div>
        </div>

        <div className="workingGrid">
          <article className="workingBox blueBox">
            <p className="boxLabel">FIRST EQUATION</p>
            <p className="mathLine">y = x + 1</p>
            <div className="miniTableWrapper">
              <table>
                <thead>
                  <tr>
                    <th>x</th>
                    <th>0</th>
                    <th>2</th>
                    <th>4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>y</th>
                    <td>1</td>
                    <td>3</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="workingBox orangeBox">
            <p className="boxLabel">SECOND EQUATION</p>
            <p className="mathLine">x + y = 5</p>
            <p className="rearrangeLine">y = 5 − x</p>
            <div className="miniTableWrapper">
              <table>
                <thead>
                  <tr>
                    <th>x</th>
                    <th>0</th>
                    <th>2</th>
                    <th>5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>y</th>
                    <td>5</td>
                    <td>3</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">3</span>
          <div>
            <h2>Plot the lines and read the intersection</h2>
            <p className="headingDescription">
              Plot at least two accurate points for each equation and join
              each set with a straight line.
            </p>
          </div>
        </div>

        <div className="graphPanel">
          <svg
            viewBox="0 0 650 430"
            role="img"
            aria-label="Graphs of y equals x plus one and x plus y equals five intersecting at two comma three"
          >
            <rect x="0" y="0" width="650" height="430" rx="20" fill="#f8fafc" />

            {xGridLines.map((x) => (
              <line
                key={`vertical-${x}`}
                x1={x}
                y1="30"
                x2={x}
                y2="360"
                stroke="#dbeafe"
                strokeWidth="2"
              />
            ))}

            {yGridLines.map((y) => (
              <line
                key={`horizontal-${y}`}
                x1="85"
                y1={y}
                x2="565"
                y2={y}
                stroke="#dbeafe"
                strokeWidth="2"
              />
            ))}

            <line x1="65" y1="360" x2="590" y2="360" stroke="#334155" strokeWidth="3" />
            <line x1="85" y1="385" x2="85" y2="15" stroke="#334155" strokeWidth="3" />
            <polygon points="590,360 576,353 576,367" fill="#334155" />
            <polygon points="85,15 78,29 92,29" fill="#334155" />

            <line x1="85" y1="305" x2="485" y2="30" stroke="#2563eb" strokeWidth="6" />
            <line x1="85" y1="85" x2="485" y2="360" stroke="#ea580c" strokeWidth="6" />

            <circle cx="245" cy="195" r="11" fill="#16a34a" stroke="#ffffff" strokeWidth="4" />
            <line x1="245" y1="195" x2="245" y2="360" stroke="#16a34a" strokeWidth="2" strokeDasharray="8 7" />
            <line x1="85" y1="195" x2="245" y2="195" stroke="#16a34a" strokeWidth="2" strokeDasharray="8 7" />

            {[0, 1, 2, 3, 4, 5, 6].map((number, index) => (
              <text
                key={`x-label-${number}`}
                x={81 + index * 80}
                y="387"
                fill="#475569"
                fontSize="16"
              >
                {number}
              </text>
            ))}

            {[1, 2, 3, 4, 5, 6].map((number) => (
              <text
                key={`y-label-${number}`}
                x="61"
                y={365 - number * 55}
                fill="#475569"
                fontSize="16"
              >
                {number}
              </text>
            ))}

            <text x="600" y="354" fill="#0f172a" fontSize="19" fontWeight="700">x</text>
            <text x="100" y="25" fill="#0f172a" fontSize="19" fontWeight="700">y</text>
            <text x="390" y="70" fill="#1d4ed8" fontSize="20" fontWeight="800">y = x + 1</text>
            <text x="390" y="310" fill="#c2410c" fontSize="20" fontWeight="800">x + y = 5</text>
            <text x="260" y="186" fill="#166534" fontSize="20" fontWeight="900">(2, 3)</text>
          </svg>
        </div>

        <div className="solutionBox">
          <p>The two lines intersect at <strong>(2, 3)</strong>.</p>
          <p className="solutionStatement">Therefore, x = 2 and y = 3.</p>
          <p>
            Check: 3 = 2 + 1 and 2 + 3 = 5, so the point satisfies both
            equations.
          </p>
        </div>
      </section>

      <section className="lessonCard">
        <div className="lessonHeading">
          <span className="lessonNumber">4</span>
          <div>
            <h2>Three possible graphical results</h2>
            <p className="headingDescription">
              The positions of the two lines show how many solutions the
              simultaneous equations have.
            </p>
          </div>
        </div>

        <div className="resultGrid">
          <article className="resultBox oneSolution">
            <div className="lineIcon intersectingIcon" aria-hidden="true">
              <span />
              <span />
            </div>
            <h3>One solution</h3>
            <p>Different gradients make the lines intersect once.</p>
          </article>

          <article className="resultBox noSolution">
            <div className="lineIcon parallelIcon" aria-hidden="true">
              <span />
              <span />
            </div>
            <h3>No solution</h3>
            <p>Parallel lines have the same gradient but never meet.</p>
          </article>

          <article className="resultBox manySolutions">
            <div className="lineIcon sameLineIcon" aria-hidden="true">
              <span />
              <span />
            </div>
            <h3>Infinitely many solutions</h3>
            <p>Equivalent equations produce exactly the same line.</p>
          </article>
        </div>
      </section>

      <section className="quizCard">
        <p className="quizLabel">CHECK YOUR UNDERSTANDING</p>
        <h2>What is the point of intersection?</h2>

        <div className="quizEquations">
          <span>y = 2x − 1</span>
          <span>x + y = 8</span>
        </div>

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
                <strong>Correct.</strong> When x = 3 and y = 5, both
                equations are true: 5 = 2(3) − 1 and 3 + 5 = 8.
              </>
            ) : (
              <>
                <strong>Not quite.</strong> The intersection must satisfy both
                equations. Substitute each ordered pair to check it.
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
          <li>Using different scales for the two lines on the same axis.</li>
          <li>Plotting a point as (y, x) instead of (x, y).</li>
          <li>Drawing a line through only one plotted point.</li>
          <li>Reading the intersection inaccurately from the graph.</li>
          <li>Forgetting to write both x and y in the final answer.</li>
        </ul>
      </section>

      <div className="bottomNavigation">
        <button
          type="button"
          className="returnButton"
          onClick={() => router.push("/maths/s2/chapter-5")}
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

        .equationPair {
          max-width: 440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 22px;
          border: 1px solid #bfdbfe;
          border-radius: 18px;
          background: #eff6ff;
          color: #1e3a8a;
          font-family: "Times New Roman", serif;
        }

        .equationPair .brace {
          font-size: 76px;
          line-height: 0.9;
        }

        .equationPair span:last-child {
          display: grid;
          gap: 8px;
          font-size: 31px;
        }

        .importantNote,
        .solutionBox {
          margin-top: 17px;
          padding: 18px 20px;
          border-radius: 16px;
          font-size: 17px;
          line-height: 1.55;
          text-align: center;
        }

        .importantNote {
          border: 1px solid #fde68a;
          background: #fffbeb;
          color: #854d0e;
        }

        .workingGrid,
        .resultGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }

        .workingBox {
          padding: 22px;
          border-radius: 18px;
        }

        .blueBox {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
        }

        .orangeBox {
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .boxLabel,
        .quizLabel {
          margin: 0 0 9px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .blueBox .boxLabel {
          color: #1d4ed8;
        }

        .orangeBox .boxLabel {
          color: #c2410c;
        }

        .mathLine,
        .rearrangeLine {
          margin: 5px 0 16px;
          font-family: "Times New Roman", serif;
          font-size: 30px;
          font-weight: 700;
          text-align: center;
        }

        .rearrangeLine {
          margin-top: -8px;
          color: #9a3412;
          font-size: 23px;
        }

        .miniTableWrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          min-width: 330px;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 12px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          text-align: center;
          font-size: 17px;
        }

        th {
          background: #f8fafc;
          font-weight: 900;
        }

        .graphPanel {
          max-width: 800px;
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

        .solutionBox {
          border: 1px solid #bbf7d0;
          background: #f0fdf4;
          color: #166534;
        }

        .solutionBox p {
          margin: 4px 0;
        }

        .solutionStatement {
          font-size: 22px;
          font-weight: 900;
        }

        .resultBox {
          padding: 21px;
          border-radius: 18px;
          text-align: center;
        }

        .oneSolution {
          border: 1px solid #bbf7d0;
          background: #f0fdf4;
        }

        .noSolution {
          border: 1px solid #fed7aa;
          background: #fff7ed;
        }

        .manySolutions {
          border: 1px solid #c7d2fe;
          background: #eef2ff;
        }

        .resultBox h3 {
          margin: 10px 0 7px;
          font-size: 20px;
        }

        .resultBox p {
          margin: 0;
          color: #475569;
          line-height: 1.5;
        }

        .lineIcon {
          position: relative;
          width: 90px;
          height: 58px;
          margin: 0 auto;
        }

        .lineIcon span {
          position: absolute;
          left: 8px;
          width: 74px;
          height: 4px;
          border-radius: 4px;
        }

        .intersectingIcon span:first-child {
          top: 27px;
          background: #2563eb;
          transform: rotate(28deg);
        }

        .intersectingIcon span:last-child {
          top: 27px;
          background: #ea580c;
          transform: rotate(-28deg);
        }

        .parallelIcon span:first-child {
          top: 17px;
          background: #2563eb;
          transform: rotate(-18deg);
        }

        .parallelIcon span:last-child {
          top: 39px;
          background: #ea580c;
          transform: rotate(-18deg);
        }

        .sameLineIcon span:first-child {
          top: 27px;
          background: #2563eb;
          transform: rotate(-22deg);
        }

        .sameLineIcon span:last-child {
          top: 27px;
          background: #7c3aed;
          transform: rotate(-22deg);
          opacity: 0.55;
        }

        .quizCard {
          border-color: #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #faf5ff);
        }

        .quizLabel {
          color: #4f46e5;
        }

        .quizEquations {
          display: grid;
          gap: 7px;
          margin: 18px 0 24px;
          color: #312e81;
          font-family: "Times New Roman", serif;
          font-size: 30px;
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

          .equationPair .brace {
            font-size: 60px;
          }

          .equationPair span:last-child {
            font-size: 25px;
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
