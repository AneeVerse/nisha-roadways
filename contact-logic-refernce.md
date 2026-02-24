import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({ message: 'Contact API is working' });
}

export async function POST(request: Request) {
  console.log('API route called');
  try {
    const body = await request.json();
    console.log('Form data received:', body);

    // Handle different form structures
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      phone,
      subject,
      message,
      // Birth certificate specific fields
      name,
      state,
      certificateType,
      birthYear
    } = body;

    // Determine form type and extract relevant data
    const isNameChangeForm = firstName && lastName;
    const isBirthCertificateForm = name && !firstName;

    let formData;
    if (isNameChangeForm) {
      formData = {
        name: `${firstName} ${lastName || ''}`.trim(),
        email,
        phone: phoneNumber || phone,
        subject: subject || 'Name Change Inquiry',
        message: message || 'Name change consultation request'
      };
    } else if (isBirthCertificateForm) {
      formData = {
        name,
        email,
        phone,
        subject: `Birth Certificate - ${certificateType || 'General Inquiry'}`,
        message: message || `Birth certificate request for ${state || 'unspecified state'}, birth year: ${birthYear || 'not provided'}`
      };
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid form data structure' },
        { status: 400 }
      );
    }

    // Basic validation
    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
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
      from: `"Rocket Pass Services" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact: ${formData.subject}`,
      text: `
        New Contact Form Submission
        --------------------------
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Subject: ${formData.subject}
        
        ${isBirthCertificateForm ? `
        Certificate Type: ${certificateType || 'Not specified'}
        State: ${state || 'Not specified'}
        Birth Year: ${birthYear || 'Not specified'}
        ` : ''}
        
        Message:
        ${formData.message}
      `,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          ${isBirthCertificateForm ? `
          <p><strong>Certificate Type:</strong> ${certificateType || 'Not specified'}</p>
          <p><strong>State:</strong> ${state || 'Not specified'}</p>
          <p><strong>Birth Year:</strong> ${birthYear || 'Not specified'}</p>
          ` : ''}
          <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    // Thank you email to user
    const serviceType = isBirthCertificateForm ? 'Birth Certificate' : 'Passport Services';
    const thankYouMailOptions = {
      from: `"Rocket Pass Services" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: `Thank You for Contacting Rocket Pass Services - ${serviceType}`,
      text: `
        Dear ${formData.name},

        Thank you for contacting Rocket Pass Services! We have received your ${serviceType.toLowerCase()} inquiry and appreciate your interest in our services.

        Your Message Details:
        Subject: ${formData.subject}
        Message: ${formData.message}

        Our team will review your inquiry and get back to you within 24-48 hours. If you have any urgent questions, please feel free to call us.

        Best regards,
        Rocket Pass Services Team
        Email: ${process.env.EMAIL_USER}
      `,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #dc2626; margin: 0;">Rocket Pass Services</h1>
              <p style="color: #666; margin: 5px 0;">Your Trusted Passport Partner</p>
            </div>
            
            <h2 style="color: #dc2626;">Thank You for Contacting Us!</h2>
            
            <p>Dear <strong>${formData.name}</strong>,</p>
            
            <p>Thank you for reaching out to Rocket Pass Services! We have successfully received your <strong>${serviceType.toLowerCase()}</strong> inquiry and appreciate your interest in our services.</p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #dc2626; margin-top: 0;">Your Inquiry Details:</h3>
              <p><strong>Subject:</strong> ${formData.subject}</p>
              <p><strong>Message:</strong> ${formData.message}</p>
            </div>
            
            <div style="background: #e8f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <h3 style="color: #dc2626; margin-top: 0;">What Happens Next?</h3>
              <ul style="color: #333; line-height: 1.6;">
                <li>Our expert team will review your inquiry within 24-48 hours</li>
                <li>We'll contact you with personalized guidance for your passport needs</li>
                <li>We'll provide you with a detailed plan and timeline</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 0;">Need immediate assistance?</p>
              <p style="color: #dc2626; font-weight: bold; margin: 5px 0;">Call us or WhatsApp: +91 70210 15803</p>
              <p style="color: #666; font-size: 14px;">Email: ${process.env.EMAIL_USER}</p>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
              <p style="color: #999; font-size: 12px;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(thankYouMailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}