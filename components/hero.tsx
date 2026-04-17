"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, ShieldCheck, Wrench } from "lucide-react"
import { businessInfo } from "@/lib/business-info"
import Link from "next/link"
import { useEffect, useState } from "react"

function AnimatedCounter({
  end,
  label,
  suffix = "",
  noFormatting = false,
}: { end: number; label: string; suffix?: string; noFormatting?: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-[#C29828] md:text-5xl mb-2">
        {noFormatting ? count : count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm font-medium text-slate-300 md:text-base">{label}</div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-4 py-16 md:px-0 md:py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-slate-950/80" />
          <img
            src="/modern-construction-site-with-steel-beams-and-indu.jpg"
            alt="Plumbing and property repair background"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="container z-20 mx-auto px-4 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-600/20 px-6 py-3 pulse-badge">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-bold tracking-wide text-red-400 md:text-base">EMERGENCY PLUMBING AVAILABLE</span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            Riverside County Plumbing
            <br />
            And Property Repair
          </h1>

          <div className="mb-10 inline-block rounded-2xl glass-dark px-8 py-4">
            <p className="text-lg font-medium text-slate-200 text-pretty sm:text-xl md:text-2xl">
              Homeland-based service for homes, rentals, and commercial properties
            </p>
            <p className="mt-2 text-base font-semibold text-[#C29828] sm:text-lg">
              Emergency plumbing, drain cleaning, water heaters, leak diagnosis, and broader repair work
            </p>
          </div>

          <p className="mx-auto mb-10 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Based in {businessInfo.homeBase}, {businessInfo.name} handles plumbing for homes, rentals, and commercial
            properties across Riverside County, with related maintenance and repair help available when the job grows
            beyond the pipe, fixture, or leak itself.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 min-w-[220px] bg-[#C29828] text-lg font-bold text-slate-950 shadow-xl shadow-[#C29828]/40 transition-all duration-300 hover:scale-110 hover:bg-[#A67F20] hover:shadow-2xl hover:shadow-[#C29828]/60"
              >
                Get Plumbing Help
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/services/plumbing">
              <Button
                size="lg"
                variant="outline"
                className="h-14 min-w-[220px] border-2 border-[#C29828] bg-transparent text-lg font-bold text-[#C29828] shadow-lg shadow-[#C29828]/20 transition-all duration-300 hover:scale-110 hover:bg-[#C29828] hover:text-slate-950 hover:shadow-2xl hover:shadow-[#C29828]/40"
              >
                Plumbing Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#C29828]/50 p-2">
            <div className="h-3 w-1 rounded-full bg-[#C29828]"></div>
          </div>
        </div>
      </section>

      <section className="relative z-30 -mt-16 bg-slate-950 px-4 pb-16 md:-mt-20 md:px-0 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-slate-700/50 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
              <AnimatedCounter end={1075924} label="Licensed #" noFormatting={true} />
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center gap-2 text-4xl font-bold text-[#C29828] md:text-5xl">
                  <ShieldCheck className="h-10 w-10" />
                  24/7
                </div>
                <div className="text-sm font-medium text-slate-300 md:text-base">Emergency Phone Response</div>
              </div>
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center gap-2 text-4xl font-bold text-[#C29828] md:text-5xl">
                  <MapPin className="h-10 w-10" />
                  6+
                </div>
                <div className="text-sm font-medium text-slate-300 md:text-base">Trades Covered</div>
              </div>
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center gap-2 text-4xl font-bold text-[#C29828] md:text-5xl">
                  <Wrench className="h-10 w-10" />
                  CA
                </div>
                <div className="text-sm font-medium text-slate-300 md:text-base">Licensed in California</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
