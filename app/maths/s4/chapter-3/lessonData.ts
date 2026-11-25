export type Topic={name:string;formula:string;info:string;q:string;steps:string[];reason:string};
export type Lesson={number:string;slug:string;title:string;description:string;topics:Topic[];mistake:string;correction:string;practice:{q:string;a:string}[];plot:string};
export const lessons:Lesson[] = [
  {
    "number": "3.1",
    "slug": "basic-concepts",
    "title": "Basic Concepts of Functions",
    "description": "Functions, inputs and outputs, representations, domain and codomain",
    "topics": [
      {
        "name": "Functions and outputs",
        "formula": "f(x)=x^2+5",
        "info": "A function assigns exactly one output to each allowed input. The value f(2) means substitute 2 into the function rule; it is not f multiplied by 2.",
        "q": "If f(x)=x²+5, find f(−2).",
        "steps": [
          "f(-2)=(-2)^2+5",
          "=4+5=9"
        ],
        "reason": "Evaluate the square before adding."
      },
      {
        "name": "Independent and dependent variables",
        "formula": "y=f(x)",
        "info": "x is the independent (input) variable; y is the dependent (output) variable. An input must have one and only one output.",
        "q": "The cost of n notebooks is C(n)=3n+2. Find C(4).",
        "steps": [
          "C(4)=3(4)+2=14"
        ],
        "reason": "Substitute the given input into the expression."
      },
      {
        "name": "Three representations",
        "formula": "\\text{algebraic}\\quad\\text{tabular}\\quad\\text{graphical}",
        "info": "A function may be described by an algebraic rule, a value table or a graph. Graph coordinates must match the rule exactly.",
        "q": "Complete the outputs for y=2x+1 when x=0,1,2.",
        "steps": [
          "y(0)=1,\\quad y(1)=3,\\quad y(2)=5"
        ],
        "reason": "Substitute each x into the same rule."
      },
      {
        "name": "Domain, codomain and range",
        "formula": "f:A\\to B",
        "info": "The domain is the allowed input set A; the codomain is the declared target set B. The range consists only of outputs actually produced, and is a subset of B.",
        "q": "For f(x)=x² on domain {−2,0,3}, give its range.",
        "steps": [
          "f(-2)=4,\\ f(0)=0,\\ f(3)=9",
          "\\text{Range}=\\{0,4,9\\}"
        ],
        "reason": "Evaluate all allowed inputs and remove repeated outputs."
      }
    ],
    "mistake": "Mistaking f(2) for 2f, or assuming the codomain always equals the range.",
    "correction": "f(2) is a function value; the range contains actual outputs only.",
    "plot": "mapping",
    "practice": [
      {
        "q": "For g(x)=3x−4, find g(−1).",
        "a": "−7"
      },
      {
        "q": "For f(x)=x², find f(1/2).",
        "a": "1/4"
      }
    ]
  },
  {
    "number": "3.2",
    "slug": "notation",
    "title": "Notation of Functions",
    "description": "Evaluate and simplify function expressions and substitutions",
    "topics": [
      {
        "name": "Evaluating function notation",
        "formula": "f(a)=\\text{value of }f\\text{ at }x=a",
        "info": "Substitute the complete input, including its sign, using brackets.",
        "q": "Find f(−3) for f(x)=2x²−x+1.",
        "steps": [
          "f(-3)=2(-3)^2-(-3)+1",
          "=18+3+1=22"
        ],
        "reason": "A negative input must be placed in brackets."
      },
      {
        "name": "Composite algebraic expressions",
        "formula": "f(x)=h(x)g(x)+k(x)",
        "info": "Function letters can be combined by normal algebraic operations; expand and collect like terms carefully.",
        "q": "If h(x)=x+2 and g(x)=x−1, expand h(x)g(x).",
        "steps": [
          "(x+2)(x-1)",
          "=x^2+x-2"
        ],
        "reason": "Apply distributive multiplication."
      },
      {
        "name": "Function at an algebraic input",
        "formula": "f(x+a)",
        "info": "Replace every occurrence of x with the bracketed expression x+a, then simplify. In general f(x+a) is not f(x)+f(a).",
        "q": "If f(x)=x²+3, simplify f(x+2).",
        "steps": [
          "f(x+2)=(x+2)^2+3",
          "=x^2+4x+7"
        ],
        "reason": "Expand the square after substitution."
      },
      {
        "name": "Solve for a parameter",
        "formula": "f(a)=b",
        "info": "An equation in a parameter may have multiple valid solutions. Substitute the condition and solve, checking every candidate.",
        "q": "If f(x)=x²−4x+1 and f(a)=1, find a.",
        "steps": [
          "a^2-4a+1=1",
          "a(a-4)=0",
          "a=0\\ \\text{or}\\ a=4"
        ],
        "reason": "Apply the zero-product property."
      }
    ],
    "mistake": "Writing f(x+2)=f(x)+2 without checking the function rule.",
    "correction": "For f(x)=x², f(x+2)=(x+2)², not x²+2.",
    "plot": "linear",
    "practice": [
      {
        "q": "For f(x)=x²−3x, find f(−2).",
        "a": "10"
      },
      {
        "q": "If f(x)=2x+3, simplify f(x+1).",
        "a": "2x+5"
      }
    ]
  },
  {
    "number": "3.3",
    "slug": "graphs",
    "title": "Graphs of Some Special Functions",
    "description": "Constant, linear, quadratic and cubic graphs",
    "topics": [
      {
        "name": "Constant and linear functions",
        "formula": "y=c,\\qquad y=mx+b",
        "info": "A constant function has a horizontal graph. A linear function has a straight-line graph with slope m and y-intercept b.",
        "q": "Give three points on y=2x−1.",
        "steps": [
          "x=-1,0,1",
          "y=-3,-1,1"
        ],
        "reason": "Plot ordered pairs using equal axis units."
      },
      {
        "name": "Quadratic functions",
        "formula": "y=ax^2+bx+c,\\quad a\\ne0",
        "info": "A quadratic graph is a parabola. Use a sufficient table of values and join points smoothly; it is not made of straight segments.",
        "q": "Find values of y=x²−2x−3 for x=−1,0,1,2,3.",
        "steps": [
          "y=0,-3,-4,-3,0"
        ],
        "reason": "Evaluate each x and preserve the symmetry of the parabola."
      },
      {
        "name": "Cubic functions",
        "formula": "y=ax^3+bx^2+cx+d,\\quad a\\ne0",
        "info": "Cubic graphs can bend and have turning points. Select enough points to show the curve accurately and join smoothly.",
        "q": "For y=x³−x, find y at x=−2,−1,0,1,2.",
        "steps": [
          "y=-6,0,0,0,6"
        ],
        "reason": "Evaluate the cubic and linear terms before subtraction."
      },
      {
        "name": "Graph domain and reading values",
        "formula": "y=f(x)",
        "info": "A graph may be restricted to an interval. Read points only within the stated domain and do not extrapolate outside it.",
        "q": "For y=x² on −2≤x≤3, give the minimum and maximum values.",
        "steps": [
          "\\min y=0\\ \\text{at }x=0",
          "\\max y=9\\ \\text{at }x=3"
        ],
        "reason": "Inspect endpoints and any turning point within the domain."
      }
    ],
    "mistake": "Joining quadratic graph values with straight line segments, or ignoring a restricted domain.",
    "correction": "Use a smooth curve through the calculated points and check the permitted x-interval.",
    "plot": "quadratic",
    "practice": [
      {
        "q": "For y=2x+1, find the y-intercept.",
        "a": "1"
      },
      {
        "q": "For y=x²−4, find y at x=3.",
        "a": "5"
      }
    ]
  },
  {
    "number": "3.4",
    "slug": "mapping",
    "title": "Superfood in Mathematics: Another Representation of Functions",
    "description": "Enrichment: mapping diagrams, domain, codomain and range",
    "topics": [
      {
        "name": "Mapping diagrams",
        "formula": "f:A\\rightarrow B",
        "info": "A mapping diagram places domain elements on the left and codomain elements on the right. Each input must have exactly one outgoing arrow; different inputs may share an output.",
        "q": "A={−1,0,2}, f(x)=x². List the mapped outputs.",
        "steps": [
          "-1\\mapsto1,\\quad0\\mapsto0,\\quad2\\mapsto4"
        ],
        "reason": "Apply the same function rule to every domain member."
      },
      {
        "name": "Range versus codomain",
        "formula": "\\operatorname{range}(f)\\subseteq B",
        "info": "The range contains only attained values. A codomain may include values not reached by any arrow.",
        "q": "Domain {−1,0,2}; codomain {0,1,4,9}; f(x)=x². Find range.",
        "steps": [
          "\\operatorname{range}(f)=\\{0,1,4\\}"
        ],
        "reason": "9 is in the codomain but receives no arrow."
      },
      {
        "name": "Recognising valid mappings",
        "formula": "f(x)\\ \\text{is single-valued}",
        "info": "One input with two different outputs is not a function. Repeated output values across different inputs are allowed.",
        "q": "Is mapping 1→3, 2→3, 3→4 a function?",
        "steps": [
          "\\text{Yes: each input has exactly one output.}"
        ],
        "reason": "The function condition concerns outputs per input."
      }
    ],
    "mistake": "Believing two inputs cannot share the same output.",
    "correction": "Many-to-one mappings can be functions; one-to-many mappings cannot.",
    "plot": "mapping",
    "practice": [
      {
        "q": "Is {1→2, 1→3, 2→4} a function?",
        "a": "No"
      },
      {
        "q": "For inputs {−2,2}, f(x)=x², how many distinct range values?",
        "a": "1"
      }
    ]
  }
];
