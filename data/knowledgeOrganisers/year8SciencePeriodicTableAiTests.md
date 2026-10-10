# The Periodic Table — Marking Test Cases

Chapter 3 uses the existing trusted server-side AI marking route for standard Short and Long Questions. Interactive questions use deterministic marking in the shared renderer.

## AI short-question tests

Use `periodic-q048` (“Explain the displacement in potassium iodide + chlorine → potassium chloride + iodine.”).

| Case | Student-answer intent | Expected result |
|---|---|---|
| 0 marks | “Iodine displaces chlorine because iodine is higher.” | 0/3; the direction and conclusion contradict the trusted criteria. |
| Partial | “Chlorine is above iodine and is more reactive.” | 2/3; the actual replacement and products are not explained. |
| Full | “Chlorine is above iodine in Group 7, so it is more reactive and displaces iodine from potassium iodide, making potassium chloride and iodine.” | 3/3; all criteria Met. |

## AI long-question tests

Use `periodic-q057` (compare Groups 1, 7 and 0).

| Case | Student-answer intent | Expected result |
|---|---|---|
| Low | Names one group but gives no valid trend. | 0/6 or 1/6 only if one trusted criterion is genuinely expressed. |
| Medium | Correctly names all groups and gives the Group 1 and Group 7 reactivity trends, but omits melting/boiling trends. | 2–3/6 according to the trusted criteria actually met. |
| Full | Correctly names all three families, compares reactivity, distinguishes Group 1/7 melting trends, gives Group 0's boiling trend and includes appropriate room-temperature/reaction behaviour. | 6/6. |

For every AI response, the server must preserve criterion order, recalculate marks from `Met`, rebuild the summary from trusted counts, and retain the existing retry/self-mark fallback.

## Deterministic tests

| Question | Type | Expected check |
|---|---|---|
| `periodic-q058`–`q060` | Matching | The 20 core Year 8 symbols are distributed once across three sets and map to the correct element names. |
| `periodic-q061` | Classification with reference | Students use the uploaded Periodic Table to classify selected elements by period. |
| `periodic-q062` | Classification with reference | Students use the uploaded Periodic Table column numbers to classify selected elements into Group 1, Group 7 or Group 0/18. |
| `periodic-q073` | Matching | Group, period and Groups 1, 7 and 0 map to their source meanings/names. |
| `periodic-q075` | Fill in the blanks | groups, periods, similar, left, right. |
| `periodic-q077`–`q079` | Ordering with reference | Selected Group 1, Group 7 and Group 0 elements are ordered from top to bottom using the displayed table. |
| `periodic-q080` | Equation completion | chlorine and iodine complete the two sides of the supplied displacement equation. |
| `periodic-q081`–`q082` | Classification | Physical/chemical and metal/non-metal properties match the organiser lists. |
