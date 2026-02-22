import { SiteShell } from '../components/SiteShell'

export default function Privacy() {
  return (
    <SiteShell>
      <div className="container py-12">
        <h1 className="text-3xl font-semibold">Privacy</h1>
        <p className="mt-3 text-text-muted">Simpel, zonder tracking. (Vul later bedrijfsgegevens aan.)</p>
        <div className="mt-8 space-y-6 text-text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text">Wat we verzamelen</h2>
            <p>Alleen gegevens die je zelf invult in het contactformulier of via e-mail verstuurt.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-text">Waarom</h2>
            <p>Om contact op te nemen, je vraag te beantwoorden en een voorstel te maken.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-text">Cookies</h2>
            <p>Alleen een functionele cookie om de cookie-notice te onthouden. Geen analytics/tracking.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-text">Contact</h2>
            <p>Mail: stijnvdpol0@gmail.com</p>
          </section>
        </div>
      </div>
    </SiteShell>
  )
}
