import { AlertCircle, ArrowRight } from 'lucide-react'
import Heading from '../components/Heading'
import Reveal from '../components/Reveal'

const gaps = [
  'Talented individuals often lack access to opportunities.',
  'Communities have potential but lack systems that support growth.',
  'Skills do not always translate into sustainable income.',
  'Training alone is not enough without access to real economic opportunities.',
]
const steps = ['Identify and develop skills', 'Verify and accredit them', 'Connect people to real demand', 'Reinvest through ventures that fund impact']

export default function Problem() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading eyebrow="The opportunity gap" title="The problem we are solving" />
        <div className="mt-14 grid overflow-hidden rounded-[2rem] shadow-xl shadow-forest/10 lg:grid-cols-2">
          <Reveal className="bg-[#ece7d3] p-8 sm:p-12">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-forest/60">The challenge</p>
            <ul className="space-y-5">
              {gaps.map((g) => (
                <li key={g} className="flex gap-3 text-lg leading-snug"><AlertCircle className="mt-1 size-5 shrink-0 text-gold-deep" aria-hidden />{g}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="bg-forest p-8 text-cream sm:p-12">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold">WeGroom’s structured approach</p>
            <ol className="space-y-5">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4 text-lg">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold font-semibold text-forest">{i + 1}</span>
                  {s}
                  {i < steps.length - 1 && <ArrowRight className="ml-auto hidden size-4 text-gold/50 sm:block" aria-hidden />}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
