// components/PostCard.js

import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
  const { slug, title, excerpt, coverImage, category, date } = post

  return (
    <article className="card group">
      {/* Cover image */}
      <Link href={`/posts/${slug}`} className="block overflow-hidden">
        <div className="relative aspect-[4/3] bg-neutral-100">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
              <svg className="w-12 h-12 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {category && (
          <span className="section-label">{category}</span>
        )}
        <h2 className="mt-1.5 font-display text-lg font-semibold text-neutral-900 leading-snug line-clamp-2 group-hover:text-brand-600 transition-colors">
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h2>
        {excerpt && (
          <p className="mt-2 text-sm text-neutral-500 leading-relaxed line-clamp-3 font-body">
            {excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between">
          {date && (
            <time className="text-xs text-neutral-400 font-body">
              {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </time>
          )}
          <Link href={`/posts/${slug}`} className="btn-outline text-xs px-3 py-1.5">
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}
