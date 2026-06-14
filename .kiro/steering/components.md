# Shared Components

All reusable components live in `src/components/`. There are currently three.

---

## `PageHero`

**File:** `src/components/PageHero.tsx`  
**Type:** Server Component

Used at the top of every inner page (all routes except `/`). Renders a consistent hero section with decorative background circles, an optional badge pill, a heading, and an optional subtitle.

### Props

```ts
interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}
```

### Usage

```tsx
import PageHero from "@/components/PageHero";

<PageHero
  title="About CSWN"
  subtitle="Empowering women and allies in computing since our founding."
  badge="Our Story"
/>
```

### Notes
- Includes `pt-24` to clear the fixed navigation bar. Do not add extra top padding to the first section after `PageHero`.
- The home page (`/`) does **not** use `PageHero` — it has its own custom hero section.
- Always use `PageHero` as the first element inside the page fragment for all inner pages.

---

## `Navigation`

**File:** `src/components/Navigation.tsx`  
**Type:** Client Component (`"use client"`)

Fixed top navigation bar. Renders the CSWN logo, desktop nav links, and a responsive mobile hamburger menu.

### Behavior
- Uses `usePathname()` to apply an active style (`text-primary bg-primary/10`) to the current route link.
- Mobile menu toggles via local `useState`.
- Accessible: hamburger button has `aria-label` and `aria-expanded`.

### Nav Links (in order)

```
Home / About / Events / Speaker Series / Leadership /
Gallery / Resources / Sponsors / Get Involved / Contact
```

To add a new route to the nav, append to the `navLinks` array in `Navigation.tsx`:

```ts
{ href: "/new-route", label: "New Page" }
```

### Notes
- `z-50`, `fixed top-0`, `bg-white/95 backdrop-blur-sm` — do not change these without updating all page hero/top-padding compensation.

---

## `Footer`

**File:** `src/components/Footer.tsx`  
**Type:** Server Component

Site-wide footer with brand blurb, social icons, and three link columns.

### Link Columns

| Column | Links |
|---|---|
| Organization | About, Leadership, Events, Speaker Series |
| Resources | Student Resources, Sponsors, Gallery, Member Spotlights |
| Connect | Get Involved, Contact Us, Instagram ↗, LinkedIn ↗ |

### Social Links in Footer
- Instagram: `https://www.instagram.com/cswn.indy/`
- LinkedIn: `https://www.linkedin.com/company/105267243/`
- BoilerLink: `https://boilerlink.purdue.edu/organization/computersciencewomensnetworkindy`

### Notes
- External links use `target="_blank" rel="noopener noreferrer"` and display a `↗` suffix.
- Copyright year is generated dynamically via `new Date().getFullYear()`.
- To add a new page to the footer, add it to the relevant array inside the `footerLinks` object.

---

## Adding New Components

Place new shared components in `src/components/` as `PascalCase.tsx`. Follow these conventions:
- Default export the component.
- Server Component by default — add `"use client"` only when hooks or browser APIs are needed.
- Import with the `@/components/` alias.
- Keep component-specific types inline in the same file unless shared across multiple components.
