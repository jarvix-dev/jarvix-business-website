import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Code2,
  Hammer,
  PieChart,
  ShieldCheck,
  ShoppingCart,
  Wrench,
  Zap
} from 'lucide-react'
import { SiteShell } from '../components/SiteShell'

/* ─── Data: Doelgroepen ─── */
const AUDIENCES = [
  {
    icon: Hammer,
    title: 'Bouw & Installatie',
    desc: 'Stop met papierwerk in de bus. Digitale werkbonnen, urenregistratie en projectplanning die wél werkt.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  },
  {
    icon: PieChart,
    title: 'Zakelijke Dienstverlening',
    desc: 'Accountants en consultants. Automatiseer uw rapportages en cliënt-onboarding. Meer tijd voor advies.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    desc: 'Koppel uw webshop direct aan voorraad en boekhouding. Verkoop meer, beheer minder.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    icon: Zap,
    title: 'Startups & Scale-ups',
    desc: 'Snel een MVP live om uw idee te valideren. Geen maanden ontwikkeltijd, maar weken.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  }
]

/* ─── Data: Use Cases ─── */
const USE_CASES = [
  {
    title: 'De "Offerte-Fabriek"',
    tags: ['Automatisering', 'Sales'],
    stat: '6u/week bespaard',
    desc: 'Voorheen kostte elke offerte 45 minuten typen. Nu genereert de sales-afdeling met één klik een foutloze PDF op basis van actuele prijzen.',
  },
  {
    title: 'Het Klantportaal',
    tags: ['Webapp', 'Service'],
    stat: '-50% telefoontjes',
    desc: 'Klanten belden dagelijks over orderstatus. Nu loggen ze in op een veilige omgeving om status en documenten direct in te zien.',
  },
  {
    title: 'Leads Dashboard',
    tags: ['Integratie', 'Marketing'],
    stat: '0 leads gemist',
    desc: 'Aanvragen kwamen via mail, telefoon en LinkedIn binnen. Nu landen ze automatisch in één centraal overzicht met auto-opvolging.',
  }
]

/* ─── Data: Services ─── */
const SERVICES = [
  {
    category: 'Development',
    icon: Code2,
    accent: 'text-brand',
    items: [
      { title: 'High-end Websites', desc: 'Snel, veilig en pixel-perfect. Uw digitale visitekaartje.' },
      { title: 'Webapplicaties & MVP', desc: 'Maatwerk software voor uw unieke bedrijfsproces.' },
      { title: 'E-commerce', desc: 'Webshops die converteren en koppelen met uw backoffice.' },
      { title: 'Klantportalen', desc: 'Veilige omgevingen voor uw klanten.' }
    ]
  },
  {
    category: 'Automatisering',
    icon: Wrench,
    accent: 'text-amber-500',
    items: [
      { title: 'Systeemkoppelingen', desc: 'Wij laten uw softwarepakketten met elkaar praten.' },
      { title: 'Document Generators', desc: 'Offertes, contracten en rapporten met één klik.' },
      { title: 'E-mail Flows', desc: 'Automatische opvolging en status-updates.' },
      { title: 'AI Assistenten', desc: 'Slimme chatbots die uw klantenservice ontlasten.' }
    ]
  }
]

export default function Home() {
  return (
    <SiteShell>
      {/* Achtergrond Grid */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      {/* ══════════════════════════════
          HERO SECTION
      ══════════════════════════════ */}
      <section className="relative z-10 pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand/20 rounded-full blur-[120px] -z-10 opacity-50"></div>

        <div className="container text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand mb-8 animate-enter">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Nu beschikbaar voor nieuwe projecten
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1] animate-enter delay-100 drop-shadow-2xl">
            Software die uw bedrijf <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">
              sneller & slimmer
            </span> maakt.
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-enter delay-200">
            JARVIX bouwt moderne websites en automatiseert het saaie werk.
            Zodat u zich kunt focussen op wat echt telt: uw klanten en uw groei.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-enter delay-300">
            <a
              href="#contact"
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong hover:scale-[1.02] transition-all shadow-lg shadow-brand/25 ring-1 ring-white/20"
            >
              Start uw project <ArrowRight size={18} />
            </a>
            <a
              href="#diensten"
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur px-8 text-base font-medium text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all"
            >
              Onze diensten
            </a>
          </div>

          {/* Trust Signals */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-slate-500 animate-enter delay-300">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" /> Resultaatgericht</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" /> Geen uurtje-factuurtje verrassingen</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" /> Persoonlijk contact</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          VOOR WIE?
      ══════════════════════════════ */}
      <section className="relative z-10 py-24 bg-slate-900/30 border-y border-white/5">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Voor wie werken wij?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Wij spreken de taal van de ondernemer, niet alleen die van de programmeur.
              Onze oplossingen zijn gemaakt voor de dagelijkse praktijk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCES.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 hover:border-brand/30 transition-all hover:-translate-y-1 group">
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={item.color} size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          USE CASES
      ══════════════════════════════ */}
      <section className="relative z-10 py-24">
        <div className="container px-6">
          <div className="glass-card rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="md:flex items-end justify-between mb-12">
                <div className="max-w-xl">
                  <span className="text-brand font-semibold uppercase tracking-wider text-xs mb-2 block">Track Record</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Geen loze beloftes,<br/>maar meetbaar resultaat.
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Hier zijn enkele voorbeelden van wat we recent voor onze klanten hebben gerealiseerd.
                  </p>
                </div>
                <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-brand font-bold hover:text-brand-strong transition-colors mt-6 md:mt-0">
                  Bespaart u ook tijd? <ChevronRight size={16} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {USE_CASES.map((uc, i) => (
                  <div key={i} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-brand/20 transition-colors">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {uc.tags.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{uc.title}</h3>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed min-h-[3rem]">{uc.desc}</p>
                    <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <BarChart3 size={16} /> {uc.stat}
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
      <section id="diensten" className="relative z-10 py-24 bg-slate-900/30 border-y border-white/5">
        <div className="container px-6">
          <div className="text-center mb-16">
            <span className="text-brand font-semibold uppercase tracking-wider text-xs mb-3 block">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Twee specialismen. Één partner.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((cat, i) => (
              <div key={i} className="glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500">
                <div className="p-10 border-b border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                  <div className={`inline-flex items-center gap-2 rounded-lg bg-slate-900/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 ${cat.accent}`}>
                    <cat.icon size={14} /> {cat.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{cat.category === 'Development' ? 'Websites & Software' : 'Proces & AI'}</h3>
                  <p className="text-slate-400">
                    {cat.category === 'Development' 
                      ? 'Het digitale fundament van uw bedrijf. Snel, schaalbaar en veilig.' 
                      : 'Elimineer handwerk. Laat systemen voor u werken, niet andersom.'}
                  </p>
                </div>
                <div className="p-10 bg-slate-900/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                    {cat.items.map((item, j) => (
                      <div key={j}>
                        <h4 className="font-bold text-slate-200 mb-1 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${cat.category === 'Development' ? 'bg-brand' : 'bg-amber-500'}`}></span>
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section id="contact" className="relative z-10 py-32">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Klaar om te versnellen?</h2>
            <p className="text-slate-400 text-lg mb-10">
              Plan een gratis intake (20 min). We kijken samen waar uw kansen liggen. 
              Geen verplichtingen, wel direct advies.
            </p>

            <div className="glass-card rounded-3xl p-8 text-left">
              <form 
                className="space-y-4"
                action="https://formspree.io/f/REPLACE_ME" 
                method="POST"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 ml-1">Naam</label>
                    <input name="naam" required className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 ml-1">Bedrijf</label>
                    <input name="bedrijf" required className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 ml-1">E-mailadres</label>
                  <input name="email" type="email" required className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all" />
                </div>

                <div className="space-y-1 pt-2">
                  <label className="text-xs font-semibold text-slate-500 ml-1">Waarmee kunnen we helpen?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-700 bg-slate-900/30 cursor-pointer hover:border-brand/50 hover:bg-slate-900/80 transition-all">
                      <input type="radio" name="interesse" value="website" className="accent-brand w-4 h-4" />
                      <span className="text-sm font-medium text-slate-300">Nieuwe Website / App</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-700 bg-slate-900/30 cursor-pointer hover:border-brand/50 hover:bg-slate-900/80 transition-all">
                      <input type="radio" name="interesse" value="automatisering" className="accent-brand w-4 h-4" />
                      <span className="text-sm font-medium text-slate-300">Automatisering / AI</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <label className="text-xs font-semibold text-slate-500 ml-1">Bericht (optioneel)</label>
                  <textarea name="bericht" rows={3} className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all resize-none" />
                </div>
                
                <button type="submit" className="w-full rounded-xl bg-brand px-6 py-4 text-base font-bold text-white hover:bg-brand-strong transition-all shadow-lg shadow-brand/20 mt-4">
                  Vraag gratis intake aan
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-white/5 text-center">
                <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                  <ShieldCheck size={14} /> Uw gegevens worden nooit gedeeld. 
                  <span className="hidden sm:inline text-slate-700">|</span> 
                  <a href="mailto:jarvix.agent@protonmail.com" className="hover:text-brand transition-colors">Mail direct</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </SiteShell>
  )
}
