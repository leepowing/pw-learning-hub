"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import FormulaFlashcards from "@/components/maths/FormulaFlashcards";

import {
  allMathsFlashcards,
} from "@/data/maths/flashcards";

import type {
  MathsFlashcard,
} from "@/data/maths/flashcards";

import {
  syncMathsFlashcardProgress,
} from "@/lib/studentStorage";

import type {
  MathsFlashcardProgress,
} from "@/lib/studentStorage";

function needsReview(
  progress: MathsFlashcardProgress
): boolean {
  if (
    progress.attempts === 0 ||
    progress.practice === 0
  ) {
    return false;
  }

  const accuracy =
    progress.correct / progress.attempts;

  return (
    progress.lastResult === "practice" ||
    accuracy < 0.8
  );
}

function getAccuracy(
  progress: MathsFlashcardProgress
): number {
  if (progress.attempts === 0) {
    return 0;
  }

  return progress.correct / progress.attempts;
}

export default function MathsSmartReviewPage() {
  const [reviewCards, setReviewCards] = useState<
    MathsFlashcard[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadReviewCards() {
      const progress =
        await syncMathsFlashcardProgress();

      if (!active) {
        return;
      }

      const cards = allMathsFlashcards
        .filter((card) => {
          const cardProgress = progress[card.id];

          return (
            cardProgress !== undefined &&
            needsReview(cardProgress)
          );
        })
        .sort((first, second) => {
          const firstProgress = progress[first.id];
          const secondProgress = progress[second.id];

          const accuracyDifference =
            getAccuracy(firstProgress) -
            getAccuracy(secondProgress);

          if (accuracyDifference !== 0) {
            return accuracyDifference;
          }

          return (
            secondProgress.practice -
            firstProgress.practice
          );
        });

      setReviewCards(cards);
      setLoading(false);
    }

    void loadReviewCards();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <main
        style={{
          maxWidth: "1000px",
          width: "calc(100% - 40px)",
          margin: "42px auto 70px",
        }}
      >
        <section
          style={{
            padding: "36px",
            borderRadius: "24px",
            background: "white",
            textAlign: "center",
          }}
        >
          <h2>Preparing Smart Review...</h2>

          <p style={{ color: "#64748b" }}>
            Finding the formulas that need more practice.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        width: "calc(100% - 40px)",
        margin: "42px auto 70px",
      }}
    >
      <Link
        href="/maths/flashcards"
        style={{
          display: "inline-block",
          marginBottom: "26px",
          color: "#15803d",
          fontSize: "17px",
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        ← Back to Flashcards
      </Link>

      <header style={{ marginBottom: "30px" }}>
        <p
          style={{
            margin: "0 0 8px",
            color: "#ea580c",
            fontWeight: 900,
            letterSpacing: "1.4px",
          }}
        >
          PERSONALISED FORMULA PRACTICE
        </p>

        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "46px",
          }}
        >
          Maths Smart Review
        </h1>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          Review formulas you found difficult, with the
          weakest formulas shown first.
        </p>
      </header>

      {reviewCards.length === 0 ? (
        <section
          style={{
            padding: "40px",
            borderRadius: "26px",
            background: "#ecfdf5",
            border: "1px solid #86efac",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginBottom: "14px",
              fontSize: "52px",
            }}
          >
            🎉
          </div>

          <h2 style={{ margin: "0 0 12px" }}>
            No formulas need review
          </h2>

          <p
            style={{
              margin: "0 0 26px",
              color: "#4b5563",
              fontSize: "17px",
            }}
          >
            Keep practising new chapters to build your
            formula knowledge.
          </p>

          <Link
            href="/maths/flashcards"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              borderRadius: "14px",
              background: "#16a34a",
              color: "white",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Practise Flashcards →
          </Link>
        </section>
      ) : (
        <>
          <section
            style={{
              marginBottom: "24px",
              padding: "18px 22px",
              borderRadius: "18px",
              background: "#fff7ed",
              border: "1px solid #fdba74",
              color: "#9a3412",
            }}
          >
            <strong
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "18px",
              }}
            >
              {reviewCards.length} formulas selected
            </strong>

            <span>
              A formula leaves Smart Review after its latest
              answer is correct and its overall accuracy
              reaches 80%.
            </span>
          </section>

<FormulaFlashcards
  cards={reviewCards}
  reviewMode
/>
        </>
      )}
    </main>
  );
}