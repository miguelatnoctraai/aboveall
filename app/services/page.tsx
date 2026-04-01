import { Zap, Droplet, Hammer, Wrench, Box, ParkingSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Maintenance Services | Above All Maintenance & Repair",
  description:
    "Comprehensive maintenance and repair services for commercial and residential properties in Southern California. Licensed contractor serving all trades.",
  keywords:
    "commercial maintenance, electrical services, plumbing, carpentry, masonry, welding, parking lot services, doors, board ups, Southern California",
}

const services = [
  {
    icon: Droplet,
    title: "Plumbing Solutions",
    slug: "plumbing",
    description:
      "From leak detection and fixture installation to complex piping repairs. Rapid response for emergencies.",
    features: ["Leak Detection", "Fixture Installation", "Pipe Repair", "Emergency Service"],
    gridClass: "lg:col-span-2 lg:row-span-2",
    image: "/plumber-fixing-pipe-leak-under-sink.jpg",
  },
  {
    icon: Hammer,
    title: "Construction & Build",
    slug: "construction",
    description: "Complete construction services from ground-up builds to tenant improvements and renovations.",
    features: ["Tenant Improvements", "Carpentry", "Doors", "Masonry", "Board Ups"],
    gridClass: "lg:col-span-2 lg:row-span-2",
    image: "/commercial-building-exterior-maintenance.jpg",
  },
  {
    icon: Zap,
    title: "Electrical & Lighting",
    slug: "electrical",
    description: "Full-service electrical solutions including panel upgrades, troubleshooting, and LED retrofitting.",
    features: ["Panel Upgrades", "LED Retrofitting", "Troubleshooting", "Code Compliance"],
    gridClass: "lg:col-span-1 lg:row-span-1",
    image: "/electrician-working-on-panel-upgrade.jpg",
  },
  {
    icon: Box,
    title: "Painting Services",
    slug: "painting",
    description: "Interior and exterior painting with premium materials, expert surface prep, and flawless finishes.",
    features: ["Interior Painting", "Exterior Painting", "Surface Prep", "Commercial Grade"],
    gridClass: "lg:col-span-1 lg:row-span-2",
    image: "/professional-painter-commercial-interior.jpg",
  },
  {
    icon: Wrench,
    title: "Welding & Fabrication",
    slug: "welding",
    description: "On-site welding and custom metal fabrication for gates, fences, dock plates, and security features.",
    features: ["Dock Plates", "Custom Fabrication", "Gate Installation", "Metal Doors"],
    gridClass: "lg:col-span-1 lg:row-span-1",
    image: "/welding-metal-fabrication-sparks.jpg",
  },
  {
    icon: ParkingSquare,
    title: "Parking Lot Services",
    slug: "parking-lot",
    description: "Seal coating, pothole repair, and precise striping to keep your lot safe and compliant.",
    features: ["Seal Coating", "Pothole Repair", "Striping", "ADA Compliance"],
    gridClass: "lg:col-span-1 lg:row-span-1",
    image: "/parking-lot-maintenance-striping.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/electrician-working-on-panel-upgrade.jpg"
            alt="Professional services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Expertise Across All Trades</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty leading-relaxed">
              Licensed, insured, and trusted by commercial clients throughout Southern California. We handle every
              aspect of property services with precision and professionalism.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="w-full px-4 md:px-6 lg:px-8">
          {/* Dynamic Mosaic Grid with varying heights */}
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[24rem]">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group relative overflow-hidden rounded-2xl ${service.gridClass} hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-2xl`}
                >
                  {/* Full-Bleed Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/20 group-hover:from-slate-900/95 group-hover:via-slate-900/80 transition-all duration-500" />
                  </div>

                  {/* Text Overlay at Bottom */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    {/* Icon with gold accent */}
                    <div className="mb-4 inline-flex w-fit">
                      <Icon
                        className="h-12 w-12 md:h-14 md:w-14 text-[#C29828] stroke-[1.5] group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#C29828] transition-colors duration-300 text-shadow-lg">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-200 leading-relaxed mb-4 text-shadow">{service.description}</p>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-slate-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C29828] rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Arrow */}
                    <div className="flex items-center gap-2 text-[#C29828] font-semibold text-lg">
                      <span>Learn More</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Custom CTA Banner at bottom */}
          <div className="max-w-[1400px] mx-auto mt-16">
            <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card via-card to-muted/30 p-8 md:p-12">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat" />
              </div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Don't See What You Need?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  We probably do it. From specialized repairs to custom projects, our team handles diverse challenges
                  across all trades.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 md:py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/plumber-fixing-pipe-leak-under-sink.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Commercial Clients Choose Us
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                With over 20 years of experience serving Southern California, Above All Maintenance & Repair has become
                the go-to contractor for commercial building owners and facility directors. Our licensed team (LIC
                #1075924) specializes in comprehensive property services that minimize downtime and maximize property
                value.
              </p>
              <p className="leading-relaxed">
                We understand that commercial properties demand rapid response times, transparent communication, and
                consistent quality across all trades. That's why we've built a full-service operation capable of
                handling everything from routine repairs to complex electrical retrofits—often within the same service
                call.
              </p>
              <p className="leading-relaxed">
                Our service areas include San Bernardino County, Riverside County, San Diego County, and Orange County.
                We're locally owned, fully insured, and committed to building long-term relationships with every client
                we serve.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Specialized Trades</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Licensed & Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
