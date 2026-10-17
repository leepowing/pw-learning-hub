# Live Family Quiz — Host Review & Override Marks

## What this update adds

- The host can replace an AI mark with a whole-number mark from 0 to the question maximum.
- The host can add an optional comment for the student.
- Answers with `needs_review` are clearly highlighted.
- Reviews can be completed after each revealed question or from the final results page.
- Final scores update after a host review is saved.
- The student sees `HOST-REVIEWED RESULT` and the host comment after the answer is revealed.
- The server verifies that only the quiz host can review answers.

## Before installing

This update assumes that Live Family Quiz and the Science interactive-question patch are already installed.

No Supabase SQL change is required.

No new `.env.local` or Vercel environment variable is required.

## Install with PowerShell

Open a **PowerShell** terminal in VS Code and run the following commands. Change the ZIP filename if Windows added `(1)` to it.

```powershell
$zip = "$env:USERPROFILE\Downloads\Live-Family-Quiz-Host-Review-2026-10-17.zip"
$extract = Join-Path $env:TEMP ("pw-host-review-" + [guid]::NewGuid())
New-Item -ItemType Directory -Path $extract | Out-Null
Expand-Archive -Path $zip -DestinationPath $extract
Copy-Item -Path "$extract\Live-Family-Quiz-Host-Review-2026-10-17\*" -Destination "E:\Projects\pw-learning-hub" -Recurse -Force
Set-Location "E:\Projects\pw-learning-hub"
npm run build
```

Expected result: Next.js reports that compilation and TypeScript completed successfully.

## Test locally

```powershell
Set-Location "E:\Projects\pw-learning-hub"
npm run dev
```

1. Open `http://localhost:3000/family-quiz` as the parent/host.
2. Create a quiz containing at least one short-answer question.
3. Join the room from a child account and submit an answer.
4. On the host screen, reveal the answer.
5. Enter a mark and optional comment, then select **Save host review**.
6. Confirm that the child screen changes to **HOST-REVIEWED RESULT** and displays the comment.
7. End the quiz and confirm the final score reflects the host mark.

## Git and push

Run these only after `npm run build` succeeds:

```powershell
Set-Location "E:\Projects\pw-learning-hub"
git status
git add "app/api/family-quiz/answers/review/route.ts" "app/family-quiz/host/[sessionId]/page.tsx" "app/family-quiz/play/[sessionId]/page.tsx" "lib/familyQuiz.ts"
git commit -m "Add host review and mark override to family quiz"
git push origin main
```

## Files included

- `app/api/family-quiz/answers/review/route.ts`
- `app/family-quiz/host/[sessionId]/page.tsx`
- `app/family-quiz/play/[sessionId]/page.tsx`
- `lib/familyQuiz.ts`
