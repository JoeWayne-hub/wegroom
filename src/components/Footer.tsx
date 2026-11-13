import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/logo/wegroom-logo.jpg" alt="WeGroom" className="h-20 w-auto" width={125} height={80} loading="lazy" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">WeGroom helps people turn their skills into real, sustainable opportunities, building structured systems that connect talent to demand.</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="space-y-2 text-sm text-cream/75">
            {navLinks.map((l) => <li key={l.label}><Link to={l.to} className="hover:text-gold">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Be part of it</p>
          <Link to="/donate" className="inline-flex min-h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-forest transition hover:bg-[#f0dc82]">Support the WeGroom Project</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 text-xs text-cream/55 sm:px-8">
          <p>© {new Date().getFullYear()} WeGroom. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-gold transition hover:bg-gold/10" aria-label="Back to top">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
