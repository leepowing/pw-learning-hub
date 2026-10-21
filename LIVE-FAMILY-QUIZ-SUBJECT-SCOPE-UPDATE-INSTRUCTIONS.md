# Live Family Quiz — Subject Scope Update

This update prevents normal random revision quizzes from accidentally mixing every subject.

## What changes

- Adds **Single subject** and **Cross-subject revision** choices.
- Uses **Single subject** by default.
- Automatically selects only the chosen subject's taught sections for Greta or Mathis.
- Keeps the existing cross-subject option.
- Applies the same subject and section scope to:
  - Random selection
  - Choose exact questions
  - Generate with AI
- Remembers each student's last manually chosen subject in the browser.

## Install

1. Close the local development server if it is running.
2. Extract this ZIP.
3. Copy the included `app` folder into the project root:

   `E:\Projects\pw-learning-hub`

4. Allow Windows to replace the existing file.
5. Run:

```powershell
cd E:\Projects\pw-learning-hub
npm run build
npm run dev
```

6. Open:

   `http://localhost:3000/family-quiz/host`

## Test checklist

1. Select Greta or Mathis.
2. Keep **Single subject** selected.
3. Choose one subject, for example Science.
4. Confirm that only Science chapters and taught sections are displayed.
5. Create a **Random selection** quiz and confirm all questions are from Science.
6. Repeat with **Choose exact questions** and **Generate with AI**.
7. Select **Cross-subject revision** and confirm all detected taught sections become available again.

No Supabase SQL changes or new Vercel environment variables are required.
