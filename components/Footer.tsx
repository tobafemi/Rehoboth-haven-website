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
  contact: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Request Consultation', href: '/contact#consultation' },
  ],
}

const contactInfo = {
  phone: '+44-XXXX-XXXXXX', // Update with actual phone number
  email: 'info@rehobothhaven.co.uk', // Update with actual email
  address: 'Gillingham, Kent', // Update with actual address
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

