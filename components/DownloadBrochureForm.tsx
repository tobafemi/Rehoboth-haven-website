'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const brochureFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional(),
})

type BrochureFormData = z.infer<typeof brochureFormSchema>

interface DownloadBrochureFormProps {
  className?: string
}

export default function DownloadBrochureForm({ className = '' }: DownloadBrochureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BrochureFormData>({
    resolver: zodResolver(brochureFormSchema),
  })

  const onSubmit = async (data: BrochureFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/download-brochure', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // In production, this would trigger the PDF download
      // For now, we'll just show success
      setSubmitSuccess(true)
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      setSubmitError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className={`rounded-lg bg-green-50 p-6 ${className}`}>
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-green-600 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-green-900">Thank you!</h3>
            <p className="text-green-700">Your brochure download should start shortly. If it doesn&apos;t, please check your email.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-lg bg-white p-6 shadow-lg ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Download Our Brochure</h2>
        <p className="mt-2 text-base text-muted-foreground">
          Get detailed information about our care services, facilities, and approach to care.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="brochure-name" className="block text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="brochure-name"
            {...register('name')}
            className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'brochure-name-error' : undefined}
          />
          {errors.name && (
            <p id="brochure-name-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="brochure-email" className="block text-sm font-medium text-foreground">
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="brochure-email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'brochure-email-error' : undefined}
          />
          {errors.email && (
            <p id="brochure-email-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="brochure-phone" className="block text-sm font-medium text-foreground">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="brochure-phone"
            {...register('phone')}
            className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'brochure-phone-error' : undefined}
          />
          {errors.phone && (
            <p id="brochure-phone-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {submitError && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-800" role="alert">{submitError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Processing...' : 'Download Brochure'}
        </button>
      </form>
    </div>
  )
}

