// components/CategoryCard.tsx
// Renders a single category as a clickable icon + label card.
// Used on the /categories index page.

import Link from 'next/link'
import type { Category } from '../lib/categories'

interface CategoryCardProps {
  category: Category
  postCount?: number
}

export default function CategoryCard({ category, postCount = 0 }: CategoryCardProps) {
  const { name, slug, description, color, iconPath, emoji } = category

  return (
    <Link
      href={`/categories/${slug}`}
      className="group flex flex-col items-start gap-4 p-6
                bg-white border border-neutral-100 rounded-2xl
                hover:border-neutral-300 hover:shadow-lg hover:shadow-black/5
                  hover:-translate-y-1 transition-all duration-300"
    >
      {/* Icon container */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                      flex-shrink-0 ${color}
                      group-hover:scale-110 transition-transform duration-300`}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h2 className="font-semibold text-neutral-900 text-base leading-snug
                      group-hover:text-accent transition-colors duration-200">
          {name}
        </h2>
        <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Post count + arrow */}
      <div className="flex items-center justify-between w-full pt-2 border-t border-neutral-100">
        <span className="text-xs text-neutral-400">
          {postCount === 0 ? 'Coming soon' : `${postCount} guide${postCount !== 1 ? 's' : ''}`}
        </span>
        <svg
          className="w-4 h-4 text-neutral-300 group-hover:text-accent
                    group-hover:translate-x-0.5 transition-all duration-200"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
