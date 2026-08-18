import type { ReactNode } from "react";
import AuthGuard from "@/components/AuthGuard";

type SpellingLayoutProps = {
  children: ReactNode;
};

export default function SpellingLayout({
  children,
}: SpellingLayoutProps) {
  return <AuthGuard>{children}</AuthGuard>;
}