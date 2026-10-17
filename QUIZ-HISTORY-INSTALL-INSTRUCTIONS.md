# Live Family Quiz History — Installation Instructions

This update adds a host-only Quiz History area to Live Family Quiz.

## Included features

- View every previous quiz room, 20 records per page.
- Use Previous and Next controls with a total record count and page number.
- See room status, date, room code, question count and total marks.
- See each player's score and answered-question count.
- See how many answers still need host review.
- Open a complete record of every question, answer, mark and feedback comment.
- Return to an existing room from the history list.
- Open Quiz History from the create-quiz page and the completed-room screen.

## Important

- No Supabase SQL is required.
- No `.env.local` change is required.
- No new Vercel environment variable is required.
- The history API verifies that the signed-in user owns the quiz room.

## Step 1 — Install the update

Open a **PowerShell** terminal and run these commands one line at a time:

```powershell
$zip = "$env:USERPROFILE\Downloads\Live-Family-Quiz-History-Pagination-2026-10-17.zip"
$extract = Join-Path $env:TEMP ("pw-quiz-history-" + [guid]::NewGuid())
New-Item -ItemType Directory -Path $extract | Out-Null
Expand-Archive -Path $zip -DestinationPath $extract
Copy-Item -Path "$extract\Live-Family-Quiz-History-2026-10-17\app\*" -Destination "E:\Projects\pw-learning-hub\app" -Recurse -Force
Set-Location "E:\Projects\pw-learning-hub"
npm run build
```

Do not copy `QUIZ-HISTORY-INSTALL-INSTRUCTIONS.md` into the app folder.

## Step 2 — Test locally

Run:

```powershell
npm run dev
```

Then:

1. Open `http://localhost:3000/family-quiz/host`.
2. Select **Quiz history**.
3. Confirm that previous quizzes are shown.
4. If there are more than 20 quizzes, confirm that **Previous** and **Next** change pages.
5. Open **View full record** and check scores, answers, marks and comments.
6. Open a completed quiz room and confirm that its **Quiz history** button works.

## Step 3 — Commit and push

After the build and local test succeed, run:

```powershell
git add "app/api/family-quiz/history/route.ts" "app/family-quiz/history/page.tsx" "app/family-quiz/history/[sessionId]/page.tsx" "app/family-quiz/host/page.tsx" "app/family-quiz/host/[sessionId]/page.tsx"
git commit -m "Add Live Family Quiz history"
git push origin main
```

Vercel should deploy automatically after the push.
