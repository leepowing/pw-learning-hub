"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getSpellingWeek } from "@/data/spellingWeeks";
import { getStudentStorageKey } from "@/lib/studentStorage";

const speak = (word: string, sentence: string) => {
  window.speechSynthesis.cancel();

  const first = new SpeechSynthesisUtterance(
    `The word is ${word}.`
  );
  first.lang = "en-GB";
  first.rate = 0.82;

  const second = new SpeechSynthesisUtterance(
    sentence
  );
  second.lang = "en-GB";
  second.rate = 0.82;

  const third = new SpeechSynthesisUtterance(
    word
  );
  third.lang = "en-GB";
  third.rate = 0.82;

  window.speechSynthesis.speak(first);

  first.onend = () => {
    setTimeout(() => {
      window.speechSynthesis.speak(second);

      second.onend = () => {
        setTimeout(() => {
          window.speechSynthesis.speak(third);
        }, 800);
      };
    }, 800);
  };
};

export default function WeekPage(){
  const params = useParams<{ week: string }>();
  const weekNumber = Number(params.week);
  const weekData = getSpellingWeek(weekNumber);
  const words = weekData?.words ?? [];
const storageKey = getStudentStorageKey(
  `week${weekNumber}Learned`
);

  const [completed, setCompleted] = useState<number[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

useEffect(() => {
  const savedCompleted =
    window.localStorage.getItem(storageKey);

  if (savedCompleted) {
    try {
      const parsedCompleted = JSON.parse(savedCompleted);

      if (Array.isArray(parsedCompleted)) {
        setCompleted(parsedCompleted);
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }

  setHasLoaded(true);

}, [storageKey]);

useEffect(() => {
  if (!hasLoaded) return;

  window.localStorage.setItem(
    storageKey,
    JSON.stringify(completed)
  );

}, [completed, hasLoaded, storageKey]);

if (!weekData) {
  return (
    <main className="home-page">
      <Link href="/spelling">← Back to spelling</Link>

      <section className="student-section">
        <h1>Week {weekNumber} not found</h1>
        <p>This week has not been added yet.</p>
      </section>
    </main>
  );
}
  return (
    <main className="home-page">
      <Link href="/spelling">← Back to spelling</Link>

      <section className="student-section">
<p className="small-title">
  WEEK {weekNumber}
</p>
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
onClick={() => speak(item.word, item.sentence)}
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

<div className="example-box">
  <strong>Example</strong>
  <p>{item.sentence}</p>
</div>
              </div>
            </article>
          ))}
        </div>
<Link href={`/spelling/${weekNumber}/quiz`} className="quiz-link">
  📝 Start Week {weekNumber} Quiz
</Link>

      </section>
    </main>
  );
}