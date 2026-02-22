import { ArrowRight, CheckCircle2, Mail, Shield, Sparkles, Wrench } from 'lucide-react'
import { SiteShell } from '../components/SiteShell'

export default function Home() {
  return (
    <SiteShell>
      <section className="container py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm text-text-muted">Hybrid AI Development Studio + Automation Partner (NL/BE)</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
            Je volgende project sneller live — zonder gedoe.
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            JARVIX bouwt websites, webapps en MVP’s. Stijn automatiseert processen met low-code en integraties.
            Geen AI-hype: wél minder handwerk, meer overzicht en een professionele online presence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-medium text-bg hover:bg-brand-strong" href="#contact">
              Plan een gratis scan <ArrowRight size={16} />
            </a>
            <a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-card px-5 py-3 text-sm text-text hover:border-brand/60" href="#contact">
              <Mail size={16} /> Stuur een bericht
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-text-muted">
            <li className="rounded-2xl border border-line bg-card p-4"><strong className="text-text">Snel</strong><br/>Doorlooptijd in weken, niet maanden.</li>
            <li className="rounded-2xl border border-line bg-card p-4"><strong className="text-text">Helder</strong><br/>Plan → bouw → test → live.</li>
            <li className="rounded-2xl border border-line bg-card p-4"><strong className="text-text">Veilig</strong><br/>Security & infra mindset.</li>
          </ul>
        </div>
      </section>

      <section className="container" aria-label="Problemen">
        <div className="rounded-3xl border border-line bg-bg-soft p-8 sm:p-10">
          <h2 className="text-2xl font-semibold">Herkenbaar?</h2>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-text-muted">
            <li className="flex gap-2"><CheckCircle2 className="text-brand" size={18}/> Te veel handwerk</li>
            <li className="flex gap-2"><CheckCircle2 className="text-brand" size={18}/> Offertes/aanvragen slokken tijd</li>
            <li className="flex gap-2"><CheckCircle2 className="text-brand" size={18}/> Geen overzicht</li>
            <li className="flex gap-2"><CheckCircle2 className="text-brand" size={18}/> Website levert weinig op</li>
          </ul>
          <p className="mt-6 text-text-muted">Dat kan slimmer.</p>
        </div>
      </section>

      <section id="diensten" className="container py-14">
        <h2 className="text-2xl font-semibold">Wat wij doen</h2>
        <p className="mt-3 text-text-muted max-w-2xl">Twee pijlers, één doel: resultaat. AI zit onder de motorkap, niet in de marketing.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-line bg-card p-7 shadow-soft">
            <div className="flex items-center gap-2 text-text"><Sparkles size={18}/> <h3 className="font-semibold">Pijler 1 — Software & Web Development (JARVIX)</h3></div>
            <ul className="mt-4 space-y-2 text-text-muted">
              <li>Websites</li>
              <li>Webapps / MVP</li>
              <li>Interne tools</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-card p-7 shadow-soft">
            <div className="flex items-center gap-2 text-text"><Wrench size={18}/> <h3 className="font-semibold">Pijler 2 — Procesautomatisering & AI (Stijn)</h3></div>
            <ul className="mt-4 space-y-2 text-text-muted">
              <li>n8n / Power Automate</li>
              <li>Koppelingen / integraties</li>
              <li>E-mail/document flows</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-bg-soft p-6 text-text-muted">
          <div className="flex items-start gap-3">
            <Shield className="text-brand" size={18} />
            <p><strong className="text-text">Scheiding is belangrijk:</strong> JARVIX doet development. Stijn doet automation/implementatie. Eén team, helder eigenaarschap.</p>
          </div>
        </div>
      </section>

      <section id="werkwijze" className="container pb-14">
        <h2 className="text-2xl font-semibold">Hoe het werkt</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 text-text-muted">
          {[['Gratis scan','Korte intake, doelen en context.'],['Plan + voorstel','Scope, planning en prijsrange.'],['Bouw & test','Iteratief, transparant, kwaliteit.'],['Live + onderhoud','Stabiel draaien, doorontwikkelen.']].map(([t,d]) => (
            <div key={t} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-semibold text-text">{t}</h3>
              <p className="mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="prijzen" className="container pb-14">
        <h2 className="text-2xl font-semibold">Pricing ranges</h2>
        <p className="mt-3 text-text-muted">Exacte prijs na korte intake.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[['Website','€1.500–€3.000','+ onderhoud'],['Webapp/MVP','€4.000–€15.000','+ onderhoud'],['Automatisering','€350–€2.500','+ onderhoud']].map(([t,p,s]) => (
            <div key={t} className="rounded-3xl border border-line bg-card p-7 shadow-soft">
              <h3 className="font-semibold text-text">{t}</h3>
              <div className="mt-3 text-3xl font-semibold text-text">{p}</div>
              <div className="mt-2 text-sm text-text-muted">{s}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container pb-16">
        <div className="rounded-3xl border border-line bg-bg-soft p-8 sm:p-10">
          <h2 className="text-2xl font-semibold">Plan een gratis scan</h2>
          <p className="mt-3 text-text-muted max-w-2xl">Vertel kort wat je wilt bouwen of automatiseren. We reageren snel met een voorstel voor de beste volgende stap.</p>

          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" action="https://formspree.io/f/REPLACE_ME" method="POST">
            <input name="naam" placeholder="Naam" required className="rounded-2xl border border-line bg-card p-3" />
            <input name="bedrijfsnaam" placeholder="Bedrijfsnaam" required className="rounded-2xl border border-line bg-card p-3" />
            <input type="email" name="email" placeholder="E-mail" required className="rounded-2xl border border-line bg-card p-3" />
            <input type="tel" name="telefoon" placeholder="Telefoon (optioneel)" className="rounded-2xl border border-line bg-card p-3" />
            <select name="type" required className="rounded-2xl border border-line bg-card p-3 md:col-span-2">
              <option value="">Waar gaat het over?</option>
              <option>Website/Webapp/MVP</option>
              <option>Automatisering/Low-code</option>
            </select>
            <textarea name="bericht" placeholder="Bericht" required className="rounded-2xl border border-line bg-card p-3 md:col-span-2 min-h-32" />
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
              <button type="submit" className="rounded-2xl bg-brand px-5 py-3 text-sm font-medium text-bg hover:bg-brand-strong">Verstuur</button>
              <a className="rounded-2xl border border-line bg-card px-5 py-3 text-sm text-text hover:border-brand/60 text-center" href="mailto:stijnvdpol0@gmail.com?subject=Gratis%20scan%20JARVIX">Mail ons</a>
              <p className="text-xs text-text-muted self-center">Formspree endpoint is placeholder.</p>
            </div>
          </form>

          <div className="mt-10">
            <h3 className="font-semibold text-text">FAQ</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-text-muted">
              {[['Moet ik iets van IT weten?','Nee. We vertalen je doel naar een plan en nemen de uitvoering mee.'],['Werk je met abonnement?','Meestal een setup + onderhoud.'],['Kunnen jullie met bestaande tools koppelen?','Ja—van e-mail tot CRM, boekhouding en interne systemen.'],['Hoe snel kan iets live?','Vaak in weken. Exact na de gratis scan.'],['Wat als we later willen uitbreiden?','We bouwen modulair.'],['Doen jullie ook onderhoud?','Ja. Updates, fixes en doorontwikkeling.']].map(([q,a]) => (
                <div key={q} className="rounded-2xl border border-line bg-card p-6">
                  <div className="font-medium text-text">{q}</div>
                  <div className="mt-2">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
