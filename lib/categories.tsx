// lib/categories.ts
// ═══════════════════════════════════════════════════════════════════
// CATEGORY CONFIGURATION
// ═══════════════════════════════════════════════════════════════════
// Add, remove, or reorder categories here.
// Each category's `name` must EXACTLY match the "category" field
// in your post JSON/markdown files.
//
// icon: SVG path data (from heroicons.com or similar)
// color: Tailwind bg + text classes for the icon container
// ═══════════════════════════════════════════════════════════════════

export interface Category {
  name: string         // Must match post frontmatter "category" field
  slug: string         // URL: /categories/[slug]
  description: string
  longDescription: string
  emoji: string        // Fallback if SVG not rendering
  color: string        // Tailwind classes for icon bg + text
  iconPath: string     // SVG path(s) — paste from heroicons.com
}

export const CATEGORIES: Category[] = [
  {
    name:            'Living Room Decor',
    slug:            'living-room-decor',
    description:     'Sofas, rugs, lighting, and accent pieces for your living space.',
    longDescription: 'Transform your living room into a space you love. From statement sofas and layered rugs to ambient lighting and curated accents, we find the pieces that pull a room together.',
    emoji:           '🛋️',
    color:           'bg-rose-50 text-rose-500',
    iconPath:        'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    name:            'Wall Art',
    slug:            'wall-art',
    description:     'Prints, canvases, mirrors, and gallery wall inspiration.',
    longDescription: 'Bare walls are missed opportunities. Whether you want a single statement piece or a curated gallery wall, we round up the prints, canvases, and mirrors worth hanging.',
    emoji:           '🖼️',
    color:           'bg-violet-50 text-violet-500',
    iconPath:        'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    name:            'Kitchen & Dining',
    slug:            'kitchen-dining',
    description:     'Cookware, serveware, appliances, and table styling.',
    longDescription: 'The kitchen is the heart of the home. We test cookware, appliances, and dining essentials to find the pieces that actually earn their counter space and make every meal better.',
    emoji:           '🍽️',
    color:           'bg-amber-50 text-amber-500',
    iconPath:        'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    name:            'Home Office Setup',
    slug:            'home-office-setup',
    description:     'Desks, chairs, monitors, and productivity gear.',
    longDescription: 'A well-designed home office changes how you work. We find the chairs, desks, monitors, and desk accessories that make remote work feel sustainable — and your workspace look great.',
    emoji:           '🖥️',
    color:           'bg-sky-50 text-sky-500',
    iconPath:        'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    name:            'Bedroom',
    slug:            'bedroom',
    description:     'Bedding, pillows, nightstands, and sleep essentials.',
    longDescription: 'Better sleep starts with better bedding. We test mattresses, pillows, duvet sets, and bedroom furniture to help you build a sleep environment that actually works.',
    emoji:           '🛏️',
    color:           'bg-indigo-50 text-indigo-500',
    iconPath:        'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
  },
  {
    name:            'Bathroom',
    slug:            'bathroom',
    description:     'Towels, organisers, vanity accessories, and spa essentials.',
    longDescription: 'Small upgrades make a big difference in the bathroom. From plush towels and smart storage to vanity lighting and spa-worthy accessories, we find what\'s actually worth buying.',
    emoji:           '🛁',
    color:           'bg-teal-50 text-teal-500',
    iconPath:        'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
  },
  {
    name:            'Outdoor & Garden',
    slug:            'outdoor-garden',
    description:     'Patio furniture, planters, lighting, and garden tools.',
    longDescription: 'Your outdoor space deserves as much thought as your interior. Patio seating, string lights, planters, and garden tools — we find the pieces built to handle the elements in style.',
    emoji:           '🌿',
    color:           'bg-green-50 text-green-600',
    iconPath:        'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
  },
  {
    name:            'Lighting',
    slug:            'lighting',
    description:     'Floor lamps, pendants, sconces, and smart lighting.',
    longDescription: 'Lighting is the most transformative — and most overlooked — element in any room. We review floor lamps, pendant lights, wall sconces, and smart bulbs that genuinely change a space.',
    emoji:           '💡',
    color:           'bg-yellow-50 text-yellow-500',
    iconPath:        'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    name:            'Storage & Organisation',
    slug:            'storage-organisation',
    description:     'Shelving, baskets, drawer organisers, and decluttering tools.',
    longDescription: 'A well-organised home is a calmer home. We find the storage solutions — from pantry organisers and drawer dividers to closet systems and decorative baskets — that actually stick.',
    emoji:           '🗂️',
    color:           'bg-orange-50 text-orange-500',
    iconPath:        'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
  },
  {
    name:            'Kids & Nursery',
    slug:            'kids-nursery',
    description:     'Nursery furniture, toys, storage, and child-safe decor.',
    longDescription: 'Thoughtfully chosen pieces for the smallest rooms. We cover nursery furniture, developmental toys, kid-friendly storage, and decor that grows with your child.',
    emoji:           '🧸',
    color:           'bg-pink-50 text-pink-500',
    iconPath:        'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
]

// Helper: get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}

// Helper: get category by name (for matching post frontmatter)
export function getCategoryByName(name: string): Category | undefined {
  return CATEGORIES.find((c) => c.name.toLowerCase() === name.toLowerCase())
}
