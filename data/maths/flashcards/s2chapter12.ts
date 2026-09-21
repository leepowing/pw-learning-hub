import type { MathsFlashcard } from "./types";
import { reasonRef } from "@/data/maths/reasons/reasonBank";
export const s2Chapter12Flashcards: (MathsFlashcard & { s2Chapter12Diagram?: boolean })[] = [
  {
    "id": "s2-c12-hypotenuse",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Concepts of Trigonometric Ratios",
    "type": "rule",
    "prompt": "How do you identify the hypotenuse?",
    "answer": "It is opposite the right angle and is the longest side."
  },
  {
    "id": "s2-c12-opposite",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Concepts of Trigonometric Ratios",
    "type": "rule",
    "prompt": "What is the opposite side relative to an acute angle?",
    "answer": "The side that does not meet the chosen angle."
  },
  {
    "id": "s2-c12-adjacent",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Concepts of Trigonometric Ratios",
    "type": "rule",
    "prompt": "Which side is the adjacent side?",
    "answer": "The side meeting the chosen acute angle, excluding the hypotenuse."
  },
  {
    "id": "s2-c12-switch-angle",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Concepts of Trigonometric Ratios",
    "type": "rule",
    "prompt": "What changes when the reference angle switches to the other acute angle?",
    "answer": "The opposite and adjacent sides swap roles; the hypotenuse stays the same."
  },
  {
    "id": "s2-c12-diagram-a",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Concepts of Trigonometric Ratios",
    "type": "rule",
    "prompt": "In the diagram, name the opposite, adjacent and hypotenuse sides relative to θ.",
    "answer": "Opposite: BC. Adjacent: AC. Hypotenuse: AB.",
    "s2Chapter12Diagram": true
  },
  {
    "id": "s2-c12-same-angle",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Concepts of Trigonometric Ratios",
    "type": "rule",
    "prompt": "Why do right-angled triangles with the same acute angle have the same side ratios?",
    "answer": "They are similar, so corresponding sides are proportional.",
    answerReason: reasonRef("similarity.aa") + " " + reasonRef("similarity.correspondingSides")
  },
  {
    "id": "s2-c12-sine-definition",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Sine Ratio",
    "type": "rule",
    "prompt": "State the sine ratio for an acute angle in a right-angled triangle.",
    "answer": "sin θ = opposite / hypotenuse."
  },
  {
    "id": "s2-c12-sine-length",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Sine Ratio",
    "type": "rule",
    "prompt": "How do you find the opposite side from θ and hypotenuse h?",
    "answer": "Opposite side = h sin θ."
  },
  {
    "id": "s2-c12-sine-hypotenuse",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Sine Ratio",
    "type": "rule",
    "prompt": "How do you find the hypotenuse from opposite side o and θ?",
    "answer": "Hypotenuse = o / sin θ."
  },
  {
    "id": "s2-c12-sine-inverse",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Sine Ratio",
    "type": "rule",
    "prompt": "Which operation finds an acute angle from its sine ratio?",
    "answer": "θ = sin⁻¹(opposite / hypotenuse). Use degree mode."
  },
  {
    "id": "s2-c12-sine-range",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Sine Ratio",
    "type": "rule",
    "prompt": "What is the range of sin θ when 0° < θ < 90°?",
    "answer": "0 < sin θ < 1. Sine increases as the acute angle increases."
  },
  {
    "id": "s2-c12-sine-example",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Sine Ratio",
    "type": "rule",
    "prompt": "A right triangle has hypotenuse 10 cm and an angle of 30°. Find the opposite side.",
    "answer": "10 sin 30° = 5 cm."
  },
  {
    "id": "s2-c12-cosine-definition",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Cosine Ratio",
    "type": "rule",
    "prompt": "State the cosine ratio for an acute angle in a right-angled triangle.",
    "answer": "cos θ = adjacent / hypotenuse."
  },
  {
    "id": "s2-c12-cosine-length",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Cosine Ratio",
    "type": "rule",
    "prompt": "How do you find the adjacent side from θ and hypotenuse h?",
    "answer": "Adjacent side = h cos θ."
  },
  {
    "id": "s2-c12-cosine-hypotenuse",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Cosine Ratio",
    "type": "rule",
    "prompt": "How do you find the hypotenuse from adjacent side a and θ?",
    "answer": "Hypotenuse = a / cos θ."
  },
  {
    "id": "s2-c12-cosine-inverse",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Cosine Ratio",
    "type": "rule",
    "prompt": "cos θ = 0.5 and θ is acute. Find θ.",
    "answer": "θ = cos⁻¹(0.5) = 60°."
  },
  {
    "id": "s2-c12-cosine-range",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Cosine Ratio",
    "type": "rule",
    "prompt": "How does cosine change as an acute angle increases?",
    "answer": "Cosine decreases. For 0° < θ < 90°, 0 < cos θ < 1."
  },
  {
    "id": "s2-c12-diagram-cosine",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Cosine Ratio",
    "type": "rule",
    "prompt": "Use the diagram to find cos θ.",
    "answer": "cos θ = AC/AB = 4/5.",
    "s2Chapter12Diagram": true
  },
  {
    "id": "s2-c12-tangent-definition",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Tangent Ratio",
    "type": "rule",
    "prompt": "State the tangent ratio for an acute angle in a right-angled triangle.",
    "answer": "tan θ = opposite / adjacent."
  },
  {
    "id": "s2-c12-tangent-opposite",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Tangent Ratio",
    "type": "rule",
    "prompt": "How do you find the opposite side from adjacent side a and θ?",
    "answer": "Opposite side = a tan θ."
  },
  {
    "id": "s2-c12-tangent-adjacent",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Tangent Ratio",
    "type": "rule",
    "prompt": "How do you find the adjacent side from opposite side o and θ?",
    "answer": "Adjacent side = o / tan θ."
  },
  {
    "id": "s2-c12-tangent-inverse",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Tangent Ratio",
    "type": "rule",
    "prompt": "tan θ = 1 and θ is acute. Find θ.",
    "answer": "θ = tan⁻¹(1) = 45°."
  },
  {
    "id": "s2-c12-tangent-range",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Tangent Ratio",
    "type": "rule",
    "prompt": "Can the tangent of an acute angle exceed 1?",
    "answer": "Yes. Tangent is positive and increases as the acute angle increases; it is greater than 1 for θ > 45°."
  },
  {
    "id": "s2-c12-nonlinear",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "The Tangent Ratio",
    "type": "rule",
    "prompt": "Is tan(α + β) generally equal to tan α + tan β?",
    "answer": "No. Do not split a trigonometric function across an addition. The same caution applies to sine and cosine."
  },
  {
    "id": "s2-c12-choose-ratio",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Applications of Trigonometric Ratios",
    "type": "rule",
    "prompt": "How do you choose a trigonometric ratio in a problem?",
    "answer": "Identify a right-angled triangle, choose the reference angle, label the side roles, then use the ratio connecting the known and required sides."
  },
  {
    "id": "s2-c12-shared-side",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Applications of Trigonometric Ratios",
    "type": "rule",
    "prompt": "How can two right-angled triangles help solve one problem?",
    "answer": "Find a shared side or angle in the first triangle, then use it in the second."
  },
  {
    "id": "s2-c12-auxiliary",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Applications of Trigonometric Ratios",
    "type": "rule",
    "prompt": "What can you add when no useful right-angled triangle is shown?",
    "answer": "Draw a suitable perpendicular line to create a right-angled triangle. Label the new points and right angle."
  },
  {
    "id": "s2-c12-rounding",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Applications of Trigonometric Ratios",
    "type": "rule",
    "prompt": "When should you round a multi-step trigonometry answer?",
    "answer": "Keep calculator precision during working. Round the final answer to the requested accuracy and include units."
  },
  {
    "id": "s2-c12-starting-height",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Applications of Trigonometric Ratios",
    "type": "rule",
    "prompt": "A line rises 6 m above a point 1.4 m above the ground. What is its top height above the ground?",
    "answer": "6 + 1.4 = 7.4 m. Include the starting height."
  },
  {
    "id": "s2-c12-pythagoras",
    "level": "s2",
    "chapter": 12,
    "chapterTitle": "Introduction to Trigonometry",
    "section": "Applications of Trigonometric Ratios",
    "type": "rule",
    "prompt": "A right triangle has hypotenuse 13 cm and one leg 5 cm. Find the other leg.",
    "answer": "√(13² − 5²) = 12 cm.",
    answerReason: reasonRef("pythagoras.theorem")
  }
];
