"use client";

import Link from "next/link";
import katex from "katex";

const chapter = "/maths/s3/chapter-5";
const faces = [1, 2, 3, 4, 5, 6];

function Fraction({ top, bottom }: { top: number; bottom: number }) {
  const formula = String.raw`\frac{${top}}{${bottom}}`;
  return <span dangerouslySetInnerHTML={{ __html: katex.renderToString(formula) }} />;
}

function CoinTree() {
  // A node lies halfway between its two children.
  function branch(path: string, x: number, y: number, spread: number): React.ReactNode {
    const leaf = path.length === 3;
    return <g key={path}>
      {!leaf && ["H", "T"].map((face, index) => {
        const nextY = y + (index === 0 ? -spread : spread);
        return <g key={face}>
          <line x1={x + 9} y1={y} x2={x + 67} y2={nextY} stroke="#78908b" />
          {branch(path + face, x + 82, nextY, spread / 2)}
        </g>;
      })}
      <text x={x} y={y} textAnchor="middle" dominantBaseline="middle"
        fill={leaf ? "#047857" : "#163447"}>{leaf ? path : path.slice(-1) || "•"}</text>
    </g>;
  }
  return <svg viewBox="0 0 300 210" style={{width:"100%",maxWidth:480}} role="img"
    aria-label="Three tosses. Each H or T branches to H and T. The eight final sequences are listed below.">
    {branch("", 12, 105, 52)}
  </svg>;
}

export default function ListingOutcomes() {
  return (
    <main className="page">
      <Link href={chapter} className="backButton">← Back to Chapter 5</Link>
      <header className="hero"><p className="eyebrow">SECTION 5.2</p>
        <h1>Methods of Listing Possible Outcomes</h1>
        <p className="intro">Build a complete sample space, then use it to find the probability of an event.</p>
      </header>
      <section className="noteCard"><span className="numberBadge">1</span><div>
        <h2>Using tree diagrams</h2><p>Draw one branch for each first choice. From the end of each branch, draw every possible next choice. Read one complete path for each outcome.</p>
      </div></section>
      <section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 1</p>
        <h2>Choose a badge and a ribbon</h2>
        <p>Choose a moon or star badge, then a red, gold or blue ribbon. Each choice is uniform and independent.</p>
        <div className="steps"><div><span>Step 1</span><p>Start with Moon. Its three endings are Moon–Red, Moon–Gold and Moon–Blue.</p></div>
        <div><span>Step 2</span><p>Repeat for Star. Its endings are Star–Red, Star–Gold and Star–Blue. Each of the six paths has the same chance.</p></div></div>
        <div className="answerBox">Only one path gives a star with a gold ribbon. Its probability is <Fraction top={1} bottom={6} />.</div>
      </section>
      <section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 2</p>
        <h2>Exactly two heads or at least one head?</h2><p>Toss a fair coin independently three times. Read the tree from left to right. H means heads and T means tails.</p>
        <CoinTree /><p>The first H branch gives HHH, HHT, HTH and HTT. The first T branch gives THH, THT, TTH and TTT.</p>
        <div className="steps"><div><span>Exactly two</span><p>HHT, HTH and THH each contain two heads. Order distinguishes these three paths.</p></div>
        <div><span>At least one</span><p>Include one, two or three heads. Only TTT fails, so seven of the eight paths qualify.</p></div></div>
        <div className="answerBox">Exactly two heads: <Fraction top={3} bottom={8} />. At least one head: <Fraction top={7} bottom={8} />.</div>
      </section>
      <section className="noteCard"><span className="numberBadge">2</span><div><h2>Using tables</h2>
        <p>Put first-stage outcomes down the side and second-stage outcomes across the top. Each cell represents one complete path. A table works especially well for two stages.</p></div></section>
      <section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 3</p>
        <h2>Two dice with a total of at least 10</h2><p>Roll a fair red die and a fair blue die independently. Each cell shows their sum. Bold entries meet the condition.</p>
        <table><caption>Red die down · Blue die across</caption><thead><tr><th scope="col">Red / Blue</th>{faces.map(n=><th key={n} scope="col">{n}</th>)}</tr></thead>
        <tbody>{faces.map(red=><tr key={red}><th scope="row">{red}</th>{faces.map(blue=><td key={blue}>{red+blue >= 10 ? <strong>{red+blue}</strong> : red+blue}</td>)}</tr>)}</tbody></table>
        <p>There are 36 equally likely cells. Rows 4, 5 and 6 contribute one, two and three favourable cells respectively.</p>
        <div className="answerBox">Probability = <Fraction top={6} bottom={36} /> = <Fraction top={1} bottom={6} />.</div>
      </section>
      <section className="noteCard"><span className="numberBadge">3</span><div><h2>With or without replacement</h2>
        <p>Returning a tile makes it available again. Keeping it removes one choice from the next draw. Label identical-looking tiles separately so that every physical tile is counted.</p></div></section>
      <section className="workedExample"><p className="exampleLabel">WORKED EXAMPLE 4</p>
        <h2>How does returning the first tile change the chance of a match?</h2>
        <p>Four tiles are marked A₁, A₂, B₁ and B₂. Select two at random. A match means that both letters are A or both are B.</p>
        <div className="steps"><div><span>With replacement</span><p>Each first tile has four possible partners, two with the same letter. There are 8 matching ordered pairs out of 16.</p></div>
        <div><span>Without replacement</span><p>Cross out the four diagonal cells where the same physical tile appears twice. Each first tile now has one matching partner among three choices. Four of the 12 ordered pairs match.</p></div></div>
        <div className="answerBox">With replacement: <Fraction top={1} bottom={2} />. Without replacement: <Fraction top={1} bottom={3} />.</div>
        <p>If two tiles are taken together, there are six unordered pairs. Only A₁A₂ and B₁B₂ match. Counting both numerator and denominator this way gives the same result.</p>
      </section>
      <section className="mistakesCard"><h2>Common mistakes</h2><p>A total of 2 appears in one dice cell. A total of 7 appears in six. Count equally likely cells when calculating probability.</p>
        <p>For simultaneous draws, count ordered pairs throughout or unordered pairs throughout. Mixing the two counts would give 2/12 in the tile example.</p></section>
      <section className="summaryCard"><h2>Section Summary</h2><p>Use a tree for successive choices and a table for two stages. Check which outcomes can repeat, then count favourable and total outcomes using the same convention.</p>
        <details><summary>Try it · Three independent fair tosses: at least two tails?</summary><p>HTT, THT, TTH and TTT give four of eight paths, so the probability is ½.</p></details>
        <Link className="finishButton" href={chapter}>Return to Chapter 5 →</Link></section>
      <style jsx>{`
        table { width:100%; border-collapse:collapse; text-align:center; } th, td { padding:5px 1px; border:1px solid #cbd5e1; } td strong { color:#065f46; background:#d1fae5; } caption { padding:10px; } .finishButton { display:inline-block; margin-top:16px; } .page {
          width: calc(100% - 40px);
          max-width: 1050px;
          margin: 40px auto 70px;
          color: #172033;
        }

        .backButton {
          border: none;
          background: transparent;
          padding: 0;
          margin-bottom: 26px;
          color: #047857;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .hero {
          margin-bottom: 30px;
        }

        .eyebrow,
        .formulaLabel,
        .exampleLabel {
          margin: 0 0 7px;
          color: #059669;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.09em;
        }

        h1 {
          margin: 0 0 10px;
          font-size: 44px;
        }

        h2 {
          margin: 0 0 12px;
          font-size: 27px;
        }

        p {
          line-height: 1.65;
        }

        .intro {
          max-width: 780px;
          margin: 0;
          color: #64748b;
          font-size: 20px;
        }

        .noteCard,
        .formulaSection,
        .workedExample,
        .whyCard,
        .mistakesCard,
        .summaryCard {
          margin-bottom: 22px;
          padding: 30px;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          background: white;
          box-shadow: 0 7px 20px rgba(15, 23, 42, 0.04);
        }

        .noteCard,
        .sectionHeading {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .numberBadge {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: #eef2ff;
          color: #4338ca;
          font-size: 22px;
          font-weight: 900;
        }

        .greenBadge {
          background: #ecfdf5;
          color: #047857;
        }

        .simpleFormula,
        .formulaBox {
          margin: 20px 0;
          padding: 22px;
          overflow-x: auto;
          border-radius: 17px;
          text-align: center;
          font-size: 20px;
        }

        .simpleFormula {
          background: #f8fafc;
        }

        .formulaBox.purple {
          border: 1px solid #c7d2fe;
          background: #eef2ff;
        }

        .formulaBox.green {
          border: 1px solid #a7f3d0;
          background: #ecfdf5;
        }

        .formulaBox.green .formulaLabel {
          color: #047857;
        }

        .symbolGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 20px;
        }

        .symbolGrid.twoColumns {
          grid-template-columns: repeat(2, 1fr);
        }

        .symbolGrid article {
          min-height: 120px;
          padding: 20px;
          box-sizing: border-box;
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          background: #f8fafc;
          text-align: center;
        }

        .symbolGrid strong {
          display: block;
          margin-bottom: 9px;
          color: #3730a3;
          font-size: 25px;
        }

        .symbolGrid p {
          margin: 0;
          color: #475569;
        }

        .important {
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid #fde68a;
          background: #fffbeb;
          color: #92400e;
          line-height: 1.6;
        }

        .workedExample {
          border-color: #c7d2fe;
          background: #fafaff;
        }

        .greenExample {
          border-color: #a7f3d0;
          background: #f7fffb;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .steps > div {
          min-height: 180px;
          padding: 20px;
          box-sizing: border-box;
          border-radius: 17px;
          border: 1px solid #e2e8f0;
          background: white;
          overflow-x: auto;
        }

        .steps span {
          color: #4f46e5;
          font-weight: 900;
        }

        .answerBox {
          margin-top: 16px;
          padding: 17px 20px;
          border-radius: 14px;
          background: #eef2ff;
          color: #312e81;
          font-size: 18px;
        }

        .greenAnswer {
          background: #ecfdf5;
          color: #166534;
        }

        .whyCard {
          border-color: #bae6fd;
          background: #f0f9ff;
        }

        .mistakesCard {
          border-color: #fecaca;
          background: #fffafa;
        }

        .mistakesCard ul {
          margin: 16px 0 0;
          padding-left: 25px;
          color: #475569;
          line-height: 1.8;
        }

        .summaryCard {
          border-color: #a7f3d0;
          background: #f0fdf4;
        }

        .summaryFormulas {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin: 22px 0;
        }

        .summaryFormulas > div {
          padding: 18px;
          overflow-x: auto;
          border: 1px solid #bbf7d0;
          border-radius: 16px;
          background: white;
        }

        .finishButton {
          width: 100%;
          padding: 17px 22px;
          border: none;
          border-radius: 15px;
          background: #059669;
          color: white;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        @media (max-width: 760px) {
          .page {
            width: calc(100% - 24px);
            margin-top: 25px;
          }

          h1 {
            font-size: 36px;
          }

          .noteCard,
          .formulaSection,
          .workedExample,
          .whyCard,
          .mistakesCard,
          .summaryCard {
            padding: 22px;
          }

          .symbolGrid,
          .symbolGrid.twoColumns,
          .steps,
          .summaryFormulas {
            grid-template-columns: 1fr;
          }

          .noteCard,
          .sectionHeading {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}