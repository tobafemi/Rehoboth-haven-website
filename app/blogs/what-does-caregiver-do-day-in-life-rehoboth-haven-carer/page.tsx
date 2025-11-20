import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'What Does a Caregiver Do? A Day in the Life of a Rehoboth Haven Carer',
  description: 'Get an inside look at what our carers do and how they make a difference in the lives of those they support in Kent and Medway.',
  path: '/blogs/what-does-caregiver-do-day-in-life-rehoboth-haven-carer',
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
                Our Team
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              What Does a Caregiver Do? A Day in the Life of a Rehoboth Haven Carer
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Get an inside look at what our carers do and how they make a difference in the lives of those they support.
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-300">
              <time dateTime="2024-12-15">December 15, 2024</time>
              <span className="mx-2">•</span>
              <span>6 min read</span>
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
                <strong>Content coming soon.</strong> This article will provide an inside look at 
                a typical day in the life of a Rehoboth Haven carer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn more about our compassionate team and how they can support your loved one.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/meet-the-team"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Meet The Team
            </Link>
            <Link
              href="/contact#consultation"
              className="inline-flex items-center rounded-md border-2 border-primary bg-white px-6 py-3 text-base font-semibold text-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

