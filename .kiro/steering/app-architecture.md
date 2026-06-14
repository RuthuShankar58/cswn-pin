# App Architecture

## Routing

Uses the **Next.js App Router**. Every route is a folder under `src/app/` containing:
- `page.tsx` — the page component (default export)
- `layout.tsx` — route-level metadata + layout wrapper

### Route Map

| URL | Folder | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Home — hero, stats, featured events, benefits, sponsors, CTA |
| `/about` | `src/app/about/` | Mission, vision, core values, what we do |
| `/events` | `src/app/events/` | Recurring programs + event calendar |
| `/speaker-series` | `src/app/speaker-series/` | DITL series overview + speaker list |
| `/leadership` | `src/app/leadership/` | Exec board grid + join leadership CTA |
| `/gallery` | `src/app/gallery/` | Filterable album grid with lightbox |
| `/resources` | `src/app/resources/` | Curated resource links by category |
| `/sponsors` | `src/app/sponsors/` | Sponsorship tiers, current partners, engagement |
| `/spotlights` | `src/app/spotlights/` | Member + alumni achievement spotlights |
| `/get-involved` | `src/app/get-involved/` | Membership benefits, join form, committee roles |
| `/contact` | `src/app/contact/` | Contact form, info, social links, FAQ |

## Root Layout (`src/app/layout.tsx`)

Wraps every page. Responsibilities:
- Loads Inter font via `next/font/google`
- Sets site-wide `<Metadata>` (title, description, keywords, OpenGraph)
- Renders `<Navigation />` above and `<Footer />` below `<main>`
- Applies `antialiased` and `min-h-screen` to body/main

**Do not** put page-specific metadata here — use each route's `layout.tsx` instead.

## Per-Route Layouts

Each route folder has a `layout.tsx` that only exports `Metadata` and a passthrough layout:

```tsx
export const metadata: Metadata = {
  title: "Page Title | CSWN",
  description: "...",
};

export default function XLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

Always add this file when creating a new route.

## Server vs. Client Components

- Pages are **Server Components** by default (no `"use client"` directive).
- Add `"use client"` only when a component needs browser APIs or React hooks (`useState`, `useEffect`, `usePathname`, etc.).
- Current client components: `Navigation.tsx`, `GalleryPage`, `GetInvolvedPage`, `ContactPage`.
- **Do not** make a whole page client-side just to use one interactive element — extract the interactive part into a small client component instead, when feasible.

## Metadata Pattern

Site-wide metadata lives in `src/app/layout.tsx`. Page-level overrides live in per-route `layout.tsx` files. Follow this pattern for new routes:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Name | CSWN - Computer Science Women's Network",
  description: "Page-specific description for SEO.",
};
```
