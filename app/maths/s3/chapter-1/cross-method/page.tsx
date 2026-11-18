import Link from "next/link";
import styles from "../section.module.css";

const practice = [
  ["x² + 11x + 24", "(x + 3)(x + 8)"],
  ["x² − 13x + 36", "(x − 4)(x − 9)"],
  ["x² − 2xy − 15y²", "(x + 3y)(x − 5y)"],
  ["6x² − 7x − 3", "(3x + 1)(2x − 3)"],
  ["−12x² − 14x + 6", "−2(3x − 1)(2x + 3)"],
  ["6x² + 7xy − 3y²", "(3x − y)(2x + 3y)"]
];

export default function CrossMethod() {
  return <main className={styles.lesson}>
    <Link href="/maths/s3/chapter-1">← Chapter 1 overview</Link>
    <header><small>S3 · SECTION 1.2</small><h1>Factorization Using the Cross-method</h1><p>Match the cross-products to the middle term, then check your factors by expanding.</p></header>
    <nav aria-label="Lesson topics"><a href="#monic">A · x² + bx + c</a> <a href="#general">B · ax² + bx + c</a> <a href="#practice">Practice</a></nav>
    <section id="monic"><h2>A · Find two numbers</h2>
      <p>A quadratic in x has highest power 2. Expand (x + m)(x + n): the four products are x², nx, mx and mn. Collecting terms gives x² + (m + n)x + mn.</p>
      <h3>Factorize x² − 10x + 21</h3>
      <p>The two numbers multiply to 21. Both must be negative to give a negative sum. Try −1 and −21: their sum is −22. Try −3 and −7: their sum is −10. The factors are (x − 3)(x − 7).</p>
      <details><summary>What changes for x² + 4x − 21?</summary><p>A negative product needs opposite signs. Use 7 and −3 because 7 − 3 = 4. Expanding (x + 7)(x − 3) gives x² − 3x + 7x − 21.</p></details>
      <details><summary>Rearrange 18 − 3x − x² first.</summary><p>Take out −1 to get −(x² + 3x − 18). The pair 6 and −3 gives −(x + 6)(x − 3).</p></details>
      <details><summary>Factorize x² + xy − 12y² + 2x − 6y.</summary><p>Use 4y and −3y for the quadratic part. Group the expression as (x + 4y)(x − 3y) + 2(x − 3y). Extract the shared bracket to get (x − 3y)(x + 4y + 2).</p></details>
    </section>
    <section id="general"><h2>B · Match the cross-products</h2>
      <p>In (px + m)(qx + n), the leading coefficient is pq and the constant is mn. The two diagonal products, px × n and m × qx, must add to bx.</p>
      <h3>Which arrangement gives 6x² + 11x + 4?</h3>
      <p>Choose 3x and 2x for the leading terms. Try 1 and 4 for the constants. Swapping their positions changes the middle term.</p>
      <table><thead><tr><th>Trial factors</th><th>Diagonal products</th><th>Sum</th></tr></thead>
      <tbody><tr><td>(3x + 1)(2x + 4)</td><td>12x + 2x</td><td>14x</td></tr>
      <tr><td>(3x + 4)(2x + 1)</td><td>3x + 8x</td><td>11x</td></tr></tbody></table>
      <p>The second arrangement works. Expand to check all three terms.</p>
      <details><summary>Extract a common factor in −12x² + 2x + 4.</summary><p>First write −2(6x² − x − 2). Inside the brackets, −4x + 3x gives −x. The result is −2(2x + 1)(3x − 2).</p></details>
      <details><summary>Can x² + 7x + 3 have integer linear factors?</summary><p>The only integer pairs with product 3 are 1, 3 and −1, −3. Their sums are 4 and −4. Neither gives 7, so there is no factorization into linear factors with integer coefficients.</p></details>
    </section>
    <section id="practice"><h2>Class practice</h2><p>Factorize completely. Check your middle term before revealing the answer.</p>
      <ol>{practice.map(([question, answer]) => <li key={question}>{question}<details><summary>Show answer</summary><p>{answer}</p></details></li>)}</ol>
    </section>
    <section id="summary"><h2>Chapter summary</h2>
      <p>Extract any common factor first. For a difference of squares, use (a + b)(a − b). For a perfect square trinomial, check the middle term is +2ab or −2ab and write (a + b)² or (a − b)² respectively.</p>
      <p>For other quadratics, list factors of the first and last terms. Test the diagonal products, then expand the successful pair to verify every coefficient.</p>
      <Link href="/maths/s3/chapter-1/checkpoint">Start Chapter 1 Checkpoint →</Link>
    </section>
  </main>;
}
