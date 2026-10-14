# Year 8 Spanish Chapter 1 — Update Instructions

## Scope

This package adds the Year 8 Spanish subject entry and Autumn Chapter 1, **Food, Healthy Eating and Spanish Universals**. It preserves all 116 printed KO occurrences and adds browser audio, Azure Speech pronunciation practice, five quiz categories, AI marking guidance and coverage validation.

## Apply safely

1. Back up the project or create a Git branch.
2. Extract this ZIP into the root of the latest `pw-learning-hub` project and allow the listed files to merge.
3. Do not replace unrelated files. The package contains only new Spanish files and the shared files required by this feature.
4. Run `npm install` so `microsoft-cognitiveservices-speech-sdk` is installed.
5. Keep these Vercel variables server-side: `AZURE_SPEECH_KEY`, `AZURE_SPEECH_REGION`. Keep the existing `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` values.
6. Run the commands in `SPANISH-CHAPTER-1-LOCAL-TESTING-CHECKLIST.md`.
7. Commit and push only after the checks pass.

## Expected routes

- `/knowledge-organisers/year8/spanish`
- `/knowledge-organisers/year8/spanish/autumn/food-and-spanish-universals`
- `/knowledge-organisers/year8/spanish/revision-quiz`
- `/api/spanish/pronunciation-token`

## Source decision

The printed form `ceno a la nueve` is retained exactly, as instructed. The audit notes that standard Spanish normally uses `ceno a las nueve`; no silent correction was made.
