import { motion } from 'framer-motion'
import Counter from '../components/Counter'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { fundraising, formatNaira } from '../data/config'

export default function Fundraising() {
  const { target, raised } = fundraising
  const remaining = Math.max(target - raised, 0)
  const pct = Math.min((raised / target) * 100, 100)
  return (
    <section id="support" className="relative overflow-hidden bg-forest py-24 text-cream sm:py-32">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Support WeGroom</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Be Part of What We’re <span className="gold-text italic">Building.</span></h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">Every meaningful vision begins with an idea and grows through the people who believe in it. As we celebrate this special occasion, we invite you to support the development of WeGroom and become part of its journey.</p>
          <p className="mt-4 text-cream/65">Contributions are entirely voluntary. There is no fixed amount, and every contribution is appreciated regardless of size.</p>
          <Button to="/donate" className="mt-8">Support the WeGroom Project</Button>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="rounded-[2rem] border border-gold/30 bg-forest-deep/70 p-8 backdrop-blur sm:p-10">
            <p className="text-sm uppercase tracking-widest text-cream/60">Fundraising target</p>
            <p className="font-display mt-1 text-4xl text-gold sm:text-5xl">{formatNaira(target)}</p>
            <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100} aria-label="Fundraising progress">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-gold to-[#f6ec9f]" initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }} />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-4 text-sm min-[380px]:grid-cols-2 sm:grid-cols-3">
              <div className="min-w-0"><dt className="text-cream/60">Raised</dt><dd className="mt-1 text-base font-semibold sm:text-lg"><Counter to={raised} format={(n) => formatNaira(n)} /></dd></div>
              <div className="min-w-0"><dt className="text-cream/60">Remaining</dt><dd className="mt-1 text-base font-semibold sm:text-lg">{formatNaira(remaining)}</dd></div>
              <div className="min-w-0"><dt className="text-cream/60">Achieved</dt><dd className="mt-1 text-base font-semibold text-gold sm:text-lg"><Counter to={pct} format={(n) => `${n.toFixed(n % 1 ? 1 : 0)}%`} /></dd></div>
            </dl>
            <p className="mt-6 text-xs text-cream/45">Progress figures are updated manually by the WeGroom team.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
