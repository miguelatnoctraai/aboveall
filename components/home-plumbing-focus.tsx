import Link from "next/link"
import { ArrowRight, Droplets, MapPin, ShieldCheck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/business-info"

const localLinks = [
  {
    href: "/services/plumbing",
    title: "Plumbing Services",
    body: "Explore emergency plumbing, drain cleaning, toilet repair and installation, and water heater service.",
    cta: "View plumbing services",
    icon: Droplets,
  },
  {
    href: "/locations/riverside",
    title: "Riverside, CA plumbing services",
    body: "Find plumbing help in Riverside for older homes, apartments, restaurants, offices, and mixed-use properties.",
    cta: "View Riverside services",
    icon: MapPin,
  },
  {
    href: "/locations/homeland",
    title: "Homeland, CA plumbing services",
    body: "Find plumbing help in Homeland and nearby communities with local service shaped around the company home base.",
    cta: "View Homeland services",
    icon: ShieldCheck,
  },
]

const quickPoints = [
  "Emergency plumbing and active leak response",
  "Drain cleaning, stoppage diagnosis, and sewer troubleshooting",
  "Water heater repair, replacement, and installation",
  "General maintenance and repair when the scope expands beyond plumbing",
]

export function HomePlumbingFocus() {
  return (
    <section className="bg-slate-950 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 text-white shadow-2xl shadow-slate-950/30 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">
              Riverside County plumbing focus
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Homeland-based plumbers for calls that need a clean fix, not guesswork.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {businessInfo.name} is based in {businessInfo.homeBase}. The homepage now leads with plumbing because
              that is the strongest local search intent: emergency calls, drain problems, water heaters, leak
              diagnosis, and repair work across {businessInfo.primaryCounty} homes, rentals, and commercial properties.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
              When the scope grows beyond plumbing, the team can also support broader maintenance and repair work so a
              property owner does not have to coordinate multiple vendors for one problem chain.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20]">
                <Link href="/services/plumbing">Explore Plumbing Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cyan-400 bg-transparent text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
              >
                <Link href="/contact">Request Plumbing Help</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quickPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 px-5 py-4">
                  <Wrench className="mt-1 h-5 w-5 shrink-0 text-[#C29828]" />
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Local routing</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Choose the plumbing help that fits the job and area.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Start with plumbing services for the main job type, or go straight to Riverside or Homeland for more
              local service details.
            </p>

            <div className="mt-8 space-y-4">
              {localLinks.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-[1.5rem] border border-cyan-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-200/60"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                        <div className="mt-4 inline-flex items-center gap-2 font-semibold text-cyan-700">
                          {item.cta}
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
