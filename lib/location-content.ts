export type PlumbingCitySlug = "menifee" | "riverside" | "perris" | "moreno-valley" | "homeland"

export type PlumbingServiceSlug =
  | "drain-cleaning"
  | "toilet-repair-installation"
  | "emergency-plumbing"
  | "water-heater-installation-repair"

export type FAQItem = {
  question: string
  answer: string
}

export type CapabilityItem = {
  title: string
  description: string
}

export type ProcessStep = {
  title: string
  description: string
}

export type CityContent = {
  slug: PlumbingCitySlug
  name: string
  county: string
  shortDescription: string
  heroSummary: string
  localAngle: string
  nearbyAreas: string[]
  propertyTypes: string[]
  trustPoints: string[]
  ctaTitle: string
  ctaBody: string
}

export type ServiceContent = {
  slug: PlumbingServiceSlug
  name: string
  hubTitle: string
  hubDescription: string
  heroSummary: string
  intro: string
  image: string
  capabilities: CapabilityItem[]
  process: ProcessStep[]
  faqs: FAQItem[]
  quickPoints: string[]
}

export type CityServiceOverride = {
  metaDescription: string
  heroTitle: string
  heroSummary: string
  whyTitle: string
  whyCopy: string
  detailTitle?: string
  detailParagraphs?: string[]
  localProblemsIntro: string
  localProblems: string[]
  warningSignsTitle?: string
  warningSigns?: string[]
  offerTitle: string
  offerBody: string
  proofTitle: string
  proofBody: string
  proofPoints?: string[]
  locationCardBlurb: string
  cityFaqs: FAQItem[]
  ctaTitle: string
  ctaBody: string
}

export const plumbingCities: Record<PlumbingCitySlug, CityContent> = {
  menifee: {
    slug: "menifee",
    name: "Menifee",
    county: "Riverside County",
    shortDescription:
      "Local plumbing pages for Menifee homes, rentals, and commercial properties that need clean scheduling and direct service paths.",
    heroSummary:
      "Licensed plumbing support for fast-growing Menifee neighborhoods, busy households, and property managers who need clear next steps.",
    localAngle:
      "Menifee pages should feel practical and scheduling-friendly. The strongest local angle is fast problem recognition for active homes, move-ins, and repeat maintenance work.",
    nearbyAreas: ["Sun City", "Romoland", "Winchester", "Quail Valley"],
    propertyTypes: ["Single-family neighborhoods", "55+ communities", "Retail and office suites"],
    trustPoints: ["California License #1075924", "Residential and commercial plumbing", "Phone-first scheduling"],
    ctaTitle: "Need plumbing help in Menifee?",
    ctaBody:
      "Use the Menifee city hub to jump straight into drain cleaning, toilet work, emergency plumbing, or water heater service.",
  },
  riverside: {
    slug: "riverside",
    name: "Riverside",
    county: "Riverside County",
    shortDescription:
      "Local plumbing pages for Riverside property owners who need stronger diagnosis, faster triage, and service copy tuned to mixed-age buildings.",
    heroSummary:
      "Licensed plumbing support across Riverside for older homes, apartments, restaurants, offices, and urgent plumbing repair calls.",
    localAngle:
      "Riverside needs a more diagnosis-heavy message. Mixed-age plumbing systems and higher urgency service calls make clarity and repair planning important here.",
    nearbyAreas: ["Downtown Riverside", "Canyon Crest", "Orangecrest", "Arlington"],
    propertyTypes: ["Older single-family homes", "Apartments and rentals", "Restaurants and offices"],
    trustPoints: ["California License #1075924", "Residential and commercial plumbing", "Fast call-first response"],
    ctaTitle: "Need plumbing service in Riverside?",
    ctaBody:
      "Use the Riverside city hub to go straight to the plumbing issue you are dealing with and skip broad service-page browsing.",
  },
  perris: {
    slug: "perris",
    name: "Perris",
    county: "Riverside County",
    shortDescription:
      "Local plumbing pages for Perris customers who want direct service pages with practical offers, clear scope, and scheduling that matches larger-lot properties.",
    heroSummary:
      "Licensed plumbing support for Perris homes, service properties, and small commercial spaces that need reliable repairs and straightforward communication.",
    localAngle:
      "Perris pages should emphasize practical solutions, dependable scheduling, and plumbing support that fits larger homesites and busy family routines.",
    nearbyAreas: ["North Perris", "Mead Valley", "Lake Mathews", "Nuevo"],
    propertyTypes: ["Family homes", "Larger residential lots", "Small commercial and light industrial sites"],
    trustPoints: ["California License #1075924", "Residential and commercial plumbing", "Clear scope before work starts"],
    ctaTitle: "Need a plumber in Perris?",
    ctaBody:
      "Use the Perris city hub to choose the right plumbing page fast and move from a symptom to a real service conversation.",
  },
  "moreno-valley": {
    slug: "moreno-valley",
    name: "Moreno Valley",
    county: "Riverside County",
    shortDescription:
      "Local plumbing pages for Moreno Valley households, rentals, and commercial sites that need faster triage and cleaner city-specific service copy.",
    heroSummary:
      "Licensed plumbing support across Moreno Valley for high-use residential plumbing, rental turnovers, and time-sensitive repair work.",
    localAngle:
      "Moreno Valley pages should prioritize speed, reliability, and problem recognition for households and properties with heavier daily plumbing use.",
    nearbyAreas: ["Sunnymead Ranch", "Rancho Belago", "Box Springs", "Edgemont"],
    propertyTypes: ["Family homes", "Multifamily rentals", "Retail and service properties"],
    trustPoints: ["California License #1075924", "Residential and commercial plumbing", "Fast scheduling paths"],
    ctaTitle: "Need plumbing service in Moreno Valley?",
    ctaBody:
      "Use the Moreno Valley city hub to pick the exact plumbing issue you need handled and get to the right service page immediately.",
  },
  homeland: {
    slug: "homeland",
    name: "Homeland",
    county: "Riverside County",
    shortDescription:
      "Local plumbing pages for Homeland customers who need dependable service pages built around semi-rural properties, reliability, and clean repair planning.",
    heroSummary:
      "Licensed plumbing support for Homeland homes and service properties that need dependable repairs, clear recommendations, and no wasted steps.",
    localAngle:
      "Homeland pages should emphasize reliability, complete diagnosis, and plumbing fixes that make sense for semi-rural properties and longer plumbing runs.",
    nearbyAreas: ["Romoland", "Green Acres", "Nuevo", "Menifee border"],
    propertyTypes: ["Ranch-style homes", "Manufactured homes", "Small local businesses"],
    trustPoints: ["California License #1075924", "Residential and commercial plumbing", "Repair-first communication"],
    ctaTitle: "Need a plumber in Homeland?",
    ctaBody:
      "Use the Homeland city hub to move straight to drain, toilet, emergency, or water heater service without digging through generic copy.",
  },
}

export const plumbingServices: Record<PlumbingServiceSlug, ServiceContent> = {
  "drain-cleaning": {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    hubTitle: "Drain Cleaning Services",
    hubDescription:
      "Professional drain cleaning for slow drains, stubborn clogs, sewer backups, hydro jetting, and recurring blockage diagnosis across Southern California.",
    heroSummary:
      "Clear the blockage, diagnose why it keeps coming back, and protect the line before a slow drain turns into a backup. Above All handles fixture drains, branch lines, and main line problems for homes and commercial properties across Southern California.",
    intro:
      "This page is the main service hub for drain cleaning. It is where visitors should understand the difference between a simple fixture clog, a recurring line problem, and a main line backup before they move into a city-specific page. The message needs to make it clear that Above All is not just snaking drains at random. The value is in recognizing the symptom, choosing the right clearing method, and explaining whether the customer needs a maintenance fix, a camera inspection, or a larger repair plan.",
    image: "/plumber-fixing-pipe-leak-under-sink.jpg",
    capabilities: [
      {
        title: "Kitchen and bathroom drain clearing",
        description:
          "Clear sinks, tubs, showers, floor drains, and utility drains that are running slow, fully clogged, or backing up into the space.",
      },
      {
        title: "Main line stoppage diagnosis",
        description:
          "Determine whether the problem is limited to one fixture, one branch line, or the building’s larger drainage system before recommending the next step.",
      },
      {
        title: "Hydro jetting",
        description:
          "Use high-pressure cleaning when grease, sludge, scale, or recurring buildup needs a deeper line cleaning than basic cable work can provide.",
      },
      {
        title: "Camera inspections",
        description:
          "Inspect the drain or sewer line when the same symptoms keep returning and the customer needs a better answer before approving repair work.",
      },
      {
        title: "Recurring clog troubleshooting",
        description:
          "Move beyond the temporary unclog and identify the usage pattern, line condition, or blockage source that keeps creating the same problem.",
      },
      {
        title: "Commercial drain service",
        description:
          "Handle restroom, break room, kitchen, and service-area drains when backups or slow flow begin affecting staff, customers, or building operations.",
      },
    ],
    process: [
      {
        title: "Inspect the blockage",
        description:
          "Start by identifying whether the symptom is fixture-specific, shared across multiple drains, or connected to a deeper main line issue.",
      },
      {
        title: "Clear the line safely",
        description:
          "Use the right method for the actual problem, whether that means fixture clearing, line cleaning, or deeper work such as hydro jetting or camera inspection.",
      },
      {
        title: "Recommend the next move",
        description:
          "Explain what was found, what was cleared, and whether the customer should plan for maintenance, further inspection, or pipe repair.",
      },
    ],
    faqs: [
      {
        question: "Do you handle recurring drain clogs?",
        answer:
          "Yes. Recurring clogs are usually a sign that the line needs more than a quick surface-level clearing. We focus on what is causing the repeat failure so the same drain is not clogging again a week later.",
      },
      {
        question: "Is hydro jetting always necessary?",
        answer:
          "No. Some drains can be handled with standard clearing, while others need heavier cleaning because the line has grease, scale, or recurring buildup. Hydro jetting is a tool, not the automatic answer for every clog.",
      },
      {
        question: "Can you inspect the line before bigger repairs?",
        answer:
          "Yes. Camera inspections are one of the best ways to confirm whether the issue is buildup, roots, scale, offset pipe sections, or other line damage before moving into larger repair recommendations.",
      },
      {
        question: "Do you handle drain cleaning for commercial properties?",
        answer:
          "Yes. We handle drain issues for homes and commercial properties, including restrooms, break rooms, service sinks, and other plumbing that affects day-to-day operations.",
      },
    ],
    quickPoints: ["Slow or backed-up drains", "Recurring clog diagnosis", "Hydro jetting when needed", "Camera inspections before bigger repairs"],
  },
  "toilet-repair-installation": {
    slug: "toilet-repair-installation",
    name: "Toilet Repair & Installation",
    hubTitle: "Toilet Repair & Installation",
    hubDescription:
      "Toilet repair and installation for leaks, running toilets, repeated clogs, weak flushes, fixture upgrades, and commercial restroom replacements.",
    heroSummary:
      "Fix leaking, running, rocking, weak-flushing, or repeatedly clogged toilets and install clean replacement fixtures when repair is no longer the best value. Above All handles residential bathrooms, rentals, and commercial restrooms.",
    intro:
      "This page is the main service hub for toilet repair and toilet installation. It should help visitors quickly figure out whether they are dealing with a basic repair, a leak at the base, a recurring clog problem, or a fixture that is simply ready to be replaced. The copy needs to reassure the customer that Above All can handle both the repair-first path and the replacement path without forcing them into a bigger bathroom project than they actually need.",
    image: "/plumber-fixing-pipe-leak-under-sink.jpg",
    capabilities: [
      {
        title: "Running toilet repair",
        description:
          "Repair fill valves, flappers, supply issues, and worn internal tank parts that cause constant running, phantom flushing, or water waste.",
      },
      {
        title: "Toilet clog removal",
        description:
          "Clear fixture-level stoppages and determine whether the repeated clog is coming from the toilet itself or from the connected drain line.",
      },
      {
        title: "Leak and wax ring repair",
        description:
          "Stop leaks at the base, supply line, shutoff, tank bolts, or internal connections before moisture turns into flooring or subfloor damage.",
      },
      {
        title: "New toilet installation",
        description:
          "Install replacement or upgraded toilets with proper sealing, alignment, shutoff testing, and a clean finished setup.",
      },
      {
        title: "Commercial restroom fixture replacement",
        description:
          "Replace worn, unreliable, or damaged restroom fixtures in customer-facing or staff restrooms with minimal disruption to the property.",
      },
      {
        title: "Water-saving upgrades",
        description:
          "Upgrade older toilets to newer, more efficient models when the existing fixture is using too much water or repeatedly failing.",
      },
    ],
    process: [
      {
        title: "Confirm repair or replacement needs",
        description:
          "Check the toilet condition, leak source, clog history, and installation quality before deciding whether a repair or replacement is the better move.",
      },
      {
        title: "Repair or replace cleanly",
        description:
          "Complete the repair or installation with the proper seal, connection hardware, alignment, and flush testing so the fixture is stable and dependable.",
      },
      {
        title: "Verify flush and finish",
        description:
          "Confirm leak-free performance, proper flushing, shutoff response, and a clean final setup before the job is closed out.",
      },
    ],
    faqs: [
      {
        question: "Should I repair or replace my toilet?",
        answer:
          "If the problem is limited to internal parts, a shutoff, or a simple seal issue, repair often makes sense. If the toilet is older, cracked, poorly seated, or failing repeatedly, replacement is often the better long-term value.",
      },
      {
        question: "Can you install customer-supplied toilets?",
        answer:
          "Yes. We can install customer-supplied toilets as long as the fixture is the right fit for the space, rough-in, and plumbing setup.",
      },
      {
        question: "Do you work on commercial restroom toilets?",
        answer:
          "Yes. We handle both residential and commercial restroom toilet repairs, replacements, and fixture updates.",
      },
      {
        question: "Can a toilet leak at the base without needing a full replacement?",
        answer:
          "Yes. A base leak can come from the seal, flange condition, loose mounting, or the toilet body itself. We inspect that before recommending replacement.",
      },
    ],
    quickPoints: ["Running and leaking toilets", "Repair-versus-replace guidance", "New toilet installation", "Commercial restroom fixture work"],
  },
  "emergency-plumbing": {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    hubTitle: "Emergency Plumbing Services",
    hubDescription:
      "Emergency plumbing response for burst pipes, active leaks, drain backups, overflowing toilets, shutoff failures, and urgent water heater problems.",
    heroSummary:
      "When water is actively leaking, a toilet is overflowing, a drain line is backing up, or a water heater has failed, the goal is simple: stop the damage, stabilize the system, and move into the cleanest repair path as fast as possible.",
    intro:
      "This page is the main service hub for emergency plumbing. It should make it obvious what counts as an actual plumbing emergency, what a customer can safely do before help arrives, and how Above All approaches urgent calls. The page needs to feel immediate and useful, not dramatic for the sake of drama. The value is fast triage, damage control, and a clear path from emergency symptom to repair plan.",
    image: "/emergency-plumbing-service-call.jpg",
    capabilities: [
      {
        title: "Burst pipe response",
        description:
          "Respond quickly to active pipe failures that threaten walls, cabinets, flooring, ceilings, or daily building operations.",
      },
      {
        title: "Leak triage",
        description:
          "Identify the leak source, control the water if possible, and determine whether the repair can be completed immediately or staged safely.",
      },
      {
        title: "Overflowing toilet emergencies",
        description:
          "Handle overflowing toilet situations and verify whether the problem is limited to the fixture or tied to a larger branch or main line blockage.",
      },
      {
        title: "Drain and sewer backups",
        description:
          "Address drain and sewer backup conditions that make bathrooms, kitchens, tenant spaces, or service areas unusable.",
      },
      {
        title: "Water shutoff troubleshooting",
        description:
          "Help when the main shutoff, angle stop, or fixture isolation valve is not behaving the way it should during an urgent plumbing problem.",
      },
      {
        title: "Urgent water heater issues",
        description:
          "Respond when a leaking, failed, or unsafe water heater needs immediate attention to limit downtime or property damage.",
      },
    ],
    process: [
      {
        title: "Call and triage",
        description:
          "Triage the call quickly so the response matches the real risk level, the visible symptom, and the likelihood of property damage.",
      },
      {
        title: "Stop damage first",
        description:
          "Focus first on stopping or reducing active damage by isolating the plumbing issue, limiting water spread, and protecting the area where possible.",
      },
      {
        title: "Repair or stage the next step",
        description:
          "Complete the repair if the situation allows, or set up the cleanest and safest follow-up path if the emergency reveals a larger underlying issue.",
      },
    ],
    faqs: [
      {
        question: "What counts as a plumbing emergency?",
        answer:
          "Active leaks, burst pipes, backups, overflowing toilets, loss of shutoff control, and leaking or failed water heaters that threaten damage or loss of function are common emergency situations.",
      },
      {
        question: "Do you offer after-hours response?",
        answer:
          "Yes. Emergency plumbing response is available for situations that cannot reasonably wait for standard scheduling without risking more damage or major loss of use.",
      },
      {
        question: "What should I do before the plumber arrives?",
        answer:
          "If it is safe, shut off the local or main water supply, stop using the affected fixtures, clear valuables out of the wet area, and document the visible problem for faster triage.",
      },
      {
        question: "Can you help even if I am not sure the problem is a true emergency?",
        answer:
          "Yes. We can help you triage the symptom by phone and decide whether the issue needs immediate service or can be scheduled normally.",
      },
    ],
    quickPoints: ["Burst pipes and active leaks", "Overflows and backups", "After-hours emergency response", "Immediate damage-control triage"],
  },
  "water-heater-installation-repair": {
    slug: "water-heater-installation-repair",
    name: "Water Heater Installation & Repair",
    hubTitle: "Water Heater Installation & Repair",
    hubDescription:
      "Water heater repair, replacement, and installation for no hot water, leaking units, weak recovery, and tankless troubleshooting across Southern California.",
    heroSummary:
      "Restore reliable hot water, stop leaks before they spread, and make the right call on repair versus replacement. Above All handles standard tank units, tankless systems, and installation planning for homes and commercial properties.",
    intro:
      "This page is the main service hub for water heater repair and water heater installation. It should help visitors understand whether they are dealing with a repairable issue, an aging unit that is nearing replacement, or an urgent leak that needs immediate attention. The page needs to feel grounded and practical. Customers are usually looking for a fast answer on how to get reliable hot water back without overpaying for the wrong fix.",
    image: "/emergency-plumbing-service-call.jpg",
    capabilities: [
      {
        title: "Tank water heater repair",
        description:
          "Handle common tank water heater issues such as no hot water, slow recovery, pilot problems, thermostat concerns, and leaking fittings or valves.",
      },
      {
        title: "Tankless water heater service",
        description:
          "Troubleshoot tankless water heater performance problems, ignition issues, inconsistent temperatures, and other reliability complaints.",
      },
      {
        title: "Water heater replacement",
        description:
          "Replace failing or aging units when repair no longer makes sense financially or when the existing unit is no longer dependable.",
      },
      {
        title: "New water heater installation",
        description:
          "Install properly sized water heaters for homes, rentals, and light commercial applications with clean setup and system testing.",
      },
      {
        title: "Safety and shutoff component updates",
        description:
          "Address valves, expansion components, shutoffs, and related connection issues that affect safe and reliable operation.",
      },
      {
        title: "Performance diagnosis",
        description:
          "Check the system carefully before recommending replacement so the next step is based on the real failure point, not guesswork.",
      },
    ],
    process: [
      {
        title: "Evaluate the system",
        description:
          "Review the unit age, visible condition, symptom pattern, and the property’s hot water demand before recommending repair or replacement.",
      },
      {
        title: "Repair or recommend replacement",
        description:
          "Choose the cleanest path based on the actual failure, the urgency of the situation, and whether the existing unit is still worth saving.",
      },
      {
        title: "Install, test, and confirm",
        description:
          "Verify safe startup, proper hot water delivery, connection integrity, and a clean final handoff before the job is complete.",
      },
    ],
    faqs: [
      {
        question: "Should I repair or replace my water heater?",
        answer:
          "That depends on the unit age, the exact failure point, the leak risk, and whether the repair would actually extend reliable service. We assess those factors before pushing replacement.",
      },
      {
        question: "Do you work on tank and tankless systems?",
        answer:
          "Yes. We work on both standard tank water heaters and tankless systems.",
      },
      {
        question: "How long does installation take?",
        answer:
          "Many water heater replacements can be completed the same day once the system fit and scope are confirmed, though exact timing depends on access, setup, and whether related plumbing updates are needed.",
      },
      {
        question: "Can you help if the unit still works but hot water does not last?",
        answer:
          "Yes. Weak recovery, inconsistent temperature, or short hot-water duration are all valid reasons to inspect the system before it turns into a complete failure.",
      },
    ],
    quickPoints: ["No hot water diagnosis", "Tank and tankless repair", "Leaking-unit triage", "Repair-versus-replacement guidance"],
  },
}

export const cityServiceOverrides: Record<
  PlumbingCitySlug,
  Record<PlumbingServiceSlug, CityServiceOverride>
> = {
  menifee: {
    "drain-cleaning": {
      metaDescription:
        "Drain cleaning in Menifee, CA for slow drains, recurring clogs, hydro jetting, and main line troubleshooting.",
      heroTitle: "Drain Cleaning in Menifee, CA",
      heroSummary:
        "Fast drain cleaning for Menifee kitchens, bathrooms, laundry lines, and main drains when clogs keep coming back, water starts backing up, or a slow line is turning into a bigger plumbing problem.",
      whyTitle: "Why Menifee customers call us for drain cleaning",
      whyCopy:
        "Menifee drain calls are often tied to busy households where a slow kitchen sink, shower drain, or main line problem goes from manageable to disruptive fast. The page needs to help people recognize when this is just a simple clog and when it is a recurring drain issue that deserves a better diagnosis.",
      detailTitle: "What drain-cleaning calls look like in Menifee homes",
      detailParagraphs: [
        "In Menifee, drain-cleaning calls are often driven by daily household volume. A family may be dealing with back-to-back kitchen use, repeated bathroom traffic, and a laundry line that is already starting to slow down. By the time they search for help, they are not really looking for generic plumbing content. They want to know whether the line can be cleared cleanly and whether the clog is likely to come right back.",
        "That is why this page needs stronger context than a basic clogged-drain pitch. It should speak directly to repeat slowdowns, drain odors, gurgling fixtures, and the type of backup symptoms that show up before a true main line problem fully takes over the house. Menifee customers should leave the page feeling like they understand both the symptom and the next move.",
        "It should also make clear that Above All handles both the immediate clearing work and the deeper diagnostic path when the same drain issue keeps returning. That is the difference between a page that simply lists services and a page that actually helps convert the right local customer.",
      ],
      localProblemsIntro: "Common Menifee drain issues this page is built around:",
      localProblems: [
        "Kitchen drains that slow down after high household use",
        "Shower and tub drains that clog again after basic clearing",
        "Guest bathroom stoppages that spread to more than one fixture",
        "Main line symptoms that need camera inspection before the problem grows",
      ],
      warningSignsTitle: "When Menifee homeowners usually stop waiting and call",
      warningSigns: [
        "More than one drain is starting to slow down at the same time",
        "The same kitchen or shower drain works for a few days and then clogs again",
        "There is standing water, bubbling, or odor coming back after a temporary clearing",
        "A toilet flush starts affecting a nearby shower, tub, or sink",
      ],
      offerTitle: "Menifee drain-cleaning emphasis",
      offerBody:
        "This page leans into fast scheduling, recurring-clog diagnosis, and the ability to explain whether the customer needs a simple clearing, hydro jetting, or a camera inspection before the line becomes a bigger repair issue.",
      proofTitle: "Built for high-use residential plumbing",
      proofBody:
        "The Menifee version of this page is written for busy homes, move-ins, and routine maintenance situations where repeated drain issues quickly become a household disruption instead of a minor inconvenience.",
      proofPoints: [
        "Written around active family-home usage, not generic commercial-only drain copy",
        "Explains the difference between a one-time clog and a deeper recurring-line issue",
        "Supports the handoff from local search intent into direct scheduling",
      ],
      locationCardBlurb: "Drain cleaning for repeat clogs, slow drains, and main line backups in Menifee.",
      cityFaqs: [
        {
          question: "Can you help with repeat kitchen drain problems in Menifee?",
          answer:
            "Yes. Repeating kitchen clogs usually need more than a one-time clearing, so we focus on why the line is slowing down and what level of cleaning makes sense.",
        },
        {
          question: "Do Menifee main line issues always need a camera inspection?",
          answer:
            "Not always, but a camera becomes useful when the clog keeps returning or more than one drain is affected.",
        },
      ],
      ctaTitle: "Need drain cleaning in Menifee?",
      ctaBody: "Call now for direct scheduling and move from symptoms to a real drain-cleaning plan without extra browsing.",
    },
    "toilet-repair-installation": {
      metaDescription:
        "Toilet repair and installation in Menifee, CA for leaks, weak flushes, clog issues, fixture upgrades, and replacements.",
      heroTitle: "Toilet Repair & Installation in Menifee, CA",
      heroSummary:
        "Fix leaking, running, clogged, or outdated toilets in Menifee homes and properties with repair-first guidance and clean replacement options.",
      whyTitle: "Why Menifee customers call us for toilet work",
      whyCopy:
        "Menifee toilet calls usually need a fast answer on whether the fixture should be repaired or replaced. This page is built to make that decision clear quickly.",
      localProblemsIntro: "Common Menifee toilet issues this page is designed for:",
      localProblems: [
        "Running toilets that quietly waste water every day",
        "Leak complaints around the base after recent fixture wear",
        "Repeated toilet clogs in busy family homes",
        "Move-in replacement needs when older fixtures are ready to go",
      ],
      offerTitle: "Menifee toilet-service emphasis",
      offerBody:
        "This page puts repair-or-replace clarity first, which fits Menifee households that want a practical fix without turning a simple toilet issue into a long project.",
      proofTitle: "Strong fit for fixture refreshes and fast repairs",
      proofBody:
        "Menifee properties often need clean toilet repairs, leak fixes, and straightforward replacement work that can be scheduled without a larger remodel.",
      locationCardBlurb: "Toilet repair and toilet installation for leaks, clogs, and fixture upgrades in Menifee.",
      cityFaqs: [
        {
          question: "Can you replace older toilets during a Menifee move-in or refresh?",
          answer:
            "Yes. We can remove the older unit, install the new fixture, test it, and make sure the setup is sealed and working correctly.",
        },
        {
          question: "Do you fix toilets that run but still flush fine?",
          answer:
            "Yes. A toilet can flush normally and still waste water because of a worn tank component, flapper, or fill-valve issue.",
        },
      ],
      ctaTitle: "Need toilet repair in Menifee?",
      ctaBody: "Call now to get a fast answer on repair versus replacement and schedule the right toilet service for your property.",
    },
    "emergency-plumbing": {
      metaDescription:
        "Emergency plumbing in Menifee, CA for burst pipes, active leaks, overflowing toilets, drain backups, and urgent water heater problems.",
      heroTitle: "Emergency Plumbing in Menifee, CA",
      heroSummary:
        "Urgent plumbing response for Menifee leaks, backups, shutoff issues, and failures that cannot wait until routine scheduling.",
      whyTitle: "Why Menifee customers call us for emergency plumbing",
      whyCopy:
        "The Menifee emergency page is written for fast triage. Visitors usually know they need immediate help and want a direct path to the phone number, not a broad service menu.",
      localProblemsIntro: "Common Menifee emergency plumbing calls include:",
      localProblems: [
        "Active leaks under sinks or behind fixtures",
        "Overflowing toilets that interrupt the whole home",
        "Main line backups affecting multiple drains",
        "Water heater failures that leave the property with no hot water",
      ],
      offerTitle: "Menifee emergency-service emphasis",
      offerBody:
        "This page stays aggressive on call-first conversion, with city-specific copy tuned to households that need help now and do not want to sort through non-urgent service content.",
      proofTitle: "Built for urgent home-service decisions",
      proofBody:
        "Menifee emergency visitors are usually making fast decisions from a phone. The page keeps the message direct and centered on immediate plumbing problems.",
      locationCardBlurb: "Emergency plumbing response for leaks, backups, and urgent failures in Menifee.",
      cityFaqs: [
        {
          question: "What should I do if a Menifee toilet starts overflowing?",
          answer:
            "If it is safe, shut off the local valve behind the toilet and stop use immediately while you call for service.",
        },
        {
          question: "Can you help if I am not sure whether the Menifee leak is an emergency?",
          answer:
            "Yes. We can help triage the symptoms by phone so you know whether the issue needs immediate plumbing service.",
        },
      ],
      ctaTitle: "Need an emergency plumber in Menifee?",
      ctaBody: "Call now for urgent plumbing triage and the fastest path to help.",
    },
    "water-heater-installation-repair": {
      metaDescription:
        "Water heater repair and installation in Menifee, CA for no hot water, leaking tanks, tankless issues, and replacement planning.",
      heroTitle: "Water Heater Installation & Repair in Menifee, CA",
      heroSummary:
        "Repair or replace Menifee water heaters when hot water drops out, the unit starts leaking, recovery can no longer keep up with daily use, or the system is becoming too unreliable to ignore.",
      whyTitle: "Why Menifee customers call us for water heater service",
      whyCopy:
        "Menifee water heater calls usually come from households that need a quick answer on reliability. The page should help people understand whether they are dealing with a repairable issue, a unit that is wearing out, or a replacement decision that should be made before the system fails completely.",
      detailTitle: "What water-heater problems look like in Menifee",
      detailParagraphs: [
        "For many Menifee homes, the water heater issue starts as weak recovery rather than total failure. Hot water runs out sooner, the shower temperature drops inconsistently, or a unit that used to keep up with the household no longer matches daily demand. Those are strong conversion signals because the customer is already feeling the disruption even if the system technically still works.",
        "The second group of calls comes from visible leak risk. Customers notice moisture around the unit, a leaking fitting, rust signs, or a tank that is clearly becoming less trustworthy. At that point the page needs to help them move quickly without overselling panic. The goal is to explain why some water heater issues can be repaired while others need a cleaner replacement path.",
        "This local page also has to work for customers planning around move-ins, tenant turnover, or proactive home updates. In Menifee, that means writing for both urgent no-hot-water calls and the quieter replacement decisions where the customer wants a dependable system in place before it becomes an emergency.",
      ],
      localProblemsIntro: "Common Menifee water heater problems include:",
      localProblems: [
        "Hot water running out too quickly in active households",
        "Leaking tanks or fittings that need immediate attention",
        "Newer homes needing clean replacement planning without guesswork",
        "Tankless systems with inconsistent temperature performance",
      ],
      warningSignsTitle: "Signs the Menifee water heater issue is getting harder to ignore",
      warningSigns: [
        "Hot water runs out much faster than it used to",
        "There is visible moisture, corrosion, or leaking near the unit",
        "The system still runs, but recovery is too weak for normal household use",
        "The customer is trying to decide whether to replace the unit before a move-in, turnover, or heavier family use",
      ],
      offerTitle: "Menifee water-heater emphasis",
      offerBody:
        "This page puts no-hot-water urgency, leak triage, and repair-versus-replacement clarity front and center so Menifee visitors can decide faster and move into scheduling with less uncertainty.",
      proofTitle: "A strong fit for home comfort and turnover timing",
      proofBody:
        "Menifee customers often need water heater work that fits busy family routines, move-in timelines, and straightforward replacement decisions where reliability matters more than dragging the system along.",
      proofPoints: [
        "Built for real household hot-water demand rather than generic equipment copy",
        "Speaks to repair, leak triage, and proactive replacement in the same local page",
        "Supports both urgent service calls and cleaner scheduled replacement decisions",
      ],
      locationCardBlurb: "Water heater repair and replacement for no hot water, leaks, and tankless issues in Menifee.",
      cityFaqs: [
        {
          question: "Can you help if my Menifee water heater still works but recovery is getting weak?",
          answer:
            "Yes. Slower recovery is a valid reason to inspect the unit before it turns into a full no-hot-water failure.",
        },
        {
          question: "Do you install replacement water heaters for Menifee move-ins or remodel prep?",
          answer:
            "Yes. We handle replacement installs when customers want a fresh unit in place before heavier daily use begins.",
        },
      ],
      ctaTitle: "Need water heater service in Menifee?",
      ctaBody: "Call now for repair-versus-replacement guidance and scheduling for your Menifee property.",
    },
  },
  riverside: {
    "drain-cleaning": {
      metaDescription:
        "Drain cleaning in Riverside, CA for clogged drains, slow lines, hydro jetting, sewer camera inspections, and recurring backups.",
      heroTitle: "Drain Cleaning in Riverside, CA",
      heroSummary:
        "Drain cleaning for Riverside homes, apartments, restaurants, and offices dealing with repeat clogs, backups, or drain lines that need real diagnosis.",
      whyTitle: "Why Riverside customers call us for drain cleaning",
      whyCopy:
        "Riverside drain problems often need more diagnosis before the right fix becomes obvious. This page puts recurring-clog troubleshooting and line assessment up front.",
      localProblemsIntro: "Common Riverside drain issues this page is designed around:",
      localProblems: [
        "Older drain lines that clog again after basic clearing",
        "Restaurant and office drain complaints that disrupt operations",
        "Multiple fixtures backing up in mixed-age properties",
        "Main line problems that need camera verification before repair planning",
      ],
      offerTitle: "Riverside drain-cleaning emphasis",
      offerBody:
        "This page focuses on stronger diagnosis, recurring-line issues, and commercial as well as residential drain trouble so Riverside visitors can reach the right path faster.",
      proofTitle: "Built for mixed-age plumbing systems",
      proofBody:
        "Riverside service copy needs to handle older lines, heavier commercial use, and repeat clog patterns that are not solved by surface-level unclogging alone.",
      locationCardBlurb: "Drain cleaning for older lines, repeat clogs, and sewer troubleshooting in Riverside.",
      cityFaqs: [
        {
          question: "Do Riverside drain issues often need more than a standard unclog?",
          answer:
            "They can. When the line is older or the problem keeps coming back, a deeper cleaning or camera inspection may be the better next step.",
        },
        {
          question: "Can you handle drain cleaning for Riverside restaurants or offices?",
          answer:
            "Yes. We handle residential and commercial drain service where backups or slow drainage interrupt normal use.",
        },
      ],
      ctaTitle: "Need drain cleaning in Riverside?",
      ctaBody: "Call now to move from repeat drain symptoms to a clearer diagnosis and the right cleaning path.",
    },
    "toilet-repair-installation": {
      metaDescription:
        "Toilet repair and installation in Riverside, CA for leaks, running toilets, repeated clogs, and restroom fixture replacement.",
      heroTitle: "Toilet Repair & Installation in Riverside, CA",
      heroSummary:
        "Repair or replace toilets in Riverside homes, rentals, restaurants, and offices when leaks, clogs, or worn fixtures start creating daily problems.",
      whyTitle: "Why Riverside customers call us for toilet work",
      whyCopy:
        "Riverside toilet calls often need stronger troubleshooting because the fixture problem may overlap with older shutoffs, worn supply components, or drain-line issues.",
      localProblemsIntro: "Common Riverside toilet issues this page is built for:",
      localProblems: [
        "Older fixtures with recurring internal tank failures",
        "Toilet leaks that spread into older flooring or finish materials",
        "Commercial restroom units that need replacement with minimal downtime",
        "Repeated clogs where the branch line may be part of the issue",
      ],
      offerTitle: "Riverside toilet-service emphasis",
      offerBody:
        "This page gives Riverside visitors a direct repair-versus-replace path and clearer copy around older fixtures and multi-use restroom demands.",
      proofTitle: "Strong fit for older homes and active restrooms",
      proofBody:
        "Riverside properties often need more than a basic parts swap. The page is built to support older fixtures, higher-use restrooms, and cleaner replacement planning.",
      locationCardBlurb: "Toilet repair and toilet installation for older fixtures, leaks, and restroom upgrades in Riverside.",
      cityFaqs: [
        {
          question: "Can you replace an older Riverside toilet without a full bathroom remodel?",
          answer:
            "Yes. Toilet replacement can usually be handled as a focused plumbing job when the surrounding floor and connection points are still in workable condition.",
        },
        {
          question: "Do you troubleshoot whether a Riverside toilet clog is really a drain-line issue?",
          answer:
            "Yes. If clogs keep returning, we look beyond the fixture so the same problem does not keep coming back.",
        },
      ],
      ctaTitle: "Need toilet repair in Riverside?",
      ctaBody: "Call now for a cleaner repair-versus-replacement decision and faster toilet service in Riverside.",
    },
    "emergency-plumbing": {
      metaDescription:
        "Emergency plumbing in Riverside, CA for burst pipes, active leaks, drain backups, shutoff problems, and urgent plumbing calls.",
      heroTitle: "Emergency Plumbing in Riverside, CA",
      heroSummary:
        "Urgent plumbing response for Riverside leaks, burst pipes, backups, shutoff failures, overflowing fixtures, and other plumbing problems that need fast triage across homes, rentals, and commercial properties.",
      whyTitle: "Why Riverside customers call us for emergency plumbing",
      whyCopy:
        "Riverside emergency calls often come from mixed-age properties where one visible symptom can point to a larger plumbing problem behind the walls, under the slab, or somewhere deeper in the drain system. The page needs to support urgency without losing the sense of professional triage.",
      detailTitle: "Why Riverside emergency pages need more depth",
      detailParagraphs: [
        "Riverside is not just a simple city-name overlay for emergency plumbing. The local mix of older homes, apartments, restaurants, and office properties means the emergency page has to account for more than one kind of urgent call. A burst supply line in an older home, a restroom overflow in a commercial space, and a drain backup affecting multiple units all create different decision points even if they all feel urgent in the moment.",
        "That is why this page needs stronger context than a generic after-hours plumbing pitch. It should show that Above All understands how emergency triage works in Riverside: stop the immediate damage, isolate the risk, figure out whether the issue is local or system-wide, and then move into the cleanest repair path available.",
        "The page also has to reassure the customer that calling now is reasonable even if they are not fully sure what failed. Emergency plumbing pages convert best when they reduce uncertainty. In Riverside, that means explaining what counts as urgent, what can be stabilized, and why older or mixed-use properties often need a sharper diagnostic eye once the immediate danger is under control.",
      ],
      localProblemsIntro: "Common Riverside emergency plumbing calls include:",
      localProblems: [
        "Burst or leaking supply lines in older sections of the property",
        "Drain backups that affect multiple units or fixtures",
        "Commercial restroom overflows that interrupt operations",
        "Water heater leaks that need immediate shutdown and next-step planning",
      ],
      warningSignsTitle: "What usually turns a Riverside plumbing issue into an emergency call",
      warningSigns: [
        "Water is actively spreading through cabinets, walls, floors, or ceilings",
        "A drain backup is affecting more than one fixture or more than one unit",
        "A shutoff is not behaving the way it should during an active leak",
        "The property cannot use a bathroom, kitchen, or hot-water system safely until the issue is triaged",
      ],
      offerTitle: "Riverside emergency-service emphasis",
      offerBody:
        "This page balances call-first urgency with clearer triage language for Riverside visitors who may be dealing with more complex plumbing conditions, older infrastructure, or higher-risk mixed-use properties.",
      proofTitle: "Built for higher-triage emergency calls",
      proofBody:
        "Riverside emergency service copy needs to handle both simple active leaks and plumbing failures that require a stronger diagnosis before the full repair path is obvious. The page should feel useful to a homeowner, property manager, or commercial operator who needs both urgency and competence.",
      proofPoints: [
        "Written for mixed-age homes, rentals, and commercial properties in Riverside",
        "Supports active-leak triage without oversimplifying bigger plumbing failures",
        "Designed to reduce hesitation when the customer knows something is wrong but not yet exactly where the failure is",
      ],
      locationCardBlurb: "Emergency plumbing response for leaks, burst lines, and urgent backups in Riverside.",
      cityFaqs: [
        {
          question: "Can you help with a Riverside apartment or commercial plumbing emergency?",
          answer:
            "Yes. We handle urgent plumbing problems in residential and commercial properties where the issue cannot wait.",
        },
        {
          question: "If I shut off the water, should I still call for a Riverside emergency visit?",
          answer:
            "Often yes. Turning off the water can stabilize the problem, but the underlying leak, burst section, or backup still needs professional repair planning.",
        },
      ],
      ctaTitle: "Need an emergency plumber in Riverside?",
      ctaBody: "Call now for urgent plumbing triage and a faster path to stabilizing the problem.",
    },
    "water-heater-installation-repair": {
      metaDescription:
        "Water heater repair and installation in Riverside, CA for no hot water, leaking tanks, weak recovery, and tankless system issues.",
      heroTitle: "Water Heater Installation & Repair in Riverside, CA",
      heroSummary:
        "Repair or replace Riverside water heaters when aging systems lose recovery, leak, or stop delivering dependable hot water.",
      whyTitle: "Why Riverside customers call us for water heater service",
      whyCopy:
        "Riverside water heater calls often revolve around older units and replacement planning. This page keeps the copy focused on condition, urgency, and practical next steps.",
      localProblemsIntro: "Common Riverside water heater problems include:",
      localProblems: [
        "Older tanks with declining recovery or visible wear",
        "Leaking water heaters that need immediate triage",
        "Tankless performance issues in higher-demand properties",
        "Replacement decisions where customers want a clear recommendation instead of guesswork",
      ],
      offerTitle: "Riverside water-heater emphasis",
      offerBody:
        "This page is built for Riverside customers who need a stronger diagnosis before replacing a unit and want the repair-versus-replace decision spelled out clearly.",
      proofTitle: "Built for aging equipment and fast replacement calls",
      proofBody:
        "Riverside service copy needs to speak to older water heaters, more varied building ages, and customers who want a confident recommendation before they commit.",
      locationCardBlurb: "Water heater repair and replacement for older units, leaks, and no-hot-water calls in Riverside.",
      cityFaqs: [
        {
          question: "Do older Riverside water heaters usually need replacement instead of repair?",
          answer:
            "Not always, but age matters. We look at the failure point, the unit condition, and whether the repair would meaningfully extend reliable use.",
        },
        {
          question: "Can you help with a leaking Riverside water heater the same day?",
          answer:
            "We can triage the urgency quickly and determine whether repair or replacement is the cleanest path for the situation.",
        },
      ],
      ctaTitle: "Need water heater service in Riverside?",
      ctaBody: "Call now for clear repair-versus-replacement guidance and faster water heater scheduling in Riverside.",
    },
  },
  perris: {
    "drain-cleaning": {
      metaDescription:
        "Drain cleaning in Perris, CA for slow drains, recurring clogs, main line backups, hydro jetting, and line troubleshooting.",
      heroTitle: "Drain Cleaning in Perris, CA",
      heroSummary:
        "Drain cleaning for Perris homes and service properties when sinks, tubs, toilets, or main lines start slowing down or backing up.",
      whyTitle: "Why Perris customers call us for drain cleaning",
      whyCopy:
        "Perris drain-service pages work best when the message stays practical. Visitors usually want a clear path from a slowdown or clog to the right level of cleaning.",
      localProblemsIntro: "Common Perris drain problems this page is built around:",
      localProblems: [
        "Slow kitchen or laundry drains that start interfering with normal routines",
        "Bathroom clogs that return after a quick clearing",
        "Main line backups that affect more than one room",
        "Drain issues where the next step needs to be explained simply and clearly",
      ],
      offerTitle: "Perris drain-cleaning emphasis",
      offerBody:
        "This page keeps the offer straightforward: identify the blockage, clear the line correctly, and explain whether the issue points to a larger repair.",
      proofTitle: "Built for practical, no-nonsense service decisions",
      proofBody:
        "Perris visitors often want a page that gets to the point quickly. The content is built around symptom recognition, line clearing, and direct next steps.",
      locationCardBlurb: "Drain cleaning for slow lines, repeat clogs, and backup symptoms in Perris.",
      cityFaqs: [
        {
          question: "Can you help if my Perris drain only clogs once every few months?",
          answer:
            "Yes. Intermittent clogs still matter, especially when they keep returning in the same fixture or start spreading to nearby drains.",
        },
        {
          question: "Do you explain whether a Perris clog is local or in the main line?",
          answer:
            "Yes. One of the first steps is figuring out whether the problem is isolated or part of a broader drainage issue.",
        },
      ],
      ctaTitle: "Need drain cleaning in Perris?",
      ctaBody: "Call now for direct drain-service scheduling and a cleaner explanation of what the line needs next.",
    },
    "toilet-repair-installation": {
      metaDescription:
        "Toilet repair and installation in Perris, CA for clogs, leaks, running toilets, fixture replacements, and restroom updates.",
      heroTitle: "Toilet Repair & Installation in Perris, CA",
      heroSummary:
        "Repair or replace Perris toilets when leaks, repeated clogs, weak flushes, or worn fixtures start disrupting the property.",
      whyTitle: "Why Perris customers call us for toilet work",
      whyCopy:
        "Perris toilet-service pages should stay simple and direct. Most visitors want to know whether the fixture can be fixed cleanly or if it is time to replace it.",
      localProblemsIntro: "Common Perris toilet issues this page addresses:",
      localProblems: [
        "Running toilets that waste water for too long",
        "Repeated clogs in heavily used bathrooms",
        "Leaks at the base or supply connection",
        "Fixture replacements when the existing toilet is worn out or unreliable",
      ],
      offerTitle: "Perris toilet-service emphasis",
      offerBody:
        "The page is built around clean repair-or-replace decisions, fast leak correction, and straightforward installation work for active homes and service properties.",
      proofTitle: "Built for direct repair-versus-replace decisions",
      proofBody:
        "Perris customers often want a page that cuts through broad plumbing copy and gets straight to whether the toilet should be repaired or swapped out.",
      locationCardBlurb: "Toilet repair and installation for leaks, clogs, and fixture updates in Perris.",
      cityFaqs: [
        {
          question: "Can you replace a Perris toilet if I already bought the new one?",
          answer:
            "Yes. We can install a customer-supplied unit when it fits the space and plumbing setup correctly.",
        },
        {
          question: "Do you fix Perris toilets that leak only around the base?",
          answer:
            "Yes. Base leaks often point to a seal or installation problem that should be handled before floor damage grows.",
        },
      ],
      ctaTitle: "Need toilet repair in Perris?",
      ctaBody: "Call now for direct toilet-service scheduling and a clear answer on repair versus replacement.",
    },
    "emergency-plumbing": {
      metaDescription:
        "Emergency plumbing in Perris, CA for burst pipes, active leaks, overflowing toilets, drain backups, and urgent plumbing failures.",
      heroTitle: "Emergency Plumbing in Perris, CA",
      heroSummary:
        "Urgent plumbing response for Perris leaks, drain backups, overflowing toilets, and hot-water failures that need immediate attention.",
      whyTitle: "Why Perris customers call us for emergency plumbing",
      whyCopy:
        "Perris emergency pages work best when they stay simple and urgent. Customers usually need to know what to do right now and who to call next.",
      localProblemsIntro: "Common Perris emergency plumbing issues include:",
      localProblems: [
        "Active leaks that need the water controlled quickly",
        "Overflowing toilets that shut down bathroom use",
        "Drain backups that affect the home or service property",
        "Water heater failures that need immediate next-step planning",
      ],
      offerTitle: "Perris emergency-service emphasis",
      offerBody:
        "This page focuses on direct triage, immediate call-to-action placement, and simple language for urgent plumbing problems that cannot sit.",
      proofTitle: "Built for fast triage and clear next steps",
      proofBody:
        "Perris emergency visitors generally need the phone number, a quick sense of urgency, and enough guidance to stabilize the situation before service begins.",
      locationCardBlurb: "Emergency plumbing response for leaks, overflows, and urgent plumbing failures in Perris.",
      cityFaqs: [
        {
          question: "Should I call for emergency plumbing in Perris if the leak is small but active?",
          answer:
            "Yes. A small active leak can still damage cabinets, flooring, or walls if it is left alone.",
        },
        {
          question: "Can you help with a Perris backup that only started in one bathroom?",
          answer:
            "Yes. Even a single-bathroom backup can point to a larger drain issue, so it is worth triaging quickly.",
        },
      ],
      ctaTitle: "Need an emergency plumber in Perris?",
      ctaBody: "Call now for urgent plumbing help and fast triage on leaks, overflows, and backup conditions.",
    },
    "water-heater-installation-repair": {
      metaDescription:
        "Water heater repair and installation in Perris, CA for leaking tanks, no hot water, weak recovery, and replacement planning.",
      heroTitle: "Water Heater Installation & Repair in Perris, CA",
      heroSummary:
        "Repair or replace Perris water heaters when the unit leaks, stops heating reliably, or can no longer keep up with everyday use.",
      whyTitle: "Why Perris customers call us for water heater service",
      whyCopy:
        "Perris water heater pages should keep the message practical and decision-oriented. Visitors usually need clarity on urgency and whether repair still makes sense.",
      localProblemsIntro: "Common Perris water heater issues include:",
      localProblems: [
        "No-hot-water situations that need a faster answer",
        "Leaking tanks or fittings that require immediate attention",
        "Older units with weak recovery during regular household use",
        "Replacement decisions where customers want a straightforward recommendation",
      ],
      offerTitle: "Perris water-heater emphasis",
      offerBody:
        "This page keeps the offer simple: diagnose the unit, explain repair-versus-replacement clearly, and move into scheduling without broad plumbing detours.",
      proofTitle: "Built for direct hot-water decisions",
      proofBody:
        "Perris customers often want a direct explanation of whether the unit is worth saving and how quickly a reliable replacement path can happen.",
      locationCardBlurb: "Water heater repair and replacement for leaks, no hot water, and aging units in Perris.",
      cityFaqs: [
        {
          question: "Can you inspect a Perris water heater before I commit to replacement?",
          answer:
            "Yes. We assess the failure, condition, and likely value of repair before recommending the next move.",
        },
        {
          question: "Do you help with Perris water heaters that still heat but leak around fittings?",
          answer:
            "Yes. Fitting or connection leaks should still be checked quickly because they can worsen or point to broader unit wear.",
        },
      ],
      ctaTitle: "Need water heater service in Perris?",
      ctaBody: "Call now for hot-water troubleshooting and a cleaner repair-versus-replace decision in Perris.",
    },
  },
  "moreno-valley": {
    "drain-cleaning": {
      metaDescription:
        "Drain cleaning in Moreno Valley, CA for slow drains, recurring clogs, backups, hydro jetting, and sewer line troubleshooting.",
      heroTitle: "Drain Cleaning in Moreno Valley, CA",
      heroSummary:
        "Drain cleaning for Moreno Valley homes, rentals, and service properties when clogs, odors, or backups interrupt everyday use.",
      whyTitle: "Why Moreno Valley customers call us for drain cleaning",
      whyCopy:
        "Moreno Valley drain-service pages need a faster message because visitors often arrive with active symptoms and want a direct service path without extra friction.",
      localProblemsIntro: "Common Moreno Valley drain issues this page is built around:",
      localProblems: [
        "High-use kitchen and bathroom drains that slow down fast",
        "Recurring clogs in rental or family-home bathrooms",
        "Drain odors that suggest buildup deeper in the line",
        "Main line backup symptoms that need quick diagnosis before they spread",
      ],
      offerTitle: "Moreno Valley drain-cleaning emphasis",
      offerBody:
        "This page prioritizes quick symptom recognition, recurring-clog diagnosis, and clearer next steps for busy households and property operators.",
      proofTitle: "Built for faster residential-service decisions",
      proofBody:
        "Moreno Valley visitors often want to act quickly when drainage affects routine daily use, so the content stays direct and high-conversion without getting thin.",
      locationCardBlurb: "Drain cleaning for slow drains, recurring clogs, and backup symptoms in Moreno Valley.",
      cityFaqs: [
        {
          question: "Can you help with Moreno Valley drain issues in rentals or turnover situations?",
          answer:
            "Yes. Drain problems in rentals still need a clean diagnosis so the next occupant or current tenant does not face the same issue again.",
        },
        {
          question: "Do Moreno Valley repeat clogs always mean a broken pipe?",
          answer:
            "No. Repeat clogs can come from buildup, line condition, or usage patterns, which is why inspection matters before assuming pipe damage.",
        },
      ],
      ctaTitle: "Need drain cleaning in Moreno Valley?",
      ctaBody: "Call now for faster drain-service triage and a clearer path from the symptom to the right cleaning method.",
    },
    "toilet-repair-installation": {
      metaDescription:
        "Toilet repair and installation in Moreno Valley, CA for clogs, leaks, running toilets, fixture changes, and restroom repairs.",
      heroTitle: "Toilet Repair & Installation in Moreno Valley, CA",
      heroSummary:
        "Repair or replace Moreno Valley toilets when leaks, repeated clogs, or aging fixtures start interfering with normal use.",
      whyTitle: "Why Moreno Valley customers call us for toilet work",
      whyCopy:
        "Moreno Valley toilet pages should move fast. Most visitors want a direct answer on whether the toilet can be repaired cleanly or if replacement is the smarter move.",
      localProblemsIntro: "Common Moreno Valley toilet issues this page is built for:",
      localProblems: [
        "Running toilets in high-use family homes",
        "Recurring clogs in shared bathrooms",
        "Leak issues that need quick repair before damage spreads",
        "Fixture swaps for rentals or home updates",
      ],
      offerTitle: "Moreno Valley toilet-service emphasis",
      offerBody:
        "This page centers on fast diagnosis, clean repair work, and straightforward replacement options for properties that cannot sit with an unreliable toilet.",
      proofTitle: "Built for busy household and rental plumbing",
      proofBody:
        "Moreno Valley toilet-service content needs to work for family homes and rentals where fast fixture reliability matters more than broad educational copy.",
      locationCardBlurb: "Toilet repair and installation for leaks, clogs, and fixture swaps in Moreno Valley.",
      cityFaqs: [
        {
          question: "Can you replace toilets in Moreno Valley rentals or turnover schedules?",
          answer:
            "Yes. We can handle focused fixture replacement when a rental or family property needs a dependable toilet installed quickly.",
        },
        {
          question: "Do you troubleshoot repeated Moreno Valley toilet clogs before recommending replacement?",
          answer:
            "Yes. If the issue is coming from the line or install setup, replacing the toilet alone may not solve it.",
        },
      ],
      ctaTitle: "Need toilet repair in Moreno Valley?",
      ctaBody: "Call now for direct toilet-service scheduling and a faster repair-versus-replacement decision.",
    },
    "emergency-plumbing": {
      metaDescription:
        "Emergency plumbing in Moreno Valley, CA for active leaks, burst pipes, overflowing toilets, drain backups, and urgent no-hot-water issues.",
      heroTitle: "Emergency Plumbing in Moreno Valley, CA",
      heroSummary:
        "Urgent plumbing response for Moreno Valley leaks, backups, shutoff failures, and other plumbing emergencies that need immediate action.",
      whyTitle: "Why Moreno Valley customers call us for emergency plumbing",
      whyCopy:
        "Moreno Valley emergency traffic usually needs a clear call-first page. The message stays direct, urgent, and built for phone users who need help now.",
      localProblemsIntro: "Common Moreno Valley emergency plumbing calls include:",
      localProblems: [
        "Active leaks that threaten cabinets, floors, or walls",
        "Overflowing toilets that stop bathroom use immediately",
        "Drain backups that affect family routines or tenants",
        "Water heater failures that remove hot water without warning",
      ],
      offerTitle: "Moreno Valley emergency-service emphasis",
      offerBody:
        "This page is structured around faster mobile conversion and simple urgency language so visitors can move to the phone number without extra navigation.",
      proofTitle: "Built for mobile-first emergency decisions",
      proofBody:
        "Moreno Valley emergency visitors are often on a phone and dealing with immediate property disruption, so the content keeps the path short and obvious.",
      locationCardBlurb: "Emergency plumbing response for leaks, overflows, and urgent failures in Moreno Valley.",
      cityFaqs: [
        {
          question: "If I have an active leak in Moreno Valley, should I shut off the water before calling?",
          answer:
            "If it is safe to do so, yes. Shutting off the water can limit damage while you arrange emergency plumbing help.",
        },
        {
          question: "Can you help with Moreno Valley emergency plumbing in rentals or multifamily units?",
          answer:
            "Yes. We handle urgent plumbing problems in both owner-occupied and managed properties.",
        },
      ],
      ctaTitle: "Need an emergency plumber in Moreno Valley?",
      ctaBody: "Call now for urgent plumbing triage and the fastest path to stabilizing the problem.",
    },
    "water-heater-installation-repair": {
      metaDescription:
        "Water heater repair and installation in Moreno Valley, CA for no hot water, leaking tanks, slow recovery, and tankless troubleshooting.",
      heroTitle: "Water Heater Installation & Repair in Moreno Valley, CA",
      heroSummary:
        "Repair or replace Moreno Valley water heaters when hot water drops out, recovery slows, or the unit begins leaking.",
      whyTitle: "Why Moreno Valley customers call us for water heater service",
      whyCopy:
        "Moreno Valley water heater pages should prioritize urgency and clarity. Most visitors want to know whether the unit can be saved and how fast hot water can come back.",
      localProblemsIntro: "Common Moreno Valley water heater issues include:",
      localProblems: [
        "No-hot-water situations that need fast troubleshooting",
        "Leaking tanks or fittings that cannot sit",
        "Weak recovery in larger or high-use households",
        "Tankless systems with inconsistent hot-water delivery",
      ],
      offerTitle: "Moreno Valley water-heater emphasis",
      offerBody:
        "This page is built around fast hot-water decisions, practical repair-versus-replace guidance, and strong phone-first conversion for urgent water heater calls.",
      proofTitle: "Built for high-use hot-water demands",
      proofBody:
        "Moreno Valley customers often need dependable hot water restored quickly, so the page keeps the message focused on urgency, diagnosis, and clean replacement paths.",
      locationCardBlurb: "Water heater repair and replacement for no hot water, leaks, and weak recovery in Moreno Valley.",
      cityFaqs: [
        {
          question: "Can you help when a Moreno Valley water heater still runs but the hot water does not last?",
          answer:
            "Yes. Reduced recovery or short hot-water duration is a good reason to inspect the unit before a complete failure happens.",
        },
        {
          question: "Do you replace leaking Moreno Valley water heaters when repair is no longer worth it?",
          answer:
            "Yes. If the condition points to replacement, we can explain the cleanest next step and move into scheduling.",
        },
      ],
      ctaTitle: "Need water heater service in Moreno Valley?",
      ctaBody: "Call now for hot-water troubleshooting and clear repair-versus-replacement guidance.",
    },
  },
  homeland: {
    "drain-cleaning": {
      metaDescription:
        "Drain cleaning in Homeland, CA for slow drains, recurring clogs, backups, hydro jetting, and line troubleshooting.",
      heroTitle: "Drain Cleaning in Homeland, CA",
      heroSummary:
        "Drain cleaning for Homeland homes and local properties when clogs return, drains slow down, or main line symptoms start affecting more than one fixture.",
      whyTitle: "Why Homeland customers call us for drain cleaning",
      whyCopy:
        "Homeland drain-service pages need to emphasize dependable diagnosis and practical repair planning. Visitors here usually want the right answer, not just the fastest generic pitch.",
      localProblemsIntro: "Common Homeland drain issues this page addresses:",
      localProblems: [
        "Slow drains that keep coming back after temporary clearing",
        "Bathroom and kitchen clogs in homes with longer plumbing runs",
        "Main line symptoms that need a clearer diagnosis before bigger repair decisions",
        "Drain issues where reliability matters more than a temporary fix",
      ],
      offerTitle: "Homeland drain-cleaning emphasis",
      offerBody:
        "This page leans into dependable diagnosis, line clearing, and next-step planning for customers who want the problem explained clearly and solved cleanly.",
      proofTitle: "Built for reliability-focused drain service",
      proofBody:
        "Homeland visitors often want a steadier service message with less fluff and more clarity around what is happening in the line and what comes next.",
      locationCardBlurb: "Drain cleaning for slow drains, recurring clogs, and main line problems in Homeland.",
      cityFaqs: [
        {
          question: "Can you help if a Homeland drain problem keeps returning after temporary fixes?",
          answer:
            "Yes. Repeat problems usually need a better diagnosis so the cleaning approach matches the real cause of the blockage.",
        },
        {
          question: "Do you explain whether a Homeland drain issue points to larger line work?",
          answer:
            "Yes. We aim to explain when the problem is a simple clog and when it may need a deeper inspection or follow-up repair.",
        },
      ],
      ctaTitle: "Need drain cleaning in Homeland?",
      ctaBody: "Call now for dependable drain-service scheduling and a clearer explanation of what the line needs.",
    },
    "toilet-repair-installation": {
      metaDescription:
        "Toilet repair and installation in Homeland, CA for leaks, clogs, weak flushes, fixture replacements, and toilet upgrades.",
      heroTitle: "Toilet Repair & Installation in Homeland, CA",
      heroSummary:
        "Repair or replace Homeland toilets when leaks, clogs, or aging fixtures start causing repeat frustration and daily disruption.",
      whyTitle: "Why Homeland customers call us for toilet work",
      whyCopy:
        "Homeland toilet-service pages work best when they emphasize reliability and clear recommendations. Visitors usually want to know the cleanest long-term fix.",
      localProblemsIntro: "Common Homeland toilet issues this page is built for:",
      localProblems: [
        "Running toilets that waste water over time",
        "Leak complaints at the base, tank, or shutoff",
        "Repeated clogs where a simple plunger fix is no longer enough",
        "Fixture replacements when the existing toilet has become unreliable",
      ],
      offerTitle: "Homeland toilet-service emphasis",
      offerBody:
        "This page focuses on dependable repair work and clear replacement guidance for customers who want the fixture fixed properly and kept that way.",
      proofTitle: "Built for reliability-first fixture decisions",
      proofBody:
        "Homeland visitors often want a steadier message around durability, proper installation, and whether the toilet is still worth repairing.",
      locationCardBlurb: "Toilet repair and installation for leaks, clogs, and fixture replacements in Homeland.",
      cityFaqs: [
        {
          question: "Can you help me decide whether a Homeland toilet is worth repairing?",
          answer:
            "Yes. We look at the condition, leak source, and frequency of failure before recommending repair or replacement.",
        },
        {
          question: "Do you install new toilets in Homeland homes without turning it into a larger project?",
          answer:
            "Yes. Many toilet replacements can be handled as focused plumbing work when the surrounding conditions are sound.",
        },
      ],
      ctaTitle: "Need toilet repair in Homeland?",
      ctaBody: "Call now for a repair-versus-replace recommendation and dependable toilet service scheduling.",
    },
    "emergency-plumbing": {
      metaDescription:
        "Emergency plumbing in Homeland, CA for active leaks, burst pipes, overflowing toilets, backups, and urgent plumbing failures.",
      heroTitle: "Emergency Plumbing in Homeland, CA",
      heroSummary:
        "Urgent plumbing response for Homeland leaks, backups, shutoff issues, and other plumbing failures that need immediate attention.",
      whyTitle: "Why Homeland customers call us for emergency plumbing",
      whyCopy:
        "Homeland emergency pages need a direct but reassuring message. Visitors often need immediate help and a clear understanding of what to do before the plumber arrives.",
      localProblemsIntro: "Common Homeland emergency plumbing issues include:",
      localProblems: [
        "Active leaks that need fast water-control steps",
        "Overflowing toilets that force an immediate shutdown",
        "Drain backups affecting more than one room or fixture",
        "Water heater failures that remove hot water and create leak risk",
      ],
      offerTitle: "Homeland emergency-service emphasis",
      offerBody:
        "This page puts phone-first triage and stabilization guidance up front so Homeland visitors can act quickly without guessing at the severity.",
      proofTitle: "Built for urgent but clarity-focused calls",
      proofBody:
        "Homeland emergency visitors often need a steady explanation of the risk, the first safe step, and how to move into service fast.",
      locationCardBlurb: "Emergency plumbing response for leaks, backups, and urgent failures in Homeland.",
      cityFaqs: [
        {
          question: "What should I do first during a Homeland plumbing emergency?",
          answer:
            "If it is safe, shut off the water to the fixture or the building and clear the immediate area while you call for help.",
        },
        {
          question: "Can you help if I am unsure whether my Homeland issue is urgent enough for emergency plumbing?",
          answer:
            "Yes. We can help you triage the issue by phone so you know whether immediate service is the right move.",
        },
      ],
      ctaTitle: "Need an emergency plumber in Homeland?",
      ctaBody: "Call now for urgent plumbing triage and fast help on active leaks, backups, and plumbing failures.",
    },
    "water-heater-installation-repair": {
      metaDescription:
        "Water heater repair and installation in Homeland, CA for no hot water, leaking tanks, tankless problems, and replacement planning.",
      heroTitle: "Water Heater Installation & Repair in Homeland, CA",
      heroSummary:
        "Repair or replace Homeland water heaters when hot water becomes unreliable, the unit starts leaking, or the system needs a practical replacement plan.",
      whyTitle: "Why Homeland customers call us for water heater service",
      whyCopy:
        "Homeland water heater pages should emphasize reliability and clear decision-making. Visitors usually want to restore dependable hot water without overcomplicating the process.",
      localProblemsIntro: "Common Homeland water heater problems include:",
      localProblems: [
        "No-hot-water situations that interrupt everyday routines",
        "Leaking units that need quick triage and a next-step recommendation",
        "Older systems that are no longer dependable",
        "Replacement decisions where long-term reliability matters more than a short-term patch",
      ],
      offerTitle: "Homeland water-heater emphasis",
      offerBody:
        "This page is built around dependable repair-versus-replacement guidance for customers who want the hot-water problem solved cleanly and correctly.",
      proofTitle: "Built for reliability-focused hot-water service",
      proofBody:
        "Homeland visitors usually want clear guidance on whether the unit is still trustworthy and what the strongest long-term option looks like.",
      locationCardBlurb: "Water heater repair and replacement for no hot water, leaks, and aging units in Homeland.",
      cityFaqs: [
        {
          question: "Can you help if my Homeland water heater works inconsistently instead of failing completely?",
          answer:
            "Yes. Inconsistent hot water is still worth diagnosing before the system turns into a full outage or leak emergency.",
        },
        {
          question: "Do you recommend replacement in Homeland when reliability is the main concern?",
          answer:
            "If the unit condition or age points that way, yes. We explain whether replacement is the cleaner long-term move.",
        },
      ],
      ctaTitle: "Need water heater service in Homeland?",
      ctaBody: "Call now for hot-water troubleshooting and dependable repair-versus-replacement guidance.",
    },
  },
}

export const plumbingCitySlugs = Object.keys(plumbingCities) as PlumbingCitySlug[]
export const plumbingServiceSlugs = Object.keys(plumbingServices) as PlumbingServiceSlug[]

export function isPlumbingCitySlug(value: string): value is PlumbingCitySlug {
  return value in plumbingCities
}

export function isPlumbingServiceSlug(value: string): value is PlumbingServiceSlug {
  return value in plumbingServices
}

export function getPlumbingCity(citySlug: PlumbingCitySlug) {
  return plumbingCities[citySlug]
}

export function getPlumbingService(serviceSlug: PlumbingServiceSlug) {
  return plumbingServices[serviceSlug]
}

export function getCityServiceOverride(citySlug: PlumbingCitySlug, serviceSlug: PlumbingServiceSlug) {
  return cityServiceOverrides[citySlug][serviceSlug]
}

export function getCityServicePageContent(citySlug: PlumbingCitySlug, serviceSlug: PlumbingServiceSlug) {
  const city = getPlumbingCity(citySlug)
  const service = getPlumbingService(serviceSlug)
  const override = getCityServiceOverride(citySlug, serviceSlug)

  return {
    city,
    service,
    override,
    faqs: [...override.cityFaqs, ...service.faqs.slice(0, 2)],
  }
}

export function getCityServiceCards(citySlug: PlumbingCitySlug) {
  return plumbingServiceSlugs.map((serviceSlug) => {
    const service = getPlumbingService(serviceSlug)
    const override = getCityServiceOverride(citySlug, serviceSlug)

    return {
      slug: serviceSlug,
      name: service.name,
      href: `/locations/${citySlug}/${serviceSlug}`,
      blurb: override.locationCardBlurb,
    }
  })
}

export function getServiceCityCards(serviceSlug: PlumbingServiceSlug) {
  return plumbingCitySlugs.map((citySlug) => {
    const city = getPlumbingCity(citySlug)
    const override = getCityServiceOverride(citySlug, serviceSlug)

    return {
      slug: citySlug,
      name: city.name,
      href: `/locations/${citySlug}/${serviceSlug}`,
      blurb: override.locationCardBlurb,
    }
  })
}
