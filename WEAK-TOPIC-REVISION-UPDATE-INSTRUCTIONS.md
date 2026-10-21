# Live Family Quiz — Weak-topic Revision

This update analyses previously marked Live Family Quiz answers and creates a focused revision quiz for each child.

## What is included

- Separate weak-question lists for Greta and Mathis (and any other players with marked mistakes).
- Priority order based on repeated mistakes, then lowest overall score.
- Automatic Top 5, 10, 15 or 20 selection.
- Parent preview and checkbox control before creating the room.
- Cross-subject and cross-chapter question selection.
- Existing Random selection, Choose exact questions and Generate with AI modes are unchanged.

Only marked Knowledge Organiser questions are included. Answers still awaiting host review and AI-generated questions without an original KO question ID are excluded.

No new Supabase SQL or environment variable is required.

## Install in PowerShell

Run these commands in **PowerShell**:

```powershell
$zip = "$env:USERPROFILE\Downloads\Live-Family-Quiz-Weak-Topic-Revision-2026-10-18.zip"
$extract = Join-Path $env:TEMP ("pw-weak-topic-" + [guid]::NewGuid())
New-Item -ItemType Directory -Path $extract | Out-Null
Expand-Archive -Path $zip -DestinationPath $extract
Copy-Item -Path "$extract\Live-Family-Quiz-Weak-Topic-Revision-2026-10-18\app" -Destination "E:\Projects\pw-learning-hub" -Recurse -Force
Set-Location "E:\Projects\pw-learning-hub"
npm run build
```

## Test

```powershell
npm run dev
```

1. Open `http://localhost:3000/family-quiz/host`.
2. Select **Weak-topic revision** at the top.
3. Select Greta or Mathis.
4. Check that previous marked mistakes are listed in priority order.
5. Change Top 5 to Top 10, or manually select questions.
6. Select **Create … quiz** and confirm that the Host room opens with those questions.

If no questions appear, finish and mark at least one Live Family Quiz answer with a score below its maximum mark.

## Git and push

After `npm run build` succeeds:

```powershell
git add "app/api/family-quiz/weak-topics/route.ts" "app/family-quiz/weak-topics/page.tsx" "app/family-quiz/host/page.tsx"
git commit -m "Add weak-topic family quiz revision"
git push origin main
```
