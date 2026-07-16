"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStudentMistakes } from "@/lib/supabase";
import { getCurrentStudent } from "@/lib/studentStorage";

export default function MistakeBookPage() {
  const [mistakes, setMistakes] = useState<any[]>([]);

  useEffect(() => {
    async function loadMistakes() {
      const student = getCurrentStudent();
      const data = await getStudentMistakes(student);
      setMistakes(data);
    }

    loadMistakes();
  }, []);

  return (
    <main className="page-container">
      <Link href="/spelling">← Back</Link>

      <h1>📖 Mistake Book</h1>

      <p>Total words: {mistakes.length}</p>

      {mistakes.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <h3>{item.word}</h3>

          <p>Week {item.week}</p>

          <p>Wrong Count: {item.wrong_count}</p>
        </div>
      ))}
    </main>
  );
}