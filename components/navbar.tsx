"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { QuoteModal } from "@/components/quote-modal"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Join Our Team", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 glass border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center transition-transform hover:scale-105">
              <Image
                src="/images/aam-20logo-20.png"
                alt="Above All Maintenance & Repair"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-[#C29828] transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C29828] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <a
                href="tel:951-330-6963"
                className="flex items-center gap-2 text-[#C29828] hover:text-[#A67F20] transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span className="hidden sm:inline text-sm font-semibold">951-330-6963</span>
              </a>
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="hidden sm:flex btn-shimmer text-slate-950 hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#C29828]/30 hover:shadow-xl hover:shadow-[#C29828]/50 font-semibold"
              >
                Get a Free Quote
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-slate-200/50 rounded-md transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X className="h-6 w-6 text-[#C29828]" /> : <Menu className="h-6 w-6 text-[#C29828]" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-slate-200/50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#C29828] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full bg-[#C29828] text-slate-950 hover:bg-[#A67F20] shadow-md"
              >
                Get a Free Quote
              </Button>
            </div>
          )}
        </div>
      </nav>

      <QuoteModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </>
  )
}
