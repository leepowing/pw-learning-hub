# Year 8 French Chapter 1 — Update Instructions

## Scope

This package adds the Year 8 French subject entry and Autumn Chapter 1, **Holidays and French Universals**. It accounts for all 114 printed KO occurrences and adds browser listening, Azure Speech pronunciation assessment, five quiz categories, AI marking guidance and coverage validation.

## Apply safely

1. Back up the project or create a Git branch.
2. Extract this ZIP into the root of the latest `pw-learning-hub` project and allow the listed files to merge.
3. Do not replace unrelated files. Review the shared-file changelog before resolving any merge conflict.
4. Run `npm install`. The required Speech SDK is already declared by the existing Spanish feature.
5. Keep `AZURE_SPEECH_KEY` and `AZURE_SPEECH_REGION` server-side. Never prefix the key with `NEXT_PUBLIC_`.
6. Run the commands in `FRENCH-CHAPTER-1-LOCAL-TESTING-CHECKLIST.md`.
7. Commit and push only after all checks pass.

## Expected routes

- `/knowledge-organisers/year8/french`
- `/knowledge-organisers/year8/french/autumn/holidays-and-french-universals`
- `/knowledge-organisers/year8/french/revision-quiz`
- `/api/french/pronunciation-token`

## Source fidelity

Questionable printed translations and grammar are retained rather than silently corrected. See `data/knowledgeOrganisers/year8FrenchHolidaysAndUniversalsCorrectionDiff.md` before approving any future correction.
