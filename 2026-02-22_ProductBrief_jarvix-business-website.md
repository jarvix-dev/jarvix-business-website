# JARVIX — Landing Page (GitHub Pages) — Product Brief

## Context
We need a fast, professional NL landing page for JARVIX as “Hybrid AI Development Studio + Automation Partner”. Hosting must be GitHub Pages (static). No AI hype; outcome-driven.

## Objectives
- Communicate offer in <60 seconds (hero clarity)
- Drive leads via CTA: “Plan een gratis scan”
- Explain the 2 pillars (JARVIX dev vs JARVIX automation)
- Establish trust (process, transparency, privacy)

## Requirements / Analysis
- Static site, assets local, mobile-first
- Sections: hero, problems, services (2 pillars), how it works, pricing ranges, about/why, CTA+form+FAQ
- Extra pages: /privacy, /terms, /404
- Cookie notice: functional only, no tracking
- Form: Formspree placeholder + mailto fallback

## Decisions
- Stack: Vite + React + TS + Tailwind (best fit for Pages)
- Deploy: GitHub Actions → Pages
- Base path via `VITE_BASE` env (repo path)

## Risks
- Over-promising timelines → keep copy realistic
- Missing legal details → privacy/terms are minimal placeholders; needs final business details

## Conclusion
MVP is implemented and ready for Pages configuration.
