# Electricity and Magnetism — AI Marking Test Cases

These tests use the existing server-side trusted-question lookup. Scores must equal the number of `Met` criteria; `Partly met` and `Not met` score zero.

## Short answer samples

1. `electricity-magnetism-q032` — empty / unrelated answer: expected 0/2.
2. `electricity-magnetism-q032` — “Conductors are low resistance.”: expected 1/2; the insulator comparison remains Not met.
3. `electricity-magnetism-q032` — “Conductors have low resistance, whereas insulators have high resistance.”: expected 2/2.
4. `electricity-magnetism-q033` — `R = V/I; resistance is ohms, V is volts and I is amps.`: expected 2/2 using equivalent notation.
5. `electricity-magnetism-q040` — “It can turn off because it is magnetic.”: expected Partly met / 0 unless the answer links magnetism to current flow.
6. `electricity-magnetism-q040` — “It is magnetic only while current flows, so stopping current turns it off.”: expected 2/2.
7. `electricity-magnetism-q036` — “Branch currents add to total, but each branch has zero voltage.”: expected 1/2; contradiction prevents full marks.

## Long answer samples

1. `electricity-magnetism-q048` — series facts only: expected partial score for the correctly met series criteria only.
2. `electricity-magnetism-q048` — correct series and parallel rules but no break consequence: expected 6/7.
3. `electricity-magnetism-q048` — all seven trusted comparisons: expected 7/7.
4. `electricity-magnetism-q050` — names coil and iron core only: expected the corresponding two criteria only.
5. `electricity-magnetism-q050` — complete current, switching, core, turns and current-strength explanation: expected 5/5.
6. `electricity-magnetism-q051` — unrelated evaluation or unsupported judgement: no extra marks; this is an explain question, not an evaluate question.

## Required response checks

- Criterion order exactly matches trusted marking points.
- Summary counts every Met, Partly met and Not met item.
- Improved answer covers all trusted points and does not add extra marking requirements.
- Student answer is preserved after API failure and retry is available.
- Advisory notice remains visible.
