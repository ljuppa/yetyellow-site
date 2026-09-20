# Yetyellow

Yetyellow is a personal profile site for engineering leadership and applied AI in complex engineering organisations.

The public site presents a point of view on AI adoption, grounded in experience leading software delivery. The first release establishes the identity, principles and current direction. Project case studies will be added only when there is real work to show.

## Status

The Astro site includes Home, About, Now, Contact and a 404 route. It is intended for deployment on Vercel at `https://yetyellow.nl`.

The Contact page posts to a Vercel function which sends email through Resend to the Hostinger business mailbox. Before deploying the form, set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` in Vercel. Use [.env.example](.env.example) as the reference and do not commit the real API key.

## Documentation

- [Product brief](docs/product-brief.md)
- [Architecture](docs/architecture.md)
- [Design system](docs/design-system.md)
- [Content model](docs/content-model.md)
- [Delivery model](docs/delivery.md)
- [Architecture decisions](docs/adr/)

## Planned stack

Astro, TypeScript, custom CSS, Vercel Functions and Resend.
