"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import FormulaFlashcards from "@/components/maths/FormulaFlashcards";
import { s4Chapter5LessonCards } from "./lessonCards";

const lessonSections = Array.from(new Set(s4Chapter5LessonCards.map(card => card.section)));

export default function S4Chapter5LessonFlashcardsPage() {
  const [selected, setSelected] = useState<string[]>(lessonSections);
  const [session, setSession] = useState<typeof s4Chapter5LessonCards | null>(null);
  const [sessionSize, setSessionSize] = useState("all");
  const available = useMemo(() => s4Chapter5LessonCards.filter(card => selected.includes(card.section)), [selected]);

  function startSession() {
    if (!available.length) return;
    const deck = [...available];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    const limit = sessionSize === "all" ? deck.length : Number(sessionSize);
    setSession(deck.slice(0, limit));
  }

  return <main className="chapter-five-flashcards">
    <Link className="back" href="/maths/s4/chapter-5">← Back to Chapter 5</Link>
    <p className="eyebrow">S4 · CHAPTER 5 · LESSON FLASHCARDS</p>
    <h1>More about Polynomials</h1>
    <p className="intro">Revise worked examples, applications and common mistakes across Sections 5.1–5.5. These lesson cards are separate from S4 Formula Flashcards.</p>
    {session ? <>
      <div className="session-bar"><button type="button" onClick={() => setSession(null)}>← Change sections</button><strong>{session.length} lesson cards</strong></div>
      <FormulaFlashcards key={session.map(card => card.id).join("|")} cards={session} />
    </> : <section className="selector">
      <h2>Choose sections to practise</h2>
      <p>Choose the sections you have studied. Cards are shuffled within each session.</p>
      <div className="section-list">{lessonSections.map(section => <label key={section}>
        <input type="checkbox" checked={selected.includes(section)} onChange={() => setSelected(current => current.includes(section) ? current.filter(s => s !== section) : [...current, section])} />
        <span><strong>Section {section}</strong><small>{s4Chapter5LessonCards.filter(c => c.section === section).length} lesson cards</small></span>
      </label>)}</div>
      <h2>Session size</h2>
      <div className="sizes">{["10", "20", "30", "all"].map(size => <label key={size}><input type="radio" name="session-size" value={size} checked={sessionSize === size} onChange={() => setSessionSize(size)} /> {size === "all" ? "All selected" : size}</label>)}</div>
      <p className="selected-count">{available.length} lesson cards available</p>
      <button className="start" type="button" disabled={available.length === 0} onClick={startSession}>Start Lesson Flashcards →</button>
      <p className="note">Formula-only practice is available separately from S4 Mathematics. This page does not add cards to the global formula catalogue.</p>
    </section>}
    <style jsx>{`
      .chapter-five-flashcards{max-width:1100px;width:calc(100% - 40px);margin:42px auto 72px;color:#172d50;font-size:18px;line-height:1.6}
      .back{color:#047857;font-weight:800;text-decoration:none}.eyebrow{color:#047857;font-size:14px;font-weight:900;letter-spacing:.09em;margin:26px 0 3px}
      h1{font-size:clamp(32px,5vw,46px);line-height:1.2;margin:0 0 10px}h2{font-size:25px;margin:0 0 12px}.intro{color:#64748b;margin:0 0 30px}
      .selector{border:1px solid #dbe3ee;background:white;border-radius:24px;padding:30px;box-shadow:0 6px 18px #0f172a08}
      .selector>p{color:#64748b}.section-list{display:grid;gap:12px;margin:22px 0 26px}.section-list label{display:flex;align-items:center;gap:15px;padding:17px;border:1px solid #e2e8f0;border-radius:14px;cursor:pointer}
      input[type=checkbox], input[type=radio]{width:20px;height:20px;accent-color:#059669;flex-shrink:0}.section-list span{display:flex;flex-direction:column;gap:3px}.section-list small{font-size:15px;color:#64748b}
      .sizes{display:flex;flex-wrap:wrap;gap:12px;margin:10px 0 20px}.sizes label{display:flex;gap:7px;align-items:center;padding:10px 14px;border:1px solid #e2e8f0;border-radius:12px;cursor:pointer}
      .selected-count{font-weight:700}.start{display:block;background:#059669;border:0;color:white;padding:15px 23px;border-radius:13px;font:inherit;font-weight:800;cursor:pointer}.start:disabled{background:#cbd5e1;cursor:not-allowed}
      .note{margin-top:20px;font-size:15px}.session-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px}.session-bar button{font:inherit;padding:10px 15px;border:1px solid #d0dae6;border-radius:12px;background:white;cursor:pointer}
      @media(max-width:760px){.chapter-five-flashcards{width:calc(100% - 24px);margin-top:25px}.selector{padding:20px}}
    `}</style>
  </main>;
}
