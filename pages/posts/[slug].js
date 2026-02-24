// pages/posts/[slug].js
// ─────────────────────────────────────────────────────────────────────────────
// Individual blog post page.
// - getStaticPaths: generates a page for every file in /posts
// - getStaticProps: loads the specific post data at build time
//
// HOW TO ADD A NEW POST:
//   1. Create a new .json file in /posts with the structure below.
//   2. Add your affiliate links (replace AFFILIATE_LINK with real Amazon URLs).
//   3. Run `npm run build` or let Vercel auto-build on push.
//
// JSON POST STRUCTURE:
// {
//   "title": "Post Title",
//   "date": "2024-01-01",
//   "category": "Category Name",
//   "excerpt": "One-liner shown on the homepage card.",
//   "coverImage": "/images/my-image.jpg",      ← put in /public/images/
//   "description": "Long intro paragraph shown on the post page.",
//   "metaDescription": "SEO meta description (150-160 chars).",
//   "products": [
//     {
//       "name": "Product Name",
//       "image": "/images/product.jpg",
//       "affiliateLink": "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20",
//       "price": "$49",
//       "badge": "Best Pick"           ← optional label
//     }
//   ]
// }
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'
import SEO from '../../components/SEO'
import ProductCard from '../../components/ProductCard'
import AffiliateDisclosure from '../../components/AffiliateDisclosure'
import { getAllPostSlugs, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  const { title, date, category, coverImage, description, products, metaDescription, content } = postData

  return (
    <>
      <SEO
        title={title}
        description={metaDescription || description?.slice(0, 155)}
        image={coverImage}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Category + Date */}
        <div className="flex items-center gap-3 mb-4">
          {category && <span className="section-label">{category}</span>}
          {date && (
            <time className="text-xs text-neutral-400 font-body">
              {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
          )}
        </div>

        {/* Post Title */}
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
          {title}
        </h1>

        {/* Affiliate Disclosure */}
        <div className="mt-6">
          <AffiliateDisclosure />
        </div>

        {/* Cover Image */}
        {coverImage && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mt-8 bg-neutral-100">
            <Image
              src={coverImage}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        {/* Description */}
        {description && (
          <div className="mt-8 prose prose-neutral max-w-none">
            <p className="font-body text-lg text-neutral-600 leading-relaxed">{description}</p>
          </div>
        )}

        {/* Markdown content (for .md posts) */}
        {content && (
          <div
            className="mt-6 font-body text-neutral-700 leading-relaxed prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {/* Product Recommendations */}
        {products && products.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-2">
              Our Top Picks
            </h2>
            <p className="text-sm text-neutral-500 font-body mb-6">
              {products.length} products reviewed &amp; ranked
            </p>

            <div className="flex flex-col gap-4">
              {products.map((product, i) => (
                <div key={i} className="flex gap-3 items-start">
                  {/* Rank number */}
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center mt-4 font-body">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom disclaimer */}
        <div className="mt-16 pt-6 border-t border-neutral-200 text-xs text-neutral-400 font-body leading-relaxed">
          <p>
            Prices and availability are accurate as of the publication date and may change at any time.
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </article>
    </>
  )
}

// Generates all post URLs at build time
export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false, // 404 for unknown slugs
  }
}

// Loads post data for each slug at build time
export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug)
  return {
    props: { postData },
  }
}
