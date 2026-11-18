import Link from "next/link";
import styles from "../section.module.css";

const examples = [
  ["Evaluate (−4)⁰ and −4⁰.", "The brackets make −4 the base, so (−4)⁰ = 1. In −4⁰ the power applies to 4 first, giving −(4⁰) = −1."],
  ["Evaluate (−3)⁻³.", "Take the reciprocal first: 1/(−3)³. The denominator is −27, so the result is −1/27."],
  ["Simplify (2r⁻²s)³.", "Cube each factor: 8r⁻⁶s³. Move r⁻⁶ to the denominator to obtain 8s³/r⁶."],
  ["Simplify (x⁻²y³)⁻² / x.", "Multiply each index by −2 to get x⁴y⁻⁶. Dividing by x leaves x³y⁻⁶, or x³/y⁶."],
];
const practice = [
  ["Evaluate (−9)⁰.", "1. The whole non-zero number is raised to zero."],
  ["Evaluate 4⁻³.", "1/64. Take the reciprocal of 4³."],
  ["Evaluate (2/5)⁻².", "25/4. Invert the fraction, then square it."],
  ["Evaluate 2⁰ + 2³ × 2⁻⁵.", "5/4. The product is 2⁻² = 1/4, then add 1."],
  ["Simplify t⁻⁴ ÷ t⁻⁷.", "t³. Subtract the indices: −4 − (−7) = 3."],
  ["Simplify (3x⁻¹)⁻².", "x²/9. Invert the bracket to obtain x/3, then square."],
  ["Simplify (p⁻²q)³ / q⁵.", "1/(p⁶q²). The indices become −6 for p and 3 − 5 = −2 for q."],
  ["A student writes 6x⁰ = 1. What should change?", "6x⁰ = 6 because only x is raised to zero. With brackets, (6x)⁰ = 1."],
];

export default function Lesson() {
  return <main className={styles.lesson}>
    <Link href="/maths/s3/chapter-2">← Chapter 2 overview</Link>
    <header><small>S3 · SECTION 2.1</small><h1>Zero Index and Negative Integral Indices</h1><p>Use division to explain a zero or negative index, then rewrite expressions with positive indices.</p></header>
    <nav aria-label="Lesson topics"><a href="#part-1">Zero index</a>
      <a href="#part-2">Negative integral indices</a>
      <a href="#part-3">Laws of integral indices</a>
      <a href="#part-4">Worked examples</a>
      <a href="#part-5">Class practice 2.1</a></nav>
    <section id="part-1"><h2>A. Zero index</h2><p>Compare two ways to calculate 5³ ÷ 5³. Dividing a number by itself gives 1. Subtracting its indices gives 5³⁻³ = 5⁰. Both calculations describe the same quotient.</p><strong>a⁰ = 1 for a ≠ 0.</strong><p>The argument requires a non-zero divisor. In this lesson 0⁰ is undefined.</p></section>
    <section id="part-2"><h2>B. Negative integral indices</h2><p>Read the pattern from left to right. Each time the index decreases by one, divide the previous value by 3.</p><p className={styles.formula}>3² = 9　→　3¹ = 3　→　3⁰ = 1　→　3⁻¹ = ⅓　→　3⁻² = ⅑</p><p>For a non-zero base, a⁻ⁿ × aⁿ = a⁰ = 1. Therefore <strong>a⁻ⁿ = 1/aⁿ</strong> for every positive integer n. A negative index takes the reciprocal. The sign of the value still depends on the base and the power.</p></section>
    <section id="part-3"><h2>C. Laws of integral indices</h2><p>Assume a and b are non-zero and m and n are integers.</p><ul><li>Multiply like bases: aᵐ × aⁿ = aᵐ⁺ⁿ</li><li>Divide like bases: aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li><li>Raise a power to a power: (aᵐ)ⁿ = aᵐⁿ</li><li>Raise a product to a power: (ab)ⁿ = aⁿbⁿ</li><li>Raise a quotient to a power: (a/b)ⁿ = aⁿ/bⁿ</li></ul></section>
    <section id="part-4"><h2>Worked examples</h2><p>Assume all letters represent non-zero numbers.</p>{examples.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</section>
    <section id="part-5"><h2>Class practice 2.1</h2><p>Work on paper, then open each solution to check. Use positive indices in your final answers. All variables are non-zero.</p>{practice.map(([q,a],i) => <article key={q}><h3>{i+1}. {q}</h3><details><summary>Check answer</summary><p>{a}</p></details></article>)}</section>
    <Link href="/maths/s3/chapter-2">← Chapter overview</Link>
  </main>;
}
