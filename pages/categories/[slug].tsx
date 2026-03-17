// pages/categories/[slug].tsx
// Shows all posts belonging to a specific category.
// URL: /categories/living-room-decor, /categories/kitchen-dining, etc.

import type { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import Seo from '../../components/Seo'
import PostCard from '../../components/PostCard'
import { CATEGORIES, getCategoryBySlug, type Category } from '../../lib/categories'
import { getSortedPostsData } from '../../lib/posts'

// Minimal post shape needed for this page
interface PostMeta {
  slug: string
  title: string
  excerpt?: string
  coverImage?: string
  category?: string
  date?: string
  readTime?: string
}

interface Props {
  category: Category
  posts: PostMeta[]
}

export default function CategoryPage({ category, posts }: Props) {
  const { name, description, longDescription, color, iconPath, emoji } = category

  return (
    <>
      <Seo
        title={name}
        description={longDescription}
      />

      {/* ── BREADCRUMB ──────────────────────────────────────────────── */}
      <div className="border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-neutral-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-accent transition-colors">Categories</Link>
            <span>/</span>
            <span className="text-neutral-600">{name}</span>
          </nav>
        </div>
      </div>

      {/* ── CATEGORY HEADER ─────────────────────────────────────────── */}
      <section className="bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center
                             flex-shrink-0 ${color}`}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
              </svg>
            </div>

            {/* Title + desc */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                Category
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-light text-neutral-900 leading-tight">
                {name}
              </h1>
              <p className="mt-2 text-neutral-500 font-light max-w-xl leading-relaxed">
                {longDescription}
              </p>
            </div>
          </div>

          {/* Post count */}
          <div className="mt-8 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {posts.length === 0
                ? 'No guides yet — check back soon'
                : `${posts.length} guide${posts.length !== 1 ? 's' : ''}`}
            </span>

            <span className="text-neutral-200">·</span>

            <Link
              href="/categories"
              className="text-sm text-neutral-400 hover:text-accent transition-colors"
            >
              ← All categories
            </Link>
          </div>
        </div>
      </section>

      {/* ── POSTS GRID ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post, i) => (
              <div
                key={post.slug}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <PostCard post={post} priority={i === 0} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="py-20 text-center">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center
                             mx-auto mb-5 ${color}`}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-light text-neutral-700 mb-2">
              Coming soon
            </h2>
            <p className="text-neutral-400 text-sm max-w-xs mx-auto mb-8">
              We're working on guides for {name}. Check back soon or browse other categories.
            </p>
            <Link href="/categories" className="btn-primary">
              Browse All Categories
            </Link>
          </div>
        )}
      </section>

      {/* ── OTHER CATEGORIES ────────────────────────────────────────── */}
      <section className="border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6">
            Other Categories
          </p>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                             bg-white border border-neutral-200 text-sm text-neutral-600
                             hover:border-accent hover:text-accent hover:bg-accent/5
                             transition-all duration-200"
                >
                  <span>{c.emoji}</span>
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Generate a page for every category slug at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CATEGORIES.map((cat) => ({
    params: { slug: cat.slug },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug     = params?.slug as string
  const category = getCategoryBySlug(slug)

  if (!category) return { notFound: true }

  // Filter all posts that belong to this category
  const allPosts  = getSortedPostsData()
  const posts     = allPosts.filter(
    (p) => p.category?.toLowerCase() === category.name.toLowerCase()
  )

  return {
    props: { category, posts },
  }
}
