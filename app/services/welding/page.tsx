"use client"

import type React from "react"
import Link from "next/link"
import { Phone, Shield, CheckCircle, Clock, MapPin, ChevronDown, Flame, Lock, Wrench, DoorOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function WeldingServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const capabilities = [
    { title: "Dock Plates Service", icon: Flame },
    { title: "Custom Gate Fabrication", icon: Lock },
    { title: "Security Fence Installation", icon: Shield },
    { title: "Handrail & Guardrail Construction", icon: Wrench },
    { title: "Metal Doors", icon: DoorOpen },
    { title: "Emergency Welding Repairs", icon: Wrench },
  ]

  const process = [
    {
      step: "1",
      title: "Design Consultation",
      description: "Discuss your fabrication needs and develop custom solutions tailored to your requirements.",
    },
    {
      step: "2",
      title: "Fabrication",
      description: "Precision welding and fabrication in our shop or on your site with quality materials.",
    },
    {
      step: "3",
      title: "Installation & Finishing",
      description: "Professional installation with powder coating or paint finishing options for durability.",
    },
  ]

  const faqs = [
    {
      question: "Can you weld on-site?",
      answer: "Yes, we have mobile welding capabilities for on-site repairs and installations at your location.",
    },
    {
      question: "What types of metal do you work with?",
      answer: "We work with steel, stainless steel, aluminum, and other metals as needed for your project.",
    },
    {
      question: "Do you provide custom security gates?",
      answer:
        "Yes, custom security gate design and fabrication is one of our specialties. We can create gates to match any style.",
    },
    {
      question: "How long does custom fabrication take?",
      answer:
        "Timeline depends on complexity, but most custom projects take 1-3 weeks from design approval to installation.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quick request form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/welding-metal-fabrication-sparks.jpg"
            alt="Professional welding services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/85" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-orange-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                    <Flame className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
                  Welding & Metal Fabrication
                </h1>

                <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto text-pretty">
                  Professional on-site welding and custom metal fabrication for commercial and industrial applications.
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
                      className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-950 px-8 py-6 text-lg bg-transparent"
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

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              {/* Capabilities */}
              <div>
                <h2 className="text-4xl font-bold text-slate-950 mb-8">Our Capabilities</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {capabilities.map((capability, index) => {
                    const Icon = capability.icon
                    return (
                      <div
                        key={index}
                        className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-950 group-hover:text-red-600 transition-colors">
                            {capability.title}
                          </h3>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-4xl font-bold text-slate-950 mb-8">The Process</h2>
                <div className="space-y-8">
                  {process.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-orange-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                          <span className="text-2xl font-bold text-white">{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-red-400 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-slate-950 mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-4xl font-bold text-slate-950 mb-8">Common Welding Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-red-400 transition-all duration-300"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-slate-950 pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
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

              {/* Local SEO Banner */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 mb-3">Serving Southern California</h3>
                    <p className="text-lg text-slate-700 mb-4">
                      Proudly providing welding and fabrication services across San Bernardino, Riverside, San Diego,
                      and Orange Counties.
                    </p>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Shield className="w-5 h-5 text-red-600" />
                      <span className="font-medium">
                        Licensed #
                        <a
                          href="https://www.cslb.ca.gov/onlineservices/checklicenseII/LicenseDetail.aspx?LicNum=1075924"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 underline"
                        >
                          1075924
                        </a>{" "}
                        | Bonded | Insured
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-300 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">Custom Fabrication</h3>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Need custom gates, railings, or metalwork? Let's discuss your project.
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
                    <span>Mobile welding available</span>
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
                        className="border-2 border-slate-300 focus:border-red-400 focus:ring-red-400"
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
                        className="border-2 border-slate-300 focus:border-red-400 focus:ring-red-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="issue" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Description
                      </label>
                      <Textarea
                        id="issue"
                        placeholder="Describe your welding/fabrication needs..."
                        rows={4}
                        value={formData.issue}
                        onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                        required
                        className="border-2 border-slate-300 focus:border-red-400 focus:ring-red-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#C29828] hover:bg-[#d4a745] text-slate-950 font-semibold shadow-lg shadow-[#C29828]/30"
                    >
                      Request Estimate
                    </Button>
                  </form>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-6 border-2 border-slate-300">
                  <h3 className="text-lg font-bold text-slate-950 mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {[
                      "Licensed & Insured",
                      "20+ Years Experience",
                      "Mobile Welding",
                      "Custom Designs",
                      "Quality Guaranteed",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" strokeWidth={2} />
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
