# Live Family Quiz — Section Selection and Auto-detect

## What this update adds

- Choose individual Knowledge Organiser sections instead of being limited to a whole chapter.
- Keep the whole-chapter checkbox as a quick Select all / Clear chapter control.
- Show a partial tick state when only some sections in a chapter are selected.
- Switch between Greta and Mathis.
- Automatically select each student's saved `taught_section_ids`.
- Manually add or remove sections after automatic detection.
- Apply the section restriction to all three existing modes:
  - Random selection
  - Choose exact questions
  - Generate with AI

Questions linked to more than one section are available only when all their linked sections are selected.

No new Supabase SQL or environment variable is required.

## Install in PowerShell

Run these commands in **PowerShell**:

```powershell
$zip = "$env:USERPROFILE\Downloads\Live-Family-Quiz-Section-Selection-Auto-Detect-2026-10-19.zip"
$extract = Join-Path $env:TEMP ("pw-family-sections-" + [guid]::NewGuid())
New-Item -ItemType Directory -Path $extract | Out-Null
Expand-Archive -Path $zip -DestinationPath $extract
Copy-Item -Path "$extract\Live-Family-Quiz-Section-Selection-Auto-Detect-2026-10-19\app" -Destination "E:\Projects\pw-learning-hub" -Recurse -Force
Copy-Item -Path "$extract\Live-Family-Quiz-Section-Selection-Auto-Detect-2026-10-19\lib" -Destination "E:\Projects\pw-learning-hub" -Recurse -Force
Set-Location "E:\Projects\pw-learning-hub"
npm run build
```

## Test

```powershell
npm run dev
```

1. Open `http://localhost:3000/family-quiz/host`.
2. Choose **Greta** under `Use taught sections for`.
3. Confirm that Greta's saved taught sections are ticked automatically.
4. Choose **Mathis** and confirm that his own selection appears.
5. Tick or untick an individual section.
6. Confirm the matching-question count changes.
7. Test Random selection, Choose exact questions and Generate with AI.
8. Confirm that the resulting quiz contains content only from the selected sections.

If no sections are detected for a student, first open that student's Knowledge Organiser chapter, tick the taught sections and select **Save taught sections**.

## Git and push

After the build succeeds:

```powershell
git add "app/api/family-quiz/catalog/route.ts" "app/api/family-quiz/generate/route.ts" "app/family-quiz/host/page.tsx" "lib/familyQuiz.ts"
git commit -m "Add section selection to family quiz"
git push origin main
```
