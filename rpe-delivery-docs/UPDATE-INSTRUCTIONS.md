# Install Year 8 RPE Chapter 1

Target project: `E:\Projects\pw-learning-hub`

## 1. Back up or commit current work

Run `git status --short` and make sure unrelated local changes are understood before copying this package.

## 2. Copy the package

Copy the package contents into `E:\Projects\pw-learning-hub`, preserving the folder structure.

Chapter-specific files may be added directly. The four shared files in `SHARED-FILES-CHANGELOG.md` were created from `pw-learning-hub(4).zip`, uploaded on 13 October 2026. If any shared file has changed locally since that ZIP was created, stop and merge the RPE diff instead of replacing the newer file.

## 3. No extra setup

- No new npm package
- No SQL
- No Supabase migration
- No new environment variable

Keep the existing `.env.local` and server-side `OPENAI_API_KEY`.

## 4. Validate

```powershell
npm install
node scripts/generate-rpe-moses-coverage.mjs > rpe-delivery-docs/RPE-CHAPTER1-KNOWLEDGE-COVERAGE.csv
node scripts/validate-rpe-moses.mjs
npx tsc --noEmit
npm run build
npm run dev
```

Open:

- `http://localhost:3000/knowledge-organisers/year8`
- `http://localhost:3000/knowledge-organisers/year8/rpe`
- `http://localhost:3000/knowledge-organisers/year8/rpe/autumn/what-happened-to-moses`
- `http://localhost:3000/knowledge-organisers/year8/rpe/revision-quiz`

Use Ctrl+F5 if the browser still shows an older build.

## 5. Git safety

Do not use `git add .` or `git add -A`. After local testing, stage only the RPE files and the four documented shared files.

