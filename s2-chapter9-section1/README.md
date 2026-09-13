# S2 Chapter 9 Section 9.1

Simple Proofs Involving Congruent Triangles and Similar Triangles.

Requires the Chapter 9 homepage package, including its shared geometry component.
Extract this folder beside package.json and run:

```
node s2-chapter9-section1/install.cjs
npm run build
```

Open /maths/s2/chapter-9/simple-proofs.

The installer creates the lesson and patches the homepage to enable 9.1. It backs up the homepage first and stops on an unrecognised homepage or differing existing lesson. Keep source payloads as .txt inside the package.

Three worked examples use Statement / Reference tables with textbook-style short references (given, common side, alternate/corresponding/vertically opposite angles, AAS/SAS/AAA and corresponding parts). Includes one written proof task and eight self-check questions with explanations. Practice answers are temporary page state; no Supabase changes.

Validated using isolated strict TypeScript, React rendering, visual inspection of three SVG diagrams, installer and repeat installation. Full Next build and browser behaviour require checking in your project.
