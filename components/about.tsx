import { Shield, CheckCircle, MapPin } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

export function About() {
  const stats = [
    {
      icon: Shield,
      label: "License #1075924",
    },
    {
      icon: CheckCircle,
      label: "Bonded & Insured",
    },
    {
      icon: MapPin,
      label: "Homeland, CA Home Base",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden group">
            <img
              src="/plumber-fixing-pipe-leak-under-sink.jpg"
              alt="Professional plumbing maintenance services"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 backdrop-blur-xl bg-[#C29828]/90 border border-[#D4A537]/50 rounded-2xl px-6 py-4 shadow-2xl">
              <p className="text-slate-950 font-bold text-xl">Licensed & Insured</p>
              <p className="text-slate-950 text-sm font-semibold">#1075924</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-balance leading-tight tracking-tight">
              Plumbing First
              <br />
              <span className="text-[#C29828]">Built For Real Property Calls</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed text-pretty">
              {businessInfo.name} is based in {businessInfo.homeBase}. The home page now leads with plumbing because
              that is where the strongest local intent lives: emergency service, drain stoppages, water heaters,
              toilet issues, and leak diagnosis across {businessInfo.primaryCounty}.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed text-pretty">
              The broader business still handles maintenance and repair work when a property issue moves beyond
              plumbing. That keeps one contractor in the loop instead of forcing the customer to restart the job with a
              new vendor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl backdrop-blur-md bg-slate-800/50 border border-slate-700/50 hover:border-[#C29828]/50 hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#C29828]/20 group"
                  >
                    <div className="p-3 rounded-xl bg-[#C29828]/10 group-hover:bg-[#C29828] transition-all duration-500">
                      <Icon className="h-7 w-7 text-[#C29828] group-hover:text-slate-950 transition-all duration-500" />
                    </div>
                    <p className="text-sm font-semibold text-white group-hover:text-[#C29828] transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
