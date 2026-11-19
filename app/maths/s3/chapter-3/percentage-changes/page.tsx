import Link from "next/link";
import styles from "../section.module.css";

const practice = [
  ["A tank holds 90 L. Its contents increase by 10% and then decrease by 5%. How much remains?", "90 × 1.10 × 0.95 = 94.05 L. The 5% loss is based on 99 L."],
  ["A budget of $1,200 falls by 25%, then by 12%. Find the final budget.", "$1,200 × 0.75 × 0.88 = $792."],
  ["A 48 m roll becomes 20% shorter, then increases in length by 20%. Find its final length.", "48 × 0.80 × 1.20 = 46.08 m. The combined multiplier is 0.96."],
  ["A crop yield rises by 30% and falls by 10%. Find the overall change.", "1.30 × 0.90 = 1.17, so the final yield is 117% of the original: a 17% increase."],
  ["After increases of 10% and 5%, a club has 231 members. How many did it have originally?", "231 ÷ (1.10 × 1.05) = 200 members."],
  ["A triangle has base 15 cm and perpendicular height 10 cm. The base grows by 20% and the height falls by 15%. Find both areas and the percentage change.", "The original area is ½ × 15 × 10 = 75 cm². The new base is 18 cm and the height is 8.5 cm. The new area is 76.5 cm², an increase of 1.5 ÷ 75 × 100% = 2%."],
  ["A centre has juniors and adults in the ratio 4 : 1. Junior membership falls by 10% and adult membership rises by 20%. Find the overall change.", "Start with 400 juniors and 100 adults. The new total is 360 + 120 = 480. Compared with 500 this is a 4% decrease."]
];

export default function PercentageChanges() {
  return <main className={styles.lesson}>
    <Link href="/maths/s3/chapter-3">← Chapter 3 overview</Link>
    <header><small>S3 · SECTION 3.1</small><h1>More about Percentage Changes</h1>
      <p>Which amount represents 100%? Identify it at each step to find a final value, work backwards or compare two totals.</p></header>
    <nav aria-label="Lesson topics"><a href="#warmup">Pre-learning</a><a href="#successive">Successive changes</a><a href="#components">Different components</a><a href="#practice">Class practice</a></nav>
    <section id="warmup"><h2>Pre-learning · One change</h2>
      <p>When a value falls from 80 to 76, the loss is 4 out of the original 80. The percentage decrease is 4 ÷ 80 × 100% = 5%.</p>
      <p className={styles.formula}>Percentage change = (new value − original value) ÷ original value × 100%</p>
      <details><summary>A $1,000 budget falls by 6%. What fraction of the budget remains?</summary><p>94% remains. Multiply $1,000 by 0.94 to get $940.</p></details></section>
    <section id="successive"><h2>A. Successive percentage changes</h2>
      <p>Start with $100. A 20% increase takes it to $120. A 20% discount now saves $24, so the final price is $96. The two percentages act on different amounts.</p>
      <p className={styles.formula}>An increase of x% followed by a decrease of y% takes P to P × (1 + x/100) × (1 − y/100).</p>
      <article><h3>Follow three changes</h3><p>A $500 bouquet is reduced by 10%, reduced by 20% and then marked up by 30%.</p>
      <table><thead><tr><th>Stage</th><th>Working</th><th>Price</th></tr></thead><tbody>
        <tr><th>First reduction</th><td>$500 × 0.90</td><td>$450</td></tr>
        <tr><th>Second reduction</th><td>$450 × 0.80</td><td>$360</td></tr>
        <tr><th>Mark-up</th><td>$360 × 1.30</td><td>$468</td></tr>
      </tbody></table></article>
      <article><h3>Work backwards</h3><p>A lamp is worth $2,835 after a 5% increase followed by a 40% decrease. Each original dollar is now worth 1.05 × 0.60 = $0.63. Divide the final value by this multiplier to recover the original price: $2,835 ÷ 0.63 = $4,500.</p></article>
      <article><h3>Find the overall change without a starting amount</h3><p>An income falls by 22%, then rises by 10%. Starting with $100 gives $78 and then $85.80. The overall change is a 14.2% decrease. Any positive starting income gives the same multiplier, 0.78 × 1.10 = 0.858.</p></article>
    </section>
    <section id="components"><h2>B. Percentage changes of different components</h2>
      <article><h3>When the total is a sum</h3><p>A club has 50 boys and 36 girls. After a 16% decrease in boys and a 25% increase in girls, there are 50 × 0.84 = 42 boys and 36 × 1.25 = 45 girls. Add the new counts: 87 members, up from 86.</p></article>
      <article><h3>When the quantity is a product</h3><p>A parallelogram has base 20 cm and perpendicular height 8 cm. Its base increases by 17% while its height decreases by 30%. Its area changes from 160 cm² to 23.4 × 5.6 = 131.04 cm².</p><p className={styles.formula}>Area multiplier = 1.17 × 0.70 = 0.819. The area decreases by 18.1%.</p></article>
      <article><h3>When only a ratio is given</h3><p>Material, labour and packing costs are in the ratio 3 : 2 : 5. Use an original total of $100, giving $30, $20 and $50. Material rises by 14%, labour falls by 11% and packing rises by 20%.</p><p>The new total is $34.20 + $17.80 + $60 = $112. The overall increase is 12%. Packing accounts for half the starting cost, so its rate carries more weight than either of the other two.</p></article>
    </section>
    <section id="practice"><h2>Class practice 3.1</h2>{practice.map(([question, answer], i) =>
      <article key={question}><h3>{i + 1}. {question}</h3><details><summary>Check answer</summary><p>{answer}</p></details></article>)}</section>
    <Link href="/maths/s3/chapter-3">← Chapter 3 overview</Link>
  </main>;
}
