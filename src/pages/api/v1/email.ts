import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/lib/utils/email_sender';
import { DEFAULT_SUBJECT } from '@/constants/email';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'POST') {
    try {
      // Info: (20240819 - Julian) 設置環境變數
      const emailConfig = {
        service: process.env.EMAIL_SERVICE as string,
        auth: {
          user: process.env.EMAIL_USER as string,
          pass: process.env.EMAIL_PASSWORD as string,
        },
      };
      // Info: (20240819 - Julian) 設置郵件內容
      const emailBody = {
        receiver: process.env.EMAIL_RECEIVER as string,
        subject: DEFAULT_SUBJECT,
        comment: request.body.comment as string,
      };

      // Info: (20240819 - Julian) 發送郵件
      await sendEmail(emailConfig, emailBody);

      // Info: (20240819 - Julian) 回應成功
      response.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending email:', error);
      // Info: (20240819 - Julian) 回應失敗
      response.status(500).json({ success: false, message: 'Email sent failed' });
    }
  } else {
    // Info: (20240819 - Julian) 回應錯誤
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
