# Host-reviewed feedback consistency fix

This update prevents an old automatic message such as `Not quite.` from appearing after the host changes the mark to full marks.

The original automatic feedback is retained inside the feedback JSON as `automaticSummary`, while the student sees the current host-reviewed result.

No SQL or environment-variable change is required.

## PowerShell installation

```powershell
$zip = "$env:USERPROFILE\Downloads\Live-Family-Quiz-Host-Feedback-Fix-2026-10-17.zip"
$extract = Join-Path $env:TEMP ("pw-host-feedback-" + [guid]::NewGuid())
New-Item -ItemType Directory -Path $extract | Out-Null
Expand-Archive -Path $zip -DestinationPath $extract
Copy-Item -Path "$extract\Live-Family-Quiz-Host-Feedback-Fix-2026-10-17\*" -Destination "E:\Projects\pw-learning-hub" -Recurse -Force
Set-Location "E:\Projects\pw-learning-hub"
npm run build
```

## Git and push

```powershell
Set-Location "E:\Projects\pw-learning-hub"
git add "app/api/family-quiz/answers/review/route.ts" "lib/familyQuiz.ts"
git commit -m "Keep host-reviewed marks and feedback consistent"
git push origin main
```
