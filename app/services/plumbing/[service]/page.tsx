import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getPlumbingService,
  getServiceCityCards,
  isPlumbingServiceSlug,
  plumbingServiceSlugs,
  plumbingServices,
} from "@/lib/location-content"
import { businessInfo } from "@/lib/business-info"

export const dynamicParams = false

type PlumbingServicePageProps = {
  params: Promise<{ service: string }>
}

export function generateStaticParams() {
  return plumbingServiceSlugs.map((service) => ({ service }))
}

export async function generateMetadata({ params }: PlumbingServicePageProps): Promise<Metadata> {
  const { service } = await params

  if (!isPlumbingServiceSlug(service)) {
    return {
      title: "Service Not Found",
    }
  }

  const serviceContent = plumbingServices[service]

  return {
    title: `${serviceContent.hubTitle} | Above All Maintenance & Repair`,
    description: serviceContent.hubDescription,
    alternates: {
      canonical: `${businessInfo.website}/services/plumbing/${service}`,
    },
  }
}

export default async function PlumbingServiceHubPage({ params }: PlumbingServicePageProps) {
  const { service } = await params

  if (!isPlumbingServiceSlug(service)) {
    notFound()
  }

  const serviceContent = getPlumbingService(service)
  const cityCards = getServiceCityCards(service)
  const siblingServices = plumbingServiceSlugs.filter((serviceSlug) => serviceSlug !== service)

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(194,152,40,0.18),transparent_35%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <span>/</span>
              <Link href="/services/plumbing" className="hover:text-white">
                Plumbing
              </Link>
              <span>/</span>
              <span>{serviceContent.name}</span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Plumbing service</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{serviceContent.hubTitle}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{serviceContent.heroSummary}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:951-330-6963">
                <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 951-330-6963
                </Button>
              </a>
              <Link href="/services/plumbing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
                >
                  All Plumbing Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Overview</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">What to expect from this service</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{serviceContent.intro}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {serviceContent.quickPoints.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Service scope</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              What Above All includes under {serviceContent.name.toLowerCase()}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceContent.capabilities.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-600">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Process</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">How we handle this service</h2>
              <div className="mt-8 space-y-5">
                {serviceContent.process.map((step, index) => (
                  <div key={step.title} className="flex gap-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-lg font-black text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">{step.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">FAQ</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Common questions about {serviceContent.name.toLowerCase()}</h2>
              <div className="mt-8 space-y-5">
                {serviceContent.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-950">{faq.question}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Service areas</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Choose your city for local plumbing help.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Start with your city to see local plumbing details, common call reasons, and service information for this job.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cityCards.map((card) => (
              <article
                key={card.slug}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">{card.name}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-950">{serviceContent.name}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{card.blurb}</p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
                >
                  View {card.name} service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Other plumbing services</p>
              <div className="mt-6 space-y-4">
                {siblingServices.map((serviceSlug) => {
                  const sibling = getPlumbingService(serviceSlug)

                  return (
                    <Link
                      key={serviceSlug}
                      href={`/services/plumbing/${serviceSlug}`}
                      className="flex items-center justify-between rounded-[1.5rem] border border-slate-200 px-5 py-4 transition-colors hover:border-cyan-400 hover:text-cyan-600"
                    >
                      <span className="font-semibold text-slate-950">{sibling.name}</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Trust</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight">Licensed plumbing help across local service areas.</h2>
              <div className="mt-8 space-y-4">
                {[
                  "Direct access to this service and related plumbing work",
                  "Local plumbing help for Menifee, Riverside, Perris, Moreno Valley, and Homeland",
                  "Clear next steps for scheduling the right plumbing help",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C29828]" />
                    <p className="text-base leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:951-330-6963">
                  <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 951-330-6963
                  </Button>
                </a>
                <Link href="/locations">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 bg-transparent text-white hover:bg-white hover:text-slate-950"
                  >
                    Browse Locations
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-start gap-3 rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#C29828]" />
                <p className="text-sm leading-7 text-slate-300">
                  California contractor license #1075924. Residential and commercial plumbing service across Southern California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
