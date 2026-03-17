// components/ProductCard.js
// ─── AFFILIATE LINKS ─────────────────────────────────────────────────────────
// Replace AFFILIATE_LINK placeholders in your post JSON/markdown with real URLs.
// Format: https://www.amazon.com/dp/ASIN?tag=YOUR-ASSOCIATE-TAG-20
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'

export default function ProductCard({ product }) {
  const { name, image, affiliateLink, price, badge } = product

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-200 group">
      {/* Product image */}
      <div className="relative w-full sm:w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-50">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            sizes="112px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-neutral-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        )}
        {badge && (
          <span className="absolute top-1.5 left-1.5 bg-brand-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-md">
            {badge}
          </span>
        )}
      </div>

      {/* Info + CTA */}
      <div className="flex flex-col justify-between gap-3 flex-1 min-w-0">
        <div>
          <h3 className="font-display font-semibold text-neutral-900 leading-snug line-clamp-2">{name}</h3>
          {price && (
            <p className="mt-1 text-brand-600 font-semibold text-sm font-body">{price}</p>
          )}
        </div>
        <a
          href={affiliateLink || '#'}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn-primary self-start"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 2H5C3.34 2 2 3.34 2 5v14c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3zm-1 14H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"/>
          </svg>
          View on Amazon
        </a>
      </div>
    </div>
  )
}
