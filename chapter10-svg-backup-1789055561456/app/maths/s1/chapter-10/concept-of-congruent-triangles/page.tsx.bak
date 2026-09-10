"use client";

import { useRouter } from "next/navigation";

const correspondence = [
  ["A", "X", "∠A = ∠X", "AB = XY"],
  ["B", "Y", "∠B = ∠Y", "BC = YZ"],
  ["C", "Z", "∠C = ∠Z", "CA = ZX"],
] as const;

export default function ConceptOfCongruentTrianglesPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button className="backButton" onClick={() => router.push("/maths/s1/chapter-10")}>
        ← Back to Chapter 10
      </button>

      <header className="hero">
        <p className="eyebrow">S1 · CHAPTER 10 · SECTION 1</p>
        <h1>Concept of Congruent Triangles</h1>
        <p className="introduction">
          Congruent triangles have exactly the same shape and the same size. The order of the
          letters tells us which vertices, angles and sides correspond.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading number="1" label="MEANING OF CONGRUENT" title="Congruent triangles have the same shape and the same size" />
        <div className="twoColumn">
          <div className="diagramPanel">
            <CongruentPairDiagram />
          </div>
          <div className="factPanel tealPanel">
            <p className="panelLabel">CONGRUENT TRIANGLES</p>
            <div className="displayFormula">△ABC ≅ △XYZ</div>
            <p>The symbol <strong>≅</strong> means “is congruent to”.</p>
            <ul>
              <li>Their corresponding angles are equal.</li>
              <li>Their corresponding sides are equal.</li>
            </ul>
            <p className="reference">[Reference: congruent triangles]</p>
          </div>
        </div>
        <div className="memoryStrip">
          <strong>Memory rule:</strong> Congruent means same shape <em>and</em> same size. Turning,
          reflecting or moving a triangle does not change its shape or size.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="2" label="CORRESPONDING VERTICES" title="The order of the letters shows the matching vertices" />
        <div className="statementBox">
          <span>△</span><strong>A B C</strong><span>≅</span><span>△</span><strong>X Y Z</strong>
        </div>
        <div className="mappingGrid">
          {correspondence.map(([left, right, angles, sides]) => (
            <article className="mappingCard" key={left}>
              <div className="vertexMatch"><span>{left}</span><b>↔</b><span>{right}</span></div>
              <p>{angles}</p>
              <p>{sides}</p>
            </article>
          ))}
        </div>
        <div className="noteBox">
          <strong>Order matters.</strong> In △ABC ≅ △XYZ, the first vertex matches the first,
          the second matches the second, and the third matches the third.
        </div>
        <p className="reference centred">[Reference: corr. ∠s and corr. sides]</p>
      </section>

      <section className="lessonCard">
        <LessonHeading number="3" label="READING A CONGRUENCE STATEMENT" title="Read both triangle names in the same order" />
        <div className="twoColumn statementLesson">
          <div className="purplePanel factPanel">
            <p className="panelLabel">GIVEN</p>
            <div className="displayFormula">△PQR ≅ △STU</div>
            <p>Follow each letter straight across:</p>
            <div className="miniMatches">
              <span>P ↔ S</span><span>Q ↔ T</span><span>R ↔ U</span>
            </div>
          </div>
          <div className="resultsPanel">
            <div><span>ANGLES</span><strong>∠P = ∠S</strong><strong>∠Q = ∠T</strong><strong>∠R = ∠U</strong></div>
            <div><span>SIDES</span><strong>PQ = ST</strong><strong>QR = TU</strong><strong>RP = US</strong></div>
          </div>
        </div>
        <div className="tipStrip"><strong>Quick check:</strong> every side must join the matching pair of vertices.</div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="4" label="WORKED EXAMPLE" title="Use corresponding parts to find unknown values" />
        <div className="workedGrid">
          <div className="workedDiagram">
            <p className="givenLine">In the figure, △ABC ≅ △XYZ.</p>
            <WorkedExampleDiagram />
          </div>
          <div className="solutionPanel">
            <p className="panelLabel">SOLUTION</p>
            <div className="solutionStep">
              <span>1</span>
              <div><p>A corresponds to X.</p><strong>p = 90°</strong><small>[Reference: corr. ∠s equal]</small></div>
            </div>
            <div className="solutionStep">
              <span>2</span>
              <div><p>AB corresponds to XY.</p><strong>q = 4</strong><small>[Reference: corr. sides equal]</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="5" label="CHECK BEFORE YOU WRITE" title="Match the vertices before matching the sides" />
        <div className="checkGrid">
          <article><b>1</b><strong>Identify</strong><p>Find the corresponding vertices.</p></article>
          <article><b>2</b><strong>Write</strong><p>Write both triangle names in matching order.</p></article>
          <article><b>3</b><strong>Pair angles</strong><p>Match angles at corresponding vertices.</p></article>
          <article><b>4</b><strong>Pair sides</strong><p>Join the same corresponding vertex pairs.</p></article>
        </div>
        <div className="warningBox">
          <strong>Common mistake:</strong> triangles that only look alike are not necessarily
          congruent. Their corresponding side lengths must also be equal.
        </div>
      </section>

      <section className="summaryCard">
        <p className="eyebrow">SECTION SUMMARY</p>
        <h2>Four facts to remember</h2>
        <div className="summaryGrid">
          <div><span>1</span><p>Same shape and same size</p></div>
          <div><span>2</span><p>The symbol is ≅</p></div>
          <div><span>3</span><p>Corresponding angles are equal</p></div>
          <div><span>4</span><p>Corresponding sides are equal</p></div>
        </div>
      </section>

      <button className="finishButton" onClick={() => router.push("/maths/s1/chapter-10")}>
        Finish Section 1 →
      </button>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f4f7fb; color: #10223f; }
        button { font: inherit; }
        .page { min-height: 100vh; padding: 34px 5vw 70px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .page > * { width: min(1180px, 100%); margin-left: auto; margin-right: auto; }
        .backButton { display: block; border: 0; background: transparent; color: #0f766e; font-weight: 800; cursor: pointer; padding: 8px 0; margin-bottom: 18px; }
        .backButton:hover { color: #7c3aed; }
        .hero { background: linear-gradient(135deg, #ccfbf1 0%, #ecfeff 62%, #ede9fe 100%); border: 1px solid #5eead4; border-radius: 28px; padding: 38px 42px; margin-bottom: 24px; }
        .eyebrow, .panelLabel { margin: 0 0 8px; color: #0f766e; font-size: 14px; font-weight: 900; letter-spacing: .12em; }
        h1 { margin: 0; font-size: clamp(35px, 5vw, 58px); line-height: 1.04; letter-spacing: -.035em; }
        .introduction { max-width: 880px; margin: 18px 0 0; color: #49627f; font-size: 20px; line-height: 1.62; }
        .lessonCard { background: white; border: 1px solid #dce7f2; border-radius: 25px; padding: 30px; margin-bottom: 22px; box-shadow: 0 12px 32px rgba(16,34,63,.055); }
        .lessonHeading { display: grid; grid-template-columns: 54px 1fr; gap: 16px; align-items: center; margin-bottom: 24px; }
        .lessonNumber { width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; background: #ccfbf1; color: #0f766e; font-size: 24px; font-weight: 900; }
        .lessonLabel { margin: 0 0 4px; color: #7c3aed; font-size: 13px; font-weight: 900; letter-spacing: .11em; }
        .lessonHeading h2 { margin: 0; font-size: clamp(24px, 3.1vw, 34px); line-height: 1.15; }
        .twoColumn, .workedGrid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 20px; }
        .diagramPanel, .workedDiagram { min-height: 300px; border-radius: 20px; background: #f8fafc; border: 1px solid #e5edf5; padding: 18px; display: grid; place-items: center; }
        .triangleSvg { width: 100%; height: auto; max-height: 310px; }
        .factPanel { border-radius: 20px; padding: 28px; display: flex; flex-direction: column; justify-content: center; }
        .tealPanel { background: #ecfdf5; border: 1px solid #99f6e4; }
        .purplePanel { background: #f5f3ff; border: 1px solid #ddd6fe; }
        .displayFormula { color: #0f766e; font-family: Georgia, "Times New Roman", serif; font-size: clamp(30px, 4vw, 46px); font-weight: 700; margin: 5px 0 16px; }
        .factPanel p, .factPanel li { color: #405a76; font-size: 17px; line-height: 1.55; }
        .factPanel ul { padding-left: 22px; margin: 4px 0 12px; }
        .reference { margin-top: 12px !important; color: #0f766e !important; font-weight: 800; font-size: 14px !important; }
        .centred { text-align: center; }
        .memoryStrip, .tipStrip, .noteBox, .warningBox { margin-top: 20px; border-radius: 15px; padding: 17px 20px; color: #334e68; line-height: 1.55; }
        .memoryStrip, .tipStrip { background: #effcf9; border-left: 5px solid #14b8a6; }
        .noteBox { background: #f5f3ff; border-left: 5px solid #8b5cf6; }
        .warningBox { background: #fff7ed; border-left: 5px solid #f59e0b; }
        .statementBox { display: flex; align-items: center; justify-content: center; gap: 13px; padding: 21px; border-radius: 18px; background: #f8fafc; color: #0f766e; font-family: Georgia, serif; font-size: clamp(28px, 5vw, 46px); }
        .statementBox strong:first-of-type { letter-spacing: .22em; color: #0f766e; }
        .statementBox strong:last-of-type { letter-spacing: .22em; color: #7c3aed; }
        .mappingGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 18px; }
        .mappingCard { text-align: center; padding: 19px; background: #fbfdff; border: 1px solid #dce7f2; border-radius: 18px; }
        .mappingCard p { margin: 8px 0 0; color: #49627f; font-weight: 750; }
        .vertexMatch { display: flex; justify-content: center; align-items: center; gap: 11px; }
        .vertexMatch span { width: 45px; height: 45px; border-radius: 14px; display: grid; place-items: center; color: white; background: #0f766e; font-size: 22px; font-weight: 900; }
        .vertexMatch span:last-child { background: #7c3aed; }
        .vertexMatch b { color: #7b8fa5; font-size: 24px; }
        .statementLesson { grid-template-columns: .8fr 1.2fr; }
        .miniMatches { display: flex; flex-wrap: wrap; gap: 9px; }
        .miniMatches span { border-radius: 999px; padding: 8px 12px; background: white; color: #6d28d9; font-weight: 850; }
        .resultsPanel { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .resultsPanel > div { display: flex; flex-direction: column; gap: 10px; padding: 24px; border: 1px solid #dce7f2; border-radius: 20px; }
        .resultsPanel span { color: #7c3aed; font-size: 13px; font-weight: 900; letter-spacing: .1em; }
        .resultsPanel strong { padding: 9px 12px; border-radius: 10px; background: #f6f9fc; color: #23415f; }
        .workedDiagram { align-content: start; min-height: 350px; }
        .givenLine { margin: 0 0 8px; color: #334e68; font-weight: 800; }
        .solutionPanel { padding: 26px; border-radius: 20px; background: #ecfdf5; border: 1px solid #99f6e4; }
        .solutionStep { display: grid; grid-template-columns: 39px 1fr; gap: 13px; margin-top: 18px; padding-top: 18px; border-top: 1px solid #a7f3d0; }
        .solutionStep > span { width: 39px; height: 39px; display: grid; place-items: center; border-radius: 12px; color: white; background: #0f766e; font-weight: 900; }
        .solutionStep p { margin: 1px 0 6px; color: #49627f; }
        .solutionStep strong { display: block; color: #0f766e; font-size: 29px; }
        .solutionStep small { display: block; margin-top: 6px; color: #0f766e; font-weight: 750; }
        .checkGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .checkGrid article { min-height: 160px; display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #dce7f2; border-radius: 18px; background: #fbfdff; }
        .checkGrid b { width: 37px; height: 37px; display: grid; place-items: center; border-radius: 11px; background: #ede9fe; color: #6d28d9; }
        .checkGrid strong { font-size: 18px; }
        .checkGrid p { margin: 0; color: #5a7088; line-height: 1.45; }
        .summaryCard { padding: 32px; border-radius: 25px; background: linear-gradient(135deg, #0f766e, #115e59); color: white; margin-top: 26px; }
        .summaryCard .eyebrow { color: #99f6e4; }
        .summaryCard h2 { margin: 0 0 20px; font-size: 31px; }
        .summaryGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 13px; }
        .summaryGrid div { min-height: 120px; padding: 17px; border-radius: 17px; background: rgba(255,255,255,.12); }
        .summaryGrid span { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 10px; background: #ccfbf1; color: #0f766e; font-weight: 900; }
        .summaryGrid p { margin: 11px 0 0; font-weight: 750; line-height: 1.4; }
        .finishButton { display: block; margin-top: 24px; border: 0; border-radius: 16px; padding: 17px 30px; background: #7c3aed; color: white; font-weight: 900; cursor: pointer; box-shadow: 0 10px 24px rgba(124,58,237,.2); }
        .finishButton:hover { background: #6d28d9; transform: translateY(-1px); }
        @media (max-width: 820px) {
          .twoColumn, .workedGrid, .statementLesson { grid-template-columns: 1fr; }
          .mappingGrid { grid-template-columns: 1fr; }
          .checkGrid, .summaryGrid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .page { padding: 22px 16px 55px; }
          .hero, .lessonCard, .summaryCard { padding: 22px 18px; border-radius: 20px; }
          .lessonHeading { grid-template-columns: 45px 1fr; gap: 12px; }
          .lessonNumber { width: 45px; height: 45px; border-radius: 13px; }
          .resultsPanel, .checkGrid, .summaryGrid { grid-template-columns: 1fr; }
          .diagramPanel, .workedDiagram { padding: 8px; min-height: 250px; }
          .statementBox { gap: 6px; }
        }
      `}</style>
    </main>
  );
}

function LessonHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="lessonHeading">
      <div className="lessonNumber">{number}</div>
      <div><p className="lessonLabel">{label}</p><h2>{title}</h2></div>
    </div>
  );
}

function CongruentPairDiagram() {
  return (
    <svg className="triangleSvg" viewBox="0 0 720 300" role="img" aria-label="Two congruent triangles ABC and XYZ with corresponding vertices labelled">
      <defs><style>{`.shape{fill:#ccfbf1;stroke:#0f766e;stroke-width:7;stroke-linejoin:round}.mark,.angleMark{fill:none;stroke:#7c3aed;stroke-width:6;stroke-linecap:round}.v{font:800 25px Inter,sans-serif;fill:#10223f}`}</style></defs>
      <path className="shape" d="M60 238 L180 48 L300 238 Z" />
      <text className="v" x="171" y="33">A</text><text className="v" x="28" y="268">B</text><text className="v" x="307" y="268">C</text>
      <path className="shape" d="M420 238 L540 48 L660 238 Z" />
      <text className="v" x="531" y="33">X</text><text className="v" x="388" y="268">Y</text><text className="v" x="667" y="268">Z</text>

      {/* One, two and three side marks identify the three corresponding side pairs. */}
      <path className="mark" d="M112 155 l17 11 M472 155 l17 11" />
      <path className="mark" d="M228 124 l17 -11 M236 137 l17 -11 M588 124 l17 -11 M596 137 l17 -11" />
      <path className="mark" d="M162 238 v-19 M180 238 v-19 M198 238 v-19 M522 238 v-19 M540 238 v-19 M558 238 v-19" />

      {/* Matching arc patterns show all three pairs of corresponding angles. */}
      <path className="angleMark" d="M164 73 Q180 86 196 73 M524 73 Q540 86 556 73" />
      <path className="angleMark" d="M79 238 Q76 225 68 216 M89 238 Q84 220 73 208 M439 238 Q436 225 428 216 M449 238 Q444 220 433 208" />
      <path className="angleMark" d="M281 238 Q284 225 292 216 M271 238 Q276 220 287 208 M261 238 Q268 215 282 200 M641 238 Q644 225 652 216 M631 238 Q636 220 647 208 M621 238 Q628 215 642 200" />
    </svg>
  );
}

function WorkedExampleDiagram() {
  return (
    <svg className="triangleSvg" viewBox="0 0 760 330" role="img" aria-label="Congruent triangles ABC and XYZ with p degrees and q units marked">
      <defs><style>{`.wshape{fill:#ecfeff;stroke:#0f766e;stroke-width:7;stroke-linejoin:round}.wv{font:800 24px Inter,sans-serif;fill:#10223f}.measure{font:800 22px Inter,sans-serif;fill:#7c3aed}.right{fill:none;stroke:#f59e0b;stroke-width:5}`}</style></defs>
      <path className="wshape" d="M95 75 L95 258 L330 75 Z" />
      <text className="wv" x="72" y="60">A</text><text className="wv" x="65" y="290">B</text><text className="wv" x="337" y="82">C</text>
      <path className="right" d="M95 103 h28 v-28" />
      <text className="measure" x="42" y="176">4</text>
      <path className="wshape" d="M470 75 L470 258 L705 75 Z" />
      <text className="wv" x="447" y="60">X</text><text className="wv" x="440" y="290">Y</text><text className="wv" x="712" y="82">Z</text>
      <path className="right" d="M470 103 h28 v-28" />
      <text className="measure" x="505" y="111">p°</text><text className="measure" x="417" y="176">q</text>
      <text className="measure" x="183" y="315">△ABC</text><text className="measure" x="558" y="315">△XYZ</text>
    </svg>
  );
}
