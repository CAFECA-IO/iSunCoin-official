import nodemailer from 'nodemailer';
import googleOAuth2Client from '@/lib/utils/google_o_auth_client';

async function createTransporter() {
  const { access_token: accessToken, refresh_token: refreshToken } = googleOAuth2Client.credentials;

  if (!accessToken || !refreshToken) {
    // ToDo: (20240809 - Julian) 為何沒拿到 refreshToken？
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
