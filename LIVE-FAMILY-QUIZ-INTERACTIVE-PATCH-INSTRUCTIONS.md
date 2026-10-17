# Live Family Quiz — Interactive Questions Patch

This patch adds the existing Knowledge Organiser interactive questions to Live Family Quiz.

Supported question interactions:

- fill in the blanks
- diagram labels (photosynthesis and leaf cross-section)
- matching
- ordering
- classification

Interactive questions are marked deterministically on the server, so they do **not** use the OpenAI API. The existing AI-generated and written-answer options continue to work as before.

## 1. Update Supabase first

Open **Supabase → SQL Editor → New query**. Copy and run the contents of:

`supabase/live_family_quiz_interactive_patch.sql`

It adds one nullable `interaction` column to `family_quiz_questions`. It is safe to run more than once.

## 2. Copy the patch into the project

Extract the ZIP, open the extracted folder, and copy its contents into:

`E:\Projects\pw-learning-hub`

Choose **Replace the files in the destination** when Windows asks. Do not copy only the instruction file.

## 3. Test locally

In the VS Code terminal:

```powershell
cd E:\Projects\pw-learning-hub
npm install
npm run build
npm run dev
```

Open Live Family Quiz, choose **Existing KO questions**, select the Science chapter, and choose **Interactive questions**. Create a room and test it with a second signed-in device or browser profile.

## 4. Commit and push

```powershell
cd E:\Projects\pw-learning-hub
git add app/api/family-quiz/catalog/route.ts app/api/family-quiz/sessions/route.ts app/api/family-quiz/answers/route.ts app/family-quiz/host/page.tsx "app/family-quiz/host/[sessionId]/page.tsx" "app/family-quiz/play/[sessionId]/page.tsx" components/family-quiz/LiveFamilyQuizInteractiveQuestion.tsx lib/familyQuiz.ts supabase/live_family_quiz.sql supabase/live_family_quiz_interactive_patch.sql
git commit -m "Add interactive questions to Live Family Quiz"
git push origin main
```

## Expected result

- **Mixed questions** may include standard and interactive KO questions.
- **Interactive questions** selects only interactive KO questions.
- The child sees the correct input, matching, ordering, classification, or diagram-labelling interface.
- The answer is marked automatically without OpenAI.
- The host sees each response, score, and answer guide after revealing the answer.
- **Generate with AI** continues to generate standard multiple-choice and written questions only.
