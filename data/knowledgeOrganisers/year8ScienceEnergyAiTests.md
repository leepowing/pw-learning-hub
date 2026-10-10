# Energy — AI Marking Test Cases

These tests use the existing server-side trusted-question lookup. Scores must equal the number of `Met` criteria; `Partly met` and `Not met` score zero.

## Short answer samples

1. `energy-q029` — unrelated answer: expected 0/2.
2. `energy-q029` — “Temperature is average energy.”: expected 1/2; thermal energy remains Not met.
3. `energy-q029` — “Temperature measures average energy, whereas thermal energy measures total energy.”: expected 2/2.
4. `energy-q031` — correct particle change plus mass and material only: expected 3/4; temperature rise remains Not met.
5. `energy-q035` — names faster particles but omits spacing and density: first point Met or Partly met according to meaning; missing density must not score.
6. `energy-q036` — correct facts in the wrong causal order: do not award a full connected explanation.
7. `energy-q045` — `W = F × d, in J, N and m`: expected full meaning using equivalent notation.
8. `energy-q052` — all four values correct but one unit omitted: the affected criterion is not fully Met.

## Long answer samples

1. `energy-q054` — only conduction described: score only correctly met conduction criteria.
2. `energy-q054` — all three transfer methods but no convection-current name: expected 5/6.
3. `energy-q054` — complete six-point comparison: expected 6/6.
4. `energy-q055` — defines power but gives no bill information: expected 1/6.
5. `energy-q057` — full resource comparison but omits the generator and cable stage: power-station sequence criteria are not fully met.
6. `energy-q058` — all seven trusted points with correct values and units: expected 7/7.

## Numerical and contradiction checks

- `2000 J/s × 7200 s = 14,400,000 J` and `14400000 J` are equivalent where the question permits formatting variation.
- A student who gives the correct work equation and then reverses it must not receive full credit.
- A response that says hot, less dense material falls contradicts the trusted convection criterion and must not be Met.
- No answer may be rewarded for adding outside science that replaces or contradicts the approved source wording.

## Required response checks

- Criterion order exactly matches trusted marking points.
- Summary counts every Met, Partly met and Not met item.
- Improved answer covers all trusted points without adding extra marking requirements.
- Student answer is preserved after API failure and retry is available.
- Advisory notice remains visible.
