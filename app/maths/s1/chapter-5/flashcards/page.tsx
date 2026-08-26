import Link from "next/link";

import FormulaFlashcards from "@/components/maths/FormulaFlashcards";
import { getFlashcardsForChapter } from "@/data/maths/flashcards";

export default function Chapter5FlashcardsPage() {
  const cards = getFlashcardsForChapter("s1", 5);

  return (
    <main
      style={{
        maxWidth: "1000px",
        width: "calc(100% - 40px)",
        margin: "42px auto 70px",
      }}
    >
      <Link
        href="/maths/s1/chapter-5"
        style={{
          display: "inline-block",
          marginBottom: "28px",
          color: "#15803d",
          fontSize: "17px",
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        ← Back to Chapter 5
      </Link>

      <header style={{ marginBottom: "32px" }}>
        <p
          style={{
            margin: "0 0 8px",
            color: "#4f46e5",
            fontWeight: 900,
            letterSpacing: "1.5px",
          }}
        >
          FORMULA PRACTICE
        </p>

        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "46px",
            lineHeight: 1.15,
          }}
        >
          Chapter 5 Flashcards
        </h1>

        <p
          style={{
            margin: 0,
            color: "#6b7280",
            fontSize: "19px",
            lineHeight: 1.6,
          }}
        >
          Practise all {cards.length} formulas from Percentages (I).
          Reveal each formula, then decide whether you remembered it.
        </p>
      </header>

      <FormulaFlashcards cards={cards} />
    </main>
  );
}