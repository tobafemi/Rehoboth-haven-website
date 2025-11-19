import type { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import { localBusinessSchema } from '@/lib/schema'
import RequestConsultationForm from '@/components/RequestConsultationForm'
import DownloadBrochureForm from '@/components/DownloadBrochureForm'

export const metadata: Metadata = generatePageSEO({
  title: 'Contact Us | Rehoboth Haven Care',
  description: 'Get in touch with Rehoboth Haven Care in Medway and Kent. Request a free consultation, download our brochure, or speak with our team.',
  path: '/contact',
})

const contactInfo = {
  phone: '07883 669445',
  email: 'rehobothaven@gmail.com',
  address: {
    street: '99 Academy Drive',
    city: 'Gillingham',
    county: 'Kent',
    postcode: 'ME7 3EG',
  },
  officeHours: {
    weekdays: '9:00 AM - 5:00 PM',
    weekends: '10:00 AM - 4:00 PM',
  },
}

export default function ContactPage() {
  const fullAddress = `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.county}${contactInfo.address.postcode ? ` ${contactInfo.address.postcode}` : ''}`.trim()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                We&apos;re here to help. Get in touch to learn more about our home care services, 
                request a free consultation, or ask any questions you may have.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Phone
                        </h3>
                        <a
                          href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                          className="text-lg font-medium text-primary hover:underline"
                        >
                          {contactInfo.phone}
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available {contactInfo.officeHours.weekdays} weekdays, {contactInfo.officeHours.weekends} weekends
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Email
                        </h3>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-lg font-medium text-primary hover:underline"
                        >
                          {contactInfo.email}
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          We&apos;ll respond within 24 hours
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Address
                        </h3>
                        <address className="text-lg font-medium text-foreground not-italic">
                          {fullAddress || `${contactInfo.address.city}, ${contactInfo.address.county}`}
                        </address>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Office Hours
                        </h3>
                        <div className="text-foreground">
                          <p className="font-medium">Weekdays: {contactInfo.officeHours.weekdays}</p>
                          <p className="font-medium mt-1">Weekends: {contactInfo.officeHours.weekends}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-secondary p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Emergency Contact</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For urgent matters outside office hours, please call our emergency line.
                    </p>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                    >
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="space-y-12">
                  {/* Request Consultation Form */}
                  <div id="consultation">
                    <RequestConsultationForm
                      title="Request a Free Consultation"
                      description="Schedule a free, no-obligation consultation to discuss your care needs. We'll visit your home to understand your environment and create a personalised care plan."
                    />
                  </div>

                  {/* Download Brochure Form */}
                  <div>
                    <DownloadBrochureForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">Our Service Area</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide home care services across Medway (Rochester, Chatham, Gillingham, Strood, Rainham) and wider Kent
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-200" style={{ height: '400px' }}>
              {/* Google Maps embed - Replace with actual embed code */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="text-center">
                  <svg className="h-16 w-16 text-primary/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-muted-foreground">Map will be embedded here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {fullAddress || `${contactInfo.address.city}, ${contactInfo.address.county}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

