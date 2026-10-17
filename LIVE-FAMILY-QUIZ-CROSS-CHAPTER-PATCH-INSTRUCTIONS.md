# Live Family Quiz — Cross-Chapter Patch

This patch upgrades the host setup from a single Chapter dropdown to a multi-select Chapter list.

## New behaviour

- Select one or more Chapters with checkboxes.
- Select Chapters from the same subject or different subjects.
- Existing KO mode combines all matching questions before random selection.
- AI mode generates a balanced question set from the selected KO Chapters.
- Select all and Clear all controls are included.
- The selected Chapter count and combined question-bank count are shown.
- AI mode supports up to 12 selected Chapters per quiz; Existing KO mode can use all Chapters.

## Installation

Extract this ZIP into the existing project root:

```text
E:\Projects\pw-learning-hub
```

Allow Windows to merge the folders and replace the four included files.

No Supabase SQL change and no new environment variable are required for this patch.

Stop and restart the local development server:

```powershell
Ctrl + C
npm run dev
```

Then open:

```text
http://localhost:3000/family-quiz/host
```

## Files replaced

- `app/family-quiz/host/page.tsx`
- `app/api/family-quiz/generate/route.ts`
- `app/api/family-quiz/sessions/route.ts`
- `lib/familyQuiz.ts`

## Validation before Git push

```powershell
npm run build
```

If the build succeeds:

```powershell
git add app/family-quiz/host/page.tsx app/api/family-quiz/generate/route.ts app/api/family-quiz/sessions/route.ts lib/familyQuiz.ts
git commit -m "Add cross-chapter live family quizzes"
git push origin main
```
