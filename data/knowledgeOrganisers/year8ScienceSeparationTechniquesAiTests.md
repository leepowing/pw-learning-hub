# Separation Techniques — Marking Test Cases

Chapter 4 uses the existing trusted server-side AI marking route for standard Short and Long Questions. Interactive questions use deterministic marking in the shared renderer.

## AI short-question tests

Use `separation-q034` (describe distillation while keeping the solvent).

| Case | Student-answer intent | Expected result |
|---|---|---|
| 0 marks | “Filter it and keep the residue.” | 0/3; it describes the wrong method and product. |
| Partial | “Boil the solution so the solvent becomes a gas.” | 1/3; boiling is correct but condensation and collection are missing. |
| Full | “Boil the solution so the solvent becomes a gas, cool it in the condenser, then collect the condensed liquid solvent.” | 3/3; every trusted criterion is Met. |

## AI long-question tests

Use `separation-q045` (compare filtration, distillation and evaporation).

| Case | Student-answer intent | Expected result |
|---|---|---|
| Low | Names one method without explaining its mixture or result. | 0/6 or 1/6 only if one trusted criterion is genuinely expressed. |
| Medium | Correctly explains filtration and evaporation but omits distillation. | 4/6 when all four corresponding trusted criteria are Met. |
| Full | Correctly states the mixture, process and retained/collected result for all three methods. | 6/6. |

For every AI response, the server must preserve criterion order, recalculate marks from `Met`, rebuild the summary from trusted counts, and retain the existing retry/self-mark fallback.

## Deterministic tests

| Question | Type | Expected check |
|---|---|---|
| `separation-q048`–`q050` | Matching | Each source term, method or apparatus item maps to one correct definition/function. |
| `separation-q051`–`q053` | Fill in the Blanks | Accepted-answer lists mark scientific vocabulary and apparatus outputs exactly. |
| `separation-q054`–`q057` | Ordering | The source method stages are checked in scientific sequence. |
| `separation-q058` | Classification | Pure/impure, mixture/solution and solubility descriptions map to the correct source category. |
| `separation-q059` | Diagram labels | Six filtration targets map to residue, filter paper, funnel, clamp, flask and filtrate. |
| `separation-q060` | Diagram labels | Four numbers beside the original arrows identify the thermometer, condenser and correct cooling-water direction. |
| `separation-q061` | Diagram labels | Five chromatography targets include the ink spot above the solvent. |
| `separation-q062` | Diagram labels | Three evaporation targets map to basin, mixture and burner. |
