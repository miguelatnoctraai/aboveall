import type { MetadataRoute } from "next"
import { businessInfo } from "@/lib/business-info"
import { plumbingCitySlugs, plumbingServiceSlugs } from "@/lib/location-content"

const baseUrl = businessInfo.website

function absoluteUrl(path: string) {
  return `${baseUrl}${path === "/" ? "" : path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPaths = [
    "/",
    "/about",
    "/services",
    "/services/construction",
    "/services/electrical",
    "/services/painting",
    "/services/parking-lot",
    "/services/plumbing",
    "/services/welding",
    "/contact",
    "/careers",
    "/locations",
    "/privacy-policy",
    "/terms-of-service",
  ]

  const plumbingServicePaths = plumbingServiceSlugs.map((service) => `/services/plumbing/${service}`)
  const cityPaths = plumbingCitySlugs.map((city) => `/locations/${city}`)
  const cityServicePaths = plumbingCitySlugs.flatMap((city) =>
    plumbingServiceSlugs.map((service) => `/locations/${city}/${service}`),
  )

  return [...staticPaths, ...plumbingServicePaths, ...cityPaths, ...cityServicePaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/locations") || path.startsWith("/services/plumbing") ? 0.8 : 0.6,
  }))
}
