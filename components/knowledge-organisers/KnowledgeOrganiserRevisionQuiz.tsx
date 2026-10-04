"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { AiMarkingResponse, AiMarkingResult } from "@/lib/knowledgeOrganiserAi";
import type { KnowledgeOrganiser, KnowledgeQuestion } from "@/data/knowledgeOrganisers/types";
import KnowledgeOrganiserInteractiveQuestion from "@/components/knowledge-organisers/KnowledgeOrganiserInteractiveQuestion";
import { loadKnowledgeOrganiserProgress, saveKnowledgeQuizBest } from "@/lib/knowledgeOrganiserStorage";
import { getCurrentStudent } from "@/lib/studentStorage";
import { supabase } from "@/lib/supabase";

type QuizMode = KnowledgeQuestion["type"] | "matching" | "fill-blanks" | "diagram-labels" | "ordering" | "classification" | "mixed";
type QuizSize = number | "all";
type SourceQuestion = {
  key: string;
  organiserId: string;
  chapter: number;
  chapterTitle: string;
  question: KnowledgeQuestion;
};

const modes: Array<{ mode: QuizMode; title: string; description: string }> = [
  { mode: "multiple-choice", title: "Multiple Choice", description: "Choose an answer and receive instant marking." },
  { mode: "short-answer", title: "Short Questions", description: "Write concise answers using evidence from the taught sections." },
  { mode: "long-answer", title: "Long Questions", description: "Practise extended explanations, comparisons and judgements." },
  { mode: "matching", title: "Matching", description: "Match every scientific term or step to the correct answer." },
  { mode: "fill-blanks", title: "Fill in the Blanks", description: "Complete equations, sentences and tables using the correct terms." },
  { mode: "diagram-labels", title: "Label the Diagram", description: "Add the correct scientific labels to each numbered position." },
  { mode: "ordering", title: "Ordering", description: "Put practical methods and scientific processes into the correct order." },
  { mode: "classification", title: "Classification", description: "Sort each statement or item into the correct scientific category." },
  { mode: "mixed", title: "Mixed Questions", description: "Combine all available question types and chapters." },
];

const typeLabels: Record<KnowledgeQuestion["type"], string> = {
  "multiple-choice": "Multiple Choice",
  "short-answer": "Short Questions",
  "long-answer": "Long Questions",
};

const criterionLabels: Record<AiMarkingResult["criteria"][number]["status"], string> = {
  met: "Met",
  partly_met: "Partly met",
  not_met: "Not met",
};

function shuffle<T>(items: T[]) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function randomiseOptions(source: SourceQuestion): SourceQuestion {
  if (source.question.type !== "multiple-choice") return source;
  return { ...source, question: { ...source.question, options: shuffle(source.question.options) } };
}

function questionMatchesMode(question: KnowledgeQuestion, mode: QuizMode) {
  if (mode === "mixed") return true;
  if (mode === "multiple-choice" || mode === "long-answer") return question.type === mode;
  if (mode === "short-answer") return question.type === mode && (!question.interaction || question.interaction.kind === "table");
  return question.interaction?.kind === mode;
}

function questionMode(question: KnowledgeQuestion): Exclude<QuizMode, "mixed"> {
  if (question.interaction && question.interaction.kind !== "table") return question.interaction.kind;
  return question.type;
}

function questionModeLabel(question: KnowledgeQuestion) {
  return modes.find(item => item.mode === questionMode(question))?.title ?? typeLabels[question.type];
}

function sizeOptions(count: number): QuizSize[] {
  if (count === 0) return [];
  if (count < 5) return [...Array.from({ length: Math.max(0, count - 1) }, (_, index) => index + 1), "all"];
  return [...[5, 10, 15, 20].filter(size => size < count), "all"];
}

function selectQuestions(pool: SourceQuestion[], size: QuizSize, mode: QuizMode) {
  const randomised = shuffle(pool);
  if (size === "all") return randomised.map(randomiseOptions);

  const selected: SourceQuestion[] = [];
  const add = (item: SourceQuestion | undefined) => {
    if (item && !selected.some(existing => existing.key === item.key) && selected.length < size) selected.push(item);
  };

  // A mixed quiz should include each available format where the chosen size allows it.
  if (mode === "mixed") {
    ([...new Set(randomised.map(item => questionMode(item.question)))])
      .forEach(questionType => add(randomised.find(item => questionMode(item.question) === questionType)));
  }

  // Give every taught chapter a place where the chosen size allows it.
  [...new Set(randomised.map(item => item.organiserId))]
    .forEach(organiserId => add(randomised.find(item => item.organiserId === organiserId)));

  randomised.forEach(add);
  return shuffle(selected).map(randomiseOptions);
}

export default function KnowledgeOrganiserRevisionQuiz({ organisers }: { organisers: KnowledgeOrganiser[] }) {
  const subject = organisers[0]?.subject ?? "Knowledge Organisers";
  const year = organisers[0]?.year ?? 8;
  const subjectSlug = subject.toLowerCase();
  const subjectRoute = `/knowledge-organisers/year${year}/${subjectSlug}`;
  const [student, setStudent] = useState("guest");
  const [taughtByOrganiser, setTaughtByOrganiser] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [size, setSize] = useState<QuizSize>("all");
  const [quiz, setQuiz] = useState<SourceQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [writtenAnswer, setWrittenAnswer] = useState("");
  const [feedback, setFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [scoresByType, setScoresByType] = useState<Record<KnowledgeQuestion["type"], number>>({ "multiple-choice": 0, "short-answer": 0, "long-answer": 0 });
  const [scoresByChapter, setScoresByChapter] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [aiMarking, setAiMarking] = useState<AiMarkingResult | null>(null);
  const [aiError, setAiError] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function hydrate() {
      const currentStudent = getCurrentStudent();
      const progress = await Promise.all(organisers.map(async organiser => [
        organiser.id,
        (await loadKnowledgeOrganiserProgress(currentStudent, organiser.id)).taughtSectionIds,
      ] as const));
      if (cancelled) return;
      setStudent(currentStudent);
      setTaughtByOrganiser(Object.fromEntries(progress));
      setLoading(false);
    }
    void hydrate();
    return () => { cancelled = true; };
  }, [organisers]);

  const chapterCoverage = useMemo(() => organisers.map(organiser => {
    const taughtIds = taughtByOrganiser[organiser.id] ?? [];
    const questions = organiser.questions.filter(question => question.sectionIds.every(id => taughtIds.includes(id)));
    return { organiser, taughtIds, questions };
  }), [organisers, taughtByOrganiser]);

  const available = useMemo<SourceQuestion[]>(() => chapterCoverage.flatMap(({ organiser, questions }) =>
    questions.map(question => ({
      key: `${organiser.id}:${question.id}`,
      organiserId: organiser.id,
      chapter: organiser.chapter,
      chapterTitle: organiser.title,
      question,
    }))), [chapterCoverage]);

  const filtered = useMemo(() => mode === null
    ? available
    : available.filter(item => questionMatchesMode(item.question, mode)), [available, mode]);

  const counts = useMemo(() => Object.fromEntries(
    modes.map(item => [item.mode, available.filter(source => questionMatchesMode(source.question, item.mode)).length])
  ) as Record<QuizMode, number>, [available]);

  const visibleModes = useMemo(() => modes.filter(item =>
    item.mode === "mixed" || item.mode === "multiple-choice" || item.mode === "short-answer" || item.mode === "long-answer" || counts[item.mode] > 0
  ), [counts]);

  const current = quiz[index];
  const isInteractive = Boolean(current?.question.interaction && current.question.interaction.kind !== "table");
  const correctOption = current?.question.type === "multiple-choice" ? current.question.answer : "";
  const mcqExplanation = current?.question.type === "multiple-choice" ? current.question.explanation : "";
  const maxScore = quiz.reduce((total, item) => total + item.question.marks, 0);
  const maxByType = quiz.reduce<Record<KnowledgeQuestion["type"], number>>((total, item) => {
    total[item.question.type] += item.question.marks;
    return total;
  }, { "multiple-choice": 0, "short-answer": 0, "long-answer": 0 });
  const maxByChapter = quiz.reduce<Record<string, number>>((total, item) => {
    total[item.organiserId] = (total[item.organiserId] ?? 0) + item.question.marks;
    return total;
  }, {});

  function chooseMode(nextMode: QuizMode) {
    if (counts[nextMode] === 0) return;
    setMode(nextMode);
    setSize("all");
  }

  function resetQuestionState() {
    setSelectedOption("");
    setWrittenAnswer("");
    setFeedback(false);
    setAiMarking(null);
    setAiError("");
    setAiLoading(false);
  }

  function startQuiz() {
    if (!mode || filtered.length === 0) return;
    setQuiz(selectQuestions(filtered, size, mode));
    setIndex(0);
    setScore(0);
    setScoresByType({ "multiple-choice": 0, "short-answer": 0, "long-answer": 0 });
    setScoresByChapter({});
    setFinished(false);
    resetQuestionState();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function returnToSetup() {
    setQuiz([]);
    setMode(null);
    setSize("all");
    setIndex(0);
    setScore(0);
    setFinished(false);
    resetQuestionState();
  }

  function nextQuestion(mark: number) {
    if (!current) return;
    const nextScore = score + mark;
    setScore(nextScore);
    setScoresByType(previous => ({ ...previous, [current.question.type]: previous[current.question.type] + mark }));
    setScoresByChapter(previous => ({ ...previous, [current.organiserId]: (previous[current.organiserId] ?? 0) + mark }));

    if (index + 1 >= quiz.length) {
      setFinished(true);
      void saveKnowledgeQuizBest(student, `year${year}-${subjectSlug}-revision-quiz`, nextScore, maxScore);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setIndex(previous => previous + 1);
    resetQuestionState();
  }

  async function markWrittenAnswer() {
    if (!current || current.question.type === "multiple-choice" || writtenAnswer.trim().length < 3) return;
    setAiLoading(true);
    setAiError("");
    setAiMarking(null);
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error || !session?.access_token) {
        setAiError("Please sign in again before requesting AI marking.");
        return;
      }
      const response = await fetch("/api/knowledge-organisers/mark", {
        method: "POST",
        headers: { Authorization: `Bearer ${session.access_token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ organiserId: current.organiserId, questionId: current.question.id, answer: writtenAnswer, student }),
      });
      const payload = await response.json() as AiMarkingResponse;
      if (!response.ok || !payload.ok) {
        setAiError(payload.ok ? "AI marking is temporarily unavailable." : payload.error);
        return;
      }
      setAiMarking(payload.result);
      setFeedback(true);
    } catch {
      setAiError("AI marking is temporarily unavailable. Please check the connection and try again.");
    } finally {
      setAiLoading(false);
    }
  }

  if (loading) return <main className="revisionPage"><p>Loading taught sections…</p></main>;

  return <main className="revisionPage">
    <Link href={subjectRoute}>← Year {year} {subject}</Link>
    <header><p className="eyebrow">YEAR {year} · {subject.toUpperCase()} · EXAM REVISION</p><h1>Cross-Chapter Quiz</h1><p>Questions are drawn automatically from the sections already marked as taught for {student === "guest" ? "this student" : student}. You do not need to select the sections again.</p></header>

    {quiz.length === 0 && !finished && <>
      <section><p className="eyebrow">CURRENT COVERAGE</p><h2>Taught sections included</h2><div className="coverageGrid">{chapterCoverage.map(({ organiser, taughtIds, questions }) => <article key={organiser.id}><span>CHAPTER {organiser.chapter}</span><h3>{organiser.title}</h3><p><b>{taughtIds.length}/{organiser.sections.length}</b> sections taught</p><p><b>{questions.length}</b> questions available</p>{taughtIds.length === 0 && <small>No taught sections yet. Open this chapter to update its teaching progress.</small>}</article>)}</div></section>

      <section><p className="eyebrow">BUILD YOUR QUIZ</p><h2>Choose a question type</h2>{available.length === 0 ? <div className="empty"><p>No quiz questions are available yet. Mark at least one section as taught inside a chapter first.</p><Link href={subjectRoute}>Return to {subject} chapters →</Link></div> : <div className="quizModes">{visibleModes.map(item => <button key={item.mode} disabled={counts[item.mode] === 0} className={mode === item.mode ? "selected" : ""} onClick={() => chooseMode(item.mode)}><strong>{item.title}</strong><span>{counts[item.mode]} available</span><small>{counts[item.mode] === 0 ? "No questions available yet" : item.description}</small></button>)}</div>}
        {mode !== null && <div className="quizSetup"><p className="eyebrow">{modes.find(item => item.mode === mode)?.title}</p><h3>How many questions?</h3><p>{filtered.length} questions are available from the taught sections across {new Set(filtered.map(item => item.organiserId)).size} {new Set(filtered.map(item => item.organiserId)).size === 1 ? "chapter" : "chapters"}.</p><div className="sizes">{sizeOptions(filtered.length).map(option => <button key={option} className={size === option ? "selected" : ""} onClick={() => setSize(option)}>{option === "all" ? `All ${filtered.length}` : option} {option === 1 ? "question" : "questions"}</button>)}</div><button className="primary" onClick={startQuiz}>Start cross-chapter quiz →</button></div>}
      </section>
    </>}

    {current && !finished && <section className="question"><div className="questionTop"><div><span>Question {index + 1} of {quiz.length}</span><small>Chapter {current.chapter}: {current.chapterTitle} · {questionModeLabel(current.question)}</small></div><b>{current.question.marks} {current.question.marks === 1 ? "mark" : "marks"}</b></div><h2>{current.question.prompt}</h2>
      {isInteractive ? <KnowledgeOrganiserInteractiveQuestion key={current.key} question={current.question} onComplete={nextQuestion} /> : current.question.type === "multiple-choice" ? <div className="options">{current.question.options.map(option => <button key={option} aria-pressed={selectedOption === option} disabled={feedback} onClick={() => setSelectedOption(option)}>{option}</button>)}</div> : <textarea value={writtenAnswer} onChange={event => setWrittenAnswer(event.target.value)} rows={current.question.type === "long-answer" ? 11 : 6} placeholder="Write your answer here…" disabled={feedback} />}
      {!isInteractive && !feedback && <button className="primary" disabled={aiLoading || (current.question.type === "multiple-choice" ? !selectedOption : writtenAnswer.trim().length < 3)} onClick={() => current.question.type === "multiple-choice" ? setFeedback(true) : void markWrittenAnswer()}>{aiLoading ? "Marking answer…" : "Check answer"}</button>}
      {!isInteractive && !feedback && aiError && <div className="aiError"><strong>AI marking could not finish</strong><p>{aiError}</p><div className="actions"><button onClick={() => void markWrittenAnswer()}>Try again</button><button onClick={() => setFeedback(true)}>Use self-marking instead</button></div></div>}
      {feedback && current.question.type === "multiple-choice" && <div className={selectedOption === correctOption ? "feedback correct" : "feedback incorrect"}><strong>{selectedOption === correctOption ? "Correct" : `Correct answer: ${correctOption}`}</strong><p>{mcqExplanation}</p><button className="primary" onClick={() => nextQuestion(selectedOption === correctOption ? current.question.marks : 0)}>Next question →</button></div>}
      {feedback && current.question.type !== "multiple-choice" && aiMarking && <div className="feedback written"><div className="aiScore"><span>AI MARK</span><strong>{aiMarking.awardedMarks}/{aiMarking.maxMarks}</strong></div><p className="summary">{aiMarking.summary}</p><h3>Marking points</h3><ul className="criteria">{aiMarking.criteria.map((criterion, criterionIndex) => <li key={`${criterion.markingPoint}-${criterionIndex}`}><span className={criterion.status}>{criterionLabels[criterion.status]}</span><div><strong>{criterion.markingPoint}</strong><p>{criterion.comment}</p></div></li>)}</ul><div className="feedbackGrid">{aiMarking.strengths.length > 0 && <div><h3>What went well</h3><ul>{aiMarking.strengths.map(item => <li key={item}>{item}</li>)}</ul></div>}{aiMarking.improvements.length > 0 && <div><h3>How to improve</h3><ul>{aiMarking.improvements.map(item => <li key={item}>{item}</li>)}</ul></div>}{aiMarking.missedPoints.length > 0 && <div><h3>Points to add</h3><ul>{aiMarking.missedPoints.map(item => <li key={item}>{item}</li>)}</ul></div>}</div><div className="model"><h3>Example improved answer</h3><p>{aiMarking.modelAnswer}</p></div><small>{aiMarking.disclaimer}</small><div className="actions"><button className="primary" onClick={() => nextQuestion(aiMarking.awardedMarks)}>Next question →</button></div></div>}
      {feedback && current.question.type !== "multiple-choice" && !aiMarking && <div className="feedback written"><strong>Check your answer against the marking points</strong><ul>{current.question.markingPoints.map(point => <li key={point}>{point}</li>)}</ul><p><b>Improvement guidance:</b> {current.question.guidance}</p><p>How many marking points did your answer include?</p><div className="markButtons">{Array.from({ length: current.question.marks + 1 }, (_, mark) => <button key={mark} onClick={() => nextQuestion(mark)}>{mark}</button>)}</div><small>This self-marking option is used only when AI marking is unavailable.</small></div>}
    </section>}

    {finished && <section className="result"><span>REVISION QUIZ COMPLETE</span><strong>{score}/{maxScore}</strong><p>{maxScore ? Math.round(score / maxScore * 100) : 0}% on this quiz</p><h2>By chapter</h2><div className="breakdown">{organisers.filter(organiser => maxByChapter[organiser.id] > 0).map(organiser => <div key={organiser.id}><span>Chapter {organiser.chapter}: {organiser.title}</span><b>{scoresByChapter[organiser.id] ?? 0}/{maxByChapter[organiser.id]}</b></div>)}</div><h2>By question type</h2><div className="breakdown">{(["multiple-choice", "short-answer", "long-answer"] as KnowledgeQuestion["type"][]).filter(type => maxByType[type] > 0).map(type => <div key={type}><span>{typeLabels[type]}</span><b>{scoresByType[type]}/{maxByType[type]}</b></div>)}</div><div className="resultActions"><button onClick={startQuiz}>Try another random set</button><button onClick={returnToSetup}>Change quiz settings</button></div></section>}

    <style jsx>{`
      .revisionPage{max-width:1080px;width:calc(100% - 36px);margin:36px auto 80px;color:#26354a;font-family:Arial,sans-serif;line-height:1.6}.revisionPage *{box-sizing:border-box}.revisionPage :global(a){color:#9a3412;font-weight:800}header{margin:24px 0 18px;padding:34px;border:1px solid #fb923c;border-radius:26px;background:linear-gradient(135deg,#7c2d12,#c2410c);color:white}header .eyebrow,header>p:last-child{color:#ffedd5}header h1{margin:0;font-size:clamp(36px,6vw,56px);line-height:1.1}header>p:last-child{max-width:800px;font-size:18px}.eyebrow{margin:0 0 8px;color:#c2410c;font-size:13px;font-weight:900;letter-spacing:.11em}section{margin-top:18px;padding:28px;border:1px solid #e2e8f0;border-radius:22px;background:white;box-shadow:0 8px 25px rgba(15,23,42,.04)}h2{margin:0 0 8px;font-size:29px}.coverageGrid,.quizModes,.feedbackGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:22px}.coverageGrid article{padding:20px;border-left:6px solid #f97316;border-radius:14px;background:#fff7ed}.coverageGrid article>span{color:#c2410c;font-size:12px;font-weight:900;letter-spacing:.1em}.coverageGrid h3,.coverageGrid p{margin:5px 0}.coverageGrid small{display:block;margin-top:10px;color:#9a3412}.quizModes button{min-height:150px;padding:20px;text-align:left;border:1px solid #d5dce6;border-radius:16px;background:linear-gradient(145deg,#fff,#f8fafc);color:#26354a;cursor:pointer}.quizModes button.selected{border-color:#c2410c;background:#fff7ed;box-shadow:0 0 0 2px #fed7aa}.quizModes button:disabled{cursor:not-allowed;opacity:.45}.quizModes strong,.quizModes span,.quizModes small{display:block}.quizModes strong{font-size:21px}.quizModes span{margin:8px 0;color:#c2410c;font-weight:900}.quizModes small{color:#667085}.quizSetup{margin-top:22px;padding:24px;border-radius:17px;background:#f8fafc}.sizes,.actions,.markButtons,.resultActions{display:flex;gap:10px;flex-wrap:wrap}.sizes{margin:18px 0}.sizes button,.actions button,.markButtons button,.resultActions button{padding:11px 15px;border:1px solid #cbd5e1;border-radius:11px;background:white;color:#344054;font-weight:800;cursor:pointer}.sizes button.selected{border-color:#c2410c;background:#fff7ed;color:#9a3412}.primary{padding:12px 17px;border:1px solid #c2410c!important;border-radius:11px;background:#c2410c!important;color:white!important;font-weight:800;cursor:pointer}.primary:disabled{cursor:not-allowed;opacity:.45}.questionTop{display:flex;justify-content:space-between;gap:16px;color:#667085}.questionTop span,.questionTop small{display:block}.questionTop small{margin-top:3px}.question>h2{margin-top:20px}.options{display:grid;gap:10px;margin:18px 0}.options button{padding:14px;text-align:left;border:1px solid #cbd5e1;border-radius:11px;background:white;cursor:pointer}.options button[aria-pressed=true]{border-color:#c2410c;background:#fff7ed;color:#9a3412}textarea{width:100%;margin:15px 0;padding:15px;border:1px solid #cbd5e1;border-radius:12px;font:inherit;resize:vertical}.feedback,.aiError{margin-top:18px;padding:18px;border-radius:12px}.correct{background:#ecfdf3;color:#065f46}.incorrect,.aiError{background:#fff1f2;color:#9f1239}.written{background:#eff6ff;color:#1e3a5f}.aiScore{display:flex;align-items:center;justify-content:space-between;padding:14px 17px;border-radius:12px;background:#dbeafe}.aiScore span{font-size:12px;font-weight:900;letter-spacing:.13em}.aiScore strong{font-size:34px;color:#1d4ed8}.summary{font-weight:700}.criteria{display:grid;gap:10px;padding:0;list-style:none}.criteria>li{display:grid;grid-template-columns:100px 1fr;gap:12px;padding:13px;border-radius:11px;background:white}.criteria p{margin:3px 0 0}.criteria>li>span{align-self:start;padding:4px 8px;border-radius:999px;text-align:center;font-size:12px;font-weight:900}.met{background:#dcfce7;color:#166534}.partly_met{background:#fef3c7;color:#92400e}.not_met{background:#fee2e2;color:#991b1b}.feedbackGrid>div,.model{padding:14px;border-radius:11px;background:white}.model{margin-top:12px;border-left:5px solid #3b82f6}.model p{margin:0}.empty{padding:20px;border-radius:14px;background:#fff7ed}.result{text-align:center}.result>span{display:block;color:#c2410c;font-weight:900;letter-spacing:.12em}.result>strong{display:block;font-size:60px}.result h2{margin-top:25px;font-size:20px}.breakdown{width:min(700px,100%);margin:12px auto;display:grid;gap:9px}.breakdown div{display:flex;justify-content:space-between;gap:18px;padding:11px 14px;border-radius:10px;background:#f8fafc;text-align:left}.breakdown span{font-weight:800}.breakdown b{color:#9a3412}.resultActions{justify-content:center;margin-top:24px}.resultActions button:first-child{border-color:#c2410c;background:#c2410c;color:white}@media(max-width:700px){header,section{padding:20px}.coverageGrid,.quizModes,.feedbackGrid{grid-template-columns:1fr}.criteria>li{grid-template-columns:1fr}.criteria>li>span{justify-self:start}.questionTop{align-items:flex-start}.breakdown div{align-items:flex-start}}
    `}</style>
  </main>;
}
