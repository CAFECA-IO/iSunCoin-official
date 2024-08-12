import { google } from 'googleapis';

const googleOAuth2Client = new google.auth.OAuth2(
  process.env.REACT_APP_GOOGLE_CLIENT_ID,
  process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  process.env.REACT_APP_REDIRECT_URI
);

export default googleOAuth2Client;
