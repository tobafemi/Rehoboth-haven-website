import Link from 'next/link'

export default function CQCRegulatedServicesDisclaimer() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-400 text-amber-900 py-4 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <svg className="h-6 w-6 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <div className="text-center">
            <p className="font-medium text-base">
              <strong>Important Notice:</strong> Regulated services (Personal Care, Medication Administration, Dementia Care) cannot be provided until CQC registration is granted.{' '}
              <Link href="/contact" className="underline hover:text-amber-700 font-semibold transition-colors">
                Contact us
              </Link>
              {' '}to discuss available services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

