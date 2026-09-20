const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 4_000;

declare const process: { env: Record<string, string | undefined> };

function json(message: string, status: number) {
  return Response.json({ message }, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

function text(value: unknown, limit: number) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[character] ?? character));
}

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') {
      return json('Method not allowed.', 405);
    }

    let payload: Record<string, unknown>;

    try {
      payload = await request.json() as Record<string, unknown>;
    } catch {
      return json('Please submit the form again.', 400);
    }

    const name = text(payload.name, MAX_NAME_LENGTH);
    const email = text(payload.email, MAX_EMAIL_LENGTH);
    const message = text(payload.message, MAX_MESSAGE_LENGTH);
    const website = text(payload.website, 200);

    // Honeypot field. Return success to avoid giving automated senders feedback.
    if (website) {
      return json('Thank you. Your message has been sent.', 200);
    }

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json('Please complete your name, email address and message.', 400);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const recipient = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !recipient) {
      console.error('Contact form email settings are incomplete.');
      return json('The form is temporarily unavailable. Please email me directly.', 503);
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Website message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!emailResponse.ok) {
      console.error('Resend rejected the contact form email.', await emailResponse.text());
      return json('The form is temporarily unavailable. Please email me directly.', 502);
    }

    return json('Thank you. Your message has been sent.', 200);
  },
};
