import { Link } from 'react-router-dom'
import { SiteShell } from '../components/SiteShell'

export default function NotFound() {
  return (
    <SiteShell>
      <div className="container py-16">
        <h1 className="text-3xl font-semibold">404</h1>
        <p className="mt-3 text-text-muted">Deze pagina bestaat niet.</p>
        <Link className="mt-6 inline-block" to="/">Terug naar home →</Link>
      </div>
    </SiteShell>
  )
}
