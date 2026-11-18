import Link from "next/link";
import styles from "../section.module.css";

const practice = [
  ["Write 72,900,000 in scientific notation.", "7.29 × 10⁷. Moving the decimal seven places left gives 7.29."],
  ["Write −0.000063 in scientific notation.", "−6.3 × 10⁻⁵. Keep the minus sign on the coefficient. The negative exponent scales its magnitude down."],
  ["Which is in scientific notation: 10 × 10³, 1 × 10⁴ or 0.1 × 10⁵?", "All three equal 10,000. Only 1 × 10⁴ has a coefficient in the required range."],
  ["Write −8.04 × 10⁵ as an integer.", "−804,000. Move the decimal five places right and retain the sign."],
  ["Write 1.07 × 10⁻⁴ as a decimal.", "0.000107. The 1 is in the fourth decimal place."],
  ["Express 0.00080968 to three significant figures in scientific notation.", "8.0968 × 10⁻⁴ rounds to 8.10 × 10⁻⁴. Keep the final zero to show three significant figures."],
  ["Add 7.6 × 10⁵ and 4 × 10⁴.", "(7.6 + 0.4) × 10⁵ = 8 × 10⁵."],
  ["Subtract 6 × 10⁻⁵ from 2 × 10⁻⁴.", "(2 − 0.6) × 10⁻⁴ = 1.4 × 10⁻⁴."],
  ["Multiply (6 × 10⁷)(4 × 10⁻³).", "24 × 10⁴ = 2.4 × 10⁵."],
  ["Divide (3.2 × 10⁻⁴) by (8 × 10²).", "0.4 × 10⁻⁶ = 4 × 10⁻⁷."],
  ["Which is greater, 8.9 × 10⁻⁸ or 1.1 × 10⁻⁷?", "1.1 × 10⁻⁷. It equals 11 × 10⁻⁸, which exceeds 8.9 × 10⁻⁸."],
  ["A probe travels 4.5 × 10⁸ km. Take 1 AU as 1.5 × 10⁸ km. How far does it travel in AU?", "Divide the distance by the kilometres in one AU: (4.5 ÷ 1.5) × 10⁸⁻⁸ = 3 AU."],
];

export default function ScientificNotation() {
  return <main className={styles.lesson}>
    <Link href="/maths/s3/chapter-2">← Chapter 2 overview</Link>
    <header><small>S3 · SECTION 2.2</small><h1>Scientific Notation</h1>
      <p>A sensor records a length of 0.0000048 m. Writing it as 4.8 × 10⁻⁶ m keeps the measured digits together and shows their scale.</p></header>
    <nav aria-label="Lesson topics"><a href="#part-1">Powers of ten and place value</a>
      <a href="#part-2">Convert in both directions</a>
      <a href="#part-3">Calculate in scientific notation</a>
      <a href="#part-4">How far does light travel?</a>
      <a href="#part-5">Class practice 2.2</a></nav>
    <section id="part-1"><h2>A. Powers of ten and place value</h2>
      <p className={styles.formula}>10² = 100　·　10¹ = 10　·　10⁰ = 1　·　10⁻¹ = 0.1　·　10⁻² = 0.01</p>
      <details><summary>Predict the next two values as the exponent decreases.</summary><p>Divide by ten at each step: 10⁻³ = 0.001 and 10⁻⁴ = 0.0001.</p></details>
      <p>Write a non-zero number as <strong>a × 10<sup>n</sup></strong>, where 1 ≤ |a| &lt; 10 and n is an integer. The coefficient has one non-zero digit before the decimal point. Its sign gives the sign of the number.</p></section>
    <section id="part-2"><h2>B. Convert in both directions</h2>
      <h3>From an ordinary number</h3><p>Place the decimal just after the first non-zero digit. Count the places moved. Moving left gives a positive exponent: 635,000 = 6.35 × 10⁵. Moving right gives a negative exponent: 0.000635 = 6.35 × 10⁻⁴. If the decimal stays in place, use zero: 6.35 = 6.35 × 10⁰.</p>
      <h3>Back to an integer or decimal</h3><p>Start with the coefficient. For 3.08 × 10⁴, move four places right to get 30,800. For −3.08 × 10⁻⁴, move four places left to get −0.000308.</p>
      <h3>Round to a given precision</h3><p>For 99,870 to three significant figures, start with 9.987 × 10⁴. The fourth digit is 7, so the coefficient rounds to 9.99. The answer is approximately 9.99 × 10⁴. To two significant figures it rounds across a power of ten: 1.0 × 10⁵.</p></section>
    <section id="part-3"><h2>C. Calculate in scientific notation</h2>
      <p>For addition and subtraction, first express both terms using the same power of ten. For multiplication and division, combine the coefficients and apply the index laws from Section 2.1.</p>
      <ul><li>Add: 4.2 × 10⁶ + 9 × 10⁵ = (4.2 + 0.9) × 10⁶ = 5.1 × 10⁶.</li>
      <li>Subtract: 4.2 × 10⁶ − 9 × 10⁵ = (4.2 − 0.9) × 10⁶ = 3.3 × 10⁶.</li>
      <li>Multiply: (8 × 10³)(5 × 10⁻²) = 40 × 10¹ = 4 × 10².</li>
      <li>Divide: (2 × 10⁷) ÷ (4 × 10³) = 0.5 × 10⁴ = 5 × 10³.</li></ul>
      <p>A calculator display of 5.1E6 means 5.1 × 10⁶.</p></section>
    <section id="part-4"><h2>D. How far does light travel?</h2>
      <p>A light-year is the distance light travels in one year. Estimate a distance of 4.2 light-years in kilometres. Use 365 days per year and a speed of 3.0 × 10⁵ km/s.</p>
      <ol><li>Convert time to seconds: 365 × 24 × 60 × 60 = 3.1536 × 10⁷ seconds per year.</li>
      <li>Multiply speed by time: one light-year is approximately 9.4608 × 10¹² km.</li>
      <li>Multiply by 4.2 before rounding: 3.973536 × 10¹³ km, or <strong>4.0 × 10¹³ km</strong> to two significant figures.</li></ol></section>
    <section id="part-5"><h2>Class practice 2.2</h2><p>Work on paper first. Give calculation results in scientific notation unless another form is requested.</p>
      {practice.map(([question, solution], index) => <article key={question}><h3>{index + 1}. {question}</h3><details><summary>Check answer</summary><p>{solution}</p></details></article>)}</section>
    <Link href="/maths/s3/chapter-2">← Chapter overview</Link>
  </main>;
}
