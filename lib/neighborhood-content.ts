export type NeighborhoodServicePage = {
  city: "menifee"
  service: "drain-cleaning"
  slug: "sun-city"
  name: "Sun City"
  metaDescription: string
  heroTitle: string
  heroSummary: string
  localContext: string[]
  fastFacts: Array<{ label: string; detail: string }>
  commonProblems: string[]
  warningSigns: string[]
  faqs: Array<{ question: string; answer: string }>
}

export const neighborhoodServicePages: NeighborhoodServicePage[] = [
  {
    city: "menifee",
    service: "drain-cleaning",
    slug: "sun-city",
    name: "Sun City",
    metaDescription:
      "Drain clearing in Sun City, Menifee for slow kitchen, shower, laundry, and main drains. Licensed local help for recurring clogs and backups.",
    heroTitle: "Drain Clearing in Sun City, Menifee",
    heroSummary:
      "When a kitchen sink, shower, laundry line, or toilet drain in Sun City starts moving slowly, the goal is not just to get water moving today. It is to find out whether the line needs a focused clearing or whether a repeat problem is developing farther down the drain.",
    localContext: [
      "Sun City is one of Menifee's long-established communities, with homes built across different decades and a mix of residential and commercial activity. That matters because a drain issue is rarely solved by guessing from the fixture alone. A shower that backs up, a kitchen sink that keeps slowing down, or a toilet that affects a nearby tub can each point to a different part of the plumbing system.",
      "Customers near McCall Boulevard, Cherry Hills Boulevard, and throughout the Sun City area often call after a drain has been getting slower for a while and then finally stops cooperating. We start with the symptom, ask what else in the home is affected, and recommend the right level of drain cleaning instead of treating every clog as the same job.",
      "Hot Inland Empire days can mean more showers, laundry, and kitchen use spread across the day. That extra use does not create a clog by itself, but it can make an existing slow line much harder to ignore. If water is pooling, gurgling, smelling off, or returning after a temporary fix, it is a good time to have the line checked.",
    ],
    fastFacts: [
      {
        label: "A foundational Menifee community",
        detail: "Sun City helped shape Menifee's early growth and remains centrally located in the city.",
      },
      {
        label: "Built across decades",
        detail: "The community's history goes back to the early 1960s, so plumbing systems and fixture ages can vary from home to home.",
      },
      {
        label: "A recognizable local corridor",
        detail: "McCall Boulevard and Cherry Hills Boulevard are familiar reference points for homes and businesses in and around Sun City.",
      },
    ],
    commonProblems: [
      "Kitchen drains that drain slowly after dishes and meal cleanup, then clog again within days or weeks",
      "Shower or tub drains that hold water around the feet or make gurgling sounds after use",
      "Laundry drains that back up or overflow when the washer empties",
      "More than one fixture acting up at once, which can mean the issue is farther down the line than a single sink trap",
    ],
    warningSigns: [
      "A plunger or store-bought product helps briefly, but the same drain keeps returning to the same problem",
      "Flushing a toilet changes the water level in a nearby shower, tub, or sink",
      "There is standing water, a drain odor, bubbling, or water appearing where it should not",
      "The problem has moved beyond one fixture or is interrupting normal use of the home",
    ],
    faqs: [
      {
        question: "Do you handle recurring drain clogs in Sun City homes?",
        answer:
          "Yes. If a clog returns after basic clearing, we look at the pattern and the affected fixtures to determine whether the line needs a more thorough cleaning or further diagnosis.",
      },
      {
        question: "When is a slow drain more than a simple clog?",
        answer:
          "When several fixtures are affected, water backs up elsewhere, or the issue returns quickly, it may be deeper in the drain system. Those symptoms are worth a professional evaluation rather than repeated temporary fixes.",
      },
      {
        question: "Can you help with a drain backup that is happening now?",
        answer:
          "Call us. We can discuss what is backing up and help determine the fastest appropriate next step for the property.",
      },
    ],
  },
]

export function getNeighborhoodServicePage(city: string, service: string, neighborhood: string) {
  return neighborhoodServicePages.find(
    (page) => page.city === city && page.service === service && page.slug === neighborhood,
  )
}
