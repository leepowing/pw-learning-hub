import type { ReactNode } from "react";

import type {
  CrossSectionDiagramVariant,
  GeometryDiagram,
  PolygonDiagramVariant,
  SolidDiagramVariant,
  TriangleDiagramVariant,
} from "@/data/maths/flashcards";

type GeometryDiagramProps = {
  diagram: GeometryDiagram;
};

function DiagramFrame({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "4px auto 18px",
        padding: "12px",
        borderRadius: "18px",
        background: "#f8fafc",
        border: "1px solid #cbd5e1",
      }}
    >
      <svg
        viewBox="0 0 420 230"
        role="img"
        aria-label={label}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      >
        {children}
      </svg>
    </div>
  );
}

function PolygonDiagram({
  variant,
}: {
  variant: PolygonDiagramVariant;
}) {
  if (variant === "parts") {
    return (
      <DiagramFrame label="Parts of a polygon">
        <polygon
          points="90,175 70,65 220,35 330,105 275,185"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <line
          x1="70"
          y1="65"
          x2="275"
          y2="185"
          stroke="#f97316"
          strokeWidth="4"
          strokeDasharray="10 8"
        />

        <circle cx="90" cy="175" r="7" fill="#dc2626" />

        <text
          x="20"
          y="205"
          fill="#991b1b"
          fontSize="18"
          fontWeight="700"
        >
          vertex
        </text>

        <line
          x1="76"
          y1="180"
          x2="48"
          y2="194"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <text
          x="260"
          y="70"
          fill="#1d4ed8"
          fontSize="18"
          fontWeight="700"
        >
          side
        </text>

        <text
          x="145"
          y="145"
          fill="#c2410c"
          fontSize="18"
          fontWeight="700"
        >
          diagonal
        </text>
      </DiagramFrame>
    );
  }

  if (variant === "equilateral") {
    return (
      <DiagramFrame label="Equilateral polygon">
        <polygon
          points="210,35 330,185 90,185"
          fill="#dcfce7"
          stroke="#15803d"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <line
          x1="144"
          y1="112"
          x2="158"
          y2="102"
          stroke="#166534"
          strokeWidth="4"
        />
        <line
          x1="262"
          y1="102"
          x2="276"
          y2="112"
          stroke="#166534"
          strokeWidth="4"
        />
        <line
          x1="210"
          y1="176"
          x2="210"
          y2="194"
          stroke="#166534"
          strokeWidth="4"
        />

        <text
          x="145"
          y="220"
          fill="#166534"
          fontSize="18"
          fontWeight="700"
        >
          All sides are equal
        </text>
      </DiagramFrame>
    );
  }

  if (variant === "equiangular") {
    return (
      <DiagramFrame label="Equiangular polygon">
        <rect
          x="75"
          y="45"
          width="270"
          height="140"
          rx="2"
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth="5"
        />

        {[
          "M75 70 H100 V45",
          "M320 45 V70 H345",
          "M75 160 H100 V185",
          "M320 185 V160 H345",
        ].map((path) => (
          <path
            key={path}
            d={path}
            fill="none"
            stroke="#92400e"
            strokeWidth="3"
          />
        ))}

        <text
          x="117"
          y="220"
          fill="#92400e"
          fontSize="18"
          fontWeight="700"
        >
          All angles are equal
        </text>
      </DiagramFrame>
    );
  }

  if (variant === "regular") {
    return (
      <DiagramFrame label="Regular polygon">
        <polygon
          points="130,45 290,45 355,115 290,185 130,185 65,115"
          fill="#ede9fe"
          stroke="#7c3aed"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {[130, 210, 290].map((x) => (
          <circle
            key={x}
            cx={x}
            cy="45"
            r="5"
            fill="#5b21b6"
          />
        ))}

        <text
          x="82"
          y="220"
          fill="#5b21b6"
          fontSize="18"
          fontWeight="700"
        >
          Equal sides and equal angles
        </text>
      </DiagramFrame>
    );
  }

  if (variant === "convex") {
    return (
      <DiagramFrame label="Convex polygon">
        <polygon
          points="95,160 85,70 205,35 335,90 285,185"
          fill="#ccfbf1"
          stroke="#0f766e"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <line
          x1="85"
          y1="70"
          x2="285"
          y2="185"
          stroke="#0f766e"
          strokeWidth="3"
          strokeDasharray="9 7"
        />

        <text
          x="105"
          y="220"
          fill="#115e59"
          fontSize="18"
          fontWeight="700"
        >
          Every diagonal stays inside
        </text>
      </DiagramFrame>
    );
  }

  if (variant === "concave") {
    return (
      <DiagramFrame label="Concave polygon">
        <polygon
          points="75,55 335,55 225,115 335,185 75,185"
          fill="#fee2e2"
          stroke="#dc2626"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <path
          d="M225 115 A35 35 0 0 0 258 93"
          fill="none"
          stroke="#991b1b"
          strokeWidth="4"
        />

        <text
          x="235"
          y="128"
          fill="#991b1b"
          fontSize="17"
          fontWeight="700"
        >
          &gt;180°
        </text>

        <text
          x="108"
          y="220"
          fill="#991b1b"
          fontSize="18"
          fontWeight="700"
        >
          Has an inward-pointing part
        </text>
      </DiagramFrame>
    );
  }

  return (
    <DiagramFrame label="Polygon classification">
      <polygon
        points="35,170 45,70 165,45 190,170"
        fill="#ccfbf1"
        stroke="#0f766e"
        strokeWidth="4"
      />

      <polygon
        points="230,55 385,55 315,115 385,180 230,180"
        fill="#fee2e2"
        stroke="#dc2626"
        strokeWidth="4"
      />

      <text x="75" y="210" fontSize="17" fill="#115e59">
        Convex
      </text>
      <text x="285" y="210" fontSize="17" fill="#991b1b">
        Concave
      </text>
    </DiagramFrame>
  );
}

function TriangleDiagram({
  variant,
}: {
  variant: TriangleDiagramVariant;
}) {
  if (variant === "right") {
    return (
      <DiagramFrame label="Right-angled triangle">
        <polygon
          points="95,185 95,40 335,185"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <path
          d="M95 160 H120 V185"
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="4"
        />

        <text
          x="125"
          y="175"
          fill="#1e3a8a"
          fontSize="19"
          fontWeight="700"
        >
          90°
        </text>
      </DiagramFrame>
    );
  }

if (variant === "obtuse") {
  return (
    <DiagramFrame label="Obtuse-angled triangle">
      <polygon
        points="46,180 210,65 374,180"
        fill="#fee2e2"
        stroke="#dc2626"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      <path
        d="M185 83 Q210 110 235 83"
        fill="none"
        stroke="#991b1b"
        strokeWidth="4"
      />

      <text
        x="188"
        y="126"
        fill="#991b1b"
        fontSize="20"
        fontWeight="700"
      >
        110°
      </text>
    </DiagramFrame>
  );
}

  if (variant === "acute") {
    return (
      <DiagramFrame label="Acute-angled triangle">
        <polygon
          points="70,185 210,35 350,185"
          fill="#dcfce7"
          stroke="#16a34a"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <text x="92" y="175" fill="#166534" fontSize="18">
          50°
        </text>
        <text x="190" y="75" fill="#166534" fontSize="18">
          80°
        </text>
        <text x="300" y="175" fill="#166534" fontSize="18">
          50°
        </text>
      </DiagramFrame>
    );
  }

  return (
    <DiagramFrame label="Triangles classified by angles">
      <polygon
        points="20,170 80,80 140,170"
        fill="#dcfce7"
        stroke="#16a34a"
        strokeWidth="4"
      />

      <polygon
        points="165,170 165,75 245,170"
        fill="#dbeafe"
        stroke="#2563eb"
        strokeWidth="4"
      />

      <path
        d="M165 150 H185 V170"
        fill="none"
        stroke="#1e3a8a"
        strokeWidth="3"
      />

      <polygon
        points="270,170 335,124 400,170"
        fill="#fee2e2"
        stroke="#dc2626"
        strokeWidth="4"
      />

      <text x="38" y="210" fontSize="16" fill="#166534">
        Acute
      </text>
      <text x="174" y="210" fontSize="16" fill="#1e3a8a">
        Right
      </text>
      <text x="314" y="210" fontSize="16" fill="#991b1b">
        Obtuse
      </text>
    </DiagramFrame>
  );
}

function SolidDiagram({
  variant,
}: {
  variant: SolidDiagramVariant;
}) {
  if (variant === "polyhedron") {
    return (
      <DiagramFrame label="A polyhedron">
        <polygon
          points="210,25 85,165 210,205"
          fill="#fde68a"
          stroke="#a16207"
          strokeWidth="4"
        />
        <polygon
          points="210,25 210,205 340,155"
          fill="#fcd34d"
          stroke="#a16207"
          strokeWidth="4"
        />
        <polygon
          points="85,165 210,205 340,155 215,125"
          fill="#fef3c7"
          stroke="#a16207"
          strokeWidth="4"
        />

        <line
          x1="210"
          y1="25"
          x2="215"
          y2="125"
          stroke="#a16207"
          strokeWidth="4"
          strokeDasharray="9 7"
        />

        <text
          x="142"
          y="225"
          fill="#92400e"
          fontSize="18"
          fontWeight="700"
        >
          Flat polygonal faces
        </text>
      </DiagramFrame>
    );
  }

  if (variant === "face-edge-vertex") {
    return (
      <DiagramFrame label="Face, edge and vertex of a solid">
        <polygon
          points="85,75 280,75 280,185 85,185"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="4"
        />
        <polygon
          points="85,75 145,35 340,35 280,75"
          fill="#fef3c7"
          stroke="#2563eb"
          strokeWidth="4"
        />
        <polygon
          points="280,75 340,35 340,145 280,185"
          fill="#bfdbfe"
          stroke="#2563eb"
          strokeWidth="4"
        />

        <line
          x1="280"
          y1="75"
          x2="280"
          y2="185"
          stroke="#dc2626"
          strokeWidth="8"
        />

        <circle
          cx="280"
          cy="75"
          r="9"
          fill="#7c3aed"
        />

        <text x="155" y="62" fill="#92400e" fontSize="17">
          face
        </text>
        <text
          x="290"
          y="135"
          fill="#b91c1c"
          fontSize="17"
        >
          edge
        </text>
        <text
          x="292"
          y="70"
          fill="#6d28d9"
          fontSize="17"
        >
          vertex
        </text>
      </DiagramFrame>
    );
  }

if (variant === "triangular-prism") {
  return (
    <DiagramFrame label="A triangular prism">
      {/* Rear triangular end */}
      <polygon
        points="220,145 285,30 350,145"
        fill="#86efac"
        fillOpacity="0.7"
        stroke="#15803d"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Lines joining matching vertices */}
      <line
        x1="120"
        y1="65"
        x2="285"
        y2="30"
        stroke="#15803d"
        strokeWidth="4"
      />
      <line
        x1="185"
        y1="180"
        x2="350"
        y2="145"
        stroke="#15803d"
        strokeWidth="4"
      />
      <line
        x1="55"
        y1="180"
        x2="220"
        y2="145"
        stroke="#15803d"
        strokeWidth="4"
        strokeDasharray="9 7"
      />

      {/* Front triangular end */}
      <polygon
        points="55,180 120,65 185,180"
        fill="#dcfce7"
        stroke="#15803d"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <text
        x="116"
        y="220"
        fill="#166534"
        fontSize="18"
        fontWeight="700"
      >
        Identical triangular ends
      </text>
    </DiagramFrame>
  );
}

  if (
    variant === "cylinder" ||
    variant === "cylinder-wireframe"
  ) {
    const wireframe =
      variant === "cylinder-wireframe";

    return (
      <DiagramFrame
        label={
          wireframe
            ? "2-D representation of a cylinder"
            : "A cylinder"
        }
      >
        {!wireframe && (
          <rect
            x="105"
            y="55"
            width="210"
            height="120"
            fill="#fecdd3"
          />
        )}

        <ellipse
          cx="210"
          cy="55"
          rx="105"
          ry="28"
          fill={wireframe ? "white" : "#fda4af"}
          stroke="#e11d48"
          strokeWidth="4"
        />

        <line
          x1="105"
          y1="55"
          x2="105"
          y2="175"
          stroke="#e11d48"
          strokeWidth="4"
        />
        <line
          x1="315"
          y1="55"
          x2="315"
          y2="175"
          stroke="#e11d48"
          strokeWidth="4"
        />

        {wireframe ? (
          <>
            <path
              d="M105 175 A105 28 0 0 0 315 175"
              fill="none"
              stroke="#e11d48"
              strokeWidth="4"
            />
            <path
              d="M105 175 A105 28 0 0 1 315 175"
              fill="none"
              stroke="#e11d48"
              strokeWidth="4"
              strokeDasharray="9 7"
            />
          </>
        ) : (
          <ellipse
            cx="210"
            cy="175"
            rx="105"
            ry="28"
            fill="#fb7185"
            stroke="#e11d48"
            strokeWidth="4"
          />
        )}

        <text
          x="145"
          y="220"
          fill="#9f1239"
          fontSize="18"
          fontWeight="700"
        >
          Curved surface
        </text>
      </DiagramFrame>
    );
  }

  const wireframe =
    variant === "prism-wireframe";

  return (
    <DiagramFrame
      label={
        wireframe
          ? "2-D representation of a cuboid"
          : "A cuboid"
      }
    >
      {!wireframe && (
        <>
          <polygon
            points="80,75 140,35 340,35 280,75"
            fill="#ddd6fe"
          />
          <polygon
            points="280,75 340,35 340,145 280,185"
            fill="#c4b5fd"
          />
          <polygon
            points="80,75 280,75 280,185 80,185"
            fill="#ede9fe"
          />
        </>
      )}

      <rect
        x="80"
        y="75"
        width="200"
        height="110"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="4"
      />

      <path
        d="M80 75 L140 35 H340 V145 L280 185"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="4"
      />

      <line
        x1="280"
        y1="75"
        x2="340"
        y2="35"
        stroke="#7c3aed"
        strokeWidth="4"
      />
      <line
        x1="280"
        y1="75"
        x2="280"
        y2="185"
        stroke="#7c3aed"
        strokeWidth="4"
      />
      <line
        x1="280"
        y1="75"
        x2="340"
        y2="35"
        stroke="#7c3aed"
        strokeWidth="4"
      />

      <path
        d="M80 185 L140 145 V35 M140 145 H340"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="4"
        strokeDasharray={wireframe ? "9 7" : undefined}
      />

      <text
        x="135"
        y="220"
        fill="#5b21b6"
        fontSize="18"
        fontWeight="700"
      >
        Rectangular prism
      </text>
    </DiagramFrame>
  );
}

function CrossSectionDiagram({
  variant,
}: {
  variant: CrossSectionDiagramVariant;
}) {
  if (variant === "uniform-prism") {
    return (
      <DiagramFrame label="Uniform cross-sections of a prism">
        <polygon
          points="35,180 90,80 145,180"
          fill="#dcfce7"
          stroke="#15803d"
          strokeWidth="4"
        />

        <line
          x1="35"
          y1="180"
          x2="295"
          y2="145"
          stroke="#15803d"
          strokeWidth="4"
        />
        <line
          x1="90"
          y1="80"
          x2="350"
          y2="45"
          stroke="#15803d"
          strokeWidth="4"
        />
        <line
          x1="145"
          y1="180"
          x2="405"
          y2="145"
          stroke="#15803d"
          strokeWidth="4"
        />

        {[110, 180, 250].map((offset) => (
          <polygon
            key={offset}
            points={`${35 + offset},${180 - offset * 0.135} ${
              90 + offset
            },${80 - offset * 0.135} ${
              145 + offset
            },${180 - offset * 0.135}`}
            fill="#fef08a"
            fillOpacity="0.75"
            stroke="#ca8a04"
            strokeWidth="3"
          />
        ))}

        <text
          x="92"
          y="220"
          fill="#166534"
          fontSize="18"
          fontWeight="700"
        >
          Same shape and same size
        </text>
      </DiagramFrame>
    );
  }

  return (
    <DiagramFrame label="A cross-section of a solid">
      <polygon
        points="55,75 280,75 350,35 125,35"
        fill="#dbeafe"
        stroke="#2563eb"
        strokeWidth="4"
      />
      <polygon
        points="55,75 280,75 280,185 55,185"
        fill="#bfdbfe"
        stroke="#2563eb"
        strokeWidth="4"
      />
      <polygon
        points="280,75 350,35 350,145 280,185"
        fill="#93c5fd"
        stroke="#2563eb"
        strokeWidth="4"
      />

      <polygon
        points="135,63 220,63 290,23 205,23"
        fill="#f9a8d4"
        fillOpacity="0.85"
        stroke="#db2777"
        strokeWidth="4"
      />
      <polygon
        points="135,63 220,63 220,185 135,185"
        fill="#f9a8d4"
        fillOpacity="0.55"
        stroke="#db2777"
        strokeWidth="4"
      />

      <text
        x="145"
        y="215"
        fill="#9d174d"
        fontSize="18"
        fontWeight="700"
      >
        Cutting plane
      </text>
    </DiagramFrame>
  );
}

export default function GeometryDiagram({
  diagram,
}: GeometryDiagramProps) {
  if (diagram.type === "polygon") {
    return (
      <PolygonDiagram variant={diagram.variant} />
    );
  }

  if (diagram.type === "triangle") {
    return (
      <TriangleDiagram variant={diagram.variant} />
    );
  }

  if (diagram.type === "solid") {
    return (
      <SolidDiagram variant={diagram.variant} />
    );
  }

  return (
    <CrossSectionDiagram variant={diagram.variant} />
  );
}
