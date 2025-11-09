import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import RequestConsultationForm from '@/components/RequestConsultationForm'

export const metadata: Metadata = generatePageSEO({
  title: 'Mobility Assistance at Home in Medway & Kent | Rehoboth Haven',
  description: 'Mobility support and fall prevention at home in Medway and Kent. Safe assistance with moving around your home, transfers, and reducing fall risks.',
  path: '/mobility-assistance',
})

export default function MobilityAssistancePage() {
  return (
    <div className="bg-white">
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Mobility Assistance at Home</h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Support with moving around the home safely, helping to reduce the risk of falls and maintain 
              independence. Professional assistance with transfers, walking, and safe movement in your own home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Safe Mobility Support</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maintaining mobility and independence at home is important for quality of life. Our mobility 
                  assistance service provides safe, professional support to help you move around your home 
                  confidently, reducing the risk of falls and promoting independence.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">What We Offer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Transfer Assistance:</strong> Safe help moving between bed, chair, wheelchair, or toilet</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Walking Support:</strong> Assistance with walking around the home, including use of walking aids</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Stair Assistance:</strong> Safe support navigating stairs and steps</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Fall Prevention:</strong> Identifying and addressing potential hazards in the home</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Exercise Support:</strong> Encouraging and supporting gentle movement and exercise</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Positioning:</strong> Help with repositioning in bed or chair for comfort and pressure relief</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Safety First</h3>
                <p className="text-muted-foreground mb-4">
                  Our carers are trained in safe moving and handling techniques, ensuring that mobility support 
                  is provided safely for both you and the carer. We follow best practice guidelines and use 
                  appropriate techniques and equipment when needed. Safety is our priority, and we work to:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Reduce the risk of falls and accidents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Promote confidence in moving around your home</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Maintain independence wherever possible</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Work in partnership with physiotherapists and occupational therapists when needed</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Supporting Independence</h3>
                <p className="text-muted-foreground mb-4">
                  Our goal is to support your independence and confidence in moving around your home. We work 
                  with you to identify what you can do independently and where you need support, always 
                  encouraging and enabling you to maintain as much independence as possible.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <RequestConsultationForm
                  title="Request a Care Assessment"
                  description="Discuss your mobility support needs"
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
    </div>
  )
}

