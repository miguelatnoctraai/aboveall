import { Phone, Mail, Facebook, Instagram, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function YelpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.14 11.18c-.36-.63-1.04-.69-1.52-.14l-3.29 3.78c-.41.48-.35 1.23.14 1.57.49.34 1.12.18 1.38-.35l2.14-3.78c.19-.33.19-.74-.85-1.08zm-1.7-1.68c.14-.55-.42-1.04-.93-.82l-4.3 1.87c-.46.2-.65.77-.4 1.20.25.43.77.55 1.14.26l3.78-2.25c.34-.2.57-.63.71-.26zm2.46-1.14c.1.55.64.86 1.14.67l4.14-1.57c.47-.18.7-.73.49-1.17-.21-.44-.72-.6-1.10-.35l-4.02 1.82c-.36.17-.55.61-.65.6zm.96 3.61c.37.54 1.05.56 1.52.04l3.16-3.56c.41-.46.37-1.21-.09-1.57-.46-.36-1.08-.24-1.37.26l-2.37 3.69c-.21.32-.23.72-.85 1.14zm-2.37 2.44c-.56-.1-1.01.38-.9.92l.77 4.61c.1.51.57.83 1.06.68.49-.15.72-.63.51-1.08l-1.06-4.51c-.08-.34-.38-.62.62-.62z" />
    </svg>
  )
}

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ]

  const serviceAreas = ["San Bernardino County", "Riverside County", "San Diego County", "Orange County"]

  const socialLinks = [
    {
      name: "Yelp",
      href: "https://yelp.to/gdDT2r_pNA",
      icon: YelpIcon,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100075527693670&mibextid=wwXIfr",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/aboveallmaintenancerepair?igsh=NTc4MTIwNjQ2YQ==",
      icon: Instagram,
    },
  ]

  const industryLinks = [
    {
      category: "Licensing & Compliance",
      links: [
        { name: "CSLB License Lookup", href: "https://www.cslb.ca.gov/" },
        { name: "Better Business Bureau", href: "https://www.bbb.org/" },
        { name: "DIR Contractor Lookup", href: "https://www.dir.ca.gov/" },
        { name: "CA Contractors License", href: "https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/" },
        { name: "CA Building Standards", href: "https://www.dgs.ca.gov/BSC" },
      ],
    },
    {
      category: "Plumbing Associations",
      links: [
        { name: "PHCC National", href: "https://www.phccweb.org/" },
        { name: "IAPMO", href: "https://www.iapmo.org/" },
        { name: "ASPE", href: "https://www.aspe.org/" },
        { name: "Plumbing Manufacturers Intl", href: "https://www.safeplumbing.org/" },
        { name: "World Plumbing Council", href: "https://www.worldplumbing.org/" },
        { name: "UA Plumbers Union", href: "https://www.ua.org/" },
      ],
    },
    {
      category: "Trade Associations",
      links: [
        { name: "NECA", href: "https://www.necanet.org/" },
        { name: "Associated Builders", href: "https://www.abc.org/" },
        { name: "MCAA", href: "https://www.mcaa.org/" },
        { name: "AGC of America", href: "https://www.agc.org/" },
        { name: "NAHB", href: "https://www.nahb.org/" },
        { name: "NARI", href: "https://www.nari.org/" },
      ],
    },
    {
      category: "Safety & Standards",
      links: [
        { name: "OSHA", href: "https://www.osha.gov/" },
        { name: "EPA WaterSense", href: "https://www.epa.gov/watersense" },
        { name: "ICC Codes", href: "https://www.iccsafe.org/" },
        { name: "NSF International", href: "https://www.nsf.org/" },
        { name: "ANSI Standards", href: "https://www.ansi.org/" },
        { name: "ASSE International", href: "https://www.asse-plumbing.org/" },
      ],
    },
    {
      category: "Plumbing Manufacturers",
      links: [
        { name: "Kohler", href: "https://www.kohler.com/" },
        { name: "Moen", href: "https://www.moen.com/" },
        { name: "Delta Faucet", href: "https://www.deltafaucet.com/" },
        { name: "American Standard", href: "https://www.americanstandard.com/" },
        { name: "Rheem Water Heaters", href: "https://www.rheem.com/" },
        { name: "A.O. Smith", href: "https://www.hotwater.com/" },
      ],
    },
    {
      category: "Tools & Equipment",
      links: [
        { name: "Milwaukee Tools", href: "https://www.milwaukeetool.com/" },
        { name: "RIDGID Tools", href: "https://www.ridgid.com/" },
        { name: "DeWalt", href: "https://www.dewalt.com/" },
        { name: "Makita", href: "https://www.makitatools.com/" },
        { name: "Viega", href: "https://www.viega.us/" },
      ],
    },
    {
      category: "Local Resources",
      links: [
        { name: "San Bernardino County", href: "https://www.sbcounty.gov/" },
        { name: "Riverside County", href: "https://www.rivco.org/" },
        { name: "San Diego County", href: "https://www.sandiegocounty.gov/" },
        { name: "Orange County", href: "https://www.ocgov.com/" },
        { name: "SoCal Water District", href: "https://www.mwdh2o.com/" },
        { name: "Cal Water", href: "https://www.calwater.com/" },
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="/images/aam-20logo-20.png"
              alt="Above All Maintenance & Repair"
              width={100}
              height={100}
              className="mb-6 transition-transform hover:scale-105"
            />
            <div className="space-y-4">
              <a
                href="tel:951-330-6963"
                className="flex items-center gap-3 text-slate-300 hover:text-[#C29828] transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-[#C29828]/10 group-hover:bg-[#C29828] transition-all duration-300">
                  <Phone className="h-5 w-5 text-[#C29828] group-hover:text-slate-950 transition-all duration-300" />
                </div>
                <span className="font-semibold">951-330-6963</span>
              </a>
              <a
                href="mailto:Frank@aboveallmaintenancerepair.com"
                className="flex items-center gap-3 text-slate-300 hover:text-[#C29828] transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-[#C29828]/10 group-hover:bg-[#C29828] transition-all duration-300">
                  <Mail className="h-5 w-5 text-[#C29828] group-hover:text-slate-950 transition-all duration-300" />
                </div>
                <span className="font-semibold text-sm">Frank@aboveallmaintenancerepair.com</span>
              </a>

              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#C29828]/10 hover:bg-[#C29828] transition-all duration-300 group"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="h-5 w-5 text-[#C29828] group-hover:text-slate-950 transition-all duration-300" />
                  </a>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1075924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <p className="text-[#C29828] font-bold text-lg hover:underline">License #1075924</p>
                  <p className="text-slate-400 text-sm">Bonded & Insured (Click to Verify)</p>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#C29828] transition-all duration-300 hover:translate-x-1 inline-block font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Hours of Operation</h3>
            <div className="mb-6">
              <p className="text-[#C29828] font-semibold mb-3 text-sm">Scheduling Hours</p>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>
                  <span className="font-semibold text-slate-200">Mon - Fri:</span> 7:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-slate-200">Sat:</span> 9:00 AM - 5:00 PM
                </p>
                <p>
                  <span className="font-semibold text-slate-200">Sun:</span> Closed
                </p>
              </div>
            </div>
            <div className="p-4 rounded-lg backdrop-blur-md bg-red-500/10 border border-red-500/20">
              <p className="text-red-400 font-bold mb-2 flex items-center gap-2">
                <span className="animate-pulse">🚨</span> Emergency Services
              </p>
              <p className="text-slate-400 text-xs mb-3">Additional Rates Apply</p>
              <p className="text-slate-300 text-sm font-semibold">Nights & Weekends</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Service Areas</h3>
            <p className="text-slate-300 leading-relaxed text-sm mb-4">{serviceAreas.join(", ")}</p>
            <div className="p-4 rounded-lg backdrop-blur-md bg-[#C29828]/10 border border-[#C29828]/20">
              <p className="text-white font-semibold mb-1 text-sm">Serving Southern California</p>
              <p className="text-slate-300 text-xs">
                San Bernardino County, Riverside County, San Diego County, and Orange County
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-12 pb-8">
          <h3 className="text-white font-bold text-lg mb-6">Industry Resources & Associations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {industryLinks.map((section) => (
              <div key={section.category}>
                <h4 className="text-[#C29828] font-semibold text-sm mb-3">{section.category}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#C29828] transition-colors text-xs flex items-center gap-1 group"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 text-center">
          <p className="text-slate-400 mb-4">
            © 2025 Above All Maintenance & Repair. All rights reserved. Serving San Bernardino County, Riverside County,
            San Diego County, and Orange County.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-slate-500 mb-4">
            <span>Member of:</span>
            <a href="https://www.cslb.ca.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">CSLB Licensed</a>
            <span>•</span>
            <a href="https://www.bbb.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">BBB</a>
            <span>•</span>
            <a href="https://www.phccweb.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">PHCC</a>
            <span>•</span>
            <a href="https://www.necanet.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">NECA</a>
            <span>•</span>
            <a href="https://www.iapmo.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">IAPMO</a>
            <span>•</span>
            <a href="https://www.aspe.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">ASPE</a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-slate-500">
            <span>Trusted Partners:</span>
            <a href="https://www.kohler.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">Kohler</a>
            <span>•</span>
            <a href="https://www.moen.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">Moen</a>
            <span>•</span>
            <a href="https://www.rheem.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">Rheem</a>
            <span>•</span>
            <a href="https://www.milwaukeetool.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">Milwaukee</a>
            <span>•</span>
            <a href="https://www.ridgid.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">RIDGID</a>
            <span>•</span>
            <a href="https://www.deltafaucet.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C29828] transition-colors">Delta</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
