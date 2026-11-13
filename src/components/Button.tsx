import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

const styles = {
  gold: 'bg-gold text-forest hover:bg-[#f0dc82] shadow-[0_8px_30px_-8px_rgba(228,203,102,.6)]',
  outline: 'border border-gold/60 text-gold hover:bg-gold/10',
  dark: 'bg-forest text-cream hover:bg-forest-soft',
} as const

export default function Button({ to, children, variant = 'gold', onClick, className = '' }: { to?: string; children: ReactNode; variant?: keyof typeof styles; onClick?: () => void; className?: string }) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`
  return to ? <Link to={to} className={cls}>{children}</Link> : <button type="button" onClick={onClick} className={cls}>{children}</button>
}
