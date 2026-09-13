# S2 Chapter 8 — Section 8.3 Proportions

Extract this folder beside your project's package.json, then run:

```sh
node s2-chapter8-proportions/install.cjs
npm run build
```

Open /maths/s2/chapter-8/proportions after starting your site.

The installer creates the lesson and enables its Chapter 8 homepage link. It backs up the homepage before changing it, preserves the Rates and Ratios links, and refuses to overwrite a different existing lesson. Keep this package's source payloads as .txt; do not rename them inside the package.

Includes proportions, cross multiplication, scale drawings, direct and inverse proportion, SVG graph exploration, and 10 self-check questions with worked answers. Axes begin at zero. The inverse curve is undefined at x = 0. Practice answers are held in page state and reset on reload; they are not saved to Supabase.

Validated with isolated strict TypeScript checking, React server rendering, arithmetic and answer validation checks, all 12 graph states, visual inspection of both graph types, and installation/reinstallation with CRLF homepage preservation. Run the full production build in your project and check the page in your browser.
