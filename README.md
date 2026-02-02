# Home Remodel Budget

A comprehensive budget tracking system for home remodeling projects, consisting of:
- **Apps Script**: Google Apps Script application for budget management interface
- **Cloudflare Worker**: API backend for budget data

## Project Structure

```
├── appsscript/           # Google Apps Script project
│   ├── src/              # Apps Script source code
│   ├── appsscript.json   # Apps Script configuration
│   └── package.json      # Node.js dependencies
│
├── cloudflare-worker/    # Cloudflare Worker API
│   ├── src/              # Worker source code
│   ├── wrangler.toml     # Cloudflare configuration
│   └── package.json      # Node.js dependencies
│
└── .github/
    └── workflows/        # CI/CD workflows
        ├── appsscript-deploy.yml
        └── cloudflare-deploy.yml
```

## Getting Started

### Apps Script Setup

See [appsscript/README.md](./appsscript/README.md) for detailed setup instructions.

**Required Secrets:**
- `CLASP_JSON`: Contents of `.clasp.json` with your script ID
- `CLASPRC_JSON`: Contents of `.clasprc.json` with authentication

### Cloudflare Worker Setup

See [cloudflare-worker/README.md](./cloudflare-worker/README.md) for detailed setup instructions.

**Required Secrets:**
- `CLOUDFLARE_API_TOKEN`: API token with Worker deployment permissions

## CI/CD

Both projects have independent CI/CD workflows:

- **Apps Script**: Deploys automatically when changes are pushed to `appsscript/` directory
- **Cloudflare Worker**: Deploys automatically when changes are pushed to `cloudflare-worker/` directory

Both workflows can also be triggered manually via GitHub Actions.

## Development

Each project can be developed and deployed independently. See the individual README files in each directory for specific instructions.