import Link from "next/link";
import styles from "../section.module.css";
import Ray from "../Ray";
export default function Lesson() {
  return <main className={styles.lesson}><Link href="/maths/s3/chapter-4">← Chapter 4</Link>
    <header><small>S3 · SECTION 4.2</small><h1>Linear Inequalities in One Unknown</h1><p>Find every value that satisfies a condition, then decide which values make sense in the problem.</p></header>
    <section><h2>Solve and graph</h2><p>A linear inequality in one unknown compares expressions involving just one variable to the first power. Isolate the variable by doing the same operation to both sides.</p>
    <article><h3>When the unknown appears on both sides</h3><p>Find all solutions of 4x + 13 ≥ 7 − 2x.</p><ol><li>Add 2x to both sides to get 6x + 13 ≥ 7.</li><li>Subtract 13 to get 6x ≥ −6.</li><li>Divide by 6. The solution is x ≥ −1.</li></ol><Ray value={-1} right closed/><p>At x = −1 both sides equal 9, so fill the circle. Larger values lie to its right.</p></article>
    <article><h3>Clearing a negative denominator</h3><p>Solve 4 − x &lt; (5x + 1)/(−2).</p><ol><li>Multiply both sides by −2 and reverse the sign to get −8 + 2x &gt; 5x + 1.</li><li>Collect terms to get −3x &gt; 9.</li><li>Divide by −3 and reverse the sign again. Hence x &lt; −3.</li></ol><Ray value={-3} right={false} closed={false}/></article></section>
    <section><h2>Restrict the answer to integers</h2><p>Which positive integers satisfy (5x + 8)/2 &lt; (4x + 25)/3?</p><ol><li>Multiply by 6, the lowest common multiple. This gives 3(5x + 8) &lt; 2(4x + 25).</li><li>Expand and collect terms to get 7x &lt; 26.</li><li>Since x &lt; 26/7, the positive integer solutions are 1, 2 and 3.</li></ol></section>
    <section><h2>Model a limit</h2><article><h3>Perimeter</h3><p>A rectangular mat is 76 cm long and x cm wide. Its perimeter exceeds 240 cm. From 2(76 + x) &gt; 240, we get x &gt; 44. A width of exactly 44 cm gives exactly 240 cm and misses the strict limit.</p></article>
    <article><h3>Minimum number of cheaper boxes</h3><p>Buy ten boxes for at most $400. One kind costs $35 and the other costs $48. Let x count the $35 boxes. The remaining 10 − x cost $48 each.</p><p className={styles.formula}>35x + 48(10 − x) ≤ 400</p><p>Simplifying gives −13x ≤ −80, so x ≥ 80/13. The minimum is 7 boxes. Six cheaper boxes would cost $402 in total, while seven cost $389.</p></article></section>
    <section><h2>Check your understanding</h2>{[
    ["Solve 7x + 27 ≤ 4x. Describe its graph.","3x ≤ −27 gives x ≤ −9. Fill the circle at −9 and draw the ray left."],
    ["Find the smallest integer satisfying (x − 1)/2 ≥ (3 + x)/5.","Multiply by 10 to get 5x − 5 ≥ 6 + 2x. Thus x ≥ 11/3 and the smallest integer is 4."],
    ["There are 22 coins worth either $2 or $5. Their total exceeds $83. Find the largest possible number of $2 coins.","Let n count the $2 coins. Then 2n + 5(22 − n) > 83, so n < 9. The maximum is 8 coins."]
    ].map(([q,a])=><article key={q}><h3>{q}</h3><details><summary>Show working</summary><p>{a}</p></details></article>)}<Link href="/maths/s3/chapter-4/checkpoint">Start Chapter Checkpoint →</Link></section></main>;
}
