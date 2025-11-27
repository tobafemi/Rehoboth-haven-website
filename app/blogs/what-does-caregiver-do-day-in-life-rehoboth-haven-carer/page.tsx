import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'A Day in the Life of a Rehoboth Haven Caregiver',
  description: 'Get an inside look at what our carers do throughout the day. See how they bring warmth, patience and respect into every home they visit in Kent.',
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
              A Day in the Life of a Rehoboth Haven Caregiver
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Get an inside look at what our carers do throughout the day. See how they bring warmth, patience and respect into every home they visit in Kent.
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-300">
              <time dateTime="2024-12-15">December 15, 2024</time>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">A Typical Day</h3>
                <ul className="space-y-2 text-base text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Morning visits: Personal care with dignity and respect</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Midday support: Meals, medication and companionship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Afternoon: Community outings and activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Evening visits: Comfort, safety and reassurance</span>
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
              When you invite a carer into your home, you are welcoming a new person into very private moments. It is natural to wonder what they are really like and what their day looks like.
            </p>

            <p>
              Let us walk through a typical day in the life of a Rehoboth Haven caregiver.
            </p>

            {/* Morning Visits */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                Morning Visits: Starting the Day with Dignity
              </h2>
            </div>

            <p>
              The day often begins bright and early. A carer might arrive to help Mrs A get up, washed and dressed. They greet her by name, chat about how she slept and take their time so she feels calm and unhurried.
            </p>

            <p>
              They help her to the bathroom, support her with washing and dressing, then guide her safely to her favourite chair. Breakfast is prepared just the way she likes it, with a hot cup of tea in her own familiar mug.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong>📝 Keeping families informed:</strong> Notes are recorded so the family know how the morning has gone.
              </p>
            </div>

            {/* Midday Support */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Midday Support: Meals, Medication and a Listening Ear
              </h2>
            </div>

            <p>
              Later, the carer visits Mr B. He lives alone and sometimes forgets to eat. Together they prepare a simple lunch. The carer checks his medication, offers a gentle reminder and watches to make sure he takes it safely.
            </p>

            <p>
              After lunch they sit together for a while. They talk about his time in the forces, look through old photos and share a laugh about the television programme he enjoys. For Mr B, this is often the highlight of his day.
            </p>

            {/* Afternoon */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Afternoon: Companionship and Community
              </h2>
            </div>

            <p>
              In the afternoon, the carer may take Mrs C out for a short walk or a trip to the local shop in Kent. Even ten or fifteen minutes of fresh air and a change of scene can lift the mood.
            </p>

            <p>
              For another person, the afternoon might be a quiet time indoors, playing cards or completing a puzzle together. The carer is always watching for signs of tiredness or discomfort and adjusts the pace accordingly.
            </p>

            {/* Evening Visits */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                Evening Visits: Comfort and Reassurance
              </h2>
            </div>

            <p>
              As the day winds down, the carer visits Mr and Mrs D, an older couple who need some help in the evenings. They prepare a light meal, help with night time medication and make sure the home is safe for the night.
            </p>

            <p>
              There may be a little conversation, a check that windows and doors are secure, and then kind goodnights. The couple know they can sleep more peacefully, and their family rest easier too.
            </p>

            {/* Behind the Scenes */}
            <div className="relative">
              <h2 className="flex items-center gap-3">
                <svg className="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Behind the Scenes: Training and Teamwork
              </h2>
            </div>

            <p>
              Rehoboth Haven carers are trained, supported and supervised. They keep clear records, communicate with the office and with families, and receive ongoing training in areas such as dementia care, moving and handling and safeguarding.
            </p>

            <div className="bg-gold/10 border-l-4 border-gold rounded-r-lg p-5 my-8">
              <p className="mb-0 text-foreground">
                <strong>💙 What matters most:</strong> Most importantly, they bring warmth, patience and respect into every home they visit.
              </p>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 my-12 border-2 border-primary text-foreground shadow-lg">
              <div className="flex items-start gap-4">
                <svg className="h-8 w-8 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-dark">Meet a Caregiver</h3>
                  <p className="text-lg text-foreground mb-4">
                    If you live in Kent and would like to meet a Rehoboth Haven caregiver, we would be delighted to arrange an introductory visit. You can ask questions, share your concerns and see for yourself how in-home care could bring comfort, safety and companionship to your loved one.
                  </p>
                  <p className="text-lg text-foreground mb-0">
                    Reach out today and let us walk this journey with you.
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Learn more about our compassionate team and how they can support your loved one. Book a free, no-obligation consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/meet-the-team"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  Meet The Team
                </Link>
                <Link
                  href="/contact#consultation"
                  className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

