import Link from "next/link";
import styles from "../zero-and-negative-indices/lesson.module.css";
export default function Summary() {
  return <main className={styles.lesson}><Link href="/maths/s3/chapter-2">← Chapter 2</Link><h1>Chapter 2 Summary</h1>
  <section><h2>Integral indices</h2><p>For non-zero bases, a⁰ = 1 and a⁻ⁿ = 1/aⁿ. When multiplying powers of the same base, add their indices. When dividing, subtract the denominator’s index from the numerator’s.</p><p>For a power of a power, multiply the indices. A power of a product or quotient applies to each factor. For example, (2x⁻³)² = 4/x⁶ for x ≠ 0.</p></section>
  <section><h2>Scientific notation</h2><p>Write a non-zero number as a × 10ⁿ with 1 ≤ |a| &lt; 10 and an integer n. For example, 0.000081 = 8.1 × 10⁻⁵. Match powers before adding. When multiplying, multiply the coefficients, add the indices and adjust the result into scientific notation.</p></section>
  <section><h2>Numeral systems</h2><p>Denary places use powers of ten. Binary places use powers of two. Expand 10110₂ as 16 + 4 + 2 to get 22₁₀. To convert back, divide repeatedly by two and read the final quotient followed by the remainders in reverse order.</p></section>
  <Link href="/maths/s3/chapter-2/checkpoint">Start checkpoint →</Link></main>;
}
