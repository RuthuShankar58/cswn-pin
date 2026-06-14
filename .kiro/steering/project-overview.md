# CSWN Website — Project Overview

## What This Is

The official website for the **Computer Science Women's Network (CSWN)** at Purdue University Indianapolis. It is a Next.js 16 / React 19 static-content site styled with Tailwind CSS v4.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| UI Library | React 19.2.4 |
| Styling | Tailwind CSS v4 via `@tailwindcss/postcss` |
| Language | TypeScript 5 (strict mode) |
| Fonts | Inter via `next/font/google` |
| Linting | ESLint 9 with `eslint-config-next` |

> **Important:** This project uses **Next.js 16** and **React 19** — both are beyond common training data. Read `node_modules/next/dist/docs/` before writing framework-specific code. Do not assume Next.js 13/14/15 APIs apply here.

## Path Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Scripts

```
npm run dev      # start dev server
npm run build    # production build
npm run start    # start production server
npm run lint     # run ESLint
```

## Repository Structure

```
src/
  app/           # Next.js App Router pages + layouts
  components/    # Shared UI components
  data/          # Static TypeScript data files (the "database")
public/          # Static assets (SVGs)
```

## Organization Context

- **CSWN** = Computer Science Women's Network
- Purdue University Indianapolis campus
- 150+ members, 40+ events/year, 14 industry speakers, 5+ corporate partners
- Contact email: `cswn@purdue.edu`
- Instagram: `https://www.instagram.com/cswn.indy/`
- LinkedIn: `https://www.linkedin.com/company/105267243/`
- BoilerLink: `https://boilerlink.purdue.edu/organization/computersciencewomensnetworkindy`
