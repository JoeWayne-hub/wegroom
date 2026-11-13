import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-forest shadow-lg shadow-black/25' : 'bg-forest'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Link to="/#home" onClick={() => setOpen(false)} aria-label="WeGroom home">
          <img src="/logo/wegroom-logo.jpg" alt="WeGroom" className="h-12 w-auto" width={75} height={48} />
        </Link>
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="text-sm font-medium text-cream/80 transition hover:text-gold">{l.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/#support" className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-forest transition hover:bg-[#f0dc82]">Support WeGroom</Link>
          </li>
        </ul>
        <button className="grid size-11 place-items-center rounded-full text-gold lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-gold/15 lg:hidden">
            <ul className="space-y-1 px-5 pb-6 pt-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-lg text-cream/90 active:bg-white/5">{l.label}</Link>
                </li>
              ))}
              <li className="pt-3">
                <Link to="/#support" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-full bg-gold font-semibold text-forest">Support WeGroom</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
