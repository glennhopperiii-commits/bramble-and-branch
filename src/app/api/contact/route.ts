import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Bramble & Branch <onboarding@resend.dev>',
      to: 'kerithhopper@gmail.com',
      reply_to: email,
      subject: `[Bramble & Branch] ${inquiryType || 'General'} inquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; color: #2e2a25;">
          <div style="border-bottom: 2px solid #adb89a; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 24px; font-weight: 400; margin: 0; color: #2e2a25;">
              Bramble <span style="color: #71805c;">&amp;</span> Branch
            </h1>
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #a1917c; margin: 4px 0 0;">
              New Inquiry
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd2; color: #71805c; font-size: 13px; width: 120px; vertical-align: top;">
                Name
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd2; font-size: 15px;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd2; color: #71805c; font-size: 13px; vertical-align: top;">
                Email
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd2; font-size: 15px;">
                <a href="mailto:${email}" style="color: #2e2a25;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd2; color: #71805c; font-size: 13px; vertical-align: top;">
                Regarding
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0dbd2; font-size: 15px;">
                ${inquiryType || 'Not specified'}
              </td>
            </tr>
          </table>

          <div style="margin-bottom: 32px;">
            <p style="color: #71805c; font-size: 13px; margin: 0 0 8px;">Message</p>
            <div style="background-color: #faf8f4; border: 1px solid #e0dbd2; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
              ${message}
            </div>
          </div>

          <div style="border-top: 1px solid #e0dbd2; padding-top: 16px; font-size: 12px; color: #a1917c;">
            Sent from the Bramble &amp; Branch website contact form
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
