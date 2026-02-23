import type { PropsWithChildren } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function navClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? 'text-text font-medium'
    : 'text-text-muted hover:text-text transition-colors'
}

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-line bg-bg/80 backdrop-blur sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight text-text">JARVIX</span>
            <span className="hidden sm:block text-xs text-text-muted border border-line rounded-full px-2 py-0.5">
              NL · BE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#diensten" className="text-text-muted hover:text-text transition-colors">Diensten</a>
            <a href="#werkwijze" className="text-text-muted hover:text-text transition-colors">Aanpak</a>
            <a href="#prijzen" className="text-text-muted hover:text-text transition-colors">Tarieven</a>
            <NavLink to="/privacy" className={navClass}>Privacy</NavLink>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-bg hover:bg-brand-strong transition-colors"
          >
            Gratis intake <ArrowRight size={14} />
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-line mt-20">
        <div className="container py-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between text-sm text-text-muted">
          <div>
            <div className="font-semibold text-text mb-1">JARVIX</div>
            <div>Webdevelopment &amp; Automatisering · NL/BE</div>
            <div className="mt-1">
              <a href="mailto:info@jarvix.nl" className="hover:text-brand transition-colors">info@jarvix.nl</a>
            </div>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-text transition-colors">Privacybeleid</Link>
            <Link to="/terms" className="hover:text-text transition-colors">Voorwaarden</Link>
          </div>
          <div className="text-xs text-text-muted/60">
            © {new Date().getFullYear()} JARVIX
          </div>
        </div>
      </footer>
    </div>
  )
}
