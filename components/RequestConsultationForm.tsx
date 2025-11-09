'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const consultationFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  careNeeds: z.string().optional(),
  message: z.string().optional(),
})

type ConsultationFormData = z.infer<typeof consultationFormSchema>

interface RequestConsultationFormProps {
  className?: string
  title?: string
  description?: string
}

export default function RequestConsultationForm({ 
  className = '',
  title = 'Request a Free Consultation',
  description = 'Get started with a free, no-obligation consultation to discuss your care needs'
}: RequestConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationFormSchema),
  })

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/request-consultation', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitSuccess(true)
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      setSubmitError('Something went wrong. Please try again or call us directly.')
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
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-green-900">Thank you!</h3>
            <p className="text-green-700">We&apos;ll contact you shortly to arrange your free consultation and discuss your care needs.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-lg bg-white p-6 shadow-lg ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        {description && (
          <p className="mt-2 text-base text-muted-foreground">{description}</p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="careNeeds" className="block text-sm font-medium text-foreground">
            Care Needs or Service Interest (Optional)
          </label>
          <select
            id="careNeeds"
            {...register('careNeeds')}
            className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
          >
            <option value="">Select a service...</option>
            <option value="personal-care">Personal Care</option>
            <option value="medication-support">Medication Support</option>
            <option value="companionship">Companionship</option>
            <option value="mobility-assistance">Mobility Assistance</option>
            <option value="dementia-care">Dementia Care</option>
            <option value="respite-care">Respite Care</option>
            <option value="palliative-care">Palliative & End-of-Life Care</option>
            <option value="post-hospital">Post-Hospital Discharge Care</option>
            <option value="not-sure">Not Sure / General Enquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Additional Information (Optional)
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            placeholder="Tell us about your care needs or any questions you have..."
            className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
          />
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
          {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
        </button>
      </form>
    </div>
  )
}

