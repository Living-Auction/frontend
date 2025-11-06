'use server';

import axios from 'axios';
import { API_BASE_URL, BACKEND_INTERNAL_URL } from '@/shared/config/env';
import { getToken } from './token';

const baseURL = process.env.NODE_ENV === 'production' ? BACKEND_INTERNAL_URL : API_BASE_URL;

const server = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

server.interceptors.request.use(async (config) => {
  if (config.headers['X-Bypass-Authorization']) {
    return config;
  }

  const accessToken = await getToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

server.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { response, config } = error;

    if (response?.status === 401 && !config._retry) {
      config._retry = true;

      const refreshRes = await axios.post(
        `${baseURL}/auth/reissueToken`,
        {},
        { withCredentials: true },
      );
      const newAccessToken = refreshRes.data.accessToken;

      config.headers.Authorization = `Bearer ${newAccessToken}`;
      return server(config);
    }

    throw error;
  },
);

export default server;
