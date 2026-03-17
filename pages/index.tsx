// pages/index.js
// Homepage — lists all blog posts using static generation.
// getStaticProps runs at build time, making this page super fast.

import SEO from '../components/SEO'
import PostCard from '../components/PostCard'
import { getSortedPostsData } from '../lib/posts'

// ── CUSTOMIZE ─────────────────────────────────────────────────────────────────
const SITE_TAGLINE = 'Honest picks. Curated finds. No fluff.'
const HERO_TITLE   = 'Products Worth Buying'
// ─────────────────────────────────────────────────────────────────────────────

export default function Home({ allPostsData }) {
  return (
    <>
      <SEO
        title="Home"
        description={SITE_TAGLINE}
        image="/og-image.jpg"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-100 to-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="section-label">Welcome</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
            {HERO_TITLE}
          </h1>
          <p className="mt-5 max-w-xl mx-auto font-body text-lg text-neutral-500">
            {SITE_TAGLINE}
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-semibold text-neutral-900">Latest Guides</h2>
        </div>

        {allPostsData.length === 0 ? (
          <p className="text-neutral-500 font-body">No posts yet. Add .json or .md files to the /posts directory.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPostsData.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

// Runs at build time — fetches all post metadata
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData },
  }
}
