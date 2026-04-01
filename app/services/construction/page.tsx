"use client"

import type React from "react"
import Link from "next/link"
import {
  Phone,
  HardHat,
  Building2,
  Shield,
  CheckCircle,
  Clock,
  MapPin,
  ChevronDown,
  Hammer,
  FileCheck,
  DoorOpen,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ConstructionServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const capabilities = [
    { title: "Tenant Improvement Projects", icon: Building2 },
    { title: "Office Renovations & Remodels", icon: HardHat },
    { title: "ADA Compliance Modifications", icon: FileCheck },
    { title: "Structural Repairs", icon: Hammer },
    { title: "Carpentry Services", icon: Hammer },
    { title: "Doors Installation & Repair", icon: DoorOpen },
    { title: "Masonry Work", icon: Layers },
    { title: "Board Ups & Securing", icon: Shield },
    { title: "Permit Acquisition", icon: FileCheck },
  ]

  const process = [
    {
      step: "1",
      title: "Project Planning & Design",
      description: "Collaborative planning to define scope, budget, and timeline for your construction project.",
    },
    {
      step: "2",
      title: "Permits & Pre-Construction",
      description: "Handle all permitting, scheduling, and coordination before breaking ground.",
    },
    {
      step: "3",
      title: "Construction & Quality Control",
      description: "Skilled execution with regular inspections and communication throughout the build.",
    },
  ]

  const faqs = [
    {
      question: "Do you handle the permitting process?",
      answer:
        "Yes, we manage all permit applications and ensure your project meets all local building codes and regulations.",
    },
    {
      question: "Can you coordinate with other trades?",
      answer:
        "Absolutely. We excel at multi-trade coordination, often serving as the general contractor for complex projects.",
    },
    {
      question: "What size projects do you handle?",
      answer:
        "We handle projects of all sizes, from small tenant improvements to major commercial renovation projects.",
    },
    {
      question: "How long does a typical tenant improvement take?",
      answer:
        "Timeline varies based on scope, but most tenant improvements range from 2-8 weeks. We provide detailed schedules during planning.",
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
            src="/commercial-building-exterior-maintenance.jpg"
            alt="Commercial construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/85" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/50">
                    <HardHat className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
                  Construction & Tenant Improvements
                </h1>

                <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto text-pretty">
                  From tenant buildouts to complete renovations. Licensed general contractor ready for your next
                  project.
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
                      className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 px-8 py-6 text-lg bg-transparent"
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
                        className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-950 group-hover:text-emerald-600 transition-colors">
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
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                          <span className="text-2xl font-bold text-white">{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-slate-950 mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-4xl font-bold text-slate-950 mb-8">Common Construction Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-emerald-400 transition-all duration-300"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-slate-950 pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
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
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 mb-3">Serving Southern California</h3>
                    <p className="text-lg text-slate-700 mb-4">
                      Proudly providing construction services across San Bernardino, Riverside, San Diego, and Orange
                      Counties.
                    </p>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Shield className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium">
                        Licensed #
                        <a
                          href="https://www.cslb.ca.gov/onlineservices/checklicenseII/LicenseDetail.aspx?LicNum=1075924"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:text-emerald-700 underline"
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
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-300 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">Start Your Project</h3>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Ready to transform your space? Let's discuss your construction needs.
                  </p>
                  <a href="tel:951-330-6963" className="block">
                    <Button
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xl py-8 shadow-lg shadow-emerald-500/50"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      951-330-6963
                    </Button>
                  </a>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>Free estimates within 48 hours</span>
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
                        className="border-2 border-slate-300 focus:border-emerald-400 focus:ring-emerald-400"
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
                        className="border-2 border-slate-300 focus:border-emerald-400 focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="issue" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Description
                      </label>
                      <Textarea
                        id="issue"
                        placeholder="Describe your construction project..."
                        rows={4}
                        value={formData.issue}
                        onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                        required
                        className="border-2 border-slate-300 focus:border-emerald-400 focus:ring-emerald-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#C29828] hover:bg-[#d4a745] text-slate-950 font-semibold shadow-lg shadow-[#C29828]/30"
                    >
                      Request Consultation
                    </Button>
                  </form>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-6 border-2 border-slate-300">
                  <h3 className="text-lg font-bold text-slate-950 mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {[
                      "Licensed General Contractor",
                      "20+ Years Experience",
                      "Full Permit Management",
                      "On-Time Completion",
                      "Quality Guaranteed",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" strokeWidth={2} />
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
