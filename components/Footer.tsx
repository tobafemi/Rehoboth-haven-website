import Link from 'next/link'

const navigation = {
  care: [
    { name: 'Our Care', href: '/our-care' },
    { name: 'Personal Care', href: '/personal-care' },
    { name: 'Medication Support', href: '/medication-support' },
    { name: 'Companionship', href: '/companionship' },
    { name: 'Mobility Assistance', href: '/mobility-assistance' },
    { name: 'Dementia Care', href: '/dementia-care' },
    { name: 'Respite Care', href: '/respite-care' },
  ],
  about: [
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Areas We Cover', href: '/areas-we-cover' },
    { name: 'Meet The Team', href: '/meet-the-team' },
  ],
  blogs: [
    { name: 'Blogs & News', href: '/blogs' },
    { name: 'Can I Afford In-Home Care?', href: '/blogs/can-i-afford-in-home-care-kent-cost-guide-2025' },
    { name: 'Home Care vs. Care Homes', href: '/blogs/home-care-vs-care-homes-kent-comparison' },
    { name: 'What Is Included in In-Home Care?', href: '/blogs/what-is-included-in-home-care-kent-guide' },
    { name: 'How to Get Home Care Funding', href: '/blogs/how-to-get-home-care-funding-kent-step-by-step' },
    { name: 'Signs Your Loved One Needs Care', href: '/blogs/signs-loved-one-needs-home-care-red-flags' },
    { name: 'A Day in the Life of a Carer', href: '/blogs/what-does-caregiver-do-day-in-life-rehoboth-haven-carer' },
  ],
  contact: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Request Consultation', href: '/contact#consultation' },
  ],
}

const contactInfo = {
  phone: '07883 669445',
  email: 'rehobothaven@gmail.com',
  address: '99 Academy Drive, ME7 3EG, Gillingham',
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Rehoboth Haven Care</h3>
              <p className="mt-4 text-base text-gray-300">
                Nurse-led domiciliary care in Medway and Kent. Providing compassionate, professional home care managed by Registered Nurses. CQC registered.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </li>
                  <li className="text-base text-gray-300">
                    {contactInfo.address}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Our Care</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.care.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider">About</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Blogs & News</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.blogs.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary pt-8">
          <p className="text-base text-gray-300 xl:text-center">
            &copy; {currentYear} Rehoboth Haven Care. All rights reserved. | CQC Registered
          </p>
        </div>
      </div>
    </footer>
  )
}

