"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import type { KnowledgeOrganiser, KnowledgeQuestion } from "@/data/knowledgeOrganisers/types";
import { getCurrentStudent } from "@/lib/studentStorage";
import {
  loadKnowledgeOrganiserProgress,
  saveKnowledgeQuizBest,
  saveTaughtSections,
} from "@/lib/knowledgeOrganiserStorage";

type View = "overview" | "learn" | "mindmap" | "flashcards" | "quiz";

function shuffleOptions(options: string[]) {
  const shuffled = [...options];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
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
  const [cardIndex, setCardIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<string[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<KnowledgeQuestion[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [writtenAnswer, setWrittenAnswer] = useState("");
  const [feedback, setFeedback] = useState(false);
  const [score, setScore] = useState(0);
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

  const currentCard = availableCards[cardIndex % Math.max(availableCards.length, 1)];
  const currentQuestion = quizQuestions[quizIndex];

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
    setCardIndex(0);
    setCardFlipped(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function answerCard(known: boolean) {
    if (!currentCard) return;
    if (known) setKnownCards(previous => previous.includes(currentCard.id) ? previous : [...previous, currentCard.id]);
    setCardFlipped(false);
    setCardIndex(index => (index + 1) % availableCards.length);
  }

  function startQuiz() {
    setQuizQuestions(availableQuestions.map(randomiseMultipleChoiceOptions));
    setQuizIndex(0); setSelectedOption(""); setWrittenAnswer(""); setFeedback(false); setScore(0); setQuizFinished(false);
  }

  function checkMcq() {
    if (!currentQuestion || currentQuestion.type !== "multiple-choice" || !selectedOption) return;
    setFeedback(true);
  }

  function selfMark(mark: number) {
    nextQuestion(mark);
  }

  function nextQuestion(awardedMark = 0) {
    const nextScore = score + awardedMark;
    setScore(nextScore);
    if (quizIndex + 1 >= quizQuestions.length) {
      const maxScore = quizQuestions.reduce((sum, q) => sum + q.marks, 0);
      setQuizFinished(true);
      void saveKnowledgeQuizBest(student, organiser.id, nextScore, maxScore);
      return;
    }
    setQuizIndex(index => index + 1); setSelectedOption(""); setWrittenAnswer(""); setFeedback(false);
  }

  const maxScore = quizQuestions.reduce((sum, question) => sum + question.marks, 0);

  return <main className="ko">
    <Link href="/knowledge-organisers/year8/history">← Year 8 History</Link>
    <header><p className="eyebrow">YEAR {organiser.year} · {organiser.subject.toUpperCase()} · {organiser.term.toUpperCase()} TERM</p><h1>{organiser.title}</h1><p>{organiser.introduction}</p><div className="status"><span>{taughtIds.length}/{organiser.sections.length} sections taught</span><span>{availableCards.length} flashcards available</span><span>{availableQuestions.length} quiz questions available</span></div></header>

    <nav aria-label="Chapter tools">{(["overview","learn","mindmap","flashcards","quiz"] as View[]).map(item => <button key={item} className={view === item ? "active" : ""} disabled={taughtIds.length === 0 && item !== "overview"} onClick={() => openView(item)}>{item === "overview" ? "Taught sections" : item === "mindmap" ? "Mind Map" : item[0].toUpperCase()+item.slice(1)}</button>)}</nav>

    {view === "overview" && <section><p className="eyebrow">UPDATE TEACHING PROGRESS</p><h2>Which sections has the teacher taught?</h2><p>Only selected sections will appear in Learn, Mind Map, Flashcards and Quiz. Greta and Mathis have separate selections.</p><div className="sectionPicker">{organiser.sections.map(section => <label key={section.id} style={{"--accent":section.colour} as CSSProperties}><input type="checkbox" checked={taughtIds.includes(section.id)} onChange={() => toggleSection(section.id)} /><span><strong>{section.title}</strong><small>{section.period}</small></span></label>)}</div><div className="actions"><button onClick={() => setTaughtIds(organiser.sections.map(section => section.id))}>Select all</button><button onClick={() => setTaughtIds([])}>Clear all</button><button className="primary" onClick={persistSections}>Save taught sections</button></div>{savedMessage && <p className="success" role="status">✓ {savedMessage}</p>}<p className="note">Unselecting a section hides it but does not erase earlier results.</p></section>}

    {view === "learn" && <section><p className="eyebrow">LEARN</p><h2>Currently taught content</h2><div className="lessonList">{taughtSections.map(section => <article key={section.id} style={{"--accent":section.colour} as CSSProperties}><div><span className="period">{section.period}</span><h3>{section.title}</h3><p>{section.summary}</p></div><ul>{section.keyFacts.map(fact => <li key={fact}>{fact}</li>)}</ul><div className="terms">{section.keyTerms.map(term => <span key={term}>{term}</span>)}</div></article>)}</div></section>}

    {view === "mindmap" && <section><p className="eyebrow">AUTO-GENERATED MIND MAP</p><h2>{organiser.title}</h2><p>This map grows automatically when more taught sections are selected.</p><div className="mindmap"><div className="root">{organiser.title}<small>{taughtSections.length} taught branches</small></div><div className="branches">{taughtSections.map(section => <article key={section.id} style={{"--accent":section.colour} as CSSProperties}><h3>{section.title}</h3><small>{section.period}</small>{section.keyFacts.map(fact => <p key={fact}>• {fact}</p>)}</article>)}</div></div></section>}

    {view === "flashcards" && <section><p className="eyebrow">FLASHCARDS</p><h2>Recall the taught sections</h2><p>{knownCards.length} known · {availableCards.length} available</p>{currentCard && <><button className={`flashcard ${cardFlipped ? "flipped" : ""}`} onClick={() => setCardFlipped(value => !value)}><span>{cardFlipped ? "ANSWER" : "QUESTION"}</span><strong>{cardFlipped ? currentCard.back : currentCard.front}</strong><small>Tap to {cardFlipped ? "see the question" : "reveal the answer"}</small></button><div className="cardActions"><button onClick={() => answerCard(false)}>Review again</button><button className="primary" onClick={() => answerCard(true)}>Know it ✓</button></div></>}</section>}

    {view === "quiz" && <section><p className="eyebrow">QUIZ</p><h2>Test the taught sections</h2>{quizQuestions.length === 0 && !quizFinished && <><p>The current quiz contains {availableQuestions.length} questions: multiple choice, short answer and long answer questions appear only when every required section has been taught.</p><button className="primary" disabled={availableQuestions.length === 0} onClick={startQuiz}>Start quiz →</button></>}
      {currentQuestion && !quizFinished && <div className="question"><div className="questionTop"><span>Question {quizIndex+1} of {quizQuestions.length}</span><b>{currentQuestion.marks} {currentQuestion.marks === 1 ? "mark" : "marks"}</b></div><h3>{currentQuestion.prompt}</h3>
        {currentQuestion.type === "multiple-choice" ? <div className="options">{currentQuestion.options.map(option => <button key={option} aria-pressed={selectedOption===option} disabled={feedback} onClick={() => setSelectedOption(option)}>{option}</button>)}</div> : <textarea value={writtenAnswer} onChange={event => setWrittenAnswer(event.target.value)} placeholder="Write your answer here..." rows={currentQuestion.type === "long-answer" ? 10 : 5} disabled={feedback} />}
        {!feedback && <button className="primary" disabled={currentQuestion.type === "multiple-choice" ? !selectedOption : writtenAnswer.trim().length < 3} onClick={() => currentQuestion.type === "multiple-choice" ? checkMcq() : setFeedback(true)}>Check answer</button>}
        {feedback && currentQuestion.type === "multiple-choice" && <div className={selectedOption===currentQuestion.answer ? "feedback correct" : "feedback incorrect"}><strong>{selectedOption===currentQuestion.answer ? "Correct" : `Correct answer: ${currentQuestion.answer}`}</strong><p>{currentQuestion.explanation}</p><button className="primary" onClick={() => nextQuestion(selectedOption===currentQuestion.answer ? currentQuestion.marks : 0)}>Next question →</button></div>}
        {feedback && currentQuestion.type !== "multiple-choice" && <div className="feedback written"><strong>Check your answer against the marking points</strong><ul>{currentQuestion.markingPoints.map(point => <li key={point}>{point}</li>)}</ul><p><b>Improvement guidance:</b> {currentQuestion.guidance}</p><p>How many marking points did your answer include?</p><div className="markButtons">{Array.from({length:currentQuestion.marks+1},(_,mark) => <button key={mark} onClick={() => selfMark(mark)}>{mark}</button>)}</div><small>AI marking will replace this self-mark step after the server-side API key is configured.</small></div>}
      </div>}
      {quizFinished && <div className="result"><span>QUIZ COMPLETE</span><strong>{score}/{maxScore}</strong><p>{maxScore ? Math.round(score/maxScore*100) : 0}% on the sections taught so far</p><button onClick={startQuiz}>Try again</button></div>}
    </section>}

    <style jsx>{`
      .ko{max-width:1080px;width:calc(100% - 36px);margin:36px auto 80px;color:#26354a;font-family:Arial,sans-serif;line-height:1.6}.ko *{box-sizing:border-box}.ko :global(a){color:#9a3412;font-weight:800}header{margin-top:24px;padding:34px;border:1px solid #fdba74;border-radius:26px;background:linear-gradient(135deg,#fff7ed,#fff)}.eyebrow{margin:0 0 8px;color:#c2410c;font-size:13px;font-weight:900;letter-spacing:.11em}h1{margin:0;font-size:clamp(36px,6vw,56px);line-height:1.1}header>p:not(.eyebrow){font-size:19px;color:#596579;max-width:760px}.status{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.status span{padding:7px 11px;border-radius:999px;background:#ffedd5;color:#9a3412;font-size:13px;font-weight:800}nav{display:flex;gap:9px;overflow-x:auto;padding:18px 2px}button{font:inherit;cursor:pointer}nav button,.actions button,.cardActions button,.markButtons button{border:1px solid #d5dce6;border-radius:11px;background:white;padding:11px 15px;color:#344054;font-weight:800;white-space:nowrap}button:disabled{cursor:not-allowed;opacity:.45}nav .active,.primary{background:#c2410c!important;border-color:#c2410c!important;color:white!important}section{padding:28px;border:1px solid #e2e8f0;border-radius:22px;background:white;box-shadow:0 8px 25px rgba(15,23,42,.04)}h2{font-size:29px;margin:0 0 8px}h3{line-height:1.35}.sectionPicker{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:24px 0}.sectionPicker label{display:flex;align-items:center;gap:14px;padding:16px;border:1px solid #dce3ec;border-left:6px solid var(--accent);border-radius:13px;cursor:pointer}.sectionPicker input{width:22px;height:22px;accent-color:#c2410c}.sectionPicker span,.sectionPicker strong,.sectionPicker small{display:block}.sectionPicker small{color:#667085}.actions,.cardActions,.markButtons{display:flex;gap:10px;flex-wrap:wrap}.success{padding:12px 15px;background:#ecfdf3;color:#067647;border-radius:10px}.note{color:#667085;font-size:14px}.lessonList{display:grid;gap:18px;margin-top:22px}.lessonList article{padding:22px;border-left:7px solid var(--accent);border-radius:14px;background:#f8fafc}.lessonList h3{font-size:24px;margin:5px 0}.period{color:var(--accent);font-weight:900}.lessonList li{margin-bottom:6px}.terms{display:flex;gap:8px;flex-wrap:wrap}.terms span{padding:5px 9px;border-radius:999px;background:white;border:1px solid #dce3ec;font-size:13px;font-weight:800}.mindmap{margin-top:28px}.root{width:min(360px,100%);margin:0 auto 22px;padding:22px;text-align:center;border-radius:18px;background:#c2410c;color:white;font-size:25px;font-weight:900}.root small{display:block;font-size:13px;margin-top:5px}.branches{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.branches article{position:relative;padding:18px;border-top:7px solid var(--accent);border-radius:14px;background:#f8fafc}.branches h3{margin:0}.branches small{color:#667085}.branches p{font-size:14px}.flashcard{display:flex;width:min(760px,100%);min-height:330px;margin:25px auto 18px;padding:36px;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:2px solid #fdba74;border-radius:25px;background:linear-gradient(145deg,#fff7ed,#fff);color:#26354a}.flashcard.flipped{background:linear-gradient(145deg,#ecfdf3,#fff);border-color:#6ee7b7}.flashcard span{font-size:12px;font-weight:900;letter-spacing:.15em;color:#c2410c}.flashcard strong{font-size:clamp(23px,4vw,34px);line-height:1.35;margin:25px 0}.flashcard small{color:#667085}.cardActions{justify-content:center}.question{margin-top:22px;padding:24px;border-radius:17px;background:#f8fafc}.questionTop{display:flex;justify-content:space-between;color:#667085}.options{display:grid;gap:10px;margin:18px 0}.options button{padding:14px;text-align:left;border:1px solid #cbd5e1;border-radius:11px;background:white}.options button[aria-pressed=true]{border-color:#c2410c;background:#fff7ed;color:#9a3412}textarea{width:100%;margin:15px 0;padding:15px;border:1px solid #cbd5e1;border-radius:12px;font:inherit;resize:vertical}.feedback{margin-top:18px;padding:18px;border-radius:12px}.correct{background:#ecfdf3;color:#065f46}.incorrect{background:#fff1f2;color:#9f1239}.written{background:#eff6ff;color:#1e3a5f}.written small{display:block;margin-top:14px}.markButtons button{min-width:46px}.result{text-align:center;padding:36px;border-radius:18px;background:#fff7ed}.result span{display:block;color:#c2410c;font-weight:900;letter-spacing:.12em}.result strong{display:block;font-size:60px}.result button{border:0;border-radius:11px;padding:12px 18px;background:#c2410c;color:white;font-weight:800}@media(max-width:700px){header,section{padding:20px}.sectionPicker,.branches{grid-template-columns:1fr}h2{font-size:25px}.question{padding:17px}}
    `}</style>
  </main>;
}
