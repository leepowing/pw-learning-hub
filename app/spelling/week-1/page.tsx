"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSpellingWeek } from "@/data/spellingWeeks-backup";

const speak = (word: string) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-GB";
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
};

const week = getSpellingWeek(1)!;
const words = week.words;

export default function WeekOnePage() {
  const [completed, setCompleted] = useState<number[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoaded) {
      return;
    }
    const savedCompleted =
      window.localStorage.getItem("week1Learned");

    if (savedCompleted) {
      try {
        const parsedCompleted = JSON.parse(savedCompleted);

        if (Array.isArray(parsedCompleted)) {
          setCompleted(parsedCompleted);
        }
      } catch {
        window.localStorage.removeItem("week1Learned");
      }
    }

    setHasLoaded(true);
  }, []);

  return (
    <main className="home-page">
      <Link href="/spelling">← Back to spelling</Link>

      <section className="student-section">
        <p className="small-title">WEEK 1</p>
        <h1>Spelling Words</h1>
        <p>Read each word, meaning and example sentence.</p>
        <div className="week-progress-summary">
  <strong>
    Progress: {completed.length} / {words.length}
  </strong>

  <div className="progress">
    <div
      className="progress-fill"
      style={{
        width: `${(completed.length / words.length) * 100}%`,
      }}
    />
  </div>
</div>

        <div className="word-list">
          {words.map((item, index) => (
            <article className="word-card" key={item.word}>
              <div className="word-number">{index + 1}</div>

              <div>
<div className="flex items-center gap-2">
  <h2>{item.word}</h2>

  <button
    onClick={() => speak(item.word)}
    className="text-xl hover:scale-110"
  >
    🔊
  </button>

<button
onClick={() => {
  setCompleted((previousCompleted) => {
    if (previousCompleted.includes(index)) {
      return previousCompleted.filter(
        (completedIndex) => completedIndex !== index
      );
    }

    return [...previousCompleted, index];
  });
}}
  style={{
    marginLeft: "12px",
    background: completed.includes(index) ? "#22c55e" : "#e5e7eb",
    color: completed.includes(index) ? "white" : "black",
    border: "none",
    borderRadius: "8px",
    padding: "6px 12px",
    cursor: "pointer",
  }}
>
  {completed.includes(index) ? "✓ Learned" : "Mark Learned"}
</button>

</div>
<p>{item.meaning}</p>

<p className="chinese-meaning">
  中文：{item.chinese}
</p>

<small>{item.sentence}</small>
              </div>
            </article>
          ))}
        </div>
<Link href="/spelling/week-1/quiz" className="quiz-link">
  📝 Start Week 1 Quiz
</Link>

      </section>
    </main>
  );
}