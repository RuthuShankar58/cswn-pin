# CSWN Website - Project Overview

## About

This is the official website for the Computer Science Women's Network (CSWN) at Purdue University Indianapolis. It's a student organization site focused on empowering women and allies in computing through community, events, mentorship, and professional development.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with `@theme` custom tokens
- **Font:** Inter (via next/font/google)
- **Linting:** ESLint 9 with next/core-web-vitals and next/typescript configs
- **Node target:** ES2017

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Path Aliases

- `@/*` maps to `./src/*`

## Important

This project uses **Next.js 16** which has breaking changes from earlier versions. Before writing any Next.js-specific code, consult `node_modules/next/dist/docs/` for current API conventions.
