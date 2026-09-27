import { supabase } from "@/lib/supabase";

export type KnowledgeOrganiserProgress = {
  taughtSectionIds: string[];
  bestScore: number;
  bestMaxScore: number;
};

const emptyProgress: KnowledgeOrganiserProgress = {
  taughtSectionIds: [],
  bestScore: 0,
  bestMaxScore: 0,
};

function storageKey(student: string, chapterId: string) {
  return `knowledgeOrganiserProgress:${student}:${chapterId}`;
}

export function getLocalKnowledgeOrganiserProgress(
  student: string,
  chapterId: string
): KnowledgeOrganiserProgress {
  if (typeof window === "undefined") return emptyProgress;
  try {
    const saved = window.localStorage.getItem(storageKey(student, chapterId));
    return saved ? { ...emptyProgress, ...JSON.parse(saved) } : emptyProgress;
  } catch {
    return emptyProgress;
  }
}

function saveLocalProgress(student: string, chapterId: string, progress: KnowledgeOrganiserProgress) {
  window.localStorage.setItem(storageKey(student, chapterId), JSON.stringify(progress));
}

export async function loadKnowledgeOrganiserProgress(
  student: string,
  chapterId: string
): Promise<KnowledgeOrganiserProgress> {
  const local = getLocalKnowledgeOrganiserProgress(student, chapterId);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return local;

  const { data, error } = await supabase
    .from("knowledge_organiser_progress")
    .select("taught_section_ids,best_score,best_max_score")
    .eq("user_id", user.id)
    .eq("student", student)
    .eq("chapter_id", chapterId)
    .maybeSingle();

  if (error || !data) return local;
  const remote = {
    taughtSectionIds: data.taught_section_ids ?? [],
    bestScore: data.best_score ?? 0,
    bestMaxScore: data.best_max_score ?? 0,
  };
  saveLocalProgress(student, chapterId, remote);
  return remote;
}

export async function saveTaughtSections(
  student: string,
  chapterId: string,
  taughtSectionIds: string[]
): Promise<boolean> {
  const previous = getLocalKnowledgeOrganiserProgress(student, chapterId);
  saveLocalProgress(student, chapterId, { ...previous, taughtSectionIds });

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  const { error } = await supabase.from("knowledge_organiser_progress").upsert({
    user_id: user.id,
    student,
    chapter_id: chapterId,
    taught_section_ids: taughtSectionIds,
    best_score: previous.bestScore,
    best_max_score: previous.bestMaxScore,
    updated_at: new Date().toISOString(),
  }, { onConflict: "user_id,student,chapter_id" });
  return !error;
}

export async function saveKnowledgeQuizBest(
  student: string,
  chapterId: string,
  score: number,
  maxScore: number
): Promise<void> {
  const previous = getLocalKnowledgeOrganiserProgress(student, chapterId);
  const previousRate = previous.bestMaxScore ? previous.bestScore / previous.bestMaxScore : 0;
  const nextRate = maxScore ? score / maxScore : 0;
  const best = nextRate >= previousRate ? { bestScore: score, bestMaxScore: maxScore } : previous;
  const next = { ...previous, ...best };
  saveLocalProgress(student, chapterId, next);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  await supabase.from("knowledge_organiser_progress").upsert({
    user_id: user.id,
    student,
    chapter_id: chapterId,
    taught_section_ids: next.taughtSectionIds,
    best_score: next.bestScore,
    best_max_score: next.bestMaxScore,
    updated_at: new Date().toISOString(),
  }, { onConflict: "user_id,student,chapter_id" });
}
