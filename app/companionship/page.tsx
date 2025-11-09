import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageSEO } from '@/lib/seo'
import RequestConsultationForm from '@/components/RequestConsultationForm'

export const metadata: Metadata = generatePageSEO({
  title: 'Companionship Care at Home in Medway & Kent | Rehoboth Haven',
  description: 'Companionship and social care at home in Medway and Kent. Combat loneliness with friendly visits, conversation, hobbies, and emotional support from our caring team.',
  path: '/companionship',
})

export default function CompanionshipPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Companionship Care</h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Providing social interaction, emotional support, and engagement in hobbies to combat loneliness. 
              Friendly, caring companionship that enriches daily life in the comfort of your own home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Meaningful Companionship at Home</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Loneliness and social isolation can significantly impact wellbeing. Our companionship service 
                  provides friendly, engaging visits that bring conversation, connection, and joy into your daily 
                  life. Whether you enjoy chatting, playing games, pursuing hobbies, or simply having someone 
                  there, our carers provide genuine companionship that makes a real difference.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">What We Offer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <span><strong className="text-foreground">Friendly Conversation:</strong> Engaging chats about interests, memories, current events, or anything you&apos;d like to discuss</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span><strong className="text-foreground">Shared Activities:</strong> Reading together, playing games, puzzles, or cards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                    <span><strong className="text-foreground">Hobby Support:</strong> Assistance with crafts, gardening, music, or other interests</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span><strong className="text-foreground">Accompanied Outings:</strong> Support with trips to shops, cafes, parks, or community events</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <span><strong className="text-foreground">Emotional Support:</strong> A listening ear and caring presence during difficult times</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                    <span><strong className="text-foreground">Letter Writing & Correspondence:</strong> Help with writing letters, cards, or managing correspondence</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Benefits of Companionship</h3>
                <p className="text-muted-foreground mb-4">
                  Regular companionship visits can significantly improve quality of life by:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Reducing feelings of loneliness and isolation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Maintaining mental stimulation and cognitive health</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Providing emotional support and connection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Encouraging engagement with interests and hobbies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Offering peace of mind to family members</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Flexible Visits</h3>
                <p className="text-muted-foreground mb-4">
                  Companionship visits can be arranged to suit your schedule and preferences. Whether you&apos;d 
                  like regular weekly visits, occasional social calls, or support during specific times, we 
                  can create a plan that works for you. Visits can also be combined with other services like 
                  personal care or medication support.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <RequestConsultationForm
                  title="Request a Care Assessment"
                  description="Discuss your companionship needs"
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

