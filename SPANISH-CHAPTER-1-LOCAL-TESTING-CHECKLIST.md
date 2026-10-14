# Spanish Chapter 1 — Local Testing Checklist

From the project root:

```powershell
npm install
node scripts/generate-spanish-food-universals-coverage.mjs
node scripts/validate-spanish-food-universals.mjs
npx tsc --noEmit --incremental false
npm run build
```

Manual checks:

- Year 8 shows a working Spanish subject card.
- Spanish page shows Chapter 1 and Spring/Summer `Coming soon` cards.
- All eight sections can be marked taught.
- Learn, Mind Map, Flashcards and Quiz show only taught sections.
- Flashcard backs play Spanish audio.
- Written answers accept `á é í ó ú ü ñ ¿ ¡` using the on-screen keys.
- Chapter and revision quizzes show Multiple Choice, Short, Long, Interactive and Mixed.
- Pronunciation practice asks for microphone permission, plays the model, returns four Azure scores and allows retry.
- No audio recording is saved by the application.
- Existing History, Science, English, Geography, Design Technology and RPE routes still open.

If a local build reports `supabaseUrl is required`, ensure the existing Supabase environment variables are available to the build process. Do not hard-code them.
