# Karyotica Migration Prep

This folder captures the reusable structure and content contracts extracted from the static HTML site so the project can be migrated gradually into a Next.js App Router codebase.

## Target shape

- `app/layout.tsx` owns the shared shell.
- Route pages render page-specific content only.
- Shared behavior stays aligned with `assets/global.css` and `assets/global.js` during the first migration pass.

## Shared component targets

- `SiteHead`
- `Header`
- `PrimaryNav`
- `MobileNav`
- `OffcanvasQuoteForm`
- `Footer`
- `BackToTop`
- `HeroSection`
- `StatsSection`
- `ProductShowcase`
- `FeatureListSection`
- `TestimonialSection`

## Source notes

- The static pages now expose `data-route`, `data-page-type`, and `data-source-file` on `<body>`.
- Navigation active state is route-aware in `assets/global.js` instead of being hard-coded per page.
- Site forms are marked `data-submit-mode="ui-only"` and no longer depend on WordPress form payload attributes.
- `migration/content/*.json` files are intended to become the first local content modules in the Next.js project.
