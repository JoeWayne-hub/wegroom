import Heading from '../components/Heading'
import Reveal from '../components/Reveal'
import StairMark from '../components/StairMark'

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <Heading eyebrow="About WeGroom" title="Who We Are" />
          <Reveal delay={0.1} className="mt-6 space-y-5 text-lg leading-relaxed text-forest/80">
            <p>WeGroom believes that everyone deserves a real chance to grow, earn and build a better future.</p>
            <p>Too many talented people have skills but lack access to opportunities. Too many communities have potential but lack the systems that support growth. WeGroom was created to bridge that gap.</p>
            <p>It is designed to help people turn their skills into real, sustainable opportunities.</p>
            <p>WeGroom bridges that gap by identifying, developing, and connecting skilled individuals to real demand, while building structured systems that allow this to scale.</p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-[2rem] bg-forest p-10 text-cream shadow-2xl shadow-forest/30 sm:p-14">
            <StairMark className="absolute -bottom-6 -right-6 w-56 text-gold/10" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">At its core</p>
            <p className="font-display mt-5 text-3xl leading-snug sm:text-4xl">
              “Talent is everywhere, <span className="gold-text italic">but opportunity is not.</span>”
            </p>
            <p className="mt-6 max-w-sm text-cream/70">A simple but critical problem, and the reason WeGroom exists.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
