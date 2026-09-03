"use client";

import { useEffect, useRef, useState } from "react";
import katex from "katex";

import type { MathsFlashcard } from "@/data/maths/flashcards";
import { recordMathsFlashcardAnswer, syncMathsFlashcardProgress } from "@/lib/studentStorage";
import GeometryDiagram from "@/components/maths/GeometryDiagram";
import Chapter9FlashcardDiagram, { type Chapter9FlashcardDiagramKind } from "@/components/maths/Chapter9FlashcardDiagram";
import Chapter10FlashcardDiagram, { type Chapter10FlashcardDiagramKind } from "@/components/maths/Chapter10FlashcardDiagram";
import Chapter12FlashcardDiagram, { type Chapter12FlashcardDiagramKind } from "@/components/maths/Chapter12FlashcardDiagram";

type VisualMathsFlashcard = MathsFlashcard & {
  frontDiagram?: Chapter9FlashcardDiagramKind;
  chapter10Diagram?: Chapter10FlashcardDiagramKind;
  chapter12Diagram?: Chapter12FlashcardDiagramKind;
};

type Props = { cards: VisualMathsFlashcard[] };
type ExitDirection = "left" | "right" | null;

function MathFormula({ formula }: { formula: string }) {
  const html = katex.renderToString(formula, { throwOnError: false, displayMode: true });
  return <div style={{ overflowX: "auto", padding: 8, fontSize: 20 }} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function FormulaFlashcards({ cards }: Props) {
  const [queue, setQueue] = useState<VisualMathsFlashcard[]>(cards);
  const [flipped, setFlipped] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [practice, setPractice] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [exitDirection, setExitDirection] = useState<ExitDirection>(null);
  const [progressReady, setProgressReady] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const didDrag = useRef(false);

  useEffect(() => {
    let active = true;
    void syncMathsFlashcardProgress().then(() => {
      if (active) setProgressReady(true);
    });
    return () => { active = false; };
  }, []);

  const currentCard = queue[0];
  const totalAttempts = correct + practice;
  const accuracy = totalAttempts === 0 ? 0 : Math.round((correct / totalAttempts) * 100);

  function resetSession() {
    setQueue([...cards]);
    setFlipped(false);
    setCorrect(0);
    setPractice(0);
    setDragOffset(0);
    setExitDirection(null);
  }

  function gradeCard(result: "correct" | "practice") {
    if (!currentCard || !flipped || exitDirection !== null) return;
    recordMathsFlashcardAnswer(currentCard.id, result);
    setExitDirection(result === "correct" ? "left" : "right");
    window.setTimeout(() => {
      setQueue((currentQueue) => {
        const remainingCards = currentQueue.slice(1);
        return result === "practice" ? [...remainingCards, currentQueue[0]] : remainingCards;
      });
      if (result === "correct") setCorrect((value) => value + 1);
      else setPractice((value) => value + 1);
      setFlipped(false);
      setDragOffset(0);
      setExitDirection(null);
    }, 350);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (!flipped || exitDirection !== null) return;
    dragStartX.current = event.clientX;
    didDrag.current = false;
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (dragStartX.current === null || !flipped || exitDirection !== null) return;
    const distance = event.clientX - dragStartX.current;
    if (Math.abs(distance) > 8) didDrag.current = true;
    setDragOffset(distance);
  }

  function handlePointerUp() {
    if (dragStartX.current === null) return;
    dragStartX.current = null;
    if (dragOffset <= -90) return gradeCard("correct");
    if (dragOffset >= 90) return gradeCard("practice");
    setDragOffset(0);
  }

  if (cards.length === 0) {
    return <section style={messagePanel}><h2>No flashcards are available.</h2></section>;
  }

  if (!progressReady) {
    return <section style={messagePanel}><h2>Loading your progress...</h2><p style={{ color: "#6b7280" }}>Syncing flashcard records.</p></section>;
  }

  if (!currentCard) {
    return (
      <section style={{ ...messagePanel, background: "#ecfdf5", border: "1px solid #86efac" }}>
        <p style={{ margin: "0 0 8px", color: "#166534", fontWeight: 800, letterSpacing: 1 }}>SESSION COMPLETE</p>
        <h2 style={{ margin: "0 0 12px", fontSize: 38 }}>{correct} cards remembered</h2>
        <p style={{ marginBottom: 28, color: "#4b5563", fontSize: 18 }}>Accuracy: {accuracy}%</p>
        <button type="button" onClick={resetSession} style={primaryButton("#16a34a")}>Practise again</button>
      </section>
    );
  }

  const hasFrontVisual = Boolean(currentCard.frontDiagram || currentCard.chapter10Diagram || currentCard.chapter12Diagram);
  const cardOffset = exitDirection === "left" ? -900 : exitDirection === "right" ? 900 : dragOffset;

  return (
    <section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 24 }}>
        {[["Remaining", queue.length], ["Correct", correct], ["Need practice", practice], ["Accuracy", `${accuracy}%`]].map(([label, value]) => (
          <div key={label} style={{ padding: 16, borderRadius: 16, background: "white", border: "1px solid #e5e7eb", textAlign: "center" }}>
            <strong style={{ display: "block", fontSize: 24 }}>{value}</strong>
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
          if (didDrag.current) { didDrag.current = false; return; }
          if (exitDirection === null) setFlipped((value) => !value);
        }}
        style={{
          transform: `translateX(${cardOffset}px) rotate(${cardOffset / 40}deg)`,
          opacity: exitDirection === null ? 1 : 0,
          transition: dragStartX.current === null ? "transform 350ms ease, opacity 350ms ease" : "none",
          cursor: "pointer",
          touchAction: "pan-y",
          perspective: 1200,
        }}
      >
        <div style={{ position: "relative", minHeight: hasFrontVisual ? 560 : 430, transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", transition: "transform 500ms ease" }}>
          <article style={cardFace("linear-gradient(135deg, #eef2ff, #ffffff)", "#c7d2fe")}>
            <p style={{ color: "#4f46e5", fontWeight: 800, letterSpacing: 1 }}>{currentCard.level.toUpperCase()} · CHAPTER {currentCard.chapter}</p>
            {currentCard.frontDiagram && <Chapter9FlashcardDiagram kind={currentCard.frontDiagram} />}
            {currentCard.chapter10Diagram && <Chapter10FlashcardDiagram kind={currentCard.chapter10Diagram} />}
            {currentCard.chapter12Diagram && <Chapter12FlashcardDiagram kind={currentCard.chapter12Diagram} />}
            <h2 style={{ margin: hasFrontVisual ? "4px 0 10px" : undefined, fontSize: hasFrontVisual ? 28 : 34, lineHeight: 1.3 }}>{currentCard.prompt}</h2>
            <p style={{ color: "#6b7280" }}>Click the card to reveal the answer.</p>
          </article>

          <article style={{ ...cardFace("linear-gradient(135deg, #ecfdf5, #ffffff)", "#86efac"), transform: "rotateY(180deg)", overflow: "auto" }}>
            <p style={{ color: "#15803d", fontWeight: 800, letterSpacing: 1 }}>ANSWER</p>
            {currentCard.diagram && <GeometryDiagram diagram={currentCard.diagram} />}
            {currentCard.formula && <MathFormula formula={currentCard.formula} />}
            {currentCard.answer && <h2>{currentCard.answer}</h2>}
            {currentCard.explanation && <p style={{ margin: "18px auto 0", maxWidth: 680, color: "#4b5563", fontSize: 17, lineHeight: 1.6 }}>{currentCard.explanation}</p>}
          </article>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 22 }}>
        <button type="button" disabled={!flipped || exitDirection !== null} onClick={() => gradeCard("correct")} style={gradeButton(flipped, "#16a34a")}>← I remembered</button>
        <button type="button" disabled={!flipped || exitDirection !== null} onClick={() => gradeCard("practice")} style={gradeButton(flipped, "#f97316")}>I need more practice →</button>
      </div>
      {!flipped && <p style={{ textAlign: "center", color: "#6b7280", marginTop: 12 }}>Reveal the answer before grading this card.</p>}
    </section>
  );
}

const messagePanel = { padding: 36, borderRadius: 24, background: "white", textAlign: "center" as const };

function cardFace(background: string, borderColor: string) {
  return {
    position: "absolute" as const,
    inset: 0,
    padding: 34,
    borderRadius: 28,
    background,
    border: `2px solid ${borderColor}`,
    boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
    backfaceVisibility: "hidden" as const,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    textAlign: "center" as const,
  };
}

function primaryButton(background: string) {
  return { border: "none", borderRadius: 16, padding: "16px 32px", background, color: "white", fontSize: 18, fontWeight: 800, cursor: "pointer" };
}

function gradeButton(enabled: boolean, background: string) {
  return { border: "none", borderRadius: 18, padding: 18, background: enabled ? background : "#d1d5db", color: "white", fontSize: 18, fontWeight: 800, cursor: enabled ? "pointer" : "not-allowed" };
}
