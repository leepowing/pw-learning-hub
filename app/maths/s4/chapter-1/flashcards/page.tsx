import Link from "next/link";

export default function S4Chapter1FlashcardsPendingPage() {
  return (
    <main style={{ maxWidth: 900, width: "calc(100% - 40px)", margin: "42px auto 70px" }}>
      <Link href="/maths/s4/chapter-1" style={{ color: "#047857", fontWeight: 800, textDecoration: "none" }}>
        ← Back to Chapter 1
      </Link>
      <p style={{ color: "#4f46e5", fontWeight: 900, marginTop: 35 }}>S4 · CHAPTER 1 · FORMULA PRACTICE</p>
      <h1 style={{ fontSize: "clamp(30px, 5vw, 44px)", lineHeight: 1.2 }}>Formula Flashcards</h1>
      <section style={{ background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: 22, padding: 28 }}>
        <h2 style={{ marginTop: 0 }}>Coming soon</h2>
        <p style={{ lineHeight: 1.7 }}>S4 Formula Flashcards will be available after their content has been reviewed and approved.</p>
      </section>
    </main>
  );
}
