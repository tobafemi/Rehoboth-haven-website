import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import Image from 'next/image'

export const metadata: Metadata = generatePageSEO({
  title: 'Blogs & News | Home Care Insights & Updates | Rehoboth Haven',
  description: 'Stay informed about home care in Kent and Medway. Read our latest blogs, news, and insights about domiciliary care, funding, care planning, and more.',
  path: '/blogs',
})

const blogPosts = [
  {
    title: 'Can I Afford In-Home Care in Kent? A Complete 2025 Cost Guide',
    slug: 'can-i-afford-in-home-care-kent-cost-guide-2025',
    excerpt: 'Understanding the costs of in-home care in Kent and exploring funding options available to families.',
    category: 'Funding & Costs',
    date: '2025-01-15',
    readTime: '8 min read',
  },
  {
    title: 'Home Care vs. Care Homes in Kent: Which Is Right for Your Family?',
    slug: 'home-care-vs-care-homes-kent-comparison',
    excerpt: 'A comprehensive comparison to help families make informed decisions about care options in Kent.',
    category: 'Care Options',
    date: '2025-01-10',
    readTime: '10 min read',
  },
  {
    title: 'What Is Included in In-Home Care? (Kent Families\' Guide)',
    slug: 'what-is-included-in-home-care-kent-guide',
    excerpt: 'Discover what services are typically included in domiciliary care packages and how they can support your loved one.',
    category: 'Care Services',
    date: '2025-01-05',
    readTime: '7 min read',
  },
  {
    title: 'How to Get Home Care Funding in Kent: Step-by-Step Guide',
    slug: 'how-to-get-home-care-funding-kent-step-by-step',
    excerpt: 'Navigate the funding process for home care in Kent with our detailed step-by-step guide.',
    category: 'Funding & Costs',
    date: '2024-12-28',
    readTime: '12 min read',
  },
  {
    title: 'Signs Your Loved One Needs Home Care: 12 Red Flags Kent Families Shouldn\'t Ignore',
    slug: 'signs-loved-one-needs-home-care-red-flags',
    excerpt: 'Recognize the early warning signs that indicate your loved one may benefit from professional home care support.',
    category: 'Care Planning',
    date: '2024-12-20',
    readTime: '9 min read',
  },
  {
    title: 'What Does a Caregiver Do? A Day in the Life of a Rehoboth Haven Carer',
    slug: 'what-does-caregiver-do-day-in-life-rehoboth-haven-carer',
    excerpt: 'Get an inside look at what our carers do and how they make a difference in the lives of those they support.',
    category: 'Our Team',
    date: '2024-12-15',
    readTime: '6 min read',
  },
]

const categories = ['All', 'Funding & Costs', 'Care Options', 'Care Services', 'Care Planning', 'Our Team']

export default function BlogsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blogs & News
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Stay informed about home care in Kent and Medway. Read our latest insights, guides, and updates 
              about domiciliary care, funding options, care planning, and more. Expert advice from our 
              nurse-led team to help you make informed decisions about care for your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Explore our collection of informative articles designed to help Kent families navigate home care decisions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 group"
              >
                <Link href={`/blogs/${post.slug}`} className="block">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="h-16 w-16 text-primary/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      Read More
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Press Releases</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with our latest news and announcements
            </p>
          </div>
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">
              Check back soon for our latest press releases and company updates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">Ready to Discuss Your Care Needs?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Our expert team is here to help you understand your options and create a personalised care plan 
              for your loved one. Request a free, no-obligation consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#consultation"
                className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-4 text-base font-semibold text-primary-dark shadow-lg hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-colors"
              >
                Request a Free Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-white bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-200">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Free Consultation
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                No Obligation
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Expert Advice
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

