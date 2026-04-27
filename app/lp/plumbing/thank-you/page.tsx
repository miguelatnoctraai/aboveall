import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BadgeCheck, CheckCircle2, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Request Received | Above All Plumbing",
  description: "Your plumbing service request has been received. Our team will be in touch shortly.",
  robots: {
    index: false,
    follow: false,
  },
}

const nextSteps = [
  "A team member will call or text you within a few hours to confirm your request.",
  "We'll ask a few quick questions to understand the issue before we show up.",
  "Once confirmed, we get a tech dispatched and keep you updated.",
]

export default function PlumbingThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-slate-800/70 bg-slate-950/90">
        <div className="container mx-auto flex items-center gap-3 px-4 py-4">
          <Image
            src="/images/aam-20logo-20.png"
            alt="Above All Maintenance & Repair"
            width={56}
            height={56}
            className="h-14 w-auto"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Above All Plumbing</p>
            <p className="text-sm text-slate-300">Licensed plumbing service across Southern California</p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C29828]/15 ring-1 ring-[#C29828]/40">
              <CheckCircle2 className="h-10 w-10 text-[#C29828]" />
            </div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Request received</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            We've got your request.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-300">
            Someone from our team will follow up shortly to confirm the details and get a tech to you.
          </p>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="h-14 bg-[#C29828] px-10 text-base text-slate-950 hover:bg-[#A67F20]">
              <a href="tel:951-330-6963">
                <Phone className="h-5 w-5" />
                Call Now — 951-330-6963
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-xl rounded-[2rem] border border-slate-800/70 bg-slate-900/65 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">What happens next</p>
          <div className="mt-6 space-y-5">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C29828] text-sm font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="pt-1 text-base leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-[1.75rem] border border-slate-800/70 bg-slate-900/40 p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {["California License #1075924", "Bonded and insured", "Residential & commercial", "Southern California coverage"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 shrink-0 text-[#C29828]" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 pb-10 pt-8">
        <div className="container mx-auto flex flex-col gap-6 px-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-slate-200">Above All Maintenance & Repair</p>
            <p>License #1075924 | Bonded | Insured</p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/privacy-policy" className="transition-colors hover:text-[#C29828]">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-[#C29828]">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="space-y-1 md:text-right">
            <p className="text-slate-200">951-330-6963</p>
            <p>frank@aboveallmaintenancerepair.com</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
