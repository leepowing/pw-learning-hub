# Live Family Quiz — Choose Exact Questions

This update adds a third question-selection mode while preserving both existing modes.

## Three available modes

1. **Random selection** — randomly selects existing KO questions.
2. **Choose exact questions** — previews the question bank and lets the host choose each question.
3. **Generate with AI** — creates new questions from the selected KO chapters.

## Exact-question features

- Filter by selected chapters and question type.
- Preview the question prompt, type, marks and multiple-choice options.
- Select or deselect individual questions.
- Select the first 20 matching questions or clear the selection.
- Choose between 1 and 20 questions.
- The Create Room button displays the exact selected-question count.

## Important

- Random selection remains available.
- Generate with AI remains available.
- No Supabase SQL is required.
- No `.env.local` or Vercel variable change is required.

## Step 1 — Install

Open a **PowerShell** terminal and run these commands one line at a time:

```powershell
$zip = "$env:USERPROFILE\Downloads\Live-Family-Quiz-Choose-Exact-Questions-2026-10-18.zip"
$extract = Join-Path $env:TEMP ("pw-exact-questions-" + [guid]::NewGuid())
New-Item -ItemType Directory -Path $extract | Out-Null
Expand-Archive -Path $zip -DestinationPath $extract
Copy-Item -Path "$extract\Live-Family-Quiz-Choose-Exact-Questions-2026-10-18\app" -Destination "E:\Projects\pw-learning-hub" -Recurse -Force
Copy-Item -Path "$extract\Live-Family-Quiz-Choose-Exact-Questions-2026-10-18\lib" -Destination "E:\Projects\pw-learning-hub" -Recurse -Force
Set-Location "E:\Projects\pw-learning-hub"
npm run build
```

## Step 2 — Test locally

```powershell
npm run dev
```

Open:

```text
http://localhost:3000/family-quiz/host
```

Check all three modes:

1. **Random selection** still creates a room with randomly selected KO questions.
2. **Choose exact questions** shows the matching questions and creates a room using only the checked questions.
3. **Generate with AI** still generates and creates a room normally.

## Step 3 — Commit and push

```powershell
git add "app/family-quiz/host/page.tsx" "app/api/family-quiz/catalog/route.ts" "lib/familyQuiz.ts"
git commit -m "Add exact question selection to Live Family Quiz"
git push origin main
```
