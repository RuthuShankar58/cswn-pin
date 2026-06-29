---
inclusion: manual
---

# CSWN Website Rebuild — Full Build Plan

## Status: NOT STARTED — waiting for user to say "start building"

## Decisions Made

- **Backend:** SQLite + Prisma (deployed on Vercel with file-based DB or switch to Vercel Postgres if needed)
- **Deployment:** Vercel (CNAME `cswnindy.cs.purdue.edu` to Vercel)
- **Removed pages:** Consolidate /about, /speaker-series, /resources, /gallery, /spotlights, /get-involved, /contact into 5 main pages
- **Images:** Use `cswnlogo.png` (already in project, icon only). All other images use labeled placeholders.
- **Content gaps:** Use Latin placeholder text for bios, descriptions, attendance numbers, etc.
- **Google Form links:** Use `#placeholder` for now
- **Admin creds:** Seed `shanka61@purdue.edu` / `Ruthu123` via environment variables (not hardcoded in repo)

---

## Site Structure (5 pages)

### 1. Home (`/`)
- Hero section with tagline + CTA ("Join Us" / "View Events")
- Animated stats counter (100+ Members, 15+ Events, Industry Partners)
- Featured events carousel
- Short mission statement / about preview
- 🌸 Flower bloom animation (interactive, increments with visits)
- Light/dark mode toggle in nav

### 2. Events (`/events`)
- Tab: Upcoming Events (cards with name, date, time, location, description, placeholder image)
- Tab: Past Events (gallery cards with image + short description + attendance placeholder)
- Upcoming events data:
  - Aug 26 — B-Involved
  - Aug 28 — Callout
  - Sep 1 — DITL (Day in the Life Speaker Series)
  - Sep 10 — Coffee and Chat, 4:30–6:30
  - Sep 16 — DITL
  - Sep 25 — AI Build Challenge, SL 112, 4–8:15pm
  - Sep 28 — DITL
  - Oct 7 — Movie Night, North Hall
  - Oct 15 — DITL
  - Oct 23 — Women in Tech Panel, Lilly Auditorium, 5–7pm
  - Nov 12 — Tote Bag + Boba, SL 112, 5–7pm
  - Nov 16 — DITL
  - Dec 2 — Tree Decorating
- Past events (placeholder data):
  - Women in Tech Panel
  - Paint & Boba
  - Halloween Social
  - Breakfast at Midnight
  - Bouquet Making
  - Beyond the Code (Prof. Smart)
  - Chai-deas
- Event hover cards that flip or expand

### 3. Meet the Team (`/members`)
- Executive board profile cards:
  - Ruthu Shankar — President
  - Ria Nimbkar — Vice President
  - Abha Gupta — Treasurer
  - Placeholder — Outreach Chair
  - Placeholder — Treasurer Assistant
  - Placeholder — Secretary
- Card content: Name, Role, Lorem ipsum bio, Email placeholder, initials avatar
- "Apply Now" button per role → `#placeholder` Google Form link

### 4. Sponsors (`/sponsors`)
- Sponsorship packet section (placeholder download link)
- "Why partner with us" section:
  - Access to talent
  - Diversity impact
  - Event exposure
- CTA: "Become a Sponsor" → mailto:cswn@purdue.edu

### 5. Portal / Membership (`/portal`)
- Auth pages (login / signup)
- Member dashboard:
  - Attendance pie chart (recharts)
  - "You've attended X events this year"
  - Upcoming events list with category colors (Pink=Social, Blue=Technical, Purple=DITL)
  - "Join Event" button per event
- Admin dashboard (accessible by admin account):
  - Event CRUD (create, edit, delete, launch)
  - "Launch Event" button → makes event joinable
  - Set event active duration
  - Attendance tracking (user list + events joined)
  - "Reset Attendance" button (year reset)

---

## Backend Schema (SQLite + Prisma)

### Users
- id (Int, autoincrement)
- name (String)
- email (String, unique)
- password (String, hashed)
- role (enum: MEMBER, ADMIN)
- events_attended (Int, default 0)

### Events
- id (Int, autoincrement)
- name (String)
- date (DateTime)
- time (String, optional)
- location (String, optional)
- description (String)
- category (enum: SOCIAL, TECHNICAL, DITL)
- is_active (Boolean, default false)
- image (String, optional)

### Attendance
- id (Int, autoincrement)
- user_id (Int, FK → Users)
- event_id (Int, FK → Events)
- status (enum: JOINED, ATTENDED)

### Admin seed
- Email: from env var ADMIN_EMAIL
- Password: from env var ADMIN_PASSWORD (hashed)

---

## Design System Changes

### Colors
- Light mode: Blue (#7CC6FE), White, Pink (#F8BBD9)
- Dark mode: Blue (#7CC6FE), near-black (#0F172A), Pink (#F8BBD9)
- Soft gradients between pink/blue
- Glowing accents on hover

### Visual Features
- Dark/light mode toggle (persist in localStorage)
- Flower bloom animation on homepage (CSS/Canvas)
- Animated stats counter (Intersection Observer)
- Event cards with flip/expand hover effects
- Subtle particle/floating UI elements
- Feminine-tech aesthetic — polished, not childish

### Typography
- Keep Inter font
- Clean hierarchy

---

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (dark mode via class strategy)
- Prisma + SQLite
- NextAuth or custom JWT auth
- recharts (pie chart)
- Deployed on Vercel

---

## Dependencies to Add
- prisma + @prisma/client
- bcrypt (password hashing)
- recharts
- next-auth (or lightweight custom JWT)
- Possibly: framer-motion or CSS animations for flower/particles

---

## Build Order
1. Set up Prisma + SQLite schema + seed
2. Restructure nav + layout (5 tabs + dark mode)
3. Build Home page (hero, stats, carousel, flower animation)
4. Build Events page (upcoming/past tabs)
5. Build Meet the Team page
6. Build Sponsors page
7. Build Portal (auth + member dashboard + admin dashboard)
8. Polish (animations, hover effects, responsive, accessibility)
9. Verify build passes
