import type { VercelRequest, VercelResponse } from '../lib/email'
import { getContact, safe, sendEmail } from '../lib/email'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  const contact = getContact(req.body)
  if (!contact) return res.status(400).json({ error: 'Please enter your name, a valid email, and phone number.' })
  try {
    await sendEmail({ to: contact.email, subject: 'Thank you for supporting WeGroom', html: `<p>Hello ${safe(contact.name)},</p><p>Thank you for letting us know about your contribution to WeGroom. We appreciate your support and will follow up if we need any further details.</p><p>With gratitude,<br/>WeGroom Global Limited</p>` })
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Donation confirmation email failed', error)
    return res.status(503).json({ error: error instanceof Error ? error.message : 'Email could not be sent right now.' })
  }
}
