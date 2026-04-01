import { Shield, CheckCircle, MapPin } from "lucide-react"

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
      label: "Serving Southern California",
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
              More Than Maintenance
              <br />
              <span className="text-[#C29828]">Your Property Partners</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed text-pretty">
              At Above All Maintenance & Repair, we simplify home services and property repair with a single promise:{" "}
              <span className="text-[#C29828] font-semibold">One call does it all</span>. We are a fully licensed,
              bonded, and insured general contractor serving San Bernardino, Riverside, San Diego, and Orange Counties.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed text-pretty">
              Whether it's complex tenant improvements or an urgent residential repair, we bridge the gap between
              technical expertise and reliable service.
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
