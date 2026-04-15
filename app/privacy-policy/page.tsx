import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Above All Maintenance & Repair",
  description:
    "Read the privacy policy for Above All Maintenance & Repair, including how contact details, service requests, and website data are handled.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,152,40,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.95),transparent_48%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Legal</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              This page explains how Above All Maintenance & Repair collects, uses, and protects information submitted
              through this website.
            </p>
            <p className="mt-4 text-sm text-slate-400">Last updated: April 14, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="space-y-10 text-slate-700">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">1. Information We Collect</h2>
                <p className="leading-8">
                  We may collect information you submit directly to us, including your name, phone number, email
                  address, property details, service requests, uploaded files, and any other information you choose to
                  provide when contacting us.
                </p>
                <p className="leading-8">
                  We may also collect limited technical information such as browser type, device information, referring
                  pages, and basic usage data through website analytics and third-party tools.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">2. How We Use Information</h2>
                <p className="leading-8">We use submitted information to:</p>
                <ul className="list-disc space-y-2 pl-6 leading-8">
                  <li>Respond to service inquiries and quote requests</li>
                  <li>Schedule appointments and communicate about jobs</li>
                  <li>Send confirmations, follow-ups, and service-related messages</li>
                  <li>Improve website performance, lead handling, and customer service</li>
                  <li>Protect against spam, fraud, and misuse of our forms and systems</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">3. How Information May Be Shared</h2>
                <p className="leading-8">
                  We do not sell your personal information. We may share information with service providers that help us
                  operate the website, process inquiries, send emails, prevent spam, or manage communications. We may
                  also disclose information when required by law or when necessary to protect our business, customers, or
                  legal rights.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">4. Cookies, Analytics, and Third-Party Tools</h2>
                <p className="leading-8">
                  This website may use cookies, analytics tools, chat tools, reCAPTCHA, scheduling tools, and other
                  third-party services to improve functionality and marketing performance. Those tools may collect data in
                  accordance with their own privacy practices.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">5. Data Security</h2>
                <p className="leading-8">
                  We use reasonable administrative and technical measures to protect submitted information. No website,
                  email system, or online transmission method can be guaranteed to be completely secure, so please avoid
                  sending highly sensitive information through website forms unless necessary.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">6. Your Choices</h2>
                <p className="leading-8">
                  If you want to update, correct, or request deletion of information you previously submitted, contact us
                  using the details below. We will review the request and respond as appropriate for our business and legal
                  obligations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">7. Contact Information</h2>
                <p className="leading-8">
                  For privacy questions, contact Above All Maintenance & Repair at{" "}
                  <a href="tel:951-330-6963" className="font-semibold text-[#A67F20] hover:text-[#8B6A1A]">
                    951-330-6963
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:frank@aboveallmaintenancerepair.com"
                    className="font-semibold text-[#A67F20] hover:text-[#8B6A1A]"
                  >
                    frank@aboveallmaintenancerepair.com
                  </a>
                  .
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm leading-7 text-slate-600">
                  This policy is a business website policy draft and should be reviewed with legal counsel before being
                  treated as final legal advice.
                </p>
              </section>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <Link href="/" className="text-sm font-semibold text-[#A67F20] hover:text-[#8B6A1A]">
                Return to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
