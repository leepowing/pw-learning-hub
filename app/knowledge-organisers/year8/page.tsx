"use client";

import { useRouter } from "next/navigation";

const subjects = [
  { name: "History", icon: "🏛️", description: "Migration and Britain · The Industrial Revolution", route: "/knowledge-organisers/year8/history", available: true },
  { name: "Science", icon: "🔬", description: "Ecosystem Processes · interactive revision", route: "/knowledge-organisers/year8/science", available: true },
  { name: "English", icon: "📖", description: "Crime · genre, methods and big ideas", route: "/knowledge-organisers/year8/english", available: true },
  { name: "Geography", icon: "🌍", description: "Coming soon", route: "", available: false },
  { name: "Other subjects", icon: "📘", description: "Added when organisers arrive", route: "", available: false },
];

export default function YearEightKnowledgeOrganisersPage() {
  const router = useRouter();
  return <main className="page">
    <button className="back" onClick={() => router.push("/knowledge-organisers")}>← Back to Knowledge Organisers</button>
    <p className="eyebrow">YEAR 8</p><h1>Choose a subject</h1><p className="subtitle">Each subject is organised by term and chapter.</p>
    <div className="grid">{subjects.map(subject => <button key={subject.name} disabled={!subject.available} className={subject.available ? "card available" : "card"} onClick={() => subject.available && router.push(subject.route)}>
      <span className="icon">{subject.icon}</span><strong>{subject.name}</strong><small>{subject.description}</small><b>{subject.available ? "Open subject →" : "Coming soon"}</b>
    </button>)}</div>
    <style jsx>{`
      .page{max-width:1050px;width:calc(100% - 40px);margin:48px auto 80px;color:#253047;font-family:Arial,sans-serif}.back{border:0;background:transparent;color:#c2410c;font-size:17px;font-weight:800;padding:0;cursor:pointer}.eyebrow{margin:32px 0 8px;color:#c2410c;font-size:13px;font-weight:900;letter-spacing:.14em}h1{font-size:clamp(36px,5vw,50px);margin:0}.subtitle{font-size:19px;color:#667085}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:28px}.card{padding:26px;border:1px solid #e5e7eb;border-radius:22px;background:#f8fafc;text-align:left;color:#94a3b8}.available{background:white;color:#253047;border-color:#fed7aa;cursor:pointer;box-shadow:0 8px 24px rgba(15,23,42,.05)}.icon{font-size:38px}.card strong,.card small,.card b{display:block}.card strong{font-size:25px;margin:14px 0 5px}.card small{font-size:16px;min-height:38px}.card b{margin-top:18px;color:inherit}.available b{color:#c2410c}@media(max-width:650px){.grid{grid-template-columns:1fr}}
    `}</style>
  </main>;
}
