import KnowledgeOrganiserChapter from "@/components/knowledge-organisers/KnowledgeOrganiserChapter";
import { year8HistoryMigration } from "@/data/knowledgeOrganisers/year8HistoryMigration";

export default function MigrationAndBritainPage() {
  return <KnowledgeOrganiserChapter organiser={year8HistoryMigration} />;
}
