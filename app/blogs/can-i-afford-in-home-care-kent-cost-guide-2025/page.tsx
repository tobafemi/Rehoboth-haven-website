import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'Can I Afford In-Home Care in Kent? A Complete 2025 Cost Guide',
  description: 'A gentle guide to understanding the costs of in-home care in Kent. Learn what affects pricing, compare with residential care, and discover funding options that may help.',
  path: '/blogs/can-i-afford-in-home-care-kent-cost-guide-2025',
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
                Funding & Costs
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Can I Afford In-Home Care in Kent? A Complete 2025 Cost Guide
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              A gentle guide to understanding costs, comparing options, and discovering funding support that may help make in-home care affordable for your family.
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-300">
              <time dateTime="2025-01-15">January 15, 2025</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Key Takeaways Box */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 mb-12 border border-primary/20">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">Key Takeaways</h3>
                <ul className="space-y-2 text-base text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Care costs vary based on hours, type, and timing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>In-home care can be more affordable than residential care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Funding support may be available through councils and benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Blog Content with Optimized Typography */}
          <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mt-8 prose-h1:mb-6 prose-h1:leading-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight prose-h2:text-primary-dark prose-h2:flex prose-h2:items-center prose-h2:gap-3
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:leading-snug prose-h3:text-foreground
            prose-p:text-lg prose-p:leading-relaxed prose-p:text-foreground prose-p:mb-6
            prose-strong:text-foreground prose-strong:font-semibold
            prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:text-primary-dark hover:prose-a:underline
            prose-ul:my-6 prose-ul:space-y-3 prose-li:text-lg prose-li:leading-relaxed prose-li:text-foreground prose-li:marker:text-primary
            prose-ol:my-6 prose-ol:space-y-3 prose-li:marker:text-primary prose-li:marker:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-8 prose-blockquote:bg-secondary/50 prose-blockquote:italic prose-blockquote:text-foreground
            prose-hr:border-gray-300 prose-hr:my-12
            prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-medium
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
            prose-table:my-8 prose-th:bg-primary prose-th:text-white prose-th:font-semibold prose-th:p-4 prose-td:p-4 prose-td:border prose-td:border-gray-200">
            
            {/* Introduction */}
            <p className="text-xl text-foreground font-medium leading-relaxed mb-6">
              One of the first questions many families ask is very simple and very real.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-6 my-8 bg-secondary/50 italic text-foreground text-xl rounded-r-lg shadow-sm">
              <p className="mb-0">&ldquo;Can we actually afford in-home care?&rdquo;</p>
            </blockquote>

            <p>
              If you are asking this, you are not alone. At Rehoboth Haven Care we speak to families across Kent who feel torn between wanting the very best care and worrying about money. This short guide is here to bring some clarity and a bit of breathing space.
            </p>

            {/* What affects the cost */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l3.879 2.818a1.5 1.5 0 001.242 0L18 15.182M12 6L9.121 8.818a1.5 1.5 0 00-.621 1.182v5.182m0 0l-3.879 2.818a1.5 1.5 0 01-1.242 0L3 15.182m0-5.182l3.879-2.818a1.5 1.5 0 011.242 0L12 6l3.879-2.818a1.5 1.5 0 011.242 0L21 6v12l-3.879-2.818a1.5 1.5 0 00-1.242 0L12 18l-3.879 2.818a1.5 1.5 0 01-1.242 0L3 18V6" />
                </svg>
                What Affects the Cost of In-Home Care?
              </h2>
            </div>
            
            <p>
              The cost of care at home is shaped by a few key things.
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>How many hours of support do you need each week?</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>
                    <strong>The type of care needed</strong>, for example, personal care, dementia care or companionship
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>The times of day you need visits</strong>, such as early mornings, evenings or weekends
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <div>
                    <strong>Whether one carer is enough or if two carers are needed</strong> for safe moving and handling
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong className="text-primary-dark">💡 Good to know:</strong> Many people are surprised to find that they can start with just a few visits each week. Care does not have to be all or nothing. It can grow gently as needs change.
              </p>
            </div>

            {/* Comparing care options */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                Comparing In-Home Care with Residential Care
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  Residential Care
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Often more expensive than expected</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Fixed monthly costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Leaving familiar surroundings</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  In-Home Care
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Pay only for what you use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Stay in your own home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Keep familiar surroundings & pets</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              For some families, in-home care works out to be the more affordable option, especially if you only need help at certain times of day.
            </p>

            {/* Support with costs */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                Support That May Help with the Cost
              </h2>
            </div>

            <p>
              You may not have to shoulder the full cost alone. Depending on your situation, there may be help available.
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  <div>
                    <strong>A care needs assessment</strong> from Kent County Council
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  <div>
                    <strong>A financial assessment</strong> to see if the council will contribute
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582M15.69 15c1.33-.637 2.54-1.546 3.54-2.641M15.69 9a9.003 9.003 0 00-7.38 0M8.31 15c-1.33-.637-2.54-1.546-3.54-2.641M8.31 9a9.003 9.003 0 017.38 0" />
                  </svg>
                  <div>
                    <strong>National benefits</strong> such as Attendance Allowance or Personal Independence Payment
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <strong>NHS Continuing Healthcare</strong> in some complex health situations
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong>💬 We&apos;re here to help:</strong> This can feel confusing, which is why many families put it off. At Rehoboth Haven we are always happy to explain each step and signpost you to the right forms and phone numbers.
              </p>
            </div>

            {/* Planning ahead */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                Planning Ahead
              </h2>
            </div>

            <p>
              It can help to sit down with a notebook and work through:
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">1.</span>
                  <span>What support does your loved one need now</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">2.</span>
                  <span>What you and other family members can realistically provide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">3.</span>
                  <span>What a realistic monthly budget for care might look like</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">4.</span>
                  <span>Which benefits or funding options could you explore</span>
                </li>
              </ul>
            </div>

            <p>
              You do not have to make all the decisions in one day. Small, steady steps make a big difference.
            </p>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 my-12 border-2 border-primary text-foreground shadow-lg">
              <div className="flex items-start gap-4">
                <svg className="h-8 w-8 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-dark">Ready to Talk?</h3>
                  <p className="text-lg text-foreground mb-0">
                    If you are in Kent and wondering whether you can afford in-home care, we would be very happy to talk it through with you. There is no pressure and no obligation. You can book a free consultation with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-200">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Need Help Understanding Your Care Options?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team can help you understand costs and funding options for home care in Kent. Book a free, no-obligation consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#consultation"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Request a Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

