'use client';

import axios from 'axios';
import { API_BASE_URL } from '@/shared/config/env';
import { useTokenStore } from '@/shared/store/token';

const baseURL = API_BASE_URL;

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

client.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { response, config } = error;
    if (response?.status === 401 && !config._retry) {
      config._retry = true;

      try {
        const refreshRes = await axios.post(
          `${API_BASE_URL}/auth/reissueToken`,
          {},
          { withCredentials: true },
        );

        const newAccessToken = refreshRes.data.accessToken;

        useTokenStore.getState().setToken(newAccessToken);

        config.headers.Authorization = `Bearer ${newAccessToken}`;
        return client(config);
      } catch (refreshErr) {
        console.error(refreshErr);
        useTokenStore.getState().clearToken();
        window.location.href = '/signin';
      }
    }

    return Promise.reject(error);
  },
);

export default client;
