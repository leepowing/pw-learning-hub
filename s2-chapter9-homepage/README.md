# S2 Chapter 9 — Congruence and Similarity (II)

Chapter homepage with an outline of Sections 9.1–9.4, prerequisite reminders, an AAS proof preview, an adjustable isosceles triangle, corresponding plane figures and a quick check.

Extract s2-chapter9-homepage beside package.json, then run:

```
node s2-chapter9-homepage/install.cjs --dry-run
node s2-chapter9-homepage/install.cjs
npm run build
```

Open /maths/s2/chapter-9. The package creates the homepage and components/maths/S2Chapter9Geometry.tsx. It refuses to overwrite different existing files. Section lessons, checkpoint and flashcards are labelled as coming soon and will be added separately. The S2 chapter-list page is not modified.

Geometry uses coordinates computed from lengths/angles, SVG circular arcs, perpendicular side ticks and shared drawing components. Written parallel notation uses //. Interactive choices are temporary page state.

Validation: strict isolated TypeScript, React rendering, seven rendered diagram states visually inspected, install/reinstall, and conflicting-file preflight without partial writes. The full Next.js build and browser behaviour must be checked in your project.
