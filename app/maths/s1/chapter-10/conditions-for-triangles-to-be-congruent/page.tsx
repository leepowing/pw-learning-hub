"use client";
import { reasonRef } from "@/data/maths/reasons/reasonBank";
import { DualReason, ReasonContent } from "@/components/maths/DualReason";



import { Pair, Nested } from "@/components/maths/Chapter10Geometry";

import { useRouter } from "next/navigation";

type Condition = "SSS" | "SAS" | "ASA" | "AAS" | "RHS";

const conditions: Array<{
  code: Condition;
  name: string;
  description: string;
  reminder: string;
}> = [
  { code: "SSS", name: "Side–Side–Side", description: "All three pairs of corresponding sides are equal.", reminder: "No angle information is needed." },
  { code: "SAS", name: "Side–Angle–Side", description: "Two pairs of corresponding sides and the included angles are equal.", reminder: "The angle must be between the two known sides." },
  { code: "ASA", name: "Angle–Side–Angle", description: "Two pairs of corresponding angles and the included sides are equal.", reminder: "The side lies between the two known angles." },
  { code: "AAS", name: "Angle–Angle–Side", description: "Two pairs of corresponding angles and a non-included pair of sides are equal.", reminder: "The known side is not between the two known angles." },
  { code: "RHS", name: "Right angle–Hypotenuse–Side", description: "Both triangles are right-angled, and their hypotenuses and one other pair of sides are equal.", reminder: "RHS is only used for right-angled triangles." },
];

export default function ConditionsForTrianglesToBeCongruentPage() {
  const router = useRouter();

  return (
    <main className="page">
      <button className="backButton" onClick={() => router.push("/maths/s1/chapter-10")}>
        ← Back to Chapter 10
      </button>

      <header className="hero">
        <p className="eyebrow">S1 · CHAPTER 10 · SECTION 2</p>
        <h1>Conditions for Triangles to be Congruent</h1>
        <p className="introduction">
          We do not need to compare every side and every angle. Any one of five
          sufficient conditions can prove that two triangles are congruent.
        </p>
      </header>

      <section className="lessonCard">
        <LessonHeading number="1" label="SUFFICIENT INFORMATION" title="Five conditions can prove that two triangles are congruent" />
        <div className="conditionOverview">
          {conditions.map((item) => (
            <article key={item.code} className="overviewCard">
              <span>{item.code}</span>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
        <div className="memoryStrip">
          <strong>Important:</strong> corresponding parts must be matched in the same
          order before a congruence condition is chosen.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="2" label="THREE SIDES OR TWO SIDES" title="Use SSS or SAS when enough side information is given" />
        <div className="ruleGrid">
          <RuleCard item={conditions[0]} />
          <RuleCard item={conditions[1]} />
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="3" label="TWO ANGLES AND ONE SIDE" title="Distinguish ASA from AAS by the position of the side" />
        <div className="ruleGrid">
          <RuleCard item={conditions[2]} />
          <RuleCard item={conditions[3]} />
        </div>
        <div className="compareStrip">
          <div><b>ASA</b><span>The known side is <strong>between</strong> the two known angles.</span></div>
          <div><b>AAS</b><span>The known side is <strong>not between</strong> the two known angles.</span></div>
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="4" label="RIGHT-ANGLED TRIANGLES" title="RHS is a special condition for right-angled triangles" />
        <div className="rhsLayout">
          <div className="diagramPanel"><ConditionDiagram type="RHS" /></div>
          <div className="factPanel">
            <div className="codeBadge">RHS</div>
            <h3>Right angle–Hypotenuse–Side</h3>
            <ul>
              <li>Both triangles contain a right angle.</li>
              <li>The corresponding hypotenuses are equal.</li>
              <li>One other pair of corresponding sides is equal.</li>
            </ul>
            <p className="reference"><DualReason reasonId="congruence.rhs" heading /></p>
          </div>
        </div>
        <div className="tipStrip"><strong>Remember:</strong> the hypotenuse is the side opposite the right angle.</div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="5" label="CHOOSING A CONDITION" title="Look only at the information marked in the diagram" />
        <div className="choiceTable" role="table" aria-label="Guide for choosing a congruence condition">
          <div className="tableHead" role="row"><span>Information given</span><span>Condition</span><span>Position check</span></div>
          <div role="row"><span>3 sides</span><strong>SSS</strong><span>All three side pairs</span></div>
          <div role="row"><span>2 sides + 1 angle</span><strong>SAS</strong><span>Angle between the sides</span></div>
          <div role="row"><span>2 angles + 1 side</span><strong>ASA</strong><span>Side between the angles</span></div>
          <div role="row"><span>2 angles + 1 side</span><strong>AAS</strong><span>Side not between the angles</span></div>
          <div role="row"><span>Right angle + hypotenuse + side</span><strong>RHS</strong><span>Right-angled triangles only</span></div>
        </div>
        <div className="warningBox">
          <strong>Not sufficient:</strong> AAA proves only that triangles are similar. SSA
          does not generally prove congruence. Do not use AAA or SSA as congruence conditions.
        </div>
      </section>

      <section className="lessonCard">
        <LessonHeading number="6" label="WORKED EXAMPLES" title="State the corresponding facts before naming the condition" />
        <div className="workedGrid">
          <article className="workedCard">
            <p className="questionLabel">EXAMPLE 1</p>
            <WorkedSSSDiagram />
            <div className="proof">
              <p>AB = DE <small><DualReason reasonId="geometry.given" heading /></small></p>
              <p>BC = EF <small><DualReason reasonId="geometry.given" heading /></small></p>
              <p>AC = DF <small><DualReason reasonId="geometry.given" heading /></small></p>
              <strong>∴ △ABC ≅ △DEF</strong>
              <span><DualReason reasonId="congruence.sss" heading /></span>
            </div>
          </article>
          <article className="workedCard">
            <p className="questionLabel">EXAMPLE 2</p>
            <WorkedRhsDiagram />
            <div className="proof">
              <p>∠PQR = ∠XYZ = 90° <small><DualReason reasonId="geometry.given" heading /></small></p>
              <p>PR = XZ <small><DualReason reasonId="geometry.givenHypotenuses" heading /></small></p>
              <p>PQ = XY <small><DualReason reasonId="geometry.given" heading /></small></p>
              <strong>∴ △PQR ≅ △XYZ</strong>
              <span><DualReason reasonId="congruence.rhs" heading /></span>
            </div>
          </article>
        </div>
      </section>

      <section className="summaryCard">
        <p className="eyebrow">SECTION SUMMARY</p>
        <h2>The five congruence conditions</h2>
        <div className="summaryGrid">
          {conditions.map((item) => (
            <div key={item.code}><span>{item.code}</span><p>{item.name}</p></div>
          ))}
        </div>
      </section>

      <button className="finishButton" onClick={() => router.push("/maths/s1/chapter-10")}>
        Finish Section 2 →
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
        .eyebrow, .panelLabel, .questionLabel { margin: 0 0 8px; color: #0f766e; font-size: 14px; font-weight: 900; letter-spacing: .12em; }
        h1 { margin: 0; font-size: clamp(35px, 5vw, 58px); line-height: 1.04; letter-spacing: -.035em; }
        .introduction { max-width: 900px; margin: 18px 0 0; color: #49627f; font-size: 20px; line-height: 1.62; }
        .lessonCard { background: white; border: 1px solid #dce7f2; border-radius: 25px; padding: 30px; margin-bottom: 22px; box-shadow: 0 12px 32px rgba(16,34,63,.055); }
        .lessonHeading { display: grid; grid-template-columns: 54px 1fr; gap: 16px; align-items: center; margin-bottom: 24px; }
        .lessonNumber { width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; background: #ccfbf1; color: #0f766e; font-size: 24px; font-weight: 900; }
        .lessonLabel { margin: 0 0 4px; color: #7c3aed; font-size: 13px; font-weight: 900; letter-spacing: .11em; }
        .lessonHeading h2 { margin: 0; font-size: clamp(24px, 3.1vw, 34px); line-height: 1.15; }
        .conditionOverview { display: grid; grid-template-columns: repeat(5, 1fr); gap: 13px; }
        .overviewCard { padding: 18px 12px; text-align: center; border-radius: 17px; background: #f8fafc; border: 1px solid #dce7f2; }
        .overviewCard span, .codeBadge { display: grid; place-items: center; width: 66px; height: 48px; margin: 0 auto 10px; border-radius: 13px; background: #0f766e; color: white; font-size: 20px; font-weight: 900; }
        .overviewCard strong { color: #405a76; font-size: 14px; line-height: 1.35; }
        .memoryStrip, .tipStrip, .warningBox { margin-top: 20px; border-radius: 15px; padding: 17px 20px; color: #334e68; line-height: 1.55; }
        .memoryStrip, .tipStrip { background: #effcf9; border-left: 5px solid #14b8a6; }
        .warningBox { background: #fff7ed; border-left: 5px solid #f59e0b; }
        .ruleGrid, .workedGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .ruleCard { overflow: hidden; border: 1px solid #dce7f2; border-radius: 21px; background: #fbfdff; }
        .ruleTitle { display: grid; grid-template-columns: 72px 1fr; gap: 15px; align-items: center; padding: 20px; background: linear-gradient(135deg, #ecfdf5, #f5f3ff); }
        .ruleTitle .codeBadge { margin: 0; }
        .ruleTitle h3 { margin: 0 0 4px; font-size: 22px; }
        .ruleTitle p { margin: 0; color: #5a7088; line-height: 1.45; }
        .ruleDiagram { padding: 10px 16px; background: white; }
        .ruleNote { margin: 0; padding: 15px 20px; color: #405a76; background: #f8fafc; border-top: 1px solid #e5edf5; }
        .reference { margin: 11px 20px 18px; color: #0f766e; font-size: 14px; font-weight: 850; }
        .conditionSvg { display: block; width: 100%; height: auto; max-height: 255px; }
        .compareStrip { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 19px; }
        .compareStrip div { display: grid; grid-template-columns: 65px 1fr; gap: 13px; align-items: center; padding: 16px; border-radius: 15px; background: #f5f3ff; color: #405a76; }
        .compareStrip b { display: grid; place-items: center; height: 42px; border-radius: 11px; background: #7c3aed; color: white; }
        .rhsLayout { display: grid; grid-template-columns: 1.15fr .85fr; gap: 20px; }
        .diagramPanel { min-height: 300px; display: grid; place-items: center; padding: 15px; border-radius: 20px; background: #f8fafc; border: 1px solid #e5edf5; }
        .factPanel { display: flex; flex-direction: column; justify-content: center; padding: 26px; border-radius: 20px; background: #ecfdf5; border: 1px solid #99f6e4; }
        .factPanel .codeBadge { margin: 0 0 10px; }
        .factPanel h3 { margin: 0 0 9px; font-size: 25px; }
        .factPanel ul { margin: 5px 0; padding-left: 22px; color: #405a76; line-height: 1.7; }
        .factPanel .reference { margin-left: 0; }
        .choiceTable { overflow: hidden; border: 1px solid #dce7f2; border-radius: 18px; }
        .choiceTable > div { display: grid; grid-template-columns: 1.2fr .45fr 1.35fr; }
        .choiceTable span, .choiceTable strong { padding: 15px 17px; border-top: 1px solid #e5edf5; }
        .choiceTable strong { color: #7c3aed; font-size: 18px; }
        .choiceTable .tableHead { background: #0f766e; color: white; font-weight: 850; }
        .choiceTable .tableHead span { border-top: 0; }
        .workedCard { overflow: hidden; padding: 20px; border: 1px solid #dce7f2; border-radius: 20px; background: #f8fafc; }
        .workedSvg { display: block; width: 100%; height: auto; max-height: 245px; margin: 2px auto 12px; }
        .proof { padding: 17px; border-radius: 15px; background: white; border: 1px solid #e5edf5; }
        .proof p { display: block; justify-content: space-between; gap: 10px; margin: 7px 0; color: #405a76; }
        .proof small { color: #73879d; }
        .proof strong { display: block; margin-top: 13px; color: #0f766e; font-family: Georgia, serif; font-size: 22px; }
        .proof span { display: block; margin-top: 7px; color: #0f766e; font-size: 13px; font-weight: 800; }
        .summaryCard { padding: 32px; border-radius: 25px; background: linear-gradient(135deg, #0f766e, #115e59); color: white; margin-top: 26px; }
        .summaryCard .eyebrow { color: #99f6e4; }
        .summaryCard h2 { margin: 0 0 20px; font-size: 31px; }
        .summaryGrid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
        .summaryGrid div { min-height: 112px; padding: 15px; border-radius: 16px; background: rgba(255,255,255,.12); }
        .summaryGrid span { display: inline-grid; place-items: center; min-width: 52px; height: 34px; padding: 0 9px; border-radius: 10px; background: #ccfbf1; color: #0f766e; font-weight: 900; }
        .summaryGrid p { margin: 10px 0 0; font-size: 14px; font-weight: 750; }
        .finishButton { display: block; margin-top: 24px; border: 0; border-radius: 16px; padding: 17px 30px; background: #7c3aed; color: white; font-weight: 900; cursor: pointer; box-shadow: 0 10px 24px rgba(124,58,237,.2); }
        .finishButton:hover { background: #6d28d9; transform: translateY(-1px); }
        @media (max-width: 900px) {
          .conditionOverview, .summaryGrid { grid-template-columns: repeat(3, 1fr); }
          .rhsLayout { grid-template-columns: 1fr; }
        }
        @media (max-width: 720px) {
          .ruleGrid, .workedGrid, .compareStrip { grid-template-columns: 1fr; }
          .conditionOverview, .summaryGrid { grid-template-columns: repeat(2, 1fr); }
          .choiceTable { overflow-x: auto; }
          .choiceTable > div { min-width: 660px; }
        }
        @media (max-width: 520px) {
          .page { padding: 22px 16px 55px; }
          .hero, .lessonCard, .summaryCard { padding: 22px 18px; border-radius: 20px; }
          .lessonHeading { grid-template-columns: 45px 1fr; gap: 12px; }
          .lessonNumber { width: 45px; height: 45px; border-radius: 13px; }
          .conditionOverview, .summaryGrid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}

function LessonHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="lessonHeading"><div className="lessonNumber">{number}</div><div><p className="lessonLabel">{label}</p><h2>{title}</h2></div></div>;
}

function RuleCard({ item }: { item: (typeof conditions)[number] }) {
  return (
    <article className="ruleCard">
      <div className="ruleTitle"><div className="codeBadge">{item.code}</div><div><h3>{item.name}</h3><p>{item.description}</p></div></div>
      <div className="ruleDiagram"><ConditionDiagram type={item.code} /></div>
      <p className="ruleNote"><strong>Position check:</strong> {item.reminder}</p>
      <p className="reference"><ReasonContent heading>{({SSS:reasonRef("congruence.sss"),SAS:reasonRef("congruence.sas"),ASA:reasonRef("congruence.asa"),AAS:reasonRef("congruence.asaFromAas"),RHS:reasonRef("congruence.rhs")})[item.code]}</ReasonContent></p>
    </article>
  );
}

function ConditionDiagram({type}:{type:Condition}){return <Pair mode={type.toLowerCase() as "sss"|"sas"|"asa"|"aas"|"rhs"}/>;}

function WorkedSSSDiagram(){return <Pair mode="sss" names={["A","B","C","D","E","F"]}/>;}

function WorkedRhsDiagram(){return <Pair mode="rhs" names={["Q","P","R","Y","X","Z"]}/>;}
