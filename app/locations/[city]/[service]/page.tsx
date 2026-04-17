import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getCityServiceOverride,
  getCityServicePageContent,
  getPlumbingCity,
  getPlumbingService,
  isPlumbingCitySlug,
  isPlumbingServiceSlug,
  plumbingCitySlugs,
  plumbingServiceSlugs,
} from "@/lib/location-content"

export const dynamicParams = false

type CityServicePageProps = {
  params: Promise<{ city: string; service: string }>
}

export function generateStaticParams() {
  return plumbingCitySlugs.flatMap((city) => plumbingServiceSlugs.map((service) => ({ city, service })))
}

export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const { city, service } = await params

  if (!isPlumbingCitySlug(city) || !isPlumbingServiceSlug(service)) {
    return {
      title: "Page Not Found",
    }
  }

  const cityContent = getPlumbingCity(city)
  const serviceContent = getPlumbingService(service)
  const override = getCityServiceOverride(city, service)

  return {
    title: `${override.heroTitle} | Above All Maintenance & Repair`,
    description: override.metaDescription,
    keywords: [
      `${serviceContent.name} ${cityContent.name}`,
      `${serviceContent.name} ${cityContent.name} CA`,
      `${cityContent.name} plumber`,
      `${serviceContent.name.toLowerCase()} ${cityContent.name.toLowerCase()}`,
    ],
  }
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { city, service } = await params

  if (!isPlumbingCitySlug(city) || !isPlumbingServiceSlug(service)) {
    notFound()
  }

  const { city: cityContent, service: serviceContent, override, faqs } = getCityServicePageContent(city, service)
  const siblingServices = plumbingServiceSlugs.filter((serviceSlug) => serviceSlug !== service)
  const overviewParagraphs = [
    `${override.heroSummary} It helps ${cityContent.name} property owners move from the symptom to the right next step without extra guesswork.`,
    `${override.whyCopy} ${override.offerBody}`,
    `This service is especially relevant for ${cityContent.propertyTypes.slice(0, 2).join(" and ").toLowerCase()} in ${cityContent.name} and nearby areas such as ${cityContent.nearbyAreas.slice(0, 2).join(" and ")}. ${override.proofBody}`,
  ]
  const pageFitPoints = [
    `Best fit for ${cityContent.propertyTypes[0].toLowerCase()}`,
    `Built around ${serviceContent.quickPoints[0].toLowerCase()}`,
    `Nearby coverage around ${cityContent.nearbyAreas.slice(0, 2).join(" and ")}`,
    `Fast path to scheduling help`,
  ]
  const decisionPoints = [
    "Whether the problem is isolated or part of a larger plumbing issue",
    "Whether this needs repair, replacement, or a deeper diagnostic step",
    `How the service fits the property types most common in ${cityContent.name}`,
  ]
  const detailParagraphs = override.detailParagraphs ?? []
  const warningSigns = override.warningSigns ?? []
  const proofPoints = override.proofPoints ?? []

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        name: "Above All Maintenance & Repair",
        telephone: "951-330-6963",
        areaServed: {
          "@type": "City",
          name: cityContent.name,
        },
        addressRegion: "CA",
      },
      {
        "@type": "Service",
        name: `${serviceContent.name} in ${cityContent.name}, CA`,
        serviceType: serviceContent.name,
        areaServed: {
          "@type": "City",
          name: cityContent.name,
        },
        provider: {
          "@type": "Plumber",
          name: "Above All Maintenance & Repair",
        },
        description: override.metaDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700/80 bg-slate-950/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <Button asChild className="h-12 flex-1 bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
            <a href="tel:951-330-6963">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 flex-1 border-[#C29828]/40 bg-transparent text-white hover:bg-white/10"
          >
            <Link href={`/locations/${cityContent.slug}`}>{cityContent.name} Plumbing</Link>
          </Button>
        </div>
      </div>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(194,152,40,0.18),transparent_35%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <Link href="/locations" className="hover:text-white">
                  Locations
                </Link>
                <span>/</span>
                <Link href={`/locations/${cityContent.slug}`} className="hover:text-white">
                  {cityContent.name}
                </Link>
                <span>/</span>
                <span>{serviceContent.name}</span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">{cityContent.county}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {override.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{override.heroSummary}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:951-330-6963">
                  <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 951-330-6963
                  </Button>
                </a>
                <Link href={`/services/plumbing/${serviceContent.slug}`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
                  >
                    Service Overview
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C29828]">Common service needs</p>
              <div className="mt-5 grid gap-3">
                {serviceContent.quickPoints.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-4">
                    <BadgeCheck className="h-5 w-5 text-[#C29828]" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="space-y-10">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Why local customers call</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">{override.whyTitle}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{override.whyCopy}</p>
              </div>

              {detailParagraphs.length > 0 && (
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">What to know locally</p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                    {override.detailTitle ?? `What matters most about ${serviceContent.name.toLowerCase()} in ${cityContent.name}`}
                  </h2>
                  <div className="mt-6 space-y-5">
                    {detailParagraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Local overview</p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                    What to expect before you schedule
                  </h2>
                  <div className="mt-6 space-y-5">
                    {overviewParagraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Good fit</p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                    When this service is the right fit
                  </h2>
                  <div className="mt-6 space-y-4">
                    {pageFitPoints.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                        <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                        <p className="text-base leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Capabilities</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                  What this service includes
                </h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
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

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">What to consider</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                  Common decisions before scheduling
                </h2>
                <div className="mt-6 space-y-4">
                  {decisionPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                      <p className="text-base leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

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

              <div className="grid gap-6 xl:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Common problems</p>
                  <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{override.localProblemsIntro}</h2>
                  <div className="mt-6 space-y-4">
                    {override.localProblems.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                        <p className="text-base leading-7 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {warningSigns.length > 0 && (
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Warning Signs</p>
                      <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">
                        {override.warningSignsTitle ?? `When ${cityContent.name} customers usually decide to call`}
                      </h2>
                      <div className="mt-6 space-y-4">
                        {warningSigns.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                            <p className="text-base leading-7 text-slate-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Service focus</p>
                    <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{override.offerTitle}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-700">{override.offerBody}</p>
                  </div>

                  <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Local proof and trust</p>
                    <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{override.proofTitle}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600">{override.proofBody}</p>
                    {proofPoints.length > 0 && (
                      <div className="mt-6 space-y-3">
                        {proofPoints.map((item) => (
                          <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-5 py-4">
                            <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#C29828]" />
                            <p className="text-sm leading-7 text-slate-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                        <p className="text-sm leading-7 text-slate-700">
                          Licensed plumbing service for {cityContent.name} homes and properties, with related plumbing
                          services available when the job points to a bigger issue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">FAQ</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                  Questions about {serviceContent.name.toLowerCase()} in {cityContent.name}
                </h2>
                <div className="mt-8 space-y-6">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                      <h3 className="text-lg font-bold text-slate-950">{faq.question}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Areas served</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                  Nearby areas around {cityContent.name}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Service is centered on {cityContent.name} while still reflecting nearby communities and the plumbing needs that show up around this part of {cityContent.county}.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {cityContent.nearbyAreas.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-6 shadow-lg shadow-cyan-100/60">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Ready to schedule</p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">{override.ctaTitle}</h2>
                <p className="mt-4 text-base leading-7 text-slate-700">{override.ctaBody}</p>
                <div className="mt-6 space-y-3">
                  <a href="tel:951-330-6963" className="block">
                    <Button size="lg" className="w-full bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 951-330-6963
                    </Button>
                  </a>
                  <Link href="/contact" className="block">
                    <Button size="lg" variant="outline" className="w-full border-slate-300 hover:border-cyan-500 hover:text-cyan-600">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C29828]">Related plumbing pages</p>
                <div className="mt-4 space-y-3">
                  <Link
                    href={`/locations/${cityContent.slug}`}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-600"
                  >
                    <span>{cityContent.name} plumbing page</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/services/plumbing/${serviceContent.slug}`}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-600"
                  >
                    <span>{serviceContent.name} service overview</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services/plumbing"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-600"
                  >
                    <span>All plumbing services</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
                  Related plumbing services in {cityContent.name}
                </p>
                <div className="mt-4 space-y-3">
                  {siblingServices.map((serviceSlug) => {
                    const sibling = getPlumbingService(serviceSlug)

                    return (
                      <Link
                        key={serviceSlug}
                        href={`/locations/${cityContent.slug}/${serviceSlug}`}
                        className="block rounded-2xl border border-slate-200 px-4 py-4 transition-colors hover:border-cyan-400 hover:bg-cyan-50"
                      >
                        <p className="font-semibold text-slate-950">{sibling.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          See how we handle this plumbing issue in {cityContent.name}.
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                  <div>
                    <p className="font-semibold text-slate-950">Nearby areas</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{cityContent.nearbyAreas.join(", ")}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
