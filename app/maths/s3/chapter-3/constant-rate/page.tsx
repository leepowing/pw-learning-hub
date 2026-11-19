import Link from "next/link";
import styles from "../section.module.css";

export default function ConstantRate() {
  return <main className={styles.lesson}>
    <Link href="/maths/s3/chapter-3">← Chapter 3 overview</Link>
    <header><small>S3 · SECTION 3.2</small><h1>Increasing or Decreasing at a Constant Rate</h1><p>A plant grows by 20% each year. If it gains 3 cm in the first year, how much will it gain in the second?</p></header>
    <nav aria-label="Lesson topics"><a href="#growth">Growth</a><a href="#periods">Counting periods</a><a href="#decay">Decay</a><a href="#practice">Class practice</a></nav>
    <section id="growth"><h2>A. Increasing at a constant rate</h2><p>A 15 cm plant grows to 15 × 1.20 = 18 cm after one year. In the second year it gains 20% of 18 cm, or 3.6 cm. Its new height is 21.6 cm. Each year contributes another factor of 1.20.</p>
    <p className={styles.formula}>After n periods, A = P(1 + R/100)<sup>n</sup>.</p><p>P is the starting value and R is the percentage increase per period. For a population of 45,000 growing by 2% annually, the five-year estimate is 45,000 × 1.02⁵ ≈ 49,684 people.</p></section>
    <section id="periods"><h2>Count the periods and work backwards</h2><p>A painting rises in value by 10% every two years. Six years contain 6 ÷ 2 = 3 periods. Each original dollar is now worth 1.10³ dollars.</p><article><h3>How much did the owner gain?</h3><p>If the painting is now worth $79,860, its starting value was $79,860 ÷ 1.10³ = $60,000. The gain was $19,860.</p></article></section>
    <section id="decay"><h2>B. Decreasing at a constant rate</h2><p>A factory makes 4,600 toys this week. If weekly output falls by 15% every three weeks, it retains 85% of the previous output each period.</p><p className={styles.formula}>After n periods, A = P(1 − R/100)<sup>n</sup>.</p><p>After 12 weeks there have been four reductions. Weekly output is 4,600 × 0.85⁴ ≈ 2,400 toys to the nearest ten.</p>
    <article><h3>Depreciation</h3><p>A bag loses 20% of its value every six months. After one year it retains 0.80² = 64% of its purchase price. If it is now worth $1,472, it originally cost $1,472 ÷ 0.64 = $2,300. Its depreciation is $828, or 36% of the purchase price.</p></article></section>
    <section id="practice"><h2>Class practice</h2><p>Identify the multiplier and the number of periods before opening each answer.</p>
    {[
      ["A tank holds 200 L. Its contents grow by 5% every month. How much does it hold after two months?", "200 × 1.05² = 220.5 L."],
      ["A collection grows by 10% every quarter. After six months it contains 363 items. How many were there initially?", "Six months contain two quarters. Divide 363 by 1.10² to recover 300 items."],
      ["A flock fell from 1,500 to 1,470 birds in one year. At the same rate, how many birds would there be five years from now, to the nearest ten?", "The annual decrease is 30 ÷ 1,500 = 2%. Start from the current count. 1,470 × 0.98⁵ ≈ 1,330 birds."],
      ["A camera worth $4,000 loses 10% every six months. How much value does it lose over one year?", "Its remaining value is $4,000 × 0.90² = $3,240. The loss is $760."]
    ].map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <Link href="/maths/s3/chapter-3">← Chapter 3 overview</Link>
  </main>;
}
