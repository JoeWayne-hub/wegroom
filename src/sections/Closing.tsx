import Reveal from '../components/Reveal'
import StairMark from '../components/StairMark'

export default function Closing() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <StairMark className="mx-auto mb-8 w-16 text-gold" />
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">Celebrating Love. <span className="italic text-gold-deep">Building a Legacy.</span></h2>
        <p className="mt-6 text-lg leading-relaxed text-forest/75">As we celebrate the beginning of a new chapter, we are grateful for everyone who has chosen to be part of the WeGroom journey. Thank you for celebrating with us and believing in the possibilities ahead.</p>
      </Reveal>
    </section>
  )
}
