"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import katex from "katex";

import type { MathsFlashcard } from "@/data/maths/flashcards";

import {
  recordMathsFlashcardAnswer,
  syncMathsFlashcardProgress,
} from "@/lib/studentStorage";

import GeometryDiagram from "@/components/maths/GeometryDiagram";

type FormulaFlashcardsProps = {
  cards: MathsFlashcard[];
};

type ExitDirection = "left" | "right" | null;

function MathFormula({ formula }: { formula: string }) {
  const html = katex.renderToString(formula, {
    throwOnError: false,
    displayMode: true,
  });

  return (
    <div
      style={{
        overflowX: "auto",
        padding: "8px",
        fontSize: "20px",
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function FormulaFlashcards({
  cards,
}: FormulaFlashcardsProps) {
  const [queue, setQueue] = useState<MathsFlashcard[]>(cards);
  const [flipped, setFlipped] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [practice, setPractice] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [exitDirection, setExitDirection] =
    useState<ExitDirection>(null);

  const [progressReady, setProgressReady] =
  useState(false);

  const dragStartX = useRef<number | null>(null);
  const didDrag = useRef(false);

useEffect(() => {
  let active = true;

  async function prepareProgress() {
    await syncMathsFlashcardProgress();

    if (active) {
      setProgressReady(true);
    }
  }

  void prepareProgress();

  return () => {
    active = false;
  };
}, []);

  const currentCard = queue[0];
  const totalAttempts = correct + practice;

  const accuracy =
    totalAttempts === 0
      ? 0
      : Math.round((correct / totalAttempts) * 100);

  function resetSession() {
    setQueue([...cards]);
    setFlipped(false);
    setCorrect(0);
    setPractice(0);
    setDragOffset(0);
    setExitDirection(null);
  }

  function gradeCard(result: "correct" | "practice") {
    if (!currentCard || exitDirection !== null) {
      return;
    }

    recordMathsFlashcardAnswer(currentCard.id, result);

    setExitDirection(result === "correct" ? "left" : "right");

    window.setTimeout(() => {
      setQueue((currentQueue) => {
        const remainingCards = currentQueue.slice(1);

        if (result === "practice") {
          return [...remainingCards, currentQueue[0]];
        }

        return remainingCards;
      });

      if (result === "correct") {
        setCorrect((value) => value + 1);
      } else {
        setPractice((value) => value + 1);
      }

      setFlipped(false);
      setDragOffset(0);
      setExitDirection(null);
    }, 350);
  }

  function handlePointerDown(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    if (!flipped || exitDirection !== null) {
      return;
    }

    dragStartX.current = event.clientX;
    didDrag.current = false;
  }

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    if (
      dragStartX.current === null ||
      !flipped ||
      exitDirection !== null
    ) {
      return;
    }

    const distance = event.clientX - dragStartX.current;

    if (Math.abs(distance) > 8) {
      didDrag.current = true;
    }

    setDragOffset(distance);
  }

  function handlePointerUp() {
    if (dragStartX.current === null) {
      return;
    }

    dragStartX.current = null;

    if (dragOffset <= -90) {
      gradeCard("correct");
      return;
    }

    if (dragOffset >= 90) {
      gradeCard("practice");
      return;
    }

    setDragOffset(0);
  }

  const cardOffset =
    exitDirection === "left"
      ? -900
      : exitDirection === "right"
        ? 900
        : dragOffset;

  if (cards.length === 0) {
    return (
      <section
        style={{
          padding: "36px",
          borderRadius: "24px",
          background: "white",
          textAlign: "center",
        }}
      >
        <h2>No flashcards are available.</h2>
      </section>
    );
  }

if (!progressReady) {
  return (
    <section
      style={{
        padding: "36px",
        borderRadius: "24px",
        background: "white",
        textAlign: "center",
      }}
    >
      <h2>Loading your progress...</h2>
      <p style={{ color: "#6b7280" }}>
        Syncing flashcard records with Supabase.
      </p>
    </section>
  );
}

  if (!currentCard) {
    return (
      <section
        style={{
          padding: "40px",
          borderRadius: "26px",
          background: "#ecfdf5",
          border: "1px solid #86efac",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            color: "#166534",
            fontWeight: 800,
            letterSpacing: "1px",
          }}
        >
          SESSION COMPLETE
        </p>

        <h2
          style={{
            margin: "0 0 12px",
            fontSize: "38px",
          }}
        >
          {correct} cards remembered
        </h2>

        <p
          style={{
            marginBottom: "28px",
            color: "#4b5563",
            fontSize: "18px",
          }}
        >
          Accuracy: {accuracy}%
        </p>

        <button
          type="button"
          onClick={resetSession}
          style={{
            border: "none",
            borderRadius: "16px",
            padding: "16px 32px",
            background: "#16a34a",
            color: "white",
            fontSize: "18px",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Practise again
        </button>
      </section>
    );
  }

  return (
    <section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        {[
          ["Remaining", queue.length],
          ["Correct", correct],
          ["Need practice", practice],
          ["Accuracy", `${accuracy}%`],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              padding: "16px",
              borderRadius: "16px",
              background: "white",
              border: "1px solid #e5e7eb",
              textAlign: "center",
            }}
          >
            <strong
              style={{
                display: "block",
                fontSize: "24px",
              }}
            >
              {value}
            </strong>

            <span style={{ color: "#6b7280" }}>{label}</span>
          </div>
        ))}
      </div>

      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={() => {
          if (didDrag.current) {
            didDrag.current = false;
            return;
          }

          if (exitDirection === null) {
            setFlipped((value) => !value);
          }
        }}
        style={{
          transform: `translateX(${cardOffset}px) rotate(${
            cardOffset / 40
          }deg)`,
          opacity: exitDirection === null ? 1 : 0,
          transition:
            dragStartX.current === null
              ? "transform 350ms ease, opacity 350ms ease"
              : "none",
          cursor: "pointer",
          touchAction: "pan-y",
          perspective: "1200px",
        }}
      >
        <div
          style={{
            position: "relative",
            minHeight: "430px",
            transformStyle: "preserve-3d",
            transform: flipped
              ? "rotateY(180deg)"
              : "rotateY(0deg)",
            transition: "transform 500ms ease",
          }}
        >
          <article
            style={{
              position: "absolute",
              inset: 0,
              padding: "42px",
              borderRadius: "28px",
              background:
                "linear-gradient(135deg, #eef2ff, #ffffff)",
              border: "2px solid #c7d2fe",
              boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
              backfaceVisibility: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#4f46e5",
                fontWeight: 800,
                letterSpacing: "1px",
              }}
            >
              {currentCard.level.toUpperCase()} · CHAPTER{" "}
              {currentCard.chapter}
            </p>

<h2
  style={{
    margin: "12px 0",
    fontSize: "34px",
    lineHeight: 1.3,
  }}
>
  {currentCard.prompt}
</h2>

{currentCard.questionFormula && (
  <div
    style={{
      margin: "6px auto 18px",
      maxWidth: "760px",
      width: "100%",
      padding: "14px 18px",
      borderRadius: "16px",
      background: "rgba(255, 255, 255, 0.8)",
      border: "1px solid #c7d2fe",
    }}
  >
    <MathFormula formula={currentCard.questionFormula} />
  </div>
)}

<p style={{ color: "#6b7280" }}>
              Click the card to reveal the answer.
            </p>
          </article>

          <article
            style={{
              position: "absolute",
              inset: 0,
              padding: "34px",
              borderRadius: "28px",
              background:
                "linear-gradient(135deg, #ecfdf5, #ffffff)",
              border: "2px solid #86efac",
              boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              overflow: "auto",
            }}
          >
            <p
              style={{
                color: "#15803d",
                fontWeight: 800,
                letterSpacing: "1px",
              }}
            >
              ANSWER
            </p>

            {currentCard.diagram && (
              <GeometryDiagram diagram={currentCard.diagram} />
            )}

            {currentCard.formula && (
              <MathFormula formula={currentCard.formula} />
            )}

            {currentCard.answer && (
              <h2>{currentCard.answer}</h2>
            )}

            {currentCard.explanation && (
              <p
                style={{
                  margin: "18px auto 0",
                  maxWidth: "680px",
                  color: "#4b5563",
                  fontSize: "17px",
                  lineHeight: 1.6,
                }}
              >
                {currentCard.explanation}
              </p>
            )}
          </article>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginTop: "22px",
        }}
      >
        <button
          type="button"
          disabled={!flipped || exitDirection !== null}
          onClick={() => gradeCard("correct")}
          style={{
            border: "none",
            borderRadius: "18px",
            padding: "18px",
            background: flipped ? "#16a34a" : "#d1d5db",
            color: "white",
            fontSize: "18px",
            fontWeight: 800,
            cursor: flipped ? "pointer" : "not-allowed",
          }}
        >
          ← I remembered
        </button>

        <button
          type="button"
          disabled={!flipped || exitDirection !== null}
          onClick={() => gradeCard("practice")}
          style={{
            border: "none",
            borderRadius: "18px",
            padding: "18px",
            background: flipped ? "#f97316" : "#d1d5db",
            color: "white",
            fontSize: "18px",
            fontWeight: 800,
            cursor: flipped ? "pointer" : "not-allowed",
          }}
        >
          I need more practice →
        </button>
      </div>

      <p
        style={{
          marginTop: "16px",
          textAlign: "center",
          color: "#6b7280",
        }}
      >
        Reveal the answer, then swipe left if you remembered it or
        swipe right if you need more practice.
      </p>
    </section>
  );
}
