import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const RESEND_API_KEY = Deno.env.get('RESEND_KEY');
const TO_EMAIL = 'info@fokusdemenz.at';
const FROM_EMAIL = 'FokusDemenz Kontakt <onboarding@resend.dev>';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error('RESEND_KEY is not configured');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = (await req.json()) as Partial<ContactPayload>;
    const name = (body.name ?? '').toString().trim();
    const email = (body.email ?? '').toString().trim();
    const phone = (body.phone ?? '').toString().trim();
    const subject = (body.subject ?? '').toString().trim();
    const message = (body.message ?? '').toString().trim();

    if (!name || name.length > 200 || !isValidEmail(email) || !subject || subject.length > 300 || !message || message.length > 5000) {
      return new Response(JSON.stringify({ error: 'Ungültige Eingabe' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const html = `
      <h2>Neue Kontaktanfrage über fokusdemenz.at</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ''}
      <p><strong>Betreff:</strong> ${escapeHtml(subject)}</p>
      <hr />
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Kontakt] ${subject}`,
        html,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error('Resend error:', resendRes.status, resendData);
      return new Response(JSON.stringify({ error: 'Mail konnte nicht gesendet werden', details: resendData }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, id: resendData.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-contact-email error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
