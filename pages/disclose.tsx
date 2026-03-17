// pages/disclose.js

import SEO from '../components/SEO'

export default function Disclose() {
  return (
    <>
      <SEO title="Affiliate Disclosure" description="Our affiliate disclosure and how we earn commissions." image="" noindex />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl font-bold text-neutral-900 mb-8">Affiliate Disclosure</h1>
        <div className="font-body text-neutral-600 space-y-4 leading-relaxed">
          <p>
            Luxe Living Corners is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
            program designed to provide a means for sites to earn advertising fees by advertising and linking
            to Amazon.com.
          </p>
          <p>
            When you click on links to Amazon or other retailers on this site and make a purchase, we may
            earn a commission. This commission comes at no additional cost to you.
          </p>
          <p>
            Our editorial content is not influenced by affiliate relationships. We only recommend products
            we genuinely believe in. All opinions expressed on this site are our own.
          </p>
          <p>
            This disclosure is provided in accordance with the Federal Trade Commission's{' '}
            <a href="https://www.ftc.gov/tips-advice/business-center/guidance/ftcs-endorsement-guides-what-people-are-asking"
               className="text-brand-500 underline" target="_blank" rel="noopener noreferrer">
              16 CFR, Part 255
            </a>.
          </p>
        </div>
      </div>
    </>
  )
}
