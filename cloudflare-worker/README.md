# Cloudflare Worker

Cloudflare Worker API for home remodel budget tracking.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure Wrangler with your Cloudflare account:
   ```bash
   npx wrangler login
   ```

3. Update `wrangler.toml` with your configuration.

## Development

Run the worker locally:
```bash
npm run dev
```

## Deployment

The CI/CD workflow automatically deploys changes when code is pushed to the `main` branch.

### Manual Deployment

```bash
npm run deploy
```

## Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `GET /projects` - List all projects (TODO)
- `GET /expenses` - List all expenses (TODO)
