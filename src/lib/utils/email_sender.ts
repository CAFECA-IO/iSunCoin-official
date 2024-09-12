import nodemailer from 'nodemailer';
import { IEmailConfig, IEmailBody } from '@/interfaces/email';

export async function sendEmail(emailConfig: IEmailConfig, emailBody: IEmailBody) {
  /* Info: (20240819 - Julian) create gmail service */
  const transporter = nodemailer.createTransport(emailConfig);

  /* Info: (20240819 - Julian) 設定信件模板 */
  const mailOptions = {
    /* Info: (20240819 - Julian) 寄件地址 */
    from: emailConfig.auth.user,
    /* Info: (20240819 - Julian) 收信人 */
    to: emailBody.receiver,
    /* Info: (20240819 - Julian) 主旨 */
    subject: emailBody.subject,
    /* Info: (20240819 - Julian) plaintext body */
    text: emailBody.comment,
    /* Info: (20240819 - Julian) html body */
    html: `<p>${emailBody.comment}</p>`,
  };

  /* Info: (20240819 - Julian) send mail with defined transport object */
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw error;
    } else {
      return info.response;
    }
  });

  return { success: true };
}
