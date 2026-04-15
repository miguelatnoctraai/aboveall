# Above All Maintenance & Repair

Operational README and handoff notes for the Above All website.

## Overview

This project is a Next.js 16 App Router site for Above All Maintenance & Repair.

The site currently includes:

- A general marketing home page
- Service pages for plumbing, electrical, construction, painting, welding, and parking lot work
- A contact page
- A test email page
- A dedicated paid-traffic plumbing landing page at `/lp/plumbing`

This repo appears to have been originally generated or managed through `v0`, and the original default branch name was a generated branch:

- `v0/negusbas-621e9775`

As part of takeover cleanup, a new `main` branch has been created from the current working production codebase so future development can move to a normal branch name.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI primitives
- Lucide icons
- Vercel Analytics
- Resend for email delivery

## Important Routes

- `/` Home page
- `/about`
- `/contact`
- `/careers`
- `/services`
- `/services/plumbing`
- `/services/electrical`
- `/services/construction`
- `/services/painting`
- `/services/welding`
- `/services/parking-lot`
- `/blog`
- `/test-email`
- `/lp/plumbing` Paid ad landing page

## Landing Page Notes

The paid plumbing landing page lives at:

- `app/lp/plumbing/page.tsx`

Key behavior:

- Built to match the premium dark/gold style of the home page
- Designed for paid traffic
- Intentionally removes the normal site navigation and promo popup on `/lp/*` routes
- Uses phone and email CTAs only
- Includes a placeholder block for a future GHL widget

The route isolation is handled by:

- `components/site-shell.tsx`

That component checks the pathname and skips the normal global chrome for landing-page routes under `/lp/`.

## Layout / Shell Structure

Global app layout:

- `app/layout.tsx`

Default shell components:

- `components/navbar.tsx`
- `components/footer.tsx`
- `components/promo-popup.tsx`

Landing-page shell override:

- `components/site-shell.tsx`

If a future dev adds more paid landing pages, keep them under `/lp/` or update `site-shell.tsx` accordingly.

## Forms / Lead Flow

Main lead handling API:

- `app/api/send/route.ts`

Current email provider:

- Resend

Known behavior:

- Contact and quote-style forms post to `/api/send`
- The API expects `RESEND_API_KEY`
- Emails are sent to `frank@aboveallmaintenancerepair.com`
- The API includes a GET health-style response that helps verify whether `RESEND_API_KEY` is configured

## reCAPTCHA

Client component:

- `components/recaptcha.tsx`

Important note:

- The current reCAPTCHA site key is hardcoded in the component instead of being read from an environment variable.

That is functional, but not ideal. A future cleanup should move the site key to something like:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`

## Environment Variables

Confirmed required:

- `RESEND_API_KEY`

Likely operational dependencies outside this repo:

- Resend account/domain configuration
- Google reCAPTCHA configuration
- Vercel project environment variables

## Local Development

Install dependencies:

```powershell
npm.cmd install
```

Run dev server:

```powershell
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

Paid landing page:

```text
http://localhost:3000/lp/plumbing
```

Important Windows note:

- On this machine, `npm` through PowerShell was blocked by execution policy.
- `npm.cmd` worked.

## Deployment / Ownership Notes

Current repo remote:

- `origin = https://github.com/miguelatnoctraai/aboveall.git`

Takeover status known so far:

- GitHub repo is under the current owner account
- Code pushes are working
- A new `main` branch has been created for cleanup and future use
- The old generated branch still exists and may still be the default branch in GitHub and/or the production branch in Vercel

After handoff, verify in GitHub and Vercel:

1. GitHub default branch is `main`
2. Vercel production branch is `main`
3. Environment variables are present in Vercel
4. Custom domain points to the correct Vercel project
5. The project belongs to the correct Vercel account/team, not a consultant account

## Known Issues

These were observed during takeover work:

1. `npm run lint` does not currently work because `eslint` is referenced in `package.json` but is not installed in the repo.
2. `next build` failed in the restricted agent session because Google Fonts could not be fetched.
3. `tsc --noEmit` surfaced pre-existing TypeScript issues in:
   - `components/quote-modal.tsx`
   - `components/recaptcha.tsx`
4. There were unrelated local worktree changes present during takeover in files outside the landing-page work. Treat the repo as potentially mid-transition and review `git status` before committing broad changes.

## Files Worth Reading First

For a new developer, start here:

- `app/layout.tsx`
- `components/site-shell.tsx`
- `app/page.tsx`
- `components/hero.tsx`
- `app/contact/page.tsx`
- `app/api/send/route.ts`
- `app/lp/plumbing/page.tsx`
- `components/recaptcha.tsx`

## Suggested Cleanup Backlog

Recommended next steps:

1. Switch GitHub default branch and Vercel production branch to `main`
2. Add proper ESLint setup or remove the broken lint script
3. Fix the existing TypeScript issues in `quote-modal` and `recaptcha`
4. Move the reCAPTCHA site key to an environment variable
5. Confirm the real production env vars and document them outside the repo
6. Decide whether the old `v0/negusbas-621e9775` branch can be retired
7. Replace the GHL placeholder on `/lp/plumbing` with the live widget when ready

## Contact / Business Details Currently Used In Code

- Phone: `951-330-6963`
- Email: `frank@aboveallmaintenancerepair.com`
- License: `#1075924`

Verify these against the business before changing automation, templates, or ad landing pages.
