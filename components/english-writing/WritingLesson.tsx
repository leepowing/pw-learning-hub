"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { Lesson } from "@/lib/englishWriting/types";
import { writingRequest } from "@/lib/englishWriting/client";
import { useWriting } from "./WritingProvider";

export default function WritingLesson({ lesson }: { lesson: Lesson }) {
  const { data, refresh } = useWriting();
  const [answers, setAnswers] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [micro, setMicro] = useState("");
  const [example, setExample] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const key = data ? `english-writing-lesson:${data.userId}:${lesson.week}` : "";
  /* eslint-disable react-hooks/set-state-in-effect -- Restore the external account-scoped practice draft after hydration. */
  useEffect(() => {
    if (!key) return;
    try { const saved = JSON.parse(localStorage.getItem(key) ?? "null"); if (saved) { setMicro(saved.micro ?? ""); setAnswers(saved.answers ?? []); } } catch { /* Keep a fresh lesson. */ }
  }, [key]);
  /* eslint-enable react-hooks/set-state-in-effect */
  useEffect(() => { if (key && (micro || answers.length)) { try { localStorage.setItem(key, JSON.stringify({ micro, answers })); } catch { /* Cloud completion remains available. */ } } }, [key, micro, answers]);
  const allCorrect = lesson.checks.every((check, i) => answers[i] === check.answer);
  async function complete() {
    setBusy(true); setMessage("");
    try {
      await writingRequest("work", { expectedUserId: data?.userId, action: "lesson", week: lesson.week, answers, microAnswer: micro });
      await refresh(); setMessage("Lesson saved. You are ready to write independently.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Please try again."); }
    finally { setBusy(false); }
  }
  return <main>
    <div className="ew-page-heading"><p className="ew-eyebrow">WEEK {lesson.week} · SESSION 1</p><h1>{lesson.title}</h1><p>{lesson.subtitle}</p></div>
    <section className="ew-card"><h2>By the end of this lesson</h2><ul>{lesson.goals.map(goal => <li key={goal}>{goal}</li>)}</ul></section>
    <div className="ew-grid ew-grid-2 ew-spaced">{lesson.teaching.map((part, i) => <section className="ew-card" key={part.title}><span className="ew-eyebrow">0{i + 1}</span><h2>{part.title}</h2><p>{part.text}</p></section>)}</div>
    <section className="ew-card ew-spaced"><h2>Read like a writer</h2><div className="ew-grid ew-grid-2"><div className="ew-example"><h3>A first version</h3><p>{lesson.before}</p></div><div className="ew-example ew-example-improved"><h3>A more controlled version</h3><p>{lesson.after}</p></div></div><p>{lesson.commentary}</p><p className="ew-muted">This is one possible revision. Your own writing can take a different approach.</p></section>
    <section className="ew-card ew-spaced"><h2>Words worth trying</h2><div className="ew-grid ew-grid-3">{lesson.vocabulary.map(item => <div key={item.word}><h3>{item.word}</h3><p>{item.meaning}</p><p><em>{item.example}</em></p></div>)}</div></section>
    <section className="ew-card ew-spaced"><h2>Quick checks</h2>{lesson.checks.map((check, i) => <fieldset className="ew-check" key={check.question}><legend>{i + 1}. {check.question}</legend>{check.options.map((option, n) => <label className="ew-radio" key={option}><input type="radio" name={`check-${i}`} value={n} checked={answers[i] === n} onChange={() => { setAnswers(old => { const next = [...old]; next[i] = n; return next; }); setChecked(false); }} />{option}</label>)}{checked && <p className={answers[i] === check.answer ? "ew-success" : "ew-error-text"}>{answers[i] === check.answer ? "Correct. " : "Try again. "}{check.explanation}</p>}</fieldset>)}<button className="ew-small-button" onClick={() => setChecked(true)}>Check my answers</button></section>
    <section className="ew-card ew-spaced"><h2>Try it yourself</h2><p>{lesson.microPrompt}</p><label className="ew-label" htmlFor="micro-writing">Your short practice</label><textarea id="micro-writing" rows={6} maxLength={2000} value={micro} onChange={event => setMicro(event.target.value)} /><button className="ew-text-link" disabled={micro.trim().length < 20} onClick={() => setExample(!example)}>{example ? "Hide" : "After writing, compare with"} one possible approach</button>{example && <div className="ew-example ew-spaced"><p>{lesson.microExample}</p><p className="ew-muted">Compare the choices. You do not need to copy this wording.</p></div>}<h3>Check your choices</h3><ul>{lesson.checklist.map(item => <li key={item}>{item}</li>)}</ul>
      <div className="ew-actions"><button className="ew-button" onClick={() => void complete()} disabled={busy || !checked || !allCorrect || micro.trim().length < 20}>{busy ? "Saving…" : data?.lessons.includes(lesson.week) ? "Save practice again" : "Complete lesson"}</button><Link className="ew-small-button" href={`/english-writing/task/${lesson.mainTaskId}`}>Next: independent writing →</Link></div><p role="status">{message}</p>
    </section>
  </main>;
}
