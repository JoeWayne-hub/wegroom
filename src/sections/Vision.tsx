import { motion } from 'framer-motion'
import StairMark from '../components/StairMark'

export default function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden bg-forest-deep py-28 text-cream sm:py-40">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/[0.06]" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} aria-hidden>
        <StairMark className="w-[40rem] max-w-[140vw]" />
      </motion.div>
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Vision</p>
        <motion.blockquote initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="font-display text-3xl leading-snug sm:text-5xl lg:text-6xl">
          To build a world where <span className="gold-text italic">anyone with a skill</span> has a clear path to opportunity, growth, and economic independence.
        </motion.blockquote>
      </div>
    </section>
  )
}
