import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'How Do I Know If My Loved One Needs Home Care? Signs Kent Families Should Look For',
  description: 'Gentle signs to look for when considering home care. Learn about changes in personal care, medication, home environment, and emotional wellbeing.',
  path: '/blogs/signs-loved-one-needs-home-care-red-flags',
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
                Care Planning
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              How Do I Know If My Loved One Needs Home Care? Signs Kent Families Should Look For
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Gentle signs to look for when considering home care. Learn about changes in personal care, medication, home environment, and emotional wellbeing.
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-300">
              <time dateTime="2024-12-20">December 20, 2024</time>
              <span className="mx-2">•</span>
              <span>7 min read</span>
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
                <h3 className="text-lg font-semibold text-foreground mb-2">Signs to Watch For</h3>
                <ul className="space-y-2 text-base text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Changes in personal care and appearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Medication worries and missed doses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Home environment changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Emotional and social changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Increased risk of falls</span>
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
              It is not always easy to see when &ldquo;a bit of help&rdquo; has become &ldquo;time for proper care.&rdquo; Many families feel guilty for even thinking about it, or they worry they are overreacting.
            </p>

            <p>
              Here are some gentle signs to look out for. Not every point will apply to your situation, but if several sound familiar, it may be time to talk about in-home care.
            </p>

            {/* Personal Care */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Changes in Personal Care and Appearance
              </h2>
            </div>

            <p>
              You might notice that:
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Clothes are worn for many days in a row</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Washing and bathing seem to happen less often</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Hair, nails or oral care are being neglected</div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong>💙 Understanding the signs:</strong> These changes are often not about pride or laziness. They can signal that personal care is becoming physically or emotionally hard to manage.
              </p>
            </div>

            {/* Medication */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                </svg>
                Medication Worries
              </h2>
            </div>

            <p>
              Perhaps you have found:
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>Untaken tablets left in a pill organiser</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>Confusion about which medicine is which</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>Too many repeat prescriptions piling up</div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-300 rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong>⚠️ Important:</strong> Missed or incorrect medication can be serious. Gentle, regular support can make a big difference very quickly.
              </p>
            </div>

            {/* Home Environment */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                The Home Feels Different
              </h2>
            </div>

            <p>
              Look around the house. You might see:
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Dishes left unwashed for long periods</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Food out of date in the fridge</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 17.7l-1.1-1.1m-5.4 0l-1.1 1.1-1.402 1.402c-1.232 1.232-3.228 1.232-4.46 0s-1.232-3.228 0-4.46l1.402-1.402L5 14.5" />
                  </svg>
                  <div>Bins overflowing or clutter building up</div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong>💙 Understanding the signs:</strong> Again, this is usually a sign of struggle rather than choice. It may show that everyday tasks have become tiring or painful.
              </p>
            </div>

            {/* Emotional Changes */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Emotional and Social Changes
              </h2>
            </div>

            <p>
              Your loved one might:
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 my-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>Go out less than they used to</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>Seem more anxious, tearful or withdrawn</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>Say they feel lonely, even if family visit</div>
                </li>
              </ul>
            </div>

            <div className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong>💚 The power of companionship:</strong> Companionship care can ease isolation and bring back small pleasures such as walks, games or shared meals.
              </p>
            </div>

            {/* Falls Risk */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Increased Risk of Falls
              </h2>
            </div>

            <p>
              Perhaps there have been recent trips or falls, or you notice unsteadiness on stairs or when getting in and out of chairs. Support with mobility and simple changes around the home can prevent more serious injuries.
            </p>

            {/* Trust Your Instincts */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                Trust Your Instincts
              </h2>
            </div>

            <p>
              You know your loved one better than any checklist. If your instinct is telling you that things are not quite right, it is worth exploring what help is available.
            </p>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 my-12 border-2 border-primary text-foreground shadow-lg">
              <div className="flex items-start gap-4">
                <svg className="h-8 w-8 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-dark">We&apos;re Here to Help</h3>
                  <p className="text-lg text-foreground mb-0">
                    At Rehoboth Haven we understand how sensitive these conversations can be. If you are in Kent and wondering whether it is time for home care, reach out to us. We can offer a gentle home visit or phone call to talk through what you are seeing and suggest options, without any pressure or judgement.
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Recognizing the Signs?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you&apos;ve noticed these signs, our team can help assess your loved one&apos;s needs. Book a free, no-obligation consultation today.
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

