# Portifolio

Personal portfolio built with **Vite + React + TypeScript**, styled with **Tailwind CSS**, and using **shadcn/ui** components.

## Overview

This project presents GitHub-powered portfolio sections (hero, pinned repositories, activity, contribution heatmap, and contact) plus a small **Hub** page that centralizes internal and external links.

## Tech stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Vitest + Testing Library

## Getting started

### Prerequisites

- Node.js 18+ (recommended LTS)
- npm

### Install dependencies

```bash
npm install
```

> If your npm version reports peer dependency resolution issues, run:
>
> ```bash
> npm install --legacy-peer-deps
> ```

### Start development server

```bash
npm run dev
```

### Production build and preview

```bash
npm run build
npm run preview
```

## Available scripts

- `npm run dev` — start local development server
- `npm run build` — generate production bundle
- `npm run build:dev` — generate development-mode bundle
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
- `npm run test` — run tests once with Vitest
- `npm run test:watch` — run Vitest in watch mode

## Main routes

- `/` — portfolio homepage
- `/hub` — hub with quick links
- `/privacy-policy` — privacy policy template page

## Project structure (high level)

```text
src/
  components/      # reusable UI and feature components
  pages/           # route-level pages
  hooks/           # custom React hooks
  data/            # cached/static data used by the app
  lib/             # utility helpers
```

## Notes

- The project uses `BrowserRouter` with `basename={import.meta.env.BASE_URL}` to support deployments under subpaths.
- Some lint issues may pre-exist in files unrelated to current feature pages/components.
