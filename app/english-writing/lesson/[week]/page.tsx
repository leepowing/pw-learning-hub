import { notFound } from "next/navigation";
import { getWritingLesson } from "@/data/englishWriting/course";
import WritingLesson from "@/components/english-writing/WritingLesson";
export default async function LessonPage({ params }: { params: Promise<{ week: string }> }) {
  const { week } = await params;
  const lesson = getWritingLesson(Number(week));
  if (!lesson) notFound();
  return <WritingLesson key={lesson.week} lesson={lesson} />;
}
