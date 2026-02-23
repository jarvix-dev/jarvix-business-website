import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  FileText,
  Hammer,
  LayoutDashboard,
  Mail,
  MessageSquare,
  PieChart,
  ShoppingCart,
  Users,
  Wrench,
  Zap
} from 'lucide-react'
import { SiteShell } from '../components/SiteShell'

/* ─── Doelgroepen ─── */
const AUDIENCES = [
  {
    icon: Hammer,
    title: 'Bouw & Installatie',
    desc: 'Van digitale werkbonnen tot projectoverzichten. Stop met papierwerk in de bus.',
    tags: ['Werkbonnen app', 'Planning', 'Offertes']
  },
  {
    icon: PieChart,
    title: 'Zakelijke Dienstverlening',
    desc: 'Accountants, consultants en makelaars. Automatiseer rapportages en klantcommunicatie.',
    tags: ['Klantportaal', 'Document automation', 'Onboarding']
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    desc: 'Koppel je webshop aan je voorraad en boekhouding. Verkoop meer, beheer minder.',
    tags: ['Webshop', 'Voorraadkoppeling', 'Klantenservice AI']
  },
  {
    icon: Zap,
    title: 'Startups & Scale-ups',
    desc: 'Snel een MVP live om je idee te valideren. Geen maanden ontwikkeltijd, maar weken.',
    tags: ['MVP', 'SaaS Platform', 'Prototype']
  }
]

/* ─── Use Cases ─── */
const USE_CASES = [
  {
    title: 'De "Offerte-Fabriek"',
    problem: 'Elke offerte kostte 45 minuten typen en knippen/plakken.',
    solution: 'Een slim formulier dat automatisch een PDF genereert en klaarzet in concept.',
    result: 'Tijdwinst: 6 uur per week. Foutmarge: 0%.',
    icon: FileText,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  },
  {
    title: 'Het Klantportaal',
    problem: 'Klanten belden dagelijks: "Wat is de status van mijn order?"',
    solution: 'Een simpele webapp waar klanten zelf status en documenten inzien.',
    result: 'Telefoontjes gehalveerd. Klanttevredenheid omhoog.',
    icon: Users,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Leads in één overzicht',
    problem: 'Leads kwamen via mail, telefoon en LinkedIn. Geen overzicht.',
    solution: 'Alle ingangen gekoppeld aan één centraal dashboard (Notion/Airtable).',
    result: 'Geen lead meer gemist. Opvolging binnen 24u.',
    icon: LayoutDashboard,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  }
]

/* ─── Webdevelopment services ─── */
const WEB_SERVICES = [
  {
    title: 'Professionele Website',
    desc: 'Jouw digitale visitekaartje. Snel, veilig en perfect leesbaar op mobiel.',
    icon: GlobeIcon
  },
  {
    title: 'Webshop / E-commerce',
    desc: 'Verkoop producten of diensten direct online. Veilig betalen, simpel beheer.',
    icon: ShoppingCart
  },
  {
    title: 'Webapplicatie / MVP',
    desc: 'Een uniek idee? Wij bouwen de software die jouw bedrijfsprocessen draait.',
    icon: Code2
  },
  {
    title: 'Interne Tools',
    desc: 'Dashboards en tools speciaal voor jouw medewerkers. Maak werk makkelijker.',
    icon: LayoutDashboard
  }
]

/* ─── Automatisering services ─── */
const AUTO_SERVICES = [
  {
    title: 'Slimme Koppelingen',
    desc: 'Laat software met elkaar praten. Bijv. Website → CRM → Boekhouding.',
    icon: PlugZapIcon
  },
  {
    title: 'Document Automatisering',
    desc: 'Genereer contracten, offertes en rapporten met één klik.',
    icon: FileText
  },
  {
    title: 'E-mail Flows',
    desc: 'Automatische bevestigingen, reminders en opvolging. Vergeet nooit meer iets.',
    icon: Mail
  },
  {
    title: 'AI & Chatbots',
    desc: 'Een slimme assistent die vragen beantwoordt of teksten schrijft.',
    icon: MessageSquare
  }
]

// Icons helpers
function GlobeIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> }
function PlugZapIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="M7.5 13.5 2 22l8.5-5.5"/><path d="m20.3 3.7-5.3 5.3 4 4 2.3-2.3a2.4 2.4 0 0 0 0-3.4 2.4 2.4 0 0 0-3.4 0Z"/><path d="M15 11 22 2l-5.5 8.5"/></svg> }


export default function Home() {
  return (
    <SiteShell>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section
        className="relative pt-24 pb-32 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(122,162,255,0.15) 0%, rgba(11,15,25,0) 80%)' }}
      >
        <div className="container relative z-10 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Nu beschikbaar voor nieuwe projecten
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6 leading-tight">
            Software die je bedrijf <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-strong">
              sneller & slimmer
            </span> maakt.
          </h1>

          <p className="text-lg sm:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Wij bouwen websites en webapps die werken. Wij automatiseren het saaie werk.
            Zodat jij je kunt focussen op wat echt telt: je klanten en je groei.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-8 py-4 text-base font-semibold text-bg hover:bg-brand-strong hover:scale-[1.02] transition-all shadow-lg shadow-brand/20"
            >
              Start je project <ArrowRight size={18} />
            </a>
            <a
              href="#diensten"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-card/50 backdrop-blur px-8 py-4 text-base font-medium text-text hover:bg-card hover:border-brand/40 transition-all"
            >
              Bekijk diensten
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-16 pt-8 border-t border-line/30 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-text-muted">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" /> Snel resultaat</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" /> Geen uurtje-factuurtje verrassingen</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" /> Persoonlijk contact (Stijn)</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          VOOR WIE? (DOELGROEPEN)
      ══════════════════════════════ */}
      <section className="py-20 border-t border-line/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Voor wie werken wij?</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Wij spreken de taal van de ondernemer, niet alleen van de programmeur.
              Onze oplossingen zijn gemaakt voor de praktijk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCES.map((item, i) => (
              <div key={i} className="group rounded-3xl border border-line bg-card p-6 hover:border-brand/50 transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-bg-soft border border-line flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="text-text" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted mb-5 leading-relaxed flex-grow">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium uppercase tracking-wider text-brand bg-brand/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          USE CASES (RESULTATEN)
      ══════════════════════════════ */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-bg-soft to-card border border-line p-8 md:p-16 relative overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="md:flex items-end justify-between mb-12">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                    Wat levert het op?
                  </h2>
                  <p className="text-text-muted text-lg">
                    Techniek is leuk, maar resultaat is beter. Hier zijn voorbeelden van wat we voor bedrijven realiseren.
                  </p>
                </div>
                <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-brand font-medium hover:text-brand-strong transition-colors min-h-[44px]">
                  Besspreek jouw case <ArrowRight size={16} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {USE_CASES.map((uc, i) => (
                  <div key={i} className="rounded-3xl bg-bg border border-line p-6 hover:border-brand/30 transition-colors h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${uc.bg}`}>
                      <uc.icon className={uc.color} size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-text mb-2">{uc.title}</h3>
                    
                    <div className="space-y-3 text-sm flex-grow">
                      <div>
                        <span className="text-red-400 font-medium text-xs uppercase tracking-wide">Probleem</span>
                        <p className="text-text-muted mt-1">{uc.problem}</p>
                      </div>
                      <div>
                        <span className="text-brand font-medium text-xs uppercase tracking-wide">Oplossing</span>
                        <p className="text-text-muted mt-1">{uc.solution}</p>
                      </div>
                      <div className="pt-3 border-t border-line/50 mt-auto">
                        <span className="text-emerald-400 font-bold flex items-center gap-2">
                          <BarChart3 size={14} /> {uc.result}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center md:hidden">
                <a href="#contact" className="inline-flex items-center gap-2 text-brand font-medium min-h-[44px]">
                  Besspreek jouw case <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          DIENSTEN (PIJLERS)
      ══════════════════════════════ */}
      <section id="diensten" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-3">Onze Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">Twee specialismen. Één doel.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PIJLER 1: WEBDEVELOPMENT */}
            <div className="rounded-[2rem] border border-brand/20 bg-card overflow-hidden shadow-soft flex flex-col h-full">
              <div className="p-8 md:p-10 border-b border-line bg-gradient-to-br from-brand/5 to-transparent">
                <div className="inline-flex items-center gap-2 rounded-lg bg-brand/10 text-brand px-3 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
                  <Code2 size={14} /> Development
                </div>
                <h3 className="text-3xl font-bold text-text mb-4">Websites & Software</h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  Wij bouwen het digitale fundament van je bedrijf. Geen dertien-in-een-dozijn templates, 
                  maar software die precies doet wat jij nodig hebt.
                </p>
              </div>
              <div className="p-8 md:p-10 bg-bg/50 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 h-full">
                  {WEB_SERVICES.map((s, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2 text-text font-semibold">
                        <s.icon size={18} className="text-brand" /> {s.title}
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed flex-grow">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PIJLER 2: AUTOMATISERING */}
            <div className="rounded-[2rem] border border-amber-500/20 bg-card overflow-hidden shadow-soft flex flex-col h-full">
              <div className="p-8 md:p-10 border-b border-line bg-gradient-to-br from-amber-500/5 to-transparent">
                <div className="inline-flex items-center gap-2 rounded-lg bg-amber-500/10 text-amber-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
                  <Wrench size={14} /> Automatisering
                </div>
                <h3 className="text-3xl font-bold text-text mb-4">Proces & AI</h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  Wij koppelen je systemen en automatiseren het handwerk. Zodat jouw team stopt met 
                  knippen/plakken en tijd overhoudt voor belangrijk werk.
                </p>
              </div>
              <div className="p-8 md:p-10 bg-bg/50 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 h-full">
                  {AUTO_SERVICES.map((s, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2 text-text font-semibold">
                        <s.icon size={18} className="text-amber-500" /> {s.title}
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed flex-grow">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section id="contact" className="py-20 pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-[2.5rem] border border-line bg-bg-soft p-8 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">Klaar om te starten?</h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
              Plan een gratis intake (20 min). We kijken samen of we je kunnen helpen. 
              Geen verplichtingen, wel direct advies.
            </p>

            <form 
              className="max-w-xl mx-auto space-y-4 text-left"
              action="https://formspree.io/f/REPLACE_ME" 
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="naam" required placeholder="Naam" className="w-full rounded-xl border border-line bg-card px-4 py-3 text-text focus:border-brand focus:outline-none transition-colors min-h-[44px]" />
                <input name="bedrijf" required placeholder="Bedrijfsnaam" className="w-full rounded-xl border border-line bg-card px-4 py-3 text-text focus:border-brand focus:outline-none transition-colors min-h-[44px]" />
              </div>
              <input name="email" type="email" required placeholder="E-mailadres" className="w-full rounded-xl border border-line bg-card px-4 py-3 text-text focus:border-brand focus:outline-none transition-colors min-h-[44px]" />
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-wider ml-1">Ik heb interesse in:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-line bg-card cursor-pointer hover:border-brand/50 transition-colors min-h-[44px]">
                    <input type="radio" name="interesse" value="website" className="accent-brand" />
                    <span className="text-sm text-text">Nieuwe Website / App</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-line bg-card cursor-pointer hover:border-brand/50 transition-colors min-h-[44px]">
                    <input type="radio" name="interesse" value="automatisering" className="accent-brand" />
                    <span className="text-sm text-text">Automatisering / AI</span>
                  </label>
                </div>
              </div>

              <textarea name="bericht" placeholder="Vertel kort iets over je project..." rows={4} className="w-full rounded-xl border border-line bg-card px-4 py-3 text-text focus:border-brand focus:outline-none transition-colors resize-none" />
              
              <button type="submit" className="w-full rounded-xl bg-brand px-6 py-4 text-base font-semibold text-bg hover:bg-brand-strong transition-colors shadow-lg shadow-brand/20 min-h-[44px]">
                Vraag gratis intake aan
              </button>
              
              <p className="text-center text-xs text-text-muted mt-4">
                Of mail direct naar <a href="mailto:jarvix.agent@protonmail.com" className="text-brand hover:underline min-h-[44px] inline-flex items-center">jarvix.agent@protonmail.com</a>
              </p>
            </form>
          </div>
        </div>
      </section>

    </SiteShell>
  )
}
