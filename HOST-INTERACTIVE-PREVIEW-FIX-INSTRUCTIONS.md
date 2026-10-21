# Live Family Quiz — Host Interactive Question Preview Fix

This update fixes interactive questions that showed only their prompt on the Host screen.

## Host screen now displays

- Diagram-label questions: diagram, number markers and labels to identify.
- Fill-in-the-blank questions: sentences and word bank.
- Matching questions: both item lists.
- Ordering questions: all items to be ordered.
- Classification questions: items and available categories.

The Host preview is read-only. The student answering interface is unchanged.

## Important

- No Supabase SQL is required.
- No environment variable change is required.
- Random selection, exact selection and AI generation are unchanged.

## Step 1 — Install

Open a **PowerShell** terminal and run these commands one line at a time:

```powershell
$zip = "$env:USERPROFILE\Downloads\Live-Family-Quiz-Host-Interactive-Preview-Fix-2026-10-18.zip"
$extract = Join-Path $env:TEMP ("pw-host-preview-" + [guid]::NewGuid())
New-Item -ItemType Directory -Path $extract | Out-Null
Expand-Archive -Path $zip -DestinationPath $extract
Copy-Item -Path "$extract\Live-Family-Quiz-Host-Interactive-Preview-Fix-2026-10-18\app" -Destination "E:\Projects\pw-learning-hub" -Recurse -Force
Copy-Item -Path "$extract\Live-Family-Quiz-Host-Interactive-Preview-Fix-2026-10-18\components" -Destination "E:\Projects\pw-learning-hub" -Recurse -Force
Set-Location "E:\Projects\pw-learning-hub"
npm run build
```

## Step 2 — Test

```powershell
npm run dev
```

Create a Science quiz containing **Label the filtration apparatus**. Start the room and confirm that the Host screen shows the filtration diagram and numbered labels.

## Step 3 — Commit and push

```powershell
git add "app/family-quiz/host/[sessionId]/page.tsx" "components/family-quiz/LiveFamilyQuizInteractiveQuestion.tsx"
git commit -m "Show interactive questions on family quiz host screen"
git push origin main
```
