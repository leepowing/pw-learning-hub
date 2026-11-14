"use client";

import CheckpointParentReview from "@/components/chinese-gcse/CheckpointParentReview";
import {targetWords, readingText, reading, listeningScripts, speaking, translations, writing} from "@/data/chineseGcse/checkpoint1";

export default function Checkpoint1ParentPage() {
  return <CheckpointParentReview
    checkpointId="weeks1-4"
    title="Weeks 1–4 Checkpoint"
    wordCount={32}
    confirmRpc="ch3_confirm_checkpoint"
    listeningEndpoint="/api/chinese-gcse/learning/checkpoint1/listening"
    words={targetWords}
    readingText={readingText}
    reading={reading}
    readingAnswers={[1, 0, 1, 0]}
    listening={listeningScripts}
    listeningAnswers={[1, 0, 1, 2, 0, 1]}
    speaking={speaking}
    translations={translations}
    writing={writing}
  />;
}
