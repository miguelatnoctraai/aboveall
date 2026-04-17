import Link from "next/link"
import { ArrowRight, Bolt, Flame, Hammer, PaintBucket, ParkingSquare, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/business-info"

const plumbingPoints = [
  "Emergency plumbing and active leak response",
  "Drain cleaning, stoppage diagnosis, and sewer troubleshooting",
  "Water heater repair, replacement, and installation",
  "Related maintenance and repair when the job turns into a larger property issue",
]

const otherServices = [
  {
    href: "/services/construction",
    title: "Construction & Build",
    body: "Ground-up builds, tenant improvements, carpentry, masonry, and board-ups.",
    icon: Hammer,
  },
  {
    href: "/services/electrical",
    title: "Electrical & Lighting",
    body: "Panel upgrades, LED retrofitting, troubleshooting, and code compliance.",
    icon: Bolt,
  },
  {
    href: "/services/painting",
    title: "Painting",
    body: "Interior and exterior painting with proper prep for homes and commercial properties.",
    icon: PaintBucket,
  },
  {
    href: "/services/welding",
    title: "Welding & Fabrication",
    body: "Custom fabrication, gates, dock plates, metal doors, and on-site welding.",
    icon: Flame,
  },
  {
    href: "/services/parking-lot",
    title: "Parking Lot",
    body: "Seal coating, pothole repair, striping, and ADA compliance for commercial lots.",
    icon: ParkingSquare,
  },
]

export function HomeServices() {
  return (
    <section className="bg-slate-950 py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-16">

        {/* Plumbing — featured */}
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 text-white shadow-2xl shadow-slate-950/30 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">
            Riverside County plumbing
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Homeland-based plumbers for calls that need a clean fix, not guesswork.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {businessInfo.name} is based in {businessInfo.homeBase} and handles plumbing across{" "}
            {businessInfo.primaryCounty} homes, rentals, restaurants, offices, and commercial properties.
            Emergency leaks, drain problems, toilet repairs, water heaters, and everyday plumbing work that needs
            a licensed pro.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Beyond plumbing, the same team covers electrical, construction, painting, welding, and parking lot
            work. One company, one call. No need to find a separate contractor when the job grows.
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
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {plumbingPoints.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 px-5 py-4">
                <Wrench className="mt-1 h-5 w-5 shrink-0 text-[#C29828]" />
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800" />

        {/* Other services — equal weight */}
        <div>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Full-service property maintenance</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              We also handle construction, electrical, painting, welding, and parking lot work.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Above All Maintenance & Repair handles property work across all trades. One company, one call.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherServices.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-[1.75rem] border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C29828]/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-950/50"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-[#C29828]/10 p-3 text-[#C29828]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{service.body}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C29828]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
