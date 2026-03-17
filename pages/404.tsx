// pages/404.js

import SEO from '../components/SEO'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <SEO title="Page Not Found" description="This page doesn't exist." image="" noindex />
      <div className="max-w-xl mx-auto px-4 text-center py-32">
        <span className="font-display text-8xl font-bold text-neutral-200">404</span>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-900">Page not found</h1>
        <p className="mt-3 font-body text-neutral-500">
          This page doesn't exist or was moved. Try heading back home.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">← Back to Home</Link>
      </div>
    </>
  )
}
