import type { MathsFlashcard } from "./types";

export const s2Chapter13Flashcards: MathsFlashcard[] = [
  {
    "id": "s2-c13-radius-diameter",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "definition",
    "prompt": "How are radius r and diameter d related?",
    "answer": "A diameter passes through the centre; it is twice the radius.",
    "formula": "d=2r"
  },
  {
    "id": "s2-c13-circumference",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "formula",
    "prompt": "State the circumference formula.",
    "answer": "Circumference is the distance around the circle.",
    "formula": "C=2\\pi r=\\pi d"
  },
  {
    "id": "s2-c13-area",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "formula",
    "prompt": "State the area of a circle.",
    "answer": "Use the radius, not the diameter.",
    "formula": "A=\\pi r^2"
  },
  {
    "id": "s2-c13-inverse-c",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "formula",
    "prompt": "How can you find the radius from circumference C?",
    "answer": "Divide the circumference by 2π.",
    "formula": "r=\\frac{C}{2\\pi}"
  },
  {
    "id": "s2-c13-inverse-a",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "formula",
    "prompt": "How can you find the radius from area A?",
    "answer": "Take the positive square root.",
    "formula": "r=\\sqrt{\\frac{A}{\\pi}}"
  },
  {
    "id": "s2-c13-semicircle",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "formula",
    "prompt": "What is the perimeter of a semicircle of radius r?",
    "answer": "Include the curved arc AND the straight diameter.",
    "formula": "P=\\pi r+2r"
  },
  {
    "id": "s2-c13-ring",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "formula",
    "prompt": "Find the area between concentric circles of radii R and r (R > r).",
    "answer": "Subtract the inner circular area from the outer circular area.",
    "formula": "A=\\pi(R^2-r^2)"
  },
  {
    "id": "s2-c13-ring-boundary",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "formula",
    "prompt": "What is the total boundary length of a circular ring?",
    "answer": "Include both the inner and outer circumferences.",
    "formula": "P=2\\pi R+2\\pi r"
  },
  {
    "id": "s2-c13-diameter-example",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "rule",
    "prompt": "A circle has diameter 10 cm. Find its area.",
    "answer": "The radius is 5 cm, so the area is 25π cm²."
  },
  {
    "id": "s2-c13-path",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "rule",
    "prompt": "A circular garden has radius 5 m and an outer path 2 m wide. Find the path area.",
    "answer": "Outer radius = 7 m. Path area = π(7² − 5²) = 24π m²."
  },
  {
    "id": "s2-c13-scaling",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "rule",
    "prompt": "If a circle’s radius doubles, what happens to circumference and area?",
    "answer": "Circumference doubles; area becomes four times as large."
  },
  {
    "id": "s2-c13-precision",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circles",
    "type": "rule",
    "prompt": "When should you round calculations involving π?",
    "answer": "Keep π or full calculator precision during working. Round only the final answer and include the correct units."
  },
  {
    "id": "s2-c13-arc",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "definition",
    "prompt": "What is an arc and its angle at the centre?",
    "answer": "An arc is part of a circumference. Its central angle has its vertex at the centre and its arms through the arc endpoints."
  },
  {
    "id": "s2-c13-major-minor",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "definition",
    "prompt": "How do minor and major arcs differ?",
    "answer": "A minor arc is shorter than a semicircle; a major arc is longer. The corresponding central angles are below and above 180°."
  },
  {
    "id": "s2-c13-sector",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "definition",
    "prompt": "What bounds a sector?",
    "answer": "Two radii and their connecting arc. A region bounded by a chord and an arc is not a sector."
  },
  {
    "id": "s2-c13-arc-length",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "formula",
    "prompt": "Find arc length l for radius r and central angle θ in degrees.",
    "answer": "Use the angle belonging to the required arc.",
    "formula": "l=\\frac{\\theta}{360^{\\circ}}\\times2\\pi r"
  },
  {
    "id": "s2-c13-sector-area",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "formula",
    "prompt": "Find sector area A for radius r and angle θ in degrees.",
    "answer": "The same fraction of a full turn gives the same fraction of circular area.",
    "formula": "A=\\frac{\\theta}{360^{\\circ}}\\times\\pi r^2"
  },
  {
    "id": "s2-c13-perimeter",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "formula",
    "prompt": "Find the perimeter of a sector with arc length l and radius r (0° < θ < 360°).",
    "answer": "Add both straight radii to the arc length.",
    "formula": "P=l+2r"
  },
  {
    "id": "s2-c13-major-angle",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "rule",
    "prompt": "A minor sector has angle 80°. What angle belongs to the major sector?",
    "answer": "360° − 80° = 280°."
  },
  {
    "id": "s2-c13-inverse-angle",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "formula",
    "prompt": "Find the central angle θ in degrees from arc length l and radius r.",
    "answer": "Divide arc length by full circumference, then multiply by 360°.",
    "formula": "\\theta=\\frac{l}{2\\pi r}\\times360^{\\circ}"
  },
  {
    "id": "s2-c13-annular-sector",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "formula",
    "prompt": "Find the area of an annular sector with radii R > r and angle θ in degrees.",
    "answer": "Subtract the inner sector area from the outer sector area.",
    "formula": "A=\\frac{\\theta}{360^{\\circ}}\\pi(R^2-r^2)"
  },
  {
    "id": "s2-c13-arc-example",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "rule",
    "prompt": "A sector has radius 9 cm and angle 80°. Find its arc length.",
    "answer": "(80/360) × 2π × 9 = 4π cm."
  },
  {
    "id": "s2-c13-area-example",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "rule",
    "prompt": "A sector has angle 60° and area 24π cm². Find its radius.",
    "answer": "(60/360)πr² = 24π, so r² = 144 and r = 12 cm."
  },
  {
    "id": "s2-c13-angle-scaling",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Arcs and Sectors",
    "type": "rule",
    "prompt": "For fixed radius, does doubling the angle double sector area and perimeter?",
    "answer": "Area and arc length double. Perimeter does not: the two radii still contribute the same 2r."
  },
  {
    "id": "s2-c13-height",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "definition",
    "prompt": "Which height is used for the volume of an oblique cylinder?",
    "answer": "The perpendicular distance between the parallel bases, not the sloping side length."
  },
  {
    "id": "s2-c13-volume",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "formula",
    "prompt": "State the volume of a circular cylinder.",
    "answer": "Works for both right and oblique cylinders; h is perpendicular height.",
    "formula": "V=\\pi r^2h"
  },
  {
    "id": "s2-c13-curved",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "formula",
    "prompt": "State the curved surface area of a right circular cylinder.",
    "answer": "Unwrapping the curved surface gives a rectangle of width 2πr and height h.",
    "formula": "A_{\\mathrm{curved}}=2\\pi rh"
  },
  {
    "id": "s2-c13-total",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "formula",
    "prompt": "State the total surface area of a closed right circular cylinder.",
    "answer": "Include the curved surface and both circular bases.",
    "formula": "A_{\\mathrm{total}}=2\\pi rh+2\\pi r^2"
  },
  {
    "id": "s2-c13-wet",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "formula",
    "prompt": "Find the wet surface area inside a right cylindrical vessel of radius r and water depth h.",
    "answer": "Count the submerged curved wall and one base. The water’s top surface is not part of the vessel.",
    "formula": "A_{\\mathrm{wet}}=2\\pi rh+\\pi r^2"
  },
  {
    "id": "s2-c13-hollow",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "formula",
    "prompt": "Find the material volume of a cylindrical tube with outer radius R, inner radius r and height h.",
    "answer": "Subtract the cylindrical hole from the full cylinder.",
    "formula": "V=\\pi(R^2-r^2)h"
  },
  {
    "id": "s2-c13-displacement",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "formula",
    "prompt": "How does displaced volume V relate to water-level rise Δh in a right cylinder of radius r?",
    "answer": "Assume full immersion, no overflow and no loss of water.",
    "formula": "V=\\pi r^2\\Delta h"
  },
  {
    "id": "s2-c13-inverse-height",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "formula",
    "prompt": "Find a cylinder’s perpendicular height from volume V and radius r.",
    "answer": "Divide volume by the circular base area.",
    "formula": "h=\\frac{V}{\\pi r^2}"
  },
  {
    "id": "s2-c13-units",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "rule",
    "prompt": "Which units should you use for surface area and volume?",
    "answer": "Surface area uses square units (e.g. cm²); volume uses cubic units (e.g. cm³). Convert all lengths to the same unit first."
  },
  {
    "id": "s2-c13-composite",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "rule",
    "prompt": "How do you find the surface area of two cylinders joined together?",
    "answer": "Count only exposed surfaces. The joined contact faces are internal and must not be included."
  },
  {
    "id": "s2-c13-volume-example",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "rule",
    "prompt": "A cylinder has radius 3 cm and perpendicular height 10 cm. Find its volume.",
    "answer": "π × 3² × 10 = 90π cm³."
  },
  {
    "id": "s2-c13-surface-example",
    "level": "s2",
    "chapter": 13,
    "chapterTitle": "Mensuration (II)",
    "section": "Circular Cylinders",
    "type": "rule",
    "prompt": "A closed right cylinder has radius 2 cm and height 4 cm. Find its total surface area.",
    "answer": "2π × 2 × 4 + 2π × 2² = 24π cm²."
  }
];
