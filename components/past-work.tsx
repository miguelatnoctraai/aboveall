"use client"

import Image from "next/image"
import Link from "next/link"

export function PastWork() {
  const projects = [
    {
      title: "Electrical Panel Upgrade",
      category: "Electrical & Lighting",
      image: "/images/2024-01-08.jpg",
      slug: "electrical", // Added slug for routing
    },
    {
      title: "Tankless Water Heater Installation",
      category: "Plumbing Solutions",
      image: "/images/2024-01-07.jpg",
      slug: "plumbing",
    },
    {
      title: "Commercial & Residential Buildings",
      category: "Construction Services",
      image: "/images/1.webp",
      slug: "construction",
    },
    {
      title: "Commercial Retail Storefront",
      category: "Construction Services",
      image: "/images/01.png",
      slug: "construction",
    },
    {
      title: "Electrical Panel Wiring",
      category: "Electrical & Lighting",
      image: "/images/2024-01-07-2.jpg",
      slug: "electrical",
    },
    {
      title: "Commercial Interior Construction",
      category: "Construction Services",
      image: "/images/2023-02-16.jpg",
      slug: "construction",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Our <span className="text-[#C29828]">Past Work</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto text-pretty leading-relaxed">
            Real projects from real clients across Southern California. Quality you can see.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/services/${project.slug}`}
              className="group relative overflow-hidden rounded-xl cursor-pointer block"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-[#C29828] text-slate-950 text-xs font-bold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white drop-shadow-lg">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
