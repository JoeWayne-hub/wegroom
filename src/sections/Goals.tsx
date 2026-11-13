import Heading from '../components/Heading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { goals } from '../data/content'

export default function Goals() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading eyebrow="Where we are heading" title="Our Goals" align="center" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-cream p-8 text-center transition duration-300 hover:-translate-y-1 hover:bg-forest hover:text-cream">
                <div className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-gold text-forest"><Icon name={g.icon} className="size-7" /></div>
                <p className="text-lg font-medium leading-snug">{g.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
