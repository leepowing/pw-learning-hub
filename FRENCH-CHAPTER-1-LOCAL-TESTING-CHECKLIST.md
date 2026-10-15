# French Chapter 1 — Local Testing Checklist

From the project root:

```powershell
npm install
node scripts/generate-french-holidays-coverage.mjs
node scripts/validate-french-holidays.mjs
npx tsc --noEmit
npm run lint
npm run build
```

Then run `npm run dev` and verify:

- the Year 8 page shows French and opens the French subject page;
- Chapter 1 shows 9 sections, 114 flashcards and 120 questions;
- Spring and Summer show `Coming soon`;
- cards speak with a French voice and pronunciation practice requests microphone permission;
- quiz modes, interactive tasks, AI/self-marking fallback and French character buttons work;
- the cross-chapter quiz only uses sections marked as taught;
- no Azure subscription key appears in browser source or network responses.
