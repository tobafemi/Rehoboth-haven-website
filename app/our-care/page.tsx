import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = generatePageSEO({
  title: 'Our Home Care Services | Domiciliary Care in Medway & Kent',
  description: 'Discover our comprehensive domiciliary care services including personal care, medication support, companionship, mobility assistance, dementia care, and respite care in Medway and Kent.',
  path: '/our-care',
})

const careServices = [
  {
    name: 'Personal Care',
    description: 'Assistance with daily routines like bathing, dressing, and grooming while promoting dignity and independence in the comfort of your own home.',
    href: '/personal-care',
    image: '/images/personal-care.jpg',
    features: [
      'Bathing and personal hygiene support',
      'Dressing and grooming assistance',
      'Respectful, dignified care',
      'Promotes independence at home',
    ],
  },
  {
    name: 'Medication Support',
    description: 'Timely reminders and assistance with medication, overseen by a clinically-experienced team of Registered Nurses. Ensuring medication safety and compliance.',
    href: '/medication-support',
    image: '/images/medication-support.jpg',
    features: [
      'Medication reminders and assistance',
      'Nurse-led clinical oversight',
      'Prescription management',
      'Safety and compliance focus',
    ],
  },
  {
    name: 'Companionship',
    description: 'Providing social interaction, emotional support, and engagement in hobbies to combat loneliness. Friendly, caring companionship that enriches daily life.',
    href: '/companionship',
    image: '/images/companionship.jpg',
    features: [
      'Friendly conversation and social interaction',
      'Shared activities and hobbies',
      'Emotional support',
      'Combatting loneliness and isolation',
    ],
  },
  {
    name: 'Mobility Assistance',
    description: 'Support with moving around the home safely, helping to reduce the risk of falls and maintain independence. Professional assistance with transfers and safe movement.',
    href: '/mobility-assistance',
    image: '/images/mobility-assistance.jpg',
    features: [
      'Safe transfer assistance',
      'Walking support',
      'Fall prevention',
      'Promotes confidence and independence',
    ],
  },
  {
    name: 'Dementia Care',
    description: 'Specialised support for individuals living with dementia, focusing on routine, safety, and cognitive stimulation in the comfort of your own home.',
    href: '/dementia-care',
    image: '/images/dementia-care.jpg',
    features: [
      'Specialised dementia training',
      'Routine and safety at home',
      'Cognitive stimulation activities',
      'Family support and education',
    ],
  },
  {
    name: 'Carer Respite',
    description: 'Providing short-term relief for family carers, allowing them to rest and recharge. Flexible in-home care support for peace of mind.',
    href: '/respite-care',
    image: '/images/respite.jpg',
    features: [
      'Flexible respite options',
      'Hourly, overnight, or live-in care',
      'Same high-quality nurse-led care',
      'Supports carer wellbeing',
    ],
  },
]

export default function OurCarePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Home Care Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              At Rehoboth Haven, we offer comprehensive domiciliary care services tailored to meet the unique 
              needs of each individual. From personal care and medication support to specialised dementia care 
              and carer respite, we provide compassionate, professional care in the comfort of your own home 
              across Medway and Kent.
            </p>
          </div>
        </div>
      </section>

      {/* Care Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {careServices.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Request a free consultation to discuss your care needs and how we can support you in your home
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

