import Link from "next/link";
import katex from "katex";
import styles from "./lesson.module.css";

const home = "/maths/s3/chapter-7";
type Step = [statement: string, reason: string, shorthand: string];

function Proof({ steps }: { steps: Step[] }) {
  return <table><thead><tr><th>Statement</th><th>Reason</th></tr></thead>
    <tbody>{steps.map(([statement, reason, shorthand]) => <tr key={statement}>
      <td>{statement}</td><td>{reason}<small>HKDSE · {shorthand}</small></td>
    </tr>)}</tbody></table>;
}

type Example = {
  method: string; idea: string; title: string; question: string;
  steps: Step[]; conclusion: string; check: string; answer: string;
};

const examples: Example[] = [
  {
    method: "Match sides around the included angle",
    idea: "Start at the shared vertex. Compare the whole of each side with its partner in the smaller triangle. The partners can lie on different rays.",
    title: "Which vertex matches B?",
    question: "D lies on AB and E lies on AC. AB = 8 cm, AC = 12 cm, AD = 6 cm and AE = 4 cm. Prove that triangles ABC and AED are similar.",
    steps: [
      ["AB / AE = 8 / 4 = 2; AC / AD = 12 / 6 = 2", "The given lengths give the same ratio for two pairs of sides.", "ratio of corr. sides"],
      ["∠BAC = ∠EAD", "Both angles are formed by the same two rays from A.", "common ∠"],
      ["△ABC ∼ △AED", "Two pairs of corresponding sides are proportional and their included angles are equal.", "ratio of 2 sides, inc. ∠"]
    ],
    conclusion: "B matches E and C matches D. The scale factor from AED to ABC is 2.",
    check: "If ED is 5 cm, how long is BC?", answer: "BC corresponds to ED, so BC = 2 × 5 = 10 cm."
  },
  {
    method: "Draw a shared side",
    idea: "An auxiliary line can split a shape into two triangles. A shared side supplies one equality without another measurement.",
    title: "Prove the two side angles are equal",
    question: "In kite KLMN, KL = KN and LM = NM. Join K to M and prove that ∠KLM = ∠KNM.",
    steps: [
      ["KL = KN and LM = NM", "The two pairs of equal sides are given.", "given"],
      ["KM = KM", "The triangles share side KM.", "common side"],
      ["△KLM ≅ △KNM", "All three pairs of corresponding sides are equal.", "SSS"],
      ["∠KLM = ∠KNM", "Corresponding angles in congruent triangles are equal.", "corr. ∠s, ≅ △s"]
    ],
    conclusion: "The added diagonal lets us compare L with N.",
    check: "Which angle at K corresponds to ∠LKM?", answer: "∠NKM. The vertex L corresponds to N, while K and M match themselves."
  },
  {
    method: "Use the isosceles theorem in both directions",
    idea: "Equal sides give equal opposite angles. To prove two sides equal, work backwards and seek equal angles opposite them.",
    title: "Find the second isosceles triangle",
    question: "AB = AC. Point X lies inside triangle ABC and ∠ABX = ∠ACX. Prove that BX = CX.",
    steps: [
      ["∠ABC = ∠BCA", "The base angles of an isosceles triangle are equal.", "base ∠s, isos. △"],
      ["∠XBC = ∠BCX", "Subtract the given equal angles ABX and ACX from the equal base angles.", "subtract equal ∠s"],
      ["BX = CX", "Sides opposite equal angles in a triangle are equal.", "sides opp. eq. ∠s"]
    ],
    conclusion: "Triangle BXC is isosceles, with BC as its base.",
    check: "If ∠ABC = 68° and ∠ABX = 28°, find ∠BXC.", answer: "Both base angles of BXC are 40°. The remaining angle is 180° − 80° = 100°."
  },
  {
    method: "Identify the hypotenuse before using RHS",
    idea: "In a right-angled triangle the hypotenuse lies opposite the right angle. Match the hypotenuses and one further pair of sides.",
    title: "From perpendicular distances to equal sides",
    question: "M is the midpoint of BC. E lies on AB and F on AC. ME is perpendicular to AB, MF is perpendicular to AC, and ME = MF. Prove AB = AC.",
    steps: [
      ["∠BEM = ∠CFM = 90°", "Perpendicular lines meet at right angles.", "⊥ lines"],
      ["BM = CM; ME = MF", "A midpoint divides a segment into equal halves. The perpendicular distances are given equal.", "mid-pt.; given"],
      ["△BME ≅ △CMF", "The right-angled triangles have equal hypotenuses and one other pair of equal sides.", "RHS"],
      ["∠ABC = ∠ACB", "Corresponding angles at B and C are equal. BE lies along BA and CF lies along CA.", "corr. ∠s, ≅ △s"],
      ["AB = AC", "The sides opposite those equal angles are equal.", "sides opp. eq. ∠s"]
    ],
    conclusion: "The right angles belong to the small triangles. The equal base angles establish the result in the large triangle.",
    check: "Why is BM the hypotenuse of BME?", answer: "BM is opposite the right angle at E."
  },
  {
    method: "Carry one proof into the next",
    idea: "Use similarity to recover a missing length. To prove a right angle from lengths, compare the square of the longest side with the sum of the other two squares.",
    title: "Is the angle at D a right angle?",
    question: "D lies on AB. AB = 25 cm, AC = 15 cm, AD = 9 cm and BC = 20 cm. Prove that CD is perpendicular to AB.",
    steps: [
      ["AB / AC = AC / AD = 5 / 3", "The given side lengths give 25/15 = 15/9.", "ratio of 2 sides"],
      ["∠BAC = ∠CAD; △ABC ∼ △ACD", "The proportional sides include the same angle at A, so the triangles are similar.", "ratio of 2 sides, inc. ∠"],
      ["CD = 20 × 3 / 5 = 12 cm", "BC corresponds to CD. Lengths in the smaller triangle are three fifths of their partners.", "corr. sides, ∼ △s"],
      ["AD² + CD² = 9² + 12² = 225 = AC²", "The squares of the two shorter sides add to the square of the longest side.", "calculation"],
      ["∠ADC = 90°", "By the converse of Pythagoras’ theorem, the angle opposite AC is a right angle.", "converse of Pyth. theorem"]
    ],
    conclusion: "AD lies on AB, so CD is perpendicular to AB.",
    check: "Could you mark a right angle at D before the calculation?", answer: "The givens only put D on AB. The equality of the squared lengths justifies the right-angle mark."
  }
];

export default function MoreProofsPage() {
  return <main className={styles.lesson}>
    <Link href={home}>← Back to Chapter 7</Link>
    <header><strong>SECTION 7.1</strong><h1>More Proofs on Triangles</h1>
      <p>How can you prove a triangle is isosceles when neither side has a length marked? Follow the evidence from the given facts to the conclusion.</p></header>
    {examples.map((example, i) => <div key={example.title}>
      <section className={styles.learning}><strong>LEARNING CARD {i + 1}</strong><h2>{example.method}</h2><p>{example.idea}</p></section>
      <section><strong>WORKED EXAMPLE {i + 1}</strong><h2>{example.title}</h2><p>{example.question}</p>
        <img className={styles.figure} src={`/maths/s3/chapter-7/proof-${i + 1}.svg`} alt={example.question} width="320" height="180" />
        {i === 0 && <p aria-label="AB over AE equals AC over AD" dangerouslySetInnerHTML={{__html: katex.renderToString(String.raw`\frac{AB}{AE}=\frac{8}{4}=2,\qquad\frac{AC}{AD}=\frac{12}{6}=2`)}} />}
        <Proof steps={example.steps}/><p className={styles.answer}>{example.conclusion}</p>
        <p><b>Try it.</b> {example.check}</p><details><summary>Show reasoning</summary><p>{example.answer}</p></details>
      </section>
    </div>)}
    <section><h2>Common mistakes</h2><p>In Example 1, pairing B with D gives 8/6 while pairing C with E gives 12/4. These ratios differ. Write the matching vertices before setting up a proportion.</p><p>Equal angles alone establish similarity. To claim congruence you also need enough information to fix the size.</p></section>
    <section className={styles.learning}><h2>Section Summary</h2><p>Mark the givens, name the triangles in matching order and justify each equality. After proving similarity or congruence, identify the corresponding parts that establish the requested result.</p><Link href={home}>Return to Chapter 7 →</Link></section>
  </main>;
}
