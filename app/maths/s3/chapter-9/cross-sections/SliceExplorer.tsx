"use client";
import { useState } from "react";

export default function SliceExplorer() {
  const [solid, setSolid] = useState("Cylinder");
  const [height, setHeight] = useState(50);
  const fraction = height / 100;
  const y = 143 - 110 * fraction;
  const sphere = solid === "Sphere";
  const radius = sphere ? Math.sqrt(55 ** 2 - (y - 88) ** 2) : solid === "Cone" ? 50 * (1 - fraction) : 50;
  const caption = sphere ? (height === 50 ? "The plane passes through the centre. This is the greatest circle." : "The plane misses the centre. The circle is smaller than the greatest circle.") : solid === "Cone" ? "Moving towards the apex makes the circle smaller." : "Each parallel slice matches the circular base.";
  return <div>
    <label>Solid <select value={solid} onChange={event => setSolid(event.target.value)}>{["Cylinder","Cone","Sphere"].map(item => <option key={item}>{item}</option>)}</select></label>
    <svg role="img" aria-label={solid + " with a highlighted circular section and its face-on view"} viewBox="0 0 330 178">
      <g fill="#e0f2fe" stroke="#31536a" strokeWidth="2">
        {sphere ? <circle cx="73" cy="88" r="55"/> : <>
          {solid === "Cone" ? <path d="M23 143 L73 33 L123 143"/> : <><path d="M23 143 V33 H123 V143"/><ellipse cx="73" cy="33" rx="50" ry="9"/></>}
          <ellipse cx="73" cy="143" rx="50" ry="9"/>
        </>}
      </g>
      <g fill="#99f6e4" stroke="#047857" strokeWidth="2"><ellipse cx="73" cy={y} rx={radius} ry={radius * .16}/><circle cx="243" cy="88" r={radius}/></g>
      <g fill="#26384b" textAnchor="middle" fontSize="15"><text x="73" y="173">Inside the solid</text><text x="243" y="173">Face-on view</text></g>
    </svg>
    <label>Cut height · {height}% <input type="range" min="10" max="90" step="5" value={height} onChange={event => setHeight(Number(event.target.value))}/></label><p aria-live="polite">{caption}</p>
  </div>;
}
