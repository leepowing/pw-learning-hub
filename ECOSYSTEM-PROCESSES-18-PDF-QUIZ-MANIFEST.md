# Ecosystem Processes — 18 PDF Quiz Manifest

This manifest records how every supplied PDF is used. Presentation reveal slides and answer PDFs are validation sources, not duplicate student questions.

| PDF | Role in the build | Quiz coverage |
|---|---|---|
| `WHA_B2.2.1P_Photosynthesis.pdf` | Teacher presentation | Starter, mini-whiteboard and lesson-review prompts represented; repeated answer-reveal slides deduplicated. |
| `WHA_B2.2.1WC_Photosynthesis.pdf` | Student worksheet | Tasks 1–5 and Challenge represented, including the original diagram. |
| `WHA_B2.2.1_Answers.pdf` | Teacher answers | Used to verify answers and marking points; no duplicate questions created. |
| `WHA_B2.2.2P_Testing_for_Starch.pdf` | Teacher presentation | Starter, mini-whiteboard and lesson-review prompts represented. |
| `WHA_B2.2.2WC_Testing_for_Starch_Practical_Booklet.pdf` | Student practical booklet | Prediction, safety/method matching, observations/results and Challenge represented. |
| `WHA_B2.2.2_Teacher_Guide_and_Answers.pdf` | Teacher answers and practical guidance | Used to verify safe method, expected observations and marking points. |
| `WHA_B2.2.3P_Leaves.pdf` | Teacher presentation | Starter, mini-whiteboard and lesson-review prompts represented. |
| `WHA_B2.2.3WC_Leaves.pdf` | Student worksheet | Page-top leaf diagram, Tasks 1–5 and Challenge represented. |
| `WHA_B2.2.3_Answers.pdf` | Teacher answers | Used to verify leaf labels, matching, order and marking points. |
| `WHA_B2.2.4P_Plant_Minerals.pdf` | Teacher presentation | Starter, mini-whiteboard and lesson-review prompts represented. |
| `WHA_B2.2.4WC_Plant_Minerals.pdf` | Student worksheet | Tasks 1–4 and Challenge represented with the original data values. |
| `WHA_B2.2.4_Answers.pdf` | Teacher answers | Used to verify diagnoses, means and explanations. |
| `WHA_B2.2.5P_Aerobic_Respiration.pdf` | Teacher presentation | Starter, mini-whiteboard and lesson-review prompts represented. |
| `WHA_B2.2.5WC_Aerobic_Respiration.pdf` | Student worksheet | Tasks 1–5 and Challenge represented. |
| `WHA_B2.2.5_Answers.pdf` | Teacher answers | Used to verify equations, classification and written marking points. |
| `WHA_B2.2.6P_Anaerobic_Respiration.pdf` | Teacher presentation | Starter, mini-whiteboard and lesson-review prompts represented. |
| `WHA_B2.2.6WC_Anaerobic_Respiration.pdf` | Student worksheet | Tasks 1–4, three-process comparison and Challenge represented. |
| `WHA_B2.2.6_Answers.pdf` | Teacher answers | Used to verify equations, comparison table and marking points. |

## Deduplication rule

- Identical question and answer-reveal slides inside a presentation count as one quiz question.
- A repeated recap question from an earlier lesson can be represented once when the wording is identical; its `sourceRef` names both locations.
- Answer PDFs do not create a second copy of a worksheet question.
- When an older generated question paraphrases several teacher prompts, it is marked `generatedSupplement`; the teacher's original wording is stored separately as `teacherQuestion`.

## Automated checks

`node scripts/validate-ecosystem-processes.mjs` checks:

- 8 sections and unique question IDs;
- at least 124 questions;
- all required interaction types and renderers;
- all 12 question-bearing presentation/worksheet PDFs in `sourceRef` data;
- key previously missing prompts, diagrams and comparison activities;
- both original teacher diagram assets.
