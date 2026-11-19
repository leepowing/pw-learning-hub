import Link from "next/link";

const sections = [
  ["8.1", "Basic Knowledge of Quadrilaterals", "quadrilaterals"],
  ["8.2", "Parallelograms", "parallelograms"],
  ["8.3", "Properties of Rhombuses, Rectangles, Squares and Trapeziums"],
  ["8.4", "Proofs Related to Parallelograms"],
  ["8.5", "Mid-point Theorem and Intercept Theorem"],
  ["", "Chapter Checkpoint"],
  ["", "Chapter Flashcards"]
];

export default function ChapterEight() {
  return <><Link href="/maths/s3">← S3 Mathematics</Link><p>Book 3B · Chapter 8</p><h1>Quadrilaterals</h1>
    {sections.map(([number,title,route]) => <section key={title}><h2>{route ? <Link href={'/maths/s3/chapter-8/'+route}>{number} {title} →</Link> : <>{number} {title}</>}</h2>{!route && <small>Coming soon</small>}</section>)}</>;
}
