import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/lib/utils/email_sender';
import { DEFAULT_SUBJECT } from '@/constants/email';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'POST') {
    try {
      const emailConfig = {
        service: process.env.EMAIL_SERVICE as string,
        auth: {
          user: process.env.EMAIL_USER as string,
          pass: process.env.EMAIL_PASSWORD as string,
        },
      };
      const emailBody = {
        receiver: process.env.EMAIL_RECEIVER as string,
        subject: DEFAULT_SUBJECT,
        comment: request.body.comment as string,
      };

      sendEmail(emailConfig, emailBody);

      response.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending email:', error);
      response.status(500).json({ success: false, message: 'Email sent failed' });
    }
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
