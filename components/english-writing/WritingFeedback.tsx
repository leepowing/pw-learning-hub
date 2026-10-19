"use client";
import { SKILLS, type Submission } from "@/lib/englishWriting/types";

function AnnotatedAnswer({ submission }: { submission: Submission }) {
  const answer = submission.answer;
  const positions = (submission.feedback?.annotations ?? []).map(item => ({ ...item, start: answer.indexOf(item.quote) }))
    .filter(item => item.start >= 0).sort((a, b) => a.start - b.start);
  const parts = []; let cursor = 0;
  for (const item of positions) {
    if (item.start < cursor) continue;
    parts.push(answer.slice(cursor, item.start));
    parts.push(<mark key={`${item.start}-${item.quote}`} className={`ew-mark-${item.type}`} title={item.explanation}>{item.quote}</mark>);
    cursor = item.start + item.quote.length;
  }
  parts.push(answer.slice(cursor));
  return <p className="ew-manuscript">{parts}</p>;
}
export default function WritingFeedback({ submission, parent }: { submission: Submission; parent?: Submission }) {
  const feedback = submission.feedback;
  if (!feedback) return null;
  return <div className="ew-feedback">
    <div className="ew-section-title"><h2>Your feedback</h2><span>{submission.parent_id ? "Revision" : "Independent first response"}</span></div>
    <p>{feedback.summary}</p>
    {feedback.ao5 !== null && feedback.ao6 !== null && <div className="ew-score-card"><div><span>AO5 · Content & organisation</span><strong>{feedback.ao5}<small>/24</small></strong><p>{feedback.ao5Reason}</p></div><div><span>AO6 · Technical accuracy</span><strong>{feedback.ao6}<small>/16</small></strong><p>{feedback.ao6Reason}</p></div><p>Advisory estimate: {feedback.ao5 + feedback.ao6}/40. This is not a GCSE grade.</p></div>}
    {feedback.revisionReview.length > 0 && <section className="ew-revision-review"><h3>How your revision changed</h3>{feedback.revisionReview.map(item => <div key={item.targetIndex}><span className="ew-pill">{item.status.replaceAll("-", " ")}</span><p><strong>{parent?.feedback?.targets[item.targetIndex]?.action ?? `Previous target ${item.targetIndex + 1}`}</strong></p>{item.quote && <blockquote>{item.quote}</blockquote>}<p>{item.explanation}</p></div>)}</section>}
    <h3>What works</h3>{feedback.strengths.length ? feedback.strengths.map((item, i) => <div className="ew-feedback-item ew-positive" key={i}><blockquote>{item.quote}</blockquote><p>{item.explanation}</p></div>) : <p>There is not enough evidence for a specific strength yet. Start with the next step below.</p>}
    <h3>Your next steps</h3>{feedback.targets.map((target, i) => <div className="ew-feedback-item ew-target" key={i}><span className="ew-eyebrow">TARGET {i + 1} · {SKILLS[target.skill]}</span>{target.quote && <blockquote>{target.quote}</blockquote>}<p><strong>{target.action}</strong></p><p>{target.question}</p></div>)}
    <details><summary>See comments beside your submitted words</summary><AnnotatedAnswer submission={submission} /><div className="ew-legend"><span>Green: a strength</span><span>Amber: language accuracy</span><span>Blue: a style suggestion</span></div>{feedback.annotations.map((item, i) => <div className="ew-annotation" key={i}><span className="ew-pill">{item.type === "grammar" ? "Language accuracy" : item.type === "style" ? "Style suggestion" : "Strength"}</span><blockquote>{item.quote}</blockquote><p>{item.explanation}</p>{item.suggestion && <p>{item.suggestion}</p>}</div>)}</details>
    <details><summary>Skill snapshot for this piece</summary>{feedback.skills.map(item => <div className="ew-skill-row" key={item.id}><div><strong>{SKILLS[item.id]}</strong><p>{item.explanation}</p></div><span className="ew-pill">{item.status.replaceAll("-", " ")}</span></div>)}</details>
    <details><summary>家長提示 · Parent note</summary><p lang="zh-Hant">{feedback.parentNoteZh}</p></details>
    <p className="ew-footnote">AI feedback is advisory. A parent or teacher can review it. Rubric: {submission.rubric_version}.</p>
  </div>;
}
