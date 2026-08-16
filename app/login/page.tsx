"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

async function handleLogin(event: FormEvent) {
  event.preventDefault();

  setLoading(true);
  setErrorMessage("");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    setErrorMessage("Email or password is incorrect.");
    setLoading(false);
    return;
  }

  const user = data.user;

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("student")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    setErrorMessage("Could not load student profile.");
    setLoading(false);
    return;
  }

  localStorage.setItem("currentStudent", profile.student);

  setLoading(false);

  router.replace("/subjects");
}


  return (
<main
  style={{
    maxWidth: "520px",
    margin: "12px auto",
    padding: "12px 20px",
  }}
>
    <div style={{ marginBottom: "28px" }}>
  <div
    style={{
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "2px",
      color: "#4f46e5",
      marginBottom: "10px",
    }}
  >
    LEARN • PRACTISE • PROGRESS
  </div>

<h1
  style={{
    fontSize: "46px",
    margin: "2px 0 12px",
  }}
>
  PW Learning Hub
</h1>

<div
  style={{
    background: "linear-gradient(135deg, #3531c9, #5b3df5)",
    color: "white",
    borderRadius: "28px",
    padding: "20px 28px",
    marginBottom: "14px",
  }}
>
    <div
      style={{
        display: "inline-block",
        padding: "7px 12px",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.15)",
        fontSize: "14px",
        marginBottom: "18px",
      }}
    >
      👋 Welcome back
    </div>

<h2
  style={{
    fontSize: "34px",
    lineHeight: "0.95",
    margin: "12px 0 8px",
  }}
>
  Small steps.
  <br />
  Big progress.
</h2>

    <p
      style={{
        margin: 0,
        color: "rgba(255,255,255,0.82)",
      }}
    >
      A learning space for Greta and Mathis.
    </p>
  </div>
</div>

<h2
  style={{
    fontSize: "28px",
    margin: "12px 0 8px",
  }}
>
  Sign in
</h2>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "8px" }}>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              marginTop: "6px",
            }}
          />
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </div>

        {errorMessage && (
          <p style={{ color: "red" }}>{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}