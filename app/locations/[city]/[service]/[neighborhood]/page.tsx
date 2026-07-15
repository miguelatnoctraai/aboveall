import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"
import { getNeighborhoodServicePage, neighborhoodServicePages } from "@/lib/neighborhood-content"

export const dynamicParams = false

type NeighborhoodPageProps = {
  params: Promise<{ city: string; service: string; neighborhood: string }>
}

export function generateStaticParams() {
  return neighborhoodServicePages.map(({ city, service, slug: neighborhood }) => ({ city, service, neighborhood }))
}

export async function generateMetadata({ params }: NeighborhoodPageProps): Promise<Metadata> {
  const { city, service, neighborhood } = await params
  const page = getNeighborhoodServicePage(city, service, neighborhood)

  if (!page) return { title: "Page Not Found" }

  return { robots: { index: false, follow: true } }
}

export default async function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const { city, service, neighborhood } = await params
  const page = getNeighborhoodServicePage(city, service, neighborhood)
  if (!page) notFound()
  permanentRedirect(`/locations/${city}/${page.urlSlug}`)
}
