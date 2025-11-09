import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import RequestConsultationForm from '@/components/RequestConsultationForm'

export const metadata: Metadata = generatePageSEO({
  title: 'Carer Respite Services in Medway & Kent | Rehoboth Haven',
  description: 'Carer respite services providing short-term relief for family carers in Medway and Kent. Flexible in-home care support allowing carers to rest and recharge.',
  path: '/respite-care',
})

export default function RespiteCarePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Carer Respite Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Providing short-term relief for family carers, allowing them to rest and recharge. 
              Flexible in-home care support that gives you peace of mind while you take a well-deserved break.
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Supporting Family Carers</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Caring for a loved one is rewarding, but it can also be physically and emotionally 
                  demanding. Our carer respite service provides flexible in-home care support, giving 
                  family carers the opportunity to rest, recharge, or attend to other commitments, 
                  knowing their loved one is receiving the same high-quality, nurse-led care in the 
                  comfort of their own home.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">When Carer Respite Can Help</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Regular Breaks:</strong> Scheduled respite to prevent carer burnout and maintain your own wellbeing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Holidays & Travel:</strong> Peace of mind while you take a well-deserved holiday or visit family</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Medical Appointments:</strong> Support while you attend your own healthcare appointments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Work Commitments:</strong> Flexible care to support your work schedule</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Emergency Situations:</strong> Last-minute support when unexpected circumstances arise</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Flexible Respite Options</h3>
                <p className="text-muted-foreground mb-4">
                  We offer flexible respite care options to suit your needs:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Hourly Visits:</strong> Regular visits during the day or evening</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Overnight Care:</strong> Support through the night for peace of mind</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Live-In Care:</strong> 24-hour support for extended breaks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Scheduled Regular Breaks:</strong> Weekly or monthly respite to maintain carer wellbeing</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Same High-Quality Care</h3>
                <p className="text-muted-foreground mb-4">
                  During respite periods, your loved one receives the same exceptional standard of 
                  nurse-led care we provide to all our clients:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Nurse-led management and clinical oversight</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Personalised care plans tailored to individual needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Continuity of care in familiar home surroundings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>All personal care, medication support, and companionship services</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Respite Matters</h3>
                <p className="text-muted-foreground mb-4">
                  Taking regular breaks from caring is essential for maintaining your own health and 
                  wellbeing, which in turn enables you to continue providing quality care. Respite care 
                  isn&apos;t just a luxury—it&apos;s a necessity for sustainable, long-term caregiving. We&apos;re 
                  here to support you so you can continue supporting your loved one.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <RequestConsultationForm
                  title="Request Respite Care"
                  description="Discuss your respite care needs with our team"
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
    </div>
  )
}

