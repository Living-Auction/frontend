import client from '@shared/api/client';
import type { AxiosError } from 'axios';

export const syncUserToDB = async (user: GoogleUser) => {
  try {
    const res = await client.post('/auth/oauthLogin', {
      email: user.email,
      picture: user.picture,
      provider: 'google',
      providerId: user.sub,
    });

    if (res.status >= 200 && res.status < 300) {
      console.log('User sync success:', res.status);
      return res.data;
    } else {
      console.error('Unexpected response:', res.status);
      throw new Error(`Unexpected status code: ${res.status}`);
    }
  } catch (error) {
    const err = error as AxiosError;
    console.error('User sync failed:', {
      status: err.response?.status,
      data: err.response?.data,
      headers: err.response?.headers,
      url: err.config?.url,
    });
    throw new Error('서버와의 동기화에 실패했습니다.');
  }
};
