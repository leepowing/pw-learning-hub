import type { MathsFlashcard } from "./types";

const sections = [
  {
    "title": "Heights of Solids",
    "cards": [
      [
        "How is the height of a solid measured?",
        "Perpendicularly between the base plane and the apex or opposite parallel plane."
      ],
      [
        "What is the projection of a point onto a plane?",
        "The foot of the perpendicular drawn from the point."
      ],
      [
        "Can a pyramid’s height fall outside its base?",
        "Yes, the perpendicular may meet the extended base plane."
      ]
    ]
  },
  {
    "title": "Pyramids",
    "cards": [
      [
        "How do you find a pyramid’s volume?",
        "Multiply base area by perpendicular height and divide by three."
      ],
      [
        "Which surfaces make up a pyramid?",
        "One polygonal base and triangular lateral faces."
      ],
      [
        "Which height gives a triangular face’s area?",
        "The perpendicular within the face from its apex to the chosen edge."
      ]
    ]
  },
  {
    "title": "Circular Cones",
    "cards": [
      [
        "What is the volume of a circular cone?",
        "πr²h/3, using perpendicular height h."
      ],
      [
        "What is the curved area of a right circular cone?",
        "πrℓ, using slant height ℓ. Add πr² for a closed cone."
      ],
      [
        "How are slant height, height and radius related in a right cone?",
        "ℓ² = h² + r²."
      ]
    ]
  },
  {
    "title": "Spheres",
    "cards": [
      [
        "What is the volume of a sphere?",
        "4πr³/3."
      ],
      [
        "How does a sphere’s area depend on diameter d?",
        "4πr² = πd²."
      ],
      [
        "What is the total surface area of a solid hemisphere?",
        "2πr² for its dome plus πr² for its base, giving 3πr²."
      ]
    ]
  },
  {
    "title": "Similar Figures",
    "cards": [
      [
        "If corresponding lengths triple, what happens to areas?",
        "Areas grow by 3² = 9."
      ],
      [
        "If similar solids have volumes in ratio 8 to 125, what is their length ratio?",
        "Take cube roots to get 2 to 5."
      ],
      [
        "A plan uses a length scale of 1 to 100. What area does 1 cm² represent?",
        "10,000 cm², or 1 m²."
      ]
    ]
  },
  {
    "title": "Frustums",
    "cards": [
      [
        "What cut produces a frustum?",
        "A plane parallel to the base cuts a cone or pyramid into a similar tip and a frustum."
      ],
      [
        "A tip is half as tall as the original cone. What volume fraction remains?",
        "1 − (1/2)³ = 7/8."
      ],
      [
        "How do you find a closed frustum’s total area?",
        "Subtract the tip’s lateral area from the whole solid’s lateral area, then add both bases."
      ]
    ]
  }
];

export const s3Chapter10Flashcards: MathsFlashcard[] = sections.flatMap(({title, cards}, section) =>
  cards.map(([prompt, answer], index) => ({
    id: `s3-c10-s${section + 1}-${index + 1}`, level: "s3", chapter: 10,
    chapterTitle: "Mensuration (III)", section: title, type: "rule", prompt, answer
  }))
);
