import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'Why Choose Rehoboth Haven | Nurse-Led Home Care in Medway & Kent',
  description: 'Learn about Rehoboth Haven\'s nurse-led approach, founders\' story, and what makes us different. CQC registered domiciliary care in Medway and Kent.',
  path: '/why-choose-us',
})

const differentiators = [
  {
    title: 'Nurse-Led Management',
    description: 'Our service is founded and managed by two Registered Nurses with extensive NHS leadership experience, ensuring higher standards of clinical oversight and safety.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Truly Person-Centred Care',
    description: 'We listen to your needs, prioritise your preferences, and create flexible care that adapts to you—unlike the generalised approach of larger agencies.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Care in Your Own Home',
    description: 'We bring expert care directly to your home, enabling you to remain in familiar, comfortable surroundings while receiving professional support.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Deep Local Knowledge',
    description: 'We\'re a local agency for the people of Medway and Kent, understanding the community, local health services, and specific needs of the population.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality Carers',
    description: 'We pay our staff above-average rates, which translates to happier, more motivated carers and better continuity of care for your loved one.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'CQC Registered',
    description: 'Fully registered with the Care Quality Commission and committed to maintaining the highest standards of domiciliary care.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Why Choose Rehoboth Haven
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Our commitment to compassionate, professional, nurse-led care sets us apart. Learn about 
              our founders&apos; story, philosophy, values, and what makes Rehoboth Haven the right choice 
              for home care in Medway and Kent.
            </p>
          </div>
        </div>
      </section>

      {/* Founders' Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Founders&apos; Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4 text-lg">
                Rehoboth Haven was founded by two dedicated Registered Nurses who spent years in 
                leadership roles within the NHS, managing high-pressure environments where patient 
                safety and quality of care were paramount.
              </p>
              <p className="mb-4">
                Their extensive experience in clinical governance, patient safety, care planning for 
                complex conditions, dementia care management, elderly care, and team leadership gave 
                them a deep understanding of what truly excellent care looks like. They saw firsthand 
                the difference that clinical expertise, compassionate leadership, and person-centred 
                approaches could make.
              </p>
              <p className="mb-4">
                Driven by a desire to bring that same level of clinical excellence and compassion 
                directly into the homes of people in their community, they started Rehoboth Haven. 
                Their vision was simple: to create a domiciliary care agency that combines NHS 
                standards of excellence with the warmth, flexibility, and personal touch that only 
                a local, nurse-led agency can provide.
              </p>
              <p>
                Today, their commitment to Medway and Kent communities remains at the heart of 
                everything we do. Every aspect of our service—from care planning to staff training, 
                from medication management to person-centred support—reflects their clinical expertise 
                and genuine care for the people we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Philosophy</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4 text-lg">
                At Rehoboth Haven, we believe in person-centred care that empowers individuals to 
                live as independently as possible in their own homes. Our philosophy is built on:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span><strong className="text-foreground">Dignity and Independence:</strong> Empowering you to remain in your cherished home environment with as much independence as possible</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  <span><strong className="text-foreground">Truly Person-Centred:</strong> We listen to your needs, prioritise your preferences, and create flexible care that adapts to you—not a one-size-fits-all approach</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  <span><strong className="text-foreground">Clinical Excellence:</strong> Nurse-led management ensures clinical oversight, safety, and professional standards that exceed typical domiciliary care agencies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  <span><strong className="text-foreground">Local Commitment:</strong> Deep understanding of the Medway and Kent communities, local health services, and specific needs of our population</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  <span><strong className="text-foreground">Quality Carers:</strong> Investing in our team through above-average pay ensures happier, more motivated carers and better continuity of care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What Sets Us Apart</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The qualities that make Rehoboth Haven the right choice
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-gold mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CQC Registration */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-primary/5 p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">CQC Registered</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Rehoboth Haven is fully registered with the Care Quality Commission (CQC), 
                  the independent regulator of health and social care in England.
                </p>
                <p className="text-muted-foreground mb-6">
                  We maintain the highest standards of domiciliary care and compliance, regularly reviewed 
                  by the CQC to ensure we meet all regulatory requirements. Our commitment to quality care 
                  is demonstrated through our ongoing compliance and continuous improvement. Our nurse-led 
                  approach ensures that clinical governance and patient safety are at the forefront of 
                  everything we do.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg bg-white p-8 shadow-lg text-center">
                  <svg className="h-16 w-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <p className="text-sm font-semibold text-foreground">CQC Registered</p>
                  <p className="text-xs text-muted-foreground mt-2">Care Quality Commission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Request a free consultation to discuss your care needs and learn how we can support you in your home
          </p>
          <div className="mt-8">
            <Link
              href="/contact#consultation"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Request a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

