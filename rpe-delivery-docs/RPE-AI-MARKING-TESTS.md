# RPE AI marking tests

The shared route now contains an explicit `RPE` marking branch. It instructs the model to mark only against trusted criteria, preserve religious attribution, reject mixed-up people / covenants / events / explanations, apply the contradiction rule and remain neutral about a student's position.

## Required test cases

1. **Zero mark — covenant confusion:** says the Abrahamic Covenant was made with Moses and gives Mosaic responsibilities as Abrahamic promises.
2. **Partial — covenant answer:** correctly identifies Abraham but omits descendants or the Promised Land.
3. **Full — covenant answer:** accurately explains all criteria with correct attribution.
4. **Zero mark — event confusion:** says Batya placed Moses in the river or that Yocheved was Pharaoh's daughter.
5. **Partial — Exodus sequence:** includes the plagues and Red Sea but omits why the Israelite homes were passed over.
6. **Full — Exodus sequence:** covers the Burning Bush, refusal, plagues, Passover signs, Red Sea and Sinai in order.
7. **Equivalent wording:** accepts `a reason to doubt a report` as the meaning of `defeater`.
8. **Wrong explanation:** does not award a physical-explanation criterion when the answer only discusses emotions.
9. **Incomplete explanation:** keywords such as `brain` or `expectations` without the required link are not automatically Met.
10. **Contradiction:** a correct statement followed by an explicit denial does not receive the relevant mark.
11. **Evaluation neutrality:** religious, non-religious and undecided conclusions can all receive the conclusion mark when supported.
12. **No personal disclosure:** feedback must not ask the student to reveal their religion or private experience.
13. **Server trust:** the client submits question ID and answer only; the server retrieves the trusted question and criteria.
14. **Score reconciliation:** awarded score equals the count of criteria marked `met`.
15. **Failure path:** an API failure returns a safe retry message and exposes no API key.

Live OpenAI response tests were not executed because no production API credential was included in the uploaded ZIP. They must be run locally after installing the package, using the existing server-side key.

