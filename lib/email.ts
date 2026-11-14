export type VercelRequest = { method?: string; body?: unknown }
export type VercelResponse = { status: (code: number) => VercelResponse; json: (body: unknown) => void }

export function getContact(body: unknown) {
  if (!body || typeof body !== 'object') return null
  const input = body as Record<string, unknown>
  const name = typeof input.name === 'string' ? input.name.trim().slice(0, 120) : ''
  const email = typeof input.email === 'string' ? input.email.trim().slice(0, 254) : ''
  const phone = typeof input.phone === 'string' ? input.phone.trim().slice(0, 40) : ''
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !phone) return null
  return { name, email, phone }
}

export async function sendEmail(payload: { to: string; subject: string; html: string; replyTo?: string }) {
  const key = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  if (!key || !from) throw new Error('Email service is not configured yet. Please contact us directly while we set it up.')
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [payload.to], subject: payload.subject, html: payload.html, ...(payload.replyTo ? { reply_to: payload.replyTo } : {}) }),
  })
  if (!response.ok) throw new Error('Email could not be sent right now. Please try again later.')
}

export const safe = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)
