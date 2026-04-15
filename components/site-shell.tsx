"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PromoPopup } from "@/components/promo-popup"

interface SiteShellProps {
  children: React.ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname()
  const isLandingPage = pathname.startsWith("/lp/")

  if (isLandingPage) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <PromoPopup />
    </>
  )
}
