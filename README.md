# Foundation Landing Page

A modern landing page template built with React 19, Vite, Tailwind CSS, and TanStack React Router / React Query. It is designed as a responsive portfolio-style page with accessible UI patterns and Cloudflare-friendly server support.

## Key Features

- React 19 + Vite development experience
- Tailwind CSS for utility-based styling
- TanStack Router for route-driven architecture
- TanStack React Query for data handling and client caching
- Cloudflare Workers-ready bundle via `@cloudflare/vite-plugin`
- Responsive glassmorphism-themed landing page
- Basic SSR error handling and 404 layout

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Useful Scripts

- `npm run dev` — Start Vite in development mode
- `npm run build` — Build the application for production
- `npm run build:dev` — Build in development mode
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint checks
- `npm run format` — Format code with Prettier

## Project Structure

- `src/routes` — Route definitions and page components
- `src/lib` — Server helpers for error handling and render fallbacks
- `src/styles.css` — Global styles and theme variables
- `vite.config.ts` — Vite configuration via `@lovable.dev/vite-tanstack-config`
- `wrangler.jsonc` — Cloudflare Workers deployment config

## Notes

- Update the social links in `src/routes/index.tsx` to point to real GitHub and LinkedIn profiles.
- The landing page currently includes a placeholder project section anchor (`#projects`) for future content expansion.
- This repo is configured as a private package with a descriptive `package.json` project name.

## Recommended Improvements

- Add more page sections for projects, services, or contact details.
- Replace placeholder social URLs with actual links.
- Extend the routing setup with additional pages and nested routes.
