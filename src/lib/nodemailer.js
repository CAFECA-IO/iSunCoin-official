import nodemailer from 'nodemailer';
import googleOAuth2Client from '@/lib/googleOAuth2Client';

async function createTransporter() {
  const { access_token: accessToken } = googleOAuth2Client.credentials;
  const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

  if (!accessToken || !refreshToken) {
    throw new Error('No access token or refresh token available');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Info: (20240809 - Julian) 發件人地址
      accessToken,
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
      refreshToken, // Info: (20240809 - Julian) 使用儲存的 refreshToken
    },
  });
}

export default createTransporter;
