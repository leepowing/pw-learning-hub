# RPE Chapter 2 Update Instructions

## Install

1. Make a backup of `E:\Projects\pw-learning-hub`.
2. Extract the ZIP using Windows **Extract All**.
3. Copy all extracted project files into `E:\Projects\pw-learning-hub`.
4. Choose **Replace the files in the destination** when Windows asks.
5. Do not replace or delete your existing `.env.local`.

## Validate in PowerShell

```powershell
cd E:\Projects\pw-learning-hub
npm install
node scripts\generate-rpe-jewish-life-coverage.mjs rpe-delivery-docs\RPE-CHAPTER2-KNOWLEDGE-COVERAGE.csv
node scripts\validate-rpe-jewish-life.mjs
npx tsc --noEmit
npm run build
```

## Test locally

```powershell
npm run dev
```

Check:

- Year 8 shows an RPE subject card.
- RPE shows Chapter 1 and Chapter 2.
- Chapter 2 opens and contains four sections.
- Learn, Mind Map, Flashcards and all quiz modes work.
- The cross-chapter quiz includes taught sections from both chapters.
- Spring Term and Summer Term still show Coming soon.

## Git and push

Run only after the local checks pass:

```powershell
git status
git add app data scripts rpe-delivery-docs tsconfig.json
git commit -m "Add Year 8 RPE Chapter 2 Jewish life"
git push origin main
```
