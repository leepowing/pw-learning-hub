import Link from "next/link";
import styles from "../section.module.css";

const practice = [
  ["Expand 7,035 using powers of ten.", "7 × 10³ + 0 × 10² + 3 × 10¹ + 5 × 10⁰. The zero holds the hundreds place."],
  ["Write 2⁵ + 2² + 1 in binary.", "100101₂. Put a 1 in the 32, 4 and 1 columns and a 0 in each unused column."],
  ["Convert 101101₂ to denary.", "32 + 8 + 4 + 1 = 45."],
  ["Convert 71 to binary.", "71 = 64 + 4 + 2 + 1, giving 1000111₂."],
  ["A two-digit denary number ends in 8. It equals 111₂ × 100₂. Find its tens digit.", "7 × 4 = 28, so the tens digit is 2."]
];

export default function NumeralSystems() {
  return <main className={styles.lesson}>
    <Link href="/maths/s3/chapter-2">← Chapter 2 overview</Link>
    <header><small>S3 · SECTION 2.3</small><h1>Notation for Different Numeral Systems</h1><p>Read place values in base ten and base two, then use them to convert whole numbers between the two systems.</p></header>
    <nav aria-label="Lesson topics"><a href="#part-1">Place value</a>
      <a href="#part-2">Binary to denary</a>
      <a href="#part-3">Denary to binary</a>
      <a href="#part-4">Class practice 2.3</a></nav>
    <section id="part-1"><h2>A. Place value</h2>
    <p>In 405, the 4 stands for four hundreds. In 45, it stands for four tens. A zero can contribute nothing to the sum while holding a place that changes the value of another digit.</p>
    <p>Denary uses the digits 0–9. Binary uses 0 and 1. Starting at the ones column, multiply each place value by the base as you move left.</p>
    <table><caption>Place values by position from the right</caption><thead><tr><th scope="col">Base</th><th scope="col">4th</th><th scope="col">3rd</th><th scope="col">2nd</th><th scope="col">1st</th></tr></thead><tbody><tr><th scope="row">Denary</th><td>1000</td><td>100</td><td>10</td><td>1</td></tr><tr><th scope="row">Binary</th><td>8</td><td>4</td><td>2</td><td>1</td></tr></tbody></table></section>
    <section id="part-2"><h2>B. Binary to denary</h2><p>For 1101₂, multiply each digit by its place value. The subscript 2 identifies the base.</p><p className={styles.formula}>1101₂ = 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1 = 13₁₀</p></section>
    <section id="part-3"><h2>C. Denary to binary</h2><p>Divide 22 by 2 repeatedly, recording each remainder.</p>
    <ol><li>22 ÷ 2 gives 11 remainder 0.</li><li>11 ÷ 2 gives 5 remainder 1.</li><li>5 ÷ 2 gives 2 remainder 1.</li><li>2 ÷ 2 gives 1 remainder 0.</li></ol>
    <p>Write the final quotient 1, then read the remainders upwards. This gives 10110₂. Check by adding 16 + 4 + 2 = 22.</p></section>
    <section id="part-4"><h2>Class practice 2.3</h2>{practice.map(([question, answer]) => <article key={question}><h3>{question}</h3><details><summary>Check answer</summary><p>{answer}</p></details></article>)}</section>
    <Link href="/maths/s3/chapter-2/summary">Chapter summary →</Link>
  </main>;
}
