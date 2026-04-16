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
  localProblemsIntro: string
  localProblems: string[]
  offerTitle: string
  offerBody: string
  proofTitle: string
  proofBody: string
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
      "Drain cleaning service pages for slow drains, backups, hydro jetting, and recurring line problems across Southern California.",
    heroSummary:
      "Fast support for slow drains, repeat clogs, drain odors, sewer line backups, and camera-verified blockage diagnosis.",
    intro:
      "This service hub explains what Above All handles for clogged drains, main line issues, and repeat blockages before visitors choose a city-specific page.",
    image: "/plumber-fixing-pipe-leak-under-sink.jpg",
    capabilities: [
      {
        title: "Kitchen and bathroom drain clearing",
        description: "Fast help for sinks, tubs, showers, and utility drains that are slow, blocked, or backing up.",
      },
      {
        title: "Main line stoppage diagnosis",
        description: "Identify whether the issue is isolated to one fixture or affecting the wider drainage system.",
      },
      {
        title: "Hydro jetting",
        description: "Use high-pressure cleaning when buildup or repeat clogs need more than basic cable work.",
      },
      {
        title: "Camera inspections",
        description: "Inspect the line when recurring symptoms suggest a deeper blockage or damaged piping.",
      },
      {
        title: "Recurring clog troubleshooting",
        description: "Move beyond a one-time unclog and determine why the same drain keeps failing.",
      },
      {
        title: "Commercial drain service",
        description: "Support for restrooms, break rooms, and service sinks that interrupt property operations.",
      },
    ],
    process: [
      {
        title: "Inspect the blockage",
        description: "Confirm whether the issue is isolated, shared, or part of a larger line problem before starting work.",
      },
      {
        title: "Clear the line safely",
        description: "Use the right drain-cleaning method for the symptom, fixture, and likely source of the blockage.",
      },
      {
        title: "Recommend the next move",
        description: "Flag recurring-clog risks, maintenance options, or follow-up repairs when the line needs more than a quick clearing.",
      },
    ],
    faqs: [
      {
        question: "Do you handle recurring drain clogs?",
        answer:
          "Yes. Recurring clogs usually need more than a basic clearing, so we focus on diagnosing why the line keeps slowing down or backing up.",
      },
      {
        question: "Is hydro jetting always necessary?",
        answer:
          "No. We use the cleaning method that fits the line condition and the symptom. Some drains need cable work, while repeat buildup may justify hydro jetting.",
      },
      {
        question: "Can you inspect the line before bigger repairs?",
        answer:
          "Yes. Camera inspections help confirm whether the issue is grease, roots, scale, or pipe damage before moving into larger recommendations.",
      },
    ],
    quickPoints: ["Slow drains", "Recurring clogs", "Hydro jetting", "Camera inspections"],
  },
  "toilet-repair-installation": {
    slug: "toilet-repair-installation",
    name: "Toilet Repair & Installation",
    hubTitle: "Toilet Repair & Installation",
    hubDescription:
      "Toilet repair and toilet installation pages for leaks, weak flushes, repeated clogs, and fixture replacements.",
    heroSummary:
      "Repair leaking, running, or clogged toilets and install new fixtures for homes, rentals, and commercial restrooms.",
    intro:
      "This service hub explains how Above All handles toilet repairs, replacements, and new installations before visitors choose a city-specific page.",
    image: "/plumber-fixing-pipe-leak-under-sink.jpg",
    capabilities: [
      {
        title: "Running toilet repair",
        description: "Fix fill valves, flappers, internal tank parts, and persistent water waste issues.",
      },
      {
        title: "Toilet clog removal",
        description: "Address fixture-level stoppages and determine when the issue points to the branch line or main line.",
      },
      {
        title: "Leak and wax ring repair",
        description: "Stop leaks at the base, supply line, shutoff, or tank connection before water damage spreads.",
      },
      {
        title: "New toilet installation",
        description: "Install replacement or upgraded fixtures with proper sealing, testing, and cleanup.",
      },
      {
        title: "Commercial restroom fixture replacement",
        description: "Replace worn units in customer or staff restrooms with minimal operational disruption.",
      },
      {
        title: "Water-saving upgrades",
        description: "Swap older fixtures for newer models when efficiency and reliability matter more than repeated repair calls.",
      },
    ],
    process: [
      {
        title: "Confirm repair or replacement needs",
        description: "Check the fixture condition, leak source, clog pattern, and overall install quality before recommending work.",
      },
      {
        title: "Repair or replace cleanly",
        description: "Handle the repair or installation with the right seal, hardware, alignment, and fixture testing.",
      },
      {
        title: "Verify flush and finish",
        description: "Test for leaks, flush quality, shutoff function, and a clean final setup before wrapping up.",
      },
    ],
    faqs: [
      {
        question: "Should I repair or replace my toilet?",
        answer:
          "If the issue is isolated to parts or a seal, repair often makes sense. If the fixture is older, cracked, or repeatedly failing, replacement can be the stronger value.",
      },
      {
        question: "Can you install customer-supplied toilets?",
        answer:
          "Yes. We can install customer-supplied fixtures when the model is a good fit for the space and rough-in requirements.",
      },
      {
        question: "Do you work on commercial restroom toilets?",
        answer:
          "Yes. We handle both residential and commercial restroom toilet repairs and replacements.",
      },
    ],
    quickPoints: ["Running toilets", "Leak repairs", "Fixture replacement", "Commercial restroom work"],
  },
  "emergency-plumbing": {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    hubTitle: "Emergency Plumbing Services",
    hubDescription:
      "Emergency plumbing service pages for burst pipes, active leaks, backups, overflowing toilets, and urgent water heater issues.",
    heroSummary:
      "Fast plumbing response for active leaks, burst pipes, backups, shutoff problems, and urgent plumbing situations that cannot wait.",
    intro:
      "This service hub explains how Above All handles urgent plumbing calls before visitors jump to the city page that matches where they need service.",
    image: "/emergency-plumbing-service-call.jpg",
    capabilities: [
      {
        title: "Burst pipe response",
        description: "Move quickly on active pipe failures that threaten walls, flooring, or daily operations.",
      },
      {
        title: "Leak triage",
        description: "Find the leak source, limit damage, and determine whether the repair can be completed immediately.",
      },
      {
        title: "Overflowing toilet emergencies",
        description: "Handle fixture overflows and confirm whether the issue is isolated or tied to a broader drain problem.",
      },
      {
        title: "Drain and sewer backups",
        description: "Address backup conditions that make bathrooms, kitchens, or tenant spaces unusable.",
      },
      {
        title: "Water shutoff troubleshooting",
        description: "Help when the main shutoff, angle stop, or fixture isolation point is not working as expected.",
      },
      {
        title: "Urgent water heater issues",
        description: "Respond when a leaking or failed water heater needs immediate attention to limit disruption or damage.",
      },
    ],
    process: [
      {
        title: "Call and triage",
        description: "Prioritize the situation by phone so the response matches the actual urgency and likely plumbing risk.",
      },
      {
        title: "Stop damage first",
        description: "Stabilize the plumbing issue, isolate the affected area, and protect the property where possible.",
      },
      {
        title: "Repair or stage the next step",
        description: "Complete the fix when possible or set up the cleanest follow-up path when larger work is needed.",
      },
    ],
    faqs: [
      {
        question: "What counts as a plumbing emergency?",
        answer:
          "Active leaks, burst pipes, backups, overflowing toilets, no shutoff control, and water heater failures that threaten damage or loss of function are common emergency calls.",
      },
      {
        question: "Do you offer after-hours response?",
        answer:
          "Yes. Emergency plumbing support is available for urgent situations that cannot reasonably wait for standard scheduling.",
      },
      {
        question: "What should I do before the plumber arrives?",
        answer:
          "If it is safe, shut off the local or main water supply, clear the affected area, and document active leaking or overflow conditions for faster triage.",
      },
    ],
    quickPoints: ["Active leaks", "Burst pipes", "Backup response", "Urgent shutoff help"],
  },
  "water-heater-installation-repair": {
    slug: "water-heater-installation-repair",
    name: "Water Heater Installation & Repair",
    hubTitle: "Water Heater Installation & Repair",
    hubDescription:
      "Water heater service pages for repair, replacement, installation, tankless troubleshooting, and hot water failures.",
    heroSummary:
      "Repair or replace standard and tankless water heaters when hot water drops out, recovery slows down, or the unit starts leaking.",
    intro:
      "This service hub explains how Above All handles water heater repairs and replacements before visitors choose the city page that matches their property.",
    image: "/emergency-plumbing-service-call.jpg",
    capabilities: [
      {
        title: "Tank water heater repair",
        description: "Handle common repair issues such as no hot water, poor recovery, pilot problems, and leaking fittings.",
      },
      {
        title: "Tankless water heater service",
        description: "Troubleshoot tankless performance issues, ignition problems, and inconsistent temperature complaints.",
      },
      {
        title: "Water heater replacement",
        description: "Replace failing units when repair is no longer the cleanest or most cost-effective path.",
      },
      {
        title: "New water heater installation",
        description: "Install properly sized systems for homes, rentals, and smaller commercial applications.",
      },
      {
        title: "Safety and shutoff component updates",
        description: "Address valves, expansion components, and connection issues that affect safe operation.",
      },
      {
        title: "Performance diagnosis",
        description: "Check the system before recommending replacement so the next step is tied to the real failure point.",
      },
    ],
    process: [
      {
        title: "Evaluate the system",
        description: "Review the unit age, symptom pattern, visible condition, and expected hot water demand before recommending work.",
      },
      {
        title: "Repair or recommend replacement",
        description: "Choose the cleanest path based on condition, urgency, and whether the existing unit is worth saving.",
      },
      {
        title: "Install, test, and confirm",
        description: "Verify safe startup, hot water delivery, and a clean final handoff before the job is closed out.",
      },
    ],
    faqs: [
      {
        question: "Should I repair or replace my water heater?",
        answer:
          "That depends on the age of the unit, the failure point, and whether the repair meaningfully extends reliable service. We assess that before recommending replacement.",
      },
      {
        question: "Do you work on tank and tankless systems?",
        answer:
          "Yes. We handle both standard tank water heaters and tankless units.",
      },
      {
        question: "How long does installation take?",
        answer:
          "Many replacements can be completed the same day once the scope and unit fit are confirmed, though exact timing depends on the property and setup.",
      },
    ],
    quickPoints: ["No hot water", "Leaking tanks", "Tankless troubleshooting", "Same-day replacement paths"],
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
        "Fast drain cleaning for Menifee kitchens, bathrooms, and main lines when clogs keep coming back or backups start affecting the whole home.",
      whyTitle: "Why Menifee customers call us for drain cleaning",
      whyCopy:
        "Menifee drain calls are often about repeat clogs in active households. The page stays focused on fast recognition, clean clearing, and the next step if the line keeps failing.",
      localProblemsIntro: "Common Menifee drain issues this page is built around:",
      localProblems: [
        "Kitchen drains that slow down after high household use",
        "Shower and tub drains that clog again after basic clearing",
        "Guest bathroom stoppages that spread to more than one fixture",
        "Main line symptoms that need camera inspection before the problem grows",
      ],
      offerTitle: "Menifee drain-cleaning emphasis",
      offerBody:
        "This page leans into fast scheduling and recurring-clog diagnosis so Menifee visitors can identify the problem quickly and move straight to service.",
      proofTitle: "Built for high-use residential plumbing",
      proofBody:
        "The Menifee version of this page is written for busy homes, move-ins, and routine maintenance needs where repeated drain issues cause immediate disruption.",
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
        "Repair or replace Menifee water heaters when hot water drops out, the unit starts leaking, or recovery no longer keeps up with daily use.",
      whyTitle: "Why Menifee customers call us for water heater service",
      whyCopy:
        "Menifee water heater calls usually need a quick decision between repair and replacement. This page keeps the message focused on hot-water reliability and practical next steps.",
      localProblemsIntro: "Common Menifee water heater problems include:",
      localProblems: [
        "Hot water running out too quickly in active households",
        "Leaking tanks or fittings that need immediate attention",
        "Newer homes needing clean replacement planning without guesswork",
        "Tankless systems with inconsistent temperature performance",
      ],
      offerTitle: "Menifee water-heater emphasis",
      offerBody:
        "This page puts no-hot-water urgency and replacement clarity front and center so Menifee visitors can decide faster and move into scheduling.",
      proofTitle: "A strong fit for home comfort and turnover timing",
      proofBody:
        "Menifee customers often need water heater work that fits busy family routines, move-in timelines, and straightforward replacement decisions.",
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
        "Urgent plumbing response for Riverside leaks, burst pipes, backups, and failures that need fast triage across homes, rentals, and commercial properties.",
      whyTitle: "Why Riverside customers call us for emergency plumbing",
      whyCopy:
        "Riverside emergency calls often come from mixed-age properties where a simple symptom can point to a larger plumbing problem. The page is built to support that urgency without losing clarity.",
      localProblemsIntro: "Common Riverside emergency plumbing calls include:",
      localProblems: [
        "Burst or leaking supply lines in older sections of the property",
        "Drain backups that affect multiple units or fixtures",
        "Commercial restroom overflows that interrupt operations",
        "Water heater leaks that need immediate shutdown and next-step planning",
      ],
      offerTitle: "Riverside emergency-service emphasis",
      offerBody:
        "This page balances call-first urgency with clearer triage language for Riverside visitors who may be dealing with more complex plumbing conditions.",
      proofTitle: "Built for higher-triage emergency calls",
      proofBody:
        "Riverside emergency service copy needs to handle both simple active leaks and plumbing failures that require a stronger diagnosis before the full repair path is obvious.",
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
