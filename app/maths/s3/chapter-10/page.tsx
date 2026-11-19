import Link from "next/link";
import { Header,root } from "./lesson";
const sections = [
  ["10.1","Heights of Solids","Locate the perpendicular from a point to a plane and pair a face with its height.","heights"],
  ["10.2","Pyramids","Use the base and perpendicular height for volume. Unfold the faces to find surface area.","pyramids"],
  ["10.3","Circular Cones","Measure solids with a circular base and an apex.",""]
];
export default function ChapterTen(){
  return <><Link href="/maths/s3">← Back to S3 Mathematics</Link><Header tag="S3 MATHEMATICS" title="Chapter 10 · Mensuration (III)">Choose a base, identify its corresponding height, then decide whether you are measuring space or covering faces.</Header>
  <div className="tiles">{sections.map(([n,title,description,slug])=><article key={n}><small>{n} · {slug?"Available":"Coming soon"}</small><h2>{title}</h2><p>{description}</p>{slug && <Link className="start" href={root+"/"+slug}>Start →</Link>}</article>)}</div>
  <aside style={{background:"#eef2ff"}}><h2>Chapter 10 Flashcards</h2>Coming soon · 0 cards available</aside><aside style={{background:"#fffbeb"}}><h2>Checkpoint Activity</h2>Coming soon · Study the chapter lessons first.</aside></>;
}
