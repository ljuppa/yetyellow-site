# ADR 0002: Keep the first release static-first

## Status

Accepted

## Context

There are no live projects or public interactions that need backend execution at launch.

## Decision

Publish Home, About and Now as static content. Use a small Vercel form endpoint for Contact, with Resend sending email to the business mailbox. Defer databases, authentication and live agent demos.

## Consequences

The site has a minimal attack and maintenance surface. New interactive features must justify their operational cost.
