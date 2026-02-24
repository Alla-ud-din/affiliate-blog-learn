// pages/categories.js
// ── CUSTOMIZE: Update categories and their descriptions/icons ─────────────────

import SEO from '../components/SEO'
import Link from 'next/link'

// Add or remove categories here. Future: filter posts by category dynamically.
const CATEGORIES = [
  { name: 'Home Office',    emoji: '🖥️', description: 'Desks, chairs, monitors, and productivity gear.' },
  { name: 'Kitchen',        emoji: '🍳', description: 'Cookware, appliances, and tools for home cooks.' },
  { name: 'Travel',         emoji: '✈️', description: 'Bags, gear, and accessories for every journey.' },
  { name: 'Tech',           emoji: '📱', description: 'Gadgets, accessories, and smart home picks.' },
  { name: 'Health & Fitness', emoji: '🏋️', description: 'Equipment and gear to stay active at home or the gym.' },
  { name: 'Books',          emoji: '📚', description: 'Staff picks, bestsellers, and hidden gems.' },
]

export default function Categories() {
  return (
    <>
      <SEO
        title="Categories"
        description="Browse GoodFinds product guides by category — home office, kitchen, travel, tech, and more."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <span className="section-label">Browse</span>
        <h1 className="mt-2 font-display text-4xl font-bold text-neutral-900 mb-10">Categories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.name}
              href={`/?category=${encodeURIComponent(cat.name)}`}
              className="card p-6 flex flex-col gap-3 group"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <h2 className="font-display text-lg font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">
                {cat.name}
              </h2>
              <p className="text-sm text-neutral-500 font-body leading-relaxed">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
