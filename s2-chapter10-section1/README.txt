S2 Chapter 10 Section 10.1 — Sum of Interior Angles of a Polygon

Extract s2-chapter10-section1 into E:\Projects\pw-learning-hub.
From the project terminal run:
node s2-chapter10-section1/install.cjs
npm run build

Visit /maths/s2/chapter-10/sum-of-interior-angles

Requires the Chapter 10 homepage supplied earlier. Installs the section and
reuses the shared SVG geometry. Updates the homepage lesson link and preserves
a .bak copy of the previous homepage. Conflicting files stop installation
before any changes. Repeating the same installation is safe.
Optional: node s2-chapter10-section1/install.cjs --dry-run

Includes interactive triangulation, angle sums, missing angles, finding the
number of sides, regular polygons and 8 locally checked questions.
Book reference: angle-sum notation shown as “∠ sum of polygon”.
Practice responses are kept only while the page is open; no database changes.

Verified: isolated strict TypeScript, server rendering, SVG visual inspection,
answer checking/reset and installer preflight/repeat/conflict behaviour.
Full Next.js project build must be run in your project.
