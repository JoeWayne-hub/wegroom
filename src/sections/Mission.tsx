import Heading from '../components/Heading'
import Reveal from '../components/Reveal'
import { missions } from '../data/content'

export default function Mission() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading eyebrow="What drives us" title="Our Mission" />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {missions.map((m, i) => (
            <Reveal key={m} delay={(i % 2) * 0.1}>
              <div className="flex h-full gap-6 rounded-3xl border border-forest/10 bg-white p-8 transition hover:border-gold hover:shadow-lg">
                <span className="font-display text-5xl text-gold">{i + 1}</span>
                <p className="text-lg leading-relaxed">{m}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
