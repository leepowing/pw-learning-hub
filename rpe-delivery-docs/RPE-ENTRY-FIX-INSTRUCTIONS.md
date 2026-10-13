# RPE Entry and Chapter List Fix

This patch restores the Year 8 RPE subject entry and registers both RPE chapters.

## Install

1. Extract the ZIP with **Extract All**.
2. Open the extracted folder. Its first level must show `app`, `data`, `scripts` and `rpe-delivery-docs`.
3. Select those folders and copy them into `E:\Projects\pw-learning-hub`.
4. Choose **Replace the files in the destination**.
5. Stop the existing development server with `Ctrl+C`.
6. Delete the `.next` cache folder if it exists.
7. Restart and validate:

```powershell
cd E:\Projects\pw-learning-hub
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
node scripts\validate-rpe-moses.mjs
node scripts\validate-rpe-jewish-life.mjs
npm run build
npm run dev
```

Then open:

- `http://localhost:3000/knowledge-organisers/year8`
- `http://localhost:3000/knowledge-organisers/year8/rpe`

The first page must show the RPE card. The RPE page must show Chapter 1 and Chapter 2, followed by Spring and Summer Coming soon cards.
