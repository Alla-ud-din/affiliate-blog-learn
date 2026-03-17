// pages/categories/index.tsx
// Lists all categories as icon + label cards.
// Clicking a card goes to /categories/[slug] showing posts for that category.

import type { GetStaticProps } from 'next'
// import Seo from '../../components/Seo'
import CategoryCard from '../../components/CategoryCard'
import { CATEGORIES } from '../../lib/categories'
import { getSortedPostsData } from '../../lib/posts'
import SEO from '../../components/SEO'

interface Props {
  postCounts: Record<string, number>
}

export default function CategoriesIndex({ postCounts }: Props) {
  return (
    <>
      <SEO
        title="Categories"
        description="Browse all home decor and lifestyle product guides by category — living room, kitchen, home office, bedroom, and more."
        image="/images/categories.png"
      />

      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <section className="border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Browse
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-neutral-900 leading-tight">
            Shop by Category
          </h1>
          <p className="mt-4 text-lg text-neutral-500 font-light max-w-xl">
            Curated product guides for every room and every need —
            from the kitchen counter to the home office desk.
          </p>
        </div>
      </section>

      {/* ── CATEGORY GRID ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Stats row */}
        <div className="flex items-center gap-6 mb-10 pb-6 border-b border-neutral-100">
          <div className="text-center">
            <p className="text-2xl font-display font-light text-neutral-900">{CATEGORIES.length}</p>
            <p className="text-xs text-neutral-400 mt-0.5">Categories</p>
          </div>
          <div className="w-px h-8 bg-neutral-200" />
          <div className="text-center">
            <p className="text-2xl font-display font-light text-neutral-900">
              {Object.values(postCounts).reduce((a, b) => a + b, 0)}
            </p>
            <p className="text-xs text-neutral-400 mt-0.5">Guides</p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.slug}
              category={cat}
              postCount={postCounts[cat.name] ?? 0}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData()

  // Count posts per category name
  const postCounts: Record<string, number> = {}
  for (const post of posts) {
    if (post.category) {
      postCounts[post.category] = (postCounts[post.category] ?? 0) + 1
    }
  }

  return { props: { postCounts } }
}
