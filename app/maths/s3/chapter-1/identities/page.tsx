import Link from "next/link";

const examples = [
  ["36x² − 25y²", "The two squares are (6x)² and (5y)². Their difference gives (6x + 5y)(6x − 5y)."],
  ["81 − (x − 2)²", "Treat the bracket as one term. The factors are [9 + (x − 2)][9 − (x − 2)] = (x + 7)(11 − x)."],
  ["(3x + y)² − (x − y)²", "The sum of the brackets is 4x. Their difference is 2x + 2y. Extract 2 to get 8x(x + y)."],
  ["5x² − 80", "Extract 5 first. Then 5(x² − 16) = 5(x + 4)(x − 4)."],
  ["x² − 16 + xy − 4y", "Group the terms as (x + 4)(x − 4) + y(x − 4). The common bracket gives (x − 4)(x + 4 + y)."],
  ["(x + 6)/(x² − 36)", "Factor the denominator as (x + 6)(x − 6). Cancelling the common factor gives 1/(x − 6), with x ≠ 6 and x ≠ −6 from the original denominator."]
];
const practice = [
  ["49 − t²", "(7 + t)(7 − t)"],
  ["16a² − 81b²", "(4a + 9b)(4a − 9b)"],
  ["100 − (u + v)²", "(10 + u + v)(10 − u − v)"],
  ["3m² − 147", "3(m + 7)(m − 7)"],
  ["p² − 25 + pq − 5q", "(p − 5)(p + 5 + q)"]
];

const squareExamples = [
  ["x² + 14x + 49", "The outer terms are x² and 7². Twice their bases multiplied together gives 2(x)(7) = 14x, so the expression is (x + 7)²."],
  ["16x² − 24xy + 9y²", "Use 4x and 3y. Since the middle term is −2(4x)(3y), the factors are (4x − 3y)(4x − 3y) = (4x − 3y)²."],
  ["−3x² + 24xy − 48y²", "Extract −3 first. The remaining x² − 8xy + 16y² has middle term −2(x)(4y), giving −3(x − 4y)²."],
  ["(2x − 1)² + 10(2x − 1) + 25", "Let u = 2x − 1. Then u² + 10u + 25 = (u + 5)². Substitute back to get (2x − 1 + 5)² = (2x + 4)² = 4(x + 2)²."],
  ["p² − 12p + 36 − q²", "The first three terms give (p − 6)². Apply Part A to (p − 6)² − q² to obtain (p − 6 + q)(p − 6 − q)."],
  ["(2xy + 3y²)/(4x² + 12xy + 9y²)", "The numerator is y(2x + 3y) and the denominator is (2x + 3y)². Cancel one factor to obtain y/(2x + 3y), where 2x + 3y ≠ 0."]
];
const squarePractice = [
  ["Factorize t² + 18t + 81.", "(t + 9)²"],
  ["Factorize 25a² − 30ab + 9b².", "(5a − 3b)²"],
  ["Factorize −5u² − 20uv − 20v².", "−5(u + 2v)²"],
  ["Factorize (3m + 2)² − 8(3m + 2) + 16.", "(3m + 2 − 4)² = (3m − 2)²"],
  ["Factorize x² + 8x + 16 − y².", "(x + 4 + y)(x + 4 − y)"],
  ["Simplify (a² − 3ab)/(a² − 6ab + 9b²).", "a/(a − 3b), where a ≠ 3b"]
];

export default function Identities() {
  return <>
    <Link href="/maths/s3/chapter-1">← Chapter 1 overview</Link>
    <header><small>S3 · SECTION 1.1</small><h1>Factorization Using Identities</h1><p>Use the difference of two squares and the perfect square identities to factorize expressions.</p></header>
    <nav aria-label="Lesson topics"><a href="#difference">A · Difference of two squares</a> <a href="#perfect">B · Perfect square identities</a></nav>
    <section id="difference"><h2>A · Difference of two squares</h2><h3>a² − b² = (a + b)(a − b)</h3><p>Expanding the product gives a² − ab + ab − b². The middle terms cancel, which explains why the identity works.</p></section>
    <section><h2>Worked examples</h2>{examples.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <section><h2>Class practice</h2><p>Factorize each expression completely, then reveal the answer to check your work.</p><ol>{practice.map(([question, answer]) => <li key={question}>{question}<details><summary>Show answer</summary><p>{answer}</p></details></li>)}</ol></section>
    <section id="perfect">
      <h2>B · Using the perfect square identities</h2>
      <p><strong>a² + 2ab + b² = (a + b)²</strong></p>
      <p><strong>a² − 2ab + b² = (a − b)²</strong></p>
      <p>Identify the two square terms. Multiply their bases together and double the product. Check that this gives the middle term, with the sign shown in the identity.</p>
      <p>For example, (x − 4)² expands to x² − 8x + 16. Changing the middle term to −4x breaks the pattern.</p>
    </section>
    <section><h2>Worked examples · Perfect squares</h2>
      {squareExamples.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
    </section>
    <section><h2>Class practice · Perfect squares</h2>
      <ol>{squarePractice.map(([question, answer]) => <li key={question}>{question}<details><summary>Show answer</summary><p>{answer}</p></details></li>)}</ol>
    </section>
  </>;
}
