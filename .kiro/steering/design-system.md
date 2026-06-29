---
inclusion: fileMatch
fileMatchPattern: "**/*.tsx,**/*.css"
---

# Design System & Tokens

## Color Palette

Defined in `src/app/globals.css` via `@theme`:

| Token             | Value     | Usage                        |
|-------------------|-----------|------------------------------|
| `primary`         | `#7CC6FE` | Main brand blue, buttons, links, accents |
| `primary-dark`    | `#5BB0ED` | Hover state for primary      |
| `secondary`       | `#F8BBD9` | Soft pink accent, badges     |
| `secondary-dark`  | `#E99BC0` | Hover state for secondary    |
| `accent`          | `#A78BFA` | Purple highlight             |
| `accent-dark`     | `#8B5CF6` | Hover state for accent       |
| `bg`              | `#FFFFFF` | Default background           |
| `bg-alt`          | `#F8FBFF` | Alternating section background |
| `text`            | `#1F2937` | Primary text                 |
| `text-light`      | `#6B7280` | Secondary/muted text         |
| `text-lighter`    | `#9CA3AF` | Placeholder/disabled text    |

## Typography

- Font: Inter (loaded via `next/font/google`)
- Headings: `font-bold`, sizes range from `text-2xl` to `text-6xl`
- Body: default size, `text-text-light` for secondary content
- Section badges: `text-sm font-medium` in colored pill (`rounded-full px-4 py-1.5`)

## Component Patterns

### Section Layout
```tsx
<section className="py-20 bg-white"> {/* or bg-bg-alt for alternating */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section badge */}
    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
      Badge Text
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Section Title</h2>
    <p className="text-text-light max-w-2xl mx-auto">Subtitle text</p>
  </div>
</section>
```

### Cards
```tsx
<div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
  {/* Card content */}
</div>
```

### Buttons
- Primary: `px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/25`
- Secondary/Outline: `px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5`
- Ghost: `bg-white text-text border border-gray-200 hover:bg-gray-50`

### Decorative Blobs
Used on hero sections for visual interest:
```tsx
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
```

## Spacing

- Section vertical padding: `py-16` to `py-20`
- Grid gaps: `gap-6` to `gap-8`
- Component internal padding: `p-6` for cards
- Responsive container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
