import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, BadgeCheck, CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/business-info"
import { getNeighborhoodServicePage, neighborhoodServicePages } from "@/lib/neighborhood-content"

export const dynamicParams = false

type NeighborhoodPageProps = {
  params: Promise<{ city: string; service: string; neighborhood: string }>
}

export function generateStaticParams() {
  return neighborhoodServicePages.map(({ city, service, slug: neighborhood }) => ({ city, service, neighborhood }))
}

export async function generateMetadata({ params }: NeighborhoodPageProps): Promise<Metadata> {
  const { city, service, neighborhood } = await params
  const page = getNeighborhoodServicePage(city, service, neighborhood)

  if (!page) return { title: "Page Not Found" }

  return {
    title: `${page.heroTitle} | Above All Maintenance & Repair`,
    description: page.metaDescription,
    alternates: { canonical: `${businessInfo.website}/locations/${city}/${service}/${neighborhood}` },
    keywords: ["drain clearing Sun City", "drain cleaning Sun City Menifee", "Sun City plumber", "Menifee drain clearing"],
  }
}

export default async function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const { city, service, neighborhood } = await params
  const page = getNeighborhoodServicePage(city, service, neighborhood)
  if (!page) notFound()

  const url = `${businessInfo.website}/locations/${city}/${service}/${neighborhood}`
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Drain Clearing in Sun City, Menifee, CA",
        serviceType: "Drain clearing",
        url,
        areaServed: { "@type": "Place", name: "Sun City, Menifee, CA" },
        provider: { "@type": "Plumber", name: businessInfo.name, telephone: businessInfo.phone },
        description: page.metaDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(194,152,40,0.18),transparent_35%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="mb-6 flex flex-wrap gap-2 text-sm text-slate-300" aria-label="Breadcrumb">
              <Link href="/locations" className="hover:text-white">Locations</Link><span>/</span>
              <Link href="/locations/menifee" className="hover:text-white">Menifee</Link><span>/</span>
              <Link href="/locations/menifee/drain-cleaning" className="hover:text-white">Drain Cleaning</Link><span>/</span>
              <span>Sun City</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Menifee, Riverside County</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{page.heroTitle}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{page.heroSummary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${businessInfo.phone}`}><Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]"><Phone className="mr-2 h-5 w-5" />Call {businessInfo.phoneDisplay}</Button></a>
              <Link href="/contact"><Button size="lg" variant="outline" className="border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950">Request a Quote</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-4"><div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-8">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">A local drain problem needs a useful answer</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Drain service for Sun City homes</h2>
            <div className="mt-6 space-y-5">{page.localContext.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-slate-600">{paragraph}</p>)}</div>
          </section>
          <section className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">3 fast facts</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">A little Sun City context</h2>
            <div className="mt-6 grid gap-4">{page.fastFacts.map((fact) => <div key={fact.label} className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-bold text-slate-950">{fact.label}</h3><p className="mt-2 leading-7 text-slate-600">{fact.detail}</p></div>)}</div>
          </section>
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Common calls</p><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">What we are commonly called to clear</h2>
            <div className="mt-6 space-y-4">{page.commonProblems.map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" /><p className="leading-7 text-slate-600">{item}</p></div>)}</div>
          </section>
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">Before it becomes a backup</p><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Signs it is time to call</h2>
            <div className="mt-6 space-y-4">{page.warningSigns.map((item) => <div key={item} className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#C29828]" /><p className="leading-7 text-slate-600">{item}</p></div>)}</div>
          </section>
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">FAQ</p><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Sun City drain-clearing questions</h2><div className="mt-6 space-y-5">{page.faqs.map((faq) => <div key={faq.question} className="rounded-2xl bg-slate-50 p-6"><h3 className="font-bold text-slate-950">{faq.question}</h3><p className="mt-3 leading-7 text-slate-600">{faq.answer}</p></div>)}</div></section>
        </div>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-7"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Need help now?</p><h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">Get a clear next step for the drain.</h2><p className="mt-4 leading-7 text-slate-700">Tell us what is slowing down or backing up. We will help you get to the right drain service.</p><a className="mt-6 block" href={`tel:${businessInfo.phone}`}><Button size="lg" className="w-full bg-[#C29828] text-slate-950 hover:bg-[#A67F20]"><Phone className="mr-2 h-5 w-5" />Call {businessInfo.phoneDisplay}</Button></a></div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/70"><div className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-600" /><p className="text-sm leading-7 text-slate-700">California licensed contractor, License #{businessInfo.license}. We explain the problem and the practical next step before work begins.</p></div></div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/70"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C29828]">Related pages</p><div className="mt-4 space-y-3"><Link href="/locations/menifee/drain-cleaning" className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 text-sm font-semibold text-slate-700 hover:border-cyan-400 hover:text-cyan-600"><span>Menifee drain cleaning</span><ArrowRight className="h-4 w-4" /></Link><Link href="/locations/menifee" className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 text-sm font-semibold text-slate-700 hover:border-cyan-400 hover:text-cyan-600"><span>All Menifee plumbing</span><ArrowRight className="h-4 w-4" /></Link></div></div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/70"><div className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-600" /><p className="text-sm leading-7 text-slate-600">Serving Sun City and surrounding Menifee communities in Riverside County.</p></div></div>
        </aside>
      </div></div></section>
    </main>
  )
}
