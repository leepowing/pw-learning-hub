"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function FamilyQuizHomePage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [joining, setJoining] = useState(false);

  useEffect(() => {
    void (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return router.replace("/login");
      setUserId(user.id);
      const { data } = await supabase.from("profiles").select("student").eq("id", user.id).maybeSingle();
      setDisplayName(String(data?.student || user.email?.split("@")[0] || "Player"));
    })();
  }, [router]);

  async function joinQuiz() {
    setError(""); setJoining(true);
    const cleanCode = code.replace(/\D/g, "").slice(0, 6);
    if (cleanCode.length !== 6) { setError("Enter the six-digit room code."); setJoining(false); return; }
    const { data: session, error: sessionError } = await supabase.from("family_quiz_sessions").select("id,status").eq("code", cleanCode).maybeSingle();
    if (sessionError || !session || session.status === "finished") { setError("This room was not found or has already finished."); setJoining(false); return; }
    const { error: joinError } = await supabase.from("family_quiz_participants").insert({ session_id: session.id, user_id: userId, display_name: displayName.slice(0, 40) });
    if (joinError && joinError.code !== "23505") { setError(joinError.message); setJoining(false); return; }
    router.push(`/family-quiz/play/${session.id}`);
  }

  return <main className="page">
    <button className="back" onClick={() => router.push("/subjects")}>← Back to subjects</button>
    <p className="eyebrow">PW LEARNING HUB · LIVE</p>
    <h1>Live Family Quiz</h1>
    <p className="lead">One question on every device. Children answer on their iPads; the host controls when answers are revealed and when the next question begins.</p>
    <div className="choices">
      <section className="host"><span>FOR THE HOST</span><h2>Create a quiz room</h2><p>Select existing Knowledge Organiser questions or generate a new set with AI.</p><button onClick={() => router.push("/family-quiz/host")}>Create room →</button></section>
      <section><span>FOR PLAYERS</span><h2>Join with a code</h2><label>Room code<input inputMode="numeric" value={code} maxLength={6} onChange={event => setCode(event.target.value.replace(/\D/g, ""))} placeholder="000000" /></label><button onClick={() => void joinQuiz()} disabled={joining || !userId}>{joining ? "Joining…" : "Join quiz →"}</button>{error && <p className="error">{error}</p>}</section>
    </div>
    <style jsx>{`
      .page{max-width:1050px;width:calc(100% - 36px);margin:42px auto 80px;color:#172033;font-family:Arial,sans-serif}.back{border:0;background:transparent;color:#7c3aed;font-weight:800;font-size:16px;cursor:pointer}.eyebrow{margin:34px 0 8px;color:#7c3aed;font-size:13px;font-weight:900;letter-spacing:.14em}h1{margin:0;font-size:clamp(42px,7vw,68px);line-height:1}.lead{max-width:820px;color:#5f687a;font-size:20px;line-height:1.6}.choices{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:32px}section{padding:30px;border:1px solid #ddd6fe;border-radius:25px;background:#fff;box-shadow:0 14px 35px rgba(76,29,149,.08)}section.host{background:linear-gradient(145deg,#4c1d95,#7c3aed);color:white}section>span{font-size:12px;font-weight:900;letter-spacing:.13em;color:#7c3aed}.host>span,.host p{color:#ede9fe}h2{font-size:30px;margin:10px 0}section p{line-height:1.55;color:#667085}label{display:block;margin-top:20px;font-weight:800}input{display:block;width:100%;box-sizing:border-box;margin:8px 0 16px;padding:15px;border:1px solid #cbd5e1;border-radius:12px;font:inherit;font-size:26px;letter-spacing:.22em}section button{padding:13px 18px;border:0;border-radius:12px;background:#7c3aed;color:white;font:inherit;font-weight:900;cursor:pointer}.host button{background:white;color:#4c1d95}button:disabled{opacity:.5}.error{padding:10px;border-radius:10px;background:#fff1f2;color:#9f1239}@media(max-width:720px){.choices{grid-template-columns:1fr}}
    `}</style>
  </main>;
}
