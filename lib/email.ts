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

export function brandedEmail(content: string, preheader: string) {
  return `<!doctype html><html lang="en"><body style="margin:0;padding:0;background:#f4f3ed;font-family:Arial,Helvetica,sans-serif;color:#18352f">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${safe(preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f3ed;padding:32px 12px">
      <tr><td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;border-radius:16px;overflow:hidden;background:#ffffff">
          <tr><td align="center" style="background:#033832;padding:18px 24px">
            <a href="https://www.wegroom.org" style="text-decoration:none"><img src="https://www.wegroom.org/logo/wegroom-logo.jpg" width="150" alt="WeGroom" style="display:block;width:150px;max-width:100%;height:auto;border:0" /></a>
          </td></tr>
          <tr><td style="height:5px;background:#e4cb66;font-size:0;line-height:0">&nbsp;</td></tr>
          <tr><td style="padding:34px 32px 30px;font-size:16px;line-height:1.65;color:#18352f">${content}</td></tr>
          <tr><td style="background:#033832;padding:22px 32px;text-align:center;color:#f7f4e9;font-size:13px;line-height:1.6">
            <p style="margin:0 0 6px;color:#e4cb66;font-weight:bold">WeGroom Global Limited</p>
            <p style="margin:0">Empowering skills. Creating opportunities. Transforming communities.</p>
            <p style="margin:10px 0 0"><a href="https://www.wegroom.org" style="color:#e4cb66;text-decoration:underline">www.wegroom.org</a></p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`
}
