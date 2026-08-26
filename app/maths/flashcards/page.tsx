"use client";

import { useState } from "react";
import Link from "next/link";

import FormulaFlashcards from "@/components/maths/FormulaFlashcards";
import { getFlashcardsForSelections } from "@/data/maths/flashcards";

import type {
  FlashcardSelection,
  MathsFlashcard,
  MathsLevel,
} from "@/data/maths/flashcards";

type SessionSize = 10 | 20 | 30 | "all";

type LevelConfig = {
  level: MathsLevel;
  label: string;
  description: string;
  cards: MathsFlashcard[];
};

const chapterNumbers = Array.from(
  { length: 20 },
  (_, index) => index + 1
);

function getAllCardsForLevel(level: MathsLevel) {
  return getFlashcardsForSelections([
    {
      level,
      chapters: chapterNumbers,
    },
  ]);
}

const levelConfigs: LevelConfig[] = [
  {
    level: "s1",
    label: "S1",
    description: "Hong Kong Secondary 1 Mathematics",
    cards: getAllCardsForLevel("s1"),
  },
  {
    level: "s2",
    label: "S2",
    description: "Hong Kong Secondary 2 Mathematics",
    cards: getAllCardsForLevel("s2"),
  },
  {
    level: "s3",
    label: "S3",
    description: "Hong Kong Secondary 3 Mathematics",
    cards: getAllCardsForLevel("s3"),
  },
  {
    level: "s4",
    label: "S4",
    description: "Hong Kong Secondary 4 Mathematics",
    cards: getAllCardsForLevel("s4"),
  },
  {
    level: "s5",
    label: "S5",
    description: "Hong Kong Secondary 5 Mathematics",
    cards: getAllCardsForLevel("s5"),
  },
  {
    level: "s6",
    label: "S6",
    description: "Hong Kong Secondary 6 Mathematics",
    cards: getAllCardsForLevel("s6"),
  },
];

const emptySelections: Record<MathsLevel, number[]> = {
  s1: [],
  s2: [],
  s3: [],
  s4: [],
  s5: [],
  s6: [],
};

function getAvailableChapters(cards: MathsFlashcard[]) {
  return Array.from(
    new Map(
      cards.map((card) => [
        card.chapter,
        {
          chapter: card.chapter,
          title: card.chapterTitle,
        },
      ])
    ).values()
  ).sort((first, second) => first.chapter - second.chapter);
}

function shuffleCards(cards: MathsFlashcard[]) {
  const shuffled = [...cards];

  for (
    let index = shuffled.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1)
    );

    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export default function MathematicsFlashcardsPage() {
  const [selectedChapters, setSelectedChapters] = useState<
    Record<MathsLevel, number[]>
  >(emptySelections);

  const [sessionSize, setSessionSize] =
    useState<SessionSize>("all");

  const [sessionCards, setSessionCards] = useState<
    MathsFlashcard[]
  >([]);

  const [started, setStarted] = useState(false);

  const selections: FlashcardSelection[] = levelConfigs
    .filter(
      (config) =>
        selectedChapters[config.level].length > 0
    )
    .map((config) => ({
      level: config.level,
      chapters: selectedChapters[config.level],
    }));

  const selectedCards =
    getFlashcardsForSelections(selections);

  function toggleChapter(
    level: MathsLevel,
    chapter: number
  ) {
    setSelectedChapters((current) => {
      const levelChapters = current[level];

      return {
        ...current,
        [level]: levelChapters.includes(chapter)
          ? levelChapters.filter(
              (item) => item !== chapter
            )
          : [...levelChapters, chapter],
      };
    });
  }

  function selectAllForLevel(config: LevelConfig) {
    const chapters = getAvailableChapters(
      config.cards
    ).map((item) => item.chapter);

    setSelectedChapters((current) => ({
      ...current,
      [config.level]: chapters,
    }));
  }

  function clearAllForLevel(level: MathsLevel) {
    setSelectedChapters((current) => ({
      ...current,
      [level]: [],
    }));
  }

  function startSession() {
    if (selectedCards.length === 0) {
      return;
    }

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
          ← Change levels and chapters
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
            MATHEMATICS FORMULA PRACTICE
          </p>

          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "44px",
            }}
          >
            Formula Flashcards
          </h1>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            This session contains {sessionCards.length}{" "}
            cards from your selected levels and chapters.
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
        href="/subjects/mathematics"
        style={{
          display: "inline-block",
          marginBottom: "26px",
          color: "#15803d",
          fontSize: "17px",
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        ← Back to mathematics courses
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
          MATHEMATICS FORMULA PRACTICE
        </p>

        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "46px",
          }}
        >
          Choose levels and chapters
        </h1>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "19px",
            lineHeight: 1.5,
          }}
        >
          Combine chapters from S1–S6 in one flashcard
          session.
        </p>
      </header>

<div
  style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "24px",
  }}
>
  <Link
    href="/maths/flashcards/review"
    style={{
      display: "inline-block",
      padding: "12px 18px",
      borderRadius: "13px",
      border: "1px solid #f97316",
      background: "#fff7ed",
      color: "#c2410c",
      fontWeight: 900,
      textDecoration: "none",
    }}
  >
    Start Smart Review →
  </Link>

  <Link
    href="/maths/flashcards/progress"
    style={{
      display: "inline-block",
      padding: "12px 18px",
      borderRadius: "13px",
      border: "1px solid #4f46e5",
      background: "#eef2ff",
      color: "#4338ca",
      fontWeight: 900,
      textDecoration: "none",
    }}
  >
    View my progress →
  </Link>
</div>

      <section
        style={{
          display: "grid",
          gap: "18px",
          marginBottom: "24px",
        }}
      >
        {levelConfigs.map((config) => {
          const chapters = getAvailableChapters(
            config.cards
          );

          const available = chapters.length > 0;

          const selectedForLevel =
            selectedChapters[config.level];

          return (
            <article
              key={config.level}
              style={{
                padding: "26px",
                borderRadius: "24px",
                background: "white",
                border: available
                  ? "1px solid #c7d2fe"
                  : "1px solid #e5e7eb",
                opacity: available ? 1 : 0.58,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "18px",
                  flexWrap: "wrap",
                  marginBottom: available ? "20px" : 0,
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                  }}
                >
                  <span
                    style={{
                      width: "62px",
                      height: "62px",
                      borderRadius: "18px",
                      background: available
                        ? "#e0e7ff"
                        : "#f3f4f6",
                      color: available
                        ? "#4338ca"
                        : "#6b7280",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      fontWeight: 900,
                    }}
                  >
                    {config.label}
                  </span>

                  <span>
                    <strong
                      style={{
                        display: "block",
                        fontSize: "23px",
                        marginBottom: "5px",
                      }}
                    >
                      {config.label} Mathematics
                    </strong>

                    <span
                      style={{
                        color: "#64748b",
                        fontSize: "16px",
                      }}
                    >
                      {config.description}
                    </span>
                  </span>
                </span>

                {available ? (
                  <span
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        selectAllForLevel(config)
                      }
                      style={{
                        padding: "10px 15px",
                        borderRadius: "11px",
                        border:
                          "1px solid #4f46e5",
                        background: "white",
                        color: "#4f46e5",
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      Select all
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        clearAllForLevel(config.level)
                      }
                      style={{
                        padding: "10px 15px",
                        borderRadius: "11px",
                        border:
                          "1px solid #d1d5db",
                        background: "white",
                        color: "#6b7280",
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      Clear
                    </button>
                  </span>
                ) : (
                  <strong style={{ color: "#6b7280" }}>
                    Coming soon
                  </strong>
                )}
              </div>

              {available && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {chapters.map((item) => {
                    const selected =
                      selectedForLevel.includes(
                        item.chapter
                      );

                    const cardCount =
                      config.cards.filter(
                        (card) =>
                          card.chapter === item.chapter
                      ).length;

                    return (
                      <button
                        key={item.chapter}
                        type="button"
                        onClick={() =>
                          toggleChapter(
                            config.level,
                            item.chapter
                          )
                        }
                        style={{
                          padding: "19px",
                          borderRadius: "16px",
                          border: selected
                            ? "2px solid #4f46e5"
                            : "1px solid #d1d5db",
                          background: selected
                            ? "#eef2ff"
                            : "white",
                          textAlign: "left",
                          cursor: "pointer",
                          color: "inherit",
                        }}
                      >
                        <strong
                          style={{
                            display: "block",
                            marginBottom: "6px",
                            fontSize: "18px",
                          }}
                        >
                          {selected ? "✓ " : ""}
                          Chapter {item.chapter}
                        </strong>

                        <span
                          style={{
                            display: "block",
                            marginBottom: "7px",
                            color: "#374151",
                          }}
                        >
                          {item.title}
                        </span>

                        <span
                          style={{
                            color: "#6b7280",
                            fontSize: "14px",
                          }}
                        >
                          {cardCount} flashcards
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </article>
          );
        })}
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
                  : Math.min(
                      sessionSize,
                      selectedCards.length
                    )
              } cards →`}
        </button>
      </section>
    </main>
  );
}