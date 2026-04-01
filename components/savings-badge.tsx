"use client"

import { useState } from "react"
import Link from "next/link"
import { BadgeCheck } from "lucide-react"

export function SavingsBadge() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-28 h-28 md:w-32 md:h-32 rounded-full 
          bg-gradient-to-br from-[#C29828] to-[#A67F20]
          border-4 border-[#0a1628] 
          shadow-2xl shadow-[#C29828]/30
          flex flex-col items-center justify-center
          transition-all duration-300
          ${isHovered ? "scale-110" : "animate-pulse-subtle"}
        `}
      >
        {/* Inner ring */}
        <div className="absolute inset-2 rounded-full border-2 border-[#0a1628]/30" />

        {/* Content */}
        <div className="text-center px-2 relative z-10">
          <BadgeCheck className="w-8 h-8 md:w-10 md:h-10 text-[#0a1628] mx-auto mb-1" strokeWidth={2.5} />
          <span className="block text-[#0a1628] font-black text-xs md:text-sm leading-tight">PRICE</span>
          <span className="block text-[#0a1628] font-black text-xs md:text-sm leading-tight">MATCH</span>
          <span className="block text-[#0a1628]/80 text-[8px] md:text-[9px] mt-1 leading-tight font-semibold">
            Verified Guarantee
          </span>
        </div>
        {/* </CHANGE> */}

        {/* Decorative dots */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0a1628]/40" />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0a1628]/40" />
      </div>

      <div className="absolute inset-0 rounded-full bg-[#C29828]/20 blur-xl -z-10 animate-pulse" />

      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(194, 152, 40, 0.4);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 20px 10px rgba(194, 152, 40, 0.2);
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </Link>
  )
}
