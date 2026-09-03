"use client";

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
            <p className="reference">[Reference: RHS]</p>
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
              <p>AB = DE <small>(given)</small></p>
              <p>BC = EF <small>(given)</small></p>
              <p>AC = DF <small>(given)</small></p>
              <strong>∴ △ABC ≅ △DEF</strong>
              <span>[Reference: SSS]</span>
            </div>
          </article>
          <article className="workedCard">
            <p className="questionLabel">EXAMPLE 2</p>
            <WorkedRhsDiagram />
            <div className="proof">
              <p>∠PQR = ∠XYZ = 90° <small>(given)</small></p>
              <p>PR = XZ <small>(given hypotenuses)</small></p>
              <p>PQ = XY <small>(given)</small></p>
              <strong>∴ △PQR ≅ △XYZ</strong>
              <span>[Reference: RHS]</span>
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
        .proof p { display: flex; justify-content: space-between; gap: 10px; margin: 7px 0; color: #405a76; }
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
      <p className="reference">[Reference: {item.code}]</p>
    </article>
  );
}

function ConditionDiagram({ type }: { type: Condition }) {
  const rhs = type === "RHS";
  return (
    <svg className="conditionSvg" viewBox="0 0 720 280" role="img" aria-label={`${type} congruence condition shown on two triangles`}>
      <defs><style>{`.tri{fill:#ecfeff;stroke:#0f766e;stroke-width:6;stroke-linejoin:round}.tick{stroke:#7c3aed;stroke-width:5;stroke-linecap:round}.arc{fill:none;stroke:#f59e0b;stroke-width:5;stroke-linecap:round}.label{font:800 21px Inter,sans-serif;fill:#10223f}.rightSq{fill:none;stroke:#f59e0b;stroke-width:5}`}</style></defs>
      {rhs ? <>
        <path className="tri" d="M80 225 L80 55 L300 225 Z" /><path className="tri" d="M420 225 L420 55 L640 225 Z" />
        <text className="label" x="48" y="250">A</text><text className="label" x="60" y="43">B</text><text className="label" x="307" y="250">C</text>
        <text className="label" x="388" y="250">X</text><text className="label" x="400" y="43">Y</text><text className="label" x="647" y="250">Z</text>
        <path className="rightSq" d="M80 199 h26 v26 M420 199 h26 v26" />
        <path className="tick" d="M80 132 h18 M420 132 h18" />
        <path className="tick" d="M183 122 l12 -15 M194 131 l12 -15 M523 122 l12 -15 M534 131 l12 -15" />
      </> : <>
        <path className="tri" d="M65 225 L180 50 L305 225 Z" /><path className="tri" d="M410 225 L525 50 L650 225 Z" />
        <text className="label" x="36" y="252">A</text><text className="label" x="171" y="37">B</text><text className="label" x="312" y="252">C</text>
        <text className="label" x="381" y="252">X</text><text className="label" x="516" y="37">Y</text><text className="label" x="657" y="252">Z</text>
        {(type === "SSS" || type === "SAS") && <path className="tick" d="M112 151 l15 10 M457 151 l15 10 M235 124 l15 -10 M244 137 l15 -10 M580 124 l15 -10 M589 137 l15 -10" />}
        {type === "SSS" && <path className="tick" d="M170 225 v-17 M185 225 v-17 M200 225 v-17 M515 225 v-17 M530 225 v-17 M545 225 v-17" />}
        {(type === "SAS" || type === "ASA") && <path className="arc" d="M163 76 Q180 89 197 76 M508 76 Q525 89 542 76" />}
        {(type === "ASA" || type === "AAS") && <path className="arc" d="M86 225 Q82 209 73 197 M431 225 Q427 209 418 197" />}
        {type === "AAS" && <path className="arc" d="M283 225 Q286 208 296 196 M628 225 Q631 208 641 196" />}
        {type === "ASA" && <path className="tick" d="M112 151 l15 10 M457 151 l15 10" />}
        {type === "AAS" && <path className="tick" d="M235 124 l15 -10 M580 124 l15 -10" />}
      </>}
    </svg>
  );
}

function WorkedSSSDiagram() {
  return (
    <svg className="workedSvg" viewBox="0 0 640 250" role="img" aria-label="Two triangles with three pairs of equal corresponding sides">
      <path d="M45 210 L150 35 L270 210 Z M370 210 L475 35 L595 210 Z" fill="#ecfeff" stroke="#0f766e" strokeWidth="6" strokeLinejoin="round" />
      <g fill="#10223f" fontSize="20" fontWeight="800"><text x="20" y="235">A</text><text x="142" y="26">B</text><text x="277" y="235">C</text><text x="345" y="235">D</text><text x="467" y="26">E</text><text x="602" y="235">F</text></g>
      <g stroke="#7c3aed" strokeWidth="5" strokeLinecap="round"><path d="M88 133 l15 9 M413 133 l15 9"/><path d="M208 119 l14 -9 M216 132 l14 -9 M533 119 l14 -9 M541 132 l14 -9"/><path d="M140 210 v-17 M155 210 v-17 M170 210 v-17 M465 210 v-17 M480 210 v-17 M495 210 v-17"/></g>
    </svg>
  );
}

function WorkedRhsDiagram() {
  return (
    <svg className="workedSvg" viewBox="0 0 640 250" role="img" aria-label="Two right-angled triangles with equal hypotenuses and one equal side">
      <path d="M50 210 L50 45 L270 210 Z M370 210 L370 45 L590 210 Z" fill="#ecfeff" stroke="#0f766e" strokeWidth="6" strokeLinejoin="round" />
      <g fill="#10223f" fontSize="20" fontWeight="800"><text x="26" y="235">Q</text><text x="27" y="35">P</text><text x="277" y="235">R</text><text x="346" y="235">Y</text><text x="347" y="35">X</text><text x="597" y="235">Z</text></g>
      <g fill="none" stroke="#f59e0b" strokeWidth="5"><path d="M50 184 h26 v26 M370 184 h26 v26"/></g>
      <g stroke="#7c3aed" strokeWidth="5" strokeLinecap="round"><path d="M50 122 h18 M370 122 h18"/><path d="M153 119 l12 -15 M164 128 l12 -15 M473 119 l12 -15 M484 128 l12 -15"/></g>
    </svg>
  );
}
