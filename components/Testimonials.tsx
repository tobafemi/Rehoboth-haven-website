import Image from 'next/image'

interface Testimonial {
  quote: string
  author: string
  role: string
  image?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  title?: string
  showImages?: boolean
  className?: string
}

export default function Testimonials({
  testimonials,
  title = 'What Families Say',
  showImages = true,
  className = '',
}: TestimonialsProps) {
  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className={`py-16 bg-secondary ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Read what families have to say about their experience with us
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
            >
              <div className="flex-1">
                <svg
                  className="h-8 w-8 text-gold mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-foreground text-lg mb-6">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                {showImages && testimonial.image && (
                  <div className="h-12 w-12 relative rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



