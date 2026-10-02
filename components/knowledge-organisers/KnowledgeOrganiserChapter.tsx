"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import type { KnowledgeOrganiser, KnowledgeQuestion } from "@/data/knowledgeOrganisers/types";
import KnowledgeOrganiserFlashcards from "@/components/knowledge-organisers/KnowledgeOrganiserFlashcards";
import KnowledgeOrganiserMindMap from "@/components/knowledge-organisers/KnowledgeOrganiserMindMap";
import type { AiMarkingResponse, AiMarkingResult } from "@/lib/knowledgeOrganiserAi";
import { supabase } from "@/lib/supabase";
import { getCurrentStudent } from "@/lib/studentStorage";
import {
  loadKnowledgeOrganiserProgress,
  saveKnowledgeQuizBest,
  saveTaughtSections,
} from "@/lib/knowledgeOrganiserStorage";

type View = "overview" | "learn" | "mindmap" | "flashcards" | "quiz";
type QuizMode = KnowledgeQuestion["type"] | "mixed";
type QuizSize = number | "all";

const quizModeDetails: Array<{ mode: QuizMode; title: string; description: string }> = [
  { mode: "multiple-choice", title: "Multiple Choice", description: "Choose an answer and receive instant marking." },
  { mode: "short-answer", title: "Short Questions", description: "Write concise answers and check the marking points." },
  { mode: "long-answer", title: "Long Questions", description: "Practise extended explanations and supported judgements." },
  { mode: "mixed", title: "Mixed Quiz", description: "Combine every available question type." },
];

const quizTypeLabels: Record<KnowledgeQuestion["type"], string> = {
  "multiple-choice": "Multiple Choice",
  "short-answer": "Short Questions",
  "long-answer": "Long Questions",
};

const criterionStatusLabels: Record<AiMarkingResult["criteria"][number]["status"], string> = {
  met: "Met",
  partly_met: "Partly met",
  not_met: "Not met",
};

function shuffleOptions(options: string[]) {
  const shuffled = [...options];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function shuffleQuestions(questions: KnowledgeQuestion[]) {
  const shuffled = [...questions];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function getQuizSizeOptions(count: number): QuizSize[] {
  if (count <= 1) return count === 1 ? ["all"] : [];
  if (count <= 4) return [...Array.from({ length: count - 1 }, (_, index) => index + 1), "all"];
  return [...[5, 10, 20].filter(size => size < count), "all"];
}

function selectQuizQuestions(questions: KnowledgeQuestion[], size: QuizSize, mode: QuizMode) {
  if (size === "all") return questions;
  if (mode !== "mixed") return questions.slice(0, size);

  const availableTypes = (["multiple-choice", "short-answer", "long-answer"] as KnowledgeQuestion["type"][])
    .filter(type => questions.some(question => question.type === type));
  if (size < availableTypes.length) return questions.slice(0, size);

  const selected = availableTypes
    .map(type => questions.find(question => question.type === type))
    .filter((question): question is KnowledgeQuestion => Boolean(question));
  const selectedIds = new Set(selected.map(question => question.id));
  const remaining = questions.filter(question => !selectedIds.has(question.id));

  return shuffleQuestions([...selected, ...remaining.slice(0, size - selected.length)]);
}

function randomiseMultipleChoiceOptions(question: KnowledgeQuestion): KnowledgeQuestion {
  if (question.type !== "multiple-choice") return question;

  return {
    ...question,
    options: shuffleOptions(question.options),
  };
}

export default function KnowledgeOrganiserChapter({ organiser }: { organiser: KnowledgeOrganiser }) {
  const [student, setStudent] = useState("guest");
  const [taughtIds, setTaughtIds] = useState<string[]>([]);
  const [view, setView] = useState<View>("overview");
  const [savedMessage, setSavedMessage] = useState("");
  const [quizQuestions, setQuizQuestions] = useState<KnowledgeQuestion[]>([]);
  const [quizMode, setQuizMode] = useState<QuizMode | null>(null);
  const [quizSize, setQuizSize] = useState<QuizSize>("all");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [writtenAnswer, setWrittenAnswer] = useState("");
  const [feedback, setFeedback] = useState(false);
  const [aiMarking, setAiMarking] = useState<AiMarkingResult | null>(null);
  const [aiMarkingError, setAiMarkingError] = useState("");
  const [aiMarkingLoading, setAiMarkingLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [scoresByType, setScoresByType] = useState<Record<KnowledgeQuestion["type"], number>>({
    "multiple-choice": 0,
    "short-answer": 0,
    "long-answer": 0,
  });
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function hydrateProgress() {
      const current = getCurrentStudent();
      const progress = await loadKnowledgeOrganiserProgress(current, organiser.id);
      if (cancelled) return;
      setStudent(current);
      setTaughtIds(progress.taughtSectionIds);
    }

    void hydrateProgress();
    return () => { cancelled = true; };
  }, [organiser.id]);

  const taughtSections = useMemo(
    () => organiser.sections.filter(section => taughtIds.includes(section.id)),
    [organiser.sections, taughtIds]
  );
  const availableCards = useMemo(
    () => organiser.flashcards.filter(card => taughtIds.includes(card.sectionId)),
    [organiser.flashcards, taughtIds]
  );
  const availableQuestions = useMemo(
    () => organiser.questions.filter(question => question.sectionIds.every(id => taughtIds.includes(id))),
    [organiser.questions, taughtIds]
  );

  const currentQuestion = quizQuestions[quizIndex];
  const questionsForSelectedMode = useMemo(
    () => quizMode === "mixed" || quizMode === null
      ? availableQuestions
      : availableQuestions.filter(question => question.type === quizMode),
    [availableQuestions, quizMode]
  );
  const availableCounts = useMemo(() => ({
    "multiple-choice": availableQuestions.filter(question => question.type === "multiple-choice").length,
    "short-answer": availableQuestions.filter(question => question.type === "short-answer").length,
    "long-answer": availableQuestions.filter(question => question.type === "long-answer").length,
    mixed: availableQuestions.length,
  }), [availableQuestions]);

  function toggleSection(id: string) {
    setTaughtIds(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id]);
    setSavedMessage("");
  }

  async function persistSections() {
    await saveTaughtSections(student, organiser.id, taughtIds);
    setSavedMessage("Taught sections saved for this student.");
  }

  function openView(next: View) {
    if (taughtIds.length === 0 && next !== "overview") return;
    setView(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function chooseQuizMode(mode: QuizMode) {
    if (availableCounts[mode] === 0) return;
    setQuizMode(mode);
    setQuizSize("all");
  }

  function startQuiz() {
    if (!quizMode) return;
    const randomised = shuffleQuestions(questionsForSelectedMode);
    const selectedQuestions = selectQuizQuestions(randomised, quizSize, quizMode)
      .map(randomiseMultipleChoiceOptions);
    setQuizQuestions(selectedQuestions);
    setQuizIndex(0); setSelectedOption(""); setWrittenAnswer(""); setFeedback(false); setScore(0); setQuizFinished(false);
    setAiMarking(null); setAiMarkingError(""); setAiMarkingLoading(false);
    setScoresByType({ "multiple-choice": 0, "short-answer": 0, "long-answer": 0 });
  }

  function returnToQuizTypes() {
    setQuizQuestions([]);
    setQuizMode(null);
    setQuizSize("all");
    setQuizIndex(0);
    setSelectedOption("");
    setWrittenAnswer("");
    setFeedback(false);
    setAiMarking(null);
    setAiMarkingError("");
    setAiMarkingLoading(false);
    setScore(0);
    setQuizFinished(false);
    setScoresByType({ "multiple-choice": 0, "short-answer": 0, "long-answer": 0 });
  }

  function checkMcq() {
    if (!currentQuestion || currentQuestion.type !== "multiple-choice" || !selectedOption) return;
    setFeedback(true);
  }

  function selfMark(mark: number) {
    nextQuestion(mark);
  }

  async function markWrittenAnswer() {
    const question = currentQuestion;
    if (!question || question.type === "multiple-choice" || writtenAnswer.trim().length < 3) return;

    setAiMarkingLoading(true);
    setAiMarkingError("");
    setAiMarking(null);

    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !session?.access_token) {
        setAiMarkingError("Please sign in again before requesting AI marking.");
        return;
      }

      const response = await fetch("/api/knowledge-organisers/mark", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          organiserId: organiser.id,
          questionId: question.id,
          answer: writtenAnswer,
          student,
        }),
      });
      const payload = await response.json() as AiMarkingResponse;

      if (!response.ok || !payload.ok) {
        setAiMarkingError(payload.ok ? "AI marking is temporarily unavailable." : payload.error);
        return;
      }

      setAiMarking(payload.result);
      setFeedback(true);
    } catch {
      setAiMarkingError("AI marking is temporarily unavailable. Please check the connection and try again.");
    } finally {
      setAiMarkingLoading(false);
    }
  }

  function nextQuestion(awardedMark = 0) {
    if (!currentQuestion) return;
    const nextScore = score + awardedMark;
    setScore(nextScore);
    setScoresByType(previous => ({
      ...previous,
      [currentQuestion.type]: previous[currentQuestion.type] + awardedMark,
    }));
    if (quizIndex + 1 >= quizQuestions.length) {
      const maxScore = quizQuestions.reduce((sum, q) => sum + q.marks, 0);
      setQuizFinished(true);
      void saveKnowledgeQuizBest(student, organiser.id, nextScore, maxScore);
      return;
    }
    setQuizIndex(index => index + 1); setSelectedOption(""); setWrittenAnswer(""); setFeedback(false);
    setAiMarking(null); setAiMarkingError(""); setAiMarkingLoading(false);
  }

  const maxScore = quizQuestions.reduce((sum, question) => sum + question.marks, 0);
  const maxScoresByType = quizQuestions.reduce<Record<KnowledgeQuestion["type"], number>>((totals, question) => {
    totals[question.type] += question.marks;
    return totals;
  }, { "multiple-choice": 0, "short-answer": 0, "long-answer": 0 });

  return <main className="ko">
    <Link href="/knowledge-organisers/year8/history">← Year 8 History</Link>
    <header><p className="eyebrow">YEAR {organiser.year} · {organiser.subject.toUpperCase()} · {organiser.term.toUpperCase()} TERM</p><h1>{organiser.title}</h1><p>{organiser.introduction}</p><div className="status"><span>{taughtIds.length}/{organiser.sections.length} sections taught</span><span>{availableCards.length} flashcards available</span><span>{availableQuestions.length} quiz questions available</span></div></header>

    <nav aria-label="Chapter tools">{(["overview","learn","mindmap","flashcards","quiz"] as View[]).map(item => <button key={item} className={view === item ? "active" : ""} disabled={taughtIds.length === 0 && item !== "overview"} onClick={() => openView(item)}>{item === "overview" ? "Taught sections" : item === "mindmap" ? "Mind Map" : item[0].toUpperCase()+item.slice(1)}</button>)}</nav>

    {view === "overview" && <section><p className="eyebrow">UPDATE TEACHING PROGRESS</p><h2>Which sections has the teacher taught?</h2><p>Only selected sections will appear in Learn, Mind Map, Flashcards and Quiz. Greta and Mathis have separate selections.</p><div className="sectionPicker">{organiser.sections.map(section => <label key={section.id} style={{"--accent":section.colour} as CSSProperties}><input type="checkbox" checked={taughtIds.includes(section.id)} onChange={() => toggleSection(section.id)} /><span><strong>{section.title}</strong><small>{section.period}</small></span></label>)}</div><div className="actions"><button onClick={() => setTaughtIds(organiser.sections.map(section => section.id))}>Select all</button><button onClick={() => setTaughtIds([])}>Clear all</button><button className="primary" onClick={persistSections}>Save taught sections</button></div>{savedMessage && <p className="success" role="status">✓ {savedMessage}</p>}<p className="note">Unselecting a section hides it but does not erase earlier results.</p></section>}

    {view === "learn" && <section><p className="eyebrow">LEARN</p><h2>Currently taught content</h2><div className="lessonList">{taughtSections.map(section => <article key={section.id} style={{"--accent":section.colour} as CSSProperties}><div><span className="period">{section.period}</span><h3>{section.title}</h3><p>{section.summary}</p></div><ul>{section.keyFacts.map(fact => <li key={fact}>{fact}</li>)}</ul><div className="terms">{section.keyTerms.map(term => <span key={term}>{term}</span>)}</div></article>)}</div></section>}

    {view === "mindmap" && <section><p className="eyebrow">INTERACTIVE MIND MAP</p><h2>{organiser.title}</h2><p>The map grows automatically as more sections are taught. Hide the details to practise retrieval, or focus on one branch at a time.</p><KnowledgeOrganiserMindMap title={organiser.title} sections={taughtSections} /></section>}

    {view === "flashcards" && <section><p className="eyebrow">FLASHCARDS</p><h2>Recall the taught sections</h2><p>Flip each card, then swipe or use the buttons to grade your recall.</p><KnowledgeOrganiserFlashcards cards={availableCards} /></section>}

    {view === "quiz" && <section><p className="eyebrow">QUIZ</p><h2>Test the taught sections</h2>
      {quizQuestions.length === 0 && !quizFinished && quizMode === null && <><p>Choose a question type. Only questions from taught sections are available; a combined long question appears only when all of its required sections have been taught.</p><div className="quizModes">{quizModeDetails.map(item => <button key={item.mode} disabled={availableCounts[item.mode] === 0} onClick={() => chooseQuizMode(item.mode)}><strong>{item.title}</strong><span>{availableCounts[item.mode]} {availableCounts[item.mode] === 1 ? "question" : "questions"} available</span><small>{availableCounts[item.mode] === 0 ? "No questions available yet" : item.description}</small></button>)}</div></>}
      {quizQuestions.length === 0 && !quizFinished && quizMode !== null && <div className="quizSetup"><button className="backButton" onClick={returnToQuizTypes}>← Back to quiz types</button><p className="eyebrow">{quizModeDetails.find(item => item.mode === quizMode)?.title}</p><h3>How many questions?</h3><p>{questionsForSelectedMode.length} questions are currently available from the taught sections.</p><div className="sizeOptions">{getQuizSizeOptions(questionsForSelectedMode.length).map(size => <button key={size} className={quizSize === size ? "selected" : ""} onClick={() => setQuizSize(size)}>{size === "all" ? `All ${questionsForSelectedMode.length}` : size} {size === 1 ? "question" : "questions"}</button>)}</div><button className="primary startQuiz" disabled={questionsForSelectedMode.length === 0} onClick={startQuiz}>Start quiz →</button></div>}
      {currentQuestion && !quizFinished && <div className="question"><div className="questionTop"><span>Question {quizIndex+1} of {quizQuestions.length}</span><b>{currentQuestion.marks} {currentQuestion.marks === 1 ? "mark" : "marks"}</b></div><h3>{currentQuestion.prompt}</h3>
        {currentQuestion.type === "multiple-choice" ? <div className="options">{currentQuestion.options.map(option => <button key={option} aria-pressed={selectedOption===option} disabled={feedback} onClick={() => setSelectedOption(option)}>{option}</button>)}</div> : <textarea value={writtenAnswer} onChange={event => setWrittenAnswer(event.target.value)} placeholder="Write your answer here..." rows={currentQuestion.type === "long-answer" ? 10 : 5} disabled={feedback} />}
        {!feedback && <button className="primary" disabled={aiMarkingLoading || (currentQuestion.type === "multiple-choice" ? !selectedOption : writtenAnswer.trim().length < 3)} onClick={() => currentQuestion.type === "multiple-choice" ? checkMcq() : void markWrittenAnswer()}>{aiMarkingLoading ? "Marking answer…" : "Check answer"}</button>}
        {!feedback && aiMarkingError && <div className="aiError" role="alert"><strong>AI marking could not finish</strong><p>{aiMarkingError}</p><div className="aiActions"><button onClick={() => void markWrittenAnswer()}>Try again</button><button onClick={() => setFeedback(true)}>Use self-marking instead</button></div></div>}
        {feedback && currentQuestion.type === "multiple-choice" && <div className={selectedOption===currentQuestion.answer ? "feedback correct" : "feedback incorrect"}><strong>{selectedOption===currentQuestion.answer ? "Correct" : `Correct answer: ${currentQuestion.answer}`}</strong><p>{currentQuestion.explanation}</p><button className="primary" onClick={() => nextQuestion(selectedOption===currentQuestion.answer ? currentQuestion.marks : 0)}>Next question →</button></div>}
        {feedback && currentQuestion.type !== "multiple-choice" && aiMarking && <div className="feedback written aiFeedback"><div className="aiScore"><span>AI MARK</span><strong>{aiMarking.awardedMarks}/{aiMarking.maxMarks}</strong></div><p className="aiSummary">{aiMarking.summary}</p><h4>Marking points</h4><ul className="criteriaList">{aiMarking.criteria.map((criterion, index) => <li key={`${criterion.markingPoint}-${index}`}><span className={`criterionStatus ${criterion.status}`}>{criterionStatusLabels[criterion.status]}</span><div><strong>{criterion.markingPoint}</strong><p>{criterion.comment}</p></div></li>)}</ul><div className="feedbackColumns">{aiMarking.strengths.length > 0 && <div className="feedbackBlock"><h4>What went well</h4><ul>{aiMarking.strengths.map(item => <li key={item}>{item}</li>)}</ul></div>}{aiMarking.improvements.length > 0 && <div className="feedbackBlock"><h4>How to improve</h4><ul>{aiMarking.improvements.map(item => <li key={item}>{item}</li>)}</ul></div>}{aiMarking.missedPoints.length > 0 && <div className="feedbackBlock"><h4>Points to add</h4><ul>{aiMarking.missedPoints.map(item => <li key={item}>{item}</li>)}</ul></div>}{aiMarking.inaccuracies.length > 0 && <div className="feedbackBlock warning"><h4>Check these details</h4><ul>{aiMarking.inaccuracies.map(item => <li key={item}>{item}</li>)}</ul></div>}</div><div className="modelAnswer"><h4>Example improved answer</h4><p>{aiMarking.modelAnswer}</p></div><small>{aiMarking.disclaimer}</small><div className="aiActions"><button className="primary" onClick={() => nextQuestion(aiMarking.awardedMarks)}>Next question →</button></div></div>}
        {feedback && currentQuestion.type !== "multiple-choice" && !aiMarking && <div className="feedback written"><strong>Check your answer against the marking points</strong><ul>{currentQuestion.markingPoints.map(point => <li key={point}>{point}</li>)}</ul><p><b>Improvement guidance:</b> {currentQuestion.guidance}</p><p>How many marking points did your answer include?</p><div className="markButtons">{Array.from({length:currentQuestion.marks+1},(_,mark) => <button key={mark} onClick={() => selfMark(mark)}>{mark}</button>)}</div><small>This self-marking option is used only when AI marking is unavailable.</small></div>}
      </div>}
      {quizFinished && <div className="result"><span>QUIZ COMPLETE</span><strong>{score}/{maxScore}</strong><p>{maxScore ? Math.round(score/maxScore*100) : 0}% on this quiz</p><div className="resultBreakdown">{(["multiple-choice", "short-answer", "long-answer"] as KnowledgeQuestion["type"][]).filter(type => maxScoresByType[type] > 0).map(type => <div key={type}><span>{quizTypeLabels[type]}</span><b>{scoresByType[type]}/{maxScoresByType[type]}</b></div>)}</div><div className="resultActions"><button onClick={startQuiz}>Try again</button><button onClick={returnToQuizTypes}>Choose another quiz</button></div></div>}
    </section>}

    <style jsx>{`
      .ko{max-width:1080px;width:calc(100% - 36px);margin:36px auto 80px;color:#26354a;font-family:Arial,sans-serif;line-height:1.6}.ko *{box-sizing:border-box}.ko :global(a){color:#9a3412;font-weight:800}header{margin-top:24px;padding:34px;border:1px solid #fdba74;border-radius:26px;background:linear-gradient(135deg,#fff7ed,#fff)}.eyebrow{margin:0 0 8px;color:#c2410c;font-size:13px;font-weight:900;letter-spacing:.11em}h1{margin:0;font-size:clamp(36px,6vw,56px);line-height:1.1}header>p:not(.eyebrow){font-size:19px;color:#596579;max-width:760px}.status{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.status span{padding:7px 11px;border-radius:999px;background:#ffedd5;color:#9a3412;font-size:13px;font-weight:800}nav{display:flex;gap:9px;overflow-x:auto;padding:18px 2px}button{font:inherit;cursor:pointer}nav button,.actions button,.cardActions button,.markButtons button{border:1px solid #d5dce6;border-radius:11px;background:white;padding:11px 15px;color:#344054;font-weight:800;white-space:nowrap}button:disabled{cursor:not-allowed;opacity:.45}nav .active,.primary{background:#c2410c!important;border-color:#c2410c!important;color:white!important}section{padding:28px;border:1px solid #e2e8f0;border-radius:22px;background:white;box-shadow:0 8px 25px rgba(15,23,42,.04)}h2{font-size:29px;margin:0 0 8px}h3{line-height:1.35}.sectionPicker{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:24px 0}.sectionPicker label{display:flex;align-items:center;gap:14px;padding:16px;border:1px solid #dce3ec;border-left:6px solid var(--accent);border-radius:13px;cursor:pointer}.sectionPicker input{width:22px;height:22px;accent-color:#c2410c}.sectionPicker span,.sectionPicker strong,.sectionPicker small{display:block}.sectionPicker small{color:#667085}.actions,.cardActions,.markButtons{display:flex;gap:10px;flex-wrap:wrap}.success{padding:12px 15px;background:#ecfdf3;color:#067647;border-radius:10px}.note{color:#667085;font-size:14px}.lessonList{display:grid;gap:18px;margin-top:22px}.lessonList article{padding:22px;border-left:7px solid var(--accent);border-radius:14px;background:#f8fafc}.lessonList h3{font-size:24px;margin:5px 0}.period{color:var(--accent);font-weight:900}.lessonList li{margin-bottom:6px}.terms{display:flex;gap:8px;flex-wrap:wrap}.terms span{padding:5px 9px;border-radius:999px;background:white;border:1px solid #dce3ec;font-size:13px;font-weight:800}.mindmap{margin-top:28px}.root{width:min(360px,100%);margin:0 auto 22px;padding:22px;text-align:center;border-radius:18px;background:#c2410c;color:white;font-size:25px;font-weight:900}.root small{display:block;font-size:13px;margin-top:5px}.branches{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.branches article{position:relative;padding:18px;border-top:7px solid var(--accent);border-radius:14px;background:#f8fafc}.branches h3{margin:0}.branches small{color:#667085}.branches p{font-size:14px}.flashcard{display:flex;width:min(760px,100%);min-height:330px;margin:25px auto 18px;padding:36px;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:2px solid #fdba74;border-radius:25px;background:linear-gradient(145deg,#fff7ed,#fff);color:#26354a}.flashcard.flipped{background:linear-gradient(145deg,#ecfdf3,#fff);border-color:#6ee7b7}.flashcard span{font-size:12px;font-weight:900;letter-spacing:.15em;color:#c2410c}.flashcard strong{font-size:clamp(23px,4vw,34px);line-height:1.35;margin:25px 0}.flashcard small{color:#667085}.cardActions{justify-content:center}.quizModes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:24px}.quizModes button{min-height:150px;padding:20px;text-align:left;border:1px solid #d5dce6;border-radius:16px;background:linear-gradient(145deg,#fff,#f8fafc);color:#26354a}.quizModes button:not(:disabled):hover{border-color:#c2410c;transform:translateY(-2px);box-shadow:0 8px 20px rgba(194,65,12,.1)}.quizModes strong,.quizModes span,.quizModes small{display:block}.quizModes strong{font-size:21px}.quizModes span{margin:8px 0;color:#c2410c;font-weight:900}.quizModes small{color:#667085;white-space:normal}.quizSetup{margin-top:22px;padding:24px;border-radius:17px;background:#f8fafc}.backButton{margin-bottom:22px;border:0;background:transparent;color:#9a3412;font-weight:900}.sizeOptions{display:flex;gap:10px;flex-wrap:wrap;margin:18px 0}.sizeOptions button{padding:11px 15px;border:1px solid #cbd5e1;border-radius:11px;background:white;color:#344054;font-weight:800}.sizeOptions .selected{border-color:#c2410c;background:#fff7ed;color:#9a3412}.startQuiz{margin-top:8px}.question{margin-top:22px;padding:24px;border-radius:17px;background:#f8fafc}.questionTop{display:flex;justify-content:space-between;color:#667085}.options{display:grid;gap:10px;margin:18px 0}.options button{padding:14px;text-align:left;border:1px solid #cbd5e1;border-radius:11px;background:white}.options button[aria-pressed=true]{border-color:#c2410c;background:#fff7ed;color:#9a3412}textarea{width:100%;margin:15px 0;padding:15px;border:1px solid #cbd5e1;border-radius:12px;font:inherit;resize:vertical}.feedback{margin-top:18px;padding:18px;border-radius:12px}.correct{background:#ecfdf3;color:#065f46}.incorrect{background:#fff1f2;color:#9f1239}.written{background:#eff6ff;color:#1e3a5f}.written small{display:block;margin-top:14px}.markButtons button{min-width:46px}.aiError{margin-top:16px;padding:16px;border:1px solid #fecdd3;border-radius:12px;background:#fff1f2;color:#9f1239}.aiError p{margin:5px 0 12px}.aiActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}.aiActions button{padding:10px 14px;border:1px solid #c2410c;border-radius:10px;background:white;color:#9a3412;font-weight:800}.aiFeedback{color:#1e3a5f}.aiScore{display:flex;align-items:center;justify-content:space-between;padding:14px 17px;border-radius:12px;background:#dbeafe}.aiScore span{font-size:12px;font-weight:900;letter-spacing:.13em}.aiScore strong{font-size:34px;color:#1d4ed8}.aiSummary{font-size:17px;font-weight:700}.criteriaList{display:grid;gap:10px;padding:0;list-style:none}.criteriaList li{display:grid;grid-template-columns:100px 1fr;gap:12px;padding:13px;border-radius:11px;background:white}.criteriaList p{margin:3px 0 0}.criterionStatus{align-self:start;padding:4px 8px;border-radius:999px;text-align:center;font-size:12px;font-weight:900}.criterionStatus.met{background:#dcfce7;color:#166534}.criterionStatus.partly_met{background:#fef3c7;color:#92400e}.criterionStatus.not_met{background:#fee2e2;color:#991b1b}.feedbackColumns{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:18px}.feedbackBlock,.modelAnswer{padding:14px;border-radius:11px;background:white}.feedbackBlock h4,.modelAnswer h4{margin:0 0 7px}.feedbackBlock ul{margin:0;padding-left:20px}.feedbackBlock.warning{border:1px solid #fecaca}.modelAnswer{margin-top:12px;border-left:5px solid #3b82f6}.modelAnswer p{margin:0}.result{text-align:center;padding:36px;border-radius:18px;background:#fff7ed}.result>span{display:block;color:#c2410c;font-weight:900;letter-spacing:.12em}.result>strong{display:block;font-size:60px}.resultBreakdown{width:min(520px,100%);margin:22px auto;display:grid;gap:9px}.resultBreakdown div{display:flex;justify-content:space-between;padding:11px 14px;border-radius:10px;background:white}.resultBreakdown span{color:#344054;font-weight:800}.resultBreakdown b{color:#9a3412}.resultActions{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}.result button{border:1px solid #c2410c;border-radius:11px;padding:12px 18px;background:white;color:#9a3412;font-weight:800}.result button:first-child{background:#c2410c;color:white}@media(max-width:700px){header,section{padding:20px}.sectionPicker,.branches,.quizModes,.feedbackColumns{grid-template-columns:1fr}.criteriaList li{grid-template-columns:1fr}.criterionStatus{justify-self:start}h2{font-size:25px}.question{padding:17px}}
    `}</style>
  </main>;
}
