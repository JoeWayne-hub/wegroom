import Reveal from './Reveal'

export default function Heading({ eyebrow, title, dark, align = 'left', children }: { eyebrow: string; title: string; dark?: boolean; align?: 'left' | 'center'; children?: React.ReactNode }) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] ${dark ? 'text-gold' : 'text-gold-deep'}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl leading-tight sm:text-5xl ${dark ? 'text-cream' : 'text-forest'}`}>{title}</h2>
      {children && <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-cream/75' : 'text-forest/75'}`}>{children}</p>}
    </Reveal>
  )
}
