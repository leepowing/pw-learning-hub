"use client";

import CheckpointParentReview from "@/components/chinese-gcse/CheckpointParentReview";
import {targetWords, readingText, reading, listeningScripts, speaking, translations, writing} from "@/data/chineseGcse/checkpoint3";

export default function Checkpoint3ParentPage() {
  return <CheckpointParentReview
    checkpointId="weeks9-12"
    title="Weeks 9–12 Checkpoint"
    wordCount={40}
    confirmRpc="ch3_confirm_checkpoint3"
    listeningEndpoint="/api/chinese-gcse/learning/checkpoint3/listening"
    words={targetWords}
    readingText={readingText}
    reading={reading}
    readingAnswers={[0, 1, 2, 1]}
    listening={listeningScripts}
    listeningAnswers={[0, 1, 0, 1, 1, 2]}
    speaking={speaking}
    translations={translations}
    writing={writing}
  />;
}
