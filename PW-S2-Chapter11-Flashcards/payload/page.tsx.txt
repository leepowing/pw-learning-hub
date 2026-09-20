"use client";

import { useState } from "react";
import Link from "next/link";
import FormulaFlashcards from "@/components/maths/FormulaFlashcards";
import { s2Chapter11Flashcards } from "@/data/maths/flashcards/s2chapter11";

export default function S2Chapter11FlashcardsPage() {
  const [cards, setCards] = useState<typeof s2Chapter11Flashcards | null>(null);
  const [selected, setSelected] = useState<string[]>(Array.from(new Set(s2Chapter11Flashcards.map(card => card.section))));
  const sections = Array.from(new Set(s2Chapter11Flashcards.map(card => card.section)));
  const available = s2Chapter11Flashcards.filter(card => selected.includes(card.section));

  function start() {
    if (!available.length) return;
    const shuffled = [...available];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
  }

  return <main className="page">
    <Link href="/maths/s2/chapter-11" className="backLink">← Back to Chapter 11</Link>
    <header><p className="eyebrow">S2 · CHAPTER 11 · FLASHCARDS</p><h1>Pythagoras’ Theorem and Irrational Numbers</h1><p>Recall roots, right-angled triangles, rational numbers and surd operations.</p></header>
    {cards ? <><div className="sessionToolbar"><button type="button" onClick={() => setCards(null)}>← Change sections</button><span>{cards.length} cards in this session</span></div><FormulaFlashcards key={cards.map(card => card.id).join(",")} cards={cards} /></> : <section className="selection">
      <h2>Choose sections to practise</h2><p>Include the sections you have studied. Cards are shuffled when you start.</p>
      <div className="options">{sections.map((section, index) => <label key={section}><input type="checkbox" checked={selected.includes(section)} onChange={() => setSelected(current => current.includes(section) ? current.filter(item => item !== section) : [...current, section])} /><span><strong>Section 11.{index + 1} · {section}</strong><small>{s2Chapter11Flashcards.filter(card => card.section === section).length} flashcards</small></span></label>)}</div>
      <p role="status"><strong>{available.length} cards selected</strong></p><button type="button" className="start" disabled={!available.length} onClick={start}>Start Flashcards →</button>
      <div className="links"><Link href="/maths/flashcards?level=s2&chapter=11">Choose across levels and chapters →</Link><Link href="/maths/flashcards/review">Start Smart Review →</Link><Link href="/maths/flashcards/progress">View my progress →</Link></div>
    </section>}
    <style jsx>{`
      .page { max-width: 1100px; width: calc(100% - 40px); margin: 40px auto 72px; color: #172d50; font-size: 18px; line-height: 1.6; }
      .page :global(*) { box-sizing: border-box; }
      .page :global(.backLink) { display: inline-block; margin-bottom: 24px; color: #047857; font-weight: 800; text-decoration: none; }
      header { margin-bottom: 30px; }
      .eyebrow { color: #6d28d9; font-size: 14px; font-weight: 900; letter-spacing: .08em; }
      h1 { margin: 0 0 16px; font-size: clamp(32px, 5vw, 48px); line-height: 1.2; }
      h2 { margin-top: 0; font-size: 26px; }
      header > p:last-child, .selection > p { color: #52657e; }
      .selection { background: white; border: 1px solid #cbd5e1; border-radius: 24px; padding: 30px; }
      .options { display: grid; gap: 12px; margin: 25px 0; }
      label { display: flex; gap: 14px; align-items: flex-start; padding: 18px; border: 1px solid #cbd5e1; border-radius: 15px; cursor: pointer; }
      input { margin-top: 5px; width: 21px; height: 21px; accent-color: #6d28d9; flex-shrink: 0; }
      small { display: block; font-size: 15px; color: #52657e; margin-top: 4px; }
      button { font: inherit; font-size: 17px; font-weight: 800; padding: 13px 20px; min-height: 48px; border-radius: 13px; border: 1px solid #c4b5fd; color: #6d28d9; background: white; cursor: pointer; }
      .start { color: white; background: #6d28d9; }
      button:disabled { background: #e2e8f0; color: #64748b; border-color: #cbd5e1; cursor: not-allowed; }
      .links { display: flex; flex-wrap: wrap; gap: 14px 24px; margin-top: 28px; }
      .links :global(a) { color: #047857; font-weight: 750; font-size: 16px; }
      .sessionToolbar { display: flex; align-items: center; flex-wrap: wrap; gap: 18px; justify-content: space-between; margin-bottom: 25px; }
      .page :global(button:focus-visible), .page :global(a:focus-visible), input:focus-visible { outline: 3px solid #2563eb; outline-offset: 4px; }
      @media(max-width: 560px) { .selection { padding: 20px 16px; } label { padding: 14px; } .links { flex-direction: column; } }
    `}</style>
  </main>;
}
