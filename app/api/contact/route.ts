import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Create transporter using SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

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
    await transporter.sendMail({
      from: `"HDS Website" <${process.env.SMTP_USER}>`,
      to: 'no-reply@hds.live',
      replyTo: email,
      subject: `New Contact Form: ${name} - ${propertyType || 'General Inquiry'}`,
      html: emailHtml,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Property Type: ${propertyType || 'Not specified'}

Message:
${message}

---
This message was sent from the contact form at www.hdsok.com
Reply to this email to respond directly to ${name}.
      `,
    });

    console.log('Contact form email sent successfully:', {
      to: 'no-reply@hds.live',
      from: name,
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Thank you for your message! We will get back to you as soon as possible.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending contact form email:', error);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try calling us at (405) 777-4156 or email no-reply@hds.live directly.' },
      { status: 500 }
    );
  }
}
