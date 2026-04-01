"use client"

import { Zap, Droplet, Hammer, Wrench, Box, SquareStack, ParkingSquare, Sparkles, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: Zap,
      title: "Electrical & Lighting",
      slug: "electrical",
      description:
        "Full-service electrical solutions including panel upgrades, troubleshooting, and commercial LED retrofitting.",
      color: "from-[#C29828]/20 to-[#A67F20]/20",
      borderColor: "group-hover:border-[#C29828]/50",
      iconBg: "bg-[#C29828]/10 group-hover:bg-[#C29828]",
      iconColor: "text-[#C29828] group-hover:text-slate-950",
      bgImage: "/electrician-working-on-panel-upgrade.jpg",
    },
    {
      icon: Droplet,
      title: "Plumbing Solutions",
      slug: "plumbing",
      description:
        "From leak detection and fixture installation to complex piping repairs. Rapid response for emergencies.",
      color: "from-cyan-500/20 to-blue-600/20",
      borderColor: "group-hover:border-cyan-500/50",
      iconBg: "bg-cyan-500/10 group-hover:bg-cyan-500",
      iconColor: "text-cyan-400 group-hover:text-slate-950",
      bgImage: "/plumber-fixing-pipe-leak-under-sink.jpg",
    },
    {
      icon: Hammer,
      title: "Carpentry & Construction",
      slug: "construction",
      description: "Precision framing, finish carpentry, structural repairs, and ADA-compliant modifications.",
      color: "from-[#C29828]/20 to-[#A67F20]/20",
      borderColor: "group-hover:border-[#C29828]/50",
      iconBg: "bg-[#C29828]/10 group-hover:bg-[#C29828]",
      iconColor: "text-[#C29828] group-hover:text-slate-950",
      bgImage: "/commercial-building-exterior-maintenance.jpg",
    },
    {
      icon: Sparkles,
      title: "Janitorial & Cleaning",
      slug: "janitorial",
      description:
        "Professional cleaning for offices and construction sites, including debris removal and final detailing.",
      color: "from-cyan-500/20 to-cyan-600/20",
      borderColor: "group-hover:border-cyan-500/50",
      iconBg: "bg-cyan-500/10 group-hover:bg-cyan-500",
      iconColor: "text-cyan-400 group-hover:text-slate-950",
      bgImage: "/professional-janitor-cleaning-commercial-office.jpg",
    },
    {
      icon: Wrench,
      title: "HVAC Services",
      slug: "hvac",
      description: "Complete heating, ventilation, and air conditioning installation, maintenance, and repair.",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "group-hover:border-blue-500/50",
      iconBg: "bg-blue-500/10 group-hover:bg-blue-500",
      iconColor: "text-blue-400 group-hover:text-slate-950",
      bgImage: "/maintenance-technician-hvac-system.jpg",
    },
    {
      icon: Box,
      title: "Painting Services",
      slug: "painting",
      description: "Interior and exterior painting with premium materials, expert surface prep, and flawless finishes.",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "group-hover:border-purple-500/50",
      iconBg: "bg-purple-500/10 group-hover:bg-purple-500",
      iconColor: "text-purple-400 group-hover:text-slate-950",
      bgImage: "/images/2023-02-16.jpg",
    },
    {
      icon: SquareStack,
      title: "Welding & Fabrication",
      slug: "welding",
      description: "On-site structural welding and custom metal fabrication for gates, fences, and security.",
      color: "from-red-500/20 to-red-600/20",
      borderColor: "group-hover:border-red-500/50",
      iconBg: "bg-red-500/10 group-hover:bg-red-500",
      iconColor: "text-red-400 group-hover:text-slate-950",
      bgImage: "/welding-metal-fabrication-sparks.jpg",
    },
    {
      icon: ParkingSquare,
      title: "Parking Lot Services",
      slug: "parking-lot",
      description: "Seal coating, pothole repair, and precise striping to keep your lot safe and compliant.",
      color: "from-slate-500/20 to-slate-600/20",
      borderColor: "group-hover:border-slate-500/50",
      iconBg: "bg-slate-500/10 group-hover:bg-slate-500",
      iconColor: "text-slate-400 group-hover:text-slate-950",
      bgImage: "/parking-lot-maintenance-striping.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50 bg-grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 tracking-tight">Comprehensive Services</h2>
          <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto text-pretty leading-relaxed">
            From emergency repairs to complete renovations, we deliver professional service across all trades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Link key={index} href={`/services/${service.slug}`} className="group">
                <div
                  className={`h-full backdrop-blur-md bg-slate-900/50 border border-slate-800/50 ${service.borderColor} rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer relative min-h-[320px]`}
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.bgImage || "/placeholder.svg"}
                      alt={`${service.title} background`}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40" />
                  </div>

                  <div className="relative z-10 p-6 h-full flex flex-col">
                    <div
                      className={`mb-4 inline-flex p-3 rounded-xl ${service.iconBg} transition-all duration-500 relative z-10 w-fit backdrop-blur-sm bg-slate-950/40`}
                    >
                      <Icon className={`h-6 w-6 ${service.iconColor} transition-all duration-500`} />
                    </div>

                    <h3
                      className={`text-xl font-bold text-white mb-3 transition-colors duration-300 relative z-10 ${service.slug === "plumbing" ? "group-hover:text-cyan-400" : "group-hover:text-[#C29828]"} drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                      style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 0 24px rgba(0,0,0,0.7)" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="text-sm text-slate-200 leading-relaxed relative z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] mb-4 flex-grow"
                      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)" }}
                    >
                      {service.description}
                    </p>

                    <div className="flex items-center text-[#C29828] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                      <span className="text-sm font-semibold mr-2">Learn More</span>
                      {/* ArrowRight component will be defined later */}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}

          <div className="h-full bg-white border-2 border-slate-200 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#C29828]/20 relative min-h-[320px] flex flex-col items-center justify-center p-8">
            <div className="flex-1 flex items-center justify-center w-full">
              <Image
                src="/images/aam-20logo-20.png"
                alt="Above All Maintenance Logo"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>

            <a
              href="tel:951-330-6963"
              className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-[#C29828] text-slate-950 font-bold text-lg rounded-xl transition-all duration-300 hover:bg-[#A67F20] hover:scale-105 hover:shadow-xl hover:shadow-[#C29828]/50 animate-pulse hover:animate-none"
            >
              <Phone className="h-5 w-5 animate-bounce group-hover/btn:animate-none" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ArrowRight component definition
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )
}
