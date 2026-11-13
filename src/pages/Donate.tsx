import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Copy } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { bank } from '../data/config'

export default function Donate() {
  const [copied, setCopied] = useState(false)
  const navigate = useNavigate()
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bank.accountNumber)
    } catch {
      const t = document.createElement('textarea')
      t.value = bank.accountNumber
      document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <section className="relative min-h-screen overflow-hidden bg-forest px-5 pb-20 pt-32 text-cream sm:px-8">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-xl">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Support WeGroom</p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl">Your Support Makes a <span className="gold-text italic">Difference.</span></h1>
          <p className="mt-5 text-cream/75">Thank you for considering being part of the WeGroom journey. There is no fixed contribution amount. Simply give whatever you feel comfortable contributing.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 rounded-[2rem] bg-cream p-7 text-forest shadow-2xl shadow-black/30 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Bank transfer details</p>
            <dl className="mt-5 space-y-4">
              <div><dt className="text-sm text-forest/60">Bank Name</dt><dd className="text-lg font-semibold">{bank.bankName}</dd></div>
              <div><dt className="text-sm text-forest/60">Account Name</dt><dd className="text-lg font-semibold">{bank.accountName}</dd></div>
              <div>
                <dt className="text-sm text-forest/60">Account Number</dt>
                <dd className="mt-1 flex items-center justify-between gap-3 rounded-2xl bg-forest px-5 py-3 text-cream">
                  <span className="font-display text-2xl tracking-widest text-gold">{bank.accountNumber}</span>
                  <button onClick={copy} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-forest transition hover:bg-[#f0dc82]" aria-live="polite">
                    {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}
                  </button>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-forest/70">Make your transfer using your preferred banking application. Once you’ve completed your contribution, return here and let us know.</p>
            <Button variant="dark" className="mt-6 w-full" onClick={() => navigate('/thank-you')}>I’ve Donated</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
