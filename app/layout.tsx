import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Slab } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { businessInfo } from "@/lib/business-info"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SiteShell } from "@/components/site-shell"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.website),
  title: {
    default: `${businessInfo.name} | Homeland, CA Plumbing & Property Repair`,
    template: "%s | Above All Maintenance & Repair",
  },
  description:
    "Homeland, CA plumbing, maintenance, and repair company serving Riverside County and surrounding Southern California communities.",
  keywords: [
    "Homeland plumber",
    "Riverside County plumber",
    "plumbing",
    "property repair",
    "maintenance",
    "emergency plumbing",
    "drain cleaning",
    "water heater repair",
    "commercial plumbing",
    "residential plumbing",
  ],
  openGraph: {
    type: "website",
    siteName: businessInfo.name,
    locale: "en_US",
    title: `${businessInfo.name} | Homeland, CA Plumbing & Property Repair`,
    description:
      "Homeland, CA plumbing, maintenance, and repair company serving Riverside County and surrounding Southern California communities.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "QD6IN3iTeL3NTIEG8xpW_mYYSv0yVUZ9_lH_7mL8Ws0",
  },
  icons: {
    icon: [
      {
        url: businessInfo.logoPath,
        type: "image/png",
      },
    ],
    shortcut: businessInfo.logoPath,
    apple: businessInfo.logoPath,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased`}>
        <ScrollToTop />
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  )
}
