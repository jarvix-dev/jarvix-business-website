import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  Globe,
  Mail,
  PlugZap,
  Repeat2,
  ShoppingCart,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react'
import { SiteShell } from '../components/SiteShell'

/* ─── Pain points ─── */
const PAIN_POINTS = [
  { icon: Clock,    text: 'Je verliest uren per week aan handmatig werk dat geautomatiseerd kan worden.' },
  { icon: Globe,    text: 'Je website is verouderd of trekt nauwelijks klanten aan.' },
  { icon: FileText, text: 'Offertes, facturen en rapporten maak je nog steeds met de hand.' },
  { icon: Repeat2,  text: 'Systemen praten niet met elkaar — elk platform een apart eilandje.' },
]

/* ─── Webdevelopment services ─── */
const WEB_SERVICES = [
  {
    icon: Globe,
    title: 'Zakelijke website',
    desc: 'Een professioneel visitekaartje dat 24/7 voor je werkt. Snel, duidelijk en mobielvriendelijk.',
  },
  {
    icon: ShoppingCart,
    title: 'Webshop',
    desc: 'Online producten of diensten verkopen met automatische koppeling naar je administratie.',
  },
  {
    icon: Code2,
    title: 'Webapplicatie / intern platform',
    desc: 'Bijv. een klantportaal, offertetool, planningsboard of intern beheerssysteem op maat.',
  },
  {
    icon: Sparkles,
    title: 'MVP / prototype',
    desc: 'Snel testen of een idee werkt — zonder groot budget. Van idee naar werkende demo.',
  },
]

/* ─── Automatisering services ─── */
const AUTO_SERVICES = [
  {
    icon: FileText,
    title: 'Document- en offerteautomatisering',
    desc: 'Offertes, facturen en rapporten worden automatisch aangemaakt op basis van je data.',
  },
  {
    icon: PlugZap,
    title: 'Systeemkoppelingen',
    desc: 'Je CRM, boekhoudsoftware, e-mail en andere tools werken als één geheel samen.',
  },
  {
    icon: Repeat2,
    title: 'E-mail- en notificatieflows',
    desc: 'Automatische opvolging, herinneringen en meldingen — zonder dat jij iets hoeft te doen.',
  },
  {
    icon: Zap,
    title: 'AI-assistent voor je bedrijf',
    desc: 'Een chatbot of AI-tool die werkt met jouw informatie — voor klanten of intern.',
  },
]

/* ─── Stappenplan ─── */
const STEPS = [
  { n: '01', title: 'Gratis intake', desc: 'Korte kennismaking van 20–30 min. We snappen jouw situatie en doel voordat we iets voorstellen.' },
  { n: '02', title: 'Voorstel & prijs', desc: 'Een concreet plan met tijdlijn en eerlijke prijs. Geen verborgen kosten, geen vage uren-tarieven.' },
  { n: '03', title: 'Bouwen & afstemmen', desc: 'We werken in korte rondes. Jij ziet de voortgang en geeft feedback — geen black box.' },
  { n: '04', title: 'Live + overdracht', desc: 'Werkende oplossing, volledige overdracht en nazorg. Doorontwikkeling kan altijd.' },
]

/* ─── Tarieven ─── */
const PRICES = [
  { label: 'Zakelijke website',    range: '€1.500 – €3.000',   note: '+ optioneel onderhoudscontract' },
  { label: 'Webapplicatie / MVP',   range: '€4.000 – €15.000',  note: '+ optioneel onderhoudscontract' },
  { label: 'Automatisering',        range: '€350 – €2.500',     note: 'afhankelijk van scope + koppelingen' },
]

/* ─── FAQ ─── */
const FAQ = [
  ['Moet ik iets van IT weten?', 'Nee. Wij vertalen jouw doel naar een werkende oplossing. Jij hoeft alleen te weten wat je wilt bereiken.'],
  ['Hoe lang duurt het?', 'Een eenvoudige website is er in 2–3 weken. Exacte planning bespreken we tijdens de intake.'],
  ['Werken jullie met bestaande tools?', 'Ja. We koppelen aan wat je al hebt: boekhoudpakket, CRM, e-mail, WhatsApp en meer.'],
  ['Kan ik later uitbreiden?', 'Altijd. We bouwen modulair zodat uitbreiden eenvoudig en betaalbaar blijft.'],
  ['Wat kost onderhoud?', 'Dat regelen we via een vaste maandfee. Hoe groot dat is hangt af van de oplossing.'],
  ['Voor welke sectoren?', 'We werken voor MKB in alle sectoren: bouw, techniek, zakelijke diensten, retail, horeca.'],
]


export default function Home() {
  return (
    <SiteShell>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section
        className="relative container pt-20 pb-24 sm:pt-28 sm:pb-32 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(122,162,255,0.14) 0%, transparent 70%)' }}
      >
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs text-brand mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Webdevelopment &amp; Automatisering · NL/BE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Je volgende project
            <br />
            <span className="text-brand">sneller live</span> — zonder gedoe.
          </h1>

          <p className="mt-6 text-lg text-text-muted max-w-2xl leading-relaxed">
            JARVIX bouwt professionele websites en webapplicaties, en automatiseert bedrijfsprocessen
            met slimme koppelingen en AI-tools. Geen tech-jargon, wél concrete resultaten.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-bg hover:bg-brand-strong transition-colors"
            >
              Plan een gratis intake <ArrowRight size={16} />
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-card px-6 py-3 text-sm text-text hover:border-brand/50 transition-colors"
            >
              Bekijk onze diensten
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              '✓ Doorlooptijd in weken',
              '✓ Vaste prijs, geen verrassingen',
              '✓ Begrijpelijk voor iedereen',
            ].map(t => (
              <span key={t} className="text-sm text-text-muted">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PIJNPUNTEN
      ══════════════════════════════ */}
      <section className="container pb-16">
        <div className="rounded-3xl border border-line bg-bg-soft p-8 sm:p-10">
          <h2 className="text-xl font-semibold text-text-muted uppercase tracking-widest text-sm mb-2">Herkenbaar?</h2>
          <p className="text-2xl font-bold text-text max-w-xl">
            Veel bedrijven laten tijd en geld liggen door verouderde processen.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PAIN_POINTS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 rounded-2xl border border-line bg-card p-5">
                <div className="mt-0.5 rounded-lg bg-brand/10 p-2 shrink-0">
                  <Icon size={16} className="text-brand" />
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-text font-medium">
            Hier lossen wij dat mee op. 👇
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          DIENSTEN
      ══════════════════════════════ */}
      <section id="diensten" className="container pb-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Onze diensten</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">Twee specialisaties. Één team.</h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            We houden de twee domeinen bewust gescheiden, zodat je altijd weet wie waarvoor verantwoordelijk is.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* WEBDEVELOPMENT */}
          <div className="rounded-3xl border border-brand/25 bg-card shadow-glow overflow-hidden">
            <div className="p-7 sm:p-8 border-b border-line"
              style={{ background: 'linear-gradient(135deg, rgba(122,162,255,0.10) 0%, transparent 60%)' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 text-brand text-xs font-semibold px-3 py-1 mb-4">
                <Code2 size={12} /> Webdevelopment
              </div>
              <h3 className="text-2xl font-bold text-text">
                Websites &amp; webapplicaties
              </h3>
              <p className="mt-3 text-text-muted leading-relaxed">
                Van een professionele website tot een volledig maatwerk systeem.
                Wij bouwen het — jij concentreert je op je bedrijf.
              </p>
              <p className="mt-4 text-sm text-text-muted">
                <span className="text-text font-medium">Geschikt voor:</span>{' '}
                Bouwbedrijven, installateurs, dienstverleners, startups, retail
              </p>
            </div>

            <div className="p-7 sm:p-8">
              <ul className="space-y-4">
                {WEB_SERVICES.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="rounded-xl bg-brand/10 p-2.5 shrink-0 mt-0.5">
                      <Icon size={16} className="text-brand" />
                    </div>
                    <div>
                      <div className="font-semibold text-text text-sm">{title}</div>
                      <div className="text-text-muted text-sm mt-1 leading-relaxed">{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-bg hover:bg-brand-strong transition-colors"
              >
                Plan een gratis intake <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* AUTOMATISERING */}
          <div
            className="rounded-3xl border overflow-hidden"
            style={{ borderColor: 'rgba(245,158,11,0.25)', background: '#101a33', boxShadow: '0 0 60px rgba(245,158,11,0.07)' }}
          >
            <div className="p-7 sm:p-8 border-b border-line"
              style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.10) 0%, transparent 60%)' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full text-xs font-semibold px-3 py-1 mb-4"
                style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b' }}
              >
                <Wrench size={12} /> Automatisering
              </div>
              <h3 className="text-2xl font-bold text-text">
                Procesautomatisering &amp; AI
              </h3>
              <p className="mt-3 text-text-muted leading-relaxed">
                Handmatige taken die jouw team tijd kosten, automatiseren we stap voor stap.
                Low-code tools, slimme koppelingen en AI — praktisch en betaalbaar.
              </p>
              <p className="mt-4 text-sm text-text-muted">
                <span className="text-text font-medium">Geschikt voor:</span>{' '}
                Bedrijven die tijd willen besparen op admin, communicatie en rapportages
              </p>
            </div>

            <div className="p-7 sm:p-8">
              <ul className="space-y-4">
                {AUTO_SERVICES.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="rounded-xl p-2.5 shrink-0 mt-0.5"
                      style={{ background: 'rgba(245,158,11,0.12)' }}
                    >
                      <Icon size={16} style={{ color: '#f59e0b' }} />
                    </div>
                    <div>
                      <div className="font-semibold text-text text-sm">{title}</div>
                      <div className="text-text-muted text-sm mt-1 leading-relaxed">{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors"
                style={{ background: '#f59e0b', color: '#0b0f19' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d97706')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f59e0b')}
              >
                Plan een gratis intake <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WERKWIJZE
      ══════════════════════════════ */}
      <section id="werkwijze" className="container pb-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Onze aanpak</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">Zo werkt het</h2>
          <p className="mt-4 text-text-muted max-w-lg mx-auto">
            Helder proces, geen verrassingen. Van eerste gesprek tot werkende oplossing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map(({ n, title, desc }, i) => (
            <div key={n} className="relative rounded-2xl border border-line bg-card p-6">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2 w-4 h-px bg-line z-10" />
              )}
              <div className="text-3xl font-bold text-brand/30 mb-4">{n}</div>
              <h3 className="font-semibold text-text mb-2">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          TARIEVEN
      ══════════════════════════════ */}
      <section id="prijzen" className="container pb-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Tarieven</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">Wat kost het?</h2>
          <p className="mt-4 text-text-muted max-w-lg mx-auto">
            Exacte prijs na een korte intake. Geen uren-tarieven, geen verborgen kosten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {PRICES.map(({ label, range, note }) => (
            <div key={label} className="rounded-3xl border border-line bg-card p-7 shadow-soft text-center">
              <div className="text-text-muted text-sm mb-3">{label}</div>
              <div className="text-3xl font-bold text-text">{range}</div>
              <div className="mt-2 text-xs text-text-muted">{note}</div>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm text-brand hover:underline"
              >
                Vraag een offerte aan <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-xs text-text-muted">
          Prijzen zijn indicatief excl. BTW. Exacte scope en prijs worden in de intake vastgelegd.
        </p>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section id="contact" className="container pb-20">
        <div className="rounded-3xl border border-line bg-bg-soft p-8 sm:p-12">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">Plan een gratis intake</h2>
            <p className="mt-4 text-text-muted">
              Vertel kort wat je wilt bouwen of automatiseren. We reageren binnen één werkdag met een concreet voorstel.
            </p>
          </div>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
            action="https://formspree.io/f/REPLACE_ME"
            method="POST"
          >
            <input
              name="naam"
              placeholder="Naam *"
              required
              className="rounded-xl border border-line bg-card px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-brand/60 transition-colors"
            />
            <input
              name="bedrijfsnaam"
              placeholder="Bedrijfsnaam *"
              required
              className="rounded-xl border border-line bg-card px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-brand/60 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mailadres *"
              required
              className="rounded-xl border border-line bg-card px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-brand/60 transition-colors"
            />
            <input
              type="tel"
              name="telefoon"
              placeholder="Telefoonnummer (optioneel)"
              className="rounded-xl border border-line bg-card px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-brand/60 transition-colors"
            />
            <select
              name="type"
              required
              defaultValue=""
              className="rounded-xl border border-line bg-card px-4 py-3 text-text md:col-span-2 focus:outline-none focus:border-brand/60 transition-colors"
            >
              <option value="" disabled>Waar kan JARVIX je mee helpen? *</option>
              <option value="website">Website of webshop</option>
              <option value="webapp">Webapplicatie / intern platform / MVP</option>
              <option value="automatisering">Procesautomatisering of koppelingen</option>
              <option value="ai">AI-assistent of chatbot</option>
              <option value="anders">Anders / weet ik nog niet</option>
            </select>
            <textarea
              name="bericht"
              placeholder="Omschrijf kort je situatie of wens..."
              required
              className="rounded-xl border border-line bg-card px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-brand/60 transition-colors md:col-span-2 min-h-[120px] resize-none"
            />
            <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                type="submit"
                className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-bg hover:bg-brand-strong transition-colors"
              >
                Verstuur bericht
              </button>
              <a
                href="mailto:info@jarvix.nl?subject=Gratis%20intake%20JARVIX"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-5 py-3 text-sm text-text hover:border-brand/50 transition-colors"
              >
                <Mail size={14} /> Of mail direct
              </a>
            </div>
          </form>

          {/* FAQ */}
          <div className="mt-14 max-w-2xl mx-auto">
            <h3 className="font-semibold text-text mb-5 text-center">Veelgestelde vragen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FAQ.map(([q, a]) => (
                <div key={q} className="rounded-2xl border border-line bg-card p-5">
                  <div className="font-medium text-text text-sm flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-brand shrink-0 mt-0.5" />
                    {q}
                  </div>
                  <div className="mt-2 text-text-muted text-sm leading-relaxed pl-5">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </SiteShell>
  )
}
