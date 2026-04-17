# Local Plumbing SEO Tracker

This file tracks the plumbing location rollout so content work stays visible and ordered.

## Current URL model

- Service hubs: `/services/plumbing/{service}`
- City hubs: `/locations/{city}`
- City-service pages: `/locations/{city}/{service}`

## Status key

- `done`: content and structure are in good shape
- `templated`: page is live but still relies too heavily on shared template copy
- `optimizing`: active content pass
- `next`: queued after current work

## Service hubs

- `done` `/services/plumbing/drain-cleaning`
- `done` `/services/plumbing/toilet-repair-installation`
- `done` `/services/plumbing/emergency-plumbing`
- `done` `/services/plumbing/water-heater-installation-repair`

## City hubs

- `templated` `/locations/menifee`
- `done` `/locations/riverside`
- `templated` `/locations/perris`
- `templated` `/locations/moreno-valley`
- `done` `/locations/homeland`

## City-service pages

### Priority 1

- `done` `/locations/menifee/drain-cleaning`
- `done` `/locations/riverside/emergency-plumbing`
- `done` `/locations/menifee/water-heater-installation-repair`

### Priority 2

- `done` `/locations/riverside/drain-cleaning`
- `done` `/locations/riverside/toilet-repair-installation`
- `done` `/locations/riverside/water-heater-installation-repair`
- `done` `/locations/menifee/toilet-repair-installation`

### Remaining templated pages

- `templated` `/locations/menifee/emergency-plumbing`
- `templated` `/locations/perris/drain-cleaning`
- `templated` `/locations/perris/toilet-repair-installation`
- `templated` `/locations/perris/emergency-plumbing`
- `templated` `/locations/perris/water-heater-installation-repair`
- `templated` `/locations/moreno-valley/drain-cleaning`
- `templated` `/locations/moreno-valley/toilet-repair-installation`
- `templated` `/locations/moreno-valley/emergency-plumbing`
- `templated` `/locations/moreno-valley/water-heater-installation-repair`
- `templated` `/locations/homeland/emergency-plumbing`
- `templated` `/locations/homeland/water-heater-installation-repair`

## What "optimized" means

- Longer local intro written for the exact city + service pair
- Better local proof and decision support
- More specific warning signs or common-call triggers
- Stronger CTA language tied to the actual service
- Enough variation that the page reads like a real local landing page, not a city-name swap
