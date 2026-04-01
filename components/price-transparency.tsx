"use client"

import { Check, X, BadgeCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PriceTransparency() {
  return (
    <section className="py-16 md:py-24 bg-[#0a1628]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Fair Pricing. <span className="text-[#C29828]">Verified Guarantee.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
            Every project is unique. We provide <span className="text-white font-semibold">transparent quotes</span> and{" "}
            <span className="text-[#C29828] font-bold">verified price matching</span> because your trust matters.
          </p>
        </div>
        {/* </CHANGE> */}

        {/* 3-Column Comparison */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 max-w-6xl mx-auto">
          {/* Column 1: Other Companies */}
          <div className="relative bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-gray-700/50">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-600 text-gray-300 text-xs font-semibold px-4 py-1 rounded-full">
              Other Companies
            </div>

            <div className="text-center pt-4">
              <h3 className="text-gray-400 font-semibold text-lg mb-4">Traditional Pricing</h3>

              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400/70 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-gray-400 font-medium">Hidden Fees</span>
                    <p className="text-gray-500 text-sm">Surprises at the end</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400/70 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-gray-400 font-medium">Complex Pricing</span>
                    <p className="text-gray-500 text-sm">Hard to understand quotes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400/70 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-gray-400 font-medium">High Markups</span>
                    <p className="text-gray-500 text-sm">Overhead passed to you</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400/70 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-gray-400 font-medium">No Price Match</span>
                    <p className="text-gray-500 text-sm">Take it or leave it</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Our Guarantee */}
          <div className="relative bg-gradient-to-b from-[#0f2744] to-[#0a1628] rounded-2xl p-6 md:p-8 border-2 border-[#C29828]/30 shadow-xl shadow-[#C29828]/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C29828] text-[#0a1628] text-xs font-bold px-4 py-1 rounded-full">
              Our Guarantee
            </div>

            <div className="text-center pt-4 flex flex-col justify-center h-full">
              <div className="space-y-6">
                {/* Price match guarantee */}
                <div className="bg-[#0a1628] rounded-xl p-6 border border-[#C29828]/20">
                  <BadgeCheck className="w-16 h-16 text-[#C29828] mx-auto mb-4" strokeWidth={2} />

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Verified Price Match</h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Found a lower verified quote for the same work? We'll match it or explain why we can't.
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#C29828]/20">
                    <p className="text-[#C29828] font-bold text-lg">No Games. Just Honesty.</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    Every project is different. We assess complexity, materials, and timeline to give you{" "}
                    <span className="text-white font-semibold">accurate, fair pricing</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Why Choose Us */}
          <div className="relative bg-gradient-to-b from-[#C29828]/10 to-transparent rounded-2xl p-6 md:p-8 border border-[#C29828]/30">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C29828] text-[#0a1628] text-xs font-bold px-4 py-1 rounded-full">
              Why Choose Us
            </div>

            <div className="text-center pt-4">
              <h3 className="text-[#C29828] font-semibold text-lg mb-4">Our Approach</h3>

              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C29828] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#0a1628]" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-white font-medium">Transparent Quotes</span>
                    <p className="text-gray-400 text-sm">Line-by-line breakdown</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C29828] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#0a1628]" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-white font-medium">No Hidden Fees</span>
                    <p className="text-gray-400 text-sm">What you see is what you pay</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C29828] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#0a1628]" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-white font-medium">Fair Pricing</span>
                    <p className="text-gray-400 text-sm">Based on actual scope</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C29828] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#0a1628]" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-white font-medium">Licensed Pro</span>
                    <p className="text-gray-400 text-sm">License #1075924</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#C29828] hover:bg-[#D4A93A] text-[#0a1628] font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#C29828]/30"
          >
            <BadgeCheck className="w-5 h-5" />
            Get Your Free Quote Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
