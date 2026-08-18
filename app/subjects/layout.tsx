import type { ReactNode } from "react";
import AuthGuard from "@/components/AuthGuard";

type SubjectsLayoutProps = {
  children: ReactNode;
};

export default function SubjectsLayout({
  children,
}: SubjectsLayoutProps) {
  return <AuthGuard>{children}</AuthGuard>;
}