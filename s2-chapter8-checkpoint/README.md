# S2 Chapter 8 Checkpoint

Extract s2-chapter8-checkpoint beside package.json. Run:

```
node s2-chapter8-checkpoint/install.cjs
npm run build
```

Open /maths/s2/chapter-8/checkpoint.

Includes 16 original questions covering Rates, Ratios and Proportions, full explanations, topic scores and reset. Check all answers submits the attempt, including unanswered questions. Editing an answer hides the previous results until checked again. Answers are page state only; they are not saved to Supabase.

The installer backs up and patches the Chapter 8 homepage, preserving lesson links. It refuses a different existing checkpoint or an unrecognised homepage. Keep payloads as .txt to avoid compiling duplicate source files.

Validation: isolated strict TypeScript and React rendering, independently calculated answers, installation/reinstallation and CRLF preservation. Run the full Next.js build and browser checks in your project.
