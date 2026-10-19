"use client";
import { useState } from "react";
import Link from "next/link";
import { getWritingTask } from "@/data/englishWriting/course";
import { independentSkills, recommendation } from "@/lib/englishWriting/progress";
import { useWriting } from "@/components/english-writing/WritingProvider";
import WritingFeedback from "@/components/english-writing/WritingFeedback";
import type { LearnerProgress, Submission } from "@/lib/englishWriting/types";

function LearnerPanel({ learner, own }: { learner: LearnerProgress; own: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");
  const independent = learner.submissions.filter(s => s.parent_id === null);
  const revisions = learner.submissions.filter(s => s.parent_id !== null);
  const skills = independentSkills(learner.submissions);
  const next = recommendation(learner.submissions, learner.lessons);
  const viewed = learner.submissions.find(s => s.id === selected);
  const entries = learner.submissions.filter(s => filter === "all" || (filter === "first" ? s.parent_id === null : s.parent_id !== null));
  const score = (entry: Submission) => entry.total === null ? "Skill feedback" : `${entry.total}/40 (advisory)`;
  return <section className="ew-learner-panel">
    <div className="ew-section-title"><h2 className="ew-name">{learner.name}</h2><span>{own ? "Your writing" : "Shared with your guardian account"}</span></div>
    <div className="ew-grid ew-grid-3"><div className="ew-stat"><strong>{learner.lessons.length}/4</strong><span>Lessons completed</span></div><div className="ew-stat"><strong>{independent.length}</strong><span>Independent responses</span></div><div className="ew-stat"><strong>{revisions.length}</strong><span>Revisions</span></div></div>
    <div className="ew-next"><div><span className="ew-eyebrow">SUGGESTED NEXT STEP</span><h3>{next.title}</h3><p>{next.text}</p></div>{own && <Link className="ew-text-link" href={next.href}>Open →</Link>}</div>
    <section className="ew-card"><h3>Skills across independent tasks</h3><p className="ew-muted">Revisions are recorded separately. A skill is labelled secure here only after secure evidence in two different recent independent tasks.</p>{skills.map(skill => <div className="ew-skill-row" key={skill.id}><div><strong>{skill.name}</strong><p>{skill.evidence.length ? `${skill.evidence.length} recent independent task${skill.evidence.length === 1 ? "" : "s"}` : "No independent evidence yet"}</p></div><span className={`ew-pill ${skill.status === "secure" ? "ew-pill-secure" : ""}`}>{skill.status.replaceAll("-", " ")}</span></div>)}</section>
    <section className="ew-card ew-spaced"><div className="ew-section-title"><h3>Writing portfolio</h3><label>Show <select value={filter} onChange={e => setFilter(e.target.value)}><option value="all">All versions</option><option value="first">Independent first responses</option><option value="revision">Revisions</option></select></label></div>
      {!entries.length && <p className="ew-muted">Your submitted writing will appear here. Begin with the two starting assessments.</p>}
      {entries.map(entry => <div className="ew-portfolio-row" key={entry.id}><div><strong>{getWritingTask(entry.task_id)?.title ?? entry.task_id}</strong><p>{entry.parent_id ? "Revision" : "Independent first response"} · {new Date(entry.created_at).toLocaleDateString("en-GB")} · {score(entry)}</p></div><div className="ew-actions"><button className="ew-small-button" onClick={() => setSelected(selected === entry.id ? null : entry.id)}>{selected === entry.id ? "Close" : "Read feedback"}</button>{own && <Link className="ew-text-link" href={`/english-writing/task/${entry.task_id}`}>Open writing →</Link>}</div></div>)}
      {viewed && <article className="ew-selected-feedback"><h3>{getWritingTask(viewed.task_id)?.title}</h3><details open><summary>Submitted writing</summary><p className="ew-manuscript">{viewed.answer}</p></details>{viewed.reflection && <p><strong>Writer’s reflection:</strong> {viewed.reflection}</p>}<WritingFeedback submission={viewed} parent={learner.submissions.find(s => s.id === viewed.parent_id)} /></article>}
    </section>
  </section>;
}
export default function WritingProgress() {
  const { data } = useWriting();
  if (!data) return <main><p>Reconnect your account to load progress.</p></main>;
  return <main><div className="ew-page-heading"><p className="ew-eyebrow">YOUR WRITING JOURNEY</p><h1>Small changes.<br />Visible progress.</h1><p>Look at the writing, the revisions and the skills you can use in a new task.</p></div><LearnerPanel learner={{ userId: data.userId, name: data.name, submissions: data.submissions, lessons: data.lessons }} own />{data.family.map(learner => <LearnerPanel key={learner.userId} learner={learner} own={false} />)}{!data.family.length && <p className="ew-footnote">A guardian can view linked learners here once account sharing has been set up. Writing is private to its owner and explicitly linked guardians.</p>}</main>;
}
