# French Azure Speech Setup

French reuses the same Azure Speech resource as Spanish. Add these server environment variables locally and in Vercel:

```text
AZURE_SPEECH_KEY
AZURE_SPEECH_REGION
SPEECH_RATE_LIMIT_PER_10_MINUTES (optional, default 20)
SPEECH_DAILY_ATTEMPT_CAP (optional, default 100)
```

Never prefix the key with `NEXT_PUBLIC_`. Redeploy after changing Vercel variables. French recognition is fixed to `fr-FR`. The browser receives a short-lived authorization token, never the subscription key.
