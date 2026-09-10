"use client";

import { useRouter } from "next/navigation";

type SimilarityCondition = "AAA" | "SSS-P" | "SAS-P";

const rules: Array<{
  code: SimilarityCondition;
  shortName: string;
  title: string;
  description: string;
  reference: string;
}> = [
  {
    code: "AAA",
    shortName: "AAA",
    title: "Three corresponding angles are equal",
    description: "If all three pairs of corresponding angles are equal, the triangles are similar.",
    reference: "AAA",
  },
  {
    code: "SSS-P",
    shortName: "3 sides",
    title: "Three corresponding sides are proportional",
    description: "If the three pairs of corresponding sides have the same ratio, the triangles are similar.",
    reference: "3 sides proportional",
  },
  {
    code: "SAS-P",
    shortName: "2 sides + ∠",
    title: "Two sides are proportional and the included angles are equal",
    description: "The equal angle must lie between the two pairs of proportional sides.",
    reference: "ratio of 2 sides, inc. ∠",
  },
];

export default function ConditionsForTrianglesToBeSimilarPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button className="backButton" onClick={() => router.push("/maths/s1/chapter-10")}>
        ← Back to Chapter 10
      </button>

      <header className="hero">
        <p className="eyebrow">S1 · CHAPTER 10 · SECTION 4</p>
        <h1>Conditions for Triangles to be Similar</h1>
        <p className="introduction">
          Three tests provide enough information to prove that two triangles are
          similar. Always match the corresponding vertices before applying a test.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading number="1" label="THREE SUFFICIENT CONDITIONS" title="Angles, side ratios, or a combination can prove similarity" />
        <div className="overviewGrid">
          {rules.map((rule) => (
            <article key={rule.code}>
              <span>{rule.shortName}</span>
              <strong>{rule.title}</strong>
            </article>
          ))}
        </div>
        <div className="memoryStrip">
          <strong>Prove first, calculate second:</strong> use a similarity condition to
          prove the triangles similar. Then use their proportional sides to find unknown lengths.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="2" label="ANGLE–ANGLE–ANGLE" title="Equal corresponding angles prove the same shape" />
        <div className="ruleLayout">
          <div className="diagramPanel"><SimilarityDiagram type="AAA" /></div>
          <div className="rulePanel">
            <div className="codeBadge">AAA</div>
            <h3>Three corresponding angles are equal</h3>
            <div className="factRows"><p>∠A = ∠X</p><p>∠B = ∠Y</p><p>∠C = ∠Z</p></div>
            <strong className="conclusion">∴ △ABC ∼ △XYZ</strong>
            <p className="reference">[Reference: AAA]</p>
          </div>
        </div>
        <div className="tipStrip"><strong>Shortcut:</strong> if two pairs of angles are equal, the third pair must also be equal because the angles of each triangle total 180°.</div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="3" label="THREE SIDES PROPORTIONAL" title="All three corresponding side ratios must agree" />
        <div className="ruleLayout">
          <div className="diagramPanel"><SimilarityDiagram type="SSS-P" /></div>
          <div className="rulePanel">
            <div className="codeBadge wideBadge">3 sides</div>
            <h3>Corresponding sides are proportional</h3>
            <div className="ratioLine"><Fraction top="AB" bottom="XY" /><b>=</b><Fraction top="BC" bottom="YZ" /><b>=</b><Fraction top="CA" bottom="ZX" /></div>
            <div className="numberCheck">3/6 = 4/8 = 5/10 = 1/2</div>
            <strong className="conclusion">∴ △ABC ∼ △XYZ</strong>
            <p className="reference">[Reference: 3 sides proportional]</p>
          </div>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="4" label="TWO SIDES AND INCLUDED ANGLE" title="Check both the ratios and the angle position" />
        <div className="ruleLayout">
          <div className="diagramPanel"><SimilarityDiagram type="SAS-P" /></div>
          <div className="rulePanel">
            <div className="codeBadge wideBadge">2 sides + ∠</div>
            <h3>Two side pairs are proportional</h3>
            <div className="ratioLine compact"><Fraction top="AB" bottom="XY" /><b>=</b><Fraction top="AC" bottom="XZ" /></div>
            <p className="andLine">and &nbsp; ∠A = ∠X</p>
            <strong className="conclusion">∴ △ABC ∼ △XYZ</strong>
            <p className="reference">[Reference: ratio of 2 sides, inc. ∠]</p>
          </div>
        </div>
        <div className="warningBox"><strong>Position check:</strong> ∠A and ∠X are between the two side pairs used in the ratios. A non-included equal angle is not enough for this test.</div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="5" label="CHOOSING A CONDITION" title="Use only the information shown or stated" />
        <div className="choiceTable" role="table" aria-label="Guide for choosing a triangle similarity condition">
          <div className="tableHead" role="row"><span>Information available</span><span>Use</span><span>Essential check</span></div>
          <div role="row"><span>2 or 3 pairs of equal angles</span><strong>AAA</strong><span>Corresponding angle order</span></div>
          <div role="row"><span>3 pairs of side lengths</span><strong>3 sides proportional</strong><span>All three ratios equal</span></div>
          <div role="row"><span>2 side pairs and 1 equal angle</span><strong>Ratio of 2 sides, inc. ∠</strong><span>Equal angle is included</span></div>
        </div>
        <div className="notEnoughGrid">
          <article><b>Not enough</b><strong>Equal side differences</strong><p>Similarity depends on equal ratios, not equal differences.</p></article>
          <article><b>Not enough</b><strong>Two proportional sides only</strong><p>The included angle must also be equal.</p></article>
          <article><b>Not enough</b><strong>One equal angle only</strong><p>One angle does not fix the shape of a triangle.</p></article>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="6" label="WORKED EXAMPLES" title="Write the evidence before the similarity statement" />
        <div className="workedGrid">
          <article className="workedCard">
            <p className="questionLabel">EXAMPLE 1 · TWO SIDES AND INCLUDED ANGLE</p>
            <WorkedSasDiagram />
            <div className="proof">
              <p><Fraction top="PQ" bottom="ST" /> = 5/10 = 1/2</p>
              <p><Fraction top="PR" bottom="SU" /> = 4/8 = 1/2</p>
              <p>∠QPR = ∠TSU <small>(given)</small></p>
              <strong>∴ △PQR ∼ △STU</strong>
              <span>[Reference: ratio of 2 sides, inc. ∠]</span>
            </div>
          </article>
          <article className="workedCard">
            <p className="questionLabel">EXAMPLE 2 · AAA</p>
            <NestedTrianglesDiagram />
            <div className="proof">
              <p>∠DAE = ∠BAC <small>(common angle)</small></p>
              <p>∠ADE = ∠ABC <small>(corresponding angles, DE ∥ BC)</small></p>
              <p>∠AED = ∠ACB <small>(corresponding angles, DE ∥ BC)</small></p>
              <strong>∴ △ADE ∼ △ABC</strong>
              <span>[Reference: AAA]</span>
            </div>
          </article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="eyebrow">SECTION SUMMARY</p>
        <h2>The three similarity conditions</h2>
        <div className="summaryGrid">
          <div><span>AAA</span><p>Corresponding angles are equal</p></div>
          <div><span>3 sides</span><p>All corresponding sides are proportional</p></div>
          <div><span>2 sides + ∠</span><p>Two side ratios and the included angle</p></div>
        </div>
      </section>

      <button className="finishButton" onClick={() => router.push("/maths/s1/chapter-10")}>
        Finish Section 4 →
      </button>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f4f7fb; color: #10223f; }
        button { font: inherit; }
        .page { min-height: 100vh; padding: 34px 5vw 70px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .page > * { width: min(1180px, 100%); margin-left: auto; margin-right: auto; }
        .backButton { display: block; border: 0; background: transparent; color: #0f766e; font-weight: 800; cursor: pointer; padding: 8px 0; margin-bottom: 18px; }
        .backButton:hover { color: #7c3aed; }
        .hero { background: linear-gradient(135deg, #ede9fe, #faf5ff 55%, #ccfbf1); border: 1px solid #c4b5fd; border-radius: 28px; padding: 38px 42px; margin-bottom: 24px; }
        .eyebrow, .panelLabel, .questionLabel { margin: 0 0 8px; color: #7c3aed; font-size: 14px; font-weight: 900; letter-spacing: .12em; }
        h1 { margin: 0; font-size: clamp(35px, 5vw, 58px); line-height: 1.04; letter-spacing: -.035em; }
        .introduction { max-width: 900px; margin: 18px 0 0; color: #49627f; font-size: 20px; line-height: 1.62; }
        .lessonCard { background: white; border: 1px solid #dce7f2; border-radius: 25px; padding: 30px; margin-bottom: 22px; box-shadow: 0 12px 32px rgba(16,34,63,.055); }
        .lessonHeading { display: grid; grid-template-columns: 54px 1fr; gap: 16px; align-items: center; margin-bottom: 24px; }
        .lessonNumber { width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; background: #ede9fe; color: #6d28d9; font-size: 24px; font-weight: 900; }
        .lessonLabel { margin: 0 0 4px; color: #0f766e; font-size: 13px; font-weight: 900; letter-spacing: .11em; }
        .lessonHeading h2 { margin: 0; font-size: clamp(24px, 3.1vw, 34px); line-height: 1.15; }
        .overviewGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
        .overviewGrid article { min-height: 150px; padding: 20px; border-radius: 18px; background: #f8fafc; border: 1px solid #dce7f2; }
        .overviewGrid span, .codeBadge { display: grid; place-items: center; min-width: 70px; width: fit-content; height: 48px; padding: 0 13px; border-radius: 13px; background: #7c3aed; color: white; font-size: 19px; font-weight: 900; }
        .overviewGrid strong { display: block; margin-top: 13px; color: #405a76; line-height: 1.4; }
        .memoryStrip, .tipStrip, .warningBox { margin-top: 20px; border-radius: 15px; padding: 17px 20px; color: #334e68; line-height: 1.55; }
        .memoryStrip, .tipStrip { background: #f5f3ff; border-left: 5px solid #8b5cf6; }
        .warningBox { background: #fff7ed; border-left: 5px solid #f59e0b; }
        .ruleLayout { display: grid; grid-template-columns: 1.15fr .85fr; gap: 20px; }
        .diagramPanel { min-height: 320px; display: grid; place-items: center; padding: 14px; border-radius: 20px; background: #f8fafc; border: 1px solid #e5edf5; }
        .similaritySvg, .workedSvg { display: block; width: 100%; height: auto; max-height: 310px; }
        .rulePanel { display: flex; flex-direction: column; justify-content: center; padding: 27px; border-radius: 20px; background: #f5f3ff; border: 1px solid #ddd6fe; }
        .rulePanel h3 { margin: 13px 0 10px; font-size: 24px; line-height: 1.3; }
        .wideBadge { width: fit-content; }
        .factRows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .factRows p { margin: 0; padding: 9px; text-align: center; border-radius: 10px; background: white; color: #405a76; font-weight: 800; }
        .conclusion { display: block; margin-top: 17px; color: #6d28d9; font-family: Georgia, serif; font-size: 24px; }
        .reference { margin: 12px 0 0; color: #0f766e; font-size: 14px; font-weight: 850; }
        .ratioLine { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 16px 8px; border-radius: 15px; background: white; color: #6d28d9; font-size: 23px; }
        .ratioLine.compact { max-width: 330px; }
        .fraction { width: 57px; display: inline-grid; text-align: center; vertical-align: middle; font-family: Georgia, serif; }
        .fraction span { padding-bottom: 3px; border-bottom: 2px solid currentColor; }
        .fraction i { padding-top: 3px; font-style: normal; }
        .numberCheck { margin-top: 11px; padding: 10px; border-radius: 10px; background: #ecfdf5; color: #0f766e; text-align: center; font-weight: 850; }
        .andLine { color: #405a76; font-size: 18px; font-weight: 800; }
        .choiceTable { overflow: hidden; border: 1px solid #dce7f2; border-radius: 18px; }
        .choiceTable > div { display: grid; grid-template-columns: 1.1fr .9fr 1fr; }
        .choiceTable span, .choiceTable strong { padding: 15px 17px; border-top: 1px solid #e5edf5; }
        .choiceTable strong { color: #6d28d9; }
        .choiceTable .tableHead { background: #6d28d9; color: white; font-weight: 850; }
        .choiceTable .tableHead span { border-top: 0; }
        .notEnoughGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 18px; }
        .notEnoughGrid article { padding: 17px; border-radius: 16px; background: #fff7ed; border: 1px solid #fed7aa; }
        .notEnoughGrid b { display: inline-block; padding: 5px 9px; border-radius: 8px; background: #ffedd5; color: #c2410c; font-size: 12px; text-transform: uppercase; }
        .notEnoughGrid strong { display: block; margin-top: 10px; }
        .notEnoughGrid p { margin: 6px 0 0; color: #5a7088; line-height: 1.45; }
        .workedGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .workedCard { padding: 20px; border: 1px solid #dce7f2; border-radius: 20px; background: #f8fafc; }
        .proof { padding: 17px; border-radius: 15px; background: white; border: 1px solid #e5edf5; }
        .proof p { display: flex; align-items: center; gap: 7px; margin: 8px 0; color: #405a76; }
        .proof small { margin-left: auto; color: #73879d; text-align: right; }
        .proof strong { display: block; margin-top: 13px; color: #6d28d9; font-family: Georgia, serif; font-size: 22px; }
        .proof > span { display: block; margin-top: 7px; color: #0f766e; font-size: 13px; font-weight: 800; }
        .summaryCard { padding: 32px; border-radius: 25px; background: linear-gradient(135deg, #6d28d9, #7c3aed); color: white; margin-top: 26px; }
        .summaryCard .eyebrow { color: #ddd6fe; }
        .summaryCard h2 { margin: 0 0 20px; font-size: 31px; }
        .summaryGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; }
        .summaryGrid div { min-height: 125px; padding: 17px; border-radius: 17px; background: rgba(255,255,255,.13); }
        .summaryGrid span { display: inline-grid; place-items: center; min-width: 58px; height: 35px; padding: 0 10px; border-radius: 10px; background: #ccfbf1; color: #0f766e; font-weight: 900; }
        .summaryGrid p { margin: 11px 0 0; font-weight: 750; line-height: 1.4; }
        .finishButton { display: block; margin-top: 24px; border: 0; border-radius: 16px; padding: 17px 30px; background: #0f766e; color: white; font-weight: 900; cursor: pointer; box-shadow: 0 10px 24px rgba(15,118,110,.2); }
        .finishButton:hover { background: #115e59; transform: translateY(-1px); }
        @media (max-width: 820px) {
          .ruleLayout, .workedGrid { grid-template-columns: 1fr; }
          .overviewGrid, .notEnoughGrid, .summaryGrid { grid-template-columns: 1fr; }
        }
        @media (max-width: 620px) {
          .page { padding: 22px 16px 55px; }
          .hero, .lessonCard, .summaryCard { padding: 22px 18px; border-radius: 20px; }
          .lessonHeading { grid-template-columns: 45px 1fr; gap: 12px; }
          .lessonNumber { width: 45px; height: 45px; border-radius: 13px; }
          .choiceTable { overflow-x: auto; }
          .choiceTable > div { min-width: 640px; }
          .factRows { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}

function LessonHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="lessonHeading"><div className="lessonNumber">{number}</div><div><p className="lessonLabel">{label}</p><h2>{title}</h2></div></div>;
}

function Fraction({ top, bottom }: { top: string; bottom: string }) {
  return <span className="fraction"><span>{top}</span><i>{bottom}</i></span>;
}

function SimilarityDiagram({ type }: { type: SimilarityCondition }) {
  if (type === "SSS-P") {
    return (
      <svg className="similaritySvg" viewBox="0 0 720 300" role="img" aria-label="Similar 3-4-5 and 6-8-10 triangles with corresponding vertices">
        <path d="M55 245 L55 155 L175 245 Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="7" strokeLinejoin="round" />
        <path d="M355 245 L355 65 L595 245 Z" fill="#ccfbf1" stroke="#0f766e" strokeWidth="7" strokeLinejoin="round" />
        <g fill="#10223f" fontSize="19" fontWeight="900"><text x="29" y="272">A</text><text x="29" y="147">B</text><text x="181" y="272">C</text><text x="329" y="272">X</text><text x="329" y="57">Y</text><text x="602" y="272">Z</text></g>
        <g fill="#6d28d9" fontSize="21" fontWeight="850"><text x="28" y="207">3</text><text x="108" y="277">4</text><text x="111" y="194">5</text><text x="320" y="165">6</text><text x="468" y="277">8</text><text x="470" y="151">10</text></g>
        <path d="M55 224 h21 v21 M355 218 h27 v27" fill="none" stroke="#f59e0b" strokeWidth="4" />
      </svg>
    );
  }

  const sas = type === "SAS-P";
  return (
    <svg className="similaritySvg" viewBox="0 0 720 300" role="img" aria-label={`${type} condition on similar triangles ABC and XYZ`}>
      <path d="M55 245 L145 105 L255 245 Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="7" strokeLinejoin="round" />
      <path d="M350 245 L494 21 L670 245 Z" fill="#ccfbf1" stroke="#0f766e" strokeWidth="7" strokeLinejoin="round" />
      <g fill="#10223f" fontSize="21" fontWeight="900"><text x="27" y="273">A</text><text x="136" y="91">B</text><text x="262" y="273">C</text><text x="320" y="273">X</text><text x="485" y="18">Y</text><text x="677" y="273">Z</text></g>
      {sas ? <>
        <g fill="#6d28d9" fontSize="21" fontWeight="850"><text x="82" y="169">3</text><text x="142" y="277">4</text><text x="402" y="133">6</text><text x="500" y="277">8</text></g>
        <path d="M77 245 Q74 229 64 215 M372 245 Q369 229 359 215" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
      </> : <>
        <path d="M77 245 Q74 229 64 215 M372 245 Q369 229 359 215" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
        <path d="M132 127 Q145 138 159 126 M126 137 Q145 152 165 136 M473 49 Q494 66 516 48 M464 63 Q494 87 525 62" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
        <path d="M234 245 Q237 230 247 216 M225 245 Q230 224 242 208 M216 245 Q223 218 237 200 M649 245 Q652 230 662 216 M640 245 Q645 224 657 208 M631 245 Q638 218 652 200" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
      </>}
    </svg>
  );
}

function WorkedSasDiagram() {
  return (
    <svg className="workedSvg" viewBox="0 0 680 275" role="img" aria-label="Triangles PQR and STU with proportional sides around equal included angles">
      <path d="M65 235 L115 148.4 L145 235 Z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="7" strokeLinejoin="round" />
      <path d="M330 235 L430 61.8 L490 235 Z" fill="#ccfbf1" stroke="#0f766e" strokeWidth="7" strokeLinejoin="round" />
      <g fill="#10223f" fontSize="20" fontWeight="900"><text x="38" y="260">P</text><text x="107" y="136">Q</text><text x="152" y="260">R</text><text x="303" y="260">S</text><text x="422" y="50">T</text><text x="497" y="260">U</text></g>
      <g fill="#6d28d9" fontSize="20" fontWeight="850"><text x="78" y="183">5</text><text x="98" y="260">4</text><text x="365" y="143">10</text><text x="400" y="260">8</text></g>
      <path d="M84 235 Q81 221 73 210 M349 235 Q346 221 338 210" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function NestedTrianglesDiagram() {
  return (
    <svg className="workedSvg" viewBox="0 0 620 285" role="img" aria-label="Triangle ABC containing DE parallel to BC">
      <path d="M75 245 L310 30 L550 245 Z" fill="#ecfdf5" stroke="#0f766e" strokeWidth="7" strokeLinejoin="round" />
      <path d="M188 142 H433" fill="none" stroke="#7c3aed" strokeWidth="7" strokeLinecap="round" />
      <g fill="#10223f" fontSize="21" fontWeight="900"><text x="48" y="271">B</text><text x="301" y="22">A</text><text x="557" y="271">C</text><text x="160" y="143">D</text><text x="440" y="143">E</text></g>
      <g fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"><path d="M102 245 Q101 231 91 219 M215 142 Q214 130 205 121"/><path d="M523 245 Q524 231 534 219 M406 142 Q407 130 416 121"/></g>
      <g fill="#7c3aed"><path d="M275 142 l12 -7 -12 -7 Z M299 142 l12 -7 -12 -7 Z"/><path d="M275 245 l12 -7 -12 -7 Z M299 245 l12 -7 -12 -7 Z"/></g>
      <text x="453" y="178" fill="#6d28d9" fontSize="19" fontWeight="850">DE ∥ BC</text>
    </svg>
  );
}
