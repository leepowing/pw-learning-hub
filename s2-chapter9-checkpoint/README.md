# S2 Chapter 9 Checkpoint

Requires the Chapter 9 homepage and shared geometry component.
Extract this folder beside package.json, then run:

```
node s2-chapter9-checkpoint/install.cjs
npm run build
```

Open /maths/s2/chapter-9/checkpoint.

16 items cover concepts, guided proof completion, triangle properties and plane figures. Includes three SVG diagrams, explanations, topic scores and a Statement / Reference model proof. Answers are temporary page state, not saved to Supabase.

The installer backs up and patches the homepage, preserving all four lesson links. It refuses a differing existing checkpoint. Keep payloads as .txt inside this package.

Validated: isolated strict TypeScript, React rendering, three SVG diagrams visually inspected, installation and repeat installation. Full Next build and browser behaviour require checking locally.
