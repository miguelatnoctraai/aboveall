import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { HomeServices } from "@/components/home-services"
import { About } from "@/components/about"
import { PastWork } from "@/components/past-work"
import { Testimonials } from "@/components/testimonials"
import { SavingsBadge } from "@/components/savings-badge"
import { PriceTransparency } from "@/components/price-transparency"
import { businessInfo } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Riverside County Plumbing, Maintenance & Repair",
  description:
    "Homeland-based plumbing, maintenance, and repair company serving Riverside County. Call Above All for emergency plumbing, drain cleaning, water heaters, leak diagnosis, and property repairs.",
  keywords: [
    "Riverside County plumber",
    "Homeland plumber",
    "Riverside County emergency plumbing",
    "Homeland plumbing repair",
    "Riverside County drain cleaning",
    "Riverside County water heater repair",
    "Riverside County property repair",
    "commercial plumbing Riverside County",
    "residential plumbing Riverside County",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Riverside County Plumbing, Maintenance & Repair",
    description:
      "Homeland-based plumbing, maintenance, and repair company serving Riverside County. Emergency plumbing, drains, water heaters, and property repair.",
    url: "/",
    type: "website",
  },
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": `${businessInfo.website}/#business`,
        name: businessInfo.name,
        telephone: businessInfo.phone,
        email: businessInfo.email,
        url: businessInfo.website,
        image: `${businessInfo.website}/images/aam-20logo-20.png`,
        description:
          "Homeland-based plumbing, maintenance, and repair company serving Riverside County and surrounding Southern California communities.",
        areaServed: businessInfo.counties.map((county) => ({
          "@type": "AdministrativeArea",
          name: `${county}, CA`,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: businessInfo.homeBaseCity,
          addressRegion: businessInfo.homeBaseState,
          addressCountry: "US",
        },
        sameAs: businessInfo.socialLinks,
        serviceType: [
          "Emergency plumbing",
          "Drain cleaning",
          "Water heater repair",
          "Leak diagnosis",
          "Toilet repair and installation",
          "General maintenance and repair",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${businessInfo.website}/#website`,
        url: businessInfo.website,
        name: businessInfo.name,
        publisher: {
          "@id": `${businessInfo.website}/#business`,
        },
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hero />
      <HomeServices />
      <About />
      <PriceTransparency />
      <PastWork />
      <Testimonials />
      <SavingsBadge />
    </main>
  )
}
