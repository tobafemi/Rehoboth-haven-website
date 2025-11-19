'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Our Care', 
    href: '/our-care',
    children: [
      { name: 'Personal Care', href: '/personal-care' },
      { name: 'Medication Support', href: '/medication-support' },
      { name: 'Companionship', href: '/companionship' },
      { name: 'Mobility Assistance', href: '/mobility-assistance' },
      { name: 'Dementia Care', href: '/dementia-care' },
      { name: 'Respite Care', href: '/respite-care' },
    ]
  },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Areas We Cover', href: '/areas-we-cover' },
  { name: 'Meet The Team', href: '/meet-the-team' },
  { name: 'Contact', href: '/contact' },
]

const phoneNumber = '07883 669445'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [careMenuOpen, setCareMenuOpen] = useState(false)
  const [mobileCareMenuOpen, setMobileCareMenuOpen] = useState(false)
  const careMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleToggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleCloseMenu = () => {
    setMobileMenuOpen(false)
    setMobileCareMenuOpen(false)
  }

  const handleCareMenuToggle = () => {
    setMobileCareMenuOpen(!mobileCareMenuOpen)
  }

  const handleCareMenuEnter = () => {
    if (careMenuTimeoutRef.current) {
      clearTimeout(careMenuTimeoutRef.current)
      careMenuTimeoutRef.current = null
    }
    setCareMenuOpen(true)
  }

  const handleCareMenuLeave = () => {
    careMenuTimeoutRef.current = setTimeout(() => {
      setCareMenuOpen(false)
    }, 150) // Small delay to allow mouse movement
  }

  useEffect(() => {
    return () => {
      if (careMenuTimeoutRef.current) {
        clearTimeout(careMenuTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-gray-200 py-4 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={handleCloseMenu}>
              <span className="sr-only">Rehoboth Haven Care</span>
              <div className="h-10 w-10 sm:h-12 sm:w-12 relative">
                <Image
                  src="/images/logo.jpg"
                  alt="Rehoboth Haven Care Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-semibold text-primary">Rehoboth Haven</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleCareMenuEnter}
                    onMouseLeave={handleCareMenuLeave}
                  >
                    <Link
                      href={item.href}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors flex items-center"
                    >
                      {item.name}
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </Link>
                    {careMenuOpen && (
                      <div 
                        className="absolute left-0 pt-2 w-56 z-50"
                        onMouseEnter={handleCareMenuEnter}
                        onMouseLeave={handleCareMenuLeave}
                      >
                        <div className="rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-sm font-semibold text-primary border-b border-gray-200 hover:bg-gray-50 transition-colors"
                              role="menuitem"
                            >
                              All Services
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 hover:text-primary transition-colors"
                                role="menuitem"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            })}
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              aria-label={`Call us at ${phoneNumber}`}
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Call Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              aria-label={`Call us at ${phoneNumber}`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={handleToggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden',
            mobileMenuOpen ? 'block' : 'hidden'
          )}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={handleCareMenuToggle}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-gray-50 hover:text-primary transition-colors"
                      aria-expanded={mobileCareMenuOpen}
                    >
                      {item.name}
                      <svg
                        className={cn(
                          'h-5 w-5 transition-transform',
                          mobileCareMenuOpen ? 'rotate-180' : ''
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {mobileCareMenuOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-gray-50 transition-colors"
                          onClick={handleCloseMenu}
                        >
                          All Services
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-gray-50 hover:text-primary transition-colors"
                            onClick={handleCloseMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-gray-50 hover:text-primary transition-colors"
                  onClick={handleCloseMenu}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

