import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'Areas We Cover | Home Care Services in Medway & Kent',
  description: 'Rehoboth Haven provides nurse-led domiciliary care across Medway and Kent, including Rochester, Chatham, Gillingham, Strood, Rainham and surrounding areas.',
  path: '/areas-we-cover',
})

const areas = [
  {
    name: 'Rochester',
    description: 'Comprehensive home care services in Rochester, supporting individuals to remain independent in their own homes.',
  },
  {
    name: 'Chatham',
    description: 'Professional domiciliary care in Chatham, delivered by our experienced team of carers managed by Registered Nurses.',
  },
  {
    name: 'Gillingham',
    description: 'Expert home care in Gillingham, providing personalised support tailored to individual needs and preferences.',
  },
  {
    name: 'Strood',
    description: 'Reliable domiciliary care services in Strood, bringing NHS standards of excellence to your home.',
  },
  {
    name: 'Rainham',
    description: 'Compassionate home care in Rainham, managed by Registered Nurses with extensive NHS leadership experience.',
  },
]

const widerKentAreas = [
  'Maidstone',
  'Gravesend',
  'Dartford',
  'Sittingbourne',
  'Faversham',
  'Canterbury',
  'Whitstable',
  'Herne Bay',
  'Ramsgate',
  'Margate',
]

export default function AreasWeCoverPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Areas We Cover
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Rehoboth Haven provides nurse-led domiciliary care services across Medway and wider Kent. 
              We&apos;re a local agency committed to serving our community with expert, compassionate home care.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Service Area - Medway */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Medway - Our Primary Service Area</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide comprehensive home care services throughout Medway, with deep local knowledge 
              of the community and its specific needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area.name} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-foreground mb-3">{area.name}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Service Area</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              View our coverage area across Medway and Kent
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.5!2d0.548252!3d51.388497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIzJzE4LjYiTiAwwrAzMic1My43IkU!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rehoboth Haven Care Service Area - Medway and Kent"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Wider Kent Coverage */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Wider Kent Coverage</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We also provide services to surrounding areas in Kent. Please contact us to discuss 
              care availability in your specific location.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {widerKentAreas.map((area) => (
              <div key={area} className="bg-secondary rounded-lg p-4 text-center">
                <p className="text-foreground font-medium">{area}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Don&apos;t see your area listed? We may still be able to help. Contact us to discuss 
              care availability in your location.
            </p>
            <Link
              href="/contact#consultation"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Contact Us About Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Why Local Knowledge Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              As a local domiciliary care agency, we understand the unique needs of the Medway and Kent communities. 
              Our deep local knowledge means we can:
            </p>
            <ul className="text-left space-y-4 text-muted-foreground max-w-2xl mx-auto">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>Connect you with local health services and community resources</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>Provide carers who understand the local area and can navigate it easily</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>Offer flexible, responsive care that adapts to local community needs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>Build lasting relationships within the community we serve</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Request a free consultation to discuss your care needs and how we can support you in your area
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

