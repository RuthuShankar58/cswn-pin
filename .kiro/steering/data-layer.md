# Data Layer

All site content lives as **static TypeScript files** in `src/data/`. There is no database, CMS, or API. Each file exports typed interfaces and data arrays.

## Files & Their Exports

### `src/data/events.ts`
- `CSWNEvent` interface: `id`, `title`, `date`, `time?`, `location?`, `description`, `category`, `image?`, `registrationLink?`, `isPast?`
- `recurringPrograms` — array of ongoing programs (DITL, Resume Roast, Coffee & Chat, etc.)
- `eventCalendar` — typed `CSWNEvent[]` listing the semester schedule

Event categories: `"meeting" | "speaker" | "social" | "professional" | "competition" | "outreach"`

### `src/data/leadership.ts`
- `Leader` interface: `id`, `name`, `position`, `major?`, `graduationYear?`, `linkedin?`, `bio?`, `image?`
- `leadership` — array of exec board members (currently placeholder names = position titles)

### `src/data/speakers.ts`
- `Speaker` interface: `id`, `name`, `title?`, `company?`, `bio?`, `image?`, `linkedin?`, `topic?`, `date?`, `isPast?`
- `speakers` — 14 named speakers (real names, placeholder images/details)

### `src/data/sponsors.ts`
- `Sponsor` interface: `id`, `name`, `logo?`, `website?`, `tier`, `description?`
- `sponsors` — 5 current sponsors (Salesforce, OneAmerica, Fifth Third Bank, Merrill Lynch, Faegre Drinker)
- `sponsorshipTiers` — Platinum/Gold/Silver/Bronze tier definitions with `price` and `benefits[]`

Sponsor tiers: `"platinum" | "gold" | "silver" | "bronze"`

### `src/data/spotlights.ts`
- `Spotlight` interface: `id`, `name`, `type`, `title`, `description`, `image?`, `graduationYear?`, `company?`, `quote?`
- `spotlights` — 4 placeholder spotlight entries

Spotlight types: `"internship" | "research" | "scholarship" | "award" | "alumni" | "ta"`

### `src/data/resources.ts`
- `Resource` interface: `id`, `title`, `description`, `url?`, `category`, `icon?`
- `resourceCategories` — 7 categories, each with inline `resources[]` array
  - Categories: `resume`, `interview`, `internships`, `scholarships`, `organizations`, `career`, `technical`

### `src/data/gallery.ts`
- `GalleryImage` interface: `id`, `src`, `alt`, `album`, `date?`
- `GalleryAlbum` interface: `id`, `title`, `description`, `coverImage`, `imageCount`, `date?`
- `galleryAlbums` — 6 albums (speaker-series, networking-events, workshops, social-events, company-visits, general-meetings)

## Conventions for Data Changes

- Add new entries by appending to the relevant array in the data file.
- Keep interfaces in the same file as the data they type.
- Images are referenced as `/images/<category>/<filename>` paths — they are **not yet present** in `/public`. When adding real images, place them at the corresponding path and update the `image`/`src`/`logo`/`coverImage` field.
- Leadership `name` fields currently hold placeholder role titles. When real names are provided, update both `name` and ensure `id` remains kebab-case and unique.
