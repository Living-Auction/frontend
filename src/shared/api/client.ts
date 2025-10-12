'use client';

import axios from 'axios';
import { API_BASE_URL } from '@/shared/config/env';
import { useTokenStore } from '@/shared/store/token';

const baseURL = process.env.NODE_ENV === 'development' ? '/client' : API_BASE_URL;

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

client.interceptors.request.use((config) => {
  if (config.headers['X-Bypass-Authorization']) {
    return config;
  }

  const { token } = useTokenStore.getState();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

export default client;
