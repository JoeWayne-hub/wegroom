import type { VercelRequest, VercelResponse } from '../lib/email'
import { getContact, safe, sendEmail } from '../lib/email'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  const contact = getContact(req.body)
  if (!contact) return res.status(400).json({ error: 'Please enter your name, a valid email, and phone number.' })
  const teamInbox = process.env.WEGROOM_CONTACT_EMAIL
  if (!teamInbox) return res.status(503).json({ error: 'Volunteer requests are not configured yet. Please contact us directly.' })
  try {
    await sendEmail({ to: teamInbox, subject: `New WeGroom volunteer: ${contact.name}`, replyTo: contact.email, html: `<h2>New volunteer request</h2><p><strong>Name:</strong> ${safe(contact.name)}</p><p><strong>Email:</strong> ${safe(contact.email)}</p><p><strong>Phone:</strong> ${safe(contact.phone)}</p>` })
    await sendEmail({ to: contact.email, subject: 'We received your WeGroom volunteer request', html: `<p>Hello ${safe(contact.name)},</p><p>Thank you for offering to volunteer or work with WeGroom. We have received your request and will get back to you shortly.</p><p>With gratitude,<br/>WeGroom Global Limited</p>` })
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Volunteer email failed', error)
    return res.status(503).json({ error: error instanceof Error ? error.message : 'Email could not be sent right now.' })
  }
}
