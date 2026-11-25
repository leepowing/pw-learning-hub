export type Topic = {name:string;formula:string;info:string;q:string;steps:string[];reason:string;graph:string};
export type Lesson = {number:string;slug:string;title:string;description:string;topics:Topic[];mistake:string;correction:string;practice:{q:string;a:string}[];summary:string[]};
export const lessons:Lesson[] = [
  {
    "number": "4.1",
    "slug": "graphs",
    "title": "Graphs of Quadratic Functions",
    "description": "Standard form, opening direction, intercepts, symmetry and vertices.",
    "topics": [
      {
        "name": "Standard form and opening direction",
        "formula": "y=ax^2+bx+c,\\qquad a\\ne0",
        "info": "A quadratic graph is a smooth parabola. The sign of a decides whether it opens upwards (a>0) or downwards (a<0). The y-intercept is (0,c).",
        "q": "For y=−x²+4x+5, state its opening direction and y-intercept.",
        "steps": [
          "a=-1<0\\Rightarrow\\text{opens downwards}",
          "y(0)=5\\Rightarrow(0,5)"
        ],
        "reason": "Read the leading coefficient and substitute x=0.",
        "graph": "down"
      },
      {
        "name": "x-intercepts and roots",
        "formula": "ax^2+bx+c=0",
        "info": "At an x-intercept, y=0. Solve the quadratic equation for x. A discriminant of zero means the graph touches the x-axis at one point.",
        "q": "Find the x-intercepts of y=x²−2x−3.",
        "steps": [
          "0=x^2-2x-3",
          "0=(x-3)(x+1)",
          "x=-1\\ \\text{or}\\ x=3",
          "\\text{Intercepts: }(-1,0),(3,0)"
        ],
        "reason": "Set y=0 and factorise.",
        "graph": "roots"
      },
      {
        "name": "Axis of symmetry and vertex",
        "formula": "x=-\\frac{b}{2a}",
        "info": "The axis of symmetry passes vertically through the vertex. When there are two x-intercepts, their midpoint has this x-coordinate.",
        "q": "Find the vertex of y=x²−2x−3.",
        "steps": [
          "x=-\\frac{-2}{2(1)}=1",
          "y(1)=1-2-3=-4",
          "\\text{Vertex: }(1,-4)"
        ],
        "reason": "Use the axis formula then substitute the x-coordinate.",
        "graph": "roots"
      },
      {
        "name": "Discriminant and x-axis intersections",
        "formula": "\\Delta=b^2-4ac",
        "info": "For a quadratic function with real coefficients: Δ>0 gives two x-intercepts; Δ=0 gives one touching point; Δ<0 gives no x-intercepts.",
        "q": "Does y=x²+2x+5 intersect the x-axis?",
        "steps": [
          "\\Delta=2^2-4(1)(5)",
          "=4-20=-16<0",
          "\\text{No real x-intercepts.}"
        ],
        "reason": "The discriminant is negative, so y=0 has no real roots.",
        "graph": "noroots"
      }
    ],
    "mistake": "Confusing the y-intercept with the x-intercepts, or assuming a negative discriminant means the graph does not exist.",
    "correction": "The graph still exists; a negative discriminant means it does not cross the x-axis.",
    "practice": [
      {
        "q": "Find the y-intercept of y=3x²−4x+7.",
        "a": "(0,7)"
      },
      {
        "q": "Find the axis of symmetry of y=2x²−8x+1.",
        "a": "x=2"
      },
      {
        "q": "Find the roots of y=x²−5x+6 using y=0.",
        "a": "x=2 or x=3"
      }
    ],
    "summary": [
      "Opening direction depends on the sign of a.",
      "x-intercepts solve ax²+bx+c=0.",
      "Axis of symmetry: x=−b/(2a).",
      "Use Δ to count x-axis intersections."
    ]
  },
  {
    "number": "4.2",
    "slug": "vertex-form",
    "title": "Vertex Form of Quadratic Functions",
    "description": "Vertex, symmetry, optimum value and completing the square.",
    "topics": [
      {
        "name": "Reading vertex form",
        "formula": "y=a(x-h)^2+k,\\qquad a\\ne0",
        "info": "The vertex is (h,k); the axis is x=h. If a>0, the minimum value is k; if a<0, the maximum value is k.",
        "q": "For y=−2(x−3)²+5, find the vertex, axis and optimum value.",
        "steps": [
          "\\text{Vertex: }(3,5)",
          "\\text{Axis: }x=3",
          "a=-2<0\\Rightarrow\\text{maximum}=5"
        ],
        "reason": "Read h and k, then check the sign of a.",
        "graph": "vertexdown"
      },
      {
        "name": "Converting by completing the square",
        "formula": "x^2+px=\\left(x+\\frac p2\\right)^2-\\left(\\frac p2\\right)^2",
        "info": "Rewrite standard form into vertex form to identify the vertex. When a≠1, factor out a before completing the square.",
        "q": "Rewrite y=2x²−8x+3 in vertex form.",
        "steps": [
          "y=2(x^2-4x)+3",
          "=2\\big((x-2)^2-4\\big)+3",
          "=2(x-2)^2-5"
        ],
        "reason": "Factor the leading coefficient, complete the square, then simplify.",
        "graph": "vertexup"
      },
      {
        "name": "Finding optimum values and restrictions",
        "formula": "a(x-h)^2+k",
        "info": "A squared expression is never negative for real x. Check any restricted domain before claiming the vertex gives the optimum over that domain.",
        "q": "Find the minimum of y=(x+1)²−4 for all real x.",
        "steps": [
          "(x+1)^2\\ge0",
          "y\\ge-4",
          "\\text{Minimum }=-4\\text{ at }x=-1"
        ],
        "reason": "The squared term reaches zero at x=−1.",
        "graph": "vertexup2"
      }
    ],
    "mistake": "Reading the vertex of y=2(x−3)²+5 as (−3,5), or missing restrictions on x.",
    "correction": "The vertex is (3,5), since x−3=0 when x=3; check the allowed x-domain.",
    "practice": [
      {
        "q": "State the vertex of y=3(x+2)²−7.",
        "a": "(−2,−7)"
      },
      {
        "q": "State the maximum of y=−(x−4)²+6.",
        "a": "6"
      },
      {
        "q": "Rewrite y=x²+6x+8 in vertex form.",
        "a": "(x+3)²−1"
      }
    ],
    "summary": [
      "Vertex form: y=a(x−h)²+k.",
      "Vertex (h,k), axis x=h.",
      "Positive a gives a minimum; negative a a maximum.",
      "Complete the square to change form."
    ]
  },
  {
    "number": "4.3",
    "slug": "graphical-method",
    "title": "Solving Quadratic Equations by Graphical Method",
    "description": "Use x-intercepts or line–parabola intersections to estimate roots.",
    "topics": [
      {
        "name": "Roots as x-intercepts",
        "formula": "f(x)=0\\quad\\Longleftrightarrow\\quad y=0",
        "info": "Plot y=f(x). Read the x-coordinates where the curve meets the x-axis. Graphical roots are approximate unless exact coordinates are known.",
        "q": "Solve x²−2x−3=0 from its graph.",
        "steps": [
          "y=x^2-2x-3",
          "\\text{x-intercepts: }(-1,0),(3,0)",
          "\\therefore x=-1\\ \\text{or}\\ x=3"
        ],
        "reason": "Roots are the x-coordinates where y=0.",
        "graph": "roots"
      },
      {
        "name": "Horizontal-line intersections",
        "formula": "f(x)=d\\quad\\Longleftrightarrow\\quad y=f(x)\\ \\text{and}\\ y=d",
        "info": "To solve f(x)=d, find where the parabola intersects the horizontal line y=d. Use the same x-scale for both graphs.",
        "q": "Use the graph y=x²−2x−3 to solve x²−2x−3=1.",
        "steps": [
          "(x-1)^2-4=1",
          "(x-1)^2=5",
          "x=1\\pm\\sqrt5\\ \\approx-1.24,\\ 3.24"
        ],
        "reason": "Intersections with y=1 give the approximate x-values.",
        "graph": "horizontal"
      },
      {
        "name": "Accuracy and number of solutions",
        "formula": "\\Delta=b^2-4ac",
        "info": "If the curve is tangent to the x-axis there is one repeated real root. If it does not intersect the x-axis, there is no real root. Report readings to the precision requested.",
        "q": "For x²−2x+1=0, how many real solutions appear on the graph?",
        "steps": [
          "y=(x-1)^2",
          "\\text{The curve touches the x-axis at }(1,0).",
          "x=1\\ \\text{(a repeated root)}"
        ],
        "reason": "The graph touches the x-axis once and Δ=0.",
        "graph": "touch"
      }
    ],
    "mistake": "Using the y-coordinate at an intersection as the root, or claiming graph readings are exact without evidence.",
    "correction": "A root is the x-coordinate. Treat measured coordinates as approximations unless a value is proved exact.",
    "practice": [
      {
        "q": "For y=x²−5x+6, give its two x-intercepts.",
        "a": "(2,0) and (3,0)"
      },
      {
        "q": "Solve x²−4=0 by finding the x-intercepts.",
        "a": "x=−2 or x=2"
      },
      {
        "q": "For y=(x−2)²+1, how many x-intercepts are there?",
        "a": "0"
      }
    ],
    "summary": [
      "Solve f(x)=0 at x-axis intersections.",
      "Solve f(x)=d at intersections with y=d.",
      "Graphical solutions are estimates unless proven exact.",
      "A tangent parabola gives a repeated root."
    ]
  }
];
