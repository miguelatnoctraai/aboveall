"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
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
      <div className="text-4xl md:text-5xl font-bold text-[#C29828] mb-2">
        {noFormatting ? count : count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-slate-300 font-medium">{label}</div>
    </div>
  )
}

export function Hero() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/80 z-10" />
          <img
            src="/modern-construction-site-with-steel-beams-and-indu.jpg"
            alt="Construction Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 z-20 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 rounded-full px-6 py-3 mb-8 pulse-badge">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 font-bold text-sm md:text-base tracking-wide">
              🚨 EMERGENCY SERVICES: NIGHTS & WEEKENDS
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 text-balance leading-tight tracking-tight">
            Where Quality
            <br />
            Takes Flight
          </h1>

          <div className="inline-block glass-dark rounded-2xl px-8 py-4 mb-10">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-medium text-pretty">
              Premier Commercial & Residential Maintenance
            </p>
            <p className="text-base sm:text-lg text-[#C29828] font-semibold mt-2">
              Specializing in Plumbing, Electrical, and Construction Services
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#C29828] text-slate-950 hover:bg-[#A67F20] min-w-[220px] h-14 text-lg font-bold transition-all duration-300 hover:scale-110 shadow-xl shadow-[#C29828]/40 hover:shadow-2xl hover:shadow-[#C29828]/60"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#C29828] text-[#C29828] hover:bg-[#C29828] hover:text-slate-950 min-w-[220px] h-14 text-lg font-bold bg-transparent transition-all duration-300 hover:scale-110 shadow-lg shadow-[#C29828]/20 hover:shadow-2xl hover:shadow-[#C29828]/40"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#C29828]/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#C29828] rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="relative z-30 -mt-20">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-xl bg-slate-900/90 border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              <AnimatedCounter end={1075924} label="Licensed #" suffix="" noFormatting={true} />
              <AnimatedCounter end={100} label="Bonded" suffix="%" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#C29828] mb-2 flex items-center justify-center gap-2">
                  <Zap className="h-10 w-10" />
                  &lt; 60
                </div>
                <div className="text-sm md:text-base text-slate-300 font-medium">Min Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#C29828] mb-2">SoCal</div>
                <div className="text-sm md:text-base text-slate-300 font-medium">Serving Southern California</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
