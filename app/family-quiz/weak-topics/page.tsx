"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { familyQuizFetch } from "@/lib/familyQuizClient";

type WeakQuestion = {
  organiserId: string;
  questionId: string;
  subject: string;
  chapter: number;
  chapterTitle: string;
  prompt: string;
  type: string;
  marks: number;
  interactive: boolean;
  attempts: number;
  mistakes: number;
  accuracy: number;
};

type PlayerWeakness = {
  userId: string;
  displayName: string;
  weakQuestionCount: number;
  totalMistakes: number;
  weakQuestions: WeakQuestion[];
};

const questionKey = (question: WeakQuestion) => `${question.organiserId}::${question.questionId}`;

export default function WeakTopicRevisionPage() {
  const router = useRouter();
  const [players, setPlayers] = useState<PlayerWeakness[]>([]);
  const [analysedQuizCount, setAnalysedQuizCount] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [count, setCount] = useState(5);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    void familyQuizFetch<{ players: PlayerWeakness[]; analysedQuizCount: number }>("/api/family-quiz/weak-topics")
      .then(result => {
        setPlayers(result.players);
        setAnalysedQuizCount(result.analysedQuizCount);
        setSelectedUserId(result.players[0]?.userId ?? "");
      })
      .catch(reason => setError(reason instanceof Error ? reason.message : "Could not analyse past quizzes."))
      .finally(() => setLoading(false));
  }, []);

  const selectedPlayer = players.find(player => player.userId === selectedUserId);
  const groups = useMemo(() => {
    if (!selectedPlayer) return [];
    const grouped = selectedPlayer.weakQuestions.reduce<Record<string, WeakQuestion[]>>((result, question) => {
      const key = `${question.subject} · Chapter ${question.chapter}: ${question.chapterTitle}`;
      (result[key] ??= []).push(question);
      return result;
    }, {});
    return Object.entries(grouped);
  }, [selectedPlayer]);

  useEffect(() => {
    setSelectedKeys(selectedPlayer?.weakQuestions.slice(0, count).map(questionKey) ?? []);
  }, [selectedPlayer, count]);

  function toggleQuestion(question: WeakQuestion) {
    const key = questionKey(question);
    setError("");
    if (selectedKeys.includes(key)) {
      setSelectedKeys(current => current.filter(value => value !== key));
      return;
    }
    if (selectedKeys.length >= 20) {
      setError("Choose a maximum of 20 questions.");
      return;
    }
    setSelectedKeys(current => [...current, key]);
  }

  async function createRevisionQuiz() {
    if (!selectedPlayer || !selectedKeys.length) {
      setError("Choose at least one weak question.");
      return;
    }
    setCreating(true);
    setError("");
    try {
      const selections = selectedPlayer.weakQuestions
        .filter(question => selectedKeys.includes(questionKey(question)))
        .map(question => ({ organiserId: question.organiserId, questionId: question.questionId }));
      const result = await familyQuizFetch<{ session: { id: string } }>("/api/family-quiz/sessions", {
        method: "POST",
        body: JSON.stringify({
          title: `${selectedPlayer.displayName}'s Weak-topic Revision`,
          selections,
          generatedQuestions: [],
        }),
      });
      router.push(`/family-quiz/host/${result.session.id}`);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not create the revision quiz.");
      setCreating(false);
    }
  }

  return <main className="page">
    <div className="topNav">
      <button onClick={() => router.push("/family-quiz/host")}>← Create a quiz</button>
      <button onClick={() => router.push("/family-quiz/history")}>Quiz history →</button>
    </div>
    <p className="eyebrow">PERSONALISED REVISION</p>
    <h1>Weak-topic Revision</h1>
    <p className="intro">Automatically find questions Greta or Mathis previously lost marks on, then create a focused live quiz.</p>

    {loading ? <section className="state">Analysing marked answers…</section> : error && !players.length ? <section className="state error">{error}</section> : !players.length ? <section className="state">
      <h2>No weak questions yet</h2>
      <p>Complete and mark a Live Family Quiz first. Questions with lost marks will appear here.</p>
    </section> : <>
      <div className="summary"><span><b>{analysedQuizCount}</b> past quizzes analysed</span><span>Only marked KO questions are included</span></div>
      <div className="players">{players.map(player => <button key={player.userId} className={selectedUserId === player.userId ? "active" : ""} onClick={() => { setSelectedUserId(player.userId); setError(""); }}>
        <strong>{player.displayName}</strong><small>{player.weakQuestionCount} weak questions · {player.totalMistakes} mistakes</small>
      </button>)}</div>

      {selectedPlayer && <section className="panel">
        <div className="controls">
          <div><span>REVISION PLAN</span><h2>{selectedPlayer.displayName}&apos;s priority questions</h2></div>
          <label>Auto-select<select value={count} onChange={event => setCount(Number(event.target.value))}>{[5, 10, 15, 20].map(value => <option key={value} value={value}>Top {value}</option>)}</select></label>
        </div>
        <p className="hint">Repeated mistakes come first, followed by questions with the lowest score. You can change the selection below.</p>
        <div className="selectionBar"><b>{selectedKeys.length}/20 selected</b><div><button onClick={() => setSelectedKeys(selectedPlayer.weakQuestions.slice(0, 20).map(questionKey))}>Select all weak questions</button><button onClick={() => setSelectedKeys([])}>Clear</button></div></div>
        <div className="questions">{groups.map(([heading, questions]) => <fieldset key={heading}>
          <legend>{heading}</legend>
          {questions.map(question => {
            const checked = selectedKeys.includes(questionKey(question));
            return <label className={checked ? "question checked" : "question"} key={questionKey(question)}>
              <input type="checkbox" checked={checked} onChange={() => toggleQuestion(question)} />
              <span className="questionBody"><span className="meta"><b>{question.interactive ? "Interactive" : question.type.replaceAll("-", " ")}</b><em>{question.marks} mark{question.marks === 1 ? "" : "s"}</em></span><strong>{question.prompt}</strong><small>{question.mistakes} mistake{question.mistakes === 1 ? "" : "s"} in {question.attempts} attempt{question.attempts === 1 ? "" : "s"} · {question.accuracy}% score</small></span>
            </label>;
          })}
        </fieldset>)}</div>
        {error && <p className="error message">{error}</p>}
        <button className="create" disabled={creating || !selectedKeys.length} onClick={() => void createRevisionQuiz()}>{creating ? "Creating revision room…" : `Create ${selectedPlayer.displayName}'s ${selectedKeys.length}-question quiz →`}</button>
      </section>}
    </>}

    <style jsx>{`
      .page{max-width:1000px;width:calc(100% - 36px);margin:40px auto 80px;color:#172033;font-family:Arial,sans-serif}.topNav{display:flex;justify-content:space-between;gap:12px}.topNav button{border:0;background:transparent;color:#7c3aed;font-weight:800;cursor:pointer}.eyebrow{margin:30px 0 7px;color:#7c3aed;font-size:13px;font-weight:900;letter-spacing:.13em}h1{margin:0;font-size:clamp(38px,6vw,52px)}.intro{max-width:760px;margin:10px 0 26px;color:#64748b;font-size:18px;line-height:1.55}.state,.panel{padding:28px;border:1px solid #ddd6fe;border-radius:24px;background:white}.state h2{margin-top:0}.summary{display:flex;justify-content:space-between;gap:12px;margin-bottom:14px;padding:13px 16px;border-radius:12px;background:#f5f3ff;color:#5b21b6}.players{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;margin-bottom:18px}.players button{padding:18px;border:1px solid #d8dee8;border-radius:15px;background:white;text-align:left;color:#273449;cursor:pointer}.players button.active{border-color:#7c3aed;background:#f5f3ff;box-shadow:0 0 0 2px #ddd6fe}.players strong,.players small{display:block}.players strong{font-size:21px}.players small{margin-top:5px;color:#64748b}.controls{display:flex;justify-content:space-between;align-items:flex-end;gap:18px}.controls span{color:#7c3aed;font-size:12px;font-weight:900;letter-spacing:.12em}.controls h2{margin:6px 0 0;font-size:28px}.controls label{font-weight:800}.controls select{display:block;margin-top:6px;padding:10px 34px 10px 11px;border:1px solid #cbd5e1;border-radius:10px;background:white;font:inherit}.hint{color:#64748b;line-height:1.5}.selectionBar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:20px 0 10px}.selectionBar>b{color:#6d28d9}.selectionBar div{display:flex;gap:8px}.selectionBar button{padding:8px 10px;border:1px solid #ddd6fe;border-radius:9px;background:#faf5ff;color:#6d28d9;font-weight:800;cursor:pointer}.questions{max-height:620px;overflow:auto;padding:12px;border:1px solid #cbd5e1;border-radius:14px;background:#f8fafc}.questions fieldset{margin:0 0 18px;padding:0;border:0}.questions legend{padding:8px 4px;color:#4c1d95;font-weight:900}.question{display:flex;gap:12px;margin:8px 0;padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:white;cursor:pointer}.question.checked{border-color:#8b5cf6;background:#f5f3ff;box-shadow:0 0 0 1px #c4b5fd}.question>input{flex:0 0 auto;width:19px;height:19px;margin:2px 0;accent-color:#7c3aed}.questionBody{min-width:0;flex:1}.questionBody>strong,.questionBody>small{display:block}.questionBody>strong{line-height:1.45}.questionBody>small{margin-top:8px;color:#64748b}.meta{display:flex;justify-content:space-between;gap:8px;margin-bottom:6px;color:#6d28d9;font-size:12px;text-transform:capitalize}.meta em{color:#475569;font-style:normal}.create{margin-top:18px;padding:14px 20px;border:0;border-radius:12px;background:#7c3aed;color:white;font:inherit;font-weight:900;cursor:pointer}.create:disabled{opacity:.5}.error{color:#9f1239}.message{padding:12px;border-radius:10px;background:#fff1f2}@media(max-width:650px){.controls,.selectionBar,.summary{align-items:flex-start;flex-direction:column}.selectionBar div{flex-wrap:wrap}.panel{padding:20px}}
    `}</style>
  </main>;
}
