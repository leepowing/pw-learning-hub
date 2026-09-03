"use client";

import { useRouter } from "next/navigation";

const sections = [
  {
    number: 1,
    title: "Concept of Estimation",
    description:
      "Distinguish exact values from estimated values and understand why sensible estimates are useful.",
    route: "/maths/s1/chapter-11/concept-of-estimation",
    available: true,
  },
  {
    number: 2,
    title: "Estimation Strategies",
    description:
      "Estimate expressions by rounding off, rounding down or rounding up, then choose a suitable strategy for the situation.",
    route: "/maths/s1/chapter-11/estimation-strategies",
    available: true,
  },
];

const strategies = [
  {
    symbol: "≈",
    title: "Rounding off",
    text: "Replace each number with its nearest convenient value.",
    example: "3.21 + 1.67 + 2.84 ≈ 3.2 + 1.7 + 2.8",
  },
  {
    symbol: "↓",
    title: "Rounding down",
    text: "Replace each number with a convenient value below it.",
    example: "3.21 + 1.67 + 2.84 ≈ 3.2 + 1.6 + 2.8",
  },
  {
    symbol: "↑",
    title: "Rounding up",
    text: "Replace each number with a convenient value above it.",
    example: "3.21 + 1.67 + 2.84 ≈ 3.3 + 1.7 + 2.9",
  },
];

export default function S1ChapterElevenPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button
        type="button"
        className="backButton"
        onClick={() => router.push("/maths/s1")}
      >
        ← Back to S1 Mathematics
      </button>

      <p className="eyebrow">S1 MATHEMATICS</p>
      <h1>Chapter 11 · Numerical Estimation</h1>
      <p className="introduction">
        Use approximate values to make calculations quicker, check whether an
        answer is reasonable and make safe decisions in practical situations.
      </p>

      <section className="overviewCard">
        <div className="overviewIcon">≈</div>
        <div>
          <p className="sectionLabel">CHAPTER OVERVIEW</p>
          <h2>An estimate is close to the exact value</h2>
          <p>
            An exact value gives the precise amount. An estimated value is a
            sensible approximation that is easier to use in a calculation.
          </p>
        </div>
      </section>

      <section className="valueComparison">
        <article className="valueCard exactCard">
          <div className="valueHeading">
            <span>=</span>
            <div>
              <p>EXACT VALUE</p>
              <h2>The precise value</h2>
            </div>
          </div>
          <div className="numberDisplay">$18 + $24 + $49 = $91</div>
          <p>The calculation uses the original numbers without changing them.</p>
        </article>

        <article className="valueCard estimateCard">
          <div className="valueHeading">
            <span>≈</span>
            <div>
              <p>ESTIMATED VALUE</p>
              <h2>A nearby convenient value</h2>
            </div>
          </div>
          <div className="numberDisplay">$18 + $24 + $49 ≈ $20 + $20 + $50</div>
          <p>The easier numbers give a quick estimate of about $90.</p>
        </article>
      </section>

      <section className="keyIdeasStrip">
        <article>
          <span>≈</span>
          <strong>Not exactly equal</strong>
          <p>The symbol ≈ means “approximately equal to”.</p>
        </article>
        <article>
          <span>Nearest</span>
          <strong>Rounding off</strong>
          <p>Choose the nearest value at the required place.</p>
        </article>
        <article>
          <span>Lower</span>
          <strong>Rounding down</strong>
          <p>Use a value below the original number.</p>
        </article>
        <article>
          <span>Upper</span>
          <strong>Rounding up</strong>
          <p>Use a value above the original number.</p>
        </article>
      </section>

      <section className="sectionGrid">
        {sections.map((section) => (
          <article key={section.number} className="sectionCard">
            <div className="sectionTop">
              <span className="sectionNumber">{section.number}</span>
              <span
                className={
                  section.available
                    ? "sectionStatus availableStatus"
                    : "sectionStatus"
                }
              >
                {section.available ? "Available" : "Coming soon"}
              </span>
            </div>

            <p className="sectionLabel">SECTION {section.number}</p>
            <h2>{section.title}</h2>
            <p className="sectionDescription">{section.description}</p>

            {section.available ? (
              <button
                type="button"
                className="startSectionButton"
                onClick={() => router.push(section.route)}
              >
                Start Section {section.number} →
              </button>
            ) : (
              <button type="button" className="disabledButton" disabled>
                Coming soon
              </button>
            )}
          </article>
        ))}
      </section>

      <section className="strategiesCard">
        <div className="strategiesIntro">
          <p className="sectionLabel">ESTIMATION STRATEGIES PREVIEW</p>
          <h2>Choose the method that suits the situation</h2>
          <p>
            Rounding off gives a balanced estimate. Rounding down gives a
            smaller estimated value, while rounding up gives a larger one.
          </p>
        </div>

        <div className="strategiesGrid">
          {strategies.map((strategy) => (
            <article key={strategy.title}>
              <span>{strategy.symbol}</span>
              <h3>{strategy.title}</h3>
              <p>{strategy.text}</p>
              <small>{strategy.example}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="decisionCard">
        <div className="decisionIcon">?</div>
        <div>
          <p className="sectionLabel">REAL-LIFE DECISIONS</p>
          <h2>Larger or smaller estimated value?</h2>
          <p>
            The safest estimate depends on the question. When checking whether
            you have enough money, rounding prices up avoids underestimating the
            total cost.
          </p>
        </div>
      </section>

      <section className="featureCard flashcardCard">
        <div>
          <p className="featureLabel flashcardLabel">ESTIMATION PRACTICE</p>
          <h2>Chapter 11 Flashcards</h2>
          <p>
            Practise exact and estimated values, estimation symbols and the
            three estimation strategies.
          </p>
        </div>
        <button
          type="button"
          className="flashcardButton"
          onClick={() => router.push("/maths/flashcards?level=s1&chapter=11")}
        >
          Start Flashcards →
        </button>
      </section>

      <section className="featureCard checkpointCard">
        <div>
          <p className="featureLabel checkpointLabel">FINAL ACTIVITY</p>
          <h2>Chapter 11 Checkpoint</h2>
          <p>Complete Sections 1–2 before attempting the checkpoint.</p>
        </div>
        <button
          type="button"
          className="checkpointButton"
          onClick={() => router.push("/maths/s1/chapter-11/checkpoint")}
        >
          Start Checkpoint →
        </button>
      </section>

      <style jsx>{`
        .page {
          max-width: 1120px;
          width: calc(100% - 48px);
          margin: 46px auto 72px;
          color: #172033;
          box-sizing: border-box;
        }

        .backButton {
          margin-bottom: 26px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #0369a1;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .eyebrow,
        .sectionLabel,
        .valueHeading p,
        .featureLabel {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .eyebrow {
          margin: 0 0 7px;
          color: #0284c7;
        }

        h1 {
          margin: 0;
          font-size: clamp(38px, 5vw, 54px);
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .introduction {
          max-width: 850px;
          margin: 17px 0 30px;
          color: #5c667a;
          font-size: 19px;
          line-height: 1.6;
        }

        .overviewCard,
        .decisionCard {
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 27px;
          border: 1px solid #7dd3fc;
          border-radius: 23px;
          background: linear-gradient(135deg, #f0f9ff, #ecfeff);
          box-shadow: 0 8px 24px rgba(2, 132, 199, 0.08);
        }

        .overviewIcon,
        .decisionIcon {
          width: 92px;
          height: 76px;
          flex: 0 0 92px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          background: #bae6fd;
          color: #0369a1;
          font: 900 42px Georgia, "Times New Roman", serif;
        }

        .sectionLabel {
          margin: 0 0 6px;
          color: #0369a1;
        }

        .overviewCard h2,
        .strategiesCard h2,
        .decisionCard h2,
        .featureCard h2 {
          margin: 0 0 7px;
          font-size: 25px;
        }

        .overviewCard p:last-child,
        .decisionCard p:last-child,
        .strategiesIntro > p:last-child,
        .featureCard div > p:last-child {
          margin: 0;
          color: #64748b;
          line-height: 1.5;
        }

        .valueComparison {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 18px;
        }

        .valueCard {
          padding: 24px;
          border-radius: 22px;
        }

        .exactCard {
          border: 1px solid #bae6fd;
          background: #f0f9ff;
        }

        .estimateCard {
          border: 1px solid #c4b5fd;
          background: #faf5ff;
        }

        .valueHeading {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .valueHeading > span {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: white;
          color: #0369a1;
          font: 900 30px Georgia, "Times New Roman", serif;
        }

        .estimateCard .valueHeading > span,
        .estimateCard .valueHeading p {
          color: #7c3aed;
        }

        .valueHeading p {
          margin: 0 0 4px;
          color: #0369a1;
        }

        .valueHeading h2 {
          margin: 0;
          font-size: 22px;
        }

        .numberDisplay {
          margin: 20px 0 14px;
          padding: 20px 14px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.9);
          color: #0f766e;
          font: 800 clamp(18px, 2.3vw, 25px) Georgia, "Times New Roman", serif;
          text-align: center;
        }

        .valueCard > p {
          margin: 0;
          color: #64748b;
          line-height: 1.5;
        }

        .keyIdeasStrip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .keyIdeasStrip article {
          padding: 18px;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: white;
        }

        .keyIdeasStrip span {
          display: block;
          min-height: 42px;
          margin-bottom: 8px;
          color: #0284c7;
          font-size: 20px;
          font-weight: 900;
        }

        .keyIdeasStrip strong,
        .keyIdeasStrip p {
          display: block;
        }

        .keyIdeasStrip p {
          margin: 5px 0 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.4;
        }

        .sectionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .sectionCard {
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid #e2e8f0;
          border-radius: 21px;
          background: white;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.045);
        }

        .sectionTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .sectionNumber {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: #bae6fd;
          color: #0369a1;
          font-size: 21px;
          font-weight: 900;
        }

        .sectionStatus {
          padding: 7px 10px;
          border-radius: 999px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 12px;
          font-weight: 900;
        }

        .availableStatus {
          background: #d1fae5;
          color: #047857;
        }

        .sectionCard .sectionLabel {
          margin-top: 20px;
        }

        .sectionCard h2 {
          margin: 0;
          font-size: 22px;
        }

        .sectionDescription {
          flex: 1;
          margin: 12px 0 20px;
          color: #64748b;
          line-height: 1.55;
        }

        .startSectionButton,
        .disabledButton {
          width: 100%;
          padding: 13px;
          border: 0;
          border-radius: 13px;
          font-size: 15px;
          font-weight: 900;
        }

        .startSectionButton {
          background: #0284c7;
          color: white;
          cursor: pointer;
        }

        .disabledButton,
        .disabledFeatureButton {
          background: #e2e8f0;
          color: #94a3b8;
          cursor: not-allowed;
        }

        .strategiesCard {
          margin-top: 20px;
          padding: 26px;
          border: 1px solid #bae6fd;
          border-radius: 22px;
          background: linear-gradient(135deg, #f8fafc, #f0f9ff);
        }

        .strategiesIntro {
          max-width: 780px;
        }

        .strategiesGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 20px;
        }

        .strategiesGrid article {
          padding: 18px;
          border: 1px solid #e0f2fe;
          border-radius: 16px;
          background: white;
        }

        .strategiesGrid article > span {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border-radius: 12px;
          background: #e0f2fe;
          color: #0369a1;
          font-size: 24px;
          font-weight: 900;
        }

        .strategiesGrid h3 {
          margin: 14px 0 7px;
          font-size: 18px;
        }

        .strategiesGrid p {
          min-height: 66px;
          margin: 0;
          color: #64748b;
          line-height: 1.45;
        }

        .strategiesGrid small {
          display: block;
          margin-top: 13px;
          padding-top: 13px;
          border-top: 1px solid #e2e8f0;
          color: #475569;
          font-size: 12px;
          line-height: 1.5;
        }

        .decisionCard {
          margin-top: 20px;
          border-color: #fde68a;
          background: linear-gradient(135deg, #fffbeb, #fff7ed);
        }

        .decisionIcon {
          background: #fef3c7;
          color: #b45309;
        }

        .featureCard {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          margin-top: 18px;
          padding: 24px;
          border-radius: 20px;
        }

        .flashcardCard {
          border: 1px solid #c7d2fe;
          background: #eef2ff;
        }

        .checkpointCard {
          border: 1px solid #fde68a;
          background: #fffbeb;
        }

        .flashcardLabel {
          margin: 0 0 5px;
          color: #4f46e5;
        }

        .checkpointLabel {
          margin: 0 0 5px;
          color: #b45309;
        }

        .disabledFeatureButton {
          flex: 0 0 auto;
          padding: 12px 18px;
          border: 0;
          border-radius: 12px;
          font-weight: 900;
        }

        .checkpointButton {
          flex: 0 0 auto;
          padding: 13px 20px;
          border: 0;
          border-radius: 12px;
          background: #7c3aed;
          color: white;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 8px 18px rgba(124, 58, 237, 0.2);
        }

        .flashcardButton {
          flex: 0 0 auto;
          padding: 13px 20px;
          border: 0;
          border-radius: 12px;
          background: #4f46e5;
          color: white;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 8px 18px rgba(79, 70, 229, 0.2);
        }

        .checkpointButton:hover,
        .flashcardButton:hover {
          background: #6d28d9;
          transform: translateY(-1px);
        }

        @media (max-width: 820px) {
          .valueComparison,
          .sectionGrid,
          .strategiesGrid {
            grid-template-columns: 1fr;
          }

          .keyIdeasStrip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .strategiesGrid p {
            min-height: auto;
          }
        }

        @media (max-width: 560px) {
          .page {
            width: calc(100% - 28px);
            margin-top: 28px;
          }

          .overviewCard,
          .decisionCard,
          .featureCard {
            align-items: flex-start;
            flex-direction: column;
          }

          .overviewIcon,
          .decisionIcon {
            width: 64px;
            height: 58px;
            flex-basis: 58px;
          }

          .keyIdeasStrip {
            grid-template-columns: 1fr;
          }

          .disabledFeatureButton,
          .flashcardButton,
          .checkpointButton {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
