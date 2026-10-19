"use client";
import Link from "next/link";
import { lessons, writingTasks } from "@/data/englishWriting/course";
import { recommendation } from "@/lib/englishWriting/progress";
import { useWriting } from "@/components/english-writing/WritingProvider";

export default function WritingHome() {
  const { data } = useWriting();
  const entries = data?.submissions ?? [];
  const completed = data?.lessons ?? [];
  const next = recommendation(entries, completed);
  return <main>
    <section className="ew-hero">
      <div><p className="ew-eyebrow">AQA ENGLISH LANGUAGE 8700 · FOUNDATIONS</p><h1>Your ideas.<br />A stronger voice.</h1><p>Build clear sentences, develop your ideas and learn to improve your own writing.</p><Link className="ew-button" href={next.href}>Continue learning →</Link></div>
      <aside className="ew-hero-note"><span className="ew-step-number">01—04</span><h2>A little practice.<br />A thoughtful revision.</h2><p>Three short sessions each week.<br />Learn · Write · Improve</p><span className="ew-pill">{completed.length} of 4 lessons completed</span></aside>
    </section>
    <section className="ew-next"><div><span className="ew-eyebrow">YOUR NEXT STEP</span><h2>{next.title}</h2><p>{next.text}</p></div><Link className="ew-text-link" href={next.href}>Open →</Link></section>
    <div className="ew-section-title"><h2>Find your starting point</h2><span>20 minutes each · separate sessions</span></div>
    <div className="ew-grid ew-grid-2">{writingTasks.filter(t => t.kind === "baseline").map(task => {
      const done = entries.some(s => s.task_id === task.id);
      return <Link key={task.id} href={`/english-writing/task/${task.id}`} className="ew-card ew-link-card"><span className="ew-eyebrow">{task.paper === 1 ? "CREATIVE WRITING" : "WRITING A VIEWPOINT"}</span><h3>{task.title.replace("Starting point: ", "")}</h3><p>{task.prompt}</p><span className="ew-text-link">{done ? "View feedback / revise" : "Start independently"} →</span></Link>;
    })}</div>
    <div className="ew-section-title"><h2>Your first four weeks</h2><span>Learn → Write → Improve</span></div>
    <div className="ew-week-list">{lessons.map(lesson => {
      const initial = entries.find(s => s.task_id === lesson.mainTaskId && !s.parent_id);
      const revised = entries.some(s => s.task_id === lesson.mainTaskId && s.parent_id);
      return <article className="ew-week ew-card" key={lesson.week}>
        <span className="ew-week-number">0{lesson.week}</span><div className="ew-week-copy"><p className="ew-eyebrow">{lesson.week % 2 ? "CREATIVE WRITING" : "WRITING A VIEWPOINT"}</p><h3>{lesson.title}</h3><p>{lesson.subtitle}</p>
        <div className="ew-actions"><Link className="ew-small-button" href={`/english-writing/lesson/${lesson.week}`}>{completed.includes(lesson.week) ? "✓ Review lesson" : "1. Learn & try"}</Link><Link className="ew-small-button" href={`/english-writing/task/${lesson.mainTaskId}`}>{initial ? "✓ View / revise writing" : "2. Write"}</Link><Link className="ew-small-button" href={`/english-writing/task/${lesson.mainTaskId}`}>{revised ? "✓ Revision saved" : "3. Improve"}</Link></div>
        <Link className="ew-text-link ew-transfer" href={`/english-writing/task/${lesson.transferTaskId}`}>A few days later: try a fresh prompt →</Link></div>
      </article>;
    })}</div>
    <div className="ew-section-title"><h2>When you are ready</h2><span>Optional sustained practice</span></div>
    <div className="ew-grid ew-grid-2">{writingTasks.filter(t => t.kind === "aqa").map(task => <Link key={task.id} href={`/english-writing/task/${task.id}`} className="ew-card ew-link-card"><span className="ew-eyebrow">PAPER {task.paper} · AQA-STYLE PRACTICE</span><h3>{task.title.split(": ")[1]}</h3><p>A sustained response with advisory AO5 /24 and AO6 /16 marks. Suggested practice time: 45 minutes.</p><span className="ew-text-link">Open task →</span></Link>)}</div>
    <p className="ew-footnote">All prompts and lesson examples are original PW Learning Hub materials. Short exercises receive skill feedback. AQA-style marks are advisory.</p>
  </main>;
}
