import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, ExternalLink, MapPin, Train, Waves } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const slug = "/blog/top-10-interesting-facts-about-perris-ca"
const articleUrl = `${businessInfo.website}${slug}`
const featureImage = "/blog/perris-ca-facts-feature.png"
const perrisPlumberUrl = "https://www.aboveallmaintenancerepair.com/locations/perris"

export const metadata: Metadata = {
  title: {
    absolute: "Top 10 Interesting Facts About Perris, CA | Above All",
  },
  description:
    "Learn 10 interesting facts about Perris, CA, from railroad history and Lake Perris to skydiving, racing, Metrolink, and local landmarks.",
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "Top 10 Interesting Facts About Perris, CA",
    description:
      "A simple local guide to Perris history, Lake Perris, railway roots, skydiving, racing, and more.",
    url: articleUrl,
    type: "article",
    images: [
      {
        url: featureImage,
        width: 1200,
        height: 675,
        alt: "Illustrated Perris, California landmarks with Lake Perris, railway history, and skydiving",
      },
    ],
  },
}

const facts = [
  {
    title: "1. Perris Was Named After a Railroad Engineer",
    body: [
      "Perris is named after Fred T. Perris. He was the chief engineer for the California Southern Railroad.",
      "The railroad helped shape the early town. In the 1880s, the rail line connected the area to a bigger route between Barstow and San Diego. The Perris station opened in April 1886.",
    ],
    sourceName: "City of Perris History",
    sourceUrl: "https://www.cityofperris.org/our-city/about-perris/history",
  },
  {
    title: "2. Perris Became a City in 1911",
    body: [
      "Perris was not always an official city.",
      "The community voted to become a city in 1911. Perris officially incorporated on May 26, 1911.",
      "At that time, the city was still very small. The City of Perris says the best guess for the population at incorporation was about 300 people.",
    ],
    sourceName: "City of Perris History",
    sourceUrl: "https://www.cityofperris.org/our-city/about-perris/history",
  },
  {
    title: "3. Lake Perris Is a Major Outdoor Spot",
    body: [
      "Lake Perris is one of the best-known places near the city.",
      "The Lake Perris State Recreation Area covers about 8,200 acres. People go there for hiking, biking, fishing, swimming, camping, boating, horseback riding, and picnics.",
      "It is also home to the Ya'i Heki' Regional Indian Museum.",
    ],
    sourceName: "California Department of Water Resources",
    sourceUrl: "https://water.ca.gov/What-We-Do/Recreation/Perris-Lake-Recreation",
  },
  {
    title: "4. Lake Perris Is Part of the State Water Project",
    body: [
      "Lake Perris is not just a lake for fun.",
      "It is part of California's State Water Project. The Department of Water Resources calls Lake Perris one of the most popular recreation lakes along the State Water Project.",
      "That means the lake is tied to both water storage and outdoor recreation.",
    ],
    sourceName: "California Department of Water Resources",
    sourceUrl: "https://water.ca.gov/What-We-Do/Recreation/Perris-Lake-Recreation",
  },
  {
    title: "5. Perris Has a Famous Railway Museum",
    body: [
      "Perris is home to the Southern California Railway Museum.",
      "The museum is located at 2201 South A Street in Perris. It has trains, trolleys, rail cars, and other pieces of Southern California rail history.",
      "Visitors can walk the museum grounds and ride trains or trolleys on certain days.",
    ],
    sourceName: "Southern California Railway Museum",
    sourceUrl: "https://socalrailway.org/",
  },
  {
    title: "6. Perris Is Known for Skydiving",
    body: [
      "Perris is a major spot for skydiving.",
      "The City of Perris lists Skydive Perris as one of the premier skydiving centers in the world. People come to Perris for both outdoor skydiving and indoor skydiving.",
      "That makes Perris a place where people go for big adventure, not just local history.",
    ],
    sourceName: "Think Perris",
    sourceUrl: "https://thinkperris.org/play/",
  },
  {
    title: "7. Perris Has a National Archives Site",
    body: [
      "Perris is home to the National Archives at Riverside.",
      'Even though it is called "Riverside," the address is in Perris. The site holds federal records for Arizona, Southern California, and Clark County, Nevada.',
      "The research room is open by appointment.",
    ],
    sourceName: "National Archives at Riverside",
    sourceUrl: "https://www.archives.gov/riverside/index.html",
  },
  {
    title: "8. Perris Has Metrolink Service",
    body: [
      "Perris is connected to Metrolink through the 91/Perris Valley Line.",
      "The Riverside County Transportation Commission says service began in June 2016. It was a 24-mile extension made to help reduce traffic and give southwest Riverside County more transit options.",
    ],
    sourceName: "RCTC: 91/Perris Valley Line",
    sourceUrl: "https://www.rctc.org/projects/perris-valley-line/",
  },
  {
    title: "9. Perris Has a Dirt Racing Track",
    body: [
      "Perris Auto Speedway is another local landmark.",
      "The speedway hosts different types of race cars, including sprint cars and factory stocks. It is located at the Lake Perris Fairgrounds.",
    ],
    sourceName: "Perris Auto Speedway",
    sourceUrl: "https://www.perrisautospeedway.com/track.html",
  },
  {
    title: "10. Perris Has Grown a Lot",
    body: [
      "Perris started as a small farming and railroad town.",
      "Today, it is much bigger. The U.S. Census Bureau lists the 2020 population of Perris at 78,700 people.",
      "That is a big change from the early city days.",
    ],
    sourceName: "U.S. Census Bureau QuickFacts",
    sourceUrl: "https://www.census.gov/quickfacts/fact/table/perriscitycalifornia/RHI425224",
  },
]

const sources = Array.from(
  new Map(facts.map((fact) => [fact.sourceUrl, { name: fact.sourceName, url: fact.sourceUrl }])).values(),
)

export default function PerrisFactsBlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top 10 Interesting Facts About Perris, CA",
    description:
      "A simple local guide to Perris history, Lake Perris, railway roots, skydiving, racing, Metrolink, and more.",
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    image: `${businessInfo.website}${featureImage}`,
    author: {
      "@type": "Organization",
      name: businessInfo.name,
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      logo: {
        "@type": "ImageObject",
        url: `${businessInfo.website}${businessInfo.logoPath}`,
      },
    },
    citation: sources.map((source) => source.url),
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <span>Perris Local Guide</span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C29828]">Perris, CA</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Top 10 Interesting Facts About Perris, CA
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Perris has railroad roots, outdoor fun, skydiving, racing, and a lot of local history.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-slate-950/30">
              <Image
                src={featureImage}
                alt="Illustrated Perris, California landmarks with Lake Perris, railway history, and skydiving"
                width={1200}
                height={675}
                priority
                className="aspect-video h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-8">
            <section className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-cyan-700 shadow-sm">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">TL;DR</h2>
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    Perris, CA has a lot more history than many people know. It has railroad roots, Lake Perris,
                    skydiving, a train museum, a fairground, racing, and even a National Archives site. It is a small
                    city with a big story.
                  </p>
                </div>
              </div>
            </section>

            {facts.map((fact) => (
              <section key={fact.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-black tracking-tight text-slate-950">{fact.title}</h2>
                <div className="mt-5 space-y-4">
                  {fact.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <a
                  href={fact.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-800"
                >
                  Source: {fact.sourceName}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </section>
            ))}

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Living in Perris Means Old and New Are Side by Side
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Perris has a mix of old railroad history, outdoor fun, and fast growth. You can visit a train museum,
                go to Lake Perris, watch racing, or take Metrolink.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                And like many growing Riverside County cities, homes and businesses here still need the basics to work
                well. If you need a{" "}
                <a
                  href={perrisPlumberUrl}
                  className="font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-800"
                >
                  plumber in Perris
                </a>
                , Above All Maintenance & Repair can help with local plumbing service.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Sources</h2>
              <div className="mt-6 grid gap-3">
                {sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-700"
                  >
                    <span>{source.name}</span>
                    <ExternalLink className="h-4 w-4 shrink-0" />
                  </a>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Local Guide</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">Perris at a glance</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A simple list of facts about Perris history, parks, transportation, and local landmarks.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
                <div>
                  <p className="font-bold text-slate-950">Riverside County</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Perris sits in Riverside County near Homeland, Menifee, Moreno Valley, and Lake Perris.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Train className="mt-1 h-5 w-5 shrink-0 text-[#C29828]" />
                <div>
                  <p className="font-bold text-slate-950">Railroad roots</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Perris grew around rail service and still has a major railway museum.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Waves className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
                <div>
                  <p className="font-bold text-slate-950">Lake Perris</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Lake Perris is one of the area's best-known outdoor spots.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
