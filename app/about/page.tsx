import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Award, FileCheck, Users, Target, Lightbulb, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "About Us - Homeland, CA Plumbing & Property Repair",
  description:
    "Learn about Above All Maintenance & Repair, a Homeland-based plumbing, maintenance, and repair company serving Riverside County and surrounding Southern California communities.",
  keywords:
    "Homeland plumber, Riverside County plumbing company, licensed contractor, bonded and insured, property repair, maintenance",
}

export default function AboutPage() {
  const credentials = [
    {
      icon: Shield,
      title: "Licensed",
      value: "#1075924",
      description: "California State Licensed Contractor",
    },
    {
      icon: Award,
      title: "100% Bonded",
      value: "Protected",
      description: "Full bonding coverage for your peace of mind",
    },
    {
      icon: FileCheck,
      title: "Fully Insured",
      value: "Certified",
      description: "Comprehensive liability insurance",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "One Call Does It All",
      description:
        "From plumbing to electrical, carpentry, and welding, we handle property-service scope without forcing the customer to coordinate multiple vendors.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "We combine traditional craftsmanship with modern technology to deliver practical solutions for commercial and residential projects.",
    },
    {
      icon: Users,
      title: "Vetted Experts",
      description:
        "Every technician is thoroughly screened, trained, and certified to ensure the highest quality workmanship on every job.",
    },
  ]

  const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Projects Completed", value: "2,500+" },
    { label: "Service Counties", value: "4" },
    { label: "Client Satisfaction", value: "99%" },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="/commercial-building-exterior-maintenance.jpg"
              alt="Commercial building maintenance"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950 lg:via-slate-950/40" />
          </div>

          <div className="relative flex items-center justify-center px-6 bg-slate-950 lg:px-16">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-950" />
            <div className="relative z-10 max-w-2xl">
              <div className="glass-dark mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 animate-fade-in-up">
                <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: "#C29828" }} />
                <span className="text-sm font-medium" style={{ color: "#C29828" }}>
                  Homeland base, Riverside County focus
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-white animate-fade-in-up [animation-delay:100ms] lg:text-7xl">
                Building <span style={{ color: "#C29828" }}>Legacy</span> Through Quality
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-slate-300 animate-fade-in-up [animation-delay:200ms]">
                We&apos;re based in {businessInfo.homeBase} and serve {businessInfo.primaryCounty} with a strong plumbing
                focus backed by broader maintenance and repair capability. The goal is simple: solve the immediate issue
                cleanly and keep the larger property scope from turning into a coordination problem.
              </p>

              <div
                className="glass-dark mb-8 rounded-2xl border-l-4 p-6 animate-fade-in-up [animation-delay:300ms]"
                style={{ borderLeftColor: "#C29828" }}
              >
                <p className="mb-2 text-lg font-semibold" style={{ color: "#C29828" }}>
                  Our Mission
                </p>
                <p className="text-2xl font-bold text-white">One Call Does It All</p>
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:400ms]">
                <Button
                  asChild
                  size="lg"
                  className="px-8 font-semibold text-slate-950 transition-all hover:scale-105 hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: "#C29828", boxShadow: "0 0 20px rgba(194, 152, 40, 0.5)" }}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent px-8 font-semibold transition-all hover:scale-105 hover:opacity-90"
                  style={{ borderColor: "rgba(194, 152, 40, 0.5)", color: "#C29828" }}
                >
                  <Link href="/services/plumbing">View Plumbing Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-20 left-20 h-96 w-96 rounded-full blur-[120px]"
            style={{ backgroundColor: "#C29828" }}
          />
          <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-blue-500 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              Your <span style={{ color: "#C29828" }}>Trusted</span> Partner
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              Licensed, bonded, and insured for your complete protection and peace of mind
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {credentials.map((credential, index) => {
              const Icon = credential.icon
              return (
                <div
                  key={index}
                  className="glass-dark rounded-2xl p-8 transition-all duration-300 group hover:scale-105 hover:border-amber-400/50 hover:shadow-xl"
                  style={{ "--hover-shadow-color": "rgba(194, 152, 40, 0.2)" } as React.CSSProperties}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #C29828 0%, #A67C1F 100%)",
                        boxShadow: "0 0 20px rgba(194, 152, 40, 0.5)",
                      }}
                    >
                      <Icon className="h-10 w-10 text-slate-950" strokeWidth={2.5} />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">{credential.title}</h3>
                    <p className="mb-3 text-3xl font-bold" style={{ color: "#C29828" }}>
                      {credential.value}
                    </p>
                    <p className="leading-relaxed text-slate-400">{credential.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="glass-dark rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="mb-2 text-4xl font-bold" style={{ color: "#C29828" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm uppercase tracking-wider text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="absolute inset-0 opacity-5">
          <img src="/maintenance-technician-hvac-system.jpg" alt="Background" className="h-full w-full object-cover" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              Who <span style={{ color: "#C29828" }}>We Are</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-400">
              A team of dedicated professionals committed to excellence in every project
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="glass-dark rounded-2xl p-8 transition-all duration-300 group"
                  style={{ borderColor: "rgba(194, 152, 40, 0.3)" }}
                >
                  <div
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-800 transition-colors duration-300 group-hover:bg-opacity-10"
                    style={{ "--hover-bg": "rgba(194, 152, 40, 0.1)" } as React.CSSProperties}
                  >
                    <Icon className="h-8 w-8" style={{ color: "#C29828" }} strokeWidth={2} />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white">{value.title}</h3>
                  <p className="leading-relaxed text-slate-400">{value.description}</p>
                </div>
              )
            })}
          </div>

          <div className="glass-dark rounded-2xl p-10">
            <h3 className="mb-8 text-center text-3xl font-bold text-white">Why Choose Above All?</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                "Licensed & certified technicians",
                "Transparent, upfront pricing",
                "Same-day emergency services",
                "24/7 availability",
                "Comprehensive service offerings",
                "Eco-friendly solutions",
                "Quality workmanship guarantee",
                "Homeland base with Riverside County focus",
              ].map((item, index) => (
                <div key={index} className="group flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 h-6 w-6 shrink-0 transition-transform group-hover:scale-110"
                    style={{ color: "#C29828" }}
                  />
                  <span className="text-lg text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-blue-500/10"
          style={{
            background:
              "linear-gradient(135deg, rgba(194, 152, 40, 0.1) 0%, #0f172a 50%, rgba(59, 130, 246, 0.1) 100%)",
          }}
        />
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] opacity-10"
            style={{ backgroundColor: "#C29828" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Ready to Experience the Difference?</h2>
          <p className="mb-10 text-xl text-slate-400">
            Join property owners who trust Above All Maintenance & Repair for plumbing, maintenance, and repair work
            across Riverside County and surrounding Southern California communities.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="px-10 text-lg font-semibold text-slate-950 transition-all hover:scale-105 hover:opacity-90 hover:shadow-2xl"
              style={{ backgroundColor: "#C29828", boxShadow: "0 0 40px rgba(194, 152, 40, 0.5)" }}
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent px-10 text-lg font-semibold transition-all hover:scale-105 hover:opacity-90"
              style={{ borderColor: "rgba(194, 152, 40, 0.5)", color: "#C29828" }}
            >
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
