import { getWritingTask, lessons } from "@/data/englishWriting/course";
import { SKILLS, type SkillId, type Submission } from "./types";

export function independentSkills(submissions: Submission[]) {
  const independent = submissions.filter(s => s.status === "complete" && s.parent_id === null && s.feedback)
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
  return (Object.keys(SKILLS) as SkillId[]).map(id => {
    const evidence = independent.flatMap(s => {
      const skill = s.feedback?.skills.find(skill => skill.id === id && skill.status !== "not-observed");
      return skill ? [{ taskId: s.task_id, status: skill.status, date: s.created_at }] : [];
    }).filter((item, index, all) => all.findIndex(other => other.taskId === item.taskId) === index).slice(0, 3);
    const secure = evidence.length >= 2 && evidence.slice(0, 2).every(item => item.status === "secure");
    return { id, name: SKILLS[id], evidence, status: secure ? "secure" : evidence.length ? evidence[0].status === "secure" ? "practising" : evidence[0].status : "not-observed" };
  });
}
export function recommendation(submissions: Submission[], completedLessons: number[]) {
  const done = submissions.filter(s => s.status === "complete");
  const missingBaseline = ["baseline-creative", "baseline-viewpoint"].find(id => !done.some(s => s.task_id === id));
  if (missingBaseline) return { href: `/english-writing/task/${missingBaseline}`, title: "Find your starting point", text: "Complete the two independent starting tasks before choosing your main targets." };
  const skills = independentSkills(done);
  const weak = skills.filter(s => s.evidence.length >= 2 && s.evidence.slice(0, 2).every(e => e.status === "developing"));
  const support = lessons.find(lesson => !completedLessons.includes(lesson.week) && lesson.skills.some(id => weak.some(skill => skill.id === id)));
  if (support) return { href: `/english-writing/lesson/${support.week}`, title: `Practise ${SKILLS[weak.find(s => support.skills.includes(s.id))!.id].toLowerCase()}`, text: `Week ${support.week} targets a skill that needs support in more than one independent piece.` };
  const nextLesson = lessons.find(lesson => !completedLessons.includes(lesson.week));
  const unfinished = lessons.find(lesson => !done.some(s => s.task_id === lesson.mainTaskId));
  if (unfinished && completedLessons.includes(unfinished.week)) return { href: `/english-writing/task/${unfinished.mainTaskId}`, title: "Put your lesson into practice", text: getWritingTask(unfinished.mainTaskId)!.title };
  if (nextLesson) return { href: `/english-writing/lesson/${nextLesson.week}`, title: `Continue with Week ${nextLesson.week}`, text: nextLesson.title };
  const transfer = lessons.find(lesson => !done.some(s => s.task_id === lesson.transferTaskId));
  if (transfer) return { href: `/english-writing/task/${transfer.transferTaskId}`, title: "Use the skill in a new setting", text: "Try the fresh prompt independently, ideally a few days after your main practice." };
  return { href: "/english-writing/task/aqa-creative", title: "Try a sustained AQA-style response", text: "You have completed the first four weeks. Keep checking whether skills transfer to new tasks." };
}
