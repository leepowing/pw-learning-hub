import { notFound } from "next/navigation";
import { getWritingTask } from "@/data/englishWriting/course";
import WritingEditor from "@/components/english-writing/WritingEditor";
export default async function TaskPage({ params }: { params: Promise<{ taskId: string }> }) {
  const { taskId } = await params;
  const task = getWritingTask(taskId);
  if (!task) notFound();
  return <WritingEditor key={task.id} task={task} />;
}
