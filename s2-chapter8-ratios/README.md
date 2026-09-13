# S2 Chapter 8 · Section 8.2 Ratios

Place the s2-chapter8-ratios folder beside package.json. Run from your project root:

```sh
node s2-chapter8-ratios/install.cjs
npm run build
```

Open /maths/s2/chapter-8/ratios. Requires the Chapter 8 homepage with Section 8.1 already enabled. The installer backs up the homepage and enables Section 8.2. It refuses different existing lesson files or an unmatched homepage.

Includes ratio meaning and order, equivalent ratios, units/decimals/fractions, three-term ratios, combining ratios, sharing a total, known shares and differences, and ten questions with immediate feedback and worked solutions. Interactive equal-part SVG bars compare 2:3 and 2:3:5. Practice is session-only and is not stored in Supabase.

Validated strict TypeScript with Next stubs, initial React render, answer table and input rejection, ratio diagram rendering and visual inspection, installation/repeat installation, CRLF preservation and both lesson links. Full project build and interactive browser checks remain local.

The preview.html file is an initial-state static preview; controls require the installed React page. To undo, restore homepage.tsx.bak from chapter8-ratios-backup-* to app/maths/s2/chapter-8/page.tsx and remove the new ratios/page.tsx.
