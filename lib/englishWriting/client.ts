"use client";
import { supabase } from "@/lib/supabase";
import type { WritingOverview } from "./types";

export class WritingClientError extends Error {
  constructor(message: string, public status: number) { super(message); }
}
export async function writingRequest<T>(path: string, body?: unknown): Promise<T> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new WritingClientError("Please sign in again.", 401);
  const response = await fetch(`/api/english-writing/${path}`, {
    method: body === undefined ? "GET" : "POST", cache: "no-store",
    headers: { Authorization: `Bearer ${session.access_token}`, ...(body === undefined ? {} : { "Content-Type": "application/json" }) },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
  const result = await response.json().catch(() => ({ error: "Writing is unavailable just now. Please try again." }));
  if (!response.ok || !result.ok) throw new WritingClientError(result.error || "Please try again.", response.status);
  return result as T;
}
export function loadWritingOverview() { return writingRequest<WritingOverview>("progress"); }
