import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { PastWork } from "@/components/past-work"
import { Testimonials } from "@/components/testimonials"
import { SavingsBadge } from "@/components/savings-badge"
import { PriceTransparency } from "@/components/price-transparency"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <PriceTransparency />
      <PastWork />
      <Testimonials />
      <SavingsBadge />
    </main>
  )
}
