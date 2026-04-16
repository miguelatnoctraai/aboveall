import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getCityServiceCards,
  isPlumbingCitySlug,
  plumbingCities,
  plumbingCitySlugs,
  plumbingServices,
} from "@/lib/location-content"

export const dynamicParams = false

type CityPageProps = {
  params: Promise<{ city: string }>
}

export function generateStaticParams() {
  return plumbingCitySlugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params

  if (!isPlumbingCitySlug(city)) {
    return {
      title: "Location Not Found",
    }
  }

  const cityContent = plumbingCities[city]

  return {
    title: `Plumbing Services in ${cityContent.name}, CA | Above All Maintenance & Repair`,
    description: cityContent.shortDescription,
  }
}

export default async function CityHubPage({ params }: CityPageProps) {
  const { city } = await params

  if (!isPlumbingCitySlug(city)) {
    notFound()
  }

  const cityContent = plumbingCities[city]
  const serviceCards = getCityServiceCards(city)
  const overviewParagraphs = [
    `${cityContent.name} is set up as a true local plumbing hub, not just a catch-all location page. The goal is to route people from city intent into the exact service they need, whether that is drain cleaning, toilet repair and installation, emergency plumbing, or water heater work.`,
    cityContent.localAngle,
    `This matters for ${cityContent.name} because the strongest local pages are the ones that match real property types, real service patterns, and a clear conversion path. For this city, that means speaking directly to ${cityContent.propertyTypes.slice(0, 2).join(" and ").toLowerCase()} while still covering nearby areas like ${cityContent.nearbyAreas.slice(0, 2).join(" and ")}.`,
  ]

  const cityHighlights = [
    `Primary property focus: ${cityContent.propertyTypes[0]}`,
    `Nearby service relevance: ${cityContent.nearbyAreas.slice(0, 2).join(" and ")}`,
    `Core conversion path: city hub to service page to direct quote request`,
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(194,152,40,0.18),transparent_35%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <Link href="/locations" className="hover:text-white">
                Locations
              </Link>
              <span>/</span>
              <span>{cityContent.name}</span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">{cityContent.county}</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Plumbing services in {cityContent.name}, CA
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{cityContent.heroSummary}</p>

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
                  Plumbing Hub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Local angle</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">What this city hub needs to do well</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{cityContent.localAngle}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {cityContent.propertyTypes.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 text-cyan-600 shadow-sm">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Trust markers</p>
                  <h2 className="text-2xl font-bold text-slate-950">{cityContent.name} plumbing support</h2>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {cityContent.trustPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-cyan-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                  <div>
                    <p className="font-semibold text-slate-950">Nearby areas</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{cityContent.nearbyAreas.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">How This Hub Works</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                Why {cityContent.name} has its own plumbing hub
              </h2>
              <div className="mt-6 space-y-5">
                {overviewParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">City Signals</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                What makes this local page set useful
              </h2>
              <div className="mt-6 space-y-4">
                {cityHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-5 py-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                    <p className="text-base leading-7 text-slate-700">{item}</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">City + service pages</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Choose the exact plumbing issue in {cityContent.name}.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              These are the primary local SEO pages for this city. They pair city-specific copy with a service-specific offer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceCards.map((card) => (
              <article
                key={card.slug}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-950">{card.name}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{card.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {plumbingServices[card.slug].quickPoints.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
                >
                  View {card.name} in {cityContent.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Call to schedule</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{cityContent.ctaTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{cityContent.ctaBody}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:951-330-6963">
                <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 951-330-6963
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 bg-transparent text-white hover:bg-white hover:text-slate-950"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
