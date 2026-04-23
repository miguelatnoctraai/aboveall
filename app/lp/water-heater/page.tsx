import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import {
  BadgeCheck,
  Flame,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Tag,
  Wrench,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Water Heater Repair & Replacement — 15% Off | Above All Maintenance & Repair",
  description:
    "Licensed water heater repair, replacement, and tankless installation across Southern California. 15% off your first service call. Call now for same-day service.",
  robots: {
    index: false,
    follow: false,
  },
}

const services = [
  {
    icon: Wrench,
    title: "Water Heater Repair",
    description: "No hot water, strange noises, pilot light issues, or thermostat problems — diagnosed and fixed fast.",
  },
  {
    icon: Flame,
    title: "Full Replacement",
    description: "Tank units failing? We handle removal and installation of new standard or high-efficiency systems.",
  },
  {
    icon: Zap,
    title: "Tankless Installation",
    description: "Upgrade to on-demand hot water. We size, install, and test tankless systems for residential and commercial.",
  },
]

const proofPoints = [
  "California License #1075924",
  "Bonded and insured",
  "Residential & commercial",
  "Southern California coverage",
]

const testimonials = [
  {
    quote: "They replaced our water heater the same day. Fast, clean work and no surprise charges.",
    role: "Homeowner, Riverside",
  },
  {
    quote: "Professional crew, clear pricing, and they showed up on time. Exactly what we needed.",
    role: "Property manager",
  },
  {
    quote: "Had our tankless unit installed without any issues. Would hire again without hesitation.",
    role: "Commercial client",
  },
]

export default function WaterHeaterLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script
        id="ghl-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        strategy="afterInteractive"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69df0ad89f3b6f4b27afdf6a"
      />
      <Script
        id="ghl-form-embed"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700/80 bg-slate-950/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <Button asChild className="h-12 flex-1 bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
            <a href="tel:951-330-6963">
              <Phone className="h-4 w-4" />
              Call Now — 15% Off
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 flex-1 border-[#C29828]/40 bg-transparent text-white hover:bg-white/10"
          >
            <a href="mailto:frank@aboveallmaintenancerepair.com">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </Button>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <div className="absolute inset-0">
          <Image
            src="/plumber-fixing-pipe-leak-under-sink.jpg"
            alt="Water heater service technician"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,152,40,0.22),transparent_34%)]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="relative z-10">
          {/* Nav bar */}
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
                  <p className="text-sm text-slate-300">Licensed water heater service — Southern California</p>
                </div>
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <div className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  951-330-6963
                </div>
                <div className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  frank@aboveallmaintenancerepair.com
                </div>
              </div>
            </div>
          </div>

          {/* Hero content */}
          <div className="container mx-auto px-4 py-16 pb-28 md:py-24 md:pb-24 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="max-w-4xl">
                {/* Offer badge */}
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C29828]/60 bg-[#C29828]/20 px-5 py-3">
                  <Tag className="h-4 w-4 text-[#C29828]" />
                  <span className="text-sm font-bold tracking-wide text-[#C29828]">
                    15% off your water heater service — mention this offer when you call
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Water Heater Repair & Replacement. Fast. Licensed. 15% Off.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                  No hot water? Leaking tank? Ready to upgrade to tankless? We handle repairs, full replacements, and
                  new installations across Southern California — with clear pricing and no runaround.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="h-14 bg-[#C29828] px-8 text-base text-slate-950 hover:bg-[#A67F20]">
                    <a href="tel:951-330-6963">
                      <Phone className="h-5 w-5" />
                      Call 951-330-6963
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 border-[#C29828]/40 bg-white/5 px-8 text-base text-white hover:bg-white/10"
                  >
                    <a href="mailto:frank@aboveallmaintenancerepair.com">
                      <Mail className="h-5 w-5" />
                      Email for Scheduling
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
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Claim Your 15% Off</p>
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

      {/* Services */}
      <section className="bg-slate-50 py-20 text-slate-950">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">What we handle</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Every water heater situation, handled right.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((card) => {
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

      {/* Testimonials */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">What clients say</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Licensed work, honest pricing, no surprises.
            </h2>
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

      {/* Bottom CTA */}
      <section className="bg-[#C29828] py-16 text-slate-950">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em]">Limited offer</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            15% off your water heater service today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-slate-800">
            Mention this offer when you call or email. Licensed, bonded, and insured — serving Southern California
            residential and commercial properties.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
