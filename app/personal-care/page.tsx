import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import RequestConsultationForm from '@/components/RequestConsultationForm'

export const metadata: Metadata = generatePageSEO({
  title: 'Personal Care at Home in Medway & Kent | Rehoboth Haven',
  description: 'Professional personal care assistance at home in Medway and Kent. Help with bathing, dressing, grooming, and daily routines. Nurse-led domiciliary care promoting dignity and independence.',
  path: '/personal-care',
})

export default function PersonalCarePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Personal Care at Home
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Assistance with daily routines like bathing, dressing, and grooming while promoting 
              dignity and independence in the comfort of your own home.
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Compassionate Personal Care in Your Home</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Rehoboth Haven, we understand that maintaining personal hygiene and daily routines 
                  is essential for dignity, confidence, and wellbeing. Our personal care service provides 
                  sensitive, respectful assistance with daily living activities, enabling you to remain 
                  independent in your own home.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Our Approach</h3>
                <p className="text-muted-foreground mb-4">
                  We believe in person-centred care that respects your dignity, privacy, and preferences. 
                  Our experienced care team works closely with you and your family to create personalised 
                  care plans that promote independence while providing the support you need. Every aspect 
                  of personal care is delivered with sensitivity, respect, and professionalism.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">What We Offer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Bathing & Showering:</strong> Safe, dignified assistance with bathing, showering, and personal hygiene</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Dressing & Grooming:</strong> Help with selecting clothes, dressing, and personal grooming to maintain your appearance and confidence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Toileting Assistance:</strong> Respectful support with using the toilet and maintaining continence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Hair & Nail Care:</strong> Assistance with hair washing, styling, and nail care</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Skin Care:</strong> Help with applying creams, lotions, and maintaining healthy skin</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span><strong className="text-foreground">Oral Hygiene:</strong> Support with brushing teeth, denture care, and maintaining oral health</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Choose Our Personal Care Service?</h3>
                <p className="text-muted-foreground mb-4">
                  Our nurse-led approach ensures that personal care is delivered with clinical expertise 
                  and compassion. We understand that personal care is deeply personal, and we respect 
                  your dignity, privacy, and preferences at all times. Our carers are trained to:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Maintain your dignity and respect your privacy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Promote your independence wherever possible</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Follow your preferences and routines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Ensure safety and infection control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Work collaboratively with you and your family</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Flexible Care Arrangements</h3>
                <p className="text-muted-foreground mb-4">
                  We understand that personal care needs vary from person to person and can change over time. 
                  Our flexible service can be tailored to your specific requirements, whether you need:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Regular daily visits for morning or evening routines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Occasional support as needed</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Support during recovery periods</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Combined with other services like medication support or companionship</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Serving Medway & Kent</h3>
                <p className="text-muted-foreground mb-4">
                  We provide personal care services across Medway (Rochester, Chatham, Gillingham, Strood, Rainham) 
                  and wider Kent. Our local knowledge and understanding of the community enables us to provide 
                  responsive, reliable care that fits seamlessly into your life.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <RequestConsultationForm
                  title="Request a Care Assessment"
                  description="Discuss your personal care needs with our team"
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
                      <Link href="/medication-support" className="text-primary hover:underline">
                        Medication Support
                      </Link>
                    </li>
                    <li>
                      <Link href="/companionship" className="text-primary hover:underline">
                        Companionship
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

