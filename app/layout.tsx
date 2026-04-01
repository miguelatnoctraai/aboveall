import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Slab } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PromoPopup } from "@/components/promo-popup"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Above All Maintenance & Repair | Licensed General Contractor in Riverside & San Diego",
  description:
    "Premier commercial & residential maintenance services in Southern California. Licensed (#1075924), bonded, and insured. One call does it all.",
  keywords: [
    "maintenance",
    "repair",
    "contractor",
    "Riverside",
    "San Diego",
    "commercial",
    "residential",
    "plumbing",
    "electrical",
    "construction",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
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
        <Navbar />
        {children}
        <Footer />
        <PromoPopup />
        <Analytics />
      </body>
    </html>
  )
}
