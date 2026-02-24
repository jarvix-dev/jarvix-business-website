import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Hammer,
  MessageSquare,
  PieChart,
  Rocket,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import { SiteShell } from '../components/SiteShell'

/* ─── Data: Stats ─── */
const STATS = [
  { value: '2 weken', label: 'Gemiddelde levertijd website' },
  { value: '100%', label: 'Maatwerk. Geen templates' },
  { value: 'NL · BE', label: 'Lokaal focus, directe lijn' },
  { value: '24h', label: 'Reactietijd op vragen' },
]

/* ─── Data: Doelgroepen ─── */
const AUDIENCES = [
  {
    icon: Hammer,
    title: 'Bouw & Installatie',
    desc: 'Stop met papierwerk in de bus. Digitale werkbonnen, urenregistratie en projectplanning die wél werkt.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'hover:border-amber-500/30',
  },
  {
    icon: PieChart,
    title: 'Zakelijke Dienstverlening',
    desc: 'Accountants en consultants. Automatiseer uw rapportages en cliënt-onboarding. Meer tijd voor advies.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/30',
  },
  {
    icon: Zap,
    title: 'Startups & Scale-ups',
    desc: 'Snel een MVP live om uw idee te valideren. Geen maanden ontwikkeltijd, maar weken.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'hover:border-purple-500/30',
  },
]

/* ─── Data: Werkwijze ─── */
const STEPS = [
  {
    step: '01',
    title: 'Intake',
    sub: 'Dag 1',
    desc: '20 minuten kennismaken. Wij stellen de juiste vragen, u legt uit wat u wilt bereiken. Geen technisch jargon, gewoon helder in kaart brengen.',
    icon: MessageSquare,
    color: 'text-brand',
    bg: 'bg-brand/10',
    line: 'bg-brand/30',
  },
  {
    step: '02',
    title: 'Bouwen',
    sub: '1–3 weken',
    desc: 'We bouwen terwijl u doorwerkt. U volgt de voortgang live en geeft feedback wanneer het uitkomt. Geen verrassingen aan het einde.',
    icon: Code2,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    line: 'bg-cyan-400/30',
  },
  {
    step: '03',
    title: 'Oplevering',
    sub: 'Klaar',
    desc: 'Live, getest en volledig in uw beheer. Inclusief korte handleiding. Wij blijven beschikbaar voor vragen en doorontwikkeling.',
    icon: Rocket,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    line: 'bg-emerald-400/30',
  },
]

/* ─── Data: Use Cases ─── */
const USE_CASES = [
  {
    title: 'Het Klantportaal',
    tags: ['Webapp', 'Service'],
    stat: '-50% telefoontjes',
    statColor: 'text-emerald-400',
    desc: 'Klanten belden dagelijks over orderstatus. Nu loggen ze in op een veilige omgeving om status en documenten direct in te zien.',
  },
  {
    title: 'Leads Dashboard',
    tags: ['Integratie', 'Marketing'],
    stat: '0 leads gemist',
    statColor: 'text-emerald-400',
    desc: 'Aanvragen kwamen via mail, telefoon en LinkedIn binnen. Nu landen ze automatisch in één centraal overzicht met auto-opvolging.',
  },
  {
    title: 'Slimme Werkbonnen',
    tags: ['Mobiel', 'Administratie'],
    stat: 'Geen papierwerk meer',
    statColor: 'text-emerald-400',
    desc: 'Buitendienst vult uren en materialen in op hun telefoon. Direct zichtbaar op kantoor en klaar voor facturatie.',
  },
]

/* ─── Data: FAQ ─── */
const FAQ_ITEMS = [
  {
    q: 'Hoe lang duurt een gemiddeld project?',
    a: 'Een eenvoudige website is in 5–10 werkdagen live. Een webapp of MVP duurt gemiddeld 2–4 weken. We werken altijd met een heldere planning zodat u precies weet wanneer u wat kunt verwachten.',
  },
  {
    q: 'Moet ik technisch onderlegd zijn om met u samen te werken?',
    a: 'Nee. Wij vertalen uw bedrijfswensen naar werkende software. U hoeft niets te weten van code of systemen — u beschrijft het probleem, wij lossen het op.',
  },
  {
    q: 'Wat gebeurt er na de oplevering?',
    a: 'U krijgt de volledige broncode en toegang tot alle systemen. Wij bieden standaard 30 of 60 dagen nazorg, afhankelijk van het pakket. Daarna kunt u kiezen voor een onderhoudsovereenkomst.',
  },
  {
    q: 'Werken jullie met bestaande systemen zoals boekhoudpakketten?',
    a: 'Ja. We fungeren als integratielaag tussen bestaande tools (Exact, Teamleader, Snelstart, etc.) en uw nieuwe website of applicatie. We vervangen uw huidige software niet — we laten het beter samenwerken.',
  },
  {
    q: 'Wat kost een project?',
    a: 'Dat hangt af van de scope. Na de gratis intake sturen we een vaste offerte op maat. Geen uurtje-factuurtje: u weet op voorhand precies wat het kost en wat u krijgt.',
  },
]

/* ─── FAQ Item Component ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border border-line rounded-2xl overflow-hidden cursor-pointer hover:border-brand/30 transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-semibold text-white text-sm sm:text-base pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </div>
      {open && (
        <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-line pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <SiteShell>
      {/* Achtergrond Grid */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative z-10 pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand/15 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

        <div className="container text-center max-w-4xl mx-auto px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand mb-8 animate-enter">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Nu beschikbaar voor nieuwe projecten
          </div>

          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold tracking-tight text-white mb-6 leading-[1.1] animate-enter delay-100">
            Websites en software die<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-cyan-400 to-brand">
              uw bedrijf vooruithelpen.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-enter delay-200">
            JARVIX bouwt op maat gemaakte websites, webapplicaties en automatiseringen
            voor kleine en middelgrote bedrijven in Nederland en België.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-enter delay-300">
            <a
              href="#contact"
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 text-base font-bold text-white hover:bg-brand-strong hover:scale-[1.02] transition-all shadow-lg shadow-brand/25"
            >
              Gratis intake aanvragen <ArrowRight size={18} />
            </a>
            <a
              href="#werkwijze"
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 backdrop-blur px-8 text-base font-medium text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all"
            >
              Hoe werkt het?
            </a>
          </div>

          {/* Trust Signals */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium text-slate-500 animate-enter delay-300">
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-brand" /> Vaste prijs, geen verrassingen</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-brand" /> Volledige broncode in uw bezit</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-brand" /> Persoonlijk contact</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS BAR
      ══════════════════════════════ */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="container px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/5">
            {STATS.map((s, i) => (
              <div key={i} className="text-center lg:px-8">
                <div className="text-2xl sm:text-3xl font-bold text-brand mb-1">{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          VOOR WIE?
      ══════════════════════════════ */}
      <section className="relative z-10 py-24">
        <div className="container px-6">
          <div className="text-center mb-14">
            <span className="text-brand font-semibold uppercase tracking-widest text-xs mb-3 block">Doelgroep</span>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-4">Voor wie werken wij?</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Wij spreken de taal van de ondernemer, niet alleen die van de programmeur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AUDIENCES.map((item, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group ${item.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={item.color} size={24} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WERKWIJZE
      ══════════════════════════════ */}
      <section id="werkwijze" className="relative z-10 py-24 bg-slate-900/20 border-y border-white/5">
        <div className="container px-6">
          <div className="text-center mb-14">
            <span className="text-brand font-semibold uppercase tracking-widest text-xs mb-3 block">Aanpak</span>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-4">Van idee naar live in drie stappen.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Geen lange trajecten, geen vage offertes. Wij werken snel en transparant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-brand/20 via-cyan-400/20 to-emerald-400/20 z-0" />

            {STEPS.map((s, i) => (
              <div key={i} className="relative z-10 glass-card rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-2xl ${s.bg} flex items-center justify-center mx-auto mb-6`}>
                  <s.icon className={s.color} size={28} />
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-xs font-bold text-slate-500 font-mono">{s.step}</span>
                  <span className="text-xs text-slate-600">·</span>
                  <span className={`text-xs font-semibold ${s.color}`}>{s.sub}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-strong transition-colors text-sm">
              Plan uw gratis intake <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          RESULTATEN
      ══════════════════════════════ */}
      <section className="relative z-10 py-24">
        <div className="container px-6">
          <div className="glass-card rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/8 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="md:flex items-end justify-between mb-12">
                <div className="max-w-xl">
                  <span className="text-brand font-semibold uppercase tracking-widest text-xs mb-2 block">Resultaten</span>
                  <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-3">
                    Geen loze beloftes,<br />maar meetbaar resultaat.
                  </h2>
                  <p className="text-slate-400">
                    Voorbeelden van wat wij voor bedrijven als het uwe realiseren.
                  </p>
                </div>
                <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-brand font-bold hover:text-brand-strong transition-colors text-sm mt-6 md:mt-0">
                  Ook tijd besparen? <ChevronRight size={14} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {USE_CASES.map((uc, i) => (
                  <div key={i} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-brand/20 transition-colors">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {uc.tags.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{uc.title}</h3>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">{uc.desc}</p>
                    <div className={`pt-4 border-t border-white/5 flex items-center gap-2 font-bold text-sm ${uc.statColor}`}>
                      <BarChart3 size={15} /> {uc.stat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          DIENSTEN
      ══════════════════════════════ */}
      <section id="diensten" className="relative z-10 py-24 bg-slate-900/20 border-y border-white/5">
        <div className="container px-6">
          <div className="text-center mb-14">
            <span className="text-brand font-semibold uppercase tracking-widest text-xs mb-3 block">Expertise</span>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-4">Twee specialismen. Één partner.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Development voor uw online aanwezigheid, automatisering voor uw interne processen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Development */}
            <div className="glass-card rounded-3xl overflow-hidden group hover:shadow-glow transition-all duration-500">
              <div className="p-8 border-b border-white/5">
                <div className="inline-flex items-center gap-2 rounded-lg bg-brand/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-brand">
                  <Code2 size={13} /> Development
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Websites & Software</h3>
                <p className="text-slate-400 text-sm">Het digitale fundament van uw bedrijf. Snel, schaalbaar en volledig in uw bezit.</p>
              </div>
              <div className="p-8 bg-slate-900/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { t: 'High-end Websites', d: 'Snel, veilig en pixel-perfect. Uw visitekaartje online.' },
                    { t: 'Webapplicaties & MVP', d: 'Maatwerk software voor uw unieke bedrijfsproces.' },
                    { t: 'Klantportalen', d: 'Beveiligde omgevingen voor uw klanten en teams.' },
                  ].map((item, j) => (
                    <div key={j}>
                      <h4 className="font-semibold text-slate-200 mb-1 flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                        {item.t}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed pl-3.5">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Automatisering */}
            <div className="glass-card rounded-3xl overflow-hidden group hover:shadow-amber-glow transition-all duration-500">
              <div className="p-8 border-b border-white/5">
                <div className="inline-flex items-center gap-2 rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-amber-500">
                  <Wrench size={13} /> Automatisering
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Proces & AI</h3>
                <p className="text-slate-400 text-sm">Elimineer handwerk. Laat uw systemen voor u werken, niet andersom.</p>
              </div>
              <div className="p-8 bg-slate-900/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { t: 'Systeemkoppelingen', d: 'Wij laten uw softwarepakketten met elkaar praten.' },
                    { t: 'Document Generators', d: 'Rapporten, contracten en bevestigingen met één klik.' },
                    { t: 'E-mail Flows', d: 'Automatische opvolging en status-updates naar uw klanten.' },
                    { t: 'AI Assistenten', d: 'Slimme chatbots die uw klantenservice ontlasten.' },
                  ].map((item, j) => (
                    <div key={j}>
                      <h4 className="font-semibold text-slate-200 mb-1 flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                        {item.t}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed pl-3.5">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          FAQ
      ══════════════════════════════ */}
      <section className="relative z-10 py-24 bg-slate-900/20 border-y border-white/5">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-brand font-semibold uppercase tracking-widest text-xs mb-3 block">FAQ</span>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-4">Veelgestelde vragen.</h2>
            </div>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section id="contact" className="relative z-10 py-32">
        <div className="container px-6">
          {/* Glow */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-4">Klaar om te versnellen?</h2>
            <p className="text-slate-400 mb-10">
              Vraag een gratis intake aan (20 min). Wij kijken samen waar uw kansen liggen.
              Geen verplichtingen, wél direct advies.
            </p>

            <div className="glass-card rounded-3xl p-8 text-left">
              <form
                className="space-y-4"
                action="https://formspree.io/f/REPLACE_ME"
                method="POST"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 ml-1">Naam</label>
                    <input
                      name="naam"
                      required
                      placeholder="Jan de Vries"
                      className="w-full rounded-xl border border-line bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 ml-1">Bedrijf</label>
                    <input
                      name="bedrijf"
                      required
                      placeholder="Uw bedrijfsnaam"
                      className="w-full rounded-xl border border-line bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 ml-1">E-mailadres</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="u@bedrijf.nl"
                    className="w-full rounded-xl border border-line bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all text-sm"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <label className="text-xs font-semibold text-slate-500 ml-1">Waarmee kunnen wij helpen?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 p-3.5 rounded-xl border border-line bg-slate-900/30 cursor-pointer hover:border-brand/40 hover:bg-slate-900/70 transition-all">
                      <input type="radio" name="interesse" value="website" className="accent-brand w-4 h-4" />
                      <span className="text-sm font-medium text-slate-300">Nieuwe Website / App</span>
                    </label>
                    <label className="flex items-center gap-3 p-3.5 rounded-xl border border-line bg-slate-900/30 cursor-pointer hover:border-amber-500/30 hover:bg-slate-900/70 transition-all">
                      <input type="radio" name="interesse" value="automatisering" className="accent-amber-500 w-4 h-4" />
                      <span className="text-sm font-medium text-slate-300">Automatisering / AI</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-semibold text-slate-500 ml-1">Bericht <span className="font-normal text-slate-600">(optioneel)</span></label>
                  <textarea
                    name="bericht"
                    rows={3}
                    placeholder="Kort omschrijven wat u nodig heeft..."
                    className="w-full rounded-xl border border-line bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[52px] rounded-xl bg-brand px-6 text-base font-bold text-white hover:bg-brand-strong transition-all shadow-lg shadow-brand/20 mt-2"
                >
                  Intake aanvragen — gratis &amp; vrijblijvend
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/5 text-center">
                <p className="text-xs text-slate-500 flex items-center justify-center gap-2 flex-wrap">
                  <ShieldCheck size={13} /> Uw gegevens worden nooit gedeeld met derden.
                  <span className="text-slate-700 hidden sm:inline">·</span>
                  <a href="mailto:jarvix.agent@protonmail.com" className="hover:text-brand transition-colors">
                    Liever direct mailen?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
