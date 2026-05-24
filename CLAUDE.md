# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run lint      # Run ESLint
npm run start     # Start production server
```

There are no tests in this project.

## Architecture

This is a **Next.js 14** portfolio site for Alizée Beaudrillard, built on the [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template. It uses the **Once UI** design system — not Tailwind — for all components and styling.

### Key directories

- `src/app/resources/` — Central configuration hub. All site content and feature flags live here:
  - `config.js` — Feature toggles (routes, i18n, effects), base URL, theme
  - `content.js` — All site copy (person info, home/about/work content, social links)
  - `renderContent.js` — Maps content to components
- `src/app/[locale]/` — App Router pages under locale-based routing (i18n currently disabled, only `en` active)
- `src/app/[locale]/blog/posts/` — MDX blog post files (auto-discovered)
- `src/app/[locale]/work/projects/` — MDX project files (auto-discovered)
- `src/once-ui/` — Design system components, tokens, and SCSS

### Content management

All personal content (biography, experience, skills, social links) is defined as plain JavaScript objects in `src/app/resources/content.js`. To update copy, edit that file directly — no CMS or database involved.

Blog posts and work projects are `.mdx` files. Drop a new `.mdx` file into the appropriate `posts/` or `projects/` directory and it will be automatically picked up by the dynamic `[slug]` routes. MDX supports LaTeX (KaTeX) and syntax highlighting (PrismJS).

### Routing and i18n

`src/middleware.ts` handles `next-intl` locale routing. i18n is currently **disabled** (`i18n = false` in `config.js`), so all pages render under the single `en` locale. The `[locale]` segment in the URL is handled transparently. Message files for additional locales are in `/messages/`.

### Feature flags (config.js)

Routes, analytics, mailchimp newsletter, password protection, and visual effects (mask, gradient, dots, lines) are all toggled in `config.js`. Check there first before searching for where a feature is rendered.

### Once UI

Components come from `src/once-ui/components/`. Style tokens and global SCSS are in `src/once-ui/styles/`. Do not introduce Tailwind or other CSS frameworks; use Once UI primitives and CSS custom properties that match the existing token system.
