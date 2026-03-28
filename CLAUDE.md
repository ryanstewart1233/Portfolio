# Portfolio & App Showcase Website

## Overview

Static website to showcase apps and tools published on Google Play Store. Serves two purposes:

1. **Play Store compliance** — each app gets a live privacy policy URL, terms of service, contact info, and data safety details (required by Google)
2. **Portfolio / CV** — a professional web presence to showcase technical skills and improve hirability

## Tech Stack

| Tool | Purpose |
|------|---------|
| Vue 3 + TypeScript | Frontend framework |
| Vite 7 | Dev server and build |
| Vue Router 5 (hash mode) | Client-side routing — hash mode required for GitHub Pages SPA |
| Tailwind CSS v4 | Utility-first styling via `@tailwindcss/vite` plugin |
| @unhead/vue | Per-page SEO `<head>` management |
| Stitch MCP | Google's AI design tool — used after scaffolding for visual polish |

## Status: Scaffolding Phase

The project has been scaffolded with `create-vue` (Vue 3 + TypeScript + Vue Router). The following still needs to be done:

### Step 1: Install remaining dependencies

```bash
npm install -D tailwindcss @tailwindcss/vite
npm install @unhead/vue
```

### Step 2: Configure Tailwind CSS v4

**vite.config.ts** — add the Tailwind plugin:
```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // ...existing plugins
  ],
})
```

**src/assets/main.css** — replace contents with:
```css
@import "tailwindcss";
```

That's it for Tailwind v4 — no `tailwind.config.js` or PostCSS config needed.

### Step 3: Create the project structure

```
src/
  data/
    apps.ts              # Typed config — THE single source of truth for all apps
    personal.ts          # Name, bio, skills, experience, links (CV data)
  composables/
    useApps.ts           # Lookup helpers: getAppBySlug, getAppsByCategory
  components/
    layout/
      AppNavbar.vue      # Top nav with links to Home, About
      AppFooter.vue      # Site-wide footer with contact + copyright
    home/
      HeroSection.vue    # Landing page hero with tagline + CTA
      AppShowcaseGrid.vue # Grid of AppCard components
    app/
      AppCard.vue        # Clickable card for the showcase grid
      AppScreenshots.vue # Screenshot gallery/carousel
      AppFeatureList.vue # Feature bullet list with icons
      PlayStoreBadge.vue # Official "Get it on Google Play" badge + link
  pages/
    HomePage.vue              # Hero + app grid + about preview
    AppDetailPage.vue         # /apps/:slug — app landing page
    PrivacyPolicyPage.vue     # /apps/:slug/privacy — REQUIRED by Play Store
    TermsPage.vue             # /apps/:slug/terms — optional
    AboutPage.vue             # CV/portfolio page: skills, experience, education
    NotFoundPage.vue          # 404 catch-all
  router/
    index.ts                  # Vue Router config (hash mode)
public/
  images/
    apps/duskscreen/          # DuskScreen icon + screenshots
    google-play-badge.svg     # Official badge from Google
```

### Step 4: Data layer

**`src/data/apps.ts`** — TypeScript interfaces and app entries:

```typescript
export interface AppData {
  slug: string              // URL-friendly ID, e.g. "duskscreen"
  name: string              // Display name
  tagline: string           // One-liner
  description: string       // Full description (can include HTML)
  icon: string              // Path to icon in /public/images/apps/
  screenshots: string[]     // Paths to screenshots
  playStoreUrl: string      // Google Play Store link
  category: string          // e.g. "Tools", "Productivity"
  features: string[]        // Key features list
  techStack: string[]       // Technologies used
  releaseDate: string       // ISO date
  privacyPolicy: PrivacyPolicy
  dataCollected: DataSafetyItem[]
}

export interface PrivacyPolicy {
  lastUpdated: string
  contactEmail: string
  content: string           // HTML/markdown content
}

export interface DataSafetyItem {
  dataType: string
  collected: boolean
  shared: boolean
  purpose: string
}
```

**First app: DuskScreen** (pre-populated from existing repo data):
- Source repo: `/mnt/c/Users/stewa/AndroidStudioProjects/ScreenDimmer`
- Package: `com.screendimmer.app`
- Tagline: "Filter blue light with warm screen tints to reduce eye strain at night"
- Category: Tools
- Features: 6 tint presets, smart timers, customizable colors, efficient (low battery), privacy-first (fully offline), lock screen support
- Tech: Kotlin, Jetpack Compose, Material 3
- Privacy: Collects NO data, fully offline, no analytics or tracking
- Contact: ryansramblings93@gmail.com
- Existing privacy policy HTML is in the DuskScreen repo at `docs/privacy-policy.html`

**`src/data/personal.ts`** — Ryan's profile (to be filled in):
- name, title, bio, avatar
- skills (languages, frameworks, tools)
- experience (jobs, roles, dates)
- education
- social links (GitHub, LinkedIn, etc.)

### Step 5: Routing (hash mode for GitHub Pages)

Use `createWebHashHistory` — URLs will be `/#/apps/duskscreen/privacy`. This works on GitHub Pages with zero config.

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Landing with hero + app grid |
| `/about` | AboutPage | Full CV: skills, experience, education |
| `/apps/:slug` | AppDetailPage | App landing page with Play Store link |
| `/apps/:slug/privacy` | PrivacyPolicyPage | **Required by Play Store** |
| `/apps/:slug/terms` | TermsPage | Optional ToS |
| `/:pathMatch(.*)*` | NotFoundPage | 404 catch-all |

All pages lazy-loaded except HomePage. Use `props: true` so `:slug` passes as a component prop.

### Step 6: Stitch MCP for design

After the site is functional with placeholder styling, set up Stitch MCP to generate a polished visual design:

```bash
npx @_davideast/stitch-mcp init
```

This runs OAuth with Google and configures the MCP server. Then use the tools:
- `build_site` — generate full site design from a text prompt
- `get_screen_code` — get HTML/CSS for generated screens
- `extract_design_context` — extract Design DNA (colors, typography, spacing)

Apply the extracted theme via Tailwind's `@theme` directive in `main.css`:
```css
@import "tailwindcss";

@theme {
  --color-primary: #extracted-color;
  --color-secondary: #extracted-color;
  --font-family-heading: "Extracted Font", sans-serif;
}
```

### Step 7: SEO meta tags

Configure `@unhead/vue` in `main.ts`, then use `useHead()` in each page component for title, description, and Open Graph tags. Important for:
- Recruiters sharing portfolio links
- App landing pages appearing in search results
- Play Store links rendering good previews

### Step 8: GitHub Pages deployment

**vite.config.ts** — set `base` to match the repo name:
```typescript
export default defineConfig({
  base: '/portfolio/',
  // ...
})
```

**`.github/workflows/deploy.yml`** — GitHub Actions workflow:
- Trigger: push to `main`
- Steps: checkout, setup Node, npm install, npm run build, deploy `dist/` to GitHub Pages
- No SPA redirect hack needed — hash routing handles it

### Step 9: Adding new apps in the future

To add a new app, just:
1. Add an entry to `src/data/apps.ts` with all the fields
2. Add the app's icon and screenshots to `public/images/apps/{slug}/`
3. Write the privacy policy content in the data entry
4. Build and deploy — the routes are automatic from the slug

No new files, no new routes, no new components needed.

## Google Play Store Requirements Checklist

For each app listed on this site, ensure:
- [ ] Privacy policy page accessible at a permanent URL (`/#/apps/{slug}/privacy`)
- [ ] Privacy policy includes: what data is collected, how it's used, contact email, last updated date
- [ ] Developer contact info visible
- [ ] Data safety information present (what's collected, what's shared)
- [ ] Play Store badge links to the correct listing
- [ ] URL is submitted in the Play Store Console under "App content > Privacy policy"

## Development Commands

```bash
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npm run type-check # TypeScript type checking
```

## Key Design Principles

- **Data-driven**: All content comes from TypeScript config files, not hardcoded in templates
- **Static-first**: No backend, no database, no API calls — just files
- **Play Store compliant**: Every app gets the required legal pages automatically
- **Portfolio-ready**: Professional enough to link on a CV/resume
- **Easy to extend**: Adding an app is adding one object to an array
