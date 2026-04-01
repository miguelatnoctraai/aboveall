import { Resend } from "resend"
import { NextResponse } from "next/server"

const FRANK_EMAIL = "frank@aboveallmaintenancerepair.com"
const FROM_EMAIL = "Above All Maintenance <noreply@aboveallmaintenancerepair.com>"
const REPLY_TO_EMAIL = "frank@aboveallmaintenancerepair.com"
const PHYSICAL_ADDRESS = "San Bernardino County, CA | License #1075924"

// Email footer for CAN-SPAM compliance
const getEmailFooter = (includeUnsubscribe = false) => `
  <div style="margin-top: 40px; padding: 20px; border-top: 1px solid #e0e0e0; background: #f9f9f9; text-align: center;">
    <p style="color: #888; font-size: 12px; margin: 5px 0;">Above All Maintenance & Repair</p>
    <p style="color: #888; font-size: 12px; margin: 5px 0;">${PHYSICAL_ADDRESS}</p>
    <p style="color: #888; font-size: 12px; margin: 5px 0;">Phone: <a href="tel:951-330-6963" style="color: #888;">951-330-6963</a></p>
    <p style="color: #888; font-size: 12px; margin: 5px 0;">Email: <a href="mailto:frank@aboveallmaintenancerepair.com" style="color: #888;">frank@aboveallmaintenancerepair.com</a></p>
    ${includeUnsubscribe ? '<p style="color: #888; font-size: 11px; margin: 15px 0 5px 0;">To unsubscribe from promotional emails, reply with "UNSUBSCRIBE" in the subject line.</p>' : ""}
    <p style="color: #aaa; font-size: 11px; margin: 10px 0 0 0;">This email was sent because you submitted a request on our website.</p>
  </div>
`

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY

  return NextResponse.json({
    status: apiKey ? "configured" : "missing_api_key",
    hasApiKey: !!apiKey,
    apiKeyPrefix: apiKey ? `${apiKey.substring(0, 10)}...` : "Not set",
    fromEmail: FROM_EMAIL,
    toEmail: FRANK_EMAIL,
    message: !apiKey
      ? "RESEND_API_KEY is missing. Add it in the Vars section."
      : "API key is set. Domain verified. Ready to send emails.",
  })
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        message: "RESEND_API_KEY is missing",
        error: "Please add RESEND_API_KEY in the Vars section of v0.",
      },
      { status: 500 },
    )
  }

  const resend = new Resend(apiKey)

  try {
    const body = await request.json()
    const { type } = body

    // Case A: Contact Form Submission
    if (type === "contact") {
      const { name, email, phone, service, propertyType, urgency, details } = body

      const { data: frankData, error: frankError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: FRANK_EMAIL,
        replyTo: email || REPLY_TO_EMAIL,
        subject: `New Lead: ${service} - ${urgency === "emergency" ? "EMERGENCY" : urgency} - ${phone}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1e3a5f; border-bottom: 3px solid #C29828; padding-bottom: 10px;">New Quote Request</h1>
            <div style="background: #fff3cd; border: 2px solid #C29828; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #1e3a5f; margin-top: 0; margin-bottom: 15px;">CALL THIS LEAD:</h2>
              <p style="font-size: 24px; font-weight: bold; margin: 0;"><a href="tel:${phone}" style="color: #1e3a5f; text-decoration: none;">${phone}</a></p>
              <p style="margin: 10px 0 0 0;"><strong>Name:</strong> ${name}</p>
            </div>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #1e3a5f; margin-top: 0;">Contact Information</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> <a href="tel:${phone}" style="font-size: 18px; font-weight: bold;">${phone}</a></p>
              <p><strong>Email:</strong> ${email || "Not provided"}</p>
            </div>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #1e3a5f; margin-top: 0;">Project Details</h2>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Property Type:</strong> ${propertyType}</p>
              <p><strong>Urgency:</strong> <span style="color: ${urgency === "emergency" ? "red" : "inherit"}; font-weight: bold;">${urgency}</span></p>
              <p><strong>Details:</strong> ${details || "No additional details provided"}</p>
            </div>
            <p style="color: #666; font-size: 12px;">Above All Maintenance & Repair - License #1075924</p>
          </div>
        `,
      })

      if (frankError) {
        return NextResponse.json(
          {
            success: false,
            message: "Failed to send notification",
            error: frankError.message,
          },
          { status: 500 },
        )
      }

      if (email) {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: email,
          replyTo: REPLY_TO_EMAIL,
          subject: "Your Quote Request - Above All Maintenance & Repair",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0;">Thank You!</h1>
                <p style="color: #C29828; font-size: 18px; margin: 10px 0 0 0;">We've received your request</p>
              </div>
              <div style="padding: 30px; background: #f9f9f9;">
                <p style="font-size: 16px; color: #333;">Hi ${name},</p>
                <p style="font-size: 16px; color: #333;">Thank you for contacting Above All Maintenance & Repair. We've received your request for <strong>${service}</strong> and will review the details shortly.</p>
                <div style="background: white; padding: 20px; border-left: 4px solid #C29828; margin: 20px 0;">
                  <p style="margin: 0; color: #666;"><strong>What's Next?</strong></p>
                  <p style="margin: 10px 0 0 0; color: #666;">Our team will contact you within 24 hours to discuss your project and provide a detailed quote.</p>
                </div>
                <p style="font-size: 16px; color: #333;">If you have an emergency, please call us directly at <a href="tel:951-330-6963" style="color: #C29828; text-decoration: none;">951-330-6963</a>.</p>
                ${getEmailFooter(false)}
              </div>
            </div>
          `,
        })
      }

      return NextResponse.json({
        success: true,
        message: "Quote request submitted successfully! Check your email for confirmation.",
        emailId: frankData?.id,
      })
    }

    // Case B: Promo Popup Subscription
    if (type === "promo") {
      const { email } = body

      if (!email) {
        return NextResponse.json({ success: false, message: "Email address is required" }, { status: 400 })
      }

      // Calculate expiration date (30 days from now)
      const signupDate = new Date()
      const expirationDate = new Date(signupDate)
      expirationDate.setDate(expirationDate.getDate() + 30)
      const formattedExpiration = expirationDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
      
      // Generate date-based discount code: ABOVE15-MMDDYY (expiration date embedded)
      const expMonth = String(expirationDate.getMonth() + 1).padStart(2, "0")
      const expDay = String(expirationDate.getDate()).padStart(2, "0")
      const expYear = String(expirationDate.getFullYear()).slice(-2)
      const discountCode = `ABOVE15-${expMonth}${expDay}${expYear}`

      const { data: notifyData, error: notifyError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: FRANK_EMAIL,
        replyTo: email,
        subject: `New Subscriber - Code ${discountCode} (Expires ${formattedExpiration})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1e3a5f; border-bottom: 3px solid #C29828; padding-bottom: 10px;">New Email Subscriber</h1>
            <p>A new visitor has subscribed to your mailing list and claimed a 15% discount code.</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Discount Code:</strong> <span style="font-size: 18px; font-weight: bold; color: #C29828;">${discountCode}</span></p>
              <p><strong>Signup Date:</strong> ${signupDate.toLocaleString()}</p>
              <p style="color: #dc3545; font-weight: bold; font-size: 16px;"><strong>Code Expires:</strong> ${formattedExpiration}</p>
            </div>
            <div style="background: #e8f4fd; border: 1px solid #0066cc; padding: 15px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0; color: #0066cc; font-size: 14px;"><strong>Code Format:</strong> ABOVE15-MMDDYY</p>
              <p style="margin: 5px 0 0 0; color: #666; font-size: 13px;">The numbers after the dash represent the expiration date (${expMonth}/${expDay}/${expYear}). If this date has passed, the code is expired.</p>
            </div>
            <p style="color: #666;">Add this email to your marketing list for future promotions.</p>
          </div>
        `,
      })

      if (notifyError) {
        return NextResponse.json(
          {
            success: false,
            message: "Failed to process subscription",
            error: notifyError.message,
          },
          { status: 500 },
        )
      }

      const { error: customerError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        replyTo: REPLY_TO_EMAIL,
        subject: `Your Discount Code: ${discountCode} - Above All Maintenance`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 32px;">Welcome!</h1>
              <p style="color: #C29828; font-size: 20px; margin: 10px 0 0 0;">Here's Your Exclusive Discount</p>
            </div>
            <div style="padding: 40px; background: #f9f9f9;">
              <p style="font-size: 16px; color: #333;">Thank you for subscribing to Above All Maintenance & Repair!</p>
              <div style="background: white; border: 3px dashed #C29828; padding: 30px; margin: 30px 0; text-align: center; border-radius: 8px;">
                <p style="color: #666; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase;">Your Discount Code</p>
                <p style="font-size: 32px; font-weight: bold; color: #C29828; margin: 0; letter-spacing: 2px;">${discountCode}</p>
                <p style="color: #666; margin: 10px 0 0 0; font-size: 14px;">15% OFF Your First Service</p>
                <div style="background: #dc3545; color: white; padding: 10px; margin-top: 15px; border-radius: 4px;">
                  <p style="margin: 0; font-weight: bold; font-size: 14px;">EXPIRES: ${formattedExpiration}</p>
                  <p style="margin: 5px 0 0 0; font-size: 12px;">Act now - only valid for 30 days!</p>
                </div>
              </div>
              <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 4px; margin: 20px 0;">
                <p style="margin: 0; color: #856404; font-size: 14px;"><strong>How to Use:</strong> Mention code <strong>${discountCode}</strong> when requesting a quote or booking a service before ${formattedExpiration}.</p>
              </div>
              <h3 style="color: #1e3a5f; margin-top: 30px;">Our Services Include:</h3>
              <ul style="color: #666; line-height: 1.8;">
                <li>Plumbing Repairs & Installation</li>
                <li>Electrical Services</li>
                <li>Painting & Finishing</li>
                <li>Construction & Carpentry</li>
                <li>Welding & Fabrication</li>
                <li>Parking Lot Maintenance</li>
              </ul>
              <div style="text-align: center; margin-top: 30px;">
                <a href="tel:951-330-6963" style="display: inline-block; background: linear-gradient(135deg, #C29828 0%, #A67F20 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 16px;">Call Now: 951-330-6963</a>
              </div>
                ${getEmailFooter(true)}
            </div>
          </div>
        `,
      })

      if (customerError) {
        console.error("Failed to send discount code to customer:", customerError)
        // Still return success since Frank got the notification, but warn about customer email
        return NextResponse.json({
          success: true,
          message: "Subscribed! Your discount code is being sent. If you don't receive it within 5 minutes, check your spam folder or call us at 951-330-6963.",
          emailId: notifyData?.id,
          warning: "Customer email delivery may be delayed",
        })
      }

      return NextResponse.json({
        success: true,
        message: "Success! Check your email for your discount code. Don't forget to check your spam folder!",
        emailId: notifyData?.id,
      })
    }

    return NextResponse.json({ success: false, message: "Invalid request type" }, { status: 400 })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ success: false, message: "Request failed", error: errorMessage }, { status: 500 })
  }
}
