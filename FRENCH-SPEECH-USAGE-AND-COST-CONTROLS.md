# French Speech Usage and Cost Controls

- Browser Listen uses device speech synthesis and does not call Azure.
- Azure is called only when a learner starts pronunciation assessment.
- Default controls limit one client to 20 token requests per 10 minutes and 100 attempts per day; both are configurable server-side.
- Keep practice targets short and use retry only when needed.
- Monitor the Azure Speech resource's usage and billing alerts; free allowance and prices depend on the active Azure plan and region.
- If a cap is reached, non-speech learning, flashcards, quizzes and AI/self-marking remain available.
