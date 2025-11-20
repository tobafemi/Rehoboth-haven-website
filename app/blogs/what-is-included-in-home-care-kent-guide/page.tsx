import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'What Is Included in In-Home Care? (Kent Families\' Guide)',
  description: 'Discover what services are typically included in domiciliary care packages and how they can support your loved one in Kent.',
  path: '/blogs/what-is-included-in-home-care-kent-guide',
})

export default function BlogPostPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/blogs"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Blogs
            </Link>
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white">
                Care Services
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              What Is Included in In-Home Care? (Kent Families&apos; Guide)
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Discover what services are typically included in domiciliary care packages and how they can support your loved one.
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-300">
              <time dateTime="2025-01-05">January 5, 2025</time>
              <span className="mx-2">•</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-secondary rounded-lg p-8 mb-8">
              <p className="text-muted-foreground text-center">
                <strong>Content coming soon.</strong> This article will detail what services are included 
                in in-home care packages for Kent families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Learn More About Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover how our comprehensive home care services can support your loved one.
          </p>
          <div className="mt-8">
            <Link
              href="/contact#consultation"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Request a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

