"use client";

import KnowledgeOrganiserChapter from "@/components/knowledge-organisers/KnowledgeOrganiserChapter";
import { year8HistoryEnslavement } from "@/data/knowledgeOrganisers/year8HistoryEnslavement";

export default function EnslavementPage() {
  return <KnowledgeOrganiserChapter organiser={year8HistoryEnslavement} />;
}
