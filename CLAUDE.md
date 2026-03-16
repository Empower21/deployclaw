# DeployClaw

White-glove OpenClaw AI deployment service by AMDR Automate AI. Marketing website for selling private, self-hosted AI assistant deployments to businesses on the US East Coast and Caribbean.

**Live site:** claw.amdrautomate.ai (Vercel, region: iad1)
**Repo:** github.com/Empower21/deployclaw

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (v9, Next.js + Core Web Vitals)
```

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5** (strict)
- **Tailwind CSS 4** with custom CSS variables (dark theme, violet accents `#7c3aed`)
- **Framer Motion 12** for entrance animations
- **Vercel** deployment with security headers (X-Frame-Options, CSP, Referrer-Policy)
- Path alias: `@/*` → `./src/*`

## Architecture

This is a static marketing site — no backend API, no database, no auth.

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Homepage (assembles all sections)
│   ├── layout.tsx          # Root layout + metadata/SEO
│   ├── globals.css         # Tailwind base + CSS custom properties
│   ├── deploy/[city]/      # Dynamic city pages (Atlanta, Miami, Kingston)
│   ├── affiliates/         # 30% affiliate program page
│   ├── privacy/            # Privacy policy
│   └── terms/              # Terms of service
├── components/             # All UI sections (Hero, Pricing, FAQ, etc.)
└── data/
    └── pricing.ts          # Tiers, add-ons, managed care plans, Calendly URL
```

## Conventions

- All components use `"use client"` — this is a client-rendered marketing site
- Framer Motion `whileInView` for scroll-triggered entrance animations
- Pricing data and Calendly URL live in `src/data/pricing.ts` — update there, not in components
- CTA buttons link to Calendly: `https://calendly.com/amdrautomate/deployclaw`
- City pages use `generateStaticParams()` for static generation
- Mobile-first responsive design with Tailwind breakpoints
- Dark theme throughout — no light mode

## Pricing Tiers

- **QuickDeploy** — $497 (solo founders, 24hr deploy)
- **TurnKey** — $1,497 (done-for-you, teams 2–15)
- **Concierge** — $2,997 (white-glove, on-site option)

## Service Areas

East Coast US (Atlanta, Miami, Charlotte, DC) + Caribbean (Kingston, Nassau, Port of Spain, Bridgetown)

## SEO / Metadata

- Title/description metadata in `layout.tsx` and individual page files
- Open Graph + Twitter cards configured
- Dynamic metadata for city pages via `generateMetadata()`
