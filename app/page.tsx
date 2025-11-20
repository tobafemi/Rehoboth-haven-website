import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generatePageSEO } from '@/lib/seo'
import { localBusinessSchema } from '@/lib/schema'
import RequestConsultationForm from '@/components/RequestConsultationForm'
import Testimonials from '@/components/Testimonials'
import ServiceCardHome from '@/components/ServiceCardHome'

export const metadata: Metadata = generatePageSEO({
  title: 'Rehoboth Haven Care: Nurse-Led Home Care in Medway & Kent',
  description: 'Expert, personalised domiciliary care in Medway and Kent. Managed by Registered Nurses with NHS experience. CQC registered. Bringing NHS standards of excellence to your home.',
})

const services = [
  {
    name: 'Personal Care',
    description: 'Assistance with daily routines like bathing, dressing, and grooming while promoting dignity and independence.',
    href: '/personal-care',
    image: '/images/personal-care.jpg',
  },
  {
    name: 'Medication Support',
    description: 'Timely reminders and assistance with medication, overseen by a clinically-experienced team.',
    href: '/medication-support',
    image: '/images/medication-support.jpg',
  },
  {
    name: 'Companionship',
    description: 'Providing social interaction, emotional support, and engagement in hobbies to combat loneliness.',
    href: '/companionship',
    image: '/images/companionship.jpg',
  },
  {
    name: 'Mobility Assistance',
    description: 'Support with moving around the home safely, helping to reduce the risk of falls.',
    href: '/mobility-assistance',
    image: '/images/mobility-assistance.jpg',
  },
  {
    name: 'Dementia Care',
    description: 'Specialised support for individuals living with dementia, focusing on routine, safety, and cognitive stimulation.',
    href: '/dementia-care',
    image: '/images/dementia-care.jpg',
  },
  {
    name: 'Respite Care',
    description: 'Providing short-term relief for family carers, allowing them to rest and recharge.',
    href: '/respite-care',
    image: '/images/respite.jpg',
  },
]

const testimonials = [
  {
    quote: 'The care my mother receives at home is exceptional. The carers are compassionate and professional, and I have complete peace of mind knowing she\'s being looked after by a nurse-led team.',
    author: 'Sarah Johnson',
    role: 'Daughter',
    image: '/images/testimonial-1.jpg',
  },
  {
    quote: 'Rehoboth Haven has enabled my father to stay in his own home where he\'s most comfortable. The team truly understands his needs and provides personalised care.',
    author: 'Michael Thompson',
    role: 'Son',
    image: '/images/testimonial-2.jpg',
  },
  {
    quote: 'We couldn\'t have asked for better care. The staff go above and beyond every single day, and having Registered Nurses managing the service gives us confidence in the quality of care.',
    author: 'Emma Williams',
    role: 'Daughter',
    image: '/images/testimonial-3.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center text-white overflow-hidden">
        {/* Background Image with Purple Gradient Overlay */}
        <div className="absolute inset-0 z-0">
            <Image
            src="/images/hero-care-home.jpg"
            alt="Compassionate caregiver providing warm, personalized home care to elderly person in their own home"
            fill
            className="object-cover hero-image-animated"
            priority
            quality={100}
            sizes="100vw"
          />
          {/* Purple Gradient Overlay - blends beautifully with warm tones, darker on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/55 z-10" />
        </div>
        
        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* CQC Registered Badge */}
            <div className="mb-6 inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full backdrop-blur-sm">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm font-semibold">CQC Registered Domiciliary Care</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nurse-Led Home Care in
              <span className="block text-gold">Medway & Kent</span>
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Bringing NHS standards of excellence and compassion to your home. Expert, personalised domiciliary care managed by Registered Nurses with extensive NHS leadership experience.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-white">
                <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <span className="text-sm font-medium">Nurse-Led Management</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-sm font-medium">Care in Your Own Home</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-sm font-medium">CQC Registered</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact#consultation"
                className="rounded-md bg-gold px-8 py-4 text-base font-semibold text-primary-dark shadow-lg hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-colors text-center sm:text-left"
              >
                Request a Free Consultation
              </Link>
              <Link
                href="/our-care"
                className="rounded-md border-2 border-white bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors text-center sm:text-left"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">CQC Registered</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fully compliant with Care Quality Commission standards</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Nurse-Led Management</h3>
              <p className="mt-2 text-sm text-muted-foreground">Managed by Registered Nurses with NHS leadership experience</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Person-Centred Care</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tailored care plans that respect your preferences and promote independence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Home Care Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive domiciliary care tailored to individual needs in the comfort of your own home
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCardHome key={service.name} service={service} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/our-care"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              View All Care Services
            </Link>
          </div>
        </div>
      </section>

      {/* Request Consultation CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Get Started with Rehoboth Haven
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                The best way to understand how we can support you or your loved one is through a free, 
                no-obligation consultation. We&apos;ll discuss your care needs, answer your questions, and 
                create a personalised care plan tailored to your situation.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Free Consultation</h4>
                    <p className="text-sm text-muted-foreground">No-obligation assessment of your care needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Home Assessment</h4>
                    <p className="text-sm text-muted-foreground">We&apos;ll visit your home to understand your environment and needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Personalised Care Plan</h4>
                    <p className="text-sm text-muted-foreground">Tailored to your preferences, needs, and lifestyle</p>
                  </div>
                </div>
              </div>
            </div>
            <RequestConsultationForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
    </>
  )
}

