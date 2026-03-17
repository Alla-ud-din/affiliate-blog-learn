# Curated Co. — Next.js Amazon Affiliate Blog

A production-ready Amazon affiliate blog built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.
Fully static, SEO-optimized, Pinterest-friendly, and zero-database.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Complete File Structure](#complete-file-structure)
3. [How the Project Works](#how-the-project-works)
4. [Categories System](#categories-system)
5. [How to Add New Posts](#how-to-add-new-posts)
6. [How to Add Affiliate Links](#how-to-add-affiliate-links)
7. [Customize Branding](#customize-branding)
8. [Deploy to Vercel](#deploy-to-vercel)
9. [SEO Tips](#seo-tips)
10. [Changelog](#changelog)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Complete File Structure

```
affiliate-blog/
│
├── 📁 components/
│   ├── AffiliateDisclosure.tsx   FTC disclosure banner (top of every post)
│   ├── CategoryCard.tsx          ★ NEW — icon + label category tile
│   ├── Footer.tsx                Site footer with nav + Amazon disclaimer
│   ├── Layout.tsx                Page wrapper (Navbar + Footer)
│   ├── Navbar.tsx                Sticky responsive navigation bar
│   ├── PostCard.tsx              Post preview card (homepage + category pages)
│   ├── ProductCard.tsx           Product row with image, price, Amazon CTA
│   └── Seo.tsx                   <head> meta tags (OG, Twitter, JSON-LD)
│
├── 📁 lib/
│   ├── categories.ts             ★ NEW — all category definitions + helpers
│   ├── posts.ts                  File system reader for JSON + Markdown posts
│   └── site.ts                   Global site config (name, tag, nav, socials)
│
├── 📁 pages/
│   ├── 📁 categories/
│   │   ├── index.tsx             ★ NEW — /categories grid page
│   │   └── [slug].tsx            ★ NEW — /categories/[slug] filtered post page
│   │
│   ├── 📁 posts/
│   │   └── [slug].tsx            Individual post page (getStaticPaths)
│   │
│   ├── _app.tsx                  Global layout wrapper
│   ├── _document.tsx             HTML document + Google Fonts preloading
│   ├── 404.tsx                   Custom not-found page
│   ├── about.tsx                 About page
│   ├── disclosure.tsx            FTC affiliate disclosure page
│   └── index.tsx                 Homepage (getStaticProps)
│
├── 📁 posts/                     ★ YOUR CONTENT — add post files here
│   ├── best-sofas-living-room.json
│   ├── best-area-rugs-living-room.json
│   ├── best-wall-art-online.json
│   ├── gallery-wall-frames-layouts.json
│   ├── best-cookware-sets-home-cooks.json
│   ├── best-dinnerware-sets.json
│   ├── best-standing-desks-2025.json
│   ├── best-monitors-work-from-home.json
│   ├── best-bedding-sets-better-sleep.json
│   ├── best-bathroom-accessories.json
│   ├── best-floor-lamps-ambiance.json
│   ├── best-outdoor-patio-furniture.json
│   ├── best-closet-organization-systems.json
│   └── best-nursery-furniture.json
│
├── 📁 public/
│   └── 📁 images/                Put your post + product images here
│
├── 📁 styles/
│   └── globals.css               Tailwind base + custom component classes
│
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

> ★ = added or changed after the initial template

---

## How the Project Works

### Data Flow

Every page on this site is **statically generated at build time** — no server, no database.
Here is how data moves from your content files to the browser:

```
posts/*.json or *.md
        ↓
lib/posts.ts  (reads files from disk)
        ↓
pages/*  (getStaticProps calls lib/posts.ts at build time)
        ↓
Components  (receive data as props and render HTML)
        ↓
Static HTML page served from Vercel CDN
```

### Key Next.js Concepts Used

| Concept | Where Used | What It Does |
|---|---|---|
| `getStaticProps` | `pages/index.tsx`, `pages/categories/*` | Fetches data at build time |
| `getStaticPaths` | `pages/posts/[slug].tsx`, `pages/categories/[slug].tsx` | Tells Next.js which URLs to generate |
| Dynamic routes `[slug]` | `pages/posts/[slug].tsx` | One file generates many pages |
| `next/image` | `PostCard`, `ProductCard` | Optimised, lazy-loaded images |
| `next/link` | Everywhere | Client-side navigation (no full reload) |

### The `lib/` Folder

| File | Exports | Purpose |
|---|---|---|
| `posts.ts` | `getSortedPostsData()` `getAllPostSlugs()` `getPostData()` | Read and parse all post files |
| `categories.ts` | `CATEGORIES` `getCategoryBySlug()` `getCategoryByName()` | Category config and lookup helpers |
| `site.ts` | `SITE` | Global config — name, tag, nav links, disclosure text |

### URL Structure

```
/                              Homepage — all posts
/posts/best-sofas              Individual post page
/categories                    All categories grid
/categories/living-room-decor  Posts filtered by category
/about                         About page
/disclosure                    FTC disclosure page
/404                           Not found page
```

---

## Categories System

### How It Works

1. Every post JSON/MD file has a `"category"` field
2. `lib/categories.ts` defines the 10 categories with slugs, icons, and descriptions
3. `pages/categories/index.tsx` renders all categories as icon cards
4. `pages/categories/[slug].tsx` filters posts by category and displays them

### The 10 Built-in Categories

| Category Name | URL Slug | Post Count |
|---|---|---|
| Living Room Decor | `/categories/living-room-decor` | 2 |
| Wall Art | `/categories/wall-art` | 2 |
| Kitchen & Dining | `/categories/kitchen-dining` | 2 |
| Home Office Setup | `/categories/home-office-setup` | 2 |
| Bedroom | `/categories/bedroom` | 1 |
| Bathroom | `/categories/bathroom` | 1 |
| Outdoor & Garden | `/categories/outdoor-garden` | 1 |
| Lighting | `/categories/lighting` | 1 |
| Storage & Organisation | `/categories/storage-organisation` | 1 |
| Kids & Nursery | `/categories/kids-nursery` | 1 |

### How to Add a New Category

Open `lib/categories.ts` and add an entry to the `CATEGORIES` array:

```ts
{
  name:            'Pet Supplies',          // Must match "category" in post files
  slug:            'pet-supplies',          // URL: /categories/pet-supplies
  description:     'Short card description.',
  longDescription: 'Longer text shown on the category page header.',
  emoji:           '🐾',
  color:           'bg-orange-50 text-orange-500',  // Tailwind classes
  iconPath:        'M4.318 6.318a4.5 ...',          // SVG path from heroicons.com
}
```

Then create posts with `"category": "Pet Supplies"` and they will appear automatically.

### How to Change a Category Icon

1. Go to [heroicons.com](https://heroicons.com)
2. Find your icon, click it, select **Outline** style
3. Copy just the `d="..."` path value
4. Paste it into the `iconPath` field in `lib/categories.ts`

### Connecting Posts to Categories

The `"category"` value in your post JSON must **exactly match** the `name` in `lib/categories.ts`:

```json
// posts/my-post.json
{ "category": "Kitchen & Dining" }
```

```ts
// lib/categories.ts
{ name: 'Kitchen & Dining', slug: 'kitchen-dining', ... }
```

Capitalisation and spacing matter. If they don't match, the post won't appear under that category.

---

## How to Add New Posts

### Option A — JSON (recommended for product roundups)

Create a file in `/posts/your-slug.json`. The filename becomes the URL:
`best-air-purifiers.json` → `yourdomain.com/posts/best-air-purifiers`

```json
{
  "title":           "The 7 Best Air Purifiers of 2025",
  "date":            "2025-03-01",
  "category":        "Home Office Setup",
  "readTime":        "7 min read",
  "excerpt":         "Short preview shown on homepage cards (1-2 sentences).",
  "coverImage":      "/images/air-purifier-cover.jpg",
  "description":     "Longer intro paragraph shown at the top of the post page.",
  "metaDescription": "SEO description, aim for 150-160 characters.",
  "products": [
    {
      "name":          "Coway AP-1512HH Mighty",
      "affiliateLink": "https://www.amazon.com/dp/B01728NLRG?tag=yourtag-20",
      "image":         "/images/coway-ap1512.jpg",
      "price":         "$89",
      "badge":         "Best Overall",
      "rating":        4.7,
      "description":   "Optional 1-2 sentence product blurb shown on the card."
    }
  ]
}
```

**All fields:**

| Field | Required | Description |
|---|---|---|
| `title` | ✅ | Post headline |
| `date` | ✅ | ISO date `"2025-01-15"` — used for sorting |
| `category` | ✅ | Must match a `name` in `lib/categories.ts` |
| `excerpt` | ✅ | Short preview for homepage cards |
| `products` | ✅ | Array of product objects (3–10 recommended) |
| `coverImage` | Recommended | Path to image in `/public/images/` or external URL |
| `description` | Recommended | Intro paragraph on the post page |
| `metaDescription` | Recommended | SEO meta description (150-160 chars) |
| `readTime` | Optional | e.g. `"8 min read"` |

**Product object fields:**

| Field | Required | Description |
|---|---|---|
| `name` | ✅ | Product name |
| `affiliateLink` | ✅ | Full Amazon affiliate URL |
| `image` | Recommended | Product image path or URL |
| `price` | Recommended | e.g. `"$49"` |
| `badge` | Optional | Label shown on card e.g. `"Best Overall"` |
| `rating` | Optional | Number 1–5, renders star icons |
| `description` | Optional | 1-2 sentence product blurb |

### Option B — Markdown (for long-form articles)

Create `/posts/your-slug.md` with YAML frontmatter:

```md
---
title: "Your Post Title"
date: "2025-03-01"
category: "Home Office Setup"
excerpt: "Short card preview."
coverImage: "/images/cover.jpg"
metaDescription: "SEO description here."
products:
  - name: "Product Name"
    affiliateLink: "https://www.amazon.com/dp/ASIN?tag=yourtag-20"
    price: "$99"
    badge: "Top Pick"
    rating: 4.8
---

## Your Markdown Content

Write freely in markdown. Headers, lists, bold, links — all supported.
Product cards are rendered **below** your markdown body automatically.
```

### Adding Images

- Place images in `/public/images/`
- Reference them in posts as `/images/filename.jpg`
- Or use external URLs (Unsplash, Amazon CDN) — add the domain to `next.config.js` → `remotePatterns`
- **Pinterest tip:** Portrait images (2:3 ratio, e.g. 800×1200px) perform better as cover images

---

## How to Add Affiliate Links

### One-time Setup

1. Sign up at [affiliate-program.amazon.com](https://affiliate-program.amazon.com/)
2. After approval, find your **Associate Tag** (e.g. `myblog-20`)
3. Update `lib/site.ts` → `SITE.amazonTag` with your tag

### Per-product Links

1. Find the product on Amazon
2. Get the **ASIN** from the URL: `amazon.com/dp/`**`B07XJ8C8F5`**
3. Build your link: `https://www.amazon.com/dp/B07XJ8C8F5?tag=yourtag-20`
4. Set `affiliateLink` in your post JSON to this URL

**Using Amazon SiteStripe (easiest method):**
When logged into your Associates account, a SiteStripe toolbar appears at the top of every Amazon page.
Click **Text** to get a ready-made short affiliate link for any product instantly.

### Placeholder Links

Posts ship with `"affiliateLink": "AFFILIATE_LINK"` as a placeholder.
The `ProductCard` component detects this and disables the button until you replace it with a real URL.

---

## Customize Branding

### Site Name, Tagline, and Config

Edit **`lib/site.ts`** — this is the single source of truth for everything site-wide:

```ts
export const SITE = {
  name:        'Your Blog Name',
  tagline:     'Your tagline here.',
  description: 'Your SEO site description.',
  url:         'https://yourdomain.com',
  amazonTag:   'yourtag-20',
  social: {
    pinterest: 'https://pinterest.com/yourhandle',
    instagram: 'https://instagram.com/yourhandle',
  },
  navLinks: [
    { label: 'Home',       href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'About',      href: '/about' },
  ],
}
```

### Colors

Edit **`tailwind.config.js`** → `theme.extend.colors`:

```js
colors: {
  accent: {
    DEFAULT: '#2d7a61',  // ← Primary brand color (buttons, links, icons)
  },
  surface: {
    warm:  '#faf7f2',    // ← Main page background
    cream: '#f5efe6',    // ← Footer / secondary backgrounds
    paper: '#fffdf9',    // ← Card backgrounds
  },
  ink: {
    DEFAULT: '#1a1915',  // ← Primary text color
  },
}
```

Use [Tailwind Shades](https://www.tailwindshades.com/) to generate a full color scale from one hex value.

### Fonts

1. Pick fonts at [fonts.google.com](https://fonts.google.com/)
2. Replace the `<link>` URL in `pages/_document.tsx`
3. Replace the `@import` URL in `styles/globals.css`
4. Update `fontFamily` in `tailwind.config.js`:

```js
fontFamily: {
  display: ['"Your Headline Font"', 'serif'],
  body:    ['"Your Body Font"', 'sans-serif'],
},
```

**Current fonts:** Cormorant Garamond (display) + Jost (body)

### Navigation Links

Edit `SITE.navLinks` in `lib/site.ts`.

---

## Deploy to Vercel

Vercel is the recommended platform — zero config needed for Next.js.

### Steps

1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**
3. Import your repository — Vercel auto-detects Next.js
4. Click **Deploy**

Your site is live in ~2 minutes.

### Auto-deploy

Every push to `main` triggers an automatic rebuild.
Add a new post JSON file → push → it's live in under a minute.

### Custom Domain

In Vercel: **Project → Settings → Domains → Add Domain**

### Environment Variables

This template has no secrets or API keys. No environment variables required.

---

## SEO Tips

- **Slugs are URLs** — use keyword-rich filenames: `best-ergonomic-chairs-2025.json`
- Keep `metaDescription` between 140–160 characters
- Every post needs a `coverImage` for Pinterest Open Graph previews
- The `excerpt` appears on cards and in social shares — write it as a hook
- Submit your sitemap to [Google Search Console](https://search.google.com/search-console)

### Generating a Sitemap

```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:

```js
module.exports = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
}
```

Add to `package.json` scripts:
```json
"postbuild": "next-sitemap"
```

### Pinterest Rich Pins

1. Add Pinterest verification to `components/Seo.tsx`:
```tsx
<meta name="p:domain_verify" content="YOUR_CODE_HERE" />
```
2. Validate at [developers.pinterest.com](https://developers.pinterest.com/tools/url-debugger/)

---

## Changelog

### Version 2.0 — Categories System + TypeScript Migration

#### New Files Added

| File | Description |
|---|---|
| `lib/categories.ts` | Central category configuration — 10 categories with slugs, icons, colors, and descriptions |
| `components/CategoryCard.tsx` | Icon + label card component used on the categories index page |
| `pages/categories/index.tsx` | `/categories` page — grid of all category cards with post counts |
| `pages/categories/[slug].tsx` | `/categories/[slug]` page — posts filtered by category, with empty state and related categories row |

#### Files Replaced / Updated

| File | Change |
|---|---|
| `pages/categories.tsx` | **Deleted** — replaced by `pages/categories/index.tsx` (fixes duplicate page warning) |
| `next.config.js` | Updated `images.domains` (deprecated) → `images.remotePatterns` |
| All `.js` files | **Migrated to TypeScript** — renamed to `.ts` / `.tsx` |

#### TypeScript Migration Notes

- All component files renamed from `.js` → `.tsx`
- All library files renamed from `.js` → `.ts`
- `tsconfig.json` added to root
- Required packages added: `typescript`, `@types/react`, `@types/react-dom`, `@types/node`
- All component props are now typed with interfaces
- `Seo` component: `image` prop made optional (`image?`) to fix build error on pages without a specific cover image

#### Dummy Content Added

14 sample posts added to `/posts/` covering all 10 categories:

| File | Category |
|---|---|
| `best-sofas-living-room.json` | Living Room Decor |
| `best-area-rugs-living-room.json` | Living Room Decor |
| `best-wall-art-online.json` | Wall Art |
| `gallery-wall-frames-layouts.json` | Wall Art |
| `best-cookware-sets-home-cooks.json` | Kitchen & Dining |
| `best-dinnerware-sets.json` | Kitchen & Dining |
| `best-standing-desks-2025.json` | Home Office Setup |
| `best-monitors-work-from-home.json` | Home Office Setup |
| `best-bedding-sets-better-sleep.json` | Bedroom |
| `best-bathroom-accessories.json` | Bathroom |
| `best-floor-lamps-ambiance.json` | Lighting |
| `best-outdoor-patio-furniture.json` | Outdoor & Garden |
| `best-closet-organization-systems.json` | Storage & Organisation |
| `best-nursery-furniture.json` | Kids & Nursery |

#### Bug Fixes

- Removed duplicate `pages/categories.tsx` that conflicted with `pages/categories/index.tsx`
- Fixed deprecated `images.domains` config warning in `next.config.js`
- Fixed TypeScript error TS2741 — `image` prop missing on `Seo` component (made optional)
- Fixed TypeScript error TS7016 — missing `@types/react` declaration files

---

## Local Development Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build for production
npm run start    # Serve production build locally
npm run lint     # Run ESLint
```
