import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  // Initialize Resend inside the function to avoid build-time errors
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    return NextResponse.json(
      { error: 'Email service is not configured' },
      { status: 500 }
    )
  }
  const resend = new Resend(resendApiKey)
  try {
    const body = await request.json()
    const { name, email, phone, careNeeds, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format care needs for display
    const careNeedsDisplay = careNeeds 
      ? careNeeds.split('-').map((word: string) => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
      : 'Not specified'

    // Send email to your business email
    const { data, error } = await resend.emails.send({
      from: 'Rehoboth Haven <Team@rehobothaven.com>', // Using verified domain
      to: ['rehobothaven@gmail.com'], // Consultation requests go here
      subject: `New Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4B0082; border-bottom: 2px solid #DAA520; padding-bottom: 10px;">
            New Consultation Request
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone.replace(/\s/g, '')}">${phone}</a></p>
            ${careNeeds ? `<p style="margin: 10px 0;"><strong>Care Needs:</strong> ${careNeedsDisplay}</p>` : ''}
            ${message ? `<div style="margin: 10px 0;"><strong>Message:</strong><br><div style="background-color: white; padding: 15px; border-left: 4px solid #4B0082; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</div></div>` : ''}
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Submitted from Rehoboth Haven website contact form</p>
            <p>You can reply directly to this email to contact ${name} at ${email}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Optional: Send confirmation email to the user
    try {
      await resend.emails.send({
        from: 'Rehoboth Haven <Team@rehobothaven.com>', // Using verified domain
        to: [email],
        subject: 'Thank you for your consultation request - Rehoboth Haven Care',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4B0082;">Thank you, ${name}!</h2>
            
            <p>We've received your consultation request and will contact you shortly to arrange your free, no-obligation consultation.</p>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #4B0082; margin-top: 0;">What happens next?</h3>
              <ul style="line-height: 1.8;">
                <li>Our team will review your request</li>
                <li>We'll contact you within 24 hours to schedule your consultation</li>
                <li>During the consultation, we'll visit your home to understand your care needs</li>
                <li>We'll create a personalised care plan tailored to you</li>
              </ul>
            </div>

            <div style="background-color: #fff8dc; padding: 15px; border-left: 4px solid #DAA520; margin: 20px 0;">
              <p style="margin: 0;"><strong>Need immediate assistance?</strong></p>
              <p style="margin: 5px 0 0 0;">Call us at <a href="tel:07883669445" style="color: #4B0082; font-weight: bold;">07883 669445</a></p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p><strong>Rehoboth Haven Care</strong></p>
              <p>99 Academy Drive, ME7 3EG, Gillingham</p>
              <p>Email: <a href="mailto:rehobothaven@gmail.com">rehobothaven@gmail.com</a> | Phone: <a href="tel:07883669445">07883 669445</a></p>
              <p style="margin-top: 10px;">Nurse-led domiciliary care in Medway and Kent | CQC Registration Pending</p>
            </div>
          </div>
        `,
      })
    } catch (confirmationError) {
      // Don't fail the whole request if confirmation email fails
      console.error('Failed to send confirmation email:', confirmationError)
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

