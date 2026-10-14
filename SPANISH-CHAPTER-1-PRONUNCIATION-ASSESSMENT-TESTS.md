# Spanish Pronunciation Assessment Tests

- Target IDs are resolved on the server from trusted Spanish KO data.
- Authentication is required before an Azure token is issued.
- Per-user short-window and daily request limits are applied.
- Azure key and region are read only from server environment variables.
- Client uses `es-ES` with phoneme granularity and returns Accuracy, Fluency, Completeness and Pronunciation scores.
- Unsupported prosody/content scores are not exposed.
- Recording starts only after a student action and can be stopped by the student.
- The application does not save raw audio or pronunciation scores.
- Privacy text states that audio is sent to Azure for assessment and is not saved by the application.
- Pronunciation is formative and excluded from quiz marks.

Status: static/security validation and production build passed. A live score requires a signed-in user, microphone permission and valid Azure variables in Vercel.
