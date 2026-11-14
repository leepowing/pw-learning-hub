"use client";

import CheckpointParentReview from "@/components/chinese-gcse/CheckpointParentReview";
import {targetWords, readingText, reading, listeningScripts, speaking, translations, writing} from "@/data/chineseGcse/checkpoint2";

export default function Checkpoint2ParentPage() {
  return <CheckpointParentReview
    checkpointId="weeks5-8"
    title="Weeks 5–8 Checkpoint"
    wordCount={40}
    confirmRpc="ch3_confirm_checkpoint2"
    listeningEndpoint="/api/chinese-gcse/learning/checkpoint2/listening"
    words={targetWords}
    readingText={readingText}
    reading={reading}
    readingAnswers={[0, 1, 1, 1]}
    listening={listeningScripts}
    listeningAnswers={[1, 1, 1, 1, 1, 0]}
    speaking={speaking}
    translations={translations}
    writing={writing}
  />;
}
