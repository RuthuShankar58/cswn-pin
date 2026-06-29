# Coding Conventions

## File Structure

```
src/
├── app/            # Next.js App Router pages
│   ├── [page]/
│   │   ├── layout.tsx   # Page-level metadata
│   │   └── page.tsx     # Page component
│   ├── globals.css      # Tailwind + design tokens
│   ├── layout.tsx       # Root layout (Navigation + Footer)
│   └── page.tsx         # Homepage
├── components/     # Shared UI components
└── data/           # Static data (TypeScript modules)
```

## Patterns

### Pages
- Each route has its own folder under `src/app/`
- Every route folder has a `layout.tsx` that exports `Metadata` for SEO
- Page components are default exports in `page.tsx`
- Use `PageHero` component for consistent page headers

### Components
- Components live in `src/components/`
- Use `"use client"` directive only when the component needs interactivity (state, effects, event handlers)
- Prefer Server Components by default
- Props interfaces are defined inline above the component

### Data
- Static content lives in `src/data/*.ts` as typed arrays/objects with exported interfaces
- Use this pattern to keep page components clean and data easily editable

### Styling
- Use Tailwind CSS utility classes exclusively — no custom CSS classes outside `globals.css`
- Reference design tokens via Tailwind (e.g., `text-primary`, `bg-bg-alt`)
- Responsive design uses Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Common layout: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### TypeScript
- Strict mode enabled
- Export interfaces from data files for reuse
- Use `type` imports where appropriate (`import type { Metadata }`)

### Links
- Internal links use Next.js `<Link>` component
- External links use `<a>` with `target="_blank" rel="noopener noreferrer"`

### Accessibility
- Images/icons need descriptive alt text or aria-labels
- Interactive elements need `aria-label` and `aria-expanded` where relevant
- Semantic HTML elements (`<section>`, `<nav>`, `<footer>`, `<main>`)
