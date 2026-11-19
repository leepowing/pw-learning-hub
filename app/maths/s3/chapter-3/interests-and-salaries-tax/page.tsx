import Link from "next/link";
import styles from "../section.module.css";

const practice = [
  ["A $6,000 deposit earns 4% p.a. simple interest for nine months. Find the interest and final amount.", "Nine months is 0.75 years. Interest = 6,000 × 0.04 × 0.75 = $180. The amount is $6,180."],
  ["A loan earns the lender $720 simple interest over three years at 6% p.a. How much was lent?", "Each dollar earns 0.06 × 3 = $0.18. The principal is 720 ÷ 0.18 = $4,000."],
  ["A $5,000 deposit grows to $5,900 in three years under simple interest. Find the annual rate.", "Interest is $900 over three years, or $300 each year. The annual rate is 300 ÷ 5,000 × 100% = 6%."],
  ["How many months will $8,000 take to earn $200 at 5% p.a. simple interest?", "One year earns $400. The time is 200 ÷ 400 = 0.5 years, or six months."],
  ["An account earns $820 compound interest in two years at 5% compounded yearly. Find its principal.", "Interest is P(1.05² − 1). Divide 820 by 0.1025 to get $8,000."],
  ["A $5,000 loan is repaid in one payment after one year. Which costs less, 6% p.a. compounded monthly or 6.1% p.a. compounded annually?", "Monthly: 5,000 × 1.005¹² ≈ $5,308.39. Annually: 5,000 × 1.061 = $5,305. The annual offer costs about $3.39 less."],
  ["In a practice tax schedule, the first $40,000 of chargeable income is taxed at 3% and the rest at 8%. Find the tax on $55,000.", "The first band contributes $1,200. Only $15,000 reaches the second band, contributing $1,200. Total tax is $2,400."]
];

export default function InterestsAndSalariesTax() {
  return <main className={styles.lesson}>
    <Link href="/maths/s3/chapter-3">← Chapter 3 overview</Link>
    <header><small>S3 · SECTION 3.3</small><h1>Interests and Salaries Tax</h1>
      <p>Two accounts both pay 5% per year. Why can the same deposit earn different amounts in the second year?</p></header>
    <nav aria-label="Lesson topics"><a href="#simple">Simple interest</a><a href="#compound">Compound interest</a><a href="#tax">Salaries tax</a><a href="#practice">Class practice</a></nav>
    <section id="simple"><h2>A. Simple interest</h2>
      <p>The principal P is the amount deposited or borrowed. A rate of 5% p.a. means five cents per dollar per year. With simple interest, each year earns interest on the original principal.</p>
      <p className={styles.formula}>I = Prt &nbsp; · &nbsp; A = P + I = P(1 + rt)</p>
      <p>Use the annual rate r as a decimal and the time t in years. I is the interest alone. A is the final amount, including the principal.</p>
      <article><h3>A deposit held for part of a year</h3><p>A $2,400 deposit at 5% earns $120 in one year. For eight months it earns $120 × 8/12 = $80. The saver receives $2,480.</p></article>
    </section>
    <section id="compound"><h2>B. Compound interest</h2><p>When interest stays in the account, the next period starts with the previous closing balance. Follow a $2,000 deposit at 5% p.a. in two accounts.</p>
      <table><thead><tr><th>End of year</th><th>Simple balance</th><th>Annually compounded balance</th></tr></thead>
      <tbody><tr><th>1</th><td>$2,100</td><td>$2,100</td></tr><tr><th>2</th><td>$2,200</td><td>$2,205</td></tr><tr><th>3</th><td>$2,300</td><td>$2,315.25</td></tr></tbody></table>
      <p>In year two the extra $5 is the interest earned on the first year’s $100 of interest.</p>
      <p className={styles.formula}>A = P(1 + i)<sup>n</sup> &nbsp; · &nbsp; I = A − P</p>
      <article><h3>Match the rate to the period</h3><p>For a quoted nominal annual rate r compounded m times a year, the rate per period is i = r/m. Over t years there are n = mt periods. Half-yearly, quarterly and monthly compounding mean 2, 4 and 12 periods per year.</p>
      <p>At 8% p.a. compounded quarterly for 18 months, use 2% per quarter for six quarters. A $3,000 deposit grows to 3,000 × 1.02⁶ ≈ $3,378.49, so the interest is $378.49.</p></article>
    </section>
    <section id="tax"><h2>C. Salaries tax</h2><p>Use the allowances and rates given in the question. The following figures form a fictional practice schedule.</p>
      <article><h3>Which part of the salary reaches the higher band?</h3><p>A worker earns $200,000 and has a $120,000 allowance. This leaves $80,000 of chargeable income. Suppose the first $50,000 is taxed at 2% and the remainder at 6%.</p>
      <p className={styles.formula}>Tax = $50,000 × 2% + $30,000 × 6% = $2,800</p>
      <p>The higher rate applies to the $30,000 above the threshold. Add the tax from both bands to find the total.</p></article></section>
    <section id="practice"><h2>Class practice</h2><p>Work out each answer, then open the question to check your method.</p>
      {practice.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <Link href="/maths/s3/chapter-3">← Chapter 3 overview</Link>
  </main>;
}
