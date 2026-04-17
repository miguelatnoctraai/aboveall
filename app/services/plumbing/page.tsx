"use client"

import type React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Phone,
  Droplet,
  Wind,
  Wrench,
  Shield,
  AlertCircle,
  CheckCircle,
  Clock,
  MapPin,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { plumbingCities, plumbingCitySlugs, plumbingServiceSlugs, plumbingServices } from "@/lib/location-content"
import { useState } from "react"

export default function PlumbingServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const capabilities = [
    { title: "Leak Detection & Repair", icon: Droplet },
    { title: "Hydro Jetting & Drain Cleaning", icon: Wind },
    { title: "Commercial Water Heaters", icon: AlertCircle },
    { title: "Backflow Prevention", icon: Shield },
    { title: "Copper & PEX Repiping", icon: Wrench },
    { title: "Sewer Line Inspections", icon: CheckCircle },
  ]

  const process = [
    {
      step: "1",
      title: "Rapid Dispatch",
      description: "Call us and we dispatch a licensed plumber to your location within 60 minutes.",
    },
    {
      step: "2",
      title: "Expert Diagnosis",
      description: "Our technician performs a thorough inspection and provides upfront pricing.",
    },
    {
      step: "3",
      title: "Permanent Fix",
      description: "We complete the repair with quality materials and stand behind our work.",
    },
  ]

  const faqs = [
    {
      question: "Do you offer emergency service?",
      answer:
        "Yes! We provide emergency plumbing services nights and weekends (Mon-Fri 4:30 PM - 7:00 AM, weekends all day). Additional rates apply for emergency calls.",
    },
    {
      question: "Can you fix slab leaks?",
      answer:
        "Absolutely. We specialize in slab leak detection and repair using non-invasive methods. Our technicians have advanced equipment to locate and fix slab leaks efficiently.",
    },
    {
      question: "Do you work on commercial properties?",
      answer:
        "Yes, we serve both residential and commercial properties throughout Southern California. We handle everything from small repairs to large-scale commercial plumbing projects.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed (CA License #1075924), bonded, and insured. You can verify our license status on the CSLB website.",
    },
  ]

  const plumbingSpecialties = plumbingServiceSlugs.map((serviceSlug) => plumbingServices[serviceSlug])

  const plumbingCitiesList = plumbingCitySlugs.map((citySlug) => plumbingCities[citySlug])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Quick request form submitted:", formData)
    // Form submission logic would go here
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Plumbing Specific */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/plumber-fixing-pipe-leak-under-sink.jpg"
            alt="Professional plumber working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/85" />
        </div>

        {/* Hero Content with Cyan Glow */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Cyan glow effect container */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <Droplet className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
                  Expert Commercial & Residential Plumbing
                </h1>

                <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto text-pretty">
                  From rapid leak detection to complex repiping. Licensed, bonded, and ready for emergencies.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-[#C29828] hover:bg-[#d4a745] text-slate-950 font-semibold px-8 py-6 text-lg shadow-lg shadow-[#C29828]/50"
                    >
                      Get a Free Quote
                    </Button>
                  </Link>
                  <a href="tel:951-330-6963">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-8 py-6 text-lg bg-transparent"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: 951-330-6963
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area - 2 Column Layout */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Content (2/3 width) */}
            <div className="lg:col-span-2 space-y-16">
              {/* Our Capabilities Grid */}
              <div>
                <h2 className="text-4xl font-bold text-slate-950 mb-8">Our Capabilities</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {capabilities.map((capability, index) => {
                    const Icon = capability.icon
                    return (
                      <div
                        key={index}
                        className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-950 group-hover:text-cyan-600 transition-colors">
                              {capability.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-slate-950 mb-8">Specialized Plumbing Service Hubs</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {plumbingSpecialties.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/plumbing/${service.slug}`}
                      className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-950 transition-colors group-hover:text-cyan-600">
                            {service.name}
                          </h3>
                          <p className="mt-4 text-slate-600 leading-7">{service.heroSummary}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0 text-cyan-600 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* The Process - Timeline */}
              <div>
                <h2 className="text-4xl font-bold text-slate-950 mb-8">The Process</h2>
                <div className="space-y-8">
                  {process.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                          <span className="text-2xl font-bold text-white">{item.step}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-slate-950 mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section - Accordion */}
              <div>
                <h2 className="text-4xl font-bold text-slate-950 mb-8">Common Plumbing Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-cyan-400 transition-all duration-300"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-slate-950 pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-6 h-6 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
                            expandedFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expandedFaq === index && (
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
                <h2 className="text-4xl font-bold text-slate-950 mb-4">Areas We Serve For Plumbing</h2>
                <p className="text-lg text-slate-600 leading-8 mb-8">
                  Browse local plumbing service areas and go straight to the city that matches the job location, then
                  choose the exact plumbing issue you need help with.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {plumbingCitiesList.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.slug}`}
                      className="group rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-cyan-400 hover:bg-white hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-950 transition-colors group-hover:text-cyan-600">
                            {city.name}
                          </h3>
                          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
                            {city.county}
                          </p>
                          <p className="mt-4 text-slate-600 leading-7">{city.shortDescription}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0 text-cyan-600 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Local SEO Trust Banner */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 mb-3">Serving Southern California</h3>
                    <p className="text-lg text-slate-700 mb-4">
                      Proudly providing expert plumbing services across San Bernardino, Riverside, San Diego, and Orange
                      Counties.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Shield className="w-4 h-4" />
                      <span className="font-medium">
                        Licensed #
                        <a
                          href="https://www.cslb.ca.gov/onlineservices/checklicenseII/LicenseDetail.aspx?LicNum=1075924"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-600 hover:text-cyan-700 underline"
                        >
                          1075924
                        </a>{" "}
                        | Bonded | Insured
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plumbing Industry Resources */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
                <h3 className="text-2xl font-bold text-slate-950 mb-6">Plumbing Industry Resources</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-cyan-600 mb-3">Professional Associations</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="https://www.phccweb.org/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">PHCC - Plumbing Contractors</a></li>
                      <li><a href="https://www.iapmo.org/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">IAPMO - Plumbing Officials</a></li>
                      <li><a href="https://www.aspe.org/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">ASPE - Plumbing Engineers</a></li>
                      <li><a href="https://www.worldplumbing.org/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">World Plumbing Council</a></li>
                      <li><a href="https://www.safeplumbing.org/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">Plumbing Manufacturers Intl</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-600 mb-3">Trusted Brands We Use</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="https://www.kohler.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">Kohler Fixtures</a></li>
                      <li><a href="https://www.moen.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">Moen Faucets</a></li>
                      <li><a href="https://www.deltafaucet.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">Delta Faucet</a></li>
                      <li><a href="https://www.rheem.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">Rheem Water Heaters</a></li>
                      <li><a href="https://www.hotwater.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">A.O. Smith Water Heaters</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-600 mb-3">Standards & Certifications</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="https://www.cslb.ca.gov/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">CSLB - CA License Board</a></li>
                      <li><a href="https://www.epa.gov/watersense" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">EPA WaterSense</a></li>
                      <li><a href="https://www.nsf.org/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">NSF International</a></li>
                      <li><a href="https://www.asse-plumbing.org/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">ASSE Plumbing Standards</a></li>
                      <li><a href="https://www.iccsafe.org/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">ICC Building Codes</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Sidebar (1/3 width) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Emergency Service Card */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-300 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center pulse-badge">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">Need a Plumber Now?</h3>
                  </div>

                  <p className="text-slate-700 mb-6">
                    Emergency plumbing services available nights and weekends. Don't wait - call now!
                  </p>

                  <a href="tel:951-330-6963" className="block">
                    <Button
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-8 shadow-lg shadow-red-500/50"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      951-330-6963
                    </Button>
                  </a>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Fri 4:30 PM - 7:00 AM | Weekends All Day</span>
                  </div>
                </div>

                {/* Quick Request Form */}
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-950 mb-4">Quick Request</h3>
                  <p className="text-slate-600 mb-6">Get a callback from our team within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-2 border-slate-300 focus:border-cyan-400 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(951) 330-6963"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="border-2 border-slate-300 focus:border-cyan-400 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="issue" className="block text-sm font-medium text-slate-700 mb-2">
                        Issue Description
                      </label>
                      <Textarea
                        id="issue"
                        placeholder="Describe your plumbing issue..."
                        rows={4}
                        value={formData.issue}
                        onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                        required
                        className="border-2 border-slate-300 focus:border-cyan-400 focus:ring-cyan-400"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#C29828] hover:bg-[#d4a745] text-slate-950 font-semibold shadow-lg shadow-[#C29828]/30"
                    >
                      Request Service
                    </Button>
                  </form>
                </div>

                {/* Why Choose Us Card */}
                <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-6 border-2 border-slate-300">
                  <h3 className="text-lg font-bold text-slate-950 mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {[
                      "Licensed & Insured",
                      "Upfront Pricing",
                      "Same-Day Service",
                      "Quality Guaranteed",
                      "24/7 Emergency Available",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" strokeWidth={2} />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
