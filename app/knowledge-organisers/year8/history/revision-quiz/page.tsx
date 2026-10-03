import KnowledgeOrganiserRevisionQuiz from "@/components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz";
import { getKnowledgeOrganisers } from "@/data/knowledgeOrganisers/registry";

export default function YearEightHistoryRevisionQuizPage() {
  const organisers = getKnowledgeOrganisers(8, "History");

  return <KnowledgeOrganiserRevisionQuiz organisers={organisers} />;
}
