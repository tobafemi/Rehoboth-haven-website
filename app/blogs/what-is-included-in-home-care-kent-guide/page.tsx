import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'What Is Included in Home Care? A Clear Guide for Kent Families',
  description: 'Discover what in-home care really involves. Learn about personal care, medication support, companionship, and more services available to Kent families.',
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
              What Is Included in Home Care? A Clear Guide for Kent Families
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Discover what in-home care really involves. Learn about personal care, medication support, companionship, and more services available to Kent families.
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-300">
              <time dateTime="2025-01-05">January 5, 2025</time>
              <span className="mx-2">•</span>
              <span>6 min read</span>
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
                <h3 className="text-lg font-semibold text-foreground mb-2">What You&apos;ll Learn</h3>
                <ul className="space-y-2 text-base text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Personal care services with dignity and respect</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Medication support and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Companionship and emotional support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Help around the home and specialist care options</span>
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
              Many people hear the words &ldquo;home care&rdquo; and are not quite sure what it really involves. Is it only washing and dressing? Do carers help around the house? Can they offer companionship as well?
            </p>

            <p>
              This guide lifts the lid on what in-home care with Rehoboth Haven can include, so you know what to expect and what you can ask for.
            </p>

            {/* Personal Care */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Personal Care with Dignity
              </h2>
            </div>

            <p>
              Personal care is at the heart of what we do. This may include:
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Help with washing, showering or bathing</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Support with getting dressed and undressed</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Assistance with toileting and continence care</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Oral care and grooming</div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong>💙 Our approach:</strong> Our carers work gently and respectfully, always explaining what they are doing and allowing the person to stay in control as much as possible.
              </p>
            </div>

            {/* Medication Support */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                </svg>
                Medication Support
              </h2>
            </div>

            <p>
              Managing tablets and prescriptions can easily become confusing, especially when someone is tired or unwell. Our carers can:
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>Give prompts and reminders at the right times</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>Assist with eye drops, creams and other prescribed items</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  <div>Record what has been taken so families can see at a glance</div>
                </li>
              </ul>
            </div>

            <p>
              This brings peace of mind and reduces the risk of missed doses.
            </p>

            {/* Companionship */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                Companionship and Emotional Support
              </h2>
            </div>

            <p>
              Care is not only physical. So many families tell us that companionship has been the biggest blessing.
            </p>

            <p>
              Companionship might look like:
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Sharing a cup of tea and a chat</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Playing cards, board games or doing a jigsaw</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Reading the newspaper together or looking through old photos</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>Going for a gentle walk</div>
                </li>
              </ul>
            </div>

            <div className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong>💚 The power of connection:</strong> Human connection is a powerful part of wellbeing, especially for those who live alone.
              </p>
            </div>

            {/* Help Around Home */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Help Around the Home
              </h2>
            </div>

            <p>
              A tidy, safe home can make everyday life feel easier. Depending on the care plan, our carers can help with:
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Light housework such as washing up and tidying surfaces</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Simple laundry and bed changes</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Meal preparation, from breakfast to simple home-cooked dishes</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a4.5 4.5 0 00-4.5-4.5H2.25m15.75 0a4.5 4.5 0 014.5 4.5m0 0V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-1.5m15.75 0a4.5 4.5 0 00-4.5-4.5H2.25m15.75 0a4.5 4.5 0 014.5 4.5m0 0V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-1.5" />
                  </svg>
                  <div>Shopping trips or putting away deliveries</div>
                </li>
              </ul>
            </div>

            {/* Specialist Care */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Specialist Care, Such as Dementia Support
              </h2>
            </div>

            <p>
              In-home care can also include more specialised support, for example, dementia care, mobility assistance and respite for family carers. Everything is tailored around the person and agreed in advance in a clear care plan.
            </p>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 my-12 border-2 border-primary text-foreground shadow-lg">
              <div className="flex items-start gap-4">
                <svg className="h-8 w-8 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-dark">Want to Know More?</h3>
                  <p className="text-lg text-foreground mb-0">
                    If you are in Kent and would like to know exactly what Rehoboth Haven could offer your family, we would be glad to explain our services in more detail and listen carefully to your needs. Get in touch for a friendly conversation and a no obligation care visit, so you can see what in-home care really feels like.
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Learn More About Our Services</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover how our comprehensive home care services can support your loved one. Book a free, no-obligation consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#consultation"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 005.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
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

