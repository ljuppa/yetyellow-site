# ADR 0001: Use Astro and Cloudflare Workers

## Status

Accepted

## Context

The first release is content-led and static by default, but later work may need protected, lightweight APIs.

## Decision

Use Astro with TypeScript and MDX. Deploy on Cloudflare Workers with static assets. Use custom CSS and add client-side islands only when they provide clear value.

## Consequences

The first release stays small and fast. Future server-side work must respect the Workers runtime and its Node.js compatibility boundaries.

