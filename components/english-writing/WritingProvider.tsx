"use client";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { loadWritingOverview } from "@/lib/englishWriting/client";
import type { WritingOverview } from "@/lib/englishWriting/types";

type Context = { data: WritingOverview | null; loading: boolean; error: string; refresh: () => Promise<void> };
const WritingContext = createContext<Context | null>(null);
export function useWriting() {
  const context = useContext(WritingContext);
  if (!context) throw new Error("Writing provider missing");
  return context;
}
export default function WritingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WritingOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const refresh = useCallback(async () => {
    try { setData(await loadWritingOverview()); setError(""); }
    catch (error) { setError(error instanceof Error ? error.message : "Could not load writing."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => {
    let active = true;
    loadWritingOverview().then(result => { if (active) setData(result); })
      .catch(error => { if (active) setError(error instanceof Error ? error.message : "Could not load writing."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setData(null);
        window.location.replace("/login");
      } else if (data && session && session.user.id !== data.userId) {
        setData(null);
        window.location.replace("/english-writing");
      }
    });
    return () => listener.subscription.unsubscribe();
  }, [data]);
  return <WritingContext.Provider value={{ data, loading, error, refresh }}>
    <div className="ew-shell">
      <header className="ew-header">
        <Link href="/subjects" className="ew-back">← Subjects</Link>
        <Link href="/english-writing" className="ew-brand">English Writing <span>Year 8</span></Link>
        <nav aria-label="English writing"><Link href="/english-writing">Course</Link><Link href="/english-writing/progress">Progress</Link><Link href="/english-writing/guide">Parent guide</Link></nav>
      </header>
      {error && <div className="ew-notice ew-error" role="alert">{error} <button onClick={() => void refresh()}>Try again</button></div>}
      {loading ? <div className="ew-card" role="status">Loading your writing space…</div> : children}
    </div>
  </WritingContext.Provider>;
}
