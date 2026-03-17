// components/Footer.js

import Link from 'next/link'

// ── CUSTOMIZE ─────────────────────────────────────────────────────────────────
const SITE_NAME = 'Luxe Living Corners'
const YEAR = new Date().getFullYear()
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <span className="font-display text-white text-lg font-semibold">{SITE_NAME}</span>
            <p className="mt-3 text-sm leading-relaxed">
              Honest product picks and curated recommendations to help you shop smarter.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              {[['/', 'Home'], ['/categories', 'Categories'], ['/about', 'About']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-brand-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy"  className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms"    className="hover:text-brand-400 transition-colors">Terms of Use</Link></li>
              <li><Link href="/disclose" className="hover:text-brand-400 transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        {/* Affiliate disclaimer */}
        <div className="mt-10 pt-8 border-t border-neutral-800 text-xs text-neutral-500 leading-relaxed">
          <p>
            {SITE_NAME} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
            program designed to provide a means for sites to earn advertising fees by advertising and linking
            to Amazon.com. &copy; {YEAR} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
