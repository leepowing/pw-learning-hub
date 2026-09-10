"use client";

import { useRouter } from "next/navigation";

const vertexPairs = [
  ["A", "X", "∠A = ∠X"],
  ["B", "Y", "∠B = ∠Y"],
  ["C", "Z", "∠C = ∠Z"],
] as const;

export default function ConceptOfSimilarTrianglesPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button className="backButton" onClick={() => router.push("/maths/s1/chapter-10")}>
        ← Back to Chapter 10
      </button>

      <header className="hero">
        <p className="eyebrow">S1 · CHAPTER 10 · SECTION 3</p>
        <h1>Concept of Similar Triangles</h1>
        <p className="introduction">
          Similar triangles have the same shape, but their sizes may be different.
          Their corresponding angles are equal and their corresponding sides are proportional.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading number="1" label="MEANING OF SIMILAR" title="Similar triangles have the same shape" />
        <div className="twoColumn">
          <div className="diagramPanel"><SimilarPairDiagram /></div>
          <div className="factPanel">
            <p className="panelLabel">SIMILAR TRIANGLES</p>
            <div className="displayFormula">△ABC ∼ △XYZ</div>
            <p>The symbol <strong>∼</strong> means “is similar to”.</p>
            <ul>
              <li>Their corresponding angles are equal.</li>
              <li>Their corresponding sides are proportional.</li>
            </ul>
            <p className="reference">[Reference: similar triangles]</p>
          </div>
        </div>
        <div className="memoryStrip">
          <strong>Memory rule:</strong> congruent triangles have the same shape and size;
          similar triangles need only have the same shape.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="2" label="CORRESPONDING VERTICES" title="The order of the letters fixes every matching pair" />
        <div className="statementBox"><span>△</span><strong>A B C</strong><span>∼</span><span>△</span><strong>X Y Z</strong></div>
        <div className="mappingGrid">
          {vertexPairs.map(([left, right, angle]) => (
            <article className="mappingCard" key={left}>
              <div className="vertexMatch"><span>{left}</span><b>↔</b><span>{right}</span></div>
              <p>{angle}</p>
            </article>
          ))}
        </div>
        <div className="sidePairs">
          <span>AB ↔ XY</span><span>BC ↔ YZ</span><span>CA ↔ ZX</span>
        </div>
        <p className="reference centred">[Reference: corr. ∠s equal]</p>
      </section>

      <section className="lessonCard">
        <LessonHeading number="3" label="SCALE FACTOR" title="Every corresponding side changes by the same factor" />
        <div className="scaleLayout">
          <div className="diagramPanel"><ScaleFactorDiagram /></div>
          <div className="scalePanel">
            <p className="panelLabel">FROM △ABC TO △XYZ</p>
            <div className="displayFormula">scale factor = 2</div>
            <div className="scaleRows">
              <p><span>3 × 2</span><strong>= 6</strong></p>
              <p><span>4 × 2</span><strong>= 8</strong></p>
              <p><span>5 × 2</span><strong>= 10</strong></p>
            </div>
            <p>Angles do not change when a triangle is enlarged or reduced.</p>
          </div>
        </div>
        <div className="tipStrip"><strong>Direction matters:</strong> the reverse scale factor, from △XYZ to △ABC, is 1/2.</div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="4" label="PROPORTIONAL SIDES" title="Write all side ratios in the same direction" />
        <div className="ratioPanel">
          <div className="ratioFormula"><span>AB</span><i>XY</i></div>
          <b>=</b>
          <div className="ratioFormula"><span>BC</span><i>YZ</i></div>
          <b>=</b>
          <div className="ratioFormula"><span>CA</span><i>ZX</i></div>
        </div>
        <div className="directionGrid">
          <article><strong>Correct</strong><p>small / large = small / large = small / large</p></article>
          <article><strong>Also correct</strong><p>large / small = large / small = large / small</p></article>
          <article className="wrong"><strong>Incorrect</strong><p>Do not reverse only one of the ratios.</p></article>
        </div>
        <p className="reference centred">[Reference: corr. sides proportional]</p>
      </section>

      <section className="lessonCard">
        <LessonHeading number="5" label="WORKED EXAMPLE" title="Use equal angles and proportional sides" />
        <div className="workedGrid">
          <div className="workedDiagram">
            <p className="givenLine">In the figure, △ABC ∼ △XYZ.</p>
            <WorkedExampleDiagram />
          </div>
          <div className="solutionPanel">
            <p className="panelLabel">SOLUTION</p>
            <div className="solutionStep">
              <span>1</span><div><p>A corresponds to X.</p><strong>m = 40°</strong><small>[Reference: corr. ∠s equal]</small></div>
            </div>
            <div className="solutionStep">
              <span>2</span><div><p>Use corresponding sides in the same direction.</p><div className="calculation">3/n = 6/4</div><div className="calculation">12 = 6n</div><strong>n = 2</strong><small>[Reference: corr. sides proportional]</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="6" label="CHECK BEFORE YOU CALCULATE" title="Keep the vertex order and ratio direction consistent" />
        <div className="checkGrid">
          <article><b>1</b><strong>Match vertices</strong><p>Read the similarity statement in order.</p></article>
          <article><b>2</b><strong>Match sides</strong><p>Use endpoints from corresponding vertices.</p></article>
          <article><b>3</b><strong>Choose direction</strong><p>Use the same numerator triangle each time.</p></article>
          <article><b>4</b><strong>Check the scale</strong><p>A larger triangle must have longer corresponding sides.</p></article>
        </div>
        <div className="warningBox"><strong>Common mistake:</strong> equal angles do not mean equal side lengths. In similar triangles, corresponding side lengths have equal ratios.</div>
      </section>

      <section className="summaryCard">
        <p className="eyebrow">SECTION SUMMARY</p>
        <h2>Four facts to remember</h2>
        <div className="summaryGrid">
          <div><span>1</span><p>Same shape; size may differ</p></div>
          <div><span>2</span><p>The symbol is ∼</p></div>
          <div><span>3</span><p>Corresponding angles are equal</p></div>
          <div><span>4</span><p>Corresponding sides are proportional</p></div>
        </div>
      </section>

      <button className="finishButton" onClick={() => router.push("/maths/s1/chapter-10")}>
        Finish Section 3 →
      </button>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f4f7fb; color: #10223f; }
        button { font: inherit; }
        .page { min-height: 100vh; padding: 34px 5vw 70px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .page > * { width: min(1180px, 100%); margin-left: auto; margin-right: auto; }
        .backButton { display: block; border: 0; background: transparent; color: #0f766e; font-weight: 800; cursor: pointer; padding: 8px 0; margin-bottom: 18px; }
        .backButton:hover { color: #7c3aed; }
        .hero { background: linear-gradient(135deg, #ede9fe 0%, #faf5ff 52%, #ccfbf1 100%); border: 1px solid #c4b5fd; border-radius: 28px; padding: 38px 42px; margin-bottom: 24px; }
        .eyebrow, .panelLabel { margin: 0 0 8px; color: #7c3aed; font-size: 14px; font-weight: 900; letter-spacing: .12em; }
        h1 { margin: 0; font-size: clamp(35px, 5vw, 58px); line-height: 1.04; letter-spacing: -.035em; }
        .introduction { max-width: 900px; margin: 18px 0 0; color: #49627f; font-size: 20px; line-height: 1.62; }
        .lessonCard { background: white; border: 1px solid #dce7f2; border-radius: 25px; padding: 30px; margin-bottom: 22px; box-shadow: 0 12px 32px rgba(16,34,63,.055); }
        .lessonHeading { display: grid; grid-template-columns: 54px 1fr; gap: 16px; align-items: center; margin-bottom: 24px; }
        .lessonNumber { width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; background: #ede9fe; color: #6d28d9; font-size: 24px; font-weight: 900; }
        .lessonLabel { margin: 0 0 4px; color: #0f766e; font-size: 13px; font-weight: 900; letter-spacing: .11em; }
        .lessonHeading h2 { margin: 0; font-size: clamp(24px, 3.1vw, 34px); line-height: 1.15; }
        .twoColumn, .scaleLayout, .workedGrid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 20px; }
        .diagramPanel, .workedDiagram { min-height: 310px; border-radius: 20px; background: #f8fafc; border: 1px solid #e5edf5; padding: 16px; display: grid; place-items: center; }
        .similarSvg { display: block; width: 100%; height: auto; max-height: 315px; }
        .factPanel, .scalePanel, .solutionPanel { border-radius: 20px; padding: 27px; background: #f5f3ff; border: 1px solid #ddd6fe; }
        .factPanel, .scalePanel { display: flex; flex-direction: column; justify-content: center; }
        .displayFormula { color: #6d28d9; font-family: Georgia, "Times New Roman", serif; font-size: clamp(29px, 4vw, 44px); font-weight: 700; margin: 5px 0 15px; }
        .factPanel p, .factPanel li, .scalePanel p { color: #405a76; font-size: 17px; line-height: 1.55; }
        .factPanel ul { padding-left: 22px; margin: 4px 0 12px; }
        .reference { margin-top: 12px !important; color: #0f766e !important; font-weight: 800; font-size: 14px !important; }
        .centred { text-align: center; }
        .memoryStrip, .tipStrip, .warningBox { margin-top: 20px; border-radius: 15px; padding: 17px 20px; color: #334e68; line-height: 1.55; }
        .memoryStrip, .tipStrip { background: #f5f3ff; border-left: 5px solid #8b5cf6; }
        .warningBox { background: #fff7ed; border-left: 5px solid #f59e0b; }
        .statementBox { display: flex; justify-content: center; align-items: center; gap: 13px; padding: 21px; border-radius: 18px; background: #f8fafc; color: #6d28d9; font-family: Georgia, serif; font-size: clamp(28px, 5vw, 46px); }
        .statementBox strong:first-of-type { letter-spacing: .22em; color: #0f766e; }
        .statementBox strong:last-of-type { letter-spacing: .22em; color: #7c3aed; }
        .mappingGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 18px; }
        .mappingCard { text-align: center; padding: 18px; background: #fbfdff; border: 1px solid #dce7f2; border-radius: 18px; }
        .vertexMatch { display: flex; justify-content: center; align-items: center; gap: 11px; }
        .vertexMatch span { width: 45px; height: 45px; border-radius: 14px; display: grid; place-items: center; color: white; background: #0f766e; font-size: 22px; font-weight: 900; }
        .vertexMatch span:last-child { background: #7c3aed; }
        .vertexMatch b { color: #7b8fa5; font-size: 24px; }
        .mappingCard p { margin: 9px 0 0; color: #49627f; font-weight: 800; }
        .sidePairs { display: flex; flex-wrap: wrap; justify-content: center; gap: 11px; margin-top: 17px; }
        .sidePairs span { padding: 10px 16px; border-radius: 999px; background: #ecfdf5; color: #0f766e; font-weight: 850; }
        .scaleRows p { display: flex; justify-content: space-between; margin: 7px 0; padding: 10px 13px; border-radius: 11px; background: white; }
        .scaleRows span { color: #5a7088; }
        .scaleRows strong { color: #0f766e; }
        .ratioPanel { display: flex; align-items: center; justify-content: center; gap: 22px; padding: 25px; border-radius: 18px; background: #f5f3ff; color: #6d28d9; font-size: 31px; }
        .ratioFormula { width: 82px; display: grid; text-align: center; font-family: Georgia, serif; }
        .ratioFormula span { border-bottom: 2px solid currentColor; padding-bottom: 5px; }
        .ratioFormula i { padding-top: 5px; font-style: normal; }
        .directionGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 17px; }
        .directionGrid article { padding: 17px; border: 1px solid #a7f3d0; border-radius: 16px; background: #ecfdf5; }
        .directionGrid .wrong { border-color: #fed7aa; background: #fff7ed; }
        .directionGrid strong { color: #0f766e; }
        .directionGrid p { margin: 7px 0 0; color: #49627f; line-height: 1.45; }
        .workedDiagram { align-content: start; min-height: 380px; }
        .givenLine { margin: 0 0 8px; color: #334e68; font-weight: 800; }
        .solutionStep { display: grid; grid-template-columns: 39px 1fr; gap: 13px; margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd6fe; }
        .solutionStep > span { width: 39px; height: 39px; display: grid; place-items: center; border-radius: 12px; color: white; background: #7c3aed; font-weight: 900; }
        .solutionStep p { margin: 1px 0 6px; color: #49627f; }
        .solutionStep strong { display: block; color: #6d28d9; font-size: 28px; }
        .solutionStep small { display: block; margin-top: 6px; color: #0f766e; font-weight: 750; }
        .calculation { color: #334e68; font-family: Georgia, serif; font-size: 21px; line-height: 1.4; }
        .checkGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .checkGrid article { min-height: 160px; display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #dce7f2; border-radius: 18px; background: #fbfdff; }
        .checkGrid b { width: 37px; height: 37px; display: grid; place-items: center; border-radius: 11px; background: #ede9fe; color: #6d28d9; }
        .checkGrid strong { font-size: 18px; }
        .checkGrid p { margin: 0; color: #5a7088; line-height: 1.45; }
        .summaryCard { padding: 32px; border-radius: 25px; background: linear-gradient(135deg, #6d28d9, #7c3aed); color: white; margin-top: 26px; }
        .summaryCard .eyebrow { color: #ddd6fe; }
        .summaryCard h2 { margin: 0 0 20px; font-size: 31px; }
        .summaryGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 13px; }
        .summaryGrid div { min-height: 120px; padding: 17px; border-radius: 17px; background: rgba(255,255,255,.13); }
        .summaryGrid span { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 10px; background: #ccfbf1; color: #0f766e; font-weight: 900; }
        .summaryGrid p { margin: 11px 0 0; font-weight: 750; line-height: 1.4; }
        .finishButton { display: block; margin-top: 24px; border: 0; border-radius: 16px; padding: 17px 30px; background: #0f766e; color: white; font-weight: 900; cursor: pointer; box-shadow: 0 10px 24px rgba(15,118,110,.2); }
        .finishButton:hover { background: #115e59; transform: translateY(-1px); }
        @media (max-width: 820px) {
          .twoColumn, .scaleLayout, .workedGrid { grid-template-columns: 1fr; }
          .mappingGrid, .directionGrid { grid-template-columns: 1fr; }
          .checkGrid, .summaryGrid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .page { padding: 22px 16px 55px; }
          .hero, .lessonCard, .summaryCard { padding: 22px 18px; border-radius: 20px; }
          .lessonHeading { grid-template-columns: 45px 1fr; gap: 12px; }
          .lessonNumber { width: 45px; height: 45px; border-radius: 13px; }
          .checkGrid, .summaryGrid { grid-template-columns: 1fr; }
          .diagramPanel, .workedDiagram { padding: 8px; min-height: 260px; }
          .ratioPanel { gap: 10px; }
          .statementBox { gap: 6px; }
        }
      `}</style>
    </main>
  );
}

function LessonHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="lessonHeading"><div className="lessonNumber">{number}</div><div><p className="lessonLabel">{label}</p><h2>{title}</h2></div></div>;
}

function SimilarPairDiagram() {
  return (
    <svg className="similarSvg" viewBox="0 0 760 320" role="img" aria-label="Similar triangles ABC and XYZ with three pairs of corresponding angles marked">
      <defs><style>{`.smallTri{fill:#ede9fe;stroke:#7c3aed;stroke-width:7;stroke-linejoin:round}.largeTri{fill:#ccfbf1;stroke:#0f766e;stroke-width:7;stroke-linejoin:round}.arc{fill:none;stroke:#f59e0b;stroke-width:5;stroke-linecap:round}.v{font:800 24px Inter,sans-serif;fill:#10223f}`}</style></defs>
      <path className="smallTri" d="M70 245 L150 125 L250 245 Z" />
      <text className="v" x="42" y="274">A</text><text className="v" x="141" y="110">B</text><text className="v" x="257" y="274">C</text>
      <path className="largeTri" d="M370 245 L498 53 L658 245 Z" />
      <text className="v" x="340" y="274">X</text><text className="v" x="489" y="38">Y</text><text className="v" x="665" y="274">Z</text>
      <path className="arc" d="M90 245 Q87 231 79 219 M390 245 Q387 231 379 219" />
      <path className="arc" d="M138 144 Q150 153 163 143 M133 153 Q150 167 168 152 M479 77 Q498 91 518 76 M471 90 Q498 110 526 88" />
      <path className="arc" d="M231 245 Q234 231 242 220 M222 245 Q227 226 237 213 M213 245 Q220 220 232 205 M639 245 Q642 231 650 220 M630 245 Q635 226 645 213 M621 245 Q628 220 640 205" />
    </svg>
  );
}

function ScaleFactorDiagram() {
  return (
    <svg className="similarSvg" viewBox="0 0 760 310" role="img" aria-label="A 3-4-5 triangle enlarged by scale factor 2 to a 6-8-10 triangle">
      <path d="M60 245 L60 155 L180 245 Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="7" strokeLinejoin="round" />
      <path d="M340 245 L340 65 L580 245 Z" fill="#ccfbf1" stroke="#0f766e" strokeWidth="7" strokeLinejoin="round" />
      <g fill="#10223f" fontSize="22" fontWeight="800"><text x="34" y="205">3</text><text x="108" y="277">4</text><text x="111" y="194">5</text><text x="306" y="165">6</text><text x="450" y="277">8</text><text x="458" y="151">10</text></g>
      <g fill="#10223f" fontSize="18" fontWeight="900"><text x="38" y="268">A</text><text x="38" y="145">B</text><text x="184" y="268">C</text><text x="318" y="268">X</text><text x="318" y="55">Y</text><text x="586" y="268">Z</text></g>
      <path d="M60 224 h21 v21 M340 218 h27 v27" fill="none" stroke="#f59e0b" strokeWidth="4" />
      <g fill="#5a7088" fontSize="20" fontWeight="800"><text x="75" y="302">△ABC</text><text x="430" y="302">△XYZ</text></g>
      <path d="M215 145 H315 M296 126 l19 19 -19 19" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="240" y="113" fill="#6d28d9" fontSize="21" fontWeight="900">× 2</text>
    </svg>
  );
}

function WorkedExampleDiagram() {
  return (
    <svg className="similarSvg" viewBox="0 0 720 330" role="img" aria-label="Similar triangles ABC and XYZ with corresponding sides 3, 6, n and 4 and corresponding angles 40 degrees and m degrees">
      <path d="M55 250 L147 173 L295 250 Z" fill="#ccfbf1" stroke="#0f766e" strokeWidth="7" strokeLinejoin="round" />
      <path d="M415 250 L476 199 L575 250 Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="7" strokeLinejoin="round" />
      <g fill="#10223f" fontSize="23" fontWeight="800"><text x="27" y="279">A</text><text x="139" y="158">B</text><text x="302" y="279">C</text><text x="387" y="279">X</text><text x="468" y="184">Y</text><text x="582" y="279">Z</text></g>
      <g fill="#6d28d9" fontSize="22" fontWeight="850"><text x="84" y="196">3</text><text x="166" y="282">6</text><text x="431" y="219">n</text><text x="486" y="282">4</text><text x="77" y="239">40°</text><text x="438" y="240">m°</text></g>
      <path d="M77 250 Q74 237 65 229 M437 250 Q434 237 425 229" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
