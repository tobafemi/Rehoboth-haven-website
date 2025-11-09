import type { Metadata } from 'next'
import Image from 'next/image'
import { generatePageSEO } from '@/lib/seo'

export const metadata: Metadata = generatePageSEO({
  title: 'Meet The Team | Our Care Professionals',
  description: 'Meet the dedicated care team at Rehoboth Haven. Nurse-led management and experienced, compassionate professionals committed to providing exceptional home care.',
  path: '/meet-the-team',
})

const teamMembers = [
  {
    name: 'Founder & Registered Nurse',
    role: 'Co-Founder & Clinical Director',
    qualifications: 'Registered Nurse (RN), NHS Leadership Experience',
    bio: 'One of our two founding Registered Nurses, bringing extensive NHS leadership experience in clinical governance, patient safety, and care planning. Their vision drives our commitment to bringing NHS standards of excellence to home care.',
    image: '/images/founder-1.jpg',
  },
  {
    name: 'Founder & Registered Nurse',
    role: 'Co-Founder & Clinical Director',
    qualifications: 'Registered Nurse (RN), NHS Leadership Experience',
    bio: 'Our second founding Registered Nurse, with deep expertise in dementia care management, elderly care, and team leadership. Their clinical expertise ensures the highest standards of care across all our services.',
    image: '/images/founder-2.jpg',
  },
  {
    name: 'Care Manager',
    role: 'Care Manager',
    qualifications: 'NVQ Level 5 in Health and Social Care',
    bio: 'Our Care Manager coordinates care delivery, ensuring seamless service and maintaining our high standards. They work closely with clients, families, and carers to create personalised care plans.',
    image: '/images/care-manager.jpg',
  },
  {
    name: 'Care Coordinator',
    role: 'Care Coordinator',
    qualifications: 'NVQ Level 3 in Health and Social Care',
    bio: 'Our Care Coordinator manages day-to-day scheduling and ensures continuity of care. They match clients with the right carers and maintain communication between all parties.',
    image: '/images/care-coordinator.jpg',
  },
]

export default function MeetTheTeamPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Meet The Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Our dedicated team of care professionals is committed to providing exceptional, 
              compassionate home care. Led by Registered Nurses with NHS experience, get to know 
              the people who make Rehoboth Haven special.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Founders</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Two Registered Nurses with extensive NHS leadership experience
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.slice(0, 2).map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <svg className="h-24 w-24 text-primary/30" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.role}</h3>
                  <p className="text-gold font-semibold mb-2">{member.qualifications}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Management Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experienced professionals ensuring quality care delivery
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.slice(2).map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <svg className="h-24 w-24 text-primary/30" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-gold font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.qualifications}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Team */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Care Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dedicated care assistants providing compassionate support in your home
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Our team of care assistants are carefully selected, thoroughly trained, and continuously 
              supported by our nurse-led management team. They receive comprehensive training in:
            </p>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span>Person-centred care principles</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span>Dementia care and communication</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span>Medication management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span>Safe moving and handling</span>
                </li>
              </ul>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span>Safeguarding and protection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span>Infection prevention and control</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span>End-of-life and palliative care</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span>Ongoing professional development</span>
                </li>
              </ul>
            </div>
            <p className="text-lg text-muted-foreground mt-8">
              All our carers work under the clinical supervision of our Registered Nurse managers, 
              ensuring that care is delivered safely, professionally, and in accordance with best practice.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Commitment</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every member of our team shares a commitment to exceptional care
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15m-9 0a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Training</h3>
              <p className="text-sm text-muted-foreground">
                Ongoing professional development ensures our team stays current with best practices
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Compassionate Care</h3>
              <p className="text-sm text-muted-foreground">
                Genuine care and respect for every client&apos;s dignity and wellbeing
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">High Standards</h3>
              <p className="text-sm text-muted-foreground">
                Maintaining CQC compliance and exceeding regulatory requirements
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Working together to provide seamless, coordinated care
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

