# Azure Speech Setup

Add these server environment variables locally and in Vercel:

```text
AZURE_SPEECH_KEY
AZURE_SPEECH_REGION
SPEECH_RATE_LIMIT_PER_10_MINUTES (optional, default 20)
SPEECH_DAILY_ATTEMPT_CAP (optional, default 100)
```

Never prefix the key with `NEXT_PUBLIC_`. Redeploy after changing Vercel variables. Recognition is fixed to `es-ES`. The browser receives a short-lived authorization token, never the subscription key.
