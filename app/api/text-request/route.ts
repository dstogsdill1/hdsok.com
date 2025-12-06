import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required.' },
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

    const fromEmail = process.env.POSTMARK_FROM_EMAIL || 'no-reply@hds.live';
    // Use the same recipients as contact form
    const recipientEmails = [
      process.env.CONTACT_FORM_EMAIL,
      process.env.ONBOARDING_NOTIFICATION_EMAIL
    ].filter((value, index, self) => value && self.indexOf(value) === index);

    if (recipientEmails.length === 0) {
      // Fallback if no env vars
      recipientEmails.push('info@hdsok.com');
    }

    // Prepare email payload for Postmark
    const emailPayload = {
      From: fromEmail,
      To: recipientEmails.join(','),
      Subject: `💬 New Text Request from ${name}`,
      HtmlBody: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #c6ff00; background-color: #000; padding: 15px; margin-top: 0; border-radius: 5px 5px 0 0;">New Text Request</h2>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #c6ff00; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <p style="font-size: 12px; color: #666; margin-top: 20px;">
              This message was sent via the "Text Now" form on hdsok.com.
              Please respond via SMS to the phone number provided.
            </p>
          </div>
        </div>
      `,
      TextBody: `
        New Text Request
        
        Name: ${name}
        Phone: ${phone}
        
        Message:
        ${message}
        
        Please respond via SMS to the phone number provided.
      `,
      MessageStream: 'outbound'
    };

    // Send to Postmark
    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': process.env.POSTMARK_SERVER_TOKEN
      },
      body: JSON.stringify(emailPayload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Postmark API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send message.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error processing text request:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
