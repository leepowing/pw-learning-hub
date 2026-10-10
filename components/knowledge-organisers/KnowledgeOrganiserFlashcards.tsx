"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import type { KnowledgeFlashcard } from "@/data/knowledgeOrganisers/types";

type ExitDirection = "left" | "right" | null;

export default function KnowledgeOrganiserFlashcards({ cards }: { cards: KnowledgeFlashcard[] }) {
  const [queue, setQueue] = useState<KnowledgeFlashcard[]>(cards);
  const [flipped, setFlipped] = useState(false);
  const [remembered, setRemembered] = useState(0);
  const [practice, setPractice] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [exitDirection, setExitDirection] = useState<ExitDirection>(null);
  const dragStartX = useRef<number | null>(null);
  const didDrag = useRef(false);

  const currentCard = queue[0];
  const totalAttempts = remembered + practice;
  const accuracy = totalAttempts === 0 ? 0 : Math.round((remembered / totalAttempts) * 100);

  function resetSession() {
    setQueue([...cards]);
    setFlipped(false);
    setRemembered(0);
    setPractice(0);
    setDragOffset(0);
    setIsDragging(false);
    setExitDirection(null);
  }

  function gradeCard(result: "remembered" | "practice") {
    if (!currentCard || !flipped || exitDirection !== null) return;

    setExitDirection(result === "remembered" ? "left" : "right");

    window.setTimeout(() => {
      setQueue(currentQueue => {
        const remainingCards = currentQueue.slice(1);
        return result === "practice"
          ? [...remainingCards, currentQueue[0]]
          : remainingCards;
      });
      if (result === "remembered") setRemembered(value => value + 1);
      else setPractice(value => value + 1);
      setFlipped(false);
      setDragOffset(0);
      setExitDirection(null);
    }, 350);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!flipped || exitDirection !== null) return;
    dragStartX.current = event.clientX;
    didDrag.current = false;
    setIsDragging(true);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (dragStartX.current === null || !flipped || exitDirection !== null) return;
    const distance = event.clientX - dragStartX.current;
    if (Math.abs(distance) > 8) didDrag.current = true;
    setDragOffset(distance);
  }

  function handlePointerUp() {
    if (dragStartX.current === null) return;
    dragStartX.current = null;
    setIsDragging(false);
    if (dragOffset <= -90) return gradeCard("remembered");
    if (dragOffset >= 90) return gradeCard("practice");
    setDragOffset(0);
  }

  function flipCard() {
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
    if (exitDirection === null) setFlipped(value => !value);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    flipCard();
  }

  if (cards.length === 0) {
    return <div className="message"><h3>No flashcards are available.</h3></div>;
  }

  if (!currentCard) {
    return <div className="message complete">
      <p className="completeLabel">SESSION COMPLETE</p>
      <h3>{remembered} cards remembered</h3>
      <p>Accuracy: {accuracy}%</p>
      <button type="button" className="restart" onClick={resetSession}>Practise again</button>
      <style jsx>{styles}</style>
    </div>;
  }

  const cardOffset = exitDirection === "left" ? -900 : exitDirection === "right" ? 900 : dragOffset;

  return <div className="deck">
    <div className="stats">
      <Stat label="Remaining" value={queue.length} />
      <Stat label="Remembered" value={remembered} />
      <Stat label="Need practice" value={practice} />
      <Stat label="Accuracy" value={`${accuracy}%`} />
    </div>

    <div
      className="cardMotion"
      role="button"
      tabIndex={0}
      aria-label={flipped ? "Show the question" : "Reveal the answer"}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={flipCard}
      onKeyDown={handleKeyDown}
      style={{
        transform: `translateX(${cardOffset}px) rotate(${cardOffset / 40}deg)`,
        opacity: exitDirection === null ? 1 : 0,
        transition: isDragging ? "none" : "transform 350ms ease, opacity 350ms ease",
      }}
    >
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <article className="face front">
          <p>QUESTION</p>
          <h3>{currentCard.front}</h3>
          <small>Click the card to reveal the answer.</small>
        </article>
        <article className="face back">
          <p>ANSWER</p>
          <h3>{currentCard.back}</h3>
          <small>Swipe left if remembered, or right to practise again.</small>
        </article>
      </div>
    </div>

    <div className="gradeButtons">
      <button type="button" disabled={!flipped || exitDirection !== null} onClick={() => gradeCard("remembered")}>← I remembered</button>
      <button type="button" disabled={!flipped || exitDirection !== null} onClick={() => gradeCard("practice")}>I need more practice →</button>
    </div>
    {!flipped && <p className="hint">Reveal the answer before grading this card.</p>}

    <style jsx>{styles}</style>
  </div>;
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return <div style={{ padding: 16, border: "1px solid #e5e7eb", borderRadius: 16, background: "#fff", textAlign: "center" }}>
    <strong style={{ display: "block", fontSize: 24 }}>{value}</strong>
    <span style={{ display: "block", color: "#6b7280" }}>{label}</span>
  </div>;
}

const styles = `
  .deck{margin-top:24px}.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:24px}.stats div{padding:16px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;text-align:center}.stats strong,.stats span{display:block}.stats strong{font-size:24px}.stats span{color:#6b7280}.cardMotion{cursor:pointer;touch-action:pan-y;perspective:1200;outline:none}.cardMotion:focus-visible{border-radius:28px;box-shadow:0 0 0 4px var(--ko-primary-ring)}.card{position:relative;min-height:430px;transform-style:preserve-3d;transition:transform 500ms ease}.card.flipped{transform:rotateY(180deg)}.face{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;padding:34px;border:2px solid;border-radius:28px;box-shadow:0 18px 45px rgba(0,0,0,.08);backface-visibility:hidden;text-align:center}.front{border-color:var(--ko-primary-border);background:linear-gradient(135deg,var(--ko-primary-soft),#fff)}.back{transform:rotateY(180deg);border-color:#86efac;background:linear-gradient(135deg,#ecfdf5,#fff)}.face p{margin:0 0 18px;color:var(--ko-primary);font-size:13px;font-weight:900;letter-spacing:.14em}.back p{color:#15803d}.face h3{margin:0 auto 22px;max-width:760px;font-size:clamp(25px,4vw,34px);line-height:1.35}.face small{color:#6b7280}.gradeButtons{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:22px}.gradeButtons button,.restart{border:0;border-radius:18px;padding:18px;color:#fff;font:inherit;font-size:18px;font-weight:800;cursor:pointer}.gradeButtons button:first-child,.restart{background:#16a34a}.gradeButtons button:last-child{background:var(--ko-primary-dark)}.gradeButtons button:disabled{cursor:not-allowed;background:#d1d5db}.hint{text-align:center;color:#6b7280}.message{padding:36px;border-radius:24px;background:#fff;text-align:center}.complete{border:1px solid #86efac;background:#ecfdf5}.completeLabel{margin:0 0 8px;color:#166534;font-weight:900;letter-spacing:.12em}.complete h3{margin:0 0 12px;font-size:38px}.complete>p:not(.completeLabel){margin-bottom:28px;color:#4b5563;font-size:18px}.restart{padding:16px 32px}@media(max-width:700px){.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.card{min-height:360px}.face{padding:22px}.gradeButtons{grid-template-columns:1fr}.complete h3{font-size:30px}}@media(prefers-reduced-motion:reduce){.card,.cardMotion{transition:none!important}}
`;
