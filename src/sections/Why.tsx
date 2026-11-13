import Heading from '../components/Heading'
import Reveal from '../components/Reveal'
import { differentiators } from '../data/content'

export default function Why() {
  return (
    <section className="bg-forest py-24 text-cream sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading eyebrow="Our difference" title="Why WeGroom?" dark>Real economic empowerment, built on structure rather than good intentions alone.</Heading>
        </div>
        <ul className="divide-y divide-gold/15 border-y border-gold/15">
          {differentiators.map((d, i) => (
            <Reveal key={d} delay={i * 0.05}>
              <li className="group flex items-center gap-6 py-6 transition hover:pl-3">
                <span className="font-display text-3xl text-gold/60 transition group-hover:text-gold">0{i + 1}</span>
                <span className="text-xl">{d}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
