---
inclusion: manual
---

# Adding New Pages

Follow this checklist when creating a new page for the CSWN website.

## Steps

1. **Create the route folder** at `src/app/<page-name>/`

2. **Create `layout.tsx`** with page-specific metadata:
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | CSWN - Computer Science Women's Network",
  description: "Brief description for search engines.",
};

export default function PageNameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

3. **Create `page.tsx`** with the page component:
```tsx
import PageHero from "@/components/PageHero";

export default function PageName() {
  return (
    <>
      <PageHero
        title="Page Title"
        subtitle="Description of this page"
        badge="Optional Badge"
      />
      {/* Page content sections */}
    </>
  );
}
```

4. **Add to navigation** in `src/components/Navigation.tsx` (add to `navLinks` array)

5. **Add to footer** in `src/components/Footer.tsx` (add to appropriate `footerLinks` category)

6. **If the page uses data**, create a typed data file in `src/data/<page-name>.ts`:
```tsx
export interface ItemType {
  id: string;
  title: string;
  // ...
}

export const items: ItemType[] = [
  // ...
];
```

## Naming Conventions

- Route folders: kebab-case (`speaker-series`, `get-involved`)
- Components: PascalCase (`PageHero.tsx`)
- Data files: kebab-case matching the route (`speakers.ts`, `events.ts`)
