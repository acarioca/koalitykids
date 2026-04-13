# KoalityKids Website

Marketing website for [koalitykids.com](https://koalitykids.com) — the nature exploration app for children.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Poppins (via `next/font/google`)
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    layout.tsx    — Root layout with Poppins font + metadata
    globals.css   — Tailwind config + brand utilities (gradient-text, gradient-bg)
    page.tsx      — Home page (hero, features, how it works, pricing, download CTA, footer)
```

## Brand Tokens

Matches the KoalityKids app branding:

| Token | Hex | Usage |
|---|---|---|
| Sage Green | `#EFF5F0` | Page background |
| Purple Accent | `#7C5CFC` | Focus, icons, active states |
| Lavender | `#EDE9FE` | Icon backgrounds |
| Teal | `#4FC3D9` | Gradient start |
| Violet | `#A78BFA` | Gradient mid |
| Pink | `#F472B6` | Gradient end |
| Text Primary | `#1A1A2E` | Headings, body |
| Text Secondary | `#8E8EA0` | Subtitles, muted |

## Deployment

```bash
npm run build
```

Deploy to Vercel, Netlify, or any static host.
