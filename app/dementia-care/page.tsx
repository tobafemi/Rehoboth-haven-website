import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import RequestConsultationForm from '@/components/RequestConsultationForm'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = generatePageSEO({
  title: 'Dementia Care at Home in Medway & Kent | Specialized Memory Care',
  description: 'Specialised dementia and Alzheimer\'s care at home in Medway and Kent. Nurse-led support focusing on routine, safety, and cognitive stimulation in your own home.',
  path: '/dementia-care',
})

const testimonials = [
  {
    quote: 'The specialized dementia care for my mother at home has been exceptional. The carers understand her needs and help maintain her routine in familiar surroundings.',
    author: 'Sarah Johnson',
    role: 'Daughter',
    image: '/images/testimonial-1.jpg',
  },
  {
    quote: 'We were worried about finding the right care for Dad\'s Alzheimer\'s. Rehoboth Haven\'s nurse-led approach has exceeded our expectations, enabling him to stay in his own home.',
    author: 'Michael Thompson',
    role: 'Son',
    image: '/images/testimonial-2.jpg',
  },
]

export default function DementiaCarePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Dementia Care at Home
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Specialised support for individuals living with dementia, focusing on routine, safety, 
              and cognitive stimulation in the comfort of your own home. Our nurse-led team provides 
              compassionate, expert care that promotes dignity and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Specialised Dementia Care at Home</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Caring for a loved one with dementia requires specialised knowledge, patience, and 
                  understanding. At Rehoboth Haven, we provide expert dementia and Alzheimer&apos;s care 
                  in your own home, focusing on maintaining dignity, promoting independence, and 
                  enhancing quality of life in familiar surroundings.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Our Specialised Approach</h3>
                <p className="text-muted-foreground mb-4">
                  Our dementia care program is built on evidence-based practices and person-centred 
                  care principles. We understand that each person&apos;s journey with dementia is unique, 
                  and we tailor our approach to meet individual needs, preferences, and abilities. 
                  Being in your own home provides familiarity and comfort that can help reduce anxiety 
                  and confusion associated with dementia.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Specialized Staff Training</h3>
                <p className="text-muted-foreground mb-4">
                  All our care team members receive comprehensive dementia care training, including:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Dementia awareness and understanding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Communication techniques for dementia care</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Behavior management and de-escalation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Person-centered care planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Ongoing professional development</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Safety & Routine at Home</h3>
                <p className="text-muted-foreground mb-4">
                  We work with you and your family to create a safe, supportive home environment that includes:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Safety assessments and recommendations for home modifications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Consistent routines that provide structure and reduce confusion</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Familiar surroundings that provide comfort and reduce anxiety</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Supervision and support to prevent wandering and ensure safety</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Cognitive Stimulation & Activities</h3>
                <p className="text-muted-foreground mb-4">
                  We provide cognitive stimulation activities in your home, designed to support cognitive function, 
                  maintain skills, and provide enjoyment:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Reminiscence therapy using photos, music, and familiar objects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Music and art activities tailored to interests</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Gentle exercise and movement activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Engagement with familiar hobbies and interests</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Support for family involvement and maintaining family connections</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Family Support & Education</h3>
                <p className="text-muted-foreground mb-4">
                  We understand that dementia affects the whole family. We provide ongoing support, 
                  education, and regular communication to help families understand their loved one&apos;s 
                  condition and how best to support them.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <RequestConsultationForm
                  title="Request a Care Assessment"
                  description="Discuss your dementia care needs"
                />
                <div className="mt-6 rounded-lg bg-secondary p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/our-care" className="text-primary hover:underline">
                        View All Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/personal-care" className="text-primary hover:underline">
                        Personal Care
                      </Link>
                    </li>
                    <li>
                      <Link href="/areas-we-cover" className="text-primary hover:underline">
                        Areas We Cover
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-primary hover:underline">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} title="Families Share Their Experience" showImages={false} />
    </div>
  )
}

