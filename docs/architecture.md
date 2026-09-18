# Architecture

## System boundary

The public site is static by default. Agent execution, provider keys and internal tooling remain outside the public web tier.

```text
Visitor → static site → protected, narrow API → specific agent service
```

The first release does not need a public API. Contact uses a direct email link.

## Planned platform

| Concern | Choice |
|---|---|
| Framework | Astro with TypeScript |
| Content | MDX files in the repository |
| Client interaction | React islands only where justified |
| Styling | Custom CSS design system |
| Hosting | Cloudflare Workers with static assets |
| DNS | Cloudflare |
| Source control | Public GitHub repository |
| Delivery | Pull request preview, production from `main` |

## Security principles

- No secrets or agent credentials in browser code or repository history.
- No open-ended agent execution from the public site.
- New public endpoints require input validation, rate limiting and explicit cost controls.
- Third-party scripts require a clear purpose.

