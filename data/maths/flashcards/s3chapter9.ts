import type { MathsFlashcard } from "./types";

const sections = [
  {
    "title": "Cross Sections of Solids",
    "cards": [
      [
        "What is a cross section?",
        "The flat region exposed by a plane cutting through a solid."
      ],
      [
        "Which cuts reproduce the base of a prism?",
        "Cuts parallel to the base."
      ],
      [
        "What does uniform cross section mean?",
        "The sections have the same shape and size along the length."
      ],
      [
        "A right cylinder is cut by a plane containing its axis. What are the dimensions of the section?",
        "Its length and its base diameter."
      ],
      [
        "Can an inclined cube section have six sides?",
        "Yes. The plane crosses all six faces."
      ],
      [
        "Which section of a sphere has the largest area?",
        "Any plane section through its centre."
      ],
      [
        "What happens to parallel sections as you move towards the apex of a pyramid?",
        "They stay similar to the base and get smaller."
      ],
      [
        "What is left below a cut parallel to the base of a cone?",
        "A frustum, after the small cone is removed."
      ],
      [
        "What shape is a section through the apex and a diameter of a right cone?",
        "An isosceles triangle."
      ],
      [
        "A square pyramid has a 16 cm base side. Find the side of the parallel section halfway up.",
        "8 cm. All corresponding lengths scale by one half."
      ]
    ]
  },
  {
    "title": "2-D Representations of Pyramids and Circular Cones",
    "cards": [
      [
        "What makes a tetrahedron regular?",
        "Its four faces are congruent equilateral triangles."
      ],
      [
        "How many faces meet at a vertex of a tetrahedron?",
        "Three."
      ],
      [
        "How many edges does a rectangular pyramid have?",
        "Eight: four base edges and four sloping edges."
      ],
      [
        "Where is the apex of a right rectangular pyramid relative to its base?",
        "Directly above the intersection of the base diagonals when the base is horizontal."
      ],
      [
        "How do you indicate a hidden edge?",
        "Use a dashed line between its endpoints."
      ],
      [
        "Why can two equal edges look different in a sketch?",
        "Projection can shorten lengths in different directions."
      ],
      [
        "How do you sketch a circular base seen at a slant?",
        "Use an ellipse and distinguish its visible and hidden arcs."
      ],
      [
        "Which grid directions do you use for a horizontal base on isometric paper?",
        "The two sloping directions. Use the vertical direction for height."
      ],
      [
        "How do you represent depth on an oblique grid?",
        "Draw receding parallel edges along the same diagonal grid direction."
      ],
      [
        "Does the interior height of a cone count as an edge?",
        "No. It is a construction line from the apex to the base plane."
      ]
    ]
  }
];

export const s3Chapter9Flashcards: MathsFlashcard[] = sections.flatMap(({title, cards}, section) =>
  cards.map(([prompt, answer], index) => ({
    id: `s3-c9-s${section + 1}-${index + 1}`, level: "s3", chapter: 9,
    chapterTitle: "More about 3-D Figures", section: title, type: "rule", prompt, answer
  }))
);
