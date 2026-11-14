import type { VercelRequest, VercelResponse } from '../lib/email.js'
import { brandedEmail, getContact, safe, sendEmail } from '../lib/email.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  const contact = getContact(req.body)
  if (!contact) return res.status(400).json({ error: 'Please enter your name, a valid email, and phone number.' })
  try {
    await sendEmail({ to: contact.email, subject: 'Thank you for supporting WeGroom', html: brandedEmail(`<h1 style="margin:0 0 18px;font-size:26px;line-height:1.25;color:#033832">Thank you, ${safe(contact.name)}.</h1><p style="margin:0 0 16px">Thank you for letting us know about your contribution to WeGroom. Your support helps us grow skills, create opportunities, and strengthen communities.</p><p style="margin:0">We appreciate being part of your journey.</p>`, 'Thank you for supporting WeGroom.') })
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Donation confirmation email failed', error)
    return res.status(503).json({ error: error instanceof Error ? error.message : 'Email could not be sent right now.' })
  }
}
