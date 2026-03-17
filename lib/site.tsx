// lib/site.ts
// ═══════════════════════════════════════════════════════════════════
// GLOBAL SITE CONFIGURATION
// ═══════════════════════════════════════════════════════════════════
// This is the single source of truth for all site-wide settings.
// Edit the values below to brand and configure your site.
// This file is imported by: Navbar, Footer, Seo, AffiliateDisclosure
// ═══════════════════════════════════════════════════════════════════

export const SITE = {

  // ── Core Identity ─────────────────────────────────────────────────
  name:        'Curated Co.',            // ← Your blog/site name
  tagline:     'Thoughtfully chosen.',   // ← Short tagline (shown in hero)
  description: 'Expert product guides and honest recommendations — from our hands to yours.',
  // ↑ Used as default SEO meta description on pages without their own

  url: 'https://yourdomain.com',         // ← Your production URL (no trailing slash)
  // ↑ Used to build absolute Open Graph image URLs for Pinterest/social sharing

  // ── Logo ──────────────────────────────────────────────────────────
  logo: {
    text: 'Curated Co.',    // ← Text shown in the navbar
    // To use an image logo instead:
    //   1. Place your logo file in /public/images/logo.svg (or .png)
    //   2. Uncomment the line below
    //   3. In Navbar.tsx, swap the <span> for <Image src={SITE.logo.imagePath} ... />
    // imagePath: '/images/logo.svg',
  },

  // ── Author / Publisher ────────────────────────────────────────────
  author: {
    name:  'The Curated Co. Team',   // ← Used in JSON-LD structured data
    email: 'hello@yourdomain.com',   // ← Shown on the About page contact section
  },

  // ── Amazon Associates ─────────────────────────────────────────────
  // Your unique Associate tracking tag — appended to all Amazon links.
  // Format: https://www.amazon.com/dp/ASIN?tag=YOUR_TAG_HERE
  // Sign up at: https://affiliate-program.amazon.com
  amazonTag: 'yourcuratedco-20',   // ← Replace with your actual Associates tag

  // ── Social Media Links ────────────────────────────────────────────
  // Remove any platforms you don't use by deleting the line.
  // Add new ones and update Footer.tsx to render them.
  social: {
    pinterest: 'https://pinterest.com/yourhandle',   // ← Your Pinterest URL
    instagram: 'https://instagram.com/yourhandle',   // ← Your Instagram URL
    // twitter:  'https://twitter.com/yourhandle',
    // tiktok:   'https://tiktok.com/@yourhandle',
    // youtube:  'https://youtube.com/@yourhandle',
  },

  // ── Navigation Links ──────────────────────────────────────────────
  // Controls the links shown in Navbar.tsx and Footer.tsx.
  // Add, remove, or reorder items here.
  navLinks: [
    { label: 'Home',       href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'About',      href: '/about' },
  ],

  // ── Default Open Graph Image ──────────────────────────────────────
  // Shown when sharing pages that don't have their own coverImage.
  // Place a 1200×630px image at public/og-default.jpg
  defaultOgImage: '/og-default.jpg',

  // ── Affiliate Disclosure Text ─────────────────────────────────────
  // disclosureShort → shown in the banner at the top of every post
  // disclosureFull  → shown at the bottom of every post + in the footer
  disclosureShort: 'This post contains affiliate links. We may earn a commission at no extra cost to you.',
  disclosureFull:  'Curated Co. is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We only recommend products we genuinely love and use.',

}

// TypeScript type export — useful if you reference SITE in typed files
export type SiteConfig = typeof SITE
