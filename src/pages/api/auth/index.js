import googleOAuth2Client from '@/lib/utils/google_o_auth_client';

export default async function handler(req, res) {
  // Info: (20240809 - Julian) 生成 Google 授權 URL
  const authUrl = googleOAuth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://mail.google.com/'],
    redirect_uri: process.env.REACT_APP_REDIRECT_URI, // Info: (20240809 - Julian) 使用 .env 中的 REACT_APP_REDIRECT_URI
  });

  res.redirect(authUrl);
}
