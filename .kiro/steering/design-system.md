# Design System & Styling Guide

## CSS Framework

Tailwind CSS v4 is imported via `@import "tailwindcss"` in `src/app/globals.css`. There is **no `tailwind.config.js`** — theme tokens are declared inline using the `@theme` block in `globals.css`.

## Color Tokens

Defined under `@theme` in `globals.css`. Always use these CSS custom properties / Tailwind utility names — do not hardcode hex values.

The site uses a **dark theme** throughout.

| Token | Utility class | Value | Usage |
|---|---|---|---|
| `--color-primary` | `bg-primary`, `text-primary` | `#C084FC` (purple) | Main brand color, CTAs, active states, accent text |
| `--color-primary-dark` | `bg-primary-dark`, `text-primary-dark` | `#A855F7` | Hover on primary elements |
| `--color-secondary` | `bg-secondary`, `text-secondary` | `#F0ABFC` (light purple-pink) | Gradient accents, decorative elements |
| `--color-secondary-dark` | `bg-secondary-dark` | `#E879F9` | Hover on secondary elements |
| `--color-accent` | `bg-accent`, `text-accent` | `#818CF8` (indigo) | Tertiary accents, gradients |
| `--color-accent-dark` | `bg-accent-dark` | `#6366F1` | Hover on accent elements |
| `--color-bg` | `bg-bg` | `#09090B` | Default dark page background |
| `--color-bg-alt` | `bg-bg-alt` | `#111113` | Alternate section backgrounds |
| `--color-bg-card` | `bg-bg-card` | `#18181B` | Card / panel backgrounds |
| `--color-border` | `border-border` | `#27272A` | All borders and dividers |
| `--color-text` | `text-text` | `#FAFAFA` | Primary body text (near white) |
| `--color-text-light` | `text-text-light` | `#A1A1AA` | Secondary/muted text |
| `--color-text-lighter` | `text-text-lighter` | `#52525B` | Placeholder / disabled text |

> Note: On `bg-primary` buttons, use `text-bg` (not `text-white`) so the button text uses the dark background color token.

## Typography

- Font: `Inter` loaded via `next/font/google` with `variable: "--font-inter"`
- `--font-sans` and `--font-heading` both resolve to Inter
- The `inter.variable` class is applied to `<html>` in the root layout

## Layout Conventions

- Max content width: `max-w-7xl mx-auto`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16` to `py-20`
- Navigation is `fixed top-0` with `z-50`; pages compensate via the `PageHero` component's `pt-24`

## Section Alternation Pattern

Pages alternate backgrounds for visual rhythm:

```
Section 1: bg-white
Section 2: bg-bg-alt
Section 3: bg-white
...
```

Special sections (CTAs, hero) often use a gradient: `bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`

## Decorative Backgrounds

Hero and page hero sections use blurred circle decorations:

```tsx
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
```

## Card Patterns

Standard card:
```tsx
<div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all">
```

Highlighted card (bg-alt):
```tsx
<div className="bg-bg-alt p-6 rounded-xl">
```

## Button Patterns

Primary CTA:
```tsx
<Link className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25">
```

Outline CTA:
```tsx
<Link className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
```

Ghost CTA:
```tsx
<Link className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
```

## Badge / Pill Pattern

Used above section headings:
```tsx
<span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
  Label
</span>
```

## Image Placeholders

Real images are not yet integrated. Placeholder pattern:
```tsx
<div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl flex items-center justify-center">
  <span className="text-text-lighter text-sm">Description</span>
</div>
```

Image paths follow the convention `/images/<category>/<filename>` (not yet populated in `/public`).
