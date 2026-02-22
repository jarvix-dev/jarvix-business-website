import type { PropsWithChildren } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'text-text' : 'text-text-muted hover:text-text'
}

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-line/70 bg-bg/70 backdrop-blur sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="font-semibold tracking-tight text-text">
            JARVIX <span className="ml-2 text-sm font-normal text-text-muted">Hybrid Studio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <a href="#diensten" className="text-text-muted hover:text-text">Diensten</a>
            <a href="#werkwijze" className="text-text-muted hover:text-text">Werkwijze</a>
            <a href="#prijzen" className="text-text-muted hover:text-text">Prijzen</a>
            <a href="#contact" className="text-text-muted hover:text-text">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-card px-3 py-2 text-sm text-text border border-line hover:border-brand/60" href="#contact">
              <Mail size={16} /> Stuur een bericht
            </a>
            <a className="inline-flex items-center gap-2 rounded-xl bg-brand px-3 py-2 text-sm font-medium text-bg hover:bg-brand-strong" href="#contact">
              Plan een gratis scan <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-line/70 mt-16">
        <div className="container py-10 text-sm text-text-muted flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} JARVIX • Development: JARVIX • Automatisering/AI implementatie: Stijn</div>
          <div className="flex gap-4">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Voorwaarden</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
