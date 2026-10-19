import type { ReactNode } from "react";
import AuthGuard from "@/components/AuthGuard";
import WritingProvider from "@/components/english-writing/WritingProvider";
import "./writing.css";
export default function WritingLayout({ children }: { children: ReactNode }) {
  return <AuthGuard><WritingProvider>{children}</WritingProvider></AuthGuard>;
}
