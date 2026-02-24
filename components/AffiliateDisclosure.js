// components/AffiliateDisclosure.js
// FTC-required disclosure shown at the top of every post page.

export default function AffiliateDisclosure() {
  return (
    <div className="flex gap-3 items-start bg-brand-50 border border-brand-200 rounded-xl px-4 py-3 text-sm text-brand-800 font-body">
      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <p>
        <strong>Affiliate Disclosure:</strong> This post contains affiliate links. If you purchase through these links,
        we may earn a small commission at no extra cost to you. We only recommend products we genuinely believe in.{' '}
        <a href="/disclose" className="underline hover:text-brand-600">Learn more.</a>
      </p>
    </div>
  )
}
