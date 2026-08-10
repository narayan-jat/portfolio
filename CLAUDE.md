# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Narayan Jat, built with Create React App (react-scripts 5). Single-page app with client-side routing, deployed as a static site (live at codewithnarayan.netlify.app).

## Commands

- `npm start` — run dev server (CRA, hot reload)
- `npm run build` — production build to `build/`
- `npm test` — run tests via `react-scripts test` (Jest + React Testing Library, watch mode by default)
- `npm test -- --watchAll=false` — run tests once (CI-style)
- `npm test -- -t "<test name>"` — run a single test by name
- No lint script; ESLint runs via CRA's built-in config (`eslintConfig` in `package.json`, extends `react-app`) during `start`/`build`.

## Architecture

- **Entry/routing**: `src/index.js` → `App.js` → `components/Router.js` (react-router-dom `BrowserRouter`). Only two routes exist: `/` (`Pages/Home.js`) and a catch-all `NotFound`. This is a single long-scroll page, not a multi-page app — new "pages" should generally be new sections composed into `Pages/Home.js`, not new routes.
- **Page composition**: `Pages/Home.js` renders the section components in sequence (Navbar, Hero, About, Experience, Projects, Skills, Certifications, Highlights, Footer). Each section is a self-contained component in `src/components/`.
- **Content is centralized, not hardcoded in components**: `src/data/siteContent.js` holds all copy — profile info, links, education, experience, skills, highlights, and `FEATURED_REPOS` (a hand-maintained list of GitHub projects with descriptions/tech stacks, used instead of live GitHub API calls to avoid unauthenticated rate limits). When updating resume/profile/project content, edit this file rather than the section components.
- **Credly badges**: `src/hooks/useCredlyBadges.js` fetches public badges client-side from `credly.com/users/<username>/badges.json`, which is often CORS-blocked in the browser. On any fetch failure it falls back to the bundled snapshot in `src/data/credlyBadgesFallback.json`. If updating badge data, refresh that JSON file rather than relying on the live fetch working.
- **Styling**: Bootstrap 5 + react-bootstrap for layout/components, with custom overrides in the single global stylesheet `src/styles/portfolio.css` (imported once, likely in `index.js`/`App.js`). No CSS modules or styled-components — new styles go into that file using existing class conventions (`pf-*` prefixed classes).
- **Icons**: Font Awesome via `@fortawesome/react-fontawesome`, using free solid/brands icon sets.
- **Media**: static images/icons live in `src/media/` and are imported directly into components that use them.
