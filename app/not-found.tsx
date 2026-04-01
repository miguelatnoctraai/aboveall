import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Phone, Search } from "lucide-react"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/images/aam-20logo-20.png"
            alt="Above All Maintenance & Repair"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-amber-400 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lost? Let's Get You Back on Track</h2>
          <p className="text-slate-400 text-lg mb-8">
            The page you're looking for doesn't exist, but we're here to help with your maintenance needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent"
          >
            <Link href="/services">
              <Search className="mr-2 h-5 w-5" />
              Browse Services
            </Link>
          </Button>
        </div>

        <div className="p-8 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4">Need Immediate Help?</h3>
          <p className="text-slate-300 mb-6">Our team is ready to assist you with any maintenance or repair needs.</p>
          <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 w-full sm:w-auto">
            <a href="tel:951-330-6963">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 951-330-6963
            </a>
          </Button>
        </div>

        <div className="mt-12 text-slate-500 text-sm">
          <p>Licensed #1075924 | Bonded & Insured</p>
          <p className="mt-2">Serving Riverside & San Diego Counties</p>
        </div>
      </div>
    </div>
  )
}
