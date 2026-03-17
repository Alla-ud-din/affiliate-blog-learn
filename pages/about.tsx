// pages/about.js
// ── CUSTOMIZE: Update all copy below to match your brand story ────────────────

import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about GoodFinds — our mission, how we test products, and our commitment to honest recommendations."
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <span className="section-label">About Us</span>
        <h1 className="mt-2 font-display text-4xl font-bold text-neutral-900">
          We do the research so you don't have to.
        </h1>

        <div className="mt-8 space-y-5 font-body text-neutral-600 leading-relaxed">
          <p>
            GoodFinds was started by a small team of product enthusiasts who got tired of reading reviews
            that were clearly never tested by real people. We buy (or borrow) the products, use them in
            real conditions, and write honestly about what we find.
          </p>
          <p>
            Our recommendations span home office gear, kitchen essentials, travel accessories, and everything
            in between. Every guide on this site is built around one question: <em>would we buy this ourselves?</em>
          </p>

          <h2 className="font-display text-2xl font-semibold text-neutral-900 pt-4">How We Make Money</h2>
          <p>
            GoodFinds participates in the Amazon Associates program. When you click a link and make a purchase,
            we earn a small commission — at no additional cost to you. This is what allows us to keep running
            the site. Our editorial opinions are not influenced by affiliate relationships.
          </p>

          <h2 className="font-display text-2xl font-semibold text-neutral-900 pt-4">Contact</h2>
          <p>
            Have a product suggestion or a question? Reach us at{' '}
            <a href="mailto:hello@yourdomain.com" className="text-brand-500 hover:underline">
              hello@yourdomain.com
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
