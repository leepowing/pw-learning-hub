"use client";

import { useState } from "react";
import Link from "next/link";

import FormulaFlashcards from "@/components/maths/FormulaFlashcards";
import {
  getFlashcardsForSelections,
  s1Flashcards,
} from "@/data/maths/flashcards";

import type { MathsFlashcard } from "@/data/maths/flashcards";

type SessionSize = 10 | 20 | 30 | "all";

function shuffleCards(cards: MathsFlashcard[]) {
  const shuffled = [...cards];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

const availableChapters = Array.from(
  new Map(
    s1Flashcards.map((card) => [
      card.chapter,
      {
        chapter: card.chapter,
        title: card.chapterTitle,
      },
    ])
  ).values()
);

export default function S1FlashcardsPage() {
  const [selectedChapters, setSelectedChapters] = useState<number[]>(
    []
  );
  const [sessionSize, setSessionSize] =
    useState<SessionSize>("all");
  const [sessionCards, setSessionCards] = useState<
    MathsFlashcard[]
  >([]);
  const [started, setStarted] = useState(false);

  const selectedCards = getFlashcardsForSelections([
    {
      level: "s1",
      chapters: selectedChapters,
    },
  ]);

  function toggleChapter(chapter: number) {
    setSelectedChapters((current) =>
      current.includes(chapter)
        ? current.filter((item) => item !== chapter)
        : [...current, chapter]
    );
  }

  function selectAllChapters() {
    setSelectedChapters(
      availableChapters.map((item) => item.chapter)
    );
  }

  function startSession() {
    const shuffled = shuffleCards(selectedCards);

    const finalCards =
      sessionSize === "all"
        ? shuffled
        : shuffled.slice(0, sessionSize);

    setSessionCards(finalCards);
    setStarted(true);
  }

  if (started) {
    return (
      <main
        style={{
          maxWidth: "1000px",
          width: "calc(100% - 40px)",
          margin: "42px auto 70px",
        }}
      >
        <button
          type="button"
          onClick={() => setStarted(false)}
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
            marginBottom: "26px",
            color: "#15803d",
            fontSize: "17px",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          ← Change chapter selection
        </button>

        <header style={{ marginBottom: "30px" }}>
          <p
            style={{
              margin: "0 0 8px",
              color: "#4f46e5",
              fontWeight: 900,
              letterSpacing: "1.4px",
            }}
          >
            S1 FORMULA PRACTICE
          </p>

          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "44px",
            }}
          >
            S1 Flashcards
          </h1>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            This session contains {sessionCards.length} cards.
          </p>
        </header>

        <FormulaFlashcards cards={sessionCards} />
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1050px",
        width: "calc(100% - 40px)",
        margin: "42px auto 70px",
      }}
    >
      <Link
        href="/maths/s1"
        style={{
          display: "inline-block",
          marginBottom: "26px",
          color: "#15803d",
          fontSize: "17px",
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        ← Back to S1 Mathematics
      </Link>

      <header style={{ marginBottom: "32px" }}>
        <p
          style={{
            margin: "0 0 8px",
            color: "#4f46e5",
            fontWeight: 900,
            letterSpacing: "1.4px",
          }}
        >
          S1 FORMULA PRACTICE
        </p>

        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "46px",
          }}
        >
          Choose your chapters
        </h1>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "19px",
          }}
        >
          Select one or more chapters for this flashcard session.
        </p>
      </header>

      <section
        style={{
          padding: "28px",
          borderRadius: "24px",
          background: "white",
          border: "1px solid #e5e7eb",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "18px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ margin: 0 }}>Available chapters</h2>

          <button
            type="button"
            onClick={selectAllChapters}
            style={{
              border: "1px solid #4f46e5",
              borderRadius: "12px",
              padding: "10px 18px",
              background: "white",
              color: "#4f46e5",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Select all
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "14px",
          }}
        >
          {availableChapters.map((item) => {
            const selected = selectedChapters.includes(
              item.chapter
            );

            const cardCount = s1Flashcards.filter(
              (card) => card.chapter === item.chapter
            ).length;

            return (
              <button
                key={item.chapter}
                type="button"
                onClick={() => toggleChapter(item.chapter)}
                style={{
                  padding: "22px",
                  borderRadius: "18px",
                  border: selected
                    ? "2px solid #4f46e5"
                    : "1px solid #d1d5db",
                  background: selected ? "#eef2ff" : "white",
                  textAlign: "left",
                  cursor: "pointer",
                  color: "inherit",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "20px",
                  }}
                >
                  {selected ? "✓ " : ""}
                  Chapter {item.chapter}
                </strong>

                <span
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#374151",
                  }}
                >
                  {item.title}
                </span>

                <span style={{ color: "#6b7280" }}>
                  {cardCount} flashcards
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section
        style={{
          padding: "28px",
          borderRadius: "24px",
          background: "white",
          border: "1px solid #e5e7eb",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Session size</h2>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          {([10, 20, 30, "all"] as SessionSize[]).map(
            (size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSessionSize(size)}
                style={{
                  minWidth: "90px",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  border:
                    sessionSize === size
                      ? "2px solid #4f46e5"
                      : "1px solid #d1d5db",
                  background:
                    sessionSize === size
                      ? "#eef2ff"
                      : "white",
                  color: "#3730a3",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {size === "all" ? "All" : size}
              </button>
            )
          )}
        </div>

        <button
          type="button"
          disabled={selectedCards.length === 0}
          onClick={startSession}
          style={{
            width: "100%",
            border: "none",
            borderRadius: "17px",
            padding: "18px",
            background:
              selectedCards.length === 0
                ? "#d1d5db"
                : "#4f46e5",
            color: "white",
            fontSize: "19px",
            fontWeight: 900,
            cursor:
              selectedCards.length === 0
                ? "not-allowed"
                : "pointer",
          }}
        >
          {selectedCards.length === 0
            ? "Choose at least one chapter"
            : `Start with ${
                sessionSize === "all"
                  ? selectedCards.length
                  : Math.min(sessionSize, selectedCards.length)
              } cards →`}
        </button>
      </section>
    </main>
  );
}