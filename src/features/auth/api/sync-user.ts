import client from '@shared/api/client';
import type { AxiosError } from 'axios';

export const syncUserToDB = async (user: GoogleUser) => {
  try {
    const res = await client.post('/users/oauth', {
      email: user.email,
      name: user.name,
      picture: user.picture,
      provider: 'google',
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
    console.error('User sync failed:', err.response?.data || err.message);
    throw new Error('서버와의 동기화에 실패했습니다.');
  }
};
