import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Award, DollarSign, Clock, Heart, Shield, FileCheck, Wrench, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers & Vendors | Above All Maintenance & Repair",
  description:
    "Join the Above All Maintenance & Repair team or become a vendor partner. We're hiring skilled tradespeople and seeking reliable subcontractors.",
  keywords: "careers, jobs, hiring, vendors, subcontractors, tradespeople, construction jobs, maintenance jobs",
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "General Laborer",
      type: "Full-Time",
      location: "Riverside County",
      description:
        "Entry-level position for motivated individuals. Learn multiple trades while working on diverse commercial projects.",
    },
    {
      title: "Site Superintendent",
      type: "Full-Time",
      location: "Riverside & San Diego Counties",
      description:
        "Experienced project manager to oversee commercial maintenance and construction projects. Leadership skills required.",
    },
    {
      title: "Licensed Electrician",
      type: "Full-Time",
      location: "Riverside County",
      description:
        "Seeking experienced electrician with CA license for commercial projects. Minimum 3 years experience required.",
    },
    {
      title: "Plumbing Technician",
      type: "Full-Time",
      location: "Multiple Locations",
      description: "Commercial plumbing experience preferred. Must have valid driver's license and own tools.",
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/construction-team-reviewing-blueprints-at-job-site.jpg"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/85 to-slate-950/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-100 text-balance">Join Our Crew</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto text-pretty leading-relaxed">
            Build your legacy with a team that values excellence, integrity, and craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-0 top-0 w-1/2 h-full">
            <img src="/welding-metal-fabrication-sparks.jpg" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <img
              src="/professional-painter-commercial-interior.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Column 1: Careers - Join Our Crew */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-[#C29828]/20 flex items-center justify-center mr-4">
                  <Briefcase className="h-6 w-6 text-[#C29828]" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Join Our Crew</h2>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8">
                We're building more than projects—we're building careers. Join a team that invests in your growth and
                values your expertise.
              </p>

              {/* Benefits Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <Card className="glass-dark border-slate-800/50 hover:border-[#C29828]/30 transition-all duration-300">
                  <CardContent className="p-4">
                    <DollarSign className="h-6 w-6 text-[#C29828] mb-2" strokeWidth={1.5} />
                    <h3 className="font-semibold text-slate-100 text-sm mb-1">Competitive Pay</h3>
                    <p className="text-xs text-slate-400">Industry-leading wages</p>
                  </CardContent>
                </Card>
                <Card className="glass-dark border-slate-800/50 hover:border-[#C29828]/30 transition-all duration-300">
                  <CardContent className="p-4">
                    <Clock className="h-6 w-6 text-[#C29828] mb-2" strokeWidth={1.5} />
                    <h3 className="font-semibold text-slate-100 text-sm mb-1">Work-Life Balance</h3>
                    <p className="text-xs text-slate-400">Consistent schedules</p>
                  </CardContent>
                </Card>
                <Card className="glass-dark border-slate-800/50 hover:border-[#C29828]/30 transition-all duration-300">
                  <CardContent className="p-4">
                    <Award className="h-6 w-6 text-[#C29828] mb-2" strokeWidth={1.5} />
                    <h3 className="font-semibold text-slate-100 text-sm mb-1">Career Growth</h3>
                    <p className="text-xs text-slate-400">Skills training programs</p>
                  </CardContent>
                </Card>
                <Card className="glass-dark border-slate-800/50 hover:border-[#C29828]/30 transition-all duration-300">
                  <CardContent className="p-4">
                    <Heart className="h-6 w-6 text-[#C29828] mb-2" strokeWidth={1.5} />
                    <h3 className="font-semibold text-slate-100 text-sm mb-1">Health Benefits</h3>
                    <p className="text-xs text-slate-400">Medical & dental coverage</p>
                  </CardContent>
                </Card>
              </div>

              {/* Open Positions */}
              <h3 className="text-xl font-bold text-slate-100 mb-6">Open Positions</h3>
              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <Card
                    key={index}
                    className="glass-dark border-slate-800/50 hover:border-[#C29828]/50 hover:shadow-lg hover:shadow-[#C29828]/10 transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-100 mb-2">{position.title}</h4>
                          <div className="flex flex-wrap gap-2 text-xs mb-3">
                            <span className="px-3 py-1 bg-[#C29828]/20 text-[#C29828] rounded-full border border-[#C29828]/30">
                              {position.type}
                            </span>
                            <span className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full border border-slate-700">
                              {position.location}
                            </span>
                          </div>
                        </div>
                        <Button
                          asChild
                          size="sm"
                          className="bg-[#C29828] hover:bg-[#B08820] text-slate-950 font-semibold group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#C29828]/20"
                        >
                          <a href={`mailto:Frank@aboveallmaintenancerepair.com?subject=Application: ${position.title}`}>
                            Apply Now
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{position.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Don't see position CTA */}
              <Card className="mt-6 bg-gradient-to-br from-[#C29828]/10 to-[#C29828]/5 border-[#C29828]/30">
                <CardContent className="p-6 text-center">
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    Don't see your position? We're always seeking talented tradespeople.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#C29828]/50 text-[#C29828] hover:bg-[#C29828]/20 bg-transparent"
                  >
                    <a href="mailto:Frank@aboveallmaintenancerepair.com?subject=General Application">
                      Submit Your Resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Column 2: Vendors - Subcontractor Registration */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-[#C29828]/20 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-[#C29828]" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Subcontractor Registration</h2>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8">
                Join our trusted network of professional subcontractors. We're seeking licensed plumbers, electricians,
                and skilled tradespeople to partner on commercial projects.
              </p>

              {/* Requirements */}
              <Card className="glass-dark border-slate-800/50 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center">
                    <Shield className="h-5 w-5 text-[#C29828] mr-2" strokeWidth={1.5} />
                    Requirements
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#C29828]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <FileCheck className="h-5 w-5 text-[#C29828]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-100 mb-1">Valid CA License</h4>
                        <p className="text-sm text-slate-400">Active contractor license in good standing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#C29828]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Shield className="h-5 w-5 text-[#C29828]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-100 mb-1">Insurance Coverage</h4>
                        <p className="text-sm text-slate-400">$1M+ liability insurance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#C29828]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Award className="h-5 w-5 text-[#C29828]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-100 mb-1">Proven Track Record</h4>
                        <p className="text-sm text-slate-400">References and portfolio required</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trades We're Seeking */}
              <Card className="glass-dark border-slate-800/50 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center">
                    <Wrench className="h-5 w-5 text-[#C29828] mr-2" strokeWidth={1.5} />
                    Trades We Partner With
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Electricians", "Plumbers", "Carpenters", "Masons", "Welders", "Painters", "Roofers"].map(
                      (trade, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 rounded-lg bg-slate-900/50 border border-slate-800/50 hover:border-[#C29828]/30 transition-colors duration-300"
                        >
                          <ArrowRight className="h-4 w-4 text-[#C29828] mr-2 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-sm text-slate-300">{trade}</span>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Application Process */}
              <Card className="glass-dark border-slate-800/50 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-100 mb-4">Application Process</h3>
                  <div className="space-y-3">
                    {[
                      "Submit credentials via email",
                      "Reference & qualification review",
                      "Interview with project managers",
                      "Added to preferred vendor list",
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#C29828]/20 border border-[#C29828]/50 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-xs text-[#C29828] font-bold">{idx + 1}</span>
                        </div>
                        <p className="text-sm text-slate-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-[#C29828] to-[#B08820] border-0 shadow-lg shadow-[#C29828]/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-950 mb-3">Ready to Partner?</h3>
                  <p className="text-slate-950 mb-6 leading-relaxed">
                    Send your company profile, licenses, and insurance certificates to get started.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg" className="bg-slate-950 hover:bg-slate-900 text-[#C29828] font-semibold">
                      <a href="mailto:Frank@aboveallmaintenancerepair.com?subject=Vendor Application">
                        Email Application
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-2 border-slate-950 text-slate-950 hover:bg-slate-900/10 font-semibold"
                    >
                      <a href="tel:951-330-6963">Call to Discuss</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
