import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Above All Maintenance & Repair",
  description:
    "Read the website terms of service for Above All Maintenance & Repair, including permitted use, estimates, and communication terms.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,152,40,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.95),transparent_48%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Legal</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              These terms govern your use of the Above All Maintenance & Repair website and related communications.
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
                <h2 className="text-2xl font-bold text-slate-950">1. Website Use</h2>
                <p className="leading-8">
                  By using this website, you agree to use it only for lawful purposes and in a way that does not
                  interfere with the operation, security, or availability of the site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">2. Estimates and Service Information</h2>
                <p className="leading-8">
                  Information on this website is provided for general marketing and informational purposes. Submitting a
                  form, sending an email, or requesting a callback does not guarantee service availability, acceptance of
                  a project, or a binding estimate. Final pricing, scope, and timelines are subject to inspection,
                  availability, and written approval where applicable.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">3. Communications</h2>
                <p className="leading-8">
                  By contacting us through this website, you consent to receive communications related to your inquiry,
                  including calls, emails, and service follow-ups. Standard carrier, messaging, or data rates may apply.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">4. Third-Party Services</h2>
                <p className="leading-8">
                  This website may use third-party tools for chat, analytics, email delivery, spam prevention, embedded
                  widgets, and scheduling. We are not responsible for the independent policies or practices of those third
                  parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">5. No Warranty</h2>
                <p className="leading-8">
                  The website and its contents are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties
                  of any kind, whether express or implied, except where such disclaimers are not permitted by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">6. Limitation of Liability</h2>
                <p className="leading-8">
                  To the fullest extent permitted by law, Above All Maintenance & Repair will not be liable for indirect,
                  incidental, special, or consequential damages arising out of or related to use of this website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">7. Changes to These Terms</h2>
                <p className="leading-8">
                  We may update these terms from time to time. Continued use of the website after updates are posted
                  constitutes acceptance of the revised terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">8. Contact Information</h2>
                <p className="leading-8">
                  For questions about these terms, contact Above All Maintenance & Repair at{" "}
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
                  These terms are a practical website draft and should be reviewed by legal counsel before being treated
                  as final legal advice.
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
