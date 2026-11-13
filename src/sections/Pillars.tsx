import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Heading from '../components/Heading'
import { pillars } from '../data/content'

const themes = [
  { card: 'bg-forest text-cream', accent: 'text-gold', chip: 'bg-gold/15 text-gold', num: 'text-gold/20' },
  { card: 'bg-white text-forest border-2 border-gold', accent: 'text-gold-deep', chip: 'bg-forest/5 text-forest', num: 'text-gold/40' },
  { card: 'bg-gold text-forest', accent: 'text-forest', chip: 'bg-forest/10 text-forest', num: 'text-forest/15' },
]

export default function Pillars() {
  return (
    <section id="pillars" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading eyebrow="Our initiatives" title="Our Three Pillars">The foundation WeGroom is built on: people, opportunity and sustainability.</Heading>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const t = themes[i]
            return (
              <motion.article key={p.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: i * 0.12 }} whileHover={{ y: -6 }} className={`relative flex flex-col overflow-hidden rounded-[2rem] p-8 shadow-xl shadow-forest/10 sm:p-10 ${t.card}`}>
                <span className={`font-display absolute -right-2 -top-4 text-[9rem] leading-none ${t.num}`} aria-hidden>{p.no}</span>
                <p className={`relative text-xs font-semibold uppercase tracking-[0.25em] ${t.accent}`}>Pillar {p.no}</p>
                <h3 className="font-display relative mt-3 text-3xl leading-tight">{p.name}</h3>
                <p className="relative mt-5 leading-relaxed opacity-80">{p.text}</p>
                <ul className="relative mt-8 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium ${t.chip}`}><Check className="size-4 shrink-0" aria-hidden />{it}</li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
