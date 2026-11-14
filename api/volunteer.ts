import type { VercelRequest, VercelResponse } from '../lib/email.js'
import { brandedEmail, getContact, safe, sendEmail } from '../lib/email.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  const contact = getContact(req.body)
  if (!contact) return res.status(400).json({ error: 'Please enter your name, a valid email, and phone number.' })
  const teamInbox = process.env.WEGROOM_CONTACT_EMAIL
  if (!teamInbox) return res.status(503).json({ error: 'Volunteer requests are not configured yet. Please contact us directly.' })
  try {
    await sendEmail({ to: teamInbox, subject: `New WeGroom volunteer: ${contact.name}`, replyTo: contact.email, html: brandedEmail(`<h1 style="margin:0 0 18px;font-size:26px;line-height:1.25;color:#033832">New volunteer request</h1><p style="margin:0 0 8px"><strong>Name:</strong> ${safe(contact.name)}</p><p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${safe(contact.email)}" style="color:#033832">${safe(contact.email)}</a></p><p style="margin:0"><strong>Phone:</strong> ${safe(contact.phone)}</p>`, `New volunteer request from ${contact.name}.`) })
    await sendEmail({ to: contact.email, subject: 'We received your WeGroom volunteer request', html: brandedEmail(`<h1 style="margin:0 0 18px;font-size:26px;line-height:1.25;color:#033832">Thank you, ${safe(contact.name)}.</h1><p style="margin:0 0 16px">Thank you for offering to volunteer or work with WeGroom. We’ve received your request and will get back to you shortly.</p><p style="margin:0">We’re glad you’d like to grow with us.</p>`, 'We have received your WeGroom volunteer request.') })
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Volunteer email failed', error)
    return res.status(503).json({ error: error instanceof Error ? error.message : 'Email could not be sent right now.' })
  }
}
