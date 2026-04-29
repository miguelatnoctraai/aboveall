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
  signalTitle?: string
  signalPoints?: string[]
  detailTitle?: string
  detailParagraphs?: string[]
  commonCallsTitle?: string
  commonCalls?: string[]
  proofTitle?: string
  proofBody?: string
  proofPoints?: string[]
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
      "Menifee homes, rentals, 55+ communities, and local businesses often need quick answers when plumbing starts slowing down daily routines. We help customers sort out whether the next step is a focused repair, a replacement, or urgent service that should not wait.",
    nearbyAreas: ["Sun City", "Romoland", "Winchester", "Quail Valley"],
    propertyTypes: ["Single-family neighborhoods", "55+ communities", "Retail and office suites"],
    trustPoints: ["California License #1075924", "Residential and commercial plumbing", "Phone-first scheduling"],
    signalTitle: "Common plumbing concerns in Menifee",
    signalPoints: [
      "Slow drains or repeat backups in busy households and move-ins",
      "Running, leaking, or unreliable toilets in homes, rentals, and 55+ communities",
      "No hot water, leaking water heaters, or active plumbing problems that cannot wait",
    ],
    detailTitle: "Why Menifee plumbing calls need a clear next step",
    detailParagraphs: [
      "A Menifee plumbing call may start with a slow drain, a toilet that will not stay reliable, no hot water, or a leak that needs attention before it spreads. The faster the problem is sorted into the right service path, the easier it is to schedule the correct work.",
      "That matters for active family homes, rental turnovers, 55+ communities, and retail or office spaces where plumbing downtime interrupts the day. We focus on the actual symptom first, then explain whether the issue points to drain cleaning, toilet repair, emergency plumbing, or water heater service.",
    ],
    commonCallsTitle: "Common Menifee plumbing calls we handle",
    commonCalls: [
      "Slow drains or repeat backups in kitchens, bathrooms, laundry areas, or main lines",
      "Running, leaking, or unreliable toilets that need repair or replacement guidance",
      "Active leaks or plumbing problems that cannot wait for routine scheduling",
      "No hot water or leaking water heaters that need a repair-versus-replacement answer",
    ],
    ctaTitle: "Need plumbing help in Menifee?",
    ctaBody:
      "Use the Menifee city hub to jump straight into drain cleaning, toilet work, emergency plumbing, or water heater service.",
  },
  riverside: {
    slug: "riverside",
    name: "Riverside",
    county: "Riverside County",
    shortDescription:
      "Plumbing services in Riverside, CA for older homes, apartments, restaurants, offices, and local properties that need stronger diagnosis and clearer repair guidance.",
    heroSummary:
      "Licensed plumbing support across Riverside for drain problems, toilet issues, water heater failures, and emergency calls where mixed-age plumbing systems often need a sharper diagnosis before the right repair path is obvious.",
    localAngle:
      "Riverside has a lot of older homes, apartments, and businesses. Older plumbing can be hard to figure out. We take a close look so you get the right fix the first time.",
    nearbyAreas: ["Downtown Riverside", "Canyon Crest", "Orangecrest", "Arlington"],
    propertyTypes: ["Older single-family homes", "Apartments and rentals", "Restaurants and offices"],
    trustPoints: [
      "California License #1075924",
      "Residential and commercial plumbing support",
      "Fast call-first response for active issues and urgent scheduling",
    ],
    signalTitle: "Common Riverside plumbing concerns",
    signalPoints: [
      "Whether the problem looks like a simple repair or a larger plumbing issue",
      "Whether an older home, apartment, restaurant, or office needs a different repair approach",
      "Which plumbing service will solve the problem fastest without extra guesswork",
    ],
    detailTitle: "What makes Riverside plumbing jobs different",
    detailParagraphs: [
      "Riverside has old houses, apartments, restaurants, and offices. Each one can have different plumbing problems. What works for a new home may not work for an older building.",
      "That is why we help you figure out what is wrong before we start any work. If we know how big the problem is, we can pick the right fix. That saves you time and money.",
      "Drain cleaning, toilet repair, emergency plumbing, and water heater work can all look different in Riverside. Older pipes and mixed buildings often need more careful work than newer areas.",
    ],
    commonCallsTitle: "Common Riverside plumbing calls we handle",
    commonCalls: [
      "Drain issues in older homes where repeat clogs or shared drain symptoms need more than a quick unclog",
      "Apartment and rental plumbing problems where fixture reliability and clean scheduling matter",
      "Emergency leaks, overflows, and backup conditions that need fast triage before repair planning",
      "Water heater failures in homes or commercial spaces where downtime creates daily disruption",
    ],
    proofTitle: "Why Riverside customers call Above All",
    proofBody:
      "Above All Maintenance & Repair helps Riverside homeowners, property managers, and business operators with plumbing problems that are not always straightforward. The focus is clear recommendations, dependable repair planning, and fast access to the right help.",
    proofPoints: [
      "Licensed plumbing help for older homes, rentals, restaurants, offices, and other local properties",
      "Clear support for urgent leaks, backups, and everyday plumbing repairs",
      "Fast access to drain cleaning, toilet repair, emergency plumbing, and water heater service",
    ],
    ctaTitle: "Need plumbing service in Riverside?",
    ctaBody:
      "Call now or pick the service you need. We will get you to the right help fast.",
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
      "Plumbing services in Homeland, CA for homes and local properties that need dependable diagnosis, practical repairs, and local guidance shaped by the company’s home-base area.",
    heroSummary:
      "Licensed plumbing support for Homeland homes and local service properties when drain issues, toilet problems, water heater failures, or urgent leaks need a dependable repair plan and clear local guidance.",
    localAngle:
      "Homeland has ranch homes, manufactured homes, and small local businesses. Some properties have longer pipe runs or older fixtures. We take the time to find the real problem before we start any work.",
    nearbyAreas: ["Romoland", "Green Acres", "Nuevo", "Menifee border"],
    propertyTypes: ["Ranch-style homes", "Manufactured homes", "Small local businesses"],
    trustPoints: [
      "California License #1075924",
      "Residential and commercial plumbing support",
      "Repair-first communication with clear next-step recommendations",
    ],
    signalTitle: "Common plumbing concerns in Homeland",
    signalPoints: [
      "Getting a dependable diagnosis instead of a quick temporary fix",
      "Finding the right plumbing service for the property setup",
      "Knowing whether the next step should be repair, replacement, or deeper inspection",
    ],
    detailTitle: "Why Homeland plumbing jobs often need a closer look",
    detailParagraphs: [
      "Homeland plumbing work often involves ranch-style homes, manufactured homes, and nearby semi-rural properties where the plumbing layout can be less straightforward than a newer suburban tract home.",
      "That can matter when a drain problem may involve a longer run, a toilet issue has been building for a while, or a water heater problem needs a practical repair-versus-replacement decision instead of a rushed guess.",
      "If you have a plumbing problem in Homeland, we are here to help. We find out what is wrong and tell you exactly what to do next.",
    ],
    commonCallsTitle: "Common Homeland plumbing calls we handle",
    commonCalls: [
      "Drain problems in homes where repeat slowdowns or backups need a better diagnosis before bigger repair decisions",
      "Toilet leaks, clogs, or aging fixtures where the customer wants the cleanest long-term fix",
      "Emergency leaks and shutoff problems where steady triage matters as much as speed",
      "Water heater issues where reliability and repair-versus-replace guidance matter more than a hard sell",
    ],
    proofTitle: "Why Homeland customers choose Above All",
    proofBody:
      "Above All Maintenance & Repair provides Homeland customers with clear plumbing recommendations, practical repair guidance, and dependable help when the problem cannot wait.",
    proofPoints: [
      "Licensed plumbing help for Homeland homes, small local businesses, and nearby semi-rural properties",
      "Repair-first guidance with clear next-step recommendations",
      "Fast access to drain, toilet, emergency, and water-heater service when the problem needs direct attention",
    ],
    ctaTitle: "Need a plumber in Homeland?",
    ctaBody:
      "Choose the issue you are dealing with and reach the right drain, toilet, emergency, or water heater service for your Homeland property.",
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
      "Drain cleaning is for slow drains, backups, recurring clogs, and line problems that need more than a quick surface clearing. Above All helps customers understand whether the next step should be basic clearing, a deeper line cleaning, a camera inspection, or a larger repair plan.",
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
      "Toilet repair and installation covers leaking, running, rocking, weak-flushing, and repeatedly clogged toilets, along with clean fixture replacement when repair is no longer the best value. Above All helps customers understand whether the smartest move is repair, replacement, or a closer look at the connected plumbing.",
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
      "Emergency plumbing is for active leaks, burst pipes, backups, overflows, shutoff problems, and other failures that cannot safely wait. Above All focuses on fast triage, damage control, and a clear path from the emergency symptom to the right repair plan.",
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
      "Water heater repair and installation covers no-hot-water calls, weak recovery, leaking units, tankless issues, and replacement planning when the current system is no longer dependable. Above All helps customers figure out whether repair still makes sense or whether replacement is the better long-term answer.",
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
        "Menifee homes get heavy daily use. A slow drain can turn into a big problem fast. We help you find out if it is a simple clog or something deeper that keeps coming back.",
      detailTitle: "What drain-cleaning calls look like in Menifee homes",
      detailParagraphs: [
        "Busy homes in Menifee use a lot of water every day. Kitchen sinks, bathroom drains, and laundry lines can all slow down at once. When that happens, you want to know if the drain can be fixed and if it will stay clear.",
        "If the same drain keeps slowing down, something is wrong deeper in the line. We check for repeat slowdowns, drain odors, gurgling sounds, and backup signs before the problem gets worse.",
        "Above All Maintenance & Repair clears the drain and figures out why it keeps clogging. You get a real fix, not just a temporary one.",
      ],
      localProblemsIntro: "Common Menifee drain issues include:",
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
      offerTitle: "Drain cleaning in Menifee",
      offerBody:
        "We schedule fast. We tell you if the drain needs a simple clear, a deep clean, or a camera inspection. No surprises.",
      proofTitle: "Why Menifee homeowners call Above All Maintenance & Repair",
      proofBody:
        "We work with busy Menifee homes, move-ins, and properties where a slow drain can quickly turn into a real problem.",
      proofPoints: [
        "We serve busy family homes, move-ins, and properties with heavy daily use",
        "We explain the difference between a one-time clog and a deeper line problem",
        "Call us when you are ready and we get you scheduled fast",
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
      ctaBody: "Call now for direct scheduling and a clear drain-cleaning plan for your Menifee property.",
    },
    "toilet-repair-installation": {
      metaDescription:
        "Toilet repair and installation in Menifee, CA for leaks, weak flushes, clog issues, fixture upgrades, and replacements.",
      heroTitle: "Toilet Repair & Installation in Menifee, CA",
      heroSummary:
        "Fix leaking, running, clogged, or outdated toilets in Menifee homes and properties with repair-first guidance, clearer replacement decisions, and clean fixture installs that fit busy household use.",
      whyTitle: "Why Menifee customers call us for toilet work",
      whyCopy:
        "When your toilet has a problem, you want a fast answer. Should we fix it or replace it? We give you a straight answer so you can move forward without waiting.",
      detailTitle: "What Menifee toilet-service calls usually have in common",
      detailParagraphs: [
        "A toilet that keeps running, leaks at the base, or clogs too often is a problem. It might still flush, but it is wearing out. We check the toilet and tell you if a simple repair will hold or if a replacement makes more sense.",
        "We look at the whole setup — not just the bowl. The shutoff valve, the seal, and the drain line can all be part of the problem. We explain your options clearly so you can pick the right fix.",
        "This work often comes up during move-ins and home updates. You do not need a full bathroom remodel. You just need a toilet that works reliably again.",
      ],
      localProblemsIntro: "Common Menifee toilet issues include:",
      localProblems: [
        "Running toilets that quietly waste water every day",
        "Leak complaints around the base after recent fixture wear",
        "Repeated toilet clogs in busy family homes",
        "Move-in replacement needs when older fixtures are ready to go",
      ],
      warningSignsTitle: "When a Menifee toilet issue usually needs service instead of more waiting",
      warningSigns: [
        "The toilet still works, but it keeps running, leaking, or clogging often enough to disrupt the household",
        "The fixture looks worn out and the customer is already considering a practical replacement",
        "Water is showing up around the base or the toilet no longer feels solid and dependable",
        "A move-in, tenant turnover, or home refresh needs a clean fixture decision without dragging out the work",
      ],
      offerTitle: "Menifee toilet-service emphasis",
      offerBody:
        "Menifee households often want repair-or-replace clarity, practical scheduling, and less guesswork around whether the existing fixture is still worth dealing with.",
      proofTitle: "Strong fit for fixture refreshes and fast repairs",
      proofBody:
        "Menifee properties often need clean toilet repairs, leak fixes, and straightforward replacement work that can be scheduled without a larger remodel. Homeowners usually want a dependable answer quickly and prefer focused plumbing work over drawn-out project language.",
      proofPoints: [
        "We serve busy Menifee households, move-ins, and fixture update jobs",
        "Supports clear repair-versus-replacement decisions without overselling the scope",
        "Helps customers move from a frustrating toilet symptom to a practical service plan fast",
      ],
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
        "When something goes wrong with your plumbing, you need help now. We respond fast and work to stop the problem right away.",
      localProblemsIntro: "Common Menifee emergency plumbing calls include:",
      localProblems: [
        "Active leaks under sinks or behind fixtures",
        "Overflowing toilets that interrupt the whole home",
        "Main line backups affecting multiple drains",
        "Water heater failures that leave the property with no hot water",
      ],
      offerTitle: "Menifee emergency-service emphasis",
      offerBody:
        "Menifee emergency customers usually need fast phone-first help for active leaks, backups, overflows, and other plumbing failures that cannot wait.",
      proofTitle: "Why Menifee customers call Above All for emergencies",
      proofBody:
        "Menifee emergency calls are often made from a phone while the problem is still active. Customers usually need quick triage, a clear next step, and reassurance that help is on the way.",
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
        "Water heater repair and installation in Menifee, CA for no hot water, leaking tanks, weak recovery, and replacement planning.",
      heroTitle: "Water Heater Installation & Repair in Menifee, CA",
      heroSummary:
        "No hot water? Leaking tank? We help you figure out if your water heater can be fixed or if it's time for a new one. We work fast and give you a straight answer.",
      whyTitle: "Why Menifee customers call us for water heater service",
      whyCopy:
        "When your water heater stops working, it affects everyone in the house. We pick up the phone, ask a few questions, and help you figure out what to do next.",
      detailTitle: "Common water heater problems in Menifee homes",
      detailParagraphs: [
        "A lot of Menifee homes have water heaters that are getting old. They still run, but the hot water runs out faster than it used to. That is a sign the unit is wearing out.",
        "Sometimes the problem is a leak. You see water near the tank or a fitting that is rusting. That needs attention fast before it causes more damage.",
        "We look at the unit, tell you what is wrong, and give you the options. Repair or replace — we explain what makes sense and why.",
      ],
      localProblemsIntro: "Common Menifee water heater problems we handle:",
      localProblems: [
        "Hot water running out too fast",
        "Leaking tanks or fittings",
        "Inconsistent water temperature",
        "Old units that need full replacement",
      ],
      warningSignsTitle: "Signs your Menifee water heater needs service now",
      warningSigns: [
        "You run out of hot water much faster than before",
        "There is water or rust near the base of the tank",
        "The unit makes loud popping or banging sounds",
        "Your water heater is more than 10 years old and acting up",
      ],
      offerTitle: "Water heater service in Menifee",
      offerBody:
        "We repair and replace water heaters in Menifee homes and rental properties. We tell you the honest answer — fix it or replace it — and we get the work done.",
      proofTitle: "Why Menifee homeowners call Above All Maintenance & Repair",
      proofBody:
        "We give you a straight answer, do the work right, and leave your home the way we found it. No pressure, no overselling.",
      proofPoints: [
        "We repair and replace tank and tankless water heaters",
        "We serve Menifee homes, rentals, and local properties",
        "We tell you exactly what is wrong before any work begins",
      ],
      locationCardBlurb: "Water heater repair and replacement for no hot water, leaks, and aging units in Menifee.",
      cityFaqs: [
        {
          question: "My Menifee water heater still works but runs out of hot water fast. Do I need a new one?",
          answer:
            "Not always. We check the unit first. Sometimes a repair fixes it. If replacement makes more sense, we tell you why.",
        },
        {
          question: "Do you install replacement water heaters in Menifee?",
          answer:
            "Yes. We remove the old unit and install the new one. We test everything before we leave.",
        },
      ],
      ctaTitle: "Need water heater service in Menifee?",
      ctaBody: "Call 951-330-6963 now and we'll help you figure out the next step.",
    },
  },
  riverside: {
    "drain-cleaning": {
      metaDescription:
        "Drain cleaning in Riverside, CA for slow drains, repeat clogs, sewer backups, and main line problems in homes, apartments, and commercial properties.",
      heroTitle: "Drain Cleaning in Riverside, CA",
      heroSummary:
        "Slow drain? Keeps clogging? We clear it and tell you why it keeps coming back. We work on homes, apartments, restaurants, and offices in Riverside.",
      whyTitle: "Why Riverside customers call us for drain cleaning",
      whyCopy:
        "A drain that clogs once might just need a quick clear. A drain that clogs again and again has a deeper problem. We find out which one you are dealing with and fix it right.",
      detailTitle: "Drain problems in Riverside homes and buildings",
      detailParagraphs: [
        "Riverside has a lot of older homes and buildings. Old pipes get slow. Grease, hair, and buildup pile up over time. A drain that worked fine for years can suddenly stop draining properly.",
        "When more than one drain starts backing up, the problem is usually deeper in the line. We check the whole system, not just the one drain that is acting up.",
        "We use the right tool for each job. Sometimes it's a simple snake. Sometimes it's a hydro jet or a camera. We tell you what we're doing and why.",
      ],
      localProblemsIntro: "Common drain problems we handle in Riverside:",
      localProblems: [
        "Kitchen drains clogged with grease and food buildup",
        "Shower and tub drains that back up repeatedly",
        "Main line blockages affecting the whole house",
        "Restaurant and office drains that slow down or back up",
      ],
      warningSignsTitle: "Signs your Riverside drain needs service now",
      warningSigns: [
        "Water drains very slowly or not at all",
        "The same drain clogs every few weeks",
        "You hear gurgling from other drains when you flush",
        "Multiple drains are slow at the same time",
      ],
      offerTitle: "Drain cleaning in Riverside",
      offerBody:
        "We clear the drain, find out why it's clogging, and tell you if it needs more than a basic cleaning. Fast scheduling for homes, rentals, and commercial properties.",
      proofTitle: "Why Riverside homeowners call Above All Maintenance & Repair",
      proofBody:
        "We show up, fix the problem, and tell you what we found. No mystery charges, no guessing.",
      proofPoints: [
        "We clear drains in homes, apartments, restaurants, and offices",
        "We find the cause, not just the clog",
        "We offer camera inspections when the problem keeps coming back",
      ],
      locationCardBlurb: "Drain cleaning for slow drains, repeat clogs, and main line backups in Riverside.",
      cityFaqs: [
        {
          question: "My Riverside drain keeps clogging even after being cleared. What's wrong?",
          answer:
            "A repeat clog usually means there is buildup deeper in the line, a partial blockage, or a bigger drain issue. We can inspect the line and find the real cause.",
        },
        {
          question: "Do you handle drain cleaning for Riverside restaurants and commercial properties?",
          answer:
            "Yes. We clear drains in kitchens, restrooms, and commercial spaces where backups affect daily operations.",
        },
      ],
      ctaTitle: "Need drain cleaning in Riverside?",
      ctaBody: "Call 951-330-6963 and we'll get your drains cleared fast.",
    },
    "toilet-repair-installation": {
      metaDescription:
        "Toilet repair and installation in Riverside, CA. Above All Maintenance & Repair fixes leaks, running toilets, clogs, and broken fixtures for homes, rentals, and businesses.",
      heroTitle: "Toilet Repair & Installation in Riverside, CA",
      heroSummary:
        "Above All Maintenance & Repair fixes and replaces toilets in Riverside. Leaks, running toilets, clogs, broken parts, or a full swap — we handle it for homes, rentals, restaurants, and offices.",
      whyTitle: "Why Riverside calls Above All for toilet work",
      whyCopy:
        "Riverside has a lot of older homes and buildings. Sometimes the toilet is the problem. Sometimes it is the shutoff, the supply line, or the drain. We check all of it so you get the right fix the first time.",
      detailTitle: "Toilet problems in Riverside are not always just the toilet",
      detailParagraphs: [
        "Most toilet calls start the same way — it runs, rocks, clogs, or leaks. In Riverside's older homes and busy buildings, the toilet is sometimes just the start. Old shutoff valves, worn supply lines, and slow drains can all be part of the same problem.",
        "We fix what needs fixing and replace what does not make sense to keep. If the toilet is too old or too far gone, we tell you straight and help you pick the right replacement.",
        "For rentals, restaurants, and offices, a broken restroom costs money every day it sits. We get it done fast with as little disruption as possible.",
      ],
      localProblemsIntro: "Common toilet problems we fix in Riverside:",
      localProblems: [
        "Old fixtures that keep failing inside the tank",
        "Leaks at the base that get into the floor",
        "Commercial restrooms that need a fast replacement",
        "Toilets that clog over and over because of a drain line issue",
      ],
      warningSignsTitle: "Signs your toilet needs more than a quick fix",
      warningSigns: [
        "You have already had it repaired and it keeps breaking the same way",
        "There is water at the base or the toilet moves when you sit on it",
        "It clogs regularly even when nothing has changed",
        "A rental or business restroom cannot stay reliable for daily use",
      ],
      offerTitle: "Toilet repair and installation in Riverside",
      offerBody:
        "We fix leaks, replace worn parts, and swap out old toilets that are not worth repairing anymore. Homes, rentals, restaurants, and offices — we handle all of it.",
      proofTitle: "We work with older homes and busy restrooms",
      proofBody:
        "Riverside has a mix of older homes, apartments, restaurants, and offices. We handle toilet work for all of them — from a simple flapper swap to a full fixture replacement.",
      proofPoints: [
        "We serve older homes, rentals, restaurants, and office restrooms in Riverside",
        "We check the shutoff, supply line, and drain — not just the toilet itself",
        "We tell you whether to repair or replace so you are not guessing",
      ],
      locationCardBlurb: "Toilet repair and installation in Riverside for leaks, clogs, and fixture replacements.",
      cityFaqs: [
        {
          question: "Can you replace a toilet in Riverside without a full bathroom remodel?",
          answer:
            "Yes. Toilet replacement is usually a focused plumbing job. As long as the floor and connection points are in good shape, you do not need a full remodel.",
        },
        {
          question: "What if my Riverside toilet keeps clogging?",
          answer:
            "Repeat clogs are often a drain line issue, not just the toilet. We check beyond the fixture so the problem does not keep coming back.",
        },
      ],
      ctaTitle: "Need toilet repair in Riverside?",
      ctaBody: "Call Above All Maintenance & Repair. We fix leaks, clogs, and broken fixtures fast.",
    },
    "emergency-plumbing": {
      metaDescription:
        "Emergency plumbing in Riverside, CA for burst pipes, active leaks, drain backups, overflowing toilets, and urgent plumbing calls.",
      heroTitle: "Emergency Plumbing in Riverside, CA",
      heroSummary:
        "If water is leaking, a drain is backing up, or something failed and you don't know what to do — call us. We respond fast and get to work right away.",
      whyTitle: "Why Riverside customers call us for emergency plumbing",
      whyCopy:
        "Emergencies don't wait. When a pipe bursts or a toilet overflows, you need someone on the phone now. We help you figure out what to do and get there fast.",
      detailTitle: "What to do when you have a plumbing emergency in Riverside",
      detailParagraphs: [
        "First, shut off the water if you can. The main shutoff is usually near the water meter or where the main line comes into your home. If you can't find it, call us and we'll walk you through it.",
        "Then call us. We help you figure out how serious the problem is and what to do next. Some issues can wait a few hours. Others need help right now. We tell you which.",
        "Riverside has a lot of older homes and buildings. Older pipes can fail fast. We know what to look for and how to stop the damage before it spreads.",
      ],
      localProblemsIntro: "Common Riverside plumbing emergencies we handle:",
      localProblems: [
        "Burst or leaking pipes in older homes and buildings",
        "Toilets overflowing and won't stop",
        "Drain backups affecting multiple rooms or fixtures",
        "Water heater leaks that need immediate attention",
      ],
      warningSignsTitle: "Signs you need to call right now",
      warningSigns: [
        "Water is actively spreading across the floor, walls, or ceiling",
        "A toilet or drain will not stop overflowing",
        "You cannot shut off the water and it keeps getting worse",
        "Multiple drains are backing up at the same time",
      ],
      offerTitle: "Emergency plumbing in Riverside",
      offerBody:
        "We pick up the phone, help you triage the problem, and get to your property fast. We work on homes, rentals, restaurants, and offices.",
      proofTitle: "Why Riverside homeowners call Above All Maintenance & Repair",
      proofBody:
        "We respond fast, speak plainly, and fix the problem. No runaround. Just the right help when you need it most.",
      proofPoints: [
        "We answer calls for active leaks, backups, and plumbing failures",
        "We serve homes, rentals, restaurants, and offices in Riverside",
        "We tell you exactly what is wrong and what it will take to fix it",
      ],
      locationCardBlurb: "Emergency plumbing response for leaks, backups, and urgent failures in Riverside.",
      cityFaqs: [
        {
          question: "What should I do first if a pipe bursts in my Riverside home?",
          answer:
            "Shut off the water at the main valve, then call us. We can walk you through finding the shutoff on the phone if you need help.",
        },
        {
          question: "Do you handle plumbing emergencies in Riverside apartments and commercial buildings?",
          answer:
            "Yes. We work on homes, apartments, rentals, restaurants, and offices in Riverside.",
        },
      ],
      ctaTitle: "Need an emergency plumber in Riverside?",
      ctaBody: "Call 951-330-6963 now. We pick up and we get there fast.",
    },
    "water-heater-installation-repair": {
      metaDescription:
        "Water heater repair and installation in Riverside, CA for no hot water, leaking tanks, weak recovery, and tankless system issues.",
      heroTitle: "Water Heater Installation & Repair in Riverside, CA",
      heroSummary:
        "Repair or replace Riverside water heaters when aging systems lose recovery, leak, struggle to keep up, or stop delivering dependable hot water in homes, rentals, and commercial spaces.",
      whyTitle: "Why Riverside customers call us for water heater service",
      whyCopy:
        "Riverside has a lot of older water heaters. We help you figure out if yours can be fixed or if it is time for a new one. You get a straight answer so you can move forward without guessing.",
      detailTitle: "Why Riverside water-heater decisions usually need better context",
      detailParagraphs: [
        "Riverside has a lot of older water heaters in homes, rentals, and businesses. Some have been getting weaker for a long time. Sometimes the problem is clear, like a leak or no hot water at all. Other times the unit still runs but cannot keep up with daily use.",
        "We look at the age of the unit, where it is failing, and what the property needs. Then we tell you if it is worth repairing or if a new one makes more sense. No generic answers — just the right call for your situation.",
        "This matters in all kinds of properties. A family home, a rental with no hot water, and a restaurant with weak recovery all need different things. We give you advice that fits your property, not a one-size answer.",
      ],
      localProblemsIntro: "Common Riverside water heater problems include:",
      localProblems: [
        "Older tanks with declining recovery or visible wear",
        "Leaking water heaters that need immediate triage",
        "Tankless performance issues in higher-demand properties",
        "Replacement decisions where customers want a clear recommendation instead of guesswork",
      ],
      warningSignsTitle: "Signs a Riverside water heater problem is moving past a minor repair question",
      warningSigns: [
        "Hot water is still available, but it does not last long enough for normal use anymore",
        "The unit is older, showing wear, and now has a leak or repeated reliability issue",
        "A rental or commercial property cannot afford more downtime while the decision drags on",
        "The customer is not just asking how to fix it, but whether the unit is still worth trusting",
      ],
      offerTitle: "Riverside water-heater emphasis",
      offerBody:
        "Riverside customers often need a stronger diagnosis before replacing a unit and want the repair-versus-replace decision spelled out clearly in terms of reliability, urgency, and property demand.",
      proofTitle: "A strong fit for older equipment and urgent hot-water problems",
      proofBody:
        "Riverside water heater calls often involve older equipment, more varied building ages, and customers who want a confident recommendation before they commit. This service supports both repair-minded customers and customers who already suspect the cleanest move is replacement.",
      proofPoints: [
        "We work with older Riverside water heaters across homes, rentals, and commercial properties",
        "Explains urgency without pushing replacement as the answer to every hot-water problem",
        "Supports faster scheduling when the property needs dependable hot water restored quickly",
      ],
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
        "Drain cleaning for Homeland homes and local properties when clogs return, drains slow down, or main line symptoms start affecting more than one fixture and the customer wants a dependable answer instead of a temporary unclog.",
      whyTitle: "Why Homeland customers call us for drain cleaning",
      whyCopy:
      "Homeland drain service needs to emphasize dependable diagnosis and practical repair planning. Customers here usually want the right answer, not just the fastest generic pitch, especially when the property setup or longer drain runs make the next step less obvious.",
      detailTitle: "Why Homeland drain calls need a steadier message",
      detailParagraphs: [
        "Homeland drain-cleaning traffic often comes from customers who have already tried to wait out the symptom or have seen the same slowdown return more than once. In this area, the strongest message is not a hard-sell emergency pitch. It is a calmer explanation of whether the issue looks like a simple fixture clog, a longer run that needs better clearing, or a line problem that should be watched more closely before it turns into a larger repair.",
        "That matters because Homeland properties can have different layouts and plumbing conditions than tighter city lots. A recurring bathroom clog, a kitchen line that takes too long to clear fully, or a main line symptom that affects more than one fixture may need a little more diagnostic discipline. The page should make visitors feel that Above All will explain what is happening and not just rush through a temporary drain opening.",
        "Homeland customers should feel like this is local plumbing help written for the realities of their area: practical repair planning, dependable line clearing, and clear next-step recommendations when the drain problem points to more than one possible cause.",
      ],
      localProblemsIntro: "Common Homeland drain issues this page addresses:",
      localProblems: [
        "Slow drains that keep coming back after temporary clearing",
        "Bathroom and kitchen clogs in homes with longer plumbing runs",
        "Main line symptoms that need a clearer diagnosis before bigger repair decisions",
        "Drain issues where reliability matters more than a temporary fix",
      ],
      warningSignsTitle: "When a Homeland drain issue usually needs more than a basic unclog",
      warningSigns: [
        "The same sink, shower, or toilet keeps slowing down again after a recent clearing",
        "A drain problem seems isolated at first but starts affecting another nearby fixture",
        "There is a backup, odor, or gurgling pattern that suggests the line is not clearing cleanly",
        "The customer wants to know what the line actually needs before approving bigger work",
      ],
      offerTitle: "Homeland drain-cleaning emphasis",
      offerBody:
        "This page leans into dependable diagnosis, line clearing, and next-step planning for customers who want the problem explained clearly and solved cleanly without inflated urgency.",
      proofTitle: "Built for reliability-focused drain service",
      proofBody:
        "Homeland visitors often want a steadier service message with less fluff and more clarity around what is happening in the line and what comes next. It is written for customers who value a trustworthy recommendation as much as the immediate clearing work.",
      proofPoints: [
        "Written for Homeland homes and local properties where dependable diagnosis matters",
        "Supports longer-run and repeat-clog conversations without overcomplicating the message",
        "Helps local visitors move from a recurring symptom to a clearer drain-service plan",
      ],
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
        "Repair or replace Homeland toilets when leaks, clogs, weak operation, or aging fixtures start causing repeat frustration and the customer wants the cleanest long-term fix.",
      whyTitle: "Why Homeland customers call us for toilet work",
      whyCopy:
      "Homeland toilet service works best when it emphasizes reliability and clear recommendations. Customers usually want to know the cleanest long-term fix, not just whether one more quick repair might hold for a little while.",
      detailTitle: "Why Homeland toilet pages should feel more recommendation-driven",
      detailParagraphs: [
        "Homeland toilet-service traffic often comes from homeowners who are less interested in rushing to the cheapest short-term fix and more interested in whether the fixture can be made dependable again. A toilet may run constantly, leak around the base, clog repeatedly, or simply feel worn out enough that the customer wants a straight answer on whether replacement is the cleaner choice.",
        "That is why Homeland customers need a steadier tone than a generic repair pitch. They usually want the recommendation explained clearly: repair it because the failure is isolated, or replace it because the fixture, seal, or repeated performance issues no longer justify more patchwork.",
        "This also fits the broader local pattern around Homeland plumbing work. The strongest message is not inflated urgency. It is dependable plumbing judgment for someone who wants the issue handled correctly, kept simple, and not turned into a bigger project unless it truly needs to be.",
      ],
      localProblemsIntro: "Common Homeland toilet issues include:",
      localProblems: [
        "Running toilets that waste water over time",
        "Leak complaints at the base, tank, or shutoff",
        "Repeated clogs where a simple plunger fix is no longer enough",
        "Fixture replacements when the existing toilet has become unreliable",
      ],
      warningSignsTitle: "When a Homeland toilet problem usually deserves a firmer recommendation",
      warningSigns: [
        "The toilet has become unreliable enough that the customer no longer trusts it day to day",
        "Leaks, rocking, or repeated clogs keep returning after smaller fixes",
        "The fixture is older and the customer wants to know if replacement is the cleaner long-term move",
        "The goal is not just to stop the symptom, but to avoid revisiting the same toilet problem again soon",
      ],
      offerTitle: "Homeland toilet-service emphasis",
      offerBody:
        "This page focuses on dependable repair work and clear replacement guidance for customers who want the fixture fixed properly, explained clearly, and kept reliable instead of patched repeatedly.",
      proofTitle: "Built for reliability-first fixture decisions",
      proofBody:
        "Homeland visitors often want a steadier message around durability, proper installation, and whether the toilet is still worth repairing. It is written for customers who value a trustworthy recommendation more than a fast generic pitch.",
      proofPoints: [
        "Written for Homeland homeowners who want clear repair-versus-replace guidance",
        "Supports reliability-first toilet decisions without pushing extra scope",
        "Helps visitors understand when a focused repair is enough and when replacement is the better long-term answer",
      ],
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
