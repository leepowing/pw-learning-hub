import type { MathsFlashcard } from "./types";

export const s2Flashcards: MathsFlashcard[] = [
  // =========================================================
  // Chapter 2 · Section 1 · Laws of Positive Integral Indices
  // =========================================================

  {
    id: "s2-c2-index-notation",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Laws of Positive Integral Indices",
    type: "definition",
    prompt: "What does index notation mean?",
    formula: String.raw`
      a^n=\underbrace{a\times a\times\cdots\times a}_{n\text{ factors}}
    `,
    answer:
      "The base a is multiplied by itself n times; n is the index or power.",
    explanation:
      "For example, a⁴ means a × a × a × a. It does not mean 4a.",
  },

  {
    id: "s2-c2-product-law-indices",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Laws of Positive Integral Indices",
    type: "formula",
    prompt: "What is the multiplication law of indices?",
    formula: String.raw`
      a^m\times a^n=a^{m+n}
    `,
    answer: "Keep the same base and add the indices.",
    explanation:
      "The law applies only when the powers have the same base.",
  },

  {
    id: "s2-c2-quotient-law-indices",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Laws of Positive Integral Indices",
    type: "formula",
    prompt: "What is the division law of indices when m > n?",
    formula: String.raw`
      \frac{a^m}{a^n}=a^{m-n}
      \qquad(a\ne0)
    `,
    answer: "Keep the same non-zero base and subtract the indices.",
    explanation:
      "For example, a⁷ ÷ a³ = a⁴ because four factors of a remain.",
  },

  {
    id: "s2-c2-equal-indices-quotient",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Laws of Positive Integral Indices",
    type: "formula",
    prompt: "Simplify a quotient with equal indices.",
    questionFormula: String.raw`
      \frac{x^5}{x^5}
    `,
    formula: String.raw`
      \frac{x^5}{x^5}=1
      \qquad(x\ne0)
    `,
    answer: "1.",
    explanation:
      "Any non-zero expression divided by itself equals 1.",
  },

  {
    id: "s2-c2-power-of-power-law",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Laws of Positive Integral Indices",
    type: "formula",
    prompt: "What is the power-of-a-power law?",
    formula: String.raw`
      (a^m)^n=a^{mn}
    `,
    answer: "Keep the same base and multiply the indices.",
    explanation:
      "For example, (a³)⁴ = a¹². Do not add the indices in this situation.",
  },

  {
    id: "s2-c2-power-product-quotient",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Laws of Positive Integral Indices",
    type: "formula",
    prompt: "How does a power act on a product or quotient?",
    formula: String.raw`
      (ab)^n=a^nb^n
      \qquad
      \left(\frac ab\right)^n=\frac{a^n}{b^n}
    `,
    answer: "Apply the power to every factor in the brackets.",
    explanation:
      "In the quotient law, b must be non-zero.",
  },

  // =========================================================
  // Chapter 2 · Section 2 · Introduction to Polynomials
  // =========================================================

  {
    id: "s2-c2-meaning-of-monomial",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Introduction to Polynomials",
    type: "definition",
    prompt: "What is a monomial?",
    formula: String.raw`
      -3,qquad 5a^2b
    `,
    answer:
      "A monomial is a number, a variable, or a product of numbers and variables with non-negative integral indices.",
    explanation:
      "A monomial contains one term and has no variable in a denominator.",
  },

  {
    id: "s2-c2-meaning-of-polynomial",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Introduction to Polynomials",
    type: "definition",
    prompt: "What is a polynomial?",
    formula: String.raw`
      3x^2-4x+2
    `,
    answer: "A polynomial is a monomial or a sum of two or more monomials.",
    explanation:
      "Every variable in a polynomial has a non-negative integral index.",
  },

  {
    id: "s2-c2-coefficient-and-constant",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Introduction to Polynomials",
    type: "definition",
    prompt: "Identify the coefficient of x² and the constant term.",
    questionFormula: String.raw`
      4x^3-5x^2+x-7
    `,
    formula: String.raw`
      \text{coefficient of }x^2=-5,
      \qquad
      \text{constant term}=-7
    `,
    answer: "The coefficient of x² is −5 and the constant term is −7.",
    explanation:
      "A coefficient multiplies a variable term. A constant term has no variable.",
  },

  {
    id: "s2-c2-degree-of-term",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Introduction to Polynomials",
    type: "rule",
    prompt: "How do you find the degree of a term?",
    formula: String.raw`
      \deg(4x^3y^2)=3+2=5
    `,
    answer: "Add the indices of all variables in the term.",
    explanation:
      "The numerical coefficient does not affect the degree.",
  },

  {
    id: "s2-c2-degree-of-polynomial",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Introduction to Polynomials",
    type: "rule",
    prompt: "How do you find the degree of a polynomial?",
    formula: String.raw`
      \deg(4x^3y^2-5x+7)=5
    `,
    answer: "Find the highest degree among all non-zero terms.",
    explanation:
      "Here 4x³y² has degree 5, which is higher than the other terms.",
  },

  {
    id: "s2-c2-arrange-and-evaluate-polynomial",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Introduction to Polynomials",
    type: "rule",
    prompt: "How are polynomial terms usually arranged and evaluated?",
    formula: String.raw`
      1+5x+3x^2
      =3x^2+5x+1
    `,
    answer:
      "Arrange terms in descending powers, then substitute the given variable value to evaluate.",
    explanation:
      "Writing terms in a standard order makes coefficients and degree easier to identify.",
  },

  // =========================================================
  // Chapter 2 · Section 3 · Operations of Polynomials
  // =========================================================

  {
    id: "s2-c2-like-terms",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Operations of Polynomials",
    type: "definition",
    prompt: "What are like terms?",
    formula: String.raw`
      3x^2y,quad -5x^2y
    `,
    answer:
      "Like terms contain exactly the same variables raised to the same indices.",
    explanation:
      "Only the numerical coefficients may be different.",
  },

  {
    id: "s2-c2-add-polynomials",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Operations of Polynomials",
    type: "formula",
    prompt: "Add and simplify.",
    questionFormula: String.raw`
      (2x^2+3x-1)+(x^2-5x+4)
    `,
    formula: String.raw`
      \begin{aligned}
      &(2x^2+3x-1)+(x^2-5x+4)\\
      &\quad=3x^2-2x+3
      \end{aligned}
    `,
    answer: "3x² − 2x + 3.",
    explanation:
      "Remove the brackets and combine corresponding like terms.",
  },

  {
    id: "s2-c2-subtract-polynomials",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Operations of Polynomials",
    type: "formula",
    prompt: "Subtract and simplify.",
    questionFormula: String.raw`
      (5x^2+x-7)-(2x^2-3x+1)
    `,
    formula: String.raw`
      \begin{aligned}
      &5x^2+x-7-2x^2+3x-1\\
      &\quad=3x^2+4x-8
      \end{aligned}
    `,
    answer: "3x² + 4x − 8.",
    explanation:
      "Change every sign in the subtracted bracket before combining like terms.",
  },

  {
    id: "s2-c2-multiply-monomials",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Operations of Polynomials",
    type: "formula",
    prompt: "Multiply the monomials.",
    questionFormula: String.raw`
      (-3x^2y)(4xy^3)
    `,
    formula: String.raw`
      (-3x^2y)(4xy^3)=-12x^3y^4
    `,
    answer: "−12x³y⁴.",
    explanation:
      "Multiply the coefficients and add indices of variables with the same base.",
  },

  {
    id: "s2-c2-distributive-law-polynomial",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Operations of Polynomials",
    type: "formula",
    prompt: "What is the distributive law used to expand a bracket?",
    formula: String.raw`
      a(b+c)=ab+ac
    `,
    answer: "Multiply the term outside the bracket by every term inside it.",
    explanation:
      "The same rule applies when terms inside the bracket are subtracted.",
  },

  {
    id: "s2-c2-expand-two-binomials",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Operations of Polynomials",
    type: "formula",
    prompt: "Expand and simplify.",
    questionFormula: String.raw`
      (x+3)(2x-5)
    `,
    formula: String.raw`
      \begin{aligned}
      (x+3)(2x-5)
        &=2x^2-5x+6x-15\\
        &=2x^2+x-15
      \end{aligned}
    `,
    answer: "2x² + x − 15.",
    explanation:
      "Multiply every term in the first bracket by every term in the second bracket.",
  },

  // =========================================================
  // Chapter 2 · Section 4 · Factorization of Polynomials
  // =========================================================

  {
    id: "s2-c2-meaning-of-factorization",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Factorization of Polynomials",
    type: "definition",
    prompt: "What is factorization?",
    formula: String.raw`
      ab+ac=a(b+c)
    `,
    answer: "Factorization rewrites a polynomial as a product of its factors.",
    explanation:
      "It is the reverse process of expansion.",
  },

  {
    id: "s2-c2-extract-common-factor",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Factorization of Polynomials",
    type: "rule",
    prompt: "How do you factorize by extracting a common factor?",
    formula: String.raw`
      12x+18=6(2x+3)
    `,
    answer:
      "Find a factor common to every term, place it outside the bracket, then divide each term by it.",
    explanation:
      "For complete factorization, extract the greatest common factor.",
  },

  {
    id: "s2-c2-factorize-greatest-common-factor",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Factorization of Polynomials",
    type: "formula",
    prompt: "Factorize completely.",
    questionFormula: String.raw`
      12x^3y-18x^2y^2
    `,
    formula: String.raw`
      12x^3y-18x^2y^2
      =6x^2y(2x-3y)
    `,
    answer: "6x²y(2x − 3y).",
    explanation:
      "The greatest common factor of the two terms is 6x²y.",
  },

  {
    id: "s2-c2-extract-negative-factor",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Factorization of Polynomials",
    type: "formula",
    prompt: "Factorize by extracting a negative common factor.",
    questionFormula: String.raw`
      -8x^2+12x
    `,
    formula: String.raw`
      -8x^2+12x=-4x(2x-3)
    `,
    answer: "−4x(2x − 3).",
    explanation:
      "Dividing both terms by −4x gives 2x and −3 inside the bracket.",
  },

  {
    id: "s2-c2-factorize-by-grouping-rule",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Factorization of Polynomials",
    type: "rule",
    prompt: "What are the steps for factorization by grouping?",
    formula: String.raw`
      ab+ac+db+dc=(a+d)(b+c)
    `,
    answer:
      "Group the terms, extract a factor from each group, then extract the common bracket.",
    explanation:
      "Arrange the terms so that both groups produce the same bracket.",
  },

  {
    id: "s2-c2-factorize-by-grouping-example",
    level: "s2",
    chapter: 2,
    chapterTitle: "Operations and Factorization of Polynomials",
    section: "Factorization of Polynomials",
    type: "formula",
    prompt: "Factorize by grouping.",
    questionFormula: String.raw`
      x^2+3x+2xy+6y
    `,
    formula: String.raw`
      \begin{aligned}
      x^2+3x+2xy+6y
        &=x(x+3)+2y(x+3)\\
        &=(x+2y)(x+3)
      \end{aligned}
    `,
    answer: "(x + 2y)(x + 3).",
    explanation:
      "Both groups contain x + 3. Expand the final answer to verify the factorization.",
  },

  // =========================================================
  // Chapter 3 · Section 1 · Meaning of Identities
  // =========================================================

  {
    id: "s2-c3-meaning-of-identity",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "Meaning of Identities",
    type: "definition",
    prompt: "What is an identity?",
    formula: String.raw`
      P(x)\equiv Q(x)
    `,
    answer:
      "An identity is an equality that is true for every permitted value of its variable.",
    explanation:
      "After both sides are expanded and simplified, they produce the same expression.",
  },

  {
    id: "s2-c3-equation-vs-identity",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "Meaning of Identities",
    type: "definition",
    prompt:
      "What is the difference between an equation and an identity?",
    questionFormula: String.raw`
      2x+3=7
      \qquad
      2(x+1)\equiv2x+2
    `,
    formula: String.raw`
      \begin{aligned}
      2x+3&=7 &&\text{only when }x=2,\\
      2(x+1)&\equiv2x+2
        &&\text{for every value of }x.
      \end{aligned}
    `,
    answer:
      "An equation may be true only for particular values, while an identity is true for every permitted value.",
    explanation:
      "The first statement is true only when x = 2. The second statement is true for every value of x.",
  },

  {
    id: "s2-c3-verify-an-identity",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "Meaning of Identities",
    type: "rule",
    prompt: "How can you verify this algebraic identity?",
    questionFormula: String.raw`
      3(x+2)+x\equiv4x+6
    `,
    formula: String.raw`
      \begin{aligned}
      3(x+2)+x
        &=3x+6+x\\
        &=4x+6
      \end{aligned}
    `,
    answer:
      "Expand and simplify both sides separately. It is an identity if the simplified expressions are identical.",
    explanation:
      "The left-hand side simplifies to 4x + 6, which is identical to the right-hand side.",
  },

  {
    id: "s2-c3-lhs-and-rhs",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "Meaning of Identities",
    type: "definition",
    prompt: "What do L.H.S. and R.H.S. mean?",
    formula: String.raw`
      \underbrace{2(x+3)}_{\text{L.H.S.}}
      \equiv
      \underbrace{2x+6}_{\text{R.H.S.}}
    `,
    answer:
      "L.H.S. means left-hand side, and R.H.S. means right-hand side.",
    explanation:
      "To verify an identity, simplify each side and check that both sides produce the same expression.",
  },

  {
    id: "s2-c3-compare-coefficients",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "Meaning of Identities",
    type: "rule",
    prompt:
      "How can an identity be used to find unknown coefficients?",
    formula: String.raw`
      Ax+B\equiv5x-7
      \quad\Rightarrow\quad
      A=5,\;B=-7
    `,
    answer:
      "Compare the coefficients of corresponding like terms on both sides.",
    explanation:
      "The coefficients of x must match, and the constant terms must also match.",
  },

  {
    id: "s2-c3-find-unknown-coefficients",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "Meaning of Identities",
    type: "rule",
    prompt: "Find A and B in the identity.",
    questionFormula: String.raw`
      x(x-2)\equiv Ax^2+Bx
    `,
    formula: String.raw`
      \begin{aligned}
      x(x-2)
        &=x^2-2x\\
        &\equiv1x^2-2x
      \end{aligned}
    `,
    answer: "A = 1 and B = −2.",
    explanation:
      "Expanding the left-hand side gives x² − 2x. Comparing coefficients gives A = 1 and B = −2.",
  },

  // =========================================================
  // Chapter 3 · Section 2 · Difference of Two Squares
  // =========================================================

  {
    id: "s2-c3-difference-of-two-squares",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Difference of Two Squares Identity",
    type: "formula",
    prompt:
      "What is the difference of two squares identity?",
    formula: String.raw`
      (a+b)(a-b)\equiv a^2-b^2
    `,
    answer:
      "The product of a sum and the corresponding difference equals the difference of their squares.",
    explanation:
      "The two middle terms cancel when the brackets are expanded.",
  },

  {
    id: "s2-c3-recognise-difference-squares",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Difference of Two Squares Identity",
    type: "rule",
    prompt:
      "How can you recognise a difference of two squares?",
    formula: String.raw`
      A^2-B^2=(A+B)(A-B)
    `,
    answer:
      "It contains two perfect-square terms separated by subtraction.",
    explanation:
      "A difference of two squares can be factorised as (A + B)(A − B). A sum of two squares does not use this identity.",
  },

  {
    id: "s2-c3-expand-conjugate-brackets",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Difference of Two Squares Identity",
    type: "formula",
    prompt: "Expand using an identity.",
    questionFormula: String.raw`
      (x+4)(x-4)
    `,
    formula: String.raw`
      \begin{aligned}
      (x+4)(x-4)
        &=x^2-4^2\\
        &=x^2-16
      \end{aligned}
    `,
    answer: "x² − 16.",
    explanation:
      "Use (a + b)(a − b) = a² − b² with a = x and b = 4.",
  },

  {
    id: "s2-c3-factor-difference-squares",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Difference of Two Squares Identity",
    type: "formula",
    prompt: "Factorise using an identity.",
    questionFormula: String.raw`
      9y^2-25
    `,
    formula: String.raw`
      \begin{aligned}
      9y^2-25
        &=(3y)^2-5^2\\
        &=(3y+5)(3y-5)
      \end{aligned}
    `,
    answer: "(3y + 5)(3y − 5).",
    explanation:
      "Since 9y² = (3y)² and 25 = 5², apply the difference of two squares identity.",
  },

  {
    id: "s2-c3-mental-calculation-difference",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Difference of Two Squares Identity",
    type: "rule",
    prompt:
      "Use the difference of two squares to calculate this without a calculator.",
    questionFormula: String.raw`
      103\times97
    `,
    formula: String.raw`
      \begin{aligned}
      103\times97
        &=(100+3)(100-3)\\
        &=100^2-3^2\\
        &=10000-9\\
        &=9991
      \end{aligned}
    `,
    answer: "103 × 97 = 9,991.",
    explanation:
      "Numbers equally spaced above and below 100 can be written as a sum multiplied by a difference.",
  },

  // =========================================================
  // Chapter 3 · Section 3 · Perfect Square Identities
  // =========================================================

  {
    id: "s2-c3-square-of-a-sum",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Perfect Square Identities",
    type: "formula",
    prompt: "What is the square of a sum identity?",
    formula: String.raw`
      (a+b)^2\equiv a^2+2ab+b^2
    `,
    answer: "a² + 2ab + b².",
    explanation:
      "Square the first term, add twice the product, then add the square of the second term.",
  },

  {
    id: "s2-c3-square-of-a-difference",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Perfect Square Identities",
    type: "formula",
    prompt:
      "What is the square of a difference identity?",
    formula: String.raw`
      (a-b)^2\equiv a^2-2ab+b^2
    `,
    answer: "a² − 2ab + b².",
    explanation:
      "The middle term is negative, but the final square term remains positive.",
  },

  {
    id: "s2-c3-expand-square-sum",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Perfect Square Identities",
    type: "formula",
    prompt: "Expand the perfect square.",
    questionFormula: String.raw`
      (2x+3)^2
    `,
    formula: String.raw`
      \begin{aligned}
      (2x+3)^2
        &=(2x)^2+2(2x)(3)+3^2\\
        &=4x^2+12x+9
      \end{aligned}
    `,
    answer: "4x² + 12x + 9.",
    explanation:
      "Use a = 2x and b = 3. The middle term is 2(2x)(3) = 12x.",
  },

  {
    id: "s2-c3-expand-square-difference",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Perfect Square Identities",
    type: "formula",
    prompt: "Expand the perfect square.",
    questionFormula: String.raw`
      (3x-5)^2
    `,
    formula: String.raw`
      \begin{aligned}
      (3x-5)^2
        &=(3x)^2-2(3x)(5)+5^2\\
        &=9x^2-30x+25
      \end{aligned}
    `,
    answer: "9x² − 30x + 25.",
    explanation:
      "Use a = 3x and b = 5. The middle term is −2(3x)(5) = −30x.",
  },

  {
    id: "s2-c3-perfect-square-common-error",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Perfect Square Identities",
    type: "rule",
    prompt:
      "What common mistake should be avoided when squaring a binomial?",
    formula: String.raw`
      (a+b)^2\ne a^2+b^2
    `,
    answer: "Do not omit the middle term 2ab.",
    explanation:
      "The correct expansion is a² + 2ab + b² because (a + b)² means (a + b)(a + b).",
  },

  {
    id: "s2-c3-recognise-perfect-square",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Perfect Square Identities",
    type: "formula",
    prompt:
      "Express this trinomial as a perfect square.",
    questionFormula: String.raw`
      x^2+10x+25
    `,
    formula: String.raw`
      \begin{aligned}
      x^2+10x+25
        &=x^2+2(x)(5)+5^2\\
        &=(x+5)^2
      \end{aligned}
    `,
    answer: "(x + 5)².",
    explanation:
      "The first and last terms are squares, and the middle term is 2(x)(5) = 10x.",
  },

  {
    id: "s2-c3-sum-product-application",
    level: "s2",
    chapter: 3,
    chapterTitle: "Identities",
    section: "The Perfect Square Identities",
    type: "rule",
    prompt:
      "Use the given information to find p² + q².",
    questionFormula: String.raw`
      p+q=8,
      \qquad
      pq=7,
      \qquad
      p^2+q^2=?
    `,
    formula: String.raw`
      \begin{aligned}
      p^2+q^2
        &=(p+q)^2-2pq\\
        &=8^2-2(7)\\
        &=64-14\\
        &=50
      \end{aligned}
    `,
    answer: "p² + q² = 50.",
    explanation:
      "Rearrange (p + q)² = p² + 2pq + q² to obtain p² + q² = (p + q)² − 2pq.",
  },

  // =========================================================
  // Chapter 4 · Section 1 · Algebraic Fractions
  // =========================================================

  {
    id: "s2-c4-algebraic-fraction-definition",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "definition",
    prompt: "What is an algebraic fraction?",
    formula: String.raw`
      \frac{P}{Q},\qquad Q\ne0
    `,
    answer:
      "An algebraic fraction is a fraction whose numerator or denominator contains an algebraic expression.",
    explanation:
      "Its denominator must not be zero because division by zero is undefined.",
  },

  {
    id: "s2-c4-denominator-restriction",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "rule",
    prompt: "State the restriction on x.",
    questionFormula: String.raw`
      \frac{5}{x-3}
    `,
    formula: String.raw`
      \begin{aligned}
      x-3&\ne0\\
      x&\ne3
      \end{aligned}
    `,
    answer: "x ≠ 3.",
    explanation:
      "The denominator cannot equal zero, so x − 3 cannot be zero.",
  },

  {
    id: "s2-c4-simplify-monomial-fraction",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "formula",
    prompt: "Simplify the algebraic fraction.",
    questionFormula: String.raw`
      \frac{6x^2y}{9xy^2}
    `,
    formula: String.raw`
      \begin{aligned}
      \frac{6x^2y}{9xy^2}
        &=\frac{2\cdot3\cdot x\cdot x\cdot y}
                {3\cdot3\cdot x\cdot y\cdot y}\\
        &=\frac{2x}{3y}
      \end{aligned}
    `,
    answer: "2x/(3y).",
    explanation:
      "Cancel common factors in the numerator and denominator. The original denominator also requires x ≠ 0 and y ≠ 0.",
  },

  {
    id: "s2-c4-cancellation-common-error",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "rule",
    prompt: "Why can x not be cancelled here?",
    questionFormula: String.raw`
      \frac{x+2}{x}
    `,
    formula: String.raw`
      \frac{x+2}{x}
      =\frac{x}{x}+\frac{2}{x}
      =1+\frac{2}{x}
    `,
    answer:
      "Cancellation applies to common factors, not to separate terms joined by addition or subtraction.",
    explanation:
      "The numerator x + 2 is a sum, so x is not a factor of the entire numerator.",
  },

  {
    id: "s2-c4-multiply-algebraic-fractions",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "formula",
    prompt: "Multiply and simplify.",
    questionFormula: String.raw`
      \frac{3x}{4y}\times\frac{8y^2}{9x^2}
    `,
    formula: String.raw`
      \begin{aligned}
      \frac{3x}{4y}\times\frac{8y^2}{9x^2}
        &=\frac{24x y^2}{36x^2y}\\
        &=\frac{2y}{3x}
      \end{aligned}
    `,
    answer: "2y/(3x).",
    explanation:
      "Multiply the numerators and denominators, then cancel their common factors.",
  },

  {
    id: "s2-c4-divide-algebraic-fractions",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "formula",
    prompt: "Divide and simplify.",
    questionFormula: String.raw`
      \frac{2a}{5b}\div\frac{4a^2}{15b}
    `,
    formula: String.raw`
      \begin{aligned}
      \frac{2a}{5b}\div\frac{4a^2}{15b}
        &=\frac{2a}{5b}\times\frac{15b}{4a^2}\\
        &=\frac{3}{2a}
      \end{aligned}
    `,
    answer: "3/(2a).",
    explanation:
      "Change division into multiplication by the reciprocal of the second fraction, then simplify.",
  },

  {
    id: "s2-c4-add-same-denominator",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "formula",
    prompt: "Add and simplify.",
    questionFormula: String.raw`
      \frac{5a}{7b}+\frac{2a}{7b}
    `,
    formula: String.raw`
      \begin{aligned}
      \frac{5a}{7b}+\frac{2a}{7b}
        &=\frac{5a+2a}{7b}\\
        &=\frac{7a}{7b}\\
        &=\frac{a}{b}
      \end{aligned}
    `,
    answer: "a/b.",
    explanation:
      "When the denominators are the same, add the numerators and keep the common denominator.",
  },

  {
    id: "s2-c4-subtract-same-denominator",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "formula",
    prompt: "Subtract and simplify.",
    questionFormula: String.raw`
      \frac{8x}{5y}-\frac{3x}{5y}
    `,
    formula: String.raw`
      \begin{aligned}
      \frac{8x}{5y}-\frac{3x}{5y}
        &=\frac{8x-3x}{5y}\\
        &=\frac{5x}{5y}\\
        &=\frac{x}{y}
      \end{aligned}
    `,
    answer: "x/y.",
    explanation:
      "Subtract the numerators, keep the common denominator, and cancel the common factor 5.",
  },

  {
    id: "s2-c4-add-different-denominators",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "formula",
    prompt: "Add the fractions using a common denominator.",
    questionFormula: String.raw`
      \frac{1}{2x}+\frac{3}{5x}
    `,
    formula: String.raw`
      \begin{aligned}
      \frac{1}{2x}+\frac{3}{5x}
        &=\frac{5}{10x}+\frac{6}{10x}\\
        &=\frac{11}{10x}
      \end{aligned}
    `,
    answer: "11/(10x).",
    explanation:
      "The lowest common denominator of 2x and 5x is 10x.",
  },

  {
    id: "s2-c4-factor-before-cancelling",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Algebraic Fractions",
    type: "formula",
    prompt: "Factorise, then simplify.",
    questionFormula: String.raw`
      \frac{x^2-9}{x^2+3x}
    `,
    formula: String.raw`
      \begin{aligned}
      \frac{x^2-9}{x^2+3x}
        &=\frac{(x-3)(x+3)}{x(x+3)}\\
        &=\frac{x-3}{x}
      \end{aligned}
    `,
    answer: "(x − 3)/x, where x ≠ 0 and x ≠ −3.",
    explanation:
      "Factorise both expressions before cancelling the common factor x + 3. Restrictions come from the original denominator.",
  },

  // =========================================================
  // Chapter 4 · Section 2 · Formulae and Substitution
  // =========================================================

  {
    id: "s2-c4-formula-and-subject",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Formulae and Substitution",
    type: "definition",
    prompt: "What is the subject of this formula?",
    questionFormula: String.raw`
      P=2l+2w
    `,
    formula: String.raw`
      \boxed{P}=2l+2w
    `,
    answer: "P is the subject of the formula.",
    explanation:
      "The subject is the variable that stands alone on one side of the formula.",
  },

  {
    id: "s2-c4-substitute-positive-values",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Formulae and Substitution",
    type: "formula",
    prompt: "Find P when l = 8 and w = 5.",
    questionFormula: String.raw`
      P=2l+2w
    `,
    formula: String.raw`
      \begin{aligned}
      P&=2(8)+2(5)\\
       &=16+10\\
       &=26
      \end{aligned}
    `,
    answer: "P = 26.",
    explanation:
      "Replace l and w with their given values before carrying out the operations.",
  },

  {
    id: "s2-c4-substitute-negative-value",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Formulae and Substitution",
    type: "formula",
    prompt: "Find y when x = −3.",
    questionFormula: String.raw`
      y=2x^2-5x+1
    `,
    formula: String.raw`
      \begin{aligned}
      y&=2(-3)^2-5(-3)+1\\
       &=18+15+1\\
       &=34
      \end{aligned}
    `,
    answer: "y = 34.",
    explanation:
      "Put a negative substituted value inside brackets, especially when it is raised to a power.",
  },

  {
    id: "s2-c4-substitute-fractional-value",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Formulae and Substitution",
    type: "formula",
    prompt: "Find y when x = 3/2.",
    questionFormula: String.raw`
      y=4x-1
    `,
    formula: String.raw`
      \begin{aligned}
      y&=4\left(\frac{3}{2}\right)-1\\
       &=6-1\\
       &=5
      \end{aligned}
    `,
    answer: "y = 5.",
    explanation:
      "Substitute the entire fraction for x, then simplify before subtracting 1.",
  },

  {
    id: "s2-c4-substitute-speed-formula",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Formulae and Substitution",
    type: "formula",
    prompt: "Find v when u = 6, a = 4 and t = 3.",
    questionFormula: String.raw`
      v=u+at
    `,
    formula: String.raw`
      \begin{aligned}
      v&=6+(4)(3)\\
       &=6+12\\
       &=18
      \end{aligned}
    `,
    answer: "v = 18.",
    explanation:
      "Substitute each value into the correct variable and perform multiplication before addition.",
  },

  {
    id: "s2-c4-substitute-area-circle",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Formulae and Substitution",
    type: "formula",
    prompt: "Find A when r = 5. Give the exact answer.",
    questionFormula: String.raw`
      A=\pi r^2
    `,
    formula: String.raw`
      \begin{aligned}
      A&=\pi(5)^2\\
       &=25\pi
      \end{aligned}
    `,
    answer: "A = 25π square units.",
    explanation:
      "Square the radius before multiplying by π. Include square units for an area.",
  },

  {
    id: "s2-c4-substitution-order",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Formulae and Substitution",
    type: "rule",
    prompt: "What order should be followed when using a formula?",
    formula: String.raw`
      \text{Substitute}\;\longrightarrow\;
      \text{Calculate}\;\longrightarrow\;
      \text{State units}
    `,
    answer:
      "Write the formula, substitute the values carefully, calculate using the correct order of operations, and state the units when needed.",
    explanation:
      "Showing the substitution step makes negative values, powers and units easier to check.",
  },

  // =========================================================
  // Chapter 4 · Section 3 · Change of Subject of a Formula
  // =========================================================

  {
    id: "s2-c4-change-subject-definition",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Change of Subject of a Formula",
    type: "definition",
    prompt: "What does changing the subject of a formula mean?",
    formula: String.raw`
      y=3x+4
      \quad\Longleftrightarrow\quad
      x=\frac{y-4}{3}
    `,
    answer:
      "It means rearranging the formula so that a different variable stands alone on one side.",
    explanation:
      "Use inverse operations and perform the same operation on both sides of the formula.",
  },

  {
    id: "s2-c4-make-q-subject",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Change of Subject of a Formula",
    type: "formula",
    prompt: "Make Q the subject of the formula.",
    questionFormula: String.raw`
      P=5Q-8
    `,
    formula: String.raw`
      \begin{aligned}
      P&=5Q-8\\
      P+8&=5Q\\
      Q&=\frac{P+8}{5}
      \end{aligned}
    `,
    answer: "Q = (P + 8)/5.",
    explanation:
      "Add 8 to both sides, then divide both sides by 5.",
  },

  {
    id: "s2-c4-make-x-subject",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Change of Subject of a Formula",
    type: "formula",
    prompt: "Make x the subject of the formula.",
    questionFormula: String.raw`
      y=3x+4
    `,
    formula: String.raw`
      \begin{aligned}
      y&=3x+4\\
      y-4&=3x\\
      x&=\frac{y-4}{3}
      \end{aligned}
    `,
    answer: "x = (y − 4)/3.",
    explanation:
      "Subtract 4 from both sides, then divide both sides by 3.",
  },

  {
    id: "s2-c4-make-width-subject",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Change of Subject of a Formula",
    type: "formula",
    prompt: "Make w the subject of the formula.",
    questionFormula: String.raw`
      A=lw
    `,
    formula: String.raw`
      \begin{aligned}
      A&=lw\\
      w&=\frac{A}{l}
      \end{aligned}
    `,
    answer: "w = A/l.",
    explanation:
      "Divide both sides by l to leave w alone, where l ≠ 0.",
  },

  {
    id: "s2-c4-make-time-subject",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Change of Subject of a Formula",
    type: "formula",
    prompt: "Make t the subject of the formula.",
    questionFormula: String.raw`
      v=u+at
    `,
    formula: String.raw`
      \begin{aligned}
      v&=u+at\\
      v-u&=at\\
      t&=\frac{v-u}{a}
      \end{aligned}
    `,
    answer: "t = (v − u)/a.",
    explanation:
      "Subtract u from both sides, then divide both sides by a, where a ≠ 0.",
  },

  {
    id: "s2-c4-make-width-perimeter-subject",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Change of Subject of a Formula",
    type: "formula",
    prompt: "Make w the subject of the formula.",
    questionFormula: String.raw`
      P=2(l+w)
    `,
    formula: String.raw`
      \begin{aligned}
      P&=2(l+w)\\
      \frac{P}{2}&=l+w\\
      w&=\frac{P}{2}-l
      \end{aligned}
    `,
    answer: "w = P/2 − l.",
    explanation:
      "Divide both sides by 2 first, then subtract l from both sides.",
  },

  {
    id: "s2-c4-make-denominator-subject",
    level: "s2",
    chapter: 4,
    chapterTitle: "Algebraic Fractions and Formulae",
    section: "Change of Subject of a Formula",
    type: "formula",
    prompt: "Make n the subject of the formula.",
    questionFormula: String.raw`
      k=\frac{m}{n}
    `,
    formula: String.raw`
      \begin{aligned}
      k&=\frac{m}{n}\\
      kn&=m\\
      n&=\frac{m}{k}
      \end{aligned}
    `,
    answer: "n = m/k.",
    explanation:
      "Multiply both sides by n, then divide both sides by k, where k ≠ 0.",
  },

  // =========================================================
  // Chapter 5 · Section 1 · Concept of Linear Equations
  // =========================================================

  {
    id: "s2-c5-linear-equation-definition",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Concept of Linear Equations in Two Unknowns",
    type: "definition",
    prompt: "What is a linear equation in two unknowns?",
    formula: String.raw`
      ax+by=c
    `,
    answer:
      "It is an equation containing two unknowns whose highest powers are both 1.",
    explanation:
      "The constants a and b cannot both be zero. Its graph is a straight line.",
  },

  {
    id: "s2-c5-standard-form",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Concept of Linear Equations in Two Unknowns",
    type: "formula",
    prompt: "State the general form of a linear equation in x and y.",
    formula: String.raw`
      ax+by=c
      \qquad
      (a\text{ and }b\text{ are not both }0)
    `,
    answer: "ax + by = c, where a and b are not both zero.",
    explanation:
      "Each unknown has power 1, and there are no terms such as x², y² or xy.",
  },

  {
    id: "s2-c5-recognise-nonlinear",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Concept of Linear Equations in Two Unknowns",
    type: "rule",
    prompt: "Which of these equations is not linear?",
    questionFormula: String.raw`
      2x+3y=8
      \qquad
      x^2+y=8
    `,
    formula: String.raw`
      \boxed{x^2+y=8}
    `,
    answer: "x² + y = 8 is not linear.",
    explanation:
      "The highest power of x is 2. In a linear equation, every unknown has highest power 1.",
  },

  {
    id: "s2-c5-check-ordered-pair",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Concept of Linear Equations in Two Unknowns",
    type: "formula",
    prompt: "Is (3, 2) a solution of the equation?",
    questionFormula: String.raw`
      2x+3y=12
    `,
    formula: String.raw`
      \begin{aligned}
      2(3)+3(2)&=6+6\\
      &=12
      \end{aligned}
    `,
    answer: "Yes. The ordered pair (3, 2) is a solution.",
    explanation:
      "Substituting x = 3 and y = 2 makes the left-hand side equal to the right-hand side.",
  },

  {
    id: "s2-c5-many-solutions-one-equation",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Concept of Linear Equations in Two Unknowns",
    type: "rule",
    prompt: "How many solutions can one linear equation in two unknowns have?",
    questionFormula: String.raw`
      2x+y=6
    `,
    formula: String.raw`
      (0,6),\ (1,4),\ (2,2),\ (3,0),\ldots
    `,
    answer: "It has infinitely many ordered-pair solutions.",
    explanation:
      "Every point on the corresponding straight line is a solution of the equation.",
  },

  {
    id: "s2-c5-graph-of-linear-equation",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Concept of Linear Equations in Two Unknowns",
    type: "definition",
    prompt: "What does the graph of a linear equation in two unknowns look like?",
    formula: String.raw`
      ax+by=c
      \quad\longrightarrow\quad
      \text{a straight line}
    `,
    answer: "Its graph is a straight line.",
    explanation:
      "Each point on the line is an ordered pair that satisfies the equation.",
  },

  // =========================================================
  // Chapter 5 · Section 2 · Graphical Method
  // =========================================================

  {
    id: "s2-c5-simultaneous-equations-definition",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Graphical Method",
    type: "definition",
    prompt: "What is a solution of two simultaneous linear equations?",
    formula: String.raw`
      \begin{cases}
      a_1x+b_1y=c_1\\
      a_2x+b_2y=c_2
      \end{cases}
    `,
    answer:
      "It is an ordered pair that satisfies both equations at the same time.",
    explanation:
      "Graphically, it is the point shared by both straight-line graphs.",
  },

  {
    id: "s2-c5-graphical-intersection",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Graphical Method",
    type: "rule",
    prompt: "How is the graphical solution of simultaneous equations found?",
    formula: String.raw`
      \text{solution}=\text{point of intersection}
    `,
    answer: "Read the coordinates of the point where the two lines intersect.",
    explanation:
      "The intersection lies on both lines, so its coordinates satisfy both equations.",
  },

  {
    id: "s2-c5-find-intersection",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Graphical Method",
    type: "formula",
    prompt: "Find the point of intersection.",
    questionFormula: String.raw`
      \begin{cases}
      y=x+1\\
      y=-x+5
      \end{cases}
    `,
    formula: String.raw`
      \begin{aligned}
      x+1&=-x+5\\
      2x&=4\\
      x&=2,\quad y=3
      \end{aligned}
    `,
    answer: "The point of intersection is (2, 3).",
    explanation:
      "Both straight lines pass through (2, 3), so this ordered pair satisfies both equations.",
  },

  {
    id: "s2-c5-graphing-steps",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Graphical Method",
    type: "rule",
    prompt: "What are the main steps in the graphical method?",
    formula: String.raw`
      \text{table}\to\text{plot}\to\text{lines}\to\text{intersection}
    `,
    answer:
      "Make value tables, plot points, draw both straight lines, and read their intersection.",
    explanation:
      "Use the same axes and scale for both lines and plot at least two accurate points per line.",
  },

  {
    id: "s2-c5-parallel-lines",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Graphical Method",
    type: "definition",
    prompt: "What does it mean if the two graphs are different parallel lines?",
    formula: String.raw`
      \text{parallel lines}\quad\Rightarrow\quad\text{no intersection}
    `,
    answer: "The simultaneous equations have no solution.",
    explanation:
      "Different parallel lines never meet, so no ordered pair satisfies both equations.",
  },

  {
    id: "s2-c5-coincident-lines",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Graphical Method",
    type: "definition",
    prompt: "What does it mean if both equations produce the same line?",
    formula: String.raw`
      \text{same line}\quad\Rightarrow\quad\text{infinitely many intersections}
    `,
    answer: "The simultaneous equations have infinitely many solutions.",
    explanation:
      "Every point on the shared line satisfies both equivalent equations.",
  },

  // =========================================================
  // Chapter 5 · Section 3 · Algebraic Methods
  // =========================================================

  {
    id: "s2-c5-substitution-method",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Algebraic Methods",
    type: "rule",
    prompt: "When is the substitution method especially useful?",
    questionFormula: String.raw`
      x=y+2
    `,
    formula: String.raw`
      x=y+2
      \quad\Rightarrow\quad
      \text{substitute }y+2\text{ for }x
    `,
    answer:
      "It is useful when one unknown is already isolated or can easily be isolated.",
    explanation:
      "Replace that unknown in the other equation, solve, and then substitute back.",
  },

  {
    id: "s2-c5-solve-by-substitution",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Algebraic Methods",
    type: "formula",
    prompt: "Solve by substitution.",
    questionFormula: String.raw`
      \begin{cases}
      x=y+2\\
      x+y=8
      \end{cases}
    `,
    formula: String.raw`
      \begin{aligned}
      (y+2)+y&=8\\
      2y&=6\\
      y&=3,\quad x=5
      \end{aligned}
    `,
    answer: "x = 5 and y = 3.",
    explanation:
      "Substitute y + 2 for x in the second equation, solve for y, and then find x.",
  },

  {
    id: "s2-c5-elimination-method",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Algebraic Methods",
    type: "rule",
    prompt: "What is the main idea of the elimination method?",
    formula: String.raw`
      (+y)+(-y)=0
    `,
    answer:
      "Add or subtract the equations so that one unknown is cancelled.",
    explanation:
      "After one unknown is eliminated, solve for the remaining unknown and substitute back.",
  },

  {
    id: "s2-c5-solve-by-elimination",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Algebraic Methods",
    type: "formula",
    prompt: "Solve by elimination.",
    questionFormula: String.raw`
      \begin{cases}
      2x+y=11\\
      x-y=1
      \end{cases}
    `,
    formula: String.raw`
      \begin{aligned}
      3x&=12\\
      x&=4\\
      y&=3
      \end{aligned}
    `,
    answer: "x = 4 and y = 3.",
    explanation:
      "Add the equations to eliminate y. Then substitute x = 4 into either original equation.",
  },

  {
    id: "s2-c5-multiply-before-eliminating",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Algebraic Methods",
    type: "rule",
    prompt: "What should you do if no unknown cancels immediately?",
    questionFormula: String.raw`
      \begin{cases}
      2x+3y=12\\
      x+y=5
      \end{cases}
    `,
    formula: String.raw`
      2(x+y=5)
      \quad\Rightarrow\quad
      2x+2y=10
    `,
    answer:
      "Multiply one or both entire equations to create equal or opposite coefficients.",
    explanation:
      "Every term on both sides of an equation must be multiplied by the same number.",
  },

  {
    id: "s2-c5-algebra-no-solution",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Algebraic Methods",
    type: "formula",
    prompt: "What does this elimination result mean?",
    questionFormula: String.raw`
      0=1
    `,
    formula: String.raw`
      0=1\quad\text{is impossible}
    `,
    answer: "The simultaneous equations have no solution.",
    explanation:
      "A contradiction means the original equations represent different parallel lines.",
  },

  {
    id: "s2-c5-algebra-infinite-solutions",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Algebraic Methods",
    type: "formula",
    prompt: "What does this elimination result usually mean?",
    questionFormula: String.raw`
      0=0
    `,
    formula: String.raw`
      0=0\quad\text{is always true}
    `,
    answer: "The equations are equivalent and have infinitely many solutions.",
    explanation:
      "Both original equations represent the same straight line.",
  },

  // =========================================================
  // Chapter 5 · Section 4 · Applications
  // =========================================================

  {
    id: "s2-c5-application-four-steps",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Applications",
    type: "rule",
    prompt: "What are the four main steps for an application problem?",
    formula: String.raw`
      \text{define}\to\text{form}\to\text{solve}\to\text{interpret}
    `,
    answer:
      "Define the unknowns, form two equations, solve them, and interpret the answer in context.",
    explanation:
      "Finish by checking the values and including any required units.",
  },

  {
    id: "s2-c5-define-unknowns",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Applications",
    type: "rule",
    prompt: "How should unknowns be introduced in a word problem?",
    formula: String.raw`
      \text{Let }a=\text{adult ticket price,}\quad
      c=\text{child ticket price.}
    `,
    answer:
      "State clearly what each letter represents and include its unit where appropriate.",
    explanation:
      "Clear definitions make it easier to form equations and interpret the final values.",
  },

  {
    id: "s2-c5-form-sum-difference-equations",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Applications",
    type: "formula",
    prompt: "Form two equations: the sum is 25 and the difference is 7.",
    questionFormula: String.raw`
      \text{larger number }=a,
      \qquad
      \text{smaller number }=b
    `,
    formula: String.raw`
      \begin{cases}
      a+b=25\\
      a-b=7
      \end{cases}
    `,
    answer: "a + b = 25 and a − b = 7.",
    explanation:
      "Because a is defined as the larger number, the difference is written as a − b.",
  },

  {
    id: "s2-c5-solve-number-application",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Applications",
    type: "formula",
    prompt: "Find the two numbers.",
    questionFormula: String.raw`
      \begin{cases}
      a+b=25\\
      a-b=7
      \end{cases}
    `,
    formula: String.raw`
      \begin{aligned}
      2a&=32\\
      a&=16\\
      b&=9
      \end{aligned}
    `,
    answer: "The numbers are 16 and 9.",
    explanation:
      "Add the equations to eliminate b, then substitute a = 16 to find b = 9.",
  },

  {
    id: "s2-c5-form-price-equations",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Applications",
    type: "formula",
    prompt: "Form equations for this price problem.",
    questionFormula: String.raw`
      \begin{aligned}
      &2\text{ notebooks}+1\text{ pen}=\pounds11\\
      &1\text{ notebook}+1\text{ pen}=\pounds7
      \end{aligned}
    `,
    formula: String.raw`
      \begin{cases}
      2n+p=11\\
      n+p=7
      \end{cases}
    `,
    answer: "2n + p = 11 and n + p = 7.",
    explanation:
      "Here n is the price of one notebook and p is the price of one pen, both measured in pounds.",
  },

  {
    id: "s2-c5-interpret-application-answer",
    level: "s2",
    chapter: 5,
    chapterTitle: "Linear Equations in Two Unknowns",
    section: "Applications",
    type: "rule",
    prompt: "How should the final answer to an application problem be written?",
    formula: String.raw`
      n=4,\ p=3
      \quad\Rightarrow\quad
      \text{notebook }\pounds4,\ \text{pen }\pounds3
    `,
    answer:
      "Write a complete statement that identifies each value and includes the correct units.",
    explanation:
      "Check that the values satisfy both equations and are sensible in the original context.",
  },
];
