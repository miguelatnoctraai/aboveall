import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import {
  BadgeCheck,
  Clock3,
  Droplets,
  Phone,
  Sparkles,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency Plumbing Landing Page | Above All Maintenance & Repair",
  description:
    "Premium plumbing landing page for paid traffic. Licensed Southern California plumbing support for leaks, drains, water heaters, and urgent service calls.",
  robots: {
    index: false,
    follow: false,
  },
}

const serviceCards = [
  {
    title: "Leaks & Pipe Repairs",
    description: "Fast diagnosis for active leaks, slab issues, burst lines, and recurring water damage.",
    icon: Droplets,
  },
  {
    title: "Drain & Sewer Issues",
    description: "Backups, slow drains, hydro jetting, camera inspections, and problem-line troubleshooting.",
    icon: Wrench,
  },
  {
    title: "Water Heater Service",
    description: "Repair, replacement, and performance checks for standard and tankless systems.",
    icon: Sparkles,
  },
]

const proofPoints = [
  "California License #1075924",
  "Bonded and insured",
  "Residential and commercial work",
  "Southern California coverage",
]

const processSteps = [
  {
    title: "Submit the form",
    description: "Fill out the form on this page and our team will reach out to confirm your service.",
  },
  {
    title: "Get a real diagnosis",
    description: "We confirm the problem, explain the scope, and set expectations before work starts.",
  },
  {
    title: "Move to repair fast",
    description: "The goal is a clean, permanent fix with minimal downtime and clear communication.",
  },
]

const testimonials = [
  {
    quote: "Fast response, professional crew, and clear communication from the first call through the repair.",
    role: "Commercial client",
  },
  {
    quote: "They showed up prepared, diagnosed the issue quickly, and handled the job without the usual runaround.",
    role: "Homeowner",
  },
  {
    quote: "Exactly what you want for urgent plumbing work: licensed, direct, and reliable.",
    role: "Property manager",
  },
]

export default function PlumbingLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script
        id="ghl-form-embed"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
      <Script
        id="ghl-form-redirect"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('message', function(event) {
              if (event.origin !== 'https://api.leadconnectorhq.com') return;
              var data = event.data;
              if (typeof data === 'string') {
                try { data = JSON.parse(data); } catch(e) { return; }
              }
              if (!data || typeof data !== 'object') return;
              var type = (data.type || data.event || '').toLowerCase();
              if (type.includes('submit') || type.includes('form_submitted') || type.includes('form-submitted')) {
                window.location.href = '/lp/plumbing/thank-you';
              }
            });
          `,
        }}
      />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700/80 bg-slate-950/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto max-w-md">
          <Button asChild className="h-12 w-full bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
            <a href="tel:951-330-6963">
              <Phone className="h-4 w-4" />
              Call Now — 951-330-6963
            </a>
          </Button>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-slate-800/70">
        <div className="absolute inset-0">
          <Image
            src="/emergency-plumbing-service-call.jpg"
            alt="Emergency plumbing service technician"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,152,40,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.95),transparent_45%)]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="relative z-10">
          <div className="border-b border-slate-800/70 bg-slate-950/55 backdrop-blur">
            <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
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

              <div className="hidden items-center gap-3 md:flex">
                <div className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  951-330-6963
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16 pb-28 md:py-24 md:pb-24 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="max-w-4xl">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/15 px-5 py-3">
                  <Clock3 className="h-4 w-4 text-red-400" />
                  <span className="text-sm font-semibold tracking-wide text-red-300">
                    Emergency plumbing support for Southern California properties
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Fast Plumbing Repairs For Leaks, Drains, Water Heaters, And Urgent Calls.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                  Clear communication, premium workmanship, and service built for homes, rentals, and commercial
                  properties. Call now or fill out the form to get started.
                </p>

                <div className="mt-8">
                  <Button asChild size="lg" className="h-14 bg-[#C29828] px-8 text-base text-slate-950 hover:bg-[#A67F20]">
                    <a href="tel:951-330-6963">
                      <Phone className="h-5 w-5" />
                      Call 951-330-6963
                    </a>
                  </Button>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {proofPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/65 px-4 py-4 backdrop-blur"
                    >
                      <BadgeCheck className="h-5 w-5 text-[#C29828]" />
                      <span className="text-sm font-medium text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GHL Form */}
              <div className="overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-900/75 shadow-2xl shadow-black/40">
                <div className="border-b border-slate-800/70 px-8 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Request Service</p>
                  <h2 className="mt-1 text-xl font-bold text-white">Fill out the form and we'll be in touch fast</h2>
                </div>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/fU31IPixYtg76UwQQmu7"
                  style={{ width: "100%", height: "551px", border: "none" }}
                  id="inline-fU31IPixYtg76UwQQmu7"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Marketing Form - Claim Offer"
                  data-height="551"
                  data-layout-iframe-id="inline-fU31IPixYtg76UwQQmu7"
                  data-form-id="fU31IPixYtg76UwQQmu7"
                  title="Marketing Form - Claim Offer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 text-slate-950">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Core services</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Plumbing problems visitors can recognize immediately.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The offer stays focused so visitors can identify the issue fast and move straight to the number without
              digging through the rest of the website.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {serviceCards.map((card) => {
              const Icon = card.icon

              return (
                <article
                  key={card.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-slate-950 p-4">
                    <Icon className="h-7 w-7 text-[#C29828]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">{card.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{card.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1628] py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/65 p-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Why property owners choose us</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white">One clear path from problem to plumbing service.</h2>
              <div className="mt-8 space-y-4">
                {[
                  "A focused page that gets visitors to the phone number fast.",
                  "Clear service positioning without overwhelming them with extra pages.",
                  "Repeated contact details near major decision points.",
                  "Strong trust markers without turning the page into a brochure.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#C29828]" />
                    <p className="text-base leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/55 p-7 backdrop-blur"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C29828] text-lg font-black text-slate-950">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Trust signals</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Proof without sending people somewhere else.</h2>
            </div>
            <div className="rounded-full border border-slate-800 bg-white/5 px-5 py-3 text-sm text-slate-300">
              Riverside, San Bernardino, Orange County, San Diego County
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.quote}
                className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/55 p-8 backdrop-blur"
              >
                <div className="mb-5 flex gap-1 text-[#C29828]">
                  <Sparkles className="h-5 w-5" />
                  <Sparkles className="h-5 w-5" />
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="text-lg leading-8 text-slate-200">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C29828] py-16 text-slate-950">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em]">Licensed plumbing service</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Ready to fix it? Call now.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-slate-800">
            Licensed, bonded, and insured — serving Southern California residential and commercial properties.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-14 bg-slate-950 px-10 text-base text-white hover:bg-slate-800"
            >
              <a href="tel:951-330-6963">
                <Phone className="h-5 w-5" />
                Call 951-330-6963
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 pb-24 pt-10 md:pb-10">
        <div className="container mx-auto flex flex-col gap-6 px-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-slate-200">Above All Maintenance & Repair</p>
            <p>License #1075924 | Bonded | Insured</p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/privacy-policy" className="hover:text-[#C29828] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#C29828] transition-colors">
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
