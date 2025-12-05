import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const config = {
      hasSmtpHost: !!process.env.SMTP_HOST,
      hasSmtpPort: !!process.env.SMTP_PORT,
      hasSmtpUser: !!process.env.SMTP_USER,
      hasSmtpPass: !!process.env.SMTP_PASS,
      hasContactEmail: !!process.env.CONTACT_FORM_EMAIL,
      smtpHost: process.env.SMTP_HOST ? '✓ Set' : '✗ Missing',
      smtpPort: process.env.SMTP_PORT ? '✓ Set' : '✗ Missing',
      smtpUser: process.env.SMTP_USER ? '✓ Set' : '✗ Missing',
      smtpPass: process.env.SMTP_PASS ? '✓ Set' : '✗ Missing',
      contactEmail: process.env.CONTACT_FORM_EMAIL ? '✓ Set' : '✗ Missing',
    };

    return NextResponse.json(config, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
