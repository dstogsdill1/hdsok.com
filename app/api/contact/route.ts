import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, propertyType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Check if Postmark token is configured
    if (!process.env.POSTMARK_SERVER_TOKEN) {
      console.error('Postmark token not configured');
      return NextResponse.json(
        { error: 'Email service not configured.' },
        { status: 500 }
      );
    }

    // Email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #b8ff00; padding: 20px; text-align: center; }
            .header h1 { margin: 0; color: #1a1a1a; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; }
            .footer { margin-top: 20px; padding: 15px; background-color: #1a1a1a; color: #b8ff00; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              ${phone ? `
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value"><a href="tel:${phone}">${phone}</a></span>
              </div>
              ` : ''}
              ${company ? `
              <div class="field">
                <span class="label">Company:</span>
                <span class="value">${company}</span>
              </div>
              ` : ''}
              ${propertyType ? `
              <div class="field">
                <span class="label">Property Type:</span>
                <span class="value">${propertyType}</span>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #b8ff00;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Homeland Development Services, LLC</p>
              <p>This message was sent from the contact form at www.hdsok.com</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    // Send email via Postmark API
    const postmarkResponse = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': process.env.POSTMARK_SERVER_TOKEN,
      },
      body: JSON.stringify({
        From: 'no-reply@hdsok.com',
        To: process.env.CONTACT_FORM_EMAIL || 'no-reply@hdsok.com',
        ReplyTo: email,
        Subject: `New Contact Form: ${name} - ${propertyType || 'General Inquiry'}`,
        HtmlBody: emailHtml,
        TextBody: `New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Property Type: ${propertyType || 'Not specified'}

Message:
${message}

---
This message was sent from the contact form at www.hdsok.com
Reply to this email to respond directly to ${name}.`,
        MessageStream: 'outbound',
      }),
    });

    if (!postmarkResponse.ok) {
      const errorData = await postmarkResponse.json();
      console.error('Postmark API error:', errorData);
      throw new Error(`Postmark API error: ${errorData.Message || 'Unknown error'}`);
    }

    const result = await postmarkResponse.json();
    console.log('Contact form email sent successfully via Postmark:', result);

    return NextResponse.json(
      { success: true, message: 'Thank you for your message! We will get back to you as soon as possible.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending contact form email:', error);
    return NextResponse.json(
      { error: `Failed to send your message. Please try calling us or email ${process.env.CONTACT_FORM_EMAIL || 'no-reply@hdsok.com'} directly.` },
      { status: 500 }
    );
  }
}