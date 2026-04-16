import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { plumbingCities, plumbingCitySlugs, plumbingServiceSlugs, plumbingServices } from "@/lib/location-content"

export const metadata: Metadata = {
  title: "Plumbing Service Areas | Above All Maintenance & Repair",
  description:
    "Browse plumbing service areas for Menifee, Riverside, Perris, Moreno Valley, and Homeland. Find city-specific drain, toilet, emergency, and water heater pages.",
}

export default function LocationsIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(194,152,40,0.18),transparent_35%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Locations</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Plumbing service pages built around local intent, not generic county copy.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Start with a city hub, then move into the exact plumbing service page that matches the issue. Each page is
              structured for local search intent and direct conversion.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services/plumbing">
                <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                  Plumbing Hub
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:951-330-6963">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  951-330-6963
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">City hubs</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Choose a city, then jump into the exact plumbing service page.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {plumbingCitySlugs.map((citySlug) => {
              const city = plumbingCities[citySlug]

              return (
                <article
                  key={city.slug}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">{city.county}</p>
                      <h3 className="mt-3 text-3xl font-bold text-slate-950">{city.name}</h3>
                    </div>
                    <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-600">
                      <MapPin className="h-7 w-7" />
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-7 text-slate-600">{city.shortDescription}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {city.propertyTypes.map((item) => (
                      <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {city.nearbyAreas.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <ShieldCheck className="h-4 w-4 text-[#C29828]" />
                      <span>4 plumbing service pages in this city</span>
                    </div>
                    <Link href={`/locations/${city.slug}`}>
                      <Button variant="outline" className="border-slate-300 hover:border-cyan-500 hover:text-cyan-600">
                        View {city.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Plumbing services</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              The service layer stays separate from the location layer.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              These service hubs explain the work itself. The city pages handle local intent, local trust, and location-specific offers.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {plumbingServiceSlugs.map((serviceSlug) => {
              const service = plumbingServices[serviceSlug]

              return (
                <Link
                  key={service.slug}
                  href={`/services/plumbing/${service.slug}`}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-slate-950">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.heroSummary}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
