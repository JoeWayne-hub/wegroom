import type { VercelRequest, VercelResponse } from '../lib/email.js'
import { brandedEmail, getContact, safe, sendEmail } from '../lib/email.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  const contact = getContact(req.body)
  if (!contact) return res.status(400).json({ error: 'Please enter your name, a valid email, and phone number.' })
  const body = req.body as Record<string, unknown>
  const amount = typeof body.amount === 'string' || typeof body.amount === 'number' ? Number(body.amount) : NaN
  if (!Number.isFinite(amount) || amount < 1 || amount > 1_000_000_000_000) {
    return res.status(400).json({ error: 'Please enter a valid donation amount of at least ₦1.' })
  }
  const amountText = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 2 }).format(amount)
  const receivedAt = new Intl.DateTimeFormat('en-NG', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Africa/Lagos' }).format(new Date())
  const teamInbox = process.env.WEGROOM_CONTACT_EMAIL
  if (!teamInbox) return res.status(503).json({ error: 'Donation notifications are not configured yet. Please try again later.' })
  try {
    await sendEmail({
      to: teamInbox,
      subject: `Donation reported: ${amountText} from ${contact.name}`,
      replyTo: contact.email,
      html: brandedEmail(`<h1 style="margin:0 0 18px;font-size:26px;line-height:1.25;color:#033832">New donation reported</h1><p style="margin:0 0 16px">A donor has submitted a transfer report. Please reconcile it with the Providus Bank account before updating the public fundraising total.</p><table role="presentation" cellspacing="0" cellpadding="8" border="0" style="font-size:15px"><tr><td><strong>Reported amount</strong></td><td>${safe(amountText)}</td></tr><tr><td><strong>Name</strong></td><td>${safe(contact.name)}</td></tr><tr><td><strong>Email</strong></td><td><a href="mailto:${safe(contact.email)}" style="color:#033832">${safe(contact.email)}</a></td></tr><tr><td><strong>Phone</strong></td><td>${safe(contact.phone)}</td></tr><tr><td><strong>Submitted</strong></td><td>${safe(receivedAt)} (Lagos time)</td></tr></table><p style="margin:18px 0 0;font-size:13px;color:#5d6e68">This is the donor-reported amount; it has not been independently verified.</p>`, 'A donor has reported a WeGroom contribution.')
    })
    await sendEmail({ to: contact.email, subject: 'Thank you for your contribution to WeGroom', html: brandedEmail(`<h1 style="margin:0 0 18px;font-size:26px;line-height:1.25;color:#033832">Thank you, ${safe(contact.name)}.</h1><p style="margin:0 0 16px">Thank you for your contribution to WeGroom. Your generosity helps us grow skills, create opportunities, and strengthen communities.</p><p style="margin:0">We appreciate your support and will reconcile the reported transfer with our bank records.</p>`, 'Thank you for your contribution to WeGroom.') })
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Donation confirmation email failed', error)
    return res.status(503).json({ error: error instanceof Error ? error.message : 'Email could not be sent right now.' })
  }
}
