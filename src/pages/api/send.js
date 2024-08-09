import createTransporter from '@/lib/nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const transporter = await createTransporter();

      await transporter.sendMail(req.body);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
