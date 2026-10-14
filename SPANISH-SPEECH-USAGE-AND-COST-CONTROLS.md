# Speech Usage and Cost Controls

The protected token route requires authentication, validates a trusted target ID, limits requests per user and applies a configurable daily cap. Keep the Azure resource on Free F0 where available, configure an Azure budget alert, and monitor usage in Azure. The in-memory app counters are a safety layer, not a billing guarantee. If configuration, quota or Azure is unavailable, the UI falls back to listen-and-practise mode.
