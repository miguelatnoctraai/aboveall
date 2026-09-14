import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/business-info"

const slug = "/blog/fix-clogged-drain-near-me-riverside-perris-homeland"
const articleUrl = `${businessInfo.website}${slug}`
const riversideDrainUrl = "/locations/riverside/drain-cleaning"
const perrisDrainUrl = "/locations/perris/drain-cleaning"
const homelandDrainUrl = "/locations/homeland/drain-cleaning"
const drainHubUrl = "/services/plumbing/drain-cleaning"

export const metadata: Metadata = {
  title: {
    absolute: "Fix Clogged Drain Near Me: Riverside, Perris & Homeland CA | Above All",
  },
  description:
    "Learn how to fix a clogged drain near Riverside, Perris, and Homeland, CA — and when to skip DIY and call a local plumber at (951) 330-6963.",
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "Fix Clogged Drain Near Me — Riverside, Perris & Homeland, CA",
    description:
      "Clogged drains in Riverside County: local causes, DIY fixes that actually work, costs, and when to call Above All.",
    url: articleUrl,
    type: "article",
  },
}

const toc = [
  { href: "#why-drains-clog", label: "Why drains clog in Riverside, Perris & Homeland" },
  { href: "#signs-call-pro", label: "When to call a pro — 5 warning signs" },
  { href: "#diy-fixes", label: "DIY fixes that actually work" },
  { href: "#chemical-cleaners", label: "Are chemical drain cleaners safe?" },
  { href: "#local-differences", label: "Riverside vs. Perris vs. Homeland clogs" },
  { href: "#what-we-do", label: "How we fix clogged drains" },
  { href: "#faq", label: "Frequently asked questions" },
]

const diyTable = [
  ["Boiling water + dish soap", "Grease and soap film in the kitchen", "Yes, for slow drains", "No", "5–10 minutes"],
  ["Baking soda + vinegar", "Mild organic buildup", "Sometimes", "Only with boiling water rinse", "15–30 minutes"],
  ["Plunger", "Toilet or sink clogs near the fixture", "Yes, if you have a tight seal", "Rarely causes damage", "5 minutes"],
  ["Zip-it / hand snake", "Hair clogs in tub or shower drains", "Yes, for surface hair", "Stop if it snags", "10–20 minutes"],
]

const warningSigns = [
  {
    title: "1. The same drain backs up again within a week",
    body: "If you clear a drain and it slows down again quickly, the clog is usually not sitting in the fixture. It may be deeper in the line, blocked by scale, or caught on rough pipe.",
  },
  {
    title: "2. More than one fixture is slow",
    body: "A slow toilet, shower, and sink at the same time points to the main line, not one trap. That usually needs a camera and stronger equipment than a plunger.",
  },
  {
    title: "3. You hear gurgling when water drains",
    body: "Air trapped behind a partial blockage can make a gurgling sound. It often means waste water is slowing down somewhere in the vent or main drain.",
  },
  {
    title: "4. You smell sewage near a drain",
    body: "A drain should not smell like sewer gas. The odor can mean a dry trap or a deeper backup starting to build pressure in the line.",
  },
  {
    title: "5. Water backs up in the lowest drain",
    body: "If the lowest tub, floor drain, or toilet overflows first, the main sewer line is usually affected. Do not keep running water through it.",
  },
]

const localDifferences = [
  {
    city: "Riverside",
    tag: "Hard water & mature pipes",
    text: "Riverside water is hard. Minerals collect inside older clay and cast-iron sewer laterals over time, narrowing the pipe. Older neighborhoods also have mature trees, so roots find tiny cracks and grow into the line.",
    href: riversideDrainUrl,
  },
  {
    city: "Perris",
    tag: "New homes & shifting soil",
    text: "Perris has added a lot of new housing on former farmland and open land. Drought cycles and soil movement can settle pipes or break joints. Sand and dirt can also enter the line through small gaps, creating clogs that snakes miss.",
    href: perrisDrainUrl,
  },
  {
    city: "Homeland",
    tag: "Rural homes & septic systems",
    text: "Homeland is more rural, so many properties run on septic systems and well water. Drain care on a septic property is different: heavy grease, wipes, and chemical cleaners can upset the system and cause backups at the house or in the yard.",
    href: homelandDrainUrl,
  },
]

const processSteps = [
  {"step": "1", "title": "Camera inspection first", "body": "We send a small camera down the line to see what is causing the clog before we start work."},
  {"step": "2", "title": "Hydrojet cleaning", "body": "High-pressure water removes grease, scale, roots, and debris — without just punching a temporary hole."},
  {"step": "3", "title": "Root removal & sealing", "body": "If roots are the issue, we cut them away and treat the entry point so they do not grow back quickly."},
  {"step": "4", "title": "Trenchless repair when needed", "body": "For damaged or collapsed pipe, we can often restore the line with a trenchless method instead of digging up the yard."},
]

const faqs = [
  {
    q: "Does baking soda and vinegar really work on a clogged drain?",
    a: "It can loosen light grease and soap. It will not dissolve hard-water scale, tree roots, or a damaged pipe. Try it for a slow drain, then call if water still backs up.",
  },
  {
    q: "What is the fastest way to unclog a drain without a snake?",
    a: "Boiling water with dish soap can break up grease. A plunger can clear many fixture-level clogs. For deeper clogs, a licensed plumber with a camera and hydrojet is the faster, more reliable route.",
  },
  {
    q: "Are chemical drain cleaners safe for older pipes?",
    a: "Usually not. They can damage aging clay and cast-iron pipes in Riverside, Perris, and Homeland, and they can leave toxic residue that clogs the drain again. We recommend avoiding them.",
  },
  {
    q: "How much does it cost to fix a clogged drain?",
    a: "Cost depends on the location and the depth of the clog. We give clear upfront pricing before starting work so you know the exact cost of your drain service.",
  },
  {
    q: "Why does my drain keep clogging after I snake it?",
    a: "A snake can clear the immediate blockage but leave mineral scale, roots, or a damaged section behind. That is why camera inspection and hydrojetting fix recurring clogs more often than a one-time snake.",
  },
]

export default function FixCloggedDrainBlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero / Title */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Drain cleaning blog</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Fix Clogged Drain Near Me — Riverside, Perris &amp; Homeland, CA
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The real reasons drains clog in the Inland Empire, the DIY fixes that actually work, and when to stop guessing and call a local plumber.
          </p>
        </header>

        {/* TLDR */}
        <section className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">TLDR</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">What you need to know</h2>
          <div className="mt-4 space-y-2">
            <p className="text-base leading-8 text-slate-700">
              Most local clogs start with grease, hair, or mineral scale and can be cleared with hot water, a plunger, or a hand snake — but only if it is near the fixture.
            </p>
            <p className="text-base leading-8 text-slate-700">
              If the same drain keeps backing up, more than one fixture is slow, or you smell sewer gas, the problem is deeper in the line. That is when you should call Above All at{" "}
              <a href={`tel:${businessInfo.phone}`} className="font-semibold text-cyan-800 underline underline-offset-4 hover:text-cyan-900">
                (951) 330-6963
              </a>{" "}
              instead of pouring more chemicals down the drain.
            </p>
          </div>
        </section>

        {/* Table of contents */}
        <section id="table-of-contents" className="mx-auto mt-10 max-w-3xl scroll-mt-24 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Table of contents</p>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {toc.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-700"
                >
                  <span className="font-black text-cyan-700">{index + 1}.</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <article className="mx-auto mt-10 max-w-3xl">
          <div className="space-y-6">
            {/* Intro blog block */}
            <section id="why-drains-clog" className="scroll-mt-24 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Why drains clog in the Inland Empire</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                If you search <span className="font-semibold text-slate-900">“fix clogged drain near me”</span> and live in Riverside, Perris, or Homeland, CA, you probably have one of three problems: grease in the kitchen, hair in the shower, or a deeper issue in the line.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Local water is hard, so minerals build up inside pipes over time. Older homes in Riverside still have clay or cast-iron sewer laterals that wear down. New homes in Perris can see pipes shift as soil settles. Rural properties near Homeland often depend on septic systems that need gentler drain care. Those differences matter when you are deciding whether to clear the clog yourself or call a plumber.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                A simple rule: if a plunger, hot water, or a hand snake does not fix it in one attempt, the clog is probably beyond the fixture. That is when a licensed local plumber with a camera and hydrojet can finish the job without a second visit.
              </p>
            </section>

            {/* CTA */}
            <section className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
              <h2 className="text-2xl font-black tracking-tight">Clogged drain in Riverside, Perris, or Homeland?</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Do not wait for a backup on a weekend. Call us today at{" "}
                <a href={`tel:${businessInfo.phone}`} className="font-bold text-[#C29828] underline underline-offset-4 hover:text-[#E1B84A]">
                  (951) 330-6963
                </a>{" "}
                and we can dispatch a licensed tech to your door fast.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href={`tel:${businessInfo.phone}`}>
                  <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                    <Phone className="mr-2 h-5 w-5" />
                    Call {businessInfo.phoneDisplay}
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-white hover:text-slate-950">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </section>

            {/* Warning signs */}
            <section id="signs-call-pro" className="scroll-mt-24 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">When should you call a pro instead of DIY?</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Some clogs are easy to clear at the sink. Others mean real trouble for the pipe. Call a plumber if you see any of these five warning signs:
              </p>
              <div className="mt-6 space-y-4">
                {warningSigns.map((sign) => (
                  <div key={sign.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-bold text-slate-950">{sign.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{sign.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* DIY section */}
            <section id="diy-fixes" className="scroll-mt-24 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Which DIY fixes actually work?</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Not every home remedy saves you money. This table shows what works, what does not, and when to stop trying:
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-900">
                      <th className="px-3 py-3 font-bold">Method</th>
                      <th className="px-3 py-3 font-bold">Best for</th>
                      <th className="px-3 py-3 font-bold">Does it work?</th>
                      <th className="px-3 py-3 font-bold">Risks</th>
                      <th className="px-3 py-3 font-bold">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {diyTable.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-3 py-3 align-top leading-7 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Try one or two of these, then move on. Repeating the same method is how minor clogs become costly pipe damage.
              </p>
            </section>

            {/* CTA middle */}
            <section className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">Still slow after the home remedies?</h2>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    That points to hard-water scale, roots, or a damaged pipe — the three things DIY fixes cannot touch. Call us today for a quick camera diagnosis.
                  </p>
                </div>
                <a href={`tel:${businessInfo.phone}`}>
                  <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                    <Phone className="mr-2 h-5 w-5" />
                    Call {businessInfo.phoneDisplay}
                  </Button>
                </a>
              </div>
            </section>

            {/* Chemical cleaners */}
            <section id="chemical-cleaners" className="scroll-mt-24 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Are chemical drain cleaners safe for older pipes?</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                In short: no. Chemical drain cleaners use harsh ingredients that can eat into old clay, cast-iron, or PVC pipes over time. In Riverside, Perris, and Homeland, where many homes have older plumbing or septic systems, repeated chemical use can create bigger problems than the original clog.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Chemical cleaners can also leave residue inside the pipe that makes the next clog catch faster. If a chemical has already been poured in, tell your plumber before they start so they can protect equipment and your pipes.
              </p>
            </section>

            {/* Local differences */}
            <section id="local-differences" className="scroll-mt-24 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">How clogged drains differ by city</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Your neighborhood changes what causes the clog and how we fix it:
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {localDifferences.map((item) => (
                  <div key={item.city} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 shrink-0 text-cyan-700" />
                      <h3 className="text-lg font-bold text-slate-950">{item.city}, CA</h3>
                    </div>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">{item.tag}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex items-center gap-2 font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-800"
                    >
                      Drain service in {item.city}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA again */}
            <section className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-cyan-700" />
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">Need a fix for a recurring clog?</h2>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    Above All Maintenance &amp; Repair is based in Homeland and serves Riverside County homeowners, rentals, and commercial properties. Talk to us first and we will tell you honestly whether the job is a quick cleanout or needs a camera inspection.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    <a href={`tel:${businessInfo.phone}`}>
                      <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                        <Phone className="mr-2 h-5 w-5" />
                        Call {businessInfo.phoneDisplay}
                      </Button>
                    </a>
                    <Link href={drainHubUrl}>
                      <Button size="lg" variant="outline" className="border-slate-300 hover:border-cyan-500 hover:text-cyan-600">
                        See our drain cleaning services
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* What we do */}
            <section id="what-we-do" className="scroll-mt-24 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">How we fix clogged drains</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We fix the cause, not just the symptom. Here is the process:
              </p>
              <div className="mt-6 space-y-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 font-black text-white">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We also help with toilet, emergency plumbing, and water heater issues across the area. Start with our{" "}
                <Link href={drainHubUrl} className="font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-800">
                  drain cleaning service page
                </Link>{" "}
                or check your local city page for{" "}
                <Link href={riversideDrainUrl} className="font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-800">
                  Riverside drain cleaning
                </Link>
                .
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Clogged drain questions, answered</h2>
              <div className="mt-6 space-y-5">
                {faqs.map((item) => (
                  <div key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-bold text-slate-950">{item.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight">Stop clearing the same clog every month.</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                The time and money add up. Let a local pro fix it right the first time with upfront flat-rate pricing and same-day service for Riverside, Perris, and Homeland, CA.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href={`tel:${businessInfo.phone}`}>
                  <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                    <Phone className="mr-2 h-5 w-5" />
                    Call us today: {businessInfo.phoneDisplay}
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-white hover:text-slate-950">
                    Request a Quote
                  </Button>
                </Link>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Licensed • Bonded • California Contractors License #{businessInfo.license}
              </p>
            </section>
          </div>
        </article>

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </main>
  )
}

