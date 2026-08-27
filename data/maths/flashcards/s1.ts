import type { MathsFlashcard } from "./types";

export const s1Flashcards: MathsFlashcard[] = [
  // Chapter 5, Section 1: Percentages
  {
    id: "s1-c5-percentage-of-another",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentages",
    type: "formula",
    prompt:
      "How do you express x as a percentage of y?",
    formula: String.raw`
      \text{Percentage}
      =
      \frac{x}{y}
      \times 100\%
    `,
    explanation:
      "Divide the part by the whole, then multiply by 100%.",
  },
   {
    id: "s1-c5-find-percentage-of-quantity",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentages",
    type: "formula",
    prompt:
      "How do you find a% of y?",
    formula: String.raw`
      y \times \frac{a}{100}
    `,
    explanation:
      "Convert the percentage into a fraction or decimal, then multiply.",
  },

  // Chapter 5, Section 2: Increase
  {
    id: "s1-c5-find-increase",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you calculate an increase?",
    formula: String.raw`
      \text{Increase}
      =
      \text{New value}
      -
      \text{Original value}
    `,
    explanation:
      "Subtract the original value from the new value.",
  },
  {
    id: "s1-c5-percentage-increase",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you calculate percentage increase?",
    formula: String.raw`
      \text{Percentage increase}
      =
      \frac{\text{Increase}}
      {\text{Original value}}
      \times 100\%
    `,
    explanation:
      "Always divide the increase by the original value.",
  },
  {
    id: "s1-c5-increase-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you find the increase from a percentage increase?",
    formula: String.raw`
      \text{Increase}
      =
      \text{Original value}
      \times
      \text{Percentage increase}
    `,
    explanation:
      "Write the percentage increase as a decimal before multiplying.",
  },
  {
    id: "s1-c5-new-value-after-increase",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you find the new value after a percentage increase?",
    formula: String.raw`
      \text{New value}
      =
      \text{Original value}
      \times
      \left(1+\text{Percentage increase}\right)
    `,
    explanation:
      "For example, an increase of 12% gives a multiplier of 1.12.",
  },

  // Chapter 5, Section 2: Profit
  {
    id: "s1-c5-find-profit",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you calculate profit?",
    formula: String.raw`
      \text{Profit}
      =
      \text{Selling price}
      -
      \text{Cost price}
    `,
    explanation:
      "Profit is made when the selling price is greater than the cost price.",
  },
  {
    id: "s1-c5-profit-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you calculate profit percentage?",
    formula: String.raw`
      \text{Profit percentage}
      =
      \frac{\text{Profit}}
      {\text{Cost price}}
      \times 100\%
    `,
    explanation:
      "Profit percentage is always calculated using the cost price.",
  },
  {
    id: "s1-c5-profit-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you find the profit from a profit percentage?",
    formula: String.raw`
      \text{Profit}
      =
      \text{Cost price}
      \times
      \text{Profit percentage}
    `,
    explanation:
      "Convert the profit percentage to a decimal before multiplying.",
  },
  {
    id: "s1-c5-selling-price-with-profit",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Increase and Profit",
    type: "formula",
    prompt:
      "How do you find the selling price when there is a profit?",
    formula: String.raw`
      \text{Selling price}
      =
      \text{Cost price}
      \times
      \left(1+\text{Profit percentage}\right)
    `,
    explanation:
      "For example, a profit of 20% gives a multiplier of 1.2.",
  },

  // Chapter 5, Section 3: Decrease
  {
    id: "s1-c5-find-decrease",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate a decrease?",
    formula: String.raw`
      \text{Decrease}
      =
      \text{Original value}
      -
      \text{New value}
    `,
    explanation:
      "Subtract the new value from the original value.",
  },
  {
    id: "s1-c5-percentage-decrease",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate percentage decrease?",
    formula: String.raw`
      \text{Percentage decrease}
      =
      \frac{\text{Decrease}}
      {\text{Original value}}
      \times 100\%
    `,
    explanation:
      "Always divide the decrease by the original value.",
  },
  {
    id: "s1-c5-decrease-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the decrease from a percentage decrease?",
    formula: String.raw`
      \text{Decrease}
      =
      \text{Original value}
      \times
      \text{Percentage decrease}
    `,
    explanation:
      "Write the percentage decrease as a decimal before multiplying.",
  },
  {
    id: "s1-c5-new-value-after-decrease",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the new value after a percentage decrease?",
    formula: String.raw`
      \text{New value}
      =
      \text{Original value}
      \times
      \left(1-\text{Percentage decrease}\right)
    `,
    explanation:
      "For example, a decrease of 15% gives a multiplier of 0.85.",
  },

  // Chapter 5, Section 3: Discount
  {
    id: "s1-c5-find-discount",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate a discount?",
    formula: String.raw`
      \text{Discount}
      =
      \text{Marked price}
      -
      \text{Selling price}
    `,
    explanation:
      "The discount is the amount removed from the marked price.",
  },
  {
    id: "s1-c5-discount-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate discount percentage?",
    formula: String.raw`
      \text{Discount percentage}
      =
      \frac{\text{Discount}}
      {\text{Marked price}}
      \times 100\%
    `,
    explanation:
      "Discount percentage is calculated using the marked price.",
  },
  {
    id: "s1-c5-discount-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the discount from a discount percentage?",
    formula: String.raw`
      \text{Discount}
      =
      \text{Marked price}
      \times
      \text{Discount percentage}
    `,
    explanation:
      "Convert the discount percentage to a decimal before multiplying.",
  },
  {
    id: "s1-c5-selling-price-after-discount",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the selling price after a discount?",
    formula: String.raw`
      \text{Selling price}
      =
      \text{Marked price}
      \times
      \left(1-\text{Discount percentage}\right)
    `,
    explanation:
      "For example, a discount of 30% gives a multiplier of 0.7.",
  },

  // Chapter 5, Section 3: Loss
  {
    id: "s1-c5-find-loss",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate a loss?",
    formula: String.raw`
      \text{Loss}
      =
      \text{Cost price}
      -
      \text{Selling price}
    `,
    explanation:
      "A loss occurs when the selling price is lower than the cost price.",
  },
  {
    id: "s1-c5-loss-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you calculate loss percentage?",
    formula: String.raw`
      \text{Loss percentage}
      =
      \frac{\text{Loss}}
      {\text{Cost price}}
      \times 100\%
    `,
    explanation:
      "Loss percentage is always calculated using the cost price.",
  },
  {
    id: "s1-c5-loss-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the loss from a loss percentage?",
    formula: String.raw`
      \text{Loss}
      =
      \text{Cost price}
      \times
      \text{Loss percentage}
    `,
    explanation:
      "Convert the loss percentage to a decimal before multiplying.",
  },
  {
    id: "s1-c5-selling-price-with-loss",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Decrease, Discount and Loss",
    type: "formula",
    prompt:
      "How do you find the selling price when there is a loss?",
    formula: String.raw`
      \text{Selling price}
      =
      \text{Cost price}
      \times
      \left(1-\text{Loss percentage}\right)
    `,
    explanation:
      "For example, a loss of 25% gives a multiplier of 0.75.",
  },

  // Chapter 5, Section 4: Percentage Change
  {
    id: "s1-c5-find-change",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentage Change",
    type: "formula",
    prompt:
      "How do you calculate a signed change?",
    formula: String.raw`
      \text{Change}
      =
      \text{New value}
      -
      \text{Original value}
    `,
    explanation:
      "An increase gives a positive change. A decrease gives a negative change.",
  },
  {
    id: "s1-c5-percentage-change",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentage Change",
    type: "formula",
    prompt:
      "How do you calculate percentage change?",
    formula: String.raw`
      \text{Percentage change}
      =
      \frac{\text{Change}}
      {\text{Original value}}
      \times 100\%
    `,
    explanation:
      "Keep the sign of the change and divide by the original value.",
  },
  {
    id: "s1-c5-change-from-percentage",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentage Change",
    type: "formula",
    prompt:
      "How do you find the change from a percentage change?",
    formula: String.raw`
      \text{Change}
      =
      \text{Original value}
      \times
      \text{Percentage change}
    `,
    explanation:
      "Use a positive decimal for an increase and a negative decimal for a decrease.",
  },
  {
    id: "s1-c5-new-value-from-change",
    level: "s1",
    chapter: 5,
    chapterTitle: "Percentages (I)",
    section: "Percentage Change",
    type: "formula",
    prompt:
      "How do you find the new value from a signed percentage change?",
    formula: String.raw`
      \text{New value}
      =
      \text{Original value}
      \times
      \left(1+\text{Percentage change}\right)
    `,
    explanation:
      "A negative percentage change automatically produces a multiplier below 1.",
  },
  // Chapter 6, Section 1: Basic Concepts of Geometry
  {
    id: "s1-c6-polygon",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is a polygon?",
    answer:
      "A polygon is a closed plane figure made only from straight line segments.",
    explanation:
      "The line segments meet end to end and form the boundary of the polygon.",
    diagram: {
      type: "polygon",
      variant: "parts",
    },
  },
  {
    id: "s1-c6-polygon-side-and-vertex",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt:
      "What are the sides and vertices of a polygon?",
    answer:
      "A side is a boundary line segment. A vertex is a point where two sides meet.",
    explanation:
      "The plural of vertex is vertices.",
    diagram: {
      type: "polygon",
      variant: "parts",
    },
  },
  {
    id: "s1-c6-polygon-diagonal",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is a diagonal of a polygon?",
    answer:
      "A diagonal joins two non-adjacent vertices of a polygon.",
    explanation:
      "A side joins adjacent vertices, so a side is not a diagonal.",
    diagram: {
      type: "polygon",
      variant: "parts",
    },
  },
  {
    id: "s1-c6-equilateral-polygon",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is an equilateral polygon?",
    answer:
      "An equilateral polygon has all its sides equal in length.",
    explanation:
      "Equal side marks can be used to show that the sides have the same length.",
    diagram: {
      type: "polygon",
      variant: "equilateral",
    },
  },
  {
    id: "s1-c6-equiangular-polygon",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is an equiangular polygon?",
    answer:
      "An equiangular polygon has all its interior angles equal.",
    explanation:
      "Equal angle marks show that the interior angles have the same size.",
    diagram: {
      type: "polygon",
      variant: "equiangular",
    },
  },
  {
    id: "s1-c6-regular-polygon",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is a regular polygon?",
    answer:
      "A regular polygon has equal sides and equal interior angles.",
    explanation:
      "It must be both equilateral and equiangular.",
    diagram: {
      type: "polygon",
      variant: "regular",
    },
  },
  {
    id: "s1-c6-convex-polygon",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is a convex polygon?",
    answer:
      "A convex polygon has no interior angle greater than 180°.",
    explanation:
      "Every diagonal of a convex polygon lies inside the polygon.",
    diagram: {
      type: "polygon",
      variant: "convex",
    },
  },
  {
    id: "s1-c6-concave-polygon",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is a concave polygon?",
    answer:
      "A concave polygon has at least one interior angle greater than 180°.",
    explanation:
      "It has an inward-pointing part, and some diagonals pass outside the polygon.",
    diagram: {
      type: "polygon",
      variant: "concave",
    },
  },
  {
    id: "s1-c6-triangle",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is a triangle?",
    answer:
      "A triangle is a polygon with exactly three sides and three vertices.",
    explanation:
      "Its three interior angles have a total of 180°.",
    diagram: {
      type: "triangle",
      variant: "angle-classification",
    },
  },
  {
    id: "s1-c6-acute-angled-triangle",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is an acute-angled triangle?",
    answer:
      "An acute-angled triangle has three angles smaller than 90°.",
    explanation:
      "Every interior angle of the triangle is acute.",
    diagram: {
      type: "triangle",
      variant: "acute",
    },
  },
  {
    id: "s1-c6-right-angled-triangle",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is a right-angled triangle?",
    answer:
      "A right-angled triangle has one angle equal to 90°.",
    explanation:
      "A small square is commonly used to mark the right angle.",
    diagram: {
      type: "triangle",
      variant: "right",
    },
  },
  {
    id: "s1-c6-obtuse-angled-triangle",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Basic Concepts of Geometry",
    type: "definition",
    prompt: "What is an obtuse-angled triangle?",
    answer:
      "An obtuse-angled triangle has one angle greater than 90°.",
    explanation:
      "A triangle can have only one obtuse interior angle.",
    diagram: {
      type: "triangle",
      variant: "obtuse",
    },
  },
  // Chapter 6, Section 2: 3-D Figures
  {
    id: "s1-c6-solid",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "3-D Figures",
    type: "definition",
    prompt: "What is a solid figure?",
    answer:
      "A solid figure is a three-dimensional figure that occupies space.",
    explanation:
      "Unlike a plane figure, a solid has length, width and height.",
    diagram: {
      type: "solid",
      variant: "cuboid",
    },
  },
  {
    id: "s1-c6-polyhedron",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "3-D Figures",
    type: "definition",
    prompt: "What is a polyhedron?",
    answer:
      "A polyhedron is a solid enclosed only by flat polygonal faces.",
    explanation:
      "A solid with a curved surface is not a polyhedron.",
    diagram: {
      type: "solid",
      variant: "polyhedron",
    },
  },
  {
    id: "s1-c6-face",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "3-D Figures",
    type: "definition",
    prompt: "What is a face of a polyhedron?",
    answer:
      "A face is one of the flat polygonal surfaces of a polyhedron.",
    explanation:
      "For example, every face of a cuboid is a rectangle.",
    diagram: {
      type: "solid",
      variant: "face-edge-vertex",
    },
  },
  {
    id: "s1-c6-edge",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "3-D Figures",
    type: "definition",
    prompt: "What is an edge of a polyhedron?",
    answer:
      "An edge is a line segment where two faces meet.",
    explanation:
      "The edges form the boundaries of the faces.",
    diagram: {
      type: "solid",
      variant: "face-edge-vertex",
    },
  },
  {
    id: "s1-c6-vertex-of-solid",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "3-D Figures",
    type: "definition",
    prompt: "What is a vertex of a polyhedron?",
    answer:
      "A vertex is a point where edges of the polyhedron meet.",
    explanation:
      "The plural of vertex is vertices.",
    diagram: {
      type: "solid",
      variant: "face-edge-vertex",
    },
  },
  {
    id: "s1-c6-prism",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "3-D Figures",
    type: "definition",
    prompt: "What is a prism?",
    answer:
      "A prism has two identical, parallel polygonal ends and a uniform cross-section.",
    explanation:
      "It is named after the shape of its identical ends, such as a triangular prism.",
    diagram: {
      type: "solid",
      variant: "triangular-prism",
    },
  },
  {
    id: "s1-c6-cuboid-as-prism",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "3-D Figures",
    type: "rule",
    prompt: "Why is a cuboid a type of prism?",
    answer:
      "A cuboid has identical rectangular cross-sections along its length.",
    explanation:
      "A cuboid is also called a rectangular prism.",
    diagram: {
      type: "solid",
      variant: "cuboid",
    },
  },
  {
    id: "s1-c6-cylinder",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "3-D Figures",
    type: "definition",
    prompt: "Why is a cylinder not a polyhedron?",
    answer:
      "A cylinder is not a polyhedron because it has a curved surface.",
    explanation:
      "Polyhedra are enclosed only by flat polygonal faces.",
    diagram: {
      type: "solid",
      variant: "cylinder",
    },
  },
  {
    id: "s1-c6-2d-representation",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "2-D Representations",
    type: "definition",
    prompt:
      "What is a 2-D representation of a solid?",
    answer:
      "It is a flat drawing used to show the structure of a three-dimensional solid.",
    explanation:
      "Visible and hidden edges help the drawing communicate the solid's shape.",
    diagram: {
      type: "solid",
      variant: "prism-wireframe",
    },
  },
  {
    id: "s1-c6-hidden-edges",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "2-D Representations",
    type: "rule",
    prompt:
      "How are visible and hidden edges shown in a 2-D representation?",
    answer:
      "Visible edges use solid lines, while hidden edges use dashed lines.",
    explanation:
      "Dashed lines show edges that are behind the visible surfaces.",
    diagram: {
      type: "solid",
      variant: "cylinder-wireframe",
    },
  },
  {
    id: "s1-c6-cross-section",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Cross-Sections",
    type: "definition",
    prompt: "What is a cross-section of a solid?",
    answer:
      "A cross-section is the flat shape exposed when a solid is cut.",
    explanation:
      "Its shape depends on the solid and the direction of the cut.",
    diagram: {
      type: "cross-section",
      variant: "solid-cut",
    },
  },
  {
    id: "s1-c6-uniform-cross-sections",
    level: "s1",
    chapter: 6,
    chapterTitle: "Basic Geometry",
    section: "Cross-Sections",
    type: "definition",
    prompt: "What are uniform cross-sections?",
    answer:
      "Uniform cross-sections have the same shape and size throughout the solid.",
    explanation:
      "Prisms have uniform cross-sections when cut parallel to their identical ends.",
    diagram: {
      type: "cross-section",
      variant: "uniform-prism",
    },
  },




];
