# jarvix-business-website

Promotie/bedrijfswebsite voor **JARVIX** (Hybrid AI Development Studio + Automation Partner).

**Hosting:** GitHub Pages (static).

## Stack
- Vite + React + TypeScript
- Tailwind CSS
- React Router (routes: `/`, `/privacy`, `/terms`, 404)

## Install & run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy naar GitHub Pages
1) Repo → Settings → Pages
2) Source: **GitHub Actions**
3) Push naar `main` → automatische deploy

### Base path (belangrijk)
Voor Pages onder een repo werkt de site onder `/<repo>/`.

- Workflow zet `VITE_BASE=/jarvix-business-website/`.
- Als je later een custom domain gebruikt: zet `VITE_BASE=/`.

## Contactformulier
Default: Formspree placeholder.
- Vervang `https://formspree.io/f/REPLACE_ME` in `src/pages/Home.tsx`.
- Fallback: mailto knop blijft.

## Go-live checklist
- [ ] Formspree endpoint ingevuld
- [ ] Canonical URL aangepast in `index.html`
- [ ] OG image vervangen (`public/og.png`)
- [ ] Pages enabled (GitHub Actions)
