import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

type ServiceData = {
  title: string
  description: string
  image?: string
  scope: string[]
  specificServices?: string[]
  process: { step: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

const servicesData: Record<string, ServiceData> = {
  electrical: {
    title: "Commercial Electrical Services",
    description:
      "Licensed electrical contractors providing comprehensive solutions for commercial properties, from minor repairs to major installations.",
    image: "/electrician-working-on-panel-upgrade.jpg",
    scope: [
      "Electrical panel upgrades and replacements",
      "Commercial LED retrofitting",
      "Circuit breaker repair and installation",
      "Outlet and switch installation",
      "Lighting system design and installation",
      "Electrical troubleshooting",
      "Code compliance inspections",
      "Emergency electrical repairs",
    ],
    process: [
      {
        step: "Electrical Safety Inspection",
        description: "Complete assessment of your electrical system to identify hazards and inefficiencies.",
      },
      {
        step: "Solution Design",
        description: "Engineering solutions that meet code requirements and your operational needs.",
      },
      {
        step: "Licensed Installation",
        description: "Certified electricians complete work with proper permits and final inspections.",
      },
    ],
    faqs: [
      {
        question: "Can you upgrade outdated electrical panels?",
        answer:
          "Yes, we specialize in upgrading older panels to modern, code-compliant systems that handle today's electrical demands.",
      },
      {
        question: "Do you offer energy-efficient lighting solutions?",
        answer: "LED retrofitting is one of our specialties, often reducing energy costs by 50-70%.",
      },
      {
        question: "Are you licensed for commercial work?",
        answer: "Yes, we hold California contractor license #1075924 covering all commercial electrical work.",
      },
    ],
  },
  plumbing: {
    title: "Commercial Plumbing Services",
    description:
      "Expert plumbing repairs, installations, and services for commercial properties. Fast response times and quality workmanship.",
    image: "/plumber-fixing-pipe-leak-under-sink.jpg",
    specificServices: [
      "Leak Detection & Repair",
      "Water Heater Installation & Repair",
      "Hydro Jetting & Drain Cleaning",
      "Backflow Prevention",
      "Commercial Kitchen Plumbing",
      "Pipe Repair & Re-Piping",
      "Fixture Installation & Replacement",
      "Emergency Plumbing Services (24/7)",
    ],
    scope: [
      "Leak detection and repair",
      "Fixture installation and replacement",
      "Water heater installation and repair",
      "Drain cleaning and hydro-jetting",
      "Pipe repair and re-piping",
      "Backflow prevention",
      "Emergency plumbing services (24/7)",
      "Commercial kitchen plumbing",
    ],
    process: [
      {
        step: "Diagnostic Assessment",
        description: "Thorough inspection to identify issues and determine the most cost-effective solution.",
      },
      {
        step: "Transparent Proposal",
        description: "Detailed estimate with timeline and materials breakdown before any work begins.",
      },
      {
        step: "Professional Installation",
        description: "Licensed plumbers complete work efficiently with minimal disruption to your operations.",
      },
    ],
    faqs: [
      {
        question: "Do you handle emergency plumbing calls?",
        answer: "Yes, we provide rapid response for plumbing emergencies. Call 951-330-6963 for immediate assistance.",
      },
      {
        question: "Are your plumbers licensed?",
        answer:
          "All our plumbers are licensed professionals operating under contractor license #1075924 in California.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, checks, credit cards, and can invoice commercial accounts.",
      },
    ],
  },
  "masonry-concrete": {
    title: "Masonry & Concrete Services",
    description:
      "Professional masonry and concrete work for commercial properties including repairs, installations, and new construction.",
    image: "/concrete-masonry-foundation-work.jpg",
    scope: [
      "Concrete foundation repair and installation",
      "Brick and block laying",
      "Concrete slab pouring and finishing",
      "Retaining wall construction",
      "Sidewalk and curb installation",
      "Stucco repair and application",
      "Stone veneer installation",
      "Concrete cutting and coring",
    ],
    process: [
      {
        step: "Site Assessment",
        description: "Evaluate the scope of masonry work needed and check for structural considerations.",
      },
      {
        step: "Material Selection & Planning",
        description: "Choose appropriate materials and develop a detailed project plan with timeline.",
      },
      {
        step: "Expert Construction",
        description: "Skilled masons complete the work with attention to structural integrity and aesthetics.",
      },
    ],
    faqs: [
      {
        question: "Do you handle both repairs and new construction?",
        answer: "Yes, we handle everything from crack repairs to complete masonry installations for new builds.",
      },
      {
        question: "Can you match existing brick or stone?",
        answer: "Absolutely. We specialize in matching existing materials for seamless repairs and additions.",
      },
      {
        question: "How long does concrete need to cure?",
        answer:
          "Concrete typically reaches walk-on strength in 24-48 hours, but full cure takes 28 days. We'll advise on specific timing.",
      },
    ],
  },
  painting: {
    title: "Commercial Painting Services",
    description:
      "Professional interior and exterior painting for commercial properties with premium materials and expert application.",
    image: "/professional-painter-commercial-interior.jpg",
    scope: [
      "Interior commercial painting",
      "Exterior building painting",
      "Surface preparation and repair",
      "Pressure washing and cleaning",
      "Graffiti removal",
      "Parking structure painting",
      "Graffiti prevention coatings",
      "Color consultation services",
    ],
    process: [
      {
        step: "Surface Assessment",
        description: "Thorough inspection of surfaces to determine prep work needed for optimal adhesion.",
      },
      {
        step: "Preparation & Protection",
        description: "Proper surface prep, repairs, and masking to ensure clean lines and lasting finish.",
      },
      {
        step: "Professional Application",
        description: "Expert painting using commercial-grade materials with minimal disruption to operations.",
      },
    ],
    faqs: [
      {
        question: "Can you work after business hours?",
        answer:
          "Yes, we offer evening and weekend painting services to minimize disruption to your business operations.",
      },
      {
        question: "Do you provide warranties on your work?",
        answer: "Yes, we warranty our workmanship and use premium paints that come with manufacturer warranties.",
      },
      {
        question: "How long does commercial painting take?",
        answer:
          "Timeline depends on project size, but we provide detailed schedules and work efficiently to minimize downtime.",
      },
    ],
  },
  construction: {
    title: "Construction & Build Services",
    description: "Complete construction services from tenant improvements to renovations for commercial properties.",
    image: "/commercial-building-exterior-maintenance.jpg",
    scope: [
      "Tenant improvement projects",
      "Office renovations and remodels",
      "ADA compliance modifications",
      "Structural repairs and reinforcement",
      "Carpentry services",
      "Doors installation and repair",
      "Masonry work",
      "Board ups and securing",
      "Permit acquisition and coordination",
      "Multi-trade project coordination",
    ],
    process: [
      {
        step: "Project Planning & Design",
        description: "Collaborative planning to define scope, budget, and timeline for your construction project.",
      },
      {
        step: "Permits & Pre-Construction",
        description: "Handle all permitting, scheduling, and coordination before breaking ground.",
      },
      {
        step: "Construction & Quality Control",
        description: "Skilled execution with regular inspections and communication throughout the build.",
      },
    ],
    faqs: [
      {
        question: "Do you handle the permitting process?",
        answer:
          "Yes, we handle all permit applications and ensure your project meets all local building codes and regulations.",
      },
      {
        question: "Can you coordinate with other trades?",
        answer:
          "Absolutely. We excel at multi-trade coordination, often serving as the general contractor for complex projects.",
      },
      {
        question: "What size projects do you handle?",
        answer:
          "We handle projects of all sizes, from small tenant improvements to major commercial construction projects.",
      },
    ],
  },
  welding: {
    title: "Welding & Metal Fabrication",
    description:
      "Professional on-site welding and custom metal fabrication services for commercial and industrial applications.",
    image: "/welding-metal-fabrication-sparks.jpg",
    scope: [
      "Dock plates service",
      "Custom gate fabrication and installation",
      "Security fence installation",
      "Handrail and guardrail construction",
      "Metal doors",
      "Bollard installation",
      "Equipment mounting and brackets",
      "Emergency welding repairs",
    ],
    process: [
      {
        step: "Design Consultation",
        description: "Discuss your fabrication needs and develop custom solutions.",
      },
      {
        step: "Fabrication",
        description: "Precision welding and fabrication in our shop or on your site.",
      },
      {
        step: "Installation & Finishing",
        description: "Professional installation with powder coating or paint finishing options.",
      },
    ],
    faqs: [
      {
        question: "Can you weld on-site?",
        answer: "Yes, we have mobile welding capabilities for on-site repairs and installations.",
      },
      {
        question: "What types of metal do you work with?",
        answer: "We work with steel, stainless steel, aluminum, and other metals as needed.",
      },
      {
        question: "Do you provide custom security gates?",
        answer: "Yes, custom security gate design and fabrication is one of our specialties.",
      },
    ],
  },
  "parking-lot": {
    title: "Parking Lot Services",
    description:
      "Complete parking lot services including seal coating, striping, and repairs to keep your property safe and compliant.",
    image: "/parking-lot-maintenance-striping.jpg",
    scope: [
      "Asphalt seal coating",
      "Parking lot striping and re-striping",
      "Pothole repair and patching",
      "Crack sealing",
      "ADA compliance markings",
      "Speed bump installation",
      "Vandalism services",
      "Graffiti removal",
      "Parking lot sweeping",
      "Pressure washing and cleaning",
    ],
    process: [
      {
        step: "Lot Inspection",
        description: "Complete assessment of your parking lot condition and compliance needs.",
      },
      {
        step: "Service Plan",
        description: "Develop a cost-effective service schedule to extend lot life.",
      },
      {
        step: "Professional Service",
        description: "Efficient completion with traffic control and proper curing times.",
      },
    ],
    faqs: [
      {
        question: "How often should parking lots be seal coated?",
        answer: "We recommend seal coating every 2-3 years to protect asphalt and extend its lifespan.",
      },
      {
        question: "Do you ensure ADA compliance?",
        answer: "Yes, we're well-versed in ADA requirements and ensure all striping meets current standards.",
      },
      {
        question: "Can you work during business hours?",
        answer: "We typically schedule parking lot work during off-hours or weekends to minimize disruption.",
      },
    ],
  },
}

const serviceStyles: Record<
  string,
  {
    primaryColor: string
    accentColor: string
    gradientFrom: string
    gradientTo: string
    iconBg: string
    borderColor: string
  }
> = {
  electrical: {
    primaryColor: "text-yellow-600",
    accentColor: "bg-yellow-500",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-amber-600",
    iconBg: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    borderColor: "border-yellow-200 hover:border-yellow-400",
  },
  plumbing: {
    primaryColor: "text-cyan-600",
    accentColor: "bg-cyan-500",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    iconBg: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    borderColor: "border-cyan-200 hover:border-cyan-400",
  },
  "masonry-concrete": {
    primaryColor: "text-stone-600",
    accentColor: "bg-stone-500",
    gradientFrom: "from-stone-500",
    gradientTo: "to-stone-700",
    iconBg: "bg-gradient-to-br from-stone-400 to-stone-600",
    borderColor: "border-stone-200 hover:border-stone-400",
  },
  painting: {
    primaryColor: "text-purple-600",
    accentColor: "bg-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-indigo-600",
    iconBg: "bg-gradient-to-br from-purple-400 to-purple-600",
    borderColor: "border-purple-200 hover:border-purple-400",
  },
  construction: {
    primaryColor: "text-emerald-600",
    accentColor: "bg-emerald-500",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-600",
    iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    borderColor: "border-emerald-200 hover:border-emerald-400",
  },
  welding: {
    primaryColor: "text-red-600",
    accentColor: "bg-red-500",
    gradientFrom: "from-red-500",
    gradientTo: "to-orange-600",
    iconBg: "bg-gradient-to-br from-red-400 to-red-600",
    borderColor: "border-red-200 hover:border-red-400",
  },
  "parking-lot": {
    primaryColor: "text-slate-600",
    accentColor: "bg-slate-500",
    gradientFrom: "from-slate-500",
    gradientTo: "to-slate-700",
    iconBg: "bg-gradient-to-br from-slate-400 to-slate-600",
    borderColor: "border-slate-200 hover:border-slate-400",
  },
}

const slugAliases: Record<string, string> = {
  "electrical-lighting": "electrical",
  "plumbing-solutions": "plumbing",
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData[params.slug as keyof typeof servicesData]

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | Above All Maintenance & Repair`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const slug = slugAliases[params.slug] || params.slug
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  const allServices = Object.keys(servicesData)
  const styles = serviceStyles[slug] || serviceStyles.construction

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative py-16 md:py-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          {service.image && (
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-full object-cover"
              width={1200}
              height={800}
              priority
            />
          )}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${styles.gradientFrom} ${styles.gradientTo} opacity-90`}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance">{service.title}</h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed text-pretty mb-8">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#C29828] hover:bg-[#d4a745] text-slate-950 font-semibold px-8 py-6 text-lg shadow-lg shadow-[#C29828]/50"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:951-330-6963">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-950 px-8 py-6 text-lg bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {service.specificServices && (
                <div className="bg-white rounded-xl border-2 border-slate-200 p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-slate-950 mb-6 flex items-center gap-3">
                    <div className={`h-1 w-12 ${styles.accentColor} rounded-full`} />
                    Our Specialized Services
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.specificServices.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-4 rounded-lg border-2 ${styles.borderColor} transition-all duration-300 hover:shadow-md`}
                      >
                        <Check className={`${styles.primaryColor} h-5 w-5 mt-0.5 flex-shrink-0`} strokeWidth={3} />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-xl border-2 border-slate-200 p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-950 mb-8 flex items-center gap-3">
                  <div className={`h-1 w-12 ${styles.accentColor} rounded-full`} />
                  What We Do
                </h2>
                <ul className="space-y-4">
                  {service.scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className={`h-6 w-6 rounded-full ${styles.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check className="h-4 w-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl border-2 border-slate-200 p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-950 mb-6 flex items-center gap-3">
                  <div className={`h-1 w-12 ${styles.accentColor} rounded-full`} />
                  Our Process
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`h-12 w-12 rounded-full ${styles.iconBg} flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-950 mb-2">{step.step}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border-2 border-slate-200 p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-950 mb-6 flex items-center gap-3">
                  <div className={`h-1 w-12 ${styles.accentColor} rounded-full`} />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className={`border-l-4 ${styles.accentColor} pl-6 py-2`}>
                      <h3 className={`text-lg font-bold ${styles.primaryColor} mb-2`}>{faq.question}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className={`border-2 ${styles.borderColor} shadow-lg`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-950 mb-4">Ready to Get Started?</h3>
                    <p className="text-slate-600 mb-6">Contact us today for a free consultation and quote.</p>
                    <div className="space-y-4">
                      <a href="tel:951-330-6963" className="block">
                        <Button
                          size="lg"
                          className={`w-full ${styles.iconBg} hover:opacity-90 text-white font-bold shadow-lg`}
                        >
                          <Phone className="mr-2 h-5 w-5" />
                          951-330-6963
                        </Button>
                      </a>
                      <Link href="/contact" className="block">
                        <Button size="lg" variant="outline" className={`w-full border-2 ${styles.borderColor}`}>
                          <Mail className="mr-2 h-5 w-5" />
                          Request Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-950 mb-4">Other Services</h3>
                    <nav className="space-y-2">
                      {allServices
                        .filter((s) => s !== slug)
                        .map((serviceSlug) => (
                          <Link key={serviceSlug} href={`/services/${serviceSlug}`}>
                            <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors group">
                              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#C29828] transition-colors" />
                              <span className="text-slate-700 group-hover:text-slate-950 font-medium">
                                {servicesData[serviceSlug].title}
                              </span>
                            </div>
                          </Link>
                        ))}
                    </nav>
                  </CardContent>
                </Card>

                <Card className={`border-2 ${styles.borderColor} ${styles.iconBg} text-white shadow-lg`}>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">#1075924</div>
                    <div className="text-sm opacity-90 mb-4">CA Contractor License</div>
                    <a
                      href="https://www.cslb.ca.gov/onlineservices/checklicenseII/LicenseDetail.aspx?LicNum=1075924"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline hover:opacity-80 transition-opacity"
                    >
                      Verify License
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
