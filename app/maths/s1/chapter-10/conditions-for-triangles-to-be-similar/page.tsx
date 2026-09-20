"use client";
import { reasonRef } from "@/data/maths/reasons/reasonBank";
import { DualReason, ReasonContent } from "@/components/maths/DualReason";



import { Pair, Nested } from "@/components/maths/Chapter10Geometry";

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
    reference: reasonRef("similarity.aa"),
  },
  {
    code: "SSS-P",
    shortName: "3 sides",
    title: "Three corresponding sides are proportional",
    description: "If the three pairs of corresponding sides have the same ratio, the triangles are similar.",
    reference: reasonRef("similarity.sss"),
  },
  {
    code: "SAS-P",
    shortName: "2 sides + ∠",
    title: "Two sides are proportional and the included angles are equal",
    description: "The equal angle must lie between the two pairs of proportional sides.",
    reference: reasonRef("similarity.sas"),
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
            <p className="reference"><DualReason reasonId="similarity.aa" heading /></p>
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
            <p className="reference"><DualReason reasonId="similarity.sss" heading /></p>
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
            <p className="reference"><DualReason reasonId="similarity.sas" heading /></p>
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
              <p>∠QPR = ∠TSU <small><DualReason reasonId="geometry.given" heading /></small></p>
              <strong>∴ △PQR ∼ △STU</strong>
              <span><DualReason reasonId="similarity.sas" heading /></span>
            </div>
          </article>
          <article className="workedCard">
            <p className="questionLabel">EXAMPLE 2 · AAA</p>
            <NestedTrianglesDiagram />
            <div className="proof">
              <p>∠DAE = ∠BAC <small><DualReason reasonId="geometry.commonAngle" variant="textbook1" heading /></small></p>
              <p>∠ADE = ∠ABC <small><DualReason reasonId="parallel.corresponding" params={{"line1":"DE","line2":"BC"}} variant="textbook1" heading /></small></p>
              <p>∠AED = ∠ACB <small><DualReason reasonId="parallel.corresponding" params={{"line1":"DE","line2":"BC"}} variant="textbook1" heading /></small></p>
              <strong>∴ △ADE ∼ △ABC</strong>
              <span><DualReason reasonId="similarity.aa" heading /></span>
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
        .diagramPanel { min-width: 0; max-width: 100%; overflow-x: auto; min-height: 320px; display: grid; place-items: center; padding: 14px; border-radius: 20px; background: #f8fafc; border: 1px solid #e5edf5; }
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
        .workedCard { min-width: 0; overflow-x: auto; padding: 20px; border: 1px solid #dce7f2; border-radius: 20px; background: #f8fafc; }
        .proof { padding: 17px; border-radius: 15px; background: white; border: 1px solid #e5edf5; }
        .proof p { display: block; align-items: center; gap: 7px; margin: 8px 0; color: #405a76; }
        .proof small { display: block; margin-top: 8px; margin-left: 0; color: #73879d; text-align: right; }
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

function SimilarityDiagram({type}:{type:SimilarityCondition}){return <Pair mode={type==="SSS-P"?"proportional":type==="SAS-P"?"sas-proportional":"aaa"}/>;}

function WorkedSasDiagram(){return <Pair mode="worked-sas" names={["P","Q","R","S","T","U"]}/>;}

function NestedTrianglesDiagram(){return <Nested/>;}
