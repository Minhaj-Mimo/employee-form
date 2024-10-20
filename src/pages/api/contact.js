import { Resend } from 'resend';
import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, birth_date, job_title, joining_date, bank_name, account_number } = req.body;

      // Resolve the path to your email template
      const templatePath = path.resolve('./public/emailTemplate.html');

      // Read the HTML file
      const emailTemplate = fs.readFileSync(templatePath, 'utf8');

      // Replace placeholders in the template with actual values (if needed)
      const personalizedEmail = emailTemplate
      .replace('{{name}}', name)
      .replace('{{email}}', email)
      .replace('{{phone}}', phone)
      .replace('{{birth_date}}', birth_date)
      .replace('{{job_title}}', job_title)
      .replace('{{joining_date}}', joining_date)
      .replace('{{bank_name}}', bank_name)
      .replace('{{account_number}}', account_number);

      // Send email using Resend
      const resend = new Resend(process.env.RESEND_API_KEY);
      const result = await resend.emails.send({
        from: 'Wenaas Workwear AS <onboarding@resend.dev>',
        to: [email], // Send to user's email
        subject: 'Informasjon om registrering av nye ansatte',
        html: personalizedEmail,  // Send the personalized HTML
      });

      // Send a response back to the client
      res.status(200).json({ success: true, result });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
