import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Award, FileCheck, Users, Target, Lightbulb, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us - Above All Maintenance & Repair | Licensed Contractors",
  description:
    "Learn about Above All Maintenance & Repair. Licensed #1075924, fully bonded and insured. One Call Does It All for commercial and residential services in Southern California.",
  keywords: "licensed contractor, bonded, insured, maintenance services, Southern California, Riverside, San Diego",
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
        "From electrical to plumbing, carpentry to welding – we handle every aspect of your maintenance needs with a single point of contact.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "We combine traditional craftsmanship with modern technology to deliver cutting-edge solutions for commercial and residential projects.",
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
      {/* Hero Section - Split Screen */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="/commercial-building-exterior-maintenance.jpg"
              alt="Commercial building maintenance"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950 lg:via-slate-950/40" />
          </div>

          {/* Right Side - Content */}
          <div className="relative flex items-center justify-center px-6 lg:px-16 bg-slate-950">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-950" />
            <div className="relative z-10 max-w-2xl">
              {/* Glassmorphic Badge */}
              <div className="glass-dark inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
                <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: "#C29828" }} />
                <span className="text-sm font-medium" style={{ color: "#C29828" }}>
                  Serving SoCal Since 2010
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in-up [animation-delay:100ms]">
                Building <span style={{ color: "#C29828" }}>Legacy</span> Through Quality
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                We're not just contractors – we're your partners in transforming visions into reality. With over a
                decade of excellence, Above All Maintenance & Repair has become Southern California's trusted name for
                comprehensive maintenance and construction solutions.
              </p>

              {/* Mission Statement */}
              <div
                className="glass-dark p-6 rounded-2xl mb-8 border-l-4 animate-fade-in-up [animation-delay:300ms]"
                style={{ borderLeftColor: "#C29828" }}
              >
                <p className="text-lg font-semibold mb-2" style={{ color: "#C29828" }}>
                  Our Mission
                </p>
                <p className="text-2xl font-bold text-white">One Call Does It All</p>
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:400ms]">
                <Button
                  asChild
                  size="lg"
                  className="text-slate-950 hover:opacity-90 font-semibold px-8 transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: "#C29828", boxShadow: "0 0 20px rgba(194, 152, 40, 0.5)" }}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:opacity-90 font-semibold px-8 transition-all hover:scale-105 bg-transparent"
                  style={{ borderColor: "rgba(194, 152, 40, 0.5)", color: "#C29828" }}
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credentials Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-20 left-20 w-96 h-96 rounded-full blur-[120px]"
            style={{ backgroundColor: "#C29828" }}
          />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Your <span style={{ color: "#C29828" }}>Trusted</span> Partner
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Licensed, bonded, and insured for your complete protection and peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {credentials.map((credential, index) => {
              const Icon = credential.icon
              return (
                <div
                  key={index}
                  className="glass-dark p-8 rounded-2xl group hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ "--hover-shadow-color": "rgba(194, 152, 40, 0.2)" } as React.CSSProperties}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #C29828 0%, #A67C1F 100%)",
                        boxShadow: "0 0 20px rgba(194, 152, 40, 0.5)",
                      }}
                    >
                      <Icon className="w-10 h-10 text-slate-950" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{credential.title}</h3>
                    <p className="text-3xl font-bold mb-3" style={{ color: "#C29828" }}>
                      {credential.value}
                    </p>
                    <p className="text-slate-400 leading-relaxed">{credential.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stats Bar */}
          <div className="glass-dark p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold mb-2" style={{ color: "#C29828" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="absolute inset-0 opacity-5">
          <img src="/maintenance-technician-hvac-system.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Who <span style={{ color: "#C29828" }}>We Are</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A team of dedicated professionals committed to excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="glass-dark p-8 rounded-2xl group transition-all duration-300"
                  style={{ borderColor: "rgba(194, 152, 40, 0.3)" }}
                >
                  <div
                    className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-opacity-10 transition-colors duration-300"
                    style={{ "--hover-bg": "rgba(194, 152, 40, 0.1)" } as React.CSSProperties}
                  >
                    <Icon className="w-8 h-8" style={{ color: "#C29828" }} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>

          {/* Why Choose Us */}
          <div className="glass-dark p-10 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Above All?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Licensed & certified technicians",
                "Transparent, upfront pricing",
                "Same-day emergency services",
                "24/7 availability",
                "Comprehensive service offerings",
                "Eco-friendly solutions",
                "Quality workmanship guarantee",
                "Serving 4 SoCal counties",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2
                    className="w-6 h-6 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    style={{ color: "#C29828" }}
                  />
                  <span className="text-slate-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-blue-500/10"
          style={{
            background:
              "linear-gradient(135deg, rgba(194, 152, 40, 0.1) 0%, #0f172a 50%, rgba(59, 130, 246, 0.1) 100%)",
          }}
        />
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-10"
            style={{ backgroundColor: "#C29828" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Join thousands of satisfied clients who trust Above All Maintenance & Repair for all their maintenance and
            construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-slate-950 hover:opacity-90 font-semibold px-10 text-lg transition-all hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "#C29828", boxShadow: "0 0 40px rgba(194, 152, 40, 0.5)" }}
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:opacity-90 font-semibold px-10 text-lg transition-all hover:scale-105 bg-transparent"
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
