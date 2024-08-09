import googleOAuth2Client from '@/lib/googleOAuth2Client'; // 確保路徑正確

export default async function handler(req, res) {
  const { code } = req.query;

  if (code) {
    try {
      // Info: (20240809 - Julian) 使用授權碼交換 access_token 和 refresh_token
      const { tokens } = await googleOAuth2Client.getToken(code);

      // Info: (20240809 - Julian) 設置 Google 客戶端的憑據
      googleOAuth2Client.setCredentials(tokens);

      // Info: (20240809 - Julian) 可以在這裡儲存 tokens 或其他處理
      // eslint-disable-next-line no-console
      console.log('Access Token:', tokens.access_token);
      // eslint-disable-next-line no-console
      console.log('Refresh Token:', tokens.refresh_token);

      // Info: (20240809 - Julian) 回應成功消息
      // eslint-disable-next-line no-console
      res.status(200).json({ message: 'OAuth2 setup completed' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error exchanging token:', error);
      res.status(500).json({ message: 'Error exchanging token' });
    }
  } else {
    res.status(400).json({ message: 'Authorization code not provided' });
  }
}
