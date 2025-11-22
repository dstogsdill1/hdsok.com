import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, propertyType, serviceType, priority, location, description } = body;

    // Validate required fields
    if (!name || !email || !phone || !propertyType || !serviceType || !priority || !location || !description) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if Postmark token is configured
    if (!process.env.POSTMARK_SERVER_TOKEN) {
      console.error('Postmark token not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please call us at (405) 777-4156' },
        { status: 500 }
      );
    }

    // Resolve sender and recipient configuration
    const fromEmail = process.env.POSTMARK_FROM_EMAIL || 'no-reply@hds.live';
    const recipientEmails = [
      process.env.CONTACT_FORM_EMAIL,
      process.env.ONBOARDING_NOTIFICATION_EMAIL
    ].filter((value, index, self) => value && self.indexOf(value) === index);

    if (recipientEmails.length === 0) {
      console.error('No recipient email configured for service requests');
      return NextResponse.json(
        { error: 'Email routing is not configured. Please call us at (405) 777-4156.' },
        { status: 500 }
      );
    }

    // Priority badge styling
    const priorityColors = {
      emergency: '#ef4444',
      urgent: '#f59e0b',
      normal: '#10b981',
    };

    const priorityColor = priorityColors[priority as keyof typeof priorityColors] || '#10b981';

    // Email HTML content
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); color: #b8ff00; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { margin: 0; font-size: 28px; }
          .priority-badge { display: inline-block; padding: 8px 16px; background: ${priorityColor}; color: white; border-radius: 20px; font-weight: bold; margin-top: 10px; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #dee2e6; }
          .field-label { font-weight: bold; color: #495057; margin-bottom: 5px; }
          .field-value { color: #212529; }
          .service-type { background: #b8ff00; color: #0a0a0a; padding: 10px 15px; border-radius: 5px; font-weight: bold; display: inline-block; margin-top: 5px; }
          .description-box { background: white; padding: 15px; border-left: 4px solid #b8ff00; border-radius: 4px; margin-top: 10px; }
          .footer { text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔧 New Service Request</h1>
            <div class="priority-badge">${priority.toUpperCase()} PRIORITY</div>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">Service Type</div>
              <div class="service-type">${serviceType.toUpperCase()}</div>
            </div>

            <div class="field">
              <div class="field-label">Contact Name</div>
              <div class="field-value">${name}</div>
            </div>

            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${email}">${email}</a></div>
            </div>

            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
            </div>

            ${company ? `
            <div class="field">
              <div class="field-label">Company</div>
              <div class="field-value">${company}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="field-label">Property Type</div>
              <div class="field-value">${propertyType}</div>
            </div>

            <div class="field">
              <div class="field-label">Location</div>
              <div class="field-value">${location}</div>
            </div>

            <div class="field">
              <div class="field-label">Service Description</div>
              <div class="description-box">${description.replace(/\n/g, '<br>')}</div>
            </div>
          </div>

          <div class="footer">
            <p>This service request was submitted from www.hdsok.com</p>
            <p>Please respond to the customer within 24 hours</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email via Postmark API
    console.log('Sending service request email via Postmark');
    console.log('Postmark token available:', !!process.env.POSTMARK_SERVER_TOKEN);
    console.log('From:', fromEmail);
    console.log('To:', recipientEmails);
    
    const postmarkResponse = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': process.env.POSTMARK_SERVER_TOKEN,
      },
      body: JSON.stringify({
        From: fromEmail,
        To: recipientEmails.join(','),
        Subject: `🔧 Service Request - ${priority.toUpperCase()} - ${serviceType}`,
        HtmlBody: htmlBody,
        TextBody: `New Service Request

Service Type: ${serviceType}
Priority: ${priority.toUpperCase()}

Contact Information:
Name: ${name}
Email: ${email}
Phone: ${phone}
${company ? `Company: ${company}` : ''}

Property Type: ${propertyType}
Location: ${location}

Service Description:
${description}

---
This service request was submitted from www.hdsok.com
Please respond to the customer within 24 hours.`,
        ReplyTo: email,
        MessageStream: 'outbound',
      }),
    });

    if (!postmarkResponse.ok) {
      const errorData = await postmarkResponse.json();
      console.error('Postmark API error:', errorData);
      console.error('Postmark response status:', postmarkResponse.status);
      console.error('Postmark response headers:', Object.fromEntries(postmarkResponse.headers.entries()));

      if (errorData?.ErrorCode === 406 || /inactive/i.test(errorData?.Message || '')) {
        return NextResponse.json(
          { error: 'The recipient mailbox is currently disabled or suppressed. Please call us at (405) 777-4156 while we resolve the issue.' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: `Email service error: ${errorData.Message || 'Unknown error'}. Please call us at (405) 777-4156.` },
        { status: 500 }
      );
    }

    const result = await postmarkResponse.json();
    console.log('Service request email sent successfully via Postmark:', result);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Service request submission error:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { error: 'Failed to submit service request. Please try again or call us at (405) 777-4156.' },
      { status: 500 }
    );
  }
}
