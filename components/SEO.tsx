// components/SEO.js
// ─── HOW TO USE ──────────────────────────────────────────────────────────────
// <SEO title="My Post Title" description="Short description" image="/og.jpg" />
// Pass title, description, and optionally an image URL for Open Graph (Pinterest).
// ─────────────────────────────────────────────────────────────────────────────

import Head from 'next/head'

// ── CUSTOMIZE: Change these site-wide defaults ────────────────────────────────
const SITE_NAME = 'GoodFinds'
const SITE_URL  = 'https://yourdomain.com'          // ← your production URL
const DEFAULT_OG_IMAGE = '/og-default.jpg'           // ← place image in /public
// ─────────────────────────────────────────────────────────────────────────────

export default function SEO({ title, description, image, noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const ogImage   = image ? `${SITE_URL}${image}` : `${SITE_URL}${DEFAULT_OG_IMAGE}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Pinterest */}
      <meta property="og:type"        content="website" />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:site_name"   content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />

      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  )
}
