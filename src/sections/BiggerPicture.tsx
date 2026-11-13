import { ArrowDown, ArrowRight, RefreshCw } from 'lucide-react'
import Heading from '../components/Heading'
import Reveal from '../components/Reveal'

const nodes = [
  { t: 'Skill development', d: 'People gain and prove real skills.', c: 'bg-forest text-cream' },
  { t: 'Opportunity access', d: 'Skilled people are connected to real demand and income.', c: 'bg-white border-2 border-gold' },
  { t: 'Commercial ventures', d: 'Revenue-generating ventures fund long-term impact.', c: 'bg-gold text-forest' },
]

export default function BiggerPicture() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading eyebrow="The bigger picture" title="One connected model" align="center">Our three pillars are designed to work together, each strengthening the others.</Heading>
        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="font-display text-2xl leading-relaxed sm:text-3xl">WeGroom is built on a simple truth: when people are given the right structure, access, and support, <span className="italic text-gold-deep">they don’t just survive, they grow.</span></p>
          <p className="mt-4 leading-relaxed text-forest/70">We are here to make that growth consistent, scalable, and accessible to all.</p>
        </Reveal>
        <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {nodes.map((n, i) => (
            <div key={n.t} className="flex flex-1 flex-col items-center gap-4 lg:flex-row">
              <Reveal delay={i * 0.12} className="w-full flex-1">
                <div className={`rounded-3xl p-8 text-center shadow-lg shadow-forest/10 ${n.c}`}>
                  <h3 className="font-display text-2xl">{n.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-80">{n.d}</p>
                </div>
              </Reveal>
              {i < nodes.length - 1 && (<>
                <ArrowDown className="size-6 text-gold-deep lg:hidden" aria-hidden />
                <ArrowRight className="hidden size-6 shrink-0 text-gold-deep lg:block" aria-hidden />
              </>)}
            </div>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-full bg-forest px-6 py-4 text-center text-sm text-cream sm:text-base">
            <RefreshCw className="size-5 shrink-0 text-gold" aria-hidden />
            Ventures fund more skills and opportunities, and the cycle of growth continues.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
