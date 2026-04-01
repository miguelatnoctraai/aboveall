import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Melissa S.",
      role: "Property Manager",
      content:
        "Fast response time and incredibly knowledgeable. They handled our electrical emergency professionally and efficiently.",
      rating: 5,
    },
    {
      name: "Connie B.",
      role: "Business Owner",
      content: "Fair pricing and excellent workmanship. Above All has become our go-to for all maintenance needs.",
      rating: 5,
    },
    {
      name: "Sal S.",
      role: "Homeowner",
      content: "Professional, reliable, and thorough. They transformed our outdated bathroom into something beautiful.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="/maintenance-technician-hvac-system.jpg" alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Trusted by Property Owners</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            See what our clients say about our commitment to quality and service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-slate-900/50 border border-slate-800/50 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
              <div className="pt-4 border-t border-slate-800/50">
                <p className="font-bold text-white text-lg">{testimonial.name}</p>
                <p className="text-sm text-amber-400 font-semibold">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
