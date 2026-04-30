import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, CheckCircle2, Clock, Phone, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/business-info"

const articleUrl = `${businessInfo.website}/blog/7-signs-your-menifee-water-heater-needs-service`
const menifeeWaterHeaterUrl = "/locations/menifee/water-heater-installation-repair"

export const metadata: Metadata = {
  title: {
    absolute: "Menifee Water Heater Service: 7 Warning Signs | Above All",
  },
  description:
    "Learn 7 simple signs your Menifee water heater needs service, from leaks and rusty water to loud noises, bad smells, and no hot water.",
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "7 Signs Your Menifee Water Heater Needs Service Before It Fails",
    description:
      "Simple warning signs that a Menifee water heater may need service before it turns into a bigger problem.",
    url: articleUrl,
    type: "article",
  },
}

const signs = [
  {
    title: "1. Your Hot Water Runs Out Too Fast",
    body: [
      "Your shower starts hot. Then it turns cold fast.",
      "This can mean the tank has buildup inside. Menifee homes can deal with hard water. Hard water leaves minerals behind. Those minerals can sit at the bottom of the tank.",
      "When that happens, the water heater has to work harder.",
    ],
    wait: "Maybe, if the water is still getting hot and there is no leak.",
    call: "The hot water runs out faster each week.",
  },
  {
    title: "2. You Have No Hot Water",
    body: [
      "No hot water is a clear sign something is wrong.",
      "The issue could be small. It may be a pilot light, thermostat, breaker, or heating part. It could also mean the unit is failing.",
    ],
    wait: "Not for long. No hot water can make normal home use hard.",
    call: "You have no hot water and the unit is leaking, making noise, or smells like gas.",
    note: "If you smell gas, leave the area and call the gas company or emergency services first.",
  },
  {
    title: "3. The Water Looks Rusty",
    body: [
      "Hot water should look clear.",
      "If only the hot water looks rusty, the water heater may be the problem. Rust can mean the inside of the tank is wearing down.",
      "Rusty water can also come from old pipes. A plumber can help find the source.",
    ],
    wait: "Do not ignore it. Rust can get worse.",
    call: "The water is brown, red, or rusty from hot taps only.",
  },
  {
    title: "4. The Tank Makes Popping or Banging Sounds",
    body: [
      "A water heater may make small sounds.",
      "But loud popping, banging, or rumbling is not normal.",
      "This often happens when minerals build up inside the tank. The water heats under the buildup and makes noise.",
    ],
    wait: "Maybe, if the sound is light and there are no other problems.",
    call: "The sound is loud, new, or getting worse.",
  },
  {
    title: "5. You See Water Around the Tank",
    body: [
      "A leak is one of the biggest warning signs.",
      "Even a small puddle can damage floors, walls, and nearby items. A leak can come from a valve, pipe, fitting, or the tank itself.",
      "A tank leak is more serious than a small fitting leak.",
    ],
    wait: "No. A leak should be checked fast.",
    call: "You see water around the tank or the leak keeps coming back.",
  },
  {
    title: "6. The Hot Water Smells Bad",
    body: [
      "Bad-smelling hot water is not normal.",
      "If the smell only happens with hot water, the water heater may need service. The smell can come from bacteria, the anode rod, or buildup inside the tank.",
    ],
    wait: "Maybe for a short time, if there is no leak and the unit still works.",
    call: "The smell keeps coming back after the water runs for a while.",
  },
  {
    title: "7. Your Water Heater Is Getting Old",
    body: [
      "Most water heaters do not last forever.",
      "If your unit is older and keeps having problems, repair may not be the best choice. A new water heater may save stress if the old one is leaking, rusty, or failing often.",
    ],
    wait: "Maybe, if it still works well.",
    call: "You keep paying for repairs or the tank shows signs of rust or leaks.",
  },
]

const checklist = [
  "No hot water",
  "Hot water runs out fast",
  "Rusty hot water",
  "Loud popping or banging",
  "Water near the tank",
  "Bad smell from hot water",
  "An old unit with repeat problems",
]

const repairReasons = [
  "The unit is not very old",
  "The tank is not leaking",
  "The problem is a part, valve, or setting",
  "The water still heats sometimes",
]

const replacementReasons = [
  "The tank is leaking",
  "The unit is very old",
  "The water is rusty",
  "Repairs keep adding up",
  "Hot water is not reliable anymore",
]

export default function MenifeeWaterHeaterBlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "7 Signs Your Menifee Water Heater Needs Service Before It Fails",
    description:
      "Simple warning signs that a Menifee water heater may need service before it turns into a bigger problem.",
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: businessInfo.name,
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      logo: {
        "@type": "ImageObject",
        url: `${businessInfo.website}${businessInfo.logoPath}`,
      },
    },
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span>Water Heater Tips</span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Menifee Water Heaters</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              7 Signs Your Menifee Water Heater Needs Service Before It Fails
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Simple warning signs for homeowners, rentals, and local properties in Menifee.
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-8">
            <section className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-cyan-700 shadow-sm">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">TL;DR</h2>
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    Call for help if your water heater leaks, makes loud sounds, smells bad, or stops making hot water.
                    You may be able to wait a short time if the water is only getting warm slowly. Menifee homes can
                    have hard water, so buildup inside the tank is common. If you need help now, schedule{" "}
                    <Link
                      href={menifeeWaterHeaterUrl}
                      className="font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-800"
                    >
                      water heater service in Menifee
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {signs.map((sign) => (
              <section key={sign.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-black tracking-tight text-slate-950">{sign.title}</h2>
                <div className="mt-5 space-y-4">
                  {sign.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-bold text-slate-950">Can it wait?</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{sign.wait}</p>
                  </div>
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                    <p className="text-sm font-bold text-slate-950">Call soon if:</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{sign.call}</p>
                  </div>
                </div>
                {sign.note && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-7 text-red-900">
                    <AlertTriangle className="mt-1 h-5 w-5 shrink-0" />
                    <p>{sign.note}</p>
                  </div>
                )}
              </section>
            ))}

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Quick Water Heater Checklist</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">Call for service if you notice:</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-600" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Repair or Replace?</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                A plumber can check the unit and explain the next step.
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-5">
                  <h3 className="text-xl font-bold text-slate-950">Repair may make sense if:</h3>
                  <div className="mt-4 space-y-3">
                    {repairReasons.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Wrench className="mt-1 h-4 w-4 shrink-0 text-cyan-700" />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-xl font-bold text-slate-950">Replacement may make sense if:</h3>
                  <div className="mt-4 space-y-3">
                    {replacementReasons.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-amber-700" />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight">Need Water Heater Help in Menifee?</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Above All Maintenance & Repair helps Menifee homeowners, rentals, and local properties with water heater
                problems.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                If your water heater is leaking, noisy, old, or not keeping up, schedule{" "}
                <Link
                  href={menifeeWaterHeaterUrl}
                  className="font-semibold text-[#C29828] underline underline-offset-4 hover:text-[#E1B84A]"
                >
                  Menifee water heater installation and repair
                </Link>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href={`tel:${businessInfo.phone}`}>
                  <Button size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                    <Phone className="mr-2 h-5 w-5" />
                    Call {businessInfo.phoneDisplay}
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
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Article</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">Water heater warning signs</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A simple guide for Menifee property owners who want to know when to call.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Local service</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">Based near Menifee</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Above All is based in Homeland and serves Menifee, Sun City, Romoland, Winchester, and nearby areas.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
