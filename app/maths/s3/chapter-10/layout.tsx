"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import "./chapter.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  if (segment === null) return <>{children}</>;
  return <main className="mensuration">{children}</main>;
}
