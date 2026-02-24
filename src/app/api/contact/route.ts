import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({ message: 'Contact API is working' });
}

export async function POST(request: Request) {
  console.log('Contact API route called');
  try {
    const body = await request.json();
    console.log('Form data received:', body);

    const {
      name,
      company,
      email,
      phone,
      service,
      origin,
      destination,
      message
    } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and phone are required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin notification email
    const adminMailOptions = {
      from: `"Nisha Roadways" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || 'business@nisharoadways.com',
      subject: `New Contact Form Inquiry from ${name}${company ? ` - ${company}` : ''}`,
      text: `
        New Contact Form Submission
        -----------------------------------
        Name: ${name}
        Company: ${company || 'Not provided'}
        Email: ${email}
        Phone: ${phone}
        Service Interested In: ${service || 'Not specified'}
        Origin: ${origin || 'Not specified'}
        Destination: ${destination || 'Not specified'}
        
        Message:
        ${message || 'No message provided'}
        
        This inquiry was submitted through the Nisha Roadways contact form.
      `,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">Nisha Roadways</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">New Contact Form Inquiry</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p style="margin: 10px 0;"><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
              <p style="margin: 10px 0;"><strong>Origin:</strong> ${origin || 'Not specified'}</p>
              <p style="margin: 10px 0;"><strong>Destination:</strong> ${destination || 'Not specified'}</p>
            </div>
            
            ${message ? `
            <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1976d2; margin-top: 0;">Message</h3>
              <p style="color: #333; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            ` : ''}
            
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50;">
              <p style="margin: 0; color: #2e7d32;"><strong>Source:</strong> Contact Page Form</p>
            </div>
          </div>
        </div>
      `,
    };

    // Thank you email to user
    const thankYouMailOptions = {
      from: `"Nisha Roadways" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank You for Contacting Nisha Roadways`,
      text: `
        Dear ${name},

        Thank you for contacting Nisha Roadways! We have received your inquiry and appreciate your interest in our logistics services.

        Your Inquiry Details:
        ${company ? `Company: ${company}\n` : ''}
        Phone: ${phone}
        ${service ? `Service Interested In: ${service}\n` : ''}
        ${origin ? `Origin: ${origin}\n` : ''}
        ${destination ? `Destination: ${destination}\n` : ''}

        Our team will review your inquiry and get back to you within 24 hours with information about how we can support your logistics needs.

        Best regards,
        Nisha Roadways Team
        Email: business@nisharoadways.com
        Phone: 022 - 41632222
        +91 8976768608
        +91 8976768586
      `,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
          <div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 28px;">Nisha Roadways</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Your Trusted Logistics Partner</p>
            </div>
            
            <div style="padding: 30px;">
              <h2 style="color: #333; margin-top: 0;">Thank You for Your Inquiry!</h2>
              
              <p>Dear <strong>${name}</strong>,</p>
              
              <p>Thank you for reaching out to Nisha Roadways! We have successfully received your inquiry and appreciate your interest in our comprehensive logistics services.</p>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Your Inquiry Details:</h3>
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                <p><strong>Phone:</strong> ${phone}</p>
                ${service ? `<p><strong>Service Interested In:</strong> ${service}</p>` : ''}
                ${origin ? `<p><strong>Origin:</strong> ${origin}</p>` : ''}
                ${destination ? `<p><strong>Destination:</strong> ${destination}</p>` : ''}
              </div>
              
              <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; border-left: 4px solid #4caf50;">
                <h3 style="color: #2e7d32; margin-top: 0;">What Happens Next?</h3>
                <ol style="color: #333; line-height: 1.6; margin: 0; padding-left: 20px;">
                  <li>Our team will review your inquiry within 24 hours</li>
                  <li>We will contact you to understand your logistics requirements in detail</li>
                  <li>We will provide you with the best solution that suits your needs</li>
                  <li>You will receive competitive pricing and a detailed action plan</li>
                </ol>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; margin: 0;">Need immediate assistance?</p>
                <p style="color: #333; font-weight: bold; margin: 5px 0;">📞 022 - 41632222 | 📱 +91 8976768608 | +91 8976768586</p>
                <p style="color: #666; font-size: 14px;">📧 business@nisharoadways.com</p>
                <p style="color: #666; font-size: 12px; margin-top: 15px;">
                  909, Mayuresh cosmos, plot no 37, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(thankYouMailOptions);

    // Send data to Google Sheets (if configured)
    try {
      const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

      if (GOOGLE_APPS_SCRIPT_URL) {
        const sheetsResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name,
            companyName: company || '',
            email: email,
            phone: phone,
            service: service || '',
            origin: origin || '',
            destination: destination || '',
            message: message || '',
            source: 'Contact Page Form'
          }),
        });

        const sheetsResult = await sheetsResponse.json();
        console.log('Google Sheets response:', sheetsResult);
      } else {
        console.warn('Google Apps Script URL not configured');
      }
    } catch (sheetError) {
      console.error('Error sending data to Google Sheets:', sheetError);
      // Don't fail the entire request if Google Sheets fails
    }

    return NextResponse.json(
      { success: true, message: 'Thank you for your inquiry! We will contact you within 24 hours.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
