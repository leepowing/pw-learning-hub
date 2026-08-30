import type { MathsFlashcard } from "./types";

export const s1Flashcards: MathsFlashcard[] = [
  // Chapter 1 flashcards are merged below. Existing Chapters 5 and 6 are preserved.
  // =========================================================
  // Chapter 1 · Section 1 · Review on Types of Numbers
  // =========================================================

  {
    id: "s1-c1-number-families",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Review on Types of Numbers",
    type: "definition",
    prompt: "How are natural numbers, whole numbers and integers related?",
    formula: String.raw`
      \mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}
    `,
    answer:
      "Natural numbers are positive counting numbers; whole numbers also include 0; integers also include negative whole numbers.",
    explanation:
      "Every natural number is whole, and every whole number is an integer, but the reverse statements are not always true.",
  },

  {
    id: "s1-c1-even-odd",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Review on Types of Numbers",
    type: "rule",
    prompt: "How can an integer be classified as even or odd?",
    formula: String.raw`
      \text{even: }n=2k
      \qquad
      \text{odd: }n=2k+1
    `,
    answer:
      "An even integer is divisible by 2; an odd integer leaves remainder 1 when divided by 2.",
    explanation:
      "The units digit of an even integer is 0, 2, 4, 6 or 8. The units digit of an odd integer is 1, 3, 5, 7 or 9.",
  },

  {
    id: "s1-c1-prime-composite",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Review on Types of Numbers",
    type: "definition",
    prompt: "What is the difference between a prime and a composite number?",
    formula: String.raw`
      \begin{aligned}
      29&:\ 1,29\\
      30&:\ 1,2,3,5,6,10,15,30
      \end{aligned}
    `,
    answer:
      "A prime number has exactly two positive factors. A composite number has more than two positive factors.",
    explanation:
      "The number 1 is neither prime nor composite, and 2 is the only even prime number.",
  },

  {
    id: "s1-c1-fraction-types",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Review on Types of Numbers",
    type: "definition",
    prompt: "How are proper fractions, improper fractions and mixed numbers identified?",
    formula: String.raw`
      \frac{3}{5}\qquad\frac{8}{5}\qquad1\frac{3}{5}
    `,
    answer:
      "A proper fraction has numerator smaller than denominator; an improper fraction has numerator at least as large; a mixed number combines a whole number and a proper fraction.",
    explanation:
      "An improper fraction can be converted to a whole or mixed number by division.",
  },

  // =========================================================
  // Chapter 1 · Section 2 · The Four Basic Arithmetic Operations
  // =========================================================

  {
    id: "s1-c1-operation-vocabulary",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "The Four Basic Arithmetic Operations",
    type: "definition",
    prompt: "What are the results of the four arithmetic operations called?",
    formula: String.raw`
      \begin{aligned}
      a+b&=\text{sum}\\
      a-b&=\text{difference}\\
      a\times b&=\text{product}\\
      a\div b&=\text{quotient}
      \end{aligned}
    `,
    answer: "Sum, difference, product and quotient.",
    explanation:
      "These terms describe the result produced by addition, subtraction, multiplication and division respectively.",
  },

  {
    id: "s1-c1-order-of-operations",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "The Four Basic Arithmetic Operations",
    type: "rule",
    prompt: "What is the correct order of arithmetic operations?",
    formula: String.raw`
      \boxed{(\ )}\ \longrightarrow\
      \boxed{\times\ \div}\ \longrightarrow\
      \boxed{+\ -}
    `,
    answer:
      "Brackets first; then multiplication and division; then addition and subtraction.",
    explanation:
      "For operations with equal priority, calculate from left to right.",
  },

  {
    id: "s1-c1-left-to-right",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "The Four Basic Arithmetic Operations",
    type: "formula",
    prompt: "Evaluate the expression using equal-priority operations correctly.",
    questionFormula: String.raw`
      48\div6\times2
    `,
    formula: String.raw`
      48\div6\times2=8\times2=16
    `,
    answer: "16.",
    explanation:
      "Division and multiplication have equal priority, so work from left to right.",
  },

  {
    id: "s1-c1-inverse-operations",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "The Four Basic Arithmetic Operations",
    type: "rule",
    prompt: "Which pairs are inverse operations?",
    formula: String.raw`
      18+7=25\iff25-7=18
      \qquad
      8\times6=48\iff48\div6=8
    `,
    answer:
      "Addition and subtraction are inverse operations; multiplication and division are inverse operations.",
    explanation:
      "An inverse operation reverses the effect of the original operation and can be used to check an answer.",
  },

  {
    id: "s1-c1-identities-zero",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "The Four Basic Arithmetic Operations",
    type: "rule",
    prompt: "What are the identity and zero rules for arithmetic?",
    formula: String.raw`
      n+0=n\qquad n\times1=n\qquad n\times0=0
    `,
    answer:
      "Adding 0 or multiplying by 1 leaves a number unchanged; multiplying by 0 gives 0; division by 0 is undefined.",
    explanation:
      "Zero is the additive identity, and one is the multiplicative identity.",
  },

  // =========================================================
  // Chapter 1 · Section 3 · Divisibility
  // =========================================================

  {
    id: "s1-c1-divisibility-2-5-10",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Divisibility",
    type: "rule",
    prompt: "What are the divisibility tests for 2, 5 and 10?",
    formula: String.raw`
      \begin{aligned}
      2&:\ 0,2,4,6,8\\
      5&:\ 0\text{ or }5\\
      10&:\ 0
      \end{aligned}
    `,
    answer:
      "Check the units digit: even for 2, 0 or 5 for 5, and 0 for 10.",
    explanation:
      "Only the units digit is needed for these three divisibility tests.",
  },

  {
    id: "s1-c1-divisibility-3-9",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Divisibility",
    type: "rule",
    prompt: "What are the divisibility tests for 3 and 9?",
    formula: String.raw`
      7236:\quad7+2+3+6=18
    `,
    answer:
      "Add all the digits. The number is divisible by 3 or 9 when its digit sum is divisible by 3 or 9 respectively.",
    explanation:
      "Since 18 is divisible by both 3 and 9, 7,236 is divisible by both 3 and 9.",
  },

  {
    id: "s1-c1-divisibility-4-8",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Divisibility",
    type: "rule",
    prompt: "What are the divisibility tests for 4 and 8?",
    formula: String.raw`
      \begin{aligned}
      3716&:\ 16\div4=4\\
      12184&:\ 184\div8=23
      \end{aligned}
    `,
    answer:
      "For 4, test the number formed by the last two digits. For 8, test the number formed by the last three digits.",
    explanation:
      "Digits further to the left do not affect these tests.",
  },

  {
    id: "s1-c1-divisibility-6",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Divisibility",
    type: "rule",
    prompt: "When is a number divisible by 6?",
    formula: String.raw`
      6=2\times3
    `,
    answer: "A number is divisible by 6 when it is divisible by both 2 and 3.",
    explanation:
      "It must be even and its digit sum must be divisible by 3. Passing only one test is not enough.",
  },

  {
    id: "s1-c1-missing-divisibility-digit",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Divisibility",
    type: "formula",
    prompt: "Find all digits represented by the box.",
    questionFormula: String.raw`
      47\square\text{ is divisible by }3
    `,
    formula: String.raw`
      4+7+\square=11+\square
      \quad\Rightarrow\quad
      \square=1\text{ or }7
    `,
    answer: "1 or 7.",
    explanation:
      "The possible digit sums are 12 and 18, which are both divisible by 3.",
  },

  // =========================================================
  // Chapter 1 · Section 4 · H.C.F. and L.C.M.
  // =========================================================

  {
    id: "s1-c1-factor-multiple",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Highest Common Factor and Lowest Common Multiple",
    type: "definition",
    prompt: "How are factors and multiples related?",
    formula: String.raw`
      7\times8=56
    `,
    answer:
      "7 and 8 are factors of 56; 56 is a multiple of both 7 and 8.",
    explanation:
      "A factor divides a number exactly, while a multiple is produced by multiplication.",
  },

  {
    id: "s1-c1-hcf-definition",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Highest Common Factor and Lowest Common Multiple",
    type: "definition",
    prompt: "What is the H.C.F.?",
    formula: String.raw`
      \operatorname{HCF}(12,18)=6
    `,
    answer:
      "The highest common factor is the greatest positive factor shared by all the given numbers.",
    explanation:
      "The common factors of 12 and 18 are 1, 2, 3 and 6, so their H.C.F. is 6.",
  },

  {
    id: "s1-c1-lcm-definition",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Highest Common Factor and Lowest Common Multiple",
    type: "definition",
    prompt: "What is the L.C.M.?",
    formula: String.raw`
      \operatorname{LCM}(12,18)=36
    `,
    answer:
      "The lowest common multiple is the smallest positive multiple shared by all the given numbers.",
    explanation:
      "36 is the first positive number that appears in both lists of multiples.",
  },

  {
    id: "s1-c1-hcf-prime-factors",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Highest Common Factor and Lowest Common Multiple",
    type: "formula",
    prompt: "Find the H.C.F. using prime factorization.",
    questionFormula: String.raw`
      72=2^3\times3^2
      \qquad
      90=2\times3^2\times5
    `,
    formula: String.raw`
      \operatorname{HCF}(72,90)=2\times3^2=18
    `,
    answer: "18.",
    explanation:
      "For the H.C.F., use only the common prime factors with the smaller powers.",
  },

  {
    id: "s1-c1-lcm-prime-factors",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Highest Common Factor and Lowest Common Multiple",
    type: "formula",
    prompt: "Find the L.C.M. and recall the product check.",
    questionFormula: String.raw`
      72=2^3\times3^2
      \qquad
      90=2\times3^2\times5
    `,
    formula: String.raw`
      \begin{aligned}
      \operatorname{LCM}(72,90)&=2^3\times3^2\times5=360\\
      \operatorname{HCF}(a,b)\operatorname{LCM}(a,b)&=ab
      \end{aligned}
    `,
    answer: "360; for two positive integers, H.C.F. × L.C.M. = their product.",
    explanation:
      "For the L.C.M., include every required prime factor with the larger power.",
  },

  // =========================================================
  // Chapter 1 · Section 5 · Operations of Fractions and Decimals
  // =========================================================

  {
    id: "s1-c1-add-subtract-fractions",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Operations of Fractions and Decimals",
    type: "rule",
    prompt: "How are fractions added or subtracted?",
    formula: String.raw`
      \frac{a}{m}\pm\frac{b}{m}=\frac{a\pm b}{m}
    `,
    answer:
      "Rewrite the fractions with a common denominator, then add or subtract the numerators.",
    explanation:
      "The denominator describes the size of each part, so it stays unchanged after the parts have equal size.",
  },

  {
    id: "s1-c1-multiply-fractions",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Operations of Fractions and Decimals",
    type: "formula",
    prompt: "How are fractions multiplied?",
    formula: String.raw`
      \frac{a}{b}\times\frac{c}{d}=\frac{ac}{bd}
    `,
    answer:
      "Convert mixed numbers to improper fractions, cancel common factors, then multiply numerators and denominators.",
    explanation:
      "Cancelling before multiplication keeps the numbers small and gives the simplest result more efficiently.",
  },

  {
    id: "s1-c1-divide-fractions",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Operations of Fractions and Decimals",
    type: "formula",
    prompt: "How are fractions divided?",
    formula: String.raw`
      \frac{a}{b}\div\frac{c}{d}
      =\frac{a}{b}\times\frac{d}{c}
    `,
    answer: "Keep the first fraction and multiply by the reciprocal of the divisor.",
    explanation:
      "Only the second fraction is inverted. The divisor must not equal zero.",
  },

  {
    id: "s1-c1-decimal-add-subtract",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Operations of Fractions and Decimals",
    type: "rule",
    prompt: "What is the key rule for adding or subtracting decimals?",
    formula: String.raw`
      8.40-2.75=5.65
    `,
    answer: "Align the decimal points and match place values before calculating.",
    explanation:
      "Placeholder zeros may be added to the right of a decimal without changing its value.",
  },

  {
    id: "s1-c1-decimal-multiply-divide",
    level: "s1",
    chapter: 1,
    chapterTitle: "Basic Computation",
    section: "Operations of Fractions and Decimals",
    type: "rule",
    prompt: "How are decimal multiplication and division handled?",
    formula: String.raw`
      1.2\times0.35=0.42
      \qquad
      4.68\div0.6=46.8\div6=7.8
    `,
    answer:
      "For multiplication, count the total decimal places. For division, multiply both numbers by the same power of 10 until the divisor is whole.",
    explanation:
      "Estimate first to check that the final decimal point gives a reasonable answer.",
  },
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

  // =========================================================
  // Chapter 2 · Section 1 · Directed Numbers and Number Line
  // =========================================================

  {
    id: "s1-c2-directed-numbers",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Directed Numbers and Number Line",
    type: "definition",
    prompt: "What are directed numbers?",
    formula: String.raw`-8\qquad0\qquad+5`,
    answer: "Positive numbers, negative numbers and zero are called directed numbers.",
    explanation: "Their signs show direction or change relative to zero.",
  },
  {
    id: "s1-c2-positive-negative-context",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Directed Numbers and Number Line",
    type: "rule",
    prompt: "How are opposite changes represented by directed numbers?",
    formula: String.raw`\text{gain }5\text{ kg}=+5\text{ kg}\qquad\text{loss }2\text{ kg}=-2\text{ kg}`,
    answer: "Use positive and negative signs to represent changes in opposite directions.",
    explanation: "Other examples include deposits and withdrawals, rises and falls, and heights above and below sea level.",
  },
  {
    id: "s1-c2-opposite-numbers",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Directed Numbers and Number Line",
    type: "definition",
    prompt: "What are opposite numbers?",
    formula: String.raw`a\text{ and }-a\qquad5\text{ and }-5`,
    answer: "Opposite numbers have the same distance from zero but different signs.",
    explanation: "Their sum is zero. Zero is its own opposite.",
  },
  {
    id: "s1-c2-absolute-value",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Directed Numbers and Number Line",
    type: "definition",
    prompt: "What does absolute value mean?",
    formula: String.raw`|-7|=7\qquad|4|=4`,
    answer: "The absolute value of a number is its distance from zero, so it is never negative.",
    explanation: "Opposite numbers have the same absolute value.",
  },
  {
    id: "s1-c2-number-line-order",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Directed Numbers and Number Line",
    type: "rule",
    prompt: "How are numbers ordered on a horizontal number line?",
    formula: String.raw`-7<-2<0<3<6`,
    answer: "Numbers increase from left to right.",
    explanation: "A number farther to the right is greater; a number farther to the left is smaller.",
  },
  {
    id: "s1-c2-compare-negative-numbers",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Directed Numbers and Number Line",
    type: "rule",
    prompt: "How do you compare two negative numbers?",
    formula: String.raw`-3>-8`,
    answer: "The negative number closer to zero is greater.",
    explanation: "Although 8 has the larger magnitude, −8 lies farther left than −3 on the number line.",
  },
  {
    id: "s1-c2-ascending-order",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Directed Numbers and Number Line",
    type: "rule",
    prompt: "What do ascending and descending order mean?",
    formula: String.raw`\begin{aligned}\text{ascending: }&-4,-1,0,3\\\text{descending: }&3,0,-1,-4\end{aligned}`,
    answer: "Ascending means smallest to greatest; descending means greatest to smallest.",
    explanation: "Use a number line to check the order when negative numbers are included.",
  },
  {
    id: "s1-c2-directed-number-signs",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Directed Numbers and Number Line",
    type: "rule",
    prompt: "When may the positive sign be omitted?",
    formula: String.raw`+6=6\qquad-6\ne6`,
    answer: "The positive sign may be omitted, but the negative sign must be written.",
    explanation: "A number written without a sign is normally understood to be positive.",
  },

  // =========================================================
  // Chapter 2 · Section 2 · Addition and Subtraction
  // =========================================================

  {
    id: "s1-c2-remove-positive-brackets",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Addition and Subtraction of Directed Numbers",
    type: "rule",
    prompt: "How are brackets removed when a positive number is added or subtracted?",
    formula: String.raw`x+(+a)=x+a\qquad x-(+a)=x-a`,
    answer: "Adding a positive keeps the operation as addition; subtracting a positive keeps it as subtraction.",
    explanation: "The outside operation and the positive sign combine without changing the operation.",
  },
  {
    id: "s1-c2-remove-negative-brackets",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Addition and Subtraction of Directed Numbers",
    type: "rule",
    prompt: "How are brackets removed when a negative number is added or subtracted?",
    formula: String.raw`x+(-a)=x-a\qquad x-(-a)=x+a`,
    answer: "Adding a negative becomes subtraction; subtracting a negative becomes addition.",
    explanation: "Subtracting a number means adding its opposite.",
  },
  {
    id: "s1-c2-add-same-sign",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Addition and Subtraction of Directed Numbers",
    type: "rule",
    prompt: "How do you add directed numbers with the same sign?",
    formula: String.raw`(-7)+(-5)=-(7+5)=-12`,
    answer: "Add their absolute values and keep the common sign.",
    explanation: "The same rule applies to two positive numbers, whose sum remains positive.",
  },
  {
    id: "s1-c2-add-different-signs",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Addition and Subtraction of Directed Numbers",
    type: "rule",
    prompt: "How do you add directed numbers with different signs?",
    formula: String.raw`(-9)+(+4)=-(9-4)=-5`,
    answer: "Subtract the smaller absolute value from the larger and keep the sign of the number with the larger absolute value.",
    explanation: "The signs show that the two numbers act in opposite directions.",
  },
  {
    id: "s1-c2-subtraction-opposite",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Addition and Subtraction of Directed Numbers",
    type: "formula",
    prompt: "Rewrite the subtraction as addition of the opposite.",
    questionFormula: String.raw`6-(-8)`,
    formula: String.raw`6-(-8)=6+(+8)=14`,
    answer: "14.",
    explanation: "The opposite of −8 is +8, so subtracting −8 is the same as adding 8.",
  },
  {
    id: "s1-c2-number-line-addition",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Addition and Subtraction of Directed Numbers",
    type: "rule",
    prompt: "How can addition be shown on a number line?",
    formula: String.raw`-2+(+5)=3\qquad4+(-6)=-2`,
    answer: "Start at the first number; move right for a positive addend and left for a negative addend.",
    explanation: "The endpoint gives the sum.",
  },
  {
    id: "s1-c2-add-subtract-decimals",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Addition and Subtraction of Directed Numbers",
    type: "formula",
    prompt: "Evaluate the directed-decimal calculation.",
    questionFormula: String.raw`-4.8+1.35`,
    formula: String.raw`-4.8+1.35=-(4.80-1.35)=-3.45`,
    answer: "−3.45.",
    explanation: "Align decimal places, compare absolute values and keep the sign of the larger absolute value.",
  },
  {
    id: "s1-c2-add-subtract-mixed",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Addition and Subtraction of Directed Numbers",
    type: "formula",
    prompt: "Evaluate the mixed addition and subtraction.",
    questionFormula: String.raw`-7-(-3)+(-5)`,
    formula: String.raw`-7+3-5=-4-5=-9`,
    answer: "−9.",
    explanation: "Remove the brackets first, then calculate from left to right.",
  },

  // =========================================================
  // Chapter 2 · Section 3 · Multiplication and Division
  // =========================================================

  {
    id: "s1-c2-multiply-same-sign",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Multiplication and Division of Directed Numbers",
    type: "rule",
    prompt: "What sign is produced when two directed numbers with the same sign are multiplied?",
    formula: String.raw`(+a)(+b)=+ab\qquad(-a)(-b)=+ab`,
    answer: "The product is positive.",
    explanation: "Two equal signs give a positive result.",
  },
  {
    id: "s1-c2-multiply-different-sign",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Multiplication and Division of Directed Numbers",
    type: "rule",
    prompt: "What sign is produced when two directed numbers with different signs are multiplied?",
    formula: String.raw`(-a)(+b)=-ab\qquad(+a)(-b)=-ab`,
    answer: "The product is negative.",
    explanation: "Two different signs give a negative result.",
  },
  {
    id: "s1-c2-division-sign-rule",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Multiplication and Division of Directed Numbers",
    type: "rule",
    prompt: "What are the sign rules for division?",
    formula: String.raw`\frac{+a}{+b}=+\frac ab\quad\frac{-a}{-b}=+\frac ab\quad\frac{-a}{+b}=-\frac ab\quad\frac{+a}{-b}=-\frac ab`,
    answer: "Equal signs give a positive quotient; different signs give a negative quotient.",
    explanation: "The divisor must not equal zero.",
  },
  {
    id: "s1-c2-product-many-negatives",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Multiplication and Division of Directed Numbers",
    type: "rule",
    prompt: "How does the number of negative factors determine the sign of a product?",
    formula: String.raw`\text{even number of negatives}\Rightarrow+\qquad\text{odd number of negatives}\Rightarrow-`,
    answer: "An even number of negative factors gives a positive product; an odd number gives a negative product.",
    explanation: "Pair the negative signs: each pair produces a positive sign.",
  },
  {
    id: "s1-c2-multiply-example",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Multiplication and Division of Directed Numbers",
    type: "formula",
    prompt: "Evaluate the product.",
    questionFormula: String.raw`(-4)(-3)(-2)`,
    formula: String.raw`(-4)(-3)(-2)=12(-2)=-24`,
    answer: "−24.",
    explanation: "There are three negative factors, so the product is negative; 4 × 3 × 2 = 24.",
  },
  {
    id: "s1-c2-division-example",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Multiplication and Division of Directed Numbers",
    type: "formula",
    prompt: "Evaluate the quotient.",
    questionFormula: String.raw`(-63)\div(+9)`,
    formula: String.raw`(-63)\div(+9)=-7`,
    answer: "−7.",
    explanation: "Different signs give a negative quotient, and 63 ÷ 9 = 7.",
  },
  {
    id: "s1-c2-mixed-operation-order",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Multiplication and Division of Directed Numbers",
    type: "rule",
    prompt: "What is the order for mixed operations with directed numbers?",
    formula: String.raw`(\ )\longrightarrow\times\ \div\longrightarrow+\ -`,
    answer: "Calculate brackets first, then multiplication and division, then addition and subtraction.",
    explanation: "Operations with equal priority are performed from left to right.",
  },
  {
    id: "s1-c2-mixed-operation-example",
    level: "s1",
    chapter: 2,
    chapterTitle: "Directed Numbers",
    section: "Multiplication and Division of Directed Numbers",
    type: "formula",
    prompt: "Evaluate the mixed operation.",
    questionFormula: String.raw`(-18)\div[(-3)(-4+6)]`,
    formula: String.raw`(-18)\div[(-3)(2)]=(-18)\div(-6)=3`,
    answer: "3.",
    explanation: "Work inside the brackets first, multiply inside the denominator, and then divide.",
  },
  // =========================================================
  // Chapter 3 · Section 1 · Basic Concepts of Algebra
  // =========================================================

  {
    id: "s1-c3-letter-meaning",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Basic Concepts of Algebra",
    type: "definition",
    prompt: "What can a letter represent in algebra?",
    formula: String.raw`x+4=11`,
    answer: "A letter can represent an unknown number or a variable value.",
    explanation: "The letter chosen does not change the algebraic method.",
  },
  {
    id: "s1-c3-omit-multiplication-sign",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Basic Concepts of Algebra",
    type: "rule",
    prompt: "How is multiplication written in standard algebraic notation?",
    formula: String.raw`4\times x=4x\qquad a\times b=ab`,
    answer: "Omit the multiplication sign when a factor is a letter or bracket.",
    explanation: "Write the numerical coefficient before the letter part.",
  },
  {
    id: "s1-c3-standard-product-order",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Basic Concepts of Algebra",
    type: "rule",
    prompt: "Write a × b × 5 in standard algebraic form.",
    formula: String.raw`a\times b\times5=5ab`,
    answer: "5ab.",
    explanation: "Write the number first, followed by letters in alphabetical order.",
  },
  {
    id: "s1-c3-repeated-factors",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Basic Concepts of Algebra",
    type: "formula",
    prompt: "How are repeated letter factors written?",
    formula: String.raw`m\times m\times m=m^3`,
    answer: "Use an index to show the number of repeated factors.",
    explanation: "m³ means m multiplied by itself three times; it does not mean 3m.",
  },
  {
    id: "s1-c3-division-notation",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Basic Concepts of Algebra",
    type: "formula",
    prompt: "Write p divided by 6 in standard algebraic form.",
    formula: String.raw`p\div6=\frac{p}{6}`,
    answer: "p/6.",
    explanation: "Division is normally written using a fraction bar in algebra.",
  },
  {
    id: "s1-c3-translate-product-subtract",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Basic Concepts of Algebra",
    type: "formula",
    prompt: "Translate: subtract 3 from the product of 4 and x.",
    formula: String.raw`4x-3`,
    answer: "4x − 3.",
    explanation: "First form the product 4x, then subtract 3 from it.",
  },

  // =========================================================
  // Chapter 3 · Section 2 · Understanding Algebraic Expressions
  // =========================================================

  {
    id: "s1-c3-term-definition",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Understanding Algebraic Expressions",
    type: "definition",
    prompt: "What is a term in an algebraic expression?",
    formula: String.raw`3y^2+y-2`,
    answer: "A term is a part separated by + or −, including its sign.",
    explanation: "The three terms shown are 3y², y and −2.",
  },
  {
    id: "s1-c3-coefficient",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Understanding Algebraic Expressions",
    type: "definition",
    prompt: "What is the coefficient of −7x²?",
    formula: String.raw`-7x^2`,
    answer: "−7.",
    explanation: "The coefficient is the numerical factor multiplying the letter part.",
  },
  {
    id: "s1-c3-constant-term",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Understanding Algebraic Expressions",
    type: "definition",
    prompt: "What is a constant term?",
    formula: String.raw`4x-9`,
    answer: "A constant term contains numbers only; here it is −9.",
    explanation: "The sign immediately before the number belongs to the term.",
  },
  {
    id: "s1-c3-like-terms",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Understanding Algebraic Expressions",
    type: "definition",
    prompt: "When are two algebraic terms like terms?",
    formula: String.raw`3a^2\text{ and }-5a^2`,
    answer: "They have exactly the same letters with the same indices.",
    explanation: "Their coefficients may be different. All constant terms are like terms.",
  },
  {
    id: "s1-c3-combine-like-terms",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Understanding Algebraic Expressions",
    type: "formula",
    prompt: "Simplify 5y + 6 − 3y.",
    formula: String.raw`5y+6-3y=(5-3)y+6=2y+6`,
    answer: "2y + 6.",
    explanation: "Combine the coefficients of the y-terms and keep the constant term.",
  },
  {
    id: "s1-c3-substitution",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Understanding Algebraic Expressions",
    type: "formula",
    prompt: "Find 2a² − 3b when a = −2 and b = 4.",
    formula: String.raw`2(-2)^2-3(4)=8-12=-4`,
    answer: "−4.",
    explanation: "Use brackets around substituted negative values before applying the index.",
  },

  // =========================================================
  // Chapter 3 · Section 3 · Linear Equations in One Unknown
  // =========================================================

  {
    id: "s1-c3-linear-equation",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Linear Equations in One Unknown",
    type: "definition",
    prompt: "What is a linear equation in one unknown?",
    formula: String.raw`3x+2=17`,
    answer: "It has one unknown whose highest power is 1, with two equal sides.",
    explanation: "A solution is a value that makes the left- and right-hand sides equal.",
  },
  {
    id: "s1-c3-transposition",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Linear Equations in One Unknown",
    type: "rule",
    prompt: "What does transposing a term mean?",
    formula: String.raw`x+2=8\Rightarrow x=8-2`,
    answer: "Apply the inverse operation to both sides of the equation.",
    explanation: "Addition changes to subtraction, and multiplication changes to division.",
  },
  {
    id: "s1-c3-convert-multiplication-division",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Linear Equations in One Unknown",
    type: "formula",
    prompt: "Solve 9y = −18.",
    formula: String.raw`y=\frac{-18}{9}=-2`,
    answer: "y = −2.",
    explanation: "Divide both sides by the coefficient 9.",
  },
  {
    id: "s1-c3-unknown-both-sides",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Linear Equations in One Unknown",
    type: "formula",
    prompt: "Solve 6m − 7 = 5m.",
    formula: String.raw`6m-5m=7\Rightarrow m=7`,
    answer: "m = 7.",
    explanation: "Collect all m-terms on one side and constants on the other.",
  },
  {
    id: "s1-c3-remove-brackets",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Linear Equations in One Unknown",
    type: "rule",
    prompt: "What is the rule for removing brackets?",
    formula: String.raw`a(b+c)=ab+ac\qquad a(b-c)=ab-ac`,
    answer: "Multiply every term inside the brackets by the outside factor.",
    explanation: "A negative outside factor changes the sign of every bracket term.",
  },
  {
    id: "s1-c3-clear-denominators",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Linear Equations in One Unknown",
    type: "rule",
    prompt: "How are denominators cleared from an equation?",
    formula: String.raw`6+\frac a2=\frac a4\quad\times4\Rightarrow24+2a=a`,
    answer: "Multiply every term by the L.C.M. of all denominators.",
    explanation: "Whole-number terms must also be multiplied by the L.C.M.",
  },

  // =========================================================
  // Chapter 3 · Section 4 · Formulating Equations to Solve Problems
  // =========================================================

  {
    id: "s1-c3-problem-solving-steps",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Formulating Equations to Solve Problems",
    type: "rule",
    prompt: "What are the five steps for solving a problem with an equation?",
    answer: "Define, represent, form an equation, solve, then answer clearly.",
    explanation: "Check the solution in the original context and include any required unit.",
  },
  {
    id: "s1-c3-consecutive-integers",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Formulating Equations to Solve Problems",
    type: "formula",
    prompt: "How are consecutive integers represented using x?",
    formula: String.raw`x,\ x+1,\ x+2`,
    answer: "Use x, x + 1, x + 2, and so on.",
    explanation: "Each consecutive integer is one greater than the previous integer.",
  },
  {
    id: "s1-c3-consecutive-even-numbers",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Formulating Equations to Solve Problems",
    type: "formula",
    prompt: "How are consecutive even numbers represented using y?",
    formula: String.raw`y,\ y+2,\ y+4`,
    answer: "Use y, y + 2, y + 4, and so on.",
    explanation: "Consecutive even or consecutive odd numbers differ by 2.",
  },
  {
    id: "s1-c3-age-relationship",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Formulating Equations to Solve Problems",
    type: "formula",
    prompt: "Martin is 3 years more than twice Michelle's age y. Express Martin's age.",
    formula: String.raw`2y+3`,
    answer: "2y + 3 years.",
    explanation: "Twice Michelle's age is 2y, and three more gives 2y + 3.",
  },
  {
    id: "s1-c3-form-sum-equation",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Formulating Equations to Solve Problems",
    type: "formula",
    prompt: "Two consecutive even numbers have sum 10. Form an equation.",
    formula: String.raw`y+(y+2)=10`,
    answer: "y + (y + 2) = 10.",
    explanation: "Let y be the smaller even number, so the next is y + 2.",
  },
  {
    id: "s1-c3-interpret-solution",
    level: "s1",
    chapter: 3,
    chapterTitle: "Basic Algebra (I)",
    section: "Formulating Equations to Solve Problems",
    type: "rule",
    prompt: "What should be done after solving a word-problem equation?",
    answer: "Check the value, answer the quantity asked and include its unit.",
    explanation: "The numerical value must satisfy both the equation and the original context.",
  },

];
