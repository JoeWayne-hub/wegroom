import { useState, type FormEvent } from 'react'
import Reveal from '../components/Reveal'

export default function Volunteer() {
  const [open, setOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formElement = e.currentTarget
    const form = new FormData(formElement)
    setSending(true)
    setStatus('')
    try {
      const response = await fetch('/api/volunteer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: form.get('name'), email: form.get('email'), phone: form.get('phone') }) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'We could not send your request right now.')
      setStatus('Thanks for offering to help. We’ve received your request and sent you a confirmation email.')
      formElement.reset()
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally { setSending(false) }
  }

  return (
    <section id="volunteer" className="bg-forest px-5 py-20 text-cream sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Grow with us</p>
        <h2 className="font-display text-3xl leading-tight sm:text-5xl">Bring your skills. <span className="gold-text italic">Build opportunity.</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-cream/75">Want to volunteer, contribute your expertise, or work with WeGroom? Tell us how to reach you and our team will follow up.</p>
        <button type="button" onClick={() => { setOpen(!open); setStatus('') }} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-forest transition hover:bg-[#f0dc82]">{open ? 'Close form' : 'Click to Volunteer'}</button>
        {open && <form onSubmit={submit} className="mx-auto mt-8 max-w-lg space-y-4 rounded-3xl bg-cream p-6 text-left text-forest sm:p-8">
          <label className="block text-sm">Full name<input required name="name" autoComplete="name" className="mt-1.5 min-h-12 w-full rounded-xl border border-forest/15 bg-white px-4 outline-none focus:border-forest" /></label>
          <label className="block text-sm">Email address<input required type="email" name="email" autoComplete="email" className="mt-1.5 min-h-12 w-full rounded-xl border border-forest/15 bg-white px-4 outline-none focus:border-forest" /></label>
          <label className="block text-sm">Phone number<input required type="tel" name="phone" autoComplete="tel" className="mt-1.5 min-h-12 w-full rounded-xl border border-forest/15 bg-white px-4 outline-none focus:border-forest" /></label>
          <button disabled={sending} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-forest px-7 text-sm font-semibold text-cream transition hover:bg-forest-soft disabled:opacity-60">{sending ? 'Submitting…' : 'Submit'}</button>
          <p role="status" aria-live="polite" className="text-sm text-forest/75">{status}</p>
        </form>}
      </Reveal>
    </section>
  )
}
