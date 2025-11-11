import { DOMAIN_NAME, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@shared/config/env';
import axios from 'axios';
import qs from 'qs';

export async function handleGoogleOAuth(code: string) {
  const clientId = GOOGLE_CLIENT_ID;
  const clientSecret = GOOGLE_CLIENT_SECRET;
  const redirectUri = `${DOMAIN_NAME}/callback/google`;

  if (!clientId || !clientSecret) {
    throw new Error('Google OAuth client credentials are missing.');
  }

  const body = qs.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
  });

  const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', body, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  const { access_token, id_token } = tokenResponse.data;

  const userResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  return {
    ...userResponse.data,
    access_token,
    id_token,
  };
}
