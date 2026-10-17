# Live Family Quiz — Science Diagram Type Fix

This small compatibility fix is for PW Learning Hub projects that already include the newer Science diagram types.

Copy the `lib` and `components` folders into `E:\Projects\pw-learning-hub` and replace the two existing files.

Then run:

```cmd
cd /d E:\Projects\pw-learning-hub
rmdir /s /q .next
npm run build
```

The fix adds support for photosynthesis, leaf, digestive-system, filtration, distillation, chromatography and evaporation diagrams.
