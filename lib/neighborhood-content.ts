export type NeighborhoodServicePage = {
  city: "menifee"
  service: "drain-cleaning"
  slug: "sun-city" | "menifee-lakes"
  urlSlug: "sun-city-drain-cleaning" | "menifee-lakes-drain-cleaning"
  name: string
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
    urlSlug: "sun-city-drain-cleaning",
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
  {
    city: "menifee",
    service: "drain-cleaning",
    slug: "menifee-lakes",
    urlSlug: "menifee-lakes-drain-cleaning",
    name: "Menifee Lakes",
    metaDescription:
      "Drain clearing in Menifee Lakes for slow kitchen, shower, laundry, and main drains. Licensed local help for repeat clogs and backups.",
    heroTitle: "Drain Clearing in Menifee Lakes",
    heroSummary:
      "A slow kitchen sink, shower, laundry line, or toilet in Menifee Lakes can be a minor clog—or an early sign that a larger drain line needs attention. We help homeowners move from the symptom to a practical clearing plan.",
    localContext: [
      "Menifee Lakes is a recognizable master-planned Menifee community, developed around a lake, golf course, homes, parks, schools, and commercial areas. In day-to-day homes, the drain problem still comes down to what is happening at the fixture and whether another part of the plumbing system is showing the same symptom.",
      "A kitchen drain that slows after meal cleanup, a shower that holds water, or a laundry drain that struggles when the washer empties should be looked at in context. If only one fixture is affected, the issue may be local. If a toilet affects a nearby tub or more than one drain is slowing, the line may need more than a quick reset.",
      "Warm Menifee weather often means showers, laundry, and cooking are spread across the day. That use does not cause a clog by itself, but it makes a drain with an existing buildup or restriction more noticeable. We focus on the actual drainage pattern and recommend the right next step without making assumptions from the neighborhood name alone.",
    ],
    fastFacts: [
      { label: "A planned Menifee community", detail: "The City of Menifee identifies Menifee Lakes as one of its planned developments." },
      { label: "Established in the late 1980s", detail: "Menifee Lakes was developed in 1989 and helped drive the area's residential growth." },
      { label: "Built around a lake and golf course", detail: "The original community was developed around a 45-acre artificial lake and golf course." },
    ],
    commonProblems: [
      "Kitchen drains that keep slowing after food preparation and cleanup",
      "Shower and tub drains that pool water or gurgle after use",
      "Laundry drains that struggle when a washing machine discharges",
      "Multiple fixtures showing symptoms at the same time, which calls for a closer look at the drain line",
    ],
    warningSigns: [
      "The same drain returns to a slow or clogged state soon after a temporary fix",
      "Flushing a toilet changes the water level in a nearby shower, tub, or sink",
      "Water backs up, bubbles, or produces a persistent drain odor",
      "A single-fixture problem starts affecting normal use of more than one room",
    ],
    faqs: [
      { question: "Can you help with recurring kitchen or shower drain clogs in Menifee Lakes?", answer: "Yes. We look at the affected fixture, how often the problem returns, and whether other drains are involved to determine the appropriate level of cleaning or diagnosis." },
      { question: "Do multiple slow drains mean I have a main-line problem?", answer: "Not always, but multiple affected fixtures are a reason to look beyond a single sink or shower drain. We can assess the symptoms and recommend the right next step." },
      { question: "Should I keep using a chemical drain cleaner while I wait?", answer: "Repeated chemical use is not a reliable answer for a recurring clog and can complicate service. Call us with the symptoms so we can help you choose a safer next step." },
    ],
  },
]

export function getNeighborhoodServicePage(city: string, service: string, neighborhood: string) {
  return neighborhoodServicePages.find(
    (page) => page.city === city && page.service === service && page.slug === neighborhood,
  )
}

export function getNeighborhoodServicePageByUrl(city: string, urlSlug: string) {
  return neighborhoodServicePages.find((page) => page.city === city && page.urlSlug === urlSlug)
}
