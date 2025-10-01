'use server';

import { cookies } from 'next/headers';

import { ACCESS_TOKEN } from '@/shared/config/env';

export const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(ACCESS_TOKEN)?.value || '';
};
