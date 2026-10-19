"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { WritingClientError, writingRequest } from "@/lib/englishWriting/client";
import { wordCount, type Submission, type WritingTask } from "@/lib/englishWriting/types";
import { useWriting } from "./WritingProvider";
import WritingFeedback from "./WritingFeedback";

type DraftValues = { draft: string; plan: string; elapsedSeconds: number; reflection: string };
export default function WritingEditor({ task }: { task: WritingTask }) {
  const { data, refresh } = useWriting();
  const [draft, setDraft] = useState(""); const [plan, setPlan] = useState("");
  const [reflection, setReflection] = useState(""); const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false); const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false); const [saveStatus, setSaveStatus] = useState("Draft ready");
  const [error, setError] = useState(""); const [conflict, setConflict] = useState(false);
  const [recovery, setRecovery] = useState<DraftValues | null>(null);
  const [received, setReceived] = useState<Submission | null>(null);
  const [viewId, setViewId] = useState(""); const [editing, setEditing] = useState(true);
  const values = useRef<DraftValues>({ draft: "", plan: "", elapsedSeconds: 0, reflection: "" });
  const version = useRef(0); const lastSaved = useRef("");
  const queue = useRef<Promise<void>>(Promise.resolve()); const locked = useRef(false);
  const key = data ? `english-writing-draft:${data.userId}:${task.id}` : "";
  const entries = [...(data?.submissions ?? []), ...(received && !data?.submissions.some(s => s.id === received.id) ? [received] : [])]
    .filter(s => s.task_id === task.id).sort((a, b) => b.created_at.localeCompare(a.created_at));
  const latest = entries[0]; const viewed = entries.find(s => s.id === viewId) ?? latest;
  const parent = entries.find(s => s.id === viewed?.parent_id);

  /* eslint-disable react-hooks/set-state-in-effect -- Restore an external, account-scoped browser draft after hydration and reconcile its server version. */
  useEffect(() => {
    if (!data || !key || ready) return;
    const cloud = data.works.find(work => work.task_id === task.id);
    const last = data.submissions.find(s => s.task_id === task.id);
    let next: DraftValues = { draft: cloud?.draft ?? last?.answer ?? "", plan: cloud?.plan ?? "", elapsedSeconds: cloud?.elapsed_seconds ?? 0, reflection: "" };
    version.current = cloud?.version ?? 0;
    lastSaved.current = JSON.stringify([cloud?.draft ?? "", cloud?.plan ?? "", cloud?.elapsed_seconds ?? 0]);
    try {
      const local = JSON.parse(localStorage.getItem(key) ?? "null");
      const valid = local && typeof local.draft === "string" && local.draft.length <= 16000 && typeof local.plan === "string" && local.plan.length <= 3000 && typeof local.reflection === "string" && local.reflection.length <= 1500 && Number.isInteger(local.elapsedSeconds) && local.elapsedSeconds >= 0 && local.elapsedSeconds <= 86400;
      if (valid && local.version === version.current) next = local;
      else if (valid && local.draft !== next.draft) { setRecovery(local); localStorage.setItem(`${key}:recovery`, JSON.stringify(local)); }
      else {
        const recovered = JSON.parse(localStorage.getItem(`${key}:recovery`) ?? "null");
        if (recovered && typeof recovered.draft === "string") setRecovery(recovered);
      }
    } catch { /* The cloud version remains available. */ }
    values.current = next; setDraft(next.draft); setPlan(next.plan); setElapsed(next.elapsedSeconds); setReflection(next.reflection);
    setEditing(!last || next.draft !== last.answer); setReady(true);
  }, [data, key, ready, task.id]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const persistLocal = useCallback(() => {
    if (!key) return;
    try { localStorage.setItem(key, JSON.stringify({ ...values.current, version: version.current })); }
    catch { setSaveStatus("Browser backup unavailable. Use Save draft before leaving."); }
  }, [key]);
  function change(field: "draft" | "plan" | "reflection", value: string) {
    values.current[field] = value; persistLocal();
    if (field === "draft") setDraft(value); else if (field === "plan") setPlan(value); else setReflection(value);
    setSaveStatus("Changes kept on this device; waiting to sync…");
  }
  const save = useCallback(async () => {
    if (!ready || !key || locked.current) return;
    const snapshot = { ...values.current };
    const signature = JSON.stringify([snapshot.draft, snapshot.plan, snapshot.elapsedSeconds]);
    const run = async () => {
      if (locked.current) throw new WritingClientError("Copy your current writing, then reload the newer cloud draft.", 409);
      if (signature === lastSaved.current) return;
      setSaveStatus("Saving draft…");
      try {
        const result = await writingRequest<{ version: number }>("work", { expectedUserId: data?.userId, action: "draft", taskId: task.id, draft: snapshot.draft, plan: snapshot.plan, elapsedSeconds: snapshot.elapsedSeconds, version: version.current });
        version.current = result.version; lastSaved.current = signature; persistLocal();
        const current = values.current;
        setSaveStatus(JSON.stringify([current.draft, current.plan, current.elapsedSeconds]) === signature ? "Saved to your account" : "Latest changes kept on this device; waiting to sync…");
      } catch (error) {
        setSaveStatus(error instanceof Error ? error.message : "Could not sync. This device keeps your draft.");
        if (error instanceof WritingClientError && error.status === 409) { locked.current = true; setConflict(true); }
        throw error;
      }
    };
    const operation = queue.current.then(run, run);
    queue.current = operation.catch(() => undefined);
    await operation;
  }, [data, key, persistLocal, ready, task.id]);
  useEffect(() => {
    if (!ready) return;
    const timer = window.setTimeout(() => { void save().catch(() => undefined); }, 1000);
    return () => window.clearTimeout(timer);
  }, [draft, plan, ready, save]);
  useEffect(() => {
    if (!running || busy) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        values.current.elapsedSeconds = Math.min(86400, values.current.elapsedSeconds + 1);
        setElapsed(values.current.elapsedSeconds);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [running, busy]);
  useEffect(() => {
    if (!ready) return;
    const timer = window.setInterval(() => { persistLocal(); void save().catch(() => undefined); }, 15000);
    const backup = () => persistLocal();
    window.addEventListener("pagehide", backup);
    return () => { clearInterval(timer); window.removeEventListener("pagehide", backup); persistLocal(); };
  }, [persistLocal, ready, save]);

  async function submit() {
    setBusy(true); setRunning(false); setError("");
    try {
      await save();
      if (locked.current) throw new Error("Reload the latest cloud draft before submitting.");
      const result = await writingRequest<{ submission: Submission }>("mark", { expectedUserId: data?.userId, taskId: task.id, answer: values.current.draft, parentId: latest?.id ?? null, reflection: values.current.reflection });
      setReceived(result.submission); setViewId(result.submission.id); setEditing(false);
      values.current.reflection = ""; setReflection(""); persistLocal();
      await refresh();
      window.setTimeout(() => document.getElementById("writing-feedback")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch (error) { setError(error instanceof Error ? error.message : "Feedback could not be prepared. Your draft is safe."); }
    finally { setBusy(false); }
  }
  function revise() { setEditing(true); setViewId(latest?.id ?? ""); setError(""); document.getElementById("writing-answer")?.focus(); }

  return <main>
    <div className="ew-page-heading"><p className="ew-eyebrow">{task.kind === "baseline" ? "STARTING ASSESSMENT" : task.kind === "transfer" ? "FRESH PROMPT · WORK INDEPENDENTLY" : task.kind === "aqa" ? `AQA-STYLE PRACTICE · PAPER ${task.paper}` : `WEEK ${task.week} · SESSIONS 2 & 3`}</p><h1>{task.title}</h1><p>{task.kind === "baseline" ? "Show what you can do on your own. Save helpful feedback for after this first response." : task.kind === "transfer" ? "Try this a few days after the main practice, without opening an old example." : "Plan thoughtfully, write in your own voice and leave time to check."}</p></div>
    <section className="ew-task-prompt ew-card"><p className="ew-prompt-text">{task.prompt}</p><div className="ew-task-meta"><span><strong>Form:</strong> {task.form}</span><span><strong>Reader:</strong> {task.audience}</span><span><strong>Purpose:</strong> {task.purpose}</span></div><p className="ew-muted">Suggested practice time: {task.minutes} minutes. {task.suggestedWords}. Word suggestions are practice guidance, not exam limits.</p></section>
    {!data && <p className="ew-notice">Reconnect your account above to open the saved writing space.</p>}
    {ready && <div className="ew-editor-grid ew-spaced">
      <section className="ew-card ew-editor">
        <div className="ew-section-title"><h2>{latest ? "Your revision" : "Your first response"}</h2><span>{wordCount(draft)} words</span></div>
        {latest && !editing && <div className="ew-notice">Your submitted writing is saved. Read your feedback, then choose <strong>Start my revision</strong>.<button className="ew-small-button" onClick={revise}>Start my revision</button></div>}
        <details><summary>Your planning space</summary><ul>{task.planPrompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul><label className="ew-label" htmlFor="writing-plan">Your notes</label><textarea id="writing-plan" rows={4} maxLength={3000} value={plan} onChange={e => change("plan", e.target.value)} disabled={busy || !editing} /></details>
        <label className="ew-label" htmlFor="writing-answer">Your writing</label>
        <textarea id="writing-answer" className="ew-writing-area" rows={18} maxLength={16000} spellCheck={false} autoCorrect="off" autoCapitalize="off" value={draft} onChange={event => change("draft", event.target.value)} readOnly={!editing} disabled={busy} placeholder="Begin with your own ideas…" />
        <div className="ew-editor-toolbar"><span role="status">{saveStatus}</span><div><span aria-label="Active writing time">{Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}</span> <button className="ew-text-link" disabled={busy || !editing} onClick={() => setRunning(!running)}>{running ? "Pause timer" : "Start timer"}</button></div></div>
        {conflict && <p role="alert" className="ew-error-text">Another tab has a newer version. Copy your current writing before reloading. This tab will not overwrite it.</p>}
        {recovery && <details className="ew-recovery"><summary>An earlier device draft is available to recover</summary><pre>{recovery.draft}</pre><button className="ew-small-button" onClick={() => { change("draft", recovery.draft); change("plan", recovery.plan ?? ""); setEditing(true); setRecovery(null); try { localStorage.removeItem(`${key}:recovery`); } catch { /* Recovery remains in memory. */ } }}>Use this text as my current draft</button></details>}
        {latest && editing && <div><label className="ew-label" htmlFor="writing-reflection">What did you change, and why?</label><textarea id="writing-reflection" rows={3} value={reflection} maxLength={1500} onChange={e => change("reflection", e.target.value)} disabled={busy} placeholder="I changed… because…" /></div>}
        {data && !data.feedbackEnabled && <p className="ew-notice">AI feedback is being set up. You can keep learning and saving your writing.</p>}
        <div className="ew-actions"><button className="ew-small-button" disabled={busy || conflict} onClick={() => void save().catch(() => undefined)}>Save draft</button>{editing && <button className="ew-button" onClick={() => void submit()} disabled={busy || conflict || !data?.feedbackEnabled || draft.trim().length < 20 || (Boolean(latest) && (draft.trim() === latest.answer.trim() || reflection.trim().length < 10))}>{busy ? "Preparing your feedback…" : latest ? "Submit my revision" : "Submit for feedback"}</button>}</div>
        {error && <p className="ew-error-text" role="alert">{error}</p>}<p className="ew-footnote">Write about imagined situations. Leave out real names, addresses and other personal details. Your timer is optional and never submits your work automatically.</p>
      </section>
      <aside id="writing-feedback" className="ew-card ew-feedback-panel">
        {viewed ? <>{entries.length > 1 && <label className="ew-label">Saved versions<select value={viewed.id} onChange={event => setViewId(event.target.value)}>{entries.map((entry, i) => <option value={entry.id} key={entry.id}>{entry.parent_id ? "Revision" : "First response"} · {new Date(entry.created_at).toLocaleDateString("en-GB")}{i === 0 ? " · latest" : ""}</option>)}</select></label>}<WritingFeedback submission={viewed} parent={parent} />{parent && <details><summary>Compare the previous version with this version</summary><div className="ew-grid ew-grid-2"><div><h3>Previous version</h3><p className="ew-manuscript">{parent.answer}</p></div><div><h3>This version</h3><p className="ew-manuscript">{viewed.answer}</p></div></div></details>}</> : <div className="ew-empty-feedback"><span className="ew-step-number">Write.<br />Reflect.<br />Grow.</span><h2>Your feedback will appear here</h2><p>You will see what works, a small number of useful next steps and comments linked to your own words.</p><p>{task.kind === "aqa" ? "This sustained task can receive advisory AO5 /24 and AO6 /16 estimates." : "This exercise focuses on skills. It will not receive a GCSE mark out of 40."}</p></div>}
      </aside>
    </div>}
    <div className="ew-actions ew-spaced"><Link href="/english-writing" className="ew-text-link">← Course</Link><Link href="/english-writing/progress" className="ew-text-link">View progress →</Link></div>
  </main>;
}
