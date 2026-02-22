import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-dvh bg-bg text-text">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-text-muted">JARVIX • Development & Automatisering</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold">Je volgende project sneller live — zonder gedoe.</h1>
        <p className="mt-4 text-text-muted max-w-2xl">
          JARVIX bouwt websites, webapps en MVP’s. Stijn automatiseert processen met low-code en integraties.
        </p>
        <div className="mt-8 flex gap-3">
          <a className="rounded-xl bg-brand px-4 py-2 text-bg" href="#contact">Plan een gratis scan</a>
          <a className="rounded-xl border border-line px-4 py-2" href="#contact">Stuur een bericht</a>
        </div>
        <div id="contact" className="mt-16 rounded-2xl border border-line bg-bg-soft p-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-text-muted">Formspree placeholder + mailto fallback.</p>
          <form className="mt-6 grid gap-3" action="https://formspree.io/f/REPLACE_ME" method="POST">
            <input className="rounded-xl border border-line bg-card p-3" name="naam" placeholder="Naam" required />
            <input className="rounded-xl border border-line bg-card p-3" name="bedrijfsnaam" placeholder="Bedrijfsnaam" required />
            <input className="rounded-xl border border-line bg-card p-3" type="email" name="email" placeholder="E-mail" required />
            <select className="rounded-xl border border-line bg-card p-3" name="type" required>
              <option value="">Waar gaat het over?</option>
              <option>Website/Webapp/MVP</option>
              <option>Automatisering/Low-code</option>
            </select>
            <textarea className="rounded-xl border border-line bg-card p-3 min-h-32" name="bericht" placeholder="Bericht" required />
            <div className="flex gap-3">
              <button className="rounded-xl bg-brand px-4 py-2 text-bg" type="submit">Verstuur</button>
              <a className="rounded-xl border border-line px-4 py-2" href="mailto:stijnvdpol0@gmail.com?subject=Gratis%20scan%20JARVIX">Mail ons</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function Privacy() {
  return (
    <div className="min-h-dvh bg-bg text-text">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Privacy</h1>
        <p className="mt-4 text-text-muted">Simpel, geen tracking. (Placeholder.)</p>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-dvh bg-bg text-text">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold">404</h1>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
