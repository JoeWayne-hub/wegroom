import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sprout, Sparkles } from 'lucide-react'
import Button from '../components/Button'
import StairMark from '../components/StairMark'
import Counter from '../components/Counter'

const stats = [
  { n: 3, label: 'Pillars' },
  { n: 5, label: 'Core activities' },
  { n: 4, label: 'Mission statements' },
]

const modelStages = [
  { number: '01', title: 'Develop skills', detail: 'Recognise potential and build practical capability.', icon: Sparkles },
  { number: '02', title: 'Open opportunity', detail: 'Connect people and their skills to real demand.', icon: ArrowUpRight },
  { number: '03', title: 'Sustain growth', detail: 'Build ventures that support lasting community impact.', icon: Sprout },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section id="home" ref={ref} className="relative overflow-hidden bg-forest pt-28 text-cream lg:pt-32">
      <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />
      <motion.div style={{ y }} className="pointer-events-none absolute -right-24 top-10 text-gold/[0.07]" aria-hidden>
        <StairMark className="w-[34rem]" />
      </motion.div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs leading-snug text-gold sm:text-sm">
            Today, as we celebrate a special milestone, we invite you to discover a vision we’re building and become part of its journey.
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] leading-[1.04] tracking-tight">
            <span className="block">Empowering Skills.</span>
            <span className="gold-text block italic">Creating Opportunities.</span>
            <span className="block">Transforming Communities.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }} className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
            Building a world where talent meets opportunity, individuals unlock their potential, and communities grow through sustainable economic empowerment.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/#about">Discover WeGroom</Button>
            <Button to="/#support" variant="outline">Support Our Vision</Button>
          </motion.div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-gold/20 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl text-gold"><Counter to={s.n} /></dd>
                <p className="text-xs uppercase tracking-wider text-cream/60">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
        <motion.div className="relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
          <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-gold/[0.06] blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-forest-deep/65 p-5 shadow-2xl shadow-black/25 backdrop-blur sm:p-7">
            <StairMark className="pointer-events-none absolute -right-8 -top-8 w-48 text-gold/[0.06]" />
            <div className="relative flex items-center gap-4 border-b border-gold/15 pb-5 sm:pb-6">
              <div className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-gold/25 bg-forest">
                <img src="/logo/wegroom-mark.jpg" alt="" className="size-12 object-contain" width={156} height={156} />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">The WeGroom model</p>
                <h2 className="font-display mt-1 text-2xl leading-tight sm:text-[1.7rem]">From skill to shared growth</h2>
              </div>
            </div>
            <div className="relative mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {modelStages.map((stage, index) => {
                const StageIcon = stage.icon
                return (
                  <div key={stage.number}>
                    <motion.article initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.45 + index * 0.14 }} className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-colors hover:border-gold/35 hover:bg-white/[0.075] sm:p-5">
                      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold sm:size-12"><StageIcon className="size-5" aria-hidden /></div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold/75">{stage.number} / {stage.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-cream/75 sm:text-[0.95rem]">{stage.detail}</p>
                      </div>
                    </motion.article>
                    {index < modelStages.length - 1 && <div className="ml-[1.8rem] flex h-3 items-center border-l border-dashed border-gold/35 sm:h-4" aria-hidden><ArrowDown className="-ml-[0.46rem] size-3 text-gold/60" /></div>}
                  </div>
                )
              })}
            </div>
            <p className="relative mt-5 border-t border-gold/15 pt-4 text-xs leading-relaxed text-cream/55 sm:mt-6 sm:pt-5 sm:text-sm">Three connected ideas. One shared ambition: make opportunity easier to reach and growth possible to sustain.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
