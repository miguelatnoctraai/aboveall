import Link from "next/link"
import { ArrowRight, Bolt, Hammer, PaintBucket, Flame, ParkingSquare } from "lucide-react"

const otherServices = [
  {
    href: "/services/electrical",
    title: "Electrical",
    body: "Wiring, panels, outlets, and electrical repairs for homes and commercial properties.",
    icon: Bolt,
  },
  {
    href: "/services/construction",
    title: "Construction",
    body: "Structural repairs, builds, and renovation work for residential and commercial properties.",
    icon: Hammer,
  },
  {
    href: "/services/painting",
    title: "Painting",
    body: "Interior and exterior painting for homes, rentals, and commercial spaces.",
    icon: PaintBucket,
  },
  {
    href: "/services/welding",
    title: "Welding",
    body: "Custom fabrication, metal repairs, and welding work for property and equipment needs.",
    icon: Flame,
  },
  {
    href: "/services/parking-lot",
    title: "Parking Lot",
    body: "Line striping, patching, and upkeep for commercial parking areas.",
    icon: ParkingSquare,
  },
]

export function HomeOtherServices() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">More than plumbing</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            We also handle electrical, construction, painting, welding, and parking lot work.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Above All Maintenance & Repair covers a wide range of property needs. Plumbing is the focus, but we handle the rest too.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {otherServices.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C29828]/50 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-[#C29828]/10 p-3 text-[#C29828]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.body}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C29828]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
