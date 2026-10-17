"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { familyQuizFetch } from "@/lib/familyQuizClient";
import type { FamilyQuizCatalogQuestion, GeneratedFamilyQuizQuestion } from "@/lib/familyQuiz";

type OrganiserOption = { id: string; subject: string; chapter: number; title: string; questions: FamilyQuizCatalogQuestion[] };

function shuffle<T>(items: T[]) { const copy = [...items]; for (let i = copy.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }

export default function CreateFamilyQuizPage() {
  const router = useRouter();
  const [organisers, setOrganisers] = useState<OrganiserOption[]>([]);
  const [organiserIds, setOrganiserIds] = useState<string[]>([]);
  const [questionType, setQuestionType] = useState("mixed");
  const [count, setCount] = useState(5);
  const [sourceMode, setSourceMode] = useState<"random" | "exact" | "ai">("random");
  const [exactQuestionKeys, setExactQuestionKeys] = useState<string[]>([]);
  const [title, setTitle] = useState("Family Revision Quiz");
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { void familyQuizFetch<{ organisers: OrganiserOption[] }>("/api/family-quiz/catalog").then(result => { setOrganisers(result.organisers); setOrganiserIds(result.organisers[0] ? [result.organisers[0].id] : []); }).catch(reason => setError(reason instanceof Error ? reason.message : "Could not load question bank.")).finally(() => setLoading(false)); }, []);
  const selectedOrganisers = useMemo(() => organisers.filter(item => organiserIds.includes(item.id)), [organisers, organiserIds]);
  const pool = useMemo(() => selectedOrganisers.flatMap(item => item.questions).filter(question => {
    if (questionType === "mixed") return true;
    if (questionType === "interactive") return question.interactive;
    return !question.interactive && question.type === questionType;
  }), [selectedOrganisers, questionType]);
  const subjectGroups = useMemo(() => Object.entries(organisers.reduce<Record<string, OrganiserOption[]>>((groups, item) => { (groups[item.subject] ??= []).push(item); return groups; }, {})), [organisers]);
  const exactQuestionKey = (question: FamilyQuizCatalogQuestion) => `${question.organiserId}::${question.questionId}`;

  function toggleOrganiser(id: string) {
    const removing = organiserIds.includes(id);
    setOrganiserIds(current => removing ? current.filter(value => value !== id) : [...current, id]);
    if (removing) setExactQuestionKeys(keys => keys.filter(key => !key.startsWith(`${id}::`)));
  }

  function toggleExactQuestion(question: FamilyQuizCatalogQuestion) {
    const key = exactQuestionKey(question);
    setError("");
    if (exactQuestionKeys.includes(key)) { setExactQuestionKeys(current => current.filter(value => value !== key)); return; }
    if (exactQuestionKeys.length >= 20) { setError("Choose a maximum of 20 questions."); return; }
    setExactQuestionKeys(current => [...current, key]);
  }

  async function createRoom() {
    if (!organiserIds.length) { setError("Select at least one chapter."); return; }
    if (sourceMode === "ai" && organiserIds.length > 12) { setError("AI generation supports up to 12 selected chapters at a time."); return; }
    setCreating(true); setError("");
    try {
      let generatedQuestions: GeneratedFamilyQuizQuestion[] = [];
      let selections: Array<{ organiserId: string; questionId: string }> = [];
      if (sourceMode === "random") {
        selections = shuffle(pool).slice(0, Math.min(count, pool.length)).map(question => ({ organiserId: question.organiserId, questionId: question.questionId }));
        if (!selections.length) throw new Error("No questions are available for this choice.");
      } else if (sourceMode === "exact") {
        selections = pool.filter(question => exactQuestionKeys.includes(exactQuestionKey(question))).map(question => ({ organiserId: question.organiserId, questionId: question.questionId }));
        if (!selections.length) throw new Error("Choose at least one question.");
      } else {
        const generated = await familyQuizFetch<{ questions: GeneratedFamilyQuizQuestion[] }>("/api/family-quiz/generate", { method: "POST", body: JSON.stringify({ organiserIds, count, questionType }) });
        generatedQuestions = generated.questions;
      }
      const result = await familyQuizFetch<{ session: { id: string } }>("/api/family-quiz/sessions", { method: "POST", body: JSON.stringify({ title, selections, generatedQuestions }) });
      router.push(`/family-quiz/host/${result.session.id}`);
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Could not create the room."); setCreating(false); }
  }

  return <main className="page">
    <div className="topNav"><button className="back" onClick={() => router.push("/family-quiz")}>← Live Family Quiz</button><button className="history" onClick={() => router.push("/family-quiz/history")}>Quiz history →</button></div><p className="eyebrow">HOST SETUP</p><h1>Create a quiz room</h1>
    {loading ? <p>Loading Knowledge Organiser questions…</p> : <section>
      <label>Quiz title<input value={title} maxLength={100} onChange={event => setTitle(event.target.value)} /></label>
      <div className="chapterLabel"><b>Chapters</b><span>{organiserIds.length} selected</span></div>
      <div className="chapterActions"><button type="button" onClick={() => setOrganiserIds(organisers.map(item => item.id))}>Select all</button><button type="button" onClick={() => { setOrganiserIds([]); setExactQuestionKeys([]); }}>Clear all</button></div>
      <div className="chapterPicker">{subjectGroups.map(([subject, items]) => <fieldset key={subject}><legend>{subject}</legend>{items.map(item => <label className="chapter" key={item.id}><input type="checkbox" checked={organiserIds.includes(item.id)} onChange={() => toggleOrganiser(item.id)} /><span><b>Chapter {item.chapter}</b><small>{item.title}</small></span></label>)}</fieldset>)}</div>
      <div className="mode"><button className={sourceMode === "random" ? "selected" : ""} onClick={() => setSourceMode("random")}><b>Random selection</b><small>Randomly select standard and interactive KO questions.</small></button><button className={sourceMode === "exact" ? "selected" : ""} onClick={() => setSourceMode("exact")}><b>Choose exact questions</b><small>Preview the question bank and choose every question yourself.</small></button><button className={sourceMode === "ai" ? "selected" : ""} onClick={() => { setSourceMode("ai"); if (questionType === "interactive") { setQuestionType("mixed"); setExactQuestionKeys([]); } }}><b>Generate with AI</b><small>Create new questions from the selected KO facts.</small></button></div>
      <label>Question type<select value={questionType} onChange={event => { setQuestionType(event.target.value); setExactQuestionKeys([]); setError(""); }}><option value="mixed">Mixed questions</option>{sourceMode !== "ai" && <option value="interactive">Interactive questions</option>}<option value="multiple-choice">Multiple choice</option><option value="short-answer">Short answer</option><option value="long-answer">Long answer</option></select></label>
      {sourceMode !== "exact" && <label>Number of questions<select value={count} onChange={event => setCount(Number(event.target.value))}>{[3,5,10,15,20].map(value => <option key={value} value={value}>{value}</option>)}</select></label>}
      {sourceMode === "random" && <p className="availability"><b>{pool.length}</b> matching questions across {organiserIds.length} selected {organiserIds.length === 1 ? "chapter" : "chapters"}. The room will use {Math.min(count, pool.length)}.</p>}
      {sourceMode === "exact" && <div className="exactArea">
        <div className="exactHeader"><div><b>Choose questions</b><span>{exactQuestionKeys.length}/20 selected</span></div><div><button type="button" onClick={() => setExactQuestionKeys(pool.slice(0, 20).map(exactQuestionKey))}>Select first {Math.min(20, pool.length)}</button><button type="button" onClick={() => setExactQuestionKeys([])}>Clear</button></div></div>
        {pool.length === 0 ? <p className="noQuestions">No questions match these chapters and question type.</p> : <div className="exactPicker">{selectedOrganisers.map(organiser => {
          const questions = pool.filter(question => question.organiserId === organiser.id);
          if (!questions.length) return null;
          return <fieldset key={organiser.id}><legend>{organiser.subject} · Chapter {organiser.chapter}: {organiser.title}</legend>{questions.map(question => {
            const key = exactQuestionKey(question); const checked = exactQuestionKeys.includes(key);
            return <label className={`question ${checked ? "checked" : ""}`} key={key}><input type="checkbox" checked={checked} onChange={() => toggleExactQuestion(question)} /><span><span className="questionMeta"><b>{question.interactive ? `Interactive · ${question.interactionKind}` : question.type.replaceAll("-", " ")}</b><em>{question.marks} mark{question.marks === 1 ? "" : "s"}</em></span><strong>{question.prompt}</strong>{question.options.length > 0 && <small>{question.options.map((option, index) => `${String.fromCharCode(65 + index)}. ${option}`).join("  ·  ")}</small>}</span></label>;
          })}</fieldset>;
        })}</div>}
      </div>}
      {sourceMode === "ai" && <p className="availability">AI will balance the questions across <b>{organiserIds.length}</b> selected {organiserIds.length === 1 ? "chapter" : "chapters"}.</p>}
      {error && <p className="error">{error}</p>}<button className="create" onClick={() => void createRoom()} disabled={creating || !organiserIds.length || (sourceMode === "exact" && !exactQuestionKeys.length)}>{creating ? sourceMode === "ai" ? "Generating and creating…" : "Creating room…" : sourceMode === "exact" ? `Create room with ${exactQuestionKeys.length} question${exactQuestionKeys.length === 1 ? "" : "s"} →` : "Create live room →"}</button>
    </section>}
    <style jsx>{`
      .page{max-width:950px;width:calc(100% - 36px);margin:40px auto 80px;color:#172033;font-family:Arial,sans-serif}.topNav{display:flex;justify-content:space-between;gap:12px}.back,.history{border:0;background:transparent;color:#7c3aed;font-weight:800;cursor:pointer}.eyebrow{margin:30px 0 7px;color:#7c3aed;font-size:13px;font-weight:900;letter-spacing:.13em}h1{font-size:46px;margin:0 0 26px}section{padding:28px;border:1px solid #ddd6fe;border-radius:24px;background:white}label{display:block;margin-bottom:20px;font-weight:900}select{display:block;width:100%;box-sizing:border-box;margin-top:8px;padding:13px;border:1px solid #cbd5e1;border-radius:11px;background:white;font:inherit}.chapterLabel{display:flex;justify-content:space-between;align-items:center}.chapterLabel span{color:#6d28d9;font-weight:900}.chapterActions{display:flex;gap:8px;margin:10px 0}.chapterActions button,.exactHeader button{padding:7px 10px;border:1px solid #ddd6fe;border-radius:9px;background:#faf5ff;color:#6d28d9;font-weight:800;cursor:pointer}.chapterPicker{max-height:330px;overflow:auto;margin-bottom:20px;padding:12px;border:1px solid #cbd5e1;border-radius:13px;background:#f8fafc}.chapterPicker fieldset{margin:0 0 12px;padding:10px;border:0;border-bottom:1px solid #e2e8f0}.chapterPicker fieldset:last-child{border-bottom:0}.chapterPicker legend{padding:0;color:#4c1d95;font-size:15px;font-weight:900}.chapter{display:flex;gap:11px;align-items:flex-start;margin:9px 0;font-weight:400;cursor:pointer}.chapter input{width:18px;height:18px;margin:2px 0;accent-color:#7c3aed}.chapter span,.chapter b,.chapter small{display:block}.chapter small{margin-top:2px;color:#667085}.mode{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px}.mode button{padding:18px;text-align:left;border:1px solid #d5dce6;border-radius:14px;background:#f8fafc;color:#26354a;cursor:pointer}.mode button.selected{border-color:#7c3aed;background:#f5f3ff;box-shadow:0 0 0 2px #ddd6fe}.mode b,.mode small{display:block}.mode small{margin-top:7px;color:#667085;line-height:1.4}.availability{padding:13px;border-radius:11px;background:#f5f3ff;color:#4c1d95}.exactArea{margin-bottom:20px}.exactHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.exactHeader>div{display:flex;align-items:center;gap:8px}.exactHeader span{color:#6d28d9;font-weight:900}.exactPicker{max-height:600px;overflow:auto;padding:12px;border:1px solid #cbd5e1;border-radius:14px;background:#f8fafc}.exactPicker fieldset{margin:0 0 18px;padding:0;border:0}.exactPicker legend{padding:8px 4px;color:#4c1d95;font-weight:900}.question{display:flex;gap:12px;margin:8px 0;padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:white;font-weight:400;cursor:pointer}.question.checked{border-color:#8b5cf6;background:#f5f3ff;box-shadow:0 0 0 1px #c4b5fd}.question>input{flex:0 0 auto;width:19px;height:19px;margin:2px 0;accent-color:#7c3aed}.question>span{min-width:0;flex:1}.questionMeta{display:flex;justify-content:space-between;gap:8px;margin-bottom:6px;color:#6d28d9;font-size:12px;text-transform:capitalize}.questionMeta em{font-style:normal;color:#475569}.question strong{display:block;line-height:1.45}.question small{display:block;margin-top:8px;color:#667085;line-height:1.5}.noQuestions{padding:16px;border-radius:11px;background:#f8fafc;color:#667085}.create{padding:14px 20px;border:0;border-radius:12px;background:#7c3aed;color:white;font:inherit;font-weight:900;cursor:pointer}.create:disabled{opacity:.5}.error{padding:12px;border-radius:10px;background:#fff1f2;color:#9f1239}@media(max-width:700px){.mode{grid-template-columns:1fr}.exactHeader{align-items:flex-start;flex-direction:column}.exactHeader>div{flex-wrap:wrap}h1{font-size:38px}}
    `}</style>
  </main>;
}
